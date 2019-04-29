
// eslint-disable-next-line
/* eslint-disable */
// import 'babel-polyfill';
import "@babel/polyfill";
import loadable from '@loadable/component/dist/loadable.es.js'

// import React from 'react'
// import { render } from 'react-dom'
// import {Link, Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
//使用cdn加载react依赖包       
{/* <script   src="https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js"></script> */ }
// <script   src="https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js"></script>
// <script   src="https://cdn.staticfile.org/react-router-dom/5.0.0/react-router-dom.min.js"></script>
//React
//const React=React
const { render } = ReactDOM
// import { Link } from 'react-router-dom';
const { Link, Switch, BrowserRouter, Route, Redirect } = ReactRouterDOM

//import { Router, Route } from 'react-router-dom';
//import { Router, Route } from 'react-router'
//import { Router, Route } from 'react-router-dom';
//import { Router, Route } from 'react-router'

// import App from './modules/App'
// import about from './modules/about'
// import App from './modules/App'
// import about from './modules/about'
//import {Component} from 'react'
// console.log(window.location.hash)
// console.log(window.location.pathname)
//import { Router, Route } from 'react-router-dom';
//import { Router, Route } from 'react-router'

// import App from './modules/App'
// import about from './modules/about'

const App = loadable(() => import('./modules/App'))
// 包加载方
const about = loadable(() => import('./modules/about'))
// const Apphome = loadable(() => import('./apphome'))

window.onload = () => {
    global.myisactive1 = true

    global.myisactive2 = true
    if (window.location.hash == "#/") {
        global.myisactive1 = true
        global.myisactive2 = false

    } else if (window.location.hash == "#/about") {
        global.myisactive2 = true
        global.myisactive1 = false
    } else {
        global.myisactive1 = true
        global.myisactive2 = false
    }
    // var App,about;
    // App=  () =>import ('./modules/App')
    // about= () => import ( './modules/about')


    class Apphome extends React.Component {

        // construtor(props) {
        //     super(props);
        // }
        // updatemyfather() {
        //     console.log(" updatemyfather")
        // }
        render() {
            return (
                <BrowserRouter basename={window.location.pathname + "#/"} forceRefresh={false} keyLength={12}     >
                    <div>

                        <nav class="navbar navbar-default" role="navigation"  >
                            <div class="container-fluid">
                                <div class="navbar-header">

                                    <a class="navbar-brand ">masx200的github</a>
                                </div>
                                <div>
                                    <ul class="nav navbar-nav">
                                        <li id="mynav1" class={global.myisactive1 ? "active" : ""} onClick={handleClick1}>

                                            <Link to="/">基于REACT的主页</Link>
                                        </li>

                                        <li id="mynav2" class={global.myisactive2 ? "active" : ""} onClick={handleClick2}>

                                            <Link to="/about">关于</Link>
                                        </li>

                                        <li>
                                            <a href="../index.html">传统网页</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>


                        <Switch>
                            {/* <Route exact path="/" component={App} />
                        <Route path="/about" component={about} /> */}
                            <Route exact path="/" component={App}
                            // onItemClick={this. updatemyfather}
                            />
                            <Route path="/about" component={about} />
                            <Redirect from='*' to='/' />
                        </Switch>
                    </div>
                </BrowserRouter>
            )
        }
        componentWillMount() {
            // console.log('Component WILL MOUNT!')
        }
        componentDidMount() {
            //  console.log('Component DID MOUNT!')
        }
        componentWillReceiveProps(newProps) {
            //   console.log('Component WILL RECEIVE PROPS!')
        }
        shouldComponentUpdate(newProps, newState) {
              return true;
        }
        componentWillUpdate(nextProps, nextState) {
            //   console.log('Component WILL UPDATE!');
        }
        componentDidUpdate(prevProps, prevState) {
            //   console.log('Component DID UPDATE!')
        }
        componentWillUnmount() {
            //    console.log('Component WILL UNMOUNT!')
        }
    }
    // const Apphome = () => 
    // (
    //     <BrowserRouter basename={window.location.pathname + "#/"} forceRefresh={false} keyLength={12}     >
    //         <div>

    //             <nav class="navbar navbar-default" role="navigation"  >
    //                 <div class="container-fluid">
    //                     <div class="navbar-header">

    //                         <a class="navbar-brand ">masx200的github</a>
    //                     </div>
    //                     <div>
    //                         <ul class="nav navbar-nav">
    //                             <li class={global.myisactive1 ? "active" : ""} onClick={handleClick1}>

    //                                 <Link to="/">基于REACT的主页</Link>
    //                             </li>

    //                             <li class={global.myisactive2 ? "active" : ""} onClick={handleClick2}>

    //                                 <Link to="/about">关于</Link>
    //                             </li>

    //                             <li>
    //                                 <a href="../index.html">传统网页</a>
    //                             </li>

    //                         </ul>
    //                     </div>
    //                 </div>
    //             </nav>


    //             <Switch>
    //                 {/* <Route exact path="/" component={App} />
    //                 <Route path="/about" component={about} /> */}
    //                 <Route exact path="/" component={App} />
    //                 <Route path="/about" component={about} />
    //                 <Redirect from='*' to='/' />
    //             </Switch>
    //         </div>
    //     </BrowserRouter>
    // )
    function handleClick1() {
        // console.log(this.props.match.params)
        // console.log(window.location.hash)
        global.myisactive1 = true
        global.myisactive2 = false
        render((<Apphome />), document.getElementById('root'))
        // render((
        //     <Apphome />
        // ), document.getElementById('root'))
        // this.forceUpdate(); 
        // Apphome.forceUpdate(); 
    }
    function handleClick2() {
        // console.log(this.props.match.params)
        // console.log(window.location.hash)
        global.myisactive2 = true
        global.myisactive1 = false

        render((<Apphome />), document.getElementById('root'))
        // Apphome.forceUpdate(); 
        // render((
        //     <Apphome />
        // ), document.getElementById('root'))
        // this.forceUpdate(); 
    }
global.handleClick1=handleClick1
    render((<Apphome />), document.getElementById('root'))
    global.handleClick2=handleClick2
    // global.apphome=Apphome
    // console.log( global.apphome.updatemyfather)
}