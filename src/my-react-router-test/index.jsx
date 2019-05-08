
// eslint-disable-next-line
/* eslint-disable */
// import React from 'react';

//在react的jsx文件中这句话能删除!
haverun = 0
setTimeout(() => {

    window.onload()

}, 1000)
window.onload = function () {

    if (haverun == 0) {
        haverun = 1
        console.log("开始运行此onload函数")
        myonloadfunc()
    }
    else {
        console.log("不要重复运行此onload函数")
    }

}

myonloadfunc = () => {
    window.myrsscontent = []


    const { render } = ReactDOM

    const { Link, Switch, BrowserRouter, Route, Redirect } = ReactRouterDOM






    class App extends React.Component {
        componentWillMount() {

        }
        componentDidMount() {
            window.location.hash = "#/"
            refreshall()

            document.title="React router App-"+"home"


        }
        componentWillReceiveProps(newProps) {

        }
        shouldComponentUpdate(newProps, newState) {
            return true;
        }
        componentWillUpdate(nextProps, nextState) {

        }
        componentDidUpdate(prevProps, prevState) {

        }
        componentWillUnmount() {

        }
        render() {
            return (
                <div className="App">
                    <header className="App-header">

                        <div class="container">
                            <div class="jumbotron">
                                <h1>欢迎登陆页面！</h1>
                                <p><a target="_blank" href="https://weibo.com/2174458781?/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1">一生忽而得一夏当司掌好年华的微博_微博
                        </a></p>
                                <p><a target="_blank" href="https://github.com/masx200">masx200的github主页
                            </a></p>
                            </div>
                        </div>
                        <p>
                            <a target="_blank" href="https://zh-hans.reactjs.org/tutorial/tutorial.html">入门教程: 认识 React – React</a>
                        </p>
                        <p>
                            <a target="_blank" href="https://zh-hans.reactjs.org/docs/getting-started.html">
                                开始 – React文档</a></p>
                        <h1>react-router测试</h1>
                        <h1>Hello, world!</h1>
                        <h2>欢迎来到主页</h2>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
            </p>
                        <p className="App-intro">
                            你可以在 <code>src/App.js</code> 文件中修改。
            </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
            </a>
                        <h1>Hello, world!</h1>
                        <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
                    </header>

                </div>

            );
        }

    }





    class about extends React.Component {
        componentWillMount() {

        }
        componentDidMount() {

            refreshall()
            document.title="React router App-"+"about"
        }
        componentWillReceiveProps(newProps) {

        }
        shouldComponentUpdate(newProps, newState) {
            return true;
        }
        componentWillUpdate(nextProps, nextState) {

        }
        componentDidUpdate(prevProps, prevState) {

        }
        componentWillUnmount() {

        }
        render() {

            return (
                <div className="App">
                    <header className="App-header">
                        <img src=
                            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NDEuOSA1OTUuMyI+CiAgICA8ZyBmaWxsPSIjNjFEQUZCIj4KICAgICAgICA8cGF0aCBkPSJNNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2LjlWNzhjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZWNzguNWMtOC40IDAtMTYgMS44LTIyLjYgNS42LTI4LjEgMTYuMi0zNC40IDY2LjctMTkuOSAxMzAuMS02Mi4yIDE5LjItMTAyLjcgNDkuOS0xMDIuNyA4Mi4zIDAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek00MjEuMiA0MzBjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek00MjAuNyAxNjNjOS4zIDkuNiAxOC42IDIwLjMgMjcuOCAzMi05LS40LTE4LjItLjctMjcuNS0uNy05LjQgMC0xOC43LjItMjcuOC43IDktMTEuNyAxOC4zLTIyLjQgMjcuNS0zMnptLTc0IDU4LjljLTQuOSA3LjctOS44IDE1LjYtMTQuNCAyMy43LTQuNiA4LTguOSAxNi0xMyAyNC01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOCAxMy4xLTMuMSAyNi45LTUuOCA0MS4yLTcuOXptLTkwLjUgMTI1LjJjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42IDAtMTUuNyAyMi45LTM1LjYgNTguMy01MC42IDguNi0zLjcgMTgtNyAyNy43LTEwLjEgNS43IDE5LjYgMTMuMiA0MCAyMi41IDYwLjktOS4yIDIwLjgtMTYuNiA0MS4xLTIyLjIgNjAuNi05LjktMy4xLTE5LjMtNi41LTI4LTEwLjJ6TTMxMCA0OTBjLTEzLjYtNy44LTE5LjUtMzcuNS0xNC45LTc1LjcgMS4xLTkuNCAyLjktMTkuMyA1LjEtMjkuNCAxOS42IDQuOCA0MSA4LjUgNjMuNSAxMC45IDEzLjUgMTguNSAyNy41IDM1LjMgNDEuNiA1MC0zMi42IDMwLjMtNjMuMiA0Ni45LTg0IDQ2LjktNC41LS4xLTguMy0xLTExLjMtMi43em0yMzcuMi03Ni4yYzQuNyAzOC4yLTEuMSA2Ny45LTE0LjYgNzUuOC0zIDEuOC02LjkgMi42LTExLjUgMi42LTIwLjcgMC01MS40LTE2LjUtODQtNDYuNiAxNC0xNC43IDI4LTMxLjQgNDEuMy00OS45IDIyLjYtMi40IDQ0LTYuMSA2My42LTExIDIuMyAxMC4xIDQuMSAxOS44IDUuMiAyOS4xem0zOC41LTY2LjdjLTguNiAzLjctMTggNy0yNy43IDEwLjEtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjkgOS4yLTIwLjggMTYuNi00MS4xIDIyLjItNjAuNiA5LjkgMy4xIDE5LjMgNi41IDI4LjEgMTAuMiAzNS40IDE1LjEgNTguMyAzNC45IDU4LjMgNTAuNi0uMSAxNS43LTIzIDM1LjYtNTguNCA1MC42ek0zMjAuOCA3OC40eiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQyMC45IiBjeT0iMjk2LjUiIHI9IjQ1LjciLz4KICAgICAgICA8cGF0aCBkPSJNNTIwLjUgNzguMXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                            className="App-logo" alt="logo" />
                              <p>
                            <a target="_blank" href="https://zh-hans.reactjs.org/tutorial/tutorial.html">入门教程: 认识 React – React</a>
                        </p>
                        <p>
                            <a target="_blank" href="https://zh-hans.reactjs.org/docs/getting-started.html">
                                开始 – React文档</a></p>
                        <h1>react-router测试</h1>
                        <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
                        <h3>
                            React 是一个用于构建用户界面的 JAVASCRIPT 库。<br />

                            React主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）。<br />
                            React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。<br />
                            React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。<br />
                            React 特点<br />
                            1.声明式设计 −React采用声明范式，可以轻松描述应用。<br />
                            2.高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。<br />
                            3.灵活 −React可以与已知的库或框架很好地配合。<br />
                            4.JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。<br />
                            5.组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。<br />

                            6.单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。</h3>
                        <div >


                            <p>
                                Edit <code>src/App.js</code> and save to reload.
        </p>
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
        </a>

                        </div>
                    </header>

                </div>
            );
        }
    }









    class rssreader extends React.Component {
        componentWillMount() {

        }


        jiazairss1() {
            var myselectorid = "#xml1"

            jiazaiload(myselectorid)

        }
        jiazairss2() {
            var myselectorid = "#xml2"

            jiazaiload(myselectorid)

        }
        jiazairss3() {
            var myselectorid = "#xml3"

            jiazaiload(myselectorid)

        }
        jiazairss4() {
            var myselectorid = "#xml4"

            jiazaiload(myselectorid)

        }

        componentDidMount() {
            document.title="React router App-"+"rssreader"
            refreshall()

            jiazaiload = function (myid) {
                var myselectorid = myid
                window.myrsscontent = []


                console.log("开始加载外部内容", $(myselectorid).attr("src"))
                if (typeof $(myselectorid).attr("src") == "undefined") {
                    console.log("加载失败")
                } else {


                    $.get($(myselectorid).attr("src"), function (data, status) {

                        console.log(status, typeof data, data)
                        // if (status != "success") {
                        //     console.log("加载失败")
                        //     return
                        // }

                        xmlDoc = data
                        // console.log(status, typeof data, data)
                        x = xmlDoc.getElementsByTagName("item");

                        for (i = 0; i < x.length; i++) {

                            onetitle = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                            // onedescription=x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                            onelink = x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;


                            // description=x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue
                            description = "";

                            for (value of x[i].getElementsByTagName("description")[0].childNodes) {
                                description += value.nodeValue
                            }

                            // console.log('length',x[i].getElementsByTagName("description")[0].childNodes.length)
                            window.myrsscontent.push({
                                title: onetitle,
                                link: onelink,
                                description

                            })

                        }
                        console.log(window.myrsscontent)
                        refreshall()
                    })


                }
            }

        }
        componentWillReceiveProps(newProps) {

        }
        shouldComponentUpdate(newProps, newState) {
            return true;
        }
        componentWillUpdate(nextProps, nextState) {

        }
        componentDidUpdate(prevProps, prevState) {

        }
        componentWillUnmount() {

        }
        render() {

            return (

                <div className="App">
                    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                        <ul class="demo">
                            <button class="mui-btn mui-btn-royal mui-btn-outlined" onClick={this.jiazairss1}>加载tmtpost的rss</button>
                            <button class="mui-btn mui-btn-primary mui-btn-outlined" onClick={this.jiazairss2}>加载iplaysoft的rss</button>
                            <button class="mui-btn mui-btn-warning mui-btn-outlined" onClick={this.jiazairss3}>加载landiannews的rss</button>
                            <button class="mui-btn mui-btn-danger mui-btn-outlined" onClick={this.jiazairss4}>加载ithome的rss</button>

                        </ul>
                    </nav>
                    <header className="App-header">


                        <div>
                            <ul class="mui-table-view">
                                {window.myrsscontent.map(e => (

                                    <li class="mui-table-view-cell mui-media">


                                        <div class="mui-media-body">
                                            {e.title}
                                            <a href={e.link} target="_blank">
                                                <p class='mui-ellipsis'>
                                                    {e.link}
                                                </p></a>
                                            <p class='mui-ellipsis'>
                                                {e.description}
                                            </p>
                                        </div>

                                    </li>

                                ))}
                            </ul>
                        </div>


                    </header>
                    {/* <script src="www.tmtpost.com.rss.xml" id="xml1"type="text/x-template">
    </script>
    <script src="feed.iplaysoft.com.xml" id="xml2"type="text/x-template">
    </script>
    <script src="landiannews.com.feed.xml" id="xml3"type="text/x-template">
    </script>
    <script src="www.ithome.com.rss.xml" id="xml4"type="text/x-template">
    </script> */}
                </div>
            );
        }
    }

    class Apphome extends React.Component {


        render() {
            return (
                <BrowserRouter basename={window.location.pathname + "#/"} forceRefresh={false} keyLength={12}     >
                    <div>

                        <nav class="navbar navbar-default" role="navigation"  >
                            <div class="container-fluid">
                                <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#example-navbar-collapse">
                    <span class="sr-only">切换导航</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                                    <a class="navbar-brand ">masx200的github</a>
                                </div>
                                <div class="collapse navbar-collapse" id="example-navbar-collapse">
                                    <ul class="nav navbar-nav">
                                        <li id="mynav1" class=
                                            {window.location.hash == "#/" ? "active" : ""}>



                                            <Link to="/">基于REACT的主页</Link>
                                        </li>
                                        <li class=
                                            {window.location.hash == "#/rssreader" ? "active" : ""}>



                                            <Link to="/rssreader">rss阅读</Link>
                                        </li>
                                        <li id="mynav2" class=
                                            {window.location.hash == "#/about" ? "active" : ""}>



                                            <Link to="/about">关于</Link>
                                        </li>

                                        <li>
                                            <a href="../index.html">传统网页</a>
                                        </li>
                                        <li>
                                            <a href="../my-vue-router-project/index.html">基于vue的主页</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div class="container">
                        <Switch>

                            <Route exact path="/" component={App}

                            />
                            <Route path="/rssreader" component={rssreader} />
                            <Route path="/about" component={about} />

                            <Redirect from='*' to='/' />
                        </Switch> </div>
                    </div>
                </BrowserRouter>
            )
        }
        componentWillMount() {
        }
        componentDidMount() {
        }
        componentWillReceiveProps(newProps) {
        }
        shouldComponentUpdate(newProps, newState) {
            return true;
        }
        componentWillUpdate(nextProps, nextState) {
        }
        componentDidUpdate(prevProps, prevState) {
        }
        componentWillUnmount() {
        }
    }

    function refreshall() {
        render((<Apphome />), document.getElementById('root'))
    }

    render((<Apphome />), document.getElementById('root'));
    window.refreshall = refreshall

}
window.onload()