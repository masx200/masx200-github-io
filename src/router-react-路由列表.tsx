"use strict";
import { Switch, Route } from "react-router-dom";
import React from "react";
var { lazy } = React;
export default React.memo(路由);
function 路由() {
    // @ts-ignore
    var home = lazy(() => import("./components/home-react-module-home.tsx"));
    var 路由list: [
        string,
        React.LazyExoticComponent<React.ComponentType<any>>
    ][] = [
        ["/", home],
        [
            "/picalc",
            // @ts-ignore
            lazy(() => import("./components/home-react-module-picalc")),
        ],

        [
            "/IMPORTCJSAMDUMD动态异步加载",
            // @ts-ignore
            lazy(() =>
                import(
                    // @ts-ignore
                    "./components/home-react-module-IMPORTCJSAMDUMD动态异步加载.tsx"
                )
            ),
        ],
        [
            "/react-home",
            // @ts-ignore
            lazy(() =>
                // @ts-ignore
                import(
                    // @ts-ignore
                    "./components/my-react-router-test/react-module-home.tsx"
                )
            ),
        ],
        [
            "/react-rssreader",
            lazy(() =>
                // @ts-ignore
                import(
                    "./components/my-react-router-test/react-module-rssreader.tsx"
                )
            ),
        ],
        [
            "/react-rssreader/:sitename",
            lazy(() =>
                // @ts-ignore
                import(
                    "./components/my-react-router-test/react-module-rssreader.tsx"
                )
            ),
        ],
        [
            "/react-about",
            lazy(() =>
                // @ts-ignore
                import(
                    "./components/my-react-router-test/react-module-about.js"
                )
            ),
        ],
        [
            "/decoder",
            lazy(() =>
                // @ts-ignore
                import(
                    "./components/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-decoder.tsx"
                )
            ),
        ],
        [
            "/jsfuck",
            lazy(() =>
                // @ts-ignore
                import(
                    "./components/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-jsfuck.tsx"
                )
            ),
        ],
        [
            "/hieroglyphy",
            lazy(() =>
                // @ts-ignore
                import(
                    "./components/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-hieroglyphy.tsx"
                )
            ),
        ],
        [
            "/react-huami",
            // @ts-ignore
            lazy(() => import("./components/home-react-module-huami.js")),
        ],
        [
            "/webpack-react-vue-spa-awesome-config",
            lazy(() =>
                // @ts-ignore
                import(
                    "./components/home-react-webpack-react-vue-spa-awesome-config.tsx"
                )
            ),
        ],
        [
            "/react-simple-global-state-store-hook",
            lazy(() =>
                // @ts-ignore
                import(
                    "./components/home-react-使用react hooks实现的简单全局状态管理 react-simple-global-state-store-hook.tsx"
                )
            ),
        ],
        [
            "/excellent-vscode-extensions-for-javascript",
            lazy(() =>
                // @ts-ignore
                import(
                    "./components/excellent-vscode-extensions-for-javascript.tsx"
                )
            ),
        ],
        [
            "/vue-simple-global-state-store-manager",
            lazy(() =>
                // @ts-ignore
                import("./components/vue-simple-global-state-store-manager.tsx")
            ),
        ],
        ["*", home],
    ];

    return (
        <Switch>
            {路由list.map((a, i) => (
                <Route exact path={a[0]} component={React.memo(a[1])} key={i} />
            ))}
        </Switch>
    );
}
