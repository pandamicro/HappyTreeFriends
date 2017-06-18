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

var Fruit = require('Fruit');

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
        fruitPrefab: cc.Prefab,
        config: require('Config'),
        _game: null,
        _pool: null,
        _jumpAction: null,
        _timer: 0
    },

    onLoad () {
        this._pool = new cc.NodePool();

        this._jumpAction = cc.sequence(
            cc.spawn(
                cc.scaleTo(0.1, 1.2, 0.8),
                cc.moveBy(0.1, 0, 10)
            ),
            cc.spawn(
                cc.scaleTo(0.2, 1, 1),
                cc.moveBy(0.2, 0, -10)
            ),
            cc.delayTime(1)
        ).repeatForever();

        this.reset();
    },

    genFruit () {
        if (this.node.children.length >= this.config.maxFruitCount) {
            return null;
        }
        var node = this._pool.get() || cc.instantiate(this.fruitPrefab);
        node.parent = this.node;
        node.runAction(this._jumpAction.clone());

        var rect = this.config.birthRect;
        node.x = rect.x + (Math.random() * rect.width) | 0;
        node.y = rect.y + (Math.random() * rect.height) | 0;

        var fruit = node.getComponent(Fruit);
        fruit.ability = randomFruit();
        return node;
    },

    reset () {
        var i;
        for (i = this.node.children.length-1; i >= 0; i--) {
            var node = this.node.children[i];
            node.stopAllActions();
            this._pool.put(node);
        }
        for (i = 0; i < this.config.initFruitCount; i++) {
            this.genFruit();
        }

        this._timer = this.config.fruitGenerateFreq;
    },

    getFruit (wrom, fruit) {
        var node = fruit.node;
        node.stopAllActions();
        this._pool.put(node);

        var ability = wrom.node.addComponent(fruit.ability);
        wrom._fruit = ability;
        ability.owner = wrom;
    },

    // called every frame, uncomment this function to activate update callback
    update (dt) {
        this._timer -= dt;
        if (this._timer < 0) {
            this.genFruit();
            this._timer = this.config.fruitGenerateFreq;
        }

        // Collision detection
        var wroms = this._game._wroms;
        var vector = cc.v2();
        var seuil = this.config.fruitCollisionSeuil;
        for (var i = this.node.children.length - 1; i >= 0; i--) {
            var node = this.node.children[i];
            var fruit = node.getComponent(Fruit);

            for (var name in wroms) {
                var wrom = wroms[name];
                if (wrom._fruit) {
                    continue;
                }

                vector.x = wrom.node.x - node.x;
                vector.y = wrom.node.y - node.y;
                if (cc.pLength(vector) < seuil) {
                    this.getFruit(wrom, fruit);
                    break;
                }
            }
        }
    },
});