(("undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||this).webpackJsonp=("undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||this).webpackJsonp||[]).push([[10],{10:function(e,t,n){"use strict";var o=window.URL||window.webkitURL;e.exports=function(t,n){try{try{var r;try{(r=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)).append(t),r=r.getBlob()}catch(e){r=new Blob([t])}return new Worker(o.createObjectURL(r))}catch(e){return new Worker("data:application/javascript,"+encodeURIComponent(t))}}catch(e){if(!n)throw Error("Inline worker is not supported");return new Worker(n)}}},62:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var m,x=n(7),r=n(63),v=n.n(r),o=n(6),w=n.n(o),a=n(11),E=n.n(a),i=n(8),S=n.n(i).a,k=w.a.useState,j=w.a.useEffect,O=w.a.useRef,B=w.a.useCallback,C="clip"+P();function P(){return"xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}function c(){var t,e=k("0 chars"),n=Object(x.a)(e,2),r=n[0],o=n[1],a=O(),i=O();function c(e,n){m=m||v()(),E()(n).button("loading"),t=e,m.postMessage([b,t]),m.onmessage=function(e){var t=e.data;s(t),o(t.length+" chars"),requestAnimationFrame(function(){var e;e=P(),S("#my导航栏").append(S('<div id="'.concat(e,'" class="alert alert-success alert-dismissible fade show">\n                      <button type="button" class="close" data-dismiss="alert">&times;</button>\n                      <strong>成功!</strong> 编码成功提示信息。\n                      </div>')).fadeTo(1e4,.5,function(){S("#"+e).remove()}))}),E()(n).button("reset")},m.onerror=function(e){throw new Error(e.message+" "+e.filename)}}var l=k(""),u=Object(x.a)(l,2),p=u[0],s=u[1],d=k("console.log('{你好吗zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')"),f=Object(x.a)(d,2),b=f[0],y=f[1],h=B(function(e){y(e.target.value)},[b]),g=B(function(e){s(e.target.value)},[p]);return j(function(){return document.title="React router App-hieroglyphy encoder",function(){!function(){try{m.terminate(),m=void 0}catch(e){}}()}},[]),w.a.createElement("div",{class:"jdahd"},w.a.createElement("h1",{style:{"font-size":"30px"}},"编码hieroglyphy ",w.a.createElement("br",null),"encode hieroglyphy"),w.a.createElement("p",null,"hieroglyphy是一个工具和javascript库，用于将字符串，数字和脚本转换为（）[]"," +的等效序列！在浏览器中运行的字符。"),w.a.createElement("p",null,"()+[]!"),w.a.createElement("p",null,"浏览器兼容性: 建议在最新超高版本chrome或者Firefox或者safari浏览器中运行！"),w.a.createElement("br",null),w.a.createElement("textarea",{class:"form-control",id:"input",type:"text",value:b,onChange:h}),w.a.createElement("br",null),w.a.createElement("p",null,w.a.createElement("button",{ref:a,class:"btn btn-outline-success btn-lg",id:"encodescript",onClick:function(e){c("encodescript",e.target)},"data-loading-icon":"mui-spinner mui-spinner-custom",type:"text"},"Encode script"),w.a.createElement("button",{ref:i,id:"encodestring",type:"text","data-loading-icon":"mui-spinner mui-spinner-custom",class:"btn btn-outline-info btn-lg",onClick:function(e){c("encodestring",e.target)}},"Encode string")),w.a.createElement("div",{id:"clip"+C},w.a.createElement("textarea",{id:"output",class:"form-control",value:p,onChange:g})),w.a.createElement("div",{class:"actions"},w.a.createElement("span",{id:"stats"},r),w.a.createElement("button",{class:"btn btn-outline-primary btn-lg",id:"run",onClick:function(){var e=Function("return ".concat(p))();"encodestring"===t&&alert('"'+e+'"')}},"Run This"),w.a.createElement("button",{class:"btn btn-outline-success btn-lg","data-clipboard-target":"#clip"+C},"复制")),w.a.createElement("br",null),w.a.createElement("p",null,w.a.createElement("a",{href:"https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER"},"https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER")),w.a.createElement("p",null,w.a.createElement("a",{href:"https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js"},"https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js")))}},63:function(e,t,n){e.exports=function(){return n(10)('!function(r){var n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./",o(o.s=1)}([function(e,b,t){"use strict";(function(e){function f(e,t){for(var r=e.toString(16);r.length<t;)r="0"+r;return r}function l(e){return y+"("+a("%"+f(e,2))+")"}function a(e){var t,r,n,o,i,u,c="";for(t=0;t<e.length;t+=1)c+=0<t?"+":"",c+=(r=e[t],i=o=n=void 0,u=r.charCodeAt(0),p[r]!==d?p[r]:"\\\\"===r||"x"==r?(p[r]=l(u),p[r]):(i=a("\\\\u"+f(u,4)),u<128&&(n=l(u),i.length>n.length&&(i=n),o=a("\\\\x"+f(u,2)),i.length>o.length&&(i=o)),p[r]=i));return c}function t(e){return c+"("+a(e)+")()"}var r,d,n,o,i,u,p,c,s,y,g;b.a=(r="undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||void 0,g={hieroglyphyString:a,hieroglyphyNumber:function(e){return(e=+e)<=9?n[e]:"+("+a(e.toString(10))+")"},hieroglyphyScript:t},r.define&&r.define.amd?r.define([],g):"undefined"!=typeof exports?e.exports=g:r.hieroglyphy=g,(p={0:"("+(n=["+[]","+!![]","!+[]+!![]","!+[]+!![]+!![]","!+[]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]"])[0]+"+[])",1:"("+n[1]+"+[])",2:"("+n[2]+"+[])",3:"("+n[3]+"+[])",4:"("+n[4]+"+[])",5:"("+n[5]+"+[])",6:"("+n[6]+"+[])",7:"("+n[7]+"+[])",8:"("+n[8]+"+[])",9:"("+n[9]+"+[])"})[" "]="([]+{})["+n[7]+"]",p["["]="([]+{})["+n[0]+"]",p["]"]="([]+{})["+p[1]+"+"+p[4]+"]",p.a="(+{}+[])["+n[1]+"]",p.b="([]+{})["+n[2]+"]",p.c="([]+{})["+n[5]+"]",p.d="([][[]]+[])["+n[2]+"]",p.e="([][[]]+[])["+n[3]+"]",p.f="(![]+[])["+n[0]+"]",p.i="([][[]]+[])["+n[5]+"]",p.j="([]+{})["+n[3]+"]",p.l="(![]+[])["+n[2]+"]",p.n="([][[]]+[])["+n[1]+"]",p.o="([]+{})["+n[1]+"]",p.r="(!![]+[])["+n[1]+"]",p.s="(![]+[])["+n[3]+"]",p.t="(!![]+[])["+n[0]+"]",p.u="([][[]]+[])["+n[0]+"]",p.N="(+{}+[])["+n[0]+"]",p.O="([]+{})["+n[8]+"]",u="[]+([]+{})["+a("constructor")+"]",p.S="("+u+")["+n[9]+"]",p.g="("+u+")[("+n[7]+")+("+n[7]+")]",o="+("+n[1]+"+"+p.e+"+"+p[1]+"+"+p[0]+"+"+p[0]+"+"+p[0]+")+[]",p.y="("+o+")["+n[7]+"]",p.I="("+o+")["+n[0]+"]",i="+("+n[1]+"+"+p.e+"+"+p[1]+"+"+p[0]+"+"+p[0]+")+[]",p["+"]="("+i+")["+n[2]+"]",c="[]["+a("sort")+"]["+a("constructor")+"]",p.h="(("+n[9]+")+("+n[8]+"))["+a("toString")+"](("+n[9]+")+("+n[9]+"))",p.p="(("+n[9]+")+("+n[9]+")+("+n[7]+"))["+a("toString")+"](("+n[9]+")+("+n[9]+")+("+n[8]+"))",y=t("return unescape"),s=t("return escape"),p["%"]=s+"("+a("[")+")["+n[0]+"]",p["{"]="(+{}+[]+[]["+a("filter")+"])["+p[2]+"+"+p[1]+"]",p["}"]="(+{}+[]+[]["+a("filter")+"])["+p[3]+"+"+p[7]+"]",g)}).call(this,t(2)(e))},function(e,t,r){"use strict";r.r(t);var n=r(0);addEventListener("message",function(e){var t=e.data;if("encodescript"===t[1])var r=n.a.hieroglyphyScript(t[0]);else"encodestring"===t[1]&&(r=n.a.hieroglyphyString(t[0]));postMessage(r)})},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}]);',n.p+"service-worker-hieroglyphy.worker.d83acdccc25bc444d567.worker.js")}},7:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return r})}}]);