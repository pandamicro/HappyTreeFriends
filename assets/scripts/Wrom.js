"use strict";

const hft = require('hft');
const sampleUI = require('hft-sample-ui');
const PlayerNameManager = sampleUI.PlayerNameManager;

cc.Class({
    extends: cc.Component,

    properties: {
        display: cc.Node,
        score: 0,
        nameLabel: cc.Label,
        atlas: cc.SpriteAtlas,
        netPlayer: null,
        eatRadius: 0,
        attacking: false,
        _game: null,
        _map: null,
        _fruit: null,
        _config: null,
        _speed: 10,
        _eatTime: 3,
        _orientation: 0,
        _timer: 0,
        _moving: false,
        _inited: false,
        _playerNameManager: null,

        expAudio: {
            url: cc.AudioClip,
            default: null
        },
        hitAudio: {
            url: cc.AudioClip,
            default: null
        },
        pickupAudio: {
            url: cc.AudioClip,
            default: null
        },
    },

    onLoad() {
        if (!this._map) {
            this._map = cc.find('Canvas/Map').getComponent('Map');
        }
        if (!this._config) {
            this._config = cc.find('Canvas').getComponent('Config');
        }
        var frame = 'bugggg' + ((Math.random() * 8) | 0 + 1);
        this.display.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame(frame);
    },

    init(name, netPlayer, game) {
        this.nameLabel.string = name;
        this.netPlayer = netPlayer;
        this._playerNameManager = new PlayerNameManager(netPlayer);
        this._game = game;
        this._map = game.map;
        this._fruit = null;
        this._config = cc.find('Canvas').getComponent('Config');

        var rect = this._config.birthRect;
        this.node.x = rect.x + (Math.random() * rect.width) | 0;
        this.node.y = rect.y + (Math.random() * rect.height) | 0;

        this.initControl();
    },

    onEnable() {
        this._speed = this._config.defaultSpeed;
        this._eatTime = this._config.eatTime;
        this._orientation = 0;
        this._moving = false;

        // this.testControl();
        if (this.netPlayer && this.netPlayer.isConnected() && !this._inited) {
            this.initControl();
        }
    },

    onDisable() {
        this.netPlayer.sendCmd('waitForNextGame');
        this.netPlayer.removeAllListeners();
        this._inited = false;
    },

    initControl() {
        if (this._inited) {
            return;
        }

        var netPlayer = this.netPlayer;
        netPlayer.on('disconnect', this.handleDisconnection.bind(this));
        netPlayer.on('pad', this.handlePad.bind(this));
        netPlayer.on('abutton', this.handleTrigger.bind(this));
        netPlayer.on('show', this.handleShowMsg.bind(this));
        this._playerNameManager.on('setName', this.handleNameMsg.bind(this));
        // this.playerNameManager.on('busy', this.handleBusyMsg.bind(this));

        this._inited = true;
    },

    handlePad(event) {
        if (!event || isNaN(event.radian)) {
            this._moving = false;
            return;
        }
        if (event.dir >= 0) {
            if (!this._moving) {
                this._moving = true;
                this._timer = 0;
            }
            this._orientation = event.radian;
            this.display.rotation = 360 - 180 * event.radian / Math.PI;
        }
        else {
            this._moving = false;
        }
    },

    handleDisconnection(event) {
        this.node.removeFromParent(true);
    },

    handleTrigger(event) {
        if (this._fruit && this._fruit.controlTrigger) {
            this._fruit.controlTrigger();
        }
    },

    handleShowMsg(event) {
        console.log(event);
    },

    handleNameMsg(name) {
        if (name) {
            var oldname = this.nameLabel.string;
            this.nameLabel.string = name;
            this._game.changeWromName(oldname, name);
        }
    },

    testControl() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
            switch (event.keyCode) {
                case cc.KEY.up:
                    this._orientation = Math.PI * 90 / 180;
                    break;
                case cc.KEY.down:
                    this._orientation = Math.PI * 270 / 180;
                    break;
                case cc.KEY.left:
                    this._orientation = Math.PI;
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
    update(dt) {
        if (this._moving) {
            var dx = this._speed * Math.cos(this._orientation);
            var dy = this._speed * Math.sin(this._orientation);
            this.node.x += dx;
            this.node.y += dy;

            if (this.node.x < 20 || this.node.x > cc.winSize.width - 20) {
                this.node.x -= dx;
            }
            if (this.node.y < 220 || this.node.y > cc.winSize.height - 20) {
                this.node.y -= dy;
            }

            this._timer += dt;
            if (this._timer > this._eatTime) {
                var ate = this._map.eatBlock(this.node.x, this.node.y, this.eatRadius);
                this.score += ate;
                this._timer = 0;
                this._eatTime = this._config.eatTime + ((Math.random() * 5 - 2) | 0) / 100;
            }
        }
    },

    removeFruit() {
        if (this._fruit) {
            var fruit = this._fruit;
            this._fruit = null;
            fruit.end();
            this.node.removeComponent(fruit);
        }
    },

    die() {
        this.removeFruit();
        this.netPlayer.sendCmd('died');
        this.node.parent = null;
        this.deadTime = 0;
        this._game.onWromDie(this.node);
        var lost = this._config.recoverOnDeath * this.score;
        this._score -= lost;
        this._map.delayRecover(1, lost);
    },

    isdead() {
        return this.node.parent == null
    },

    rebirth() {
        if (this.parent == null)
            this.node.parent = this._game.wromsNode;

        this.removeFruit();

        var rect = this._config.birthRect;
        this.node.x = rect.x + (Math.random() * rect.width) | 0;
        this.node.y = rect.y + (Math.random() * rect.height) | 0;

        if (!this.enabled) {
            this.enabled = true;
        }
        else if (this.netPlayer && this.netPlayer.isConnected() && !this._inited) {
            this.initControl();
        }

        this.netPlayer.sendCmd('start');
    }
});
