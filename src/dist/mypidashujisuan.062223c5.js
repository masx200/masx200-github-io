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
})({"圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mypidashujisuan.js":[function(require,module,exports) {
onload = mytestpi;

function mytestpi() {
  getConstpinewhighefficiency105();
}

;

function getConstpinewhighefficiency105() {
  document.getElementById("thread").value = 8;
  document.getElementById("pichangwei").value = 3;
  jisuanfinishflag = 1;
  threadgeshu = 8;
  x = 0;
  piwei = 3000;
  myptext = document.getElementById("tp");
  myshurukuangneirong = " ";
  myshurukuangneirong = myshurukuangneirong + "UserAgent: " + navigator.userAgent + "\n";
  myshurukuangneirong = myshurukuangneirong + "开始圆周率多线程测试\n";
  myptext.value = myshurukuangneirong;
  document.getElementById("start").onclick = mystart;
  setTimeout(function () {
    myptext.style.height = myptext.scrollHeight + 'px';
  }, 0);
}

function mystart() {
  jisuanfinishflag = 0;

  if (document.getElementById("thread").value >= 1 && document.getElementById("thread").value <= 12 && document.getElementById("pichangwei").value >= 1 && document.getElementById("pichangwei").value <= 100) {
    piwei = 1000 * Math.floor(document.getElementById("pichangwei").value);
    document.getElementById("pichangwei").value = Math.floor(document.getElementById("pichangwei").value);
    threadgeshu = Math.floor(document.getElementById("thread").value);
    document.getElementById("thread").value = threadgeshu;
    document.title = '圆周率计算多线程' + "-" + "线程数为" + threadgeshu;
    myshurukuangneirong = myshurukuangneirong + "线程数为" + threadgeshu + "\n";
    myptext.value = myshurukuangneirong;
    eventdata = "圆周率计算" + piwei + "位" + "  \n" + "计算圆周率中......" + "  \n";
    myshurukuangneirong += String(eventdata);
    myptext.value = myshurukuangneirong;
    Decimal.precision = piwei;
    strt = new Date().getTime();
    p = new Decimal(0);
    myworker = [];
    myworker.length = threadgeshu;
    finishflag = [];
    finishflag.length = threadgeshu;
    var worker1;

    if (typeof worker1 == "undefined") {
      worker1 = new Worker("/mythread1.f64e00ad.js");
    }

    for (var i = 0, len = threadgeshu; i < len; i++) {
      myworker[i] = worker1;
    }

    myworker.forEach(function (currentValue, index, arr) {
      arr[index] = undefined;
      arr[index] = new Worker("/mythread1.f64e00ad.js");
      arr[index].postMessage([piwei, threadgeshu, index]);

      arr[index].onmessage = function (event) {
        console.log("主线程从副线程" + (index + 1) + "接收" + "event.data\n" + event.data);
        var p1 = new Decimal(event.data[0]);
        p = Decimal.add(p, p1);
        x = Math.max(x, parseInt(event.data[1]));
        finishflag[index] = 1;
        threadfinish();
      };
    });
  } else {
    alert("输入错误");
    document.getElementById("pichangwei").value = null;
    document.getElementById("thread").value = null;
  }
}

function threadfinish() {
  if (threadgeshu == finishflag.filter(function (currentValue) {
    return currentValue == 1;
  }).length) {
    endt = new Date().getTime();
    durt = (endt - strt) / 1000;
    eventdata = "计算完成,用时" + durt + "秒第" + x + "次  \n" + "圆周率" + piwei + "位" + "  \n" + p + "  \n";
    myptext = document.getElementById("tp");
    myshurukuangneirong += String(eventdata);
    myptext.value = myshurukuangneirong;
    jisuanfinishflag = 1;
    myworker.forEach(function (currentValue, index, arr) {
      arr[index].terminate();
    });
    x = 0; //alert("ok")

    setTimeout(function () {
      myptext.style.height = myptext.scrollHeight + 'px';
    }, 0);
  }
}
},{"./mythread1.js":[["mythread1.f64e00ad.js","圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mythread1.js"],"mythread1.f64e00ad.js.map","圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mythread1.js"]}],"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "3192" + '/');

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
},{}]},{},["node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js","圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mypidashujisuan.js"], null)
//# sourceMappingURL=/mypidashujisuan.062223c5.js.map