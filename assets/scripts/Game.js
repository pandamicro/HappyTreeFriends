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
const Helper = require('Helper');
const Goal = require('Goal');

cc.Class({
    extends: cc.Component,    
    properties: {
        // status: cc.Label,
        goal: Goal,
        playerPrefab: cc.Prefab
    },

    onLoad () {
        this.initServer();
        this.players = [];
        this.viewSize = cc.view.getVisibleSize();
        this.setNewGoal();
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
    },

    pickRandomPosition () {
        return {
            x: 30 - this.viewSize.width/2 + Helper.randInt(this.viewSize.width),
            y: 30 - this.viewSize.height/2 + Helper.randInt(this.viewSize.height/2)
        };
    },

    setNewGoal () {
        this.goal.initGoal(this.pickRandomPosition());
    },

    playerDisconnect (player) {
        for (var ii = 0; ii < this.players.length; ++ii) {
            var curPlayer = this.players[ii];
            if (player === curPlayer) {
                this.players.splice(ii, 1);
                player.node.destroy();
                return;
            }
        }
    }
});
//   var GameServer = happyfuntimes.GameServer;
//   var GameSupport = gameUtils.gameSupport;
//   var Misc = sampleUI.misc;

//   var canvas = document.getElementById("playfield");
//   var ctx = canvas.getContext("2d");
//   var players = [];
//   var globals = {
//     itemSize: 15,
//   };
//   Misc.applyUrlSettings(globals);
//   var Goal = function() {
//       this.pickGoal();
//       this.radiusesSquared = globals.itemSize * 2 * globals.itemSize;
//   };

//   Goal.prototype.pickGoal = function() {
//     this.position = pickRandomPosition();
//   };

//   Goal.prototype.hit = function(otherPosition) {
//     var dx = otherPosition.x - this.position.x;
//     var dy = otherPosition.y - this.position.y;
//     return dx * dx + dy * dy < this.radiusesSquared;
//   };

//   var Player = function(netPlayer, name) {
//     this.netPlayer = netPlayer;
//     this.name = name;
//     this.position = pickRandomPosition();
//     this.color = "green";

//     netPlayer.addEventListener('disconnect', Player.prototype.disconnect.bind(this));
//     netPlayer.addEventListener('move', Player.prototype.movePlayer.bind(this));
//     netPlayer.addEventListener('color', Player.prototype.setColor.bind(this));

//     this.playerNameManager = new PlayerNameManager(netPlayer);
//     this.playerNameManager.on('setName', Player.prototype.handleNameMsg.bind(this));
//   };

//   // The player disconnected.
//   Player.prototype.disconnect = function() {
//     for (var ii = 0; ii < players.length; ++ii) {
//       var player = players[ii];
//       if (player === this) {
//         players.splice(ii, 1);
//         return;
//       }
//     }
//   };

//   Player.prototype.movePlayer = function(cmd) {
//     this.position.x = Math.floor(cmd.x * canvas.clientWidth);
//     this.position.y = Math.floor(cmd.y * canvas.clientHeight);
//     if (goal.hit(this.position)) {
//       // This will generate a 'scored' event on the client (player's smartphone)
//       // that corresponds to this player.
//       this.netPlayer.sendCmd('scored', {
//         points: 5 + Misc.randInt(6), // 5 to 10 points
//       });
//       goal.pickGoal();
//     }
//   };

//   Player.prototype.handleNameMsg = function(name) {
//     this.name = name;
//   };

//   Player.prototype.setColor = function(cmd) {
//     this.color = cmd.color;
//   };

//   var server = new GameServer();
//   GameSupport.init(server, globals);

//   var goal = new Goal();

  // A new player has arrived.
//   server.addEventListener('playerconnect', function(netPlayer, name) {
//     players.push(new Player(netPlayer, name));
//   });

//   var drawItem = function(position, color) {
//     ctx.fillStyle = color;
//     ctx.beginPath();
//     ctx.arc(position.x, position.y, globals.itemSize, 0, Math.PI * 2);
//     ctx.fill();
//   };

//   var render = function() {
//     Misc.resize(canvas);
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//     players.forEach(function(player) {
//       drawItem(player.position, player.color);
//     });
//     drawItem(goal.position, (globals.frameCount & 4) ? "red" : "pink");
//   };
//   GameSupport.run(globals, render);


