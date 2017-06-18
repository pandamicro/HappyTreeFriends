cc.Class({
    extends: cc.Component,

    properties: {
        owner: null,
        display: null,
        prefab: null,
        needAttach: false,
    },

    onLoad () {
        this.owner = this.node.getComponent('Wrom');
        var self = this;
        cc.loader.loadRes('fruit/fist', function (err, prefab) {
            self.prefab = prefab;
            if (self.needAttach) {
                self.createAttach();
                self.needAttach = false;
            }
        });
    },

    createAttach () {
        if (this.display || !this.prefab) {
            return;
        }
        
        this.display = cc.instantiate(this.prefab);
        this.display.parent = this.owner.display;
        this.display.x = 25;
        this.display.y = 0;

        var action = cc.sequence(
            cc.spawn(
                cc.scaleTo(0.1, 1.2, 0.8),
                cc.moveBy(0.1, 5, 0),
                cc.fadeTo(0.1, 200)
            ),
            cc.spawn(
                cc.scaleTo(0.2, 1, 1),
                cc.moveBy(0.2, -5, 0),
                cc.fadeTo(0.2, 150)
            ),
            cc.delayTime(0.5)
        ).repeatForever();

        this.display.runAction(action);
    },

    // use this for initialization
    onEnable () {
        this.owner = this.node.getComponent('Wrom');
        this.owner._speed = this.owner._config.defaultSpeed * 1.5;
        this.owner.attacking = true;

        if (this.prefab) {
            this.createAttach();
        }
        else {
            this.needAttach = true;
        }

        this.scheduleOnce(this.end, 8);
    },

    end () {
        this.display.stopAllActions();
        this.display.parent = null;
        if (this.owner){
            this.owner._speed = this.owner._config.defaultSpeed;
            this.owner.attacking = false;
            this.owner.removeFruit();
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
