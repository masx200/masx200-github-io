//@ts-ignore
import markdwonurls from "../utils/markdownurls.ts";
("use strict");

import React from "react";
//@ts-ignore
import Markdownreact from "./markdown-react/index.tsx";

/* 把class组件改成function组件 */
const urlmark = markdwonurls["vue-simple-global-state-store-manager"];

export default React.memo(component);

function component() {
    return (
        <div>
            <Markdownreact src={urlmark} />
        </div>
    );
}
