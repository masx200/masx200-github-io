!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.4.0/",r(r.s=1)}([function(e,t,r){"use strict";!function(t){var r,n,o,u,i,c,f,l,a;function p(e,t){for(var r=e.toString(16);r.length<t;)r="0"+r;return r}function s(e){return l+"("+g("%"+p(e,2))+")"}function d(e){var t,r,n,o=e.charCodeAt(0);return void 0!==i[e]?i[e]:"\\"===e||"x"==e?(i[e]=s(o),i[e]):(n=function(e){return g("\\u"+p(e,4))}(o),o<128&&(t=s(o),n.length>t.length&&(n=t),r=function(e){return g("\\x"+p(e,2))}(o),n.length>r.length&&(n=r)),i[e]=n,n)}function g(e){var t,r="";for(t=0;t<e.length;t+=1)r+=t>0?"+":"",r+=d(e[t]);return r}function y(e){return c+"("+g(e)+")()"}a={hieroglyphyString:g,hieroglyphyNumber:function(e){if((e=+e)<=9)return r[e];return"+("+g(e.toString(10))+")"},hieroglyphyScript:y},e.exports=a,"[]+{}","+{}+[]","!![]+[]","![]+[]","[][[]]+[]",(i={0:"("+(r=["+[]","+!![]","!+[]+!![]","!+[]+!![]+!![]","!+[]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]"])[0]+"+[])",1:"("+r[1]+"+[])",2:"("+r[2]+"+[])",3:"("+r[3]+"+[])",4:"("+r[4]+"+[])",5:"("+r[5]+"+[])",6:"("+r[6]+"+[])",7:"("+r[7]+"+[])",8:"("+r[8]+"+[])",9:"("+r[9]+"+[])"})[" "]="([]+{})["+r[7]+"]",i["["]="([]+{})["+r[0]+"]",i["]"]="([]+{})["+i[1]+"+"+i[4]+"]",i.a="(+{}+[])["+r[1]+"]",i.b="([]+{})["+r[2]+"]",i.c="([]+{})["+r[5]+"]",i.d="([][[]]+[])["+r[2]+"]",i.e="([][[]]+[])["+r[3]+"]",i.f="(![]+[])["+r[0]+"]",i.i="([][[]]+[])["+r[5]+"]",i.j="([]+{})["+r[3]+"]",i.l="(![]+[])["+r[2]+"]",i.n="([][[]]+[])["+r[1]+"]",i.o="([]+{})["+r[1]+"]",i.r="(!![]+[])["+r[1]+"]",i.s="(![]+[])["+r[3]+"]",i.t="(!![]+[])["+r[0]+"]",i.u="([][[]]+[])["+r[0]+"]",i.N="(+{}+[])["+r[0]+"]",i.O="([]+{})["+r[8]+"]",u="[]+([]+{})["+g("constructor")+"]",i.S="("+u+")["+r[9]+"]",i.g="("+u+")[("+r[7]+")+("+r[7]+")]",n="+("+r[1]+"+"+i.e+"+"+i[1]+"+"+i[0]+"+"+i[0]+"+"+i[0]+")+[]",i.y="("+n+")["+r[7]+"]",i.I="("+n+")["+r[0]+"]",o="+("+r[1]+"+"+i.e+"+"+i[1]+"+"+i[0]+"+"+i[0]+")+[]",i["+"]="("+o+")["+r[2]+"]",c="[]["+g("sort")+"]["+g("constructor")+"]",i.h="(("+r[9]+")+("+r[8]+"))["+g("toString")+"](("+r[9]+")+("+r[9]+"))",i.p="(("+r[9]+")+("+r[9]+")+("+r[7]+"))["+g("toString")+"](("+r[9]+")+("+r[9]+")+("+r[8]+"))",l=y("return unescape"),f=y("return escape"),i["%"]=f+"("+g("[")+")["+r[0]+"]",i["{"]="(+{}+[]+[]["+g("filter")+"])["+i[2]+"+"+i[1]+"]",i["}"]="(+{}+[]+[]["+g("filter")+"])["+i[3]+"+"+i[7]+"]"}("undefined"!==typeof window&&window||"undefined"!==typeof WorkerGlobalScope&&WorkerGlobalScope)},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);addEventListener("message",(function(e){var t,r=e.data;"encodescript"===r[1]?t=o.a.hieroglyphyScript(r[0]):"encodestring"===r[1]&&(t=o.a.hieroglyphyString(r[0])),postMessage(t)}))}]);