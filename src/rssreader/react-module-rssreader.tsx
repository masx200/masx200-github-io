//@ts-ignore
import React, { useEffect, useMemo } from "react";
import Loading from "../Loading";
import { Link } from "../router";
import rssfeedxml from "./rssfeedxml";
import { userss } from "./userss";

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
function Rssviewer({ src }: { src: string }) {
    useEffect(() => {
        console.log(src);
    }, [src]);
    const rssfeedurl = src;
    const { data, error } = userss(src);
    console.log({ src, data, error });
    const loaded = !!data;
    useEffect(() => {
        data && console.info({ data });
    }, [data]);
    useEffect(() => {
        error && console.error({ error });
    }, [error]);
    const showloading = useMemo(() => {
        return !data && !error;
    }, [data, error]);

    const rssstatetitle = data?.title;
    const rssstatedescription = data?.description;
    const rssstate = data?.content;
    const 加载失败 = !!error;
    return (
        <>
            {showloading ? <Loading></Loading> : null}
            {加载失败 ? (
                <div>
                    <h1>Error!</h1>
                    <h2>{String(error)}</h2>
                </div>
            ) : (
                <React.Fragment />
            )}
            <header
                className="App-header"
                style={{
                    display: loaded ? "block" : "none",
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
                        {rssstate
                            ? rssstate.map((e, index) => (
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
                              ))
                            : null}
                    </ul>
                </div>
            </header>
        </>
    );
}
