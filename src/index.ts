import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker";
import React from "react";
import { render } from "react-dom";
import "./assetscss/masx200-main.0b9ca398071be6517552.css";
import "./error-alert.js";
import "./juejin-highlight-markdown-0.c4305b077afc652cb76a.css";
import "./pre-wrap.css";
import "./样式.css";
import { initloadingid } from "./initloadingid.ts";
React["__esModule"] = true;
React["default"] = React;

("use strict");

document.getElementById("root").innerHTML = `<div id=${initloadingid}>
<h1>loading</h1>
<span class="mui-spinner mui-spinner-custom">

</span></div>`;

window.addEventListener(
    "load",
    () => {
        import("clipboard").then((module) => {
            const ClipboardJS = module.default;

            new ClipboardJS(".btn").on("success", function (e) {
                console.log(e);
                console.info("Text:", e.text);

                e.clearSelection();
            });
        });
    },
    { once: true }
);

// @ts-ignore
import("./home-react-index-render.ts").then(({ default: Homeelement }) => {
    render(
        // @ts-ignore
        React.createElement(Homeelement),

        document
            .getElementById("root")
            .appendChild(document.createElement("div"))
    );
});
