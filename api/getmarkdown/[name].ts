var getGlobal = function (): any {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw new Error("unable to locate global object");
};

if (typeof fetch !== "function") {

    addfetch();
}
import { VercelRequest, VercelResponse } from "@vercel/node";
import koa from "koa";
import cors from "koa-cors";
import { getrenderedmarkdown } from "../../src/components/markdown-react/getrenderedmarkdown";
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
    const src = Reflect.get(markdownurls, name);
    ctx.response.set("cache-control", " s-maxage=86400,max-age=86400, public");
    ctx.body = await getrenderedmarkdown(src);
    return;
});
const handler = app.callback();
export default (request: VercelRequest, response: VercelResponse) => {
    handler(request, response);
};
function addfetch() {
    var globalthis = getGlobal();
    globalthis.fetch = require("node-fetch").default;
}

