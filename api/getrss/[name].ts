//@ts-ignore
import etag from "@masx200/koa-stream-etag";
import { VercelRequest, VercelResponse } from "@vercel/node";
import koa from "koa";
import cors from "koa-cors";

import { getrss } from "../../src/rssreader/getrss";
import rssfeedxml from "../../src/rssreader/rssfeedxml";
import installNodeFetch from "@hattip/polyfills/node-fetch";
import conditional from "koa-conditional-get";
installNodeFetch();
const app = new koa();
app.use(conditional());
app.use(etag({}));
app.use(cors({ origin: "*" }));
app.use(async (ctx, next) => {
    const { name } = ctx.request.query;
    if (typeof name !== "string") {
        return next();
    }
    if (!Object.keys(rssfeedxml).includes(name)) {
        return next();
    }
    const src = Reflect.get(rssfeedxml, name);
    ctx.response.set("cache-control", " s-maxage=3600,max-age=3600, public");
    ctx.body = await getrss(src);
    return;
});
const handler = app.callback();
export default (request: VercelRequest, response: VercelResponse) => {
    handler(request, response);
};
