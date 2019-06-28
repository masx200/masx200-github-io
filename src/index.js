import "./index.css";
import "./markdown-react/github.css";
// import "./github.css";
// import "./新建文本文档.less";
// import "./新建文本文档.scss";
import("bootstrap");
import("./home-react-index-render.js");
import "./registerserviceworker";

// import("./vue-loader-test");
/* 全局开启剪切板复制功能 */
import("./clipboard.min.js").then(module => {
  const ClipboardJS = module.default;
  new ClipboardJS(".btn").on("success", function(e) {
    e.clearSelection();
  });
});

// (() => {
//     /* 不能跨域! */
//   /* 注册google的workbox的serviceworker */
//   /* DOMException
// code: 18
// message: "Failed to register a ServiceWorker: The origin of the provided scriptURL ('https://masx200.github.io') does not match the current origin ('http://localhost:18080')."
// name: "SecurityError" */
//   "serviceWorker" in navigator &&
//     window.addEventListener("load", function() {
//       navigator.serviceWorker.register(
//         "https://masx200.github.io/google-workbox/service-worker-google-workbox.min.js"
//       );
//     });
// })();

// import "clipboard.js/dist/clipboard";
// import "jquery";
// import "bootstrap/dist/css/bootstrap.css";
// import "./mui.css";
// import "./mui.min.js";

// import "./index.src.03a47b71.css.css";
// import "./indexcss.scss";
// import "./my-vue-router-project/huami-fp.scss";
// import "./decoder.index.scss";
// import "./hieroglyphy.index.scss";
// import "./jsfuck.index.scss";
// import "./JSfuck-and-hieroglyphy-Decoder-and-ENCODER.scss";

// import "./my-react-router-test/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/indexcss.scss";
/* 模块热替换(hot module replacement)
查看原文|编辑此页
如果已经通过 HotModuleReplacementPlugin 启用了模块热替换(Hot Module Replacement)，则它的接口将被暴露在 module.hot 属性下面。通常，用户先要检查这个接口是否可访问，然后再开始使用它。举个例子，你可以这样 accept 一个更新的模块：

if (module.hot) {
  module.hot.accept('./library.js', function() {
    // 使用更新过的 library 模块执行某些操作...
  })
}
支持以下方法……

accept */

// if (module.hot) {
//   console.log(module.hot.status());
// }

// import testjson from "./PingWest品玩-https___www.pingwest.com_feed-Sun_Jun_23_2019_16_30_22_GMT+0800_(GMT+08_00).json";
// console.log(testjson);
