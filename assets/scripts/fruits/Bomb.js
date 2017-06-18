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
            this.owner.died();
        }
        else {
            this.animState.speed = this.level;
        }
    },

    onDisable () {
        this.display.parent = null;
        this.unscheduleAllCallbacks();
    }
});