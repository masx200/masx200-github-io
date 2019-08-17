/* eslint-disable react/prop-types */
"use strict";
import Apphome from "./react-apphome";
// import { AnimatedSwitch } from "react-router-transition";
// import IMPORTCJSAMDUMD from "./importcjsamdumd";
// const IMPORTCJSAMDUMD = require("./importcjsamdumd");
// import "./App.css";
// import ReactRouterDOM from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
// var createElement = React.createElement;
var { render } = ReactDOM;
import $ from "jquery";
// import "./RegisteraServiceWorkerFile.js";
// import "./myindexrender.css";
// import "./my-vue-router-project/vue-render-all.css";
//import * as reactrouterdom from "react-router-dom"; // } //   HashRouter //   // Link, // , {

// function Link(props) {
//   var Oldlink = reactrouterdom.Link;
//   return (
//     <Oldlink
//       {...props}
//       className={
//         props.class
//           ? props.class
//           : "" + " " + props.className
//           ? props.className
//           : ""
//       }
//     />
//   );
// }

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
  $(() => {
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
      $("#example-navbar-collapse").hide(); //$(example_navbar_collapse.current).removeClass("show");
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

      //   exports.forcerefreshall = () => {
      //     render(<div />, document.getElementById("root"));
      //     refreshall();
      //   };
      //   exports.default = Apphome;
      function refreshall() {
        try {
          render(
            React.createElement(React.memo(Apphome)),

            document.getElementById("root")
          );
        } catch (error) {
          console.error(error);
          //   setTimeout(() => {
          //     refreshall();
          //   }, 500);
        }

        scrollTo(0, 0);
        //   $("#collapsibleNavbar").removeClass("show");
        $("#example-navbar-collapse").hide(); //$(example_navbar_collapse.current).removeClass("show");
        // console.log(<Apphome />);
      }
      refreshall();
    }
  });
})();
// });
window.addEventListener("resize", () => {
  requestAnimationFrame(() => {
    $("#my主体").css("padding-top", $("#my导航栏").height());
  });
});
