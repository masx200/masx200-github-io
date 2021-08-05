import React from "react";
//@ts-ignore
import markdwonurls from "../utils/markdownurls.ts";
//@ts-ignore

//@ts-ignore
// import tanchu弹出消息通用 from "@/utils/my弹出消息通用";
// eslint-disable-next-line no-unused-vars
import Markdownreact from "./markdown-react/index.tsx";

const markurl = markdwonurls["masx200-github-io"];
("use strict");

// const location = window.location;
var { useEffect } = React;

export default function home() {
    useEffect(() => {
        /* 组件第一次加载时和每次组件刷新时会加载这个函数 */
        //location.hash = "#/";
        document.title = "masx200的github主页-" + "首页";
    }, []);
    return (
        <div>
            <Markdownreact src={markurl} />
        </div>
    );
}
