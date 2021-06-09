// const myvurrouterprojecturl =
//     "https://my-vue-router-project-masx200.vercel.app/";

import { useToggle } from "@umijs/hooks";
import $ from "jquery";
import React from "react";
import { HashRouter, Link } from "react-router-dom";
// @ts-ignore
import 路由列表 from "./router-react-路由列表.tsx";
// @ts-ignore
import 可变路径的rssreader链接 from "./可变路径的rssreader链接.tsx";
// @ts-ignore
import 我的自定义导航链接 from "./我的自定义导航链接.tsx";
// @ts-ignore
import { initloadingid } from "./initloadingid.ts";

var { Suspense } = React;
var { useEffect } = React;
export default React.memo(Apphome);
function Apphome() {
    const { state, toggle } = useToggle(true);
    useEffect(() => {
        console.log("onmounted");

        //if (document.body.clientWidth <= 500) {
        shouqi收起折叠的导航栏菜单();
        // }
        var initloadele = document.getElementById(initloadingid);
        initloadele && (initloadele.style.display = "none");
        // @ts-ignore
        $("#my主体").css(
            "padding-top",
            // @ts-ignore
            $("#my导航栏").height() || 0
        );
        document.title = "masx200的github主页";
        window.addEventListener("hashchange", () => {
            toggle(false);
            $("#my主体").css(
                "padding-top",
                // @ts-ignore
                $("#my导航栏").height() || 0
            );
        });
    }, []);
    useEffect(() => {
        $("#my主体").css(
            "padding-top",
            // @ts-ignore
            $("#my导航栏").height() || 0
        );
    }, [state]);

    function shouqi收起折叠的导航栏菜单() {
        toggle(false);

        // @ts-ignore
        $("#my主体").css(
            "padding-top",
            // @ts-ignore
            $("#my导航栏").height() || 0
        );

        scrollTo(0, 0);
    }

    return (
        <HashRouter>
            <div>
                <div className="container-fluid fixed-top" id="my导航栏">
                    <nav
                        className="navbar navbar-default navbar navbar-expand-sm bg-light navbar-light"
                        role="navigation"
                    >
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
                            <Link
                                className="navbar-brand mui-btn mui-btn-primary mui-btn-outlined"
                                to="/"
                            >
                                masx200的
                                <hr id="hidewidthless500" />
                                github主页
                            </Link>
                        </div>
                        <div style={{ display: state ? "block" : "none" }}>
                            <ul
                                className="nav navbar-nav"
                                id="allnavbar"
                                onClick={() => {
                                    shouqi收起折叠的导航栏菜单();
                                }}
                            >
                                <我的自定义导航链接
                                    linkto={"/react-home"}
                                    text={"基于REACT的主页"}
                                />
                                <li>
                                    <可变路径的rssreader链接 />
                                </li>
                                <我的自定义导航链接
                                    linkto="/react-about"
                                    text="关于REACT"
                                />
                                <我的自定义导航链接
                                    linkto="/picalc"
                                    text="圆周率计算多线程"
                                />

                                <我的自定义导航链接
                                    linkto="/react-huami"
                                    text="花密网页版"
                                />

                                <我的自定义导航链接
                                    linkto="/decoder"
                                    text="JSfuck-and-hieroglyphy-Decoder"
                                />

                                <我的自定义导航链接
                                    linkto="/jsfuck"
                                    text="JSfuck-ENCODER"
                                />

                                <我的自定义导航链接
                                    linkto="/hieroglyphy"
                                    text="hieroglyphy-ENCODER"
                                />

                                <我的自定义导航链接
                                    linkto="/webpack-react-vue-spa-awesome-config"
                                    text="webpack-react-vue- 极速零配置的单页面 web 应用打包工具"
                                />

                                <我的自定义导航链接
                                    linkto="/IMPORTCJSAMDUMD动态异步加载"
                                    text=" 动态异步加载-commonjs和umd和amd模块库"
                                />

                                <我的自定义导航链接
                                    linkto="/react-simple-global-state-store-hook"
                                    text="适用于React的极简全局状态管理库"
                                />
                                <我的自定义导航链接
                                    linkto="/excellent-vscode-extensions-for-javascript"
                                    text="VScode的优秀扩展推荐"
                                />

                                <我的自定义导航链接
                                    linkto="/vue-simple-global-state-store-manager"
                                    text="适用于Vue的极简全局状态管理库"
                                />
                                {/* <li>
                                    <a
                                        href={
                                            myvurrouterprojecturl + "index.html"
                                        }
                                        className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                                    >
                                        基于vue的主页
                                    </a>
                                </li> */}
                                {/* <li>
                                    <a
                                        href={
                                            myvurrouterprojecturl +
                                            "index.html" +
                                            "#/about"
                                        }
                                        className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                                    >
                                        关于Vue
                                    </a>
                                </li> */}
                                {/* <li>
                                    <a
                                        href={
                                            myvurrouterprojecturl +
                                            "index.html" +
                                            "#/beautify-javascript"
                                        }
                                        className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                                    >
                                        美化javascript代码
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="container" id="my主体">
                    <Suspense
                        fallback={
                            <div>
                                <h1>loading</h1>
                                <span className="mui-spinner mui-spinner-custom" />
                            </div>
                        }
                    >
                        <路由列表 />
                    </Suspense>
                </div>
            </div>
        </HashRouter>
    );
}
