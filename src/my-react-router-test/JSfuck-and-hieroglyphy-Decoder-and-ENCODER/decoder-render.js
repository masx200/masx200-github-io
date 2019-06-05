import JSFuck from "./jsfuck";
import hieroglyphy from "./hieroglyphy";
export default function decoderrender() {
  ((JSFuck, hieroglyphy) => {
    $("#run").click(function() {
      eval($2("code2").value);
    });

    $("#decode").click(decode);

    mystart();

    var preandpost = undefined;

    function mystart() {
      $("#my主体").css("padding-top", $("#my导航栏").height());
      try {
        document.querySelector("#code").value = hieroglyphy.hieroglyphyScript(
          `alert('1');console.log("hello")`
        );
      } catch (error) {}
    }

    function 匹配纯字符串(code) {
      try {
        var mytext1 = eval(code.value);
        document.querySelector("#code2").value = mytext1;
        console.log(mytext1);
        console.log("匹配字符模式成功");
        tanchu弹出消息提示();
        return 1;
      } catch (e) {
        console.log("匹配错误");

        tanchu弹出消息失败();
        return 0;
      }
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

    function setDecoded(decodedCode) {
      var code2 = document.querySelector("#code2");

      code2.value = eval(decodedCode);
      console.log(code2.value);
    }

    function $2(id) {
      return document.getElementById(id);
    }

    function tanchu弹出消息提示() {
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

    function tanchu弹出消息失败() {
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

    function guid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
        c
      ) {
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
          tanchu弹出消息提示();
          return 1;
        } else {
        }
      }
      匹配纯字符串(code);
    }
  })(JSFuck, hieroglyphy);
}
