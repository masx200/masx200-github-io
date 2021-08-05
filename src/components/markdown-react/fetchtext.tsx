"use strict";
export async function fetchtext(url: string, opts: RequestInit = {}) {
    var r = await fetch(new URL(url).href, opts);
    if (r.ok) {
        return await r.text();
    } else {
        throw new Error("fetch failed:" + url);
    }
}
