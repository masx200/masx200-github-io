parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"JEsB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default=function _default(){function guid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)})}function tanchu弹出消息提示(){var e=guid();jQuery("#my导航栏").append(jQuery('<div id="'.concat(e,'" class="alert alert-success alert-dismissible fade show">\n                  <button type="button" class="close" data-dismiss="alert">&times;</button>\n                  <strong>成功!</strong> 编码成功提示信息。\n                  </div>')).fadeTo(1e4,.5,function(){console.log(jQuery("#"+e)),jQuery("#"+e).remove()}))}var myservice=void 0;function $2(e){return document.getElementById(e)}function encode(){console.time("encodescript"),console.log("encodescript"),mui(document.getElementById("encode")).button("loading"),myservice||(myservice=new Worker("/service-worker-jsfuck.34b0cf64.js"),console.log("创建新线程","service-worker-jsfuck.js")),myservice.postMessage([$2("input").value,$2("eval").checked]),myservice.onmessage=function(e){var n=e.data;console.log("主线程从副线程接收event.data\n"),console.log(n),console.timeEnd("encodescript"),console.time("requestAnimationFrame"),jQuery("#output").val(n),$2("stats").innerHTML=n.length+" chars",mui(document.getElementById("encode")).button("reset"),requestAnimationFrame(function(){console.log("弹出消息提示"),tanchu弹出消息提示(),console.timeEnd("requestAnimationFrame")})},myservice.onerror=function(e){console.error("Error:",e.message,e.filename)}}$2("input").value="console.log('{你好吗zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')",$("#encode").click(encode),$("#eval").change(encode),$("#eval")[0].checked=!0,$("#run").click(function(){return value=eval($2("output").value),$2("eval").checked||alert('"'+value+'"'),!1})};exports.default=_default;
},{"./service-worker-jsfuck.js":[["service-worker-jsfuck.34b0cf64.js","m6ey"],"m6ey"]}],"tHQt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./jsfuck-encode-render"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function l(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react"),p=function(t){function n(){return r(this,n),l(this,u(n).apply(this,arguments))}return i(n,f.Component),c(n,[{key:"componentDidMount",value:function(){document.title="React router App-JSFuck encoder- Write any JavaScript with 6 Characters: []()!+",(0,e.default)()}},{key:"render",value:function(){return f.createElement("div",{class:"JSfuck-Decoder-and-hieroglyphy-decoder"},f.createElement("h1",{style:{"font-size":"30px"}},"编码JSFUCK ",f.createElement("br",null),"encode JSFUCK"),f.createElement("p",null,"JSFuck是一种基于JavaScript原子部分的深奥教育编程风格。它只使用六个不同的字符来编写和执行代码。"),f.createElement("p",null,"()+[]!"),f.createElement("p",null,"它不依赖于浏览器，因此您甚至可以在Node.js上运行它。",f.createElement("br",null),"使用下面的表单转换您自己的脚本。取消选中“eval source”以获取纯字符串。"),f.createElement("p",null,"浏览器兼容性: 建议在最新超高版本的chrome或者Firefox或者safari浏览器中运行！"),f.createElement("br",null),f.createElement("textarea",{id:"input",type:"text",class:"form-control"}),f.createElement("br",null),f.createElement("button",{class:"btn btn-outline-primary btn-lg",id:"encode",type:"text","data-loading-icon":"mui-spinner mui-spinner-custom"},"Encode"),f.createElement("div",{class:"checkbox"},f.createElement("input",{id:"eval",type:"checkbox",checked:""}),f.createElement("label",{for:"eval"},"Eval Source")),f.createElement("textarea",{id:"output",class:"form-control"}),f.createElement("div",{class:"actions"},f.createElement("span",{id:"stats"},"0 chars"),f.createElement("button",{class:"btn btn-outline-success btn-lg",id:"run"},"Run This")),f.createElement("br",null),f.createElement("p",null,f.createElement("a",{href:"https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER"},"https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER")),f.createElement("p",null,f.createElement("a",{href:"https://github.com/aemkei/jsfuck/blob/master/jsfuck.js"},"https://github.com/aemkei/jsfuck/blob/master/jsfuck.js")))}}]),n}();exports.default=p;
},{"./jsfuck-encode-render":"JEsB"}],"Kn9J":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"NdZ7":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"Kn9J"}],"lXgr":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("NdZ7");b.register("js",require("lXgr"));
},{}]},{},[0,"tHQt"], null)