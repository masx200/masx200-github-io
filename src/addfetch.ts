import { getGlobal } from "./getGlobal";
import { fetch } from "undici";
export function addfetch() {
    var globalthis = getGlobal();
    globalthis.fetch = fetch;
}
