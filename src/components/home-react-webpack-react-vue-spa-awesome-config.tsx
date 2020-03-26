// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import markdwonurls from "../utils/markdownurls.ts";
// eslint-disable-next-line no-unused-vars
import Markdownreact from "./markdown-react/index.tsx";

"use strict";

const markurl = markdwonurls["webpack-react-vue-spa-awesome-config"];
export default function component() {
    useEffect(() => {
        document.title =
            "masx200的github主页-" +
            "webpack-react-vue-spa-awesome-config 极速、零配置的 web 应用打包工具, 同时支持 react 和 vue 的单页面应用,提供开箱即用支持";
    }, []);
    return (
        <div>
            <Markdownreact src={markurl} />
        </div>
    );
}
