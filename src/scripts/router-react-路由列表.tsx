"use strict";

import React, { ComponentType, lazy } from "react";

import { View } from "./router";

export default React.memo(路由);
const picalc = lazy(() => import("../components/home-react-module-picalc"));
// @ts-ignore
var myhome = lazy(() => import("../components/home-react-module-home.tsx"));
var rsscomponent = lazy(
    // @ts-ignore
    () => import("../rssreader/react-module-rssreader.tsx")
);
const reacthome = lazy(
    () =>
        // @ts-ignore
        import(
            // @ts-ignore
            "../components/my-react-router-test/react-module-home.tsx"
        )
);
const reactabout = lazy(
    () =>
        // @ts-ignore
        import(
            // @ts-ignore
            "../components/my-react-router-test/react-module-about"
        )
);
const decoder = lazy(
    () =>
        // @ts-ignore
        import(
            // @ts-ignore
            "../components/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-decoder.tsx"
        )
);
const jsfuck = lazy(
    () =>
        // @ts-ignore
        import(
            // @ts-ignore
            "../components/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-jsfuck.tsx"
        )
);
const hieroglyphy = lazy(
    () =>
        // @ts-ignore
        import(
            // @ts-ignore
            "../components/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-hieroglyphy.tsx"
        )
);
const reacthuami = lazy(() => import("../huami/home-react-module-huami"));
const webpackawesomeconfig = lazy(
    () =>
        // @ts-ignore
        import(
            // @ts-ignore
            "../components/home-react-webpack-react-vue-spa-awesome-config.tsx"
        )
);
const excellentvscodeextensions = lazy(
    () =>
        // @ts-ignore
        import(
            // @ts-ignore
            "../components/excellent-vscode-extensions-for-javascript.tsx"
        )
);
const myroutes: [string | ((o: any) => boolean), ComponentType<any>][] = [
    [(o: any) => Object.keys(o).length === 0, reacthome],
    [
        "/picalc",
        // @ts-ignore
        picalc,
    ],

    [
        "/react-home",

        // @ts-ignore
        myhome,
    ],
    ["/react-rssreader", rsscomponent],

    ["/react-about", reactabout],
    ["/decoder", decoder],
    ["/jsfuck", jsfuck],
    ["/hieroglyphy", hieroglyphy],
    [
        "/react-huami",
        // @ts-ignore
        reacthuami,
    ],
    ["/webpack-react-vue-spa-awesome-config", webpackawesomeconfig],

    ["/excellent-vscode-extensions-for-javascript", excellentvscodeextensions],
    ["/counter", React.lazy(() => import("../../pages/counter.tsx"))],
    [() => true, reacthome],
];
const 路由list: {
    params: (o: any) => boolean;
    component: ComponentType<any>;
}[] = myroutes.map(({ 0: params, 1: component }) => {
    return {
        component,
        params:
            "function" === typeof params ? params : (o: any) => o.p === params,
    };
}) as { params: (o: any) => boolean; component: ComponentType<any> }[];
// console.log(路由list)
function 路由() {
    // @ts-ignore
    return <View routes={路由list} />;
}
