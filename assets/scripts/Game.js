"use strict";

// Start the main app logic.
const hft = require('hft');
const GameServer = hft.GameServer;

cc.Class({
    extends: cc.Component,    
    properties: {
        map: cc.Node,
        wromsNode: cc.Node,
        wromPrefab: cc.Prefab,
        _wroms: null
    },

    onLoad () {
        this._wroms = new Array(20);
        this.initServer();
    },

    initServer () {
        var server = new GameServer();
        // A new player has arrived.
        var self = this;
        server.addEventListener('playerconnect', function (netPlayer, name) {
            let wrom = cc.instantiate(self.wromPrefab).getComponent('Wrom');
            wrom.init(name, netPlayer, self.map);
            self.wromsNode.addChild(wrom.node);
            self._wroms.push(wrom);
        });
    },

    pickRandomPosition () {
        
    }
});