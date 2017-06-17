cc.Class({
    extends: cc.Component,

    properties: {
        defaultSpeed: 10,
        eatTime: 3,
        birthRect: cc.rect(),
        growRate: 1,
        beginGrow: 0.1,
        growCount: 10,

        battleTime:180, // 单局游戏对战时间，秒
        rankSize:10, // 单局游戏对战时间，秒

        rebirthTime: 5, // 复活需要的时间
        recoverOnDeath: 0.8, //复活恢复树像素的百分比
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
