// eslint-disable-next-line
// eslint-disable-next-line
/* eslint-disable */
// import React from 'react';
//使用cdn加载react依赖包   
//import logo from './logo.svg';
import './App.css';
// const { render } = ReactDOM
// function App() {

// console.log(this)
// console.log(global.myisactive1,global.  myisactive2)

// global.myisactive1=true,global.  myisactive2=false
class App extends React.Component {
    componentWillMount() {
        // console.log('Component app WILL MOUNT!')
    }
    componentDidMount() {

        global.handleClick1()
        $("#mynav1").click()
        //  console.log('Component app DID MOUNT!')
        // $("#mynav1").click()
        //  global.myisactive1=true,global.  myisactive2=false


        //  global.myisactive1?$("#mynav1").addClass("active"):$("#mynav1").removeClass("active")
        //  global.myisactive2?$("#mynav2").addClass("active"):$("#mynav2").removeClass("active")
        //  console.log(Apphome)
                //   console.log(this.props)
        //  console.log(this.props.props)
        //  console.log(this.props.props.props)
        //  console.log(this.props.props.props.props)
        //  console.log(this.props.props.props.props.props)
        //  console.log(this.props.onItemClick)
        //  console.log(this.props.props.onItemClick)
        //  console.log(this.props.props.props.onItemClick)
        //  console.log(this.props.props.props.props.onItemClick)
        //  console.log(this.props.props.props.props.props.onItemClick)
        //  this.props.onItemClick()
        //  render((            <Apphome />        ), document.getElementById('root'))
    }
    componentWillReceiveProps(newProps) {
        //   console.log('Component app WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
          return true;
    }
    componentWillUpdate(nextProps, nextState) {
        //   console.log('Component app WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        //   console.log('Component app DID UPDATE!')
    }
    componentWillUnmount() {
        //    console.log('Component app WILL UNMOUNT!')
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
    
                    <div class="container">
                        <div class="jumbotron">
                            <h1>欢迎登陆页面！</h1>
                            <p><a href="https://weibo.com/2174458781?/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1">一生忽而得一夏当司掌好年华的微博_微博
                        </a></p>
                            <p><a href="https://github.com/masx200">masx200的github主页
                            </a></p>
                        </div>
                    </div>
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
// App.componentDidMount=()=> {
//     global.myisactive1=true,global.  myisactive2=false
// console.log("app-componentDidMount")
// }
// console.log(App.toString())
export default App;
