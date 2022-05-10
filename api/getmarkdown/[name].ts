//@ts-ignore
import etag from "@masx200/koa-stream-etag";
import { VercelRequest, VercelResponse } from "@vercel/node";
import koa from "koa";
import cors from "koa-cors";
// import { addfetch } from "../../src/addfetch";
import { getrenderedmarkdown } from "../../src/components/markdown-react/getrenderedmarkdown";
import markdownurls from "../../src/utils/markdownurls";
import fetch from "cross-fetch";
import conditional from "koa-conditional-get";
const app = new koa();
app.use(conditional());
app.use(etag({}));
app.use(cors({ origin: "*" }));
app.use(async (ctx, next) => {
    const { name } = ctx.request.query;
    if (typeof name !== "string") {
        return next();
    }
    if (!Object.keys(markdownurls).includes(name)) {
        return next();
    }
    const src = Reflect.get(markdownurls, name);
    ctx.response.set("cache-control", " s-maxage=86400,max-age=86400, public");
    ctx.body = await getrenderedmarkdown(
        src,
        fetch as unknown as typeof globalThis.fetch
    );
    return;
});
const handler = app.callback();
export default (request: VercelRequest, response: VercelResponse) => {
    handler(request, response);
};
