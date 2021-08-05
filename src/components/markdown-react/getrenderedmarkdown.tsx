"use strict";
import marked from "marked";
// @ts-ignore
import hljs from "../../assetsjs/highlight.min.js";
import { fetchsource } from "../../fetchsource";
import { cachepromise } from "../../cachepromise";
// cachepromise
// console.log(hljs)
export const getrenderedmarkdown = cachepromise(async function (src: string) {
    const text = await fetchsource(src);
    return marked(text, {
        baseUrl: src,
        highlight(code, lang) {
            // console.log(code,lang)
            // debugger
            const language = hljs.getLanguage(lang);
            // console.log(language)
            return language
                ? hljs.highlight(code, { language: lang }).value
                : hljs.highlightAuto(code).value;
        },
    });
});
