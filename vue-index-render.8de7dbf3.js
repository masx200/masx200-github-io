parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIG8":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"q8KV":[function(require,module,exports) {
var process = require("process");
var global = arguments[3];
var define;
var process=require("process"),global=arguments[3],define;function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){"use strict";function t(t,i){i?(d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}function i(i,r,e){var s,n=_typeof(i);if("string"===n){var o,u=[],a=i.length,y=0;for(s=0;s<a;++s)(o=i.charCodeAt(s))<128?u[y++]=o:o<2048?(u[y++]=192|o>>6,u[y++]=128|63&o):o<55296||o>=57344?(u[y++]=224|o>>12,u[y++]=128|o>>6&63,u[y++]=128|63&o):(o=65536+((1023&o)<<10|1023&i.charCodeAt(++s)),u[y++]=240|o>>18,u[y++]=128|o>>12&63,u[y++]=128|o>>6&63,u[y++]=128|63&o);i=u}else{if("object"!==n)throw new Error(h);if(null===i)throw new Error(h);if(f&&i.constructor===ArrayBuffer)i=new Uint8Array(i);else if(!(Array.isArray(i)||f&&ArrayBuffer.isView(i)))throw new Error(h)}i.length>64&&(i=new t(r,!0).update(i).array());var c=[],d=[];for(s=0;s<64;++s){var p=i[s]||0;c[s]=92^p,d[s]=54^p}t.call(this,r,e),this.update(d),this.oKeyPad=c,this.inner=!0,this.sharedMemory=e}var h="input is invalid type",r="object"==("undefined"==typeof window?"undefined":_typeof(window)),s=r?window:{};s.JS_SHA256_NO_WINDOW&&(r=!1);var e=!r&&"object"==("undefined"==typeof self?"undefined":_typeof(self)),n=!s.JS_SHA256_NO_NODE_JS&&"object"==(void 0===process?"undefined":_typeof(process))&&process.versions&&process.versions.node;n?s=global:e&&(s=self);var o=!s.JS_SHA256_NO_COMMON_JS&&"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports,a="function"==typeof define&&define.amd,f=!s.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,u="0123456789abcdef".split(""),c=[-2147483648,8388608,32768,128],y=[24,16,8,0],p=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],l=["hex","array","digest","arrayBuffer"],d=[];!s.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!f||!s.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==_typeof(t)&&t.buffer&&t.buffer.constructor===ArrayBuffer});var A=function(i,r){return function(e){return new t(r,!0).update(e)[i]()}},w=function(i){var r=A("hex",i);n&&(r=b(r,i)),r.create=function(){return new t(i)},r.update=function(t){return r.create().update(t)};for(var e=0;e<l.length;++e){var s=l[e];r[s]=A(s,i)}return r},b=function b(t,i){var r=eval("require('crypto')"),s=eval("require('buffer').Buffer"),e=i?"sha224":"sha256",n=function(i){if("string"==typeof i)return r.createHash(e).update(i,"utf8").digest("hex");if(null==i)throw new Error(h);return i.constructor===ArrayBuffer&&(i=new Uint8Array(i)),Array.isArray(i)||ArrayBuffer.isView(i)||i.constructor===s?r.createHash(e).update(new s(i)).digest("hex"):t(i)};return n},v=function(t,r){return function(e,s){return new i(e,r,!0).update(s)[t]()}},_=function(t){var r=v("hex",t);r.create=function(r){return new i(r,t)},r.update=function(t,i){return r.create(t).update(i)};for(var e=0;e<l.length;++e){var s=l[e];r[s]=v(s,t)}return r};t.prototype.update=function(t){if(!this.finalized){var i,r=_typeof(t);if("string"!==r){if("object"!==r)throw new Error(h);if(null===t)throw new Error(h);if(f&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||f&&ArrayBuffer.isView(t)))throw new Error(h);i=!0}for(var e,s,n=0,o=t.length,u=this.blocks;n<o;){if(this.hashed&&(this.hashed=!1,u[0]=this.block,u[16]=u[1]=u[2]=u[3]=u[4]=u[5]=u[6]=u[7]=u[8]=u[9]=u[10]=u[11]=u[12]=u[13]=u[14]=u[15]=0),i)for(s=this.start;n<o&&s<64;++n)u[s>>2]|=t[n]<<y[3&s++];else for(s=this.start;n<o&&s<64;++n)(e=t.charCodeAt(n))<128?u[s>>2]|=e<<y[3&s++]:e<2048?(u[s>>2]|=(192|e>>6)<<y[3&s++],u[s>>2]|=(128|63&e)<<y[3&s++]):e<55296||e>=57344?(u[s>>2]|=(224|e>>12)<<y[3&s++],u[s>>2]|=(128|e>>6&63)<<y[3&s++],u[s>>2]|=(128|63&e)<<y[3&s++]):(e=65536+((1023&e)<<10|1023&t.charCodeAt(++n)),u[s>>2]|=(240|e>>18)<<y[3&s++],u[s>>2]|=(128|e>>12&63)<<y[3&s++],u[s>>2]|=(128|e>>6&63)<<y[3&s++],u[s>>2]|=(128|63&e)<<y[3&s++]);this.lastByteIndex=s,this.bytes+=s-this.start,s>=64?(this.block=u[16],this.start=s-64,this.hash(),this.hashed=!0):this.start=s}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,i=this.lastByteIndex;t[16]=this.block,t[i>>2]|=c[3&i],this.block=t[16],i>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},t.prototype.hash=function(){var t,i,r,e,s,h,n,o,u,a=this.h0,f=this.h1,y=this.h2,c=this.h3,d=this.h4,l=this.h5,b=this.h6,A=this.h7,w=this.blocks;for(t=16;t<64;++t)i=((s=w[t-15])>>>7|s<<25)^(s>>>18|s<<14)^s>>>3,r=((s=w[t-2])>>>17|s<<15)^(s>>>19|s<<13)^s>>>10,w[t]=w[t-16]+i+w[t-7]+r<<0;for(u=f&y,t=0;t<64;t+=4)this.first?(this.is224?(h=300032,A=(s=w[0]-1413257819)-150054599<<0,c=s+24177077<<0):(h=704751109,A=(s=w[0]-210244248)-1521486534<<0,c=s+143694565<<0),this.first=!1):(i=(a>>>2|a<<30)^(a>>>13|a<<19)^(a>>>22|a<<10),e=(h=a&f)^a&y^u,A=c+(s=A+(r=(d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+(d&l^~d&b)+p[t]+w[t])<<0,c=s+(i+e)<<0),i=(c>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),e=(n=c&a)^c&f^h,b=y+(s=b+(r=(A>>>6|A<<26)^(A>>>11|A<<21)^(A>>>25|A<<7))+(A&d^~A&l)+p[t+1]+w[t+1])<<0,i=((y=s+(i+e)<<0)>>>2|y<<30)^(y>>>13|y<<19)^(y>>>22|y<<10),e=(o=y&c)^y&a^n,l=f+(s=l+(r=(b>>>6|b<<26)^(b>>>11|b<<21)^(b>>>25|b<<7))+(b&A^~b&d)+p[t+2]+w[t+2])<<0,i=((f=s+(i+e)<<0)>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10),e=(u=f&y)^f&c^o,d=a+(s=d+(r=(l>>>6|l<<26)^(l>>>11|l<<21)^(l>>>25|l<<7))+(l&b^~l&A)+p[t+3]+w[t+3])<<0,a=s+(i+e)<<0;this.h0=this.h0+a<<0,this.h1=this.h1+f<<0,this.h2=this.h2+y<<0,this.h3=this.h3+c<<0,this.h4=this.h4+d<<0,this.h5=this.h5+l<<0,this.h6=this.h6+b<<0,this.h7=this.h7+A<<0},t.prototype.hex=function(){this.finalize();var t=this.h0,i=this.h1,r=this.h2,e=this.h3,s=this.h4,h=this.h5,n=this.h6,o=this.h7,a=u[t>>28&15]+u[t>>24&15]+u[t>>20&15]+u[t>>16&15]+u[t>>12&15]+u[t>>8&15]+u[t>>4&15]+u[15&t]+u[i>>28&15]+u[i>>24&15]+u[i>>20&15]+u[i>>16&15]+u[i>>12&15]+u[i>>8&15]+u[i>>4&15]+u[15&i]+u[r>>28&15]+u[r>>24&15]+u[r>>20&15]+u[r>>16&15]+u[r>>12&15]+u[r>>8&15]+u[r>>4&15]+u[15&r]+u[e>>28&15]+u[e>>24&15]+u[e>>20&15]+u[e>>16&15]+u[e>>12&15]+u[e>>8&15]+u[e>>4&15]+u[15&e]+u[s>>28&15]+u[s>>24&15]+u[s>>20&15]+u[s>>16&15]+u[s>>12&15]+u[s>>8&15]+u[s>>4&15]+u[15&s]+u[h>>28&15]+u[h>>24&15]+u[h>>20&15]+u[h>>16&15]+u[h>>12&15]+u[h>>8&15]+u[h>>4&15]+u[15&h]+u[n>>28&15]+u[n>>24&15]+u[n>>20&15]+u[n>>16&15]+u[n>>12&15]+u[n>>8&15]+u[n>>4&15]+u[15&n];return this.is224||(a+=u[o>>28&15]+u[o>>24&15]+u[o>>20&15]+u[o>>16&15]+u[o>>12&15]+u[o>>8&15]+u[o>>4&15]+u[15&o]),a},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,i=this.h1,r=this.h2,e=this.h3,s=this.h4,h=this.h5,n=this.h6,o=this.h7,u=[t>>24&255,t>>16&255,t>>8&255,255&t,i>>24&255,i>>16&255,i>>8&255,255&i,r>>24&255,r>>16&255,r>>8&255,255&r,e>>24&255,e>>16&255,e>>8&255,255&e,s>>24&255,s>>16&255,s>>8&255,255&s,h>>24&255,h>>16&255,h>>8&255,255&h,n>>24&255,n>>16&255,n>>8&255,255&n];return this.is224||u.push(o>>24&255,o>>16&255,o>>8&255,255&o),u},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),i=new DataView(t);return i.setUint32(0,this.h0),i.setUint32(4,this.h1),i.setUint32(8,this.h2),i.setUint32(12,this.h3),i.setUint32(16,this.h4),i.setUint32(20,this.h5),i.setUint32(24,this.h6),this.is224||i.setUint32(28,this.h7),t},i.prototype=new t,i.prototype.finalize=function(){if(t.prototype.finalize.call(this),this.inner){this.inner=!1;var i=this.array();t.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(i),t.prototype.finalize.call(this)}};var B=w();B.sha256=B,B.sha224=w(!0),B.sha256.hmac=_(),B.sha224.hmac=_(!0),o?module.exports=B:(s.sha256=B.sha256,s.sha224=B.sha224,a&&define(function(){return B}))}();
},{"process":"KIG8"}],"Xu0A":[function(require,module,exports) {
var global = arguments[3];
var define;
var e,o=arguments[3],t=r(require("./sha256.min"));function r(e){return e&&e.__esModule?e:{default:e}}function n(e){return i(e)||l(e)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function i(e){if(Array.isArray(e)){for(var o=0,t=new Array(e.length);o<e.length;o++)t[o]=e[o];return t}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){function o(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[o];if(t)return t.default;throw new Error("Cannot find module  "+o)}function t(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;function u(e,t,l){var i;u.globalDefQueue=[];var c,f,a=Object.prototype.toString;"string"!=typeof e&&(l=t,t=e,e=null),f=t,"[object Array]"!==a.call(f)&&(l=t,t=null),!t&&function(e){return"[object Function]"===a.call(e)}(l)&&(t=[],l.length&&(l.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(e,o){t.push(o)}),t=(1===l.length?["require"]:["require","exports","module"]).concat(t))),c?(c.defQueue.push([e,t,l]),c.defQueueMap[e]=!0):u.globalDefQueue.push([e,t,l]),console.log("检测到amd模块",u.globalDefQueue[0]),"string"==typeof u.globalDefQueue[0][0]&&void 0===r&&(r=u.globalDefQueue[0][0]);var d=u.globalDefQueue[0][1].map(function(e){return o(e)});u.exports=(i=u.globalDefQueue[0])[2].apply(i,n(d))}return t=(t=new URL(t)).href,u.amd=!0,new Promise(function(n,l){try{!function(){var i;try{try{i=fetch(t).then(function(e){if(!e.ok)throw new Error("fetch failed "+t);return e.text()})}catch(f){return console.error(f),void l(f)}try{i.then(function(i){u.exports={};var a=[{},{}];try{a=function(e,o,t,r,n){return Function("require","define","module","exports",n+"; return [exports, module.exports];")(e,o,t,r)}(o,u,{exports:{}},{},i)}catch(f){return console.error(f),void l(f)}var d={name:void 0,default:void 0,url:void 0};if(void 0===a)a=[{},{}];void 0===u.exports&&(u.exports={}),console.log("模块的输出为",a[0],a[1],u.exports),"object"!==c(a[0])||Object.keys(a[0]).length||"{}"!==JSON.stringify(a[0])?(console.log("检测到umd模块",t),d.default=a[0]):"object"!==c(a[1])||Object.keys(a[1]).length||"{}"!==JSON.stringify(a[1])?(console.log("检测到cjs模块",t),d.default=a[1]):("object"!==c(u.exports)||Object.keys(u.exports).length||"{}"!==JSON.stringify(u.exports))&&(console.log("检测到amd模块",t),d.default=u.exports),"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),void 0!==r?(d.name=r,e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[r]=d):d.name=void 0,d.url=t,void 0!==d.default?void 0!==d.name&&console.log("GLOBALPACKAGESTORE",e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE):console.warn("加载的模块没有输出",t),n(d)})}catch(f){return console.error(f),void l(f)}}catch(f){console.error(f),l(f)}}()}catch(i){console.error(i),l(i)}})}"object"==("undefined"==typeof exports?"undefined":c(exports))&&"undefined"!=typeof module&&(module.exports=t),e.IMPORTCJSAMDUMD=e.IMPORTCJSAMDUMD||t,e.IMPORTCJSAMDUMD.REQUIREPACKAGE=e.IMPORTCJSAMDUMD.REQUIREPACKAGE||o,e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE=e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE||[]}("undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||void 0);
},{"./sha256.min":"q8KV"}],"ajQI":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"x/36":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"ajQI"}],"rTeK":[function(require,module,exports) {
"use strict";var n=a(require("../IMPORTCJSAMDUMD"));function a(n){return n&&n.__esModule?n:{default:n}}$(window).one("load",function(){$(window).on("hashchange",function(){scrollTo(0,0),$("#collapsibleNavbar").removeClass("show"),$("#my主体").css("padding-top",$("#my导航栏").height())});var a=0;function e(n){console.log(n);var a=n[0].default,e=n[1].default;e.config.productionTip=!1,e.config.silent=!0,e.config.devtools=!0,e.use(a),window.keysave="",$(window).on("hashchange",function(){console.log("hashchange"),$("#mynavul").click()});var o,i=new a({routes:[{path:"/about",name:"about",component:function(){return require("_bundle_loader")(require.resolve("./vue-component-about.js"))}},{path:"/",name:"home",component:function(){return require("_bundle_loader")(require.resolve("./vue-component-home.js"))}},{path:"/huami",name:"huami",component:function(){return require("_bundle_loader")(require.resolve("./vue-component-huami.js"))}}]});function t(){jQuery("#example-navbar-collapse").removeClass("show"),o!==window.location.hash?(o=window.location.hash,console.log("hash",window.location.hash),""!=window.location.hash||(window.location.hash="#/")):console.log("hash不改变")}$(window).on("hashchange",t);var l=e.extend({template:'<div id="root">\n            <div id="my导航栏" class="fixed-top container-fluid">\n            <nav class="navbar navbar-default navbar navbar-expand-sm bg-light navbar-light" role="navigation">\n            \n            <div class="container-fluid">\n            <div class="navbar-header">\n            <a class="navbar-brand" href="../index.html">masx200的github主页</a>\n            <button\n                  class="navbar-toggler"\n                  type="button"\n                  data-toggle="collapse"\n                  data-target="#example-navbar-collapse"\n                >\n                  <span class="navbar-toggler-icon"></span>\n                </button>\n      \n            \n            </div>\n            <div class="collapse navbar-collapse" id="example-navbar-collapse">\n            <ul class="nav navbar-nav" id="mynavul" @click="myfreshdata()" >\n            <li id="mynav1" v-bind:class="{ active: isActive1 }">\n            <router-link to="/"  class="nav-link">基于VUE的首页</router-link>\n            </li>\n            <li id="mynav2" v-bind:class="{ active: isActive2 }">\n            <router-link to="/huami"  class="nav-link">花密网页版</router-link>\n            </li>\n            <li id="mynav3" v-bind:class="{ active: isActive3 }">\n            <router-link to="/about"  class="nav-link">关于VUE</router-link>\n            </li>\n            <li>\n            <a href="../my-react-router-test/index.html"  class="nav-link">基于react的首页</a>\n            </li>\n            <li class="">\n            <a href="../圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/index.html"  class="nav-link">圆周率计算多线程</a></li>\n            <li><a href="../JSfuck-and-hieroglyphy-Decoder-and-ENCODER/index.html"  class="nav-link">JSfuck-and-hieroglyphy-Decoder-and-ENCODER</a>\n            </li>\n            </ul>\n            </div>\n            </div>\n            </nav>\n            </div>\n            \n            <div class="container" id="my主体" style="min-width: 100%;padding-top: 53px;"><router-view /> </div>\n            \n            </div>',name:"App",data:function(){return{isActive1:"#/"==window.location.hash,isActive2:"#/huami"==window.location.hash,isActive3:"#/about"==window.location.hash}},methods:{myfreshdata:function(){this.isActive1="#/"==window.location.hash,this.isActive2="#/huami"==window.location.hash,this.isActive3="#/about"==window.location.hash,console.log("myfreshdata",this.isActive1,this.isActive2,this.isActive3)}},mounted:function(){this.myfreshdata(),t(),$("#mynavul").click(t),$("#my主体").css("padding-top",$("#my导航栏").height())}});try{e.component("App",l)}catch(s){console.error(s)}new e({el:"#root",router:i,components:{App:l},template:"<App/>",data:function(){return{}}})}0==a?(a=1,console.log("开始运行此onload函数"),Promise.all([(0,n.default)("https://cdn.staticfile.org/vue-router/3.0.6/vue-router.min.js"),(0,n.default)("https://cdn.staticfile.org/vue/2.6.10/vue.min.js")]).then(e)):console.log("不要重复运行此onload函数")});
},{"../IMPORTCJSAMDUMD":"Xu0A","_bundle_loader":"x/36","./vue-component-about.js":[["vue-component-about.cc7190f1.js","j40M"],"j40M"],"./vue-component-home.js":[["vue-component-home.6d076c62.js","7Nq2"],"7Nq2"],"./vue-component-huami.js":[["vue-component-huami.2a100837.js","e6Rv"],"e6Rv"]}],"uD6L":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("x/36");b.register("js",require("uD6L"));
},{}]},{},[0,"rTeK"], null)