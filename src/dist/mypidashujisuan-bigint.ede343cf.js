parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L1Wj":[function(require,module,exports) {
!function(){function t(){var t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)});jQuery("#my导航栏").append(jQuery('<div id="'.concat(t,'" class="alert alert-success alert-dismissible fade show">\n              <button type="button" class="close" data-dismiss="alert">&times;</button>\n              <strong>成功!</strong> 计算成功提示信息。\n              </div>')).fadeTo(5e3,.5,function(){console.log(jQuery("#"+t)),jQuery("#"+t).remove()}))}$(document).ready(function(){$("#start-big").click(b),function(){var t=document.getElementById("thread-big"),o=document.getElementById("pichangwei-big"),a=document.getElementById("tp-big");t.value=6,o.value=4,i=8,r=0,e=a,n=(n=" ")+"UserAgent: "+navigator.userAgent+"\n";var l="function"==typeof BigInt?"你的浏览器能够支持原生BigInt!":"你的浏览器无法支持原生BigInt!";console.log(l),n=n+l+"\n开始圆周率多线程测试\n",e.value=n,m("tp-big","tp2-big")}()});for(var e,n,o,i,r,a,l,g,u,c,d=Array(16),s=0;s<d.length;s++)d[s]=void 0;function m(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];setTimeout(function(){for(var t=0,n=e;t<n.length;t++){value=n[t];var o=document.getElementById(value),i=o;Math.abs(parseInt(i.style.height)-i.scrollHeight)>5&&(console.log(parseInt(i.style.height),i.scrollHeight),o.style.height=o.scrollHeight+2+"px",console.log("拉伸文本框",parseInt(i.style.height),i.scrollHeight,o.outerHTML))}},0)}function b(){mui(document.getElementById("start-big")).button("loading"),bigInt.abs=function(t){return bigInt(t).abs()},bigInt.mul=function(t,e){return bigInt(t).multiply(e)},bigInt.div=function(t,e){return bigInt(t).divide(e)},bigInt.add=function(t,e){return bigInt(t).add(e)},bigInt().__proto__.cmp=bigInt().__proto__.compare,bigInt().__proto__.div=bigInt().__proto__.divide,bigInt().__proto__.mul=bigInt().__proto__.multiply,bigInt("90071992547409920").__proto__.cmp=bigInt("90071992547409920").__proto__.compare,bigInt("90071992547409920").__proto__.div=bigInt("90071992547409920").__proto__.divide,bigInt("90071992547409920").__proto__.mul=bigInt("90071992547409920").__proto__.multiply;var s=document.getElementById("thread-big"),b=document.getElementById("pichangwei-big");s.value>=1&&s.value<=16&&b.value>=1&&b.value<=100?(a=1e3*Math.floor(b.value),b.value=Math.floor(b.value),i=Math.floor(s.value),s.value=i,c=document.title="圆周率计算多线程-线程数为"+i+"-位数为"+a,n=n+"线程数为"+i+" ",e.value=n,l="圆周率计算"+a+"位 计算圆周率中......  \n",n+=String(l),e.value=n,console.log(c),console.time(c),g=(new Date).getTime(),o=new bigInt(0),(u=[]).length=i,d.forEach(function(e,s,b){s>=i||(b[s]||(b[s]=new Worker("/mythread1-bigint.d1f592da.js"),console.log("创建了新webworker线程","mythread1-bigint.js-"+s)),b[s].postMessage([a,i,s]),b[s].onmessage=function(e){console.log("主线程从副线程"+(s+1)+"接收event.data\n"),console.log("第一个参数",e.data[0],"\n第二个参数",e.data[1]);var b=new bigInt(e.data[0]);o=bigInt.add(o,b),r=Math.max(r,parseInt(e.data[1])),u[s]=1,function(){var e=document.getElementById("tp-big"),s=document.getElementById("tp2-big");if(i==u.filter(function(t){return 1==t}).length){console.timeEnd(c),mui(document.getElementById("start-big")).button("reset");var b=(new Date).getTime();l="计算完成,用时"+(b-g)/1e3+"秒第"+r+"次 圆周率"+a+"位\n",s.value="圆周率"+a+"位"+o.toString()[0]+"."+o.toString().slice(1);var _=e;n+=String(l),_.value=n,t(),d.forEach(function(t,e,n){}),r=0,setTimeout(function(){m("tp-big","tp2-big")},0),document.body.onmousemove=document.body.onmouseover=document.body.onmousewheel=document.body.onscroll=document.body.onmousedown=null}}()},b[s].onerror=function(t){console.error("Error:",t.message,t.filename)})})):(alert("输入错误"),b.value=4,s.value=8)}}();
},{"./mythread1-bigint.js":[["mythread1-bigint.d1f592da.js","Ce+h"],"Ce+h"]}]},{},["L1Wj"], null)