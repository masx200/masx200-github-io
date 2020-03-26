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
                amd 和 umd 模块为异步加载 promise 方法,使用 fetch
                方法来获取指定的模块包源代码 ， 可以把模块放入模块仓库中，
                并且解决了包之间的依赖关系，如果依赖包当中的 require
                函数需要，则在模块仓库中引入需要的模块包 定义了模块包的 define
                方法，require 方法，module.exports 对象和 exports 对象 `;
    }, []);

    return (
        <div>
            <Markdownreact src="https://masx200.github.io/importcjsamdumd/README.md" />
        </div>
    );
}
