parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TEm/":[function(require,module,exports) {
"use strict";function e(e,o){return r(e)||n(e,o)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function n(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}function r(e){if(Array.isArray(e))return e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=h;var o=new ClipboardJS(".btn");o.on("success",function(e){e.text||console.log("复制内容空"),e.clearSelection()});var a,c=window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react"),l=c.useState,i=c.useEffect,s=c.useRef,u=c.useCallback,d="clip"+m();function m(){return"xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}function p(){try{a.terminate(),a=void 0}catch(e){}}function h(){var t,n=e(l("0 chars"),2),r=n[0],o=n[1],h=s(),g=s();function f(e,n){console.time(e),console.log(e),a||(a=new Worker("/service-worker-hieroglyphy.c184a793.js"),console.log("创建新线程","service-worker-hieroglyphy.js")),mui(n).button("loading"),t=e,a.postMessage([v,t]),a.onmessage=function(t){var r=t.data;console.log("主线程从副线程接收event.data\n"),console.log(r),console.timeEnd(e),console.time("requestAnimationFrame"),b(r),o(r.length+" chars"),requestAnimationFrame(function(){var e;console.log("弹出消息提示"),e=m(),jQuery("#my导航栏").append(jQuery('<div id="'.concat(e,'" class="alert alert-success alert-dismissible fade show">\n                      <button type="button" class="close" data-dismiss="alert">&times;</button>\n                      <strong>成功!</strong> 编码成功提示信息。\n                      </div>')).fadeTo(1e4,.5,function(){console.log(jQuery("#"+e)),jQuery("#"+e).remove()})),console.timeEnd("requestAnimationFrame")}),mui(n).button("reset")},a.onerror=function(e){console.error("Error:",e.message,e.filename)}}var y=e(l(""),2),x=y[0],b=y[1],E=e(l("console.log('{你好吗zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')"),2),v=E[0],C=E[1],j=u(function(e){C(e.target.value)},[v]),k=u(function(e){b(e.target.value)},[x]);return i(function(){return document.title="React router App-hieroglyphy encoder",function(){p()}},[]),c.createElement("div",{class:"JSfuck-Decoder-and-hieroglyphy-decoder"},c.createElement("h1",{style:{"font-size":"30px"}},"编码hieroglyphy ",c.createElement("br",null),"encode hieroglyphy"),c.createElement("p",null,"hieroglyphy是一个工具和javascript库，用于将字符串，数字和脚本转换为（）[]"," +的等效序列！在浏览器中运行的字符。"),c.createElement("p",null,"()+[]!"),c.createElement("p",null,"浏览器兼容性: 建议在最新超高版本chrome或者Firefox或者safari浏览器中运行！"),c.createElement("br",null),c.createElement("textarea",{class:"form-control",id:"input",type:"text",value:v,onChange:j}),c.createElement("br",null),c.createElement("p",null,c.createElement("button",{ref:h,class:"btn btn-outline-success btn-lg",id:"encodescript",onClick:function(){f("encodescript",h.current)},"data-loading-icon":"mui-spinner mui-spinner-custom",type:"text"},"Encode script"),c.createElement("button",{ref:g,id:"encodestring",type:"text","data-loading-icon":"mui-spinner mui-spinner-custom",class:"btn btn-outline-info btn-lg",onClick:function(){f("encodestring",g.current)}},"Encode string")),c.createElement("div",{id:"clip"+d},c.createElement("textarea",{id:"output",class:"form-control",value:x,onChange:k})),c.createElement("div",{class:"actions"},c.createElement("span",{id:"stats"},r),c.createElement("button",{class:"btn btn-outline-primary btn-lg",id:"run",onClick:function(){var e=Function("return ".concat(x))();"encodestring"===t&&alert('"'+e+'"')}},"Run This"),c.createElement("button",{class:"btn btn-outline-success btn-lg","data-clipboard-target":"#clip"+d},"复制")),c.createElement("br",null),c.createElement("p",null,c.createElement("a",{href:"https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER"},"https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER")),c.createElement("p",null,c.createElement("a",{href:"https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js"},"https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js")))}
},{"./service-worker-hieroglyphy.js":[["service-worker-hieroglyphy.c184a793.js","9NPF"],"9NPF"]}],"ajQI":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"x/36":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"ajQI"}],"uD6L":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("x/36");b.register("js",require("uD6L"));
},{}]},{},[0,"TEm/"], null)