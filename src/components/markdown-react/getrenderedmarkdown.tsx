"use strict";
import marked from "marked";
// @ts-ignore
import hljs from "../../assetsjs/highlight.min.js";
import { fetchsource } from "../../fetchsource";
import { cachepromise } from "../../cachepromise";
import createDOMPurify from "dompurify";
const DOMPurify = createDOMPurify(window);
// cachepromise
// console.log(hljs)
const { Renderer } = marked;
class myrenderer extends Renderer {
    image(href: string | null, title: string | null, text: string): string {
        console.log(href, title, text);
        var result = super.image(href, title, text);
        console.log(result);
        if (result.startsWith("<img src=")) {
            result = result.replace("<img src=", "<img loading='lazy' src=");
        }
        return result;
    }
}
export const getrenderedmarkdown = cachepromise(async function (src: string) {
    const text = await fetchsource(src);
    const dirty = marked(text, {
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
