import { fetch } from "undici";
import { VercelRequest, VercelResponse } from "@vercel/node";
export default (request: VercelRequest, response: VercelResponse) => {
    response.end(fetch.toString());
};
