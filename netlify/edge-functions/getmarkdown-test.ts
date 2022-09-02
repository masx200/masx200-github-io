import type { Context } from "https://edge.netlify.com";
export default function (request: Request, context: Context) {
    return context.json(Object.fromEntries(request.headers));
}
