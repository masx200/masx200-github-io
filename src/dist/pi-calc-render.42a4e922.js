// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/extendmytextarea.js":[function(require,module,exports) {
(function () {
  $(window).one("load", function () {
    $("#my主体").css("padding-top", $("#my导航栏").height());

    function makeExpandingArea(el) {
      var timer = null; //由于ie8有溢出堆栈问题，故调整了这里

      var setStyle = function setStyle(el, auto) {
        // if (auto) el.style.height = 'auto';
        if (Math.abs(parseInt(el.style.height) - el.scrollHeight) > 5) {
          console.log(parseInt(el.style.height), el.scrollHeight);
          el.style.height = el.scrollHeight + 3 + "px";
          var myptext = el; // console.log("拉伸文本框",el.outerHTML)

          console.log("拉伸文本框", parseInt(el.style.height), el.scrollHeight, myptext.outerHTML);
        }
      };

      var delayedResize = function delayedResize(el) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }

        timer = setTimeout(function () {
          setStyle(el);
        }, 200);
      };

      if (el.addEventListener) {
        el.addEventListener("input", function () {
          setStyle(el, 1);
        }, false);
        setStyle(el);
      } else if (el.attachEvent) {
        el.attachEvent("onpropertychange", function () {
          setStyle(el);
        });
        setStyle(el);
      }

      if (window.VBArray && window.addEventListener) {
        //IE9
        el.attachEvent("onkeydown", function () {
          var key = window.event.keyCode;
          if (key == 8 || key == 46) delayedResize(el);
        });
        el.attachEvent("oncut", function () {
          delayedResize(el);
        }); //处理粘贴
      }

      document.body.onmousemove = function () {
        delayedResize(el);
      };

      document.body.onmouseover = function () {
        delayedResize(el);
      };

      document.body.onmousewheel = function () {
        delayedResize(el);
      };

      document.body.onscroll = function () {
        delayedResize(el);
      };

      document.body.onmousedown = function () {
        delayedResize(el);
      };

      el.onchange = function () {
        delayedResize(el);
      };

      el.addEventListener("click", function () {
        delayedResize(el);
      });
    } //   var textarea = document.getElementById('tp');
    //   textarea.scrollHeight = 60
    //   textarea.style.height = "60px"
    //   makeExpandingArea(textarea);


    setmytextareinit("tp", "tp2", "tp-big", "tp2-big");

    function setmytextareinit() {
      for (var _len = arguments.length, id = new Array(_len), _key = 0; _key < _len; _key++) {
        id[_key] = arguments[_key];
      }

      for (var _i = 0, _id = id; _i < _id.length; _i++) {
        value = _id[_i];
        var textarea = document.getElementById(value);
        textarea.scrollHeight = 60;
        textarea.style.height = "60px";
        makeExpandingArea(textarea);
      }
    }
  });
})();
},{}],"圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mypidashujisuan-bigint.js":[function(require,module,exports) {
(function () {
  $(window).one("load", function () {
    function guid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }

    function tanchu弹出消息提示() {
      // var id=Math.random()*100000000|0
      var id = guid();
      jQuery("#my导航栏").append(jQuery("<div id=\"".concat(id, "\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              <strong>\u6210\u529F!</strong> \u8BA1\u7B97\u6210\u529F\u63D0\u793A\u4FE1\u606F\u3002\n              </div>")).fadeTo(5000, 0.5, function () {
        console.log(jQuery("#" + id));
        jQuery("#" + id).remove();
      })); // console.timeEnd('解码JSFUCK 和hieroglyphy')
    } //使用bigint测试
    //   window.onload = () => {
    //     mytestpi();
    //   };
    // $('window').load(mytestpi)


    $(document).ready(mytestpi); // mytestpi;

    var myptext,
        myshurukuangneirong,
        p,
        threadgeshu,
        x,
        piwei,
        myworker = Array(16),
        eventdata,
        strt,
        finishflag,
        durt,
        testname;

    for (var key = 0; key < myworker.length; key++) {
      myworker[key] = undefined;
    } //   console.log(myworker);


    function lashentextarea() {
      for (var _len = arguments.length, ids = new Array(_len), _key = 0; _key < _len; _key++) {
        ids[_key] = arguments[_key];
      }

      setTimeout(function () {
        for (var _i = 0, _ids = ids; _i < _ids.length; _i++) {
          value = _ids[_i];
          var myptext = document.getElementById(value);
          var el = myptext; // textarea.scrollHeight = 60
          // textarea.style.height = "60px"
          // makeExpandingArea(textarea);

          if (Math.abs(parseInt(el.style.height) - el.scrollHeight) > 5) {
            console.log(parseInt(el.style.height), el.scrollHeight);
            myptext.style.height = myptext.scrollHeight + 2 + "px";
            console.log("拉伸文本框", parseInt(el.style.height), el.scrollHeight, myptext.outerHTML);
          }
        }
      }, 0);
    }

    function mytestpi() {
      var mystartid = "#start-big"; // document.getElementById("start").onclick = mystart;

      $(mystartid).click(mystart);
      getConstpinewhighefficiency105();
    }

    function getConstpinewhighefficiency105() {
      var myeleid3 = "tp-big";
      var myinput1 = document.getElementById("thread-big");
      var myinput2 = document.getElementById("pichangwei-big");
      var mytextarea1 = document.getElementById(myeleid3);
      myinput1.value = 6;
      myinput2.value = 4; // jisuanfinishflag = 1;

      threadgeshu = 8;
      x = 0; // piwei = 3000;

      myptext = mytextarea1;
      myshurukuangneirong = " ";
      myshurukuangneirong = myshurukuangneirong + "UserAgent: " + navigator.userAgent + "\n";
      var isbigint = typeof BigInt === "function" ? "你的浏览器能够支持原生BigInt!" : "你的浏览器无法支持原生BigInt!";
      console.log(isbigint);
      myshurukuangneirong = myshurukuangneirong + isbigint + "\n开始圆周率多线程测试\n";
      myptext.value = myshurukuangneirong; // document.getElementById("start").onclick = mystart;

      lashentextarea(myeleid3, "tp2-big"); // setTimeout(function() {
      //   myptext.style.height = myptext.scrollHeight + "px";
      // }, 0);
    }

    function mystart() {
      mui(document.getElementById("start-big")).button("loading");

      bigInt.abs = function (n) {
        return bigInt(n).abs();
      };

      bigInt.mul = function (n, m) {
        return bigInt(n).multiply(m);
      };

      bigInt.div = function (n, m) {
        return bigInt(n).divide(m);
      };

      bigInt.add = function (n, m) {
        return bigInt(n).add(m);
      };

      bigInt().__proto__.cmp = bigInt().__proto__.compare;
      bigInt().__proto__.div = bigInt().__proto__.divide;
      bigInt().__proto__.mul = bigInt().__proto__.multiply;
      bigInt("90071992547409920").__proto__.cmp = bigInt("90071992547409920").__proto__.compare;
      bigInt("90071992547409920").__proto__.div = bigInt("90071992547409920").__proto__.divide;
      bigInt("90071992547409920").__proto__.mul = bigInt("90071992547409920").__proto__.multiply;
      var myinput1 = document.getElementById("thread-big");
      var myinput2 = document.getElementById("pichangwei-big");

      if (myinput1.value >= 1 && myinput1.value <= 16 && myinput2.value >= 1 && myinput2.value <= 100) {
        piwei = 1000 * Math.floor(myinput2.value);
        myinput2.value = Math.floor(myinput2.value);
        threadgeshu = Math.floor(myinput1.value);
        myinput1.value = threadgeshu;
        testname = document.title = "圆周率计算多线程" + "-" + "线程数为" + threadgeshu + "-位数为" + piwei;
        myshurukuangneirong = myshurukuangneirong + "线程数为" + threadgeshu + " ";
        myptext.value = myshurukuangneirong;
        eventdata = "圆周率计算" + piwei + "位 " + "计算圆周率中......" + "  \n"; // Decimal.precision = piwei

        myshurukuangneirong += String(eventdata);
        myptext.value = myshurukuangneirong;
        console.log(testname);
        console.time(testname);
        strt = new Date().getTime();
        p = new bigInt(0); //   myworker = [];
        //   myworker.length = threadgeshu;

        finishflag = [];
        finishflag.length = threadgeshu; //   if (typeof worker1 == "undefined") {
        //     worker1 = new Worker("mythread1-bigint.js");
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

        myworker.forEach(function (currentValue, index, arr) {
          // console.log(arr[index]);
          // console.log(arr);
          if (index >= threadgeshu) {
            return;
          }

          if (!arr[index]) {
            arr[index] = new Worker("/mythread1-bigint.de0110ac.js"); //   ,{name:"mythread1-bigint.js"+"-"+index}

            console.log("创建了新webworker线程", "mythread1-bigint.js" + "-" + index);
          } // arr[index].name ="mythread1-bigint.js"+ "-" + index;
          // console.log(arr[index].name )
          // arr[index] = new Worker("mythread1-bigint.js");


          arr[index].postMessage([piwei, threadgeshu, index]);

          arr[index].onmessage = function (event) {
            console.log("主线程从副线程" + (index + 1) + "接收" + "event.data\n");
            console.log("第一个参数", event.data[0], "\n第二个参数", event.data[1]);
            var p1 = new bigInt(event.data[0]);
            p = bigInt.add(p, p1);
            x = Math.max(x, parseInt(event.data[1]));
            finishflag[index] = 1;
            threadfinish(); //   currentValue.terminate()
          };

          arr[index].onerror = function (e) {
            // for (var key in e) {
            //     console.error(key, e[key])
            // }
            // console.error(e.message)
            console.error("Error:", e.message, e.filename); //   arr[index].terminate();
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

      if (threadgeshu == finishflag.filter(function (currentValue) {
        return currentValue == 1;
      }).length) {
        console.timeEnd(testname);
        mui(document.getElementById("start-big")).button("reset");
        var endt = new Date().getTime();
        durt = (endt - strt) / 1000;
        eventdata = "计算完成,用时" + durt + "秒第" + x + "次 " + "圆周率" + piwei + "位\n"; // +
        // "  \n" +
        // p +
        // "  \n"

        mytextarea2.value = "圆周率" + piwei + "位" + p.toString()[0] + "." + p.toString().slice(1);
        var myptext = mytextarea1;
        myshurukuangneirong += String(eventdata);
        myptext.value = myshurukuangneirong;
        tanchu弹出消息提示(); // jisuanfinishflag = 1;

        myworker.forEach(function (currentValue, index, arr) {// arr[index].terminate();
        });
        x = 0; //alert("ok")

        setTimeout(function () {
          // myptext.style.height = myptext.scrollHeight + "px";
          lashentextarea(myeleid3, myeleid4);
        }, 0);
        document.body.onmousemove = document.body.onmouseover = document.body.onmousewheel = document.body.onscroll = document.body.onmousedown = null;
      }
    }
  });
})();
},{"./mythread1-bigint.js":[["mythread1-bigint.de0110ac.js","圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mythread1-bigint.js"],"mythread1-bigint.de0110ac.js.map","圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mythread1-bigint.js"]}],"圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mypidashujisuan-decimal.js":[function(require,module,exports) {
(function () {
  $(window).one("load", function () {
    function guid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }

    function tanchu弹出消息提示() {
      // var id=Math.random()*100000000|0
      var id = guid();
      jQuery("#my导航栏").append(jQuery("<div id=\"".concat(id, "\" class=\"alert alert-success alert-dismissible fade show\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                      <strong>\u6210\u529F!</strong> \u8BA1\u7B97\u6210\u529F\u63D0\u793A\u4FE1\u606F\u3002\n                      </div>")).fadeTo(5000, 0.5, function () {
        console.log(jQuery("#" + id));
        jQuery("#" + id).remove();
      })); // console.timeEnd('解码JSFUCK 和hieroglyphy')
    } //   window.onload = () => {
    //     mytestpi();
    //   };
    // $('window').load(mytestpi)


    $(document).ready(mytestpi); // mytestpi;

    var myptext,
        myshurukuangneirong,
        p,
        threadgeshu,
        x,
        piwei,
        myworker = Array(16),
        eventdata,
        strt,
        finishflag,
        durt,
        testname;

    for (var key = 0; key < myworker.length; key++) {
      myworker[key] = undefined;
    }

    function lashentextarea() {
      for (var _len = arguments.length, ids = new Array(_len), _key = 0; _key < _len; _key++) {
        ids[_key] = arguments[_key];
      }

      setTimeout(function () {
        for (var _i = 0, _ids = ids; _i < _ids.length; _i++) {
          value = _ids[_i];
          var myptext = document.getElementById(value);
          var el = myptext; // textarea.scrollHeight = 60
          // textarea.style.height = "60px"
          // makeExpandingArea(textarea);

          if (Math.abs(parseInt(el.style.height) - el.scrollHeight) > 5) {
            console.log(parseInt(el.style.height), el.scrollHeight);
            myptext.style.height = myptext.scrollHeight + 2 + "px"; // console.log("拉伸文本框", myptext.outerHTML)

            console.log("拉伸文本框", parseInt(el.style.height), el.scrollHeight, myptext.outerHTML);
          }
        }
      }, 0);
    }

    function mytestpi() {
      // document.getElementById("start").onclick = mystart;
      $("#start").click(mystart);
      getConstpinewhighefficiency105();
    }

    function getConstpinewhighefficiency105() {
      document.getElementById("thread").value = 6;
      document.getElementById("pichangwei").value = 4; // jisuanfinishflag = 1;

      threadgeshu = 8;
      x = 0; // piwei = 3000;

      myptext = document.getElementById("tp");
      myshurukuangneirong = " ";
      myshurukuangneirong = myshurukuangneirong + "UserAgent: " + navigator.userAgent + "\n";
      myshurukuangneirong = myshurukuangneirong + "开始圆周率多线程测试\n";
      myptext.value = myshurukuangneirong; // document.getElementById("start").onclick = mystart;

      lashentextarea("tp", "tp2"); // setTimeout(function() {
      //   myptext.style.height = myptext.scrollHeight + "px";
      // }, 0);
    }

    function mystart() {
      mui(document.getElementById("start")).button("loading"); // jisuanfinishflag = 0;

      if (document.getElementById("thread").value >= 1 && document.getElementById("thread").value <= 16 && document.getElementById("pichangwei").value >= 1 && document.getElementById("pichangwei").value <= 100) {
        piwei = 1000 * Math.floor(document.getElementById("pichangwei").value);
        document.getElementById("pichangwei").value = Math.floor(document.getElementById("pichangwei").value);
        threadgeshu = Math.floor(document.getElementById("thread").value);
        document.getElementById("thread").value = threadgeshu;
        testname = document.title = "圆周率计算多线程" + "-" + "线程数为" + threadgeshu + "-位数为" + piwei;
        myshurukuangneirong = myshurukuangneirong + "线程数为" + threadgeshu + " ";
        myptext.value = myshurukuangneirong;
        eventdata = "圆周率计算" + piwei + "位 " + "计算圆周率中......" + "  \n";
        myshurukuangneirong += String(eventdata);
        myptext.value = myshurukuangneirong;
        Decimal.precision = piwei;
        console.log(testname);
        console.time(testname);
        strt = new Date().getTime();
        p = new Decimal(0); //   myworker = [];
        //   myworker.length = threadgeshu;

        finishflag = [];
        finishflag.length = threadgeshu; //   var worker1;
        //   if (typeof worker1 == "undefined") {
        //     worker1 = ("mythread1-decimal.js");
        //   }
        //   for (var i = 0, len = threadgeshu; i < len; i++) {
        //     myworker[i] = worker1;
        //   }

        myworker.forEach(function (currentValue, index, arr) {
          // arr[index] = undefined;
          if (index >= threadgeshu) {
            return;
          }

          if (!arr[index]) {
            arr[index] = new Worker("/mythread1-decimal.3779ec25.js");
            console.log("创建了新webworker线程", "mythread1-decimal.js" + "-" + index);
          } //   ,{name:"mythread1-bigint.js"+"-"+index}
          // arr[index] = new Worker("mythread1-decimal.js");
          // arr[index].name += "-" + index;


          arr[index].postMessage([piwei, threadgeshu, index]);

          arr[index].onmessage = function (event) {
            console.log("主线程从副线程" + (index + 1) + "接收" + "event.data\n");
            console.log("第一个参数", event.data[0], "\n第二个参数", event.data[1]); //   console.log(...event.data);

            var p1 = new Decimal(event.data[0]);
            p = Decimal.add(p, p1);
            x = Math.max(x, parseInt(event.data[1]));
            finishflag[index] = 1;
            threadfinish(); //   arr[index].terminate()
          };

          arr[index].onerror = function (e) {
            console.error("Error", e.message, e.filename); // for (var key in e) {
            //     console.error(key, e[key])
            // }
            // console.error(e)
            //   arr[index].terminate();
            // throw e;
          };
        });
      } else {
        alert("输入错误");
        document.getElementById("pichangwei").value = 4;
        document.getElementById("thread").value = 8;
      }
    }

    function threadfinish() {
      if (threadgeshu == finishflag.filter(function (currentValue) {
        return currentValue == 1;
      }).length) {
        mui(document.getElementById("start")).button("reset");
        console.timeEnd(testname);
        var endt = new Date().getTime();
        durt = (endt - strt) / 1000;
        eventdata = "计算完成,用时" + durt + "秒第" + x + "次 " + "圆周率" + piwei + "位\n"; // +
        // "  \n" +
        // p +
        // "  \n"

        document.getElementById("tp2").value = "圆周率" + piwei + "位" + p.toString();
        myptext = document.getElementById("tp");
        myshurukuangneirong += String(eventdata);
        myptext.value = myshurukuangneirong;
        tanchu弹出消息提示(); // jisuanfinishflag = 1;

        myworker.forEach(function (currentValue, index, arr) {// arr[index].terminate();
        });
        x = 0; //alert("ok")

        setTimeout(function () {
          // myptext.style.height = myptext.scrollHeight + "px";
          lashentextarea("tp", "tp2");
        }, 0);
        document.body.onmousemove = document.body.onmouseover = document.body.onmousewheel = document.body.onscroll = document.body.onmousedown = null;
      }
    }
  });
})();
},{"./mythread1-decimal.js":[["mythread1-decimal.3779ec25.js","圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mythread1-decimal.js"],"mythread1-decimal.3779ec25.js.map","圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mythread1-decimal.js"]}],"拉伸导航栏与主体部分的顶部距离.js":[function(require,module,exports) {
(function () {
  $(window).one("load", function () {
    $('#my主体').css('padding-top', $('#my导航栏').height());
  }); // $('#主体').css('padding-top', $('#my导航栏').height())
})();
},{}],"圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/pi-calc-render.js":[function(require,module,exports) {
"use strict";

require("./extendmytextarea.js");

require("./mypidashujisuan-bigint.js");

require("./mypidashujisuan-decimal.js");

require("../\u62C9\u4F38\u5BFC\u822A\u680F\u4E0E\u4E3B\u4F53\u90E8\u5206\u7684\u9876\u90E8\u8DDD\u79BB.js");
},{"./extendmytextarea.js":"圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/extendmytextarea.js","./mypidashujisuan-bigint.js":"圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mypidashujisuan-bigint.js","./mypidashujisuan-decimal.js":"圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mypidashujisuan-decimal.js","../拉伸导航栏与主体部分的顶部距离.js":"拉伸导航栏与主体部分的顶部距离.js"}],"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "11510" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/loaders/browser/js-loader.js"));
},{}]},{},["node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js",0,"圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/pi-calc-render.js"], null)
//# sourceMappingURL=/pi-calc-render.42a4e922.js.map