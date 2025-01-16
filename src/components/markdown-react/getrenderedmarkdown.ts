"use strict";

//@ts-ignore
import { DOMPurify } from "./DOMPurify.ts";
// @ts-ignore
import { baseUrl } from "marked-base-url";
//@ts-ignore
import { cachepromise } from "../../scripts/cachepromise.ts";
//@ts-ignore
import { fetchtext } from "./fetchtext.ts";
import { gfmHeadingId } from "marked-gfm-heading-id";
// @ts-ignore
import hljs from "../../assetsjs/highlight.min.js";
// @ts-ignore
import { mangle } from "marked-mangle";
import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
//@ts-ignore
import { myrenderer } from "./myrenderer.ts";
marked.use(
    markedHighlight({
        langPrefix: "hljs language-",
        highlight(code, lang) {
            // console.log(code,lang)
            // debugger
            const language = hljs.getLanguage(lang);
            // console.log(language)
            return language
                ? hljs.highlight(code, { language: lang }).value
                : hljs.highlightAuto(code).value;
        },
    })
);
const options = {
    // prefix: "my-prefix-",
};

marked.use(mangle());
marked.use(gfmHeadingId(options));
export const getrenderedmarkdown = cachepromise(async function (src: string) {
    marked.use(baseUrl(src));
    const text = await fetchtext(src);
    const dirty = marked(text, {
        langPrefix: "hljs language-",
        renderer: new myrenderer(),
        // baseUrl: src,
        // highlight(code, lang) {
        //     // console.log(code,lang)
        //     // debugger
        //     const language = hljs.getLanguage(lang);
        //     // console.log(language)
        //     return language
        //         ? hljs.highlight(code, { language: lang }).value
        //         : hljs.highlightAuto(code).value;
        // },
    });
    const clean = DOMPurify.sanitize(dirty);
    return clean;
});
