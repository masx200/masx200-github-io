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
})({"圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mythread1-bigint.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// (() => {
//使用bigint测试
importScripts("https://cdn.staticfile.org/big-integer/1.6.43/BigInteger.min.js"); // ()=>{
// console.log("加载完成")}
//   console.log(bigInt)
// importScripts("./decimal.min.js");
// nabs.cmp=(m)=> nabs.compareAbs(m);

/**
   * 
   * https://github.com/peterolson/BigInteger.js
   * 
   * BigInteger.js Build Status Coverage Status Monthly Downloads
BigInteger.js is an arbitrary-length integer library for Javascript, allowing arithmetic operations on integers of unlimited size, notwithstanding memory and time limitations.

Update (December 2, 2018): BigInt is being added as a native feature of JavaScript. This library now works as a polyfill: if the environment supports the native BigInt, this library acts as a thin wrapper over the native implementation.

BigInteger.js构建状态覆盖状态每月下载
BigInteger.js是Javascript的任意长度整数库，允许对无限大小的整数进行算术运算，尽管存在内存和时间限制。

更新（2018年12月2日）：BigInt被添加为JavaScript的本机功能。 此库现在可用作polyfill：如果环境支持本机BigInt，则此库充当本机实现的瘦包装器。
*/
// setTimeout(mycalc,0)
// function mycalc(){

addEventListener("message", function (event) {
  var _console;

  bigInt.abs = function (n) {
    return bigInt(n).abs();
  };

  bigInt.mul = function (n, m) {
    return bigInt(n).multiply(m);
  };

  bigInt.div = function (n, m) {
    return bigInt(n).divide(m);
  };

  bigInt.add = function (n, m) {
    return bigInt(n).add(m);
  }; //MAX_INT
  //9007199254740992


  bigInt().__proto__.cmp = bigInt().__proto__.compare;
  bigInt().__proto__.div = bigInt().__proto__.divide;
  bigInt().__proto__.mul = bigInt().__proto__.multiply;
  bigInt("90071992547409920").__proto__.cmp = bigInt("90071992547409920").__proto__.compare;
  bigInt("90071992547409920").__proto__.div = bigInt("90071992547409920").__proto__.divide;
  bigInt("90071992547409920").__proto__.mul = bigInt("90071992547409920").__proto__.multiply; // bigInt.cmp=bigInt.prototype.cmp=(n)=>;

  var piwei;
  piwei = event.data[0]; // piwei /= 2;

  var threadall = event.data[1];
  var threadid = event.data[2]; // console.log(
  //   "副线程" + (threadid + 1) + "从主线程接收" + "event.data\n",
  //   ...event.data
  // );

  console.log("副线程" + (threadid + 1) + "从主线程接收" + "event.data\n");

  (_console = console).log.apply(_console, _toConsumableArray(event.data)); // Decimal.precision = piwei + 1;


  var p = new bigInt(0);
  var a = new bigInt(1); // var h = 1;

  var h = new bigInt("1e" + piwei); // console.log("h",h.toString())

  var x = new bigInt(0);
  var fu = 1;
  var t = new bigInt(1);

  for (var i = 0, len = threadid; i < len; i++) {
    fu = -1 * fu;
    a = bigInt.mul(a, 1024);
    x = x.plus(1);
  }

  while (bigInt.abs(t).cmp(new bigInt(0)) >= 0) {
    // console.log("t",t.toString())
    // console.log("a",a.toString())
    // console.log("x",x.toString())
    // console.log("p",p.toString())

    /**除法小于零的结果直接变成0,所以分母要特别大才能精确除法 */
    t = bigInt.mul(1, fu).mul(bigInt.div(h.mul(-Math.pow(2, 5)), bigInt.mul(4, x).plus(1)).plus(bigInt.div(h.mul(-1), bigInt.mul(4, x).plus(3))).plus(bigInt.div(h.mul(Math.pow(2, 8)), bigInt.mul(10, x).plus(1))).plus(bigInt.div(h.mul(-Math.pow(2, 6)), bigInt.mul(10, x).plus(3))).plus(bigInt.div(h.mul(-Math.pow(2, 2)), bigInt.mul(10, x).plus(5))).plus(bigInt.div(h.mul(-Math.pow(2, 2)), bigInt.mul(10, x).plus(7))).plus(bigInt.div(h.mul(1), bigInt.mul(10, x).plus(9)))).div(bigInt.mul(Math.pow(2, 6), a));
    p = bigInt.add(p, t);
    if (bigInt.abs(t).cmp(new bigInt(0)) <= 0) break;

    for (var i = 0, len = threadall; i < len; i++) {
      fu = -1 * fu;
      a = bigInt.mul(a, 1024);
      x = x.plus(1);
    }
  } // console.log("t", t.toString())
  // console.log("p", p.toString())


  postMessage([p.toString(), "" + x.plus(1)]);
}); // }
// })();
},{}],"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "17765" + '/');

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
},{}]},{},["node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js","圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mythread1-bigint.js"], null)
//# sourceMappingURL=/mythread1-bigint.de0110ac.js.map