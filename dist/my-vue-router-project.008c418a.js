parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"V+rG":[function(require,module,exports) {
window.mychangemenu=function(){"#/"==window.location.hash?(window.myvueobj.$children[0].isActive2=!1,window.myvueobj.$children[0].isActive3=!1,window.myvueobj.$children[0].isActive1=!0):"#/huami"==window.location.hash?(window.myvueobj.$children[0].isActive1=!1,window.myvueobj.$children[0].isActive3=!1,window.myvueobj.$children[0].isActive2=!0):"#/about"==window.location.hash&&(window.myvueobj.$children[0].isActive1=!1,window.myvueobj.$children[0].isActive2=!1,window.myvueobj.$children[0].isActive3=!0)},myonload2=function(){Vue.config.productionTip=!1,Router=VueRouter,Vue.use(VueRouter),App={template:"#App",name:"App",data:function(){return{isActive1:"#/"==window.location.hash,isActive2:"#/huami"==window.location.hash,isActive3:"#/about"==window.location.hash}},methods:{},mounted:function(){window.mychangemenu()}},huami={template:"#huami",name:"huami",data:function(){return{}},methods:{},mounted:function(){function o(){var o=$("#password").val(),e=$("#key").val();if(o&&e){for(var n=$.md5(o,e),t=$.md5(n,"snow"),c=$.md5(n,"kise").split(""),i=t.split(""),u=0;u<=31;u++)if(isNaN(i[u])){"sunlovesnow1990090127xykab".search(c[u])>-1&&(i[u]=i[u].toUpperCase())}var r=i.join(""),a=r.slice(0,1);if(isNaN(a))var d=r.slice(0,16);else d="K"+r.slice(1,16);$("#code16").val(d)}}window.mychangemenu(),$(function(){$("#password").change(o),$("#key").change(o),$("#password").keyup(o),$("#key").keyup(o),$("#code16").mouseover(function(){$("#copycode16").addClass("copycode16h"),$("#code16").addClass("code16h")}),$("#code16").mouseout(function(){$("#copycode16").removeClass("copycode16h"),$("#code16").removeClass("code16h")}),$("#copycode16").mouseover(function(){$("#copycode16").addClass("copycode16h"),$("#code16").addClass("code16h")}),$("#copycode16").mouseout(function(){$("#copycode16").removeClass("copycode16h"),$("#code16").removeClass("code16h")}),$("#copycode16").click(function(){$("#code16").val()&&($("#copyOK").show(),$("#copyOK").fadeTo(0,0).css("border-color","#22B614").css("background-color","#22B614").fadeTo("normal",1).fadeTo(2e3,1).fadeTo(3e3,0,function(){$("#copyOK").hide()}))})}),jQuery(function(){var o=new ClipboardJS(".btn");o.on("success",function(o){console.info("Action:",o.action),console.info("Text:",o.text),o.clearSelection()}),o.on("error",function(o){console.error("Action:",o.action),console.error("Trigger:",o.trigger)}),$("#copyOK").hide()})(function(o){"use strict";function e(o,e){var n=(65535&o)+(65535&e);return(o>>16)+(e>>16)+(n>>16)<<16|65535&n}function n(o,n,t,c,i,u){return e((r=e(e(n,o),e(c,u)))<<(a=i)|r>>>32-a,t);var r,a}function t(o,e,t,c,i,u,r){return n(e&t|~e&c,o,e,i,u,r)}function c(o,e,t,c,i,u,r){return n(e&c|t&~c,o,e,i,u,r)}function i(o,e,t,c,i,u,r){return n(e^t^c,o,e,i,u,r)}function u(o,e,t,c,i,u,r){return n(t^(e|~c),o,e,i,u,r)}function r(o,n){o[n>>5]|=128<<n%32,o[14+(n+64>>>9<<4)]=n;var r,a,d,m,s,h=1732584193,p=-271733879,l=-1732584194,f=271733878;for(r=0;r<o.length;r+=16)a=h,d=p,m=l,s=f,h=t(h,p,l,f,o[r],7,-680876936),f=t(f,h,p,l,o[r+1],12,-389564586),l=t(l,f,h,p,o[r+2],17,606105819),p=t(p,l,f,h,o[r+3],22,-1044525330),h=t(h,p,l,f,o[r+4],7,-176418897),f=t(f,h,p,l,o[r+5],12,1200080426),l=t(l,f,h,p,o[r+6],17,-1473231341),p=t(p,l,f,h,o[r+7],22,-45705983),h=t(h,p,l,f,o[r+8],7,1770035416),f=t(f,h,p,l,o[r+9],12,-1958414417),l=t(l,f,h,p,o[r+10],17,-42063),p=t(p,l,f,h,o[r+11],22,-1990404162),h=t(h,p,l,f,o[r+12],7,1804603682),f=t(f,h,p,l,o[r+13],12,-40341101),l=t(l,f,h,p,o[r+14],17,-1502002290),h=c(h,p=t(p,l,f,h,o[r+15],22,1236535329),l,f,o[r+1],5,-165796510),f=c(f,h,p,l,o[r+6],9,-1069501632),l=c(l,f,h,p,o[r+11],14,643717713),p=c(p,l,f,h,o[r],20,-373897302),h=c(h,p,l,f,o[r+5],5,-701558691),f=c(f,h,p,l,o[r+10],9,38016083),l=c(l,f,h,p,o[r+15],14,-660478335),p=c(p,l,f,h,o[r+4],20,-405537848),h=c(h,p,l,f,o[r+9],5,568446438),f=c(f,h,p,l,o[r+14],9,-1019803690),l=c(l,f,h,p,o[r+3],14,-187363961),p=c(p,l,f,h,o[r+8],20,1163531501),h=c(h,p,l,f,o[r+13],5,-1444681467),f=c(f,h,p,l,o[r+2],9,-51403784),l=c(l,f,h,p,o[r+7],14,1735328473),h=i(h,p=c(p,l,f,h,o[r+12],20,-1926607734),l,f,o[r+5],4,-378558),f=i(f,h,p,l,o[r+8],11,-2022574463),l=i(l,f,h,p,o[r+11],16,1839030562),p=i(p,l,f,h,o[r+14],23,-35309556),h=i(h,p,l,f,o[r+1],4,-1530992060),f=i(f,h,p,l,o[r+4],11,1272893353),l=i(l,f,h,p,o[r+7],16,-155497632),p=i(p,l,f,h,o[r+10],23,-1094730640),h=i(h,p,l,f,o[r+13],4,681279174),f=i(f,h,p,l,o[r],11,-358537222),l=i(l,f,h,p,o[r+3],16,-722521979),p=i(p,l,f,h,o[r+6],23,76029189),h=i(h,p,l,f,o[r+9],4,-640364487),f=i(f,h,p,l,o[r+12],11,-421815835),l=i(l,f,h,p,o[r+15],16,530742520),h=u(h,p=i(p,l,f,h,o[r+2],23,-995338651),l,f,o[r],6,-198630844),f=u(f,h,p,l,o[r+7],10,1126891415),l=u(l,f,h,p,o[r+14],15,-1416354905),p=u(p,l,f,h,o[r+5],21,-57434055),h=u(h,p,l,f,o[r+12],6,1700485571),f=u(f,h,p,l,o[r+3],10,-1894986606),l=u(l,f,h,p,o[r+10],15,-1051523),p=u(p,l,f,h,o[r+1],21,-2054922799),h=u(h,p,l,f,o[r+8],6,1873313359),f=u(f,h,p,l,o[r+15],10,-30611744),l=u(l,f,h,p,o[r+6],15,-1560198380),p=u(p,l,f,h,o[r+13],21,1309151649),h=u(h,p,l,f,o[r+4],6,-145523070),f=u(f,h,p,l,o[r+11],10,-1120210379),l=u(l,f,h,p,o[r+2],15,718787259),p=u(p,l,f,h,o[r+9],21,-343485551),h=e(h,a),p=e(p,d),l=e(l,m),f=e(f,s);return[h,p,l,f]}function a(o){var e,n="";for(e=0;e<32*o.length;e+=8)n+=String.fromCharCode(o[e>>5]>>>e%32&255);return n}function d(o){var e,n=[];for(n[(o.length>>2)-1]=void 0,e=0;e<n.length;e+=1)n[e]=0;for(e=0;e<8*o.length;e+=8)n[e>>5]|=(255&o.charCodeAt(e/8))<<e%32;return n}function m(o){var e,n,t="";for(n=0;n<o.length;n+=1)e=o.charCodeAt(n),t+="0123456789abcdef".charAt(e>>>4&15)+"0123456789abcdef".charAt(15&e);return t}function s(o){return unescape(encodeURIComponent(o))}function h(o){return function(o){return a(r(d(o),8*o.length))}(s(o))}function p(o,e){return function(o,e){var n,t,c=d(o),i=[],u=[];for(i[15]=u[15]=void 0,c.length>16&&(c=r(c,8*o.length)),n=0;n<16;n+=1)i[n]=909522486^c[n],u[n]=1549556828^c[n];return t=r(i.concat(d(e)),512+8*e.length),a(r(u.concat(t),640))}(s(o),s(e))}o.md5=function(o,e,n){return e?n?p(e,o):m(p(e,o)):n?h(o):m(h(o))}}("function"==typeof jQuery?jQuery:this))}},home={template:"#home",name:"home",data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{},mounted:function(){window.mychangemenu()}},about={template:"#about",name:"about",data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{},mounted:function(){window.mychangemenu()}},Vue.component(about.name,about),Vue.component(home.name,home),Vue.component(huami.name,huami),Vue.component(App.name,App),router=new Router({routes:[{path:"/about",name:"about",component:about},{path:"/",name:"home",component:home},{path:"/huami",name:"huami",component:huami},{path:"*",redirect:"/"}]}),window.myvueobj=new Vue({el:"#root",router:router,components:{App:App},template:"<App/>",data:function(){return{}}})};
},{}]},{},["V+rG"], null)
//# sourceMappingURL=/my-vue-router-project.008c418a.js.map