parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QxAL":[function(require,module,exports) {
function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function a(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}function c(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?l(t):n}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}haverun=0,setTimeout(function(){window.onload()},1e3),window.onload=function(){0==haverun?(haverun=1,console.log("开始运行此onload函数"),myonloadfunc()):console.log("不要重复运行此onload函数")},myonloadfunc=function(){window.myrsscontent=[];var n=ReactDOM.render,l=ReactRouterDOM,r=l.Link,M=l.Switch,L=l.BrowserRouter,j=l.Route,s=l.Redirect,m=function(e){function n(){return t(this,n),c(this,u(n).apply(this,arguments))}return o(n,React.Component),a(n,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){window.location.hash="#/",E(),document.title="React router App-home"}},{key:"componentWillReceiveProps",value:function(e){}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"componentWillUpdate",value:function(e,t){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return React.createElement("div",{className:"App"},React.createElement("header",{className:"App-header"},React.createElement("div",{class:"container"},React.createElement("div",{class:"jumbotron"},React.createElement("h1",null,"欢迎登陆页面！"),React.createElement("p",null,React.createElement("a",{target:"_blank",href:"https://weibo.com/2174458781?/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1"},"一生忽而得一夏当司掌好年华的微博_微博")),React.createElement("p",null,React.createElement("a",{target:"_blank",href:"https://github.com/masx200"},"masx200的github主页")))),React.createElement("p",null,React.createElement("a",{target:"_blank",href:"https://zh-hans.reactjs.org/tutorial/tutorial.html"},"入门教程: 认识 React – React")),React.createElement("p",null,React.createElement("a",{target:"_blank",href:"https://zh-hans.reactjs.org/docs/getting-started.html"},"开始 – React文档")),React.createElement("h1",null,"react-router测试"),React.createElement("h1",null,"Hello, world!"),React.createElement("h2",null,"欢迎来到主页"),React.createElement("p",null,"Edit ",React.createElement("code",null,"src/App.js")," and save to reload."),React.createElement("p",{className:"App-intro"},"你可以在 ",React.createElement("code",null,"src/App.js")," 文件中修改。"),React.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"),React.createElement("h1",null,"Hello, world!"),React.createElement("h2",null,"现在是 ",(new Date).toLocaleTimeString(),".")))}}]),n}(),y=function(e){function n(){return t(this,n),c(this,u(n).apply(this,arguments))}return o(n,React.Component),a(n,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){E(),document.title="React router App-about"}},{key:"componentWillReceiveProps",value:function(e){}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"componentWillUpdate",value:function(e,t){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return React.createElement("div",{className:"App"},React.createElement("header",{className:"App-header"},React.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NDEuOSA1OTUuMyI+CiAgICA8ZyBmaWxsPSIjNjFEQUZCIj4KICAgICAgICA8cGF0aCBkPSJNNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2LjlWNzhjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZWNzguNWMtOC40IDAtMTYgMS44LTIyLjYgNS42LTI4LjEgMTYuMi0zNC40IDY2LjctMTkuOSAxMzAuMS02Mi4yIDE5LjItMTAyLjcgNDkuOS0xMDIuNyA4Mi4zIDAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek00MjEuMiA0MzBjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek00MjAuNyAxNjNjOS4zIDkuNiAxOC42IDIwLjMgMjcuOCAzMi05LS40LTE4LjItLjctMjcuNS0uNy05LjQgMC0xOC43LjItMjcuOC43IDktMTEuNyAxOC4zLTIyLjQgMjcuNS0zMnptLTc0IDU4LjljLTQuOSA3LjctOS44IDE1LjYtMTQuNCAyMy43LTQuNiA4LTguOSAxNi0xMyAyNC01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOCAxMy4xLTMuMSAyNi45LTUuOCA0MS4yLTcuOXptLTkwLjUgMTI1LjJjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42IDAtMTUuNyAyMi45LTM1LjYgNTguMy01MC42IDguNi0zLjcgMTgtNyAyNy43LTEwLjEgNS43IDE5LjYgMTMuMiA0MCAyMi41IDYwLjktOS4yIDIwLjgtMTYuNiA0MS4xLTIyLjIgNjAuNi05LjktMy4xLTE5LjMtNi41LTI4LTEwLjJ6TTMxMCA0OTBjLTEzLjYtNy44LTE5LjUtMzcuNS0xNC45LTc1LjcgMS4xLTkuNCAyLjktMTkuMyA1LjEtMjkuNCAxOS42IDQuOCA0MSA4LjUgNjMuNSAxMC45IDEzLjUgMTguNSAyNy41IDM1LjMgNDEuNiA1MC0zMi42IDMwLjMtNjMuMiA0Ni45LTg0IDQ2LjktNC41LS4xLTguMy0xLTExLjMtMi43em0yMzcuMi03Ni4yYzQuNyAzOC4yLTEuMSA2Ny45LTE0LjYgNzUuOC0zIDEuOC02LjkgMi42LTExLjUgMi42LTIwLjcgMC01MS40LTE2LjUtODQtNDYuNiAxNC0xNC43IDI4LTMxLjQgNDEuMy00OS45IDIyLjYtMi40IDQ0LTYuMSA2My42LTExIDIuMyAxMC4xIDQuMSAxOS44IDUuMiAyOS4xem0zOC41LTY2LjdjLTguNiAzLjctMTggNy0yNy43IDEwLjEtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjkgOS4yLTIwLjggMTYuNi00MS4xIDIyLjItNjAuNiA5LjkgMy4xIDE5LjMgNi41IDI4LjEgMTAuMiAzNS40IDE1LjEgNTguMyAzNC45IDU4LjMgNTAuNi0uMSAxNS43LTIzIDM1LjYtNTguNCA1MC42ek0zMjAuOCA3OC40eiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQyMC45IiBjeT0iMjk2LjUiIHI9IjQ1LjciLz4KICAgICAgICA8cGF0aCBkPSJNNTIwLjUgNzguMXoiLz4KICAgIDwvZz4KPC9zdmc+Cg==",className:"App-logo",alt:"logo"}),React.createElement("p",null,React.createElement("a",{target:"_blank",href:"https://zh-hans.reactjs.org/tutorial/tutorial.html"},"入门教程: 认识 React – React")),React.createElement("p",null,React.createElement("a",{target:"_blank",href:"https://zh-hans.reactjs.org/docs/getting-started.html"},"开始 – React文档")),React.createElement("h1",null,"react-router测试"),React.createElement("h2",null,"现在是 ",(new Date).toLocaleTimeString(),"."),React.createElement("h3",null,"React 是一个用于构建用户界面的 JAVASCRIPT 库。",React.createElement("br",null),"React主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）。",React.createElement("br",null),"React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。",React.createElement("br",null),"React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。",React.createElement("br",null),"React 特点",React.createElement("br",null),"1.声明式设计 −React采用声明范式，可以轻松描述应用。",React.createElement("br",null),"2.高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。",React.createElement("br",null),"3.灵活 −React可以与已知的库或框架很好地配合。",React.createElement("br",null),"4.JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。",React.createElement("br",null),"5.组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。",React.createElement("br",null),"6.单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。"),React.createElement("div",null,React.createElement("p",null,"Edit ",React.createElement("code",null,"src/App.js")," and save to reload."),React.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"))))}}]),n}(),g=function(n){function l(){return t(this,l),c(this,u(l).apply(this,arguments))}return o(l,React.Component),a(l,[{key:"componentWillMount",value:function(){}},{key:"jiazairss1",value:function(){jiazaiload("#xml1")}},{key:"jiazairss2",value:function(){jiazaiload("#xml2")}},{key:"jiazairss3",value:function(){jiazaiload("#xml3")}},{key:"jiazairss4",value:function(){jiazaiload("#xml4")}},{key:"componentDidMount",value:function(){document.title="React router App-rssreader",E(),jiazaiload=function(t){var n=t;window.myrsscontent=[],console.log("开始加载外部内容",$(n).attr("src")),void 0===$(n).attr("src")?console.log("加载失败"):$.get($(n).attr("src"),function(t,n){for(console.log(n,e(t),t),xmlDoc=t,x=xmlDoc.getElementsByTagName("item"),i=0;i<x.length;i++){onetitle=x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue,onelink=x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue,description="";var a=!0,c=!1,l=void 0;try{for(var u,o=x[i].getElementsByTagName("description")[0].childNodes[Symbol.iterator]();!(a=(u=o.next()).done);a=!0)value=u.value,description+=value.nodeValue}catch(r){c=!0,l=r}finally{try{a||null==o.return||o.return()}finally{if(c)throw l}}window.myrsscontent.push({title:onetitle,link:onelink,description:description})}console.log(window.myrsscontent),E()})}}},{key:"componentWillReceiveProps",value:function(e){}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"componentWillUpdate",value:function(e,t){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return React.createElement("div",{className:"App"},React.createElement("nav",{class:"navbar navbar-expand-sm bg-dark navbar-dark fixed-top"},React.createElement("ul",{class:"demo"},React.createElement("button",{class:"mui-btn mui-btn-royal mui-btn-outlined",onClick:this.jiazairss1},"加载tmtpost的rss"),React.createElement("button",{class:"mui-btn mui-btn-primary mui-btn-outlined",onClick:this.jiazairss2},"加载iplaysoft的rss"),React.createElement("button",{class:"mui-btn mui-btn-warning mui-btn-outlined",onClick:this.jiazairss3},"加载landiannews的rss"),React.createElement("button",{class:"mui-btn mui-btn-danger mui-btn-outlined",onClick:this.jiazairss4},"加载ithome的rss"))),React.createElement("header",{className:"App-header"},React.createElement("div",null,React.createElement("ul",{class:"mui-table-view"},window.myrsscontent.map(function(e){return React.createElement("li",{class:"mui-table-view-cell mui-media"},React.createElement("div",{class:"mui-media-body"},e.title,React.createElement("a",{href:e.link,target:"_blank"},React.createElement("p",{class:"mui-ellipsis"},e.link)),React.createElement("p",{class:"mui-ellipsis"},e.description)))})))))}}]),l}(),N=function(e){function n(){return t(this,n),c(this,u(n).apply(this,arguments))}return o(n,React.Component),a(n,[{key:"render",value:function(){return React.createElement(L,{basename:window.location.pathname+"#/",forceRefresh:!1,keyLength:12},React.createElement("div",null,React.createElement("nav",{class:"navbar navbar-default",role:"navigation"},React.createElement("div",{class:"container-fluid"},React.createElement("div",{class:"navbar-header"},React.createElement("button",{type:"button",class:"navbar-toggle","data-toggle":"collapse","data-target":"#example-navbar-collapse"},React.createElement("span",{class:"sr-only"},"切换导航"),React.createElement("span",{class:"icon-bar"}),React.createElement("span",{class:"icon-bar"}),React.createElement("span",{class:"icon-bar"})),React.createElement("a",{class:"navbar-brand "},"masx200的github")),React.createElement("div",{class:"collapse navbar-collapse",id:"example-navbar-collapse"},React.createElement("ul",{class:"nav navbar-nav"},React.createElement("li",{id:"mynav1",class:"#/"==window.location.hash?"active":""},React.createElement(r,{to:"/"},"基于REACT的主页")),React.createElement("li",{class:"#/rssreader"==window.location.hash?"active":""},React.createElement(r,{to:"/rssreader"},"rss阅读")),React.createElement("li",{id:"mynav2",class:"#/about"==window.location.hash?"active":""},React.createElement(r,{to:"/about"},"关于")),React.createElement("li",null,React.createElement("a",{href:"../index.html"},"传统网页")),React.createElement("li",null,React.createElement("a",{href:"../my-vue-router-project/index.html"},"基于vue的主页")))))),React.createElement("div",{class:"container"},React.createElement(M,null,React.createElement(j,{exact:!0,path:"/",component:m}),React.createElement(j,{path:"/rssreader",component:g}),React.createElement(j,{path:"/about",component:y}),React.createElement(s,{from:"*",to:"/"}))," ")))}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"componentWillUpdate",value:function(e,t){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}}]),n}();function E(){n(React.createElement(N,null),document.getElementById("root"))}n(React.createElement(N,null),document.getElementById("root")),window.refreshall=E},window.onload();
},{}]},{},["QxAL"], null)
//# sourceMappingURL=/my-react-router-test.15bdccca.js.map