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
        _running: true,

        rankView: { default: null, type: cc.ScrollView },
        rankPrefab: { default: null, type: cc.Prefab },
        _rankTime: 0,
        
        settlePrefab: cc.Prefab,

        graveyard:cc.Node, //墓地
        ripPrefab: cc.Prefab, //墓碑
    },

    onLoad() {
        this._wroms = {};
        cc.view.enableAntiAlias(false);
        this.initServer();
    },

    getWrom (netPlayer, name) {
        var wrom = this._wroms[name];
        if (wrom && wrom.isConnected()) {
            wrom = cc.instantiate(this.wromPrefab).getComponent('Wrom');
            name = name + '2';
            this._wroms[name] =  wrom;
        }
        else if (!wrom) {
            wrom = cc.instantiate(this.wromPrefab).getComponent('Wrom');
            this._wroms[name] = wrom;
        }
        wrom.init(name, netPlayer, this);
        wrom.enabled = this._time > 0;

        if (!wrom.node.parent) {
            wrom.node.parent = this.wromsNode;
        }
    },

    changeWromName (oldname, name) {
        var wrom = this._wroms[oldname];
        if (wrom) {
            var existed = this._wroms[name];
            if (existed && existed.netPlayer.isConnected()) {
                wrom.nameLabel.string = name + '1';
                this.changeWromName(oldname, name + '1');
            }
            else {
                this._wroms[name] = wrom;
                delete this._wroms[oldname];
            }
        }
    },

    initServer() {
        var server = new GameServer();
        // A new player has arrived.
        var self = this;
        // self.wromsNode.removeAllChildren();
        server.addEventListener('playerconnect', this.getWrom.bind(this));
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
        if(this._time <= 0) return //结束状态

        // 更新计时器
        this._time -= dt;
        if (this._time <= 0) {// 由非结束到结束->结算时间 
            this.settle()
            return
        }
    
        var t = Math.floor(this._time);
        this.timerNode.getComponent(cc.Label).string = ("0" + Math.floor(t/60)).substr(-2)+":"+ ("0" + t%60).substr(-2);

        this.updateRank(dt);
        this.rebirth(dt)
    },

    settle(){
        var names = Object.keys(this._wroms);
        names.sort((o1, o2) => { return this._wroms[o2].score - this._wroms[o1].score });
        for (var i = 0; i < names.length; ++i) {
            var worm = this._wroms[names[i]];
            worm.netPlayer.sendCmd('waitForNextGame');
            if (worm)
                worm.enabled = false;
        }

        let settlenode = cc.instantiate(this.settlePrefab);
        settlenode.getComponent('SettlePanel').setRanker(this._wroms[names[0]], this._wroms[names[1]], this._wroms[names[2]]);
        settlenode.x = 0;
        settlenode.y = 0;
        this.node.addChild(settlenode);
    },

    updateRank(dt){
        this._rankTime += dt;
        if (this._rankTime <= 1) {
            return
        }

        this._rankTime = 0;
        // 更新排行榜
        var names = Object.keys(this._wroms);
        names.sort((o1, o2) => { return this._wroms[o2].score - this._wroms[o1].score });
        for (var i = 0; i < this.getComponent('Config').rankSize; ++i) {
            var w = this._wroms[names[i]];
            var r = this.rankView.content.children[i];
            if(w){
                r.active = true;
                r.getChildByName('name').getComponent(cc.Label).string = w.nameLabel.string;
                r.getChildByName('score').getComponent(cc.Label).string = w.score + 1;
            } else {
                r.active = false;
            }
        }
    },

    rebirth(dt){
        for(var name in this._wroms){
            var w = this._wroms[name];
            if(!w || !w.isdead()) continue;
            w.deadTime += dt;
            if(w.deadTime > this.getComponent('Config').rebirthTime)
                w.rebirth();
        }
    },

    createRip(node){
        var rip = cc.instantiate(this.ripPrefab);
        var loc = 
        rip.x = node.x + this.wromsNode.x - this.graveyard.x;
        rip.y = node.y + this.wromsNode.y - this.graveyard.y;
        var action = cc.moveTo(0.3, rip.x, 0);
        action.easing(cc.easeCubicActionIn());
        rip.runAction(action);
        this.graveyard.addChild(rip);
    },

    doooooom(){
        for(var name in this._wroms){
            var w = this._wroms[name];
            if(w){
                w.die();
            }
        }
    },

    newBattle(){
        this._time = this.getComponent('Config').battleTime;
        for(var name in this._wroms){
            var w = this._wroms[name];
            if(w){
                w.enabled = true;
                w.score = 0;
                w.rebirth();
            }
        }
        this.map.reset()
    }
});