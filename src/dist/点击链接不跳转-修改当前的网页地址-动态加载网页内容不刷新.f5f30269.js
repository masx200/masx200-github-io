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
})({"点击链接不跳转-修改当前的网页地址-动态加载网页内容不刷新.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(function () {
  /* 注意:对于使用了document.write的网站, 加载会出错,因为脚本都是异步加载的,网页内容会被覆盖*/
  window.addEventListener("load", windowloadhandler);

  function windowloadhandler() {
    document.charset = "UTF-8";
    window.removeEventListener("load", windowloadhandler);
    var htmldataboject = new Object();
    Array.apply(void 0, _toConsumableArray(document.querySelectorAll("script"))).forEach(function (e) {
      if (e.src !== "") {
        e.src = e.src;
      }
    });
    document.firstElementChild.dataset.href = location.href;
    document.firstElementChild.dataset.pathname = location.pathname;
    console.log("当前页面的document的href为" + document.firstElementChild.dataset.href);
    console.log("当前页面的document的pathname为" + document.firstElementChild.dataset.pathname); // var lasthref;
    //  document.firstElementChild.dataset.href = location.href;

    替换a链接();
    document.addEventListener("click", 替换a链接); //   document.addEventListener("scroll", 替换a链接);

    function 替换a链接() {
      document.firstElementChild.dataset.href = location.href;
      document.firstElementChild.dataset.pathname = location.pathname;
      var alinkarr = Array.from(document.getElementsByTagName("a")); //   console.log(alinkarr);

      alinkarr.forEach(function (e) {
        /* 尝试把http和https都替换,因为协议不同导致origin不同 */
        // e.protocol = location.protocol;

        /* 使用hostname代替origin判断 */
        if (e.href != "javascript:;" && location.hostname === e.hostname && e.pathname !== location.pathname) {
          e.dataset.href = e.href;
          console.log("替换a链接", e);
          e.href = "javascript:;";

          e.onclick = function () {
            document.firstElementChild.dataset.href = location.href;
            document.firstElementChild.dataset.pathname = location.pathname;
            动态加载网页内容不刷新(e.dataset.href);
          };
        }
        /*  e.onclick = () => {
              // lasthref=location.href
              console.log(e.href);
                      if (location.origin === e.origin) {
                if (e.pathname === location.pathname) {
                  if (e.hash !== location.hash) {
                    return true;
                  } else {
                    return false;
                  }
                } else {
                  history.pushState(undefined, undefined, e.href);
                  console.log("执行,history.pushState,成功");
                  window.onpopstate();
                  return false;
                }
                        //   return false;
              } else {
                return true;
              }
            }; */

      });
    } //   document.onclick();


    var onpopstatehandler = function onpopstatehandler() {
      console.log("onpopstate,执行,动态加载网页内容不刷新"); //    document.firstElementChild.dataset.href = document.firstElementChild.dataset.href;

      console.log("当前的地址栏路径为" + location.pathname, "当前的网页document路径为" + document.firstElementChild.dataset.pathname);

      if (document.firstElementChild.dataset.pathname !== location.pathname) {
        动态加载网页内容不刷新();
      }

      替换a链接();
    };

    window.addEventListener("popstate", onpopstatehandler);
    var script总数量 = 0;
    var script完成数量 = 0;

    function script加载完成(urlortext) {
      替换a链接();
      script完成数量++;
      console.log(script完成数量, script总数量);
      console.log("script加载完成", urlortext);

      if (script完成数量 === script总数量) {
        console.log("触发window的load事件");
        setTimeout(function () {
          window.dispatchEvent(new Event("load"));
        }, 200);
        document.firstElementChild.dataset.href = location.href;
        document.firstElementChild.dataset.pathname = location.pathname;
        console.log("当前页面的document的href为" + document.firstElementChild.dataset.href);
      }
      /*  () => {
              setTimeout(() => {
                try {
                  window.dispatchEvent(new Event("load"));
                } catch (error) {
                  console.log(error);
                }
              }, 300);
            };  */

    }

    function loadscript(fileurl) {
      var loadguid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : guid();
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var script = document.createElement("script");
      script.dataset.loadid = loadguid;
      script.type = "text/javascript";
      script.src = fileurl;

      script.onload = function () {
        callback(fileurl);
      };

      script.async = true;

      script.onerror = function () {
        console.log("加载失败" + fileurl);
      };

      document.getElementsByTagName("head")[0].appendChild(script);
      console.log("添加script到head", script);
    }

    function loadscripttext(text) {
      var loadguid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : guid();
      var script = document.createElement("script");

      script.onerror = function () {
        console.log("加载失败" + fileurl);
      };
      /*   script.onload = () => {
            callback(text);
          }; */

      /* 用文本创建的script不会执行onload事件 */


      script.innerHTML = text;
      script.type = "text/javascript";
      script.dataset.loadid = loadguid;
      script.async = true;
      console.log("添加script到head", script);
      document.getElementsByTagName("head")[0].appendChild(script);
    }

    function loadstyle(fileurl) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var script = document.createElement("link");
      script.dataset.loadid = guid();
      script.rel = "stylesheet";
      script.href = fileurl;
      script.onload = callback;
      script.type = "text/css";
      document.getElementsByTagName("head")[0].appendChild(script);
      console.log(script);
    }

    function guid() {
      return "xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
        var e = 16 * Math.random() | 0;
        return ("x" == t ? e : 3 & e | 8).toString(16);
      });
    }

    function fetchhandler(t) {
      var loadid = guid();
      document.charset = "UTF-8";
      /* 把源代码的编码转成unicode */

      var sr = t; //   console.log(sr);

      var myhtmldata = new DOMParser().parseFromString(sr, "text/html");
      console.log(myhtmldata.charset);
      myhtmldata.charset = "UTF-8";
      htmldataboject[new URL(myhtmldata.URL).pathname] = {
        url: myhtmldata.URL,
        text: sr
      };
      console.log("加载过的网页的源代码合集", htmldataboject);
      console.log(myhtmldata);
      document.title = myhtmldata.title; // window.myhtmldata = myhtmldata;

      document.getElementsByTagName("body")[0].innerHTML = myhtmldata.getElementsByTagName("body")[0].innerHTML;
      /*  Array.from(document.querySelectorAll("link")).forEach(e => {
        e.parentNode.removeChild(e);
      });
      Array.from(document.querySelectorAll("style")).forEach(e => {
        e.parentNode.removeChild(e);
      });
      Array.from(document.querySelectorAll("meta")).forEach(e => {
        e.parentNode.removeChild(e);
      });
      Array.from(document.querySelectorAll("script")).forEach(e => {
        e.parentNode.removeChild(e);
      }); */

      Array.from(myhtmldata.querySelectorAll("link[rel='stylesheet']")).forEach(function (e) {
        e.dataset.loadid = loadid;

        e.onerror = function () {
          console.log("加载失败" + e.href);
        };

        e.type = "text/css";
        e.href = e.href;
        console.log("添加css元素到head", e);
        document.getElementsByTagName("head")[0].appendChild(e);
      });
      Array.from(myhtmldata.querySelectorAll("link")).forEach(function (e) {
        e.dataset.loadid = loadid;
        e.href = e.href;
        console.log("添加元素到head", e);
        document.getElementsByTagName("head")[0].appendChild(e);
      });
      Array.from(myhtmldata.querySelectorAll("style")).forEach(function (e) {
        e.type = "text/css";
        e.dataset.loadid = loadid;
        console.log("添加css元素到head", e);
        document.getElementsByTagName("head")[0].appendChild(e);
      });
      Array.from(myhtmldata.querySelectorAll("meta")).forEach(function (e) {
        e.dataset.loadid = loadid;
        console.log("添加元素到head", e);
        document.getElementsByTagName("head")[0].appendChild(e);
      });
      /*    document.getElementsByTagName(
        "body"
      )[0].innerHTML = myhtmldata.getElementsByTagName("body")[0].innerHTML; */

      script完成数量 = 0;
      script总数量 = Array.from(myhtmldata.querySelectorAll("script")).length;
      Array.from(myhtmldata.querySelectorAll("script")).forEach(function (e) {
        if (e.type == "text/javascript" || "" == e.type) {
          e.type = "text/javascript";

          if (e.src != "") {
            e.src = e.src;
            /* 但是如果有些脚本不重复加载,可能网页出错 */

            /* 不要重复加载javascipt文件,否则可能出问题 */

            loadscript(e.src, loadid, script加载完成);
          } else {
            loadscripttext(e.innerHTML, loadid);
            script完成数量++;
          }
        } else {
          /* 不是javascript文件 */
          if (e.src != "") {
            e.src = e.src;
          }

          console.log("添加元素到head", e);
          e.dataset.loadid = loadid;
          script完成数量++;
          document.getElementsByTagName("head")[0].appendChild(e);
        } //////////////////////////////
        //   console.log("e.type",e.type)
        // /* if (e.src) {
        //   e.src = e.src;
        //   if (e.type == "text/javascript" || "" == e.type) {
        //     loadscript(e.src, loadid, script加载完成);
        //   } else {
        //     console.log("添加元素到head", e);
        //     //   script加载完成();
        //     script完成数量++;
        //     document.getElementsByTagName("head")[0].appendChild(e);
        //   }
        // } else {
        //   // console.log("script-innertext", e.innerText.replace(/\n/g,";"));
        //   /* if (""==e.type) {
        //     e.type = "text/javascript";
        //   } */
        //   e.onerror = () => {
        //     console.log("加载失败" + e.src);
        //   };
        //   e.dataset.loadid = loadid;
        //   // e.async = true;
        //   if (e.type == "text/javascript" || "" == e.type) {
        //     e.type = "text/javascript";
        //     loadscripttext(e.innerHTML, loadid);
        //     //   script加载完成();
        //     script完成数量++;
        //     /*  var script = document.createElement("script");
        //         script.onload = script加载完成;
        //         script.innerHTML = e.innerHTML;
        //         script.type = e.type;
        //         script.dataset.loadid = e.dataset.loadid;
        //         console.log(script);
        //         document.getElementsByTagName("head")[0].appendChild(script); */
        //   } else {
        //     console.log("添加元素到head", e);
        //     //   script加载完成();
        //     script完成数量++;
        //     document.getElementsByTagName("head")[0].appendChild(e);
        //   }
        // } */

      });
      /*  Array.from(
        document.getElementsByTagName("body")[0].querySelectorAll("script")
      ).forEach(e => {
        e.parentNode.removeChild(e);
      }); */

      Array.apply(void 0, _toConsumableArray(document.querySelectorAll("link")).concat(_toConsumableArray(document.querySelectorAll("style")), _toConsumableArray(document.querySelectorAll("meta")), _toConsumableArray(document.querySelectorAll("script")))).forEach(function (e) {
        if (loadid != e.dataset.loadid) {
          e.parentNode.removeChild(e);
          console.log("删除旧元素", e);
        }
      });
      /* Array.from(document.querySelectorAll("style")).forEach(e => {
        if (!e.dataset.loadid) {
          e.parentNode.removeChild(e);
          console.log("删除旧元素", e);
        }
      });
      Array.from(document.querySelectorAll("meta")).forEach(e => {
        if (!e.dataset.loadid) {
          e.parentNode.removeChild(e);
          console.log("删除旧元素", e);
        }
      });
      Array.from(document.querySelectorAll("script")).forEach(e => {
        if (!e.dataset.loadid) {
          e.parentNode.removeChild(e);
          console.log("删除旧元素", e);
        }
      });*/
      // document.charset="UTF-8"

      /*  Array.from(myhtmldata.querySelectorAll("script")).forEach(e => {
            if (e.src) {
              e.src = e.src;
              loadscript(e.src);
            } else {
              if (!e.type) {
                e.type = "text/javascript";
              }
              e.onerror = () => {
                console.log("加载失败" + e.src);
              };
              e.dataset.loadid = loadid;
              e.async = true;
              //   console.log(e.src)
              document.getElementsByTagName("head")[0].appendChild(e);
            }
          }); */

      /* setTimeout(() => {
            try {
              window.dispatchEvent(new Event("load"));
            } catch (error) {
              console.log(error);
            }
          }, 300); */
    }

    function 动态加载网页内容不刷新() {
      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.href;
      document.charset = "UTF-8";
      /*  if (typeof url === "undefined") {
        url = location.href;
      } else  */

      url = new URL(url);
      url.protocal = location.protocol;

      if (location.hostname === url.hostname && url.pathname !== location.pathname || url.pathname !== document.firstElementChild.dataset.pathname) {
        console.log("动态加载网页内容不刷新,执行" + url); // var urlorighin = new URL(url).origin;
        //    document.firstElementChild.dataset.href = location.href;

        if (url.pathname !== location.pathname) {
          history.pushState(undefined, undefined, url);
        }

        var nowurl = location.href;
        console.log("替换当前的网址" + document.firstElementChild.dataset.href, "改成", nowurl);

        try {
          fetch(url).then(function (r) {
            console.log(r);
            return r.text();
          }).then(fetchhandler);
        } catch (error) {
          console.error(error);

          if (url.protocal === "https:") {
            url.protocal = "http:";
          } else {
            url.protocal = "https:";
          }

          fetch(url).then(function (r) {
            console.log(r);
            return r.text();
          }).then(fetchhandler);
        }
      } else {
        console.log("动态加载网页内容不刷新,不执行" + "原网页与现在的网址相同不刷新", document.firstElementChild.dataset.href, location.href);
      }
    }
  }
})();
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "21932" + '/');

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
},{}]},{},["node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js","点击链接不跳转-修改当前的网页地址-动态加载网页内容不刷新.js"], null)
//# sourceMappingURL=/点击链接不跳转-修改当前的网页地址-动态加载网页内容不刷新.f5f30269.js.map