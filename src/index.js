if ("development" === process.env.NODE_ENV) {
    await import("react-hot-loader/patch");
}

import "./error-alert.js";
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

// @ts-ignore
import("./home-react-index-render.ts").then(({ default: Homeelement }) => {
    render(
        // @ts-ignore
        React.createElement(Homeelement),
        // React.createElement(React.memo(Apphome)),
        document.getElementById("root")
    );
});
