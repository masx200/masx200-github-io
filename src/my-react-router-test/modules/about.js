// eslint-disable-next-line
// eslint-disable-next-line
/* eslint-disable */
// import React from 'react';
//使用cdn加载react依赖包   

import logo from './logo.svg';
import './App.css';
// const { render } = ReactDOM
// function about() {
    class about extends React.Component {
        componentWillMount() {
            // console.log('Component about WILL MOUNT!')
        }
        componentDidMount() {
            $("#mynav2").click()
            //  console.log('Component about DID MOUNT!')
            global.handleClick2()
            //  global.myisactive2=true,global.  myisactive1=false
             
        //  global.myisactive1?$("#mynav1").addClass("active"):$("#mynav1").removeClass("active")
        //  global.myisactive2?$("#mynav2").addClass("active"):$("#mynav2").removeClass("active")
            //  render((            <Apphome />        ), document.getElementById('root'))
        }
        componentWillReceiveProps(newProps) {
            //   console.log('Component about  WILL RECEIVE PROPS!')
        }
        shouldComponentUpdate(newProps, newState) {
              return true;
        }
        componentWillUpdate(nextProps, nextState) {
            //   console.log('Component about  WILL UPDATE!');
        }
        componentDidUpdate(prevProps, prevState) {
            //   console.log('Component about  DID UPDATE!')
        }
        componentWillUnmount() {
            //    console.log('Component about  WILL UNMOUNT!')
        }
        render() {
    // global.myisactive2=true,global.  myisactive1=false
    return (
        <div className="App">
            <header className="App-header">
                <h1>react-router测试</h1>
                <h2>现在是 {new Date().toLocaleTimeString()}.</h2>

                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
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
                    </header>
                </div>
            </header>

        </div>
    );}
}

export default about;
