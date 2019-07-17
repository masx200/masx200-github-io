"use strict";
import 路由列表 from "./react-路由列表";
// import { AnimatedSwitch } from "react-router-transition";
// import IMPORTCJSAMDUMD from "./importcjsamdumd";
// const IMPORTCJSAMDUMD = require("./importcjsamdumd");
// import "./App.css";
// import ReactRouterDOM from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
// var createElement = React.createElement;
var { render } = ReactDOM;
var { Suspense } = React;
var { useEffect, useState } = React;
import $ from "jquery";
// import "./RegisteraServiceWorkerFile.js";
// import "./myindexrender.css";
// import "./my-vue-router-project/vue-render-all.css";
import { Link, HashRouter } from "react-router-dom";

function 可变路径的rssreader链接() {
  const [rsssitename, setrsssitename] = useState("");
  useEffect(() => {
    window.addEventListener(
      "hashchange",

      () => {
        switch (location.hash) {
          case "#/react-rssreader/iplaysoft":
          case "#/react-rssreader/tmtpost":
          case "#/react-rssreader/landiannews":
          case "#/react-rssreader/ithome":
          case "#/react-rssreader/ifanr":
          case "#/react-rssreader/pingwest":
            setrsssitename(location.hash.slice("#/react-rssreader".length));
            break;

          default:
            break;
        }
      }
    );
  }, []);

  /* $(window).on("hashchange", () => {
    switch (location.hash) {
      case "#/react-rssreader/iplaysoft":
      case "#/react-rssreader/tmtpost":
      case "#/react-rssreader/landiannews":
      case "#/react-rssreader/ithome":
      case "#/react-rssreader/ifanr":
      case "#/react-rssreader/pingwest":
        setrsssitename(location.hash.slice("#/react-rssreader".length));
        break;

      default:
        break;
    }
  //  /*  */
  // }

  //);*/
  return (
    <Link
      to={"/react-rssreader" + rsssitename}
      class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
    >
      rss阅读
    </Link>
  );
}

// import Switch from "react-router-dom/Switch";
// import Route from "react-router-dom/Route";
// import HashRouter from "react-router-dom/HashRouter";
// import {
//   // ReactRouterDOM
//   // ,
//   Link,
//   Switch,
//   // BrowserRouter,
//   Route,
//   // Redirect,
//   HashRouter
// } from "react-router-dom";
// const jQuery = $;
const scrollTo = window.scrollTo;
// import"./my-react-router-test/react-index-render.css"
// import IMPORTCJSAMDUMD from "./IMPORTCJSAMDUMD";
// import myreacthtml from "./my-react-router-test/index.html";
// console.log(myreacthtml)
// import myvuehtml from "./my-vue-router-project/index.html";
// console.log(myreacthtml, myvuehtml);
// import "https://cdn.staticfile.org/mui/3.7.1/css/mui.min.css";
// ("use strict");
// if (process.env.NODE_ENV === "production") {
//   var Reacturl =
//     "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js";
//   var Reactdomurl =
//     "https://cdn.staticfile.org/react-dom/16.9.0-alpha.0/umd/react-dom.production.min.js";
//   var Reactrouterdomurl =
//     "https://cdn.staticfile.org/react-router-dom/5.0.1/react-router-dom.min.js";
// } else {
//   var Reacturl =
//     "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.development.js";
//   var Reactdomurl =
//     "https://cdn.staticfile.org/react-dom/16.9.0-alpha.0/umd/react-dom.development.js";
//   var Reactrouterdomurl =
//     "https://cdn.staticfile.org/react-router-dom/5.0.1/react-router-dom.js";
// }
/* function addlinkprefetch(url) {
  var linkmarkdwon = document.createElement("link");
  linkmarkdwon.rel = "prefetch";
  linkmarkdwon.href = url;
  document.head.appendChild(linkmarkdwon);
}
var prefetchfiles = [
  "./home-react-module-home.js",
  "./home-react-module-picalc.js",
  "./home-react-module-点击链接不跳转修改当前的网页地址动态加载网页内容不刷新.js",
  "./home-react-module-IMPORTCJSAMDUMD动态异步加载.js",
  "./my-react-router-test/react-module-home.js",
  "./my-react-router-test/react-module-rssreader.js",
  "./my-react-router-test/react-module-about.js",
  "./my-react-router-test/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-decoder.js",
  "./my-react-router-test/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-jsfuck.js",
  "./my-react-router-test/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-hieroglyphy.js"
];
prefetchfiles.forEach(addlinkprefetch); */
// import("./IMPORTCJSAMDUMD.js").then(IMPORTCJSAMDUMD => {
//   var IMPORTCJSAMDUMD = module1;
(() => {
  "use strict";
  $(window).one("load", () => {
    /* 当页面加载完成时再加载css */
    // jQuery(`<style/>`)
    //   .text(
    //     `${[
    //       "https://cdn.staticfile.org/mui/3.7.1/css/mui.min.css",
    //       "https://github.githubassets.com/assets/frameworks-a2fba223d5af91496cac70d4ec3624df.css",
    //       "https://github.githubassets.com/assets/github-6556dfa9be535e551ffffaadfecdad99.css",
    //       "https://cdn.staticfile.org/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
    //     ].map(u => `\n @import '${u}';\n`)}`.replace(/,/g, "")
    //   )
    //   .appendTo(document.head);
    //   ${/* @import "https://cdn.staticfile.org/mui/3.7.1/css/mui.min.css";

    //   @import "https://github.githubassets.com/assets/frameworks-a2fba223d5af91496cac70d4ec3624df.css";
    //   @import "https://github.githubassets.com/assets/github-6556dfa9be535e551ffffaadfecdad99.css";
    //   @import "https://cdn.staticfile.org/twitter-bootstrap/4.3.1/css/bootstrap.min.css"; */}
    function onhashchange() {
      scrollTo(0, 0);
      $("#example-navbar-collapse").removeClass("show");
      // $("#collapsibleNavbar").removeClass("show");
      $("#my主体").css("padding-top", $("#my导航栏").height());
    }
    $(window).on("hashchange", onhashchange);

    var haverun = 0;
    herewindowonload();
    function herewindowonload() {
      if (haverun == 0) {
        haverun = 1;

        // IMPORTCJSAMDUMD(
        //   [
        //     //   "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js",
        //     //   "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.development.js",
        //     Reacturl,
        //     "react"
        //   ],
        //   [
        //     //   "https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js",
        //     //   "https://cdn.staticfile.org/react-dom/16.9.0-alpha.0/umd/react-dom.development.js",
        //     Reactdomurl,
        //     "react-dom"
        //   ],
        //   [
        //     //   "https://cdn.staticfile.org/react-router-dom/5.0.0/react-router-dom.min.js",
        //     //   "https://cdn.staticfile.org/react-router-dom/5.0.1/react-router-dom.js",
        //     Reactrouterdomurl,
        //     "react-router-dom"
        //   ]
        // ).then(myonloadfunc);
        myonloadfunc();
      } else {
        console.log("不要重复运行此onload函数");
      }
    }

    function myonloadfunc() {
      //   var React = reactmodulearray[0].default;
      //   var ReactDOM = reactmodulearray[1].default;
      //   var ReactRouterDOM = reactmodulearray[2].default;

      //   var {
      //     Link,
      //     Switch,
      //     // BrowserRouter,
      //     Route,
      //     // Redirect,
      //     HashRouter
      //   } = ReactRouterDOM;

      // var h = React.createElement;

      function Apphome() {
        function shouqi收起折叠的导航栏菜单() {
          $("#example-navbar-collapse").removeClass("show");
          $("#my主体").css("padding-top", $("#my导航栏").height());
          // refreshall();
          scrollTo(0, 0);
        }
        useEffect(() => {
          $("#my主体").css("padding-top", $("#my导航栏").height());
          document.title = "masx200的github主页";
        }, []);
        return (
          <HashRouter>
            <div>
              <div class="container-fluid fixed-top" id="my导航栏">
                <nav
                  class="navbar navbar-default navbar navbar-expand-sm bg-light navbar-light"
                  role="navigation"
                >
                  <div>
                    <Link
                      class="navbar-brand mui-btn mui-btn-primary mui-btn-outlined"
                      to="/"
                    >
                      masx200的
                      <hr
                        id="hidewidthless500"
                        // style={{ display: innerWidth > 500 ? "block" : "none" }}
                        /* 改为css媒体查询 */
                      />
                      github主页
                    </Link>

                    <button
                      class="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#example-navbar-collapse"
                    >
                      <span class="navbar-toggler-icon" />
                    </button>
                  </div>
                  <div
                    class="collapse navbar-collapse"
                    id="example-navbar-collapse"
                  >
                    <ul
                      class="nav navbar-nav"
                      id="allnavbar"
                      onClick={() => {
                        shouqi收起折叠的导航栏菜单();
                      }}
                    >
                      <li
                        id="mynav1"
                        // class={window.location.hash == "#/" ? "active" : ""}
                      >
                        <Link
                          to="/react-home"
                          class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                        >
                          基于REACT的主页
                        </Link>
                      </li>
                      <li
                      // class={
                      //   window.location.hash == "#/rssreader"
                      //     ? "active"
                      //     : ""
                      // }
                      >
                        <可变路径的rssreader链接 />
                      </li>
                      <li
                        id="mynav2"
                        // class={
                        //   window.location.hash == "#/about" ? "active" : ""
                        // }
                      >
                        <Link
                          to="/react-about"
                          class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                        >
                          关于REACT
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          to="/picalc"
                          class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                        >
                          圆周率计算多线程
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/react-huami"
                          // href="./my-vue-router-project/index.html#/huami"
                          class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                        >
                          花密网页版
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/decoder"
                          class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                        >
                          JSfuck-and-hieroglyphy-Decoder
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/jsfuck"
                          class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                        >
                          JSfuck-ENCODER
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/hieroglyphy"
                          class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                        >
                          hieroglyphy-ENCODER
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/webpack-react-vue-spa-awesome-config"
                          // href="./my-vue-router-project/index.html#/huami"
                          class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                        >
                          webpack-react-vue- 极速零配置的单页面 web 应用打包工具
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          to="/点击链接不跳转修改当前的网页地址动态加载网页内容不刷新"
                          class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                        >
                          点击链接不跳转-修改当前的网页地址-动态加载网页内容不刷新
                        </Link>
                      </li>

                      <li class="nav-item">
                        <Link
                          to="/IMPORTCJSAMDUMD动态异步加载"
                          class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                        >
                          动态异步加载-commonjs和umd和amd模块库
                        </Link>
                      </li>

                      {/* http://localhost:1234/my-vue-router-project/index.html#/about */}
                      {/* <li
                            id="mynav1"
                            //   class={window.location.hash == "#/" ? "active" : ""}
                          >
                            <a
                                href="./my-react-router-test/index.html"
                            //   href={myreacthtml}
                              class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                            >
                              基于REACT的主页
                            </a>
                          </li> */}

                      {/* <li>
                            <a
                              class="nav-item"
                                href="./my-react-router-test/index.html#/decoder"
                            //   href={myreacthtml + "#/decoder"}
                              class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                            >
                              JSfuck-and-hieroglyphy-Decoder-and-ENCODER
                            </a>
                          </li> */}
                      <li class="nav-item">
                        <Link
                          to="/react-simple-global-state-store-hook"
                          class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                        >
                          React 极简全局状态管理库
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          to="/excellent-vscode-extensions-for-javascript"
                          class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                        >
                          VScode的优秀扩展推荐
                        </Link>
                      </li>
                      <li>
                        <a
                          href="./my-vue-router-project/index.html"
                          class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                        >
                          基于vue的主页
                        </a>
                      </li>
                      <li>
                        <a
                          href="./my-vue-router-project/index.html#/about"
                          class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                        >
                          关于Vue
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div class="container" id="my主体">
                <Suspense
                  fallback={
                    <div>
                      <h1>loading</h1>
                      <span class="mui-spinner mui-spinner-custom" />
                      {/* loading转圈图标 */}
                    </div>
                  }
                >
                  {/* <Switch> */}
                  {/* <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                  > */}

                  {/* </AnimatedSwitch> */}

                  <路由列表 />
                </Suspense>
              </div>
            </div>
          </HashRouter>
        );
      }

      //   exports.forcerefreshall = () => {
      //     render(<div />, document.getElementById("root"));
      //     refreshall();
      //   };
      //   exports.default = Apphome;
      function refreshall() {
        render(<Apphome />, document.getElementById("root"));
        scrollTo(0, 0);
        //   $("#collapsibleNavbar").removeClass("show");
        $("#example-navbar-collapse").removeClass("show");
        // console.log(<Apphome />);
      }
      refreshall();
    }
  });
})();
// });
