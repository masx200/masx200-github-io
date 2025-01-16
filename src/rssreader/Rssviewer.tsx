import { memo, useEffect, useMemo } from "react";
import Loading from "../Loading";
import { userss } from "./userss";

export const Rssviewer = memo(function Rssviewer({
    src,
    name,
}: {
    src: string;
    name: string;
}) {
    // useEffect(() => {
    //     console.log(src);
    // }, [src]);
    const rssfeedurl = src;
    const { data, error } = userss(name);
    // console.log({ src, data, error });
    const loaded = !!data;
    // useEffect(() => {
    //     data && console.info({ data });
    // }, [data]);
    useEffect(() => {
        error && console.error({ error });
    }, [error]);
    const showloading = useMemo(() => {
        return !data && !error;
    }, [data, error]);

    const rssstatetitle = data?.title;
    const link = data?.link;
    const rssstatedescription = data?.description;
    const rssstate = data?.content;
    const 加载失败 = !!error;
    return (
        <>
            {showloading ? (
                //@ts-ignore
                <Loading></Loading>
            ) : null}
            {加载失败 ? (
                <div>
                    <h1>Error!</h1>
                    <h2>{String(error)}</h2>
                </div>
            ) : null}
            {loaded && (
                <header
                    className="App-header"
                    style={{
                        display: loaded ? "block" : "none",
                    }}
                >
                    <div>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h5>{rssfeedurl}</h5>
                        </a>
                    </div>
                    <div style={{ maxWidth: "100%" }}>
                        <h3>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <b>{rssstatetitle}</b>
                            </a>
                        </h3>
                        <p>{rssstatedescription}</p>
                        <p>构建时间:{data?.lastBuildDate}</p>
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
                                                  <b>{e.title}</b>
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
                                              <p className="mui-ellipsis">
                                                  发布时间:{e.pubDate}
                                              </p>
                                              <details>
                                                  <summary>详情</summary>
                                                  <p
                                                      className="mui-ellipsis"
                                                      style={{
                                                          whiteSpace: "normal",
                                                          wordBreak:
                                                              "break-all",
                                                          wordWrap:
                                                              "break-word",
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
            )}
        </>
    );
});
