parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"duBE":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function c(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?l(t):n}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var E=window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react"),h=function(e){function n(){return t(this,n),c(this,a(n).apply(this,arguments))}return o(n,E.Component),r(n,[{key:"componentDidMount",value:function(){document.title="masx200的github首页-点击链接不跳转修改当前的网页地址动态加载网页内容不刷新",$("#my主体").css("padding-top",$("#my导航栏").height())}},{key:"render",value:function(){return E.createElement("div",null,E.createElement("div",{id:"readme",class:"Box Box--condensed instapaper_body md js-code-block-container"},E.createElement("div",{class:"Box-header d-flex flex-items-center flex-justify-between px-2"},E.createElement("h3",{class:"Box-title pr-3"},E.createElement("svg",{class:"octicon octicon-book",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},E.createElement("path",{"fill-rule":"evenodd",d:"M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"})),"readme.md"),E.createElement("div",null,E.createElement("a",{href:"https://github.com/masx200/masx200.github.io/edit/master/src/readme.md",class:"Box-btn-octicon btn-octicon float-right","aria-label":"Edit this file"},E.createElement("svg",{class:"octicon octicon-pencil",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16","aria-hidden":"true"},E.createElement("path",{"fill-rule":"evenodd",d:"M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"}))))),E.createElement("div",{class:"Box-body",style:{padding:" 0px"}},E.createElement("article",{class:"markdown-body entry-content p-5",itemprop:"text",style:{padding:" 0px"}},E.createElement("h1",null,E.createElement("a",{id:"user-content-点击链接不跳转-修改当前的网页地址-动态加载网页内容不刷新的脚本",class:"anchor","aria-hidden":"true",href:"https://github.com/masx200/masx200.github.io/tree/master/src#%E7%82%B9%E5%87%BB%E9%93%BE%E6%8E%A5%E4%B8%8D%E8%B7%B3%E8%BD%AC-%E4%BF%AE%E6%94%B9%E5%BD%93%E5%89%8D%E7%9A%84%E7%BD%91%E9%A1%B5%E5%9C%B0%E5%9D%80-%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD%E7%BD%91%E9%A1%B5%E5%86%85%E5%AE%B9%E4%B8%8D%E5%88%B7%E6%96%B0%E7%9A%84%E8%84%9A%E6%9C%AC"},E.createElement("svg",{class:"octicon octicon-link",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},E.createElement("path",{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"点击链接不跳转-修改当前的网页地址-动态加载网页内容不刷新的脚本"),E.createElement("p",null,E.createElement("a",{href:"https://github.com/masx200/masx200.github.io/blob/master/src/index-%E7%82%B9%E5%87%BB%E9%93%BE%E6%8E%A5%E4%B8%8D%E8%B7%B3%E8%BD%AC-%E4%BF%AE%E6%94%B9%E5%BD%93%E5%89%8D%E7%9A%84%E7%BD%91%E9%A1%B5%E5%9C%B0%E5%9D%80-%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD%E7%BD%91%E9%A1%B5%E5%86%85%E5%AE%B9%E4%B8%8D%E5%88%B7%E6%96%B0.html"},"源代码 html")),E.createElement("p",null,E.createElement("a",{href:"https://github.com/masx200/masx200.github.io/blob/master/src/%E7%82%B9%E5%87%BB%E9%93%BE%E6%8E%A5%E4%B8%8D%E8%B7%B3%E8%BD%AC-%E4%BF%AE%E6%94%B9%E5%BD%93%E5%89%8D%E7%9A%84%E7%BD%91%E9%A1%B5%E5%9C%B0%E5%9D%80-%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD%E7%BD%91%E9%A1%B5%E5%86%85%E5%AE%B9%E4%B8%8D%E5%88%B7%E6%96%B0.js"},"源代码 js")),E.createElement("p",null,E.createElement("a",{href:"https://github.com/masx200/masx200.github.io/blob/master/src/readme.md"},"https://github.com/masx200/masx200.github.io/blob/master/src/readme.md")),E.createElement("h2",null,E.createElement("a",{id:"user-content-注意-此脚本仅用于学习测试浏览器加载网页的过程模拟此脚本不适合于单页面应用在静态页面的测试效果更好",class:"anchor","aria-hidden":"true",href:"#注意-此脚本仅用于学习测试浏览器加载网页的过程模拟此脚本不适合于单页面应用在静态页面的测试效果更好"},E.createElement("svg",{class:"octicon octicon-link",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},E.createElement("path",{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"注意! 此脚本仅用于学习测试浏览器加载网页的过程模拟,此脚本不适合于单页面应用!在静态页面的测试效果更好"),E.createElement("h2",null,E.createElement("a",{id:"user-content-介绍大概和注意",class:"anchor","aria-hidden":"true",href:"https://github.com/masx200/masx200.github.io/tree/master/src#%E4%BB%8B%E7%BB%8D%E5%A4%A7%E6%A6%82%E5%92%8C%E6%B3%A8%E6%84%8F"},E.createElement("svg",{class:"octicon octicon-link",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},E.createElement("path",{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"介绍大概和注意"),E.createElement("p",null,"点击链接不跳转修改当前的网页地址动态加载网页内容不刷新"),E.createElement("p",null,"这个脚本能够通过异步 fetch 加载 html 页面,动态替换当前的页面内容"),E.createElement("p",null,"注意 不能跨域 ,history.pushState 函数是改变地址栏的 url,有同源限制"),E.createElement("p",null,"注意:对于使用了 document.write 的网站, 加载会出错,因为脚本都是异步加载的,网页内容会被覆盖,所以 修改了 document.write 方法"),E.createElement("h2",null,E.createElement("a",{id:"user-content-预先的准备工作",class:"anchor","aria-hidden":"true",href:"https://github.com/masx200/masx200.github.io/tree/master/src#%E9%A2%84%E5%85%88%E7%9A%84%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C"},E.createElement("svg",{class:"octicon octicon-link",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},E.createElement("path",{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"预先的准备工作"),E.createElement("p",{dangerouslySetInnerHTML:{__html:'0.添加css样式"body, html { scroll-behavior:\n                smooth;}"就可以实现平滑滚动'}}),E.createElement("p",null,"1.把当前页面的网址的 href 写入到 docment 的 html 的 dataset 当中"),E.createElement("p",null,"2.修改 document.write 方法为 把 document.write 中的文本内容生成 dom 元素放入 body 之中"),E.createElement("p",null,'3.替换所有同源的 a 链接的 href 为"javascript:;" ,把原本 href 存到元素的 dataset 中,设置 a 链接的 click 事件监听器,点击时触发 ,修改当前网页地址栏网址,触发 popstate 事件'),E.createElement("p",null,"4.设置 popstate 事件监听器,收到此事件时,开始动态加载网页执行顺序,当点击浏览器的前进和后退按钮时,自动触发 popstate 事件"),E.createElement("h2",null,E.createElement("a",{id:"user-content-动态加载网页执行顺序",class:"anchor","aria-hidden":"true",href:"https://github.com/masx200/masx200.github.io/tree/master/src#%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD%E7%BD%91%E9%A1%B5%E6%89%A7%E8%A1%8C%E9%A1%BA%E5%BA%8F"},E.createElement("svg",{class:"octicon octicon-link",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},E.createElement("path",{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"动态加载网页执行顺序"),E.createElement("p",null,"1.开始发起 fetch 异步请求 url 的 html 内容"),E.createElement("p",null,"2.获取返回头部的编码信息和文件类型信息,如果这里没有编码信息,则在转成文字之后查找 meta 中 charset 和 meta 的 Content-Type 中的 charset"),E.createElement("p",null,"3.把返回的 arraybuffer 解码成文字,然后转成 html 的 document 对象,如果加载失败则新窗口打开请求的页面"),E.createElement("p",null,"4.复制接收的 html 的 body 的内容到当前网页的 body 当中"),E.createElement("p",null,"5.添加其他标签到 head 中,不包括 link 的 stylesheet 和 script"),E.createElement("p",null,"6.1.线程 1-添加有 href 的 link 的 stylesheet 到 head 中,从外部加载的全部改成异步加载,当他们加载完成时,触发 window 的 allstylesheetload 事件,然后删除旧的 stylesheet 和 script 元素 和其他元素"),E.createElement("p",null,'6.2.线程 2-添加有 src 的 script 的 javascript 到 head 中,从外部加载的全部改成异步加载,当他们加载完成时,触发 window 的 allscriptloadformsrc 事件,加载用文本内容加载的 javascript 到 head 执行,触发"alltextscriptload"事件,然后再触发 window 的 load 事件')))))}}]),n}();exports.default=h;
},{}]},{},["duBE"], null)