"use strict";
import {
    jsfuckScript,
    jsfuckString,
} from "@masx200/jsfuck-and-hieroglyphy-decoder-and-encoder";
var mymessagehandler = (e) => {
    //   try {
    //     console.log(JSFuck);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // function globalimport(srciptsrc) {
    //   importScripts(srciptsrc);
    // }

    var d = e.data;

    console.log("副线程" + "从主线程接收" + "event.data\n");
    //   console.log(...d);
    console.log(JSON.stringify(d));
    // globalimport(d[2]);
    const [code, method] = d;
    var output;
    // mui(document.getElementById("encode")).button("loading");
    if (method === "encodestring") {
        output = jsfuckString(code);
        postMessage(output);
        return;
    } else if (method === "encodescript") {
        output = jsfuckScript(code);
        postMessage(output);
        return;
    }
};
addEventListener("message", mymessagehandler);
// })();
