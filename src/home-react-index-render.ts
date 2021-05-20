import $ from "jquery";
import React from "react";

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
                $("#my主体").css("padding-top", $("#my导航栏").height() || 0);
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
                try {
                } catch (error) {
                    console.error(error);
                    //   setTimeout(() => {
                    //     refreshall();
                    //   }, 500);
                }

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
                $("#my主体").css("padding-top", $("#my导航栏").height() || 0);
            }, 0);
        });
    }, 0);
});

const App = React.memo(Apphome);
export default App;
