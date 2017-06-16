const PlayerNameManager = sampleUI.PlayerNameManager;
const Helper = require('Helper');

cc.Class({
    extends: cc.Component,

    init (name, netPlayer, game, pos) {
        this.game = game;
        this.netPlayer = netPlayer;
        this.playerName = name;
        this.node.position = pos;
        // this.node.color = color;

        netPlayer.addEventListener('disconnect', this.disconnect.bind(this));
        netPlayer.addEventListener('move', this.move.bind(this));
        netPlayer.addEventListener('color', this.setColor.bind(this));

        this.playerNameManager = new PlayerNameManager(netPlayer);
        this.playerNameManager.on('setName', this.handleNameMsg.bind(this));
    },

    disconnect () {
        this.game.playerDisconnect(this);
    },

    move (cmd) {
        cc.log(cmd);
        this.node.x = - this.game.viewSize.width/2 + Math.floor(cmd.x * this.game.viewSize.width);
        this.node.y = - this.game.viewSize.height/2 + Math.floor((1-cmd.y) * this.game.viewSize.height);
        if (this.game.goal.checkHit(this.node.position)) {
            // This will generate a 'scored' event on the client (player's smartphone)
            // that corresponds to this player.
            this.netPlayer.sendCmd('scored', {
                points: 5 + Helper.randInt(6), // 5 to 10 points
            });
            this.game.setNewGoal();
        }    
    },
    handleNameMsg(name) {
        this.playerName = name;
    },    
    setColor(cmd) {
        this.node.color.fromHEX(cmd.color);
    },    
});