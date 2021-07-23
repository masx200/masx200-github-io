import "./styles.js";
import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker";
import React from "react";
import { render } from "react-dom";

import "./error-alert.js";

//@ts-ignore
import { initloadingid } from "./initloadingid.ts";

//@ts-ignore
React["__esModule"] = true;
//@ts-ignore
React["default"] = React;

("use strict");
const rootele =
    document.getElementById("root") ||
    document.body.appendChild(document.createElement("div"));
Object.assign(rootele, { id: "root" });
if (!document.getElementById("app")) {
    rootele &&
        (rootele.innerHTML = `<div id=${initloadingid}>
<h1>loading</h1>
<span class="mui-spinner mui-spinner-custom">

</span></div>`);
}
window.addEventListener(
    "load",
    () => {
        import("clipboard").then((module) => {
            const ClipboardJS = module.default;

            new ClipboardJS(".btn").on("success", function (e) {
                // console.log(e);
                // console.info("Text:", e.text);

                e.clearSelection();
            });
        });
    },
    { once: true }
);

// @ts-ignore
import("./home-react-index-render.ts").then(({ default: Homeelement }) => {
    const container =
        document.getElementById("app") ||
        rootele.appendChild(document.createElement("div"));
    Object.assign(container, { id: "app" });
    rootele &&
        render(
            // @ts-ignore
            React.createElement(Homeelement),
            container
        );
});
