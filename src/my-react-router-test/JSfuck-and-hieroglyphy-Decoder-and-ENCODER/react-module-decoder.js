import decoderrender from "./decoder-render";
// import "./JSfuck-and-hieroglyphy-Decoder-and-ENCODER.less"
var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
export default class Decoder extends React.Component {
  componentDidMount() {
    document.title =
      "React router App-" + "JSfuck Decoder and hieroglyphy decoder";
    decoderrender();
  }
  render() {
    return (
      <div class="JSfuck-Decoder-and-hieroglyphy-decoder">
        {/* The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX. */}
        <h1
          style={{
            "font-size": "30px"
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
          placeholder="Paste your code here!"
          id="code"
          style={{
            width: "100%",
            "min-height": "250px"
          }}
          //   style="width:100%;min-height:250px"
        />
        <input
          type="button"
          id="decode"
          value="Decode"
          class="btn btn-primary btn-lg"
        />
        <textarea
          id="code2"
          style={{ width: "100%", "min-height": "250px" }}
          // style="width:100%;min-height:250px"
        />

        <button class="btn btn-outline-primary btn-lg" id="run">
          Run This
        </button>
        <br />
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
        <a href="https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js">
          https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js
        </a>
      </div>
    );
  }
}