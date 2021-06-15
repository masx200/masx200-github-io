"use strict";
// import tanchu弹出消息通用 from "@/utils/my弹出消息通用.js";
function tanchu弹出消息提示() {
    tanchu弹出消息通用("success");
} //@ts-ignore
import mui from "@/assetsjs/mui.精简.button";
//@ts-ignore
import hieroglyphyworker from "./service-worker-hieroglyphy.worker";
import React from "react";
//@ts-ignore
import tanchu弹出消息通用 from "../../utils/my弹出消息通用.ts";
// const clipboard = new ClipboardJS(".btn");

// clipboard.on("success", function(e) {
//   if (!e.text) {
//     console.log("复制内容空");
//   } else {
//     //   console.info("Action:", e.action);
//     //   console.info("Text:", e.text);
//   }
//   /* 不显示选择的区域形式 */
//   e.clearSelection();
// });

// new ClipboardJS(".btn");
// import hieroglyphyencoderender, {
//   关闭所有worker
// } from "./hieroglyphy-encode-render";
// var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
// import "./JSfuck-and-hieroglyphy-Decoder-and-ENCODER.less"
var { useState, useEffect, useRef, useCallback } = React;
var outputdivid = "clip" + guid();
function guid() {
    return "xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        }
    );
}
var myservice: Worker | undefined;
function 关闭所有worker() {
    try {
        myservice.terminate();
        /* 如果没有设为undefined,则下次再使用时不会开启新线程 */
        myservice = undefined;
    } catch (error) {
        /*  */
    }
}
export default function Hieroglyphy() {
    const [statstext, setstatstext] = useState(`0 chars`);
    const btnencodescript = useRef();
    const btnencodestring = useRef();
    function encodeall(typename: string, btnele: EventTarget) {
        console.time(typename);
        console.log(typename);
        // if (!myservice) {
        myservice = myservice || hieroglyphyworker();
        // new Worker("./service-worker-hieroglyphy.worker.js");
        //   console.log("创建新线程", "service-worker-hieroglyphy.js");
        // }
        mui(btnele).button("loading");
        lastclick = typename;
        // debugger;
        // var output = hieroglyphy.hieroglyphyString(($2("input").value))
        myservice.postMessage([
            inputcode,
            lastclick,
            //   hieroglyphy.toString()
            //   $("#hieroglyphy").attr("src")
        ]);
        // debugger;
        myservice.onmessage = (e) => {
            var output = e.data;
            console.log("主线程从副线程" + "接收" + "event.data\n");
            console.log(output);

            // $2("output").value = output;
            console.timeEnd(typename);
            console.time("requestAnimationFrame");
            //   jQuery("#output").val(output);
            setoutputcode(output);
            setstatstext(output.length + " chars");
            //   $2("stats").innerHTML = output.length + " chars";

            //   $2("output").value = output;
            //   $2("stats").innerHTML = output.length + " chars";

            //   myservice.terminate();
            //   console.log("线程已关闭","service-worker-jsfuck.js")
            // console.timeEnd("encodestring");
            requestAnimationFrame(() => {
                console.log("弹出消息提示");
                tanchu弹出消息提示();
                console.timeEnd("requestAnimationFrame");
            });
            mui(btnele).button("reset");
            // tanchu弹出消息提示();
        };
        myservice.onerror = (e) => {
            throw new Error(e.message + " " + e.filename);
            //   myservice.terminate();
            //   console.log("线程已关闭","service-worker-jsfuck.js")
        };
    }
    var lastclick: string;
   
    var [outputcode, setoutputcode] = useState("");
    var [inputcode, setinputcode] = useState(
        "console.log('{你好吗zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')"
    );
    const inputonchange = useCallback(
        (e) => {
            setinputcode(e.target.value);
        },
        [inputcode]
    );
    const outputonchange = useCallback(
        (e) => {
            setoutputcode(e.target.value);
        },
        [outputcode]
    );
    useEffect(() => {
        document.title = "React router App-" + "hieroglyphy encoder";
        // hieroglyphyencoderender();

        return () => {
            关闭所有worker();
        };
    }, []);

    return (
        <div className="jdahd">
            <h1 style={{ fontSize: "30px" }}>
                编码hieroglyphy <br />
                encode hieroglyphy
            </h1>
            <p>
                hieroglyphy是一个工具和javascript库，用于将字符串，数字和脚本转换为（）[]
                {} +的等效序列！在浏览器中运行的字符。
            </p>
            <p>()+[]!{}</p>
            <p>
                浏览器兼容性:
                建议在最新超高版本chrome或者Firefox或者safari浏览器中运行！
            </p>
            <br />
            <textarea
                className="form-control"
                id="input"
                // type="text"
                value={inputcode}
                onChange={inputonchange}
            />
            <br />
            <p>
                <button
                    ref={btnencodescript}
                    className="btn btn-outline-success btn-lg"
                    id="encodescript"
                    onClick={(e) => {
                        encodeall("encodescript", e.target);
                    }}
                    data-loading-icon="mui-spinner mui-spinner-custom"
                    // type="text"
                >
                    Encode script
                </button>
                <button
                    ref={btnencodestring}
                    id="encodestring"
                    // type="text"
                    data-loading-icon="mui-spinner mui-spinner-custom"
                    className="btn btn-outline-info btn-lg"
                    onClick={(e) => {
                        encodeall("encodestring", e.target);
                    }}
                >
                    Encode string
                </button>
            </p>

            <div id={"clip" + outputdivid}>
                <textarea
                    id="output"
                    className="form-control"
                    value={outputcode}
                    onChange={outputonchange}
                />
            </div>

            <div className="actions">
                <span id="stats">{statstext}</span>
                <button
                    className="btn btn-outline-primary btn-lg"
                    id="run"
                    onClick={function () {
                        var codestring = outputcode;
                        /* var value = */
                        Function(`return ${codestring}`)();
                        //终于找到了uglifyjs压缩混淆失败的原因了!严格模式不能使用eval!
                        // var value = eval($2("output").value);

                        // if (lastclick === "encodestring") {
                        //     alert('"' + value + '"');
                        // } else {
                        //     /*  */
                        // }
                        // return false;
                    }}
                >
                    Run This
                </button>
                <button
                    className="btn btn-outline-success btn-lg"
                    data-clipboard-target={"#" + "clip" + outputdivid}
                >
                    复制
                </button>
            </div>
            <br />

            <p>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER"
                >
                    https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER
                </a>
            </p>
            <p>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js"
                >
                    https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js
                </a>
            </p>
        </div>
    );
}
