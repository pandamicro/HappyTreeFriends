// var CounterFruit = cc.Class({
//     extends: cc.Component,

//     properties: {
//         owner: require('Wrom'),
//         _timer: 0
//     },

//     onEnable () {
//         this.schedule(this.trigger, this._timer);
//     },

//     onDisable () {
//         this.unschedule(this.trigger);
//     }
// });

// var AttachFruit = cc.Class({
//     extends: cc.Component,

//     properties: {
//         owner: require('Wrom'),
//         attachment: cc.Prefab
//     },

//     onLoad () {
//         this._truc = cc.instantiate(this.attachment);
//     },

//     onEnable () {
//         this._truc.parent = this.node;
//     },

//     onDisable () {
//         this._truc.parent = null;
//     }
// });

var Types = [
    require('./fruits/Bomb'),
];

var Probability = [
    0.5,
];
var sum = 0;
for (var i = 0; i < Probability.length; i++) {
    sum += Probability[i];
}

function randomFruit () {
    var seed = Math.random() * sum;
    var currSum = 0;
    for (var i = 0; i < Probability.length; i++) {
        currSum += Probability[i];
        if (seed <= currSum) {
            return Types[i];
        }
    }
}

cc.Class({
    extends: cc.Component,

    properties: {
        game: require('Game'),
        fruitsNode: cc.Node,
        beginCount: 10,
        generateFreq: 1,
        _fruits: null,
        _timer: 0
    },

    onLoad () {
        this._fruits = new cc.js.Pool(this.beginCount + 5);
    },

    init () {
        for (var i = 0; i < this.beginCount; i++) {
            
        }
    },

    // called every frame, uncomment this function to activate update callback
    update (dt) {
        
    },
});