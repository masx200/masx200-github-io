// const myvurrouterprojecturl =
//     "https://my-vue-router-project-masx200.vercel.app/";
import { useToggle } from "@umijs/hooks";
import React, { useState } from "react";
// @ts-ignore
import { initloadingid } from "./initloadingid.ts";
import Loading from "./Loading";
import { Link } from "./router";
// @ts-ignore
import 路由列表 from "./router-react-路由列表.tsx";
// @ts-ignore
import 可变路径的rssreader链接 from "./可变路径的rssreader链接.tsx";
//@ts-ignore
import { initloadingid } from "./initloadingid.ts";
import 我的自定义导航链接 from "./我的自定义导航链接";
// @ts-ignore
import { 调整导航栏和主体的距离 } from "./调整导航栏和主体的距离.js";

var { Suspense } = React;
var { useEffect } = React;
export default React.memo(Apphome);
function Apphome() {
    const [showhr, setshowhr] = useState(true);
    const [clientWidth, setclientWidth] = useState(document.body.clientWidth);
    const { state, toggle } = useToggle(true);
    function showhrhandler() {
        // console.log(document.body.clientWidth,state);
        if (document.body.clientWidth <= 500) {
            setshowhr(false);
        } else {
            // if (state) {
            setshowhr(state);
            // } else {
            //     setshowhr(false);
            // }
        }
    }
    useEffect(() => {
        // console.log("onmounted");

        if (document.body.clientWidth <= 500) {
            shouqi收起折叠的导航栏菜单();
        }
        var initloadele = document.getElementById(initloadingid);
        initloadele && (initloadele.style.display = "none");
        // @ts-ignore
        调整导航栏和主体的距离();
        document.title = "masx200的github主页";
        window.addEventListener("hashchange", () => {
            toggle(false);
            调整导航栏和主体的距离();
        });

        window.addEventListener("resize", () => {
            requestAnimationFrame(() => {
                setclientWidth(document.body.clientWidth);
                // showhrhandler();
            });
        });

        document.getElementById(initloadingid)?.remove();
    }, []);
    useEffect(() => {
        调整导航栏和主体的距离();
        showhrhandler();
    }, [state, clientWidth]);

    function shouqi收起折叠的导航栏菜单() {
        toggle(false);

        调整导航栏和主体的距离();
        scrollTo(0, 0);
    }

    return (
        <div>
            <div className="container-fluid fixed-top" id="my导航栏">
                <nav
                    className="navbar navbar-default navbar navbar-expand-sm bg-light navbar-light"
                    role="navigation"
                >
                    <div>
                        <Link
                            className="navbar-brand mui-btn mui-btn-primary mui-btn-outlined"
                            to={{}}
                        >
                            masx200的
                            <hr
                                id="hidewidthless500"
                                style={{
                                    display: showhr ? "block" : "none",
                                }}
                            />
                            github主页
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
                            <我的自定义导航链接
                                to={{ p: "/react-home" }}
                                text={"基于REACT的主页"}
                            />
                            <li>
                                <可变路径的rssreader链接 />
                            </li>
                            <我的自定义导航链接
                                to={{ p: "/react-about" }}
                                text="关于REACT"
                            />
                            <我的自定义导航链接
                                to={{ p: "/picalc" }}
                                text="圆周率计算多线程"
                            />

                            <我的自定义导航链接
                                to={{ p: "/react-huami" }}
                                text="花密网页版"
                            />

                            <我的自定义导航链接
                                to={{ p: "/decoder" }}
                                text="JSfuck-and-hieroglyphy-Decoder"
                            />

                            <我的自定义导航链接
                                to={{ p: "/jsfuck" }}
                                text="JSfuck-ENCODER"
                            />

                            <我的自定义导航链接
                                to={{ p: "/hieroglyphy" }}
                                text="hieroglyphy-ENCODER"
                            />

                            <我的自定义导航链接
                                to={{
                                    p: "/webpack-react-vue-spa-awesome-config",
                                }}
                                text="webpack-react-vue- 极速零配置的单页面 web 应用打包工具"
                            />

                            <我的自定义导航链接
                                to={{
                                    p: "/excellent-vscode-extensions-for-javascript",
                                }}
                                text="VScode的优秀扩展推荐"
                            />
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="container" id="my主体">
                <Suspense fallback={<Loading></Loading>}>
                    <路由列表 />
                </Suspense>
            </div>
        </div>
    );
}
