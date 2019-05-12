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
})({"my-vue-router-project/index.js":[function(require,module,exports) {
// eslint-disable-next-line

/* eslint-disable */
// import React from 'react';
(function () {
  // var myvueobj;
  var haverun = 0;
  setTimeout(function () {
    window.onload();
  }, 1000);
  var myonloadfunc = myonload2;

  window.onload = function () {
    if (haverun == 0) {
      haverun = 1;
      console.log("开始运行此onload函数");
      myonloadfunc();
    } else {
      console.log("不要重复运行此onload函数");
    }
  }; // window.mychangemenu = function () {


  function myonload2() {
    Vue.config.productionTip = false;
    Vue.config.silent = true;
    Vue.config.devtools = true;
    Router = VueRouter;
    Vue.use(VueRouter);
    window.keysave = "";
    $(window).on("hashchange", function () {
      console.log("hashchange");
      $("#mynavul").click();
    });
    var App = {
      template: "<div id=\"root\">\n<nav class=\"navbar navbar-default\" role=\"navigation\">\n<div class=\"container-fluid\">\n<div class=\"navbar-header\">\n<a class=\"navbar-brand\" href=\"../index.html\">masx200\u7684github\u4E3B\u9875</a>\n<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"\ndata-target=\"#example-navbar-collapse\">\n<span class=\"sr-only\">\u5207\u6362\u5BFC\u822A</span>\n<span class=\"icon-bar\"></span>\n<span class=\"icon-bar\"></span>\n<span class=\"icon-bar\"></span>\n</button>\n</div>\n<div class=\"collapse navbar-collapse\" id=\"example-navbar-collapse\">\n<ul class=\"nav navbar-nav\" id=\"mynavul\" @click=\"myfreshdata()\" >\n<li id=\"mynav1\" v-bind:class=\"{ active: isActive1 }\">\n<router-link to=\"/\">\u57FA\u4E8EVUE\u7684\u9996\u9875</router-link>\n</li>\n<li id=\"mynav2\" v-bind:class=\"{ active: isActive2 }\">\n<router-link to=\"/huami\">\u82B1\u5BC6\u7F51\u9875\u7248</router-link>\n</li>\n<li id=\"mynav3\" v-bind:class=\"{ active: isActive3 }\">\n<router-link to=\"/about\">\u5173\u4E8EVUE</router-link>\n</li>\n<li>\n<a href=\"../my-react-router-test/index.html\">\u57FA\u4E8Ereact\u7684\u9996\u9875</a>\n</li>\n<li class=\"\">\n<a href=\"../\u5706\u5468\u7387\u8BA1\u7B97-\u53EF\u8BBE\u7F6E\u5706\u5468\u7387\u4F4D\u6570-\u53EF\u9009\u62E9\u7EBF\u7A0B\u4E2A\u6570-\u591A\u7EBF\u7A0B\u5927\u6570\u6846\u67B6webworker\u8F93\u51FAuseragent\u5927\u6570\u6846\u67B6/index.html\">\u5706\u5468\u7387\u8BA1\u7B97\u591A\u7EBF\u7A0B\n</a>\n</li>\n<li>\n<a href=\"../JSfuck-and-hieroglyphy-Decoder-and-ENCODER/JSfuck-Decoder--and-hieroglyphy--decoder.html\">JSfuck-and-hieroglyphy-Decoder-and-ENCODER\n</a>\n</li>\n</ul>\n</div>\n</div>\n</nav>\n<div class=\"container\">\n<router-view /> </div>\n</div>\n".replace(/\n/g, ""),
      name: "App",
      data: function data() {
        return {
          isActive1: window.location.hash == "#/" ? true : false,
          isActive2: window.location.hash == "#/huami" ? true : false,
          isActive3: window.location.hash == "#/about" ? true : false
        };
      },
      methods: {
        myfreshdata: function myfreshdata() {
          // console.log("myfreshdata")
          // console.log(this.isActive1,this.isActive2,this.isActive3)
          this.isActive1 = window.location.hash == "#/" ? true : false, this.isActive2 = window.location.hash == "#/huami" ? true : false, this.isActive3 = window.location.hash == "#/about" ? true : false; // Vue.set(this.isActive1)

          console.log("myfreshdata", this.isActive1, this.isActive2, this.isActive3);
        } // mychangemenu=()=>mychangemenu

      },
      mounted: function mounted() {// window.mychangemenu();
        // mychangemenu();
      }
    };
    var huami = {
      mounted: function mounted() {
        console.log("huami,mounted");
        document.title = "vue-router-project-" + "huami"; // window.mychangemenu();
        // console.log("keysave")

        console.log("keysave=", window.keysave);
        $("#key").val(window.keysave); // mychangemenu();
        // console.log(keysave)
      },
      beforeDestroy: function beforeDestroy() {
        console.log("huami,beforeDestroy");
        console.log("keysave=", window.keysave); // window.keysave = $("#key").val();
        // console.log(window.keysave)
      },
      //beforeDestroy
      activated: function activated() {// console.log("huami, activated")
      },
      //activated
      updated: function updated() {// console.log("huami, updated")
      },
      beforeUpdate: function beforeUpdate() {// console.log("huami,beforeUpdate")
      },
      beforeCreate: function beforeCreate() {// console.log("huami,beforeCreate")
      },
      beforeMount: function beforeMount() {// console.log("huami,beforeMount")
      },
      destroyed: function destroyed() {// console.log("huami,destroyed")
      },
      template: "<div class=\"hello\">\n<div class=\"container\" id=\"rong1\" style=\"\ntext-align: center;\">\n<div class=\"row\" id=\"rong2\">\n<h2>\n<span>1</span> \u8F93\u5165\n</h2>\n<div id=\"input\">\n<p></p>\n<h3>\u8BB0\u5FC6\u5BC6\u7801</h3>\n<p></p>\n<p>\n<input class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 form-control\" id=\"password\" name=\"password\"\ntype=\"password\" value tabindex=\"1\">\n</p>\n<p></p>\n<span>+</span>\n<h3>\u533A\u5206\u4EE3\u53F7</h3>\n<p></p>\n<p>\n<input class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 form-control\" id=\"key\" name=\"key\" type=\"text\"\nvalue tabindex=\"2\">\n</p>\n</div>\n<br>\n<p></p>\n<h2>\n<span>2</span> \u83B7\u53D6\n</h2>\n<p></p>\n<div id=\"get\">\n<p id=\"tuijian\"></p>\n<p></p>\n<h3>\u6700\u7EC8\u5BC6\u7801</h3>\n<p></p>\n<span id=\"myhezi\">\n<p>\n<input id=\"code16\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 snippet code16d\" readonly>\n</p>\n<br>\n<p>\n<button id=\"copycode16\" class=\"btn copycode16d\" data-clipboard-target=\"#code16\" style=\"\nwidth: 100%;\n\">\u70B9\u51FB\u590D\u5236</button>\n</p>\n</span>\n<p>\n<span id=\"copyOK\">\n\u221A\n\u590D\u5236\u6210\u529F\n</span>\n</p>\n<p></p>\n</div>\n</div>\n</div>\n</div>\n".replace(/\n/g, ""),
      name: "huami",
      created: function created() {
        console.log("huami,created");
        /*
         * jQuery MD5 Plugin 1.2.1
         * https://github.com/blueimpjQuery/jQuery-MD5
         *
         * Copyright 2010, Sebastian Tschan
         * https://blueimp.net
         *
         * Licensed under the MIT license:
         * http://creativecommons.org/licenses/MIT/
         *
         * Based on
         * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
         * Digest Algorithm, as defined in RFC 1321.
         * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
         * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
         * Distributed under the BSD License
         * See http://pajhome.org.uk/crypt/md5 for more info.
         */

        (function ($) {
          "use strict";

          function safe_add(x, y) {
            var lsw = (x & 0xffff) + (y & 0xffff),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 0xffff;
          }

          function bit_rol(num, cnt) {
            return num << cnt | num >>> 32 - cnt;
          }

          function md5_cmn(q, a, b, x, s, t) {
            return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
          }

          function md5_ff(a, b, c, d, x, s, t) {
            return md5_cmn(b & c | ~b & d, a, b, x, s, t);
          }

          function md5_gg(a, b, c, d, x, s, t) {
            return md5_cmn(b & d | c & ~d, a, b, x, s, t);
          }

          function md5_hh(a, b, c, d, x, s, t) {
            return md5_cmn(b ^ c ^ d, a, b, x, s, t);
          }

          function md5_ii(a, b, c, d, x, s, t) {
            return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
          }

          function binl_md5(x, len) {
            x[len >> 5] |= 0x80 << len % 32;
            x[(len + 64 >>> 9 << 4) + 14] = len;
            var i,
                olda,
                oldb,
                oldc,
                oldd,
                a = 1732584193,
                b = -271733879,
                c = -1732584194,
                d = 271733878;

            for (i = 0; i < x.length; i += 16) {
              olda = a;
              oldb = b;
              oldc = c;
              oldd = d;
              a = md5_ff(a, b, c, d, x[i], 7, -680876936);
              d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
              c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
              b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
              a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
              d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
              c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
              b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
              a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
              d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
              c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
              b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
              a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
              d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
              c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
              b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
              a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
              d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
              c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
              b = md5_gg(b, c, d, a, x[i], 20, -373897302);
              a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
              d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
              c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
              b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
              a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
              d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
              c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
              b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
              a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
              d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
              c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
              b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
              a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
              d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
              c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
              b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
              a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
              d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
              c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
              b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
              a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
              d = md5_hh(d, a, b, c, x[i], 11, -358537222);
              c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
              b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
              a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
              d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
              c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
              b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
              a = md5_ii(a, b, c, d, x[i], 6, -198630844);
              d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
              c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
              b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
              a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
              d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
              c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
              b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
              a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
              d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
              c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
              b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
              a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
              d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
              c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
              b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
              a = safe_add(a, olda);
              b = safe_add(b, oldb);
              c = safe_add(c, oldc);
              d = safe_add(d, oldd);
            }

            return [a, b, c, d];
          }

          function binl2rstr(input) {
            var i,
                output = "";

            for (i = 0; i < input.length * 32; i += 8) {
              output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
            }

            return output;
          }

          function rstr2binl(input) {
            var i,
                output = [];
            output[(input.length >> 2) - 1] = undefined;

            for (i = 0; i < output.length; i += 1) {
              output[i] = 0;
            }

            for (i = 0; i < input.length * 8; i += 8) {
              output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
            }

            return output;
          }

          function rstr_md5(s) {
            return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
          }

          function rstr_hmac_md5(key, data) {
            var i,
                bkey = rstr2binl(key),
                ipad = [],
                opad = [],
                hash;
            ipad[15] = opad[15] = undefined;

            if (bkey.length > 16) {
              bkey = binl_md5(bkey, key.length * 8);
            }

            for (i = 0; i < 16; i += 1) {
              ipad[i] = bkey[i] ^ 0x36363636;
              opad[i] = bkey[i] ^ 0x5c5c5c5c;
            }

            hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
            return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
          }

          function rstr2hex(input) {
            var hex_tab = "0123456789abcdef",
                output = "",
                x,
                i;

            for (i = 0; i < input.length; i += 1) {
              x = input.charCodeAt(i);
              output += hex_tab.charAt(x >>> 4 & 0x0f) + hex_tab.charAt(x & 0x0f);
            }

            return output;
          }

          function str2rstr_utf8(input) {
            return unescape(encodeURIComponent(input));
          }

          function raw_md5(s) {
            return rstr_md5(str2rstr_utf8(s));
          }

          function hex_md5(s) {
            return rstr2hex(raw_md5(s));
          }

          function raw_hmac_md5(k, d) {
            return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
          }

          function hex_hmac_md5(k, d) {
            return rstr2hex(raw_hmac_md5(k, d));
          }

          $.md5 = function (string, key, raw) {
            if (!key) {
              if (!raw) {
                return hex_md5(string);
              } else {
                return raw_md5(string);
              }
            }

            if (!raw) {
              return hex_hmac_md5(key, string);
            } else {
              return raw_hmac_md5(key, string);
            }
          };
        })(typeof jQuery === "function" ? jQuery : this);

        function countCode() {
          var password = $("#password").val();
          var key = $("#key").val();

          if (password && key) {
            var md5one = $.md5(password, key);
            var md5two = $.md5(md5one, "snow");
            var md5three = $.md5(md5one, "kise");
            var rule = md5three.split("");
            var source = md5two.split("");

            for (var i = 0; i <= 31; i++) {
              if (isNaN(source[i])) {
                var str = "sunlovesnow1990090127xykab";

                if (str.search(rule[i]) > -1) {
                  source[i] = source[i].toUpperCase();
                }
              }
            }

            var code32 = source.join("");
            var code1 = code32.slice(0, 1);

            if (isNaN(code1)) {
              var code16 = code32.slice(0, 16);
            } else {
              var code16 = "K" + code32.slice(1, 16);
            }

            $("#code16").val(code16);
          }

          window.keysave = $("#key").val(); // console.log(window.keysave)
        }

        $(function () {
          $("#password").change(countCode);
          $("#key").change(countCode);
          $("#password").keyup(countCode);
          $("#key").keyup(countCode);
          $("#code16").mouseover(function () {
            $("#copycode16").addClass("copycode16h");
            $("#code16").addClass("code16h");
          });
          $("#code16").mouseout(function () {
            $("#copycode16").removeClass("copycode16h");
            $("#code16").removeClass("code16h");
          });
          $("#copycode16").mouseover(function () {
            $("#copycode16").addClass("copycode16h");
            $("#code16").addClass("code16h");
          });
          $("#copycode16").mouseout(function () {
            $("#copycode16").removeClass("copycode16h");
            $("#code16").removeClass("code16h");
          });
          $("#copycode16").click(function () {
            if ($("#code16").val()) {
              $("#copyOK").show();
              $("#copyOK").fadeTo(0, 0).css("border-color", "#22B614").css("background-color", "#22B614").fadeTo("normal", 1).fadeTo(2000, 1).fadeTo(3000, 0, function () {
                $("#copyOK").hide();
              });
            }
          });
        }); // jQuery=window. jQuery

        jQuery(function () {
          var clipboard = new ClipboardJS(".btn");
          clipboard.on("success", function (e) {
            if (!e.text) {
              console.log("复制内容空");
            } else {
              console.info("Action:", e.action);
              console.info("Text:", e.text);
            }

            e.clearSelection();
          });
          clipboard.on("error", function (e) {
            console.error("Action:", e.action);
            console.error("Trigger:", e.trigger);
          });
          $("#copyOK").hide();
        });
      },
      data: function data() {
        return {};
      },
      methods: {// jQuery(){
        //     return window. jQuery
        // }
      }
    };
    var home = {
      template: "<div class=\"hello\">\n<div class=\"container\">\n<div class=\"jumbotron\">\n<h1>\u6B22\u8FCE\u767B\u9646\u9875\u9762\uFF01</h1>\n<p>\n<a target=\"_blank\"\nhref=\"https://weibo.com/2174458781?\">\u4E00\u751F\u5FFD\u800C\u5F97\u4E00\u590F\u5F53\u53F8\u638C\u597D\u5E74\u534E\u7684\u5FAE\u535A</a>\n</p>\n<p>\n<a target=\"_blank\"\nhref=\"https://github.com/masx200\">masx200\u7684github\u4ED3\u5E93</a>\n</p>\n</div>\n</div>\n<p><a target=\"_blank\" href=\"https://cn.vuejs.org/v2/api/\">\u6587\u6863API \u2014 Vue.js</a></p>\n<p><a target=\"_blank\" href=\"https://cn.vuejs.org/v2/guide/\">\u6559\u7A0B\n\u4ECB\u7ECD \u2014 Vue.js</a></p>\n<h1>VUE ROUTER\u6D4B\u8BD5</h1>\n<h2>\u6B22\u8FCE\u6765\u5230VUE</h2>\n<h1>Hello, world!</h1>\n<h2>\u73B0\u5728\u662F {{new Date().toLocaleTimeString()}}.</h2>\n<h1>{{ msg }}</h1>\n</div>\n".replace(/\n/g, ""),
      name: "home",
      data: function data() {
        return {
          msg: "Welcome to Your Vue.js App"
        };
      },
      methods: {},
      mounted: function mounted() {
        document.title = "vue-router-project-" + "home"; // window.mychangemenu();
        // mychangemenu();
      }
    };
    var about = {
      template: "<div class=\"hello\">\n<img id=\"App-logo\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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\">\n<p><a target=\"_blank\" href=\"https://cn.vuejs.org/v2/api/\">\u6587\u6863API \u2014 Vue.js</a></p>\n<p><a target=\"_blank\" href=\"https://cn.vuejs.org/v2/guide/\">\n\u6559\u7A0B\u4ECB\u7ECD \u2014 Vue.js</a></p>\n<h1>VUE ROUTER\u6D4B\u8BD5</h1>\n<h2>\u73B0\u5728\u662F {{new Date().toLocaleTimeString()}}.</h2>\n<h2>\nVue.js\u662F\u4E00\u5957\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684\u6E10\u8FDB\u5F0F\u6846\u67B6\u3002<br />\nVue \u53EA\u5173\u6CE8\u89C6\u56FE\u5C42\uFF0C \u91C7\u7528\u81EA\u5E95\u5411\u4E0A\u589E\u91CF\u5F00\u53D1\u7684\u8BBE\u8BA1\u3002<br />\nVue \u7684\u76EE\u6807\u662F\u901A\u8FC7\u5C3D\u53EF\u80FD\u7B80\u5355\u7684 API \u5B9E\u73B0\u54CD\u5E94\u7684\u6570\u636E\u7ED1\u5B9A\u548C\u7EC4\u5408\u7684\u89C6\u56FE\u7EC4\u4EF6\u3002<br />\nVue \u5B66\u4E60\u8D77\u6765\u975E\u5E38\u7B80\u5355<br />\nVue.js \u81EA\u8EAB\u4E0D\u662F\u4E00\u4E2A\u5168\u80FD\u6846\u67B6--\u5B83\u53EA\u805A\u7126\u4E8E\u89C6\u56FE\u5C42\u3002\u56E0\u6B64\u5B83\u975E\u5E38\u5BB9\u6613\u5B66\u4E60\uFF0C\u975E\u5E38\u5BB9\u6613\u4E0E\u5176\u5B83\u5E93\u6216\u5DF2\u6709\u9879\u76EE\u6574\u5408\u3002\u53E6\u4E00\u65B9\u9762\uFF0C\u5728\u4E0E\u76F8\u5173\u5DE5\u5177\u548C\u652F\u6301\u5E93\u4E00\u8D77\u4F7F\u7528\u65F6\uFF0CVue.js \u4E5F\u80FD\u5B8C\u7F8E\u5730\u9A71\u52A8\u590D\u6742\u7684\u5355\u9875\u5E94\u7528\u3002</h2>\n<h2>\u6B22\u8FCE\u6765\u5230VUE</h2>\n<h1>Hello, world!</h1>\n<h1>{{ msg }}</h1>\n<h2>Essential Links</h2>\n<ul>\n<li>\n<a href=\"https://vuejs.org\" target=\"_blank\">Core Docs</a>\n</li>\n<li>\n<a href=\"https://forum.vuejs.org\" target=\"_blank\">Forum</a>\n</li>\n<li>\n<a href=\"https://chat.vuejs.org\" target=\"_blank\">Community Chat</a>\n</li>\n<li>\n<a href=\"https://twitter.com/vuejs\" target=\"_blank\">Twitter</a>\n</li>\n<br>\n<li>\n<a href=\"http://vuejs-templates.github.io/webpack/\" target=\"_blank\">Docs for This Template</a>\n</li>\n</ul>\n<h2>Ecosystem</h2>\n<ul>\n<li>\n<a href=\"http://router.vuejs.org/\" target=\"_blank\">vue-router</a>\n</li>\n<li>\n<a href=\"http://vuex.vuejs.org/\" target=\"_blank\">vuex</a>\n</li>\n<li>\n<a href=\"http://vue-loader.vuejs.org/\" target=\"_blank\">vue-loader</a>\n</li>\n<li>\n<a href=\"https://github.com/vuejs/awesome-vue\" target=\"_blank\">awesome-vue</a>\n</li>\n</ul>\n</div>\n".replace(/\n/g, ""),
      name: "about",
      data: function data() {
        return {
          msg: "Welcome to Your Vue.js App"
        };
      },
      methods: {},
      mounted: function mounted() {
        document.title = "vue-router-project-" + "about"; // window.mychangemenu();
        // mychangemenu();
      },
      created: function created() {// window.mychangemenu();
      }
    };
    Vue.component(about.name, about);
    Vue.component(home.name, home);
    Vue.component(huami.name, huami);
    Vue.component(App.name, App);
    var router = new Router({
      routes: [{
        path: '/about',
        name: 'about',
        component: about
      }, {
        path: '/',
        name: 'home',
        component: home
      }, {
        path: '/huami',
        name: 'huami',
        component: huami
      }, {
        path: '*',
        redirect: '/'
      }]
    }); // window.myvueobj = new Vue({

    var myvueobj = new Vue({
      el: '#root',
      router: router,
      components: {
        App: App
      },
      template: '<App/>',
      data: function data() {
        return {};
      }
    }); // function mychangemenu() {
    //     // console.log("mychangemenu")
    // //    window. keysave = $("#key").val();
    // //             console.log(keysave)
    // mycanshu=myvueobj.$children[0]
    //     if (window.location.hash == "#/") {
    //         mycanshu.isActive2 = false;
    //         mycanshu.isActive3 = false;
    //         mycanshu.isActive1 = true;
    //     } else if (window.location.hash == "#/huami") {
    //         mycanshu.isActive1 = false;
    //         mycanshu.isActive3 = false;
    //         mycanshu.isActive2 = true;
    //     } else if (window.location.hash == "#/about") {
    //         mycanshu.isActive1 = false;
    //         mycanshu.isActive2 = false;
    //         mycanshu.isActive3 = true;
    //     }
    // }
  }

  window.onload();
})();
},{}],"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "3192" + '/');

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
},{}]},{},["node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js","my-vue-router-project/index.js"], null)
//# sourceMappingURL=/my-vue-router-project.0467467d.js.map