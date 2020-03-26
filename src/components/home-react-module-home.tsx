import 首页推荐网址目录 from "./首页推荐网址目录";

("use strict");
//@ts-ignore
import tanchu弹出消息通用 from "@/utils/my弹出消息通用";
// eslint-disable-next-line no-unused-vars
import Markdownreact from "./markdown-react/index";
/* import picture1 from "./babeljs.png";

import picture2 from "./parcel.jpg";
import picture3 from "./bootstrap.png";
import picture4 from "./logo-jquery.png";
import picture5 from "./react.svg";
import picture6 from "./vue.png";
import picture7 from "./webpack.svg"; */
// import myindexrender from "./myindexrender";
import React from "react";
// import $ from "jquery";
// const jQuery = $;
// var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
// function guid() {
//   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
//     var r = (Math.random() * 16) | 0,
//       v = c == "x" ? r : (r & 0x3) | 0x8;
//     return v.toString(16);
//   });
// }
const location = window.location;
var { useEffect } = React;

export default function home() {
    // function guid() {
    //   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    //     var r = (Math.random() * 16) | 0,
    //       v = c == "x" ? r : (r & 0x3) | 0x8;
    //     return v.toString(16);
    //   });
    // }

    // function tanchu弹出消息通用(infotype) {
    //   // var id=Math.random()*100000000|0
    //   var textinfo;
    //   switch (infotype) {
    //     case "success":
    //       textinfo = "成功";
    //       break;
    //     case "primary":
    //       textinfo = "首选";
    //       break;
    //     case "danger":
    //       textinfo = "失败";
    //       break;
    //     case "warning":
    //       textinfo = "警告";
    //       break;
    //     default:
    //       return;
    //     // break;
    //   }
    //   var id = guid();
    //   jQuery("#my导航栏").append(
    //     jQuery(`<div id="${id}" class="alert alert-${infotype} alert-dismissible fade show">
    //           <button type="button" class="close" data-dismiss="alert">&times;</button>
    //           <strong>${textinfo}!</strong> 操作${textinfo}提示信息。
    //           </div>`).fadeTo(5000, 0.5, () => {
    //       console.log(jQuery("#" + id));
    //       jQuery("#" + id).remove();
    //       $("#my主体").css("padding-top",  $("#my导航栏").height() || 0);
    //     })
    //   );
    // }

    //   const mybuttonidsbuttonid1 = useRef();
    //   const mybuttonidsbuttonid2 = useRef();
    //   const mybuttonidsbuttonid3 = useRef();
    //   const mybuttonidsbuttonid4 = useRef();
    useEffect(() => {
        /* 组件第一次加载时和每次组件刷新时会加载这个函数 */
        location.hash = "#/";
        document.title = "masx200的github主页-" + "首页";
        // console.log(mybuttonidsbuttonid1)
        // myindexrender(
        //   mybuttonidsbuttonid1.current,
        //   mybuttonidsbuttonid2.current,
        //   mybuttonidsbuttonid3.current,
        //   mybuttonidsbuttonid4.current
        // );
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
                {/*         
        <p>
          <b>
            <a
              className={"mui-btn mui-btn-primary mui-btn-outlined"}
              target="_blank"
              rel="noopener noreferrer"
              href="https://weibo.com/2174458781?"
            >
              一生忽而得一夏当司掌好年华的微博
            </a>
          </b>
        </p>
        <p>
          <b>
            <a
              className={"mui-btn mui-btn-primary mui-btn-outlined"}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/masx200"
            >
              masx200的github仓库
            </a>
          </b>
        </p>
        <p>
          <b>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://masx200.github.io/markdown-reader/"
              className={"mui-btn mui-btn-primary mui-btn-outlined"}
            >
              masx200的 轻量级markdown文档系统阅读器
            </a>
          </b>
        </p>
        <p>
          <b>
            <a
              className={"mui-btn mui-btn-primary mui-btn-outlined"}
              target="_blank"
              rel="noopener noreferrer"
              href="https://masx200.github.io/javascript-tutorial/"
            >
              javascript教程,markdown阅读器
            </a>
          </b>
        </p>
        <p>
          <b>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://masx200.github.io/es6tutorial/"
              className={"mui-btn mui-btn-primary mui-btn-outlined"}
            >
              ecmascript6教程,markdown阅读器
            </a>
          </b>
        </p>
      
       */}
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
            <Markdownreact src="https://masx200.github.io/README.md" />
        </div>
    );
}
