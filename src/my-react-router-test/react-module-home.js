// React=IMPORTCJSAMDUMD.REQUIREPACKAGE("react")
// React=window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react")
// console.log(window.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE.react)
var  React=window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react")
export default class home extends React.Component {
  componentWillMount() {}
  componentDidMount() {
    // window.location.hash = "#/";
    // refreshall();
    document.title = "React router App-" + "home";
  }
  componentWillReceiveProps(newProps) {}
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}
  render() {
    return (
      <div className="App">
        <header className="">
          <div class="container">
            <div class="jumbotron">
              <h1>欢迎登陆页面！</h1>
              <p>
                <a target="_blank" href="https://weibo.com/2174458781?">
                  一生忽而得一夏当司掌好年华的微博
                </a>
              </p>
              <p>
                <a target="_blank" href="https://github.com/masx200">
                  masx200的github仓库
                </a>
              </p>
            </div>
          </div>
          <p>
            <a
              target="_blank"
              href="https://zh-hans.reactjs.org/tutorial/tutorial.html"
            >
              入门教程: 认识 React – React
            </a>
          </p>
          <p>
            <a
              target="_blank"
              href="https://zh-hans.reactjs.org/docs/getting-started.html"
            >
              开始 – React文档
            </a>
          </p>
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
function refreshall() {
  $("#allnavbar").click();
}
