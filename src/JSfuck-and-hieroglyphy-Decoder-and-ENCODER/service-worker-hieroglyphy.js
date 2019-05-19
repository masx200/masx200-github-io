/* var sum = 0
for (var i = 0; i < 128; i++) {
    var c = String.fromCharCode(i);
    var out = hieroglyphy.hieroglyphyScript(c)
    sum += out.length
    console.log(i, c, out.length)
}
console.log(sum, sum / 128) */
(() => {
var hieroglyphy=import("hieroglyphy.js")
addEventListener("message", e => {
    var d = e.data;
  
    console.log("副线程" + "从主线程接收" + "event.data\n");
    console.log(...d);
  
   // importScripts(d[2]);
    
      // mui(document.getElementById("encode")).button("loading");
      if( "encodescript"===d[1]){
        var output = hieroglyphy.hieroglyphyScript((d[0]))
      }else if("encodestring"===d[1]){
        var output = hieroglyphy.hieroglyphyString((d[0]))
      }
    //   var output = JSFuck.encode(d[0], d[1]);
      // $2("output").value = output;
      // $2("stats").innerHTML = output.length + " chars";
      // mui(document.getElementById("encode")).button("reset");
      postMessage(output);
    
  });
  }();
