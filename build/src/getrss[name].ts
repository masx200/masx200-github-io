import {
    conditional_get,
    cors,
    etag_builder,
    handler,
    json_builder,
} from "masx200_deno_http_middleware";

// import type { Context } from "https://edge.netlify.com";
import { getrss } from "../../src/rssreader/getrss.ts";
import rssfeedxml from "../../src/rssreader/rssfeedxml.ts";

export default function (request: Request /* , context: Context */) {
    return app(request /* , context */);
}
const app = handler(
    ///* </* Context */ {}> */
    async (_ctx, next) => {
        try {
            await next();
        } catch (error) {
            // console.log(error);
            return new Response(String(error), { status: 500 });
        }
    },
    etag_builder,
    json_builder,
    conditional_get,
    cors(),
    async (ctx, next) => {
        const { request } = ctx;
        const url = new URL(request.url);
        const name = decodeURIComponent(url.pathname.split("/").at(-1) || "");
        const parsedname = processJsonSuffix(name, () => next());

        if (typeof parsedname !== "string") {
            return parsedname;
        }
        if (!Object.keys(rssfeedxml).includes(parsedname)) {
            return next();
        }
        const src = Reflect.get(rssfeedxml, parsedname);
        ctx.response.headers.set(
            "cache-control",
            " s-maxage=7200,max-age=7200, public",
        );
        ctx.response.body = await getrss(src);
        return;
    },
);
function processJsonSuffix<T>(str: string, fallbackFn: () => T): string | T {
    // 使用正则表达式检查是否以.json结尾 [[4]]
    if (/\.json$/.test(str)) {
        // 使用replace方法去除末尾的.json [[10]]
        return str.replace(/\.json$/, "");
    } else {
        // 执行备用函数 [[7]]
        return fallbackFn();
    }
}
