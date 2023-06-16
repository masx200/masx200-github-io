"use strict";

import {
    hieroglyphyScript,
    hieroglyphyString,
} from "@masx200/jsfuck-and-hieroglyphy-decoder-and-encoder";
addEventListener("message", (e) => {
    // var hieroglyphy = WorkerGlobalScope.hieroglyphy;
    //   console.log( (typeof window !== 'undefined' ? window : false) ||
    //   (typeof WorkerGlobalScope !== 'undefined' ? WorkerGlobalScope : false))
    var d = e.data;

    // console.log("副线程" + "从主线程接收" + "event.data\n");
    // console.log(JSON.stringify(d));
    const [code, method] = d;
    //   if (typeof hieroglyphy === "undefined") {
    //     var hieroglyphy = d[2];
    //   }

    //   importScripts(d[2]);
    //   var hieroglyphy = WorkerGlobalScope.hieroglyphy;
    // var hieroglyphy= import(d[2]);
    // mui(document.getElementById("encode")).button("loading");
    let output;
    if ("encodescript" === method) {
        output = hieroglyphyScript(code);
        postMessage(output);
        return;
    } else if ("encodestring" === method) {
        output = hieroglyphyString(code);
        postMessage(output);
        return;
    }
    //   var output = JSFuck.encode(d[0], d[1]);
    // $2("output").value = output;
    // $2("stats").innerHTML = output.length + " chars";
    // mui(document.getElementById("encode")).button("reset");
});
//})();
