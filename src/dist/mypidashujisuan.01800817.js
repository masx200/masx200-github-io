parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qMTM":[function(require,module,exports) {
!function(){var e,t,n,o,a,d,l,u,m,c,i;function r(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];setTimeout(function(){for(var e=0,n=t;e<n.length;e++){value=n[e];var o=document.getElementById(value);o.style.height=o.scrollHeight+2+"px"}},0)}function g(){if(document.getElementById("thread").value>=1&&document.getElementById("thread").value<=12&&document.getElementById("pichangwei").value>=1&&document.getElementById("pichangwei").value<=100){var g;d=1e3*Math.floor(document.getElementById("pichangwei").value),document.getElementById("pichangwei").value=Math.floor(document.getElementById("pichangwei").value),o=Math.floor(document.getElementById("thread").value),document.getElementById("thread").value=o,i=document.title="圆周率计算多线程-线程数为"+o+"-位数为"+d,t=t+"线程数为"+o+" ",e.value=t,u="圆周率计算"+d+"位 计算圆周率中......  \n",t+=String(u),e.value=t,Decimal.precision=d,console.log(i),console.time(i),m=(new Date).getTime(),n=new Decimal(0),(l=[]).length=o,(c=[]).length=o,void 0===g&&(g=new Worker("/mythread1.e2a648db.js"));for(var v=0,h=o;v<h;v++)l[v]=g;l.forEach(function(g,v,h){h[v]=void 0,h[v]=new Worker("/mythread1.e2a648db.js"),h[v].postMessage([d,o,v]),h[v].onmessage=function(g){console.log("主线程从副线程"+(v+1)+"接收event.data\n"+g.data);var h=new Decimal(g.data[0]);n=Decimal.add(n,h),a=Math.max(a,parseInt(g.data[1])),c[v]=1,function(){if(o==c.filter(function(e){return 1==e}).length){console.timeEnd(i);var g=(new Date).getTime();u="计算完成,用时"+(g-m)/1e3+"秒第"+a+"次 圆周率"+d+"位\n",document.getElementById("tp2").value="圆周率"+d+"位"+n.toString(),e=document.getElementById("tp"),t+=String(u),e.value=t,l.forEach(function(e,t,n){n[t].terminate()}),a=0,setTimeout(function(){r("tp","tp2")},0),document.body.onmousemove=document.body.onmouseover=document.body.onmousewheel=document.body.onscroll=document.body.onmousedown=null}}()}})}else alert("输入错误"),document.getElementById("pichangwei").value=4,document.getElementById("thread").value=8}window.onload=function(){document.getElementById("thread").value=8,document.getElementById("pichangwei").value=4,o=8,a=0,e=document.getElementById("tp"),t=(t=(t=" ")+"UserAgent: "+navigator.userAgent+"\n")+"开始圆周率多线程测试\n",e.value=t,document.getElementById("start").onclick=g,r("tp","tp2")}}();
},{"./mythread1.js":[["mythread1.e2a648db.js","2trQ"],"mythread1.e2a648db.js.map","2trQ"]}]},{},["qMTM"], null)
//# sourceMappingURL=/mypidashujisuan.01800817.js.map