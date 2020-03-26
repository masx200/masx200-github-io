import {
    changeState,
    initGlobalState,
    useGlobalStore,
} from "@masx200/react-simple-global-state-store-hook";
// console.log(initGlobalState, useGlobalStore, changeState);
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import markdwonurls from "../utils/markdownurls.ts";
// initGlobalState({
//   testnumber: String(2418 * 999),
//   testname: "helloworl使s实现的简单全局状态管理"
// });
// console.log(initaaaaaaaaaaaa);
// eslint-disable-next-line no-unused-vars
import Markdownreact from "./markdown-react/index.tsx";
"use strict";
const urlmark = markdwonurls["react-simple-global-state-store-hook"];

// var initaaaaaaaaaaaa =
initGlobalState({
    testnumber: String(22418 * 99999),
    testname: "helloworld-test使用全局状态管理",
});
initGlobalState({ clicktimes: 0 });
function increment() {
    changeState("clicktimes", (a: number) => a + 1);
}
function decrement() {
    changeState("clicktimes", (a: number) => a - 1);
}
function Clicktime() {
    let [clicktimes] = useGlobalStore("clicktimes");

    return (
        <div style={{ fontSize: "30px" }}>
            <h1>点击次数{clicktimes}</h1>
            <button
                onClick={() => {
                    increment();
                }}
            >
                increment
            </button>
            <button
                onClick={() => {
                    decrement();
                }}
            >
                decrement
            </button>
        </div>
    );
}
export default function 全局状态管理() {
    //   console.log(useGlobalStore("clicktimes"));
    useEffect(() => {
        document.title =
            "masx200的github主页-" +
            "使用react hooks实现的简单全局状态管理 react-simple-global-state-store-hook";
    }, []);
    return (
        <div>
            <h2>
                <a
                    href="https://github.com/masx200/react-simple-global-state-store-hook"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    适用于React的极简全局状态管理库
                    <br />
                    {/*  react-simple-global-state-store-hook */}
                </a>
                <p>
                    <a href="https://github.com/masx200/react-simple-global-state-store-hook">
                        https://github.com/masx200/react-simple-global-state-store-hook
                    </a>
                </p>
            </h2>
            <hr />
            <div className="row">
                <div className="col-xl-6  col-lg-6 col-md-6 col-sm-12 col-12">
                    <Clicktime />
                    <Htest text={"-hello-"} />
                </div>
                <div className="col-xl-6  col-lg-6 col-md-6 col-sm-12 col-12">
                    <Clicktime />
                    <Htest text={"-world-"} />
                </div>
            </div>

            <hr />
            <Markdownreact src={urlmark} />
        </div>
    );
}
// eslint-disable-next-line no-unused-vars
function Htest(props: { text: React.ReactNode }) {
    //   console.log(useGlobalStore({ testnumber: 78546 * Math.random() }));
    let [number, setnumber] = useGlobalStore("testnumber");

    let [testname, settestname] = useGlobalStore("testname");
    //   console.log(number, testname);
    return (
        <div>
            <h1>test{props.text}</h1>

            <p>
                testname:
                <input
                    className="form-control"
                    value={testname}
                    onChange={(e) => {
                        settestname(e.target.value);
                    }}
                />
            </p>
            <button
                className="btn btn-outline-success btn-lg"
                onClick={() => {
                    settestname(
                        Math.random() > 0.5
                            ? testname + props.text
                            : props.text + testname
                    );
                }}
            >
                修改testname
            </button>
            <p>
                number:
                <input
                    className="form-control"
                    value={number}
                    onChange={(e) => {
                        setnumber(e.target.value);
                    }}
                />
            </p>
            <button
                className="btn btn-outline-success btn-lg"
                onClick={() => {
                    setnumber(String(number) + Math.random());
                }}
            >
                修改number
            </button>
        </div>
    );
}
