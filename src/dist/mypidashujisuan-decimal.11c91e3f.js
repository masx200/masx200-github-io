parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"hkmU":[function(require,module,exports) {
!function(){function e(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)});jQuery("#my导航栏").append(jQuery('<div id="'.concat(e,'" class="alert alert-success alert-dismissible fade show">\n              <button type="button" class="close" data-dismiss="alert">&times;</button>\n              <strong>成功!</strong> 计算成功提示信息。\n              </div>')).fadeTo(5e3,.5,function(){console.log(jQuery("#"+e)),jQuery("#"+e).remove()}))}$(document).ready(function(){$("#start").click(h),document.getElementById("thread").value=6,document.getElementById("pichangwei").value=4,a=8,l=0,t=document.getElementById("tp"),n=(n=(n=" ")+"UserAgent: "+navigator.userAgent+"\n")+"开始圆周率多线程测试\n",t.value=n,g("tp","tp2")});for(var t,n,o,a,l,u,c,r,d,m,i=Array(16),s=0;s<i.length;s++)i[s]=void 0;function g(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];setTimeout(function(){for(var e=0,n=t;e<n.length;e++){value=n[e];var o=document.getElementById(value),a=o;Math.abs(parseInt(a.style.height)-a.scrollHeight)>5&&(console.log(parseInt(a.style.height),a.scrollHeight),o.style.height=o.scrollHeight+2+"px",console.log("拉伸文本框",parseInt(a.style.height),a.scrollHeight,o.outerHTML))}},0)}function h(){mui(document.getElementById("start")).button("loading"),document.getElementById("thread").value>=1&&document.getElementById("thread").value<=16&&document.getElementById("pichangwei").value>=1&&document.getElementById("pichangwei").value<=100?(u=1e3*Math.floor(document.getElementById("pichangwei").value),document.getElementById("pichangwei").value=Math.floor(document.getElementById("pichangwei").value),a=Math.floor(document.getElementById("thread").value),document.getElementById("thread").value=a,m=document.title="圆周率计算多线程-线程数为"+a+"-位数为"+u,n=n+"线程数为"+a+" ",t.value=n,c="圆周率计算"+u+"位 计算圆周率中......  \n",n+=String(c),t.value=n,Decimal.precision=u,console.log(m),console.time(m),r=(new Date).getTime(),o=new Decimal(0),(d=[]).length=a,i.forEach(function(s,h,y){h>=a||(y[h]||(y[h]=new Worker("/mythread1-decimal.f6c3c3d0.js"),console.log("创建了新webworker线程","mythread1-decimal.js-"+h)),y[h].postMessage([u,a,h]),y[h].onmessage=function(s){console.log("主线程从副线程"+(h+1)+"接收event.data\n"),console.log("第一个参数",s.data[0],"\n第二个参数",s.data[1]);var y=new Decimal(s.data[0]);o=Decimal.add(o,y),l=Math.max(l,parseInt(s.data[1])),d[h]=1,function(){if(a==d.filter(function(e){return 1==e}).length){mui(document.getElementById("start")).button("reset"),console.timeEnd(m);var s=(new Date).getTime();c="计算完成,用时"+(s-r)/1e3+"秒第"+l+"次 圆周率"+u+"位\n",document.getElementById("tp2").value="圆周率"+u+"位"+o.toString(),t=document.getElementById("tp"),n+=String(c),t.value=n,e(),i.forEach(function(e,t,n){}),l=0,setTimeout(function(){g("tp","tp2")},0),document.body.onmousemove=document.body.onmouseover=document.body.onmousewheel=document.body.onscroll=document.body.onmousedown=null}}()},y[h].onerror=function(e){console.error("Error",e.message,e.filename)})})):(alert("输入错误"),document.getElementById("pichangwei").value=4,document.getElementById("thread").value=8)}}();
},{"./mythread1-decimal.js":[["mythread1-decimal.f6c3c3d0.js","msCx"],"msCx"]}]},{},["hkmU"], null)