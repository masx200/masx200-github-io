(Function("return this")().webpackJsonp=Function("return this")().webpackJsonp||[]).push([[8],{103:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var r=n(17),o=n(18),i=n(23),a=n(94),c=n.n(a),u=n(0),l=n.n(u);var s,f=l.a.useState,p=l.a.useEffect,d=l.a.useRef,g=l.a.useCallback,b="clip"+"xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}));function y(){var t,e=f("0 chars"),n=Object(r.a)(e,2),a=n[0],u=n[1],y=d(),h=d();function m(e,n){s=s||c()(),Object(i.a)(n).button("loading"),t=e,s.postMessage([S,t]),s.onmessage=function(t){var e=t.data;j(e),u(e.length+" chars"),requestAnimationFrame((function(){Object(o.a)("success")})),Object(i.a)(n).button("reset")},s.onerror=function(t){throw new Error(t.message+" "+t.filename)}}var x=f(""),v=Object(r.a)(x,2),w=v[0],j=v[1],O=f("console.log('{\u4f60\u597d\u5417zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')"),E=Object(r.a)(O,2),S=E[0],T=E[1],k=g((function(t){T(t.target.value)}),[S]),N=g((function(t){j(t.target.value)}),[w]);return p((function(){return document.title="React router App-hieroglyphy encoder",function(){!function(){try{s.terminate(),s=void 0}catch(t){}}()}}),[]),l.a.createElement("div",{className:"jdahd"},l.a.createElement("h1",{style:{"font-size":"30px"}},"\u7f16\u7801hieroglyphy ",l.a.createElement("br",null),"encode hieroglyphy"),l.a.createElement("p",null,"hieroglyphy\u662f\u4e00\u4e2a\u5de5\u5177\u548cjavascript\u5e93\uff0c\u7528\u4e8e\u5c06\u5b57\u7b26\u4e32\uff0c\u6570\u5b57\u548c\u811a\u672c\u8f6c\u6362\u4e3a\uff08\uff09[]"," +\u7684\u7b49\u6548\u5e8f\u5217\uff01\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u7684\u5b57\u7b26\u3002"),l.a.createElement("p",null,"()+[]!"),l.a.createElement("p",null,"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027: \u5efa\u8bae\u5728\u6700\u65b0\u8d85\u9ad8\u7248\u672cchrome\u6216\u8005Firefox\u6216\u8005safari\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\uff01"),l.a.createElement("br",null),l.a.createElement("textarea",{className:"form-control",id:"input",type:"text",value:S,onChange:k}),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("button",{ref:y,className:"btn btn-outline-success btn-lg",id:"encodescript",onClick:function(t){m("encodescript",t.target)},"data-loading-icon":"mui-spinner mui-spinner-custom",type:"text"},"Encode script"),l.a.createElement("button",{ref:h,id:"encodestring",type:"text","data-loading-icon":"mui-spinner mui-spinner-custom",className:"btn btn-outline-info btn-lg",onClick:function(t){m("encodestring",t.target)}},"Encode string")),l.a.createElement("div",{id:"clip"+b},l.a.createElement("textarea",{id:"output",className:"form-control",value:w,onChange:N})),l.a.createElement("div",{className:"actions"},l.a.createElement("span",{id:"stats"},a),l.a.createElement("button",{className:"btn btn-outline-primary btn-lg",id:"run",onClick:function(){var e=Function("return ".concat(w))();"encodestring"===t&&alert('"'+e+'"')}},"Run This"),l.a.createElement("button",{className:"btn btn-outline-success btn-lg","data-clipboard-target":"#clip"+b},"\u590d\u5236")),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER"},"https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER")),l.a.createElement("p",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js"},"https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js")))}},16:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return r}))},18:function(t,e,n){"use strict";var r=n(22),o=n.n(r);var i=o.a;e.a=function(t){var e;switch(t){case"success":e="\u6210\u529f";break;case"primary":e="\u9996\u9009";break;case"danger":e="\u5931\u8d25";break;case"warning":e="\u8b66\u544a";break;default:return}var n="xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}));o()("[data-tanchuxiaoxi]").remove(),i("#my\u5bfc\u822a\u680f").append(i('<div id="'.concat(n,'" class="alert alert-').concat(t,' alert-dismissible fade show" data-tanchuxiaoxi>\n    <button type="button" class="close" data-dismiss="alert">&times;</button>\n    <strong>').concat(e,"!</strong> \u64cd\u4f5c").concat(e,"\u63d0\u793a\u4fe1\u606f\u3002\n    </div>")).fadeTo(5e3,.5,(function(){i("#"+n).remove(),o()("#my\u4e3b\u4f53").css("padding-top",o()("#my\u5bfc\u822a\u680f").height()||0)})))}},19:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},20:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},21:function(t,e,n){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}n.d(e,"a",(function(){return r}))},23:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(24),o=n(25),i=n(19),a=n(29),c=n(28),u=n(30);function l(t){return new(function(t){Object(c.a)(n,t);var e=Object(a.a)(n);function n(t){var o;return Object(r.a)(this,n),(o=e.call(this)).button.loading=function(){return o.button("loading")},o.button.reset=function(){return o.button("reset")},Object.defineProperty(Object(i.a)(o),Symbol.toStringTag,{value:"ArrayLike"}),function(t){if(o.length=0,t instanceof HTMLElement)o.push(t);else if("string"===typeof t)try{for(var e=document.querySelectorAll(t),n=0;n<e.length;n++)o.push(e[n])}catch(u){o.length=0}else if("object"===typeof t&&t&&"length"in t&&t.length)try{for(var r=t,i=r.length,a=0;a<i;a++){var c=r[a];c instanceof HTMLElement&&o.push(c)}}catch(u){o.length=0}else o.length=0}(t),o}return Object(o.a)(n,[{key:"button",value:function(t){var e=Symbol.for("loadingState"),n=Symbol.for("ResetHTML");var r="Loading...",o="mui-spinner mui-spinner-white",i="left";function a(t,e){e instanceof HTMLElement&&("INPUT"===e.tagName?e.value=t:e.innerHTML=t)}return("loading"===t||"reset"===t)&&(this.forEach((function(c){if(c instanceof HTMLElement&&function(t){return t instanceof HTMLElement&&"BUTTON"===t.tagName||"INPUT"===t.tagName&&"button"===t.getAttribute("type")}(c)){var u=c.getAttribute("data-loading-text"),l=c.getAttribute("data-loading-icon"),s=c.getAttribute("data-loading-icon-position");!function(t,c,u){if(c instanceof HTMLElement){if(c[e]||(c[n]="INPUT"===c.tagName?c.value:c.innerHTML,c[e]="reset"),c[e]===t)return!1;if(c[e]=t,u.loadingText||(u.loadingText=r),u.loadingIcon||(u.loadingIcon=o),u.loadingIconPosition||(u.loadingIconPosition=i),"reset"===t)c.disabled=!1,c.classList.remove("mui-disabled"),a(c[n],c);else if("loading"===t){var l;c.disabled=!0,c.classList.add("mui-disabled"),"INPUT"!==c.tagName?(l="<span>"+u.loadingText+"</span>","right"===u.loadingIconPosition?l+='&nbsp;<span class="'+u.loadingIcon+'"></span>':l='<span class="'+u.loadingIcon+'"></span>&nbsp;'+l):l=u.loadingText,a(l,c)}}}(t,c,{loadingText:u,loadingIcon:l,loadingIconPosition:s})}})),this)}}]),n}(Object(u.a)(Array)))(t)}},24:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},25:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},26:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(16),o=n(21);function i(t,e,n){return(i=Object(o.a)()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&Object(r.a)(i,n.prototype),i}).apply(null,arguments)}},28:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(16);function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(r.a)(t,e)}},29:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(20),o=n(21);function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var a=n(19);function c(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?Object(a.a)(t):e}function u(t){return function(){var e,n=Object(r.a)(t);if(Object(o.a)()){var i=Object(r.a)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return c(this,e)}}},30:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(20),o=n(16);var i=n(26);function a(t){var e="function"===typeof Map?new Map:void 0;return(a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,a)}function a(){return Object(i.a)(t,arguments,Object(r.a)(this).constructor)}return a.prototype=Object.create(t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),Object(o.a)(a,t)})(t)}},34:function(t,e,n){"use strict";var r=window.URL||window.webkitURL;t.exports=function(t,e){try{try{var n;try{(n=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)).append(t),n=n.getBlob()}catch(o){n=new Blob([t])}return new Worker(r.createObjectURL(n))}catch(o){return new Worker("data:application/javascript,"+encodeURIComponent(t))}}catch(o){if(!e)throw Error("Inline worker is not supported");return new Worker(e)}}},94:function(t,e,n){t.exports=function(){return n(34)('!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./",r(r.s=1)}([function(e,t,r){"use strict";!function(t){var r,n,o,u,i,c,f,l,a;function p(e,t){for(var r=e.toString(16);r.length<t;)r="0"+r;return r}function d(e){return l+"("+g("%"+p(e,2))+")"}function s(e){var t,r,n,o=e.charCodeAt(0);return void 0!==i[e]?i[e]:"\\\\"===e||"x"==e?(i[e]=d(o),i[e]):(n=function(e){return g("\\\\u"+p(e,4))}(o),o<128&&(t=d(o),n.length>t.length&&(n=t),r=function(e){return g("\\\\x"+p(e,2))}(o),n.length>r.length&&(n=r)),i[e]=n,n)}function g(e){var t,r="";for(t=0;t<e.length;t+=1)r+=t>0?"+":"",r+=s(e[t]);return r}function y(e){return c+"("+g(e)+")()"}a={hieroglyphyString:g,hieroglyphyNumber:function(e){if((e=+e)<=9)return r[e];return"+("+g(e.toString(10))+")"},hieroglyphyScript:y},e.exports=a,"[]+{}","+{}+[]","!![]+[]","![]+[]","[][[]]+[]",(i={0:"("+(r=["+[]","+!![]","!+[]+!![]","!+[]+!![]+!![]","!+[]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]","!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]"])[0]+"+[])",1:"("+r[1]+"+[])",2:"("+r[2]+"+[])",3:"("+r[3]+"+[])",4:"("+r[4]+"+[])",5:"("+r[5]+"+[])",6:"("+r[6]+"+[])",7:"("+r[7]+"+[])",8:"("+r[8]+"+[])",9:"("+r[9]+"+[])"})[" "]="([]+{})["+r[7]+"]",i["["]="([]+{})["+r[0]+"]",i["]"]="([]+{})["+i[1]+"+"+i[4]+"]",i.a="(+{}+[])["+r[1]+"]",i.b="([]+{})["+r[2]+"]",i.c="([]+{})["+r[5]+"]",i.d="([][[]]+[])["+r[2]+"]",i.e="([][[]]+[])["+r[3]+"]",i.f="(![]+[])["+r[0]+"]",i.i="([][[]]+[])["+r[5]+"]",i.j="([]+{})["+r[3]+"]",i.l="(![]+[])["+r[2]+"]",i.n="([][[]]+[])["+r[1]+"]",i.o="([]+{})["+r[1]+"]",i.r="(!![]+[])["+r[1]+"]",i.s="(![]+[])["+r[3]+"]",i.t="(!![]+[])["+r[0]+"]",i.u="([][[]]+[])["+r[0]+"]",i.N="(+{}+[])["+r[0]+"]",i.O="([]+{})["+r[8]+"]",u="[]+([]+{})["+g("constructor")+"]",i.S="("+u+")["+r[9]+"]",i.g="("+u+")[("+r[7]+")+("+r[7]+")]",n="+("+r[1]+"+"+i.e+"+"+i[1]+"+"+i[0]+"+"+i[0]+"+"+i[0]+")+[]",i.y="("+n+")["+r[7]+"]",i.I="("+n+")["+r[0]+"]",o="+("+r[1]+"+"+i.e+"+"+i[1]+"+"+i[0]+"+"+i[0]+")+[]",i["+"]="("+o+")["+r[2]+"]",c="[]["+g("sort")+"]["+g("constructor")+"]",i.h="(("+r[9]+")+("+r[8]+"))["+g("toString")+"](("+r[9]+")+("+r[9]+"))",i.p="(("+r[9]+")+("+r[9]+")+("+r[7]+"))["+g("toString")+"](("+r[9]+")+("+r[9]+")+("+r[8]+"))",l=y("return unescape"),f=y("return escape"),i["%"]=f+"("+g("[")+")["+r[0]+"]",i["{"]="(+{}+[]+[]["+g("filter")+"])["+i[2]+"+"+i[1]+"]",i["}"]="(+{}+[]+[]["+g("filter")+"])["+i[3]+"+"+i[7]+"]"}("undefined"!==typeof window&&window||"undefined"!==typeof WorkerGlobalScope&&WorkerGlobalScope)},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);addEventListener("message",(function(e){var t,r=e.data;"encodescript"===r[1]?t=o.a.hieroglyphyScript(r[0]):"encodestring"===r[1]&&(t=o.a.hieroglyphyString(r[0])),postMessage(t)}))}]);',n.p+"service-worker-hieroglyphy.worker.0723cfc10c3352811c6d.worker.js")}}}]);