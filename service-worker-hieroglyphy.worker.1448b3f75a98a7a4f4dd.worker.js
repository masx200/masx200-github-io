!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.3.4/",r(r.s=1)}([function(e,t,r){"use strict";function n(e,t){for(var r=e.toString(16);r.length<t;)r="0"+r;return r}function o(e){return S+"("+i("%"+n(e,2))+")"}function u(e){var t,r,u,c=e.charCodeAt(0);return void 0!==h[e]?h[e]:"\\"===e||"x"==e?(h[e]=o(c),h[e]):(u=function(e){return i("\\u"+n(e,4))}(c),c<128&&(t=o(c),u.length>t.length&&(u=t),r=function(e){return i("\\x"+n(e,2))}(c),u.length>r.length&&(u=r)),h[e]=u)}function i(e){var t,r="";for(t=0;t<e.length;t+=1)r+=0<t?"+":"",r+=u(e[t]);return r}function c(e){return b+"("+i(e)+")()"}var f,l,a,p,s,d,g,y,h,b,v,S,m;"undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope,m={hieroglyphyString:i,hieroglyphyNumber:function(e){return(e=+e)<=9?f[e]:"+("+i(e.toString(10))+")"},hieroglyphyScript:c},e.exports=m,l="+{}+[]",a="!![]+[]",p="![]+[]",s="[][[]]+[]",(h={0:"("+(f=["+[]","+!![]","!+[]+!![]","!+[]+!![]+!![]","!+[]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]"])[0]+"+[])",1:"("+f[1]+"+[])",2:"("+f[2]+"+[])",3:"("+f[3]+"+[])",4:"("+f[4]+"+[])",5:"("+f[5]+"+[])",6:"("+f[6]+"+[])",7:"("+f[7]+"+[])",8:"("+f[8]+"+[])",9:"("+f[9]+"+[])"})[" "]="([]+{})["+f[7]+"]",h["["]="([]+{})["+f[0]+"]",h["]"]="([]+{})["+h[1]+"+"+h[4]+"]",h.a="("+l+")["+f[1]+"]",h.b="([]+{})["+f[2]+"]",h.c="([]+{})["+f[5]+"]",h.d="("+s+")["+f[2]+"]",h.e="("+s+")["+f[3]+"]",h.f="("+p+")["+f[0]+"]",h.i="("+s+")["+f[5]+"]",h.j="([]+{})["+f[3]+"]",h.l="("+p+")["+f[2]+"]",h.n="("+s+")["+f[1]+"]",h.o="([]+{})["+f[1]+"]",h.r="("+a+")["+f[1]+"]",h.s="("+p+")["+f[3]+"]",h.t="("+a+")["+f[0]+"]",h.u="("+s+")["+f[0]+"]",h.N="("+l+")["+f[0]+"]",h.O="([]+{})["+f[8]+"]",y="[]+([]+{})["+i("constructor")+"]",h.S="("+y+")["+f[9]+"]",h.g="("+y+")[("+f[7]+")+("+f[7]+")]",d="+("+f[1]+"+"+h.e+"+"+h[1]+"+"+h[0]+"+"+h[0]+"+"+h[0]+")+[]",h.y="("+d+")["+f[7]+"]",h.I="("+d+")["+f[0]+"]",g="+("+f[1]+"+"+h.e+"+"+h[1]+"+"+h[0]+"+"+h[0]+")+[]",h["+"]="("+g+")["+f[2]+"]",b="[]["+i("sort")+"]["+i("constructor")+"]",h.h="(("+f[9]+")+("+f[8]+"))["+i("toString")+"](("+f[9]+")+("+f[9]+"))",h.p="(("+f[9]+")+("+f[9]+")+("+f[7]+"))["+i("toString")+"](("+f[9]+")+("+f[9]+")+("+f[8]+"))",S=c("return unescape"),v=c("return escape"),h["%"]=v+"("+i("[")+")["+f[0]+"]",h["{"]="("+l+"+[]["+i("filter")+"])["+h[2]+"+"+h[1]+"]",h["}"]="("+l+"+[]["+i("filter")+"])["+h[3]+"+"+h[7]+"]"},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);addEventListener("message",(function(e){var t,r=e.data;"encodescript"===r[1]?t=o.a.hieroglyphyScript(r[0]):"encodestring"===r[1]&&(t=o.a.hieroglyphyString(r[0])),postMessage(t)}))}]);