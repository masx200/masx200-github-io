import { getGlobal } from "./getGlobal";

export function addfetch() {
    var globalthis = getGlobal();
    globalthis.fetch = require("node-fetch").default;
}
