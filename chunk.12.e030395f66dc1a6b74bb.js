(("undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||this).webpackJsonp=("undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||this).webpackJsonp||[]).push([[12],{11:function(e,t,n){"use strict";var r=window.URL||window.webkitURL;e.exports=function(t,n){try{try{var o;try{(o=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)).append(t),o=o.getBlob()}catch(e){o=new Blob([t])}return new Worker(r.createObjectURL(o))}catch(e){return new Worker("data:application/javascript,"+encodeURIComponent(t))}}catch(e){if(!n)throw Error("Inline worker is not supported");return new Worker(n)}}},8:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=e[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return r})},84:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return x});var r,o=n(8),i=n(85),l=n.n(i),a=n(7),c=n.n(a),u=n(12),s=n.n(u),d=n(9),h=n.n(d).a,f=c.a.useState,p=c.a.useEffect,b=c.a.useRef,y=c.a.useCallback,g="clip"+m();function m(){return"xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}function x(){var e,t=f("0 chars"),n=Object(o.a)(t,2),i=n[0],a=n[1],u=b(),d=b();function x(t,n){r=r||l()(),s()(n).button("loading"),e=t,r.postMessage([O,e]),r.onmessage=function(e){var t=e.data;S(t),a(t.length+" chars"),requestAnimationFrame(function(){!function(){var e=m();h("#my\u5bfc\u822a\u680f").append(h('<div id="'.concat(e,'" class="alert alert-success alert-dismissible fade show">\n                      <button type="button" class="close" data-dismiss="alert">&times;</button>\n                      <strong>\u6210\u529f!</strong> \u7f16\u7801\u6210\u529f\u63d0\u793a\u4fe1\u606f\u3002\n                      </div>')).fadeTo(1e4,.5,function(){h("#"+e).remove()}))}()}),s()(n).button("reset")},r.onerror=function(e){throw new Error(e.message+" "+e.filename)}}var v=f(""),w=Object(o.a)(v,2),E=w[0],S=w[1],j=f("console.log('{\u4f60\u597d\u5417zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')"),k=Object(o.a)(j,2),O=k[0],B=k[1],C=y(function(e){B(e.target.value)},[O]),P=y(function(e){S(e.target.value)},[E]);return p(function(){return document.title="React router App-hieroglyphy encoder",function(){!function(){try{r.terminate(),r=void 0}catch(t){}}()}},[]),c.a.createElement("div",{class:"jdahd"},c.a.createElement("h1",{style:{"font-size":"30px"}},"\u7f16\u7801hieroglyphy ",c.a.createElement("br",null),"encode hieroglyphy"),c.a.createElement("p",null,"hieroglyphy\u662f\u4e00\u4e2a\u5de5\u5177\u548cjavascript\u5e93\uff0c\u7528\u4e8e\u5c06\u5b57\u7b26\u4e32\uff0c\u6570\u5b57\u548c\u811a\u672c\u8f6c\u6362\u4e3a\uff08\uff09[]"," +\u7684\u7b49\u6548\u5e8f\u5217\uff01\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u7684\u5b57\u7b26\u3002"),c.a.createElement("p",null,"()+[]!"),c.a.createElement("p",null,"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027: \u5efa\u8bae\u5728\u6700\u65b0\u8d85\u9ad8\u7248\u672cchrome\u6216\u8005Firefox\u6216\u8005safari\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\uff01"),c.a.createElement("br",null),c.a.createElement("textarea",{class:"form-control",id:"input",type:"text",value:O,onChange:C}),c.a.createElement("br",null),c.a.createElement("p",null,c.a.createElement("button",{ref:u,class:"btn btn-outline-success btn-lg",id:"encodescript",onClick:function(e){x("encodescript",e.target)},"data-loading-icon":"mui-spinner mui-spinner-custom",type:"text"},"Encode script"),c.a.createElement("button",{ref:d,id:"encodestring",type:"text","data-loading-icon":"mui-spinner mui-spinner-custom",class:"btn btn-outline-info btn-lg",onClick:function(e){x("encodestring",e.target)}},"Encode string")),c.a.createElement("div",{id:"clip"+g},c.a.createElement("textarea",{id:"output",class:"form-control",value:E,onChange:P})),c.a.createElement("div",{class:"actions"},c.a.createElement("span",{id:"stats"},i),c.a.createElement("button",{class:"btn btn-outline-primary btn-lg",id:"run",onClick:function(){var t=Function("return ".concat(E))();"encodestring"===e&&alert('"'+t+'"')}},"Run This"),c.a.createElement("button",{class:"btn btn-outline-success btn-lg","data-clipboard-target":"#clip"+g},"\u590d\u5236")),c.a.createElement("br",null),c.a.createElement("p",null,c.a.createElement("a",{href:"https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER"},"https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER")),c.a.createElement("p",null,c.a.createElement("a",{href:"https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js"},"https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js")))}},85:function(e,t,n){e.exports=function(){return n(11)('!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="./",t(t.s=1)}([function(e,r,t){"use strict";(function(e){function t(e,r){for(var t=e.toString(16);t.length<r;)t="0"+t;return t}function n(e){return j+"("+i("%"+t(e,2))+")"}function o(e){var r,o,u,c=e.charCodeAt(0);return h[e]!==f?h[e]:"\\\\"===e||"x"==e?(h[e]=n(c),h[e]):(u=i("\\\\u"+t(c,4)),c<128&&(r=n(c),u.length>r.length&&(u=r),o=i("\\\\x"+t(c,2)),u.length>o.length&&(u=o)),h[e]=u)}function i(e){var r,t="";for(r=0;r<e.length;r+=1)t+=0<r?"+":"",t+=o(e[r]);return t}function u(e){return v+"("+i(e)+")()"}var c,f,l,a,d,p,s,y,g,b,h,v,S,j,m;r.a=(m={hieroglyphyString:i,hieroglyphyNumber:function(e){return(e=+e)<=9?l[e]:"+("+i(e.toString(10))+")"},hieroglyphyScript:u},(c="undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||void 0).define&&c.define.amd?c.define([],m):"undefined"!=typeof exports?e.exports=m:c.hieroglyphy=m,a="+{}+[]",d="!![]+[]",p="![]+[]",s="[][[]]+[]",(h={0:"("+(l=["+[]","+!![]","!+[]+!![]","!+[]+!![]+!![]","!+[]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]"])[0]+"+[])",1:"("+l[1]+"+[])",2:"("+l[2]+"+[])",3:"("+l[3]+"+[])",4:"("+l[4]+"+[])",5:"("+l[5]+"+[])",6:"("+l[6]+"+[])",7:"("+l[7]+"+[])",8:"("+l[8]+"+[])",9:"("+l[9]+"+[])"})[" "]="([]+{})["+l[7]+"]",h["["]="([]+{})["+l[0]+"]",h["]"]="([]+{})["+h[1]+"+"+h[4]+"]",h.a="("+a+")["+l[1]+"]",h.b="([]+{})["+l[2]+"]",h.c="([]+{})["+l[5]+"]",h.d="("+s+")["+l[2]+"]",h.e="("+s+")["+l[3]+"]",h.f="("+p+")["+l[0]+"]",h.i="("+s+")["+l[5]+"]",h.j="([]+{})["+l[3]+"]",h.l="("+p+")["+l[2]+"]",h.n="("+s+")["+l[1]+"]",h.o="([]+{})["+l[1]+"]",h.r="("+d+")["+l[1]+"]",h.s="("+p+")["+l[3]+"]",h.t="("+d+")["+l[0]+"]",h.u="("+s+")["+l[0]+"]",h.N="("+a+")["+l[0]+"]",h.O="([]+{})["+l[8]+"]",b="[]+([]+{})["+i("constructor")+"]",h.S="("+b+")["+l[9]+"]",h.g="("+b+")[("+l[7]+")+("+l[7]+")]",y="+("+l[1]+"+"+h.e+"+"+h[1]+"+"+h[0]+"+"+h[0]+"+"+h[0]+")+[]",h.y="("+y+")["+l[7]+"]",h.I="("+y+")["+l[0]+"]",g="+("+l[1]+"+"+h.e+"+"+h[1]+"+"+h[0]+"+"+h[0]+")+[]",h["+"]="("+g+")["+l[2]+"]",v="[]["+i("sort")+"]["+i("constructor")+"]",h.h="(("+l[9]+")+("+l[8]+"))["+i("toString")+"](("+l[9]+")+("+l[9]+"))",h.p="(("+l[9]+")+("+l[9]+")+("+l[7]+"))["+i("toString")+"](("+l[9]+")+("+l[9]+")+("+l[8]+"))",j=u("return unescape"),S=u("return escape"),h["%"]=S+"("+i("[")+")["+l[0]+"]",h["{"]="("+a+"+[]["+i("filter")+"])["+h[2]+"+"+h[1]+"]",h["}"]="("+a+"+[]["+i("filter")+"])["+h[3]+"+"+h[7]+"]",m)}).call(this,t(2)(e))},function(e,r,t){"use strict";t.r(r);var n=t(0);addEventListener("message",function(e){var r=e.data;if("encodescript"===r[1])var t=n.a.hieroglyphyScript(r[0]);else"encodestring"===r[1]&&(t=n.a.hieroglyphyString(r[0]));postMessage(t)})},function(e,r){e.exports=function(e){if(!e.webpackPolyfill){var r=Object.create(e);r.children||(r.children=[]),Object.defineProperty(r,"loaded",{enumerable:!0,get:function(){return r.l}}),Object.defineProperty(r,"id",{enumerable:!0,get:function(){return r.i}}),Object.defineProperty(r,"exports",{enumerable:!0}),r.webpackPolyfill=1}return r}}]);',n.p+"service-worker-hieroglyphy.worker.f346ee3082cd3108a3a7.worker.js")}}}]);