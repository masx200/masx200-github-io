// const myvurrouterprojecturl =
//     "https://my-vue-router-project-masx200.vercel.app/";
import { useToggle } from "ahooks";
import React, { PropsWithChildren, useEffect } from "react";

import Link from "./CustomLink";
// @ts-ignore
import { initloadingid } from "./initloadingid.ts";
import { navlinkeles } from "./navlinkeles";
import { useobservehight } from "./useobservehight";

// @ts-ignore
// @ts-ignore
// @ts-ignore
// import { 调整导航栏和主体的距离 } from "./调整导航栏和主体的距离.js";

export default React.memo(Apphome);
function Apphome({ children }: PropsWithChildren<{}>) {
    const [navheight, navbarref] = useobservehight(142);
    // const [clientWidth, setclientWidth] = useState(window.innerWidth);
    const [state, { toggle, set }] = useToggle(true);

    useEffect(() => {
        // console.log("onmounted");

        if (window.innerWidth <= 500) {
            shouqi收起折叠的导航栏菜单();
        }
        var initloadele = document.getElementById(initloadingid);
        initloadele && (initloadele.style.display = "none");
        // @ts-ignore
        // 调整导航栏和主体的距离();
        document.title = "masx200的github主页";
        window.addEventListener("hashchange", () => {
            if (window.innerWidth <= 500) {
                set(false);
            }
            // 调整导航栏和主体的距离();
        });

        // window.addEventListener("resize", () => {
        //     requestAnimationFrame(() => {
        //         setclientWidth(window.innerWidth);
        //         // showhrhandler();
        //     });
        // });

        document.getElementById(initloadingid)?.remove();
    }, []);
    // useEffect(() => {
    //     调整导航栏和主体的距离();
    // }, [state, clientWidth]);

    function shouqi收起折叠的导航栏菜单() {
        if (window.innerWidth <= 500) {
            set(false);
        }
        // 调整导航栏和主体的距离();
        scrollTo(0, 0);
    }

    return (
        <div>
            <div
                className="container-fluid fixed-top"
                id="my导航栏"
                ref={navbarref}
            >
                <nav
                    className="navbar navbar-default navbar navbar-expand-sm bg-light navbar-light"
                    role="navigation"
                >
                    <div>
                        <Link
                            className="navbar-brand mui-btn mui-btn-primary mui-btn-outlined"
                            to={{}}
                        >
                            主页
                        </Link>
                    </div>
                    <button
                        style={{ display: "block" }}
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        onClick={() => {
                            toggle();
                        }}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div style={{ display: state ? "block" : "none" }}>
                        <ul
                            className="nav navbar-nav"
                            id="allnavbar"
                            onClick={() => {
                                shouqi收起折叠的导航栏菜单();
                            }}
                        >
                            {navlinkeles}
                        </ul>
                    </div>
                </nav>
            </div>

            <div
                className="container"
                id="my主体"
                style={{ paddingTop: navheight + "px" }}
            >
                {children}
            </div>
        </div>
    );
}
