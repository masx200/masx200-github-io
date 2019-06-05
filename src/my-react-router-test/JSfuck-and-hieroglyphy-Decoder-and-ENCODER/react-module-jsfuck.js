import jsfuckencoderender from "./jsfuck-encode-render";
var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");

// import "./JSfuck-and-hieroglyphy-Decoder-and-ENCODER.less"
export default class Jsfuck extends React.Component {
  componentDidMount() {
    document.title =
      "React router App-" +
      "JSFuck encoder- Write any JavaScript with 6 Characters: []()!+";
      jsfuckencoderender()
  }
  render() {
    return (
      <div class="JSfuck-Decoder-and-hieroglyphy-decoder">
        <h1
          style={{ "font-size": "30px" }}
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
          使用下面的表单转换您自己的脚本。取消选中“eval source”以获取纯字符串。
        </p>
        <p>
          浏览器兼容性:
          建议在最新超高版本的chrome或者Firefox或者safari浏览器中运行！
        </p>
        <br />
        <textarea id="input" type="text" />
        <br />
        <button
          class="btn btn-outline-primary btn-lg"
          id="encode"
          type="text"
          data-loading-icon="mui-spinner mui-spinner-custom"
        >
          Encode
        </button>
        <div class="checkbox">
          <input id="eval" type="checkbox" checked="" />
          <label for="eval">Eval Source</label>
        </div>
        <textarea id="output" />
        <div class="actions">
          <span id="stats">0 chars</span>
          <button class="btn btn-outline-success btn-lg" id="run">
            Run This
          </button>
        </div>
        <br />
        <p>
          <a href="https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER">
            https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER
          </a>
        </p>
        <p>
          <a href="https://github.com/aemkei/jsfuck/blob/master/jsfuck.js">
            https://github.com/aemkei/jsfuck/blob/master/jsfuck.js
          </a>
        </p>
      </div>
    );
  }
}
