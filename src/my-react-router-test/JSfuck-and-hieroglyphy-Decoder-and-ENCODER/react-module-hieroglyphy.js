new ClipboardJS(".btn");
import hieroglyphyencoderender from "./hieroglyphy-encode-render";
var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
// import "./JSfuck-and-hieroglyphy-Decoder-and-ENCODER.less"
var outputdivid = "clip" + guid();
function guid() {
  return "xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
export default class Hieroglyphy extends React.Component {
  componentDidMount() {
    document.title = "React router App-" + "hieroglyphy encoder";
    hieroglyphyencoderender();
  }
  render() {
    return (
      <div class="JSfuck-Decoder-and-hieroglyphy-decoder">
        <h1 style={{ "font-size": "30px" }}>
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
        <textarea class="form-control" id="input" type="text" />
        <br />
        <p>
          <button
            class="btn btn-outline-success btn-lg"
            id="encodescript"
            data-loading-icon="mui-spinner mui-spinner-custom"
            type="text"
          >
            Encode script
          </button>{" "}
          <button
            id="encodestring"
            type="text"
            data-loading-icon="mui-spinner mui-spinner-custom"
            class="btn btn-outline-info btn-lg"
          >
            Encode string
          </button>
        </p>

        <div id={"clip" + outputdivid}>
          <textarea id="output" class="form-control" />
        </div>

        <div class="actions">
          <span id="stats">0 chars</span>
          <button class="btn btn-outline-primary btn-lg" id="run">
            Run This
          </button>{" "}
          <button
            class="btn btn-outline-success btn-lg"
            data-clipboard-target={"#" + "clip" + outputdivid}
          >
            复制
          </button>
        </div>
        <br />

        <p>
          <a href="https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER">
            https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER
          </a>
        </p>
        <p>
          <a href="https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js">
            https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js
          </a>
        </p>
      </div>
    );
  }
}
