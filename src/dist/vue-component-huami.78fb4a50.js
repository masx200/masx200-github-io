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
})({"my-vue-router-project/vue-huami-render.js":[function(require,module,exports) {
var _this = this;

(function () {
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
  })(typeof jQuery === "function" ? jQuery : _this);

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
      window.keysave = $("#key").val();
    } // console.log(window.keysave)

  }

  ;
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
})();
},{}],"my-vue-router-project/vue-component-huami.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var huami = {
  mounted: function mounted() {
    require("./vue-huami-render.js");

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
  template: "<div class=\"hello\"><div class=\"container\" id=\"rong1\" style=\"text-align: center;\">\n  <div class=\"\" id=\"rong2\">\n  <h2><span>1</span> \u8F93\u5165</h2><div id=\"input\"><p></p><h3>\u8BB0\u5FC6\u5BC6\u7801</h3><p></p><p><input class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 form-control\" id=\"password\" name=\"password\"type=\"password\" value tabindex=\"1\"></p><p></p><span>+</span><h3>\u533A\u5206\u4EE3\u53F7</h3><p></p><p><input class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 form-control\" id=\"key\" name=\"key\" type=\"text\"value tabindex=\"2\"></p></div><br><p></p><h2><span>2</span> \u83B7\u53D6</h2><p></p><div id=\"get\"><p id=\"tuijian\"></p><p></p><h3>\u6700\u7EC8\u5BC6\u7801</h3><p></p><span id=\"myhezi\"><p><input id=\"code16\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 snippet code16d\" readonly></p><br><p><button id=\"copycode16\" class=\"btn copycode16d\" data-clipboard-target=\"#code16\" style=\"width: 100%;\">\u70B9\u51FB\u590D\u5236</button></p></span><p><span id=\"copyOK\">\u221A\u590D\u5236\u6210\u529F</span></p><p></p></div></div></div></div>",
  name: "huami",
  created: function created() {
    console.log("huami,created"); //    /*  /*
    //      * jQuery MD5 Plugin 1.2.1
    //      * https://github.com/blueimpjQuery/jQuery-MD5
    //      *
    //      * Copyright 2010, Sebastian Tschan
    //      * https://blueimp.net
    //      *
    //      * Licensed under the MIT license:
    //      * http://creativecommons.org/licenses/MIT/
    //      *
    //      * Based on
    //      * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
    //      * Digest Algorithm, as defined in RFC 1321.
    //      * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
    //      * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
    //      * Distributed under the BSD License
    //      * See http://pajhome.org.uk/crypt/md5 for more info.
    //      */
    //     (function($) {
    //         "use strict";
    //         function safe_add(x, y) {
    //             var lsw = (x & 0xffff) + (y & 0xffff)
    //               , msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    //             return (msw << 16) | (lsw & 0xffff);
    //         }
    //         function bit_rol(num, cnt) {
    //             return (num << cnt) | (num >>> (32 - cnt));
    //         }
    //         function md5_cmn(q, a, b, x, s, t) {
    //             return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    //         }
    //         function md5_ff(a, b, c, d, x, s, t) {
    //             return md5_cmn((b & c) | (~b & d), a, b, x, s, t);
    //         }
    //         function md5_gg(a, b, c, d, x, s, t) {
    //             return md5_cmn((b & d) | (c & ~d), a, b, x, s, t);
    //         }
    //         function md5_hh(a, b, c, d, x, s, t) {
    //             return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    //         }
    //         function md5_ii(a, b, c, d, x, s, t) {
    //             return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
    //         }
    //         function binl_md5(x, len) {
    //             x[len >> 5] |= 0x80 << len % 32;
    //             x[(((len + 64) >>> 9) << 4) + 14] = len;
    //             var i, olda, oldb, oldc, oldd, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    //             for (i = 0; i < x.length; i += 16) {
    //                 olda = a;
    //                 oldb = b;
    //                 oldc = c;
    //                 oldd = d;
    //                 a = md5_ff(a, b, c, d, x[i], 7, -680876936);
    //                 d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
    //                 c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
    //                 b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
    //                 a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
    //                 d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
    //                 c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
    //                 b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
    //                 a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
    //                 d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
    //                 c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
    //                 b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
    //                 a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
    //                 d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
    //                 c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
    //                 b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
    //                 a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
    //                 d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
    //                 c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
    //                 b = md5_gg(b, c, d, a, x[i], 20, -373897302);
    //                 a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
    //                 d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
    //                 c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
    //                 b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
    //                 a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
    //                 d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
    //                 c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
    //                 b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
    //                 a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
    //                 d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
    //                 c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
    //                 b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
    //                 a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
    //                 d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
    //                 c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
    //                 b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
    //                 a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
    //                 d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
    //                 c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
    //                 b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
    //                 a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
    //                 d = md5_hh(d, a, b, c, x[i], 11, -358537222);
    //                 c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
    //                 b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
    //                 a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
    //                 d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
    //                 c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
    //                 b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
    //                 a = md5_ii(a, b, c, d, x[i], 6, -198630844);
    //                 d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
    //                 c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
    //                 b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
    //                 a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
    //                 d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
    //                 c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
    //                 b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
    //                 a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
    //                 d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
    //                 c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
    //                 b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
    //                 a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
    //                 d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
    //                 c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
    //                 b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
    //                 a = safe_add(a, olda);
    //                 b = safe_add(b, oldb);
    //                 c = safe_add(c, oldc);
    //                 d = safe_add(d, oldd);
    //             }
    //             return [a, b, c, d];
    //         }
    //         function binl2rstr(input) {
    //             var i, output = "";
    //             for (i = 0; i < input.length * 32; i += 8) {
    //                 output += String.fromCharCode((input[i >> 5] >>> i % 32) & 0xff);
    //             }
    //             return output;
    //         }
    //         function rstr2binl(input) {
    //             var i, output = [];
    //             output[(input.length >> 2) - 1] = undefined;
    //             for (i = 0; i < output.length; i += 1) {
    //                 output[i] = 0;
    //             }
    //             for (i = 0; i < input.length * 8; i += 8) {
    //                 output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
    //             }
    //             return output;
    //         }
    //         function rstr_md5(s) {
    //             return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
    //         }
    //         function rstr_hmac_md5(key, data) {
    //             var i, bkey = rstr2binl(key), ipad = [], opad = [], hash;
    //             ipad[15] = opad[15] = undefined;
    //             if (bkey.length > 16) {
    //                 bkey = binl_md5(bkey, key.length * 8);
    //             }
    //             for (i = 0; i < 16; i += 1) {
    //                 ipad[i] = bkey[i] ^ 0x36363636;
    //                 opad[i] = bkey[i] ^ 0x5c5c5c5c;
    //             }
    //             hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
    //             return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
    //         }
    //         function rstr2hex(input) {
    //             var hex_tab = "0123456789abcdef", output = "", x, i;
    //             for (i = 0; i < input.length; i += 1) {
    //                 x = input.charCodeAt(i);
    //                 output += hex_tab.charAt((x >>> 4) & 0x0f) + hex_tab.charAt(x & 0x0f);
    //             }
    //             return output;
    //         }
    //         function str2rstr_utf8(input) {
    //             return unescape(encodeURIComponent(input));
    //         }
    //         function raw_md5(s) {
    //             return rstr_md5(str2rstr_utf8(s));
    //         }
    //         function hex_md5(s) {
    //             return rstr2hex(raw_md5(s));
    //         }
    //         function raw_hmac_md5(k, d) {
    //             return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
    //         }
    //         function hex_hmac_md5(k, d) {
    //             return rstr2hex(raw_hmac_md5(k, d));
    //         }
    //         $.md5 = function(string, key, raw) {
    //             if (!key) {
    //                 if (!raw) {
    //                     return hex_md5(string);
    //                 } else {
    //                     return raw_md5(string);
    //                 }
    //             }
    //             if (!raw) {
    //                 return hex_hmac_md5(key, string);
    //             } else {
    //                 return raw_hmac_md5(key, string);
    //             }
    //         }
    //         ;
    //     }
    //     )(typeof jQuery === "function" ? jQuery : this)
    //     function countCode() {
    //         var password = $("#password").val();
    //         var key = $("#key").val();
    //         if (password && key) {
    //             var md5one = $.md5(password, key);
    //             var md5two = $.md5(md5one, "snow");
    //             var md5three = $.md5(md5one, "kise");
    //             var rule = md5three.split("");
    //             var source = md5two.split("");
    //             for (var i = 0; i <= 31; i++) {
    //                 if (isNaN(source[i])) {
    //                     var str = "sunlovesnow1990090127xykab";
    //                     if (str.search(rule[i]) > -1) {
    //                         source[i] = source[i].toUpperCase();
    //                     }
    //                 }
    //             }
    //             var code32 = source.join("");
    //             var code1 = code32.slice(0, 1);
    //             if (isNaN(code1)) {
    //                 var code16 = code32.slice(0, 16);
    //             } else {
    //                 var code16 = "K" + code32.slice(1, 16);
    //             }
    //             $("#code16").val(code16);
    //         }
    //         window.keysave = $("#key").val();
    //         // console.log(window.keysave)
    //     }
    //     $(function() {
    //         $("#password").change(countCode);
    //         $("#key").change(countCode);
    //         $("#password").keyup(countCode);
    //         $("#key").keyup(countCode);
    //         $("#code16").mouseover(function() {
    //             $("#copycode16").addClass("copycode16h");
    //             $("#code16").addClass("code16h");
    //         });
    //         $("#code16").mouseout(function() {
    //             $("#copycode16").removeClass("copycode16h");
    //             $("#code16").removeClass("code16h");
    //         });
    //         $("#copycode16").mouseover(function() {
    //             $("#copycode16").addClass("copycode16h");
    //             $("#code16").addClass("code16h");
    //         });
    //         $("#copycode16").mouseout(function() {
    //             $("#copycode16").removeClass("copycode16h");
    //             $("#code16").removeClass("code16h");
    //         });
    //         $("#copycode16").click(function() {
    //             if ($("#code16").val()) {
    //                 $("#copyOK").show();
    //                 $("#copyOK").fadeTo(0, 0).css("border-color", "#22B614").css("background-color", "#22B614").fadeTo("normal", 1).fadeTo(2000, 1).fadeTo(3000, 0, function() {
    //                     $("#copyOK").hide();
    //                 });
    //             }
    //         });
    //     });
    //     // jQuery=window. jQuery
    //     jQuery(function() {
    //         var clipboard = new ClipboardJS(".btn");
    //         clipboard.on("success", function(e) {
    //             if (!e.text) {
    //                 console.log("复制内容空")
    //             } else {
    //                 console.info("Action:", e.action);
    //                 console.info("Text:", e.text);
    //             }
    //             e.clearSelection();
    //         });
    //         clipboard.on("error", function(e) {
    //             console.error("Action:", e.action);
    //             console.error("Trigger:", e.trigger);
    //         });
    //         $("#copyOK").hide();
    //     }); */
  },
  data: function data() {
    return {};
  },
  methods: {// jQuery(){
    //     return window. jQuery
    // }
  }
};
var _default = huami;
exports.default = _default;
},{"./vue-huami-render.js":"my-vue-router-project/vue-huami-render.js"}],"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "5747" + '/');

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
},{}]},{},["node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js","my-vue-router-project/vue-component-huami.js"], null)
//# sourceMappingURL=/vue-component-huami.78fb4a50.js.map