parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ce+h":[function(require,module,exports) {
function t(t){return o(t)||i(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(t){if(Array.isArray(t)){for(var n=0,i=new Array(t.length);n<t.length;n++)i[n]=t[n];return i}}importScripts("https://cdn.staticfile.org/big-integer/1.6.43/BigInteger.min.js"),addEventListener("message",function(n){var i,o;bigInt.abs=function(t){return bigInt(t).abs()},bigInt.mul=function(t,n){return bigInt(t).multiply(n)},bigInt.div=function(t,n){return bigInt(t).divide(n)},bigInt.add=function(t,n){return bigInt(t).add(n)},bigInt().__proto__.cmp=bigInt().__proto__.compare,bigInt().__proto__.div=bigInt().__proto__.divide,bigInt().__proto__.mul=bigInt().__proto__.multiply,bigInt("90071992547409920").__proto__.cmp=bigInt("90071992547409920").__proto__.compare,bigInt("90071992547409920").__proto__.div=bigInt("90071992547409920").__proto__.divide,bigInt("90071992547409920").__proto__.mul=bigInt("90071992547409920").__proto__.multiply,o=n.data[0];var r=n.data[1],g=n.data[2];console.log("副线程"+(g+1)+"从主线程接收event.data\n"),(i=console).log.apply(i,t(n.data));for(var b=new bigInt(0),u=new bigInt(1),l=new bigInt("1e"+o),p=new bigInt(0),e=1,I=new bigInt(1),_=0,a=g;_<a;_++)e*=-1,u=bigInt.mul(u,1024),p=p.plus(1);for(;bigInt.abs(I).cmp(new bigInt(0))>=0&&(I=bigInt.mul(1,e).mul(bigInt.div(l.mul(-Math.pow(2,5)),bigInt.mul(4,p).plus(1)).plus(bigInt.div(l.mul(-1),bigInt.mul(4,p).plus(3))).plus(bigInt.div(l.mul(Math.pow(2,8)),bigInt.mul(10,p).plus(1))).plus(bigInt.div(l.mul(-Math.pow(2,6)),bigInt.mul(10,p).plus(3))).plus(bigInt.div(l.mul(-Math.pow(2,2)),bigInt.mul(10,p).plus(5))).plus(bigInt.div(l.mul(-Math.pow(2,2)),bigInt.mul(10,p).plus(7))).plus(bigInt.div(l.mul(1),bigInt.mul(10,p).plus(9)))).div(bigInt.mul(Math.pow(2,6),u)),b=bigInt.add(b,I),!(bigInt.abs(I).cmp(new bigInt(0))<=0));)for(_=0,a=r;_<a;_++)e*=-1,u=bigInt.mul(u,1024),p=p.plus(1);postMessage([b.toString(),""+p.plus(1)])});
},{}]},{},["Ce+h"], null)