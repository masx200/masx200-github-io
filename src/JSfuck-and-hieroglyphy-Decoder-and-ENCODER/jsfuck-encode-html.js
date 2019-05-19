// onload =
(() => {
  $(document).ready(() => {
    function guid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
        c
      ) {
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
    var myservice = undefined;
    $2("input").value =
      "console.log('{你好吗zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')";

    function $2(id) {
      return document.getElementById(id);
    }

    function encode() {
      console.time("encodescript");
      console.log("encodescript");
      mui(document.getElementById("encode")).button("loading");

      /*  var output = JSFuck.encode($2("input").value, $2("eval").checked);





        $2("output").value = output;
        $2("stats").innerHTML = output.length + " chars";
        mui(document.getElementById("encode")).button("reset");
        console.timeEnd("encodescript");
        tanchu弹出消息提示()

 */

      /** 新版:使用import JSFuck from "./jsfuck.js";后,测试结果表明使用webworker进行jsfuck速度更快*/
      /** 测试结果表明使用webworker进行jsfuck反而更慢*/
      // var output = JSFuck.encode(d[0], d[1]);
      if (!myservice) {
        myservice = new Worker("service-worker-jsfuck.js");
        console.log("创建新线程", "service-worker-jsfuck.js");
      }

      myservice.postMessage([
        $2("input").value,
        $2("eval").checked,

        $("#jsfuckscript").attr("src")
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
      /*    //   ( ()=>{
        //     mui(document.getElementById("encode")).button("loading");
        //     var output = JSFuck.encode($2("input").value, $2("eval").checked);
        //     $2("output").value = output;
        //     $2("stats").innerHTML = output.length + " chars";
        //     mui(document.getElementById("encode")).button("reset");
        //    })() */
    }
    $("#encode").click(encode);
    // $2("encode").onclick = encode;
    // $2("eval").onchange = encode;
    $("#eval").change(encode);

    // window.onload = () => { encode() };

    // $2("run").onclick =
    $("#run").click(function() {
      value = eval($2("output").value);

      if (!$2("eval").checked) {
        alert('"' + value + '"');
      }
      return false;
    });
  });
})();
