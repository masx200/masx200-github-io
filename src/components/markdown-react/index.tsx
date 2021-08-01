"use strict";

import React, { useEffect, useState, useRef } from "react";

import marked from "marked";
//@ts-ignore
import hljs from "@/assetsjs/highlight.min.js";

const cachemarkdown = new Map();
async function fetchtext(url: string, opts: RequestInit = {}) {
    var r = await fetch(new URL(url).href, opts);
    if (r.ok) {
        return await r.text();
    } else {
        throw new Error("fetch failed:" + url);
    }
}
export default React.memo(markdown);

function markdown(props: { src: string }) {
    const abortref = useRef(new AbortController());
    // console.log(cachemarkdown);
    let markdowncache = "";
    let cache加载完成 = false;
    let cache加载失败 = false;
    const Fallback = () => (
        <div>
            <h1>loading</h1>
            <span className="mui-spinner mui-spinner-custom" />
        </div>
    );

    const [加载完成, set加载完成] = useState(cache加载完成);
    const [加载失败, set加载失败] = useState(cache加载失败);
    const [markdown内容, setmarkdown内容] = useState(markdowncache);

    //已经卸载此组件
    const unmounted = useRef(false);
    useEffect(() => {
        if (props.src) {
            const marktext = cachemarkdown.get(props.src);
            if (marktext) {
                set加载完成(true);
                setmarkdown内容(marktext);
                return;
            }
            (async () => {
                hljs.highlightAll();

                let text: string;
                try {
                    text = await fetchtext(props.src, {
                        signal: abortref.current.signal,
                    });
                } catch (error) {
                    if (
                        error instanceof DOMException &&
                        error?.name === "AbortError"
                    ) {
                        console.dir(error);
                        return;
                    }
                    console.error(error);

                    unmounted.current || set加载失败(true);
                    throw error;
                    // return;
                }

                const divele = document.createElement("div");

                divele.innerHTML = marked(text);

                Array.from(divele.querySelectorAll("pre code")).forEach(
                    (block) => {
                        hljs.highlightElement(block);
                    }
                );
                unmounted.current || set加载完成(true);

                unmounted.current || setmarkdown内容(divele.innerHTML);
                cachemarkdown.set(props.src, divele.innerHTML);
            })();
        }
    }, [props.src]);
    useEffect(() => {
        return () => {
            unmounted.current = true;
            abortref.current.abort();
            //清除副作用
        };
    });
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
                    <div></div>
                </div>
                <div className="Box-body" style={{ padding: " 0px" }}>
                    <article
                        className="markdown-body entry-content p-5"
                        itemProp="text"
                        id="padding0"
                    >
                        <div className="article-content">
                            <div
                                style={{ display: 加载完成 ? "block" : "none" }}
                                className="container"
                                dangerouslySetInnerHTML={{
                                    __html: markdown内容,
                                }}
                            />
                            {!加载完成 ? <Fallback /> : <React.Fragment />}

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
