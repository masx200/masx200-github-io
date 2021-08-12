export function htmltotext(description: string) {
    //alert(description)
    const body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = description;

    const text = body.innerText;

    // console.log("text", text);
    //alert(text);
    return text;
}
