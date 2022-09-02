// eslint-disable-next-line no-unused-vars
import React, { memo, useEffect } from "react";

//@ts-ignore
import markdwonurls from "../utils/markdownurls";
// eslint-disable-next-line no-unused-vars
//@ts-ignore
import Markdownreact from "./markdown-react/index";

("use strict");

const markurl = markdwonurls["webpack-react-vue-spa-awesome-config"];
const name = "webpack-react-vue-spa-awesome-config";
export default memo(function component() {
    useEffect(() => {
        document.title =
            "webpack-react-vue-spa-awesome-config 极速、零配置的 web 应用打包工具, 同时支持 react 和 vue 的单页面应用,提供开箱即用支持";
    }, []);
    return (
        <div>
            <Markdownreact src={markurl} name={name} />
        </div>
    );
});
