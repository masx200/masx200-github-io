import { memo, useEffect, useMemo } from "react";
import Loading from "../scripts/Loading";
import { Rssdatarenderer } from "./Rssdatarenderer";
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
                    <Rssdatarenderer
                        rssstatedescription={rssstatedescription}
                        link={link}
                        data={data}
                        rssfeedurl={rssfeedurl}
                        rssstatetitle={rssstatetitle}
                        rssstate={rssstate}
                    ></Rssdatarenderer>
                </header>
            )}
        </>
    );
});
