// import IMPORTCJSAMDUMD from "../IMPORTCJSAMDUMD";
// import("../IMPORTCJSAMDUMD").then(IMPORTCJSAMDUMD => {
// (() => {
//   $(window).one("load",
// 自动开启严格模式
/* 应该再卸载组件时关闭所有worker */
"use strict";
const IMPORTCJSAMDUMD = window.IMPORTCJSAMDUMD;
var myworker = Array(16).fill();
export function 关闭所有worker() {
  myworker.forEach(function(currentValue, index, arr) {
    /* 可能worker的数量没有满,undefined的terminate函数不存在 */
    try {
      arr[index].terminate();
      /* 如果没有设为undefined,则下次再使用时不会开启新线程 */
      arr[index] = undefined;
    } catch (error) {}
  });
}

export default () => {
  "use strict";
  IMPORTCJSAMDUMD(
    "https://cdn.staticfile.org/big-integer/1.6.43/BigInteger.min.js",
    "big-integer"
  ).then(module => {
    const bigInt = module.default;
    var myptext,
      myshurukuangneirong,
      p,
      threadgeshu,
      x,
      piwei,
      //   myworker = Array(16).fill(),
      eventdata,
      strt,
      finishflag,
      durt,
      testname;
    mytestpi();
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
                    <strong>成功!</strong> 计算成功提示信息。
                    </div>`).fadeTo(5000, 0.5, () => {
          console.log(jQuery("#" + id));
          jQuery("#" + id).remove();
        })
      );
      // console.timeEnd('解码JSFUCK 和hieroglyphy')
    }
    //使用bigint测试
    //   window.onload = () => {
    //     mytestpi();
    //   };
    // $('window').load(mytestpi)
    //   $(document).ready(mytestpi);
    // mytestpi;
    // for (var key = 0; key < myworker.length; key++) {
    //   myworker[key] = undefined;
    // }
    //   console.log(myworker);
    function lashentextarea(...ids) {
      setTimeout(function() {
        for (var value of ids) {
          var myptext = document.getElementById(value);
          var el = myptext;
          // textarea.scrollHeight = 60
          // textarea.style.height = "60px"
          // makeExpandingArea(textarea);
          if (Math.abs(parseInt(el.style.height) - el.scrollHeight) > 5) {
            // console.log(parseInt(el.style.height), el.scrollHeight);
            myptext.style.height = myptext.scrollHeight + 2 + "px";
            console.log(
              "拉伸文本框",
              parseInt(el.style.height),
              el.scrollHeight,
              myptext.outerHTML
            );
          }
        }
      }, 0);
    }
    function mytestpi() {
      var mystartid = "#start-big";
      // document.getElementById("start").onclick = mystart;
      $(mystartid).click(mystart);
      getConstpinewhighefficiency105();
    }
    function getConstpinewhighefficiency105() {
      var myeleid3 = "tp-big";
      var myinput1 = document.getElementById("thread-big");
      var myinput2 = document.getElementById("pichangwei-big");
      var mytextarea1 = document.getElementById(myeleid3);
      myinput1.value = 6;
      myinput2.value = 4;
      // jisuanfinishflag = 1;
      threadgeshu = 8;
      x = 0;
      // piwei = 3000;
      myptext = mytextarea1;
      myshurukuangneirong = " ";
      myshurukuangneirong =
        myshurukuangneirong + "UserAgent: " + navigator.userAgent + "\n";
      var isbigint =
        typeof BigInt === "function"
          ? "你的浏览器能够支持原生BigInt!"
          : "你的浏览器无法支持原生BigInt!";
      console.log(isbigint);
      myshurukuangneirong =
        myshurukuangneirong + isbigint + "\n开始圆周率多线程测试\n";
      myptext.value = myshurukuangneirong;
      // document.getElementById("start").onclick = mystart;
      lashentextarea(myeleid3, "tp2-big");
      // setTimeout(function() {
      //   myptext.style.height = myptext.scrollHeight + "px";
      // }, 0);
    }
    function mystart() {
      mui(document.getElementById("start-big")).button("loading");
      bigInt.abs = n => bigInt(n).abs();
      bigInt.mul = (n, m) => bigInt(n).multiply(m);
      bigInt.div = (n, m) => bigInt(n).divide(m);
      bigInt.add = (n, m) => bigInt(n).add(m);
      bigInt().__proto__.cmp = bigInt().__proto__.compare;
      bigInt().__proto__.div = bigInt().__proto__.divide;
      bigInt().__proto__.mul = bigInt().__proto__.multiply;
      bigInt("90071992547409920").__proto__.cmp = bigInt(
        "90071992547409920"
      ).__proto__.compare;
      bigInt("90071992547409920").__proto__.div = bigInt(
        "90071992547409920"
      ).__proto__.divide;
      bigInt("90071992547409920").__proto__.mul = bigInt(
        "90071992547409920"
      ).__proto__.multiply;
      var myinput1 = document.getElementById("thread-big");
      var myinput2 = document.getElementById("pichangwei-big");
      if (
        myinput1.value >= 1 &&
        myinput1.value <= 16 &&
        myinput2.value >= 1 &&
        myinput2.value <= 100
      ) {
        piwei = 1000 * Math.floor(myinput2.value);
        myinput2.value = Math.floor(myinput2.value);
        threadgeshu = Math.floor(myinput1.value);
        myinput1.value = threadgeshu;
        testname = document.title =
          "圆周率计算多线程" +
          "-" +
          "线程数为" +
          threadgeshu +
          "-位数为" +
          piwei;
        myshurukuangneirong =
          myshurukuangneirong + "线程数为" + threadgeshu + " ";
        myptext.value = myshurukuangneirong;
        eventdata =
          "圆周率计算" + piwei + "位 " + "计算圆周率中......" + "  \n";
        // Decimal.precision = piwei
        myshurukuangneirong += String(eventdata);
        myptext.value = myshurukuangneirong;
        console.log(testname);
        console.time(testname);
        strt = new Date().getTime();
        p = new bigInt(0);
        //   myworker = [];
        //   myworker.length = threadgeshu;
        finishflag = [];
        finishflag.length = threadgeshu;
        //   if (typeof worker1 == "undefined") {
        //     worker1 = new Worker("service-worker-mythread1-bigint.js");
        //   }
        // worker1=Array( threadgeshu)
        //   for (var i = 0, len = threadgeshu; i < len; i++) {
        //     myworker[i] = worker1;
        //   }
        //   var worker1 = Array(threadgeshu);
        //   myworker =Array(threadgeshu);
        //   for(var key=0;key< threadgeshu; key++){
        //       myworker[key]=undefined
        //   }
        //   myworker.length = threadgeshu;
        myworker.forEach(function(currentValue, index, arr) {
          // console.log(arr[index]);
          // console.log(arr);
          if (index >= threadgeshu) {
            return;
          }
          if (!arr[index]) {
            arr[index] = new Worker("service-worker-mythread1-bigint.js");
            //   ,{name:"service-worker-mythread1-bigint.js"+"-"+index}
            console.log(
              "创建了新webworker线程",
              "service-worker-mythread1-bigint.js" + "-" + index
            );
          }
          // arr[index].name ="service-worker-mythread1-bigint.js"+ "-" + index;
          // console.log(arr[index].name )
          // arr[index] = new Worker("service-worker-mythread1-bigint.js");
          arr[index].postMessage([piwei, threadgeshu, index]);
          arr[index].onmessage = function(event) {
            console.log(
              "主线程从副线程" + (index + 1) + "接收" + "event.data\n"
            );
            console.log(
              "第一个参数",
              event.data[0],
              "\n第二个参数",
              event.data[1]
            );
            var p1 = new bigInt(event.data[0]);
            p = bigInt.add(p, p1);
            x = Math.max(x, parseInt(event.data[1]));
            finishflag[index] = 1;
            threadfinish();
            //   currentValue.terminate()
          };
          arr[index].onerror = e => {
            // for (var key in e) {
            //     console.error(key, e[key])
            // }
            // console.error(e.message)
            console.error("Error:", e.message, e.filename);
            //   arr[index].terminate();
            //   $("#tp2-big").val("Error:" + e.message+" "+e.filename);
            //   throw e;
          };
        });
      } else {
        alert("输入错误");
        myinput2.value = 4;
        myinput1.value = 8;
      }
    }
    function threadfinish() {
      var myeleid3 = "tp-big";
      var myeleid4 = "tp2-big";
      var mytextarea1 = document.getElementById(myeleid3);
      var mytextarea2 = document.getElementById(myeleid4);
      if (
        threadgeshu ==
        finishflag.filter(function(currentValue) {
          return currentValue == 1;
        }).length
      ) {
        console.timeEnd(testname);
        mui(document.getElementById("start-big")).button("reset");
        var endt = new Date().getTime();
        durt = (endt - strt) / 1000;
        eventdata =
          "计算完成,用时" +
          durt +
          "秒第" +
          x +
          "次 " +
          "圆周率" +
          piwei +
          "位\n";
        // +
        // "  \n" +
        // p +
        // "  \n"
        mytextarea2.value =
          "圆周率" +
          piwei +
          "位" +
          p.toString()[0] +
          "." +
          p.toString().slice(1);
        var myptext = mytextarea1;
        myshurukuangneirong += String(eventdata);
        myptext.value = myshurukuangneirong;
        tanchu弹出消息提示();
        // jisuanfinishflag = 1;
        // myworker.forEach(function(currentValue, index, arr) {
        //   // arr[index].terminate();
        // });
        x = 0;
        //alert("ok")
        setTimeout(function() {
          // myptext.style.height = myptext.scrollHeight + "px";
          lashentextarea(myeleid3, myeleid4);
        }, 0);
        document.body.onmousemove = document.body.onmouseover = document.body.onmousewheel = document.body.onscroll = document.body.onmousedown = null;
      }
    }
  });
};
// export { _default as default };

//   );
// })();
// });
