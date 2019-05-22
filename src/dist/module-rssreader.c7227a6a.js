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
})({"my-react-router-test/module-rssreader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function tanchu弹出消息通用(infotype) {
  // var id=Math.random()*100000000|0
  var textinfo;

  switch (infotype) {
    case "success":
      textinfo = "成功";
      break;

    case "primary":
      textinfo = "首选";
      break;

    case "danger":
      textinfo = "失败";
      break;

    case "warning":
      textinfo = "警告";
      break;

    default:
      return;
      break;
  }

  var id = guid();
  jQuery("#my导航栏").append(jQuery("<div id=\"".concat(id, "\" class=\"alert alert-").concat(infotype, " alert-dismissible fade show\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n  <strong>").concat(textinfo, "!</strong> \u64CD\u4F5C").concat(textinfo, "\u63D0\u793A\u4FE1\u606F\u3002\n  </div>")).fadeTo(5000, 0.5, function () {
    console.log(jQuery("#" + id));
    jQuery("#" + id).remove();
  }));
}

var myxmlstrcontent = [];
var myrsscontent = [];

function jiazaiload(myid, eid) {
  var myselectorid = myid; // window.myrsscontent = []

  myrsscontent = [];
  console.log("开始加载外部内容", $(myselectorid).attr("src"));

  if (typeof $(myselectorid).attr("src") == "undefined") {
    console.log("加载失败");
  } else {
    //使用fetch函数代替$.get
    //使用fast-xml-parser把xml转换为json
    var xmlurl = $(myselectorid).attr("src");
    fetch(xmlurl).then(function (r) {
      console.log(r.statusText, r);
      return r.text();
    }).then(function (s) {
      var _myrsscontent;

      var str = s;
      myxmlstrcontent.push(str);
      console.log("xml", myxmlstrcontent);
      var data = parser.parse(str);
      console.log("json", data);
      myrsscontent.title = data.rss.channel.title;
      myrsscontent.description = data.rss.channel.description;

      (_myrsscontent = myrsscontent).push.apply(_myrsscontent, _toConsumableArray(data.rss.channel.item));

      console.log("rsscontent", myrsscontent);
      mui(document.getElementById(eid)).button("reset");
      tanchu弹出消息通用("success");
      refreshall();
    }); //   var str = await r.text();

    /*   fetch(xmlurl).then(r => {
        console.log(r.statusText, r);
        // return r.text();
          var str = r.text();
        myxmlstrcontent.push(str);
        console.log(myxmlstrcontent);
        var data = parser.parse(str);
        console.log(data);
        myrsscontent.title = data.rss.channel.title;
        myrsscontent.description = data.rss.channel.description;
        myrsscontent.push(...data.rss.channel.item);
        console.log(myrsscontent);
        refreshall();
      }); */
    //   .then(str => {
    //     myxmlstrcontent.push(str);
    //     console.log(myxmlstrcontent);
    //     return parser.parse(str);
    //   })
    //   .then(data => {
    //     console.log(data);
    //     myrsscontent.title = data.rss.channel.title;
    //     myrsscontent.description = data.rss.channel.description;
    //     myrsscontent.push(...data.rss.channel.item);
    //     console.log(myrsscontent);
    //     refreshall();
    //   });
    // $.get($(myselectorid).attr("src"), function (data, status) {
    //     console.log(status, typeof data, data);
    //     xmlDoc = data;
    //     x = xmlDoc.getElementsByTagName("item");
    //     for (i = 0; i < x.length; i++) {
    //         onetitle = x[i].getElementsByTagName("title")[0].childNodes[0]
    //             .nodeValue;
    //         onelink = x[i].getElementsByTagName("link")[0].childNodes[0]
    //             .nodeValue;
    //         description = "";
    //         for (value of x[i].getElementsByTagName("description")[0]
    //             .childNodes) {
    //             description += value.nodeValue;
    //         }
    //         // window.myrsscontent.push
    //         myrsscontent.push({
    //             title: onetitle,
    //             link: onelink,
    //             description
    //         });
    //     }
    //     console.log(myrsscontent);
    //     // console.log(window.myrsscontent)
    //     refreshall();
    // });
  }
}

function guid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == "x" ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

var mybuttonids = {};

var rssreader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(rssreader, _React$Component);

  function rssreader() {
    _classCallCheck(this, rssreader);

    return _possibleConstructorReturn(this, _getPrototypeOf(rssreader).apply(this, arguments));
  }

  _createClass(rssreader, [{
    key: "componentWillMount",

    /*  constructor() {
        super()
        this.buttonid1 = this.buttonid2 =this. buttonid3 =this. buttonid4 = this.buttonid5 =this. buttonid6 = 'undefined';
      } */
    // buttonid1=buttonid2=buttonid3=buttonid4=buttonid5=buttonid6=undefined
    value: function componentWillMount() {
      mybuttonids.buttonid1 = guid();
      mybuttonids.buttonid2 = guid();
      mybuttonids.buttonid3 = guid();
      mybuttonids.buttonid4 = guid();
      mybuttonids.buttonid5 = guid();
      mybuttonids.buttonid6 = guid();
    }
  }, {
    key: "jiazairss1",
    value: function jiazairss1() {
      // console.log(this.buttonid1);
      mui(document.getElementById(mybuttonids.buttonid1)).button("loading");
      var myselectorid = "#xml1";
      jiazaiload(myselectorid, mybuttonids.buttonid1);
    }
  }, {
    key: "jiazairss2",
    value: function jiazairss2() {
      mui(document.getElementById(mybuttonids.buttonid2)).button("loading");
      var myselectorid = "#xml2";
      jiazaiload(myselectorid, mybuttonids.buttonid2);
    }
  }, {
    key: "jiazairss3",
    value: function jiazairss3() {
      mui(document.getElementById(mybuttonids.buttonid3)).button("loading");
      var myselectorid = "#xml3";
      jiazaiload(myselectorid, mybuttonids.buttonid3);
    }
  }, {
    key: "jiazairss4",
    value: function jiazairss4() {
      mui(document.getElementById(mybuttonids.buttonid4)).button("loading");
      var myselectorid = "#xml4";
      jiazaiload(myselectorid, mybuttonids.buttonid4);
    }
  }, {
    key: "jiazairss5",
    value: function jiazairss5() {
      mui(document.getElementById(mybuttonids.buttonid5)).button("loading");
      var myselectorid = "#xml5";
      jiazaiload(myselectorid, mybuttonids.buttonid5);
    }
  }, {
    key: "jiazairss6",
    value: function jiazairss6() {
      mui(document.getElementById(mybuttonids.buttonid6)).button("loading");
      var myselectorid = "#xml6";
      jiazaiload(myselectorid, mybuttonids.buttonid6);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.title = "React router App-" + "rssreader";
      refreshall();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {}
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(newProps, newState) {
      return true;
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "App"
      }, React.createElement("h1", null, "\u5F02\u6B65fetch\u52A0\u8F7Drss\u9605\u8BFB\u5668\u6F14\u793A"), React.createElement("nav", {
        class: "navbar navbar-expand-sm bg-light navbar-light "
      }, React.createElement("ul", {
        class: "demo"
      }, React.createElement("button", {
        id: mybuttonids.buttonid1,
        "data-loading-icon": "mui-spinner mui-spinner-custom",
        class: "mui-btn mui-btn-royal mui-btn-outlined",
        onClick: this.jiazairss1
      }, "\u52A0\u8F7Dtmtpost"), React.createElement("button", {
        id: mybuttonids.buttonid2,
        "data-loading-icon": "mui-spinner mui-spinner-custom",
        class: "mui-btn mui-btn-primary mui-btn-outlined",
        onClick: this.jiazairss2
      }, "\u52A0\u8F7Diplaysoft"), React.createElement("button", {
        id: mybuttonids.buttonid3,
        "data-loading-icon": "mui-spinner mui-spinner-custom",
        class: "mui-btn mui-btn-warning mui-btn-outlined",
        onClick: this.jiazairss3
      }, "\u52A0\u8F7Dlandiannews"), React.createElement("button", {
        id: mybuttonids.buttonid4,
        "data-loading-icon": "mui-spinner mui-spinner-custom",
        class: "mui-btn mui-btn-danger mui-btn-outlined",
        onClick: this.jiazairss4
      }, "\u52A0\u8F7Dithome"), React.createElement("button", {
        id: mybuttonids.buttonid5,
        "data-loading-icon": "mui-spinner mui-spinner-custom",
        class: "mui-btn mui-btn-success mui-btn-outlined",
        onClick: this.jiazairss5
      }, "\u52A0\u8F7Difanr"), React.createElement("button", {
        id: mybuttonids.buttonid6,
        "data-loading-icon": "mui-spinner mui-spinner-custom",
        class: "mui-btn mui-btn-primary mui-btn-outlined",
        onClick: this.jiazairss6
      }, "\u52A0\u8F7Dpingwest"))), React.createElement("header", {
        className: "App-header"
      }, React.createElement("div", null, React.createElement("h3", null, React.createElement("b", null, myrsscontent.title)), React.createElement("p", null, myrsscontent.description), React.createElement("ul", {
        class: "mui-table-view"
      }, // window.myrsscontent.map
      myrsscontent.map(function (e) {
        return React.createElement("li", {
          class: "mui-table-view-cell mui-media"
        }, React.createElement("div", {
          class: "mui-media-body"
        }, React.createElement("b", null, " ", e.title), React.createElement("a", {
          href: e.link,
          target: "_blank"
        }, React.createElement("p", {
          class: "mui-ellipsis"
        }, e.link)), React.createElement("p", {
          class: "mui-ellipsis"
        }, e.description)));
      })))));
    }
  }]);

  return rssreader;
}(React.Component);

exports.default = rssreader;

function refreshall() {
  $("#allnavbar").click();
}
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
},{}]},{},["node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js","my-react-router-test/module-rssreader.js"], null)
//# sourceMappingURL=/module-rssreader.c7227a6a.js.map