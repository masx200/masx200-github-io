parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ajQI":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"x/36":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"ajQI"}],"QUaA":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function a(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?o(t):n}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c="https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js",m="https://cdn.staticfile.org/react-dom/16.9.0-alpha.0/umd/react-dom.production.min.js",s="https://cdn.staticfile.org/react-router-dom/5.0.1/react-router-dom.min.js";require("_bundle_loader")(require.resolve("./IMPORTCJSAMDUMD")).then(function(e){$(window).one("load",function(){$(window).on("hashchange",function(){scrollTo(0,0),$("#collapsibleNavbar").removeClass("show"),$("#my主体").css("padding-top",$("#my导航栏").height())});var n=0;function o(e){var n=e[0].default,o=e[1].default,i=e[2].default,c=o.render,m=i.Link,s=i.Switch,d=i.Route,p=i.HashRouter,b=n.Suspense,y=n.lazy,f=y(function(){return require("_bundle_loader")(require.resolve("./home-react-module-home.js"))}),h=y(function(){return require("_bundle_loader")(require.resolve("./home-react-module-picalc"))}),v=y(function(){return require("_bundle_loader")(require.resolve("./home-react-module-点击链接不跳转修改当前的网页地址动态加载网页内容不刷新.js"))}),E=y(function(){return require("_bundle_loader")(require.resolve("./home-react-module-IMPORTCJSAMDUMD动态异步加载.js"))}),g=function(e){function o(){return t(this,o),a(this,l(o).apply(this,arguments))}return u(o,n.Component),r(o,[{key:"shouqi收起折叠的导航栏菜单",value:function(){$("#my主体").css("padding-top",$("#my导航栏").height()),$("#example-navbar-collapse").removeClass("show"),k()}},{key:"render",value:function(){return n.createElement(p,null,n.createElement("div",null,n.createElement("div",{class:"container-fluid fixed-top",id:"my导航栏"},n.createElement("nav",{class:"navbar navbar-default navbar navbar-expand-sm bg-light navbar-light",role:"navigation"},n.createElement("div",null,n.createElement(m,{class:"navbar-brand mui-btn mui-btn-primary mui-btn-outlined",to:"/"},"masx200的github主页"),n.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#example-navbar-collapse"},n.createElement("span",{class:"navbar-toggler-icon"}))),n.createElement("div",{class:"collapse navbar-collapse",id:"example-navbar-collapse"},n.createElement("ul",{class:"nav navbar-nav",id:"allnavbar",onClick:this.shouqi收起折叠的导航栏菜单},n.createElement("li",{id:"mynav1"},n.createElement(m,{to:"/react-home",class:"nav-link mui-btn mui-btn-primary mui-btn-outlined"},"基于REACT的主页")),n.createElement("li",null,n.createElement(m,{to:"/react-rssreader",class:"nav-link mui-btn mui-btn-primary mui-btn-outlined"},"rss阅读")),n.createElement("li",{id:"mynav2"},n.createElement(m,{to:"/react-about",class:"nav-link mui-btn mui-btn-primary mui-btn-outlined"},"关于REACT")),n.createElement("li",{class:"nav-item"},n.createElement(m,{to:"/picalc",class:"nav-link mui-btn mui-btn-primary mui-btn-outlined"},"圆周率计算多线程")),n.createElement("li",{class:"nav-item"},n.createElement(m,{to:"/点击链接不跳转修改当前的网页地址动态加载网页内容不刷新",class:"nav-link mui-btn mui-btn-primary mui-btn-outlined"},"点击链接不跳转-修改当前的网页地址-动态加载网页内容不刷新")),n.createElement("li",{class:"nav-item"},n.createElement(m,{to:"/IMPORTCJSAMDUMD动态异步加载",class:"nav-link mui-btn mui-btn-primary mui-btn-outlined"},"IMPORTCJSAMDUMD-动态异步加载-commonjs和umd和amd模块")),n.createElement("li",null,n.createElement("a",{href:"./my-vue-router-project/index.html#/huami",class:"nav-link mui-btn mui-btn-primary mui-btn-outlined"},"花密网页版")),n.createElement("li",null,n.createElement("a",{href:"./my-vue-router-project/index.html",class:"nav-link mui-btn mui-btn-primary mui-btn-outlined"},"基于vue的主页")),n.createElement("li",null,n.createElement("a",{href:"./my-vue-router-project/index.html#/about",class:"nav-link mui-btn mui-btn-primary mui-btn-outlined"},"关于Vue")),n.createElement("li",null,n.createElement(m,{to:"/decoder",class:"nav-link mui-btn mui-btn-primary mui-btn-outlined"},"JSfuck-and-hieroglyphy-Decoder")),n.createElement("li",null,n.createElement(m,{to:"/jsfuck",class:"nav-link mui-btn mui-btn-primary mui-btn-outlined"},"JSfuck-ENCODER")),n.createElement("li",null,n.createElement(m,{to:"/hieroglyphy",class:"nav-link mui-btn mui-btn-primary mui-btn-outlined"},"hieroglyphy-ENCODER")))))),n.createElement("div",{class:"container",id:"my主体"},n.createElement(b,{fallback:n.createElement("div",null,n.createElement("h1",null,"loading"))},n.createElement(s,null,n.createElement(d,{exact:!0,path:"/",component:f}),n.createElement(d,{path:"/picalc",component:h}),n.createElement(d,{path:"/点击链接不跳转修改当前的网页地址动态加载网页内容不刷新",component:v}),n.createElement(d,{path:"/IMPORTCJSAMDUMD动态异步加载",component:E}),n.createElement(d,{path:"/react-home",component:y(function(){return require("_bundle_loader")(require.resolve("./my-react-router-test/react-module-home.js"))})}),n.createElement(d,{path:"/react-rssreader",component:y(function(){return require("_bundle_loader")(require.resolve("./my-react-router-test/react-module-rssreader.js"))})}),n.createElement(d,{path:"/react-about",component:y(function(){return require("_bundle_loader")(require.resolve("./my-react-router-test/react-module-about.js"))})}),n.createElement(d,{path:"/decoder",component:y(function(){return require("_bundle_loader")(require.resolve("./my-react-router-test/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-decoder"))})}),n.createElement(d,{path:"/jsfuck",component:y(function(){return require("_bundle_loader")(require.resolve("./my-react-router-test/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-jsfuck"))})}),n.createElement(d,{path:"/hieroglyphy",component:y(function(){return require("_bundle_loader")(require.resolve("./my-react-router-test/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-hieroglyphy.js"))})}),n.createElement(d,{exact:!0,path:"*",component:f}))))))}},{key:"componentDidMount",value:function(){$("#my主体").css("padding-top",$("#my导航栏").height()),k()}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}}]),o}();function k(){c(n.createElement(g,null),document.getElementById("root")),scrollTo(0,0),$("#collapsibleNavbar").removeClass("show")}k()}0==n?(n=1,e([c,"react"],[m,"react-dom"],[s,"react-router-dom"]).then(o)):console.log("不要重复运行此onload函数")})});
},{"_bundle_loader":"x/36","./IMPORTCJSAMDUMD":[["IMPORTCJSAMDUMD.ef0104fd.js","Xu0A"],"Xu0A"],"./home-react-module-home.js":[["home-react-module-home.c1ba3317.js","Y6Xn"],"Y6Xn"],"./home-react-module-picalc":[["home-react-module-picalc.3f28a510.js","WVfo"],"WVfo"],"./home-react-module-点击链接不跳转修改当前的网页地址动态加载网页内容不刷新.js":[["home-react-module-点击链接不跳转修改当前的网页地址动态加载网页内容不刷新.2cacea8b.js","duBE"],"duBE"],"./home-react-module-IMPORTCJSAMDUMD动态异步加载.js":[["home-react-module-IMPORTCJSAMDUMD动态异步加载.d4d9c870.js","S8qM"],"S8qM"],"./my-react-router-test/react-module-home.js":[["react-module-home.604d3e91.js","yy8G"],["babeljs.29286e73.png","C/qP"],["parcel.16287245.jpg","kb0B"],["bootstrap.2404378e.png","MaUY"],["logo-jquery.d51a0955.png","uo4z"],["react.ddf2fd27.svg","jhsy"],["vue.5a769a56.png","uVqo"],["webpack.bfd30bdd.svg","IeQ5"],"yy8G"],"./my-react-router-test/react-module-rssreader.js":[["react-module-rssreader.5c6fd4ca.js","5k2K"],["www.tmtpost.com.rss.e007e0b3.xml","JNZH"],["feed.iplaysoft.com.9cc76c53.xml","4cct"],["landiannews.com.feed.e9fecfc4.xml","6V4s"],["www.ithome.com.rss.25ce1110.xml","0A3L"],["ifanr.com.feed.ad24a5ec.xml","VmSt"],["pingwest.com.feed.50703289.xml","NNZD"],"5k2K"],"./my-react-router-test/react-module-about.js":[["react-module-about.4e163313.js","lri1"],"lri1"],"./my-react-router-test/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-decoder":[["react-module-decoder.1fb08d92.js","Vm43"],"Vm43"],"./my-react-router-test/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-jsfuck":[["react-module-jsfuck.54b47d5d.js","tHQt"],"tHQt"],"./my-react-router-test/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-hieroglyphy.js":[["react-module-hieroglyphy.47863084.js","TEm/"],"TEm/"]}],"uD6L":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("x/36");b.register("js",require("uD6L"));
},{}]},{},[0,"QUaA"], null)