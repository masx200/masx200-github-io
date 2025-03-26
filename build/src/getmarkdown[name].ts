import {
    conditional_get,
    cors,
    etag_builder,
    handler,
} from "masx200_deno_http_middleware";

// import type { Context } from "https://edge.netlify.com";
import { getrenderedmarkdown } from "../../src/components/markdown-react/getrenderedmarkdown.ts";
import markdownurls from "../../src/utils/markdownurls.ts";

export default function (request: Request /* , context: Context */) {
    return app(request /* , context */);
}
const app = handler(
    //</* Context */ {}>
    etag_builder,
    conditional_get,
    cors(),
    async (ctx, next) => {
        const { request } = ctx;
        const url = new URL(request.url);
        const name = url.pathname.split("/").at(-1) || "";

        const parsedname = processhtmlSuffix(name, () => next());

        if (typeof parsedname !== "string") {
            return parsedname;
        }
        if (!Object.keys(markdownurls).includes(parsedname)) {
            return next();
        }
        const src = Reflect.get(markdownurls, parsedname);
        ctx.response.headers.set(
            "cache-control",
            " s-maxage=86400,max-age=86400, public",
        );
        ctx.response.body = await getrenderedmarkdown(src);

        return;
    },
);
function processhtmlSuffix<T>(str: string, fallbackFn: () => T): string | T {
    // 使用正则表达式检查是否以.html结尾 [[4]]
    if (/\.html$/.test(str)) {
        // 使用replace方法去除末尾的.html [[10]]
        return str.replace(/\.html$/, "");
    } else {
        // 执行备用函数 [[7]]
        return fallbackFn();
    }
}
