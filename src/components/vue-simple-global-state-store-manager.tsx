"use strict";

import React from "react";
import Markdownreact from "./markdown-react/index.tsx";

/* 把class组件改成function组件 */
const urlmark =
    "https://masx200.github.io/vue-simple-global-state-store-manager/README.md";
export default React.memo(component);

function component() {
    return (
        <div>
            <Markdownreact src={urlmark} />
        </div>
    );
}
