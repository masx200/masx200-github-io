# masx200.github.io
masx200的github

https://masx200.github.io/
# 使用babel-standalone代替本地node模块

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

https://img.cdn.aliyun.dcloud.net.cn/mui/dist/css/mui.min.css

https://img.cdn.aliyun.dcloud.net.cn/mui/dist/js/mui.min.js

https://cdn.staticfile.org/clipboard.js/2.0.4/clipboard.min.js

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
# 网站结构介绍
首页

# 圆周率计算多线程

# 花密网页版

包含 vue-router和react-router的单页面应用测试

https://masx200.github.io/my-vue-router-project/

https://masx200.github.io/my-react-router-test/

# vue-router的单页面应用

新版:vue把所有组件全部放在index.jsx中,除了css文件

旧版:不使用.vue格式的文件,把vue相关的所有vue组件都合并放在一个index.js文件中,把template组件放在template.html文件中通过ajax加载,除了css文件

# react-router的单页面应用

把react相关所有代码都合并放在index.jsx文件中,除了css文件

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
