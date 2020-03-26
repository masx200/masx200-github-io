"use strict";
// eslint-disable-next-line no-unused-vars
import Markdownreact from "./markdown-react/index.tsx";

// var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
import React from "react";
var { useEffect } = React;
/* 把class组件改成function组件 */
export default function IMPORTCJSAMDUMD动态异步加载() {
    useEffect(function componentDidMount() {
        document.title =
            "masx200的github主页-" +
            `    IMPORTCJSAMDUMD | 动态异步加载 commonjs 和 umd 和 amd 模块 ,包装 cjs 和
                amd 和 umd 模块`;
    }, []);

    return (
        <div>
            <Markdownreact src="https://masx200.github.io/importcjsamdumd/README.md" />
        </div>
    );
}
