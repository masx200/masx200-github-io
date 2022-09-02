"use strict";
import { marked as parse } from "marked";
// @ts-ignore
import hljs from "../../assetsjs/highlight.min.js";
import { cachepromise } from "../../cachepromise";

import { DOMPurify } from "./DOMPurify";
import { fetchtext } from "./fetchtext";
import { myrenderer } from "./myrenderer";
export const getrenderedmarkdown = cachepromise(async function (src: string) {
    const text = await fetchtext(src);
    const dirty = parse(text, {
        renderer: new myrenderer(),
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
    const clean = DOMPurify.sanitize(dirty);
    return clean;
});
