parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"u9Hj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(){function t(t){var n=null,e=function(t,n){if(Math.abs(parseInt(t.style.height)-t.scrollHeight)>5){t.style.height=t.scrollHeight+3+"px";var e=t;console.log("拉伸文本框",parseInt(t.style.height),t.scrollHeight,e.outerHTML)}},o=function(t){n&&(clearTimeout(n),n=null),n=setTimeout(function(){e(t)},200)};try{if(t.addEventListener){try{t.addEventListener("input",function(){e(t)},!1)}catch(c){}e(t)}else t.attachEvent&&(t.attachEvent("onpropertychange",function(){e(t)}),e(t))}catch(c){}window.VBArray&&window.addEventListener&&(t.attachEvent("onkeydown",function(){var n=window.event.keyCode;8!=n&&46!=n||o(t)}),t.attachEvent("oncut",function(){o(t)})),document.body.onmousemove=function(){o(t)},document.body.onmouseover=function(){o(t)},document.body.onmousewheel=function(){o(t)},document.body.onscroll=function(){o(t)},document.body.onmousedown=function(){o(t)},t.onchange=function(){o(t)};try{t.addEventListener("click",function(){o(t)})}catch(c){}}$("#my主体").css("padding-top",$("#my导航栏").height()),function(){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];for(var c=0,i=e;c<i.length;c++){var u=i[c],r=document.getElementById(u);try{r.style.height="60px"}catch(a){}t(r)}}("tp","tp2","tp-big","tp2-big")};exports.default=t;
},{}],"L1Wj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.关闭所有worker=o,exports.default=void 0;var e=window.IMPORTCJSAMDUMD,t=Array(16).fill();function o(){t.forEach(function(e,t,o){try{o[t].terminate()}catch(n){}})}var n=function(){e("https://cdn.staticfile.org/big-integer/1.6.43/BigInteger.min.js","big-integer").then(function(e){var o,n,r,i,a,l,u,c,d,s,g=e.default;function m(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)});jQuery("#my导航栏").append(jQuery('<div id="'.concat(e,'" class="alert alert-success alert-dismissible fade show">\n                    <button type="button" class="close" data-dismiss="alert">&times;</button>\n                    <strong>成功!</strong> 计算成功提示信息。\n                    </div>')).fadeTo(5e3,.5,function(){console.log(jQuery("#"+e)),jQuery("#"+e).remove()}))}function _(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];setTimeout(function(){for(var e=0,o=t;e<o.length;e++){var n=o[e],r=document.getElementById(n),i=r;Math.abs(parseInt(i.style.height)-i.scrollHeight)>5&&(r.style.height=r.scrollHeight+2+"px",console.log("拉伸文本框",parseInt(i.style.height),i.scrollHeight,r.outerHTML))}},0)}function v(){mui(document.getElementById("start-big")).button("loading"),g.abs=function(e){return g(e).abs()},g.mul=function(e,t){return g(e).multiply(t)},g.div=function(e,t){return g(e).divide(t)},g.add=function(e,t){return g(e).add(t)},g().__proto__.cmp=g().__proto__.compare,g().__proto__.div=g().__proto__.divide,g().__proto__.mul=g().__proto__.multiply,g("90071992547409920").__proto__.cmp=g("90071992547409920").__proto__.compare,g("90071992547409920").__proto__.div=g("90071992547409920").__proto__.divide,g("90071992547409920").__proto__.mul=g("90071992547409920").__proto__.multiply;var e=document.getElementById("thread-big"),v=document.getElementById("pichangwei-big");e.value>=1&&e.value<=16&&v.value>=1&&v.value<=100?(l=1e3*Math.floor(v.value),v.value=Math.floor(v.value),i=Math.floor(e.value),e.value=i,s=document.title="圆周率计算多线程-线程数为"+i+"-位数为"+l,n=n+"线程数为"+i+" ",o.value=n,u="圆周率计算"+l+"位 计算圆周率中......  \n",n+=String(u),o.value=n,console.log(s),console.time(s),c=(new Date).getTime(),r=new g(0),(d=[]).length=i,t.forEach(function(e,t,o){t>=i||(o[t]||(o[t]=new Worker("/service-worker-mythread1-bigint.d1f592da.js"),console.log("创建了新webworker线程","service-worker-mythread1-bigint.js-"+t)),o[t].postMessage([l,i,t]),o[t].onmessage=function(e){console.log("主线程从副线程"+(t+1)+"接收event.data\n"),console.log("第一个参数",e.data[0],"\n第二个参数",e.data[1]);var o=new g(e.data[0]);r=g.add(r,o),a=Math.max(a,parseInt(e.data[1])),d[t]=1,function(){var e=document.getElementById("tp-big"),t=document.getElementById("tp2-big");if(i==d.filter(function(e){return 1==e}).length){console.timeEnd(s),mui(document.getElementById("start-big")).button("reset");var o=(new Date).getTime();u="计算完成,用时"+(o-c)/1e3+"秒第"+a+"次 圆周率"+l+"位\n",t.value="圆周率"+l+"位"+r.toString()[0]+"."+r.toString().slice(1);var g=e;n+=String(u),g.value=n,m(),a=0,setTimeout(function(){_("tp-big","tp2-big")},0),document.body.onmousemove=document.body.onmouseover=document.body.onmousewheel=document.body.onscroll=document.body.onmousedown=null}}()},o[t].onerror=function(e){console.error("Error:",e.message,e.filename)})})):(alert("输入错误"),v.value=4,e.value=8)}$("#start-big").click(v),function(){var e=document.getElementById("thread-big"),t=document.getElementById("pichangwei-big"),r=document.getElementById("tp-big");e.value=6,t.value=4,i=8,a=0,o=r,n=(n=" ")+"UserAgent: "+navigator.userAgent+"\n";var l="function"==typeof BigInt?"你的浏览器能够支持原生BigInt!":"你的浏览器无法支持原生BigInt!";console.log(l),n=n+l+"\n开始圆周率多线程测试\n",o.value=n,_("tp-big","tp2-big")}()})};exports.default=n;
},{"./service-worker-mythread1-bigint.js":[["service-worker-mythread1-bigint.d1f592da.js","gsnx"],"gsnx"]}],"hkmU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.关闭所有worker=n,exports.default=void 0;var e=window.IMPORTCJSAMDUMD,t=Array(16).fill();function n(){t.forEach(function(e,t,n){try{n[t].terminate()}catch(o){}})}var o=function(){e("https://cdn.staticfile.org/decimal.js/10.2.0/decimal.min.js","decimal").then(function(e){var n,o,a,l,r,c,d,u,i,m,s=e.default;function g(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)});jQuery("#my导航栏").append(jQuery('<div id="'.concat(e,'" class="alert alert-success alert-dismissible fade show">\n                        <button type="button" class="close" data-dismiss="alert">&times;</button>\n                        <strong>成功!</strong> 计算成功提示信息。\n                        </div>')).fadeTo(5e3,.5,function(){console.log(jQuery("#"+e)),jQuery("#"+e).remove()}))}function h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];setTimeout(function(){for(var e=0,n=t;e<n.length;e++){var o=n[e],a=document.getElementById(o),l=a;Math.abs(parseInt(l.style.height)-l.scrollHeight)>5&&(a.style.height=a.scrollHeight+2+"px",console.log("拉伸文本框",parseInt(l.style.height),l.scrollHeight,a.outerHTML))}},0)}function y(){mui(document.getElementById("start")).button("loading"),document.getElementById("thread").value>=1&&document.getElementById("thread").value<=16&&document.getElementById("pichangwei").value>=1&&document.getElementById("pichangwei").value<=100?(c=1e3*Math.floor(document.getElementById("pichangwei").value),document.getElementById("pichangwei").value=Math.floor(document.getElementById("pichangwei").value),l=Math.floor(document.getElementById("thread").value),document.getElementById("thread").value=l,m=document.title="圆周率计算多线程-线程数为"+l+"-位数为"+c,o=o+"线程数为"+l+" ",n.value=o,d="圆周率计算"+c+"位 计算圆周率中......  \n",o+=String(d),n.value=o,s.precision=c,console.log(m),console.time(m),u=(new Date).getTime(),a=new s(0),(i=[]).length=l,t.forEach(function(e,t,y){t>=l||(y[t]||(y[t]=new Worker("/service-worker-mythread1-decimal.f6c3c3d0.js"),console.log("创建了新webworker线程","service-worker-mythread1-decimal.js-"+t)),y[t].postMessage([c,l,t]),y[t].onmessage=function(e){console.log("主线程从副线程"+(t+1)+"接收event.data\n"),console.log("第一个参数",e.data[0],"\n第二个参数",e.data[1]);var y=new s(e.data[0]);a=s.add(a,y),r=Math.max(r,parseInt(e.data[1])),i[t]=1,function(){if(l==i.filter(function(e){return 1==e}).length){mui(document.getElementById("start")).button("reset"),console.timeEnd(m);var e=(new Date).getTime();d="计算完成,用时"+(e-u)/1e3+"秒第"+r+"次 圆周率"+c+"位\n",document.getElementById("tp2").value="圆周率"+c+"位"+a.toString(),n=document.getElementById("tp"),o+=String(d),n.value=o,g(),r=0,setTimeout(function(){h("tp","tp2")},0),document.body.onmousemove=document.body.onmouseover=document.body.onmousewheel=document.body.onscroll=document.body.onmousedown=null}}()},y[t].onerror=function(e){console.error("Error",e.message,e.filename)})})):(alert("输入错误"),document.getElementById("pichangwei").value=4,document.getElementById("thread").value=8)}$("#start").click(y),document.getElementById("thread").value=6,document.getElementById("pichangwei").value=4,l=8,r=0,n=document.getElementById("tp"),o=(o=(o=" ")+"UserAgent: "+navigator.userAgent+"\n")+"开始圆周率多线程测试\n",n.value=o,h("tp","tp2")})};exports.default=o;
},{"./service-worker-mythread1-decimal.js":[["service-worker-mythread1-decimal.f6c3c3d0.js","ypeY"],"ypeY"]}],"WVfo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=r(require("./圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/extendmytextarea.js")),t=n(require("./圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mypidashujisuan-bigint.js")),l=n(require("./圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mypidashujisuan-decimal.js"));function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,l):{};n.get||n.set?Object.defineProperty(t,l,n):t[l]=e[l]}return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}var a=window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react"),c=a.useState,m=a.useEffect,i=a.useRef;function u(){return m(function(){return document.title="masx200的github主页-圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架",(0,e.default)(),(0,l.default)(),(0,t.default)(),function(){(0,t.关闭所有worker)(),(0,l.关闭所有worker)()}}),a.createElement("div",null,a.createElement("div",null,a.createElement("p",null),a.createElement("h3",null,"计算运行速度排行:"),a.createElement("br",null),a.createElement("p",null,"1.原生BigInt最快,"),a.createElement("br",null),a.createElement("p",null,"2.BigInteger.js中速,"),a.createElement("br",null),a.createElement("p",null,"3.Decimal.js最慢。"),a.createElement("hr",null),a.createElement("details",null,a.createElement("summary",{class:" btn btn-outline-primary mui-btn mui-btn-outline-primary"},"展开收起测试结果对比"),a.createElement("br",null),a.createElement("div",{id:"collapsiblecontainer1",class:"collapse row show"},a.createElement("div",{class:"col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12"},a.createElement("h4",null,"线程数为8 圆周率计算15000位测试结果"),a.createElement("br",null),a.createElement("p",null,"chrome 62 测试 BigInteger.js 达到1倍速度"),a.createElement("br",null),a.createElement("p",null,"chrome 74 测试 原生BigInt 达到11.16倍速度")),a.createElement("hr",null),a.createElement("div",{class:"col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12"},a.createElement("h4",null,"线程数为4 圆周率计算6000位测试结果"),a.createElement("br",null),a.createElement("p",null,"firefox 66 测试 decimal.js 达到1倍速度"),a.createElement("br",null),a.createElement("p",null,"firefox 66 测试 BigInteger.js 达到2.163倍速度"),a.createElement("br",null),a.createElement("p",null,"chrome 75 测试 decimal.js 达到3.4375倍速度"),a.createElement("br",null),a.createElement("p",null,"chrome 75 测试 原生BigInt 达到74.038倍速度")),a.createElement("hr",null),a.createElement("div",{class:"col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12"},a.createElement("h4",null,"线程数为4 圆周率计算10000位测试结果"),a.createElement("br",null),a.createElement("p",null,"firefox 66 测试 decimal.js 达到1倍速度"),a.createElement("br",null),a.createElement("p",null,"firefox 66 测试 BigInteger.js 达到2.066倍速度"),a.createElement("br",null),a.createElement("p",null,"chrome 75 测试 decimal.js 达到3.688倍速度"),a.createElement("br",null),a.createElement("p",null,"chrome 75 测试 原生BigInt 达到100.773倍速度")),a.createElement("hr",null),a.createElement("div",{class:"col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12"},a.createElement("h4",null,"线程数为8 圆周率计算10000位测试结果"),a.createElement("br",null),a.createElement("p",null,"firefox 66 测试 BigInteger.js 达到1倍速度"),a.createElement("br",null),a.createElement("p",null,"chrome 62 测试 BigInteger.js 达到6.688倍速度"),a.createElement("br",null),a.createElement("p",null,"chrome 74 测试 原生BigInt 达到49.710倍速度")),a.createElement("hr",null),a.createElement("p",null),a.createElement("br",null)))),a.createElement("hr",null),a.createElement("div",{class:"container"},a.createElement("h3",null,"BigInteger.js"),a.createElement("p",null,"BigInteger.js是Javascript的任意长度整数库，允许对无限大小的整数进行算术运算，尽管存在内存和时间限制。 更新（2018年12月2日）：BigInt被添加为JavaScript的本机功能。 此库现在可用作polyfill：如果环境支持本机BigInt，则此库充当本机实现的瘦包装器。 建议升级浏览器到chrome68以上,才可支持原生BigInt."),a.createElement("h5",null,a.createElement("b",null,"如果浏览器原生支持BigInt,则运行速度有巨大提升!")),a.createElement("hr",null),a.createElement("div",null,a.createElement("p",null,a.createElement("span",null,"选择线程个数:数量 ( 1 到 16 之间):",a.createElement("input",{class:"form-control",id:"thread-big",type:"number",name:"quantity",min:"1",max:"12"}))),a.createElement("p",null,a.createElement("span",null,"选择圆周率位数:数量1000* ( 1 到 100 之间):",a.createElement("input",{class:"form-control",id:"pichangwei-big",type:"number",name:"quantity",min:"1",max:"100"}))),a.createElement("button",{"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-primary btn btn-info  btn btn-outline-primary mui-btn mui-btn-outline-primary",id:"start-big",type:"button",style:{width:"100%"}},"开始")),a.createElement("br",null),a.createElement("div",null,a.createElement("textarea",{class:"form-control",cols:"100",rows:"100",style:{width:"100%",height:"100%",margin:"0 0","text-align":"center"},width:"100%",id:"tp-big"}),a.createElement("br",null),a.createElement("details",{open:!0},a.createElement("summary",{class:" btn btn-outline-primary mui-btn mui-btn-outline-primary"},"展开收起圆周率结果"),a.createElement("br",null),a.createElement("br",null),a.createElement("div",{id:"collapsiblecontainer2",class:"collapse show"},a.createElement("textarea",{class:"form-control",cols:"100",rows:"100",style:{width:"100%",height:"100%",margin:"0 0","text-align":"center"},width:"100%",id:"tp2-big"}))))),a.createElement("hr",null),a.createElement("div",{class:"container"},a.createElement("h3",null,"Decimal.js"),a.createElement("p",null,"Decimal.js是JavaScript的任意精度Decimal类型。 特征: 整数和浮点数, 简单但功能齐全的API, 复制JavaScript的Number.prototype和Math对象的许多方法, 还处理十六进制，二进制和八进制值, 比Java的BigDecimal的JavaScript版本更快，更小，也许更容易使用, 没有依赖, 广泛的平台兼容性：仅使用JavaScript 1.5（ECMAScript 3）功能。 全面的文档和测试集。"),a.createElement("hr",null),a.createElement("div",null,a.createElement("p",null,a.createElement("span",null,"选择线程个数:数量 ( 1 到 16 之间):",a.createElement("input",{class:"form-control",id:"thread",type:"number",name:"quantity",min:"1",max:"12"}))),a.createElement("p",null,a.createElement("span",null,"选择圆周率位数:数量1000* ( 1 到 100 之间):",a.createElement("input",{class:"form-control",id:"pichangwei",type:"number",name:"quantity",min:"1",max:"100"}))),a.createElement("button",{"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-primary btn btn-info  btn btn-outline-primary mui-btn mui-btn-outline-primary",id:"start",type:"button",style:{width:"100%"}},"开始")),a.createElement("br",null),a.createElement("div",null,a.createElement("textarea",{class:"form-control",cols:"100",rows:"100",style:{width:"100%",height:"100%",margin:"0 0","text-align":"center"},width:"100%",id:"tp"}),a.createElement("br",null),a.createElement("br",null),a.createElement("details",{open:!0},a.createElement("summary",{class:" btn btn-outline-primary mui-btn mui-btn-outline-primary"},"展开收起圆周率结果"),a.createElement("br",null),a.createElement("br",null),a.createElement("div",{id:"collapsiblecontainer3",class:"collapse show"},a.createElement("textarea",{class:"form-control",cols:"100",rows:"100",style:{width:"100%",height:"100%",margin:"0 0","text-align":"center"},width:"100%",id:"tp2"}))))))}
},{"./圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/extendmytextarea.js":"u9Hj","./圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mypidashujisuan-bigint.js":"L1Wj","./圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mypidashujisuan-decimal.js":"hkmU"}],"ajQI":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"x/36":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"ajQI"}],"uD6L":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("x/36");b.register("js",require("uD6L"));
},{}]},{},[0,"WVfo"], null)