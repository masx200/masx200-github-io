import type { Context } from "https://edge.netlify.com";
export default function (request: Request, context: Context) {
    return context.json({
        method: request.method,
        headers: Object.fromEntries(request.headers),
        url: request.url,
    });
}
