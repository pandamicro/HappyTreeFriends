cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        rankLabel_1:{
            default:null,
            type:cc.Label
        },
        rankLabel_2:{
            default:null,
            type:cc.Label
        },
        rankLabel_3:{
            default:null,
            type:cc.Label
        },
        timeLabel:{
            default:null,
            type:cc.Label
        },

        _time: 10,
    },

    // use this for initialization
    onLoad: function () {
        this._time = 10;
    },

    setRanker:function(wroms){
        if(wroms[0]){
            this.rankLabel_1.string = wroms[0].nameLabel.string
        } else {
            this.rankLabel_1.string = 'No Winner!!'
        }

        if(wroms[1]){
            this.rankLabel_2.string = wroms[1].nameLabel.string
            this.rankLabel_2.node.active = true
        }else{
            this.rankLabel_2.node.active = false
        }

        if(wroms[2]){
            this.rankLabel_3.string = wroms[2].nameLabel.string
            this.rankLabel_3.node.active = true
        }else{
            this.rankLabel_3.node.active = false
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this._time -= dt;
        if(this._time <= 0.5) {
            this.node.removeFromParent();
            cc.find('Canvas').getComponent('Game').newBattle();
            return
        }
        this.timeLabel.string = this._time.toFixed();
    },
});
