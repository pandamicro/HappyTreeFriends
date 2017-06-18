"use strict";

// Start the main app logic.
const hft = require('hft');
const GameServer = hft.GameServer;
const Map = require('Map');

cc.Class({
    extends: cc.Component,
    properties: {
        map: Map,
        fruitsMgr: require('FruitsMgr'),
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

        graveyard: cc.Node, //墓地
        ripPrefab: cc.Prefab, //墓碑
        fallAudio: {
            url: cc.AudioClip,
            default: null
        },

        effectNode: cc.Node, //特效层
        _blockpool: null, // 方块池
    },

    onLoad() {
        this._wroms = {};
        cc.view.enableAntiAlias(false);
        this.initServer();
        this.fruitsMgr._game = this;
        this._blockpool = new cc.NodePool();
    },

    getWrom(netPlayer, name) {
        var wrom = this._wroms[name];
        if (wrom && wrom.isConnected()) {
            wrom = cc.instantiate(this.wromPrefab).getComponent('Wrom');
            name = name + '2';
            this._wroms[name] = wrom;
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

    changeWromName(oldname, name) {
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
            r.y = - 10 - r.height / 2 - r.height * i;
            r.getChildByName('rank').getComponent(cc.Label).string = i + 1;
            r.active = false;
            this.rankView.content.addChild(r);
        }
    },

    update(dt) {
        if (this._time <= 0) return //结束状态

        // 更新计时器
        this._time -= dt;
        if (this._time <= 0) {// 由非结束到结束->结算时间 
            this.settle()
            return
        }

        var t = Math.floor(this._time);
        this.timerNode.getComponent(cc.Label).string = ("0" + Math.floor(t / 60)).substr(-2) + ":" + ("0" + t % 60).substr(-2);

        this.checkWromAttack();
        this.updateRank(dt);
        this.rebirth(dt);
    },

    settle() {
        var names = Object.keys(this._wroms);
        names.sort((o1, o2) => { return this._wroms[o2].score - this._wroms[o1].score });
        for (var i = 0; i < names.length; ++i) {
            var worm = this._wroms[names[i]];
            if (worm)
                worm.enabled = false;
        }

        let settlenode = cc.instantiate(this.settlePrefab);
        settlenode.getComponent('SettlePanel').setRanker(this._wroms[names[0]], this._wroms[names[1]], this._wroms[names[2]]);
        settlenode.x = 0;
        settlenode.y = 0;
        this.node.addChild(settlenode);
    },

    updateRank(dt) {
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
            if (w) {
                r.active = true;
                r.getChildByName('name').getComponent(cc.Label).string = w.nameLabel.string;
                r.getChildByName('score').getComponent(cc.Label).string = w.score + 1;
            } else {
                r.active = false;
            }
        }
    },

    rebirth(dt) {
        for (var name in this._wroms) {
            var w = this._wroms[name];
            if (!w || !w.isdead() || !w.netPlayer.isConnected()) continue;
            w.deadTime += dt;
            if (w.deadTime > this.getComponent('Config').rebirthTime) {
                w.rebirth();
            }
        }
    },

    onWromDie(wormnode) {
        // 墓碑效果
        var rip = cc.instantiate(this.ripPrefab);
        rip.getChildByName('name').getComponent(cc.Label).string = wormnode.getComponent('Wrom').nameLabel.string;
        rip.getChildByName('cd').getComponent(cc.Label).string = '';
        rip.x = wormnode.x + this.wromsNode.x - this.graveyard.x;
        rip.y = wormnode.y + this.wromsNode.y - this.graveyard.y;
        var action = cc.moveTo(1, rip.x, 0);
        action.easing(cc.easeCubicActionIn());
        rip.runAction(cc.sequence(
                action,
                cc.callFunc(()=>{ 
                    cc.audioEngine.play(this.fallAudio, false, 2);
                }, this)
            ));
        this.graveyard.addChild(rip);

        // 吸收效果
        for (var i = 0; i < 20; ++i) {
            // 虫子中心 创建N个方块 爆炸
            var block = this._blockpool.get() || cc.instantiate(this.map.blockPrefab);
            block.x = wormnode.x;
            block.y = wormnode.y;
            block.anchorX = 0.5;
            block.anchorY = 0.5;
            this.effectNode.addChild(block);

            var explore = cc.sequence(
                cc.moveBy(0.1, 200 - Math.random() * 400, 200 - Math.random() * 400),
                cc.moveTo(0.8, 800, 53), //树心位置
                cc.callFunc(this.reuseBlock, this, block)
            );
            var turnning = cc.rotateBy(1, 360 + 360 * Math.random());
            block.runAction(cc.spawn(explore, turnning))
        }
    },

    checkWromAttack () {
        var a, b;
        var ax, ay, v2 = cc.v2();
        for (var namea in this._wroms) {
            a = this._wroms[namea];
            if (a.attacking && a.enabled && a.node.activeInHierarchy) {
                ax = a.node.x;
                ay = a.node.y;
                for (var nameb in this._wroms) {
                    if (namea === nameb) continue;
                    b = this._wroms[nameb];
                    if (!b.enabled || !b.node.activeInHierarchy) continue;
                    v2.x = b.node.x - ax;
                    v2.y = b.node.y - ay;

                    if (cc.pLength(v2) > 50) continue;
                    if (b.attacking) {
                        a.die();
                        b.die();
                        break;
                    }
                    else {
                        this.fruitsMgr.rob(a, b);
                        b.die();
                    }
                }
            }
        }
    },

    reuseBlock(block) {
        block.stopAllActions();
        this._blockpool.put(block)
    },

    doooooom() {
        for (var name in this._wroms) {
            var w = this._wroms[name];
            if (w) {
                w.die();
            }
        }
    },

    newBattle() {
        this._time = this.getComponent('Config').battleTime;
        for (var name in this._wroms) {
            var w = this._wroms[name];
            if (w) {
                w.enabled = true;
                w.score = 0;
                w.rebirth();
            }
        }

        this.map.reset()
        this.fruitsMgr.reset();
        this.graveyard.removeAllChildren();
    }
});