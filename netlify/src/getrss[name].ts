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
            console.log(error);
            return new Response(error?.message, { status: 500 });
        }
    },
    etag_builder,
    json_builder,
    conditional_get,
    cors(),
    async (ctx, next) => {
        const { request } = ctx;
        const url = new URL(request.url);
        const name = url.pathname.split("/").at(-1) || "";

        if (!Object.keys(rssfeedxml).includes(name)) {
            return next();
        }
        const src = Reflect.get(rssfeedxml, name);
        ctx.response.headers.set(
            "cache-control",
            " s-maxage=7200,max-age=7200, public"
        );
        ctx.response.body = await getrss(src);
        return;
    }
);
