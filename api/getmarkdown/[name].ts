import { VercelRequest, VercelResponse } from "@vercel/node";
import koa from "koa";
import cors from "koa-cors";
const etag = require("@masx200/koa-stream-etag");
import { getrenderedmarkdown } from "../../src/components/markdown-react/getrenderedmarkdown";
import markdownurls from "../../src/utils/markdownurls";
import { addfetch } from "../../src/addfetch";
if (typeof fetch !== "function") {
    addfetch();
}

const app = new koa();app.use(etag({}));
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
