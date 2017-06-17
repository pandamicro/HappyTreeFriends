var Map = require('Map');

cc.Class({
    extends: cc.Component,

    properties: {
        display: cc.Sprite,
        level: 0,
        nameLabel: cc.Label,
        _map: null,
        _config: null,
        _netPlayer: null,
        _speed: 10,
        _eatTime: 3,
        _orientation: 0,
        _timer: 0,
        _moving: false,
        _inited: false
    },

    onLoad () {
        this._config = cc.find('Canvas').getComponent('Config');
        this._map = cc.find('Canvas/Map').getComponent(Map);
    },

    init (name, netPlayer, map) {
        this.nameLabel.string = name;
        this._netPlayer = netPlayer;
        this._map = map;

        var rect = this._config.birthRect;
        this.node.x = rect.x + (Math.random() * rect.width) | 0;
        this.node.y = rect.y + (Math.random() * rect.height) | 0;

        this.initControl();
    },

    onEnable () {
        this.level = 0;
        this._speed = Config.defaultSpeed;
        this._eatTime = Config.eatTime;
        this._orientation = 0;
        this._moving = false;

        this.testControl();
        if (this._netPlayer && !this._inited) {
            this.initControl();
        }
    },

    onDisable () {
        this._netPlayer.removeAllListeners();
        this._inited = false;
    },

    initControl () {
        if (this._inited) {
            return;
        }
        var self = this;
        this._netPlayer.addEventListener('moving', function (orientation) {
            if (!self._moving) {
                self._moving = true;
                self._timer = 0;
            }
            self._orientation = orientation;
        });
        this._netPlayer.addEventListener('stop', function () {
            self._moving = false;
        });
        this._inited = true;
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
            if (!this._moving) {
                this._moving = true;
                this._timer = 0;
            }
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

            this._timer += dt;
            if (this._timer > this._eatTime) {
                this._map.eatBlock(this.node);
                this._timer = 0;
            }
        }
    },
});
