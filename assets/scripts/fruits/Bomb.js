cc.Class({
    extends: cc.Component,

    properties: {
        owner: require('Wrom'),
        attachment: cc.Prefab
    },

    onLoad () {
        this._truc = cc.instantiate(this.attachment);
    },

    onEnable () {
        this._truc.parent = this.node;
    },

    onDisable () {
        this._truc.parent = null;
    }
});