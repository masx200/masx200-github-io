import React from "react";
//@ts-ignore
import markdwonurls from "../utils/markdownurls.ts";
//@ts-ignore

//@ts-ignore
// import tanchu弹出消息通用 from "@/utils/my弹出消息通用";
// eslint-disable-next-line no-unused-vars
import Markdownreact from "./markdown-react/index.tsx";

const markurl = markdwonurls["masx200-github-io"];
("use strict");

// const location = window.location;
var { useEffect } = React;

export default function home() {
    useEffect(() => {
        /* 组件第一次加载时和每次组件刷新时会加载这个函数 */
        //location.hash = "#/";
        document.title = "masx200的github主页-" + "首页";
    }, []);
    return (
        <div>
            {/* The tag <markdownreact> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter. */}
            <div className="container">
                <div className="jumbotron">
                    <h1>欢迎登陆页面！</h1>
                    <p>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://weibo.com/2174458781?"
                        >
                            一生忽而得一夏当司掌好年华的微博
                        </a>
                    </p>
                    <p>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/masx200"
                        >
                            masx200的github仓库
                        </a>
                    </p>
                </div>
            </div>
            <Markdownreact src={markurl} />
        </div>
    );
}
