parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KA2S":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3];!function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof module,h=t.regeneratorRuntime;if(h)u&&(module.exports=h);else{(h=t.regeneratorRuntime=u?module.exports:{}).wrap=w;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={},v={};v[i]=function(){return this};var d=Object.getPrototypeOf,g=d&&d(d(P([])));g&&g!==e&&n.call(g,i)&&(v=g);var m=b.prototype=x.prototype=Object.create(v);E.prototype=m.constructor=b,b.constructor=E,b[c]=E.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===E||"GeneratorFunction"===(r.displayName||r.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},h.awrap=function(t){return{__await:t}},_(j.prototype),j.prototype[a]=function(){return this},h.AsyncIterator=j,h.async=function(t,r,e,n){var o=new j(w(t,r,e,n));return h.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},_(m),m[c]="Generator",m[i]=function(){return this},m.toString=function(){return"[object Generator]"},h.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},h.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function w(t,r,e,n){var o=r&&r.prototype instanceof x?r:x,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=O(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=L(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function L(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}function x(){}function E(){}function b(){}function _(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function j(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=L(t[e],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?Promise.resolve(h.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(h).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=L(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")());
},{}],"GCZq":[function(require,module,exports) {
var e=function(){return this||"object"==typeof self&&self}()||Function("return this")(),r=e.regeneratorRuntime&&Object.getOwnPropertyNames(e).indexOf("regeneratorRuntime")>=0,t=r&&e.regeneratorRuntime;if(e.regeneratorRuntime=void 0,module.exports=require("./runtime"),r)e.regeneratorRuntime=t;else try{delete e.regeneratorRuntime}catch(n){e.regeneratorRuntime=void 0}
},{"./runtime":"KA2S"}],"Xu0A":[function(require,module,exports) {
var global = arguments[3];
var define;
var e,t=arguments[3],o=r(require("regenerator-runtime"));function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t,o,r,n,u,l){try{var i=e[u](l),c=i.value}catch(a){return void o(a)}i.done?t(c):Promise.resolve(c).then(r,n)}function u(e){return function(){var t=this,o=arguments;return new Promise(function(r,u){var l=e.apply(t,o);function i(e){n(l,r,u,i,c,"next",e)}function c(e){n(l,r,u,i,c,"throw",e)}i(void 0)})}}function l(e){return a(e)||c(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function a(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=r.GLOBALPACKAGESTORE[e];if(t)return t;throw new Error("Cannot find module  "+e)}function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;function i(e,o,r){var u;i.globalDefQueue=[];var c,a,f=Object.prototype.toString;"string"!=typeof e&&(r=o,o=e,e=null),a=o,"[object Array]"!==f.call(a)&&(r=o,o=null),!o&&function(e){return"[object Function]"===f.call(e)}(r)&&(o=[],r.length&&(r.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(e,t){o.push(t)}),o=(1===r.length?["require"]:["require","exports","module"]).concat(o))),c?(c.defQueue.push([e,o,r]),c.defQueueMap[e]=!0):i.globalDefQueue.push([e,o,r]),console.log("检测到amd模块",i.globalDefQueue[0]),"string"==typeof i.globalDefQueue[0][0]&&void 0===n&&(n=i.globalDefQueue[0][0]);var s=i.globalDefQueue[0][1].map(function(e){return t(e)});i.exports=(u=i.globalDefQueue[0])[2].apply(u,l(s))}return e=new URL(e),i.amd=!0,new Promise(function(l,c){try{u(o.default.mark(function u(){var a,s,p,d,y,b;return o.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,fetch(e);case 3:if((a=o.sent).ok){o.next=6;break}throw new Error("fetch failed "+e);case 6:return o.next=8,a.text();case 8:s=o.sent,o.next=16;break;case 11:return o.prev=11,o.t0=o.catch(0),console.error(o.t0),c(o.t0),o.abrupt("return");case 16:p={},d={exports:{}},i.exports={},y=[{},{}],o.prev=20,y=function(e,t,o,r,n){return Function("require","define","module","exports",n+"; return [exports, module.exports];")(e,t,o,r)}(t,i,d,p,s),o.next=29;break;case 24:return o.prev=24,o.t1=o.catch(20),console.error(o.t1),c(o.t1),o.abrupt("return");case 29:b={name:void 0,default:void 0,url:void 0},void 0===y&&(y=[{},{}]),void 0===i.exports&&(i.exports={}),console.log(y[0],y[1],i.exports),"object"!==f(y[0])||Object.keys(y[0]).length||"{}"!==JSON.stringify(y[0])?(console.log("检测到umd模块",e),b.default=y[0]):"object"!==f(y[1])||Object.keys(y[1]).length||"{}"!==JSON.stringify(y[1])?(console.log("检测到cjs模块",e),b.default=y[1]):("object"!==f(i.exports)||Object.keys(i.exports).length||"{}"!==JSON.stringify(i.exports))&&(console.log("检测到amd模块",e),b.default=i.exports),"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),void 0!==n?(b.name=n,r.GLOBALPACKAGESTORE[n]=b.default):b.name=void 0,b.url=e,void 0!==b.default?void 0!==b.name&&console.log("GLOBALPACKAGESTORE",r.GLOBALPACKAGESTORE):console.warn("加载的模块没有输出",e),l(b);case 39:case"end":return o.stop()}},u,null,[[0,11],[20,24]])}))()}catch(a){console.error(a),c(a)}})}"object"==("undefined"==typeof exports?"undefined":f(exports))&&"undefined"!=typeof module&&(module.exports=r),e.IMPORTCJSAMDUMD=r,r.REQUIREPACKAGE=t,r.GLOBALPACKAGESTORE=r.GLOBALPACKAGESTORE||[]}("undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||void 0);
},{"regenerator-runtime":"GCZq"}],"jQEs":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],t=n(require("./IMPORTCJSAMDUMD")),o=n(require("regenerator-runtime"));function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,o,n,r,a,l){try{var s=e[a](l),c=s.value}catch(i){return void o(i)}s.done?t(c):Promise.resolve(c).then(n,r)}function a(e){return function(){var t=this,o=arguments;return new Promise(function(n,a){var l=e.apply(t,o);function s(e){r(l,n,a,s,c,"next",e)}function c(e){r(l,n,a,s,c,"throw",e)}s(void 0)})}}function l(e){return i(e)||c(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function i(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){function n(){var e;1!=n.alreadyrun?(n.alreadyrun=1,console.log("第一次运行此函数启动,点击链接不跳转,修改当前的网页地址,动态加载网页内容,不刷新"),(0,t.default)("https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js").then(function(t){var r=t.default;function s(){"function"==typeof r?console.log("当前的jquery版本号为"+r.fn.jquery):console.log("当前的jquery不存在"),console.log("加载jquery版本号3.4.1")}"function"==typeof r&&console.log("当前的jquery版本号为"+r.fn.jquery),new Promise(function(e){"function"!=typeof r?s():r.fn.jquery[0]<3&&s(),e()}),document.write=function(t){r.fn.jquery[0]<3&&s(),console.warn("document.write已被禁用，把document.write中的内容生成dom元素放入body之中要写入的内容为：",t);var o=r(t);try{o.attr("data-loadid",e)}catch(n){return void console.warn(n)}r("body").append(o),console.log("添加元素到body "),console.log(Array.apply(void 0,l(o)).map(function(e){return e.outerHTML}))},window.removeEventListener("load",n);var c=new Object;Array.apply(void 0,l(document.querySelectorAll("a"))).forEach(function(e){""!==e.href&&(e.href=e.href)}),Array.apply(void 0,l(document.querySelectorAll("script"))).forEach(function(e){""!==e.src&&(e.src=e.src)}),document.firstElementChild.dataset.search=location.search,document.firstElementChild.dataset.href=location.href,document.firstElementChild.dataset.pathname=location.pathname,console.log("当前页面的document的href为",document.firstElementChild.dataset.href),console.log("当前页面的document的pathname为",document.firstElementChild.dataset.pathname),console.log("当前页面的document的search为",document.firstElementChild.dataset.search),d(),document.addEventListener("click",d),window.addEventListener("hashchange",d),document.addEventListener("scroll",d),document.addEventListener("mouseover",d);var i=[];function d(){requestAnimationFrame(function(){i=[],Array.from(document.getElementsByTagName("a")).forEach(h),Array.apply(void 0,l(document.getElementsByTagName("iframe"))).forEach(function(e){e.contentDocument&&Array.apply(void 0,l(e.contentDocument.getElementsByTagName("a"))).forEach(h)}),i.length>0&&console.log("替换a链接",i)})}function h(e){""!==e.href&&(e.href=e.href),"http:"!==e.protocol&&"https:"!==e.protocol||"javascript:;"!=e.href&&location.hostname===e.hostname&&(e.pathname===location.pathname&&e.search===location.search||(e.dataset.href=e.href,e.href="javascript:;",i.push({name:"替换a链接",text:e.outerHTML}),e.addEventListener("click",function(){var t=new URL(e.dataset.href);t.protocol=location.protocol,(t.origin===location.origin&&t.pathname!==location.pathname||t.search!==location.search)&&(history.pushState(void 0,void 0,t),window.dispatchEvent(new PopStateEvent("popstate")))})))}function u(e){if(0===u.script完成数量&&scrollTo(0,0),d(),u.script完成数量++,console.log("script完成数量",u.script完成数量,"script总数量",u.script总数量,"script加载完成",e),u.script完成数量>=u.script总数量){requestAnimationFrame(function(){console.log("触发window的allscriptloadformsrc事件"),window.dispatchEvent(new Event("allscriptloadformsrc"))}),window.addEventListener("alltextscriptload",function e(){window.removeEventListener("alltextscriptload",e),requestAnimationFrame(function(){console.log("触发window的load事件"),window.dispatchEvent(new Event("load"))})}),setTimeout(function(){d()},150)}}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y(),o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,r=document.createElement("script");return r.dataset.loadid=t,r.type="text/javascript",r.src=e,r.onload=function(){o(e)},r.async=!0,r.onerror=function(){n(e)},document.getElementsByTagName("head")[0].appendChild(r),r.outerHTML}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y(),o=document.createElement("script");return o.innerHTML=e,o.type="text/javascript",o.dataset.loadid=t,o.async=!0,document.getElementsByTagName("head")[0].appendChild(o),o.outerHTML}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y(),o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,r=document.createElement("link");return r.dataset.loadid=t,r.rel="stylesheet",r.href=e,r.onload=function(){o(e)},r.type="text/css",r.onerror=function(){n(e)},document.getElementsByTagName("head")[0].appendChild(r),r.outerHTML}function y(){return"xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}function g(e){d(),g.完成linkstylesheet++,console.log("完成linkstylesheet",g.完成linkstylesheet,"数量linkstylesheet",g.数量linkstylesheet,"stylesheet加载完成",e),g.完成linkstylesheet>=g.数量linkstylesheet&&requestAnimationFrame(function(){console.log("触发window的allstylesheetload事件"),window.dispatchEvent(new Event("allstylesheetload"))}),setTimeout(function(){d()},150)}function v(e){console.warn("加载失败"+e),g.完成linkstylesheet++,g.完成linkstylesheet>=g.数量linkstylesheet&&requestAnimationFrame(function(){console.log("触发window的allstylesheetload事件"),window.dispatchEvent(new Event("allstylesheetload"))})}function w(e){console.warn("加载失败"+e),u.script完成数量++,u.script完成数量>=u.script总数量&&requestAnimationFrame(function(){window.dispatchEvent(new Event("allscriptloadformsrc")),console.log("触发window的allscriptloadformsrc事件")})}function E(){return(E=a(o.default.mark(function t(){var n,r,a,s,i,d,h,E,x,b,C,A,T,k,L,S,q,j=arguments;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=j.length>0&&void 0!==j[0]?j[0]:location.href,g.数量linkstylesheet=0,g.完成linkstylesheet=0,u.script总数量=0,u.script完成数量=0,(n=new URL(n)).protocal=location.protocol,(location.hostname!==n.hostname||n.pathname===location.pathname)&&n.pathname===document.firstElementChild.dataset.pathname&&n.search===document.firstElementChild.dataset.search){t.next=125;break}if(console.log("动态加载网页内容不刷新,执行"+n),n.pathname!=document.firstElementChild.dataset.pathname||n.search!=document.firstElementChild.dataset.search){t.next=11;break}return t.abrupt("return");case 11:return console.log("替换当前的网址"+document.firstElementChild.dataset.href,"改成",n.href),document.firstElementChild.style="",$("html").css("scroll-behavior","smooth"),document.firstElementChild.className="",document.getElementsByTagName("body")[0].style="",document.getElementsByTagName("body")[0].className="",console.log("开始发起fetch请求",n),t.prev=18,a=function t(){window.removeEventListener("allscriptloadformsrc",t),S.forEach(function(t){L.push({type:"text/javascript",name:"添加script元素",text:p(t,e)})}),console.log("添加文本内容加载的script元素",L),window.dispatchEvent(new Event("alltextscriptload"))},s=function t(){window.removeEventListener("allstylesheetload",t);var o=[];Array.apply(void 0,l(document.querySelectorAll("link")).concat(l(document.querySelectorAll("style")),l(document.querySelectorAll("meta")),l(document.querySelectorAll("script")))).forEach(function(t){e!=t.dataset.loadid&&(t.parentNode.removeChild(t),o.push({name:"删除元素",text:t.outerHTML}))}),console.log("删除旧元素",o)},t.prev=21,t.next=24,fetch(n);case 24:r=t.sent,t.next=45;break;case 27:return t.prev=27,t.t0=t.catch(21),console.warn(t.t0),history.pushState(void 0,void 0,document.firstElementChild.dataset.href),window.open(n,"_blank"),console.log("此链接加载失败，打开新页面"),"https:"===n.protocal?n.protocal="http:":n.protocal="https:",t.prev=34,t.next=37,fetch(n);case 37:r=t.sent,t.next=45;break;case 40:return t.prev=40,t.t1=t.catch(34),console.warn(t.t1),history.pushState(void 0,void 0,document.firstElementChild.dataset.href),t.abrupt("return");case 45:if(void 0===r){t.next=65;break}if(console.log("response",r),0!=r.ok){t.next=51;break}return console.log("此链接加载失败，",r.status),history.pushState(void 0,void 0,document.firstElementChild.dataset.href),t.abrupt("return");case 51:return t.prev=51,t.next=54,r.arrayBuffer();case 54:d=t.sent,console.log("html二进制数组",d),t.next=65;break;case 58:return t.prev=58,t.t2=t.catch(51),console.warn(t.t2),console.log("此链接加载失败，打开新页面"),history.pushState(void 0,void 0,"document.firstElementChild.dataset.href"),window.open(n,"_blank"),t.abrupt("return");case 65:if(t.prev=65,h=r.headers.get("Content-Type").toLowerCase(),console.log("Content-Type",h),h.includes("text/html")){t.next=73;break}return console.log("此链接不是网页，打开新页面"),window.open(n,"_blank"),history.pushState(void 0,void 0,document.firstElementChild.dataset.href),t.abrupt("return");case 73:t.next=82;break;case 75:return t.prev=75,t.t3=t.catch(65),console.warn(t.t3),console.log("此链接加载失败，打开新页面"),history.pushState(void 0,void 0,"document.firstElementChild.dataset.href"),window.open(n,"_blank"),t.abrupt("return");case 82:if(document.firstElementChild.dataset.search===location.search&&document.firstElementChild.dataset.href===location.href&&document.firstElementChild.dataset.pathname===location.pathname||(document.firstElementChild.dataset.search=location.search,document.firstElementChild.dataset.href=location.href,document.firstElementChild.dataset.pathname=location.pathname,console.log("当前页面的document的href为",document.firstElementChild.dataset.href),console.log("当前页面的document的pathname为",document.firstElementChild.dataset.pathname),console.log("当前页面的document的search为",document.firstElementChild.dataset.search)),h.includes("charset"))"utf-8"===(i=h.slice(h.indexOf("charset")+"charset".length+1))?console.log("文档的编码是utf-8"):console.log("编码不是utf-8,当前的编码是"+i);else{i="utf-8";try{void 0!==(E=Array.apply(void 0,l((new DOMParser).parseFromString((new TextDecoder).decode(d),"text/html").querySelectorAll("meta[charset]")))[0])&&(i=E.getAttribute("charset").toLowerCase())}catch(o){console.warn(o)}try{void 0!==(E=Array.apply(void 0,l((new DOMParser).parseFromString((new TextDecoder).decode(d),"text/html").querySelectorAll('meta[http-equiv="Content-Type"]')))[0])&&(x=E.getAttribute("content").toLowerCase(),i=x.slice(x.indexOf("charset")+"charset".length+1))}catch(o){console.warn(o)}"utf-8"===i?console.log("文档的编码是utf-8"):console.log("编码不是utf-8,当前的编码是"+i)}e=y(),b=new TextDecoder(i).decode(d),C=(new DOMParser).parseFromString(b,"text/html"),A=new URL(C.URL),c[decodeURI(A.pathname+A.search)]={url:C.URL,text:b,title:C.title,charset:i},console.log("加载过的网页的源代码合集",c),console.log(C),document.title=C.title,document.getElementsByTagName("body")[0].innerHTML=C.getElementsByTagName("body")[0].innerHTML,document.getElementsByTagName("body")[0].style=C.getElementsByTagName("body")[0].style,document.getElementsByTagName("body")[0].className=C.getElementsByTagName("body")[0].className,g.完成linkstylesheet=0,g.数量linkstylesheet=Array.from(C.querySelectorAll("link[rel='stylesheet']")).length,window.addEventListener("allscriptloadformsrc",a),window.addEventListener("allstylesheetload",s),T=[],Array.from(C.querySelectorAll("link[rel='stylesheet']")).forEach(function(t){t.dataset.loadid=e,t.type="text/css",""!=t.href?(t.href=t.href,T.push({type:t.type,name:"添加css元素",text:f(t.href,e,g,v)})):g.数量linkstylesheet--}),console.log("添加stylesheet元素到head数组",T),0===T.length&&g(),k=[],Array.from(C.querySelectorAll("link")).forEach(function(t){"stylesheet"!==t.getAttribute("rel")&&(t.dataset.loadid=e,""!==t.href&&(t.href=t.href),k.push({name:"添加link元素",text:t.outerHTML}),document.getElementsByTagName("head")[0].appendChild(t))}),Array.from(C.querySelectorAll("style")).forEach(function(t){t.type="text/css",t.dataset.loadid=e,k.push({name:"添加css元素",text:t.outerHTML}),document.getElementsByTagName("head")[0].appendChild(t)}),Array.from(C.querySelectorAll("meta")).forEach(function(t){t.dataset.loadid=e,k.push({name:"添加meta元素",text:t.outerHTML}),document.getElementsByTagName("head")[0].appendChild(t)}),console.log("添加其他元素到head",k),u.script完成数量=0,u.script总数量=Array.from(C.querySelectorAll("script")).length,L=[],S=[],q=[],S=[],Array.from(C.querySelectorAll("script")).forEach(function(t){t.type=t.type.toLowerCase(),"text/javascript"==t.type||""==t.type?(t.type="text/javascript",""!=t.src?(t.src=t.src,q.push({type:t.type,name:"添加script元素",text:m(t.src,e,u,w)})):S.push(t.innerHTML)):(""!=t.src&&(t.src=t.src),t.dataset.loadid=e,q.push({type:t.type,name:"添加script元素",text:t.outerHTML}),document.getElementsByTagName("head")[0].appendChild(t),u.script总数量--)}),console.log("添加通过src加载的script元素",q),S.forEach(function(){u.script总数量--}),0===q.length&&u(),t.next=123;break;case 120:t.prev=120,t.t4=t.catch(18),console.warn(t.t4);case 123:t.next=126;break;case 125:console.log("动态加载网页内容不刷新,不执行原网页与现在的网址相同不刷新",document.firstElementChild.dataset.href,n.href);case 126:case"end":return t.stop()}},t,null,[[18,120],[21,27],[34,40],[51,58],[65,75]])}))).apply(this,arguments)}window.addEventListener("popstate",function(){console.log("事件onpopstate,执行,"),console.log("当前的地址栏路径为"+location.pathname,"当前的网页document路径为"+document.firstElementChild.dataset.pathname),document.firstElementChild.dataset.pathname===location.pathname&&document.firstElementChild.dataset.search===location.search||(console.log("动态加载网页内容不刷新开始执行"),function(){E.apply(this,arguments)}()),d()}),u.script完成数量=u.script总数量=0,g.完成linkstylesheet=g.数量linkstylesheet=0})):console.log("已经运行过此函数,不能再次运行")}"object"==("undefined"==typeof module?"undefined":d(module))&&"object"==d(module.exports)&&(module.exports=n),"function"!=typeof 修改当前的网页地址动态加载网页内容不刷新&&window.addEventListener("load",n),e.修改当前的网页地址动态加载网页内容不刷新=n,n.同源网址跳转动态加载=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:location.href;(e=new URL(e)).protocol=location.protocol,(e.origin===location.origin&&e.pathname!==location.pathname||e.search!==location.search)&&(history.pushState(void 0,void 0,e),window.dispatchEvent(new PopStateEvent("popstate")))},n.alreadyrun=0}("undefined"!=typeof window&&window||void 0);
},{"./IMPORTCJSAMDUMD":"Xu0A","regenerator-runtime":"GCZq"}]},{},["jQEs"], null)