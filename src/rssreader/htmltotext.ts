// export function htmltotext(description: string) {
//     //alert(description)
//     const body = document.implementation.createHTMLDocument("").body;
//     body.innerHTML = description;

//     const text = body.innerText;

//     // console.log("text", text);
//     //alert(text);
//     return text;
// }
import { JSDOM } from "jsdom";

const document = new JSDOM("").window.document;
export function htmltotext(description: string): string {
    //alert(description)
    const body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = description;
    if ("undefined" === typeof body.innerText) {
        Object.defineProperty(body, "innerText", {
            get() {
                var el = this.cloneNode(true); // can skip if mutability isn't a concern
                el.querySelectorAll("script,style").forEach(
                    (s: { remove: () => any }) => s.remove()
                );
                return el.textContent;
            },
            set(value) {
                this.textContent = value;
            },
        });
    }
    const text = body.innerText;

    // console.log("text", text);
    //alert(text);
    return text;
}
