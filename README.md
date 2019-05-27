# masx200.github.io

masx200 的 github

https://masx200.github.io/

# 查看源代码

https://github.com/masx200/masx200.github.io/tree/master/src

# 点击链接不跳转-修改当前的网页地址-动态加载网页内容不刷新 脚本

https://github.com/masx200/masx200.github.io/blob/master/src/%E7%82%B9%E5%87%BB%E9%93%BE%E6%8E%A5%E4%B8%8D%E8%B7%B3%E8%BD%AC-%E4%BF%AE%E6%94%B9%E5%BD%93%E5%89%8D%E7%9A%84%E7%BD%91%E9%A1%B5%E5%9C%B0%E5%9D%80-%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD%E7%BD%91%E9%A1%B5%E5%86%85%E5%AE%B9%E4%B8%8D%E5%88%B7%E6%96%B0.js

## 介绍大概和注意
点击链接不跳转修改当前的网页地址动态加载网页内容不刷新

这个脚本能够通过异步 fetch 加载 html 页面,动态替换当前的页面内容

注意 不能跨域 ,history.pushState 函数是改变地址栏的 url,有同源限制

注意:对于使用了 document.write 的网站, 加载会出错,因为脚本都是异步加载的,网页内容会被覆盖,所以 修改了 document.write 方法

# 圆周率计算多线程,使用 BigInteger.js 和浏览器原生的 BigInt 之后速度得到巨大提升!

优化了圆周率计算的多线程方式,开启一次 webworker 后,不再关闭它,每一个线程一个 webworker,也不重复创建过多 webweorker,并给按钮添加 mui 的 loading 效果,全局加上 mui 的支持

优化了圆周率的界面显示效果,使用 bootstrap4 的折叠按钮效果,可以收起或展开某些特别占空间的组件

需要浏览器 chrome68 以上,才原生支持 BigInt

<div>
<h3>BigInteger.js</h3>
        <p>
          BigInteger.js是Javascript的任意长度整数库，允许对无限大小的整数进行算术运算，尽管存在内存和时间限制。<br />
          更新（2018年12月2日）：BigInt被添加为JavaScript的本机功能。<br />
          此库现在可用作polyfill：如果环境支持本机BigInt，则此库充当本机实现的瘦包装器。<br />
          建议升级浏览器到chrome68以上,才可支持原生BigInt.<br />
          <b>如果浏览器原生支持BigInt,则运行速度有巨大提升!</b>
        </p>

<a href="https://masx200.github.io/%E5%9C%86%E5%91%A8%E7%8E%87%E8%AE%A1%E7%AE%97-%E5%8F%AF%E8%AE%BE%E7%BD%AE%E5%9C%86%E5%91%A8%E7%8E%87%E4%BD%8D%E6%95%B0-%E5%8F%AF%E9%80%89%E6%8B%A9%E7%BA%BF%E7%A8%8B%E4%B8%AA%E6%95%B0-%E5%A4%9A%E7%BA%BF%E7%A8%8B%E5%A4%A7%E6%95%B0%E6%A1%86%E6%9E%B6webworker%E8%BE%93%E5%87%BAuseragent%E5%A4%A7%E6%95%B0%E6%A1%86%E6%9E%B6/index.html" target="_blank">圆周率计算多线程</a>

<h3>计算运行速度排行:</h3>
        <br />1.原生BigInt最快,<br />2.BigInteger.js中速,<br />3.Decimal.js最慢。
        <hr>
        <br />
        <details>
        <summary>测试结果对比</summary>
<h4> 线程数为4 圆周率计算6000位测试结果</h4>
        <br />
        firefox 66 测试 decimal.js 达到1倍速度
        <br />
        firefox 66 测试 BigInteger.js 达到2.163倍速度
        <br />
        chrome 75 测试 decimal.js 达到3.4375倍速度
        <br />
        chrome 75 测试 原生BigInt 达到74.038倍速度
        <p></p>
        <hr>
<h4> 线程数为4 圆周率计算10000位测试结果</h4>
        <br />
        firefox 66 测试 decimal.js 达到1倍速度
        <br />
        firefox 66 测试 BigInteger.js 达到2.066倍速度
        <br />
        chrome 75 测试 decimal.js 达到3.688倍速度
        <br />
        chrome 75 测试 原生BigInt 达到100.773倍速度
        <p></p>
        <hr>
<h4> 线程数为8 圆周率计算10000位测试结果</h4>
        
<br />
        firefox 66 测试 BigInteger.js 达到1倍速度
        <br />
        chrome 62 测试 BigInteger.js  达到6.688倍速度
        <br />
        chrome 74 测试 原生BigInt 达到49.710倍速度
        <p></p>
<hr>
        
<h4> 线程数为8 圆周率计算15000位测试结果</h4>
<br />
chrome 62 测试 BigInteger.js  达到1倍速度
<br />
chrome 74 测试 原生BigInt 达到11.16倍速度
<p></p>
</details>
<hr>
</div>

### 使用 babel-standalone 代替本地 node 模块

使用 babel 在线解析 jsx 语法和 es6 以上的语法

不使用本地 node 模块,大大减小了生成的文件大小

Babel · The compiler for next generation JavaScript

https://babeljs.io/

## 使用 parcel bundler 代替 webpcak 成功

避免 webpack 繁琐的配置,快速解决打包问题

📦 Parcel 中文文档 | Parcel 中文网

https://www.parceljs.cn/

Parcel 是一个 web 应用打包工具, 与其他工具的区别在于开发者的使用体验。它利用多核处理器提供了极快的速度, 并且不需要任何配置。

首先通过 Yarn 或者 npm 安装 Parcel :

Yarn:

yarn global add parcel-bundler cssnano

npm:

npm install -g parcel-bundler cssnano

Parcel 内置了一个开发服务器，当文件改变时能够自动重新构建，而且为了实现快速开发，该开发服务器支持模块热替换。只需要在入口文件指出：

parcel index.html

现在在浏览器中打开 http://localhost:1234/ 地址。

当需要打包应用程序用于生产环境时，你可以让 Parcel 在生产模式下打包。

parcel build index.html

parcel build entry.js

# 使用 cdn 加载依赖包,加快速度

```
https://cdn.staticfile.org/twitter-bootstrap/4.3.1/css/bootstrap.min.css

https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js

https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.min.js

https://img.cdn.aliyun.dcloud.net.cn/mui/dist/css/mui.min.css

https://img.cdn.aliyun.dcloud.net.cn/mui/dist/js/mui.min.js

https://cdn.staticfile.org/clipboard.js/2.0.4/clipboard.min.js

https://cdn.staticfile.org/twitter-bootstrap/3.4.1/css/bootstrap-theme.css

https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css

https://cdn.staticfile.org/jquery/3.4.0/jquery.min.js

https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js

https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js

https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js

https://cdn.staticfile.org/react-router-dom/5.0.0/react-router-dom.min.js

https://cdn.staticfile.org/babel-standalone/7.0.0-beta.3/babel.min.js

https://cdn.staticfile.org/vue/2.6.10/vue.min.js

https://cdn.staticfile.org/vue-router/3.0.6/vue-router.min.js

https://cdn.staticfile.org/decimal.js/10.1.1/decimal.min.js
```

# 网站结构介绍

## 首页

在图片中添加 loading="lazy"实现图片懒加载

css中使用@import实现全部模块化

js中使用import实现全部模块化

按钮弹出式 Bootstrap4 信息提示框测试

## 花密网页版

https://masx200.github.io/%E8%8A%B1%E5%AF%86%E7%BD%91%E9%A1%B5%E7%89%88-%E5%AE%8C%E5%96%84%E4%BF%AE%E6%94%B9%E7%89%88-%E5%93%8D%E5%BA%94%E5%BC%8F%E7%9A%84%E5%AF%BC%E8%88%AA%E6%A0%8F/index.html

## 包含 vue-router 和 react-router 的单页面应用测试

https://masx200.github.io/my-vue-router-project/

https://masx200.github.io/my-react-router-test/

## react-router 的单页面应用
异步动态加载UMD的依赖包方法

https://github.com/masx200/IMPORTCJSAMDUMD/blob/master/README.md

```javascript

import IMPORTCJSAMDUMD from "../IMPORTCJSAMDUMD";
Promise.all([
          IMPORTCJSAMDUMD(
            "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js",
            "react"
          ),
          IMPORTCJSAMDUMD(
            "https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js",
            "react-dom"
          ),
          IMPORTCJSAMDUMD(
            "https://cdn.staticfile.org/react-router-dom/5.0.0/react-router-dom.min.js",
            "react-router-dom"
          )
        ]).then(myonloadfunc);
function myonloadfunc(reactmodulearray) {
    //   window.React = IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
      console.log(reactmodulearray);
      const React = reactmodulearray[0].default;
      const ReactDOM = reactmodulearray[1].default;
      const ReactRouterDOM = reactmodulearray[2].default;
      //............................
      
      }
```

按需异步动态加载组件方法

```javascript
const { Link, Switch, BrowserRouter, Route, Redirect } = ReactRouterDOM;
const { Suspense, lazy } = React;
const home = lazy(() => import("./module-home"));
const rssreader = lazy(() => import("./module-rssreader"));
const about = lazy(() => import("./module-about"));

<BrowserRouter
  basename={window.location.pathname + "#/"}
  forceRefresh={false}
  keyLength={12}
>
  <Suspense fallback={<div>loading</div>}>
    <Switch>
      <Route exact path="/" component={home} />
      <Route path="/rssreader" component={rssreader} />
      <Route path="/about" component={about} />
      <Redirect from="*" to="/" />
    </Switch>
  </Suspense>
</BrowserRouter>;
```
新版:按照路由组件分包加载,不使用本地 node 模块,大大减小了生成的文件大小,依赖包从cdn加载

新版:升级到 bootsrtap4 的导航栏和使用 fetch 的 rss 阅读器演示的消息成功加载通知框效果

旧版:把 react 相关所有代码都合并放在 index.jsx 文件中,除了 css 文件



## vue-router 的单页面应用

异步动态加载es6模块的依赖包方法
```javascript
Promise.all([
          import(
            `https://cdn.staticfile.org/vue-router/3.0.6/vue-router.esm.browser.min.js`
          ),
          import(`https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.min.js`)
        ]).then(myonloadfunc);

function myonloadfunc(modulearray) {
        console.log(modulearray)
  var    VueRouter = modulearray[0].default;
   var   Vue = modulearray[1].default;
//.................................
}
```
按需异步动态加载组件方法

```javascript
const about = () => import("./vue-component-about");
const home = () => import("./vue-component-home");
const huami = () => import("./vue-component-huami");
const router = new VueRouter({
  routes: [
    {
      path: "/about",
      name: "about",

      component: about
    },
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/huami",
      name: "huami",
      component: huami
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
```
新版:按照路由组件分包加载,不使用本地 node 模块,大大减小了生成的文件大小,依赖包从cdn加载

旧版:vue 把所有组件全部放在 index.jsx 中,除了 css 文件

旧版:不使用.vue 格式的文件,把 vue 相关的所有 vue 组件都合并放在一个 index.js 文件中,把 template 组件放在 template.html 文件中通过 ajax 加载,除了 css 文件

## JSfuck-and-hieroglyphy-Decoder-and-ENCODER

JSfuck and hieroglyphy Decoder and ENCODER

JSFuck 是一种基于 JavaScript 原子部分的深奥教育编程风格。它只使用六个不同的字符来编写和执行代码

hieroglyphy 是一个工具和 javascript 库，用于将字符串，数字和脚本转换为 的等效序列！在浏览器中运行的字符

<code>
    ()+[]!
</code>
    和
<code>
()[]{}+!
</code>

在 JSfuck and hieroglyphy ENCODER 中使用 service-worker,避免编码时的网页卡顿,也解决了 web-worker 中加载依赖包的问题,速度提升

在编码完成后,输出到文本框里面的内容过长,消耗的时间比较长,这段时间网页处于卡顿状态,使用 requestAnimationFrame 的方法,在网页卡顿结束后,弹出成功消息通知框

https://masx200.github.io/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/index.html

https://masx200.github.io/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/hieroglyphy-encoder.html

https://masx200.github.io/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/JSFuck---Write-any-JavaScript-with-6-Characters_-[]()!+.html




# 动态加载javascript,使用fetch加载xml转换成json.js

```javascript
function loadscript(fileurl,callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = fileurl;
    script.onload=callback
    document.firstElementChild.firstElementChild.appendChild(script);
    
    console.log({script})
}
loadscript("https://cdn.staticfile.org/fast-xml-parser/3.12.16/parser.min.js");

fetch("https://www.pingwest.com/feed")
  .then(r => (console.log(r.statusText, r), r.text()))
  .then(str => new DOMParser().parseFromString(str, "text/xml"))
  .then(data => console.log(data));

fetch("https://www.pingwest.com/feed")
  .then(r => (console.log(r.statusText, r), r.text()))
  .then(str => parser.parse(str))
  .then(data => console.log(data));

```
# 另一种加载外部JavaScript的方法

```javascript
if (!importScripts) {
            var importScripts = (function(globalEval) {
                var xhr = new XMLHttpRequest();
                return function importScripts() {
                    var args = Array.prototype.slice.call(arguments),
                        len = args.length,
                        i = 0,
                        meta,
                        data,
                        content;
                    for (; i < len; i++) {
                        if (args[i].substr(0, 5).toLowerCase() === "data:") {
                            data = args[i];
                            content = data.indexOf(",");
                            meta = data.substr(5, content).toLowerCase();
                            data = decodeURIComponent(data.substr(content + 1));
                            if (/;\s*base64\s*[;,]/.test(meta)) {
                                data = atob(data);
                            }
                            if (/;\s*charset=[uU][tT][fF]-?8\s*[;,]/.test(meta)) {
                                data = decodeURIComponent(escape(data));
                            }
                        } else {
                            xhr.open("GET", args[i], false);
                            xhr.send(null);
                            data = xhr.responseText;
                        }
                        globalEval(data);
                    }
                };
            })(eval);
        }

        importScripts("https://cdn.staticfile.org/clipboard.js/2.0.4/clipboard.min.js")

```



# 在vscode中安装npm-scripts插件即可轻松调试

npm start

npm run build

# 推荐的vscode插件

名称: Beautify
id: hookyqr.beautify
说明: Beautify code in place for VS Code
版本: 1.5.0
发布者: HookyQR
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify

名称: Bracket Pair Colorizer 2
id: coenraads.bracket-pair-colorizer-2
说明: A customizable extension for colorizing matching brackets
版本: 0.0.28
发布者: CoenraadS
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2

名称: Chinese (Simplified) Language Pack for Visual Studio Code
id: ms-ceintl.vscode-language-pack-zh-hans
说明: Language pack extension for Chinese (Simplified)
版本: 1.33.2
发布者: Microsoft
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans

名称: ES7 React/Redux/GraphQL/React-Native snippets
id: dsznajder.es7-react-js-snippets
说明: Simple extensions for React, Redux and Graphql in JS/TS with ES7 syntax
版本: 2.2.2
发布者: dsznajder
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

名称: Minify
id: hookyqr.minify
说明: Minify for VS Code.
Minify with command, and (optionally) re-minify on save.
版本: 0.4.3
发布者: HookyQR
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=HookyQR.minify

名称: NPM-Scripts
id: trabpukcip.vscode-npm-scripts
说明: View and run NPM scripts in the sidebar.
版本: 0.2.1
发布者: traBpUkciP
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=traBpUkciP.vscode-npm-scripts

名称: PowerShell
id: ms-vscode.powershell
说明: Develop PowerShell scripts in Visual Studio Code!
版本: 1.12.1
发布者: Microsoft
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell

名称: Prettier - Code formatter
id: esbenp.prettier-vscode
说明: VS Code plugin for prettier/prettier
版本: 1.9.0
发布者: Esben Petersen
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

名称: Vetur
id: octref.vetur
说明: Vue tooling for VS Code
版本: 0.20.0
发布者: Pine Wu
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=octref.vetur

名称: vscode-icons
id: vscode-icons-team.vscode-icons
说明: Icons for Visual Studio Code
版本: 8.6.0
发布者: VSCode Icons Team
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons

名称: XML Tools
id: dotjoshjohnson.xml
说明: XML Formatting, XQuery, and XPath Tools for Visual Studio Code
版本: 2.4.0
发布者: Josh Johnson
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml

名称: Vue VSCode Snippets
id: sdras.vue-vscode-snippets
说明: Snippets that will supercharge your Vue workflow
版本: 1.6.0
发布者: sarah.drasner
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets
