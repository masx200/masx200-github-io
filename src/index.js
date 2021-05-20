
import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker";
import React from "react";
import { render } from "react-dom";
import "./assetscss/masx200-main.0b9ca398071be6517552.css";
import "./error-alert.js";
import "./juejin-highlight-markdown-0.c4305b077afc652cb76a.css";
import "./pre-wrap.css";
import "./样式.css";



React["__esModule"] = true;
React["default"] = React;

("use strict");

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
