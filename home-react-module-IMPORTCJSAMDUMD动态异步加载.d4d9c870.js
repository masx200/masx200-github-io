parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"S8qM":[function(require,module,exports) {
"use strict";function s(a){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"==typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s})(a)}function a(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}function n(s,a){for(var n=0;n<a.length;n++){var p=a[n];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(s,p.key,p)}}function p(s,a,p){return a&&n(s.prototype,a),p&&n(s,p),s}function e(a,n){return!n||"object"!==s(n)&&"function"!=typeof n?l(a):n}function l(s){if(void 0===s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function c(s){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)})(s)}function t(s,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(a&&a.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),a&&r(s,a)}function r(s,a){return(r=Object.setPrototypeOf||function(s,a){return s.__proto__=a,s})(s,a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react"),i=function(s){function n(){return a(this,n),e(this,c(n).apply(this,arguments))}return t(n,o.Component),p(n,[{key:"componentDidMount",value:function(){document.title="masx200的github主页-    IMPORTCJSAMDUMD | 动态异步加载 commonjs 和 umd 和 amd 模块 ,包装 cjs 和\n        amd 和 umd 模块为异步加载 promise 方法,使用 fetch\n        方法来获取指定的模块包源代码 ， 可以把模块放入模块仓库中，\n        并且解决了包之间的依赖关系，如果依赖包当中的 require\n        函数需要，则在模块仓库中引入需要的模块包 定义了模块包的 define\n        方法，require 方法，module.exports 对象和 exports 对象 "}},{key:"render",value:function(){return o.createElement("div",{style:{"min-width":" 100%"}},o.createElement("div",null,o.createElement("h1",null,o.createElement("a",{href:"../index.html"},"masx200.github.io"))),o.createElement("div",{class:"container-lg px-3 my-5 markdown-body"},o.createElement("h1",{id:"importcjsamdumd"},"IMPORTCJSAMDUMD"),o.createElement("p",null,o.createElement("a",{href:"https://github.com/masx200/IMPORTCJSAMDUMD/blob/master/src/IMPORTCJSAMDUMD.js"},"源代码")),o.createElement("p",null,o.createElement("a",{href:"https://github.com/masx200/IMPORTCJSAMDUMD/blob/master/dist/IMPORTCJSAMDUMD.js"},"发布版本")),o.createElement("p",null,'动态异步加载" commonjs "和 "umd "和 "amd" 模块 ,包装" cjs "和 "amd "和 "umd" 模块为异步加载" promise" 方法,使用" fetch "方法来获取指定的模块包源代码 ， 可以把模块放入模块仓库中，'),o.createElement("p",null,'并且解决了包之间的依赖关系，如果依赖包当中的 "require" 函数需要，则在模块仓库中引入需要的模块包'),o.createElement("p",null,'定义了模块包的" define "方法，"require "方法，"module.exports "对象和 "exports "对象'),o.createElement("p",null,'"IMPORTCJSAMDUMD" 的函数功能类似于',o.createElement("a",{href:"https://github.com/systemjs/systemjs"},'"systemjs"'),'的 "system.import" 函数，'),o.createElement("p",null,'"IMPORTCJSAMDUMD "的定义的"define"函数基于',o.createElement("a",{href:"https://github.com/requirejs/requirejs"},'"requirejs"'),'的 "define"函数'),o.createElement("p",null,"把未命名的模块以 (url)命名存入模块仓库中"),o.createElement("h1",null,o.createElement("a",{id:"user-content-相比systemjs和requirejs的优势",class:"anchor","aria-hidden":"true",href:"#相比systemjs和requirejs的优势"},o.createElement("svg",{class:"octicon octicon-link",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},o.createElement("path",{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"相比systemjs和requirejs的优势:"),o.createElement("p",null,"1.跟systemjs的import函数的全局运行模块的代码,会修改全局变量,相比,"),o.createElement("p",null,"IMPORTCJSAMDUMD中所有模块的代码全部放在函数闭包中执行,"),o.createElement("p",null,"2.systemjs不支持在模块代码中的require函数来加载依赖包,也不支持识别amd模块中的define函数的定义模块的名称的功能,导致这些有依赖关系的模块都会到全局变量中寻找需要的模块,否则加载失败,"),o.createElement("p",null,"IMPORTCJSAMDUMD支持在模块内部使用require函数和define函数定义依赖关系,并在模块仓库中查找需要的模块"),o.createElement("p",null,"比如说jquery和jquery-ui都是amd模块定义方式,jquery-ui依赖于jquery"),o.createElement("p",null,"比如说bootstrap是umd模块定义方式,bootstrap依赖于jquery和popper.js"),o.createElement("p",null,"3.requriejs不支持cjs和umd模块的定义方式,使用比较麻烦,"),o.createElement("h1",null,o.createElement("a",{id:"user-content-更新乱序加载有依赖关系的模块包",class:"anchor","aria-hidden":"true",href:"#更新乱序加载有依赖关系的模块包"},o.createElement("svg",{class:"octicon octicon-link",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},o.createElement("path",{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"更新:乱序加载有依赖关系的模块包"),o.createElement("p",null,"1.可以在一句 IMPORTCJSAMDUMD 语句中,传入多个模块的 url 的 name 了,返回一个数组,相当于 promise.all 的语法糖,"),o.createElement("p",null,"2.可以尝试乱序加载有依赖关系的模块包了,加载之前,先把模块的 url 和 name 信息存入模块配置列表,如果依赖的包还没有加载完成,则多次尝试加载,最终可以加载完成"),o.createElement("p",null,"甚至是这么变态的依赖关系,这么乱序加载,都可以!"),o.createElement("div",{class:"highlight highlight-source-js"},o.createElement("pre",null,o.createElement("code",{dangerouslySetInnerHTML:{__html:' <span class="pl-en">IMPORTCJSAMDUMD</span>(\n                  [\n                    <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.min.js<span class="pl-pds">"</span></span>,\n                    <span class="pl-s"><span class="pl-pds">"</span>bootstrap<span class="pl-pds">"</span></span>\n                  ],\n                  [<span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>jquery<span class="pl-pds">"</span></span>],\n                  [<span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/mui/3.7.1/js/mui.min.js<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>mui<span class="pl-pds">"</span></span>],\n                  [\n                    <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/clipboard.js/2.0.4/clipboard.min.js<span class="pl-pds">"</span></span>,\n                    <span class="pl-s"><span class="pl-pds">"</span>clipboard<span class="pl-pds">"</span></span>\n                  ],\n                  [\n                    <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js<span class="pl-pds">"</span></span>,\n                    <span class="pl-s"><span class="pl-pds">"</span>popper.js<span class="pl-pds">"</span></span>\n                  ],\n                  [\n                    <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js<span class="pl-pds">"</span></span>,\n                    <span class="pl-s"><span class="pl-pds">"</span>react-dom<span class="pl-pds">"</span></span>\n                  ],\n                  [\n                    <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/react-router-dom/5.0.0/react-router-dom.min.js<span class="pl-pds">"</span></span>,\n                    <span class="pl-s"><span class="pl-pds">"</span>react-router-dom<span class="pl-pds">"</span></span>\n                  ],\n                  [\n                    <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js<span class="pl-pds">"</span></span>,\n                    <span class="pl-s"><span class="pl-pds">"</span>react<span class="pl-pds">"</span></span>\n                  ]\n                )\n                  .<span class="pl-c1">then</span>(<span class="pl-en">console</span>.<span class="pl-smi">log</span>)\n                  .<span class="pl-c1">catch</span>(<span class="pl-en">console</span>.<span class="pl-smi">warn</span>);'}}))),o.createElement("h2",null,o.createElement("a",{id:"user-content-加载有依赖关系的模块包的方法",class:"anchor","aria-hidden":"true",href:"#加载有依赖关系的模块包的方法"},o.createElement("svg",{class:"octicon octicon-link",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},o.createElement("path",{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"加载有依赖关系的模块包的方法"),o.createElement("div",{class:"highlight highlight-source-js"},o.createElement("pre",null,o.createElement("code",{dangerouslySetInnerHTML:{__html:'\n                 <span class="pl-k">import</span> <span class="pl-smi">IMPORTCJSAMDUMD</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">"</span>../IMPORTCJSAMDUMD<span class="pl-pds">"</span></span>;\n                 (<span class="pl-k">async</span> () <span class="pl-k">=&gt;</span> {\n                           <span class="pl-k">const</span> <span class="pl-c1">react</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-en">IMPORTCJSAMDUMD</span>(\n                             <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js<span class="pl-pds">"</span></span>,\n                             <span class="pl-s"><span class="pl-pds">"</span>react<span class="pl-pds">"</span></span>\n                           );\n                           <span class="pl-k">const</span> [<span class="pl-c1">reactdom</span>, <span class="pl-c1">reactrouterdom</span>] <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">all</span>([\n                             <span class="pl-en">IMPORTCJSAMDUMD</span>(\n                               <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js<span class="pl-pds">"</span></span>,\n                               <span class="pl-s"><span class="pl-pds">"</span>react-dom<span class="pl-pds">"</span></span>\n                             ),\n                             <span class="pl-en">IMPORTCJSAMDUMD</span>(\n                               <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/react-router-dom/5.0.0/react-router-dom.min.js<span class="pl-pds">"</span></span>,\n                               <span class="pl-s"><span class="pl-pds">"</span>react-router-dom<span class="pl-pds">"</span></span>\n                             )\n                           ]);\n                           \n                           <span class="pl-k">var</span> reactmodulearray <span class="pl-k">=</span> [react, reactdom, reactrouterdom];\n                           <span class="pl-en">myonloadfunc</span>(reactmodulearray);\n                           })();\n                 <span class="pl-k">function</span> <span class="pl-en">myonloadfunc</span>(<span class="pl-smi">reactmodulearray</span>) {\n                     \n                       <span class="pl-en">console</span>.<span class="pl-c1">log</span>(reactmodulearray);\n                       <span class="pl-k">const</span> <span class="pl-c1">React</span> <span class="pl-k">=</span> reactmodulearray[<span class="pl-c1">0</span>].<span class="pl-smi">default</span>;\n                       <span class="pl-k">const</span> <span class="pl-c1">ReactDOM</span> <span class="pl-k">=</span> reactmodulearray[<span class="pl-c1">1</span>].<span class="pl-smi">default</span>;\n                       <span class="pl-k">const</span> <span class="pl-c1">ReactRouterDOM</span> <span class="pl-k">=</span> reactmodulearray[<span class="pl-c1">2</span>].<span class="pl-smi">default</span>;\n                       <span class="pl-c"><span class="pl-c">//</span>............................</span>\n                       \n                       }\n                \n                '}}))),o.createElement("div",{class:"highlight highlight-source-js"},o.createElement("pre",null,o.createElement("code",{dangerouslySetInnerHTML:{__html:'\n                    \n                    \n                    (<span class="pl-k">async</span> () <span class="pl-k">=&gt;</span> {\n                        <span class="pl-k">const</span> [<span class="pl-c1">jquery</span>, <span class="pl-c1">popper</span>] <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">all</span>([\n                          <span class="pl-en">IMPORTCJSAMDUMD</span>(<span class="pl-s"><span class="pl-pds">"</span>https://cdn.bootcss.com/jquery/3.4.1/jquery.js<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>jquery<span class="pl-pds">"</span></span>),\n                          <span class="pl-en">IMPORTCJSAMDUMD</span>(\n                            <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js<span class="pl-pds">"</span></span>,\n                            <span class="pl-s"><span class="pl-pds">"</span>popper.js<span class="pl-pds">"</span></span>\n                          )\n                        ]);\n                        <span class="pl-k">const</span> <span class="pl-c1">bootstrap</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-en">IMPORTCJSAMDUMD</span>(\n                          <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.js<span class="pl-pds">"</span></span>,\n                          <span class="pl-s"><span class="pl-pds">"</span>bootstrap<span class="pl-pds">"</span></span>\n                        );\n                        <span class="pl-en">console</span>.<span class="pl-c1">log</span>(jquery, popper, bootstrap);\n                      })();\n                    \n                    '}}))),o.createElement("h3",null,o.createElement("a",{id:"user-content-如果要动态异步加载-es6-模块加载-es6-模块的方法",class:"anchor","aria-hidden":"true",href:"#如果要动态异步加载-es6-模块加载-es6-模块的方法"},o.createElement("svg",{class:"octicon octicon-link",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},o.createElement("path",{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"如果要动态异步加载 es6 模块,加载 es6 模块的方法:"),o.createElement("div",{class:"highlight highlight-source-js"},o.createElement("pre",null,o.createElement("code",null,o.createElement("span",{class:"pl-k"},"import"),"(url).",o.createElement("span",{class:"pl-c1"},"then"),"(",o.createElement("span",{class:"pl-en"},"console"),".",o.createElement("span",{class:"pl-smi"},"log"),");"))),o.createElement("p",null,"如果要兼容旧的浏览器，可以使用",o.createElement("a",{href:"https://github.com/guybedford/es-module-shims"},'"es-module-shims"'),'的"importShim"函数替换"import"函数'),o.createElement("div",{class:"highlight highlight-source-js"},o.createElement("pre",null,o.createElement("span",{class:"pl-en"},"importShim"),"(",o.createElement("span",{class:"pl-s"},o.createElement("span",{class:"pl-pds"},'"'),"/path/to/module.js",o.createElement("span",{class:"pl-pds"},'"')),").",o.createElement("span",{class:"pl-c1"},"then"),"(",o.createElement("span",{class:"pl-smi"},"x")," ",o.createElement("span",{class:"pl-k"},"=>")," ",o.createElement("span",{class:"pl-en"},"console"),".",o.createElement("span",{class:"pl-c1"},"log"),"(x));")),o.createElement("h2",null,o.createElement("a",{id:"user-content-importcjsamdumd-1",class:"anchor","aria-hidden":"true",href:"#importcjsamdumd-1"},o.createElement("svg",{class:"octicon octicon-link",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},o.createElement("path",{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"IMPORTCJSAMDUMD"),o.createElement("p",null,"Dynamically asynchronously load commonjs and umd and amd modules, wrap cjs and amd and umd modules to load the promise method asynchronously, use the fetch method to get the specified module package source code, and put the module into the module repository."),o.createElement("p",null,'And solve the dependencies between the packages, if the "require" function in the dependent package needs, then introduce the required module package in the module repository'),o.createElement("p",null,'Defines the "define" method of the module package, the "require" method, the "module.exports" object, and the "exports" object'),o.createElement("p",null,'The function of IMPORTCJSAMDUMD is similar to the "system.import" function of "systemjs".'),o.createElement("p",null,'The "define" function defined by IMPORTCJSAMDUMD is based on the "define" function of requirejs.'),o.createElement("h2",null,o.createElement("a",{id:"user-content-动态异步加载-cjsamdumd-模块用法",class:"anchor","aria-hidden":"true",href:"#动态异步加载-cjsamdumd-模块用法"},o.createElement("svg",{class:"octicon octicon-link",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},o.createElement("path",{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"动态异步加载 cjs,amd,umd 模块用法:"),o.createElement("p",null,"主函数,IMPORTCJSAMDUMD,返回一个 promise 对象,参数 url 和 name 都是字符串，把通过 url 加载的依赖包放入模块仓库中，命名为 name，promise 之后的.then 函数的回调函数的参数是 module，module.default 的模块的默认输出"),o.createElement("div",{class:"highlight highlight-source-js"},o.createElement("pre",null,o.createElement("span",{class:"pl-en"},"IMPORTCJSAMDUMD"),"(url, name);",o.createElement("span",{class:"pl-en"},"IMPORTCJSAMDUMD"),"(url).",o.createElement("span",{class:"pl-c1"},"then"),"(",o.createElement("span",{class:"pl-smi"},"m")," ",o.createElement("span",{class:"pl-k"},"=>")," ",o.createElement("span",{class:"pl-en"},"console"),".",o.createElement("span",{class:"pl-c1"},"log"),"(",o.createElement("span",{class:"pl-smi"},"m"),".",o.createElement("span",{class:"pl-smi"},"default"),"));")),o.createElement("p",null,"次对象,IMPORTCJSAMDUMD.GLOBALPACKAGESTORE,是所有加载过的模块的存储仓库对象"),o.createElement("div",{class:"highlight highlight-source-js"},o.createElement("pre",null,o.createElement("span",{class:"pl-c1"},"IMPORTCJSAMDUMD"),".",o.createElement("span",{class:"pl-c1"},"GLOBALPACKAGESTORE"),"[name];")),o.createElement("p",null,"次函数,IMPORTCJSAMDUMD.REQUIREPACKAGE,返回模块仓库中的模块,参数 name 是字符串"),o.createElement("div",{class:"highlight highlight-source-js"},o.createElement("pre",null,o.createElement("span",{class:"pl-c1"},"IMPORTCJSAMDUMD"),".",o.createElement("span",{class:"pl-en"},"REQUIREPACKAGE"),"(name);")),o.createElement("p",null,"IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[name].default 和 IMPORTCJSAMDUMD.REQUIREPACKAGE(name)是相等的"),o.createElement("h2",null,o.createElement("a",{id:"user-content-示例",class:"anchor","aria-hidden":"true",href:"#示例"},o.createElement("svg",{class:"octicon octicon-link",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},o.createElement("path",{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"示例"),o.createElement("div",{class:"highlight highlight-source-js"},o.createElement("pre",null,o.createElement("code",{dangerouslySetInnerHTML:{__html:'\n                    \n                       \n                    \n                    <span class="pl-en">IMPORTCJSAMDUMD</span>(<span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/jquery/3.4.1/jquery.js<span class="pl-pds">"</span></span>).<span class="pl-c1">then</span>(<span class="pl-smi">m</span> <span class="pl-k">=&gt;</span> {\n                  <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-smi">m</span>.<span class="pl-smi">default</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">jquery</span>);\n                });\n                \n                <span class="pl-k">var</span> jquery <span class="pl-k">=</span> <span class="pl-c1">IMPORTCJSAMDUMD</span>.<span class="pl-c1">GLOBALPACKAGESTORE</span>.<span class="pl-smi">jquery</span>.<span class="pl-smi">default</span>;\n                \n                <span class="pl-c1">Promise</span>.<span class="pl-c1">all</span>([\n                  <span class="pl-en">IMPORTCJSAMDUMD</span>(<span class="pl-s"><span class="pl-pds">"</span>https://cdn.bootcss.com/jquery/3.4.1/jquery.js<span class="pl-pds">"</span></span>),\n                  <span class="pl-en">IMPORTCJSAMDUMD</span>(\n                    <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js<span class="pl-pds">"</span></span>\n                  ),\n                  <span class="pl-en">IMPORTCJSAMDUMD</span>(<span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/vue/2.6.10/vue.min.js<span class="pl-pds">"</span></span>)\n                ]).<span class="pl-c1">then</span>(<span class="pl-en">console</span>.<span class="pl-smi">log</span>);\n                \n                <span class="pl-en">IMPORTCJSAMDUMD</span>(\n                  <span class="pl-s"><span class="pl-pds">"</span>https://cdn.bootcss.com/Chart.js/2.8.0-rc.1/Chart.bundle.js<span class="pl-pds">"</span></span>\n                ).<span class="pl-c1">then</span>(<span class="pl-en">console</span>.<span class="pl-smi">log</span>);\n                \n                <span class="pl-en">IMPORTCJSAMDUMD</span>(\n                  <span class="pl-s"><span class="pl-pds">"</span>https://cdn.bootcss.com/underscore.js/1.9.1/underscore-min.js<span class="pl-pds">"</span></span>,\n                  <span class="pl-s"><span class="pl-pds">"</span>underscore<span class="pl-pds">"</span></span>\n                )\n                  .<span class="pl-c1">then</span>(<span class="pl-en">console</span>.<span class="pl-smi">log</span>)\n                  .<span class="pl-c1">catch</span>(<span class="pl-en">console</span>.<span class="pl-smi">error</span>);\n                \n                <span class="pl-en">IMPORTCJSAMDUMD</span>(<span class="pl-s"><span class="pl-pds">"</span>https://cdn.bootcss.com/jquery/3.4.1/jquery.js<span class="pl-pds">"</span></span>)\n                  .<span class="pl-c1">then</span>(<span class="pl-en">console</span>.<span class="pl-smi">log</span>)\n                  .<span class="pl-c1">catch</span>(<span class="pl-en">console</span>.<span class="pl-smi">error</span>);\n                \n                <span class="pl-k">var</span> jquery <span class="pl-k">=</span> <span class="pl-c1">IMPORTCJSAMDUMD</span>.<span class="pl-en">REQUIREPACKAGE</span>(<span class="pl-s"><span class="pl-pds">"</span>jquery<span class="pl-pds">"</span></span>);\n                \n                <span class="pl-k">var</span> underscore <span class="pl-k">=</span> <span class="pl-c1">IMPORTCJSAMDUMD</span>.<span class="pl-en">REQUIREPACKAGE</span>(<span class="pl-s"><span class="pl-pds">"</span>underscore<span class="pl-pds">"</span></span>);\n                \n                <span class="pl-c1">Promise</span>.<span class="pl-c1">all</span>([\n                  <span class="pl-en">IMPORTCJSAMDUMD</span>(<span class="pl-s"><span class="pl-pds">"</span>https://cdn.bootcss.com/jquery/3.4.1/jquery.js<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>jquery<span class="pl-pds">"</span></span>),\n                  <span class="pl-en">IMPORTCJSAMDUMD</span>(\n                    <span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js<span class="pl-pds">"</span></span>,\n                    <span class="pl-s"><span class="pl-pds">"</span>react<span class="pl-pds">"</span></span>\n                  ),\n                  <span class="pl-en">IMPORTCJSAMDUMD</span>(<span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/vue/2.6.10/vue.min.js<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>vue<span class="pl-pds">"</span></span>)\n                ]).<span class="pl-c1">then</span>(<span class="pl-en">console</span>.<span class="pl-smi">log</span>);\n                \n                <span class="pl-c"><span class="pl-c">//</span>检测到amd模块 (3)&nbsp;["jquery", Array(0), ƒ]0: "jquery"1: []2: ƒ ()length: 3__proto__: Array(0)</span>\n                <span class="pl-c"><span class="pl-c">//</span> 检测到cjs模块 URL&nbsp;{href: "https://cdn.bootcss.com/jquery/3.4.1/jquery.js", origin: "https://cdn.bootcss.com", protocol: "https:", username: "", password: "",&nbsp;…}hash: ""host: "cdn.bootcss.com"hostname: "cdn.bootcss.com"href: "https://cdn.bootcss.com/jquery/3.4.1/jquery.js"origin: "https://cdn.bootcss.com"password: ""pathname: "/jquery/3.4.1/jquery.js"port: ""protocol: "https:"search: ""searchParams: URLSearchParams&nbsp;{}username: ""__proto__: URL</span>\n                <span class="pl-c"><span class="pl-c">//</span> GLOBALPACKAGESTORE [jquery: ƒ]jquery: ƒ ( selector, context )react: {Children: {…}, createRef: ƒ, Component: ƒ, PureComponent: ƒ, createContext: ƒ,&nbsp;…}vue: ƒ wn(e)length: 0__proto__: Array(0)</span>\n                <span class="pl-c"><span class="pl-c">//</span> 检测到cjs模块 URL&nbsp;{href: "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js", origin: "https://cdn.staticfile.org", protocol: "https:", username: "", password: "",&nbsp;…}</span>\n                <span class="pl-c"><span class="pl-c">//</span> GLOBALPACKAGESTORE [jquery: ƒ, react: {…}]</span>\n                <span class="pl-c"><span class="pl-c">//</span> 检测到cjs模块 URL&nbsp;{href: "https://cdn.staticfile.org/vue/2.6.10/vue.min.js", origin: "https://cdn.staticfile.org", protocol: "https:", username: "", password: "",&nbsp;…}</span>\n                <span class="pl-c"><span class="pl-c">//</span> GLOBALPACKAGESTORE [jquery: ƒ, react: {…}, vue: ƒ]jquery: ƒ ( selector, context )react: {Children: {…}, createRef: ƒ, Component: ƒ, PureComponent: ƒ, createContext: ƒ,&nbsp;…}vue: ƒ wn(e)length: 0__proto__: Array(0)</span>\n                <span class="pl-c"><span class="pl-c">//</span>(3)&nbsp;[{…}, {…}, {…}]0: {name: "jquery", default: ƒ, url: URL}1: {name: "react", default: {…}, url: URL}2: {name: "vue", default: ƒ, url: URL}length: 3__proto__: Array(0)</span>\n                \n                <span class="pl-c"><span class="pl-c">//</span>加载es6模块的方法</span>\n                \n                <span class="pl-k">import</span>(<span class="pl-s"><span class="pl-pds">"</span>https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.min.js<span class="pl-pds">"</span></span>).<span class="pl-c1">then</span>(\n                  <span class="pl-en">console</span>.<span class="pl-smi">log</span>\n                );\n                    \n                    '}})))),o.createElement("div",{class:"footer border-top border-gray-light mt-5 pt-3 text-right text-gray"},"This site is open source.",o.createElement("a",{href:"https://github.com/masx200/IMPORTCJSAMDUMD/edit/master/README.md"},"Improve this page"),"."))}}]),n}();exports.default=i;
},{}]},{},["S8qM"], null)