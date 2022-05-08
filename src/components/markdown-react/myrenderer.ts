"use strict";
import { Renderer } from "marked";

// cachepromise
// console.log(hljs)
// const { Renderer } = marked;
export class myrenderer extends Renderer {
    image(href: string | null, title: string | null, text: string): string {
        // console.log(href, title, text);
        var result = super.image(href, title, text);
        // console.log(result);
        if (result.startsWith("<img src=")) {
            result = result.replace("<img src=", "<img loading='lazy' src=");
        }
        return result;
    }
}
