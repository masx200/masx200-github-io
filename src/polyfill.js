import importScripts from "./importscripts";

if (typeof AbortController !== "function") {
    importScripts(
        "https://polyfill.io/v3/polyfill.min.js?features=AbortController"
    );
}
