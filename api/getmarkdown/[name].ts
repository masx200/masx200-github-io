//@ts-ignore
import etag from "@masx200/koa-stream-etag";
import { VercelRequest, VercelResponse } from "@vercel/node";
import koa from "koa";
import cors from "koa-cors";

import { getrenderedmarkdown } from "../../src/components/markdown-react/getrenderedmarkdown";
import markdownurls from "../../src/utils/markdownurls";
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
    if (!Object.keys(markdownurls).includes(name)) {
        return next();
    }
    const src = Reflect.get(markdownurls, name);
    ctx.response.set("cache-control", " s-maxage=86400,max-age=86400, public");
    ctx.body = await getrenderedmarkdown(src);
    return;
});
const handler = app.callback();
export default (request: VercelRequest, response: VercelResponse) => {
    handler(request, response);
};
