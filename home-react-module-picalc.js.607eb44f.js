parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"u9Hj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(){function t(t){var e=null,n=function(t,e){if(Math.abs(parseInt(t.style.height)-t.scrollHeight)>5){console.log(parseInt(t.style.height),t.scrollHeight),t.style.height=t.scrollHeight+3+"px";var n=t;console.log("拉伸文本框",parseInt(t.style.height),t.scrollHeight,n.outerHTML)}},o=function(t){e&&(clearTimeout(e),e=null),e=setTimeout(function(){n(t)},200)};if(t.addEventListener){try{t.addEventListener("input",function(){n(t)},!1)}catch(c){}n(t)}else t.attachEvent&&(t.attachEvent("onpropertychange",function(){n(t)}),n(t));window.VBArray&&window.addEventListener&&(t.attachEvent("onkeydown",function(){var e=window.event.keyCode;8!=e&&46!=e||o(t)}),t.attachEvent("oncut",function(){o(t)})),document.body.onmousemove=function(){o(t)},document.body.onmouseover=function(){o(t)},document.body.onmousewheel=function(){o(t)},document.body.onscroll=function(){o(t)},document.body.onmousedown=function(){o(t)},t.onchange=function(){o(t)};try{t.addEventListener("click",function(){o(t)})}catch(c){}}$("#my主体").css("padding-top",$("#my导航栏").height()),function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];for(var c=0,i=n;c<i.length;c++){var r=i[c],u=document.getElementById(r);try{u.style.height="60px"}catch(a){}t(u)}}("tp","tp2","tp-big","tp2-big")};exports.default=t;
},{}],"L1Wj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=window.IMPORTCJSAMDUMD,t=function(){e("https://cdn.staticfile.org/big-integer/1.6.43/BigInteger.min.js","big-integer").then(function(e){var t,o,n,r,i,a,l,u,c,d,s=e.default,g=Array(16);function m(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)});jQuery("#my导航栏").append(jQuery('<div id="'.concat(e,'" class="alert alert-success alert-dismissible fade show">\n                    <button type="button" class="close" data-dismiss="alert">&times;</button>\n                    <strong>成功!</strong> 计算成功提示信息。\n                    </div>')).fadeTo(5e3,.5,function(){console.log(jQuery("#"+e)),jQuery("#"+e).remove()}))}$("#start-big").click(p),function(){var e=document.getElementById("thread-big"),n=document.getElementById("pichangwei-big"),a=document.getElementById("tp-big");e.value=6,n.value=4,r=8,i=0,t=a,o=(o=" ")+"UserAgent: "+navigator.userAgent+"\n";var l="function"==typeof BigInt?"你的浏览器能够支持原生BigInt!":"你的浏览器无法支持原生BigInt!";console.log(l),o=o+l+"\n开始圆周率多线程测试\n",t.value=o,_("tp-big","tp2-big")}();for(var v=0;v<g.length;v++)g[v]=void 0;function _(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];setTimeout(function(){for(var e=0,o=t;e<o.length;e++){var n=o[e],r=document.getElementById(n),i=r;Math.abs(parseInt(i.style.height)-i.scrollHeight)>5&&(console.log(parseInt(i.style.height),i.scrollHeight),r.style.height=r.scrollHeight+2+"px",console.log("拉伸文本框",parseInt(i.style.height),i.scrollHeight,r.outerHTML))}},0)}function p(){mui(document.getElementById("start-big")).button("loading"),s.abs=function(e){return s(e).abs()},s.mul=function(e,t){return s(e).multiply(t)},s.div=function(e,t){return s(e).divide(t)},s.add=function(e,t){return s(e).add(t)},s().__proto__.cmp=s().__proto__.compare,s().__proto__.div=s().__proto__.divide,s().__proto__.mul=s().__proto__.multiply,s("90071992547409920").__proto__.cmp=s("90071992547409920").__proto__.compare,s("90071992547409920").__proto__.div=s("90071992547409920").__proto__.divide,s("90071992547409920").__proto__.mul=s("90071992547409920").__proto__.multiply;var e=document.getElementById("thread-big"),v=document.getElementById("pichangwei-big");e.value>=1&&e.value<=16&&v.value>=1&&v.value<=100?(a=1e3*Math.floor(v.value),v.value=Math.floor(v.value),r=Math.floor(e.value),e.value=r,d=document.title="圆周率计算多线程-线程数为"+r+"-位数为"+a,o=o+"线程数为"+r+" ",t.value=o,l="圆周率计算"+a+"位 计算圆周率中......  \n",o+=String(l),t.value=o,console.log(d),console.time(d),u=(new Date).getTime(),n=new s(0),(c=[]).length=r,g.forEach(function(e,t,v){t>=r||(v[t]||(v[t]=new Worker("/service-worker-mythread1-bigint.d1f592da.js"),console.log("创建了新webworker线程","service-worker-mythread1-bigint.js-"+t)),v[t].postMessage([a,r,t]),v[t].onmessage=function(e){console.log("主线程从副线程"+(t+1)+"接收event.data\n"),console.log("第一个参数",e.data[0],"\n第二个参数",e.data[1]);var v=new s(e.data[0]);n=s.add(n,v),i=Math.max(i,parseInt(e.data[1])),c[t]=1,function(){var e=document.getElementById("tp-big"),t=document.getElementById("tp2-big");if(r==c.filter(function(e){return 1==e}).length){console.timeEnd(d),mui(document.getElementById("start-big")).button("reset");var s=(new Date).getTime();l="计算完成,用时"+(s-u)/1e3+"秒第"+i+"次 圆周率"+a+"位\n",t.value="圆周率"+a+"位"+n.toString()[0]+"."+n.toString().slice(1);var v=e;o+=String(l),v.value=o,m(),g.forEach(function(e,t,o){}),i=0,setTimeout(function(){_("tp-big","tp2-big")},0),document.body.onmousemove=document.body.onmouseover=document.body.onmousewheel=document.body.onscroll=document.body.onmousedown=null}}()},v[t].onerror=function(e){console.error("Error:",e.message,e.filename)})})):(alert("输入错误"),v.value=4,e.value=8)}})};exports.default=t;
},{"./service-worker-mythread1-bigint.js":[["service-worker-mythread1-bigint.d1f592da.js","gsnx"],"gsnx"]}],"hkmU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=window.IMPORTCJSAMDUMD,t=function(){e("https://cdn.staticfile.org/decimal.js/10.2.0/decimal.min.js","decimal").then(function(e){for(var t,n,o,a,l,r,d,c,u,i,s=e.default,m=Array(16),g=0;g<m.length;g++)m[g]=void 0;function h(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)});jQuery("#my导航栏").append(jQuery('<div id="'.concat(e,'" class="alert alert-success alert-dismissible fade show">\n                        <button type="button" class="close" data-dismiss="alert">&times;</button>\n                        <strong>成功!</strong> 计算成功提示信息。\n                        </div>')).fadeTo(5e3,.5,function(){console.log(jQuery("#"+e)),jQuery("#"+e).remove()}))}function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];setTimeout(function(){for(var e=0,n=t;e<n.length;e++){var o=n[e],a=document.getElementById(o),l=a;Math.abs(parseInt(l.style.height)-l.scrollHeight)>5&&(console.log(parseInt(l.style.height),l.scrollHeight),a.style.height=a.scrollHeight+2+"px",console.log("拉伸文本框",parseInt(l.style.height),l.scrollHeight,a.outerHTML))}},0)}function v(){mui(document.getElementById("start")).button("loading"),document.getElementById("thread").value>=1&&document.getElementById("thread").value<=16&&document.getElementById("pichangwei").value>=1&&document.getElementById("pichangwei").value<=100?(r=1e3*Math.floor(document.getElementById("pichangwei").value),document.getElementById("pichangwei").value=Math.floor(document.getElementById("pichangwei").value),a=Math.floor(document.getElementById("thread").value),document.getElementById("thread").value=a,i=document.title="圆周率计算多线程-线程数为"+a+"-位数为"+r,n=n+"线程数为"+a+" ",t.value=n,d="圆周率计算"+r+"位 计算圆周率中......  \n",n+=String(d),t.value=n,s.precision=r,console.log(i),console.time(i),c=(new Date).getTime(),o=new s(0),(u=[]).length=a,m.forEach(function(e,g,v){g>=a||(v[g]||(v[g]=new Worker("/service-worker-mythread1-decimal.f6c3c3d0.js"),console.log("创建了新webworker线程","service-worker-mythread1-decimal.js-"+g)),v[g].postMessage([r,a,g]),v[g].onmessage=function(e){console.log("主线程从副线程"+(g+1)+"接收event.data\n"),console.log("第一个参数",e.data[0],"\n第二个参数",e.data[1]);var v=new s(e.data[0]);o=s.add(o,v),l=Math.max(l,parseInt(e.data[1])),u[g]=1,function(){if(a==u.filter(function(e){return 1==e}).length){mui(document.getElementById("start")).button("reset"),console.timeEnd(i);var e=(new Date).getTime();d="计算完成,用时"+(e-c)/1e3+"秒第"+l+"次 圆周率"+r+"位\n",document.getElementById("tp2").value="圆周率"+r+"位"+o.toString(),t=document.getElementById("tp"),n+=String(d),t.value=n,h(),m.forEach(function(e,t,n){}),l=0,setTimeout(function(){y("tp","tp2")},0),document.body.onmousemove=document.body.onmouseover=document.body.onmousewheel=document.body.onscroll=document.body.onmousedown=null}}()},v[g].onerror=function(e){console.error("Error",e.message,e.filename)})})):(alert("输入错误"),document.getElementById("pichangwei").value=4,document.getElementById("thread").value=8)}$("#start").click(v),document.getElementById("thread").value=6,document.getElementById("pichangwei").value=4,a=8,l=0,t=document.getElementById("tp"),n=(n=(n=" ")+"UserAgent: "+navigator.userAgent+"\n")+"开始圆周率多线程测试\n",t.value=n,y("tp","tp2")})};exports.default=t;
},{"./service-worker-mythread1-decimal.js":[["service-worker-mythread1-decimal.f6c3c3d0.js","ypeY"],"ypeY"]}],"JP+G":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=l(require("./圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/extendmytextarea.js")),t=l(require("./圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mypidashujisuan-bigint.js")),n=l(require("./圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mypidashujisuan-decimal.js"));function l(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function i(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function m(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react"),b=function(l){function r(){return a(this,r),m(this,o(r).apply(this,arguments))}return s(r,E.Component),i(r,[{key:"componentDidMount",value:function(){document.title="masx200的github主页-圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架",(0,e.default)(),(0,n.default)(),(0,t.default)()}},{key:"render",value:function(){return E.createElement("div",null,E.createElement("div",null,E.createElement("p",null),E.createElement("h3",null,"计算运行速度排行:"),E.createElement("br",null),E.createElement("p",null,"1.原生BigInt最快,"),E.createElement("br",null),E.createElement("p",null,"2.BigInteger.js中速,"),E.createElement("br",null),E.createElement("p",null,"3.Decimal.js最慢。"),E.createElement("hr",null),E.createElement("details",null,E.createElement("summary",{class:" btn btn-outline-primary mui-btn mui-btn-outline-primary"},"展开收起测试结果对比"),E.createElement("br",null),E.createElement("div",{id:"collapsiblecontainer1",class:"collapse row show"},E.createElement("div",{class:"col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12"},E.createElement("h4",null,"线程数为8 圆周率计算15000位测试结果"),E.createElement("br",null),E.createElement("p",null,"chrome 62 测试 BigInteger.js 达到1倍速度"),E.createElement("br",null),E.createElement("p",null,"chrome 74 测试 原生BigInt 达到11.16倍速度")),E.createElement("hr",null),E.createElement("div",{class:"col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12"},E.createElement("h4",null,"线程数为4 圆周率计算6000位测试结果"),E.createElement("br",null),E.createElement("p",null,"firefox 66 测试 decimal.js 达到1倍速度"),E.createElement("br",null),E.createElement("p",null,"firefox 66 测试 BigInteger.js 达到2.163倍速度"),E.createElement("br",null),E.createElement("p",null,"chrome 75 测试 decimal.js 达到3.4375倍速度"),E.createElement("br",null),E.createElement("p",null,"chrome 75 测试 原生BigInt 达到74.038倍速度")),E.createElement("hr",null),E.createElement("div",{class:"col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12"},E.createElement("h4",null,"线程数为4 圆周率计算10000位测试结果"),E.createElement("br",null),E.createElement("p",null,"firefox 66 测试 decimal.js 达到1倍速度"),E.createElement("br",null),E.createElement("p",null,"firefox 66 测试 BigInteger.js 达到2.066倍速度"),E.createElement("br",null),E.createElement("p",null,"chrome 75 测试 decimal.js 达到3.688倍速度"),E.createElement("br",null),E.createElement("p",null,"chrome 75 测试 原生BigInt 达到100.773倍速度")),E.createElement("hr",null),E.createElement("div",{class:"col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12"},E.createElement("h4",null,"线程数为8 圆周率计算10000位测试结果"),E.createElement("br",null),E.createElement("p",null,"firefox 66 测试 BigInteger.js 达到1倍速度"),E.createElement("br",null),E.createElement("p",null,"chrome 62 测试 BigInteger.js 达到6.688倍速度"),E.createElement("br",null),E.createElement("p",null,"chrome 74 测试 原生BigInt 达到49.710倍速度")),E.createElement("hr",null),E.createElement("p",null),E.createElement("br",null)))),E.createElement("hr",null),E.createElement("div",{class:"container"},E.createElement("h3",null,"BigInteger.js"),E.createElement("p",null,"BigInteger.js是Javascript的任意长度整数库，允许对无限大小的整数进行算术运算，尽管存在内存和时间限制。 更新（2018年12月2日）：BigInt被添加为JavaScript的本机功能。 此库现在可用作polyfill：如果环境支持本机BigInt，则此库充当本机实现的瘦包装器。 建议升级浏览器到chrome68以上,才可支持原生BigInt."),E.createElement("h5",null,E.createElement("b",null,"如果浏览器原生支持BigInt,则运行速度有巨大提升!")),E.createElement("hr",null),E.createElement("div",null,E.createElement("p",null,E.createElement("span",null,"选择线程个数:数量 ( 1 到 16 之间):",E.createElement("input",{class:"form-control",id:"thread-big",type:"number",name:"quantity",min:"1",max:"12"}))),E.createElement("p",null,E.createElement("span",null,"选择圆周率位数:数量1000* ( 1 到 100 之间):",E.createElement("input",{class:"form-control",id:"pichangwei-big",type:"number",name:"quantity",min:"1",max:"100"}))),E.createElement("button",{"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-primary btn btn-info  btn btn-outline-primary mui-btn mui-btn-outline-primary",id:"start-big",type:"button",style:{width:"100%"}},"开始")),E.createElement("br",null),E.createElement("div",null,E.createElement("textarea",{class:"form-control",cols:"100",rows:"100",style:{width:"100%",height:"100%",margin:"0 0","text-align":"center"},width:"100%",id:"tp-big"}),E.createElement("br",null),E.createElement("details",{open:!0},E.createElement("summary",{class:" btn btn-outline-primary mui-btn mui-btn-outline-primary"},"展开收起圆周率结果"),E.createElement("br",null),E.createElement("br",null),E.createElement("div",{id:"collapsiblecontainer2",class:"collapse show"},E.createElement("textarea",{class:"form-control",cols:"100",rows:"100",style:{width:"100%",height:"100%",margin:"0 0","text-align":"center"},width:"100%",id:"tp2-big"}))))),E.createElement("hr",null),E.createElement("div",{class:"container"},E.createElement("h3",null,"Decimal.js"),E.createElement("p",null,"Decimal.js是JavaScript的任意精度Decimal类型。 特征: 整数和浮点数, 简单但功能齐全的API, 复制JavaScript的Number.prototype和Math对象的许多方法, 还处理十六进制，二进制和八进制值, 比Java的BigDecimal的JavaScript版本更快，更小，也许更容易使用, 没有依赖, 广泛的平台兼容性：仅使用JavaScript 1.5（ECMAScript 3）功能。 全面的文档和测试集。"),E.createElement("hr",null),E.createElement("div",null,E.createElement("p",null,E.createElement("span",null,"选择线程个数:数量 ( 1 到 16 之间):",E.createElement("input",{class:"form-control",id:"thread",type:"number",name:"quantity",min:"1",max:"12"}))),E.createElement("p",null,E.createElement("span",null,"选择圆周率位数:数量1000* ( 1 到 100 之间):",E.createElement("input",{class:"form-control",id:"pichangwei",type:"number",name:"quantity",min:"1",max:"100"}))),E.createElement("button",{"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-primary btn btn-info  btn btn-outline-primary mui-btn mui-btn-outline-primary",id:"start",type:"button",style:{width:"100%"}},"开始")),E.createElement("br",null),E.createElement("div",null,E.createElement("textarea",{class:"form-control",cols:"100",rows:"100",style:{width:"100%",height:"100%",margin:"0 0","text-align":"center"},width:"100%",id:"tp"}),E.createElement("br",null),E.createElement("br",null),E.createElement("details",{open:!0},E.createElement("summary",{class:" btn btn-outline-primary mui-btn mui-btn-outline-primary"},"展开收起圆周率结果"),E.createElement("br",null),E.createElement("br",null),E.createElement("div",{id:"collapsiblecontainer3",class:"collapse show"},E.createElement("textarea",{class:"form-control",cols:"100",rows:"100",style:{width:"100%",height:"100%",margin:"0 0","text-align":"center"},width:"100%",id:"tp2"}))))))}}]),r}();exports.default=b;
},{"./圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/extendmytextarea.js":"u9Hj","./圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mypidashujisuan-bigint.js":"L1Wj","./圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mypidashujisuan-decimal.js":"hkmU"}],"ajQI":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"x/36":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"ajQI"}],"uD6L":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("x/36");b.register("js",require("uD6L"));
},{}]},{},[0,"JP+G"], null)