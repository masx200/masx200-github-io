var myservice; /* 不要每次挂载组件时都创建新的worker */
export function 关闭所有worker() {
  try {
    myservice.terminate();
  } catch (error) {}
}
export default function() {
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
  var lastclick;

  // $("run").onclick =
  $("#run").click(function() {
    var codestring = $2("output").value;
    var value = Function(`return ${codestring}`)();
    //终于找到了uglifyjs压缩混淆失败的原因了!严格模式不能使用eval!
    // var value = eval($2("output").value);

    if (lastclick === "encodestring") {
      alert('"' + value + '"');
    } else {
    }
    // return false;
  });
  // $("#encodescript").click(encodescript);
  // $("#encodestring").click(encodestring);
  $("#encodescript").click(() => {
    encodeall("encodescript");
  });
  $("#encodestring").click(() => {
    encodeall("encodestring");
  });
  // $("#encodestring").click(encodestring);
  // $("encodescript").onclick = encodescript;
  // $("encodestring").onclick = encodestring;
  // window.onload = () => { encodescript() };
  $2("input").value =
    "console.log('{你好吗zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')";

  function $2(id) {
    return document.getElementById(id);
  }

  function encodeall(typename) {
    console.time(typename);
    console.log(typename);
    if (!myservice) {
      myservice = new Worker("service-worker-hieroglyphy.js");
      console.log("创建新线程", "service-worker-hieroglyphy.js");
    }
    mui(document.getElementById(typename)).button("loading");
    lastclick = typename;

    // var output = hieroglyphy.hieroglyphyString(($2("input").value))
    myservice.postMessage([
      $2("input").value,
      lastclick
      //   hieroglyphy.toString()
      //   $("#hieroglyphy").attr("src")
    ]);
    myservice.onmessage = e => {
      var output = e.data;
      console.log("主线程从副线程" + "接收" + "event.data\n");
      console.log(output);

      // $2("output").value = output;
      console.timeEnd(typename);
      console.time("requestAnimationFrame");
      jQuery("#output").val(output);
      $2("stats").innerHTML = output.length + " chars";

      //   $2("output").value = output;
      //   $2("stats").innerHTML = output.length + " chars";

      //   myservice.terminate();
      //   console.log("线程已关闭","service-worker-jsfuck.js")
      // console.timeEnd("encodestring");
      requestAnimationFrame(() => {
        console.log("弹出消息提示");
        tanchu弹出消息提示();
        console.timeEnd("requestAnimationFrame");
      });
      mui(document.getElementById(typename)).button("reset");
      // tanchu弹出消息提示();
    };
    myservice.onerror = e => {
      console.error("Error:", e.message, e.filename);
      //   myservice.terminate();
      //   console.log("线程已关闭","service-worker-jsfuck.js")
    };
  }
}
