parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"u9Hj":[function(require,module,exports) {
$(window).one("load",function(){function n(n){var t=null,e=function(n,t){if(Math.abs(parseInt(n.style.height)-n.scrollHeight)>5){console.log(parseInt(n.style.height),n.scrollHeight),n.style.height=n.scrollHeight+3+"px";var e=n;console.log("拉伸文本框",parseInt(n.style.height),n.scrollHeight,e.outerHTML)}},o=function(n){t&&(clearTimeout(t),t=null),t=setTimeout(function(){e(n)},200)};n.addEventListener?(n.addEventListener("input",function(){e(n)},!1),e(n)):n.attachEvent&&(n.attachEvent("onpropertychange",function(){e(n)}),e(n)),window.VBArray&&window.addEventListener&&(n.attachEvent("onkeydown",function(){var t=window.event.keyCode;8!=t&&46!=t||o(n)}),n.attachEvent("oncut",function(){o(n)})),document.body.onmousemove=function(){o(n)},document.body.onmouseover=function(){o(n)},document.body.onmousewheel=function(){o(n)},document.body.onscroll=function(){o(n)},document.body.onmousedown=function(){o(n)},n.onchange=function(){o(n)},n.addEventListener("click",function(){o(n)})}$("#my主体").css("padding-top",$("#my导航栏").height()),function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];for(var i=0,c=e;i<c.length;i++){value=c[i];var u=document.getElementById(value);u.scrollHeight=60,u.style.height="60px",n(u)}}("tp","tp2","tp-big","tp2-big")});
},{}],"q8KV":[function(require,module,exports) {

var global = arguments[3];
var define;
var global=arguments[3],define;function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var process={};!function(){"use strict";function t(t,i){i?(d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}function i(i,r,s){var e,n=_typeof(i);if("string"===n){var o,u=[],a=i.length,y=0;for(e=0;e<a;++e)(o=i.charCodeAt(e))<128?u[y++]=o:o<2048?(u[y++]=192|o>>6,u[y++]=128|63&o):o<55296||o>=57344?(u[y++]=224|o>>12,u[y++]=128|o>>6&63,u[y++]=128|63&o):(o=65536+((1023&o)<<10|1023&i.charCodeAt(++e)),u[y++]=240|o>>18,u[y++]=128|o>>12&63,u[y++]=128|o>>6&63,u[y++]=128|63&o);i=u}else{if("object"!==n)throw new Error(h);if(null===i)throw new Error(h);if(f&&i.constructor===ArrayBuffer)i=new Uint8Array(i);else if(!(Array.isArray(i)||f&&ArrayBuffer.isView(i)))throw new Error(h)}i.length>64&&(i=new t(r,!0).update(i).array());var c=[],d=[];for(e=0;e<64;++e){var p=i[e]||0;c[e]=92^p,d[e]=54^p}t.call(this,r,s),this.update(d),this.oKeyPad=c,this.inner=!0,this.sharedMemory=s}var h="input is invalid type",r="object"==("undefined"==typeof window?"undefined":_typeof(window)),s=r?window:{};s.JS_SHA256_NO_WINDOW&&(r=!1);var e=!r&&"object"==("undefined"==typeof self?"undefined":_typeof(self)),n=!s.JS_SHA256_NO_NODE_JS&&"object"==_typeof(process)&&process.versions&&process.versions.node;n?s=global:e&&(s=self);var o=!s.JS_SHA256_NO_COMMON_JS&&"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports,a="function"==typeof define&&define.amd,f=!s.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,u="0123456789abcdef".split(""),c=[-2147483648,8388608,32768,128],y=[24,16,8,0],p=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],l=["hex","array","digest","arrayBuffer"],d=[];!s.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!f||!s.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==_typeof(t)&&t.buffer&&t.buffer.constructor===ArrayBuffer});var A=function(i,r){return function(h){return new t(r,!0).update(h)[i]()}},w=function(i){var r=A("hex",i);n&&(r=b(r,i)),r.create=function(){return new t(i)},r.update=function(t){return r.create().update(t)};for(var h=0;h<l.length;++h){var s=l[h];r[s]=A(s,i)}return r},b=function b(t,i){var r=eval("require('crypto')"),s=eval("require('buffer').Buffer"),e=i?"sha224":"sha256",n=function(i){if("string"==typeof i)return r.createHash(e).update(i,"utf8").digest("hex");if(null==i)throw new Error(h);return i.constructor===ArrayBuffer&&(i=new Uint8Array(i)),Array.isArray(i)||ArrayBuffer.isView(i)||i.constructor===s?r.createHash(e).update(new s(i)).digest("hex"):t(i)};return n},v=function(t,r){return function(h,s){return new i(h,r,!0).update(s)[t]()}},_=function(t){var r=v("hex",t);r.create=function(r){return new i(r,t)},r.update=function(t,i){return r.create(t).update(i)};for(var h=0;h<l.length;++h){var s=l[h];r[s]=v(s,t)}return r};t.prototype.update=function(t){if(!this.finalized){var i,r=_typeof(t);if("string"!==r){if("object"!==r)throw new Error(h);if(null===t)throw new Error(h);if(f&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||f&&ArrayBuffer.isView(t)))throw new Error(h);i=!0}for(var s,e,n=0,o=t.length,u=this.blocks;n<o;){if(this.hashed&&(this.hashed=!1,u[0]=this.block,u[16]=u[1]=u[2]=u[3]=u[4]=u[5]=u[6]=u[7]=u[8]=u[9]=u[10]=u[11]=u[12]=u[13]=u[14]=u[15]=0),i)for(e=this.start;n<o&&e<64;++n)u[e>>2]|=t[n]<<y[3&e++];else for(e=this.start;n<o&&e<64;++n)(s=t.charCodeAt(n))<128?u[e>>2]|=s<<y[3&e++]:s<2048?(u[e>>2]|=(192|s>>6)<<y[3&e++],u[e>>2]|=(128|63&s)<<y[3&e++]):s<55296||s>=57344?(u[e>>2]|=(224|s>>12)<<y[3&e++],u[e>>2]|=(128|s>>6&63)<<y[3&e++],u[e>>2]|=(128|63&s)<<y[3&e++]):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++n)),u[e>>2]|=(240|s>>18)<<y[3&e++],u[e>>2]|=(128|s>>12&63)<<y[3&e++],u[e>>2]|=(128|s>>6&63)<<y[3&e++],u[e>>2]|=(128|63&s)<<y[3&e++]);this.lastByteIndex=e,this.bytes+=e-this.start,e>=64?(this.block=u[16],this.start=e-64,this.hash(),this.hashed=!0):this.start=e}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,i=this.lastByteIndex;t[16]=this.block,t[i>>2]|=c[3&i],this.block=t[16],i>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},t.prototype.hash=function(){var t,i,r,h,s,e,n,o,u,a=this.h0,f=this.h1,y=this.h2,c=this.h3,d=this.h4,l=this.h5,b=this.h6,A=this.h7,w=this.blocks;for(t=16;t<64;++t)i=((s=w[t-15])>>>7|s<<25)^(s>>>18|s<<14)^s>>>3,r=((s=w[t-2])>>>17|s<<15)^(s>>>19|s<<13)^s>>>10,w[t]=w[t-16]+i+w[t-7]+r<<0;for(u=f&y,t=0;t<64;t+=4)this.first?(this.is224?(e=300032,A=(s=w[0]-1413257819)-150054599<<0,c=s+24177077<<0):(e=704751109,A=(s=w[0]-210244248)-1521486534<<0,c=s+143694565<<0),this.first=!1):(i=(a>>>2|a<<30)^(a>>>13|a<<19)^(a>>>22|a<<10),h=(e=a&f)^a&y^u,A=c+(s=A+(r=(d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+(d&l^~d&b)+p[t]+w[t])<<0,c=s+(i+h)<<0),i=(c>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),h=(n=c&a)^c&f^e,b=y+(s=b+(r=(A>>>6|A<<26)^(A>>>11|A<<21)^(A>>>25|A<<7))+(A&d^~A&l)+p[t+1]+w[t+1])<<0,i=((y=s+(i+h)<<0)>>>2|y<<30)^(y>>>13|y<<19)^(y>>>22|y<<10),h=(o=y&c)^y&a^n,l=f+(s=l+(r=(b>>>6|b<<26)^(b>>>11|b<<21)^(b>>>25|b<<7))+(b&A^~b&d)+p[t+2]+w[t+2])<<0,i=((f=s+(i+h)<<0)>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10),h=(u=f&y)^f&c^o,d=a+(s=d+(r=(l>>>6|l<<26)^(l>>>11|l<<21)^(l>>>25|l<<7))+(l&b^~l&A)+p[t+3]+w[t+3])<<0,a=s+(i+h)<<0;this.h0=this.h0+a<<0,this.h1=this.h1+f<<0,this.h2=this.h2+y<<0,this.h3=this.h3+c<<0,this.h4=this.h4+d<<0,this.h5=this.h5+l<<0,this.h6=this.h6+b<<0,this.h7=this.h7+A<<0},t.prototype.hex=function(){this.finalize();var t=this.h0,i=this.h1,r=this.h2,h=this.h3,s=this.h4,e=this.h5,n=this.h6,o=this.h7,a=u[t>>28&15]+u[t>>24&15]+u[t>>20&15]+u[t>>16&15]+u[t>>12&15]+u[t>>8&15]+u[t>>4&15]+u[15&t]+u[i>>28&15]+u[i>>24&15]+u[i>>20&15]+u[i>>16&15]+u[i>>12&15]+u[i>>8&15]+u[i>>4&15]+u[15&i]+u[r>>28&15]+u[r>>24&15]+u[r>>20&15]+u[r>>16&15]+u[r>>12&15]+u[r>>8&15]+u[r>>4&15]+u[15&r]+u[h>>28&15]+u[h>>24&15]+u[h>>20&15]+u[h>>16&15]+u[h>>12&15]+u[h>>8&15]+u[h>>4&15]+u[15&h]+u[s>>28&15]+u[s>>24&15]+u[s>>20&15]+u[s>>16&15]+u[s>>12&15]+u[s>>8&15]+u[s>>4&15]+u[15&s]+u[e>>28&15]+u[e>>24&15]+u[e>>20&15]+u[e>>16&15]+u[e>>12&15]+u[e>>8&15]+u[e>>4&15]+u[15&e]+u[n>>28&15]+u[n>>24&15]+u[n>>20&15]+u[n>>16&15]+u[n>>12&15]+u[n>>8&15]+u[n>>4&15]+u[15&n];return this.is224||(a+=u[o>>28&15]+u[o>>24&15]+u[o>>20&15]+u[o>>16&15]+u[o>>12&15]+u[o>>8&15]+u[o>>4&15]+u[15&o]),a},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,i=this.h1,r=this.h2,h=this.h3,s=this.h4,e=this.h5,n=this.h6,o=this.h7,u=[t>>24&255,t>>16&255,t>>8&255,255&t,i>>24&255,i>>16&255,i>>8&255,255&i,r>>24&255,r>>16&255,r>>8&255,255&r,h>>24&255,h>>16&255,h>>8&255,255&h,s>>24&255,s>>16&255,s>>8&255,255&s,e>>24&255,e>>16&255,e>>8&255,255&e,n>>24&255,n>>16&255,n>>8&255,255&n];return this.is224||u.push(o>>24&255,o>>16&255,o>>8&255,255&o),u},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),i=new DataView(t);return i.setUint32(0,this.h0),i.setUint32(4,this.h1),i.setUint32(8,this.h2),i.setUint32(12,this.h3),i.setUint32(16,this.h4),i.setUint32(20,this.h5),i.setUint32(24,this.h6),this.is224||i.setUint32(28,this.h7),t},i.prototype=new t,i.prototype.finalize=function(){if(t.prototype.finalize.call(this),this.inner){this.inner=!1;var i=this.array();t.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(i),t.prototype.finalize.call(this)}};var B=w();B.sha256=B,B.sha224=w(!0),B.sha256.hmac=_(),B.sha224.hmac=_(!0),o?module.exports=B:(s.sha256=B.sha256,s.sha224=B.sha224,a&&define(function(){return B}))}();
},{}],"Xu0A":[function(require,module,exports) {
var global = arguments[3];
var define;
var e,o=arguments[3],r=t(require("./sha256.min"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){return i(e)||u(e)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function i(e){if(Array.isArray(e)){for(var o=0,r=new Array(e.length);o<e.length;o++)r[o]=e[o];return r}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){function o(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,r=e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[o];if(r)return console.log("在模块仓库中找到了",o),r.default;throw e.IMPORTCJSAMDUMD.PACKAGECONFIGLIST[o]?(console.warn("模块仓库中没有找到,但是模块列表中存在"+o),new Error("模块仓库中没有找到,但是模块列表中存在  "+o)):new Error("Cannot find module in packagestore  "+o)}function t(t){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(console.log("输入的参数为",Array.apply(void 0,arguments)),"object"!==a(t)&&"object"!==a(l)){if("string"==typeof t||"string"==typeof l){var u=function e(r,t,u){var i;e.globalDefQueue=[];var a,c,f=Object.prototype.toString;"string"!=typeof r&&(u=t,t=r,r=null),c=t,"[object Array]"!==f.call(c)&&(u=t,t=null),!t&&function(e){return"[object Function]"===f.call(e)}(u)&&(t=[],u.length&&(u.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(e,o){t.push(o)}),t=(1===u.length?["require"]:["require","exports","module"]).concat(t))),a?(a.defQueue.push([r,t,u]),a.defQueueMap[r]=!0):e.globalDefQueue.push([r,t,u]),console.log("检测到amd模块",e.globalDefQueue[0]),"string"==typeof e.globalDefQueue[0][0]&&void 0===l&&(l=e.globalDefQueue[0][0]);var d=e.globalDefQueue[0][1].map(function(e){return o(e)});e.exports=(i=e.globalDefQueue[0])[2].apply(i,n(d))};return void 0===l&&(l=(0,r.default)(t)),t=(t=new URL(t)).href,e.IMPORTCJSAMDUMD.PACKAGECONFIGLIST[l]={name:l,sha256:(0,r.default)(t),url:t},console.log(" IMPORTCJSAMDUMD.PACKAGECONFIGLIST",e.IMPORTCJSAMDUMD.PACKAGECONFIGLIST),u.amd=!0,new Promise(function(n,i){try{!function(){var c;try{try{c=fetch(t).then(function(e){if(!e.ok)throw new Error("fetch failed "+t);return e.text()})}catch(f){return console.error(f),void i(f)}try{c.then(function(c){u.exports={};var d=[{},{},{}];try{d=function(e,o,r,n,l){return Function("require","define","module","exports"," /* ".concat(t," */")+";\n"+l+";\n return [exports, module.exports, define.exports]; \n"+" /* ".concat(t," */"))(e,o,r,n)}(o,u,{exports:{}},{},c)}catch(f){return console.error(f),void i(f)}var A={name:void 0,default:void 0,url:void 0};if(void 0===d)d=[{},{},{}];if(void 0===u.exports&&(u.exports={}),console.log("模块的输出为",[d[0],d[1],d[2]]),"object"!==a(d[0])||Object.keys(d[0]).length||"{}"!==JSON.stringify(d[0]))console.log("检测到umd模块",t),A.default=d[0];else if("object"!==a(d[1])||Object.keys(d[1]).length||"{}"!==JSON.stringify(d[1]))console.log("检测到cjs模块",t),A.default=d[1];else{if("object"===a(d[2])&&!Object.keys(d[2]).length&&"{}"===JSON.stringify(d[2]))return console.warn("加载的模块没有输出",t),void n(A);console.log("检测到amd模块",t),A.default=d[2]}"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),A.sha256=(0,r.default)(t),void 0!==l?(A.name=l,e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[l]=A):(A.name=(0,r.default)(t),e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[(0,r.default)(t)]=A),A.url=t,void 0!==A.default?void 0!==A.name&&console.log("IMPORTCJSAMDUMD.GLOBALPACKAGESTORE",e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE):console.warn("加载的模块没有输出",t),n(A)})}catch(f){return console.error(f),void i(f)}}catch(f){console.error(f),i(f)}}()}catch(c){console.error(c),i(c)}})}throw new Error("输入的类型错误,输入的类型必须是字符串或者数组")}Array.apply(void 0,arguments).forEach(function(o){var t=o[0],n=o[1];e.IMPORTCJSAMDUMD.PACKAGECONFIGLIST[n]={name:n,sha256:(0,r.default)(t),url:t}});try{return console.log("第一次尝试批量加载模块"),Promise.all(Array.apply(void 0,arguments).map(function(e){return IMPORTCJSAMDUMD(e[0],e[1])}))}catch(i){return console.log("第二次尝试批量加载模块"),Promise.all(Array.apply(void 0,arguments).map(function(e){return IMPORTCJSAMDUMD(e[0],e[1])}))}finally{return console.log("最后一次尝试批量加载模块"),Promise.all(Array.apply(void 0,arguments).map(function(e){return IMPORTCJSAMDUMD(e[0],e[1])}))}}"object"==("undefined"==typeof exports?"undefined":a(exports))&&"undefined"!=typeof module&&(module.exports=t),e.IMPORTCJSAMDUMD=e.IMPORTCJSAMDUMD||t,e.IMPORTCJSAMDUMD.REQUIREPACKAGE=e.IMPORTCJSAMDUMD.REQUIREPACKAGE||o,e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE=e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE||{},e.IMPORTCJSAMDUMD.PACKAGECONFIGLIST=e.IMPORTCJSAMDUMD.PACKAGECONFIGLIST||{}}("undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||void 0);
},{"./sha256.min":"q8KV"}],"L1Wj":[function(require,module,exports) {
"use strict";var e=t(require("../IMPORTCJSAMDUMD"));function t(e){return e&&e.__esModule?e:{default:e}}$(window).one("load",function(){(0,e.default)("https://cdn.staticfile.org/big-integer/1.6.43/BigInteger.min.js","big-integer").then(function(e){var t,o,n,r,i,a,l,u,c,d,g=e.default,s=Array(16);function m(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)});jQuery("#my导航栏").append(jQuery('<div id="'.concat(e,'" class="alert alert-success alert-dismissible fade show">\n                    <button type="button" class="close" data-dismiss="alert">&times;</button>\n                    <strong>成功!</strong> 计算成功提示信息。\n                    </div>')).fadeTo(5e3,.5,function(){console.log(jQuery("#"+e)),jQuery("#"+e).remove()}))}$("#start-big").click(f),function(){var e=document.getElementById("thread-big"),n=document.getElementById("pichangwei-big"),a=document.getElementById("tp-big");e.value=6,n.value=4,r=8,i=0,t=a,o=(o=" ")+"UserAgent: "+navigator.userAgent+"\n";var l="function"==typeof BigInt?"你的浏览器能够支持原生BigInt!":"你的浏览器无法支持原生BigInt!";console.log(l),o=o+l+"\n开始圆周率多线程测试\n",t.value=o,_("tp-big","tp2-big")}();for(var v=0;v<s.length;v++)s[v]=void 0;function _(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];setTimeout(function(){for(var e=0,o=t;e<o.length;e++){value=o[e];var n=document.getElementById(value),r=n;Math.abs(parseInt(r.style.height)-r.scrollHeight)>5&&(console.log(parseInt(r.style.height),r.scrollHeight),n.style.height=n.scrollHeight+2+"px",console.log("拉伸文本框",parseInt(r.style.height),r.scrollHeight,n.outerHTML))}},0)}function f(){mui(document.getElementById("start-big")).button("loading"),g.abs=function(e){return g(e).abs()},g.mul=function(e,t){return g(e).multiply(t)},g.div=function(e,t){return g(e).divide(t)},g.add=function(e,t){return g(e).add(t)},g().__proto__.cmp=g().__proto__.compare,g().__proto__.div=g().__proto__.divide,g().__proto__.mul=g().__proto__.multiply,g("90071992547409920").__proto__.cmp=g("90071992547409920").__proto__.compare,g("90071992547409920").__proto__.div=g("90071992547409920").__proto__.divide,g("90071992547409920").__proto__.mul=g("90071992547409920").__proto__.multiply;var e=document.getElementById("thread-big"),v=document.getElementById("pichangwei-big");e.value>=1&&e.value<=16&&v.value>=1&&v.value<=100?(a=1e3*Math.floor(v.value),v.value=Math.floor(v.value),r=Math.floor(e.value),e.value=r,d=document.title="圆周率计算多线程-线程数为"+r+"-位数为"+a,o=o+"线程数为"+r+" ",t.value=o,l="圆周率计算"+a+"位 计算圆周率中......  \n",o+=String(l),t.value=o,console.log(d),console.time(d),u=(new Date).getTime(),n=new g(0),(c=[]).length=r,s.forEach(function(e,t,v){t>=r||(v[t]||(v[t]=new Worker("/service-worker-mythread1-bigint.d1f592da.js"),console.log("创建了新webworker线程","service-worker-mythread1-bigint.js-"+t)),v[t].postMessage([a,r,t]),v[t].onmessage=function(e){console.log("主线程从副线程"+(t+1)+"接收event.data\n"),console.log("第一个参数",e.data[0],"\n第二个参数",e.data[1]);var v=new g(e.data[0]);n=g.add(n,v),i=Math.max(i,parseInt(e.data[1])),c[t]=1,function(){var e=document.getElementById("tp-big"),t=document.getElementById("tp2-big");if(r==c.filter(function(e){return 1==e}).length){console.timeEnd(d),mui(document.getElementById("start-big")).button("reset");var g=(new Date).getTime();l="计算完成,用时"+(g-u)/1e3+"秒第"+i+"次 圆周率"+a+"位\n",t.value="圆周率"+a+"位"+n.toString()[0]+"."+n.toString().slice(1);var v=e;o+=String(l),v.value=o,m(),s.forEach(function(e,t,o){}),i=0,setTimeout(function(){_("tp-big","tp2-big")},0),document.body.onmousemove=document.body.onmouseover=document.body.onmousewheel=document.body.onscroll=document.body.onmousedown=null}}()},v[t].onerror=function(e){console.error("Error:",e.message,e.filename)})})):(alert("输入错误"),v.value=4,e.value=8)}})});
},{"../IMPORTCJSAMDUMD":"Xu0A","./service-worker-mythread1-bigint.js":[["service-worker-mythread1-bigint.d1f592da.js","gsnx"],"gsnx"]}],"hkmU":[function(require,module,exports) {
"use strict";var e=t(require("../IMPORTCJSAMDUMD"));function t(e){return e&&e.__esModule?e:{default:e}}$(window).one("load",function(){(0,e.default)("https://cdn.staticfile.org/decimal.js/10.2.0/decimal.min.js","decimal").then(function(e){for(var t,n,o,a,l,r,u,d,c,i,m=e.default,s=Array(16),g=0;g<s.length;g++)s[g]=void 0;function h(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)});jQuery("#my导航栏").append(jQuery('<div id="'.concat(e,'" class="alert alert-success alert-dismissible fade show">\n                        <button type="button" class="close" data-dismiss="alert">&times;</button>\n                        <strong>成功!</strong> 计算成功提示信息。\n                        </div>')).fadeTo(5e3,.5,function(){console.log(jQuery("#"+e)),jQuery("#"+e).remove()}))}function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];setTimeout(function(){for(var e=0,n=t;e<n.length;e++){value=n[e];var o=document.getElementById(value),a=o;Math.abs(parseInt(a.style.height)-a.scrollHeight)>5&&(console.log(parseInt(a.style.height),a.scrollHeight),o.style.height=o.scrollHeight+2+"px",console.log("拉伸文本框",parseInt(a.style.height),a.scrollHeight,o.outerHTML))}},0)}function v(){mui(document.getElementById("start")).button("loading"),document.getElementById("thread").value>=1&&document.getElementById("thread").value<=16&&document.getElementById("pichangwei").value>=1&&document.getElementById("pichangwei").value<=100?(r=1e3*Math.floor(document.getElementById("pichangwei").value),document.getElementById("pichangwei").value=Math.floor(document.getElementById("pichangwei").value),a=Math.floor(document.getElementById("thread").value),document.getElementById("thread").value=a,i=document.title="圆周率计算多线程-线程数为"+a+"-位数为"+r,n=n+"线程数为"+a+" ",t.value=n,u="圆周率计算"+r+"位 计算圆周率中......  \n",n+=String(u),t.value=n,m.precision=r,console.log(i),console.time(i),d=(new Date).getTime(),o=new m(0),(c=[]).length=a,s.forEach(function(e,g,v){g>=a||(v[g]||(v[g]=new Worker("/service-worker-mythread1-decimal.f6c3c3d0.js"),console.log("创建了新webworker线程","service-worker-mythread1-decimal.js-"+g)),v[g].postMessage([r,a,g]),v[g].onmessage=function(e){console.log("主线程从副线程"+(g+1)+"接收event.data\n"),console.log("第一个参数",e.data[0],"\n第二个参数",e.data[1]);var v=new m(e.data[0]);o=m.add(o,v),l=Math.max(l,parseInt(e.data[1])),c[g]=1,function(){if(a==c.filter(function(e){return 1==e}).length){mui(document.getElementById("start")).button("reset"),console.timeEnd(i);var e=(new Date).getTime();u="计算完成,用时"+(e-d)/1e3+"秒第"+l+"次 圆周率"+r+"位\n",document.getElementById("tp2").value="圆周率"+r+"位"+o.toString(),t=document.getElementById("tp"),n+=String(u),t.value=n,h(),s.forEach(function(e,t,n){}),l=0,setTimeout(function(){y("tp","tp2")},0),document.body.onmousemove=document.body.onmouseover=document.body.onmousewheel=document.body.onscroll=document.body.onmousedown=null}}()},v[g].onerror=function(e){console.error("Error",e.message,e.filename)})})):(alert("输入错误"),document.getElementById("pichangwei").value=4,document.getElementById("thread").value=8)}$("#start").click(v),document.getElementById("thread").value=6,document.getElementById("pichangwei").value=4,a=8,l=0,t=document.getElementById("tp"),n=(n=(n=" ")+"UserAgent: "+navigator.userAgent+"\n")+"开始圆周率多线程测试\n",t.value=n,y("tp","tp2")})});
},{"../IMPORTCJSAMDUMD":"Xu0A","./service-worker-mythread1-decimal.js":[["service-worker-mythread1-decimal.f6c3c3d0.js","ypeY"],"ypeY"]}],"yTlv":[function(require,module,exports) {
$(window).one("load",function(){$("#my主体").css("padding-top",$("#my导航栏").height())});
},{}],"0Hlt":[function(require,module,exports) {
"use strict";require("./extendmytextarea.js"),require("./mypidashujisuan-bigint.js"),require("./mypidashujisuan-decimal.js"),require("../拉伸导航栏与主体部分的顶部距离.js");
},{"./extendmytextarea.js":"u9Hj","./mypidashujisuan-bigint.js":"L1Wj","./mypidashujisuan-decimal.js":"hkmU","../拉伸导航栏与主体部分的顶部距离.js":"yTlv"}],"ajQI":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"x/36":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"ajQI"}],"uD6L":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("x/36");b.register("js",require("uD6L"));
},{}]},{},[0,"0Hlt"], null)