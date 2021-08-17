"use strict";
// import tanchu弹出消息通用 from "@/utils/my弹出消息通用.js";
function tanchu弹出消息提示() {
    tanchu弹出消息通用("success");
}
//@ts-ignore
import mui from "@/assetsjs/mui.精简.button";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
//@ts-ignore
import tanchu弹出消息通用 from "../../utils/my弹出消息通用.ts";
//@ts-ignore
import jsfuckworker from "./worker-jsfuck.worker.js";

// import "./JSfuck-and-hieroglyphy-Decoder-and-ENCODER.less"
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
        myservice?.terminate();
        /* 如果没有设为undefined,则下次再使用时不会开启新线程 */
        myservice = undefined;
    } catch (error) {
        /*  */
    }
}
export default memo(function Jsfuck() {
    const evalcheckbox = useRef();

    async function encode(typename: string, btnele: EventTarget) {
        // const evalcheck = typename === "encodescript";
        const button = btnele;
        if (!button) {
            return;
        }
        return new Promise<void>((res, rej) => {
            console.time("encodescript");
            console.log("encodescript");
            mui(button).button("loading");

            if (!myservice) {
                myservice = jsfuckworker();
            }
            // new Worker("./service-worker-jsfuck.worker.js");
            //   console.log("创建新线程", "service-worker-jsfuck.js");
            // }

            myservice?.postMessage([
                //   $2("input").value,
                inputcode,
                typename,
                // //@ts-ignore
                // evalcheck,
                //   $2("eval").checked

                // $("#jsfuckscript").attr("src")
            ]);
            myservice.onmessage = (e) => {
                var output = e.data;
                console.log("主线程从副线程" + "接收" + "event.data\n");
                console.log(output);
                // $2("output").value = output;
                console.timeEnd("encodescript");
                console.time("requestAnimationFrame");
                setoutputcode(output);
                //   jQuery("#output").val(output);
                setstatstext(output.length + " chars");
                //   $2("stats").innerHTML = output.length + " chars";
                mui(button).button("reset");
                //   myservice.terminate();
                //   console.log("线程已关闭","service-worker-jsfuck.js")

                requestAnimationFrame(() => {
                    console.log("弹出消息提示");
                    tanchu弹出消息提示();
                    console.timeEnd("requestAnimationFrame");

                    res();
                });
                // tanchu弹出消息提示();
            };
            myservice.onerror = (e) => {
                console.error("Error:", e.message, e.filename);
                rej(new Error(e.message + " " + e.filename));

                //   myservice.terminate();
                //   console.log("线程已关闭","service-worker-jsfuck.js")
            };
        }).finally(() => {
            mui(button).button("reset");
        });
    }

    const [statstext, setstatstext] = useState(`0 chars`);
    var [outputcode, setoutputcode] = useState("");
    var [inputcode, setinputcode] = useState(
        "console.log('{你好吗zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')"
    );
    const btnencode = useRef();
    //   const btnencodestring = useRef();
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
        document.title =
            "React router App-" +
            "JSFuck encoder- Write any JavaScript with 6 Characters: []()!+";
        // jsfuckencoderender();
        return () => {
            关闭所有worker();
        };
    }, []);

    return (
        <div className="jdahd">
            <h1
                style={{ fontSize: "30px" }}
                //       "
                //     font-size: 30px;
                // "
            >
                编码JSFUCK <br />
                encode JSFUCK
            </h1>
            <p>
                JSFuck是一种基于JavaScript原子部分的深奥教育编程风格。它只使用六个不同的字符来编写和执行代码。
            </p>
            <p>()+[]!</p>
            <p>
                它不依赖于浏览器，因此您甚至可以在Node.js上运行它。
                <br />
                使用下面的表单转换您自己的脚本。取消选中“eval
                source”以获取纯字符串。
            </p>
            <p>
                浏览器兼容性:
                建议在最新超高版本的chrome或者Firefox或者safari浏览器中运行！
            </p>
            <br />
            <textarea
                id="input"
                // type="text"
                className="form-control"
                value={inputcode}
                onChange={inputonchange}
            />
            <br />
            <button
                style="font-size: 1.5em; padding: 0.5rem 1rem"
                onClick={(e) => {
                    encode("encodestring", e.target);
                }}
                //@ts-ignore
                ref={btnencode}
                className="btn btn-outline-primary btn-lg"
                id="encode"
                // type="text"
                data-loading-icon="mui-spinner mui-spinner-custom"
            >
                Encode string
            </button>
            <button
                style="font-size: 1.5em; padding: 0.5rem 1rem"
                onClick={(e) => {
                    encode("encodescript", e.target);
                }}
                //@ts-ignore
                ref={evalcheckbox}
                className="btn btn-outline-primary btn-lg"
                id="encode"
                // type="text"
                data-loading-icon="mui-spinner mui-spinner-custom"
            >
                Encode script
            </button>

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
                {/* <span id="stats">0 chars</span> */}
                <button
                    style="font-size: 1.5em; padding: 0.5rem 1rem"
                    className="btn btn-outline-primary btn-lg"
                    id="run"
                    onClick={runthiscode}
                >
                    Run This
                </button>
                <button
                    style="font-size: 1.5em; padding: 0.5rem 1rem"
                    className="btn btn-outline-success btn-lg"
                    data-clipboard-target={"#" + "clip" + outputdivid}
                >
                    复制
                </button>
            </div>
            <br />
            <p>
                <a
                    href="https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER
                </a>
            </p>
            <p>
                <a
                    href="https://github.com/aemkei/jsfuck/blob/master/jsfuck.js"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    https://github.com/aemkei/jsfuck/blob/master/jsfuck.js
                </a>
            </p>
        </div>
    );

    function runthiscode() {
        var codestring = outputcode;
        /*   var value = */
        Function(`return ${codestring}`)();
    }
});
