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
})({"../my-react-router-test/index.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//console.log("测试babel-standalone")
// import './App.css';
// eslint-disable-next-line

/* eslint-disable */
// import 'babel-polyfill';
// import "@babel/polyfill";
// import loadable from '@loadable/component/dist/loadable.es.js'
// import React from 'react'
// import { render } from 'react-dom'
// import {Link, Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
//使用cdn加载react依赖包       
{}
/* <script   src="https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js"></script> */
// <script   src="https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js"></script>
// <script   src="https://cdn.staticfile.org/react-router-dom/5.0.0/react-router-dom.min.js"></script>
//React
//const React=React
//import { Router, Route } from 'react-router-dom';
//import { Router, Route } from 'react-router'
//import { Router, Route } from 'react-router-dom';
//import { Router, Route } from 'react-router'
// import App from './modules/App'
// import about from './modules/about'
// import App from './modules/App'
// import about from './modules/about'
//import {Component} from 'react'
// console.log(window.location.hash)
// console.log(window.location.pathname)
//import { Router, Route } from 'react-router-dom';
//import { Router, Route } from 'react-router'
// import App from './modules/App'
// import about from './modules/about'
// const App = loadable(() => import('./modules/App'))
// 包加载方
// const about = loadable(() => import('./modules/about'))
// const Apphome = loadable(() => import('./apphome'))
// const App =() => import('./modules/App')
// const about =() => import('./modules/about')

haverun = 0;
setTimeout(function () {
  window.onload();
}, 1000);

window.onload = function () {
  if (haverun == 0) {
    haverun = 1;
    console.log("开始运行此onload函数");
    myonloadfunc();
  } else {
    console.log("不要重复运行此onload函数");
  }
};

myonloadfunc = function myonloadfunc() {
  var _ReactDOM = ReactDOM,
      render = _ReactDOM.render; // import { Link } from 'react-router-dom';

  var _ReactRouterDOM = ReactRouterDOM,
      Link = _ReactRouterDOM.Link,
      Switch = _ReactRouterDOM.Switch,
      BrowserRouter = _ReactRouterDOM.BrowserRouter,
      Route = _ReactRouterDOM.Route,
      Redirect = _ReactRouterDOM.Redirect; // export default App;
  // eslint-disable-next-line
  // eslint-disable-next-line

  /* eslint-disable */
  // import React from 'react';
  //使用cdn加载react依赖包   
  //import logo from './logo.svg';
  // import './App.css';
  // const { render } = ReactDOM
  // function App() {
  // console.log(this)
  // console.log(window.myisactive1,window.  myisactive2)
  // window.myisactive1=true,window.  myisactive2=false

  var App =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      _classCallCheck(this, App);

      return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
    }

    _createClass(App, [{
      key: "componentWillMount",
      value: function componentWillMount() {// console.log('Component app WILL MOUNT!')
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        refreshall(); //  refreshall1()
        // $("#mynav1").click()
        //  console.log('Component app DID MOUNT!')
        // $("#mynav1").click()
        //  window.myisactive1=true,window.  myisactive2=false
        //  window.myisactive1?$("#mynav1").addClass("active"):$("#mynav1").removeClass("active")
        //  window.myisactive2?$("#mynav2").addClass("active"):$("#mynav2").removeClass("active")
        //  console.log(Apphome)
        //   console.log(this.props)
        //  console.log(this.props.props)
        //  console.log(this.props.props.props)
        //  console.log(this.props.props.props.props)
        //  console.log(this.props.props.props.props.props)
        //  console.log(this.props.onItemClick)
        //  console.log(this.props.props.onItemClick)
        //  console.log(this.props.props.props.onItemClick)
        //  console.log(this.props.props.props.props.onItemClick)
        //  console.log(this.props.props.props.props.props.onItemClick)
        //  this.props.onItemClick()
        //  render((            <Apphome />        ), document.getElementById('root'))
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(newProps) {//   console.log('Component app WILL RECEIVE PROPS!')
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(newProps, newState) {
        return true;
      }
    }, {
      key: "componentWillUpdate",
      value: function componentWillUpdate(nextProps, nextState) {//   console.log('Component app WILL UPDATE!');
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {//   console.log('Component app DID UPDATE!')
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {//    console.log('Component app WILL UNMOUNT!')
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement("div", {
          className: "App"
        }, React.createElement("header", {
          className: "App-header"
        }, React.createElement("div", {
          class: "container"
        }, React.createElement("div", {
          class: "jumbotron"
        }, React.createElement("h1", null, " \u6B22\u8FCE\u767B\u9646\u9875\u9762\uFF01 "), " ", React.createElement("p", null, " ", React.createElement("a", {
          href: "https://weibo.com/2174458781?/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1"
        }, "\u4E00\u751F\u5FFD\u800C\u5F97\u4E00\u590F\u5F53\u53F8\u638C\u597D\u5E74\u534E\u7684\u5FAE\u535A_\u5FAE\u535A ")), React.createElement("p", null, " ", React.createElement("a", {
          href: "https://github.com/masx200"
        }, " masx200\u7684github\u4E3B\u9875 "))), " "), " ", React.createElement("h1", null, " react - router\u6D4B\u8BD5 "), " ", React.createElement("h1", null, " Hello, world! "), " ", React.createElement("h2", null, " \u6B22\u8FCE\u6765\u5230\u4E3B\u9875 "), " ", React.createElement("p", null, "Edit ", React.createElement("code", null, " src / App.js "), " and save to reload. "), " ", React.createElement("p", {
          className: "App-intro"
        }, "\u4F60\u53EF\u4EE5\u5728 ", React.createElement("code", null, " src / App.js "), " \u6587\u4EF6\u4E2D\u4FEE\u6539\u3002 "), " ", React.createElement("a", {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "Learn React "), " ", React.createElement("h1", null, " Hello, world! "), " ", React.createElement("h2", null, " \u73B0\u5728\u662F ", new Date().toLocaleTimeString(), ". "), " "));
      }
    }]);

    return App;
  }(React.Component); // App.componentDidMount=()=> {
  //     window.myisactive1=true,window.  myisactive2=false
  // console.log("app-componentDidMount")
  // }
  // console.log(App.toString())
  // export default App;
  // export default about;
  // eslint-disable-next-line
  // eslint-disable-next-line

  /* eslint-disable */
  // import React from 'react';
  //使用cdn加载react依赖包   
  // import logo from './logo.svg';
  // import './App.css';
  // const { render } = ReactDOM
  // function about() {
  // console.log("hello")
  // logo='./logo.svg'


  var about =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(about, _React$Component2);

    function about() {
      _classCallCheck(this, about);

      return _possibleConstructorReturn(this, _getPrototypeOf(about).apply(this, arguments));
    }

    _createClass(about, [{
      key: "componentWillMount",
      value: function componentWillMount() {// console.log('Component about WILL MOUNT!')
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        // $("#mynav2").click()
        refreshall(); //  console.log('Component about DID MOUNT!')
        // refreshall2()
        //  window.myisactive2=true,window.  myisactive1=false
        //  window.myisactive1?$("#mynav1").addClass("active"):$("#mynav1").removeClass("active")
        //  window.myisactive2?$("#mynav2").addClass("active"):$("#mynav2").removeClass("active")
        //  render((            <Apphome />        ), document.getElementById('root'))
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(newProps) {//   console.log('Component about  WILL RECEIVE PROPS!')
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(newProps, newState) {
        return true;
      }
    }, {
      key: "componentWillUpdate",
      value: function componentWillUpdate(nextProps, nextState) {//   console.log('Component about  WILL UPDATE!');
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {//   console.log('Component about  DID UPDATE!')
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {//    console.log('Component about  WILL UNMOUNT!')
      }
    }, {
      key: "render",
      value: function render() {
        // window.myisactive2=true,window.  myisactive1=false
        return React.createElement("div", {
          className: "App"
        }, React.createElement("header", {
          className: "App-header"
        }, React.createElement("img", {
          src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NDEuOSA1OTUuMyI+CiAgICA8ZyBmaWxsPSIjNjFEQUZCIj4KICAgICAgICA8cGF0aCBkPSJNNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2LjlWNzhjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZWNzguNWMtOC40IDAtMTYgMS44LTIyLjYgNS42LTI4LjEgMTYuMi0zNC40IDY2LjctMTkuOSAxMzAuMS02Mi4yIDE5LjItMTAyLjcgNDkuOS0xMDIuNyA4Mi4zIDAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek00MjEuMiA0MzBjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek00MjAuNyAxNjNjOS4zIDkuNiAxOC42IDIwLjMgMjcuOCAzMi05LS40LTE4LjItLjctMjcuNS0uNy05LjQgMC0xOC43LjItMjcuOC43IDktMTEuNyAxOC4zLTIyLjQgMjcuNS0zMnptLTc0IDU4LjljLTQuOSA3LjctOS44IDE1LjYtMTQuNCAyMy43LTQuNiA4LTguOSAxNi0xMyAyNC01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOCAxMy4xLTMuMSAyNi45LTUuOCA0MS4yLTcuOXptLTkwLjUgMTI1LjJjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42IDAtMTUuNyAyMi45LTM1LjYgNTguMy01MC42IDguNi0zLjcgMTgtNyAyNy43LTEwLjEgNS43IDE5LjYgMTMuMiA0MCAyMi41IDYwLjktOS4yIDIwLjgtMTYuNiA0MS4xLTIyLjIgNjAuNi05LjktMy4xLTE5LjMtNi41LTI4LTEwLjJ6TTMxMCA0OTBjLTEzLjYtNy44LTE5LjUtMzcuNS0xNC45LTc1LjcgMS4xLTkuNCAyLjktMTkuMyA1LjEtMjkuNCAxOS42IDQuOCA0MSA4LjUgNjMuNSAxMC45IDEzLjUgMTguNSAyNy41IDM1LjMgNDEuNiA1MC0zMi42IDMwLjMtNjMuMiA0Ni45LTg0IDQ2LjktNC41LS4xLTguMy0xLTExLjMtMi43em0yMzcuMi03Ni4yYzQuNyAzOC4yLTEuMSA2Ny45LTE0LjYgNzUuOC0zIDEuOC02LjkgMi42LTExLjUgMi42LTIwLjcgMC01MS40LTE2LjUtODQtNDYuNiAxNC0xNC43IDI4LTMxLjQgNDEuMy00OS45IDIyLjYtMi40IDQ0LTYuMSA2My42LTExIDIuMyAxMC4xIDQuMSAxOS44IDUuMiAyOS4xem0zOC41LTY2LjdjLTguNiAzLjctMTggNy0yNy43IDEwLjEtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjkgOS4yLTIwLjggMTYuNi00MS4xIDIyLjItNjAuNiA5LjkgMy4xIDE5LjMgNi41IDI4LjEgMTAuMiAzNS40IDE1LjEgNTguMyAzNC45IDU4LjMgNTAuNi0uMSAxNS43LTIzIDM1LjYtNTguNCA1MC42ek0zMjAuOCA3OC40eiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQyMC45IiBjeT0iMjk2LjUiIHI9IjQ1LjciLz4KICAgICAgICA8cGF0aCBkPSJNNTIwLjUgNzguMXoiLz4KICAgIDwvZz4KPC9zdmc+Cg==",
          className: "App-logo",
          alt: "logo"
        }), React.createElement("h1", null, " react - router\u6D4B\u8BD5 "), " ", React.createElement("h2", null, " \u73B0\u5728\u662F ", new Date().toLocaleTimeString(), ". "), " ", React.createElement("h3", null, "React \u662F\u4E00\u4E2A\u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684 JAVASCRIPT \u5E93\u3002 ", React.createElement("br", null), "React\u4E3B\u8981\u7528\u4E8E\u6784\u5EFAUI\uFF0C \u5F88\u591A\u4EBA\u8BA4\u4E3A React \u662F MVC \u4E2D\u7684 V\uFF08 \u89C6\u56FE\uFF09\u3002 ", React.createElement("br", null), "React \u8D77\u6E90\u4E8E Facebook \u7684\u5185\u90E8\u9879\u76EE\uFF0C \u7528\u6765\u67B6\u8BBE Instagram \u7684\u7F51\u7AD9\uFF0C \u5E76\u4E8E 2013 \u5E74 5 \u6708\u5F00\u6E90\u3002 ", React.createElement("br", null), "React \u62E5\u6709\u8F83\u9AD8\u7684\u6027\u80FD\uFF0C \u4EE3\u7801\u903B\u8F91\u975E\u5E38\u7B80\u5355\uFF0C \u8D8A\u6765\u8D8A\u591A\u7684\u4EBA\u5DF2\u5F00\u59CB\u5173\u6CE8\u548C\u4F7F\u7528\u5B83\u3002 ", React.createElement("br", null), "React \u7279\u70B9 ", React.createElement("br", null), "1. \u58F0\u660E\u5F0F\u8BBE\u8BA1\u2212 React\u91C7\u7528\u58F0\u660E\u8303\u5F0F\uFF0C \u53EF\u4EE5\u8F7B\u677E\u63CF\u8FF0\u5E94\u7528\u3002 ", React.createElement("br", null), "2. \u9AD8\u6548\u2212 React\u901A\u8FC7\u5BF9DOM\u7684\u6A21\u62DF\uFF0C \u6700\u5927\u9650\u5EA6\u5730\u51CF\u5C11\u4E0EDOM\u7684\u4EA4\u4E92\u3002 ", React.createElement("br", null), "3. \u7075\u6D3B\u2212 React\u53EF\u4EE5\u4E0E\u5DF2\u77E5\u7684\u5E93\u6216\u6846\u67B6\u5F88\u597D\u5730\u914D\u5408\u3002 ", React.createElement("br", null), "4. JSX\u2212 JSX \u662F JavaScript \u8BED\u6CD5\u7684\u6269\u5C55\u3002 React \u5F00\u53D1\u4E0D\u4E00\u5B9A\u4F7F\u7528 JSX\uFF0C \u4F46\u6211\u4EEC\u5EFA\u8BAE\u4F7F\u7528\u5B83\u3002 ", React.createElement("br", null), "5. \u7EC4\u4EF6\u2212 \u901A\u8FC7 React \u6784\u5EFA\u7EC4\u4EF6\uFF0C \u4F7F\u5F97\u4EE3\u7801\u66F4\u52A0\u5BB9\u6613\u5F97\u5230\u590D\u7528\uFF0C \u80FD\u591F\u5F88\u597D\u7684\u5E94\u7528\u5728\u5927\u9879\u76EE\u7684\u5F00\u53D1\u4E2D\u3002 ", React.createElement("br", null), "6. \u5355\u5411\u54CD\u5E94\u7684\u6570\u636E\u6D41\u2212 React \u5B9E\u73B0\u4E86\u5355\u5411\u54CD\u5E94\u7684\u6570\u636E\u6D41\uFF0C \u4ECE\u800C\u51CF\u5C11\u4E86\u91CD\u590D\u4EE3\u7801\uFF0C \u8FD9\u4E5F\u662F\u5B83\u4E3A\u4EC0\u4E48\u6BD4\u4F20\u7EDF\u6570\u636E\u7ED1\u5B9A\u66F4\u7B80\u5355\u3002 "), " ", React.createElement("div", null, " ", React.createElement("p", null, "Edit ", React.createElement("code", null, " src / App.js "), " and save to reload. "), " ", React.createElement("a", {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "Learn React ")), " "));
      }
    }]);

    return about;
  }(React.Component); // export default about;


  window.myisactive1 = true;
  window.myisactive2 = true;

  if (window.location.hash == "#/") {
    window.myisactive1 = true;
    window.myisactive2 = false;
  } else if (window.location.hash == "#/about") {
    window.myisactive2 = true;
    window.myisactive1 = false;
  } else {
    window.myisactive1 = true;
    window.myisactive2 = false;
  } // var App,about;
  // App=  () =>import ('./modules/App')
  // about= () => import ( './modules/about')


  var Apphome =
  /*#__PURE__*/
  function (_React$Component3) {
    _inherits(Apphome, _React$Component3);

    function Apphome() {
      _classCallCheck(this, Apphome);

      return _possibleConstructorReturn(this, _getPrototypeOf(Apphome).apply(this, arguments));
    }

    _createClass(Apphome, [{
      key: "render",
      // construtor(props) {
      //     super(props);
      // }
      // updatemyfather() {
      //     console.log(" updatemyfather")
      // }
      value: function render() {
        return React.createElement(BrowserRouter, {
          basename: window.location.pathname + "#/",
          forceRefresh: false,
          keyLength: 12
        }, React.createElement("div", null, React.createElement("nav", {
          class: "navbar navbar-default",
          role: "navigation"
        }, React.createElement("div", {
          class: "container-fluid"
        }, React.createElement("div", {
          class: "navbar-header"
        }, React.createElement("a", {
          class: "navbar-brand "
        }, " masx200\u7684github "), " "), " ", React.createElement("div", null, React.createElement("ul", {
          class: "nav navbar-nav"
        }, React.createElement("li", {
          id: "mynav1",
          class: window.location.hash == "#/" ? "active" : ""
        }, React.createElement(Link, {
          to: "/"
        }, " \u57FA\u4E8EREACT\u7684\u4E3B\u9875 "), " "), React.createElement("li", {
          id: "mynav2",
          class: window.location.hash == "#/about" ? "active" : ""
        }, React.createElement(Link, {
          to: "/about"
        }, " \u5173\u4E8E "), " "), React.createElement("li", null, React.createElement("a", {
          href: "../index.html"
        }, " \u4F20\u7EDF\u7F51\u9875 "), " "), " ", React.createElement("li", null, React.createElement("a", {
          href: "../my-vue-router-project/index.html"
        }, " \u57FA\u4E8Evue\u7684\u4E3B\u9875 "), " "), " "), " "), " "), " "), React.createElement(Switch, null, React.createElement(Route, {
          exact: true,
          path: "/",
          component: App
        }), " ", React.createElement(Route, {
          path: "/about",
          component: about
        }), " ", React.createElement(Redirect, {
          from: "*",
          to: "/"
        })), " "), " ");
      }
    }, {
      key: "componentWillMount",
      value: function componentWillMount() {// console.log('Component WILL MOUNT!')
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {//  console.log('Component DID MOUNT!')
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(newProps) {//   console.log('Component WILL RECEIVE PROPS!')
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(newProps, newState) {
        return true;
      }
    }, {
      key: "componentWillUpdate",
      value: function componentWillUpdate(nextProps, nextState) {//   console.log('Component WILL UPDATE!');
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {//   console.log('Component DID UPDATE!')
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {//    console.log('Component WILL UNMOUNT!')
      }
    }]);

    return Apphome;
  }(React.Component); // const Apphome = () => 
  // (
  //     <BrowserRouter basename={window.location.pathname + "#/"} forceRefresh={false} keyLength={12}     >
  //         <div>
  //             <nav class="navbar navbar-default" role="navigation"  >
  //                 <div class="container-fluid">
  //                     <div class="navbar-header">
  //                         <a class="navbar-brand ">masx200的github</a>
  //                     </div>
  //                     <div>
  //                         <ul class="nav navbar-nav">
  //                             <li class={window.myisactive1 ? "active" : ""} onClick={refreshall1}>
  //                                 <Link to="/">基于REACT的主页</Link>
  //                             </li>
  //                             <li class={window.myisactive2 ? "active" : ""} onClick={refreshall2}>
  //                                 <Link to="/about">关于</Link>
  //                             </li>
  //                             <li>
  //                                 <a href="../index.html">传统网页</a>
  //                             </li>
  //                         </ul>
  //                     </div>
  //                 </div>
  //             </nav>
  //             <Switch>
  //                 {/* <Route exact path="/" component={App} />
  //                 <Route path="/about" component={about} /> */}
  //                 <Route exact path="/" component={App} />
  //                 <Route path="/about" component={about} />
  //                 <Redirect from='*' to='/' />
  //             </Switch>
  //         </div>
  //     </BrowserRouter>
  // )
  // refreshall1 = function () {
  //     // console.log(this.props.match.params)
  //     // console.log(window.location.hash)
  //     window.myisactive1 = true
  //     window.myisactive2 = false
  //     render((<Apphome />), document.getElementById('root'))
  //     // render((
  //     //     <Apphome />
  //     // ), document.getElementById('root'))
  //     // this.forceUpdate(); 
  //     // Apphome.forceUpdate(); 
  // }
  // refreshall2 = function () {
  //     // console.log(this.props.match.params)
  //     // console.log(window.location.hash)
  //     window.myisactive2 = true
  //     window.myisactive1 = false


  function refreshall() {
    render(React.createElement(Apphome, null), document.getElementById('root'));
  } //     render((<Apphome />), document.getElementById('root'))
  //     // Apphome.forceUpdate(); 
  //     // render((
  //     //     <Apphome />
  //     // ), document.getElementById('root'))
  //     // this.forceUpdate(); 
  // }
  // refreshall1 = refreshall1;


  render(React.createElement(Apphome, null), document.getElementById('root')); // refreshall2 = refreshall2;
  // window.apphome=Apphome
  // console.log( window.apphome.updatemyfather)
};

window.onload();
},{}],"C:/Users/ma/node_modules/.bin/node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "28633" + '/');

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
},{}]},{},["C:/Users/ma/node_modules/.bin/node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js","../my-react-router-test/index.js"], null)
//# sourceMappingURL=/my-react-router-test.9507a23c.js.map