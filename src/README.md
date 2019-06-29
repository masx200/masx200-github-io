# 点击链接不跳转-修改当前的网页地址-动态加载网页内容不刷新的脚本

[源代码 js](https://github.com/masx200/masx200.github.io/blob/master/%E7%82%B9%E5%87%BB%E9%93%BE%E6%8E%A5%E4%B8%8D%E8%B7%B3%E8%BD%AC-%E4%BF%AE%E6%94%B9%E5%BD%93%E5%89%8D%E7%9A%84%E7%BD%91%E9%A1%B5%E5%9C%B0%E5%9D%80-%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD%E7%BD%91%E9%A1%B5%E5%86%85%E5%AE%B9%E4%B8%8D%E5%88%B7%E6%96%B0/%E7%82%B9%E5%87%BB%E9%93%BE%E6%8E%A5%E4%B8%8D%E8%B7%B3%E8%BD%AC-%E4%BF%AE%E6%94%B9%E5%BD%93%E5%89%8D%E7%9A%84%E7%BD%91%E9%A1%B5%E5%9C%B0%E5%9D%80-%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD%E7%BD%91%E9%A1%B5%E5%86%85%E5%AE%B9%E4%B8%8D%E5%88%B7%E6%96%B0.js)

## 注意! 此脚本仅用于学习测试浏览器加载网页的过程模拟,此脚本不适合于单页面应用!在静态页面的测试效果更好


导入模块方法 





https://github.com/masx200/masx200.github.io/blob/master/src/readme.md


## 介绍大概和注意

点击链接不跳转修改当前的网页地址动态加载网页内容不刷新

这个脚本能够通过异步 fetch 加载 html 页面,动态替换当前的页面内容

注意 不能跨域 ,history.pushState 函数是改变地址栏的 url,有同源限制

注意:对于使用了 document.write 的网站, 加载会出错,因为脚本都是异步加载的,网页内容会被覆盖,所以 修改了 document.write 方法

## 预先的准备工作
0.添加css样式"body, html {    scroll-behavior: smooth;}"就可以实现平滑滚动

1.把当前页面的网址的 href 写入到 docment 的 html 的 dataset 当中

2.修改 document.write 方法为 把 document.write 中的文本内容生成 dom 元素放入 body 之中

3.替换所有同源的 a 链接的 href 为"javascript:;" ,把原本 href 存到元素的 dataset 中,设置 a 链接的 click 事件监听器,点击时触发 ,修改当前网页地址栏网址,触发 popstate 事件

4.设置 popstate 事件监听器,收到此事件时,开始动态加载网页执行顺序,当点击浏览器的前进和后退按钮时,自动触发 popstate 事件

## 动态加载网页执行顺序

1.开始发起 fetch 异步请求 url 的 html 内容

2.获取返回头部的编码信息和文件类型信息,如果这里没有编码信息,则在转成文字之后查找 meta 中 charset 和 meta 的 Content-Type 中的 charset

3.把返回的 arraybuffer 解码成文字,然后转成 html 的 document 对象,如果加载失败则新窗口打开请求的页面

4.复制接收的 html 的 body 的内容到当前网页的 body 当中

5.添加其他标签到 head 中,不包括 link 的 stylesheet 和 script

6.1.线程 1-添加有 href 的 link 的 stylesheet 到 head 中,从外部加载的全部改成异步加载,当他们加载完成时,触发 window 的 allstylesheetload 事件,然后删除旧的 stylesheet 和 script 元素 和其他元素

6.2.线程 2-添加有 src 的 script 的 javascript 到 head 中,从外部加载的全部改成异步加载,当他们加载完成时,触发 window 的 allscriptloadformsrc 事件,加载用文本内容加载的 javascript 到 head 执行,触发"alltextscriptload"事件,然后再触发 window 的 load 事件
