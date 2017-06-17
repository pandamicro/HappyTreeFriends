"use strict";

// Start the main app logic.
const hft = require('hft');
const GameServer = hft.GameServer;
const Map = require('Map');

cc.Class({
    extends: cc.Component,
    properties: {
        map: Map,
        wromsNode: cc.Node,
        wromPrefab: cc.Prefab,
        _wroms: null,

        timerNode: cc.Node,
        _time: 0,

        rankView: { default: null, type: cc.ScrollView },
        rankPrefab: { default: null, type: cc.Prefab },
        _rankTime: 0
    },

    onLoad() {
        this._wroms = new Array(20);
        this.initServer();
    },

    initServer() {
        var server = new GameServer();
        // A new player has arrived.
        var self = this;
        self.wromsNode.removeAllChildren();
        server.addEventListener('playerconnect', function (netPlayer, name) {
            let wrom = cc.instantiate(self.wromPrefab).getComponent('Wrom');
            wrom.init(name, netPlayer, self.map);
            self.wromsNode.addChild(wrom.node);
            self._wroms.push(wrom);
        });
        this._time = this.getComponent('Config').battleTime;

        // 排行榜
        this.rankView.content.removeAllChildren();
        for (var i = 0; i < this.getComponent('Config').rankSize; ++i) {
            var r = cc.instantiate(this.rankPrefab);
            r.y = - 25 - 40 * i;
            r.getChildByName('rank').getComponent(cc.Label).string = i + 1;
            r.active = false;
            this.rankView.content.addChild(r);
        }
    },

    update(dt) {
        // 更新计时器
        this._time -= dt;
        if (this._time <= 0) {//结算时间
            this._time = this.getComponent('Config').battleTime;
        }
        var t = Math.floor(this._time);
        this.timerNode.getComponent(cc.Label).string = '0' + Math.floor(t / 60) + ":" + t % 60;

        this._rankTime += dt;
        if (this._rankTime >= 1) {
            this._rankTime = 0;
            // 更新排行榜
            this._wroms.sort((o1, o2) => { return o1.score - o2.score })
            for (var i = 0; i < this.getComponent('Config').rankSize; ++i) {
                var w = this._wroms[i];
                var r = this.rankView.content.children[i];
                if(w){
                    r.active = true;
                    r.getChildByName('name').getComponent(cc.Label).string = w.nameLabel.string;
                    r.getChildByName('score').getComponent(cc.Label).string = w.score + 1;
                } else {
                    r.active = false;
                }
            }
        }
    },

    pickRandomPosition() {

    }
});