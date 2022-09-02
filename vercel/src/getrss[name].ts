import { getrss } from "../../src/rssreader/getrss.ts";
import rssfeedxml from "../../src/rssreader/rssfeedxml.ts";

import {
    handler,
    cors,
    json_builder,
    conditional_get,
    etag_builder,
} from "https://deno.land/x/masx200_deno_http_middleware@2.2.1/mod.ts";
export default function (request: Request) {
    return app(request);
}
const app = handler<{}>(
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
export const config = {
    runtime: "experimental-edge",
};
