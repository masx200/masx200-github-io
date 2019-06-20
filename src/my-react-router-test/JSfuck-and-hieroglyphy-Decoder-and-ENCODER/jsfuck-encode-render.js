var myservice; /* 不要每次挂载组件时都创建新的worker */
export function 关闭所有worker() {
  try {
    myservice.terminate();
  } catch (error) {}
}
/* import "../拉伸导航栏与主体部分的顶部距离.js";
// onload =
(() => {
  $(window).one("load",
  
   */
export default () => {
  function guid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  function tanchu弹出消息提示() {
    // var id=Math.random()*100000000|0
    var id = guid();
    jQuery("#my导航栏").append(
      jQuery(`<div id="${id}" class="alert alert-success alert-dismissible fade show">
                  <button type="button" class="close" data-dismiss="alert">&times;</button>
                  <strong>成功!</strong> 编码成功提示信息。
                  </div>`).fadeTo(10000, 0.5, () => {
        console.log(jQuery("#" + id));
        jQuery("#" + id).remove();
      })
    );
    // console.timeEnd('解码JSFUCK 和hieroglyphy')
  }
  //   var myservice = undefined;
  $2("input").value =
    "console.log('{你好吗zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')";

  function $2(id) {
    return document.getElementById(id);
  }

  function encode() {
    console.time("encodescript");
    console.log("encodescript");
    mui(document.getElementById("encode")).button("loading");

    if (!myservice) {
      myservice = new Worker("service-worker-jsfuck.js");
      console.log("创建新线程", "service-worker-jsfuck.js");
    }

    myservice.postMessage([
      $2("input").value,
      $2("eval").checked

      // $("#jsfuckscript").attr("src")
    ]);
    myservice.onmessage = e => {
      var output = e.data;
      console.log("主线程从副线程" + "接收" + "event.data\n");
      console.log(output);
      // $2("output").value = output;
      console.timeEnd("encodescript");
      console.time("requestAnimationFrame");
      jQuery("#output").val(output);
      $2("stats").innerHTML = output.length + " chars";
      mui(document.getElementById("encode")).button("reset");
      //   myservice.terminate();
      //   console.log("线程已关闭","service-worker-jsfuck.js")

      requestAnimationFrame(() => {
        console.log("弹出消息提示");
        tanchu弹出消息提示();
        console.timeEnd("requestAnimationFrame");
      });
      // tanchu弹出消息提示();
    };
    myservice.onerror = e => {
      console.error("Error:", e.message, e.filename);
      //   myservice.terminate();
      //   console.log("线程已关闭","service-worker-jsfuck.js")
    };
  }
  $("#encode").click(encode);

  $("#eval").change(encode);

  // window.onload = () => { encode() };

  // $2("run").onclick =
  $("#eval")[0].checked = true;
  $("#run").click(function() {
    var codestring = $2("output").value;
    var value = Function(`return ${codestring}`)();
    //终于找到了uglifyjs压缩混淆失败的原因了!严格模式不能使用eval!
    // eval($2("output").value);

    if (!$2("eval").checked) {
      alert('"' + value + '"');
    }
    return false;
  });
};
//   );
// })();
