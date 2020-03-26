"use strict";
// eslint-disable-next-line no-unused-vars
import Markdownreact from "./markdown-react/index.tsx";
import $ from "jquery";

import React from "react";
// var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
var { useEffect } = React;
export default function 点击链接不跳转修改当前的网页地址动态加载网页内容不刷新() {
    useEffect(function componentDidMount() {
        document.title =
            "masx200的github首页-" +
            "点击链接不跳转修改当前的网页地址动态加载网页内容不刷新";
        (() => {
            $("#my主体").css("padding-top", $("#my导航栏").height() || 0);
        })();
    }, []);
    //   render() {
    return (
        <div>
            <Markdownreact src="https://masx200.github.io/src/README.md" />
        </div>
        
    );
}
