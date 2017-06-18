
var datas = require('data');

cc.Class({
    extends: cc.Component,

    properties: {
        blockPrefab: cc.Prefab,
        blockWidth: 20,
        blockHeight: 20,
        blockAtlas: cc.SpriteAtlas,
        _emptyBlocks: [],
        _config: null,
        _timer: 0,
        _frames: null
    },

    // use this for initialization
    onLoad: function () {
        cc.director.setClearColor(cc.color(255, 255, 255, 255));
        this._config = cc.find('Canvas').getComponent('Config');
        this._timer = 0;

        this._frames = {
            1: this.blockAtlas.getSpriteFrame(1),
            2: this.blockAtlas.getSpriteFrame(2)
        };

        var width = cc.winSize.width,
            height = cc.winSize.height,
            bw = this.blockWidth,
            bh = this.blockHeight,
            rows = this._rows = (height / bh) | 0,
            cols = this._cols = (width / bw) | 0;

        this._blocks = new Array(rows * cols);
        var color = cc.color();
        var i, x, y, block, data, prefab = this.blockPrefab;
        for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
                i = r * cols + c;
                data = datas[i];
                if (data <= 0) {
                    continue;
                }
                x = c * bw;
                y = (rows - 1 - r) * bh;
                block = this._blocks[i] = cc.instantiate(prefab);
                block.getComponent(cc.Sprite).spriteFrame = this._frames[data];
                block.x = x;
                block.y = y;
                if (data === 1) {
                    color.r = 30 + (Math.random() * 30) | 0;
                    color.g = 100 + (Math.random() * 50) | 0;
                    color.b = (Math.random() * 20) | 0;
                }
                else if (data === 2) {
                    color.r = 200 + (Math.random() * 56) | 0;
                    color.g = 150 + (Math.random() * 30) | 0;
                    color.b = 50 + (Math.random() * 50) | 0;
                }
                block.color = color;
                block.opacity = 200;
                block.parent = this.node;
            }
        }
    },

    eatBlock: function (x, y, radius) {
        var col = Math.round(x / this.blockWidth);
        var row = this._rows - 1 - Math.floor(y / this.blockHeight);
        var i, block;
        var count = 0;

        if (radius > 0) {
            var nr = ((radius / this.blockHeight) | 0);
            var nc = ((radius / this.blockWidth) | 0);
            var rstart = row - nr, rend = row + nr;
            for (var r = rstart; r < rend; r++) {
                var half = nc * (nr - Math.abs(r - row)) / nr;
                var cstart = col - half;
                var cend = col + half;
                for (var c = cstart; c < cend; c++) {
                    i = r * this._cols + c;
                    block = this._blocks[i];
                    if (block && datas[i] > 0) {
                        block.parent = null;
                        this._emptyBlocks.push(i);
                        datas[i] = 0;
                        count++;
                    }
                }
            }
        }

        i = row * this._cols + col;
        block = this._blocks[i];
        if (block && datas[i] > 0) {
            block.parent = null;
            this._emptyBlocks.push(i);
            datas[i] = 0;
            count++;
        }
        return count;
    },

    growBlock: function (i) {
        if (datas[i] === 0 && this._blocks[i]) {
            var block = this._blocks[i];
            block.getComponent(cc.Animation).play('showBlock');
            block.parent = this.node;
            datas[i] = 1;
        }
    },

    recover: function (count) {
        count = Math.min(count, this._emptyBlocks.length)
        for (var i = 0; i < count; ++i) {
            var index = (this._emptyBlocks.length * Math.random()) | 0;
            this.growBlock(this._emptyBlocks[index]);
            this._emptyBlocks[index] = this._emptyBlocks[this._emptyBlocks.length - 1];
            this._emptyBlocks.length--;
        }
    },

    delayRecover: function (time, count) {
        var self = this;
        this.scheduleOnce(() => self.recover(count), time);
    },

    reset: function () {
        for (var i = 0; i < this._emptyBlocks.length; ++i) {
            this.growBlock(this._emptyBlocks[i]);
        }
        this._emptyBlocks.length = 0;
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this._timer += dt;
        if (this._timer > this._config.growRate) {
            this._timer = 0;
            if (this._emptyBlocks.length / (this._rows * this._cols) > this._config.beginGrow) {
                this.recover(this._config.growCount);
            }
        }
    },
});
