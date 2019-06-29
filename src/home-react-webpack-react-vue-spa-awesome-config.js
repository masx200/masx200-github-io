import Markdownreact from "./markdown-react/index";
import React, { useEffect, useState, useRef } from "react";
export default function() {
  useEffect(() => {
    document.title =
      "webpack-react-vue-spa-awesome-config 极速、零配置的 web 应用打包工具, 同时支持 react 和 vue 的单页面应用,提供开箱即用支持";
  }, []);
  return (
    <div>
      <Markdownreact src="https://masx200.github.io/webpack-react-vue-spa-awesome-config/README.md" />
    </div>
  );
}
