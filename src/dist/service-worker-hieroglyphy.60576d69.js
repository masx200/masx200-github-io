// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"JSfuck-and-hieroglyphy-Decoder-and-ENCODER/hieroglyphy.js":[function(require,module,exports) {
var global = arguments[3];
(function (global, undefined) {
  //   console.log(global);

  /*jshint sub:true, evil:true */
  "use strict";

  var numbers, _object_Object, _NaN, _true, _false, _undefined, _Infinity, _1e100, _String, characters, functionConstructor, escape, unescape, API;

  API = {
    hieroglyphyString: hieroglyphyString,
    hieroglyphyNumber: hieroglyphyNumber,
    hieroglyphyScript: hieroglyphyScript
  }; //   window.hieroglyphy = API;

  global.hieroglyphy = API; //   console.log(
  //     global.hieroglyphy
  //   )

  if (global.define && global.define.amd) {
    global.define([], API);
  } else if (typeof exports !== "undefined") {
    module.exports = API;
  } else {
    global.hieroglyphy = API;
  }

  numbers = ["+[]", "+!![]", "!+[]+!![]", "!+[]+!![]+!![]", "!+[]+!![]+!![]+!![]", "!+[]+!![]+!![]+!![]+!![]", "!+[]+!![]+!![]+!![]+!![]+!![]", "!+[]+!![]+!![]+!![]+!![]+!![]+!![]", "!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]", "!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]"];
  characters = {
    "0": "(" + numbers[0] + "+[])",
    "1": "(" + numbers[1] + "+[])",
    "2": "(" + numbers[2] + "+[])",
    "3": "(" + numbers[3] + "+[])",
    "4": "(" + numbers[4] + "+[])",
    "5": "(" + numbers[5] + "+[])",
    "6": "(" + numbers[6] + "+[])",
    "7": "(" + numbers[7] + "+[])",
    "8": "(" + numbers[8] + "+[])",
    "9": "(" + numbers[9] + "+[])"
  };
  _object_Object = "[]+{}";
  _NaN = "+{}+[]";
  _true = "!![]+[]";
  _false = "![]+[]";
  _undefined = "[][[]]+[]";
  characters[" "] = "(" + _object_Object + ")[" + numbers[7] + "]";
  characters["["] = "(" + _object_Object + ")[" + numbers[0] + "]";
  characters["]"] = "(" + _object_Object + ")[" + characters[1] + "+" + characters[4] + "]";
  characters["a"] = "(" + _NaN + ")[" + numbers[1] + "]";
  characters["b"] = "(" + _object_Object + ")[" + numbers[2] + "]";
  characters["c"] = "(" + _object_Object + ")[" + numbers[5] + "]";
  characters["d"] = "(" + _undefined + ")[" + numbers[2] + "]";
  characters["e"] = "(" + _undefined + ")[" + numbers[3] + "]";
  characters["f"] = "(" + _false + ")[" + numbers[0] + "]";
  characters["i"] = "(" + _undefined + ")[" + numbers[5] + "]";
  characters["j"] = "(" + _object_Object + ")[" + numbers[3] + "]";
  characters["l"] = "(" + _false + ")[" + numbers[2] + "]";
  characters["n"] = "(" + _undefined + ")[" + numbers[1] + "]";
  characters["o"] = "(" + _object_Object + ")[" + numbers[1] + "]";
  characters["r"] = "(" + _true + ")[" + numbers[1] + "]";
  characters["s"] = "(" + _false + ")[" + numbers[3] + "]";
  characters["t"] = "(" + _true + ")[" + numbers[0] + "]";
  characters["u"] = "(" + _undefined + ")[" + numbers[0] + "]";
  characters["N"] = "(" + _NaN + ")[" + numbers[0] + "]";
  characters["O"] = "(" + _object_Object + ")[" + numbers[8] + "]";
  _String = "[]+" + "(" + _object_Object + ")" + "[" + hieroglyphyString("constructor") + "]"; // "‌function String() { [native code] }"

  characters["S"] = "(" + _String + ")" + "[" + numbers[9] + "]";
  characters["g"] = "(" + _String + ")" + "[" + "(" + numbers[7] + ")" + "+" + "(" + numbers[7] + ")" + "]";
  _Infinity = "+(" + numbers[1] + "+" + characters["e"] + "+" + characters[1] + "+" + characters[0] + "+" + characters[0] + "+" + characters[0] + ")+[]";
  characters["y"] = "(" + _Infinity + ")[" + numbers[7] + "]";
  characters["I"] = "(" + _Infinity + ")[" + numbers[0] + "]";
  _1e100 = "+(" + numbers[1] + "+" + characters["e"] + "+" + characters[1] + "+" + characters[0] + "+" + characters[0] + ")+[]";
  characters["+"] = "(" + _1e100 + ")[" + numbers[2] + "]";
  functionConstructor = "[][" + hieroglyphyString("sort") + "][" + hieroglyphyString("constructor") + "]"; //Below characters need _String

  characters["h"] = "(" + "(" + numbers[9] + ")" + "+" + "(" + numbers[8] + ")" + ")" + "[" + hieroglyphyString("toString") + "]" + "(" + "(" + numbers[9] + ")" + "+" + "(" + numbers[9] + ")" + ")";
  characters["p"] = "(" + "(" + numbers[9] + ")" + "+" + "(" + numbers[9] + ")" + "+" + "(" + numbers[7] + ")" + ")" + "[" + hieroglyphyString("toString") + "]" + "(" + "(" + numbers[9] + ")" + "+" + "(" + numbers[9] + ")" + "+" + "(" + numbers[8] + ")" + ")";
  unescape = hieroglyphyScript("return unescape");
  escape = hieroglyphyScript("return escape");
  characters["%"] = escape + "(" + hieroglyphyString("[") + ")[" + numbers[0] + "]"; //'{': '(NaN+[]["filter"])[21]',
  // '}': '(NaN+[]["filter"])[37]',

  characters["{"] = "(" + _NaN + "+[][" + hieroglyphyString("filter") + "])[" + characters[2] + "+" + characters[1] + "]";
  characters["}"] = "(" + _NaN + "+[][" + hieroglyphyString("filter") + "])[" + characters[3] + "+" + characters[7] + "]";

  function getHexaString(number, digits) {
    var string = number.toString(16);

    while (string.length < digits) {
      string = "0" + string;
    }

    return string;
  }

  function getUnescapeSequence(charCode) {
    return unescape + "(" + hieroglyphyString("%" + getHexaString(charCode, 2)) + ")";
  }

  function getHexaSequence(charCode) {
    return hieroglyphyString("\\x" + getHexaString(charCode, 2));
  }

  function getUnicodeSequence(charCode) {
    return hieroglyphyString("\\u" + getHexaString(charCode, 4));
  }

  function hieroglyphyCharacter(char) {
    var charCode = char.charCodeAt(0),
        unescapeSequence,
        hexaSequence,
        unicodeSequence,
        shortestSequence;

    if (characters[char] !== undefined) {
      return characters[char];
    }

    if (char === "\\" || char == "x") {
      //These chars must be handled appart becuase the others need them
      characters[char] = getUnescapeSequence(charCode); // console.log(characters[char])

      return characters[char];
    }

    shortestSequence = getUnicodeSequence(charCode); //ASCII characters can be obtained with hexa and unscape sequences

    if (charCode < 128) {
      unescapeSequence = getUnescapeSequence(charCode);

      if (shortestSequence.length > unescapeSequence.length) {
        shortestSequence = unescapeSequence;
      }

      hexaSequence = getHexaSequence(charCode);

      if (shortestSequence.length > hexaSequence.length) {
        shortestSequence = hexaSequence;
      }
    } // console.log(char, getUnicodeSequence(charCode).length, getUnescapeSequence(charCode).length, getHexaSequence(charCode).length)


    characters[char] = shortestSequence; // if(!(charCode < 128)){
    //     // console.log(char)
    //     console.log(shortestSequence)
    // }

    return shortestSequence;
  }

  function hieroglyphyString(str) {
    var i,
        hieroglyphiedStr = "";

    for (i = 0; i < str.length; i += 1) {
      hieroglyphiedStr += i > 0 ? "+" : "";
      hieroglyphiedStr += hieroglyphyCharacter(str[i]);
    }

    return hieroglyphiedStr;
  }

  function hieroglyphyNumber(n) {
    n = +n;

    if (n <= 9) {
      return numbers[n];
    }

    return "+(" + hieroglyphyString(n.toString(10)) + ")";
  }

  function hieroglyphyScript(src) {
    return functionConstructor + "(" + hieroglyphyString(src) + ")()";
  }

  return global.hieroglyphy;
})((typeof window !== "undefined" ? window : false) || (typeof WorkerGlobalScope !== "undefined" ? WorkerGlobalScope : false) || this);
},{}],"JSfuck-and-hieroglyphy-Decoder-and-ENCODER/service-worker-hieroglyphy.js":[function(require,module,exports) {
"use strict";

var _hieroglyphy = _interopRequireDefault(require("./hieroglyphy.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// console.log(hieroglyphy,WorkerGlobalScope.hieroglyphy)
// var hieroglyphy=import("./hieroglyphy.js")

/* console.log( (WorkerGlobalScope !== undefined ? WorkerGlobalScope : false))
//(() => {
    console.log(( undefined!==window ? window : false)); */
//   var hieroglyphy = import("hieroglyphy.js");
// console.log(this,)
addEventListener("message", function (e) {
  var _console;

  // var hieroglyphy = WorkerGlobalScope.hieroglyphy;
  //   console.log( (typeof window !== 'undefined' ? window : false) ||
  //   (typeof WorkerGlobalScope !== 'undefined' ? WorkerGlobalScope : false))
  var d = e.data;
  console.log("副线程" + "从主线程接收" + "event.data\n");

  (_console = console).log.apply(_console, _toConsumableArray(d)); //   importScripts(d[2]);
  //   var hieroglyphy = WorkerGlobalScope.hieroglyphy;
  // var hieroglyphy= import(d[2]);
  // mui(document.getElementById("encode")).button("loading");


  if ("encodescript" === d[1]) {
    var output = _hieroglyphy.default.hieroglyphyScript(d[0]);
  } else if ("encodestring" === d[1]) {
    var output = _hieroglyphy.default.hieroglyphyString(d[0]);
  } //   var output = JSFuck.encode(d[0], d[1]);
  // $2("output").value = output;
  // $2("stats").innerHTML = output.length + " chars";
  // mui(document.getElementById("encode")).button("reset");


  postMessage(output);
}); //})();
},{"./hieroglyphy.js":"JSfuck-and-hieroglyphy-Decoder-and-ENCODER/hieroglyphy.js"}],"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "14174" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js","JSfuck-and-hieroglyphy-Decoder-and-ENCODER/service-worker-hieroglyphy.js"], null)
//# sourceMappingURL=/service-worker-hieroglyphy.60576d69.js.map