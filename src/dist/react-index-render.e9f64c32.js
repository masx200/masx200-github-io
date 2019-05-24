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
})({"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
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
},{"./bundle-url":"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/bundle-url.js"}],"my-react-router-test/react-index-render.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import { async } from "q";
// import regeneratorRuntime from "regenerator-runtime"
// eslint-disable-next-line

/* eslint-disable */
// import React from 'react';
//在react的jsx文件中这句话能删除!
(function () {
  // console.log(regeneratorRuntime)
  $(window).one("load", function () {
    function onhashchange() {
      // refreshall();
      scrollTo(0, 0);
      $("#collapsibleNavbar").removeClass("show");
      $("#my主体").css("padding-top", $("#my导航栏").height());
    }

    $(window).on("hashchange", onhashchange);
    var haverun = 0;
    herewindowonload();

    function herewindowonload() {
      if (haverun == 0) {
        haverun = 1;
        console.log("开始运行此onload函数");
        myonloadfunc();
      } else {
        console.log("不要重复运行此onload函数");
      }
    } // $(window).one(herewindowonload);

    /* 不要写两次window onload */
    // var xmlDoc, x, onetitle, onelink, description;
    //   setTimeout(() => {
    //     herewindowonload();
    //   }, 1000);


    function myonloadfunc() {
      var _ReactRouterDOM = ReactRouterDOM,
          Link = _ReactRouterDOM.Link,
          Switch = _ReactRouterDOM.Switch,
          BrowserRouter = _ReactRouterDOM.BrowserRouter,
          Route = _ReactRouterDOM.Route,
          Redirect = _ReactRouterDOM.Redirect;
      var _React = React,
          Suspense = _React.Suspense,
          lazy = _React.lazy;
      var home = lazy(function () {
        return require("_bundle_loader")(require.resolve("./react-module-home.js"));
      });
      var rssreader = lazy(function () {
        return require("_bundle_loader")(require.resolve("./react-module-rssreader.js"));
      });
      var about = lazy(function () {
        return require("_bundle_loader")(require.resolve("./react-module-about.js"));
      }); // hashchangehandler();

      var lasthash;
      /* var about = (app = rssreader = "undefined");
      var allcomponent = {
      about,
      app,
      rssreader
      }; */
      // var about, App, rssreader;

      $(window).on("hashchange", hashchangehandler);

      function hashchangehandler() {
        if (lasthash === window.location.hash) {
          console.log("hash不改变");
          return;
        }

        lasthash = window.location.hash;
        console.log("hash", window.location.hash); // if ("" == window.location.hash) {
        //   window.location.hash = "#/";
        //   return;
        // }

        /*  try {
        异步按需加载外部组件("#/", import("./module-app.js"), "app");
        异步按需加载外部组件("#/about", import("./module-about.js"), "about");
        异步按需加载外部组件(
            "#/rssreader",
            import("./module-rssreader.js"),
            "rssreader"
          );
        } catch (e) {
        console.error(e);
        } */

        /* 
        try {
        异步按需加载外部组件("#/about", import("./module-about.js"), "about");
        } catch (e) {
        console.error(e);
        }
        try {
        异步按需加载外部组件(
          "#/rssreader",
          import("./module-rssreader.js"),
          "rssreader"
        );
        } catch (e) {
        console.error(e);
        } */
        //   } catch (e) {
        //     console.warn(e);
        //     try {
        //         $("#allnavbar").click();
        //     } catch (e) {
        //       console.warn(e);
        //     }
        //   }
        //   refreshall();
        //   console.log("about", about);
        //   console.log("app", App);
        //   console.log("rssreader", rssreader);

        /*   if ("#/about" == window.location.hash) {
        if (undefined === about) {
          console.log("加载外部组件about");
          //   console.log(require("./module-about.js"))
          //   about =require("./module-about.js").default
          //   console.log("about", about);
            import("./module-about").then(m => {
            about = m.default;
            console.log("about", about);
            refreshall();
          });
        }
        } */

        /*  function 异步按需加载外部组件(hash, lazypromise, name) {
        // console.log(hash, lazypromise, name);
        if (hash == window.location.hash) {
          if ("undefined" === allcomponent[name]) {
            console.log("加载外部组件" + name);
            //   console.log(require("./module-about.js"))
            //   about =require("./module-about.js").default
            //   console.log("about", about);
              lazypromise.then(m => {
              var componentname = (allcomponent[name] = m.default);
              console.log(name, componentname);
              refreshall();
            });
          } else {
            lazypromise = null;
            // console.log(hash, lazypromise, name);
          }
        } else {
          lazypromise = null;
          //   console.log(hash, lazypromise, name);
        }
        // console.log(hash, lazypromise, name);
        } */
      } //   refreshall();

      /* import("./module-about").then(m => {
            about = m.default;
            console.log("about", about);
              refreshall();
          });
        }
      }
        if ("#/" == window.location.hash) {
        if (undefined === App) {
          console.log("加载外部组件App");
          import("./module-app").then(m => {
            App = m.default;
            console.log("app", App);
              refreshall();
          });
        }
      }
      //   if ("#/rssreader" == window.location.hash) {
      //     if (undefined === rssreader) {
      //       console.log("加载外部组件rssreader");
      //       import("./module-rssreader").then(m => {
      //         rssreader = m.default;
      //         console.log("rssreader", rssreader);
      //         refreshall();
      //       });
      //     }
      //   } */
      // }

      /*  function jiazaiload(myid, eid) {
      var myselectorid = myid;
      // window.myrsscontent = []
      myrsscontent = [];
      console.log("开始加载外部内容", $(myselectorid).attr("src"));
      if (typeof $(myselectorid).attr("src") == "undefined") {
        console.log("加载失败");
      } else {
        //使用fetch函数代替$.get
        //使用fast-xml-parser把xml转换为json
        var xmlurl = $(myselectorid).attr("src");
        fetch(xmlurl)
          .then(r => {
            console.log(r.statusText, r);
            return r.text();
          })
          .then(s => {
            var str = s;
            myxmlstrcontent.push(str);
            console.log(myxmlstrcontent);
            var data = parser.parse(str);
            console.log(data);
            myrsscontent.title = data.rss.channel.title;
            myrsscontent.description = data.rss.channel.description;
            myrsscontent.push(...data.rss.channel.item);
            console.log(myrsscontent);
            refreshall();
            mui(document.getElementById(eid)).button("reset");
            tanchu弹出消息通用("success");
          });
          //   var str = await r.text();
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
      //   }
      // } */
      // var mybuttonids = {};


      function guid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0,
              v = c == "x" ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
      }
      /* function tanchu弹出消息通用(infotype) {
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
      jQuery("#my导航栏").append(
        jQuery(`<div id="${id}" class="alert alert-${infotype} alert-dismissible fade show">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <strong>${textinfo}!</strong> 操作${textinfo}提示信息。
      </div>`).fadeTo(5000, 0.5, () => {
          console.log(jQuery("#" + id));
          jQuery("#" + id).remove();
        })
      );
      } */
      // window.myrsscontent = []
      // let myrsscontent = [];
      // var myxmlstrcontent = [];
      // const { render } = ReactDOM;
      //   let  hcreate = React.createElement

      /* class App extends React.Component {
      componentWillMount() {}
      componentDidMount() {
        window.location.hash = "#/";
        refreshall();
        document.title = "React router App-" + "home";
      }
      componentWillReceiveProps(newProps) {}
      shouldComponentUpdate(newProps, newState) {
        return true;
      }
      componentWillUpdate(nextProps, nextState) {}
      componentDidUpdate(prevProps, prevState) {}
      componentWillUnmount() {}
      render() {
        return (
          <div className="App">
            <header className="">
              <div class="container">
                <div class="jumbotron">
                  <h1>欢迎登陆页面！</h1>
                  <p>
                    <a target="_blank" href="https://weibo.com/2174458781?">
                      一生忽而得一夏当司掌好年华的微博
                    </a>
                  </p>
                  <p>
                    <a target="_blank" href="https://github.com/masx200">
                      masx200的github仓库
                    </a>
                  </p>
                </div>
              </div>
              <p>
                <a
                  target="_blank"
                  href="https://zh-hans.reactjs.org/tutorial/tutorial.html"
                >
                  入门教程: 认识 React – React
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://zh-hans.reactjs.org/docs/getting-started.html"
                >
                  开始 – React文档
                </a>
              </p>
              <h1>react-router测试</h1>
              <h1>Hello, world!</h1>
              <h2>欢迎来到主页</h2>
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <p className="App-intro">
                你可以在 <code>src/App.js</code> 文件中修改。
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <h1>Hello, world!</h1>
              <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
            </header>
          </div>
        );
      }
      } */
      //    var about = function() {
      //       return import("./module-about");
      //     // };

      /*   class about extends React.Component {
      componentWillMount() {}
      componentDidMount() {
        refreshall();
        document.title = "React router App-" + "about";
      }
      componentWillReceiveProps(newProps) {}
      shouldComponentUpdate(newProps, newState) {
        return true;
      }
      componentWillUpdate(nextProps, nextState) {}
      componentDidUpdate(prevProps, prevState) {}
      componentWillUnmount() {}
      render() {
        return (
          <div className="App">
            <header className="App-header">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NDEuOSA1OTUuMyI+CiAgICA8ZyBmaWxsPSIjNjFEQUZCIj4KICAgICAgICA8cGF0aCBkPSJNNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2LjlWNzhjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZWNzguNWMtOC40IDAtMTYgMS44LTIyLjYgNS42LTI4LjEgMTYuMi0zNC40IDY2LjctMTkuOSAxMzAuMS02Mi4yIDE5LjItMTAyLjcgNDkuOS0xMDIuNyA4Mi4zIDAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek00MjEuMiA0MzBjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek00MjAuNyAxNjNjOS4zIDkuNiAxOC42IDIwLjMgMjcuOCAzMi05LS40LTE4LjItLjctMjcuNS0uNy05LjQgMC0xOC43LjItMjcuOC43IDktMTEuNyAxOC4zLTIyLjQgMjcuNS0zMnptLTc0IDU4LjljLTQuOSA3LjctOS44IDE1LjYtMTQuNCAyMy43LTQuNiA4LTguOSAxNi0xMyAyNC01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOCAxMy4xLTMuMSAyNi45LTUuOCA0MS4yLTcuOXptLTkwLjUgMTI1LjJjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42IDAtMTUuNyAyMi45LTM1LjYgNTguMy01MC42IDguNi0zLjcgMTgtNyAyNy43LTEwLjEgNS43IDE5LjYgMTMuMiA0MCAyMi41IDYwLjktOS4yIDIwLjgtMTYuNiA0MS4xLTIyLjIgNjAuNi05LjktMy4xLTE5LjMtNi41LTI4LTEwLjJ6TTMxMCA0OTBjLTEzLjYtNy44LTE5LjUtMzcuNS0xNC45LTc1LjcgMS4xLTkuNCAyLjktMTkuMyA1LjEtMjkuNCAxOS42IDQuOCA0MSA4LjUgNjMuNSAxMC45IDEzLjUgMTguNSAyNy41IDM1LjMgNDEuNiA1MC0zMi42IDMwLjMtNjMuMiA0Ni45LTg0IDQ2LjktNC41LS4xLTguMy0xLTExLjMtMi43em0yMzcuMi03Ni4yYzQuNyAzOC4yLTEuMSA2Ny45LTE0LjYgNzUuOC0zIDEuOC02LjkgMi42LTExLjUgMi42LTIwLjcgMC01MS40LTE2LjUtODQtNDYuNiAxNC0xNC43IDI4LTMxLjQgNDEuMy00OS45IDIyLjYtMi40IDQ0LTYuMSA2My42LTExIDIuMyAxMC4xIDQuMSAxOS44IDUuMiAyOS4xem0zOC41LTY2LjdjLTguNiAzLjctMTggNy0yNy43IDEwLjEtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjkgOS4yLTIwLjggMTYuNi00MS4xIDIyLjItNjAuNiA5LjkgMy4xIDE5LjMgNi41IDI4LjEgMTAuMiAzNS40IDE1LjEgNTguMyAzNC45IDU4LjMgNTAuNi0uMSAxNS43LTIzIDM1LjYtNTguNCA1MC42ek0zMjAuOCA3OC40eiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQyMC45IiBjeT0iMjk2LjUiIHI9IjQ1LjciLz4KICAgICAgICA8cGF0aCBkPSJNNTIwLjUgNzguMXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                className="App-logo"
                alt="logo"
              />
              <p>
                <a
                  target="_blank"
                  href="https://zh-hans.reactjs.org/tutorial/tutorial.html"
                >
                  入门教程: 认识 React – React
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://zh-hans.reactjs.org/docs/getting-started.html"
                >
                  开始 – React文档
                </a>
              </p>
              <h1>react-router测试</h1>
              <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
              <h3>
                React 是一个用于构建用户界面的 JAVASCRIPT 库。
                <br />
                React主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）。
                <br />
                React 起源于 Facebook 的内部项目，用来架设 Instagram
                的网站，并于 2013 年 5 月开源。
                <br />
                React
                拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。
                <br />
                React 特点
                <br />
                1.声明式设计 −React采用声明范式，可以轻松描述应用。
                <br />
                2.高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。
                <br />
                3.灵活 −React可以与已知的库或框架很好地配合。
                <br />
                4.JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX
                ，但我们建议使用它。
                <br />
                5.组件 − 通过 React
                构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
                <br />
                6.单向响应的数据流 − React
                实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。
              </h3>
              <div>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </div>
            </header>
          </div>
        );
      }
      } */
      // class rssreader extends React.Component {
      // //   /*  constructor() {
      // //     super()
      // //     this.buttonid1 = this.buttonid2 =this. buttonid3 =this. buttonid4 = this.buttonid5 =this. buttonid6 = 'undefined';
      // //   } */
      // //   // buttonid1=buttonid2=buttonid3=buttonid4=buttonid5=buttonid6=undefined
      //   componentWillMount() {
      //     mybuttonids.buttonid1 = guid();
      //     mybuttonids.buttonid2 = guid();
      //     mybuttonids.buttonid3 = guid();
      //     mybuttonids.buttonid4 = guid();
      //     mybuttonids.buttonid5 = guid();
      //     mybuttonids.buttonid6 = guid();
      //   }
      //   jiazairss1() {
      //     // console.log(this.buttonid1);
      //     mui(document.getElementById(mybuttonids.buttonid1)).button("loading");
      //     var myselectorid = "#xml1";
      //     jiazaiload(myselectorid, mybuttonids.buttonid1);
      //   }
      //   jiazairss2() {
      //     mui(document.getElementById(mybuttonids.buttonid2)).button("loading");
      //     var myselectorid = "#xml2";
      //     jiazaiload(myselectorid, mybuttonids.buttonid2);
      //   }
      //   jiazairss3() {
      //     mui(document.getElementById(mybuttonids.buttonid3)).button("loading");
      //     var myselectorid = "#xml3";
      //     jiazaiload(myselectorid, mybuttonids.buttonid3);
      //   }
      //   jiazairss4() {
      //     mui(document.getElementById(mybuttonids.buttonid4)).button("loading");
      //     var myselectorid = "#xml4";
      //     jiazaiload(myselectorid, mybuttonids.buttonid4);
      //   }
      //   jiazairss5() {
      //     mui(document.getElementById(mybuttonids.buttonid5)).button("loading");
      //     var myselectorid = "#xml5";
      //     jiazaiload(myselectorid, mybuttonids.buttonid5);
      //   }
      //   jiazairss6() {
      //     mui(document.getElementById(mybuttonids.buttonid6)).button("loading");
      //     var myselectorid = "#xml6";
      //     jiazaiload(myselectorid, mybuttonids.buttonid6);
      //   }
      //   componentDidMount() {
      //     document.title = "React router App-" + "rssreader";
      //     refreshall();
      //   }
      //   componentWillReceiveProps(newProps) {}
      //   shouldComponentUpdate(newProps, newState) {
      //     return true;
      //   }
      //   componentWillUpdate(nextProps, nextState) {}
      //   componentDidUpdate(prevProps, prevState) {}
      //   componentWillUnmount() {}
      //   render() {
      //     return (
      //       <div className="App">
      //         <h1>异步fetch加载rss阅读器演示</h1>
      //         <nav class="navbar navbar-expand-sm bg-light navbar-light ">
      //           <ul class="demo">
      //             <button
      //               id={mybuttonids.buttonid1}
      //               data-loading-icon="mui-spinner mui-spinner-custom"
      //               class="mui-btn mui-btn-royal mui-btn-outlined"
      //               onClick={this.jiazairss1}
      //             >
      //               加载tmtpost
      //             </button>
      //             <button
      //               id={mybuttonids.buttonid2}
      //               data-loading-icon="mui-spinner mui-spinner-custom"
      //               class="mui-btn mui-btn-primary mui-btn-outlined"
      //               onClick={this.jiazairss2}
      //             >
      //               加载iplaysoft
      //             </button>
      //             <button
      //               id={mybuttonids.buttonid3}
      //               data-loading-icon="mui-spinner mui-spinner-custom"
      //               class="mui-btn mui-btn-warning mui-btn-outlined"
      //               onClick={this.jiazairss3}
      //             >
      //               加载landiannews
      //             </button>
      //             <button
      //               id={mybuttonids.buttonid4}
      //               data-loading-icon="mui-spinner mui-spinner-custom"
      //               class="mui-btn mui-btn-danger mui-btn-outlined"
      //               onClick={this.jiazairss4}
      //             >
      //               加载ithome
      //             </button>
      //             <button
      //               id={mybuttonids.buttonid5}
      //               data-loading-icon="mui-spinner mui-spinner-custom"
      //               class="mui-btn mui-btn-success mui-btn-outlined"
      //               onClick={this.jiazairss5}
      //             >
      //               加载ifanr
      //             </button>
      //             <button
      //               id={mybuttonids.buttonid6}
      //               data-loading-icon="mui-spinner mui-spinner-custom"
      //               class="mui-btn mui-btn-primary mui-btn-outlined"
      //               onClick={this.jiazairss6}
      //             >
      //               加载pingwest
      //             </button>
      //           </ul>
      //         </nav>
      //         <header className="App-header">
      //           <div>
      //             <h3>
      //               <b>{myrsscontent.title}</b>
      //             </h3>
      //             <p>{myrsscontent.description}</p>
      //             <ul class="mui-table-view">
      //               {// window.myrsscontent.map
      //               myrsscontent.map(e => (
      //                 <li class="mui-table-view-cell mui-media">
      //                   <div class="mui-media-body">
      //                     <b> {e.title}</b>
      //                     <a href={e.link} target="_blank">
      //                       <p class="mui-ellipsis">{e.link}</p>
      //                     </a>
      //                     <p class="mui-ellipsis">{e.description}</p>
      //                   </div>
      //                 </li>
      //               ))}
      //             </ul>
      //           </div>
      //         </header>
      //       </div>
      //     );
      //   }
      // }


      var Apphome =
      /*#__PURE__*/
      function (_React$Component) {
        _inherits(Apphome, _React$Component);

        function Apphome(props) {
          var _this;

          _classCallCheck(this, Apphome);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Apphome).call(this, props));
          _this.pathnamestate = window.location.pathname + "#/";
          _this.locationpath = window.location.pathname;
          return _this;
        }

        _createClass(Apphome, [{
          key: "shouqi\u6536\u8D77\u6298\u53E0\u7684\u5BFC\u822A\u680F\u83DC\u5355",
          value: function shouqi() {
            $("#my主体").css("padding-top", $("#my导航栏").height());
            $("#example-navbar-collapse").removeClass("show");
            hashchangehandler();
            refreshall();
          }
        }, {
          key: "render",
          value: function render() {
            return React.createElement(BrowserRouter //   basename={window.location.pathname + "#/"}
            , {
              basename: this.pathnamestate,
              forceRefresh: false,
              keyLength: 12
            }, React.createElement("div", null, React.createElement("div", {
              class: "container-fluid fixed-top",
              id: "my\u5BFC\u822A\u680F"
            }, React.createElement("nav", {
              id: "allnavbar",
              onClick: this.shouqi收起折叠的导航栏菜单,
              class: "navbar navbar-default navbar navbar-expand-sm bg-light navbar-light",
              role: "navigation"
            }, React.createElement("div", null, React.createElement("a", {
              class: "navbar-brand ",
              href: "../index.html"
            }, "masx200\u7684github\u4E3B\u9875"), React.createElement("button", {
              class: "navbar-toggler",
              type: "button",
              "data-toggle": "collapse",
              "data-target": "#example-navbar-collapse"
            }, React.createElement("span", {
              class: "navbar-toggler-icon"
            }))), React.createElement("div", {
              class: "collapse navbar-collapse",
              id: "example-navbar-collapse"
            }, React.createElement("ul", {
              class: "nav navbar-nav"
            }, React.createElement("li", {
              id: "mynav1",
              class: window.location.hash == "#/" ? "active" : ""
            }, React.createElement(Link, {
              to: "/",
              class: "nav-link"
            }, "\u57FA\u4E8EREACT\u7684\u4E3B\u9875")), React.createElement("li", {
              class: window.location.hash == "#/rssreader" ? "active" : ""
            }, React.createElement(Link, {
              to: "/rssreader",
              class: "nav-link"
            }, "rss\u9605\u8BFB")), React.createElement("li", {
              id: "mynav2",
              class: window.location.hash == "#/about" ? "active" : ""
            }, React.createElement(Link, {
              to: "/about",
              class: "nav-link"
            }, "\u5173\u4E8EREACT")), React.createElement("li", null, React.createElement("a", {
              href: "../my-vue-router-project/index.html",
              class: "nav-link"
            }, "\u57FA\u4E8Evue\u7684\u4E3B\u9875")), React.createElement("li", {
              class: ""
            }, React.createElement("a", {
              href: "../\u5706\u5468\u7387\u8BA1\u7B97-\u53EF\u8BBE\u7F6E\u5706\u5468\u7387\u4F4D\u6570-\u53EF\u9009\u62E9\u7EBF\u7A0B\u4E2A\u6570-\u591A\u7EBF\u7A0B\u5927\u6570\u6846\u67B6webworker\u8F93\u51FAuseragent\u5927\u6570\u6846\u67B6/index.html",
              class: "nav-link"
            }, "\u5706\u5468\u7387\u8BA1\u7B97\u591A\u7EBF\u7A0B")), React.createElement("li", null, React.createElement("a", {
              href: "../\u82B1\u5BC6\u7F51\u9875\u7248-\u5B8C\u5584\u4FEE\u6539\u7248-\u54CD\u5E94\u5F0F\u7684\u5BFC\u822A\u680F/index.html",
              class: "nav-link"
            }, "\u82B1\u5BC6\u7F51\u9875\u7248")), React.createElement("li", null, React.createElement("a", {
              href: "../JSfuck-and-hieroglyphy-Decoder-and-ENCODER/index.html",
              class: "nav-link"
            }, "JSfuck-and-hieroglyphy-Decoder-and-ENCODER")))))), React.createElement("div", {
              class: "container",
              id: "my\u4E3B\u4F53"
            }, React.createElement(Suspense, {
              fallback: React.createElement("div", null, "loading")
            }, React.createElement(Switch, null, React.createElement(Route, {
              exact: true,
              path: "/" // component={allcomponent.app}
              ,
              component: home //    component={require("./module-app.js").default}

            }), React.createElement(Route, {
              path: "/rssreader" // component={allcomponent.rssreader}
              ,
              component: rssreader // component={require("./module-rssreader.js").default}

            }), React.createElement(Route, {
              path: "/about" // component={allcomponent.about}
              ,
              component: about // component={require("./module-about.js").default}
              // component={()=>i}

            }), React.createElement(Route, {
              exact: true,
              path: "" // component={allcomponent.app}
              ,
              component: home //    component={require("./module-app.js").default}

            }))))));
          }
        }, {
          key: "componentWillMount",
          value: function componentWillMount() {}
        }, {
          key: "componentDidMount",
          value: function componentDidMount() {
            $("#my主体").css("padding-top", $("#my导航栏").height());
            hashchangehandler();
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
        }]);

        return Apphome;
      }(React.Component);

      function refreshall() {
        ReactDOM.render(React.createElement(Apphome, null), document.getElementById("root"));
      }

      refreshall(); // ReactDOM.render(<Apphome />, document.getElementById("root"));
      //    /*  {
      //       /* window.refreshall = refreshall */
      //     }
      //     {
      //       /* let refreshall =()=> myrefreshall */
      //     } */
    }
  });
})();
},{"_bundle_loader":"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/bundle-loader.js","./react-module-home.js":[["react-module-home.bfd468be.js","my-react-router-test/react-module-home.js"],"react-module-home.bfd468be.js.map","my-react-router-test/react-module-home.js"],"./react-module-rssreader.js":[["react-module-rssreader.20f1e54a.js","my-react-router-test/react-module-rssreader.js"],"react-module-rssreader.20f1e54a.js.map","my-react-router-test/react-module-rssreader.js"],"./react-module-about.js":[["react-module-about.981e8952.js","my-react-router-test/react-module-about.js"],"react-module-about.981e8952.js.map","my-react-router-test/react-module-about.js"]}],"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "11510" + '/');

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
},{}],"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
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
var b=require("node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]).then(function(){require("my-react-router-test/react-index-render.js");});
},{}]},{},["node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/react-index-render.e9f64c32.js.map