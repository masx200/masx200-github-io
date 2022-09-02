"use strict";
import createDOMPurify from "dompurify";

import { parseHTML } from "linkedom";
export function JSDOM(html: string) {
    return parseHTML(html);
}
export function createpurify() {
    const { window } = JSDOM(``);
    //serversidedompurify
    //@ts-ignore
    const DOMPurify = createDOMPurify(window);
    return DOMPurify;
}
