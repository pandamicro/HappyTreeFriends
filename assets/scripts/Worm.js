var Map = require('Map');

cc.Class({
    extends: cc.Component,

    properties: {
        display: cc.Sprite,
        level: 0,
        _map: Map,
        _speed: 10,
        _orientation: 0,
        _moving: false
    },

    // use this for initialization
    onLoad () {
        this._map = cc.find('Canvas/Map').getComponent(Map);
    },

    onEnable () {
        this.level = 0;
        this._speed = cc.find('Canvas').getComponent('Config').defaultSpeed;
        this._orientation = 0;
        this._moving = false;

        this.testControl();
    },

    testControl () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
            switch (event.keyCode) {
                case cc.KEY.up:
                this._orientation = 90;
                break;
                case cc.KEY.down:
                this._orientation = 270;
                break;
                case cc.KEY.left:
                this._orientation = 180;
                break;
                case cc.KEY.right:
                this._orientation = 0;
                break;
                default:
                this._moving = false;
                return;
            }
            this._moving = true;
        }, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function (event) {
            this._moving = false;
        }, this);
    },

    // called every frame, uncomment this function to activate update callback
    update (dt) {
        if (this._moving) {
            var radian = Math.PI * this._orientation / 180;
            var dx = this._speed * Math.cos(radian);
            var dy = this._speed * Math.sin(radian);
            this.node.x += dx;
            this.node.y += dy;

            this._map.eatBlock(this.node);
        }
    },
});
