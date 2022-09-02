"use strict";

import React, { useEffect } from "react";

//@ts-ignore
import markdwonurls from "../utils/markdownurls";
//@ts-ignore
import Markdownreact from "./markdown-react/index";

/* 把class组件改成function组件 */
const name = "excellent-vscode-extensions-for-javascript";
const urlmark = markdwonurls["excellent-vscode-extensions-for-javascript"];

export default React.memo(component);

function component() {
    useEffect(function () {
        document.title = `   excellent-vscode-extensions-for-javascript  适合于javascript/html/css/vue/reqct编程的vscode的优秀扩展推荐和vscode 的推荐设置 `;
    }, []);

    return (
        <div>
            <Markdownreact src={urlmark} name={name} />
        </div>
    );
}
