import { cachepromise } from "./cachepromise";

export const fetchsource = cachepromise(async function (
    url: string,
    opts: RequestInit = {},
) {
    const r = await fetch(url, opts);
    return r.ok ? r.text() : Promise.reject(new Error("fetch failed:" + url));
});
