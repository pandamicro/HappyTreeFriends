"use strict";

// Start the main app logic.
const hft = require('hft');
const GameServer = hft.GameServer;

cc.Class({
    extends: cc.Component,    
    properties: {
        map: cc.Node
    },

    onLoad () {
        this.initServer();
    },

    initServer () {
        var server = new GameServer();
        // A new player has arrived.
        server.addEventListener('playerconnect', function (netPlayer, name) {
            let player = cc.instantiate(this.playerPrefab).getComponent('Player');
            player.init(name, netPlayer, this, this.pickRandomPosition());
            this.node.addChild(player.node);
            this.players.push(player);
        }.bind(this));
    }
});