import $ from "jquery";
import 可变路径的rssreader链接 from "./可变路径的rssreader链接";
import 路由列表 from "./router-react-路由列表";
import React, { useRef } from "react";
var { Suspense } = React;
var { useEffect } = React;
import { Link, HashRouter } from "react-router-dom";
export default React.memo(Apphome);
function Apphome() {
  // console.log(arguments);
  function shouqi收起折叠的导航栏菜单() {
    $(example_navbar_collapse.current).hide(); //$(example_navbar_collapse.current).removeClass("show");
    $("#my主体").css("padding-top", $("#my导航栏").height());
    // refreshall();
    scrollTo(0, 0);
  }
  useEffect(() => {
    $("#my主体").css("padding-top", $("#my导航栏").height());
    document.title = "masx200的github主页";
  }, []);
  const example_navbar_collapse = useRef();
  return (
    <HashRouter>
      <div>
        <div className="container-fluid fixed-top" id="my导航栏">
          <nav
            className="navbar navbar-default navbar navbar-expand-sm bg-light navbar-light"
            role="navigation"
          >
            <div>
              <Link
                className="navbar-brand mui-btn mui-btn-primary mui-btn-outlined"
                to="/"
              >
                masx200的
                <hr
                  id="hidewidthless500"
                  // style={{ display: innerWidth > 500 ? "block" : "none" }}
                  /* 改为css媒体查询 */
                />
                github主页
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                // data-target=example_navbar_collapse.current
                onClick={() => {
                  $(example_navbar_collapse.current).toggle();
                }}
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <div
              ref={example_navbar_collapse}
              className="collapse navbar-collapse"
              id="example-navbar-collapse"
            >
              <ul
                className="nav navbar-nav"
                id="allnavbar"
                onClick={() => {
                  shouqi收起折叠的导航栏菜单();
                }}
              >
                <li
                  id="mynav1"
                  // className={window.location.hash == "#/" ? "active" : ""}
                >
                  <Link
                    to="/react-home"
                    className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                  >
                    基于REACT的主页
                  </Link>
                </li>
                <li
                // className={
                //   window.location.hash == "#/rssreader"
                //     ? "active"
                //     : ""
                // }
                >
                  <可变路径的rssreader链接 />
                </li>
                <li
                  id="mynav2"
                  // className={
                  //   window.location.hash == "#/about" ? "active" : ""
                  // }
                >
                  <Link
                    to="/react-about"
                    className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                  >
                    关于REACT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/picalc"
                    className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                  >
                    圆周率计算多线程
                  </Link>
                </li>
                <li>
                  <Link
                    to="/react-huami"
                    // href="./my-vue-router-project/index.html#/huami"
                    className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                  >
                    花密网页版
                  </Link>
                </li>
                <li>
                  <Link
                    to="/decoder"
                    className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                  >
                    JSfuck-and-hieroglyphy-Decoder
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jsfuck"
                    className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                  >
                    JSfuck-ENCODER
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hieroglyphy"
                    className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                  >
                    hieroglyphy-ENCODER
                  </Link>
                </li>
                <li>
                  <Link
                    to="/webpack-react-vue-spa-awesome-config"
                    // href="./my-vue-router-project/index.html#/huami"
                    className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                  >
                    webpack-react-vue- 极速零配置的单页面 web 应用打包工具
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/点击链接不跳转修改当前的网页地址动态加载网页内容不刷新"
                    className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                  >
                    点击链接不跳转-修改当前的网页地址-动态加载网页内容不刷新
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/IMPORTCJSAMDUMD动态异步加载"
                    className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                  >
                    动态异步加载-commonjs和umd和amd模块库
                  </Link>
                </li>

                {/* http://localhost:1234/my-vue-router-project/index.html#/about */}
                {/* <li
                        id="mynav1"
                        //   className={window.location.hash == "#/" ? "active" : ""}
                      >
                        <a
                            href="./my-react-router-test/index.html"
                        //   href={myreacthtml}
                          className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                        >
                          基于REACT的主页
                        </a>
                      </li> */}

                {/* <li>
                        <a
                          className="nav-item"
                            href="./my-react-router-test/index.html#/decoder"
                        //   href={myreacthtml + "#/decoder"}
                          className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                        >
                          JSfuck-and-hieroglyphy-Decoder-and-ENCODER
                        </a>
                      </li> */}
                <li className="nav-item">
                  <Link
                    to="/react-simple-global-state-store-hook"
                    className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                  >
                    适用于React的极简全局状态管理库
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/excellent-vscode-extensions-for-javascript"
                    className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                  >
                    VScode的优秀扩展推荐
                  </Link>
                </li>
                <li>
                  <a
                    href="./my-vue-router-project/index.html"
                    className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                  >
                    基于vue的主页
                  </a>
                </li>
                <li>
                  <a
                    href="./my-vue-router-project/index.html#/about"
                    className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                  >
                    关于Vue
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    to="/vue-simple-global-state-store-manager"
                    className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                  >
                    适用于Vue的极简全局状态管理库
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="container" id="my主体">
          <Suspense
            fallback={
              <div>
                <h1>loading</h1>
                <span className="mui-spinner mui-spinner-custom" />
                {/*             //loading转圈图标 */}
              </div>
            }
          >
            <路由列表 />
          </Suspense>
        </div>
      </div>
    </HashRouter>
  );
}
