parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"u9Hj":[function(require,module,exports) {
!function(){function n(n){var t=null,o=function(n,t){t&&(n.style.height="auto"),n.style.height=n.scrollHeight+5+"px"},e=function(n){t&&(clearTimeout(t),t=null),t=setTimeout(function(){o(n)},200)};n.addEventListener?(n.addEventListener("input",function(){o(n,1)},!1),o(n)):n.attachEvent&&(n.attachEvent("onpropertychange",function(){o(n)}),o(n)),window.VBArray&&window.addEventListener&&(n.attachEvent("onkeydown",function(){var t=window.event.keyCode;8!=t&&46!=t||e(n)}),n.attachEvent("oncut",function(){e(n)})),document.body.onmousemove=function(){e(n)},document.body.onmouseover=function(){e(n)},document.body.onmousewheel=function(){e(n)},document.body.onscroll=function(){e(n)},document.body.onmousedown=function(){e(n)},n.onchange=function(){e(n)}}!function(){for(var t=arguments.length,o=new Array(t),e=0;e<t;e++)o[e]=arguments[e];for(var u=0,c=o;u<c.length;u++){value=c[u];var i=document.getElementById(value);i.scrollHeight=60,i.style.height="60px",n(i)}}("tp","tp2")}();
},{}]},{},["u9Hj"], null)
//# sourceMappingURL=/extendmytextarea.bc14f372.js.map