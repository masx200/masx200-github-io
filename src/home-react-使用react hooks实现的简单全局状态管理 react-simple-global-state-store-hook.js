"use strict";
import useGlobalstate from "react-simple-global-state-store-hook";
// eslint-disable-next-line no-unused-vars
import Markdownreact from "./markdown-react/index";
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
export default function 全局状态管理() {
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
          使用react hooks实现的简单全局状态管理
          <br />
          react-simple-global-state-store-hook
        </a>
      </h2>
      <hr />
      <div className="row">
        <div className="col-xl-6  col-lg-6 col-md-6 col-sm-12 col-12">
          <Htest text={"-hello-"} />
        </div>
        <div className="col-xl-6  col-lg-6 col-md-6 col-sm-12 col-12">
          <Htest text={"-world-"} />
        </div>
      </div>

      <hr />
      <Markdownreact src="https://masx200.github.io/react-simple-global-state-store-hook/README.md" />
    </div>
  );
}
// eslint-disable-next-line no-unused-vars
function Htest(props) {
  let {
    number: [number, setnumber]
  } = useGlobalstate({ number: 78546 * Math.random() });

  let {
    testname: [testname, settestname]
  } = useGlobalstate({ testname: "helloworld-test-" + props.text });
  return (
    <div>
      <h1>test{props.text}</h1>

      <p>
        testname:
        <input
          className="form-control"
          value={testname}
          onChange={e => {
            settestname(e.target.value);
          }}
        />
      </p>
      <button
        className="btn btn-outline-success btn-lg"
        onClick={() => {
          settestname(
            Math.random() > 0.5 ? testname + props.text : props.text + testname
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
          onChange={e => {
            setnumber(e.target.value);
          }}
        />
      </p>
      <button
        className="btn btn-outline-success btn-lg"
        onClick={() => {
          setnumber(number * 3);
        }}
      >
        修改number
      </button>
    </div>
  );
}
