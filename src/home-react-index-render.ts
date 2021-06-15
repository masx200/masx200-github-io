import $ from "jquery";
import React from "react";
//@ts-ignore
import { 调整导航栏和主体的距离 } from "@/调整导航栏和主体的距离.js";
// @ts-ignore
import Apphome from "./react-apphome.tsx";

/* eslint-disable react/prop-types */
("use strict");

const scrollTo = window.scrollTo;

(() => {
    "use strict";
    $(() => {
        function onhashchange() {
            scrollTo(0, 0);
            // $("#example-navbar-collapse").hide(); //$(example_navbar_collapse.current).removeClass("show");
            // $("#collapsibleNavbar").removeClass("show");
            setTimeout(() => {
                调整导航栏和主体的距离();
            }, 50);
        }
        $(window).on("hashchange", onhashchange);

        var haverun = 0;
        herewindowonload();
        function herewindowonload() {
            if (haverun == 0) {
                haverun = 1;

                myonloadfunc();
            } else {
                console.log("不要重复运行此onload函数");
            }
        }

        function myonloadfunc() {
            function refreshall() {
                scrollTo(0, 0);
            }
            refreshall();
        }
    });
})();
// });
window.addEventListener("resize", () => {
    setTimeout(() => {
        requestAnimationFrame(() => {
            setTimeout(() => {
                调整导航栏和主体的距离();
            }, 0);
        });
    }, 0);
});

const App = React.memo(Apphome);
export default App;
