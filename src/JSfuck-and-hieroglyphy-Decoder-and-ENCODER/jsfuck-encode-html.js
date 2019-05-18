 // onload =
 (() => {
    $(document).ready(() => {
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

        var output = JSFuck.encode($2("input").value, $2("eval").checked);
        $2("output").value = output;
        $2("stats").innerHTML = output.length + " chars";
        mui(document.getElementById("encode")).button("reset");
        console.timeEnd("encodescript");
        /** 测试结果表明使用webworker进行jsfuck反而更慢*/
        // var output = JSFuck.encode(d[0], d[1]);
        /*   if(!myservice){
             myservice = new Worker("service-worker-jsfuck.js");
            console.log("创建新线程","service-worker-jsfuck.js")
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
          $2("output").value = output;
          $2("stats").innerHTML = output.length + " chars";
          mui(document.getElementById("encode")).button("reset");
        //   myservice.terminate();
        //   console.log("线程已关闭","service-worker-jsfuck.js")
        console.timeEnd("encodescript")
        };
        myservice.onerror = e => {
          console.error("Error:", e.message);
        //   myservice.terminate();
        //   console.log("线程已关闭","service-worker-jsfuck.js")
        }; */
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