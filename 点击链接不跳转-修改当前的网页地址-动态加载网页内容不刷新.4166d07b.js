parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KA2S":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3];!function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof module,h=t.regeneratorRuntime;if(h)u&&(module.exports=h);else{(h=t.regeneratorRuntime=u?module.exports:{}).wrap=w;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={},v={};v[i]=function(){return this};var d=Object.getPrototypeOf,g=d&&d(d(P([])));g&&g!==e&&n.call(g,i)&&(v=g);var m=b.prototype=x.prototype=Object.create(v);E.prototype=m.constructor=b,b.constructor=E,b[c]=E.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===E||"GeneratorFunction"===(r.displayName||r.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},h.awrap=function(t){return{__await:t}},_(j.prototype),j.prototype[a]=function(){return this},h.AsyncIterator=j,h.async=function(t,r,e,n){var o=new j(w(t,r,e,n));return h.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},_(m),m[c]="Generator",m[i]=function(){return this},m.toString=function(){return"[object Generator]"},h.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},h.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function w(t,r,e,n){var o=r&&r.prototype instanceof x?r:x,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=O(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=L(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function L(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}function x(){}function E(){}function b(){}function _(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function j(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=L(t[e],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?Promise.resolve(h.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(h).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=L(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")());
},{}],"GCZq":[function(require,module,exports) {
var e=function(){return this||"object"==typeof self&&self}()||Function("return this")(),r=e.regeneratorRuntime&&Object.getOwnPropertyNames(e).indexOf("regeneratorRuntime")>=0,t=r&&e.regeneratorRuntime;if(e.regeneratorRuntime=void 0,module.exports=require("./runtime"),r)e.regeneratorRuntime=t;else try{delete e.regeneratorRuntime}catch(n){e.regeneratorRuntime=void 0}
},{"./runtime":"KA2S"}],"jQEs":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],t=o(require("regenerator-runtime"));function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t,o,n,a,r,l){try{var c=e[r](l),s=c.value}catch(i){return void o(i)}c.done?t(s):Promise.resolve(s).then(n,a)}function a(e){return function(){var t=this,o=arguments;return new Promise(function(a,r){var l=e.apply(t,o);function c(e){n(l,a,r,c,s,"next",e)}function s(e){n(l,a,r,c,s,"throw",e)}c(void 0)})}}function r(e){return s(e)||c(e)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function s(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){"use strict";function o(){if(1!=o.alreadyrun){var e;o.alreadyrun=1,console.log("第一次运行此函数启动,点击链接不跳转,修改当前的网页地址,动态加载网页内容,不刷新"),document.write=function(e){console.warn("document.write已被禁用，把document.write中的内容生成dom元素放入body之中要写入的内容为：",e)},window.removeEventListener("load",o);var n=new Object;Array.apply(void 0,r(document.querySelectorAll("a"))).forEach(function(e){""!==e.href&&(e.href=e.href)}),Array.apply(void 0,r(document.querySelectorAll("script"))).forEach(function(e){""!==e.src&&(e.src=e.src)}),document.firstElementChild.dataset.search=location.search,document.firstElementChild.dataset.href=location.href,document.firstElementChild.dataset.pathname=location.pathname,console.log("当前页面的document的href为",document.firstElementChild.dataset.href),console.log("当前页面的document的pathname为",document.firstElementChild.dataset.pathname),console.log("当前页面的document的search为",document.firstElementChild.dataset.search),h(),document.addEventListener("click",h),window.addEventListener("hashchange",h),document.addEventListener("scroll",h),document.addEventListener("mouseover",h);var l=[];window.addEventListener("popstate",function(){console.log("当前的地址栏路径为"+location.pathname,"当前的网页document路径为"+document.firstElementChild.dataset.pathname),document.firstElementChild.dataset.pathname===location.pathname&&document.firstElementChild.dataset.search===location.search||(console.log("动态加载网页内容不刷新开始执行"),function(){x.apply(this,arguments)}()),h()});var c="script完成数量",s="script总数量";m[c]=m[s]=0;var i="完成linkstylesheet",d="数量linkstylesheet";g[i]=g[d]=0}else console.log("已经运行过此函数,不能再次运行");function h(){requestAnimationFrame(function(){l=[],Array.from(document.getElementsByTagName("a")).forEach(u),Array.apply(void 0,r(document.getElementsByTagName("iframe"))).forEach(function(e){e.contentDocument&&Array.apply(void 0,r(e.contentDocument.getElementsByTagName("a"))).forEach(u)}),l.length>0&&console.log("替换a链接",l)})}function u(e){""!==e.href&&(e.href=e.href),"http:"!==e.protocol&&"https:"!==e.protocol||"javascript:;"!=e.href&&location.hostname===e.hostname&&(e.pathname===location.pathname&&e.search===location.search||(e.dataset.href=e.href,e.href="javascript:;",l.push({name:"替换a链接",text:e.outerHTML}),e.addEventListener("click",function(){var t=new URL(e.dataset.href);t.protocol=location.protocol,(t.origin===location.origin&&t.pathname!==location.pathname||t.search!==location.search)&&(history.pushState(void 0,void 0,t),window.dispatchEvent(new PopStateEvent("popstate")))})))}function m(e){if(0===m[c]&&scrollTo(0,0),h(),m[c]++,console.log("script完成数量",m[c],"script总数量",m[s],"script加载完成",e),m[c]>=m[s]){requestAnimationFrame(function(){console.log("触发window的allscriptloadformsrc事件"),window.dispatchEvent(new Event("allscriptloadformsrc"))}),window.addEventListener("alltextscriptload",function e(){window.removeEventListener("alltextscriptload",e),requestAnimationFrame(function(){console.log("触发window的load事件"),window.dispatchEvent(new Event("load"))})}),setTimeout(function(){h()},150)}}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v(),o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,a=document.createElement("script");return a.dataset.loadid=t,a.type="text/javascript",a.src=e,a.onload=function(){o(e)},a.async=!0,a.onerror=function(){n(e)},document.getElementsByTagName("head")[0].appendChild(a),a.outerHTML}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v(),o=document.createElement("script");return o.innerHTML=e,o.type="text/javascript",o.dataset.loadid=t,o.async=!0,document.getElementsByTagName("head")[0].appendChild(o),o.outerHTML}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v(),o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,a=document.createElement("link");return a.dataset.loadid=t,a.rel="stylesheet",a.href=e,a.onload=function(){o(e)},a.type="text/css",a.onerror=function(){n(e)},document.getElementsByTagName("head")[0].appendChild(a),a.outerHTML}function v(){return"xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}function g(e){h(),g[i]++,console.log("完成linkstylesheet",g[i],"数量linkstylesheet",g[d],"stylesheet加载完成",e),g[i]>=g[d]&&requestAnimationFrame(function(){console.log("触发window的allstylesheetload事件"),window.dispatchEvent(new Event("allstylesheetload"))}),setTimeout(function(){h()},150)}function w(e){console.warn("加载失败"+e),g[i]++,g[i]>=g[d]&&requestAnimationFrame(function(){console.log("触发window的allstylesheetload事件"),window.dispatchEvent(new Event("allstylesheetload"))})}function E(e){console.warn("加载失败"+e),m[c]++,m[c]>=m[s]&&requestAnimationFrame(function(){window.dispatchEvent(new Event("allscriptloadformsrc")),console.log("触发window的allscriptloadformsrc事件")})}function x(){return(x=a(t.default.mark(function o(){var a,l,h,u,x,b,C,A,T,L,S,k,q,N,B,M,j,H=arguments;return t.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=H.length>0&&void 0!==H[0]?H[0]:location.href,g[d]=0,g[i]=0,m[s]=0,m[c]=0,(a=new URL(a)).protocal=location.protocol,(location.hostname!==a.hostname||a.pathname===location.pathname)&&a.pathname===document.firstElementChild.dataset.pathname&&a.search===document.firstElementChild.dataset.search){t.next=126;break}if(console.log("动态加载网页内容不刷新,执行"+a),a.pathname!=document.firstElementChild.dataset.pathname||a.search!=document.firstElementChild.dataset.search){t.next=11;break}return t.abrupt("return");case 11:return console.log("替换当前的网址"+document.firstElementChild.dataset.href,"改成",a.href),document.firstElementChild.style="scroll-behavior: smooth;",document.firstElementChild.className="",document.getElementsByTagName("body")[0].style="",document.getElementsByTagName("body")[0].className="",console.log("开始发起fetch请求",a),t.prev=17,h=function t(){window.removeEventListener("allscriptloadformsrc",t),M.forEach(function(t){B.push({type:"text/javascript",name:"添加script元素",text:f(t,e)})}),console.log("添加文本内容加载的script元素",B),window.dispatchEvent(new Event("alltextscriptload"))},u=function t(){window.removeEventListener("allstylesheetload",t);var o=[];Array.apply(void 0,r(document.querySelectorAll("link")).concat(r(document.querySelectorAll("style")),r(document.querySelectorAll("meta")),r(document.querySelectorAll("script")))).forEach(function(t){e!=t.dataset.loadid&&(t.parentNode.removeChild(t),o.push({name:"删除元素",text:t.outerHTML}))}),console.log("删除旧元素",o)},t.prev=20,t.next=23,fetch(a);case 23:l=t.sent,t.next=44;break;case 26:return t.prev=26,t.t0=t.catch(20),console.warn(t.t0),history.pushState(void 0,void 0,document.firstElementChild.dataset.href),window.open(a,"_blank"),console.log("此链接加载失败，打开新页面"),"https:"===a.protocal?a.protocal="http:":a.protocal="https:",t.prev=33,t.next=36,fetch(a);case 36:l=t.sent,t.next=44;break;case 39:return t.prev=39,t.t1=t.catch(33),console.warn(t.t1),history.pushState(void 0,void 0,document.firstElementChild.dataset.href),t.abrupt("return");case 44:if(void 0===l){t.next=64;break}if(console.log("response",l),0!=l.ok){t.next=50;break}return console.log("此链接加载失败，",l.status),history.pushState(void 0,void 0,document.firstElementChild.dataset.href),t.abrupt("return");case 50:return t.prev=50,t.next=53,l.arrayBuffer();case 53:b=t.sent,console.log("html二进制数组",b),t.next=64;break;case 57:return t.prev=57,t.t2=t.catch(50),console.warn(t.t2),console.log("此链接加载失败，打开新页面"),history.pushState(void 0,void 0,"document.firstElementChild.dataset.href"),window.open(a,"_blank"),t.abrupt("return");case 64:if(t.prev=64,C=l.headers.get("Content-Type").toLowerCase(),console.log("Content-Type",C),C.includes("text/html")){t.next=72;break}return console.log("此链接不是网页，打开新页面"),window.open(a,"_blank"),history.pushState(void 0,void 0,document.firstElementChild.dataset.href),t.abrupt("return");case 72:t.next=81;break;case 74:return t.prev=74,t.t3=t.catch(64),console.warn(t.t3),console.log("此链接加载失败，打开新页面"),history.pushState(void 0,void 0,"document.firstElementChild.dataset.href"),window.open(a,"_blank"),t.abrupt("return");case 81:if(document.firstElementChild.dataset.hash=a.hash,location.hash=document.firstElementChild.dataset.hash,document.firstElementChild.dataset.search===location.search&&document.firstElementChild.dataset.href===location.href&&document.firstElementChild.dataset.pathname===location.pathname||(document.firstElementChild.dataset.search=location.search,document.firstElementChild.dataset.href=location.href,document.firstElementChild.dataset.pathname=location.pathname,console.log("当前页面的document的href为",document.firstElementChild.dataset.href),console.log("当前页面的document的pathname为",document.firstElementChild.dataset.pathname),console.log("当前页面的document的search为",document.firstElementChild.dataset.search)),C.includes("charset"))"utf-8"===(x=C.slice(C.indexOf("charset")+"charset".length+1))?console.log("文档的编码是utf-8"):console.log("编码不是utf-8,当前的编码是"+x);else{x="utf-8";try{void 0!==(A=Array.apply(void 0,r((new DOMParser).parseFromString((new TextDecoder).decode(b),"text/html").querySelectorAll("meta[charset]")))[0])&&(x=A.getAttribute("charset").toLowerCase())}catch(o){console.warn(o)}try{void 0!==(A=Array.apply(void 0,r((new DOMParser).parseFromString((new TextDecoder).decode(b),"text/html").querySelectorAll('meta[http-equiv="Content-Type"]')))[0])&&(T=A.getAttribute("content").toLowerCase(),x=T.slice(T.indexOf("charset")+"charset".length+1))}catch(o){console.warn(o)}"utf-8"===x?console.log("文档的编码是utf-8"):console.log("编码不是utf-8,当前的编码是"+x)}e=v(),L=new TextDecoder(x).decode(b),S=(new DOMParser).parseFromString(L,"text/html"),k=new URL(S.URL),n[decodeURI(k.pathname+k.search)]={url:S.URL,text:L,title:S.title,charset:x},console.log("加载过的网页的源代码合集",n),console.log(S),document.title=S.title,document.getElementsByTagName("body")[0].innerHTML=S.getElementsByTagName("body")[0].innerHTML,document.getElementsByTagName("body")[0].style=S.getElementsByTagName("body")[0].style,document.getElementsByTagName("body")[0].className=S.getElementsByTagName("body")[0].className,g[i]=0,g[d]=Array.from(S.querySelectorAll("link[rel='stylesheet']")).length,window.addEventListener("allscriptloadformsrc",h),window.addEventListener("allstylesheetload",u),q=[],Array.from(S.querySelectorAll("link[rel='stylesheet']")).forEach(function(t){t.dataset.loadid=e,t.type="text/css",""!=t.href?(t.href=t.href,q.push({type:t.type,name:"添加css元素",text:y(t.href,e,g,w)})):g[d]--}),console.log("添加stylesheet元素到head数组",q),0===q.length&&g(),N=[],Array.from(S.querySelectorAll("link")).forEach(function(t){"stylesheet"!==t.getAttribute("rel")&&(t.dataset.loadid=e,""!==t.href&&(t.href=t.href),N.push({name:"添加link元素",text:t.outerHTML}),document.getElementsByTagName("head")[0].appendChild(t))}),Array.from(S.querySelectorAll("style")).forEach(function(t){t.type="text/css",t.dataset.loadid=e,N.push({name:"添加css元素",text:t.outerHTML}),document.getElementsByTagName("head")[0].appendChild(t)}),Array.from(S.querySelectorAll("meta")).forEach(function(t){t.dataset.loadid=e,N.push({name:"添加meta元素",text:t.outerHTML}),document.getElementsByTagName("head")[0].appendChild(t)}),console.log("添加其他元素到head",N),m[c]=0,m[s]=Array.from(S.querySelectorAll("script")).length,B=[],M=[],j=[],M=[],Array.from(S.querySelectorAll("script")).forEach(function(t){t.type=t.type.toLowerCase(),"text/javascript"==t.type||""==t.type?(t.type="text/javascript",""!=t.src?(t.src=t.src,j.push({type:t.type,name:"添加script元素",text:p(t.src,e,m,E)})):M.push(t.innerHTML)):(""!=t.src&&(t.src=t.src),t.dataset.loadid=e,j.push({type:t.type,name:"添加script元素",text:t.outerHTML}),document.getElementsByTagName("head")[0].appendChild(t),m[s]--)}),console.log("添加通过src加载的script元素",j),M.forEach(function(){m[s]--}),0===j.length&&m(),t.next=124;break;case 121:t.prev=121,t.t4=t.catch(17),console.warn(t.t4);case 124:t.next=127;break;case 126:console.log("动态加载网页内容不刷新,不执行原网页与现在的网址相同不刷新",document.firstElementChild.dataset.href,a.href);case 127:case"end":return t.stop()}},o,null,[[17,121],[20,26],[33,39],[50,57],[64,74]])}))).apply(this,arguments)}}"object"==("undefined"==typeof module?"undefined":i(module))&&"object"==i(module.exports)&&(module.exports=o),"function"!=typeof 修改当前的网页地址动态加载网页内容不刷新&&window.addEventListener("load",o),e.修改当前的网页地址动态加载网页内容不刷新=e.修改当前的网页地址动态加载网页内容不刷新||o,o.同源网址跳转动态加载=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:location.href;(e=new URL(e)).protocol=location.protocol,(e.origin===location.origin&&e.pathname!==location.pathname||e.search!==location.search)&&(history.pushState(void 0,void 0,e),window.dispatchEvent(new PopStateEvent("popstate")))},o.alreadyrun=0}("undefined"!=typeof window&&window||void 0);
},{"regenerator-runtime":"GCZq"}]},{},["jQEs"], null)