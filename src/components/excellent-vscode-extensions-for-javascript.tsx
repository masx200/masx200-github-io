"use strict";

import React from "react";
//@ts-ignore
import markdwonurls from "../utils/markdownurls.ts";
//@ts-ignore
import Markdownreact from "./markdown-react/index.tsx";
var {
    useEffect,
    // , useState
} = React;
/* 把class组件改成function组件 */
const urlmark = markdwonurls["excellent-vscode-extensions-for-javascript"];

export default React.memo(component);

function component() {
    useEffect(function () {
        document.title =
            "masx200的github主页-" +
            `   excellent-vscode-extensions-for-javascript  适合于javascript/html/css/vue/reqct编程的vscode的优秀扩展推荐和vscode 的推荐设置 `;
    }, []);

    return (
        <div>
            <Markdownreact src={urlmark} />
        </div>
    );
}
