import React from "react";
/* if (!React["memo"]) {
  React["memo"] = a => a;
} */

React["__esModule"] = true;
React["default"] = React;
// console.log(React);
/* import "./index.css";
import "./markdown-react/github.css";
import "./markdown-react/padding0.css";
import "./hidewidthless500.css"; */
// import "./github.css";
// import "./新建文本文档.less";
// import "./新建文本文档.scss";
import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker";
import { render } from "react-dom";
import "./assetscss/masx200-main.0b9ca398071be6517552.css";
/* import {
  // useGlobalStore,
  initGlobalState
} from "react-simple-global-state-store-hook";

// var initaaaaaaaaaaaa =
initGlobalState({
  testnumber: String(22418 * 99999) + Math.random(),
  testname: "使用React全局状态管理" + Math.random()
}); */
import "./juejin-highlight-markdown-0.c4305b077afc652cb76a.css";
import "./pre-wrap.css";
import "./样式.css";

("use strict");
// import "webpack-react-vue-spa-awesome-config/ie11babelpolyfill";
document.getElementById("root").innerHTML = `<div>
<h1>loading</h1>
<span class="mui-spinner mui-spinner-custom">

</span></div>`;

// import("./vue-loader-test");
/* 全局开启剪切板复制功能 */
window.addEventListener(
    "load",
    () => {
        //   import("bootstrap");

        import("./assetsjs/clipboard").then((module) => {
            //   console.log(module);
            const ClipboardJS = module.default;
            //   var clip =
            new ClipboardJS(".btn").on("success", function (e) {
                console.log(e);
                console.info("Text:", e.text);
                //   if (!e.text) {
                //     console.log("复制内容空");
                //   } else {
                //     //   console.info("Action:", e.action);
                //     console.info("Text:", e.text);
                //   }
                //   console.info("Text:", e.text);
                e.clearSelection();
            });
            //   console.log(clip);
        });
    },
    { once: true }
);

import("./home-react-index-render.ts").then(({ default: Homeelement }) => {
    render(
        // @ts-ignore
        React.createElement(Homeelement),
        // React.createElement(React.memo(Apphome)),
        document.getElementById("root")
    );
});

// (() => {
//     /* 不能跨域! */
//   /* 注册google的workbox的serviceworker */
//   /* DOMException
// code: 18
// message: "Failed to register a ServiceWorker: The origin of the provided scriptURL ('https://masx200.github.io') does not match the current origin ('http://localhost:18080')."
// name: "SecurityError" */
//   "serviceWorker" in navigator &&
//     window.addEventListener("load", function() {
//       navigator.serviceWorker.register(
//         "https://masx200.github.io/google-workbox/service-worker-google-workbox.min.js"
//       );
//     });
// })();
// import "clipboard.js/dist/clipboard";
// import "jquery";
// import "bootstrap/dist/css/bootstrap.css";
// import "./mui.css";
// import "./mui.min.js";
// import "./index.src.03a47b71.css.css";
// import "./indexcss.scss";
// import "./my-vue-router-project/huami-fp.scss";
// import "./decoder.index.scss";
// import "./hieroglyphy.index.scss";
// import "./jsfuck.index.scss";
// import "./JSfuck-and-hieroglyphy-Decoder-and-ENCODER.scss";
// import "./my-react-router-test/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/indexcss.scss";
/* 模块热替换(hot module replacement)
查看原文|编辑此页
如果已经通过 HotModuleReplacementPlugin 启用了模块热替换(Hot Module Replacement)，则它的接口将被暴露在 module.hot 属性下面。通常，用户先要检查这个接口是否可访问，然后再开始使用它。举个例子，你可以这样 accept 一个更新的模块：

if (module.hot) {
  module.hot.accept('./library.js', function() {
    // 使用更新过的 library 模块执行某些操作...
  })
}
支持以下方法……

accept */
// if (module.hot) {
//   console.log(module.hot.status());
// }
// import testjson from "./PingWest品玩-https___www.pingwest.com_feed-Sun_Jun_23_2019_16_30_22_GMT+0800_(GMT+08_00).json";
// console.log(testjson);

/* React Hot Loader v4:

// App.js
import React from 'react';
import { hot } from 'react-hot-loader';

const App = () => <div>Hello world!</div>;

export default hot(module)(App);
// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

ReactDOM.render(<App />, document.getElementById('root')); */
