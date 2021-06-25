// import tanchu弹出消息通用 from "@/utils/my弹出消息通用.js";

/* eslint-disable react/prop-types */
("use strict");
//@ts-ignore
import mui from "@/assetsjs/mui.精简.button";
import React from "react";
// import * as parser from "@/assetsjs/fast-xml-parser";
//@ts-ignore
import tanchu弹出消息通用 from "@/utils/my弹出消息通用.ts";
//@ts-ignore
import * as parser from "@/assetsjs/fast-xml-parser.js";
import {
    rssxml2,
    rssxml3,
    rssxml4,
    rssxml5,
    rssxml6,
    rssxml1,
    //@ts-ignore
} from "./rssfeedxml.js";
// import $ from "jquery";

var { useState, useEffect, useRef } = React;
// var{ useState }=React
const cachersscontent = new Map<
    string,
    { title: string; content: any[]; description: string }
>();
function htmltotext(description: string) {
    const body = document.implementation.createHTMLDocument("title").body;
    body.innerHTML = description;

    const text = body.innerText;

    console.log("text", text);
    return text;
}
export default React.memo(Rssreader);
function Rssreader(props: {
    match: { params: { sitename: React.SetStateAction<string> } };
    history: { replace: (arg0: string) => void };
}) {
    const [rssfeedurl, setrssfeedurl] = useState("");
    var unmounted = false;
    function setarssstatefun() {
        setwebsite(props.match.params.sitename);
    }
    // console.log(arguments);
    const [website, setwebsite] = useState("");
    // var myxmlstrcontent = [];
    var myrsscontent: any[] = [];
    const [rssstatetitle, setrssStatetitle] = useState("");
    const [rssstate, setrssState] = useState(myrsscontent);
    const [rssstatedescription, setrssStatedescription] = useState("");
    //   console.log(setrssState);
    const mybuttonidsbuttonid1 = useRef<Element | undefined>();
    const mybuttonidsbuttonid2 = useRef<Element | undefined>();
    const mybuttonidsbuttonid3 = useRef<Element | undefined>();
    const mybuttonidsbuttonid4 = useRef<Element | undefined>();
    const mybuttonidsbuttonid5 = useRef<Element | undefined>();
    const mybuttonidsbuttonid6 = useRef<Element | undefined>();
    async function jiazaiload(xmlurl: string, element: Element) {
        mui(element).buttonloading();
        setrssfeedurl(xmlurl);
        const cachedobj = cachersscontent.get(xmlurl);
        if (cachedobj) {
            console.log(cachedobj, cachersscontent);
            tanchu弹出消息通用("success");

            unmounted || setrssState(cachedobj.content);
            unmounted || setrssStatetitle(cachedobj.title);
            unmounted || setrssStatedescription(cachedobj.description);
            mui(element).buttonreset();
            return;
        }
        var myrsscontent = [];

        // if (typeof (/* $(myselectorid).attr("src")  */ xmlurl) == "undefined") {
        //     //   console.log("加载失败");
        // } else {
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
        //  (() => {
        var str = xmlstring;
        // myxmlstrcontent.push(str);

        var data = parser.parse(str);

        var title = data.rss.channel.title;

        var description = data.rss.channel.description;
        myrsscontent.push(
            /* 提取e.description里面的文字 */
            /* 不要修改原来的rssjson,改成深拷贝 */
            ...JSON.parse(JSON.stringify(data.rss.channel.item)).map(
                (e: { description: string }) => {
                    //   console.log(e);
                    try {
                        /* 如果 e.description是以以文字开头则在外面包上一个div*/

                        e.description =
                            htmltotext(e.description) || e.description;
                        e.description =
                            htmltotext(e.description) || e.description;
                    } catch (error) {
                        console.error(error);
                    }

                    return e;
                }
            )
        );

        tanchu弹出消息通用("success");

        unmounted || setrssState(myrsscontent);
        unmounted || setrssStatetitle(title);
        unmounted || setrssStatedescription(description);
        mui(element).buttonreset();
        cachersscontent.set(xmlurl, {
            title,
            description,
            content: myrsscontent,
        });
        console.log(cachersscontent);
        //  })();
        // }
    }
    useEffect(
        () => {
            console.log(props);
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
                                    //@ts-ignore
                                    mybuttonidsbuttonid1.current
                                );
                                break;
                            case "iplaysoft":
                                // setwebsite(props.match.params.sitename);
                                setarssstatefun();
                                jiazaiload(
                                    rssxml2,
                                    //@ts-ignore
                                    mybuttonidsbuttonid2.current
                                );
                                break;
                            case "landiannews":
                                // setwebsite(props.match.params.sitename);
                                setarssstatefun();
                                jiazaiload(
                                    rssxml3,
                                    //@ts-ignore
                                    mybuttonidsbuttonid3.current
                                );
                                break;
                            case "ithome":
                                // setwebsite(props.match.params.sitename);
                                setarssstatefun();
                                jiazaiload(
                                    rssxml4,
                                    //@ts-ignore
                                    mybuttonidsbuttonid4.current
                                );
                                break;
                            case "ifanr":
                                // setwebsite(props.match.params.sitename);
                                setarssstatefun();
                                jiazaiload(
                                    rssxml5,
                                    //@ts-ignore
                                    mybuttonidsbuttonid5.current
                                );
                                break;
                            case "pingwest":
                                // setwebsite(props.match.params.sitename);
                                setarssstatefun();
                                jiazaiload(
                                    rssxml6,
                                    //@ts-ignore
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
            props.match.params.sitename,
            //props,
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
        return () => {
            unmounted = true;
            //清除副作用
        };
    }, []);
    return (
        <div className="">
            <h2>异步fetch加载rss阅读器演示</h2>
            <p>使用fast-xml-parser把xml转换成json</p>
            <nav className="navbar navbar-expand-sm bg-light navbar-light ">
                <ul className="demo">
                    <button
                        // id={mybuttonids.buttonid1}
                        //@ts-ignore
                        ref={mybuttonidsbuttonid1}
                        data-loading-icon="mui-spinner mui-spinner-custom"
                        className="mui-btn mui-btn-royal mui-btn-outlined btn-lg"
                        onClick={() => {
                            props.history.replace("/react-rssreader/tmtpost");
                        }}
                    >
                        加载tmtpost
                    </button>
                    <button
                        // id={mybuttonids.buttonid2}
                        //@ts-ignore
                        ref={mybuttonidsbuttonid2}
                        data-loading-icon="mui-spinner mui-spinner-custom"
                        className="mui-btn mui-btn-primary mui-btn-outlined btn-lg"
                        //   onClick={this.jiazairss2}
                        onClick={() => {
                            props.history.replace("/react-rssreader/iplaysoft");
                        }}
                    >
                        加载iplaysoft
                    </button>
                    <button
                        // id={mybuttonids.buttonid3}
                        //@ts-ignore
                        ref={mybuttonidsbuttonid3}
                        data-loading-icon="mui-spinner mui-spinner-custom"
                        className="mui-btn mui-btn-warning mui-btn-outlined btn-lg"
                        //   onClick={this.jiazairss3}
                        onClick={() => {
                            props.history.replace(
                                "/react-rssreader/landiannews"
                            );
                        }}
                    >
                        加载landiannews
                    </button>
                    <button
                        // id={mybuttonids.buttonid4}
                        //@ts-ignore
                        ref={mybuttonidsbuttonid4}
                        data-loading-icon="mui-spinner mui-spinner-custom"
                        className="mui-btn mui-btn-danger mui-btn-outlined btn-lg"
                        //   onClick={this.jiazairss4}
                        onClick={() => {
                            props.history.replace("/react-rssreader/ithome");
                        }}
                    >
                        加载ithome
                    </button>
                    <button
                        // id={mybuttonids.buttonid5}
                        //@ts-ignore
                        ref={mybuttonidsbuttonid5}
                        data-loading-icon="mui-spinner mui-spinner-custom"
                        className="mui-btn mui-btn-success mui-btn-outlined btn-lg"
                        //   onClick={this.jiazairss5}
                        onClick={() => {
                            props.history.replace("/react-rssreader/ifanr");
                        }}
                    >
                        加载ifanr
                    </button>
                    <button
                        // id={mybuttonids.buttonid6}
                        //@ts-ignore
                        ref={mybuttonidsbuttonid6}
                        data-loading-icon="mui-spinner mui-spinner-custom"
                        className="mui-btn mui-btn-primary mui-btn-outlined btn-lg"
                        //   onClick={this.jiazairss6}
                        onClick={() => {
                            props.history.replace("/react-rssreader/pingwest");
                        }}
                    >
                        加载pingwest
                    </button>
                </ul>
            </nav>
            <header className="App-header">
                <h3>{rssfeedurl}</h3>
                <div style={{ maxWidth: "100%" }}>
                    <h3>
                        <b>{rssstatetitle}</b>
                    </h3>
                    <p>{rssstatedescription}</p>

                    <ul className="mui-table-view">
                        {
                            // window.myrsscontent.map
                            rssstate.map((e, index) => (
                                <li
                                    className="mui-table-view-cell mui-media"
                                    key={index}
                                    /* style="width: 100%;" */
                                    /* 每个项目占一行,防止一行多个项目 */
                                    style={{ width: " 100%" }}
                                >
                                    <div className="mui-media-body">
                                        <a
                                            href={e.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <b> {e.title}</b>
                                        </a>
                                        <a
                                            href={e.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <p className="mui-ellipsis">
                                                {e.link}
                                            </p>
                                        </a>
                                        <p
                                            className="mui-ellipsis"
                                            style={{
                                                whiteSpace: "normal",
                                                wordBreak: "break-all",
                                                wordWrap: "break-word",
                                            }}
                                        >
                                            {e.description}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </header>
        </div>
    );
}
