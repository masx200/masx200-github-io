// @ts-nocheck
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
"use strict";
// import "./github.css";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from "react";
// console.log(React.memo);
import marked from "@/assetsjs/./marked.min.js";
import hljs from "@/assetsjs/./highlight.min.js";
// import $ from "jquery";
// console.log(marked, hljs);

/* 因为会被复用,所以,要根据不同的网址,缓存不同内容,否则会有冲突 */
// let allmarkcache = {};

/* 如果使用缓存可能导致:传入参数改变,但是组件内容却不刷新的情况 

缓存交给workbox了
*/

/* 外部传入的参数改变会导致组件刷新! */
const cachemarkdown = new Map();
async function fetchtext(url) {
    var r = await fetch(new URL(url).href);
    if (r.ok) {
        return await r.text();
    } else {
        throw new Error("fetch failed");
    }
}
export default React.memo(markdown);

function markdown(props) {
    console.log(cachemarkdown);
    let markdowncache = "";
    let cache加载完成 = false;
    let cache加载失败 = false;
    // eslint-disable-next-line no-unused-vars
    const Fallback = () => (
        <div>
            <h1>loading</h1>
            <span className="mui-spinner mui-spinner-custom" />
            {/* loading转圈图标 */}
        </div>
    );
    //   allmarkcache[props.src] = allmarkcache[props.src] || {};
    const [加载完成, set加载完成] = useState(
        // allmarkcache[props.src].cache加载完成 ||
        cache加载完成
    );
    const [加载失败, set加载失败] = useState(
        // allmarkcache[props.src].cache加载失败 ||
        cache加载失败
    );
    const [markdown内容, setmarkdown内容] = useState(
        // allmarkcache[props.src].markdowncache ||
        markdowncache
    );
    //   console.log(markdown内容.length);
    //   console.log(markdowncache.length);
    const ref = useRef();
    //   useEffect(
    //     () => {
    //       return () => {
    //         /* 在组件卸载时缓存内容 */
    //         /* 因为会被复用,所以,要根据不同的网址,缓存不同内容,否则会有冲突 */
    //         //   allmarkcache[props.src] = allmarkcache[props.src] || {};
    //         // allmarkcache[props.src].cache加载完成 = 加载完成;
    //         // allmarkcache[props.src].markdowncache = markdown内容;
    //         // allmarkcache[props.src].cache加载失败 = 加载失败;
    //         // console.log(allmarkcache);
    //         //   console.log(markdowncache);
    //       };
    //     },
    //     /* 组件卸载时运行 */

    //     []
    //   );
    useEffect(() => {
        if (props.src) {
            const marktext = cachemarkdown.get(props.src);
            if (marktext) {
                set加载完成(true);
                setmarkdown内容(marktext);
                return;
            }
            (async () => {
                // if (true) {
                hljs.initHighlightingOnLoad();

                // fetch(props.src)
                //   .then(r => {
                //     if (r.ok) {
                //       return r.text();
                //     } else throw new Error();
                //   })
                let text;
                try {
                    text = await fetchtext(props.src);
                } catch (error) {
                    console.error(error);
                    set加载失败(true);
                    return;
                }
                //   .catch(() => set加载失败(true))
                const divele = document.createElement("div");
                try {
                    // $(ref.current).html(marked(text));
                    /* 使用jquery的漏洞,如果内容包括html标签的话,当前网页会被覆盖 */

                    divele.innerHTML = marked(text);
                } catch (error) {
                    console.error(error);
                }

                //   .then(t => $(ref.current).html(marked(t)))
                //   .finally(() => {
                // Array.from($("pre code"))

                Array.from(
                    divele.querySelectorAll("pre code")
                ).forEach((block) => hljs.highlightBlock(block));
                set加载完成(true);
                try {
                    // setmarkdown内容(ref.current.innerHTML);
                    setmarkdown内容(divele.innerHTML);
                    cachemarkdown.set(props.src, divele.innerHTML);
                } catch (error) {
                    console.error(error);
                    //
                }

                //   });

                // .catch(() => set加载失败(true));
                // }
            })();
        }
    }, [props.src]);
    //   useEffect(() => {
    //     // console.log(
    //     //   [ref.current.innerHTML, markdown内容],
    //     //   [ref.current.innerHTML.length, markdown内容.length],
    //     //   ref.current.innerHTML !== markdown内容
    //     // );
    //     // console.log();
    //     if (ref.current.innerHTML !== markdown内容) {

    //       setmarkdown内容(ref.current.innerHTML);
    //     }
    //   }, [markdown内容]);
    return (
        <div className="container">
            <div
                id="readme"
                className="Box Box--condensed instapaper_body md js-code-block-container"
            >
                <div className="Box-header d-flex flex-items-center flex-justify-between px-2">
                    <h3 className="Box-title pr-3">
                        <svg
                            className="octicon octicon-book"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"
                            />
                        </svg>

                        <span>{props.src}</span>
                    </h3>
                    <div>
                        {/* <a
              target="_blank"
              href={props.src}
              class="Box-btn-octicon btn-octicon float-right"
              aria-label="Edit this file"
            >
              <svg
                class="octicon octicon-pencil"
                viewBox="0 0 14 16"
                version="1.1"
                width="14"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"
                />
              </svg>
            </a> */}
                    </div>
                </div>
                <div className="Box-body" style={{ padding: " 0px" }}>
                    <article
                        className="markdown-body entry-content p-5"
                        itemProp="text"
                        id="padding0"
                        // style={{ padding: " 0px !important" }}
                    >
                        <div class="article-content">
                            <div
                                ref={ref}
                                style={{ display: 加载完成 ? "block" : "none" }}
                                className="container"
                                dangerouslySetInnerHTML={{
                                    __html: markdown内容,
                                }}
                            />
                            {!加载完成 ? <Fallback /> : <React.Fragment />}
                            {/* <Fallback style={{ display: !加载完成 ? "block" : "none" }} /> */}

                            {加载失败 ? (
                                <div>
                                    <h1>Error!</h1>
                                </div>
                            ) : (
                                <React.Fragment />
                            )}
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}
