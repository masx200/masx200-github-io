(("undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||this).webpackJsonp=("undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||this).webpackJsonp||[]).push([[11],{10:function(e,t,n){"use strict";var o=window.URL||window.webkitURL;e.exports=function(t,n){try{try{var r;try{(r=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)).append(t),r=r.getBlob()}catch(e){r=new Blob([t])}return new Worker(o.createObjectURL(r))}catch(e){return new Worker("data:application/javascript,"+encodeURIComponent(t))}}catch(e){if(!n)throw Error("Inline worker is not supported");return new Worker(n)}}},60:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var h,v=n(7),r=n(61),x=n.n(r),o=n(11),y=n.n(o),i=n(8),a=n.n(i),c=n(6),w=n.n(c),E=a.a,S=w.a.useState,k=w.a.useEffect,j=w.a.useRef,O=w.a.useCallback,C="clip"+F();function F(){return"xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}function u(){var t=j();function n(n){y()(n).button("loading"),(h=h||x()()).postMessage([d,t.current.checked]),h.onmessage=function(e){var t=e.data;l(t),i(t.length+" chars"),y()(n).button("reset"),requestAnimationFrame(function(){var e;e=F(),E("#my导航栏").append(E('<div id="'.concat(e,'" class="alert alert-success alert-dismissible fade show">\n                        <button type="button" class="close" data-dismiss="alert">&times;</button>\n                        <strong>成功!</strong> 编码成功提示信息。\n                        </div>')).fadeTo(1e4,.5,function(){E("#"+e).remove()}))})},h.onerror=function(e){throw new Error(e.message+" "+e.filename)}}var e=S("0 chars"),r=Object(v.a)(e,2),o=r[0],i=r[1],a=S(""),c=Object(v.a)(a,2),u=c[0],l=c[1],f=S("console.log('{你好吗zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')"),s=Object(v.a)(f,2),d=s[0],p=s[1],b=j(),m=O(function(e){p(e.target.value)},[d]),g=O(function(e){l(e.target.value)},[u]);return k(function(){return document.title="React router App-JSFuck encoder- Write any JavaScript with 6 Characters: []()!+",function(){!function(){try{h.terminate(),h=void 0}catch(e){}}()}},[]),w.a.createElement("div",{class:"jdahd"},w.a.createElement("h1",{style:{"font-size":"30px"}},"编码JSFUCK ",w.a.createElement("br",null),"encode JSFUCK"),w.a.createElement("p",null,"JSFuck是一种基于JavaScript原子部分的深奥教育编程风格。它只使用六个不同的字符来编写和执行代码。"),w.a.createElement("p",null,"()+[]!"),w.a.createElement("p",null,"它不依赖于浏览器，因此您甚至可以在Node.js上运行它。",w.a.createElement("br",null),"使用下面的表单转换您自己的脚本。取消选中“eval source”以获取纯字符串。"),w.a.createElement("p",null,"浏览器兼容性: 建议在最新超高版本的chrome或者Firefox或者safari浏览器中运行！"),w.a.createElement("br",null),w.a.createElement("textarea",{id:"input",type:"text",class:"form-control",value:d,onChange:m}),w.a.createElement("br",null),w.a.createElement("button",{onClick:function(e){n(e.target)},ref:b,class:"btn btn-outline-primary btn-lg",id:"encode",type:"text","data-loading-icon":"mui-spinner mui-spinner-custom"},"Encode"),w.a.createElement("div",{class:"checkbox"},w.a.createElement("input",{id:"eval",type:"checkbox",ref:t,onChange:function(){n(b.current)},defaultChecked:!0}),w.a.createElement("label",{htmlFor:"eval"},"Eval Source")),w.a.createElement("div",{id:"clip"+C},w.a.createElement("textarea",{id:"output",class:"form-control",value:u,onChange:g})),w.a.createElement("div",{class:"actions"},w.a.createElement("span",{id:"stats"},o),w.a.createElement("button",{class:"btn btn-outline-primary btn-lg",id:"run",onClick:function(){var e=Function("return ".concat(u))();t.current.checked&&alert('"'+e+'"')}},"Run This"),w.a.createElement("button",{class:"btn btn-outline-success btn-lg","data-clipboard-target":"#clip"+C},"复制")),w.a.createElement("br",null),w.a.createElement("p",null,w.a.createElement("a",{href:"https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER"},"https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER")),w.a.createElement("p",null,w.a.createElement("a",{href:"https://github.com/aemkei/jsfuck/blob/master/jsfuck.js"},"https://github.com/aemkei/jsfuck/blob/master/jsfuck.js")))}},61:function(e,t,n){e.exports=function(){return n(10)('!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./",o(o.s=2)}([function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return r})},function(e,t,o){"use strict";(function(n){var r=o(0);t.a=function(e){var t;"object"==typeof exports&&void 0!==n?n.exports={encode:p}:e.JSFuck={encode:p};var i="USE_CHAR_CODE",a=32,c=126,f={false:"![]",true:"!![]",undefined:"[][[]]",NaN:"+[![]]",Infinity:"+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]]+[+[]])"},l={Array:"[]",Number:"(+[])",String:"([]+[])",Boolean:"(![])",Function:\'[]["filter"]\',RegExp:\'Function("return/0/")()\'},s=(t={a:\'(false+"")[1]\',b:\'(+(11))["toString"](20)\',c:\'([]["filter"]+"")[3]\',d:\'(undefined+"")[2]\',e:\'(true+"")[3]\',f:\'(false+"")[0]\',g:"(+false+[false]+String)[20]",h:\'(+(101))["toString"](21)[1]\',i:"([false]+undefined)[10]",j:\'(+(40))["toString"](21)[1]\',k:\'(+(20))["toString"](21)\',l:\'(false+"")[2]\',m:\'(Number+"")[11]\',n:\'(undefined+"")[1]\',o:\'(true+[]["filter"])[10]\',p:\'(+(211))["toString"](31)[1]\',q:\'(+(212))["toString"](31)[1]\',r:\'(true+"")[1]\',s:\'(false+"")[3]\',t:\'(true+"")[0]\',u:\'(undefined+"")[0]\',v:\'(+(31))["toString"](32)\',w:\'(+(32))["toString"](33)\',x:\'(+(101))["toString"](34)[1]\',y:"(NaN+[Infinity])[10]",z:\'(+(35))["toString"](36)\',A:"(+false+Array)[10]",B:"(+false+Boolean)[10]",C:\'Function("return escape")()("<")[2]\',D:\'Function("return escape")()("=")[2]\',E:\'(RegExp+"")[12]\',F:"(+false+Function)[10]",G:\'(false+Function("return Date")()())[30]\',H:i,I:\'(Infinity+"")[0]\',J:i,K:i,L:i,M:\'(true+Function("return Date")()())[30]\',N:\'(NaN+"")[0]\',O:i,P:i,Q:i,R:"(+false+RegExp)[10]",S:"(+false+String)[10]",T:\'(NaN+Function("return Date")()())[30]\',U:i,V:i,W:i,X:i,Y:i,Z:i," ":\'(NaN+[]["filter"])[11]\',"!":i,\'"\':\'("")["fontcolor"]()[12]\',"#":i,$:i,"%":\'Function("return escape")()("<")[0]\',"&":i,"\'":i,"(":\'(false+[]["filter"])[20]\',")":\'(true+[]["filter"])[20]\',"*":i,"+":"(+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]])+[])[2]",",":\'[[]]["concat"]([[]])+""\',"-":\'(+(.+[0000000001])+"")[2]\',".":"(+(+!+[]+[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]]+[+[]])+[])[+!+[]]","/":\'(false+[+false])["italics"]()[10]\',":":\'(RegExp()+"")[3]\',";":i,"<":\'("")["italics"]()[0]\',"=":\'("")["fontcolor"]()[11]\',">":\'("")["italics"]()[2]\',"?":\'(RegExp()+"")[2]\',"@":i,"[":\'(GLOBAL+"")[0]\',"\\\\":i,"]":i,"^":i,_:i,"`":i,"{":\'(NaN+[]["filter"])[21]\',"|":i,"}":i},Object(r.a)(t,"}",\'(NaN+[]["filter"])[37]\'),Object(r.a)(t,"~",i),t),d=\'Function("return this")()\',u=0;function p(e,t){0===u&&(function(){var e,t,n;for(t=0;t<10;t++){for(e="+[]",0<t&&(e="+!"+e),n=1;n<t;n++)e="+!+[]"+e;1<t&&(e=e.substr(1)),s[t]="["+e+"]"}}(),function(){for(var e in s)s[e]===i&&(s[e]=\'Function("return unescape")()("%"\'+e.charCodeAt(0).toString(16).replace(/(\\d+)/g,\'+($1)+"\')+\'")\')}(),function(){var n,i,e,t="";function r(e,t){n=n.replace(new RegExp(e,"gi"),t)}function u(e,t){return s[t]}function o(e,t){var n=t.split(""),r=+n.shift(),o="+[]";for(0<r&&(o="+!"+o),i=1;i<r;i++)o="+!+[]"+o;return 1<r&&(o=o.substr(1)),[o].concat(n).join("+").replace(/(\\d)/g,u)}for(i=a;i<=c;i++)if(t=String.fromCharCode(i),n=s[t]){for(e in l)r("\\\\b"+e,l[e]+\'["constructor"]\');for(e in f)r(e,f[e]);r("(\\\\d\\\\d+)",o),r("\\\\((\\\\d)\\\\)",u),r("\\\\[(\\\\d)\\\\]",u),r("GLOBAL",d),r(\'\\\\+""\',"+[]"),r(\'""\',"[]+[]"),s[t]=n}}(),function(){var e,t,r,o=/[^\\[\\]\\(\\)\\!\\+]{1}/g,n=c-a;function i(){var e,t,n=!1;for(e in r={},s)(t=s[e]).match(o)&&(r[e]=t,n=!0);return n}function u(e,t){return t.split("").join("+")}function f(e){return r[e]?e:s[e]}for(e in s)s[e]=s[e].replace(/\\"([^\\"]+)\\"/gi,u);for(;i();){for(e in r)t=(t=s[e]).replace(o,f),s[e]=t,r[e]=t;if(0==n--)throw"Could not compile the following chars:"}}(),u=1);var n=[];if(!e)return"";var r="";for(var o in f)r+=o+"|";return r+=".",e.replace(new RegExp(r,"g"),function(e){var t=f[e];t?n.push("["+t+"]+[]"):(t=s[e])?n.push(t):(t=e.charCodeAt(0)<128?"("+p("\\\\u00"+e.charCodeAt(0).toString(16))+")":"("+p("\\\\u"+e.charCodeAt(0).toString(16))+")",n.push(t),s[e]=t)}),n=n.join("+"),/^\\d$/.test(e)&&(n+="+[]"),t?n="[]["+p("filter")+"]["+p("constructor")+"]("+n+")()":"("+n+")"}return{encode:p}}("undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||void 0)}).call(this,o(3)(e))},function(e,t,n){"use strict";n.r(t);var r=n(1);addEventListener("message",function(e){var t=e.data,n=r.a.encode(t[0],t[1]);postMessage(n)})},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}]);',n.p+"service-worker-jsfuck.worker.f92a26e7e13b9364219b.worker.js")}},7:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return r})}}]);