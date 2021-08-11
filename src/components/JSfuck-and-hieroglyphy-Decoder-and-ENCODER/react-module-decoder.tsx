"use strict";

// import tanchu弹出消息通用 from "@/utils/my弹出消息通用.js";
/* eslint-disable no-useless-escape */
//@ts-ignore
import hieroglyphy from "@/assetsjs/./hieroglyphy";
//@ts-ignore
import JSFuck from "@/assetsjs/./jsfuck";
import React, { useEffect, useCallback, useState, memo } from "react";
//@ts-ignore
import tanchu弹出消息通用 from "../../utils/my弹出消息通用.ts";
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
        }
    );
}
var outputdivid = "clip" + guid();
var preandpost: { prefix: string; postfix: string }[];
export default memo(function Decoder() {
    const decode = (inputcode: string) => {
        preandpost = preandpost || [
            /* jsfuck的初始化导致卡顿 */
            {
                prefix: "[][(![]+[])[!+[]+!![]+!![]]+([]+{})[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]](",
                postfix: ")()",
            },
            {
                prefix: "[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]](",
                postfix: ")()",
            },
            {
                prefix:
                    "[][" +
                    hieroglyphy.hieroglyphyString("sort") +
                    "][" +
                    hieroglyphy.hieroglyphyString("constructor") +
                    "]" +
                    "(",
                postfix: ")()",
            },
            {
                prefix:
                    "[][" +
                    JSFuck.encode("filter") +
                    "]" +
                    "[" +
                    JSFuck.encode("constructor") +
                    "](",
                postfix: ")()",
            },
        ];

        var codevalue = inputcode;
        // var code = document.querySelector("#code");
        if (codevalue.length === 0) {
            console.warn("输入框不能为空");
            return;
        }
        console.time("解码JSFUCK 和hieroglyphy");
        console.log("解码JSFUCK 和hieroglyphy");

        for (var e = 0; e < preandpost.length; e++) {
            if (pipeizifu(preandpost[e].prefix, preandpost[e].postfix)) {
                console.log("使用匹配模版" + (e + 1) + "成功");
                tanchutanchuxiaoxitishi();
                return 1;
            }
            // else {
            // }
        }
        tpipeichunzifuchuan(codevalue);
        return;
    };
    var [outputcode, setoutputcode] = useState("");
    var [inputcode, setinputcode] = useState("");
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

    function tpipeichunzifuchuan(codestring: any) {
        try {
            //   console.log(

            setoutputcode(
                /* 如果这里传入一个函数则可能会被识别成使用函数的返回值 */

                Function(`return ${codestring}`)().toString()
            );
            //   eval(codestring)
            //   );
            console.log("匹配字符模式成功");
            tanchutanchuxiaoxitishi();
            return 1;
        } catch (e) {
            console.log("匹配错误");

            tanchutanchuxiaoxishibai();
            return 0;
        }
    }

    function setDecoded(decodedCode: any) {
        //  eval(decodedCode);
        // console.log(
        setoutputcode(Function(`return ${decodedCode}`)().toString());
        // );
    }
    function isMatching(string: string, pattern: string | RegExp) {
        var result = string.match(new RegExp(pattern));
        if (result) return result[1];

        return null;
    }
    function patternCreator(prefix: string, postfix: string) {
        var replacedPrefix = prefix.replace(/[\[\]\(\)\+\!]/g, "\\$&");
        var replacedPostfix = postfix.replace(/[\[\]\(\)\+\!]/g, "\\$&");

        return replacedPrefix + "(.*)" + replacedPostfix;
    }
    function pipeizifu(pre: string, post: string) {
        var codevalue = inputcode;
        var prefix = pre,
            postfix = post;

        var result = isMatching(codevalue, patternCreator(prefix, postfix));

        if (result) {
            try {
                setDecoded(result);
                console.log("匹配成功");

                return 1;
            } catch (e) {
                /*  */
            }
        }
        return;
    }

    //   var inputtext = useRef();
    useEffect(
        /* 组件第一次加载时和每次组件刷新时会加载这个函数 */

        function () {
            document.title =
                "React router App-" + "JSfuck Decoder and hieroglyphy decoder";
            // decoderrender();
        },
        []
    );
    return (
        <div className="jdahd">
            {/* <>5ddddddd</> */}
            {/* The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX. */}
            <h1
                style={{
                    fontSize: "30px",
                }}

                //   "
                // font-size: 30px;"
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
                onClick={() => {
                    decode(inputcode);
                }}
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
                className="btn btn-outline-primary btn-lg"
                id="run"
                onClick={() => {
                    Function(`return ${outputcode}`)();
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
