import { VercelRequest, VercelResponse } from "@vercel/node";
import koa from "koa";
import cors from "koa-cors";
import markdownurls from "../../src/utils/markdownurls";
const app = new koa();
app.use(cors());
app.use(async (ctx, next) => {
    const { name } = ctx.request.query;
    if (typeof name !== "string") {
        return next();
    }
    if (!Object.keys(markdownurls).includes(name)) {
        return next();
    }
    ctx.body = Reflect.get(markdownurls, name);
    return;
});
const handler = app.callback();
export default (request: VercelRequest, response: VercelResponse) => {
    handler(request, response);
};
