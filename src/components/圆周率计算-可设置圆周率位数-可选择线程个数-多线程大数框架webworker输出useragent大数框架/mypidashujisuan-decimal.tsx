"use strict";
// import tanchu弹出消息通用 from "@/utils/my弹出消息通用.js";
// @ts-ignore
// @ts-ignore
import mui from "@/assetsjs/mui.精简.button";
// @ts-ignore
import Decimal from "decimal.js";
// import mui from "../mui.min.js";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import tanchu弹出消息通用 from "../../utils/my弹出消息通用";
import { useBindtext } from "../../huami/useBindtext";
// @ts-ignore
import decimalworker from "./service-worker-mythread1-decimal.worker.js";
function tanchu弹出消息提示() {
    tanchu弹出消息通用("success");
}

var myworker = Array(16).fill(undefined);

//   );
// })();
function 关闭所有worker() {
    myworker.forEach(function (currentValue, index) {
        /* 可能worker的数量没有满,undefined的terminate函数不存在 */
        try {
            currentValue.terminate();
            /* 如果没有设为undefined,则下次再使用时不会开启新线程 */
            myworker[index] = undefined;
        } catch (error) {
            /*  */
        }
    });
}
export default function decimalcom() {
    const btnele = useRef<HTMLElement>();
    const outtext1 = useRef<HTMLElement>();
    const outtext2 = useRef<HTMLElement>();
    useEffect(() => {
        outtext1.current && lashentextarea(outtext1.current);
        outtext2.current && lashentextarea(outtext2.current);
        // onmount();
        return () => {
            关闭所有worker();
        };
    }, []);

    var p: Decimal.Value,
        piwei: string | number,
        strt: number,
        finishflag,
        x = 0,
        threadgeshu: number,
        testname: string | undefined;
    threadgeshu = 6;
    function lashentextarea(eles: HTMLElement) {
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
            (typeof Decimal === "function"
                ? "你的浏览器能够支持原生Decimal!"
                : "你的浏览器无法支持原生Decimal!") +
            "\n开始圆周率多线程测试\n"
    );

    const [outputtext2, setoutputtext2old, onchangeoutputtext2] =
        useBindtext("");

    function setoutputtext1(t: string) {
        setoutputtext1old(t);
        outtext1.current && lashentextarea(outtext1.current);
    }
    function setoutputtext2(t: string) {
        outtext2.current && lashentextarea(outtext2.current);
        setoutputtext2old(t);
    }
    async function mystart(btnele: EventTarget) {
        // const { default: Decimal } = await IMPORTCJSAMDUMD(
        //   "https://cdn.staticfile.org/decimal.js/10.2.0/decimal.min.js",
        //   "decimal"
        // );
        mui(btnele).button("loading");
        // Decimal.abs = n => Decimal(n).abs();
        // Decimal.mul = (n, m) => Decimal(n).multiply(m);
        // Decimal.div = (n, m) => Decimal(n).divide(m);
        // Decimal.add = (n, m) => Decimal(n).add(m);
        // Decimal().__proto__.cmp = Decimal().__proto__.compare;
        // Decimal().__proto__.div = Decimal().__proto__.divide;
        // Decimal().__proto__.mul = Decimal().__proto__.multiply;
        // Decimal("90071992547409920").__proto__.cmp = Decimal(
        //   "90071992547409920"
        // ).__proto__.compare;
        // Decimal("90071992547409920").__proto__.div = Decimal(
        //   "90071992547409920"
        // ).__proto__.divide;
        // Decimal("90071992547409920").__proto__.mul = Decimal(
        //   "90071992547409920"
        // ).__proto__.multiply;

        // var myinput1 = document.getElementById("thread-big");
        // var myinput2 = document.getElementById("pichangwei-big");
        if (
            inputtext1 >= 1 &&
            inputtext1 <= 16 &&
            inputtext2 >= 1 &&
            inputtext2 <= 100
        ) {
            piwei = 1000 * Math.floor(Number(inputtext2));
            //   let inputtext2f = Math.floor(inputtext2);
            let inputtext1f = Math.floor(Number(inputtext1));
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
                //@ts-ignore
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
            Decimal.set({ precision: piwei });
            //   debugger;
            //   console.log(outputtext1);
            console.log(testname);
            console.time(testname);
            strt = new Date().getTime();
            p = new Decimal(0);
            //   myworker = [];
            //   myworker.length = threadgeshu;
            finishflag = [];
            finishflag.length = threadgeshu;
            //   if (typeof worker1 == "undefined") {
            //     worker1 = new Worker("service-worker-mythread1-Decimal.js");
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
            await Promise.all(
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
                                //   new Worker("./service-worker-mythread1-decimal.worker.js");

                                decimalworker();
                            //   new Worker("service-worker-mythread1-decimal.js");
                            //   &&
                            //     console.log(
                            //       "创建了新webworker线程",
                            //       "service-worker-mythread1-Decimal.js" + "-" + index
                            //     ));
                            //   ,{name:"service-worker-mythread1-Decimal.js"+"-"+index}

                            // }
                            // arr[index].name ="service-worker-mythread1-Decimal.js"+ "-" + index;
                            // console.log(arr[index].name )
                            // arr[index] = new Worker("service-worker-mythread1-Decimal.js");
                            arr[index].postMessage([piwei, threadgeshu, index]);
                            arr[index].onmessage = function (event: {
                                data: string[];
                            }) {
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
                                var p1 = new Decimal(event.data[0]);
                                p = Decimal.add(p, p1);
                                x = Math.max(x, parseInt(event.data[1]));
                                finishflag[index] = 1;
                                //   threadfinish(btnele);
                                //   currentValue.terminate()
                                rs();
                            };
                            arr[index].onerror = (e: {
                                message: string;
                                filename: string;
                            }) => {
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
            // console.log("所有输出promise的返回值", 所有输出promise);
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
                            //   "." +
                            p.toString().slice(1)
                    );
                    //   console.log(outputtext1 + eventdata);
                    /* UserAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36
你的浏览器能够支持原生Decimal!
开始圆周率多线程测试
计算完成,用时0.533秒第1334次 圆周率4000位 */
                    /* UserAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36
你的浏览器能够支持原生Decimal!
开始圆周率多线程测试
圆周率计算多线程-线程数为6-位数为4000线程数为6 圆周率计算4000位 计算圆周率中......  
计算完成,用时0.533秒第1334次 圆周率4000位 */
                    //   console.log(outtext1.current.value + eventdata);
                    //   console.log(outputtext1);
                    /* 改变状态是异步的! 两个输出一样 */
                    //   debugger;
                    /* 等到下次刷新组件时,获取到的state才会改变 */
                    //@ts-ignore
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
            <h3>Decimal.js</h3>
            <p>
                Decimal.js是JavaScript的任意精度Decimal类型。 特征:
                整数和浮点数, 简单但功能齐全的API,
                复制JavaScript的Number.prototype和Math对象的许多方法,
                还处理十六进制，二进制和八进制值,
                比Java的BigDecimal的JavaScript版本更快，更小，也许更容易使用,
                没有依赖, 广泛的平台兼容性：仅使用JavaScript 1.5（ECMAScript
                3）功能。 全面的文档和测试集。
            </p>
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
                    //@ts-ignore
                    ref={btnele}
                    data-loading-icon="mui-spinner mui-spinner-custom"
                    className="mui-btn mui-btn-primary btn btn-info  btn btn-outline-primary mui-btn mui-btn-outline-primary"
                    id="start-big"
                    onClick={(e) => {
                        // console.log(e);
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
                    //@ts-ignore
                    ref={outtext1}
                    value={outputtext1}
                    onChange={(e) => {
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
                            //@ts-ignore
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
