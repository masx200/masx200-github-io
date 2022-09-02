import type { Context } from "https://edge.netlify.com";
export default function (request: Request, context: Context) {
    const url = new URL(request.url);
    const path = url.pathname.split("/").at(-1) || "";
    return context.json({
        keys: Reflect.ownKeys(context),
        site: context.site,
        requestId: context.requestId,
        geo: context.geo,
        ip: context.ip,
        path,
        method: request.method,
        headers: Object.fromEntries(request.headers),
        url: request.url,
    });
}
