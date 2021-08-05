"use strict";
import "highlight.js/styles/github.css";
import React, { useEffect, useMemo } from "react";
import { usemarkdown } from "./usemarkdown";

export default React.memo(markdown);
const Fallback = () => (
    <div>
        <h1>loading</h1>
        <span className="mui-spinner mui-spinner-custom" />
    </div>
);
function markdown(props: { src: string }) {
    const { src } = props;
    const { data, error } = usemarkdown(src);

    const loading = useMemo(() => {
        return !error && !data;
    }, [data, error]);
    useEffect(() => {
        data && console.info({ data });
    }, [data]);
    useEffect(() => {
        error && console.error({ error });
    }, [error]);
    const 加载失败 = !!error;
    const 加载完成 = !!data;

    const markdown内容 = data || "";
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
                            {loading ? <Fallback /> : <React.Fragment />}

                            {加载失败 ? (
                                <div>
                                    <h1>Error!</h1>
                                    <h2>{String(error)}</h2>
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
