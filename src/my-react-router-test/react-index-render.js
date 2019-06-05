import IMPORTCJSAMDUMD from "../IMPORTCJSAMDUMD";
// import { async } from "q";
// import regeneratorRuntime from "regenerator-runtime";

// eslint-disable-next-line
/* eslint-disable */
// import React from 'react';
//在react的jsx文件中这句话能删除!
// import "parcel-bundler/src/builtins/bundle-url.js"
(() => {
  // console.log(regeneratorRuntime)
  $(window).one("load", () => {
    function onhashchange() {
      // refreshall();
      scrollTo(0, 0);
      $("#collapsibleNavbar").removeClass("show");
      $("#my主体").css("padding-top", $("#my导航栏").height());
    }
    $(window).on("hashchange", onhashchange);
    // $(window).on("hashchange", hashchangehandler);
    //   function hashchangehandler() {
    //     if (lasthash === window.location.hash) {
    //       console.log("hash不改变");
    //       return;
    //     }
    //     lasthash = window.location.hash;
    //     // console.log("hash", window.location.hash);
    //   }
    var haverun = 0;
    herewindowonload();
    function herewindowonload() {
      if (haverun == 0) {
        haverun = 1;
        console.log("开始运行此onload函数");

        /*  IMPORTCJSAMDUMD已经升级,乱序依赖的模块可以自动加载了 */
        IMPORTCJSAMDUMD(
          [
            "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js",
            "react"
          ],
          [
            "https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js",
            "react-dom"
          ],
          [
            "https://cdn.staticfile.org/react-router-dom/5.0.0/react-router-dom.min.js",
            "react-router-dom"
          ]
        ).then(myonloadfunc);
      } else {
        console.log("不要重复运行此onload函数");
      }
    }
    // $(window).one(herewindowonload);
    /* 不要写两次window onload */
    // var xmlDoc, x, onetitle, onelink, description;

    //   setTimeout(() => {
    //     herewindowonload();
    //   }, 1000);

    function myonloadfunc(reactmodulearray) {
      //   window.React = IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
      //   console.log(reactmodulearray);
      const React = reactmodulearray[0].default;
      const ReactDOM = reactmodulearray[1].default;
      const ReactRouterDOM = reactmodulearray[2].default;
      const render = ReactDOM.render;
      const {
        Link,
        Switch,
        BrowserRouter,
        Route,
        Redirect,
        HashRouter
      } = ReactRouterDOM;
      const { Suspense, lazy } = React;
      const home = lazy(() => import("./react-module-home.js"));
      const rssreader = lazy(() => import("./react-module-rssreader.js"));
      const about = lazy(() => import("./react-module-about.js"));
      const Decoder = lazy(() =>
        import(
          "./JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-decoder"
        )
      );
      const Jsfuck = lazy(() =>
        import(
          "./JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-jsfuck.js"
        )
      );
      const Hieroglyphy = lazy(() =>
        import(
          "./JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-hieroglyphy.js"
        )
      );
    //   var lasthash;

      class Apphome extends React.Component {
        constructor(props) {
          super(props);
          //   this.pathnamestate = window.location.pathname + "#/";
          //   this.locationpath = window.location.pathname;
        }
        shouqi收起折叠的导航栏菜单() {
          $("#my主体").css("padding-top", $("#my导航栏").height());
          $("#example-navbar-collapse").removeClass("show");
          //   hashchangehandler();
          refreshall();
        }
        render() {
          return (
            /*   <BrowserRouter
              //   basename={window.location.pathname + "#/"}
              basename={this.pathnamestate}
              forceRefresh={false}
              keyLength={12}
            > */
            /* 改成Hashrouter */
            <HashRouter>
              <div>
                <div class="container-fluid fixed-top" id="my导航栏">
                  <nav
                    id="allnavbar"
                    onClick={this.shouqi收起折叠的导航栏菜单}
                    class="navbar navbar-default navbar navbar-expand-sm bg-light navbar-light"
                    role="navigation"
                  >
                    {/* <div class="navbar-header"> */}
                    <div>
                      <a class="navbar-brand " href="../index.html">
                        masx200的github主页
                      </a>

                      <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#example-navbar-collapse"
                      >
                        <span class="navbar-toggler-icon" />
                      </button>
                    </div>
                    <div
                      class="collapse navbar-collapse"
                      id="example-navbar-collapse"
                    >
                      <ul class="nav navbar-nav">
                        <li
                          id="mynav1"
                          class={window.location.hash == "#/" ? "active" : ""}
                        >
                          <Link to="/" class="nav-link">
                            基于REACT的主页
                          </Link>
                        </li>
                        <li
                          class={
                            window.location.hash == "#/rssreader"
                              ? "active"
                              : ""
                          }
                        >
                          <Link to="/rssreader" class="nav-link">
                            rss阅读
                          </Link>
                        </li>
                        <li
                          id="mynav2"
                          class={
                            window.location.hash == "#/about" ? "active" : ""
                          }
                        >
                          <Link to="/about" class="nav-link">
                            关于REACT
                          </Link>
                        </li>
                        <li>
                          <a
                            href="../my-vue-router-project/index.html"
                            class="nav-link"
                          >
                            基于vue的主页
                          </a>
                        </li>
                        <li class="">
                          <a
                            href="../圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/index.html"
                            class="nav-link"
                          >
                            圆周率计算多线程
                          </a>
                        </li>
                        <li>
                          <a
                            href="../my-vue-router-project/index.html#/huami"
                            class="nav-link"
                          >
                            花密网页版
                          </a>
                        </li>
                        <li>
                          {/* <a
                            href="../JSfuck-and-hieroglyphy-Decoder-and-ENCODER/index.html"
                            class="nav-link"
                          >
                            JSfuck-and-hieroglyphy-Decoder-and-ENCODER
                          </a> */}
                          <Link to="/decoder" class="nav-link">
                            JSfuck-and-hieroglyphy-Decoder
                          </Link>
                        </li>
                        <li>
                          <Link to="/jsfuck" class="nav-link">
                            JSfuck-ENCODER
                          </Link>
                        </li>
                        <li>
                          <Link to="/hieroglyphy" class="nav-link">
                            hieroglyphy-ENCODER
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>

                <div
                  class="container"
                  id="my主体"
                  //   style={"min-width: 100%;padding-top: 53px;"}
                >
                  {/* <Suspense fallback={<div>Loading...</div>}> */}
                  <Suspense
                    fallback={
                      <div>
                        <h1>loading</h1>
                      </div>
                    }
                  >
                    <Switch>
                      <Route
                        exact
                        path="/"
                        // component={allcomponent.app}
                        component={home}
                        //    component={require("./module-app.js").default}
                      />
                      <Route
                        path="/rssreader"
                        // component={allcomponent.rssreader}
                        component={rssreader}
                        // component={require("./module-rssreader.js").default}
                      />
                      <Route
                        path="/about"
                        // component={allcomponent.about}
                        component={about}
                        // component={require("./module-about.js").default}
                        // component={()=>i}
                      />
                      <Route
                        path="/decoder"
                        // component={allcomponent.about}
                        component={Decoder}
                        // component={require("./module-about.js").default}
                        // component={()=>i}
                      />
                      <Route component={Jsfuck} path="/jsfuck" />
                      <Route component={Hieroglyphy} path="/hieroglyphy" />
                      <Route
                        exact
                        path="*"
                        // component={allcomponent.app}
                        component={home}
                        //    component={require("./module-app.js").default}
                      />

                      {/* <Redirect from="*" to="/" /> */}
                      {
                        // 如果当前路径变化则不启用路由
                        //    if( this.locationpath===window.location.pathname)
                        //    {<Redirect from="*" to="/" />}}
                      }
                    </Switch>
                  </Suspense>
                  {/* </Suspense> */}
                </div>
              </div>
            </HashRouter>
            //  {/* </Suspense> */}
            /* </BrowserRouter> */
          );
        }
        componentWillMount() {}
        componentDidMount() {
          $("#my主体").css("padding-top", $("#my导航栏").height());

          //   hashchangehandler();
          refreshall();
        }
        componentWillReceiveProps(newProps) {}
        shouldComponentUpdate(newProps, newState) {
          return true;
        }
        componentWillUpdate(nextProps, nextState) {}
        componentDidUpdate(prevProps, prevState) {}
        componentWillUnmount() {}
      }

      function refreshall() {
        render(<Apphome />, document.getElementById("root"));
        scrollTo(0, 0);
        $("#collapsibleNavbar").removeClass("show");
      }
      refreshall();
      // ReactDOM.render(<Apphome />, document.getElementById("root"));
      //    /*  {
      //       /* window.refreshall = refreshall */
      //     }
      //     {
      //       /* let refreshall =()=> myrefreshall */
      //     } */
    }
  });
})();
