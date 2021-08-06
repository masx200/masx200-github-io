//@ts-ignore
import React, { useEffect } from "react";
import Link from "../CustomLink";
import rssfeedxml from "./rssfeedxml";
import { Rssviewer } from "./Rssviewer";

/* eslint-disable react/prop-types */
("use strict");

//@ts-ignore
//@ts-ignore

export default React.memo(Rssreader);
function Rssreader(props: {
    params: Record<string, string> & { sitename?: string };
}) {
    const { sitename } = props.params;

    const rssfeedurl: string | undefined = sitename
        ? Reflect.get(rssfeedxml, sitename)
        : undefined;

    useEffect(() => {
        // document.title = "React router App-" + "rssreader";
        if ("undefined" !== typeof props.params.sitename) {
            document.title =
                "React router App-" + "rssreader-" + props.params.sitename;
        } else {
            document.title = "React router App-" + "rssreader";
        }
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
            {rssfeedurl ? <Rssviewer src={rssfeedurl} /> : <React.Fragment />}
        </div>
    );
}
