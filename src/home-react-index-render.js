// import"./my-react-router-test/react-index-render.css"
// import IMPORTCJSAMDUMD from "./IMPORTCJSAMDUMD";
// import myreacthtml from "./my-react-router-test/index.html";
// console.log(myreacthtml)
// import myvuehtml from "./my-vue-router-project/index.html";
// console.log(myreacthtml, myvuehtml);
import("./IMPORTCJSAMDUMD").then(IMPORTCJSAMDUMD => {
  //   var IMPORTCJSAMDUMD = module1;
  (() => {
    "use strict";
    $(window).one("load", () => {
      function onhashchange() {
        scrollTo(0, 0);
        $("#collapsibleNavbar").removeClass("show");
        $("#my主体").css("padding-top", $("#my导航栏").height());
      }
      $(window).on("hashchange", onhashchange);

      var haverun = 0;
      herewindowonload();
      function herewindowonload() {
        if (haverun == 0) {
          haverun = 1;

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

      function myonloadfunc(reactmodulearray) {
        const React = reactmodulearray[0].default;
        const ReactDOM = reactmodulearray[1].default;
        const ReactRouterDOM = reactmodulearray[2].default;
        const { render } = ReactDOM;
        const {
          Link,
          Switch,
          // BrowserRouter,
          Route,
          // Redirect,
          HashRouter
        } = ReactRouterDOM;
        const { Suspense, lazy } = React;
        const home = lazy(() => import("./home-react-module-home.js"));
        const picalc = lazy(() => import("./home-react-module-picalc.js"));

        const 点击链接不跳转修改当前的网页地址动态加载网页内容不刷新 = lazy(
          () =>
            import(
              "./home-react-module-点击链接不跳转修改当前的网页地址动态加载网页内容不刷新.js"
            )
        );
        const IMPORTCJSAMDUMD动态异步加载 = lazy(() =>
          import("./home-react-module-IMPORTCJSAMDUMD动态异步加载.js")
        );

        class Apphome extends React.Component {
          constructor(props) {
            super(props);
          }
          shouqi收起折叠的导航栏菜单() {
            $("#my主体").css("padding-top", $("#my导航栏").height());
            $("#example-navbar-collapse").removeClass("show");

            refreshall();
          }
          render() {
            return (
              <HashRouter>
                <div>
                  <div class="container-fluid fixed-top" id="my导航栏">
                    <nav
                      class="navbar navbar-default navbar navbar-expand-sm bg-light navbar-light"
                      role="navigation"
                    >
                      <div>
                        <Link
                          class="navbar-brand mui-btn mui-btn-primary mui-btn-outlined"
                          to="/"
                        >
                          masx200的github主页
                        </Link>

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
                        <ul
                          class="nav navbar-nav"
                          id="allnavbar"
                          onClick={this.shouqi收起折叠的导航栏菜单}
                        >
                          <li
                            id="mynav1"
                            // class={window.location.hash == "#/" ? "active" : ""}
                          >
                            <Link
                              to="/react-home"
                              class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                            >
                              基于REACT的主页
                            </Link>
                          </li>
                          <li
                          // class={
                          //   window.location.hash == "#/rssreader"
                          //     ? "active"
                          //     : ""
                          // }
                          >
                            <Link
                              to="/react-rssreader"
                              class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                            >
                              rss阅读
                            </Link>
                          </li>
                          <li
                            id="mynav2"
                            // class={
                            //   window.location.hash == "#/about" ? "active" : ""
                            // }
                          >
                            <Link
                              to="/react-about"
                              class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                            >
                              关于REACT
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link
                              to="/picalc"
                              class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                            >
                              圆周率计算多线程
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link
                              to="/点击链接不跳转修改当前的网页地址动态加载网页内容不刷新"
                              class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                            >
                              点击链接不跳转-修改当前的网页地址-动态加载网页内容不刷新
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link
                              to="/IMPORTCJSAMDUMD动态异步加载"
                              class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                            >
                              IMPORTCJSAMDUMD-动态异步加载-commonjs和umd和amd模块
                            </Link>
                          </li>
                          <li>
                            <a
                              href="./my-vue-router-project/index.html#/huami"
                              class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                            >
                              花密网页版
                            </a>
                          </li>
                          <li>
                            <a
                              href="./my-vue-router-project/index.html"
                              class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                            >
                              基于vue的主页
                            </a>
                          </li>
                          <li>
                            <a
                              href="./my-vue-router-project/index.html#/about"
                              class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                            >
                              关于Vue
                            </a>
                          </li>
                          {/* http://localhost:1234/my-vue-router-project/index.html#/about */}
                          {/* <li
                            id="mynav1"
                            //   class={window.location.hash == "#/" ? "active" : ""}
                          >
                            <a
                                href="./my-react-router-test/index.html"
                            //   href={myreacthtml}
                              class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                            >
                              基于REACT的主页
                            </a>
                          </li> */}

                          {/* <li>
                            <a
                              class="nav-item"
                                href="./my-react-router-test/index.html#/decoder"
                            //   href={myreacthtml + "#/decoder"}
                              class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                            >
                              JSfuck-and-hieroglyphy-Decoder-and-ENCODER
                            </a>
                          </li> */}
                          <li>
                            <Link
                              to="/decoder"
                              class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                            >
                              JSfuck-and-hieroglyphy-Decoder
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/jsfuck"
                              class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                            >
                              JSfuck-ENCODER
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/hieroglyphy"
                              class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                            >
                              hieroglyphy-ENCODER
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>

                  <div class="container" id="my主体">
                    <Suspense
                      fallback={
                        <div>
                          <h1>loading</h1>
                        </div>
                      }
                    >
                      <Switch>
                        <Route exact path="/" component={home} />
                        <Route path="/picalc" component={picalc} />
                        <Route
                          path="/点击链接不跳转修改当前的网页地址动态加载网页内容不刷新"
                          component={
                            点击链接不跳转修改当前的网页地址动态加载网页内容不刷新
                          }
                        />
                        <Route
                          path="/IMPORTCJSAMDUMD动态异步加载"
                          component={IMPORTCJSAMDUMD动态异步加载}
                        />
                        <Route
                          path="/react-home"
                          component={lazy(() =>
                            import(
                              "./my-react-router-test/react-module-home.js"
                            )
                          )}
                        />
                        <Route
                          path="/react-rssreader"
                          component={lazy(() =>
                            import(
                              "./my-react-router-test/react-module-rssreader.js"
                            )
                          )}
                        />
                        <Route
                          path="/react-about"
                          component={lazy(() =>
                            import(
                              "./my-react-router-test/react-module-about.js"
                            )
                          )}
                        />
                        <Route
                          path="/decoder"
                          component={lazy(() =>
                            import(
                              "./my-react-router-test/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-decoder"
                            )
                          )}
                        />
                        <Route
                          path="/jsfuck"
                          component={lazy(() =>
                            import(
                              "./my-react-router-test/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-jsfuck"
                            )
                          )}
                        />
                        <Route
                          path="/hieroglyphy"
                          component={lazy(() =>
                            import(
                              "./my-react-router-test/JSfuck-and-hieroglyphy-Decoder-and-ENCODER/react-module-hieroglyphy.js"
                            )
                          )}
                        />

                        <Route exact path="*" component={home} />
                      </Switch>
                    </Suspense>
                  </div>
                </div>
              </HashRouter>
            );
          }
          componentWillMount() {}
          componentDidMount() {
            $("#my主体").css("padding-top", $("#my导航栏").height());

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
      }
    });
  })();
});
