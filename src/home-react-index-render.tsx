import $ from "jquery";
import React, { useEffect, Suspense } from "react";
//@ts-ignore
import { 调整导航栏和主体的距离 } from "@/调整导航栏和主体的距离.js";
// @ts-ignore
import Apphome from "./react-layout.tsx";
import 路由列表 from "./router-react-路由列表";
import Loading from "./Loading";
/* eslint-disable react/prop-types */
("use strict");

const scrollTo = window.scrollTo;

("use strict");

function onhashchange() {
    scrollTo(0, 0);
    setTimeout(() => {
        调整导航栏和主体的距离();
    }, 50);
}

const resizehandler = () => {
    setTimeout(() => {
        requestAnimationFrame(() => {
            setTimeout(() => {
                调整导航栏和主体的距离();
            }, 0);
        });
    }, 0);
};
const App = React.memo(() => {
    useEffect(() => {
        $(window).on("hashchange", onhashchange);

        window.addEventListener("resize", resizehandler);
    }, []);
    return appeles;
});

const appeles = (
    <Apphome>
        <Suspense fallback={<Loading></Loading>}>
            <路由列表 />
        </Suspense>
    </Apphome>
);
export default App;
