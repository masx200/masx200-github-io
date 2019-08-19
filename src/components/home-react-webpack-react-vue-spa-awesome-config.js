"use strict";
// eslint-disable-next-line no-unused-vars
import Markdownreact from "./markdown-react/index";
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
export default function component() {
  useEffect(() => {
    document.title =
      "masx200的github主页-" +
      "webpack-react-vue-spa-awesome-config 极速、零配置的 web 应用打包工具, 同时支持 react 和 vue 的单页面应用,提供开箱即用支持";
  }, []);
  return (
    <div>
      <Markdownreact src="https://masx200.github.io/webpack-react-vue-spa-awesome-config/README.md" />
    </div>
  );
}