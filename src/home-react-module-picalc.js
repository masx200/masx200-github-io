import extendmytextarea from "./圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/extendmytextarea.js";
import mypidashujisuanbigint, {
  关闭所有worker as 关闭所有worker1
} from "./圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mypidashujisuan-bigint.js";
import mypidashujisuandecimal, {
  关闭所有worker as 关闭所有worker2
} from "./圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mypidashujisuan-decimal.js";
var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
var { useState, useEffect, useRef } = React;
/* 应该再卸载组件时关闭所有worker */
export default function Picalc() {
  useEffect(() => {
    document.title =
      "masx200的github主页-" +
      "圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架";
    extendmytextarea();
    mypidashujisuandecimal();
    mypidashujisuanbigint();
    return () => {
      关闭所有worker1();
      关闭所有worker2();
    };
  });
  return (
    <div>
      <div>
        <p />
        <h3>计算运行速度排行:</h3>
        <br />
        <p>1.原生BigInt最快,</p>
        <br />
        <p>2.BigInteger.js中速,</p>
        <br />
        <p>3.Decimal.js最慢。</p>
        <hr />

        <details>
          <summary class=" btn btn-outline-primary mui-btn mui-btn-outline-primary">
            {/* <button
                  class=" btn btn-outline-primary"
                  // type="button"
                  // data-toggle="collapse"
                  // data-target="#collapsiblecontainer1"
                > */}
            展开收起测试结果对比
            {/* </button> */}
          </summary>

          <br />
          <div id="collapsiblecontainer1" class="collapse row show">
            <div class="col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12">
              <h4>线程数为8 圆周率计算15000位测试结果</h4>
              <br />
              <p>chrome 62 测试 BigInteger.js 达到1倍速度</p>

              <br />
              <p>chrome 74 测试 原生BigInt 达到11.16倍速度</p>
            </div>
            <hr />
            <div class="col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12">
              <h4>线程数为4 圆周率计算6000位测试结果</h4>
              <br />
              <p>firefox 66 测试 decimal.js 达到1倍速度</p>

              <br />
              <p>firefox 66 测试 BigInteger.js 达到2.163倍速度</p>

              <br />
              <p>chrome 75 测试 decimal.js 达到3.4375倍速度</p>
              <br />

              <p>chrome 75 测试 原生BigInt 达到74.038倍速度</p>
            </div>
            <hr />
            <div class="col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12">
              <h4>线程数为4 圆周率计算10000位测试结果</h4>
              <br />
              <p>firefox 66 测试 decimal.js 达到1倍速度</p>
              <br />
              <p>firefox 66 测试 BigInteger.js 达到2.066倍速度</p>
              <br />
              <p>chrome 75 测试 decimal.js 达到3.688倍速度</p>
              <br />

              <p>chrome 75 测试 原生BigInt 达到100.773倍速度</p>
            </div>
            <hr />
            <div class="col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12">
              <h4>线程数为8 圆周率计算10000位测试结果</h4>

              <br />
              <p>firefox 66 测试 BigInteger.js 达到1倍速度</p>
              <br />
              <p>chrome 62 测试 BigInteger.js 达到6.688倍速度</p>
              <br />

              <p>chrome 74 测试 原生BigInt 达到49.710倍速度</p>
            </div>
            <hr />

            <p />
            <br />
          </div>
        </details>
      </div>

      <hr />
      <div class="container">
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
                class="form-control"
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
                class="form-control"
                id="pichangwei-big"
                type="number"
                name="quantity"
                min="1"
                max="100"
              />
            </span>
          </p>
          <button
            data-loading-icon="mui-spinner mui-spinner-custom"
            class="mui-btn mui-btn-primary btn btn-info  btn btn-outline-primary mui-btn mui-btn-outline-primary"
            id="start-big"
            type="button"
            style={{ width: "100%" }}
          >
            开始
          </button>
        </div>
        <br />
        <div>
          <textarea
            class="form-control"
            cols="100"
            rows="100"
            style={{
              width: "100%",
              height: "100%",
              margin: "0 0",
              "text-align": "center"
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
            <summary class=" btn btn-outline-primary mui-btn mui-btn-outline-primary">
              展开收起圆周率结果
            </summary>
            {/* </button> */}
            <br />
            <br />
            <div id="collapsiblecontainer2" class="collapse show">
              <textarea
                class="form-control"
                cols="100"
                rows="100"
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "0 0",
                  "text-align": "center"
                }}
                width="100%"
                id="tp2-big"
              />
            </div>
          </details>
        </div>
      </div>
      <hr />
      <div class="container">
        <h3>Decimal.js</h3>
        <p>
          Decimal.js是JavaScript的任意精度Decimal类型。 特征: 整数和浮点数,
          简单但功能齐全的API,
          复制JavaScript的Number.prototype和Math对象的许多方法,
          还处理十六进制，二进制和八进制值,
          比Java的BigDecimal的JavaScript版本更快，更小，也许更容易使用,
          没有依赖, 广泛的平台兼容性：仅使用JavaScript 1.5（ECMAScript 3）功能。
          全面的文档和测试集。
        </p>
        <hr />
        <div>
          <p>
            <span>
              选择线程个数:数量 ( 1 到 16 之间):
              <input
                class="form-control"
                id="thread"
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
                class="form-control"
                id="pichangwei"
                type="number"
                name="quantity"
                min="1"
                max="100"
              />
            </span>
          </p>
          <button
            data-loading-icon="mui-spinner mui-spinner-custom"
            class="mui-btn mui-btn-primary btn btn-info  btn btn-outline-primary mui-btn mui-btn-outline-primary"
            id="start"
            type="button"
            style={{ width: "100%" }}
          >
            开始
          </button>
        </div>
        <br />
        <div>
          <textarea
            class="form-control"
            cols="100"
            rows="100"
            style={{
              width: "100%",
              height: "100%",
              margin: "0 0",
              "text-align": "center"
            }}
            width="100%"
            id="tp"
          />
          <br />
          <br />
          {/* <button
                class=" btn btn-outline-primary"
                type="button"
                data-toggle="collapse"
                data-target="#collapsiblecontainer3"
              > */}
          <details open>
            <summary class=" btn btn-outline-primary mui-btn mui-btn-outline-primary">
              展开收起圆周率结果
            </summary>
            {/* </button> */}
            <br />
            <br />
            <div id="collapsiblecontainer3" class="collapse show">
              <textarea
                class="form-control"
                cols="100"
                rows="100"
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "0 0",
                  "text-align": "center"
                }}
                width="100%"
                id="tp2"
              />
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

// class picalc extends React.Component {
//   componentDidMount() {
//     document.title =
//       "masx200的github主页-" +
//       "圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架";
//     extendmytextarea();
//     mypidashujisuandecimal();
//     mypidashujisuanbigint();
//   }

//   render() {
//     return (
//       <div>
//         <div>
//           <p />
//           <h3>计算运行速度排行:</h3>
//           <br />
//           <p>1.原生BigInt最快,</p>
//           <br />
//           <p>2.BigInteger.js中速,</p>
//           <br />
//           <p>3.Decimal.js最慢。</p>
//           <hr />

//           <details>
//             <summary class=" btn btn-outline-primary mui-btn mui-btn-outline-primary">
//               {/* <button
//                 class=" btn btn-outline-primary"
//                 // type="button"
//                 // data-toggle="collapse"
//                 // data-target="#collapsiblecontainer1"
//               > */}
//               展开收起测试结果对比
//               {/* </button> */}
//             </summary>

//             <br />
//             <div id="collapsiblecontainer1" class="collapse row show">
//               <div class="col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12">
//                 <h4>线程数为8 圆周率计算15000位测试结果</h4>
//                 <br />
//                 <p>chrome 62 测试 BigInteger.js 达到1倍速度</p>

//                 <br />
//                 <p>chrome 74 测试 原生BigInt 达到11.16倍速度</p>
//               </div>
//               <hr />
//               <div class="col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12">
//                 <h4>线程数为4 圆周率计算6000位测试结果</h4>
//                 <br />
//                 <p>firefox 66 测试 decimal.js 达到1倍速度</p>

//                 <br />
//                 <p>firefox 66 测试 BigInteger.js 达到2.163倍速度</p>

//                 <br />
//                 <p>chrome 75 测试 decimal.js 达到3.4375倍速度</p>
//                 <br />

//                 <p>chrome 75 测试 原生BigInt 达到74.038倍速度</p>
//               </div>
//               <hr />
//               <div class="col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12">
//                 <h4>线程数为4 圆周率计算10000位测试结果</h4>
//                 <br />
//                 <p>firefox 66 测试 decimal.js 达到1倍速度</p>
//                 <br />
//                 <p>firefox 66 测试 BigInteger.js 达到2.066倍速度</p>
//                 <br />
//                 <p>chrome 75 测试 decimal.js 达到3.688倍速度</p>
//                 <br />

//                 <p>chrome 75 测试 原生BigInt 达到100.773倍速度</p>
//               </div>
//               <hr />
//               <div class="col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12">
//                 <h4>线程数为8 圆周率计算10000位测试结果</h4>

//                 <br />
//                 <p>firefox 66 测试 BigInteger.js 达到1倍速度</p>
//                 <br />
//                 <p>chrome 62 测试 BigInteger.js 达到6.688倍速度</p>
//                 <br />

//                 <p>chrome 74 测试 原生BigInt 达到49.710倍速度</p>
//               </div>
//               <hr />

//               <p />
//               <br />
//             </div>
//           </details>
//         </div>

//         <hr />
//         <div class="container">
//           <h3>BigInteger.js</h3>
//           <p>
//             BigInteger.js是Javascript的任意长度整数库，允许对无限大小的整数进行算术运算，尽管存在内存和时间限制。
//             更新（2018年12月2日）：BigInt被添加为JavaScript的本机功能。
//             此库现在可用作polyfill：如果环境支持本机BigInt，则此库充当本机实现的瘦包装器。
//             建议升级浏览器到chrome68以上,才可支持原生BigInt.
//           </p>
//           <h5>
//             <b>如果浏览器原生支持BigInt,则运行速度有巨大提升!</b>
//           </h5>

//           <hr />
//           <div>
//             <p>
//               <span>
//                 选择线程个数:数量 ( 1 到 16 之间):
//                 <input
//                   class="form-control"
//                   id="thread-big"
//                   type="number"
//                   name="quantity"
//                   min="1"
//                   max="12"
//                 />
//               </span>
//             </p>
//             <p>
//               <span>
//                 选择圆周率位数:数量1000* ( 1 到 100 之间):
//                 <input
//                   class="form-control"
//                   id="pichangwei-big"
//                   type="number"
//                   name="quantity"
//                   min="1"
//                   max="100"
//                 />
//               </span>
//             </p>
//             <button
//               data-loading-icon="mui-spinner mui-spinner-custom"
//               class="mui-btn mui-btn-primary btn btn-info  btn btn-outline-primary mui-btn mui-btn-outline-primary"
//               id="start-big"
//               type="button"
//               style={{ width: "100%" }}
//             >
//               开始
//             </button>
//           </div>
//           <br />
//           <div>
//             <textarea
//               class="form-control"
//               cols="100"
//               rows="100"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 margin: "0 0",
//                 "text-align": "center"
//               }}
//               width="100%"
//               id="tp-big"
//             />
//             <br />
//             {/* <button
//               class=" btn btn-outline-primary"
//               type="button"
//               data-toggle="collapse"
//               data-target="#collapsiblecontainer2"
//             > */}
//             <details open>
//               <summary class=" btn btn-outline-primary mui-btn mui-btn-outline-primary">
//                 展开收起圆周率结果
//               </summary>
//               {/* </button> */}
//               <br />
//               <br />
//               <div id="collapsiblecontainer2" class="collapse show">
//                 <textarea
//                   class="form-control"
//                   cols="100"
//                   rows="100"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     margin: "0 0",
//                     "text-align": "center"
//                   }}
//                   width="100%"
//                   id="tp2-big"
//                 />
//               </div>
//             </details>
//           </div>
//         </div>
//         <hr />
//         <div class="container">
//           <h3>Decimal.js</h3>
//           <p>
//             Decimal.js是JavaScript的任意精度Decimal类型。 特征: 整数和浮点数,
//             简单但功能齐全的API,
//             复制JavaScript的Number.prototype和Math对象的许多方法,
//             还处理十六进制，二进制和八进制值,
//             比Java的BigDecimal的JavaScript版本更快，更小，也许更容易使用,
//             没有依赖, 广泛的平台兼容性：仅使用JavaScript 1.5（ECMAScript
//             3）功能。 全面的文档和测试集。
//           </p>
//           <hr />
//           <div>
//             <p>
//               <span>
//                 选择线程个数:数量 ( 1 到 16 之间):
//                 <input
//                   class="form-control"
//                   id="thread"
//                   type="number"
//                   name="quantity"
//                   min="1"
//                   max="12"
//                 />
//               </span>
//             </p>
//             <p>
//               <span>
//                 选择圆周率位数:数量1000* ( 1 到 100 之间):
//                 <input
//                   class="form-control"
//                   id="pichangwei"
//                   type="number"
//                   name="quantity"
//                   min="1"
//                   max="100"
//                 />
//               </span>
//             </p>
//             <button
//               data-loading-icon="mui-spinner mui-spinner-custom"
//               class="mui-btn mui-btn-primary btn btn-info  btn btn-outline-primary mui-btn mui-btn-outline-primary"
//               id="start"
//               type="button"
//               style={{ width: "100%" }}
//             >
//               开始
//             </button>
//           </div>
//           <br />
//           <div>
//             <textarea
//               class="form-control"
//               cols="100"
//               rows="100"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 margin: "0 0",
//                 "text-align": "center"
//               }}
//               width="100%"
//               id="tp"
//             />
//             <br />
//             <br />
//             {/* <button
//               class=" btn btn-outline-primary"
//               type="button"
//               data-toggle="collapse"
//               data-target="#collapsiblecontainer3"
//             > */}
//             <details open>
//               <summary class=" btn btn-outline-primary mui-btn mui-btn-outline-primary">
//                 展开收起圆周率结果
//               </summary>
//               {/* </button> */}
//               <br />
//               <br />
//               <div id="collapsiblecontainer3" class="collapse show">
//                 <textarea
//                   class="form-control"
//                   cols="100"
//                   rows="100"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     margin: "0 0",
//                     "text-align": "center"
//                   }}
//                   width="100%"
//                   id="tp2"
//                 />
//               </div>
//             </details>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
