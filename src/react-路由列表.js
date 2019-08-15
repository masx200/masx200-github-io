"use strict";
import { Switch, Route } from "react-router-dom";
import React from "react";
var { lazy } = React;
export default 
React.memo(路由)
function 路由() {
  return (
    <Switch>
      {路由list.map((a, i) => (
        <Route exact path={a[0]} component={
React.memo(
a[1]
)
} key={i} />
      ))}
    </Switch>
  );
}
var home = lazy(() => import("./home-react-module-home.js"));

// var picalc = lazy(() => import("./home-react-module-picalc"));

// var 点击链接不跳转修改当前的网页地址动态加载网页内容不刷新 = lazy(() =>
//   import(
//     "./home-react-module-点击链接不跳转修改当前的网页地址动态加载网页内容不刷新.js"
//   )
// );
// var IMPORTCJSAMDUMD动态异步加载 = lazy(() =>
//   import("./home-react-module-IMPORTCJSAMDUMD动态异步加载.js")
// );

var 路由list = [
  ["/", home],
  ["/picalc", lazy(() => import("./home-react-module-picalc"))],
  [
    "/点击链接不跳转修改当前的网页地址动态加载网页内容不刷新",
    lazy(() =>
      import(
        "./home-react-module-点击链接不跳转修改当前的网页地址动态加载网页内容不刷新.js"
      )
    )
  ],
  [
    "/IMPORTCJSAMDUMD动态异步加载",
    lazy(() => import("./home-react-module-IMPORTCJSAMDUMD动态异步加载.js"))
  ],
  [
    "/react-home",
    lazy(() => import("./my-react-router-test/react-module-home.js"))
  ],
  [
    "/react-rssreader",
    lazy(() => import("./my-react-router-test/react-module-rssreader.js"))
  ],
  [
    "/react-rssreader/:sitename",
    lazy(() => import("./my-react-router-test/react-module-rssreader.js"))
  ],
  [
    "/react-about",
    lazy(() => import("./my-react-router-test/react-module-about.js"))
  ],
  [
    "/decoder",
    lazy(() =>
      import(
        "./JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-decoder"
      )
    )
  ],
  [
    "/jsfuck",
    lazy(() =>
      import("./JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-jsfuck")
    )
  ],
  [
    "/hieroglyphy",
    lazy(() =>
      import(
        "./JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-hieroglyphy.js"
      )
    )
  ],
  ["/react-huami", lazy(() => import("./home-react-module-huami.js"))],
  [
    "/webpack-react-vue-spa-awesome-config",
    lazy(() => import("./home-react-webpack-react-vue-spa-awesome-config.js"))
  ],
  [
    "/react-simple-global-state-store-hook",
    lazy(() =>
      import(
        "./home-react-使用react hooks实现的简单全局状态管理 react-simple-global-state-store-hook"
      )
    )
  ],
  [
    "/excellent-vscode-extensions-for-javascript",
    lazy(() => import("./excellent-vscode-extensions-for-javascript"))
  ],
  ["*", home]
];

// {
//   /* <Route exact path="/" component={home} />
//       <Route exact path="/picalc" component={picalc} />
//       <Route
//         exact
//         path="/点击链接不跳转修改当前的网页地址动态加载网页内容不刷新"
//         component={点击链接不跳转修改当前的网页地址动态加载网页内容不刷新}
//       />
//       <Route
//         exact
//         path="/IMPORTCJSAMDUMD动态异步加载"
//         component={IMPORTCJSAMDUMD动态异步加载}
//       />
//       <Route
//         exact
//         path="/react-home"
//         component={lazy(() =>
//           import("./my-react-router-test/react-module-home.js")
//         )}
//       />
//       <Route
//         exact
//         path="/react-rssreader"
//         component={lazy(() =>
//           import("./my-react-router-test/react-module-rssreader.js")
//         )}
//       />
//       <Route
//         exact
//         path="/react-rssreader/:sitename"
//         component={lazy(() =>
//           import("./my-react-router-test/react-module-rssreader.js")
//         )}
//       />
//       <Route
//         exact
//         path="/react-about"
//         component={lazy(() =>
//           import("./my-react-router-test/react-module-about.js")
//         )}
//       />
//       <Route
//         exact
//         path="/decoder"
//         component={lazy(() =>
//           import(
//             "./my-react-router-test/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-decoder"
//           )
//         )}
//       />
//       <Route
//         exact
//         path="/jsfuck"
//         component={lazy(() =>
//           import(
//             "./my-react-router-test/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-jsfuck"
//           )
//         )}
//       />
//       <Route
//         exact
//         path="/hieroglyphy"
//         component={lazy(() =>
//           import(
//             "./my-react-router-test/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-hieroglyphy.js"
//           )
//         )}
//       />
//       <Route
//         exact
//         path="/react-huami"
//         component={lazy(() => import("./home-react-module-huami.js"))}
//       />
//       <Route
//         exact
//         path="/webpack-react-vue-spa-awesome-config"
//         component={lazy(() =>
//           import("./home-react-webpack-react-vue-spa-awesome-config.js")
//         )}
//       />

//       {/* <Route
//       //   exact
//       path="/markdown/:url"
//       component={lazy(() =>
//         import("./component-react-动态路由markdown")
//       )}
//     /> */
// }
// {
//   /* <Route
//         exact
//         path="/react-simple-global-state-store-hook"
//         component={lazy(() =>
//           import(
//             "./home-react-使用react hooks实现的简单全局状态管理 react-simple-global-state-store-hook"
//           )
//         )}
//       />
//       <Route exact path="*" component={home} /> */
// }
// {
//   (" ");
// }
// //*/
// {
//   /* //} */
// }
