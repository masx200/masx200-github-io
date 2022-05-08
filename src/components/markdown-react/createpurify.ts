"use strict";
import createDOMPurify from "dompurify";
import jsdom from "jsdom";

export function createpurify() {
    const { JSDOM } = jsdom;
    const { window } = new JSDOM(``);
    //serversidedompurify
    //@ts-ignore
    const DOMPurify = createDOMPurify(window);
    return DOMPurify;
}
