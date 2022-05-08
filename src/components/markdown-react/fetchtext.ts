"use strict";
export async function fetchtext(url: string, fetch: typeof globalThis.fetch) {
    const r = await fetch(url);
    return r.ok ? r.text() : Promise.reject(new Error("fetch failed:" + url));
}
