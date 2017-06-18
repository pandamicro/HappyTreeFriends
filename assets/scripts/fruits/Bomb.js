cc.Class({
    extends: cc.Component,

    properties: {
        owner: null,
        display: null,
        prefab: null,
        animState: null,
        needAttach: false,
        level: 1
    },

    onLoad () {
        this.owner = this.node.getComponent('Wrom');
        var self = this;
        cc.loader.loadRes('fruit/bomb', function (err, prefab) {
            self.prefab = prefab;
            if (self.needAttach) {
                self.createBomb();
                self.needAttach = false;
            }
        });
    },

    createBomb () {
        if (this.display || !this.prefab) {
            return;
        }
        this.display = cc.instantiate(this.prefab);
        this.display.parent = this.node;
        this.animState = this.display.getComponent(cc.Animation).getAnimationState('bomb');
        // this.animState.speed = 1;
    },

    onEnable () {
        this.level = 1;
        if (this.prefab) {
            this.createBomb();
        }
        else {
            this.needAttach = true;
        }
        this.schedule(this.levelup, 3, 3, 3);
    },

    levelup () {
        this.level++;
        if (this.level === 5) {
            this.unschedule(this.levelup);
            this.owner.enabled = false;
            var animState = this.display.getComponent(cc.Animation).play('explode');
            animState.on('finished', function () {
                this.display.parent = null;
                var x = this.owner.node.x;
                var y = this.owner.node.y;
                var wroms = this.owner._game._wroms;
                this.owner.die();

                var vec = cc.v2();
                for (var name in wroms) {
                    var wrom = wroms[name];
                    vec.x = wrom.node.x - x;
                    vec.y = wrom.node.y - y;
                    if (cc.pLength(vec) < 125) {
                        wrom.die();
                    }
                }

                this.owner._game.map.eatBlock(x, y, 125);
            }, this);
        }
        else {
            this.animState.speed = this.level;
        }
    }
});