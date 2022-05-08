import { getGlobal } from "./getGlobal";

export function addfetch() {
    var globalthis = getGlobal();
    globalthis.fetch = require("undici").fetch;
}
