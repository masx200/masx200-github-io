"use strict";
// @ts-ignore
import mui from "@/assetsjs/mui.精简.button";
// @ts-ignore
// import tanchu弹出消息通用 from "@/utils/my弹出消息通用.js";
function tanchu弹出消息提示() {
    tanchu弹出消息通用("success");
}
// @ts-ignore
import tanchu弹出消息通用 from "../../utils/my弹出消息通用.ts";
/*
worker-loader
查看原文|查看仓库|编辑此页
This loader registers the script as Web Worker

安装
npm i -D worker-loader
用法
##

App.js

import Worker from 'worker-loader!./Worker.js';


import Worker from './file.worker.js';

const worker = new Worker();

worker.postMessage({ a: 1 });
worker.onmessage = function (event) {};

worker.addEventListener("message", function (event) {}); */
import bigInt from "big-integer/BigInteger.js";

// const bigintworker = "./service-worker-mythread1-bigint.worker.js";
// @ts-ignore
import bigintworker from "./service-worker-mythread1-bigint.worker.js";

// import IMPORTCJSAMDUMD from "../IMPORTCJSAMDUMD";
// import("../IMPORTCJSAMDUMD").then(IMPORTCJSAMDUMD => {
// (() => {
//   $(window).one("load",
// 自动开启严格模式
/* 应该再卸载组件时关闭所有worker */
// ("use strict");
// import mui from "../mui.min.js";
import React from "react";
// const IMPORTCJSAMDUMD = window.IMPORTCJSAMDUMD;
// var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
var { useState, useEffect, useRef, useCallback } = React;
function useBindtext(默认值) {
    var [inputcode, setinputcode] = useState(默认值);
    const inputonchange = useCallback(
        (e) => {
            setinputcode(e.target.value);
        },
        [inputcode]
    );
    return [inputcode, setinputcode, inputonchange];
}
// @ts-ignore
var myworker = Array(16).fill();
function 关闭所有worker() {
    // @ts-ignore
    myworker.forEach(function (currentValue, index) {
        /* 可能worker的数量没有满,undefined的terminate函数不存在 */
        try {
            myworker[index].terminate();
            /* 如果没有设为undefined,则下次再使用时不会开启新线程 */
            myworker[index] = undefined;
        } catch (error) {
            /*  */
        }
    });
}
export default function bigcom() {
    const btnele = useRef();
    const outtext1 = useRef();
    const outtext2 = useRef();
    useEffect(() => {
        lashentextarea(outtext1.current);
        lashentextarea(outtext2.current);
        // onmount();
        return () => {
            关闭所有worker();
        };
    }, []);
    var p: bigInt.BigInteger,
        piwei: string | number,
        strt: number,
        finishflag: any[],
        x = 0,
        threadgeshu: string | number,
        testname: string;

    function lashentextarea(eles) {
        // console.log(eles.outerHTML);
        requestAnimationFrame(function () {
            //   for (var value of eles) {
            const value = eles;
            var myptext = value;
            //  document.getElementById(value);

            var el = myptext;
            // textarea.scrollHeight = 60
            // textarea.style.height = "60px"
            // makeExpandingArea(textarea);
            if (Math.abs(parseInt(el.style.height) - el.scrollHeight) > 5) {
                // console.log(parseInt(el.style.height), el.scrollHeight);
                myptext.style.height = myptext.scrollHeight + 2 + "px";
                console.log("拉伸文本框", [
                    parseInt(el.style.height),
                    el.scrollHeight,
                    myptext.outerHTML,
                ]);
            }
            //   }
        });
    }
    const [inputtext1, setinputtext1, onchangeinputtext1] = useBindtext(
        navigator.hardwareConcurrency || 6
    );
    const [inputtext2, setinputtext2, onchangeinputtext2] = useBindtext(6);
    const [outputtext1, setoutputtext1old, onchangeoutputtext1] = useBindtext(
        "UserAgent: " +
            navigator.userAgent +
            "\n" +
            (typeof BigInt === "function"
                ? "你的浏览器能够支持原生BigInt!"
                : "你的浏览器无法支持原生BigInt!") +
            "\n开始圆周率多线程测试\n"
    );

    const [outputtext2, setoutputtext2old, onchangeoutputtext2] =
        useBindtext("");

    function setoutputtext1(t) {
        setoutputtext1old(t);
        lashentextarea(outtext1.current);
    }
    function setoutputtext2(t) {
        lashentextarea(outtext2.current);
        setoutputtext2old(t);
    }

    async function mystart(btnele) {
        // const { default: bigInt } = await IMPORTCJSAMDUMD(
        //   "https://cdn.staticfile.org/big-integer/1.6.43/BigInteger.min.js",
        //   "big-integer"
        // );
        mui(btnele).button("loading");
        // @ts-ignore
        bigInt.abs = (n) => bigInt(n).abs();
        // @ts-ignore
        bigInt.mul = (n, m) => bigInt(n).multiply(m);
        // @ts-ignore
        bigInt.div = (n, m) => bigInt(n).divide(m);
        // @ts-ignore
        bigInt.add = (n, m) => bigInt(n).add(m);
        // @ts-ignore
        bigInt().__proto__.cmp = bigInt().__proto__.compare;
        // @ts-ignore
        bigInt().__proto__.div = bigInt().__proto__.divide;
        // @ts-ignore
        bigInt().__proto__.mul = bigInt().__proto__.multiply;
        // @ts-ignore
        bigInt("90071992547409920").__proto__.cmp = bigInt(
            "90071992547409920"
            // @ts-ignore
        ).__proto__.compare;
        // @ts-ignore
        bigInt("90071992547409920").__proto__.div = bigInt(
            "90071992547409920"
            // @ts-ignore
        ).__proto__.divide;
        // @ts-ignore
        bigInt("90071992547409920").__proto__.mul = bigInt(
            "90071992547409920"
            // @ts-ignore
        ).__proto__.multiply;

        // var myinput1 = document.getElementById("thread-big");
        // var myinput2 = document.getElementById("pichangwei-big");
        if (
            inputtext1 >= 1 &&
            inputtext1 <= 16 &&
            inputtext2 >= 1 &&
            inputtext2 <= 100
        ) {
            piwei = 1000 * Math.floor(inputtext2);
            //   let inputtext2f = Math.floor(inputtext2);
            let inputtext1f = Math.floor(inputtext1);
            threadgeshu = inputtext1f;
            //   inputtext1 = threadgeshu;
            testname =
                "圆周率计算多线程" +
                "-" +
                "线程数为" +
                threadgeshu +
                "-位数为" +
                piwei;
            //   myshurukuangneirong =
            //     myshurukuangneirong + "线程数为" + threadgeshu + " ";
            //   myptext.value = myshurukuangneirong;
            //   eventdata = "圆周率计算" + piwei + "位 " + "计算圆周率中......" + "  \n";
            //   // Decimal.precision = piwei
            //   myshurukuangneirong += String(eventdata);
            //   myptext.value = myshurukuangneirong;
            //   console.log(outputtext1);
            /* react hooks 的state 刷新太慢? */
            setoutputtext1(
                // outputtext1 +
                // @ts-ignore
                outtext1.current.value +
                    testname +
                    "线程数为" +
                    threadgeshu +
                    " " +
                    "圆周率计算" +
                    piwei +
                    "位 " +
                    "计算圆周率中......" +
                    "  \n"
            );
            //   debugger;
            //   console.log(outputtext1);
            console.log(testname);
            console.time(testname);
            strt = new Date().getTime();
            // @ts-ignore
            p = new bigInt(0);
            //   myworker = [];
            //   myworker.length = threadgeshu;
            finishflag = [];
            finishflag.length = threadgeshu;
            //   if (typeof worker1 == "undefined") {
            //     worker1 = new Worker("service-worker-mythread1-bigint.js");
            //   }
            // worker1=Array( threadgeshu)
            //   for (var i = 0, len = threadgeshu; i < len; i++) {
            //     myworker[i] = worker1;
            //   }
            //   var worker1 = Array(threadgeshu);
            //   myworker =Array(threadgeshu);
            //   for(var key=0;key< threadgeshu; key++){
            //       myworker[key]=undefined
            //   }
            //   myworker.length = threadgeshu;
            /* myworker.forEach(function(currentValue, index, arr) { */
            /* 等待所有线程完成之后再下一步 */
            var 所有输出promise = await Promise.all(
                // @ts-ignore
                myworker
                    .slice(0, threadgeshu)
                    .map(function (currentValue, index) {
                        const arr = myworker;
                        /* arr和myworker不是同一个对象了! */
                        //   console.log(arr === myworker);//false
                        return new Promise<void>((rs, rj) => {
                            /* 不要开启多余的线程 */
                            if (index >= threadgeshu) {
                                rs();
                                return;
                            }

                            // if (!arr[index]) {
                            arr[index] =
                                arr[index] ||
                                //   new Worker("./service-worker-mythread1-bigint.worker.js");

                                bigintworker();
                            //   new Worker("service-worker-mythread1-bigint.js");
                            //   &&
                            //     console.log(
                            //       "创建了新webworker线程",
                            //       "service-worker-mythread1-bigint.js" + "-" + index
                            //     ));
                            //   ,{name:"service-worker-mythread1-bigint.js"+"-"+index}

                            // }
                            // arr[index].name ="service-worker-mythread1-bigint.js"+ "-" + index;
                            // console.log(arr[index].name )
                            // arr[index] = new Worker("service-worker-mythread1-bigint.js");
                            arr[index].postMessage([piwei, threadgeshu, index]);
                            arr[index].onmessage = function (event) {
                                console.log(
                                    "主线程从副线程" +
                                        (index + 1) +
                                        "接收" +
                                        "event.data\n",
                                    event.data
                                );
                                // console.log(
                                //   "第一个参数",
                                //   event.data[0],
                                //   "\n第二个参数",
                                //   event.data[1]
                                // );
                                // @ts-ignore
                                var p1 = new bigInt(event.data[0]);
                                // @ts-ignore
                                p = bigInt.add(p, p1);
                                x = Math.max(x, parseInt(event.data[1]));
                                finishflag[index] = 1;
                                //   threadfinish(btnele);
                                //   currentValue.terminate()
                                rs(event.data);
                            };
                            arr[index].onerror = (e) => {
                                // for (var key in e) {
                                //     console.error(key, e[key])
                                // }
                                // console.error(e.message)
                                //   console.error("Error:", e.message, e.filename);
                                //   arr[index].terminate();
                                //   $("#tp2-big").val("Error:" + e.message+" "+e.filename);
                                //   throw e;
                                rj(new Error(e.message + " " + e.filename));
                            };
                        });
                        // console.log(arr[index]);
                        // console.log(arr);
                    })
            );
            console.log("所有输出promise的返回值", 所有输出promise);
            /* 所有线程已经完成,输出结果 */
            requestAnimationFrame(() => {
                (function (btnele) {
                    // debugger;
                    console.timeEnd(testname);
                    mui(btnele).button("reset");
                    var endt = new Date().getTime();
                    var durt = (endt - strt) / 1000;
                    const eventdata =
                        "计算完成,用时" +
                        durt +
                        "秒第" +
                        x +
                        "次 " +
                        "圆周率" +
                        piwei +
                        "位\n";
                    setoutputtext2(
                        "圆周率" +
                            piwei +
                            "位" +
                            p.toString()[0] +
                            "." +
                            p.toString().slice(1)
                    );
                    //   console.log(outputtext1 + eventdata);
                    /* UserAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36
你的浏览器能够支持原生BigInt!
开始圆周率多线程测试
计算完成,用时0.533秒第1334次 圆周率4000位 */
                    /* UserAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36
你的浏览器能够支持原生BigInt!
开始圆周率多线程测试
圆周率计算多线程-线程数为6-位数为4000线程数为6 圆周率计算4000位 计算圆周率中......  
计算完成,用时0.533秒第1334次 圆周率4000位 */
                    //   console.log(outtext1.current.value + eventdata);
                    //   console.log(outputtext1);
                    /* 改变状态是异步的! 两个输出一样 */
                    //   debugger;
                    /* 等到下次刷新组件时,获取到的state才会改变 */
                    // @ts-ignore
                    setoutputtext1(outtext1.current.value + eventdata);
                    //   console.log(outputtext1);
                    // debugger;
                    tanchu弹出消息提示();
                })(btnele);
            });
        } else {
            alert("输入错误");
            /* 输入错误之后要重置 开始按钮 */
            setinputtext2(4); //inputtext2 = 4;
            setinputtext1(8); //   inputtext1 = 8;

            mui(btnele).button("reset");
        }
    }
    return (
        <div className="container">
            <h3>BigInteger.js</h3>
            <p>
                BigInteger.js是Javascript的任意长度整数库，允许对无限大小的整数进行算术运算，尽管存在内存和时间限制。
                更新（2018年12月2日）：BigInt被添加为JavaScript的本机功能。
                此库现在可用作polyfill：如果环境支持本机BigInt，则此库充当本机实现的瘦包装器。
                建议升级浏览器到chrome68以上,才可支持原生BigInt.
            </p>
            <h5>
                <b>如果浏览器原生支持BigInt,则运行速度有巨大提升!</b>
            </h5>

            <hr />

            <div>
                <p>
                    <span>
                        选择线程个数:数量 ( 1 到 16 之间):
                        <input
                            value={inputtext1}
                            onChange={onchangeinputtext1}
                            className="form-control"
                            id="thread-big"
                            type="number"
                            name="quantity"
                            min="1"
                            max="12"
                        />
                    </span>
                </p>
                <p>
                    <span>
                        选择圆周率位数:数量1000* ( 1 到 100 之间):
                        <input
                            value={inputtext2}
                            onChange={onchangeinputtext2}
                            className="form-control"
                            id="pichangwei-big"
                            type="number"
                            name="quantity"
                            min="1"
                            max="100"
                        />
                    </span>
                </p>
                <button
                    ref={btnele}
                    data-loading-icon="mui-spinner mui-spinner-custom"
                    className="mui-btn mui-btn-primary btn btn-info  btn btn-outline-primary mui-btn mui-btn-outline-primary"
                    id="start-big"
                    onClick={(e) => {
                        // console.log(e.target);
                        // mystart(btnele.current);
                        mystart(e.target);
                    }}
                    type="button"
                    style={{ width: "100%" }}
                >
                    开始
                </button>
            </div>
            <br />
            <div>
                <textarea
                    ref={outtext1}
                    value={outputtext1}
                    onChange={(e) => {
                        // console.log(e);
                        onchangeoutputtext1(e);
                        lashentextarea(e.target);
                    }}
                    className="form-control"
                    // @ts-ignore
                    cols="100"
                    // @ts-ignore
                    rows="100"
                    style={{
                        width: "100%",
                        height: "100px",
                        margin: "0 0",
                        // @ts-ignore
                        textAlign: "center",
                    }}
                    width="100%"
                    id="tp-big"
                />
                <br />
                {/* <button
            class=" btn btn-outline-primary"
            type="button"
            data-toggle="collapse"
            data-target="#collapsiblecontainer2"
          > */}
                <details open>
                    <summary className=" btn btn-outline-primary mui-btn mui-btn-outline-primary">
                        展开收起圆周率结果
                    </summary>
                    {/* </button> */}
                    <br />
                    <br />
                    <div id="collapsiblecontainer2" className="collapse show">
                        <textarea
                            ref={outtext2}
                            value={outputtext2}
                            //   onChange={onchangeoutputtext2}
                            onChange={(e) => {
                                onchangeoutputtext2(e);
                                lashentextarea(e.target);
                            }}
                            className="form-control"
                            // @ts-ignore
                            cols="100"
                            // @ts-ignore
                            rows="100"
                            style={{
                                width: "100%",
                                height: "100px",
                                margin: "0 0",
                                // @ts-ignore
                                textAlign: "center",
                            }}
                            width="100%"
                            id="tp2-big"
                        />
                    </div>
                </details>
            </div>
        </div>
    );
}
