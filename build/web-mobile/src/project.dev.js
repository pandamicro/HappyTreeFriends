require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sampleUI"] = factory();
	else
		root["sampleUI"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(13),
	    __webpack_require__(5),
	    __webpack_require__(15),
	    __webpack_require__(16),
	    __webpack_require__(9),
	    __webpack_require__(10),
	    __webpack_require__(17),
	    __webpack_require__(18),
	  ], __WEBPACK_AMD_DEFINE_RESULT__ = function (
	    commonUI,
	    PlayerNameManager,
	    dialog,
	    DPad,
	    input,
	    misc,
	    mobileHacks,
	    strings,
	    touch) {
	  return {
	    commonUI: commonUI,
	    PlayerNameManager: PlayerNameManager,
	    dialog: dialog,
	    DPad: DPad,
	    input: input,
	    misc: misc,
	    mobileHacks: mobileHacks,
	    strings: strings,
	    touch: touch,
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
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

	/**
	 * Implements the common UI parts of HappyFunTimes for
	 * contollers.
	 * @module CommonUI
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(8),
	    __webpack_require__(4),
	    __webpack_require__(5),
	    __webpack_require__(6),
	    __webpack_require__(2),
	    __webpack_require__(9),
	    __webpack_require__(10),
	    __webpack_require__(11),
	    __webpack_require__(12),
	  ], __WEBPACK_AMD_DEFINE_RESULT__ = function(
	    IO,
	    HFTSplash,
	    Cookie,
	    dialog,
	    fullScreen,
	    logger,
	    misc,
	    mobilehacks,
	    orientation,
	    PlayerNameHandler) {

	  var $ = function(id) {
	    return document.getElementById(id);
	  };

	  var g = {
	    logger: new logger.NullLogger(),
	  };
	  var s = {
	  };

	  var requireLandscapeHTML = [
	      '<div id="hft-portrait" class="hft-fullsize hft-fullcenter">',
	      '  <div class="hft-portrait-rot90">                         ',
	      '    <div class="hft-instruction">                          ',
	      '      Turn the Screen                                      ',
	      '    </div>                                                 ',
	      '    <div class="hft-xlarge">                               ',
	      '      &#x21ba;                                             ',
	      '    </div>                                                 ',
	      '  </div>                                                   ',
	      '</div>                                                     ',
	  ].join("\n");
	  var requirePortraitHTML = [
	    '<div id="hft-landscape" class="hft-fullsize hft-fullcenter">',
	    '  <div class="hft-landscape-rot90">                         ',
	    '    <div class="hft-instruction">                           ',
	    '      Turn the Screen                                       ',
	    '    </div>                                                  ',
	    '    <div class="hft-xlarge">                                ',
	    '      &#x21bb;                                              ',
	    '    </div>                                                  ',
	    '  </div>                                                    ',
	    '</div>                                                      ',
	  ].join("\n");
	  var orientationDiv;

	  //function isSemiValidOrientation(o) {
	  //  o = o || "";
	  //  return o.indexOf("portrait") >= 0 || o.indexOf("landscape") >= 0;
	  //}

	  function setOrientationHTML(desiredOrientation) {
	    desiredOrientation = desiredOrientation || "";
	    if (!orientationDiv) {
	      orientationDiv = document.createElement("div");
	      //document.body.appendChild(orientationDiv);
	      var h = document.getElementById("hft-menu");
	      h.parentNode.insertBefore(orientationDiv, h);
	    }
	    if (desiredOrientation.indexOf("portrait") >= 0) {
	      orientationDiv.innerHTML = requirePortraitHTML;
	    } else if (desiredOrientation.indexOf("landscape") >= 0) {
	      orientationDiv.innerHTML = requireLandscapeHTML;
	    } else {
	      orientationDiv.innerHTML = "";
	    }
	  }

	  function resetOrientation() {
	    if (fullScreen.isFullScreen()) {
	      orientation.set(g.orientation);
	    }
	  }

	  /**
	   * Sets the orientation of the screen. Doesn't work on desktop
	   * nor iOS unless in app.
	   * @param {string} [desiredOrientation] The orientation. Valid options are
	   *
	   *     "portrait-primary"    // normal way people hold phones
	   *     "portrait-secondary"  // upsidedown
	   *     "landscape-primary"   // phone turned clockwise 90 degrees from normal
	   *     "landscape-secondary" // phone turned counter-clockwise 90 degrees from normal
	   *     "none" (or undefined) // unlocked
	   * @param {bool} [orientationOptional]
	   */
	  function setOrientation(desiredOrientation, orientationOptional) {
	    g.orientation = desiredOrientation;
	    if (orientation.canOrient()) {
	      resetOrientation();
	    } else {
	      var orient = g.orientation;
	      if (orientationOptional) {
	        orient = "none";
	      }
	      setOrientationHTML(orient);
	    }
	  }

	  function showRequireApp() {
	    dialog.modal({
	      title: "HappyFunTimes",
	      msg: "This game requires the HappyFunTimes App<br/>Please download it from your app store",
	    }, function() {
	      var ua = window.navigator.userAgent;
	      if (ua.indexOf("iPhone") >= 0 ||
	          ua.indexOf("iPad") >= 0) {
	        misc.gotoIFrame("itms://itunes.apple.com/");
	      } else if (ua.indexOf("Android") >= 0) {
	        misc.gotoIFrame("market://details?id=com.greggman.HappyFunTimes");
	      } else {
	        showRequiredApp();
	      }
	    });
	  }

	  function showMenu(show) {
	    var menuElement = $("hft-menu");
	    menuElement.style.display = show ? "block" : "none";
	  }

	  /**
	   * @typedef {Object} ControllerUI~Options
	   * @property {callback} [connectFn] function to call when controller
	   *           connects to HappyFunTimes
	   * @property {callback} [disconnectFn] function to call when controller is
	   *           disconncted from game.
	   * @property {boolean} [debug] True displays a status and debug
	   *           html element
	   * @property {number} [numConsoleLines] number of lines to show for the debug console.
	   * @property {string} [orienation] The orientation to set the phone. Only works on Android or the App. See {@link setOrientation}.
	   * @property {boolean} [orientationOptional] Don't ask the user to orient the phone if their device does not support orientation
	   * @property {boolean} [requireApp] If true and we're not in the app will present a dialog saying you must use the app
	   * @memberOf module:CommonUI
	   */

	  /**
	   * Sets up the standard UI for a happyFunTimes controller
	   * (phone). Including handling being disconnected from the
	   * current game and switching to new games as well as name
	   * input and the gear menu.
	   *
	   * @param {GameClient} client The `GameClient` for the phone
	   * @param {module:CommonUI.ControllerUI~Options} [options] the options
	   * @memberOf module:CommonUI
	   */
	  var setupStandardControllerUI = function(client, options) {
	    options = options || {};
	    var settingsElement = $("hft-settings");
	    var disconnectedElement = $("hft-disconnected");
	    var touchStartElement = $("hft-touchstart");

	    var menuElement = $("hft-menu");
	    menuElement.addEventListener('click', function() {
	      settingsElement.style.display = "block";
	    }, false);
	    menuElement.addEventListener('touchstart', function() {
	      settingsElement.style.display = "block";
	    }, false);

	    showMenu(false);

	    function makeHFTPingRequest(fn) {
	      IO.sendJSON(window.location.href, {cmd: 'happyFunTimesPing'}, function(err, obj) {
	        fn(err, obj);
	      }, { timeout: 2000 });
	    };

	    // setup full screen support
	    var requestFullScreen = function() {
	      if (!fullScreen.isFullScreen()) {
	        touchStartElement.removeEventListener('touchstart', requestFullScreen, false);
	        touchStartElement.style.display = "none";
	        fullScreen.requestFullScreen(document.body);
	      }
	    };

	    var goFullScreenIfNotFullScreen = function() {
	      if (fullScreen.isFullScreen()) {
	        resetOrientation();
	      } else {
	        if (fullScreen.canGoFullScreen()) {
	          touchStartElement.addEventListener('touchstart', requestFullScreen, false);
	          touchStartElement.style.display = "block";
	        }
	      }
	    };
	    fullScreen.onFullScreenChange(document.body, goFullScreenIfNotFullScreen);

	    if (mobilehacks.isMobile()) {
	       goFullScreenIfNotFullScreen();
	    }

	    s.playerNameHandler = new PlayerNameHandler(client, $("hft-name"));

	    $("hft-setname").addEventListener('click', function() {
	      settingsElement.style.display = "none";
	      s.playerNameHandler.startNameEntry();
	    }, false);
	    $("hft-restart").addEventListener('click', function() {
	      window.location.reload();
	    }, false);
	    $("hft-back").addEventListener('click', function() {
	      settingsElement.style.display = "none";
	    });

	//    $("hft-mainmenu").addEventListener('click', function() {
	//      window.location.href = "/";
	//    }, false);
	//    $("hft-reload").addEventListener('click', function() {
	//      window.location.reload();
	//    });

	    // This is not currently needed. The idea
	    // was to show something else like "connecting"
	    // until the user connected but that's mostly
	    // pointless.
	    client.addEventListener('connect', function() {
	      disconnectedElement.style.display = "none";
	      if (options.connectFn) {
	        options.connectFn();
	      }
	    });

	    client.addEventListener('disconnect', function() {
	      disconnectedElement.style.display = "block";
	      if (options.disconnectFn) {
	        options.disconnectFn();
	      }

	      function waitForPing() {
	        makeHFTPingRequest(function(err, obj) {
	          if (err) {
	            setTimeout(waitForPing, 1000);
	            return;
	          }
	          window.location.href = "/";
	        });
	      }
	      // give it a moment to recover
	      setTimeout(waitForPing, 2000);

	      // Maybe needed for app?
	      // var redirCookie = new Cookie("redir");
	      // var url = redirCookie.get() || "http://happyfuntimes.net";
	      // console.log("goto: " + url);
	      // window.location.href = url;
	    });

	    client.addEventListener('_hft_redirect_', function(data) {
	      window.location.href = data.url;
	    });

	    setOrientation(options.orientation, options.orientationOptional);

	    if (options.requireApp) {
	      showRequireApp();
	    }

	    if (options.debug) {
	      g.statusNode = document.createTextNode("");
	      $("hft-status").appendChild(g.statusNode);
	      var debugCSS = misc.findCSSStyleRule("#hft-debug");
	      debugCSS.style.display = "block";

	      g.logger = new logger.HTMLLogger($("hft-console"), options.numConsoleLines);
	    }

	    if (options.consoleTarget) {
	      switch (options.consoleTarget.toLowerCase()) {
	        case "html":
	          g.logger = g.logger || new logger.HTMLLogger($("hft-console"), options.numConsoleLines);
	          console.log = g.logger.log.bind(g.logger);
	          console.error = g.logger.error.bind(g.logger);
	          window.addEventListener('error', function(errorMsg, url, lineNo) {
	             console.error(url, lineNo, errorMsg);
	          });
	          break;
	        case "game":
	          g.logger = new logger.GameLogger(client);
	          console.log = g.logger.log.bind(g.logger);
	          console.error = g.logger.error.bind(g.logger);
	          window.addEventListener('error', function(errorMsg, url, lineNo) {
	             console.error(url, lineNo, errorMsg);
	          });
	          break;
	      }
	      console.log("here");
	    }
	  };

	  var askForNameOnce = function() {
	    askForNameOnce = function() {};
	    if (!s.playerNameHandler.isNameSet()) {
	      s.playerNameHandler.startNameEntry();
	    }
	  };

	  /**
	   * Sets the content of the status element. Only visible of debug
	   * is true.
	   * @memberOf module:CommonUI
	   * @param {string} str value to set the status
	   */
	  var setStatus = function(msg) {
	    if (g.statusNode) {
	      g.statusNode.nodeValue = msg;
	    }
	  };

	  /**
	   * Logs a msg to the HTML based console that is only visible
	   * when debug = true.
	   * @memberOf module:CommonUI
	   * @param {string} str msg to add to log
	   */
	  var log = function(str) {
	    g.logger.log(str);
	  };

	  /**
	   * Logs an error to the HTML based console that is only visible
	   * when debug = true.
	   * @memberOf module:CommonUI
	   * @param {string} str msg to add to log
	   */
	  var error = function(str) {
	    g.logger.error(str);
	  };

	  return {
	    askForNameOnce: askForNameOnce,
	    log: log,
	    error: error,
	    setOrientation: setOrientation,
	    setStatus: setStatus,
	    setupStandardControllerUI: setupStandardControllerUI,
	    showMenu: showMenu,
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));





/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
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

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	  var NullLogger = function() {
	  };

	  NullLogger.prototype.log = function() {
	  };

	  NullLogger.prototype.error = function() {
	  };

	  var ConsoleLogger = function() {
	  };

	  ConsoleLogger.prototype.log = function() {
	    console.log.apply(console, arguments);
	  };

	  ConsoleLogger.prototype.error = function() {
	    console.error.apply(console, arguments);
	  };

	  var HTMLLogger = function(element, opt_maxLines) {
	    this.container = element;
	    this.maxLines = opt_maxLines || 10;
	    this.lines = [];
	  };

	  HTMLLogger.prototype.addLine_ = function(msg, color) {
	    var line;
	    var text;
	    if (this.lines.length < this.maxLines) {
	      line = document.createElement("div");
	      text = document.createTextNode("");
	      line.appendChild(text);
	    } else {
	      line = this.lines.shift();
	      line.parentNode.removeChild(line);
	      text = line.firstChild;
	    }

	    this.lines.push(line);
	    text.nodeValue = msg;
	    line.style.color = color;
	    this.container.appendChild(line);
	  };

	  // FIX! or move to strings.js
	  var argsToString = function(args) {
	    var lastArgWasNumber = false;
	    var numArgs = args.length;
	    var strs = [];
	    for (var ii = 0; ii < numArgs; ++ii) {
	      var arg = args[ii];
	      if (arg === undefined) {
	        strs.push('undefined');
	      } else if (typeof arg === 'number') {
	        if (lastArgWasNumber) {
	          strs.push(", ");
	        }
	        if (arg === Math.floor(arg)) {
	          strs.push(arg.toFixed(0));
	        } else {
	        strs.push(arg.toFixed(3));
	        }
	        lastArgWasNumber = true;
	      } else if (window.Float32Array && arg instanceof Float32Array) {
	        // TODO(gman): Make this handle other types of arrays.
	        strs.push(tdl.string.argsToString(arg));
	      } else {
	        strs.push(arg.toString());
	        lastArgWasNumber = false;
	      }
	    }
	    return strs.join("");
	  };

	  HTMLLogger.prototype.log = function() {
	    this.addLine_(argsToString(arguments), undefined);
	  };

	  HTMLLogger.prototype.error = function() {
	    this.addLine_(argsToString(arguments), "red");
	  };

	  var GameLogger = function(client) {
	    this.log = client.logImpl.bind(client);
	    this.error = client.errorImpl.bind(client);
	  };

	  return {
	    ConsoleLogger: ConsoleLogger,
	    GameLogger: GameLogger,
	    HTMLLogger: HTMLLogger,
	    NullLogger: NullLogger,
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));




/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
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

	/**
	 * Misc IO functions
	 * @module IO
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	  var log = function() { };
	  //var log = console.log.bind(console);

	  /**
	   * @typedef {Object} SendJson~Options
	   * @memberOf module:IO
	   * @property {number?} timeout. Timeout in ms to abort.
	   *        Default = no-timeout
	   */

	  /**
	   * sends a JSON 'POST' request, returns JSON repsonse
	   * @memberOf module:IO
	   * @param {string} url url to POST to.
	   * @param {Object=} jsonObject JavaScript object on which to
	   *        call JSON.stringify.
	   * @param {!function(error, object)} callback Function to call
	   *        on success or failure. If successful error will be
	   *        null, object will be json result from request.
	   * @param {module:IO~SendJson~Options?} options
	   */
	  var sendJSON = function(url, jsonObject, callback, option) {
	    option = option || { };
	//    var error = 'sendJSON failed to load url "' + url + '"';
	    var request = new XMLHttpRequest();
	    if (request.overrideMimeType) {
	      request.overrideMimeType('text/plain');
	    }
	    var timeout = option.timeout || 0;
	    if (timeout) {
	      request.timeout = timeout;
	      log("set timeout to: " + request.timeout);
	    }
	    request.open('POST', url, true);
	    var js = JSON.stringify(jsonObject);
	    var callCallback = function(error, json) {
	      if (callback) {
	        log("calling-callback:" + (error ? " has error" : "success"));
	        callback(error, json);
	        callback = undefined;  // only call it once.
	      }
	    };
	//    var handleAbort = function(e) {
	//      log("--abort--");
	//      callCallback("error (abort) sending json to " + url);
	//    }
	    var handleError = function(/*e*/) {
	      log("--error--");
	      callCallback("error sending json to " + url);
	    };
	    var handleTimeout = function(/*e*/) {
	      log("--timeout--");
	      callCallback("timeout sending json to " + url);
	    };
	    var handleForcedTimeout = function(/*e*/) {
	      if (callback) {
	        log("--forced timeout--");
	        request.abort();
	        callCallback("forced timeout sending json to " + url);
	      }
	    };
	    var handleFinish = function() {
	      log("--finish--");
	      var json = undefined;
	      // HTTP reports success with a 200 status. The file protocol reports
	      // success with zero. HTTP does not use zero as a status code (they
	      // start at 100).
	      // https://developer.mozilla.org/En/Using_XMLHttpRequest
	      var success = request.status === 200 || request.status === 0;
	      if (success) {
	        try {
	          json = JSON.parse(request.responseText);
	        } catch (e) {
	          success = false;
	        }
	      }
	      callCallback(success ? null : 'could not load: ' + url, json);
	    };
	    try {
	      // Safari 7 seems to ignore the timeout.
	      if (timeout) {
	        setTimeout(handleForcedTimeout, timeout + 50);
	      }
	      request.addEventListener('load', handleFinish, false);
	      request.addEventListener('timeout', handleTimeout, false);
	      request.addEventListener('error', handleError, false);
	      request.setRequestHeader("Content-type", "application/json");
	      request.send(js);
	      log("--sent: " + url);
	    } catch (e) {
	      log("--exception--");
	      setTimeout(function() {
	        callCallback('could not load: ' + url, null);
	      }, 0);
	    }
	  };

	  return {
	    sendJSON: sendJSON,
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
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

	/*eslint strict:0*/

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

	  /**
	   * Represents a cookie.
	   *
	   * This is an object, that way you set the name just once so
	   * calling set or get you don't have to worry about getting the
	   * name wrong.
	   *
	   * @example
	   *     var fooCookie = new Cookie("foo");
	   *     var value = fooCookie.get();
	   *     fooCookie.set(newValue);
	   *     fooCookie.erase();
	   *
	   * @constructor
	   * @alias Cookie
	   * @param {string} name of cookie
	   * @param {string?} opt_path path for cookie. Default "/"
	   */
	  var Cookie = function(name, opt_path) {
	    var path = opt_path || "/";

	    /**
	     * Sets the cookie
	     * @param {string} value value for cookie
	     * @param {number?} opt_days number of days until cookie
	     *        expires. Default = none
	     */
	    this.set = function(value, opt_days) {
	      if (value === undefined) {
	        this.erase();
	        return;
	      }
	      // Cordova/Phonegap doesn't support cookies so use localStorage?
	      if (window.hftSettings && window.hftSettings.inApp) {
	        window.localStorage.setItem(name, value);
	        return;
	      }
	      var expires = "";
	      opt_days = opt_days || 9999;
	      var date = new Date();
	      date.setTime(Date.now() + Math.floor(opt_days * 24 * 60 * 60 * 1000));  // > 32bits. Don't use | 0
	      expires = "; expires=" + date.toGMTString();
	      var cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=" + path;
	      document.cookie = cookie;
	    };

	    /**
	     * Gets the value of the cookie
	     * @return {string?} value of cookie
	     */
	    this.get = function() {
	      // Cordova/Phonegap doesn't support cookies so use localStorage?
	      if (window.hftSettings && window.hftSettings.inApp) {
	        return window.localStorage.getItem(name);
	      }

	      var nameEQ = encodeURIComponent(name) + "=";
	      var ca = document.cookie.split(';');
	      for (var i = 0; i < ca.length; ++i) {
	        var c = ca[i];
	        while (c.charAt(0) === ' ') {
	          c = c.substring(1, c.length);
	        }
	        if (c.indexOf(nameEQ) === 0) {
	          return decodeURIComponent(c.substring(nameEQ.length, c.length));
	        }
	      }
	    };

	    /**
	     * Erases the cookie.
	     */
	    this.erase = function() {
	      if (window.hftSettings && window.hftSettings.inApp) {
	        return window.localStorage.removeItem(name);
	      }
	      document.cookie = this.set(" ", -1);
	    };
	  };

	  return Cookie;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));




/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
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

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	  var zIndex = 15000;

	  function create(name, options) {
	    var elem = document.createElement(name);
	    if (options.className) {
	      elem.className = options.className;
	    }
	    var style = options.style;
	    if (style) {
	      Object.keys(style).forEach(function(key) {
	        elem.style[key] = style[key];
	      });
	    }
	    if (options.parent) {
	      options.parent.appendChild(elem);
	    }
	    return elem;
	  }

	  function addElem(content, options) {
	    var elem = create("div", options);
	    if (content instanceof HTMLElement) {
	      elem.appendChild(content);
	    } else {
	      elem.innerHTML = content;
	    }
	    return elem;
	  }

	  function close(elem) {
	    elem.parentNode.removeChild(elem);
	    --zIndex;
	  }

	  /**
	   * @typedef {Object} Dialog~Choice
	   * @property {string} msg message to display
	   * @property {function} [callback] callback if this choice is picked.
	   */

	  /**
	   * @typedef {Object} Dialog~Options
	   * @property {string} [title] unused?
	   * @property {(string|HTMLElement)} [msg]
	   * @property {Dialog~Choice[]} [choices]
	   */

	  /**
	   * Puts up a fullscreen dialog
	   * @param {Dialog~Options} options options for dialog.
	   * @param {function(?)) [callback] callback when dialog closes
	   */
	  function modal(options, callback) {
	    if (!callback) {
	      callback = function() {};
	    }

	    var cover     = create("div", { className: "hft-dialog-cover", style: { zIndex: zIndex++ } });
	    var filler    = create("div", { className: "hft-fullcenter", parent: cover });
	    var container = create("div", { className: "hft-dialog-container", parent: filler });

	    var closeIt = function() {
	      close(cover);
	      callback();
	    };

	    if (options.title) {
	      addElem(options.title, { className: "hft-dialog-title", parent: container });
	    }

	    addElem(options.msg, { className: "hft-dialog-content", parent: container });

	    function addObjectChoice(choice, ndx) {
	      var div = addElem("div", { className: "hft-dialog-choice", parent: container });
	      div.innerHTML = choice.msg;
	      var choiceCallback = function() {
	        close(cover);
	        (choice.callback || callback)(ndx);
	      };
	      div.addEventListener('click', choiceCallback);
	      div.addEventListener('touchend', choiceCallback);
	      return div;
	    }

	    function addStringChoice(msg, ndx) {
	      addObjectChoice({
	        msg: msg,
	        callback: function() {
	          callback(ndx);
	        },
	      });
	    }

	    if (options.choices) {
	      options.choices.forEach(function(choice, ndx) {
	       if (typeof choice === 'string') {
	         addStringChoice(choice, ndx);
	       } else {
	         addObjectChoice(choice, ndx);
	       }
	      });
	    } else if (callback) {
	      container.addEventListener('click', closeIt, false);
	      container.addEventListener('touchend', closeIt, false);
	    }

	    document.body.appendChild(cover);
	  }

	  return {
	    modal: modal,
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
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

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(7),
	  ], __WEBPACK_AMD_DEFINE_RESULT__ = function(
	    hftSettings) {

	  var requestFullScreen = function(element) {
	    if (element.requestFullscreen) {
	      element.requestFullscreen();
	    } else if (element.msRequestFullscreen) {
	      element.msRequestFullscreen();
	    } else if (element.webkitRequestFullScreen) {
	      element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	    } else if (element.webkitRequestFullscreen) {
	      element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
	    } else if (element.mozRequestFullScreen) {
	      element.mozRequestFullScreen();
	    } else if (element.mozRequestFullscreen) {
	      element.mozRequestFullscreen();
	    }
	  };

	  var noop = function() {
	  };

	  var cancelFullScreen = (
	      document.exitFullscreen ||
	      document.exitFullScreen ||
	      document.msExitFullscreen ||
	      document.msExitFullScreen ||
	      document.webkitCancelFullscreen ||
	      document.webkitCancelFullScreen ||
	      document.mozCancelFullScreen ||
	      document.mozCancelFullscreen ||
	      noop).bind(document);

	  function isFullScreen() {
	    var f = document.fullscreenElement ||
	            document.fullScreenElement ||
	            document.webkitFullscreenElement ||
	            document.mozFullScreenElement ||
	            document.webkitIsFullScreen;
	    return (f !== undefined && f !== null && f !== false) || hftSettings.isApp;
	  }

	  var onFullScreenChange = function(element, callback) {
	    document.addEventListener('fullscreenchange', function(/*event*/) {
	        callback(isFullScreen());
	      });
	    element.addEventListener('webkitfullscreenchange', function(/*event*/) {
	        callback(isFullScreen());
	      });
	    document.addEventListener('mozfullscreenchange', function(/*event*/) {
	        callback(isFullScreen());
	      });
	  };

	  function canGoFullScreen() {
	    var body = window.document.body || {};
	    var r = body.requestFullscreen ||
	            body.requestFullScreen ||
	            body.msRequestFullscreen ||
	            body.msRequestFullScreen ||
	            body.webkitRequestFullScreen ||
	            body.webkitRequestFullscreen ||
	            body.mozRequestFullScreen ||
	            body.mozRequestFullscreen;
	    return r !== undefined && r !== null;
	  }

	  return {
	    cancelFullScreen: cancelFullScreen,
	    isFullScreen: isFullScreen,
	    canGoFullScreen: canGoFullScreen,
	    onFullScreenChange: onFullScreenChange,
	    requestFullScreen: requestFullScreen,
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
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
	(function(window) {

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {

	  if (window === undefined) {
	    window = {};
	  }
	  window.hftSettings = window.hftSettings || {};

	  return window.hftSettings;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(this));



/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
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

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	  console.log(
	    [ "%c",
	      "---------------------------------------------------------------------------------------------",
	      "If you'd like to know more about this sytem check out http://docs.happyfuntimes.net/docs",
	      "---------------------------------------------------------------------------------------------",
	      "",
	    ].join("\n"), "color:blue; font-weight: bold;");

	  return {
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));






/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
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

	/**
	 * @module Misc
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	  /**
	   * Copies properties from obj to dst recursively.
	   * @param {Object} obj Object with new settings.
	   * @param {Object} dst Object to receive new settings.
	   * @param {number?} opt_overwriteBehavior
	   *     *   0/falsy = overwrite
	   *
	   *         src    = {foo:'bar'}
	   *         dst    = {foo:'abc'}
	   *         result = {foo:'bar'}
	   *
	   *     *   1 = don't overwrite but descend if deeper
	   *
	   *         src    = {foo:{bar:'moo','abc':def}}
	   *         dst    = {foo:{bar:'ghi'}}
	   *         result = {foo:{bar:'ghi','abc':def}}
	   *
	   *         'foo' exists but we still go deeper and apply 'abc'
	   *
	   *     *   2 = don't overwrite don't descend
	   *
	   *             src    = {foo:{bar:'moo','abc':def}}
	   *             dst    = {foo:{bar:'ghi'}}
	   *             result = {foo:{bar:'ghi'}}
	   *
	   *         'foo' exists so we don't go any deeper
	   *
	   */
	  var copyProperties = function(src, dst, opt_overwriteBehavior) {
	    Object.keys(src).forEach(function(key) {
	      if (opt_overwriteBehavior === 2 && dst[key] !== undefined) {
	        return;
	      }
	      var value = src[key];
	      if (value instanceof Array) {
	        var newDst = dst[key];
	        if (!newDst) {
	          newDst = [];
	          dst[name] = newDst;
	        }
	        copyProperties(value, newDst, opt_overwriteBehavior);
	      } else if (value instanceof Object &&
	                 !(value instanceof Function) &&
	                 !(value instanceof HTMLElement)) {
	        var newDst2 = dst[key];
	        if (!newDst2) {
	          newDst2 = {};
	          dst[key] = newDst2;
	        }
	        copyProperties(value, newDst2, opt_overwriteBehavior);
	      } else {
	        if (opt_overwriteBehavior === 1 && dst[key] !== undefined) {
	          return;
	        }
	        dst[key] = value;
	      }
	    });
	    return dst;
	  };

	  function searchStringToObject(str, opt_obj) {
	    if (str[0] === '?') {
	      str = str.substring(1);
	    }
	    var results = opt_obj || {};
	    str.split("&").forEach(function(part) {
	      var pair = part.split("=").map(decodeURIComponent);
	      results[pair[0]] = pair[1] !== undefined ? pair[1] : true;
	    });
	    return results;
	  }

	  function objectToSearchString(obj) {
	    return "?" + Object.keys(obj).filter(function(key) {
	      return obj[key] !== undefined;
	    }).map(function(key) {
	      return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
	    }).join("&");
	  }

	  /**
	   * Reads the query values from a URL like string.
	   * @param {String} url URL like string eg. http://foo?key=value
	   * @param {Object} [opt_obj] Object to attach key values to
	   * @return {Object} Object with key values from URL
	   * @memberOf module:Misc
	   */
	  var parseUrlQueryString = function(str, opt_obj) {
	    var dst = opt_obj || {};
	    try {
	      var q = str.indexOf("?");
	      var e = str.indexOf("#");
	      if (e < 0) {
	        e = str.length;
	      }
	      var query = str.substring(q + 1, e);
	      searchStringToObject(query, dst);
	    } catch (e) {
	      console.error(e);
	    }
	    return dst;
	  };

	  /**
	   * Reads the query values from the current URL.
	   * @param {Object=} opt_obj Object to attach key values to
	   * @return {Object} Object with key values from URL
	   * @memberOf module:Misc
	   */
	  var parseUrlQuery = function(opt_obj) {
	    return searchStringToObject(window.location.search, opt_obj);
	  };

	  /**
	   * Read `settings` from URL. Assume settings it a
	   * JSON like URL as in http://foo?settings={key:value},
	   * Note that unlike real JSON we don't require quoting
	   * keys if they are alpha_numeric.
	   *
	   * @param {Object=} opt_obj object to apply settings to.
	   * @param {String=} opt_argumentName name of key for settings, default = 'settings'.
	   * @return {Object} object with settings
	   * @func applyUrlSettings
	   * @memberOf module:Misc
	   */
	  var fixKeysRE = new RegExp("([a-zA-Z0-9_]+)\:", "g");

	  var applyUrlSettings = function(opt_obj, opt_argumentName) {
	    var argumentName = opt_argumentName || 'settings';
	    var src = parseUrlQuery();
	    var dst = opt_obj || {};
	    var settingsStr = src[argumentName];
	    if (settingsStr) {
	      var json = settingsStr.replace(fixKeysRE, '"$1":');
	      var settings = JSON.parse(json);
	      copyProperties(settings, dst);
	    }
	    return dst;
	  };

	  /**
	   * Gets a function checking for prefixed versions
	   *
	   * example:
	   *
	   *     var lockOrientation = misc.getFunctionByPrefix(window.screen, "lockOrientation");
	   *
	   * @param {object} obj object that has function
	   * @param {string} funcName name of function
	   * @return {function?} or undefined if it doesn't exist
	   */
	  var prefixes = ["", "moz", "webkit", "ms"];
	  function getFunctionByPrefix(obj, funcName) {
	    var capitalName = funcName.substr(0, 1).toUpperCase() + funcName.substr(1);
	    for (var ii = 0; ii < prefixes.length; ++ii) {
	      var prefix = prefixes[ii];
	      var name = prefix + prefix ? capitalName : funcName;
	      var func = obj[name];
	      if (func) {
	        return func.bind(obj);
	      }
	    }
	  }

	  /**
	   * Creates an invisible iframe and sets the src
	   * @param {string} src the source for the iframe
	   * @return {HTMLIFrameElement} The iframe
	   */
	  function gotoIFrame(src) {
	    var iframe = document.createElement("iframe");
	    iframe.style.display = "none";
	    iframe.src = src;
	    document.body.appendChild(iframe);
	    return iframe;
	  }

	  /**
	   * get a random int
	   * @param {number} value max value exclusive. 5 = random 0 to 4
	   * @return {number} random int
	   * @memberOf module:Misc
	   */
	  var randInt = function(value) {
	    return Math.floor(Math.random() * value);
	  };

	  /**
	   * get a random CSS color
	   * @param {function(number): number?) opt_randFunc function to generate random numbers
	   * @return {string} random css color
	   * @memberOf module:Misc
	   */
	  var randCSSColor = function(opt_randFunc) {
	    var randFunc = opt_randFunc || randInt;
	    var strong = randFunc(3);
	    var colors = [];
	    for (var ii = 0; ii < 3; ++ii) {
	      colors.push(randFunc(128) + (ii === strong ? 128 : 64));
	    }
	    return "rgb(" + colors.join(",") + ")";
	  };

	  /**
	   * Gets a random element from array
	   * @param {Array<*>} array array to select element from
	   * @return {*} picked element
	   */
	  function pickRandomElement(array) {
	    return array[randInt(array.length)];
	  }

	  /**
	   * get a random 32bit color
	   * @param {function(number): number?) opt_randFunc function to generate random numbers
	   * @return {string} random 32bit color
	   * @memberOf module:Misc
	   */
	  var rand32BitColor = function(opt_randFunc) {
	    var randFunc = opt_randFunc || randInt;
	    var strong = randFunc(3);
	    var color = 0xFF;
	    for (var ii = 0; ii < 3; ++ii) {
	      color = (color << 8) | (randFunc(128) + (ii === strong ? 128 : 64));
	    }
	    return color;
	  };

	  /**
	   * finds a CSS rule.
	   * @param {string} selector
	   * @return {Rule?} matching css rule
	   * @memberOf module:Misc
	   */
	  var findCSSStyleRule = function(selector) {
	    for (var ii = 0; ii < document.styleSheets.length; ++ii) {
	      var styleSheet = document.styleSheets[ii];
	      var rules = styleSheet.cssRules || styleSheet.rules;
	      if (rules) {
	        for (var rr = 0; rr < rules.length; ++rr) {
	          var rule = rules[rr];
	          if (rule.selectorText === selector) {
	            return rule;
	          }
	        }
	      }
	    }
	  };

	  /**
	   * Inserts a text node into an element
	   * @param {HTMLElement} element element to have text node insert
	   * @return {HTMLTextNode} the created text node
	   * @memberOf module:Misc
	   */
	  var createTextNode = function(element) {
	    var txt = document.createTextNode("");
	    element.appendChild(txt);
	    return txt;
	  };

	  /**
	   * Returns the absolute position of an element for certain browsers.
	   * @param {HTMLElement} element The element to get a position
	   *        for.
	   * @returns {Object} An object containing x and y as the
	   *        absolute position of the given element.
	   * @memberOf module:Misc
	   */
	  var getAbsolutePosition = function(element) {
	    var r = { x: element.offsetLeft, y: element.offsetTop };
	    if (element.offsetParent) {
	      var tmp = getAbsolutePosition(element.offsetParent);
	      r.x += tmp.x;
	      r.y += tmp.y;
	    }
	    return r;
	  };

	  /**
	   * Clamp value
	   * @param {Number} v value to clamp
	   * @param {Number} min min value to clamp to
	   * @param {Number} max max value to clamp to
	   * @returns {Number} v clamped to min and max.
	   * @memberOf module:Misc
	   */
	  var clamp = function(v, min, max) {
	    return Math.max(min, Math.min(max, v));
	  };

	  /**
	   * Clamp in both positive and negative directions.
	   * Same as clamp(v, -max, +max)
	   *
	   * @param {Number} v value to clamp
	   * @param {Number} max max value to clamp to
	   * @returns {Number} v clamped to -max and max.
	   * @memberOf module:Misc
	   */
	  var clampPlusMinus = function(v, max) {
	    return clamp(v, -max, max);
	  };

	  /**
	   * Return sign of value
	   *
	   * @param {Number} v value
	   * @returns {Number} -1 if v < 0, 1 if v > 0, 0 if v == 0
	   * @memberOf module:Misc
	   */
	  var sign = function(v) {
	    return v < 0 ? -1 : (v > 0 ? 1 : 0);
	  };

	  /**
	   * Takes which ever is closer to zero
	   * In other words minToZero(-2, -1) = -1 and minToZero(2, 1) = 1
	   *
	   * @param {Number} v value to min
	   * @param {Number} min min value to use if v is less then -min
	   *        or greater than +min
	   * @returns {Number} min or v, which ever is closer to zero
	   * @memberOf module:Misc
	   */
	  var minToZero = function(v, min) {
	    return Math.abs(v) < Math.abs(min) ? v : min;
	  };

	  /**
	   * flips 0->max to max<-0 and 0->min to min->0
	   * In otherwords
	   *     max: 3, v: 2.7  =  0.3
	   *     max: 3, v:-2.7  = -0.3
	   *     max: 3, v: 0.2  =  2.8
	   *     max: 3, v:-0.2  = -2.8
	   *
	   * @param {Number} v value to flip.
	   * @param {Number} max range to flip inside.
	   * @returns {Number} flipped value.
	   * @memberOf module:Misc
	   */
	  var invertPlusMinusRange = function(v, max) {
	    return sign(v) * (max - Math.min(max, Math.abs(v)));
	  };

	  /**
	   * Convert degrees to radians
	   *
	   * @param {Number} d value in degrees
	   * @returns {Number} d in radians
	   * @memberOf module:Misc
	   */
	  var degToRad = function(d) {
	    return d * Math.PI / 180;
	  };

	  /**
	   * Converts radians to degrees
	   * @param {Number} r value in radians
	   * @returns {Number} r in degrees
	   * @memberOf module:Misc
	   */
	  var radToDeg = function(r) {
	    return r * 180 / Math.PI;
	  };

	  /**
	   * Resizes a cavnas to match its CSS displayed size.
	   * @param {Canvas} canvas canvas to resize.
	   * @param {boolean?} useDevicePixelRatio if true canvas will be
	   *        created to match devicePixelRatio.
	   * @memberOf module:Misc
	   */
	  var resize = function(canvas, useDevicePixelRatio) {
	    var mult = useDevicePixelRatio ? window.devicePixelRatio : 1;
	    mult = mult || 1;
	    var width  = Math.floor(canvas.clientWidth  * mult);
	    var height = Math.floor(canvas.clientHeight * mult);
	    if (canvas.width !== width ||
	        canvas.height !== height) {
	      canvas.width = width;
	      canvas.height = height;
	      return true;
	    }
	  };

	  /**
	   * Copies all the src properties to the dst
	   * @param {Object} src an object with some properties
	   * @param {Object} dst an object to receive copes of the properties
	   * @return returns the dst object.
	   */
	  function applyObject(src, dst) {
	    Object.keys(src).forEach(function(key) {
	      dst[key] = src[key];
	    });
	    return dst;
	  }

	  /**
	   * Merges the proprties of all objects into a new object
	   *
	   * Example:
	   *
	   *     var a = { abc: "def" };
	   *     var b = { xyz: "123" };
	   *     var c = Misc.mergeObjects(a, b);
	   *
	   *     // c = { abc: "def", xyz: "123" };
	   *
	   * Later object properties take precedence
	   *
	   *     var a = { abc: "def" };
	   *     var b = { abc: "123" };
	   *     var c = Misc.mergeObjects(a, b);
	   *
	   *     // c = { abc: "123" };
	   *
	   * @param {...Object} object objects to merge.
	   * @return an object containing the merged properties
	   */
	  function mergeObjects(object) {  // eslint-disable-line
	    var merged = {};
	    Array.prototype.slice.call(arguments).forEach(function(src) {
	      if (src) {
	        applyObject(src, merged);
	      }
	    });
	    return merged;
	  }

	  /**
	   * Creates a random id
	   * @param {number} [digits] number of digits. default 16
	   */
	  function makeRandomId(digits) {
	    digits = digits || 16;
	    var id = "";
	    for (var ii = 0; ii < digits; ++ii) {
	      id = id + ((Math.random() * 16 | 0)).toString(16);
	    }
	    return id;
	  }

	  /**
	   * Applies an object of listeners to an emitter.
	   *
	   * Example:
	   *
	   *     applyListeners(someDivElement, {
	   *       mousedown: someFunc1,
	   *       mousemove: someFunc2,
	   *       mouseup: someFunc3,
	   *     });
	   *
	   * Which is the same as
	   *
	   *     someDivElement.addEventListener("mousedown", someFunc1);
	   *     someDivElement.addEventListener("mousemove", someFunc2);
	   *     someDivElement.addEventListener("mouseup", someFunc3);
	   *
	   * @param {Emitter} emitter some object that emits events and has a function `addEventListener`
	   * @param {Object.<string, function>} listeners eventname function pairs.
	   */
	  function applyListeners(emitter, listeners) {
	    Object.keys(listeners).forEach(function(name) {
	      emitter.addEventListener(name, listeners[name]);
	    });
	  }

	  return {
	    applyObject: applyObject,
	    applyUrlSettings: applyUrlSettings,
	    applyListeners: applyListeners,
	    clamp: clamp,
	    clampPlusMinus: clampPlusMinus,
	    copyProperties: copyProperties,
	    createTextNode: createTextNode,
	    degToRad: degToRad,
	    findCSSStyleRule: findCSSStyleRule,
	    getAbsolutePosition: getAbsolutePosition,
	    getFunctionByPrefix: getFunctionByPrefix,
	    gotoIFrame: gotoIFrame,
	    invertPlusMinusRange: invertPlusMinusRange,
	    makeRandomId: makeRandomId,
	    mergeObjects: mergeObjects,
	    minToZero: minToZero,
	    objectToSearchString: objectToSearchString,
	    parseUrlQuery: parseUrlQuery,
	    parseUrlQueryString: parseUrlQueryString,
	    pickRandomElement: pickRandomElement,
	    radToDeg: radToDeg,
	    randInt: randInt,
	    randCSSColor: randCSSColor,
	    rand32BitColor: rand32BitColor,
	    resize: resize,
	    sign: sign,
	    searchStringToObject: searchStringToObject,
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));




/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
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

	/**
	 * Various hacks to try to get mobile browsers to do what I want but that
	 * probably wouldn't be needed if I actually understood the platform.
	 *
	 * @module MobileHacks
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

	  var $ = document.getElementById.bind(document);

	  // shit hacks for iOS8 because iOS8 barfs toolbars on the screen and
	  // (a) the user can NOT dismiss them and (b) there is no way for the
	  // webpage to see they exist. This only happens on iPhone 4/4s/5/s.
	  //var isIOS;
	  var shittyOldIPhoneWithShittyIOS8Plus = function() {
	    var iPhone4 = (window.screen.height === (960 / 2));
	    var iPhone5 = (window.screen.height === (1136 / 2));
	    var iOS8Plus = function() {
	      if (/iP(hone|od|ad)/.test(navigator.platform)) {
	        // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
	        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
	        //isIOS = true;
	        return parseInt(v[1], 10) >= 8;
	      }
	    }();
	    return iOS8Plus && (iPhone4 || iPhone5);
	  }();

	  var isIOS8OrNewerAndiPhone4OrIPhone5 = function() {
	    return shittyOldIPhoneWithShittyIOS8Plus;
	  };

	  var isIOS = function() {
	    var itsIOS = (/iP(hone|od|ad)/i).test(navigator.platform);
	    return function() {
	      return itsIOS;
	    };
	  }();

	  var isMobile = function() {
	    // yes I know I should feature detect. FUCK YOU!
	    var mobile = (/Android|webOS|Phone|Pad|Pod|Tablet|BlackBerry/i).test(navigator.userAgent);
	    return function() {
	      return mobile;
	    };
	  }();

	  /**
	   * resets the height of any element with CSS class "fixeight"
	   * by setting its hight to the cliehgtHeight of its parent
	   *
	   * The problem this is trying to solve is sometimes you have
	   * an element set to 100% but when the phone rotates
	   * the browser does not reset the size of the element even
	   * though it's parent has been resized.
	   *
	   * This will be called automatically when the phone rotates
	   * or the window is resized but I found I often needed to
	   * call it manually at the start of a controller
	   *
	   * @memberOf module:MobileHacks
	   */
	  var fixHeightHack = function() {
	    // Also fix all fucked up sizing
	    var elements = document.querySelectorAll(".fixheight");
	    for (var ii = 0; ii < elements.length; ++ii) {
	      var element = elements[ii];
	      var parent = element.parentNode;
	      if (parseInt(element.style.height) !== parent.clientHeight) {
	        element.style.height = parent.clientHeight + "px";
	      }
	    }
	  };

	  var adjustCSSBasedOnPhone = function(perPhoneClasses) {
	    perPhoneClasses.forEach(function(phone) {
	      if (phone.test()) {
	        Array.prototype.forEach.call(document.styleSheets, function(sheet) {
	          var classes = sheet.rules || document.sheet.cssRules;
	          Array.prototype.forEach.call(classes, function(c) {
	            var adjustments = phone.styles[c.selectorText];
	            if (adjustments) {
	              Object.keys(adjustments).forEach(function(key) {
	//console.log(key + ": old " + c.style[key]);
	                if (c.style.setProperty) {
	                  c.style.setProperty(key, adjustments[key]);
	                } else {
	                  c.style[key] = adjustments[key];
	                }
	//console.log(key + ": new " + c.style[key]);
	              });
	            }
	          });
	        });
	      }
	    });
	  };

	  var fixupAfterSizeChange = function() {
	    window.scrollTo(0, 0);
	    fixHeightHack();
	    window.scrollTo(0, 0);
	  };

	  // When the device re-orients, at least on iOS, the page is scrolled down :(
	  window.addEventListener('orientationchange', fixupAfterSizeChange, false);
	  window.addEventListener('resize', fixupAfterSizeChange, false);

	  // Prevents the browser from sliding the page when the user slides their finger.
	  // At least on iOS.
	  var stopSliding = function() {
	    if (!document.body) {
	      setTimeout(stopSliding, 4);
	    } else {
	      document.body.addEventListener('touchmove', function(e) {
	        e.preventDefault();
	      }, false);
	    }
	  };
	  stopSliding();


	  // This DOESN'T WORK! I'm leaving it here so I can revisit it.
	  // The issue is all kinds of things mess up. Events are not rotated,
	  // the page does strange things.
	  var forceLandscape = function() {
	    // Note: This code is for games that require a certain orientation
	    // on phones only. I'm making the assuption that tablets don't need
	    // this.
	    //
	    // The issue I ran into is I tried to show several people games
	    // and they had their phone orientation locked to portrait. Having
	    // to go unlock just to play the game was frustrating. So, for
	    // controllers than require landscape just try to make the page
	    // show up in landscape. They'll understand they need to turn the phone.
	    //
	    // If the orientation is unlocked they'll turn and the page will
	    // switch to landscape. If the orientation is locked then turning
	    // the phone will not switch to landscape NOR will we get an orientation
	    // event.
	    var everything = $("hft-everything");
	    var detectPortrait = function() {
	      if (screen.width < screen.height) {
	        everything.className = "hft-portrait-to-landscape";
	        everything.style.width = window.innerHeight + "px";
	        everything.style.height = window.innerWidth + "px";

	        var viewport = document.querySelector("meta[name=viewport]");
	        viewport.setAttribute('content', 'width=device-height, initial-scale=1.0, maximum-scale=1, user-scalable=no, minimal-ui');
	      } else {
	        everything.className = "";
	      }
	    };

	    detectPortrait();
	    window.addEventListener('resize', detectPortrait, false);
	  };

	  function preventEvent(e) {
	    e.preventDefault();
	    return false;
	  }

	  /**
	   * Disable the context menus!
	   * At least on Android if you long press on an image it asks if you
	   * want to save it. I'd think "user-select: none" CSS should handle that
	   * but nope
	   */
	  function disableContextMenu() {
	    // for now just images.
	    Array.prototype.forEach.call(document.getElementsByTagName("img"), function(img) {
	      img.addEventListener('contextmenu', preventEvent, false);
	    });
	  }


	  window.scrollTo(0, 0);

	  return {
	    disableContextMenu: disableContextMenu,
	    fixHeightHack: fixHeightHack,
	    forceLandscape: forceLandscape,
	    adjustCSSBasedOnPhone: adjustCSSBasedOnPhone,
	    isIOS8OrNewerAndiPhone4OrIPhone5: isIOS8OrNewerAndiPhone4OrIPhone5,
	    isIOS: isIOS,
	    isMobile: isMobile,
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
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

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(7),
	    __webpack_require__(9),
	  ], __WEBPACK_AMD_DEFINE_RESULT__ = function(
	    hftSettings,
	    misc) {

	  var lockOrientation = misc.getFunctionByPrefix(window.screen, "lockOrientation");
	  var unlockOrientation = misc.getFunctionByPrefix(window.screen, "unlockOrientation");
	  var currentOrientation = "none";
	  var _canOrient = true;

	  if (!hftSettings.isApp && window.screen.orientation && window.screen.orientation.lock) {
	    lockOrientation = function(orientation) {
	      window.screen.orientation.lock(orientation).then(function() {
	        console.log("orientation set");
	      }, function(err) {
	        console.error("can not set orientation:", err);
	      });
	    };
	    unlockOrientation = function() {
	      window.screen.orientation.unlock().then(function() {
	        console.log("orientation unlocked");
	      }, function(err) {
	        console.error("can not unlock orientation:", err);
	      });
	    };
	  }

	  if (!lockOrientation) {
	    _canOrient = false;
	    lockOrientation = function() {
	      console.warn("orientation locking not supported");
	    };
	    unlockOrientation = function() {
	    };
	  }

	  /**
	   * Sets the orientation of the screen
	   * @param {string} [orienation] The orientation to set the phone.
	   *   Only works on Android or the App.
	   *
	   *   Valid values are:
	   *
	   *     "portrait-primary"    // normal way people hold phones
	   *     "portrait-secondary"  // upsidedown
	   *     "landscape-primary"   // phone turned clockwise 90 degrees from normal
	   *     "landscape-secondary" // phone turned counter-clockwise 90 degrees from normal
	   *     "none" (or undefined) // unlocked
	   */
	  function set(orientation) {
	    orientation = orientation || "none";
	    if (orientation !== currentOrientation) {
	      currentOrientation = orientation;
	      if (currentOrientation === "none") {
	        console.log("unlock orienation");
	        unlockOrientation();
	      } else {
	        console.log("set orienation: " + orientation);
	        lockOrientation(orientation);
	      }
	    }
	  }

	  /**
	   * Returns true if orientation is supported.
	   * @return {boolean} true if orientation is supported
	   */
	  function canOrient() {
	    return _canOrient;
	  }

	  return {
	    set: set,
	    canOrient: canOrient,
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
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

	// Functions for dealing with the player's name. The name events are arguably
	// not part of the HappyFunTimes library but they are used in most of the samples
	// so I put them here.
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(4),
	    __webpack_require__(9),
	  ], __WEBPACK_AMD_DEFINE_RESULT__ = function(
	    Cookie,
	    misc) {

	  var $ = function(id) {
	    return document.getElementById(id);
	  };

	  var q = misc.parseUrlQuery();

	  var startingNames = [
	    "Aaron",    "Momo",
	    "Michael",  "Remi",
	    "Matt",     "Aya",
	    "John",     "Stephanie",
	    "Brian",    "Anna",
	    "Danny",    "Jen",
	    "Gregg",    "Tami",
	    "Vincent",  "Carole",
	    "Eric",     "Anita",
	    "Rick",     "Joss",
	    "Colin",    "Angel",
	  ];

	  var PlayerNameHandler = function(client, element) {
	    var nameCookie = new Cookie("name");
	    var name = nameCookie.get() || q.name || "";

	    // UGH! I guess this name stuff should move to CommonUI. At one point
	    // it seemed separte
	    var nameentry = $("hft-nameentry");
	    var content = $("hft-content");
	    var contentOriginalDisplay = content.style.display;

	    var copyNameToElement = function() {
	      element.value = name;
	    };

	    this.getName = function() {
	      return name;
	    };

	    var nameIsPlayerRE = /^player\d*$/i;
	    function isNameSet() {
	      return name && !nameIsPlayerRE.test(name);
	    };

	    this.isNameSet = isNameSet;

	    var handleSetNameMsg = function(msg) {
	      name = msg.name;
	      copyNameToElement();
	    };

	    var sendName = function() {
	      client.sendCmd('_hft_setname_', {
	          name: name,
	      });
	    };

	    var sendBusy = function(busy) {
	      client.sendCmd('_hft_busy_', {
	          busy: busy,
	      });
	    };

	    var startEnteringName = function() {
	      // Allow the game to help the player by, for example, removing her character
	      // while she's entering her name. Unfortunately that could be used to cheat
	      // as in just before she's about to be hit she clicks the name. It's up the individual
	      // game to decide if it want's to pay attention to the 'busy' event.
	      sendBusy(true);
	    };

	    var finishEnteringName = function(e) {
	      // Unfortunately hiding the controls screwed up iOS Safari. After editing
	      // the name the page would be scrolled down a certain number of pixels
	      // like a 2/3rd of the page worth. No idea why. So again I needed
	      // to do some hacky fix like scroll back to the top.
	      content.style.display = contentOriginalDisplay;
	      nameentry.style.display = "none";
	      window.scroll(0, 1);
	      window.scroll(0, 0);
	      e.preventDefault();
	      element.blur();
	      var newName = element.value.replace(/[<>]/g, '');
	      if (newName.length > 16) {
	        newName = newName.substring(0, 16);
	      }
	      if (newName.length === 0) {
	        element.value = name;
	      } else if (newName !== name) {
	        name = newName;
	        nameCookie.set(name, 700);
	        sendName();
	      }
	      sendBusy(false);
	    };

	    this.startNameEntry = function() {
	      // Chrome on Android seems to really mess up here. Or rather my CSS-fu sucks
	      // so where as on iOS when you edit your name it just works, on Chrome
	      // the controls fly up over the input=text area. This was the hacky
	      // solution. Just hide the controls while entering the name. (see below)
	      nameentry.style.display = "block";
	      content.style.display = "none";
	      if (!isNameSet()) {
	        element.value = misc.pickRandomElement(startingNames);
	      }
	      element.focus();
	    };

	    // If the user's name is "" the game may send a name.
	    client.addEventListener('_hft_setname_', handleSetNameMsg);

	    element.addEventListener('click', startEnteringName, false);
	    element.addEventListener('change', finishEnteringName, false);
	    element.addEventListener('blur', finishEnteringName, false);
	    element.addEventListener('focus', startEnteringName, false);

	    if (element.form) {
	      element.form.addEventListener('submit', finishEnteringName, false);
	    }

	    copyNameToElement();
	    sendName();
	  };

	  return PlayerNameHandler;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
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

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	  __webpack_require__(14),
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(
	  EventEmitter
	) {

	  class PlayerNameManager extends EventEmitter {
	    constructor(netPlayer) {
	      super();
	      this._netPlayer = netPlayer;
	      this._name = "";
	      this._busy = false;

	      this._handleSetName = this._handleSetName.bind(this);
	      this._handleBusy = this._handleBusy.bind(this);

	      netPlayer.on('_hft_setname_', this._handleSetName);
	      netPlayer.on('_hft_busy_', this._handleBusy);
	    }

	    _handleSetName(data) {
	      if (data.name && data.name !== this._name) {
	        this._name = data.name;
	        this.emit('setName', this._name);
	      }
	    }

	    _handleBusy(data) {
	      if (data.busy !== this._busy) {
	        this._busy = data.busy;
	        this.emit('busy', this._busy);
	      }
	    }

	    get name() {
	      return this._name;
	    }

	    get busy() {
	      return this._busy;
	    }
	  }

	  return PlayerNameManager;

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
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

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {

	  /**
	   * This is similar to node's EventEmitter.
	   * The major difference is calling `addEventListner`
	   * or `removeEventListener` with `null` or `undefined`
	   * will remove all listeners for that event.
	   */
	  var EventEmitter = function() {
	    var events = {};
	    var maxListeners = 10;

	    var setMaxListeners = function(max) {
	      maxListeners = max;
	    };

	    var addEventListener = function(name, handler) {
	      if (!handler) {
	        delete events[name];
	        return;
	      }

	      var handlers = events[name];
	      if (!handlers) {
	        handlers = [];
	        events[name] = handlers;
	      }
	      handlers.push(handler);
	      if (handlers.length > maxListeners) {
	        console.warn("More than " + maxListeners + " added to event " + name);
	      }
	    };

	    var removeEventListener = function(name, handler) {
	      if (!handler) {
	        delete events[name];
	        return;
	      }

	      var handlers = events[name];
	      if (handlers) {
	        var ndx = handlers.indexOf(handler);
	        if (ndx >= 0) {
	          handlers.splice(ndx, 1);
	        }
	      }
	    };

	    var removeAllEventListeners = function() {
	      events = {};
	    };

	    var emit = function(name) {
	      var handlers = events[name];
	      if (handlers) {
	        var args = Array.prototype.slice.call(arguments, 1);
	        handlers.forEach(function(handler) {
	          handler.apply(this, args);
	        });
	      }
	    };

	    var listeners = function(name) {
	      return events[name];
	    };

	    this.on = addEventListener;
	    this.addEventListener = addEventListener;
	    this.removeEventListener = removeEventListener;
	    this.removeAllEventListeners = removeAllEventListeners;
	    this.addListener = addEventListener;
	    this.removeListener = removeEventListener;
	    this.removeAllListeners = removeAllEventListeners;
	    this.emit = emit;
	    this.listeners = listeners;
	    this.setMaxListeners = setMaxListeners;
	  };

	  return EventEmitter;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
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

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ ], __WEBPACK_AMD_DEFINE_RESULT__ = function() {

	  var drawCircle = function(ctx, x, y, radius, flags) {
	    flags = flags || 1;
	    ctx.beginPath();
	    ctx.arc(x, y, radius, 0, Math.PI * 2);
	    if (flags & 1) {
	      ctx.fill();
	    }
	    if (flags & 2) {
	      ctx.stroke();
	    }
	  };

	  /**
	   * @typedef {Object} DPad~Options
	   * @property {HTMLElement} elemnt element to put dpad inside.
	   *           DPad will be resized to fit this element or to the
	   *           size specified
	   * @property {number} size size in CSS pixels to make DPad
	   */

	  /**
	   * Renders a Dpad
	   *
	   * @constructor
	   * @alias DPad
	   * @param {DPad~Options} options
	   */
	  var DPad = function(options) {
	    this.element = options.element;
	    this.size = options.size;
	    this.canvas = document.createElement("canvas");
	    // We have to put this in the DOM before asking it's size.
	    this.element.appendChild(this.canvas);
	    this.resize();
	    this.ctx = this.canvas.getContext("2d");
	    this.drawBits(0);
	  };

	  /**
	   * Gets the size of the dpad
	   * @return {number} size of dpad in CSS pixels
	   */
	  DPad.prototype.getSize = function() {
	    var size = this.size;
	    if (!size) {
	      size = Math.min(this.canvas.width, this.canvas.height);
	    }
	    return size;
	  };

	  /**
	   * Draws the dpad given a set of bits
	   * @param {number} bits where 0x1 is right, 0x2 is left, 0x4 is
	   *        up and 0x8 is down.
	   */
	  DPad.prototype.drawBits = function(bits) {
	    var size = this.getSize();
	    var w6 = Math.floor(size / 6.5);
	    var cx = Math.floor(size / 2);
	    var cy = Math.floor(size / 2);
	    var w = Math.floor(size / 2 * 0.8);
	    var h = Math.floor(size / 2 * 0.8);
	    var ctx = this.ctx;

	    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	    ctx.save();
	    ctx.translate(cx, cy);
	    ctx.fillStyle = "#AAA";
	    ctx.stokeStyle = "#444";
	    drawCircle(ctx, 0, 0, cx * 0.95, 3);

	    ctx.fillStyle = "#888";
	    ctx.fillRect(-w6, -h, w6 * 2, h * 2);
	    ctx.fillRect(-w, -w6, w * 2, w6 * 2);

	    ctx.fillStyle = "#CCC";

	    if (bits & 0x1) {
	      //ctx.fillRect(  w - w6 * 2, -w6         , w6 * 2, w6 * 2 ); }
	      drawCircle(ctx,  w - w6, 0, w6 * 0.8);
	    }
	    if (bits & 0x2) {
	      //ctx.fillRect( -w         , -w6         , w6 * 2, w6 * 2 ); }
	      drawCircle(ctx, -w + w6, 0, w6 * 0.8);
	    }
	    if (bits & 0x4) {
	      //ctx.fillRect( -w6        , -h          , w6 * 2, w6 * 2); }
	      drawCircle(ctx, 0, -w + w6, w6 * 0.8);
	    }
	    if (bits & 0x8) {
	      //ctx.fillRect( -w6        ,  h - w6 * 2 , w6 * 2, w6 * 2); }
	      drawCircle(ctx, 0,  w - w6, w6 * 0.8);
	    }

	    ctx.restore();
	  };

	  /**
	   * Draws the dpad given a DirInfo
	   * @param {module:Input.DirectionInfo} dirInfo
	   */
	  DPad.prototype.draw = function(dirInfo) {
	    this.drawBits(dirInfo.bits);
	  };

	  /**
	   * Resizes the DPad to match its container or to the size
	   * specified at creation time
	   */
	  DPad.prototype.resize = function() {
	    var size = this.size;
	    if (!size) {
	      size = Math.min(this.canvas.clientWidth, this.canvas.clientHeight);
	    }
	    if (this.canvas.width !== size ||
	        this.canvas.height !== size) {
	      this.canvas.width = size;
	      this.canvas.height = size;
	    }
	  };

	  return DPad;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));





/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
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

	/**
	 * Various functions to help with user input
	 * @module Input
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function(Misc) {

	  /**
	   * The cursor key values. Can be used to register keys
	   * @enum {number}
	   * @memberOf module:Input
	   */
	  var cursorKeys = {
	    kLeft: 37,
	    kRight: 39,
	    kUp: 38,
	    kDown: 40,
	  };

	  /**
	   * You can use these to make your own options for setupKeyboardDPadKeys
	   * @const {number[]} kCursorKeys
	   * @memberOf module:Input
	   */
	  var kCursorKeys = [37, 39, 38, 40];
	  /**
	   * You can use these to make your own options for setupKeyboardDPadKeys
	   * @const {number[]} kASWDKeys
	   * @memberOf module:Input
	   */
	  var kASWDKeys = [65, 68, 87, 83];

	  /**
	   * You can use these to make your own options for setupKeyboardDPadKeys
	   *
	   *     Input.setupKeyboardDPadKeys(callback, Input.kASWDPadOnly);
	   *
	   * @const {module:Input.DPadKeys~Options} kASWDPadOnly
	   * @memberOf module:Input
	   */
	  var kASWDPadOnly = {
	    pads: [
	      { keys: kASWDKeys, },
	    ],
	  };
	  /**
	   * You can use these to make your own options for setupKeyboardDPadKeys
	   *
	   *     Input.setupKeyboardDPadKeys(callback, Input.kCursorPadOnly);
	   *
	   * @const {module:Input.DPadKeys~Options} kCursorPadOnly
	   * @memberOf module:Input
	   */
	  var kCursorPadOnly = {
	    pads: [
	      { keys: kCursorKeys, },
	    ],
	  };

	  var isNumRE = /^\d+$/;

	  // Provides a map from direction to various info.
	  //
	  // Example:
	  //
	  //   Input.setupKeyboardDPadsKeys(container, function(event) {
	  //     console.log("dir: " + event.info.symbol]);
	  //   });
	  var RIGHT = 0x1;
	  var LEFT = 0x2;
	  var UP = 0x4;
	  var DOWN = 0x8;

	  /**
	   * Various info for a given 8 direction direction.
	   *
	   *        2     -1 = no touch
	   *      3 | 1
	   *       \|/
	   *     4--+--0
	   *       /|\
	   *      5 | 7
	   *        6
	   *
	   * @typedef {Object} DirectionInfo
	   * @memberOf module:Input
	   * @property {number} direction -1 to 7
	   * @property {number} dx -1, 0, or 1
	   * @property {number} dy -1, 0, or 1
	   * @property {number} bits where `R = 0x1, L = 0x2, U = 0x4, D =
	   *           0x8`
	   * @property {string} unicode arrow simple for direction.
	   */

	  var dirInfo = { };
	  dirInfo[-1] = { direction: -1, dx:  0, dy:  0, bits: 0           , symbol: String.fromCharCode(0x2751), };
	  dirInfo[ 0] = { direction:  0, dx:  1, dy:  0, bits: RIGHT       , symbol: String.fromCharCode(0x2192), }; // right
	  dirInfo[ 1] = { direction:  1, dx:  1, dy:  1, bits: UP | RIGHT  , symbol: String.fromCharCode(0x2197), }; // up-right
	  dirInfo[ 2] = { direction:  2, dx:  0, dy:  1, bits: UP          , symbol: String.fromCharCode(0x2191), }; // up
	  dirInfo[ 3] = { direction:  3, dx: -1, dy:  1, bits: UP | LEFT   , symbol: String.fromCharCode(0x2196), }; // up-left
	  dirInfo[ 4] = { direction:  4, dx: -1, dy:  0, bits: LEFT        , symbol: String.fromCharCode(0x2190), }; // left
	  dirInfo[ 5] = { direction:  5, dx: -1, dy: -1, bits: DOWN | LEFT , symbol: String.fromCharCode(0x2199), }; // down-left
	  dirInfo[ 6] = { direction:  6, dx:  0, dy: -1, bits: DOWN        , symbol: String.fromCharCode(0x2193), }; // down
	  dirInfo[ 7] = { direction:  7, dx:  1, dy: -1, bits: DOWN | RIGHT, symbol: String.fromCharCode(0x2198), }; // down-right

	  /**
	   * @typedef {Object} EventInfo
	   * @property {number} pad the pad id 0, 1, 2, etc.
	   * @property {module:Input.DirectionInfo} info the direction
	   *           info for the event.
	   * @memberOf module:Input
	   */

	  /**
	   * Creates an EventInfo for a given padId
	   * @returns {module:Input.EventInfo}
	   * @memberOf module:Input
	   */
	  var createDirectionEventInfo = function(padId) {
	    return {
	      pad: padId,
	      info: undefined,
	    };
	  };

	  /**
	   * @param {number} padId id of pad. eg. 0, 1, 2
	   * @param {number} direction direction pad is being pressed -1
	   *        to 7.
	   * @param {EventInfo} eventInfo from createDirectionEventInfo.
	   * @param {callback} callback to pass eventInfo once it's been
	   *        filled out.
	   * @memberOf module:Input
	   */
	  var emitDirectionEvent = function(padId, direction, eventInfo, callback) {
	    var info = dirInfo[(Math.floor(direction / (Math.PI / 4))) % 8];
	    eventInfo.pad = padId;
	    eventInfo.info = info;
			eventInfo.radian = direction;
	    callback(eventInfo);
	  };

	  /**
	   * Given a direction returns a direction info
	   * @param {number} direction -1 to 7
	   * @return {module:Input.DirectionInfo}
	   * @memberOf module:Input
	   */
	  var getDirectionInfo = function(direction) {
	    return dirInfo[direction];
	  };

	  /**
	   * @typedef {Object} Coordinate
	   * @property {number} x the x coordinate
	   * @property {number} y the y coordinate
	   * @memberOf module:Input
	   */

	  /**
	   * Gets the relative coordinates for an event
	   * @func
	   * @param {HTMLElement} reference html elemetn to reference
	   * @param {Event} event from HTML mouse event
	   * @returns {module:Input.Coordinate} the relative position
	   * @memberOf module:Input
	   */
	  var getRelativeCoordinates = function(reference, event) {
	    // Use absolute coordinates
	    var pos = Misc.getAbsolutePosition(reference);
	    var x = event.pageX - pos.x;
	    var y = event.pageY - pos.y;
	    return { x: x, y: y };
	  };

	  /**
	   * Sets up controller key functions
	   * @param {callback(code, down)} keyDownFn a function to be
	   *        called when a key is pressed. It's passed the keycode
	   *        and true.
	   * @param {callback(code, down)} keyUpFn a function to be called
	   *        when a key is released. It's passed the keycode and
	   *        false.
	   * @memberOf module:Input
	   */
	  var setupControllerKeys = function(keyDownFn, keyUpFn) {
	    var g_keyState = {};
	    var g_oldKeyState = {};

	    var updateKey = function(keyCode, state) {
	      g_keyState[keyCode] = state;
	      if (g_oldKeyState !== g_keyState) {
	        g_oldKeyState = state;
	        if (state) {
	          keyDownFn(keyCode);
	        } else {
	          keyUpFn(keyCode);
	        }
	      }
	    };

	    var keyUp = function(event) {
	      updateKey(event.keyCode, false);
	    };

	    var keyDown = function(event) {
	      updateKey(event.keyCode, true);
	    };

	    window.addEventListener("keyup", keyUp, false);
	    window.addEventListener("keydown", keyDown, false);
	  };

	  /**
	   * @typedef {Object} DPadKeys
	   * @property {number[]} keys Array of 4 key codes that make a
	   *           keyboard dpad in LRUD order.
	   * @memberOf module:Input
	   */

	  /**
	   * @typedef {Object} DPadKeys~Options
	   * @property {module:Input.DPadKeys[]} pads Array of dpad keys
	   * @memberOf module:Input
	   */

	  /**
	   * Simulates N virtual dpads using keys
	   * asdw for pad 0, arrow keys for pad 1
	   *
	   * For each change in direction callback will be
	   * called with pad id (0 left, 1 right) and direction
	   * where
	   *
	   *        2     -1 = not pressed
	   *      3 | 1
	   *       \|/
	   *     4--+--0
	   *       /|\
	   *      5 | 7
	   *        6
	   *
	   * Note: this matches trig functions you can do this
	   *
	   *     var angle = dir * Math.PI / 4;
	   *     var dx    = Math.cos(angle);
	   *     var dy    = Math.sin(angle);
	   *
	   * for +y up (ie, normal for 3d)
	   *
	   * In 2d you'd probably want
	   *
	   *     var angle =  dir * Math.PI / 4;
	   *     var dx    =  Math.cos(angle);
	   *     var dy    = -Math.sin(angle);
	   *
	   *
	   * @param {callback} callback callback will be called with
	   *        EventInfo objects when pads change their direction
	   * @param {module:Input.DPadKeys~Options?} options If no options
	   *        are passed in assumes 2 DPads one on ASWD the other on
	   *        the cursor keys
	   * @memberOf module:Input
	   */
	  var setupKeyboardDPadKeys = function(callback, options) {
	    if (!options) {
	      options = {
	        pads: [
	         { keys: kASWDKeys,   }, // LRUD
	         { keys: kCursorKeys, }, // LRUD
	        ],
	      };
	    }

	    var g_dirBits = [];
	    var g_excludeBits = [];
	    var g_dir = [];
	    var g_eventInfos = [];

	    var bitInfos = [
	      { bit: 1, exclude: 2, mask: 0x3 }, // left
	      { bit: 2, exclude: 1, mask: 0x3 }, // right
	      { bit: 4, exclude: 8, mask: 0xC }, // up
	      { bit: 8, exclude: 4, mask: 0xC }, // down
	    ];

	    var keyToBit = { };

	    for (var ii = 0; ii < options.pads.length; ++ii) {
	      var pad = options.pads[ii];
	      g_dirBits.push(0);
	      g_excludeBits.push(0);
	      g_dir.push(-1);
	      g_eventInfos.push(createDirectionEventInfo(ii));
	      for (var kk = 0; kk < 4; ++kk) {
	        var bitInfo = bitInfos[kk];
	        var keyInfo = { pad: ii, };
	        Misc.copyProperties(bitInfo, keyInfo);
	        keyToBit[pad.keys[kk]] = keyInfo;
	      }
	    }

	    var bitsToDir = [
	      -1, // 0
	       4, // 1      l
	       0, // 2     r
	      -1, // 3     rl
	       2, // 4    u
	       3, // 5    u l
	       1, // 6    ur
	      -1, // 7    url
	       6, // 8   d
	       5, // 9   d  l
	       7, // 10  d r
	      -1, // 11  d rl
	      -1, // 12  du
	      -1, // 13  du l
	      -1, // 14  dur
	      -1, // 15  durl
	    ];

	    var setBit = function(keyCode, value) {
	      // get info for this key
	      var info = keyToBit[keyCode];
	      if (info) {
	        // or in or and out bit for button
	        var pad = info.pad;
	        var bit = info.bit;
	        var bits = g_dirBits[pad];
	        if (value) {
	          bits |= bit;
	          g_excludeBits[pad] = (g_excludeBits[pad] & ~info.mask) | info.exclude;
	        } else {
	          bits &= ~bit;
	          g_excludeBits[pad] &= ~info.mask;
	        }
	        // If they've changed
	        if (bits !== g_dirBits[pad]) {
	          g_dirBits[pad] = bits;
	          var dir = bitsToDir[bits & ~g_excludeBits[pad]];
	          // If the dir has changed.
	          if (dir !== g_dir[pad]) {
	            g_dir[pad] = dir;
	            emitDirectionEvent(pad, dir, g_eventInfos[pad], callback);
	          }
	        }
	      }
	    };

	    var keyUp = function(keyCode) {
	      setBit(keyCode, 0);
	    };

	    var keyDown = function(keyCode) {
	      setBit(keyCode, 1);
	    };

	    setupControllerKeys(keyDown, keyUp);
	  };

	  /**
	   * @typedef {Object} KeyEvent
	   * @property {number} keyCode
	   * @property {boolean} pressed true if pressed, false if
	   *           released
	   * @memberOf module:Input
	   */

	  /**
	   * Sets up handlers for specific keys
	   * @memberOf module:Input
	   * @param {Object.<string, callback>} array of keys to handler
	   *        functions. Handlers are called with a KeyEvent
	   *
	   * @example
	   *
	   *      var keys = { };
	   *      keys["Z".charCodeAt(0)] = handleJump;
	   *      keys["X".charCodeAt(0)] = handleShow
	   *      keys["C".charCodeAt(0)] = handleTestSound;
	   *      keys[Input.cursorKeys.kRight] = handleMoveRight;
	   *      Input.setupKeys(keys);
	   *
	   */
	  var setupKeys = function(keys) {
	    var keyCodes = {};

	    // Convert single characters to char codes.
	    Object.keys(keys).forEach(function(key) {
	      var value = keys[key];
	      if (!isNumRE.test(key)) {
	        if (key.length !== 1) {
	          throw "bad key code: '" + key + "'";
	        }
	        key = key.charCodeAt(0);
	      }
	      keyCodes[key] = value;
	    });

	    var handleKey = function(keyCode, state, pressed) {
	      var key = keyCodes[keyCode];
	      if (key) {
	        key({keyCode: keyCode, pressed:pressed});
	      }
	    };

	    var handleKeyDown = function(keyCode, state) {
	      handleKey(keyCode, state, true);
	    };
	    var handleKeyUp = function(keyCode, state) {
	      handleKey(keyCode, state, false);
	    };

	    setupControllerKeys(handleKeyDown, handleKeyUp);
	  };

	  return {
	    cursorKeys: cursorKeys,
	    createDirectionEventInfo: createDirectionEventInfo,
	    emitDirectionEvent: emitDirectionEvent,
	    getDirectionInfo: getDirectionInfo,
	    kCursorKeys: kCursorKeys,
	    kCursorPadOnly: kCursorPadOnly,
	    kASWDKeys: kASWDKeys,
	    kASWDPadOnly: kASWDPadOnly,
	    getRelativeCoordinates: getRelativeCoordinates,
	    setupControllerKeys: setupControllerKeys,
	    setupKeyboardDPadKeys: setupKeyboardDPadKeys,
	    setupKeys: setupKeys,
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
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

	/**
	 * Miscellaneous string functions
	 * @module Strings
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

	  /**
	   * Returns a padding string large enough for the given size.
	   * @param {string} padChar character for padding string
	   * @param {number} len minimum length of padding.
	   * @returns {string} string with len or more of padChar.
	   */
	  var getPadding = (function() {
	    var paddingDb = {};

	    return function(padChar, len) {
	      var padStr = paddingDb[padChar];
	      if (!padStr || padStr.length < len) {
	        padStr = new Array(len + 1).join(padChar);
	        paddingDb[padChar] = padStr;
	      }
	      return padStr;
	    };
	  }());

	  /**
	   * Turn an unknown object into a string if it's not already.
	   * Do I really needs this? I could just always do .toString even
	   * on a string.
	   */
	  var stringIt = function(str) {
	    return (typeof str === 'string') ? str : str.toString();
	  };

	  /**
	   * Pad string on right
	   * @param {string} str string to pad
	   * @param {number} len number of characters to pad to
	   * @param {string} padChar character to pad with
	   * @returns {string} padded string.
	   * @memberOf module:Strings
	   */
	  var padRight = function(str, len, padChar) {
	    str = stringIt(str);
	    if (str.length >= len) {
	      return str;
	    }
	    var padStr = getPadding(padChar, len);
	    return str + padStr.substr(str.length - len);
	  };

	  /**
	   * Pad string on left
	   * @param {string} str string to pad
	   * @param {number} len number of characters to pad to
	   * @param {string} padChar character to pad with
	   * @returns {string} padded string.
	   * @memberOf module:Strings
	   */
	  var padLeft = function(str, len, padChar) {
	    str = stringIt(str);
	    if (str.length >= len) {
	      return str;
	    }
	    var padStr = getPadding(padChar, len);
	    return padStr.substr(str.length - len) + str;
	  };

	  /**
	   * Replace %(id)s in strings with values in objects(s)
	   *
	   * Given a string like `"Hello %(name)s from $(user.country)s"`
	   * and an object like `{name:"Joe",user:{country:"USA"}}` would
	   * return `"Hello Joe from USA"`.
	   *
	   * @function
	   * @param {string} str string to do replacements in
	   * @param {Object|Object[]} params one or more objects.
	   * @returns {string} string with replaced parts
	   * @memberOf module:Strings
	   */
	  var replaceParams = (function() {
	    var replaceParamsRE = /%\(([^\)]+)\)s/g;

	    return function(str, params) {
	      if (!params.length) {
	        params = [params];
	      }

	      return str.replace(replaceParamsRE, function(match, key) {
	        var keys = key.split('.');
	        for (var ii = 0; ii < params.length; ++ii) {
	          var obj = params[ii];
	          for (var jj = 0; jj < keys.length; ++jj) {
	            var part = keys[jj];
	            obj = obj[part];
	            if (obj === undefined) {
	              break;
	            }
	          }
	          if (obj !== undefined) {
	            return obj;
	          }
	        }
	        console.error("unknown key: " + key);
	        return "%(" + key + ")s";
	      });
	    };
	  }());

	  /**
	   * True if string starts with prefix
	   * @static
	   * @param {String} str string to check for start
	   * @param {String} prefix start value
	   * @returns {Boolean} true if str starts with prefix
	   * @memberOf module:Strings
	   */
	  var startsWith = function(str, start) {
	    return (str.length >= start.length &&
	            str.substr(0, start.length) === start);
	  };

	  /**
	   * True if string ends with suffix
	   * @param {String} str string to check for start
	   * @param {String} suffix start value
	   * @returns {Boolean} true if str starts with suffix
	   * @memberOf module:Strings
	   */
	  var endsWith = function(str, end) {
	    return (str.length >= end.length &&
	            str.substring(str.length - end.length) === end);
	  };

	  /**
	   * Make a string from unicode code points
	   * @function
	   * @param {Number} codePoint one or more code points
	   * @returns {string} unicode string. Note a single code point
	   *          can return a string with length > 1.
	   * @memberOf module:Strings
	   */
	  var fromCodePoint = String.fromCodePoint ? String.fromCodePoint : (function() {
	    var stringFromCharCode = String.fromCharCode;
	    var floor = Math.floor;
	    var fromCodePoint = function() {
	      var MAX_SIZE = 0x4000;
	      var codeUnits = [];
	      var highSurrogate;
	      var lowSurrogate;
	      var index = -1;
	      var length = arguments.length;
	      if (!length) {
	        return '';
	      }
	      var result = '';
	      while (++index < length) {
	        var codePoint = Number(arguments[index]);
	        if (
	          !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
	          codePoint < 0 || // not a valid Unicode code point
	          codePoint > 0x10FFFF || // not a valid Unicode code point
	          floor(codePoint) !== codePoint // not an integer
	        ) {
	          throw new RangeError('Invalid code point: ' + codePoint);
	        }
	        if (codePoint <= 0xFFFF) { // BMP code point
	          codeUnits.push(codePoint);
	        } else { // Astral code point; split in surrogate halves
	          // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	          codePoint -= 0x10000;
	          highSurrogate = (codePoint >> 10) + 0xD800;
	          lowSurrogate = (codePoint % 0x400) + 0xDC00;
	          codeUnits.push(highSurrogate, lowSurrogate);
	        }
	        if (index + 1 === length || codeUnits.length > MAX_SIZE) {
	          result += stringFromCharCode.apply(null, codeUnits);
	          codeUnits.length = 0;
	        }
	      }
	      return result;
	    };
	    return fromCodePoint;
	  }());

	  var exports = {
	    endsWith: endsWith,
	    fromCodePoint: fromCodePoint,
	    padLeft: padLeft,
	    padRight: padRight,
	    replaceParams: replaceParams,
	    startsWith: startsWith,
	  };

	  return exports;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));




/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
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

	/**
	 * Various functions for touch input.
	 *
	 * @module Touch
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(19),
	    __webpack_require__(16),
	    __webpack_require__(9),
	  ], __WEBPACK_AMD_DEFINE_RESULT__ = function(pep, Input, Misc) {

	  /**
	   * @typedef {Object} PadInfo
	   * @property {HTMLElement} referenceElement element that is reference for position of pad
	   * @property {number} offsetX offset from left of reference element to center of pad
	   * @property {number} offsetY offset from top of reference element to center of pad
	   * @memberOf module:Touch
	   */

	  /**
	   * @typedef {Object} TouchDPad~Options
	   * @property {HTMLElement} inputElement element used to capture input (for example window, body,)
	   * @property {callback} callback callback to pass event
	   * @property {boolean?} fixedCenter true = center stays the same place, false = each time finger touches a new center is picked
	   * @property {number?} deadSpaceRadius size of dead area in center of pad.
	   * @property {number?} axisSize use axis.
	   * @property {module:Touch~PadInfo[]} pads array of PadInfos, one for each DPad
	   * @memberOf module:Touch
	   */

	  /**
	   * Simulates N virtual dpads using touch events
	   *
	   * For each change in direction callback will be
	   * called with an event info where
	   *
	   *     pad = (index of pad)
	   *     direction =
	   *
	   *
	   *        2     -1 = no touch
	   *      3 | 1
	   *       \|/
	   *     4--+--0
	   *       /|\
	   *      5 | 7
	   *        6
	   *
	   *     dx   = -1, 0, 1
	   *     dy   = -1, 0, 1
	   *     bits = 1 for right, 2 for left, 4 for up, 8 for down
	   *
	   * Note: this matches trig functions so you can do this
	   *
	   *     if (dir >= 0) {
	   *       var angle = dir * Math.PI / 4;
	   *       var dx    = Math.cos(angle);
	   *       var dy    = Math.sin(angle);
	   *     }
	   *
	   * for +y up (ie, normal for 3d)
	   *
	   * In 2d you'd probably want to flip dy
	   *
	   *     if (dir >= 0) {
	   *       var angle =  dir * Math.PI / 4;
	   *       var dx    =  Math.cos(angle);
	   *       var dy    = -Math.sin(angle);
	   *     }
	   *
	   * The default way of figuring out the direction is to take the angle from the center to
	   * the place of touch, compute an angle, divide a circle into octants, which ever octant is the direction
	   *
	   * If axisSize is passed in then instead the space is divided into 3x3 boxes. Which ever box the finger is
	   * in is the direction. axisSize determines the width height of the axis boxes
	   *
	   *          | ax |
	   *          | is |
	   *     -----+----+-----
	   *          |    | axis
	   *     -----+----+-----
	   *          |    |
	   *          |    |
	   *
	   * if `divisions: 4` is passed in then instead of getting 8 directions decided
	   * by octant you get 4 decided by quadrant as in
	   *
	   *            2
	   *         \  |  /
	   *          \ | /
	   *     4 <---   ---> 0
	   *          / | \
	   *         /  V  \
	   *            6
	   *
	   * @param {module:Touch.TouchDPad~Options} options
	   * @memberOf module:Touch
	   */

	  var setupVirtualDPads = function(options) {
	    var callback = options.callback;
	    var container = options.inputElement;
	    options.deadSpaceRadius = options.deadSpaceRadius || 10;
	    var deadSpaceRadiusSq = options.deadSpaceRadius * options.deadSpaceRadius;

	    var Vector2 = function(x, y) {
	      this.reset(x, y);
	    };

	    Vector2.prototype.reset = function(x, y) {
	      this.x = x;
	      this.y = y;
	      return this;
	    };

	    Vector2.prototype.copyFrom = function(src) {
	      this.x = src.x;
	      this.y = src.y;
	    };

	    Vector2.prototype.minusEq = function(v) {
	      this.x -= v.x;
	      this.y -= v.y;
	      return this;
	    };

	    var makePad = function(padId) {
	      return {
	        pointerId: -1,                      // touch id
	        pointerPos: new Vector2(0, 0),      // current position
	        pointerStartPos: new Vector2(0, 0), // position when first touched
	        vector: new Vector2(0, 0),          // vector from start to current position
	        dir: -1,                            // octant
	        lastDir: 0,                         // previous octant
	        event: Input.createDirectionEventInfo(padId),
	      };
	    };

	    var pads = [];
	    for (var ii = 0; ii < options.pads.length; ++ii) {
	      pads.push(makePad(ii));
	    }

	    var computeDirByAngle = function(x, y) {
	      var angle = Math.atan2(-y, x) + Math.PI * 2 + Math.PI / 8;
	      return angle;
	    };

	    var computeDirByAngle4 = function(x, y) {
	      if (Math.abs(x) < Math.abs(y)) {
	        return y < 0 ? 2 : 6;
	      } else {
	        return x < 0 ? 4 : 0;
	      }
	    };

	    //      |   |
	    //      | V |x
	    // -----+---+-----
	    //  H   |HV |x H
	    // -----+---+-----
	    //  y   | Vy|xy
	    //      |   |

	    var axisBitsToDir = [
	       3, // 0
	       4, // 1   h
	       2, // 2    v
	      -1, // 3   hv
	       1, // 4     x
	       0, // 5   h x
	       2, // 6    vx
	      -1, // 7   hvx
	       5, // 8      y
	       4, // 9   h  y
	       6, // 10   v y
	      -1, // 11  hv y
	       7, // 12    xy
	       0, // 13  h xy
	       6, // 14   vxy
	      -1, // 15  hvxy
	    ];

	    var computeDirByAxis = function(x, y) {
	      var h = (Math.abs(y) < options.axisSize / 2) ? 1 : 0;
	      var v = (Math.abs(x) < options.axisSize / 2) ? 2 : 0;
	      var bits = h | v |
	          (x > 0 ? 4 : 0) |
	          (y > 0 ? 8 : 0);
	      return axisBitsToDir[bits];
	    };

	    var computeDir = options.axisSize ? computeDirByAxis : computeDirByAngle;

	    if (options.divisions === 4) {
	      computeDir = computeDirByAngle4;
	    }

	    var callCallback = function(padId, dir) {
	      var pad = pads[padId];
	      Input.emitDirectionEvent(padId, dir, pad.event, callback);
	    };

	    var updatePad = function(pad, padId, out) {
	      var newDir = -1;
	      if (!out && pad.pointerId >= 0) {
	        var distSq = pad.vector.x * pad.vector.x + pad.vector.y * pad.vector.y;
	        if (distSq > deadSpaceRadiusSq) {
	          newDir = computeDir(pad.vector.x, pad.vector.y);
	          pad.lastDir = newDir;
	        }
	      }
	      if (pad.dir !== newDir) {
	        pad.dir = newDir;
	        callCallback(padId, newDir);
	      }
	    };

	    var checkStart = function(padId, e) {
	      var pad = pads[padId];
	      var padOptions = options.pads[padId];
	      pad.pointerId = e.pointerId;
	      var relPos = Input.getRelativeCoordinates(padOptions.referenceElement, e);
	      var x = relPos.x - (padOptions.offsetX || padOptions.referenceElement.clientWidth  / 2);
	      var y = relPos.y - (padOptions.offsetY || padOptions.referenceElement.clientHeight / 2);
	      if (options.fixedCenter) {
	        pad.pointerStartPos.reset(0, 0);
	        pad.pointerPos.reset(x, y);
	        pad.vector.reset(x, y);
	        updatePad(pad, padId);
	      } else {
	        pad.pointerStartPos.reset(x, y);
	        pad.pointerPos.copyFrom(pad.pointerStartPos);
	        pad.vector.reset(0, 0);
	        pad.dir = pad.lastDir;
	        callCallback(padId, pad.lastDir);
	      }
	    };

	    var getClosestPad = function(e) {
	      var closestId = 0;
	      var closestDist;
	      for (var ii = 0; ii < pads.length; ++ii) {
	        var padOptions = options.pads[ii];
	        var refElement = padOptions.referenceElement;
	        var relPos = Input.getRelativeCoordinates(refElement, e);
	        var centerX = refElement.clientWidth / 2;
	        var centerY = refElement.clientHeight / 2;
	        var dx = relPos.x - centerX;
	        var dy = relPos.y - centerY;
	        var distSq = dx * dx + dy * dy;
	        if (closestDist === undefined || distSq < closestDist) {
	          closestDist = distSq;
	          closestId = ii;
	        }
	      }
	      return closestId;
	    };

	    var onPointerDown = function(e) {
	      var padId = getClosestPad(e);
	      checkStart(padId, e);
	    };

	    var onPointerMove = function(e) {
	      for (var ii = 0; ii < pads.length; ++ii) {
	        var pad = pads[ii];
	        if (pad.pointerId === e.pointerId) {
	          var padOptions = options.pads[ii];
	          var relPos = Input.getRelativeCoordinates(padOptions.referenceElement, e);
	          var x = relPos.x - (padOptions.offsetX || padOptions.referenceElement.clientWidth / 2);
	          var y = relPos.y - (padOptions.offsetY || padOptions.referenceElement.clientHeight / 2);
	          pad.pointerPos.reset(x, y);
	          pad.vector.copyFrom(pad.pointerPos);
	          pad.vector.minusEq(pad.pointerStartPos);
	          updatePad(pad, ii);
	        }
	      }
	    };

	    var onPointerUp = function(e) {
	      for (var ii = 0; ii < pads.length; ++ii) {
	        var pad = pads[ii];
	        if (pad.pointerId === e.pointerId) {
	          pad.pointerId = -1;
	          pad.vector.reset(0, 0);
	          updatePad(pad, ii);
	        }
	      }
	    };

	    var onPointerOut = function(e) {
	      for (var ii = 0; ii < pads.length; ++ii) {
	        var pad = pads[ii];
	        if (pad.pointerId === e.pointerId) {
	          updatePad(pad, ii, true);
	        }
	      }
	    };

	    container.addEventListener('pointerdown', onPointerDown, false);
	    container.addEventListener('pointermove', onPointerMove, false);
	    container.addEventListener('pointerup', onPointerUp, false);
	    container.addEventListener('pointerout', onPointerOut, false);
	  };

	  /**
	   * @typedef {Object} ButtonInfo
	   * @property {HTMLElement} element element that represents area of buttton (need not be visible)
	   * @property {callback} callback function to call when button is pressed or released
	   * @memberOf module:Touch
	   */

	  /**
	   * @typedef {Object} Buttons~Options
	   * @property {HTMLElement} inputElement element that receives all input. Should be above all buttons
	   * @memberOf module:Touch
	   */

	  /**
	   * Sets up touch buttons.
	   *
	   * For example
	   *
	   *     var $ = document.getElementById.bind(document);
	   *
	   *     Touch.setupButtons({
	   *       inputElement: $("buttons"),
	   *       buttons: [
	   *         { element: $("abuttoninput"), callback: handleAbutton, },
	   *         { element: $("avatarinput"),  callback: handleShow, },
	   *       ],
	   *     });
	   *
	   * The code above sets up 2 buttons. The HTML elements "abuttoninput" and "avatarinput".
	   * The actual touch input events come from an HTML element "buttons" which is an div
	   * that covers the entire display.
	   *
	   * @param {module:Touch.Buttons~Options} options
	   * @memberOf module:Touch
	   */
	  var setupButtons = function(options) {
	    var buttonInfos = [];
	    var buttons = options.buttons;
	    //var expirationTime = 2000;  // 2 seconds, 2000ms

	    // I don't really know what to make this number
	    // If the person has steady hands they can make
	    // this fail but I'm going to assume most players
	    // most of the time won't hold steady for this long.
	    // On the other hand if the button does get stuck
	    // It will take this long to un-stick.

	    for (var ii = 0; ii < buttons.length; ++ii) {
	      var button = buttons[ii];
	      var buttonInfo = {
	        pointerIds: {},   // Pointers currently in this button
	        numPointerIds: 0, // Number of pointers in this button
	      };
	      Misc.copyProperties(button, buttonInfo);
	      buttonInfos.push(buttonInfo);
	    }

	    // var printButtonInfo = function(buttonInfo) {
	    //   console.log("button: " + buttonInfo.element.id + ", " + buttonInfo.numPointerIds);
	    // };

	    var addPointerId = function(buttonInfo, pointerId, timeStamp) {
	      if (!buttonInfo.pointerIds[pointerId]) {
	        buttonInfo.pointerIds[pointerId] = timeStamp;
	        ++buttonInfo.numPointerIds;
	        buttonInfo.callback({pressed: true});
	      }
	    };

	    var removePointerId = function(buttonInfo, pointerId) {
	      if (buttonInfo.pointerIds[pointerId]) {
	        delete buttonInfo.pointerIds[pointerId];
	        --buttonInfo.numPointerIds;
	        if (buttonInfo.numPointerIds === 0) {
	          buttonInfo.callback({pressed: false});
	        } else if (buttonInfo.numPointerIds < 0) {
	          throw ("numPointerIds went negative: how did I get here!?");
	        }
	      }
	    };

	    // This is because (maybe because my programming sucks?)
	    // sometimes it seems we miss an out/up event and buttons
	    // get stuck. So, for a particlar id, if no event has come in
	    // for a while assume it was released.
	    //var expireOldButtons = function() {
	    //  var now = Date.now();
	    //  buttonInfos.forEach(function(buttonInfo) {
	    //    Object.keys(buttonInfo.pointerIds).forEach(function(pointerId) {
	    //      var timeStamp = buttonInfo.pointerIds[pointerId];
	    //      var age = now - timeStamp;
	    //      if (age > expirationTime) {
	    //        removePointerId(buttonInfo, pointerId);
	    //      }
	    //    });
	    //  });
	    //};

	    var handleButtonDown = function(e, buttonInfo) {
	      addPointerId(buttonInfo, e.pointerId, e.timeStamp);
	    };

	    var handleButtonUp = function(e, buttonInfo) {
	      removePointerId(buttonInfo, e.pointerId, e.timeStamp);
	    };

	    var handleButtonMove = function(/*e, buttonInfo*/) {
	//      addPointerId(buttonInfo, e.pointerId, e.timeStamp);
	    };

	    var handleButtonOut = function(e, buttonInfo) {
	      removePointerId(buttonInfo, e.pointerId, e.timeStamp);
	    };

	    var handleButtonEnter = function(e, buttonInfo) {
	      addPointerId(buttonInfo, e.pointerId, e.timeStamp);
	    };

	    var handleButtonLeave = function(e, buttonInfo) {
	      removePointerId(buttonInfo, e.pointerId, e.timeStamp);
	    };

	    var handleButtonCancel = function(e, buttonInfo) {
	      removePointerId(buttonInfo, e.pointerId, e.timeStamp);
	    };

	    var funcs = {
	      pointerdown: handleButtonDown,
	      pointermove: handleButtonMove,
	      pointerup: handleButtonUp,
	      pointerout: handleButtonOut,
	      pointerenter: handleButtonEnter,
	      pointerleave: handleButtonLeave,
	      pointercancel: handleButtonCancel,
	    };

	    buttonInfos.forEach(function(buttonInfo) {
	      var elem = buttonInfo.element;
	      Object.keys(funcs).forEach(function(eventName) {
	        var func = funcs[eventName];
	        elem.addEventListener(eventName, function(buttonInfo) {
	          return function(e) {
	            func(e, buttonInfo);
	          };
	        }(buttonInfo));
	      });
	    });

	//    setInterval(expireOldButtons, 100);
	  };

	  return {
	    setupVirtualDPads: setupVirtualDPads,
	    setupButtons: setupButtons,
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));




/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * PEP v0.4.1 | https://github.com/jquery/PEP
	 * Copyright jQuery Foundation and other contributors | http://jquery.org/license
	 */
	!function(a,b){ true?module.exports=b():"function"==typeof define&&define.amd?define(b):a.PointerEventsPolyfill=b()}(this,function(){"use strict";function a(a,b){b=b||Object.create(null);var c=document.createEvent("Event");c.initEvent(a,b.bubbles||!1,b.cancelable||!1);for(var d,e=2;e<k.length;e++)d=k[e],c[d]=b[d]||l[e];c.buttons=b.buttons||0;var f=0;return f=b.pressure?b.pressure:c.buttons?.5:0,c.x=c.clientX,c.y=c.clientY,c.pointerId=b.pointerId||0,c.width=b.width||0,c.height=b.height||0,c.pressure=f,c.tiltX=b.tiltX||0,c.tiltY=b.tiltY||0,c.pointerType=b.pointerType||"",c.hwTimestamp=b.hwTimestamp||0,c.isPrimary=b.isPrimary||!1,c}function b(){this.array=[],this.size=0}function c(a,b,c,d){this.addCallback=a.bind(d),this.removeCallback=b.bind(d),this.changedCallback=c.bind(d),B&&(this.observer=new B(this.mutationWatcher.bind(this)))}function d(a){return"body /shadow-deep/ "+e(a)}function e(a){return'[touch-action="'+a+'"]'}function f(a){return"{ -ms-touch-action: "+a+"; touch-action: "+a+"; touch-action-delay: none; }"}function g(){if(H){F.forEach(function(a){String(a)===a?(G+=e(a)+f(a)+"\n",I&&(G+=d(a)+f(a)+"\n")):(G+=a.selectors.map(e)+f(a.rule)+"\n",I&&(G+=a.selectors.map(d)+f(a.rule)+"\n"))});var a=document.createElement("style");a.textContent=G,document.head.appendChild(a)}}function h(){if(!window.PointerEvent){if(window.PointerEvent=m,window.navigator.msPointerEnabled){var a=window.navigator.msMaxTouchPoints;Object.defineProperty(window.navigator,"maxTouchPoints",{value:a,enumerable:!0}),v.registerSource("ms",ea)}else v.registerSource("mouse",Q),void 0!==window.ontouchstart&&v.registerSource("touch",aa);v.register(document)}}function i(a){if(!v.pointermap.has(a))throw new Error("InvalidPointerId")}function j(){window.Element&&!Element.prototype.setPointerCapture&&Object.defineProperties(Element.prototype,{setPointerCapture:{value:$},releasePointerCapture:{value:_}})}var k=["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget","pageX","pageY"],l=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0],m=a,n=window.Map&&window.Map.prototype.forEach,o=n?Map:b;b.prototype={set:function(a,b){return void 0===b?this["delete"](a):(this.has(a)||this.size++,void(this.array[a]=b))},has:function(a){return void 0!==this.array[a]},"delete":function(a){this.has(a)&&(delete this.array[a],this.size--)},get:function(a){return this.array[a]},clear:function(){this.array.length=0,this.size=0},forEach:function(a,b){return this.array.forEach(function(c,d){a.call(b,c,d,this)},this)}};var p=o,q=["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget","buttons","pointerId","width","height","pressure","tiltX","tiltY","pointerType","hwTimestamp","isPrimary","type","target","currentTarget","which","pageX","pageY","timeStamp"],r=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0,0,0,0,0,0,"",0,!1,"",null,null,0,0,0,0],s={pointerover:1,pointerout:1,pointerenter:1,pointerleave:1},t="undefined"!=typeof SVGElementInstance,u={pointermap:new p,eventMap:Object.create(null),captureInfo:Object.create(null),eventSources:Object.create(null),eventSourceList:[],registerSource:function(a,b){var c=b,d=c.events;d&&(d.forEach(function(a){c[a]&&(this.eventMap[a]=c[a].bind(c))},this),this.eventSources[a]=c,this.eventSourceList.push(c))},register:function(a){for(var b,c=this.eventSourceList.length,d=0;c>d&&(b=this.eventSourceList[d]);d++)b.register.call(b,a)},unregister:function(a){for(var b,c=this.eventSourceList.length,d=0;c>d&&(b=this.eventSourceList[d]);d++)b.unregister.call(b,a)},contains:function(a,b){try{return a.contains(b)}catch(c){return!1}},down:function(a){a.bubbles=!0,this.fireEvent("pointerdown",a)},move:function(a){a.bubbles=!0,this.fireEvent("pointermove",a)},up:function(a){a.bubbles=!0,this.fireEvent("pointerup",a)},enter:function(a){a.bubbles=!1,this.fireEvent("pointerenter",a)},leave:function(a){a.bubbles=!1,this.fireEvent("pointerleave",a)},over:function(a){a.bubbles=!0,this.fireEvent("pointerover",a)},out:function(a){a.bubbles=!0,this.fireEvent("pointerout",a)},cancel:function(a){a.bubbles=!0,this.fireEvent("pointercancel",a)},leaveOut:function(a){this.out(a),this.contains(a.target,a.relatedTarget)||this.leave(a)},enterOver:function(a){this.over(a),this.contains(a.target,a.relatedTarget)||this.enter(a)},eventHandler:function(a){if(!a._handledByPE){var b=a.type,c=this.eventMap&&this.eventMap[b];c&&c(a),a._handledByPE=!0}},listen:function(a,b){b.forEach(function(b){this.addEvent(a,b)},this)},unlisten:function(a,b){b.forEach(function(b){this.removeEvent(a,b)},this)},addEvent:function(a,b){a.addEventListener(b,this.boundHandler)},removeEvent:function(a,b){a.removeEventListener(b,this.boundHandler)},makeEvent:function(a,b){this.captureInfo[b.pointerId]&&(b.relatedTarget=null);var c=new m(a,b);return b.preventDefault&&(c.preventDefault=b.preventDefault),c._target=c._target||b.target,c},fireEvent:function(a,b){var c=this.makeEvent(a,b);return this.dispatchEvent(c)},cloneEvent:function(a){for(var b,c=Object.create(null),d=0;d<q.length;d++)b=q[d],c[b]=a[b]||r[d],!t||"target"!==b&&"relatedTarget"!==b||c[b]instanceof SVGElementInstance&&(c[b]=c[b].correspondingUseElement);return a.preventDefault&&(c.preventDefault=function(){a.preventDefault()}),c},getTarget:function(a){var b=this.captureInfo[a.pointerId];return b?a._target!==b&&a.type in s?void 0:b:a._target},setCapture:function(a,b){this.captureInfo[a]&&this.releaseCapture(a),this.captureInfo[a]=b;var c=document.createEvent("Event");c.initEvent("gotpointercapture",!0,!1),c.pointerId=a,this.implicitRelease=this.releaseCapture.bind(this,a),document.addEventListener("pointerup",this.implicitRelease),document.addEventListener("pointercancel",this.implicitRelease),c._target=b,this.asyncDispatchEvent(c)},releaseCapture:function(a){var b=this.captureInfo[a];if(b){var c=document.createEvent("Event");c.initEvent("lostpointercapture",!0,!1),c.pointerId=a,this.captureInfo[a]=void 0,document.removeEventListener("pointerup",this.implicitRelease),document.removeEventListener("pointercancel",this.implicitRelease),c._target=b,this.asyncDispatchEvent(c)}},dispatchEvent:function(a){var b=this.getTarget(a);return b?b.dispatchEvent(a):void 0},asyncDispatchEvent:function(a){requestAnimationFrame(this.dispatchEvent.bind(this,a))}};u.boundHandler=u.eventHandler.bind(u);var v=u,w={shadow:function(a){return a?a.shadowRoot||a.webkitShadowRoot:void 0},canTarget:function(a){return a&&Boolean(a.elementFromPoint)},targetingShadow:function(a){var b=this.shadow(a);return this.canTarget(b)?b:void 0},olderShadow:function(a){var b=a.olderShadowRoot;if(!b){var c=a.querySelector("shadow");c&&(b=c.olderShadowRoot)}return b},allShadows:function(a){for(var b=[],c=this.shadow(a);c;)b.push(c),c=this.olderShadow(c);return b},searchRoot:function(a,b,c){if(a){var d,e,f=a.elementFromPoint(b,c);for(e=this.targetingShadow(f);e;){if(d=e.elementFromPoint(b,c)){var g=this.targetingShadow(d);return this.searchRoot(g,b,c)||d}e=this.olderShadow(e)}return f}},owner:function(a){for(var b=a;b.parentNode;)b=b.parentNode;return b.nodeType!==Node.DOCUMENT_NODE&&b.nodeType!==Node.DOCUMENT_FRAGMENT_NODE&&(b=document),b},findTarget:function(a){var b=a.clientX,c=a.clientY,d=this.owner(a.target);return d.elementFromPoint(b,c)||(d=document),this.searchRoot(d,b,c)}},x=Array.prototype.forEach.call.bind(Array.prototype.forEach),y=Array.prototype.map.call.bind(Array.prototype.map),z=Array.prototype.slice.call.bind(Array.prototype.slice),A=Array.prototype.filter.call.bind(Array.prototype.filter),B=window.MutationObserver||window.WebKitMutationObserver,C="[touch-action]",D={subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0,attributeFilter:["touch-action"]};c.prototype={watchSubtree:function(a){this.observer&&w.canTarget(a)&&this.observer.observe(a,D)},enableOnSubtree:function(a){this.watchSubtree(a),a===document&&"complete"!==document.readyState?this.installOnLoad():this.installNewSubtree(a)},installNewSubtree:function(a){x(this.findElements(a),this.addElement,this)},findElements:function(a){return a.querySelectorAll?a.querySelectorAll(C):[]},removeElement:function(a){this.removeCallback(a)},addElement:function(a){this.addCallback(a)},elementChanged:function(a,b){this.changedCallback(a,b)},concatLists:function(a,b){return a.concat(z(b))},installOnLoad:function(){document.addEventListener("readystatechange",function(){"complete"===document.readyState&&this.installNewSubtree(document)}.bind(this))},isElement:function(a){return a.nodeType===Node.ELEMENT_NODE},flattenMutationTree:function(a){var b=y(a,this.findElements,this);return b.push(A(a,this.isElement)),b.reduce(this.concatLists,[])},mutationWatcher:function(a){a.forEach(this.mutationHandler,this)},mutationHandler:function(a){if("childList"===a.type){var b=this.flattenMutationTree(a.addedNodes);b.forEach(this.addElement,this);var c=this.flattenMutationTree(a.removedNodes);c.forEach(this.removeElement,this)}else"attributes"===a.type&&this.elementChanged(a.target,a.oldValue)}};var E=c,F=["none","auto","pan-x","pan-y",{rule:"pan-x pan-y",selectors:["pan-x pan-y","pan-y pan-x"]}],G="",H=window.PointerEvent||window.MSPointerEvent,I=!window.ShadowDOMPolyfill&&document.head.createShadowRoot,J=v.pointermap,K=25,L=[1,4,2,8,16],M=!1;try{M=1===new MouseEvent("test",{buttons:1}).buttons}catch(N){}var O,P={POINTER_ID:1,POINTER_TYPE:"mouse",events:["mousedown","mousemove","mouseup","mouseover","mouseout"],register:function(a){v.listen(a,this.events)},unregister:function(a){v.unlisten(a,this.events)},lastTouches:[],isEventSimulatedFromTouch:function(a){for(var b,c=this.lastTouches,d=a.clientX,e=a.clientY,f=0,g=c.length;g>f&&(b=c[f]);f++){var h=Math.abs(d-b.x),i=Math.abs(e-b.y);if(K>=h&&K>=i)return!0}},prepareEvent:function(a){var b=v.cloneEvent(a),c=b.preventDefault;return b.preventDefault=function(){a.preventDefault(),c()},b.pointerId=this.POINTER_ID,b.isPrimary=!0,b.pointerType=this.POINTER_TYPE,b},prepareButtonsForMove:function(a,b){var c=J.get(this.POINTER_ID);a.buttons=c?c.buttons:0,b.buttons=a.buttons},mousedown:function(a){if(!this.isEventSimulatedFromTouch(a)){var b=J.get(this.POINTER_ID),c=this.prepareEvent(a);M||(c.buttons=L[c.button],b&&(c.buttons|=b.buttons),a.buttons=c.buttons),J.set(this.POINTER_ID,a),b?v.move(c):v.down(c)}},mousemove:function(a){if(!this.isEventSimulatedFromTouch(a)){var b=this.prepareEvent(a);M||this.prepareButtonsForMove(b,a),v.move(b)}},mouseup:function(a){if(!this.isEventSimulatedFromTouch(a)){var b=J.get(this.POINTER_ID),c=this.prepareEvent(a);if(!M){var d=L[c.button];c.buttons=b?b.buttons&~d:0,a.buttons=c.buttons}J.set(this.POINTER_ID,a),0===c.buttons||c.buttons===L[c.button]?(this.cleanupMouse(),v.up(c)):v.move(c)}},mouseover:function(a){if(!this.isEventSimulatedFromTouch(a)){var b=this.prepareEvent(a);M||this.prepareButtonsForMove(b,a),v.enterOver(b)}},mouseout:function(a){if(!this.isEventSimulatedFromTouch(a)){var b=this.prepareEvent(a);M||this.prepareButtonsForMove(b,a),v.leaveOut(b)}},cancel:function(a){var b=this.prepareEvent(a);v.cancel(b),this.cleanupMouse()},cleanupMouse:function(){J["delete"](this.POINTER_ID)}},Q=P,R=v.captureInfo,S=w.findTarget.bind(w),T=w.allShadows.bind(w),U=v.pointermap,V=2500,W=200,X="touch-action",Y=!1,Z={events:["touchstart","touchmove","touchend","touchcancel"],register:function(a){Y?v.listen(a,this.events):O.enableOnSubtree(a)},unregister:function(a){Y&&v.unlisten(a,this.events)},elementAdded:function(a){var b=a.getAttribute(X),c=this.touchActionToScrollType(b);c&&(a._scrollType=c,v.listen(a,this.events),T(a).forEach(function(a){a._scrollType=c,v.listen(a,this.events)},this))},elementRemoved:function(a){a._scrollType=void 0,v.unlisten(a,this.events),T(a).forEach(function(a){a._scrollType=void 0,v.unlisten(a,this.events)},this)},elementChanged:function(a,b){var c=a.getAttribute(X),d=this.touchActionToScrollType(c),e=this.touchActionToScrollType(b);d&&e?(a._scrollType=d,T(a).forEach(function(a){a._scrollType=d},this)):e?this.elementRemoved(a):d&&this.elementAdded(a)},scrollTypes:{EMITTER:"none",XSCROLLER:"pan-x",YSCROLLER:"pan-y",SCROLLER:/^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/},touchActionToScrollType:function(a){var b=a,c=this.scrollTypes;return"none"===b?"none":b===c.XSCROLLER?"X":b===c.YSCROLLER?"Y":c.SCROLLER.exec(b)?"XY":void 0},POINTER_TYPE:"touch",firstTouch:null,isPrimaryTouch:function(a){return this.firstTouch===a.identifier},setPrimaryTouch:function(a){(0===U.size||1===U.size&&U.has(1))&&(this.firstTouch=a.identifier,this.firstXY={X:a.clientX,Y:a.clientY},this.scrolling=!1,this.cancelResetClickCount())},removePrimaryPointer:function(a){a.isPrimary&&(this.firstTouch=null,this.firstXY=null,this.resetClickCount())},clickCount:0,resetId:null,resetClickCount:function(){var a=function(){this.clickCount=0,this.resetId=null}.bind(this);this.resetId=setTimeout(a,W)},cancelResetClickCount:function(){this.resetId&&clearTimeout(this.resetId)},typeToButtons:function(a){var b=0;return("touchstart"===a||"touchmove"===a)&&(b=1),b},touchToPointer:function(a){var b=this.currentTouchEvent,c=v.cloneEvent(a),d=c.pointerId=a.identifier+2;c.target=R[d]||S(c),c.bubbles=!0,c.cancelable=!0,c.detail=this.clickCount,c.button=0,c.buttons=this.typeToButtons(b.type),c.width=a.radiusX||a.webkitRadiusX||0,c.height=a.radiusY||a.webkitRadiusY||0,c.pressure=a.force||a.webkitForce||.5,c.isPrimary=this.isPrimaryTouch(a),c.pointerType=this.POINTER_TYPE;var e=this;return c.preventDefault=function(){e.scrolling=!1,e.firstXY=null,b.preventDefault()},c},processTouches:function(a,b){var c=a.changedTouches;this.currentTouchEvent=a;for(var d,e=0;e<c.length;e++)d=c[e],b.call(this,this.touchToPointer(d))},shouldScroll:function(a){if(this.firstXY){var b,c=a.currentTarget._scrollType;if("none"===c)b=!1;else if("XY"===c)b=!0;else{var d=a.changedTouches[0],e=c,f="Y"===c?"X":"Y",g=Math.abs(d["client"+e]-this.firstXY[e]),h=Math.abs(d["client"+f]-this.firstXY[f]);b=g>=h}return this.firstXY=null,b}},findTouch:function(a,b){for(var c,d=0,e=a.length;e>d&&(c=a[d]);d++)if(c.identifier===b)return!0},vacuumTouches:function(a){var b=a.touches;if(U.size>=b.length){var c=[];U.forEach(function(a,d){if(1!==d&&!this.findTouch(b,d-2)){var e=a.out;c.push(e)}},this),c.forEach(this.cancelOut,this)}},touchstart:function(a){this.vacuumTouches(a),this.setPrimaryTouch(a.changedTouches[0]),this.dedupSynthMouse(a),this.scrolling||(this.clickCount++,this.processTouches(a,this.overDown))},overDown:function(a){U.set(a.pointerId,{target:a.target,out:a,outTarget:a.target}),v.over(a),v.enter(a),v.down(a)},touchmove:function(a){this.scrolling||(this.shouldScroll(a)?(this.scrolling=!0,this.touchcancel(a)):(a.preventDefault(),this.processTouches(a,this.moveOverOut)))},moveOverOut:function(a){var b=a,c=U.get(b.pointerId);if(c){var d=c.out,e=c.outTarget;v.move(b),d&&e!==b.target&&(d.relatedTarget=b.target,b.relatedTarget=e,d.target=e,b.target?(v.leaveOut(d),v.enterOver(b)):(b.target=e,b.relatedTarget=null,this.cancelOut(b))),c.out=b,c.outTarget=b.target}},touchend:function(a){this.dedupSynthMouse(a),this.processTouches(a,this.upOut)},upOut:function(a){this.scrolling||(v.up(a),v.out(a),v.leave(a)),this.cleanUpPointer(a)},touchcancel:function(a){this.processTouches(a,this.cancelOut)},cancelOut:function(a){v.cancel(a),v.out(a),v.leave(a),this.cleanUpPointer(a)},cleanUpPointer:function(a){U["delete"](a.pointerId),this.removePrimaryPointer(a)},dedupSynthMouse:function(a){var b=Q.lastTouches,c=a.changedTouches[0];if(this.isPrimaryTouch(c)){var d={x:c.clientX,y:c.clientY};b.push(d);var e=function(a,b){var c=a.indexOf(b);c>-1&&a.splice(c,1)}.bind(null,b,d);setTimeout(e,V)}}};Y||(O=new E(Z.elementAdded,Z.elementRemoved,Z.elementChanged,Z));var $,_,aa=Z,ba=v.pointermap,ca=window.MSPointerEvent&&"number"==typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE,da={events:["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerOut","MSPointerOver","MSPointerCancel","MSGotPointerCapture","MSLostPointerCapture"],register:function(a){v.listen(a,this.events)},unregister:function(a){v.unlisten(a,this.events)},POINTER_TYPES:["","unavailable","touch","pen","mouse"],prepareEvent:function(a){var b=a;return ca&&(b=v.cloneEvent(a),b.pointerType=this.POINTER_TYPES[a.pointerType]),b},cleanup:function(a){ba["delete"](a)},MSPointerDown:function(a){ba.set(a.pointerId,a);var b=this.prepareEvent(a);v.down(b)},MSPointerMove:function(a){var b=this.prepareEvent(a);v.move(b)},MSPointerUp:function(a){var b=this.prepareEvent(a);v.up(b),this.cleanup(a.pointerId)},MSPointerOut:function(a){var b=this.prepareEvent(a);v.leaveOut(b)},MSPointerOver:function(a){var b=this.prepareEvent(a);v.enterOver(b)},MSPointerCancel:function(a){var b=this.prepareEvent(a);v.cancel(b),this.cleanup(a.pointerId)},MSLostPointerCapture:function(a){var b=v.makeEvent("lostpointercapture",a);v.dispatchEvent(b)},MSGotPointerCapture:function(a){var b=v.makeEvent("gotpointercapture",a);v.dispatchEvent(b)}},ea=da,fa=window.navigator;fa.msPointerEnabled?($=function(a){i(a),this.msSetPointerCapture(a)},_=function(a){i(a),this.msReleasePointerCapture(a)}):($=function(a){i(a),v.setCapture(a,this)},_=function(a){i(a),v.releaseCapture(a,this)}),g(),h(),j();var ga={dispatcher:v,Installer:E,PointerEvent:m,PointerMap:p,targetFinding:w};return ga});

/***/ }
/******/ ])
});
;
},{}],"Attack":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'e6026h/3RVBw5LyXzpbqPJ/', 'Attack');
// scripts/fruits/Attack.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        owner: null,
        display: null,
        prefab: null,
        needAttach: false
    },

    onLoad: function onLoad() {
        this.owner = this.node.getComponent('Wrom');
        var self = this;
        cc.loader.loadRes('fruit/fist', function (err, prefab) {
            self.prefab = prefab;
            if (self.needAttach) {
                self.createAttach();
                self.needAttach = false;
            }
        });
    },
    createAttach: function createAttach() {
        if (this.display || !this.prefab) {
            return;
        }

        this.display = cc.instantiate(this.prefab);
        this.display.parent = this.owner.display;
        this.display.x = 25;
        this.display.y = 0;

        var action = cc.sequence(cc.spawn(cc.scaleTo(0.1, 1.2, 0.8), cc.moveBy(0.1, 5, 0), cc.fadeTo(0.1, 200)), cc.spawn(cc.scaleTo(0.2, 1, 1), cc.moveBy(0.2, -5, 0), cc.fadeTo(0.2, 150)), cc.delayTime(0.5)).repeatForever();

        this.display.runAction(action);
    },


    // use this for initialization
    onEnable: function onEnable() {
        this.owner = this.node.getComponent('Wrom');
        this.owner._speed = this.owner._config.defaultSpeed * 1.5;
        this.owner.attacking = true;

        if (this.prefab) {
            this.createAttach();
        } else {
            this.needAttach = true;
        }

        this.scheduleOnce(this.end, 8);
    },
    end: function end() {
        this.display.stopAllActions();
        this.display.parent = null;
        if (this.owner) {
            this.owner._speed = this.owner._config.defaultSpeed;
            this.owner.attacking = false;
            this.owner.removeFruit();
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

});

cc._RF.pop();
},{}],"Bomb":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'dc658y3X+RNU5h3ac6+n7P4', 'Bomb');
// scripts/fruits/Bomb.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        owner: null,
        display: null,
        prefab: null,
        animState: null,
        needAttach: false,
        level: 1
    },

    onLoad: function onLoad() {
        this.owner = this.node.getComponent('Wrom');
        var self = this;
        cc.loader.loadRes('fruit/bomb', function (err, prefab) {
            self.prefab = prefab;
            if (self.needAttach) {
                self.createBomb();
                self.needAttach = false;
            }
        });
    },
    createBomb: function createBomb() {
        if (this.display || !this.prefab) {
            return;
        }
        this.display = cc.instantiate(this.prefab);
        this.display.parent = this.node;
        this.animState = this.display.getComponent(cc.Animation).getAnimationState('bomb');
        // this.animState.speed = 1;
    },
    onEnable: function onEnable() {
        this.level = 1;
        if (this.prefab) {
            this.createBomb();
        } else {
            this.needAttach = true;
        }
        this.schedule(this.levelup, 3, 3, 3);
    },
    end: function end() {
        this.unschedule(this.levelup);
        this.display.parent = null;
    },
    levelup: function levelup() {
        this.level++;
        if (this.level === 5) {
            this.unschedule(this.levelup);
            this.owner.enabled = false;
            var animState = this.display.getComponent(cc.Animation).play('explode');
            cc.audioEngine.play(this.owner.expAudio, false, 2);
            animState.on('finished', function () {
                this.display.parent = null;
                var x = this.owner.node.x;
                var y = this.owner.node.y;
                var wroms = this.owner._game._wroms;
                this.owner.die();

                var vec = cc.v2();
                for (var name in wroms) {
                    var wrom = wroms[name];
                    vec.x = wrom.node.x - x;
                    vec.y = wrom.node.y - y;
                    if (cc.pLength(vec) < 125) {
                        wrom.die();
                    }
                }

                this.owner._game.map.eatBlock(x, y, 125);
            }, this);
        } else {
            this.animState.speed = this.level;
        }
    }
});

cc._RF.pop();
},{}],"Config":[function(require,module,exports){
"use strict";
cc._RF.push(module, '69d14vQDQBJf5XNxTzlvG6h', 'Config');
// scripts/Config.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        defaultSpeed: 10,
        eatTime: 3,
        birthRect: cc.rect(),
        growRate: 1,
        beginGrow: 0.1,
        growCount: 10,

        initFruitCount: 10,
        maxFruitCount: 20,
        fruitGenerateFreq: 1,
        fruitCollisionSeuil: 20,

        battleTime: 180, // 单局游戏对战时间，秒
        rankSize: 10, // 单局游戏对战时间，秒

        rebirthTime: 5, // 复活需要的时间
        recoverOnDeath: 0.8 }

});

cc._RF.pop();
},{}],"Fatty":[function(require,module,exports){
"use strict";
cc._RF.push(module, '38be5eGfPFOhaPSQ4tsT9DB', 'Fatty');
// scripts/fruits/Fatty.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        owner: null
    },

    // use this for initialization
    onEnable: function onEnable() {
        this.owner = this.node.getComponent('Wrom');
        this.node.scaleX = this.node.scaleY = 1.8;
        this.owner.eatRadius = 20;

        this.scheduleOnce(this.end, 12);
    },
    end: function end() {
        this.node.scaleX = this.node.scaleY = 1;
        if (this.owner) {
            this.owner.eatRadius = 0;
            this.owner.removeFruit();
            this.owner = null;
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

});

cc._RF.pop();
},{}],"FruitsMgr":[function(require,module,exports){
"use strict";
cc._RF.push(module, '3100brIFnRIgphUwV5FC2Xp', 'FruitsMgr');
// scripts/FruitsMgr.js

'use strict';

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

var Types = [require('./fruits/Bomb'), require('./fruits/Fatty'), require('./fruits/Attack')];

var Probability = [0.2, 0.3, 1];
var sum = 0;
for (var i = 0; i < Probability.length; i++) {
    sum += Probability[i];
}

function randomFruit() {
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

    onLoad: function onLoad() {
        this._pool = new cc.NodePool();

        this._jumpAction = cc.sequence(cc.spawn(cc.scaleTo(0.1, 1.2, 0.8), cc.moveBy(0.1, 0, 10)), cc.spawn(cc.scaleTo(0.2, 1, 1), cc.moveBy(0.2, 0, -10)), cc.delayTime(1)).repeatForever();

        this.reset();
    },
    genFruit: function genFruit() {
        if (this.node.children.length >= this.config.maxFruitCount) {
            return null;
        }
        var node = this._pool.get() || cc.instantiate(this.fruitPrefab);
        node.parent = this.node;
        node.runAction(this._jumpAction.clone());

        var rect = this.config.birthRect;
        node.x = rect.x + Math.random() * rect.width | 0;
        node.y = rect.y + Math.random() * rect.height | 0;

        var fruit = node.getComponent(Fruit);
        fruit.ability = randomFruit();
        return node;
    },
    reset: function reset() {
        var i;
        for (i = this.node.children.length - 1; i >= 0; i--) {
            var node = this.node.children[i];
            node.stopAllActions();
            this._pool.put(node);
        }
        for (i = 0; i < this.config.initFruitCount; i++) {
            this.genFruit();
        }

        this._timer = this.config.fruitGenerateFreq;
    },
    getFruit: function getFruit(wrom, fruit) {
        var node = fruit.node;
        node.stopAllActions();
        this._pool.put(node);

        var ability = wrom.node.addComponent(fruit.ability);
        wrom._fruit = ability;
        cc.audioEngine.play(wrom.pickupAudio, false, 2);
    },
    rob: function rob(wromA, wromB) {
        if (wromB._fruit) {
            wromA.removeFruit();

            var ability = wromA.node.addComponent(wromB._fruit.constructor);
            wromA._fruit = ability;
            wromB.removeFruit();
        }
    },


    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
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
    }
});

cc._RF.pop();
},{"./fruits/Attack":"Attack","./fruits/Bomb":"Bomb","./fruits/Fatty":"Fatty","Config":"Config","Fruit":"Fruit"}],"Fruit":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'ffededf5jRJjp+pEYryoYdn', 'Fruit');
// scripts/Fruit.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        ability: null
    }
});

cc._RF.pop();
},{}],"Game":[function(require,module,exports){
"use strict";
cc._RF.push(module, '29493NjBbFBfaN390kLT6zz', 'Game');
// scripts/Game.js

"use strict";

// Start the main app logic.

var hft = require('hft');
var GameServer = hft.GameServer;
var Map = require('Map');

cc.Class({
    extends: cc.Component,
    properties: {
        map: Map,
        fruitsMgr: require('FruitsMgr'),
        wromsNode: cc.Node,
        wromPrefab: cc.Prefab,
        _wroms: null,

        timerNode: cc.Node,
        _time: 0,
        _running: true,

        rankView: { default: null, type: cc.ScrollView },
        rankPrefab: { default: null, type: cc.Prefab },
        _rankTime: 0,

        settlePrefab: cc.Prefab,

        graveyard: cc.Node, //墓地
        ripPrefab: cc.Prefab, //墓碑
        fallAudio: {
            url: cc.AudioClip,
            default: null
        },

        effectNode: cc.Node, //特效层
        _blockpool: null },

    onLoad: function onLoad() {
        this._wroms = {};
        cc.view.enableAntiAlias(false);
        this.initServer();
        this.fruitsMgr._game = this;
        this._blockpool = new cc.NodePool();
    },
    getWrom: function getWrom(netPlayer, name) {
        var wrom = this._wroms[name];
        if (wrom && wrom.isConnected()) {
            wrom = cc.instantiate(this.wromPrefab).getComponent('Wrom');
            name = name + '2';
            this._wroms[name] = wrom;
        } else if (!wrom) {
            wrom = cc.instantiate(this.wromPrefab).getComponent('Wrom');
            this._wroms[name] = wrom;
        }
        wrom.init(name, netPlayer, this);
        wrom.enabled = this._time > 0;

        if (!wrom.node.parent) {
            wrom.node.parent = this.wromsNode;
        }
    },
    changeWromName: function changeWromName(oldname, name) {
        var wrom = this._wroms[oldname];
        if (wrom) {
            var existed = this._wroms[name];
            if (existed && existed.netPlayer.isConnected()) {
                wrom.nameLabel.string = name + '1';
                this.changeWromName(oldname, name + '1');
            } else {
                this._wroms[name] = wrom;
                delete this._wroms[oldname];
            }
        }
    },
    initServer: function initServer() {
        var server = new GameServer();
        // A new player has arrived.
        var self = this;
        // self.wromsNode.removeAllChildren();
        server.addEventListener('playerconnect', this.getWrom.bind(this));
        this._time = this.getComponent('Config').battleTime;

        // 排行榜
        this.rankView.content.removeAllChildren();
        for (var i = 0; i < this.getComponent('Config').rankSize; ++i) {
            var r = cc.instantiate(this.rankPrefab);
            r.y = -10 - r.height / 2 - r.height * i;
            r.getChildByName('rank').getComponent(cc.Label).string = i + 1;
            r.active = false;
            this.rankView.content.addChild(r);
        }
    },
    update: function update(dt) {
        if (this._time <= 0) return; //结束状态

        // 更新计时器
        this._time -= dt;
        if (this._time <= 0) {
            // 由非结束到结束->结算时间 
            this.settle();
            return;
        }

        var t = Math.floor(this._time);
        this.timerNode.getComponent(cc.Label).string = ("0" + Math.floor(t / 60)).substr(-2) + ":" + ("0" + t % 60).substr(-2);

        this.checkWromAttack();
        this.updateRank(dt);
        this.rebirth(dt);
    },
    settle: function settle() {
        var _this = this;

        var names = Object.keys(this._wroms);
        names.sort(function (o1, o2) {
            return _this._wroms[o2].score - _this._wroms[o1].score;
        });
        for (var i = 0; i < names.length; ++i) {
            var worm = this._wroms[names[i]];
            if (worm) worm.enabled = false;
        }

        var settlenode = cc.instantiate(this.settlePrefab);
        settlenode.getComponent('SettlePanel').setRanker(this._wroms[names[0]], this._wroms[names[1]], this._wroms[names[2]]);
        settlenode.x = 0;
        settlenode.y = 0;
        this.node.addChild(settlenode);
    },
    updateRank: function updateRank(dt) {
        var _this2 = this;

        this._rankTime += dt;
        if (this._rankTime <= 1) {
            return;
        }

        this._rankTime = 0;
        // 更新排行榜
        var names = Object.keys(this._wroms);
        names.sort(function (o1, o2) {
            return _this2._wroms[o2].score - _this2._wroms[o1].score;
        });
        for (var i = 0; i < this.getComponent('Config').rankSize; ++i) {
            var w = this._wroms[names[i]];
            var r = this.rankView.content.children[i];
            if (w) {
                r.active = true;
                r.getChildByName('name').getComponent(cc.Label).string = w.nameLabel.string;
                r.getChildByName('score').getComponent(cc.Label).string = w.score + 1;
            } else {
                r.active = false;
            }
        }
    },
    rebirth: function rebirth(dt) {
        for (var name in this._wroms) {
            var w = this._wroms[name];
            if (!w || !w.isdead() || !w.netPlayer.isConnected()) continue;
            w.deadTime += dt;
            if (w.deadTime > this.getComponent('Config').rebirthTime) {
                w.rebirth();
            }
        }
    },
    onWromDie: function onWromDie(wormnode) {
        var _this3 = this;

        // 墓碑效果
        var rip = cc.instantiate(this.ripPrefab);
        rip.getChildByName('name').getComponent(cc.Label).string = wormnode.getComponent('Wrom').nameLabel.string;
        rip.getChildByName('cd').getComponent(cc.Label).string = '';
        rip.x = wormnode.x + this.wromsNode.x - this.graveyard.x;
        rip.y = wormnode.y + this.wromsNode.y - this.graveyard.y;
        var action = cc.moveTo(1, rip.x, 0);
        action.easing(cc.easeCubicActionIn());
        rip.runAction(cc.sequence(action, cc.callFunc(function () {
            cc.audioEngine.play(_this3.fallAudio, false, 2);
        }, this)));
        this.graveyard.addChild(rip);

        // 吸收效果
        for (var i = 0; i < 20; ++i) {
            // 虫子中心 创建N个方块 爆炸
            var block = this._blockpool.get() || cc.instantiate(this.map.blockPrefab);
            block.x = wormnode.x;
            block.y = wormnode.y;
            block.anchorX = 0.5;
            block.anchorY = 0.5;
            this.effectNode.addChild(block);

            var explore = cc.sequence(cc.moveBy(0.1, 200 - Math.random() * 400, 200 - Math.random() * 400), cc.moveTo(0.8, 800, 53), //树心位置
            cc.callFunc(this.reuseBlock, this, block));
            var turnning = cc.rotateBy(1, 360 + 360 * Math.random());
            block.runAction(cc.spawn(explore, turnning));
        }
    },
    checkWromAttack: function checkWromAttack() {
        var a, b;
        var ax,
            ay,
            v2 = cc.v2();
        for (var namea in this._wroms) {
            a = this._wroms[namea];
            if (a.attacking && a.enabled && a.node.activeInHierarchy) {
                ax = a.node.x;
                ay = a.node.y;
                for (var nameb in this._wroms) {
                    if (namea === nameb) continue;
                    b = this._wroms[nameb];
                    if (!b.enabled || !b.node.activeInHierarchy) continue;
                    v2.x = b.node.x - ax;
                    v2.y = b.node.y - ay;

                    if (cc.pLength(v2) > 50) continue;
                    if (b.attacking) {
                        a.die();
                        b.die();
                        break;
                    } else {
                        this.fruitsMgr.rob(a, b);
                        b.die();
                    }
                }
            }
        }
    },
    reuseBlock: function reuseBlock(block) {
        block.stopAllActions();
        this._blockpool.put(block);
    },
    doooooom: function doooooom() {
        for (var name in this._wroms) {
            var w = this._wroms[name];
            if (w) {
                w.die();
            }
        }
    },
    newBattle: function newBattle() {
        this._time = this.getComponent('Config').battleTime;
        for (var name in this._wroms) {
            var w = this._wroms[name];
            if (w) {
                w.enabled = true;
                w.score = 0;
                w.rebirth();
            }
        }

        this.map.reset();
        this.fruitsMgr.reset();
        this.graveyard.removeAllChildren();
    }
});

cc._RF.pop();
},{"FruitsMgr":"FruitsMgr","Map":"Map","hft":"hft"}],"Map":[function(require,module,exports){
"use strict";
cc._RF.push(module, '19884ZwyadI7qIEaKdestFZ', 'Map');
// scripts/Map.js

'use strict';

var datas = require('data');

cc.Class({
    extends: cc.Component,

    properties: {
        blockPrefab: cc.Prefab,
        blockWidth: 20,
        blockHeight: 20,
        blockAtlas: cc.SpriteAtlas,
        _emptyBlocks: [],
        _config: null,
        _timer: 0,
        _frames: null
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.director.setClearColor(cc.color(255, 255, 255, 255));
        this._config = cc.find('Canvas').getComponent('Config');
        this._timer = 0;

        this._frames = {
            1: this.blockAtlas.getSpriteFrame(1),
            2: this.blockAtlas.getSpriteFrame(2)
        };

        var width = cc.winSize.width,
            height = cc.winSize.height,
            bw = this.blockWidth,
            bh = this.blockHeight,
            rows = this._rows = height / bh | 0,
            cols = this._cols = width / bw | 0;

        this._blocks = new Array(rows * cols);
        var color = cc.color();
        var i,
            x,
            y,
            block,
            data,
            prefab = this.blockPrefab;
        for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
                i = r * cols + c;
                data = datas[i];
                if (data <= 0) {
                    continue;
                }
                x = c * bw;
                y = (rows - 1 - r) * bh;
                block = this._blocks[i] = cc.instantiate(prefab);
                block.getComponent(cc.Sprite).spriteFrame = this._frames[data];
                block.x = x;
                block.y = y;
                if (data === 1) {
                    color.r = 30 + Math.random() * 30 | 0;
                    color.g = 100 + Math.random() * 50 | 0;
                    color.b = Math.random() * 20 | 0;
                } else if (data === 2) {
                    color.r = 200 + Math.random() * 56 | 0;
                    color.g = 150 + Math.random() * 30 | 0;
                    color.b = 50 + Math.random() * 50 | 0;
                }
                block.color = color;
                block.opacity = 200;
                block.parent = this.node;
            }
        }
    },

    eatBlock: function eatBlock(x, y, radius) {
        var col = Math.round(x / this.blockWidth);
        var row = this._rows - 1 - Math.floor(y / this.blockHeight);
        var i, block;
        var count = 0;

        if (radius > 0) {
            var nr = radius / this.blockHeight | 0;
            var nc = radius / this.blockWidth | 0;
            var rstart = row - nr,
                rend = row + nr;
            for (var r = rstart; r < rend; r++) {
                var half = nc * (nr - Math.abs(r - row)) / nr;
                var cstart = col - half;
                var cend = col + half;
                for (var c = cstart; c < cend; c++) {
                    i = r * this._cols + c;
                    block = this._blocks[i];
                    if (block && datas[i] > 0) {
                        block.parent = null;
                        this._emptyBlocks.push(i);
                        datas[i] = 0;
                        count++;
                    }
                }
            }
        }

        i = row * this._cols + col;
        block = this._blocks[i];
        if (block && datas[i] > 0) {
            block.parent = null;
            this._emptyBlocks.push(i);
            datas[i] = 0;
            count++;
        }
        return count;
    },

    growBlock: function growBlock(i) {
        if (datas[i] === 0 && this._blocks[i]) {
            var block = this._blocks[i];
            block.getComponent(cc.Animation).play('showBlock');
            block.parent = this.node;
            datas[i] = 1;
        }
    },

    recover: function recover(count) {
        count = Math.min(count, this._emptyBlocks.length);
        for (var i = 0; i < count; ++i) {
            var index = this._emptyBlocks.length * Math.random() | 0;
            this.growBlock(this._emptyBlocks[index]);
            this._emptyBlocks[index] = this._emptyBlocks[this._emptyBlocks.length - 1];
            this._emptyBlocks.length--;
        }
    },

    delayRecover: function delayRecover(time, count) {
        var self = this;
        this.scheduleOnce(function () {
            return self.recover(count);
        }, time);
    },

    reset: function reset() {
        for (var i = 0; i < this._emptyBlocks.length; ++i) {
            this.growBlock(this._emptyBlocks[i]);
        }
        this._emptyBlocks.length = 0;
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this._timer += dt;
        if (this._timer > this._config.growRate) {
            this._timer = 0;
            if (this._emptyBlocks.length / (this._rows * this._cols) > this._config.beginGrow) {
                this.recover(this._config.growCount);
            }
        }
    }
});

cc._RF.pop();
},{"data":"data"}],"RankCtrl":[function(require,module,exports){
"use strict";
cc._RF.push(module, '42d27JEFVJP6q/lfgHZsiUd', 'RankCtrl');
// scripts/RankCtrl.js

"use strict";

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
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.node.cascadeOpacity = false;
    }

});

cc._RF.pop();
},{}],"SettlePanel":[function(require,module,exports){
"use strict";
cc._RF.push(module, '52086lIVuxMWrN7CCVi2/9/', 'SettlePanel');
// scripts/SettlePanel.js

'use strict';

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
        rankLabel_1: {
            default: null,
            type: cc.Label
        },
        rankLabel_2: {
            default: null,
            type: cc.Label
        },
        rankLabel_3: {
            default: null,
            type: cc.Label
        },
        timeLabel: {
            default: null,
            type: cc.Label
        },

        _time: 10
    },

    // use this for initialization
    onLoad: function onLoad() {
        this._time = 10;
    },

    setRanker: function setRanker(wrom1, wrom2, wrom3) {
        if (wrom1) {
            this.rankLabel_1.string = wrom1.nameLabel.string;
        } else {
            this.rankLabel_1.string = 'No Winner!!';
        }

        if (wrom2) {
            this.rankLabel_2.string = wrom2.nameLabel.string;
            this.rankLabel_2.node.active = true;
        } else {
            this.rankLabel_2.node.active = false;
        }

        if (wrom3) {
            this.rankLabel_3.string = wrom3.nameLabel.string;
            this.rankLabel_3.node.active = true;
        } else {
            this.rankLabel_3.node.active = false;
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this._time -= dt;
        if (this._time <= 0.5) {
            this.node.removeFromParent();
            cc.find('Canvas').getComponent('Game').newBattle();
            return;
        }
        this.timeLabel.string = this._time.toFixed();
    }
});

cc._RF.pop();
},{}],"Utils":[function(require,module,exports){
"use strict";
cc._RF.push(module, '1f224+STE9BCKSzhkvyGhd3', 'Utils');
// scripts/Utils.js

"use strict";

cc._RF.pop();
},{}],"Wrom":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'd1e42O0+HJLIrQGeDBoibPO', 'Wrom');
// scripts/Wrom.js

"use strict";

var hft = require('hft');
var sampleUI = require('hft-sample-ui');
var PlayerNameManager = sampleUI.PlayerNameManager;

cc.Class({
    extends: cc.Component,

    properties: {
        display: cc.Node,
        score: 0,
        nameLabel: cc.Label,
        atlas: cc.SpriteAtlas,
        netPlayer: null,
        eatRadius: 0,
        attacking: false,
        _game: null,
        _map: null,
        _fruit: null,
        _config: null,
        _speed: 10,
        _eatTime: 3,
        _orientation: 0,
        _timer: 0,
        _moving: false,
        _inited: false,
        _playerNameManager: null,

        expAudio: {
            url: cc.AudioClip,
            default: null
        },
        hitAudio: {
            url: cc.AudioClip,
            default: null
        },
        pickupAudio: {
            url: cc.AudioClip,
            default: null
        }
    },

    onLoad: function onLoad() {
        if (!this._map) {
            this._map = cc.find('Canvas/Map').getComponent('Map');
        }
        if (!this._config) {
            this._config = cc.find('Canvas').getComponent('Config');
        }
        var frame = 'bugggg' + (Math.random() * 8 | 0 + 1);
        this.display.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame(frame);
    },
    init: function init(name, netPlayer, game) {
        this.nameLabel.string = name;
        this.netPlayer = netPlayer;
        this._playerNameManager = new PlayerNameManager(netPlayer);
        this._game = game;
        this._map = game.map;
        this._fruit = null;
        this._config = cc.find('Canvas').getComponent('Config');

        var rect = this._config.birthRect;
        this.node.x = rect.x + Math.random() * rect.width | 0;
        this.node.y = rect.y + Math.random() * rect.height | 0;

        this.initControl();
    },
    onEnable: function onEnable() {
        this._speed = this._config.defaultSpeed;
        this._eatTime = this._config.eatTime;
        this._orientation = 0;
        this._moving = false;

        // this.testControl();
        if (this.netPlayer && this.netPlayer.isConnected() && !this._inited) {
            this.initControl();
        }
    },
    onDisable: function onDisable() {
        this.netPlayer.sendCmd('waitForNextGame');
        this.netPlayer.removeAllListeners();
        this._inited = false;
    },
    initControl: function initControl() {
        if (this._inited) {
            return;
        }

        var netPlayer = this.netPlayer;
        netPlayer.on('disconnect', this.handleDisconnection.bind(this));
        netPlayer.on('pad', this.handlePad.bind(this));
        netPlayer.on('abutton', this.handleTrigger.bind(this));
        netPlayer.on('show', this.handleShowMsg.bind(this));
        this._playerNameManager.on('setName', this.handleNameMsg.bind(this));
        // this.playerNameManager.on('busy', this.handleBusyMsg.bind(this));

        this._inited = true;
    },
    handlePad: function handlePad(event) {
        if (!event || isNaN(event.radian)) {
            this._moving = false;
            return;
        }
        if (event.dir >= 0) {
            if (!this._moving) {
                this._moving = true;
                this._timer = 0;
            }
            this._orientation = event.radian;
            this.display.rotation = 360 - 180 * event.radian / Math.PI;
        } else {
            this._moving = false;
        }
    },
    handleDisconnection: function handleDisconnection(event) {
        this.node.removeFromParent(true);
    },
    handleTrigger: function handleTrigger(event) {
        if (this._fruit && this._fruit.controlTrigger) {
            this._fruit.controlTrigger();
        }
    },
    handleShowMsg: function handleShowMsg(event) {
        console.log(event);
    },
    handleNameMsg: function handleNameMsg(name) {
        if (name) {
            var oldname = this.nameLabel.string;
            this.nameLabel.string = name;
            this._game.changeWromName(oldname, name);
        }
    },
    testControl: function testControl() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
            switch (event.keyCode) {
                case cc.KEY.up:
                    this._orientation = Math.PI * 90 / 180;
                    break;
                case cc.KEY.down:
                    this._orientation = Math.PI * 270 / 180;
                    break;
                case cc.KEY.left:
                    this._orientation = Math.PI;
                    break;
                case cc.KEY.right:
                    this._orientation = 0;
                    break;
                default:
                    this._moving = false;
                    return;
            }
            if (!this._moving) {
                this._moving = true;
                this._timer = 0;
            }
        }, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function (event) {
            this._moving = false;
        }, this);
    },


    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this._moving) {
            var dx = this._speed * Math.cos(this._orientation);
            var dy = this._speed * Math.sin(this._orientation);
            this.node.x += dx;
            this.node.y += dy;

            if (this.node.x < 20 || this.node.x > cc.winSize.width - 20) {
                this.node.x -= dx;
            }
            if (this.node.y < 220 || this.node.y > cc.winSize.height - 20) {
                this.node.y -= dy;
            }

            this._timer += dt;
            if (this._timer > this._eatTime) {
                var ate = this._map.eatBlock(this.node.x, this.node.y, this.eatRadius);
                this.score += ate;
                this._timer = 0;
                this._eatTime = this._config.eatTime + (Math.random() * 5 - 2 | 0) / 100;
            }
        }
    },
    removeFruit: function removeFruit() {
        if (this._fruit) {
            var fruit = this._fruit;
            this._fruit = null;
            fruit.end();
            this.node.removeComponent(fruit);
        }
    },
    die: function die() {
        this.removeFruit();
        this.netPlayer.sendCmd('died');
        this.node.parent = null;
        this.deadTime = 0;
        this._game.onWromDie(this.node);
        var lost = this._config.recoverOnDeath * this.score;
        this._score -= lost;
        this._map.delayRecover(1, lost);
    },
    isdead: function isdead() {
        return this.node.parent == null;
    },
    rebirth: function rebirth() {
        if (this.parent == null) this.node.parent = this._game.wromsNode;

        this.removeFruit();

        var rect = this._config.birthRect;
        this.node.x = rect.x + Math.random() * rect.width | 0;
        this.node.y = rect.y + Math.random() * rect.height | 0;

        if (!this.enabled) {
            this.enabled = true;
        } else if (this.netPlayer && this.netPlayer.isConnected() && !this._inited) {
            this.initControl();
        }

        this.netPlayer.sendCmd('start');
    }
});

cc._RF.pop();
},{"hft":"hft","hft-sample-ui":1}],"data":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'a85b54NiENKbpWU2Cb5EMs0', 'data');
// scripts/data.js

"use strict";

module.exports = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

cc._RF.pop();
},{}],"hft":[function(require,module,exports){
"use strict";
cc._RF.push(module, '9e5fenJXLhJIbQ17X9wIG2e', 'hft');
// scripts/lib/hft.js

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["HFT"] = factory();else root["HFT"] = factory();
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};

			/******/ // The require function
			/******/function __webpack_require__(moduleId) {

				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;

				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };

				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

				/******/ // Flag the module as loaded
				/******/module.loaded = true;

				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}

			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;

			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;

			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";

			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(6), __webpack_require__(8), __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (GameClient, GameServer, LocalNetPlayer, SyncedClock) {
				return {
					GameClient: GameClient,
					GameServer: GameServer,
					LocalNetPlayer: LocalNetPlayer,
					SyncedClock: SyncedClock
				};
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*
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

			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(3), __webpack_require__(4), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Cookie, io, misc, VirtualSocket) {
				/**
     * @typedef {Object} GameClient~Options
     * @property {bool} [reconnect] Reconnect after disconnected (default: true)
     */

				/**
     * Event that we've connected to happyFunTimes
     *
     * @event GameClient#connected
     */

				/**
     * Event that we've been disconnected from happyFunTimes
     *
     * @event GameClient#disconnected
     */

				/**
     * GameClient is what a controller(phone) uses to talk with a
     * game's GameServer(the game).
     *
     * Messages sent with `sendCmd` get sent to the game. Messages
     * from the game are delivered to callbacks registered with
     * `addEventListener`.
     *
     * @constructor
     * @alias GameClient
     * @param {GameClient~Options} [options] options.
     */
				var GameClient = function GameClient(options) {
					options = options || {};
					var g_socket;
					var g_sendQueue = [];
					var eventListeners = {};
					var log = options.quiet === true ? console.log.bind(console) : function () {};

					if (!options.gameId) {
						options.gameId = "HFTHTML5";
					}

					/**
      * @callback GameClient~Listener
      * @param {Object} data data from sender.
      */

					/**
      * Adds an event listener for the given event type.
      * event types are made up by you. Sending a command
      * from the game with
      *
      *     someNetPlayer.sendCmd('foo', {data: "bar"});
      *
      * Will arrive at the event listener registered for 'foo' here
      * and given an object `{data: "bar"}`.
      *
      * Note: Currently only 1 listener is allowed per eventType.
      * Adding a second listener for an specific eventType replaces
      * the previous listener for that type.
      *
      * @param {string} eventType name of event
      * @param {GameClient~Listener} listener callback to call for
      *        event.
      */
					this.addEventListener = function (eventType, listener) {
						eventListeners[eventType] = listener;
					};

					/**
      * Same as addEventListener
      */
					this.on = this.addEventListener;

					/**
      * Removes an eventListener
      * @param {string} eventType name of event
      */
					this.removeEventListener = function (eventType) {
						eventListeners[eventType] = undefined;
					};

					var sendEvent_ = function (eventType, args) {
						var fn = eventListeners[eventType];
						if (fn) {
							fn.apply(this, args);
						} else {
							console.error("GameClient[" + options.gameId + "]: unknown event: " + eventType);
						}
					}.bind(this);

					var connected_ = function connected_() {
						for (var ii = 0; ii < g_sendQueue.length; ++ii) {
							g_socket.send(g_sendQueue[ii]);
						}
						g_sendQueue = [];
						log("connected");
						sendEvent_('connect');
					};

					function makeHFTPingRequest(fn) {
						io.sendJSON(window.location.href, { cmd: 'happyFunTimesPing' }, function (err, obj) {
							fn(err, obj);
						}, { timeout: 2000 });
					};

					function noop() {}

					function reconnect() {
						reconnect_ = noop;
						function waitForPing() {
							makeHFTPingRequest(function (err, obj) {
								if (err) {
									setTimeout(waitForPing, 1000);
									return;
								}
								window.location.href = "/";
							});
						}
						// give it a moment to recover
						setTimeout(waitForPing, 2000);

						// Maybe needed for app?
						// var redirCookie = new Cookie("redir");
						// var url = redirCookie.get() || "http://happyfuntimes.net";
						// console.log("goto: " + url);
						// window.location.href = url;
					}

					var reconnect_ = options.reconnect !== false ? reconnect : noop;

					var disconnected_ = function disconnected_() {
						if (g_socket) {
							g_socket = undefined;
							log("disconnected");
							sendEvent_('disconnect');
							eventListeners = {};
						}
						reconnect_();
					};

					var processMessage_ = function processMessage_(msg) {
						sendEvent_(msg.cmd, [msg.data]); // FIX: no need for this array?
					};

					var handleError_ = function handleError_(err) {
						log(err);
						sendEvent_('error');
						if (g_socket) {
							g_socket.close();
						}
						disconnected_();
					};

					var connect_ = function () {
						g_sendQueue = [];
						g_socket = options.socket || new VirtualSocket(options);
						g_socket.on('connect', connected_.bind(this));
						g_socket.on('message', processMessage_.bind(this));
						g_socket.on('disconnect', disconnected_.bind(this));
						g_socket.on('error', handleError_.bind(this));
					}.bind(this);

					var sendCmdLowLevel = function sendCmdLowLevel(cmd, data) {
						if (!g_socket) {
							return;
						}
						var msg = {
							cmd: cmd,
							data: data
						};
						if (!g_socket.isConnected()) {
							g_sendQueue.push(msg);
						} else {
							g_socket.send(msg);
						}
					};

					var sendCmd = function sendCmd(cmd, data) {
						sendCmdLowLevel('update', {
							cmd: cmd,
							data: data
						});
					};

					/**
      * Sends a command to the game
      * @param {string} cmd name of command
      * @param {Object=} data any jsonifyable object.
      * @example
      *
      *     client.sendCmd('position', {
      *        x: 123,
      *        y: 456,
      *     });
      */
					this.sendCmd = sendCmd;

					function sendLogMsg(type, msg) {
						sendCmd("_hft_log_", { type: type, msg: msg });
					}

					this.error = function () {
						console.error.apply(console, arguments);
						sendLogMsg("error", Array.prototype.join.call(arguments, " "));
					};

					this.errorImpl = function () {
						sendLogMsg("error", Array.prototype.join.call(arguments, " "));
					};

					this.log = function () {
						console.log.apply(console, arguments);
						sendLogMsg("log", Array.prototype.join.call(arguments, " "));
					};

					this.logImpl = function () {
						sendLogMsg("log", Array.prototype.join.call(arguments, " "));
					};

					connect_();

					var idCookie = new Cookie("__hft_id__");
					var opts = misc.mergeObjects(options);
					var id = idCookie.get();
					if (!id) {
						id = misc.makeRandomId();
						idCookie.set(id);
					}

					var nameCookie = new Cookie("name");

					opts.data = misc.mergeObjects(opts.data);
					opts.data.__hft_session_id__ = id; // eslint-disable-line
					opts.data.__hft_name__ = nameCookie.get() || ""; // eslint-disable-line
					sendCmdLowLevel('join', opts);
				};
				return GameClient;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

			/***/
		},
		/* 2 */
		/***/function (module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_RESULT__; /*
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

			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {

				var window = Function('return this;')();
				var document = window.document || {
					cookie: ''
				};

				/**
     * Represents a cookie.
     *
     * This is an object, that way you set the name just once so
     * calling set or get you don't have to worry about getting the
     * name wrong.
     *
     * @example
     *     var fooCookie = new Cookie("foo");
     *     var value = fooCookie.get();
     *     fooCookie.set(newValue);
     *     fooCookie.erase();
     *
     * @constructor
     * @alias Cookie
     * @param {string} name of cookie
     * @param {string?} opt_path path for cookie. Default "/"
     */
				var Cookie = function Cookie(name, opt_path) {
					var path = opt_path || "/";

					/**
      * Sets the cookie
      * @param {string} value value for cookie
      * @param {number?} opt_days number of days until cookie
      *        expires. Default = none
      */
					this.set = function (value, opt_days) {
						if (value === undefined) {
							this.erase();
							return;
						}
						// Cordova/Phonegap doesn't support cookies so use localStorage?
						if (window.hftSettings && window.hftSettings.inApp) {
							window.localStorage.setItem(name, value);
							return;
						}
						var expires = "";
						opt_days = opt_days || 9999;
						var date = new Date();
						date.setTime(Date.now() + Math.floor(opt_days * 24 * 60 * 60 * 1000)); // > 32bits. Don't use | 0
						expires = "; expires=" + date.toGMTString();
						var cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=" + path;
						document.cookie = cookie;
					};

					/**
      * Gets the value of the cookie
      * @return {string?} value of cookie
      */
					this.get = function () {
						// Cordova/Phonegap doesn't support cookies so use localStorage?
						if (window.hftSettings && window.hftSettings.inApp) {
							return window.localStorage.getItem(name);
						}

						var nameEQ = encodeURIComponent(name) + "=";
						var ca = document.cookie.split(';');
						for (var i = 0; i < ca.length; ++i) {
							var c = ca[i];
							while (c.charAt(0) === ' ') {
								c = c.substring(1, c.length);
							}
							if (c.indexOf(nameEQ) === 0) {
								return decodeURIComponent(c.substring(nameEQ.length, c.length));
							}
						}
					};

					/**
      * Erases the cookie.
      */
					this.erase = function () {
						if (window.hftSettings && window.hftSettings.inApp) {
							return window.localStorage.removeItem(name);
						}
						document.cookie = this.set(" ", -1);
					};
				};

				return Cookie;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

			/***/
		},
		/* 3 */
		/***/function (module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_RESULT__; /*
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

			/**
    * Misc IO functions
    * @module IO
    */
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				var log = function log() {};
				//var log = console.log.bind(console);

				/**
     * @typedef {Object} SendJson~Options
     * @memberOf module:IO
     * @property {number?} timeout. Timeout in ms to abort.
     *        Default = no-timeout
     */

				/**
     * sends a JSON 'POST' request, returns JSON repsonse
     * @memberOf module:IO
     * @param {string} url url to POST to.
     * @param {Object=} jsonObject JavaScript object on which to
     *        call JSON.stringify.
     * @param {!function(error, object)} callback Function to call
     *        on success or failure. If successful error will be
     *        null, object will be json result from request.
     * @param {module:IO~SendJson~Options?} options
     */
				var sendJSON = function sendJSON(url, jsonObject, callback, option) {
					option = option || {};
					//    var error = 'sendJSON failed to load url "' + url + '"';
					var request = new XMLHttpRequest();
					if (request.overrideMimeType) {
						request.overrideMimeType('text/plain');
					}
					var timeout = option.timeout || 0;
					if (timeout) {
						request.timeout = timeout;
						log("set timeout to: " + request.timeout);
					}
					request.open('POST', url, true);
					var js = JSON.stringify(jsonObject);
					var callCallback = function callCallback(error, json) {
						if (callback) {
							log("calling-callback:" + (error ? " has error" : "success"));
							callback(error, json);
							callback = undefined; // only call it once.
						}
					};
					//    var handleAbort = function(e) {
					//      log("--abort--");
					//      callCallback("error (abort) sending json to " + url);
					//    }
					var handleError = function handleError() /*e*/{
						log("--error--");
						callCallback("error sending json to " + url);
					};
					var handleTimeout = function handleTimeout() /*e*/{
						log("--timeout--");
						callCallback("timeout sending json to " + url);
					};
					var handleForcedTimeout = function handleForcedTimeout() /*e*/{
						if (callback) {
							log("--forced timeout--");
							request.abort();
							callCallback("forced timeout sending json to " + url);
						}
					};
					var handleFinish = function handleFinish() {
						log("--finish--");
						var json = undefined;
						// HTTP reports success with a 200 status. The file protocol reports
						// success with zero. HTTP does not use zero as a status code (they
						// start at 100).
						// https://developer.mozilla.org/En/Using_XMLHttpRequest
						var success = request.status === 200 || request.status === 0;
						if (success) {
							try {
								json = JSON.parse(request.responseText);
							} catch (e) {
								success = false;
							}
						}
						callCallback(success ? null : 'could not load: ' + url, json);
					};
					try {
						// Safari 7 seems to ignore the timeout.
						if (timeout) {
							setTimeout(handleForcedTimeout, timeout + 50);
						}
						request.addEventListener('load', handleFinish, false);
						request.addEventListener('timeout', handleTimeout, false);
						request.addEventListener('error', handleError, false);
						request.setRequestHeader("Content-type", "application/json");
						request.send(js);
						log("--sent: " + url);
					} catch (e) {
						log("--exception--");
						setTimeout(function () {
							callCallback('could not load: ' + url, null);
						}, 0);
					}
				};

				return {
					sendJSON: sendJSON
				};
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

			/***/
		},
		/* 4 */
		/***/function (module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_RESULT__; /*
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

			/**
    * @module Misc
    */
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {

				var window = Function('return this;')();
				if (!window.location) {
					window.location = {
						search: ''
					};
				}

				/**
     * Copies properties from obj to dst recursively.
     * @param {Object} obj Object with new settings.
     * @param {Object} dst Object to receive new settings.
     * @param {number?} opt_overwriteBehavior
     *     *   0/falsy = overwrite
     *
     *         src    = {foo:'bar'}
     *         dst    = {foo:'abc'}
     *         result = {foo:'bar'}
     *
     *     *   1 = don't overwrite but descend if deeper
     *
     *         src    = {foo:{bar:'moo','abc':def}}
     *         dst    = {foo:{bar:'ghi'}}
     *         result = {foo:{bar:'ghi','abc':def}}
     *
     *         'foo' exists but we still go deeper and apply 'abc'
     *
     *     *   2 = don't overwrite don't descend
     *
     *             src    = {foo:{bar:'moo','abc':def}}
     *             dst    = {foo:{bar:'ghi'}}
     *             result = {foo:{bar:'ghi'}}
     *
     *         'foo' exists so we don't go any deeper
     *
     */
				var copyProperties = function copyProperties(src, dst, opt_overwriteBehavior) {
					Object.keys(src).forEach(function (key) {
						if (opt_overwriteBehavior === 2 && dst[key] !== undefined) {
							return;
						}
						var value = src[key];
						if (value instanceof Array) {
							var newDst = dst[key];
							if (!newDst) {
								newDst = [];
								dst[name] = newDst;
							}
							copyProperties(value, newDst, opt_overwriteBehavior);
						} else if (value instanceof Object && !(value instanceof Function) && !(value instanceof HTMLElement)) {
							var newDst2 = dst[key];
							if (!newDst2) {
								newDst2 = {};
								dst[key] = newDst2;
							}
							copyProperties(value, newDst2, opt_overwriteBehavior);
						} else {
							if (opt_overwriteBehavior === 1 && dst[key] !== undefined) {
								return;
							}
							dst[key] = value;
						}
					});
					return dst;
				};

				function searchStringToObject(str, opt_obj) {
					if (str[0] === '?') {
						str = str.substring(1);
					}
					var results = opt_obj || {};
					str.split("&").forEach(function (part) {
						var pair = part.split("=").map(decodeURIComponent);
						results[pair[0]] = pair[1] !== undefined ? pair[1] : true;
					});
					return results;
				}

				function objectToSearchString(obj) {
					return "?" + Object.keys(obj).filter(function (key) {
						return obj[key] !== undefined;
					}).map(function (key) {
						return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
					}).join("&");
				}

				/**
     * Reads the query values from a URL like string.
     * @param {String} url URL like string eg. http://foo?key=value
     * @param {Object} [opt_obj] Object to attach key values to
     * @return {Object} Object with key values from URL
     * @memberOf module:Misc
     */
				var parseUrlQueryString = function parseUrlQueryString(str, opt_obj) {
					var dst = opt_obj || {};
					try {
						var q = str.indexOf("?");
						var e = str.indexOf("#");
						if (e < 0) {
							e = str.length;
						}
						var query = str.substring(q + 1, e);
						searchStringToObject(query, dst);
					} catch (e) {
						console.error(e);
					}
					return dst;
				};

				/**
     * Reads the query values from the current URL.
     * @param {Object=} opt_obj Object to attach key values to
     * @return {Object} Object with key values from URL
     * @memberOf module:Misc
     */
				var parseUrlQuery = function parseUrlQuery(opt_obj) {
					return searchStringToObject(window.location.search, opt_obj);
				};

				/**
     * Read `settings` from URL. Assume settings it a
     * JSON like URL as in http://foo?settings={key:value},
     * Note that unlike real JSON we don't require quoting
     * keys if they are alpha_numeric.
     *
     * @param {Object=} opt_obj object to apply settings to.
     * @param {String=} opt_argumentName name of key for settings, default = 'settings'.
     * @return {Object} object with settings
     * @func applyUrlSettings
     * @memberOf module:Misc
     */
				var fixKeysRE = new RegExp("([a-zA-Z0-9_]+)\:", "g");

				var applyUrlSettings = function applyUrlSettings(opt_obj, opt_argumentName) {
					var argumentName = opt_argumentName || 'settings';
					var src = parseUrlQuery();
					var dst = opt_obj || {};
					var settingsStr = src[argumentName];
					if (settingsStr) {
						var json = settingsStr.replace(fixKeysRE, '"$1":');
						var settings = JSON.parse(json);
						copyProperties(settings, dst);
					}
					return dst;
				};

				/**
     * Gets a function checking for prefixed versions
     *
     * example:
     *
     *     var lockOrientation = misc.getFunctionByPrefix(window.screen, "lockOrientation");
     *
     * @param {object} obj object that has function
     * @param {string} funcName name of function
     * @return {function?} or undefined if it doesn't exist
     */
				var prefixes = ["", "moz", "webkit", "ms"];
				function getFunctionByPrefix(obj, funcName) {
					var capitalName = funcName.substr(0, 1).toUpperCase() + funcName.substr(1);
					for (var ii = 0; ii < prefixes.length; ++ii) {
						var prefix = prefixes[ii];
						var name = prefix + prefix ? capitalName : funcName;
						var func = obj[name];
						if (func) {
							return func.bind(obj);
						}
					}
				}

				/**
     * Creates an invisible iframe and sets the src
     * @param {string} src the source for the iframe
     * @return {HTMLIFrameElement} The iframe
     */
				function gotoIFrame(src) {
					var iframe = document.createElement("iframe");
					iframe.style.display = "none";
					iframe.src = src;
					document.body.appendChild(iframe);
					return iframe;
				}

				/**
     * get a random int
     * @param {number} value max value exclusive. 5 = random 0 to 4
     * @return {number} random int
     * @memberOf module:Misc
     */
				var randInt = function randInt(value) {
					return Math.floor(Math.random() * value);
				};

				/**
     * get a random CSS color
     * @param {function(number): number?) opt_randFunc function to generate random numbers
     * @return {string} random css color
     * @memberOf module:Misc
     */
				var randCSSColor = function randCSSColor(opt_randFunc) {
					var randFunc = opt_randFunc || randInt;
					var strong = randFunc(3);
					var colors = [];
					for (var ii = 0; ii < 3; ++ii) {
						colors.push(randFunc(128) + (ii === strong ? 128 : 64));
					}
					return "rgb(" + colors.join(",") + ")";
				};

				/**
     * Gets a random element from array
     * @param {Array<*>} array array to select element from
     * @return {*} picked element
     */
				function pickRandomElement(array) {
					return array[randInt(array.length)];
				}

				/**
     * get a random 32bit color
     * @param {function(number): number?) opt_randFunc function to generate random numbers
     * @return {string} random 32bit color
     * @memberOf module:Misc
     */
				var rand32BitColor = function rand32BitColor(opt_randFunc) {
					var randFunc = opt_randFunc || randInt;
					var strong = randFunc(3);
					var color = 0xFF;
					for (var ii = 0; ii < 3; ++ii) {
						color = color << 8 | randFunc(128) + (ii === strong ? 128 : 64);
					}
					return color;
				};

				/**
     * finds a CSS rule.
     * @param {string} selector
     * @return {Rule?} matching css rule
     * @memberOf module:Misc
     */
				var findCSSStyleRule = function findCSSStyleRule(selector) {
					for (var ii = 0; ii < document.styleSheets.length; ++ii) {
						var styleSheet = document.styleSheets[ii];
						var rules = styleSheet.cssRules || styleSheet.rules;
						if (rules) {
							for (var rr = 0; rr < rules.length; ++rr) {
								var rule = rules[rr];
								if (rule.selectorText === selector) {
									return rule;
								}
							}
						}
					}
				};

				/**
     * Inserts a text node into an element
     * @param {HTMLElement} element element to have text node insert
     * @return {HTMLTextNode} the created text node
     * @memberOf module:Misc
     */
				var createTextNode = function createTextNode(element) {
					var txt = document.createTextNode("");
					element.appendChild(txt);
					return txt;
				};

				/**
     * Returns the absolute position of an element for certain browsers.
     * @param {HTMLElement} element The element to get a position
     *        for.
     * @returns {Object} An object containing x and y as the
     *        absolute position of the given element.
     * @memberOf module:Misc
     */
				var getAbsolutePosition = function getAbsolutePosition(element) {
					var r = { x: element.offsetLeft, y: element.offsetTop };
					if (element.offsetParent) {
						var tmp = getAbsolutePosition(element.offsetParent);
						r.x += tmp.x;
						r.y += tmp.y;
					}
					return r;
				};

				/**
     * Clamp value
     * @param {Number} v value to clamp
     * @param {Number} min min value to clamp to
     * @param {Number} max max value to clamp to
     * @returns {Number} v clamped to min and max.
     * @memberOf module:Misc
     */
				var clamp = function clamp(v, min, max) {
					return Math.max(min, Math.min(max, v));
				};

				/**
     * Clamp in both positive and negative directions.
     * Same as clamp(v, -max, +max)
     *
     * @param {Number} v value to clamp
     * @param {Number} max max value to clamp to
     * @returns {Number} v clamped to -max and max.
     * @memberOf module:Misc
     */
				var clampPlusMinus = function clampPlusMinus(v, max) {
					return clamp(v, -max, max);
				};

				/**
     * Return sign of value
     *
     * @param {Number} v value
     * @returns {Number} -1 if v < 0, 1 if v > 0, 0 if v == 0
     * @memberOf module:Misc
     */
				var sign = function sign(v) {
					return v < 0 ? -1 : v > 0 ? 1 : 0;
				};

				/**
     * Takes which ever is closer to zero
     * In other words minToZero(-2, -1) = -1 and minToZero(2, 1) = 1
     *
     * @param {Number} v value to min
     * @param {Number} min min value to use if v is less then -min
     *        or greater than +min
     * @returns {Number} min or v, which ever is closer to zero
     * @memberOf module:Misc
     */
				var minToZero = function minToZero(v, min) {
					return Math.abs(v) < Math.abs(min) ? v : min;
				};

				/**
     * flips 0->max to max<-0 and 0->min to min->0
     * In otherwords
     *     max: 3, v: 2.7  =  0.3
     *     max: 3, v:-2.7  = -0.3
     *     max: 3, v: 0.2  =  2.8
     *     max: 3, v:-0.2  = -2.8
     *
     * @param {Number} v value to flip.
     * @param {Number} max range to flip inside.
     * @returns {Number} flipped value.
     * @memberOf module:Misc
     */
				var invertPlusMinusRange = function invertPlusMinusRange(v, max) {
					return sign(v) * (max - Math.min(max, Math.abs(v)));
				};

				/**
     * Convert degrees to radians
     *
     * @param {Number} d value in degrees
     * @returns {Number} d in radians
     * @memberOf module:Misc
     */
				var degToRad = function degToRad(d) {
					return d * Math.PI / 180;
				};

				/**
     * Converts radians to degrees
     * @param {Number} r value in radians
     * @returns {Number} r in degrees
     * @memberOf module:Misc
     */
				var radToDeg = function radToDeg(r) {
					return r * 180 / Math.PI;
				};

				/**
     * Resizes a cavnas to match its CSS displayed size.
     * @param {Canvas} canvas canvas to resize.
     * @param {boolean?} useDevicePixelRatio if true canvas will be
     *        created to match devicePixelRatio.
     * @memberOf module:Misc
     */
				var resize = function resize(canvas, useDevicePixelRatio) {
					var mult = useDevicePixelRatio ? window.devicePixelRatio : 1;
					mult = mult || 1;
					var width = Math.floor(canvas.clientWidth * mult);
					var height = Math.floor(canvas.clientHeight * mult);
					if (canvas.width !== width || canvas.height !== height) {
						canvas.width = width;
						canvas.height = height;
						return true;
					}
				};

				/**
     * Copies all the src properties to the dst
     * @param {Object} src an object with some properties
     * @param {Object} dst an object to receive copes of the properties
     * @return returns the dst object.
     */
				function applyObject(src, dst) {
					Object.keys(src).forEach(function (key) {
						dst[key] = src[key];
					});
					return dst;
				}

				/**
     * Merges the proprties of all objects into a new object
     *
     * Example:
     *
     *     var a = { abc: "def" };
     *     var b = { xyz: "123" };
     *     var c = Misc.mergeObjects(a, b);
     *
     *     // c = { abc: "def", xyz: "123" };
     *
     * Later object properties take precedence
     *
     *     var a = { abc: "def" };
     *     var b = { abc: "123" };
     *     var c = Misc.mergeObjects(a, b);
     *
     *     // c = { abc: "123" };
     *
     * @param {...Object} object objects to merge.
     * @return an object containing the merged properties
     */
				function mergeObjects(object) {
					// eslint-disable-line
					var merged = {};
					Array.prototype.slice.call(arguments).forEach(function (src) {
						if (src) {
							applyObject(src, merged);
						}
					});
					return merged;
				}

				/**
     * Creates a random id
     * @param {number} [digits] number of digits. default 16
     */
				function makeRandomId(digits) {
					digits = digits || 16;
					var id = "";
					for (var ii = 0; ii < digits; ++ii) {
						id = id + (Math.random() * 16 | 0).toString(16);
					}
					return id;
				}

				/**
     * Applies an object of listeners to an emitter.
     *
     * Example:
     *
     *     applyListeners(someDivElement, {
     *       mousedown: someFunc1,
     *       mousemove: someFunc2,
     *       mouseup: someFunc3,
     *     });
     *
     * Which is the same as
     *
     *     someDivElement.addEventListener("mousedown", someFunc1);
     *     someDivElement.addEventListener("mousemove", someFunc2);
     *     someDivElement.addEventListener("mouseup", someFunc3);
     *
     * @param {Emitter} emitter some object that emits events and has a function `addEventListener`
     * @param {Object.<string, function>} listeners eventname function pairs.
     */
				function applyListeners(emitter, listeners) {
					Object.keys(listeners).forEach(function (name) {
						emitter.addEventListener(name, listeners[name]);
					});
				}

				return {
					applyObject: applyObject,
					applyUrlSettings: applyUrlSettings,
					applyListeners: applyListeners,
					clamp: clamp,
					clampPlusMinus: clampPlusMinus,
					copyProperties: copyProperties,
					createTextNode: createTextNode,
					degToRad: degToRad,
					findCSSStyleRule: findCSSStyleRule,
					getAbsolutePosition: getAbsolutePosition,
					getFunctionByPrefix: getFunctionByPrefix,
					gotoIFrame: gotoIFrame,
					invertPlusMinusRange: invertPlusMinusRange,
					makeRandomId: makeRandomId,
					mergeObjects: mergeObjects,
					minToZero: minToZero,
					objectToSearchString: objectToSearchString,
					parseUrlQuery: parseUrlQuery,
					parseUrlQueryString: parseUrlQueryString,
					pickRandomElement: pickRandomElement,
					radToDeg: radToDeg,
					randInt: randInt,
					randCSSColor: randCSSColor,
					rand32BitColor: rand32BitColor,
					resize: resize,
					sign: sign,
					searchStringToObject: searchStringToObject
				};
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

			/***/
		},
		/* 5 */
		/***/function (module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_RESULT__; /*
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

			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				//var SocketIOClient = function(options) {
				//  options = options || {};
				//  console.log("Using direct Socket.io");
				//  var _socket;
				//  var _connected = false;
				//
				//  if (!window.io) {
				//    console.log("no socket io");
				//    _socket = {
				//      send: function() { }
				//    };
				//    return;
				//  }
				//
				//  var url = options.url || "http://" + window.location.host;
				//  console.log("connecting to: " + url);
				//  _socket = io.connect(url);
				//
				//  this.isConnected = function() {
				//    return _socket.readyState === WebSocket.OPEN;
				//  };
				//
				//  this.on = function(eventName, fn) {
				//    _socket.on(eventName, fn);
				//  };
				//
				//  this.send = function(msg) {
				//    _socket.emit('message', msg);
				//  };
				//};

				var WebSocketClient = function WebSocketClient(options) {
					options = options || {};
					var log = options.quiet === true ? console.log.bind(console) : function () {};
					var _socket;

					var url = options.url || "ws://" + window.location.host;
					log("connecting to: " + url);
					_socket = new WebSocket(url);

					this.__defineGetter__("readyState", function () {
						return _socket.readyState;
					});

					this.isConnected = function () {
						return _socket.readyState === WebSocket.OPEN;
					};

					var sendLowLevel = function sendLowLevel(str) {
						if (_socket.readyState === WebSocket.OPEN) {
							_socket.send(str);
						}
					};

					this.on = function (eventName, fn) {
						switch (eventName) {
							case 'connect':
								_socket.onopen = fn;
								break;
							case 'disconnect':
								_socket.onclose = fn;
								break;
							case 'error':
								_socket.onerror = fn;
								break;
							case 'message':
								_socket.onmessage = function (event) {
									// Respond to ping.
									if (event.data === 'P') {
										sendLowLevel('P');
										return;
									}
									try {
										var obj = JSON.parse(event.data);
									} catch (e) {
										console.log(e);
									}
									if (obj) {
										fn(obj);
									}
								};
								break;
						}
					};

					this.send = function (msg) {
						sendLowLevel(JSON.stringify(msg));
					};

					this.close = function () {
						_socket.close();
					};
				};

				//return SocketIOClient;
				return WebSocketClient;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

			/***/
		},
		/* 6 */
		/***/function (module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*
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

			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(4), __webpack_require__(7), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Cookie, misc, NetPlayer, VirtualSocket) {

				var emptyMsg = {};

				/**
     * @typedef {Object} GameServer~Options
     * @property {Socket} [socket] Socket to use for communications
     * @property {boolean} [quiet] true = don't print any console messages
     * @property {boolean} [reconnectOnDisconnect]
     */

				/**
     * GameServer is used by a game to talk to the various
     * controllers (phones) of the people playing the game.
     * @constructor
     * @alias GameServer
     * @param {GameServer~Options} [options] options.
     */
				var GameServer = function GameServer(options) {
					options = options || {};
					var log = options.quiet ? function () {} : console.log.bind(console);
					var _connected = false;
					var _socket;

					if (!options.url) {
						var query = misc.parseUrlQuery();
						options.url = query.hftUrl;
					}

					// Used in case the game tries to send messages to the server before it's connected.
					// This way the game does not have to wait for a connection to send startup messages.
					// Not sure there's a point to that :(
					var _sendQueue = [];
					var _numPlayers = 0;
					var _players = {}; // by id
					var _totalPlayerCount = 0;
					var _eventListeners = {};
					var _systemMsgHandler;
					var _connectData = {
						id: undefined,
						needNewHFT: undefined
					};
					var _getters = {};
					Object.keys(_connectData).forEach(function (key) {
						_getters[key] = function () {
							throw "you can't read " + key + " before you've connected";
						};
						Object.defineProperty(this, key, {
							get: function get() {
								return _getters[key]();
							},
							set: function set() {},
							enumerable: true,
							configurable: true
						});
					}.bind(this));
					var _reloaded = false;

					if (!options.gameId) {
						options.gameId = "HFTHTML5";
					}

					this.setSystemMsgHandler_ = function (handler) {
						_systemMsgHandler = handler;
					};

					/**
      * Event that we've connected to happyFunTimes
      *
      * @event GameServer#connected
      */

					/**
      * Event that we've been disconnected from happyFunTimes
      *
      * @event GameServer#disconnected
      */

					/**
      * Event that a new player has joined the game.
      *
      * @event GameServer#playerconnected
      * @param {NetPlayer} netPlayer a NetPlayer used to communicate
      *        with the controller for the player.
      */

					/**
      * Adds an event listener for the given event type. Valid
      * commands include 'connect' (we connected to happyFunTimes),
      * 'disconnect' we were disconnected from the relaysefver,
      * 'playerconnect' a new player has joined the game.
      *
      * @param {string} eventType name of event
      * @param {GameServer~Listener} listener callback to call for
      *        event.
      */
					this.addEventListener = function (eventType, listener) {
						_eventListeners[eventType] = listener;
					};

					/**
      * Same as addEventListener
      */
					this.on = this.addEventListener;

					/**
      * @callback GameServer~Listener
      * @param {Object} data data from sender.
      */

					/**
      * Removes an eventListener
      * @param {string} eventType name of event
      */
					this.removeEventListener = function (eventType) {
						_eventListeners[eventType] = undefined;
					};

					var sendEvent_ = function (eventType, args) {
						var fn = _eventListeners[eventType];
						if (fn) {
							fn.apply(this, args);
						}
					}.bind(this);

					var removePlayer_ = function removePlayer_(id) {
						var player = _players[id];
						if (player) {
							player.sendEvent_('disconnect', []);
							delete _players[id];
							--_numPlayers;
						}
					};

					var handleStartPlayer_ = function (msg) {
						var id = msg.id;
						var name = msg.name;

						// Ignore if we already have a player with this id.
						if (_players[id]) {
							return;
						}

						// Make up a name if no name given.
						if (!name) {
							name = "Player" + ++_totalPlayerCount;
						}

						var player = new NetPlayer(this, id, msg.data, name);
						_players[id] = player;
						++_numPlayers;
						sendEvent_('playerconnect', [player, name, msg.data]);
					}.bind(this);

					var getPlayer_ = function getPlayer_(id) {
						var player = _players[id];
						return player;
					};

					var handleUpdatePlayer_ = function handleUpdatePlayer_(msg) {
						var player = getPlayer_(msg.id);
						if (!player) {
							return;
						}
						player.sendEvent_(msg.data.cmd, [msg.data.data]); // FIX: Seems like gameserver should not know how to deal with this.
					};

					var handleRemovePlayer_ = function handleRemovePlayer_(msg) {
						removePlayer_(msg.id);
					};

					var handleSystemMsg_ = function handleSystemMsg_(msg) {
						if (_systemMsgHandler) {
							_systemMsgHandler(msg.data);
						}
					};

					var handleLogMsg_ = function handleLogMsg_(data) {
						var fn = console[data.type] || console.log;
						fn.call(console, data.msg);
					};

					var handleGameMsg_ = function handleGameMsg_(msg) {
						sendEvent_(msg.data.cmd, [msg.data.data, msg.id]);
					};

					var handleGameStart_ = function handleGameStart_(msg) {
						Object.keys(_connectData).forEach(function (key) {
							_connectData[key] = msg.data[key];
							_getters[key] = function () {
								return _connectData[key];
							};
						});
						sendEvent_('connect', [msg.data]);
					};

					var messageHandlers = {
						gamestart: handleGameStart_,
						update: handleUpdatePlayer_,
						upgame: handleGameMsg_,
						remove: handleRemovePlayer_,
						start: handleStartPlayer_,
						system: handleSystemMsg_,
						log: handleLogMsg_
					};

					var processMessage_ = function processMessage_(msg) {
						var fn = messageHandlers[msg.cmd];
						if (fn) {
							fn(msg);
						} else {
							console.error("Unknown Message: " + msg.cmd);
						}
					};

					/**
      * True if we're connected to happyFunTimes
      * @returns {Boolean} true if were connected.
      */
					this.isConnected = function () {
						return _connected;
					};

					/**
      * True if we were auto-reloaded after a disconnect.
      * This happens if HFT stops running and then is re-started
      * @return {Boolean} true if this is a reload.
      */
					this.isReloaded = function () {
						return _reloaded;
					};

					var connect_ = function () {
						_socket = options.socket || new VirtualSocket(options);
						_sendQueue = [];
						_socket.on('connect', connected_.bind(this)); // eslint-disable-line
						_socket.on('message', processMessage_.bind(this));
						_socket.on('disconnect', disconnected_.bind(this)); // eslint-disable-line
					}.bind(this);

					var connected_ = function () {
						log("connected");
						_connected = true;
						this.sendCmd("server", -1, options);
						for (var ii = 0; ii < _sendQueue.length; ++ii) {
							_socket.send(_sendQueue[ii]);
						}
						_sendQueue = [];

						// This `preconnect` message is a kind of hack.
						// This used to be a `connect` message but
						// I needed to be able to pass an `id` back to the
						// connect message. On top of that, GameSupport
						// was using the `connect` message. In order to allow
						// games using `GameSupport` to use the `connect` message
						// I changed this to `_hft_preconnect`. Games can therefore
						// receive teh `connect` message. I changed `GameSupport`
						// to a watch for `_hft_preconnect`
						sendEvent_('_hft_preconnect');
					}.bind(this);

					var disconnected_ = function disconnected_() {
						log("disconnected");
						_connected = false;
						sendEvent_('disconnect');
						while (_numPlayers > 0) {
							for (var id in _players) {
								if (Object.hasOwnProperty.call(_players, id)) {
									removePlayer_(id);
								}
								break;
							}
						}

						if (options.reconnectOnDisconnect) {
							setTimeout(connect_, 2000);
						}
					};

					var send_ = function send_(msg) {
						if (!_socket.isConnected()) {
							_sendQueue.push(msg);
						} else {
							_socket.send(msg);
						}
					};

					/**
      * This sends a command to the 'happyFunTimes'. happyFunTimes uses 'cmd' to figure out what to do
      *  and 'id' to figure out which client this is for. 'data' will be delieved to that client.
      *
      * Only NetPlayer should call this.
      *
      * @private
      * @param {String} cmd name of command to send
      * @param {String} id id of client to relay command to
      * @param {Object=} data a jsonifiable object to send.
      */
					this.sendCmd = function (cmd, id, data) {
						if (data === undefined) {
							data = emptyMsg;
						}
						var msg = {
							cmd: cmd,
							id: id,
							data: data
						};
						send_(msg);
					};

					/**
      * Sends a command to all controllers connected to this server.
      * It's effectively the same as iterating over all NetPlayers
      * returned in playerconnect events and calling sendCmd on each
      * one. The difference is only one message is sent from the
      * server (here) to happyFunTimes. happyFunTimes then sends
      * the same message to each client.
      *
      * @param {String} cmd name of command to send
      * @param {Object} [data] a jsonifyable object.
      */
					this.broadcastCmd = function (cmd, data) {
						if (data === undefined) {
							data = emptyMsg;
						}
						this.sendCmd('broadcast', -1, { cmd: cmd, data: data });
					};

					this.sendCmdToGame = function (cmd, id, data) {
						if (data === undefined) {
							data = emptyMsg;
						}
						this.sendCmd('peer', id, { cmd: cmd, data: data });
					};

					/**
      * Sends a command to all games, including yourself.
      */
					this.broadcastCmdToGames = function (cmd, data) {
						if (data === undefined) {
							data = emptyMsg;
						}
						this.sendCmd('bcastToGames', -1, { cmd: cmd, data: data });
					};

					connect_();
				};

				return GameServer;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

			/***/
		},
		/* 7 */
		/***/function (module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_RESULT__; /*
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

			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				/**
     * Manages a player across the net.
     *
     * **NOTE: YOU DO NOT CREATE THESE DIRECTLY**. They are created
     * by the `GameServer` whenever a new player joins your game.
     * They are passed to you in the 'playerconnect' event from
     * `GameServer`
     *
     * @constructor
     * @private
     * @alias NetPlayer
     * @param {GameServer} server
     * @param {number} id
     * @param {string} name
     */
				var NetPlayer = function NetPlayer(server, id, data) {
					var _server = server;
					var _id = id;
					var _eventListeners = {};
					var _internalListeners = {};
					var _connected = true;
					var _sessionId = data ? data.__hft_session_id__ : undefined;
					var _self = this;
					var _emptyMsg = {};
					var _busy = false;

					function sendCmd(cmd, msg) {
						if (!_connected) {
							return;
						}
						if (msg === undefined) {
							msg = _emptyMsg;
						}
						_server.sendCmd("client", _id, { cmd: cmd, data: msg });
					}

					/**
      * Sends a message to this player.
      *
      * @method
      * @param {string} cmd
      * @param {object} [msg] a jsonifyable object.
      */
					this.sendCmd = sendCmd;

					/**
      * Adds an event listener
      *
      * You make up these events. Calling
      *
      *     GameClient.sendCmd('someEvent', { foo: 123 });
      *
      * In the controller (the phone) will emit an event `someEvent`
      * which will end up calling the listener. That listener will be
      * passed the data. In the example above that data is
      * `{foo:123}`
      *
      *     function handleSomeEvent(data) {
      *       console.log("foo = " + data.foo);
      *     }
      *
      *     someNetPlayer.addEventListener('someEvent', handleSomeEvent);
      *
      *
      * @param {string} eventType name of event.
      * @param {function(object)} listener function to call when event
      *        arrives
      */
					this.addEventListener = function (eventType, listener) {
						switch (eventType) {
							case 'disconnect':
								listener = function (listener) {
									return function () {
										_self.removeAllListeners();
										_connected = false;
										return listener.apply(_self, arguments);
									};
								}(listener);
								break;
						}
						_eventListeners[eventType] = listener;
					};

					/**
      * Synonym for {@link Netplayer#addEventListener}.
      * @method
      * @param {string} eventType name of event.
      * @param {function(object)} listener function to call when event
      *        arrives
      */
					this.on = this.addEventListener;

					/**
      * Removes an event listener
      * @param {string} eventType name of event to remove
      */
					this.removeEventListener = function (eventType) {
						_eventListeners[eventType] = undefined;
					};

					/**
      * Removes all listeners
      */
					this.removeAllListeners = function () {
						_eventListeners = {};
					};

					var _sendEvent = function _sendEvent(eventType, args) {
						var fn = _eventListeners[eventType] || _internalListeners[eventType];
						if (fn) {
							fn.apply(this, args);
						} else {
							console.error("NetPlayer: Unknown Event: " + eventType);
						}
					};
					this.sendEvent_ = _sendEvent;

					var _sendEventIfHandler = function _sendEventIfHandler(eventType, args) {
						if (_eventListeners[eventType]) {
							_sendEvent(eventType, args);
						}
					};

					/**
      * Moves this player to another game.
      *
      * You can use this function to make multi-computer / multi-screen
      * games. See [hft-tonde-iko](http://github.com/greggman/hft-tonde-iko)
      * as an example.
      *
      * @param {string} gameId id of game to send player to
      * @param {*} data data to give to game receiving the player.
      */
					this.switchGame = function (gameId, data) {
						if (_connected) {
							_server.sendCmd("switchGame", _id, { gameId: gameId, data: data });
							_connected = false;
						}
					};

					function ignoreMsg() {}

					function handleLogMsg(data) {
						var fn = console[data.type] || console.log;
						fn.call(console, data.msg);
					}

					_internalListeners["_hft_log_"] = handleLogMsg;

					/**
      * Whether or not this netplayer is connected.
      * you shouldn't need to look at this. Use 'disconnect' event.
      * @return {boolean} true if player is connected.
      */
					this.isConnected = function () {
						return _connected;
					};

					/**
      * A sessionId for this player
      *
      * This id should be the same if they disconnect and later reconnect
      * so you can use it to restore their state if you want.
      * @return {string} session id for player
      */
					this.getSessionId = function () {
						return _sessionId;
					};

					/**
      * A unique id for this NetPlayer object.
      *
      * this id will not repeat even if the user disconnects and reconnects.
      * @return {string} id for player
      */
					this.getId = function () {
						return _id;
					};
				};

				/**
     * Event that the player has left.
     * @event NetPlayer#disconnected
     */

				return NetPlayer;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

			/***/
		},
		/* 8 */
		/***/function (module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_RESULT__; /*
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

			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				/**
     * Shell class for offline use.
     *
     * You can use this class as a substitute for NetPlayer when
     * offline. It provides a no-op version of sendCmd so when
     * your game tries to send a message to the contoller nothing
     * happens.
     *
     * It also provides a sendEvent method you can use to trigger
     * events in your game as though they were from the controller.
     *
     *     if (!globals.haveServer) {
     *       // We're testing locally so just manually create a
     *       // player.
     *
     *       var localNetPlayer1 = new LocalNetPlayer();
     *       var player1 = new MyPlayer(localNetPlayer1);
     *       addPlayer(player1);
     *
     *       // pretend player1 one got a message from the
     *       // controller when any key is pressed
     *
     *       window.addEventListner('keypress', function() {
     *         localNetPlayer1.sendEvent('jump', { power: 10 });
     *       });
     *
     *     } else {
     *
     *       // We're online so create players as they connect.
     *       var server = new GameServer(...);
     *       server.addEventListener(
     *           'playerconnect',
     *           function(netPlayer) {
     *             addPlayer(new MyPlayer(netPlayer));
     *           });
     *
     * @constructor
     * @alias LocalNetPlayer
     */
				var LocalNetPlayer = function () {
					var _count = 0;
					return function () {
						this.id = ++_count;
						this.eventHandlers = {};
						this.gameEventHandlers = {};
					};
				}();

				/**
     * see {@link NetPlayer.addEventListener}
     */
				LocalNetPlayer.prototype.addEventListener = function (eventType, handler) {
					this.eventHandlers[eventType] = handler;
				};

				/**
     * see {@link NetPlayer.addEventListener}
     */
				LocalNetPlayer.prototype.on = LocalNetPlayer.prototype.addEventListener;

				/**
     * see {@link NetPlayer.removeEventListener}
     */
				LocalNetPlayer.prototype.removeEventListener = function (eventType) {
					this.eventHandlers[eventType] = undefined;
				};

				/**
     * see {@link NetPlayer.removeAllListeners}
     */
				LocalNetPlayer.prototype.removeAllListeners = function () {
					this.eventHanders = {};
				};

				/*
     */
				LocalNetPlayer.prototype.addGameEventListener = function (eventType, handler) {
					this.gameEventHandlers[eventType] = handler;
				};

				/*
     */
				LocalNetPlayer.prototype.removeGameEventListener = function (eventType) {
					this.gameEventHandlers[eventType] = undefined;
				};

				/*
     */
				LocalNetPlayer.prototype.removeGameAllListeners = function () {
					this.gameEventHanders = {};
				};

				LocalNetPlayer.prototype.sendCmd = function (cmd, data) {
					var fn = this.gameEventHandlers[cmd];
					if (fn) {
						fn.call(this, data);
					}
				};

				/**
     * Sends an event to this netplayer.
     *
     * Use this to emit synthetic events into the game. Effectively
     * whatever messages you're sending from your controller you can
     * send here based on events on the computer. In other words to
     * simulate having a phone connected you can emit events based
     * on mouse movement or keypressed that correspond to the same
     * events that would have been emitted if a phone was actually
     * connected and programmed to send similar events.
     */
				LocalNetPlayer.prototype.sendEvent = function (eventType, data) {
					var fn = this.eventHandlers[eventType];
					if (fn) {
						fn.call(this, data);
					} else {
						console.error("LocalNetPlayer: Unknown Event: " + eventType);
					}
				};

				LocalNetPlayer.prototype.switchGame = function () /*id, data*/{};

				return LocalNetPlayer;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

			/***/
		},
		/* 9 */
		/***/function (module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*
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

			/**
    * Synced clock support
    * @module SyncedClock
    */
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (io, misc) {

				/**
     * A clock, optionally synced across the network
     * @constructor
     * @alias Clock
     * @memberof module:SyncedClock
     * @private
     */

				/**
     * @method getTime
     * @memberOf module:SyncedClock.Clock
     * @returns {number} current time in seconds.
     */

				/**
     * Creates a clock, optionally synced across machines.
     *
     * @param {boolean} online true = synced, false = local
     * @param {number?} opt_syncRateSeconds how often to sync clocks
     *        in seconds. Default is once every 10 seconds
     * @param {callback?} opt_callback called the first time the
     *        clock is synchronized.
     * @returns {Clock} the created clock
     * @memberOf module:SyncedClock
     */
				var createClock = function createClock(online, opt_syncRateSeconds, opt_callback) {

					if (!window.performance) {
						window.performance = {};
					}
					if (!window.performance.now) {
						window.performance.now = function () {
							return Date.now();
						};
					}

					var lrClock = function lrClock() {
						return new Date().getTime() * 0.001;
					};

					var hrClock = function () {
						var startTime = lrClock();
						var startHrTime = window.performance.now();

						return function () {
							var currentHrTime = window.performance.now();
							var elapsedHrTime = currentHrTime - startHrTime;
							return startTime + elapsedHrTime * 0.001;
						};
					}();

					var getLocalTime = window.performance && window.performance.now ? hrClock : lrClock;

					/**
      * A clock that gets the local current time in seconds.
      * @private
      */
					var LocalClock = function LocalClock(opt_callback) {
						if (opt_callback) {
							setTimeout(opt_callback, 1);
						}
					};

					/**
      * Gets the current time in seconds.
      */
					LocalClock.prototype.getTime = function () {
						return getLocalTime();
					};

					/**
      * A clock that gets the current time in seconds attempting to
      * keep the clock synced to the server.
      * @constructor
      */
					var SyncedClock = function SyncedClock(opt_syncRateSeconds, callback) {
						var query = misc.parseUrlQuery();
						var url = (query.hftUrl || window.location.href).replace("ws:", "http:");

						var syncRateMS = (opt_syncRateSeconds || 10) * 1000;
						var timeOffset = 0;

						var syncToServer = function syncToServer(queueNext) {
							var sendTime = getLocalTime();
							io.sendJSON(url, { cmd: 'time' }, function (exception, obj) {
								if (exception) {
									console.error("syncToServer: " + exception);
								} else {
									var receiveTime = getLocalTime();
									var duration = receiveTime - sendTime;
									var serverTime = obj.time + duration * 0.5;
									timeOffset = serverTime - receiveTime;
									if (callback) {
										callback();
										callback = undefined;
									}
									//g_services.logger.log("duration: ", duration, " timeOff:", timeOffset);
								}

								if (queueNext) {
									setTimeout(function () {
										syncToServer(true);
									}, syncRateMS);
								}
							});
						};
						var syncToServerNoQueue = function syncToServerNoQueue() {
							syncToServer(false);
						};
						syncToServer(true);
						setTimeout(syncToServerNoQueue, 1000);
						setTimeout(syncToServerNoQueue, 2000);
						setTimeout(syncToServerNoQueue, 4000);

						/**
       * Gets the current time in seconds.
       * @private
       */
						this.getTime = function () {
							return getLocalTime() + timeOffset;
						};
					};

					return online ? new SyncedClock(opt_syncRateSeconds, opt_callback) : new LocalClock(opt_callback);
				};

				return {
					createClock: createClock
				};
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

			/***/
		}
		/******/])
	);
});
;

cc._RF.pop();
},{}]},{},["Config","Fruit","FruitsMgr","Game","Map","RankCtrl","SettlePanel","Utils","Wrom","data","Attack","Bomb","Fatty","hft"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9