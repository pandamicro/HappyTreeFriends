
cc.Class({
    extends: cc.Component,

    properties: {
        blockPrefab: cc.Prefab,
        blockWidth: 20,
        blockHeight: 20,
        _pool: null,
        _config: null,
        _timer: 0,
        _blockCount: 0,
    },

    // use this for initialization
    onLoad: function () {
        cc.director.setClearColor(cc.color(255, 255, 255, 255));
        this._config = cc.find('Canvas').getComponent('Config');
        this._timer = 0;

        var width = cc.winSize.width,
            height = cc.winSize.height,
            bw = this.blockWidth,
            bh = this.blockHeight,
            rows = this._rows = (height / bh) | 0,
            cols = this._cols = (width / bw) | 0;

        // Temporary data initialisation
        this._datas = new Int32Array( rows * cols );

        this._blocks = new Array( rows * cols );
        var color = cc.color();
        var i, x, y, block, data, prefab = this.blockPrefab;
        for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
                i = r * cols + c;
                data = this._datas[i];
                // if (data <= 0) {
                if (data < 0) {
                    continue;
                }
                x = c * bw;
                y = (rows - 1 - r) * bh;
                block = this._blocks[i] = cc.instantiate(prefab);
                block.x = x;
                block.y = y;
                color.r = parseInt(Math.random() * 25);
                color.g = 200 + parseInt(Math.random() * 56);
                color.b = parseInt(Math.random() * 70);
                block.color = color;
                block.parent = this.node;
                this._blockCount++;
            }
        }
    },

    eatBlock: function (wrom) {
        var col = Math.round(wrom.x / this.blockWidth);
        var row = this._rows - 1 - Math.floor(wrom.y / this.blockHeight);
        var i = row * this._cols + col;
        var block = this._blocks[i];
        if (block) {
            block.parent = null;
            this._blockCount--;
        }
        this._datas[i] = 0;
    },

    growBlock: function (i) {
        if (this._datas[i] > 0 && this._blocks[i]) {
            var block = this._blocks[i];
            block.parent = this.node;
            this._blockCount++;
        }
        this._datas[i] = 1;
    },

    // called every frame, uncomment this function to activate update callback
    update (dt) {
        this._timer += dt;
        if (this._timer > this._config.growRate) {
            this._timer = 0;
        }
    },
});
