import hieroglyphyencoderender from "./hieroglyphy-encode-render";
var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
// import "./JSfuck-and-hieroglyphy-Decoder-and-ENCODER.less"
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
        <textarea id="input" type="text" />
        <br />
        <p>
          <button
            class="btn btn-outline-success btn-lg"
            id="encodescript"
            data-loading-icon="mui-spinner mui-spinner-custom"
            type="text"
          >
            Encode script
          </button>
        </p>
        <br />
        <p>
          <button
            id="encodestring"
            type="text"
            data-loading-icon="mui-spinner mui-spinner-custom"
            class="btn btn-outline-info btn-lg"
          >
            Encode string
          </button>
        </p>
        <br />
        <br />
        <textarea id="output" />
        <div class="actions">
          <span id="stats">0 chars</span>
          <button class="btn btn-outline-primary btn-lg" id="run">
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
          <a href="https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js">
            https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js
          </a>
        </p>
      </div>
    );
  }
}
