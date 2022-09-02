import type { Context } from "https://edge.netlify.com";
import { getrss } from "../../src/rssreader/getrss.ts";
import rssfeedxml from "../../src/rssreader/rssfeedxml.ts";

import {
    handler,
    cors,
    json_builder,
    conditional_get,
    etag_builder,
} from "https://deno.land/x/masx200_deno_http_middleware@2.2.1/mod.ts";
export default function (request: Request, context: Context) {
    return app(request, context);
}
const app = handler<Context>(
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
            " s-maxage=3600,max-age=3600, public"
        );
        ctx.response.body = await getrss(src);
        return;
    }
);
