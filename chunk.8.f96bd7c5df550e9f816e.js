(Function("return this")().webpackJsonp=Function("return this")().webpackJsonp||[]).push([[8],{16:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return r}))},18:function(t,e,n){"use strict";var r=n(21),o=n.n(r);var a=o.a;e.a=function(t){var e;switch(t){case"success":e="\u6210\u529f";break;case"primary":e="\u9996\u9009";break;case"danger":e="\u5931\u8d25";break;case"warning":e="\u8b66\u544a";break;default:return}var n="xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}));o()("[data-tanchuxiaoxi]").remove(),a("#my\u5bfc\u822a\u680f").append(a('<div id="'.concat(n,'" class="alert alert-').concat(t,' alert-dismissible fade show" data-tanchuxiaoxi>\n    <button type="button" class="close" data-dismiss="alert">&times;</button>\n    <strong>').concat(e,"!</strong> \u64cd\u4f5c").concat(e,"\u63d0\u793a\u4fe1\u606f\u3002\n    </div>")).fadeTo(5e3,.5,(function(){a("#"+n).remove(),o()("#my\u4e3b\u4f53").css("padding-top",o()("#my\u5bfc\u822a\u680f").height())})))}},19:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},20:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},22:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(23),o=n(24),a=n(27),i=n(20),c=n(19),u=n(26),l=n(28);function f(t){return new(function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(a.a)(this,Object(i.a)(e).call(this))).button.loading=function(){return n.button("loading")},n.button.reset=function(){return n.button("reset")},Object.defineProperty(Object(c.a)(n),Symbol.toStringTag,{value:"ArrayLike"}),function(t){if(n.length=0,t instanceof HTMLElement)n.push(t);else if("string"===typeof t)try{for(var e=document.querySelectorAll(t),r=0;r<e.length;r++)n.push(e[r])}catch(u){n.length=0}else if("object"===typeof t&&t&&"length"in t&&t.length)try{for(var o=t,a=o.length,i=0;i<a;i++){var c=o[i];c instanceof HTMLElement&&n.push(c)}}catch(u){n.length=0}else n.length=0}(t),n}return Object(u.a)(e,t),Object(o.a)(e,[{key:"button",value:function(t){var e=Symbol.for("loadingState"),n=Symbol.for("ResetHTML");var r="mui-disabled",o={loadingText:"Loading...",loadingIcon:"mui-spinner mui-spinner-white",loadingIconPosition:"left"},a="reset",i="loading";function c(t,e){e instanceof HTMLElement&&("INPUT"===e.tagName?e.value=t:e.innerHTML=t)}return(t===i||t===a)&&(this.forEach((function(u){if(u instanceof HTMLElement&&function(t){return t instanceof HTMLElement&&"BUTTON"===t.tagName||"INPUT"===t.tagName&&"button"===t.getAttribute("type")}(u)){var l=u.getAttribute("data-loading-text"),f=u.getAttribute("data-loading-icon"),s=u.getAttribute("data-loading-icon-position");!function(t,u,l){if(u instanceof HTMLElement){if(u[e]||(u[n]="INPUT"===u.tagName?u.value:u.innerHTML,u[e]="reset"),u[e]===t)return!1;if(u[e]=t,l.loadingText||(l.loadingText=o.loadingText),l.loadingIcon||(l.loadingIcon=o.loadingIcon),l.loadingIconPosition||(l.loadingIconPosition=o.loadingIconPosition),t===a)u.disabled=!1,u.classList.remove(r),c(u[n],u);else if(t===i){var f;u.disabled=!0,u.classList.add(r),"INPUT"!==u.tagName?(f="<span>"+l.loadingText+"</span>","right"===l.loadingIconPosition?f+='&nbsp;<span class="'+l.loadingIcon+'"></span>':f='<span class="'+l.loadingIcon+'"></span>&nbsp;'+f):f=l.loadingText,c(f,u)}}}(t,u,{loadingText:l,loadingIcon:f,loadingIconPosition:s})}})),this)}}]),e}(Object(l.a)(Array)))(t)}},23:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},24:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},25:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(16);function o(t,e,n){return(o=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var a=new(Function.bind.apply(t,o));return n&&Object(r.a)(a,n.prototype),a}).apply(null,arguments)}},26:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(16);function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(r.a)(t,e)}},27:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}var a=n(19);function i(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?Object(a.a)(t):e}n.d(e,"a",(function(){return i}))},28:function(t,e,n){"use strict";var r=n(20),o=n(16);var a=n(25);function i(t){var e="function"===typeof Map?new Map:void 0;return(i=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return Object(a.a)(t,arguments,Object(r.a)(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Object(o.a)(i,t)})(t)}n.d(e,"a",(function(){return i}))},32:function(t,e,n){"use strict";var r=window.URL||window.webkitURL;t.exports=function(t,e){try{try{var n;try{(n=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)).append(t),n=n.getBlob()}catch(o){n=new Blob([t])}return new Worker(r.createObjectURL(n))}catch(o){return new Worker("data:application/javascript,"+encodeURIComponent(t))}}catch(o){if(!e)throw Error("Inline worker is not supported");return new Worker(e)}}},69:function(t,e,n){t.exports=function(){return n(32)('!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.4.0/",n(n.s=1)}([function(e,t,n){"use strict";!function(t){e.exports={encode:l};var n="USE_CHAR_CODE",r=32,o=126,i={false:"![]",true:"!![]",undefined:"[][[]]",NaN:"+[![]]",Infinity:"+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]]+[+[]])"},u={Array:"[]",Number:"(+[])",String:"([]+[])",Boolean:"(![])",Function:\'[]["filter"]\',RegExp:\'Function("return/0/")()\'},f={a:\'(false+"")[1]\',b:\'(+(11))["toString"](20)\',c:\'([]["filter"]+"")[3]\',d:\'(undefined+"")[2]\',e:\'(true+"")[3]\',f:\'(false+"")[0]\',g:"(+false+[false]+String)[20]",h:\'(+(101))["toString"](21)[1]\',i:"([false]+undefined)[10]",j:\'(+(40))["toString"](21)[1]\',k:\'(+(20))["toString"](21)\',l:\'(false+"")[2]\',m:\'(Number+"")[11]\',n:\'(undefined+"")[1]\',o:\'(true+[]["filter"])[10]\',p:\'(+(211))["toString"](31)[1]\',q:\'(+(212))["toString"](31)[1]\',r:\'(true+"")[1]\',s:\'(false+"")[3]\',t:\'(true+"")[0]\',u:\'(undefined+"")[0]\',v:\'(+(31))["toString"](32)\',w:\'(+(32))["toString"](33)\',x:\'(+(101))["toString"](34)[1]\',y:"(NaN+[Infinity])[10]",z:\'(+(35))["toString"](36)\',A:"(+false+Array)[10]",B:"(+false+Boolean)[10]",C:\'Function("return escape")()("<")[2]\',D:\'Function("return escape")()("=")[2]\',E:\'(RegExp+"")[12]\',F:"(+false+Function)[10]",G:\'(false+Function("return Date")()())[30]\',H:n,I:\'(Infinity+"")[0]\',J:n,K:n,L:n,M:\'(true+Function("return Date")()())[30]\',N:\'(NaN+"")[0]\',O:n,P:n,Q:n,R:"(+false+RegExp)[10]",S:"(+false+String)[10]",T:\'(NaN+Function("return Date")()())[30]\',U:n,V:n,W:n,X:n,Y:n,Z:n," ":\'(NaN+[]["filter"])[11]\',"!":n,\'"\':\'("")["fontcolor"]()[12]\',"#":n,$:n,"%":\'Function("return escape")()("<")[0]\',"&":n,"\'":n,"(":\'(false+[]["filter"])[20]\',")":\'(true+[]["filter"])[20]\',"*":n,"+":"(+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]])+[])[2]",",":\'[[]]["concat"]([[]])+""\',"-":\'(+(.+[0000000001])+"")[2]\',".":"(+(+!+[]+[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]]+[+[]])+[])[+!+[]]","/":\'(false+[+false])["italics"]()[10]\',":":\'(RegExp()+"")[3]\',";":n,"<":\'("")["italics"]()[0]\',"=":\'("")["fontcolor"]()[11]\',">":\'("")["italics"]()[2]\',"?":\'(RegExp()+"")[2]\',"@":n,"[":\'(GLOBAL+"")[0]\',"\\\\":n,"]":n,"^":n,_:n,"`":n,"{":\'(NaN+[]["filter"])[21]\',"|":n,"}":\'(NaN+[]["filter"])[37]\',"~":n},a=\'Function("return this")()\';var c=0;function l(e,t){0===c&&(!function(){var e,t,n;for(t=0;t<10;t++){for(e="+[]",t>0&&(e="+!"+e),n=1;n<t;n++)e="+!+[]"+e;t>1&&(e=e.substr(1)),f[t]="["+e+"]"}}(),function(){for(var e in f)f[e]===n&&(f[e]=\'Function("return unescape")()("%"\'+e.charCodeAt(0).toString(16).replace(/(\\d+)/g,\'+($1)+"\')+\'")\')}(),function(){var e,t,n,c="";function l(t,n){e=e.replace(new RegExp(t,"gi"),n)}function s(e,t){return f[t]}function d(e,n){var r=n.split(""),o=+r.shift(),i="+[]";for(o>0&&(i="+!"+i),t=1;t<o;t++)i="+!+[]"+i;return o>1&&(i=i.substr(1)),[i].concat(r).join("+").replace(/(\\d)/g,s)}for(t=r;t<=o;t++)if(c=String.fromCharCode(t),e=f[c]){for(n in u)l("\\\\b"+n,u[n]+\'["constructor"]\');for(n in i)l(n,i[n]);l("(\\\\d\\\\d+)",d),l("\\\\((\\\\d)\\\\)",s),l("\\\\[(\\\\d)\\\\]",s),l("GLOBAL",a),l(\'\\\\+""\',"+[]"),l(\'""\',"[]+[]"),f[c]=e}}(),function(){var e,t,n,i=/[^\\[\\]\\(\\)\\!\\+]{1}/g,u=o-r;function a(){var e,t,r=!1;for(e in n={},f)(t=f[e]).match(i)&&(n[e]=t,r=!0);return r}function c(e,t){return t.split("").join("+")}function l(e){return n[e]?e:f[e]}for(e in f)f[e]=f[e].replace(/\\"([^\\"]+)\\"/gi,c);for(;a();){for(e in n)t=(t=f[e]).replace(i,l),f[e]=t,n[e]=t;if(0===u--){throw"Could not compile the following chars:"}}}(),c=1);var s=[];if(!e)return"";var d="";for(var p in i)d+=p+"|";return d+=".",e.replace(new RegExp(d,"g"),(function(e){var t=i[e];t?s.push("["+t+"]+[]"):(t=f[e])?s.push(t):(t=e.charCodeAt(0)<128?"("+l("\\\\u00"+e.charCodeAt(0).toString(16))+")":"("+l("\\\\u"+e.charCodeAt(0).toString(16))+")",s.push(t),f[e]=t)})),s=s.join("+"),/^\\d$/.test(e)&&(s+="+[]"),t?s="[]["+l("filter")+"]["+l("constructor")+"]("+s+")()":"("+s+")"}}("undefined"!==typeof window&&window||"undefined"!==typeof WorkerGlobalScope&&WorkerGlobalScope)},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);addEventListener("message",(function(e){var t=e.data,n=o.a.encode(t[0],t[1]);postMessage(n)}))}]);',n.p+"service-worker-jsfuck.worker.a0f0d3448b90a2cbc1a5.worker.js")}},76:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var r=n(17),o=n(18),a=n(22),i=n(69),c=n.n(i),u=n(0),l=n.n(u);var f,s=l.a.useState,d=l.a.useEffect,p=l.a.useRef,b=l.a.useCallback,g="clip"+"xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}));function m(){var t=p();function e(e){Object(a.a)(e).button("loading"),(f=f||c()()).postMessage([w,t.current.checked]),f.onmessage=function(t){var n=t.data;v(n),m(n.length+" chars"),Object(a.a)(e).button("reset"),requestAnimationFrame((function(){Object(o.a)("success")}))},f.onerror=function(t){throw new Error(t.message+" "+t.filename)}}var n=s("0 chars"),i=Object(r.a)(n,2),u=i[0],m=i[1],y=s(""),x=Object(r.a)(y,2),h=x[0],v=x[1],S=s("console.log('{\u4f60\u597d\u5417zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')"),E=Object(r.a)(S,2),w=E[0],j=E[1],O=p(),k=b((function(t){j(t.target.value)}),[w]),N=b((function(t){v(t.target.value)}),[h]);return d((function(){return document.title="React router App-JSFuck encoder- Write any JavaScript with 6 Characters: []()!+",function(){!function(){try{f.terminate(),f=void 0}catch(t){}}()}}),[]),l.a.createElement("div",{className:"jdahd"},l.a.createElement("h1",{style:{"font-size":"30px"}},"\u7f16\u7801JSFUCK ",l.a.createElement("br",null),"encode JSFUCK"),l.a.createElement("p",null,"JSFuck\u662f\u4e00\u79cd\u57fa\u4e8eJavaScript\u539f\u5b50\u90e8\u5206\u7684\u6df1\u5965\u6559\u80b2\u7f16\u7a0b\u98ce\u683c\u3002\u5b83\u53ea\u4f7f\u7528\u516d\u4e2a\u4e0d\u540c\u7684\u5b57\u7b26\u6765\u7f16\u5199\u548c\u6267\u884c\u4ee3\u7801\u3002"),l.a.createElement("p",null,"()+[]!"),l.a.createElement("p",null,"\u5b83\u4e0d\u4f9d\u8d56\u4e8e\u6d4f\u89c8\u5668\uff0c\u56e0\u6b64\u60a8\u751a\u81f3\u53ef\u4ee5\u5728Node.js\u4e0a\u8fd0\u884c\u5b83\u3002",l.a.createElement("br",null),"\u4f7f\u7528\u4e0b\u9762\u7684\u8868\u5355\u8f6c\u6362\u60a8\u81ea\u5df1\u7684\u811a\u672c\u3002\u53d6\u6d88\u9009\u4e2d\u201ceval source\u201d\u4ee5\u83b7\u53d6\u7eaf\u5b57\u7b26\u4e32\u3002"),l.a.createElement("p",null,"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027: \u5efa\u8bae\u5728\u6700\u65b0\u8d85\u9ad8\u7248\u672c\u7684chrome\u6216\u8005Firefox\u6216\u8005safari\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\uff01"),l.a.createElement("br",null),l.a.createElement("textarea",{id:"input",type:"text",className:"form-control",value:w,onChange:k}),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(t){e(t.target)},ref:O,className:"btn btn-outline-primary btn-lg",id:"encode",type:"text","data-loading-icon":"mui-spinner mui-spinner-custom"},"Encode"),l.a.createElement("div",{className:"checkbox"},l.a.createElement("input",{id:"eval",type:"checkbox",ref:t,onChange:function(){e(O.current)},defaultChecked:!0}),l.a.createElement("label",{htmlFor:"eval"},"Eval Source")),l.a.createElement("div",{id:"clip"+g},l.a.createElement("textarea",{id:"output",className:"form-control",value:h,onChange:N})),l.a.createElement("div",{className:"actions"},l.a.createElement("span",{id:"stats"},u),l.a.createElement("button",{className:"btn btn-outline-primary btn-lg",id:"run",onClick:function(){var e=Function("return ".concat(h))();t.current.checked&&alert('"'+e+'"')}},"Run This"),l.a.createElement("button",{className:"btn btn-outline-success btn-lg","data-clipboard-target":"#clip"+g},"\u590d\u5236")),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER",rel:"noopener noreferrer",target:"_blank"},"https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/aemkei/jsfuck/blob/master/jsfuck.js",rel:"noopener noreferrer",target:"_blank"},"https://github.com/aemkei/jsfuck/blob/master/jsfuck.js")))}}}]);