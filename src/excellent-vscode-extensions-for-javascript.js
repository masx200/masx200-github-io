"use strict";
// eslint-disable-next-line no-unused-vars
import Markdownreact from "./markdown-react/index";

// var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
import React from "react";
var { useEffect } = React;
/* 把class组件改成function组件 */
export default function component() {
  useEffect(function() {
    document.title =
      "masx200的github主页-" +
      `   excellent-vscode-extensions-for-javascript  适合于javascript/html/css/vue/reqct编程的vscode的优秀扩展推荐和vscode 的推荐设置 `;
  }, []);

  return (
    <div>
      <Markdownreact src="https://masx200.github.io/excellent-vscode-extensions-for-javascript/README.md" />
    </div>
  );
}
