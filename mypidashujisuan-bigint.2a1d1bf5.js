parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L1Wj":[function(require,module,exports) {
!function(){var e,t,n,o,i,a,r,l,g,u,d;function c(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];setTimeout(function(){for(var e=0,n=t;e<n.length;e++){value=n[e];var o=document.getElementById(value),i=o;Math.abs(parseInt(i.style.height)-i.scrollHeight)>5&&(console.log(parseInt(i.style.height),i.scrollHeight),o.style.height=o.scrollHeight+2+"px",console.log("拉伸文本框",parseInt(i.style.height),i.scrollHeight,o.outerHTML))}},0)}function m(){bigInt.abs=function(e){return bigInt(e).abs()},bigInt.mul=function(e,t){return bigInt(e).multiply(t)},bigInt.div=function(e,t){return bigInt(e).divide(t)},bigInt.add=function(e,t){return bigInt(e).add(t)},bigInt().__proto__.cmp=bigInt().__proto__.compare,bigInt().__proto__.div=bigInt().__proto__.divide,bigInt().__proto__.mul=bigInt().__proto__.multiply,bigInt("90071992547409920").__proto__.cmp=bigInt("90071992547409920").__proto__.compare,bigInt("90071992547409920").__proto__.div=bigInt("90071992547409920").__proto__.divide,bigInt("90071992547409920").__proto__.mul=bigInt("90071992547409920").__proto__.multiply;var m=document.getElementById("thread-big"),_=document.getElementById("pichangwei-big");if(m.value>=1&&m.value<=12&&_.value>=1&&_.value<=100){var s;a=1e3*Math.floor(_.value),_.value=Math.floor(_.value),o=Math.floor(m.value),m.value=o,d=document.title="圆周率计算多线程-线程数为"+o+"-位数为"+a,t=t+"线程数为"+o+" ",e.value=t,l="圆周率计算"+a+"位 计算圆周率中......  \n",t+=String(l),e.value=t,console.log(d),console.time(d),g=(new Date).getTime(),n=new bigInt(0),(r=[]).length=o,(u=[]).length=o,void 0===s&&(s=new Worker("/mythread1-bigint.d1f592da.js"));for(var b=0,v=o;b<v;b++)r[b]=s;r.forEach(function(e,m,_){_[m]=void 0,_[m]=new Worker("/mythread1-bigint.d1f592da.js"),_[m].postMessage([a,o,m]),_[m].onmessage=function(e){console.log("主线程从副线程"+(m+1)+"接收event.data\n"),console.log("第一个参数",e.data[0],"\n第二个参数",e.data[1]);var _=new bigInt(e.data[0]);n=bigInt.add(n,_),i=Math.max(i,parseInt(e.data[1])),u[m]=1,function(){var e=document.getElementById("tp-big"),m=document.getElementById("tp2-big");if(o==u.filter(function(e){return 1==e}).length){console.timeEnd(d);var _=(new Date).getTime();l="计算完成,用时"+(_-g)/1e3+"秒第"+i+"次 圆周率"+a+"位\n",m.value="圆周率"+a+"位"+n.toString()[0]+"."+n.toString().slice(1);var s=e;t+=String(l),s.value=t,r.forEach(function(e,t,n){n[t].terminate()}),i=0,setTimeout(function(){c("tp-big","tp2-big")},0),document.body.onmousemove=document.body.onmouseover=document.body.onmousewheel=document.body.onscroll=document.body.onmousedown=null}}()},_[m].onerror=function(e){console.error("Error:",e.message),_[m].terminate(),$("#tp2-big").val("Error:"+e.message)}})}else alert("输入错误"),_.value=4,m.value=8}$(document).ready(function(){$("#start-big").click(m),function(){var n=document.getElementById("thread-big"),a=document.getElementById("pichangwei-big"),r=document.getElementById("tp-big");n.value=6,a.value=3,o=8,i=0,e=r,t=(t=" ")+"UserAgent: "+navigator.userAgent+"\n";var l="function"==typeof BigInt?"你的浏览器能够支持原生BigInt!":"你的浏览器无法支持原生BigInt!";console.log(l),t=t+l+"\n开始圆周率多线程测试\n",e.value=t,c("tp-big","tp2-big")}()})}();
},{"./mythread1-bigint.js":[["mythread1-bigint.d1f592da.js","Ce+h"],"Ce+h"]}]},{},["L1Wj"], null)