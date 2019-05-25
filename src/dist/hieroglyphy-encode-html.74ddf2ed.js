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
})({"拉伸导航栏与主体部分的顶部距离.js":[function(require,module,exports) {
(function () {
  $(window).one("load", function () {
    $('#my主体').css('padding-top', $('#my导航栏').height());
  }); // $('#主体').css('padding-top', $('#my导航栏').height())
})();
},{}],"JSfuck-and-hieroglyphy-Decoder-and-ENCODER/hieroglyphy-encode-html.js":[function(require,module,exports) {
"use strict";

require("../\u62C9\u4F38\u5BFC\u822A\u680F\u4E0E\u4E3B\u4F53\u90E8\u5206\u7684\u9876\u90E8\u8DDD\u79BB");

// onload =
(function () {
  $(window).one("load", function () {
    function guid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }

    function tanchu弹出消息提示() {
      // var id=Math.random()*100000000|0
      var id = guid();
      jQuery("#my导航栏").append(jQuery("<div id=\"".concat(id, "\" class=\"alert alert-success alert-dismissible fade show\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            <strong>\u6210\u529F!</strong> \u7F16\u7801\u6210\u529F\u63D0\u793A\u4FE1\u606F\u3002\n            </div>")).fadeTo(10000, 0.5, function () {
        console.log(jQuery("#" + id));
        jQuery("#" + id).remove();
      })); // console.timeEnd('解码JSFUCK 和hieroglyphy')
    }

    var myservice = undefined;
    var lastclick; // $("run").onclick =

    $("#run").click(function () {
      var value = eval($2("output").value);

      if (lastclick === "encodestring") {
        alert('"' + value + '"');
      } else {} // return false;

    }); // $("#encodescript").click(encodescript);
    // $("#encodestring").click(encodestring);

    $("#encodescript").click(function () {
      encodeall('encodescript');
    });
    $("#encodestring").click(function () {
      encodeall('encodestring');
    }); // $("#encodestring").click(encodestring);
    // $("encodescript").onclick = encodescript;
    // $("encodestring").onclick = encodestring;
    // window.onload = () => { encodescript() };

    $2("input").value = "console.log('{你好吗zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')";

    function $2(id) {
      return document.getElementById(id);
    }
    /*   function encodescript() {
        console.time("encodescript");
        console.log("encodescript");
        mui(document.getElementById("encodescript")).button("loading");
        lastclick = "encodescript";
        if (!myservice) {
          myservice = new Worker("service-worker-hieroglyphy.js");
          console.log("创建新线程", "service-worker-hieroglyphy.js");
        }
          // var output = hieroglyphy.hieroglyphyScript(($2("input").value))
        myservice.postMessage([
          $2("input").value,
          lastclick,
            $("#hieroglyphy").attr("src")
        ]);
        myservice.onmessage = e => {
          var output = e.data;
          console.log("主线程从副线程" + "接收" + "event.data\n");
          console.log(output);
            // $2("output").value = output;
          console.timeEnd("encodescript");
          console.time("requestAnimationFrame");
          jQuery("#output").val(output);
          $2("stats").innerHTML = output.length + " chars";
            //   $2("output").value = output;
          //   $2("stats").innerHTML = output.length + " chars";
          mui(document.getElementById("encodescript")).button("reset");
          //   myservice.terminate();
          //   console.log("线程已关闭","service-worker-jsfuck.js")
            requestAnimationFrame(() => {
            console.log("弹出消息提示");
            tanchu弹出消息提示();
            console.timeEnd("requestAnimationFrame");
          });
          // tanchu弹出消息提示();
        };
        myservice.onerror = e => {
          console.error("Error:", e.message, e.filename);
          //   myservice.terminate();
          //   console.log("线程已关闭","service-worker-jsfuck.js")
        };
          // $2("output").value = output;
        // $2("stats").innerHTML = output.length + " chars";
      }
        function encodestring() {
        console.time("encodestring");
        console.log("encodestring");
        if (!myservice) {
          myservice = new Worker("service-worker-hieroglyphy.js");
          console.log("创建新线程", "service-worker-hieroglyphy.js");
        }
        mui(document.getElementById("encodestring")).button("loading");
        lastclick = "encodestring";
          // var output = hieroglyphy.hieroglyphyString(($2("input").value))
        myservice.postMessage([
          $2("input").value,
          lastclick,
            $("#hieroglyphy").attr("src")
        ]);
        myservice.onmessage = e => {
          var output = e.data;
          console.log("主线程从副线程" + "接收" + "event.data\n");
          console.log(output);
            // $2("output").value = output;
          console.timeEnd("encodestring");
          console.time("requestAnimationFrame");
          jQuery("#output").val(output);
          $2("stats").innerHTML = output.length + " chars";
            //   $2("output").value = output;
          //   $2("stats").innerHTML = output.length + " chars";
            //   myservice.terminate();
          //   console.log("线程已关闭","service-worker-jsfuck.js")
          // console.timeEnd("encodestring");
          requestAnimationFrame(() => {
            console.log("弹出消息提示");
            tanchu弹出消息提示();
            console.timeEnd("requestAnimationFrame");
          });
          mui(document.getElementById("encodestring")).button("reset");
          // tanchu弹出消息提示();
        };
        myservice.onerror = e => {
          console.error("Error:", e.message);
          //   myservice.terminate();
          //   console.log("线程已关闭","service-worker-jsfuck.js")
        };
      }
    */


    function encodeall(typename) {
      console.time(typename);
      console.log(typename);

      if (!myservice) {
        myservice = new Worker("/service-worker-hieroglyphy.60576d69.js");
        console.log("创建新线程", "service-worker-hieroglyphy.js");
      }

      mui(document.getElementById(typename)).button("loading");
      lastclick = typename; // var output = hieroglyphy.hieroglyphyString(($2("input").value))

      myservice.postMessage([$2("input").value, lastclick, $("#hieroglyphy").attr("src")]);

      myservice.onmessage = function (e) {
        var output = e.data;
        console.log("主线程从副线程" + "接收" + "event.data\n");
        console.log(output); // $2("output").value = output;

        console.timeEnd(typename);
        console.time("requestAnimationFrame");
        jQuery("#output").val(output);
        $2("stats").innerHTML = output.length + " chars"; //   $2("output").value = output;
        //   $2("stats").innerHTML = output.length + " chars";
        //   myservice.terminate();
        //   console.log("线程已关闭","service-worker-jsfuck.js")
        // console.timeEnd("encodestring");

        requestAnimationFrame(function () {
          console.log("弹出消息提示");
          tanchu弹出消息提示();
          console.timeEnd("requestAnimationFrame");
        });
        mui(document.getElementById(typename)).button("reset"); // tanchu弹出消息提示();
      };

      myservice.onerror = function (e) {
        console.error("Error:", e.message, e.filename); //   myservice.terminate();
        //   console.log("线程已关闭","service-worker-jsfuck.js")
      };
    }
  });
})();
},{"../拉伸导航栏与主体部分的顶部距离":"拉伸导航栏与主体部分的顶部距离.js","./service-worker-hieroglyphy.js":[["service-worker-hieroglyphy.60576d69.js","JSfuck-and-hieroglyphy-Decoder-and-ENCODER/service-worker-hieroglyphy.js"],"service-worker-hieroglyphy.60576d69.js.map","JSfuck-and-hieroglyphy-Decoder-and-ENCODER/service-worker-hieroglyphy.js"]}],"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}],"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/loaders/browser/js-loader.js"));
},{}]},{},["node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js",0,"JSfuck-and-hieroglyphy-Decoder-and-ENCODER/hieroglyphy-encode-html.js"], null)
//# sourceMappingURL=/hieroglyphy-encode-html.74ddf2ed.js.map