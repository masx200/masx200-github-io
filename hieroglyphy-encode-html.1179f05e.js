parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uVpK":[function(require,module,exports) {
!function(){$(document).ready(function(){function guid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)})}function tanchu弹出消息提示(){var e=guid();jQuery("#my导航栏").append(jQuery('<div id="'.concat(e,'" class="alert alert-success alert-dismissible fade show">\n            <button type="button" class="close" data-dismiss="alert">&times;</button>\n            <strong>成功!</strong> 编码成功提示信息。\n            </div>')).fadeTo(1e4,.5,function(){console.log(jQuery("#"+e)),jQuery("#"+e).remove()}))}var myservice=void 0,lastclick;function $2(e){return document.getElementById(e)}function encodeall(e){console.time(e),console.log(e),myservice||(myservice=new Worker("/service-worker-hieroglyphy.0a3223e2.js"),console.log("创建新线程","service-worker-hieroglyphy.js")),mui(document.getElementById(e)).button("loading"),lastclick=e,myservice.postMessage([$2("input").value,lastclick,$("#hieroglyphy").attr("src")]),myservice.onmessage=function(n){var o=n.data;console.log("主线程从副线程接收event.data\n"),console.log(o),console.timeEnd(e),console.time("requestAnimationFrame"),jQuery("#output").val(o),$2("stats").innerHTML=o.length+" chars",requestAnimationFrame(function(){console.log("弹出消息提示"),tanchu弹出消息提示(),console.timeEnd("requestAnimationFrame")}),mui(document.getElementById(e)).button("reset")},myservice.onerror=function(e){console.error("Error:",e.message)}}$("#run").click(function(){var value=eval($2("output").value);"encodestring"===lastclick&&alert('"'+value+'"')}),$("#encodescript").click(function(){encodeall("encodescript")}),$("#encodestring").click(function(){encodeall("encodestring")}),$2("input").value="console.log('{你好吗zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')"})}();
},{"./service-worker-hieroglyphy.js":[["service-worker-hieroglyphy.0a3223e2.js","Rwg8"],"Rwg8"]}]},{},["uVpK"], null)