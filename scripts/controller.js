/*
 * Copyright 2014, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
"use strict";

// Start the main app logic.
requirejs([
    '../node_modules/happyfuntimes/dist/hft',
    '../node_modules/hft-sample-ui/dist/sample-ui',
    '../node_modules/hft-game-utils/dist/game-utils',
    '../3rdparty/hft-utils/dist/audio',
    '../3rdparty/hft-utils/dist/imageloader',
    '../3rdparty/hft-utils/dist/imageutils',
  ],
  function(
    hft,
    sampleUI,
    gameUtils,
    AudioManager,
    ImageLoader,
    ImageProcess) {

  var GameClient = hft.GameClient;
  var commonUI = sampleUI.commonUI;
  var DPad = sampleUI.DPad;
  var input = sampleUI.input;
  var misc = sampleUI.misc;
  var mobileHacks = sampleUI.mobileHacks;
  var Ticker = gameUtils.Ticker;
  var touch = sampleUI.touch;

  var g_client;
  var g_audioManager;
  var g_clock;
  var g_grid;
  var g_instrument;
  var g_leftRight = 0;
  var g_oldLeftRight = 0;
  var g_abutton = false;

  var globals = {
    debug: false,
    forceController: false,
    orientation: "landscape-primary",
  };
  misc.applyUrlSettings(globals);
  mobileHacks.fixHeightHack();
  mobileHacks.adjustCSSBasedOnPhone([
    {
      test: mobileHacks.isIOS8OrNewerAndiPhone4OrIPhone5,
      styles: {
        "#abutton": {
          bottom: "96px",
        },
        "#dpadleft, #abutton": {
          bottom: "90px",
        },
      },
    },
  ]);

  var $ = document.getElementById.bind(document);

  var msgContainerStyle = $("msgcontainer").style;
  var msgText = misc.createTextNode($("msg"));
  var msgContainerOriginalDisplay = msgContainerStyle.display;
  var msgTimeoutId;

  var flashNdx;
  var ticker = new Ticker();
  var cancelFlash = function() {
    ticker.cancel();
  };
  var flash = function(colors) {
    flashNdx = 0;
    cancelFlash();
    ticker.tick(2, 0.1, function() {
      msgContainerStyle.backgroundColor = colors[(flashNdx++) % colors.length];
    });
  };

  var showMsg = function(msg, color, timeout) {
    cancelFlash()
    msgContainerStyle.backgroundColor = color;
    msgContainerStyle.display = msgContainerOriginalDisplay;
    msgText.nodeValue = msg;
    if (msgTimeoutId) {
      clearTimeout(msgTimeoutId);
      msgTimeoutId = undefined;
    }
    if (timeout) {
      msgTimeoutId = setTimeout(hideMsg, timeout * 1000);
    }
  };

  var hideMsg = function() {
    msgContainerStyle.display = "none";
  };

  var startClient = function() {
    g_client = new GameClient();

    var handleScore = function() {
    };

    var handleDeath = function() {
      showMsg("DEAD!", "red");
      flash(["red", "yellow"]);
    };

    var handleWinner = function() {
      showMsg("WINNER!!!", "yellow");
      flash(["green", "blue", "purple", "red", "orange", "yellow", "purple"]);
    };

    var handleTie = function() {
      showMsg("tie", "green");
    };

    var handleWaitForStart = function(data) {
      showMsg("Start In: " + data.waitTime, "blue");
    };

    var handleWaitForNextGame = function(data) {
      showMsg("Please Wait For Next Game", "orange");
    };

    var handleWaitForMorePlayers = function(data) {
      showMsg("Please Wait For More Players", "orange");
    };

    var handleStart = function() {
      hideMsg();
    };

    var handleSpoil = function() {
      showMsg("Take Revenge!", "green", 2);
    };

    var handleSetColor = function(msg) {
    };

    hideMsg();
    if (globals.forceController) {
      hideMsg();
    } else {
      // These messages hide/show the controller so don't handle them
      // if we're testing the controller with `forceController`
      g_client.on('score', handleScore);
      g_client.on('start', handleStart);
      g_client.on('tied', handleTie);
      g_client.on('died', handleDeath);
      g_client.on('spoil', handleSpoil);
      g_client.on('winner', handleWinner);
      g_client.on('waitForStart', handleWaitForStart);
      g_client.on('waitForNextGame', handleWaitForNextGame);
      g_client.on('waitForMorePlayers', handleWaitForMorePlayers);
    }

    var sounds = {};
    g_audioManager = new AudioManager(sounds);

    commonUI.setupStandardControllerUI(g_client, globals);
    commonUI.askForNameOnce();   // ask for the user's name if not set
    commonUI.showMenu(true);     // shows the gear menu

    var dpads = [
      new DPad({element: $("dpadleft")}),
    ];

    var handleAbutton = function(pressed) {
      if (g_abutton != pressed) {
        g_abutton = pressed;
        g_client.sendCmd('abutton', {
            abutton: pressed,
        });
      }
    };

    var handleShow = function(pressed) {
      g_client.sendCmd('show', {show:pressed});
    };

    var handleDPad = function(e) {
      dpads[e.pad].draw(e.info);
      g_client.sendCmd('pad', {pad: e.pad, dir: e.info.direction});
    };

    var keys = { };
    keys["Z".charCodeAt(0)] = function(e) { handleAbutton(e.pressed); }
    keys["X".charCodeAt(0)] = function(e) { handleShow(e.pressed); }
    input.setupKeys(keys);
    input.setupKeyboardDPadKeys(handleDPad, input.kASWDPadOnly);

    touch.setupButtons({
      inputElement: $("buttons"),
      buttons: [
        { element: $("abuttoninput"), callback: function(e) { handleAbutton(e.pressed); }, },
        { element: $("avatarinput"),  callback: function(e) { handleShow(e.pressed); }, },
      ],
    });

    touch.setupVirtualDPads({
      inputElement: $("dpadleftinput"),
      callback: handleDPad,
      fixedCenter: true,
      deadSpaceRadius: 0,
      divisions: 4,
      pads: [
        {
          referenceElement: $("dpadleft"),
        },
      ],
    });
  };

  startClient();
});


