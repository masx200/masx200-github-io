# masx200.github.io

masx200 的 github 网页

https://github.com/masx200/masx200-github-io

<hr>

# 网站升级到 cdn 加速服务器

https://cdn.jsdelivr.net/gh/masx200/masx200.github.io/

# 防止单页面应用首页白屏的方法,先显示 loading 图标,然后使用异步加载 react 或者 vue

```javascript
document.getElementById("root").innerHTML = `<div>
<h1>loading</h1>
<span class="mui-spinner mui-spinner-custom">

</span></div>`;
```

# 使用 webpack-react-vue-spa-awesome-config 重构网页

基于 webpack4.x, 同时支持 react 和 vue 的单页面应用 通用的 webpack
配置文件,提供开箱即用支持

您无需学习和配置许多构建工具。即时重新加载可帮助您专注于开发。在部署时，您的捆绑包会自动优化

https://github.com/masx200/webpack-react-vue-spa-awesome-config

# 基于 react hooks 编写的在线 markdown 阅读器 组件

https://github.com/masx200/masx200.github.io/blob/master/src/markdown-react/index.js

https://github.com/masx200/masx200.github.io/blob/master/src/home-react-webpack-react-vue-spa-awesome-config.js

# 适合于 javascript/html/css/vue/reqct 编程的 vscode 的优秀扩展推荐和 vscode 的推荐设置

https://github.com/masx200/excellent-vscode-extensions-for-javascript

<hr>

<hr>

# 圆周率计算多线程,使用 BigInteger.js 和浏览器原生的 BigInt 之后速度得到巨大提升!

优化了圆周率计算的多线程方式,开启一次 webworker 后,不再关闭它,每一个线程一个
webworker,也不重复创建过多 webweorker,并给按钮添加 mui 的 loading 效果,全局加上
mui 的支持

优化了圆周率的界面显示效果,使用 bootstrap4
的折叠按钮效果,可以收起或展开某些特别占空间的组件

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

圆周率计算多线程

<h3>计算运行速度排行:</h3>
        <br />1.原生BigInt最快,<br />2.BigInteger.js中速,<br />3.Decimal.js最慢。
        <hr>
        <br />
        <details open>
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

<hr>

<hr>

# 网站结构介绍

## 首页

在图片中添加 loading="lazy"实现图片懒加载

css 中使用@import 实现全部模块化

js 中使用 import 实现全部模块化

按钮弹出式 Bootstrap4 信息提示框测试

## 包含 vue-router 和 react-router 的单页面应用测试

https://masx200.github.io/my-vue-router-project/

https://masx200.github.io/my-react-router-test/

<hr>

## react-router 的单页面应用

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

新版:按照路由组件分包加载,不使用本地 node 模块,大大减小了生成的文件大小,依赖包从
cdn 加载

新版:升级到 bootsrtap4 的导航栏和使用 fetch 的 rss
阅读器演示的消息成功加载通知框效果

旧版:把 react 相关所有代码都合并放在 index.jsx 文件中,除了 css 文件

<hr>

新版:按照路由组件分包加载,不使用本地 node 模块,大大减小了生成的文件大小,依赖包从
cdn 加载

旧版:vue 把所有组件全部放在 index.jsx 中,除了 css 文件

旧版:不使用.vue 格式的文件,把 vue 相关的所有 vue 组件都合并放在一个 index.js
文件中,把 template 组件放在 template.html 文件中通过 ajax 加载,除了 css 文件

<hr>

# 在 vscode 中安装 npm-scripts 插件即可轻松调试

```
npm start

npm run build
```

或者

```
yarn start

yarn build
```
