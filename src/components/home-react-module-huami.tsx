"use strict";
// import("./clipboard.min.js").then(
//   //   console.log

//   module => {
//     const ClipboardJS = module.default;
//     new ClipboardJS(".btn").on("success", function(e) {
//       e.clearSelection();
//     });
//     // new ClipboardJS(".btn");
//   }
// );

import React from "react";
import {
    // vuehuamirender,
    md5,
    //@ts-ignore
} from "@/assetsjs/md5";
import $ from "jquery";
// var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
var { useState, useEffect, useCallback } = React;
export function useBindtext(
    默认值: string | number
): [
    string | number,
    React.Dispatch<React.SetStateAction<string | number>>,
    (e: { target: { value: string } }) => void
] {
    var [inputcode, setinputcode] = useState(默认值);
    const inputonchange = (e: { target: { value: string } }) => {
        //@ts-ignore
        setinputcode(e.target?.value);
    };
    return [inputcode, setinputcode, inputonchange];
}
export default function huami() {
    useEffect(() => {
        document.title = "masx200的github主页-" + "花密  不一样的密码管理工具";
    }, []);
    const [inputtext1, , onchangeinputtext1] = useBindtext("");
    const [inputtext2, , onchangeinputtext2] = useBindtext("");
    const [inputtext3, setinputtext3, onchangeinputtext3] = useBindtext("");

    const handlechange = useCallback(
        function handlechang1e(inputtext1, inputtext2) {
            // inputtext1, inputtext2
            //   console.log(this);
            //   countCode();
            //   (function countCode() {
            var password = inputtext1;
            //  $("#password").val();
            var key = inputtext2;
            //  $("#key").val();
            if (password && key) {
                var md5one = md5(password, key);
                var md5two = md5(md5one, "snow");
                var md5three = md5(md5one, "kise");
                var rule = md5three.split("");
                var source = md5two.split("");
                for (var i = 0; i <= 31; i++) {
                    if (isNaN(source[i])) {
                        var str = "sunlovesnow1990090127xykab";
                        if (str.search(rule[i]) > -1) {
                            source[i] = source[i].toUpperCase();
                        }
                    }
                }
                var code32 = source.join("");
                var code1 = code32.slice(0, 1);
                let code16;
                if (isNaN(code1)) {
                    code16 = code32.slice(0, 16);
                } else {
                    code16 = "K" + code32.slice(1, 16);
                }
                //   $("#code16").val(code16);
                setinputtext3(code16);
                // keysave = $("#key").val();
            }

            //   console.log("keysave",keysave)
            //   })();
            //
        },
        [inputtext1, inputtext2]
    );

    const functioncopy = function functionc1opy(inputtext3: any) {
        if (
            inputtext3
            // $("#code16").val()
        ) {
            $("#copyOK").show();
            $("#copyOK")
                .fadeTo(0, 0)
                .css("border-color", "#22B614")
                .css("background-color", "#22B614")
                .fadeTo("fast", 1)
                .fadeTo(2000, 1)
                .fadeTo(3000, 0, function () {
                    $("#copyOK").hide();
                });
        }
    };
    // [inputtext3]
    useEffect(() => {
        /*
    这个时候(inputtext1, inputtext2数据已经刷新了!
    component did update! */
        handlechange(inputtext1, inputtext2);
    }, [inputtext1, inputtext2]);

    return (
        <div className="hello flowerpassword">
            <h1>{"花密  不一样的密码管理工具"}</h1>

            <div
                id="rong1"
                className="container"
                style={{ textAlign: "center" }}
            >
                <div id="rong2">
                    <h2>
                        <span>1</span>
                        输入
                    </h2>
                    <div id="input">
                        <p /> <h3>记忆密码</h3> <p />
                        <p>
                            <input
                                value={inputtext1}
                                onChange={(e) => {
                                    onchangeinputtext1(e);
                                    //   handlechange(inputtext1, inputtext2);
                                    // input1ref.current.value,
                                    // input2ref.current.value
                                }}
                                id="password"
                                placeholder="输入密码"
                                name="password"
                                type="password"
                                className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-control"
                            />
                        </p>
                        <p /> <span>+</span> <h3>区分代号</h3> <p />
                        <p>
                            <input
                                value={inputtext2}
                                onChange={(e) => {
                                    onchangeinputtext2(e);
                                }}
                                id="key"
                                placeholder="输入代号"
                                name="key"
                                type="text"
                                // value=""

                                className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-control"
                            />
                        </p>
                    </div>
                    <br /> <p />
                    <h2>
                        <span>2</span>
                        获取
                    </h2>
                    <p />
                    <div id="get">
                        <p id="tuijian" /> <p /> <h3>最终密码</h3> <p />
                        <span id="myhezi">
                            <p>
                                <input
                                    value={inputtext3}
                                    onChange={onchangeinputtext3}
                                    id="code16"
                                    readOnly={true}
                                    className="col-lg-12 col-md-12 col-sm-12 col-xs-12 snippet code16d form-control"
                                />
                            </p>
                            <br />
                            <p>
                                <button
                                    onClick={() => {
                                        functioncopy(inputtext3);
                                    }}
                                    id="copycode16"
                                    data-clipboard-target="#code16"
                                    className="btn btn-lg btn copycode16d btn-info"
                                    style={{ width: " 100%" }}

                                    //   "width: 100%;"
                                >
                                    点击复制
                                </button>
                            </p>
                        </span>
                        <p>
                            <span
                                id="copyOK"
                                style={{
                                    display: "none",
                                }}
                                //   "display: none;"
                            >
                                √复制成功
                            </span>
                        </p>
                        <p />
                    </div>
                </div>
            </div>
        </div>
    );
}
