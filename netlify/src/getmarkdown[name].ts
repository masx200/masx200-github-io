import markdownurls from "../../src/utils/markdownurls.ts";
// import type { Context } from "https://edge.netlify.com";
import { getrenderedmarkdown } from "../../src/components/markdown-react/getrenderedmarkdown.ts";
import {
    conditional_get,
    cors,
    etag_builder,
    handler,
} from "https://deno.land/x/masx200_deno_http_middleware@2.2.1/mod.ts";
export default function (request: Request /* , context: Context */) {
    return app(request /* , context */);
}
const app = handler</* Context */ {}>(
    etag_builder,
    conditional_get,
    cors(),
    async (ctx, next) => {
        const { request } = ctx;
        const url = new URL(request.url);
        const name = url.pathname.split("/").at(-1) || "";
        if (!Object.keys(markdownurls).includes(name)) {
            return next();
        }
        const src = Reflect.get(markdownurls, name);
        ctx.response.headers.set(
            "cache-control",
            " s-maxage=86400,max-age=86400, public"
        );
        ctx.response.body = await getrenderedmarkdown(src);

        return;
    }
);
