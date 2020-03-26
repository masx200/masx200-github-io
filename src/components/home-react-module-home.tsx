import React from "react";
import markdwonurls from "../utils/markdownurls.ts";
import tanchu弹出消息通用 from "../utils/my弹出消息通用.ts";
//@ts-ignore
// import tanchu弹出消息通用 from "@/utils/my弹出消息通用";
// eslint-disable-next-line no-unused-vars
import Markdownreact from "./markdown-react/index.tsx";
import 首页推荐网址目录 from "./首页推荐网址目录";
const markurl = markdwonurls["masx200-github-io"];
("use strict");

const location = window.location;
var { useEffect } = React;

export default function home() {
    useEffect(() => {
        /* 组件第一次加载时和每次组件刷新时会加载这个函数 */
        location.hash = "#/";
        document.title = "masx200的github主页-" + "首页";
    });
    return (
        <div>
            {/* The tag <markdownreact> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter. */}

            <div
                className="jumbotron"
                style={{
                    padding: 0,
                }}
            >
                <h1>欢迎登陆页面！</h1>

                <div>
                    <ul>
                        {首页推荐网址目录.map((t, i) => {
                            return (
                                <li key={i}>
                                    <p>
                                        <b>
                                            <a
                                                className={
                                                    "mui-btn mui-btn-primary mui-btn-outlined"
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={t[0]}
                                            >
                                                {t[1]}
                                            </a>
                                        </b>
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div>
                    <button
                        className="btn btn-outline-primary btn-lg"
                        //   ref={mybuttonidsbuttonid1}
                        onClick={() => {
                            tanchu弹出消息通用("primary");
                        }}
                    >
                        弹出首选提示框
                    </button>
                    <button
                        className="btn btn-outline-success btn-lg"
                        //   ref={mybuttonidsbuttonid2}
                        onClick={() => {
                            tanchu弹出消息通用("success");
                        }}
                    >
                        弹出成功提示框
                    </button>
                    <button
                        className="btn btn-outline-danger btn-lg"
                        //   ref={mybuttonidsbuttonid3}
                        onClick={() => {
                            tanchu弹出消息通用("danger");
                        }}
                    >
                        弹出失败提示框
                    </button>
                    <button
                        className="btn btn-outline-warning btn-lg"
                        //   ref={mybuttonidsbuttonid4}
                        onClick={() => {
                            tanchu弹出消息通用("warning");
                        }}
                    >
                        弹出警告提示框
                    </button>
                </div>
            </div>
            <Markdownreact src={markurl} />
        </div>
    );
}
