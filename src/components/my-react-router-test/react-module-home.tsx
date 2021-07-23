// React=IMPORTCJSAMDUMD.REQUIREPACKAGE("react")
// React=window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react")
// console.log(window.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE.react)
//@ts-ignore
//@ts-ignore
import 首页推荐网址目录 from "@/components/首页推荐网址目录";
//@ts-ignore
import picture1 from "@/pictures/babeljs.png";
//@ts-ignore
import picture3 from "@/pictures/bootstrap.png";
//@ts-ignore
import picture4 from "@/pictures/logo-jquery.png";
//@ts-ignore
import picture2 from "@/pictures/parcel.jpg";
//@ts-ignore
import picture5 from "@/pictures/react.svg";
//@ts-ignore
import picture6 from "@/pictures/vue.png";
//@ts-ignore
import picture7 from "@/pictures/webpack.svg";
//@ts-ignore
import tanchu弹出消息通用 from "@/utils/my弹出消息通用.ts";
import React from "react";
import { 调整导航栏和主体的距离 } from "../../调整导航栏和主体的距离.js";
("use strict");

// var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
const { useEffect, useState } = React;
export default function home() {
    const [nowtime, setnowtime] = useState(获取当前时间());
    useEffect(() => {
        location.hash=''
        调整导航栏和主体的距离();
        document.title = "React router App-" + "home";
        let timer = setInterval(() => {
            setnowtime(获取当前时间());
        }, 1100);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="App">
            <header className="">
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

                <h2>现在是 {nowtime}</h2>
                <p>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://zh-hans.reactjs.org/tutorial/tutorial.html"
                    >
                        入门教程: 认识 React – React
                    </a>
                </p>
                <p>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://zh-hans.reactjs.org/docs/getting-started.html"
                    >
                        开始 – React文档
                    </a>
                </p>
                <h1>react-router测试</h1>
                <h1>Hello, world!</h1>
                <h2>欢迎来到主页</h2>

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <h1>Hello, world!</h1>
            </header>
            <div id="图片列表200">
                <hr />
                <img loading="lazy" src={picture1} />
                <hr />
                <img loading="lazy" src={picture2} />
                <hr />
                <img loading="lazy" src={picture3} />
                <hr />
                <img loading="lazy" src={picture4} />
                <hr />
                <img loading="lazy" src={picture5} />
                <hr />
                <img loading="lazy" src={picture6} />
                <hr />
                <img loading="lazy" src={picture7} />
            </div>
        </div>
    );
    //   }
}
function 获取当前时间() {
    return new Date().toString().slice(0, new Date().toString().indexOf("GMT"));
}
