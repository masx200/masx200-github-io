/* 终于找到问题所在了!如果严格模式存在使用eval的语句则uglify-js压缩失败 */
// import regeneratorRuntime from "regenerator-runtime";
"use strict";
var JSFuck = require("./jsfuck"),
  hieroglyphy = require("./hieroglyphy");
// var JSFuck = _0x546dc4;
// var hieroglyphy = _0x2df39d;
// import JSFuck from "./jsfuck";
// import hieroglyphy from "./hieroglyphy";
export default () => {
  Promise.resolve().then(() => {
    decoderrender();
  });
};

function decoderrender() {
  "use strict";
  var preandpost;
  function setDecoded(decodedCode) {
    //  eval(decodedCode);
    console.log(
      (document.querySelector("#code2").value = Function(
        `return ${decodedCode}`
      )())
    );
  }
  function tanchutanchuxiaoxitishi() {
    var id = guid();
    jQuery("#my导航栏").append(
      jQuery(`<div id="${id}" class="alert alert-success alert-dismissible fade show">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>成功!</strong> 匹配成功提示信息。
                </div>`).fadeTo(5000, 0.5, () => {
        console.log(jQuery("#" + id));
        jQuery("#" + id).remove();
      })
    );
    console.timeEnd("解码JSFUCK 和hieroglyphy");
  }

  function tanchutanchuxiaoxishibai() {
    var id = guid();
    jQuery("#my导航栏").append(
      jQuery(`<div  id="${id}" class="alert alert-danger alert-dismissible fade show">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>失败!</strong> 匹配失败提示信息。
                </div>`).fadeOut(5000, () => {
        console.log(jQuery("#" + id));
        jQuery("#" + id).remove();
      })
    );
    console.timeEnd("解码JSFUCK 和hieroglyphy");
  }

  //   ((JSFuck, hieroglyphy) => {
  function tpipeichunzifuchuan(codestring) {
    try {
      console.log(
        (document.querySelector("#code2").value = Function(
          `return ${codestring}`
        )())
        //   eval(codestring)
      );
      console.log("匹配字符模式成功");
      tanchutanchuxiaoxitishi();
      return 1;
    } catch (e) {
      console.log("匹配错误");

      tanchutanchuxiaoxishibai();
      return 0;
    }
  }

  function mystart() {
    $("#run").click(function() {
      Function(`return ${$2("code2").value}`)();
      //   eval($2("code2").value);
    });

    $("#decode").click(() => {
      Promise.resolve().then(() => {
        decode();
      });
    });

    $("#my主体").css("padding-top", $("#my导航栏").height());
    // try {
    //   document.querySelector("#code").value = hieroglyphy.hieroglyphyScript(
    //     `alert('1');console.log('hello')`
    //   );
    // } catch (error) {}
  }

  function pipeizifu(pre, post) {
    var prefix = pre,
      postfix = post;

    var result = isMatching(code.value, patternCreator(prefix, postfix));

    if (result) {
      try {
        setDecoded(result);
        console.log("匹配成功");

        return 1;
      } catch (e) {}
    }
  }
  function patternCreator(prefix, postfix) {
    var replacedPrefix = prefix.replace(/[\[\]\(\)\+\!]/g, "\\$&");
    var replacedPostfix = postfix.replace(/[\[\]\(\)\+\!]/g, "\\$&");

    return replacedPrefix + "(.*)" + replacedPostfix;
  }

  function isMatching(string, pattern) {
    var result = string.match(new RegExp(pattern));
    if (result) return result[1];

    return null;
  }

  function $2(id) {
    return document.getElementById(id);
  }

  function guid() {
    return "xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  function decode() {
    var code = document.querySelector("#code");
    if (code.value.length === 0) {
      alert("输入框不能为空");
      return;
    }
    console.time("解码JSFUCK 和hieroglyphy");
    console.log("解码JSFUCK 和hieroglyphy");
    if (!preandpost) {
      preandpost = [
        {
          prefix:
            "[][(![]+[])[!+[]+!![]+!![]]+([]+{})[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]](",
          postfix: ")()"
        },
        {
          prefix:
            "[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]](",
          postfix: ")()"
        },
        {
          prefix:
            "[][" +
            hieroglyphy.hieroglyphyString("sort") +
            "][" +
            hieroglyphy.hieroglyphyString("constructor") +
            "]" +
            "(",
          postfix: ")()"
        },
        {
          prefix:
            "[][" +
            JSFuck.encode("filter") +
            "]" +
            "[" +
            JSFuck.encode("constructor") +
            "](",
          postfix: ")()"
        }
      ];
    }

    for (var e = 0; e < preandpost.length; e++) {
      if (pipeizifu(preandpost[e].prefix, preandpost[e].postfix)) {
        console.log("使用匹配模版" + (e + 1) + "成功");
        tanchutanchuxiaoxitishi();
        return 1;
      }
      // else {
      // }
    }
    tpipeichunzifuchuan(code.value);
  }

  mystart();

  //   })(JSFuck, hieroglyphy);
}
