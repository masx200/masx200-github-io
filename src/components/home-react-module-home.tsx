import React, { useEffect, memo } from "react";
//@ts-ignore
import markdwonurls from "../utils/markdownurls.ts";

import Markdownreact from "./markdown-react/index";
const name = "masx200-github-io";
const markurl = markdwonurls["masx200-github-io"];
("use strict");

export default memo(function home() {
    useEffect(() => {
        /* 组件第一次加载时和每次组件刷新时会加载这个函数 */
        //location.hash = "#/";
        document.title = "masx200的github主页-" + "首页";
    }, []);
    return (
        <div>
            <Markdownreact src={markurl} name={name} />
        </div>
    );
});
