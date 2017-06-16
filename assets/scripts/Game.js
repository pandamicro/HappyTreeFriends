"use strict";

// const isDevMode = process.env.NODE_ENV === 'development';
// const requirejs = require('requirejs');
// requirejs.config({
//   nodeRequire: require,
//   baseUrl: __dirname,
// });

// Start the main app logic.
const hft = require('hft');
const GameServer = hft.GameServer;

cc.Class({
    extends: cc.Component,    
    properties: {
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