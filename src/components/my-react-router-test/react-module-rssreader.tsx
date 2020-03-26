// import tanchu弹出消息通用 from "@/utils/my弹出消息通用.js";

/* eslint-disable react/prop-types */
("use strict");

import mui from "@/assetsjs/mui.精简.button";
import React from "react";
// import * as parser from "@/assetsjs/fast-xml-parser";
import tanchu弹出消息通用 from "../../utils/my弹出消息通用.ts";
//@ts-ignore
import * as parser from "../../assetsjs/fast-xml-parser.js";
import {
    rssxml2,
    rssxml3,
    rssxml4,
    rssxml5,
    rssxml6,
    rssxml1,
} from "./rssfeedxml";
import $ from "jquery";
// import mui from "../mui.min.js";
// const jQuery = $;
// ("use strict");
/* Hook是React 16.8中的新增功能。它们允许您在不编写类的情况下使用状态和其他React功能。
https://reactjs.org/docs/hooks-overview.html#state-hook
*/
/* // var refreshallsetstate;
// IMPORTCJSAMDUMD(
//     "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js",
//     "react"
//   ).then(

//     reactmoduleload
//   )

// function reactmoduleload(module){
// console.log(window)
// React=window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react")

// console.log(window.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE.react)
 */
/* https://reactjs.org/docs/hooks-reference.html#useref */
// var mybuttonids = {};

// var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
var { useState, useEffect, useRef } = React;
// var{ useState }=React

export default React.memo(Rssreader);
function Rssreader(props) {
    function setarssstatefun() {
        setwebsite(props.match.params.sitename);
    }
    // console.log(arguments);
    const [website, setwebsite] = useState("");
    var myxmlstrcontent = [];
    var myrsscontent = [];
    const [rssstate, setrssState] = useState(myrsscontent);
    //   console.log(setrssState);
    const mybuttonidsbuttonid1 = useRef();
    const mybuttonidsbuttonid2 = useRef();
    const mybuttonidsbuttonid3 = useRef();
    const mybuttonidsbuttonid4 = useRef();
    const mybuttonidsbuttonid5 = useRef();
    const mybuttonidsbuttonid6 = useRef();
    async function jiazaiload(xmlurl, element) {
        mui(element).button.loading();
        // mui(element).button("loading");
        // window.myrsscontent = []
        var myrsscontent = [];
        // console.log(
        //   "开始加载外部内容",
        //   xmlurl
        //   /* $(myselectorid).attr("src") */
        // );
        if (typeof (/* $(myselectorid).attr("src")  */ xmlurl) == "undefined") {
            //   console.log("加载失败");
        } else {
            //使用fetch函数代替$.get
            //使用fast-xml-parser把xml转换为json
            // var xmlurl = $(myselectorid).attr("src");
            var xmlstring = await fetch(xmlurl).then((r) => {
                if (r.ok) {
                    //   console.log(r.statusText, r);
                    return r.text();
                } else {
                    throw new Error("fetch failed");
                }
            });
            (() => {
                var str = xmlstring;
                myxmlstrcontent.push(str);
                //   console.log("xml", myxmlstrcontent);
                var data = parser.parse(str);
                // console.log("rssjson", data);
                myrsscontent.title = data.rss.channel.title;
                //   myrsscontent.description = $(data.rss.channel.description).text();
                myrsscontent.description = data.rss.channel.description;
                myrsscontent.push(
                    /* 提取e.description里面的文字 */
                    /* 不要修改原来的rssjson,改成深拷贝 */
                    ...JSON.parse(JSON.stringify(data.rss.channel.item)).map(
                        (e) => {
                            //   console.log(e);
                            try {
                                /* 如果 e.description是以以文字开头则在外面包上一个div*/
                                e.description =
                                    $("<div/>").append(e.description).text() ||
                                    e.description;
                            } catch (error) {
                                // console.error(error);
                                // e.description = e.description;
                            }

                            return e;
                        }
                    )
                    // description: $(data.rss.channel.item.description).text()
                );
                // console.log("rsscontent", myrsscontent);

                // mui(element).button("reset");

                tanchu弹出消息通用("success");
                //   refreshall();
                //   this.forceUpdate();
                setrssState(myrsscontent);
                mui(element).button.reset();
            })();
            // .then(s => {
            //   var str = s;
            //   myxmlstrcontent.push(str);
            //   //   console.log("xml", myxmlstrcontent);
            //   var data = parser.parse(str);
            //   console.log("rssjson", data);
            //   myrsscontent.title = data.rss.channel.title;
            //   //   myrsscontent.description = $(data.rss.channel.description).text();
            //   myrsscontent.description = data.rss.channel.description;
            //   myrsscontent.push(
            //     /* 提取e.description里面的文字 */
            //     /* 不要修改原来的rssjson,改成深拷贝 */
            //     ...JSON.parse(JSON.stringify(data.rss.channel.item)).map(e => {
            //       //   console.log(e);
            //       try {
            //         /* 如果 e.description是以以文字开头则在外面包上一个div*/
            //         e.description =
            //           $("<div/>")
            //             .append(e.description)
            //             .text() || e.description;
            //       } catch (error) {
            //         console.error(error);
            //         // e.description = e.description;
            //       }

            //       return e;
            //     })
            //     // description: $(data.rss.channel.item.description).text()
            //   );
            //   console.log("rsscontent", myrsscontent);

            //   mui(element).button("reset");
            //   tanchu弹出消息通用("success");
            //   //   refreshall();
            //   //   this.forceUpdate();
            //   setrssState(myrsscontent);
            // });
        }
    }
    useEffect(
        () => {
            //   console.log(props);
            try {
                if ("undefined" !== typeof props.match.params.sitename) {
                    if (website !== props.match.params.sitename) {
                        document.title =
                            "React router App-" +
                            "rssreader-" +
                            props.match.params.sitename;
                        // console.log(props.match.params.sitename);
                        switch (props.match.params.sitename) {
                            case "tmtpost":
                                // setwebsite(props.match.params.sitename);
                                setarssstatefun();
                                jiazaiload(
                                    rssxml1,
                                    mybuttonidsbuttonid1.current
                                );
                                break;
                            case "iplaysoft":
                                // setwebsite(props.match.params.sitename);
                                setarssstatefun();
                                jiazaiload(
                                    rssxml2,
                                    mybuttonidsbuttonid2.current
                                );
                                break;
                            case "landiannews":
                                // setwebsite(props.match.params.sitename);
                                setarssstatefun();
                                jiazaiload(
                                    rssxml3,
                                    mybuttonidsbuttonid3.current
                                );
                                break;
                            case "ithome":
                                // setwebsite(props.match.params.sitename);
                                setarssstatefun();
                                jiazaiload(
                                    rssxml4,
                                    mybuttonidsbuttonid4.current
                                );
                                break;
                            case "ifanr":
                                // setwebsite(props.match.params.sitename);
                                setarssstatefun();
                                jiazaiload(
                                    rssxml5,
                                    mybuttonidsbuttonid5.current
                                );
                                break;
                            case "pingwest":
                                // setwebsite(props.match.params.sitename);
                                setarssstatefun();
                                jiazaiload(
                                    rssxml6,
                                    mybuttonidsbuttonid6.current
                                );
                                break;

                            default:
                                break;
                        }
                    }
                }
            } catch (error) {
                //
            }
        },
        /* 依赖项设置为props就会在上级传入的参数变化时生效 */

        [
            // props.match.params.sitename
            props,
        ]
    );
    useEffect(() => {
        // document.title = "React router App-" + "rssreader";
        if ("undefined" !== typeof props.match.params.sitename) {
            document.title =
                "React router App-" +
                "rssreader-" +
                props.match.params.sitename;
        } else {
            document.title = "React router App-" + "rssreader-";
        }
        // document.title =
        //   "React router App-" + "rssreader-" +
        //     ? props.match.params.sitename
        //     : "";
        // return () => {
        //   //   console.log("缓存rssstate");
        //   //   myrsscontent = rssstate;
        // };
    }, []);
    return (
        <div className="">
            <h2>异步fetch加载rss阅读器演示</h2>
            <p>使用fast-xml-parser把xml转换成json</p>
            <nav className="navbar navbar-expand-sm bg-light navbar-light ">
                <ul className="demo">
                    <button
                        // id={mybuttonids.buttonid1}
                        ref={mybuttonidsbuttonid1}
                        data-loading-icon="mui-spinner mui-spinner-custom"
                        className="mui-btn mui-btn-royal mui-btn-outlined btn-lg"
                        onClick={() => {
                            /* 使用箭头函数可以自动绑定this! */
                            //   this.jiazairss1();
                            //   jiazaiload(rssxml1, mybuttonidsbuttonid1.current);
                            // location.hash = "#/react-rssreader/tmtpost";

                            props.history.replace("/react-rssreader/tmtpost");
                        }}
                    >
                        加载tmtpost
                    </button>
                    <button
                        // id={mybuttonids.buttonid2}
                        ref={mybuttonidsbuttonid2}
                        data-loading-icon="mui-spinner mui-spinner-custom"
                        className="mui-btn mui-btn-primary mui-btn-outlined btn-lg"
                        //   onClick={this.jiazairss2}
                        onClick={() => {
                            /* 使用箭头函数可以自动绑定this! */
                            //   this.jiazairss2();
                            //   jiazaiload(rssxml2, mybuttonidsbuttonid2.current);
                            // location.hash = "#/react-rssreader/iplaysoft";
                            props.history.replace("/react-rssreader/iplaysoft");
                        }}
                    >
                        加载iplaysoft
                    </button>
                    <button
                        // id={mybuttonids.buttonid3}
                        ref={mybuttonidsbuttonid3}
                        data-loading-icon="mui-spinner mui-spinner-custom"
                        className="mui-btn mui-btn-warning mui-btn-outlined btn-lg"
                        //   onClick={this.jiazairss3}
                        onClick={() => {
                            /* 使用箭头函数可以自动绑定this! */
                            //   this.jiazairss3();
                            //   jiazaiload(rssxml3, mybuttonidsbuttonid3.current);
                            // location.hash = "#/react-rssreader/landiannews";
                            props.history.replace(
                                "/react-rssreader/landiannews"
                            );
                        }}
                    >
                        加载landiannews
                    </button>
                    <button
                        // id={mybuttonids.buttonid4}
                        ref={mybuttonidsbuttonid4}
                        data-loading-icon="mui-spinner mui-spinner-custom"
                        className="mui-btn mui-btn-danger mui-btn-outlined btn-lg"
                        //   onClick={this.jiazairss4}
                        onClick={() => {
                            /* 使用箭头函数可以自动绑定this! */
                            //   this.jiazairss4();
                            //   jiazaiload(rssxml4, mybuttonidsbuttonid4.current);
                            // location.hash = "#/react-rssreader/ithome";
                            props.history.replace("/react-rssreader/ithome");
                        }}
                    >
                        加载ithome
                    </button>
                    <button
                        // id={mybuttonids.buttonid5}
                        ref={mybuttonidsbuttonid5}
                        data-loading-icon="mui-spinner mui-spinner-custom"
                        className="mui-btn mui-btn-success mui-btn-outlined btn-lg"
                        //   onClick={this.jiazairss5}
                        onClick={() => {
                            /* 使用箭头函数可以自动绑定this! */
                            //   this.jiazairss5();
                            //   jiazaiload(rssxml5, mybuttonidsbuttonid5.current);
                            // location.hash = "#/react-rssreader/ifanr";
                            props.history.replace("/react-rssreader/ifanr");
                        }}
                    >
                        加载ifanr
                    </button>
                    <button
                        // id={mybuttonids.buttonid6}
                        ref={mybuttonidsbuttonid6}
                        data-loading-icon="mui-spinner mui-spinner-custom"
                        className="mui-btn mui-btn-primary mui-btn-outlined btn-lg"
                        //   onClick={this.jiazairss6}
                        onClick={() => {
                            /* 使用箭头函数可以自动绑定this! */
                            //   this.jiazairss6();
                            //   jiazaiload(rssxml6, mybuttonidsbuttonid6.current);
                            // location.hash = "#/react-rssreader/pingwest";
                            props.history.replace("/react-rssreader/pingwest");
                        }}
                    >
                        加载pingwest
                    </button>
                </ul>
            </nav>
            <header className="App-header">
                <div>
                    <h3>
                        <b>{rssstate.title}</b>
                    </h3>
                    <p>{rssstate.description}</p>

                    <ul className="mui-table-view">
                        {// window.myrsscontent.map
                        rssstate.map((e, index) => (
                            <li
                                className="mui-table-view-cell mui-media"
                                key={index}
                                /* style="width: 100%;" */
                                /* 每个项目占一行,防止一行多个项目 */
                                style={{ width: " 100%" }}
                            >
                                <div className="mui-media-body">
                                    <b> {e.title}</b>
                                    <a
                                        href={e.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <p className="mui-ellipsis">{e.link}</p>
                                    </a>
                                    <p className="mui-ellipsis">
                                        {e.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </div>
    );
}
