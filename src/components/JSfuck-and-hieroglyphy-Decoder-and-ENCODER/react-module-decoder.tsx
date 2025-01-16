import React, { memo, useCallback, useEffect, useState } from "react";

//@ts-ignore
import { decode } from "@masx200/jsfuck-and-hieroglyphy-decoder-and-encoder";
import { getStylePropValue } from "../../getStylePropValue";
//@ts-ignore
import tanchu弹出消息通用 from "../../utils/my弹出消息通用.ts";

("use strict");

function tanchutanchuxiaoxishibai() {
    tanchu弹出消息通用("danger");
}
function tanchutanchuxiaoxitishi() {
    tanchu弹出消息通用("success");
}

function guid() {
    return "xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        },
    );
}
var outputdivid = "clip" + guid();

export default memo(function Decoder() {
    const [inputcode, setinputcode] = useState("");
    const decodehandler = useCallback(() => {
        // console.log(inputcode);
        try {
            setoutputcode(decode(inputcode));
            tanchutanchuxiaoxitishi();
        } catch (error) {
            tanchutanchuxiaoxishibai();
            throw error;
        }
    }, [inputcode]);
    var [outputcode, setoutputcode] = useState("");

    const inputonchange = useCallback(
        (e: { target: { value: React.SetStateAction<string> } }) => {
            setinputcode(e.target.value);
        },
        [inputcode],
    );
    const outputonchange = useCallback(
        (e: { target: { value: React.SetStateAction<string> } }) => {
            setoutputcode(e.target.value);
        },
        [outputcode],
    );

    //   var inputtext = useRef();
    useEffect(
        /* 组件第一次加载时和每次组件刷新时会加载这个函数 */

        function () {
            document.title = "JSfuck Decoder and hieroglyphy decoder";
            // decoderrender();
        },
        [],
    );
    // useEffect(() => {
    //     console.log(inputcode);
    // }, [inputcode]);
    return (
        <div className="jdahd">
            <h1
                style={{
                    fontSize: "30px",
                }}
            >
                解码JSFUCK 和hieroglyphy
                <br />
                decode JSFUCK and hieroglyphy
            </h1>

            <p>
                JSFuck是一种基于JavaScript原子部分的深奥教育编程风格。它只使用六个不同的字符来编写和执行代码。
            </p>
            <p>()+[]!</p>
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
                /* 数据双向绑定,如果不设置onchange则变成了只读的value */
                value={inputcode}
                onChange={inputonchange}
                // ref={inputtext}
                className="form-control"
                placeholder="Paste your code here!"
                id="code"
                style={{
                    width: "100%",
                    minHeight: "250px",
                }}
                //   style="width:100%;min-height:250px"
            />
            <button
                onClick={decodehandler}
                style={getStylePropValue(
                    "font-size: 1.5em; padding: 0.5rem 1rem",
                )}
                type="button"
                id="decode"
                value="Decode"
                className="btn btn-primary btn-lg"
            >
                Decode
            </button>
            <div id={"clip" + outputdivid}>
                <textarea
                    /* 数据双向绑定,如果不设置onchange则变成了只读的value */
                    value={outputcode}
                    onChange={outputonchange}
                    className="form-control"
                    id="code2"
                    style={{ width: "100%", minHeight: "250px" }}
                    // style="width:100%;min-height:250px"
                />
            </div>

            <button
                style={getStylePropValue(
                    "font-size: 1.5em; padding: 0.5rem 1rem",
                )}
                className="btn btn-outline-primary btn-lg"
                id="run"
                onClick={() => {
                    Function(` ${outputcode}`)();
                }}
            >
                Run This
            </button>

            <button
                style={getStylePropValue(
                    "font-size: 1.5em; padding: 0.5rem 1rem",
                )}
                className="btn btn-outline-success btn-lg"
                data-clipboard-target={"#" + "clip" + outputdivid}
            >
                复制
            </button>
            <br />
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
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/aemkei/jsfuck/blob/master/jsfuck.js"
                >
                    https://github.com/aemkei/jsfuck/blob/master/jsfuck.js
                </a>
            </p>
            <a
                href="https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js"
                rel="noopener noreferrer"
                target="_blank"
            >
                https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js
            </a>
        </div>
    );
});
