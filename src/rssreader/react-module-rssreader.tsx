// import tanchu弹出消息通用 from "@/utils/my弹出消息通用.js";

/* eslint-disable react/prop-types */
("use strict");

//@ts-ignore
import * as parser from "@/assetsjs/fast-xml-parser.js";
// import * as parser from "@/assetsjs/fast-xml-parser";
//@ts-ignore
import tanchu弹出消息通用 from "@/utils/my弹出消息通用.ts";
import React, { useRef } from "react";
import Loading from "../Loading";
import { rsssitenames } from "../可变路径的rssreader链接";
import { Link } from "../router";
import rssfeedxml from "./rssfeedxml";
// import $ from "jquery";

var { useState, useEffect } = React;
// var{ useState }=React
const cachersscontent = new Map<
    string,
    { title: string; content: any[]; description: string }
>();
function htmltotext(description: string) {
    //alert(description)
    const body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = description;

    const text = body.innerText;

    // console.log("text", text);
    //alert(text);
    return text;
}
export default React.memo(Rssreader);
function Rssreader(props: { params: Record<string, string> }) {
    const [showloading, setshowloaing] = useState(false);
    const [rssfeedurl, setrssfeedurl] = useState("");
    const unmounted = useRef(false);

    const abortref = useRef(new AbortController());
    function setarssstatefun() {
        setwebsite(props.params.sitename);
    }
    // console.log(arguments);
    const [website, setwebsite] = useState("");
    // var myxmlstrcontent = [];
    var myrsscontent: any[] = [];
    const [rssstatetitle, setrssStatetitle] = useState("");
    const [rssstate, setrssState] = useState(myrsscontent);
    const [rssstatedescription, setrssStatedescription] = useState("");
    //   console.log(setrssState);

    async function jiazaiload(xmlurl: string) {
        setshowloaing(true);
        setrssfeedurl(xmlurl);
        const cachedobj = cachersscontent.get(xmlurl);
        if (cachedobj) {
            // console.log(cachedobj, cachersscontent);
            tanchu弹出消息通用("success");

            unmounted.current || setrssState(cachedobj.content);
            unmounted.current || setrssStatetitle(cachedobj.title);
            unmounted.current || setrssStatedescription(cachedobj.description);
            setshowloaing(false);
            return;
        }
        var myrsscontent = [];

        var xmlstring = await fetch(xmlurl, {
            signal: abortref.current.signal,
        }).then((r) => {
            if (r.ok) {
                //   console.log(r.statusText, r);
                return r.text();
            } else {
                throw new Error("fetch failed");
            }
        });
        // console.log(xmlstring);
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
                (e: { description: string; link: string; title: string }) => {
                    let des = e.description;
                    const { link, title } = e;
                    if (Reflect.has(e, "content:encoded")) {
                        des += Reflect.get(e, "content:encoded");
                    }
                    //   console.log(e);

                    /* 如果 e.description是以以文字开头则在外面包上一个div*/
                    //@ts-ignore
                    //     if (e["content:encoded"]) {
                    //@ts-ignore
                    //        alert(e["content:encoded"]);
                    //      }

                    des = htmltotext(des);

                    des = htmltotext(des);

                    return { link, title, description: des };
                }
            )
        );

        tanchu弹出消息通用("success");

        unmounted.current || setrssState(myrsscontent);
        unmounted.current || setrssStatetitle(title);
        unmounted.current || setrssStatedescription(description);

        cachersscontent.set(xmlurl, {
            title,
            description,
            content: myrsscontent,
        });
        // console.log(cachersscontent);
        //  })();
        // }
        unmounted.current || setshowloaing(false);
        return;
    }
    useEffect(() => {
        // console.log(props);
        (async () => {
            try {
                if ("undefined" !== typeof props.params.sitename) {
                    if (website !== props.params.sitename) {
                        document.title =
                            "React router App-" +
                            "rssreader-" +
                            props.params.sitename;
                        const sitename = props.params.sitename;
                        if (rsssitenames.includes(sitename)) {
                            setarssstatefun();
                            return await jiazaiload(
                                Reflect.get(rssfeedxml, sitename)
                                //@ts-ignore
                            );
                        }
                    }
                }
            } catch (error) {
                if (
                    error instanceof DOMException &&
                    error?.name === "AbortError"
                ) {
                    console.dir(error);
                } else {
                    console.error(error);
                    throw error;
                }
                //
            }
        })();
    }, [props.params.sitename]);
    useEffect(() => {
        // document.title = "React router App-" + "rssreader";
        if ("undefined" !== typeof props.params.sitename) {
            document.title =
                "React router App-" + "rssreader-" + props.params.sitename;
        } else {
            document.title = "React router App-" + "rssreader";
        }
        return () => {
            unmounted.current = true;
            abortref.current.abort();
            //清除副作用
        };
    }, []);
    return (
        <div className="">
            <h2>异步fetch加载rss阅读器演示</h2>
            <p>使用fast-xml-parser把xml转换成json</p>
            <nav className="navbar navbar-expand-sm bg-light navbar-light ">
                <ul className="demo">
                    <Link
                        data-loading-icon="mui-spinner mui-spinner-custom"
                        className="mui-btn mui-btn-royal mui-btn-outlined btn-lg"
                        to={{ p: "/react-rssreader", sitename: "tmtpost" }}
                    >
                        加载tmtpost
                    </Link>
                    <Link
                        data-loading-icon="mui-spinner mui-spinner-custom"
                        className="mui-btn mui-btn-primary mui-btn-outlined btn-lg"
                        to={{ p: "/react-rssreader", sitename: "iplaysoft" }}
                    >
                        加载iplaysoft
                    </Link>
                    <Link
                        data-loading-icon="mui-spinner mui-spinner-custom"
                        className="mui-btn mui-btn-warning mui-btn-outlined btn-lg"
                        to={{ p: "/react-rssreader", sitename: "landiannews" }}
                    >
                        加载landiannews
                    </Link>
                    <Link
                        data-loading-icon="mui-spinner mui-spinner-custom"
                        className="mui-btn mui-btn-danger mui-btn-outlined btn-lg"
                        to={{ p: "/react-rssreader", sitename: "ithome" }}
                    >
                        加载ithome
                    </Link>
                    <Link
                        to={{ p: "/react-rssreader", sitename: "ifanr" }}
                        data-loading-icon="mui-spinner mui-spinner-custom"
                        className="mui-btn mui-btn-success mui-btn-outlined btn-lg"
                    >
                        加载ifanr
                    </Link>
                    <Link
                        data-loading-icon="mui-spinner mui-spinner-custom"
                        className="mui-btn mui-btn-primary mui-btn-outlined btn-lg"
                        to={{ p: "/react-rssreader", sitename: "pingwest" }}
                    >
                        加载pingwest
                    </Link>
                </ul>
            </nav>
            {showloading ? <Loading></Loading> : null}
            <header
                className="App-header"
                style={{
                    display:
                        props.params.sitename && website && !showloading
                            ? "block"
                            : "none",
                }}
            >
                <div>
                    <h5>{rssfeedurl}</h5>
                </div>
                <div style={{ maxWidth: "100%" }}>
                    <h3>
                        <b>{rssstatetitle}</b>
                    </h3>
                    <p>{rssstatedescription}</p>

                    <ul className="mui-table-view">
                        {rssstate.map((e, index) => (
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
                                        <p className="mui-ellipsis">{e.link}</p>
                                    </a>

                                    <details>
                                        <summary>详情</summary>
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
                                    </details>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </div>
    );
}
