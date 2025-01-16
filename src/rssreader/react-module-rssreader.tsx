//@ts-ignore
import React, { useEffect, useMemo } from "react";

import Link from "../CustomLink";
import rssfeedxml from "./rssfeedxml";
import { Rssviewer } from "./Rssviewer";

//@ts-ignore
/* eslint-disable react/prop-types */
("use strict");

//@ts-ignore
//@ts-ignore

export default React.memo(Rssreader);
function Rssreader(props: {
    params: Record<string, string> & { sitename?: string };
}) {
    const rssmain = useMemo(() => {
        return getrssmain();
    }, []);
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
    }, [sitename]);
    return (
        <div className="">
            {rssmain}
            {rssfeedurl && sitename ? (
                //@ts-ignore
                <Rssviewer src={rssfeedurl} name={sitename} />
            ) : null}
        </div>
    );
}

function getrssmain() {
    const rssmain = (
        <>
            <h2>异步fetch加载rss阅读器演示</h2>
            <p>使用fast-xml-parser把xml转换成json</p>
            <nav className="navbar navbar-expand-sm bg-light navbar-light ">
                <ul
                    className="demo"
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignContent: "center!important",
                        justifyContent: "space-between",
                        alignItems: "center!important",
                    }}
                >
                    {Object.keys(rssfeedxml).map((key, index) => {
                        return (
                            <Link
                                key={index}
                                data-loading-icon="mui-spinner mui-spinner-custom"
                                className="mui-btn mui-btn-primary mui-btn-outlined btn-lg"
                                to={{
                                    p: "/react-rssreader",
                                    sitename: key,
                                }}
                            >
                                加载{key}
                            </Link>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
    return rssmain;
}
