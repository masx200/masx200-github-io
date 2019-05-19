# masx200.github.io
masx200的github

https://masx200.github.io/

# 查看源代码

https://github.com/masx200/masx200.github.io/tree/master/src


# 圆周率计算多线程,使用 BigInteger.js和浏览器原生的BigInt之后速度得到巨大提升!

优化了圆周率计算的多线程方式,开启一次webworker后,不再关闭它,每一个线程一个webworker,也不重复创建过多webweorker,并给按钮添加mui的loading效果,全局加上mui的支持

优化了圆周率的界面显示效果,使用bootstrap4的折叠按钮效果,可以收起或展开某些特别占空间的组件

需要浏览器chrome68以上,才原生支持BigInt

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

### 使用babel-standalone代替本地node模块

使用babel在线解析jsx语法和es6以上的语法

不使用本地node模块,大大减小了生成的文件大小

Babel · The compiler for next generation JavaScript

https://babeljs.io/

## 使用parcel bundler代替webpcak成功

避免webpack繁琐的配置,快速解决打包问题

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


# 使用cdn加载依赖包,加快速度
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
首页



# 花密网页版

https://masx200.github.io/%E8%8A%B1%E5%AF%86%E7%BD%91%E9%A1%B5%E7%89%88-%E5%AE%8C%E5%96%84%E4%BF%AE%E6%94%B9%E7%89%88-%E5%93%8D%E5%BA%94%E5%BC%8F%E7%9A%84%E5%AF%BC%E8%88%AA%E6%A0%8F/index.html

# 包含 vue-router和react-router的单页面应用测试

https://masx200.github.io/my-vue-router-project/

https://masx200.github.io/my-react-router-test/

# vue-router的单页面应用

新版:vue把所有组件全部放在index.jsx中,除了css文件

旧版:不使用.vue格式的文件,把vue相关的所有vue组件都合并放在一个index.js文件中,把template组件放在template.html文件中通过ajax加载,除了css文件

# react-router的单页面应用

把react相关所有代码都合并放在index.jsx文件中,除了css文件

升级到bootsrtap4的导航栏和使用fetch的rss阅读器演示的消息成功加载通知框效果

# JSfuck-and-hieroglyphy-Decoder-and-ENCODER
JSfuck and hieroglyphy Decoder and  ENCODER

JSFuck是一种基于JavaScript原子部分的深奥教育编程风格。它只使用六个不同的字符来编写和执行代码

hieroglyphy是一个工具和javascript库，用于将字符串，数字和脚本转换为 的等效序列！在浏览器中运行的字符

<code>
    ()+[]!
</code>
    和
<code>
()[]{}+!
</code>


在JSfuck and hieroglyphy ENCODER中使用service-worker,避免编码时的网页卡顿,也解决了web-worker中加载依赖包的问题,速度提升

在编码完成后,输出到文本框里面的内容过长,消耗的时间比较长,这段时间网页处于卡顿状态,使用requestAnimationFrame的方法,在网页卡顿结束后,弹出成功消息通知框


https://masx200.github.io/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/JSfuck%20Decoder%20%20and%20hieroglyphy%20%20decoder.html

https://masx200.github.io/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/hieroglyphy%20encoder.html

https://masx200.github.io/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/JSFuck%20-%20Write%20any%20JavaScript%20with%206%20Characters_%20[]()!+.html
