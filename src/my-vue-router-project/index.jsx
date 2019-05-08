haverun = 0
//[attribute=value]	$("[href='default.htm']")	所有带有 href 属性且值等于 "default.htm" 的元素
//$("a[target='_blank']")	选取所有 target 属性值等于 "_blank" 的 <a> 元素

//= myarrayselector  =["#App", "#about", "#home", "#huami"]

setTimeout(() => {

	window.onload()

}, 1000)
myonloadfunc=myonload2
window.onload = () => {
	if (haverun == 0) {
		haverun = 1
		console.log("开始运行此onload函数")
		myonloadfunc()
	} else {
		console.log("不要重复运行此onload函数")
	}

	// myonload1()
	// myonload2()
}
// window.Vue=Vue

//alert("webapck test");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// eslint-disable-next-line
/* eslint-disable */
// import 'babel-polyfill';
// import "@babel/polyfill";
// import React from 'react';
//////////////
// let func = () => {};
// const NUM = 45;
// let arr = [1, 2, 4];
// let arrB = arr.map(item => item * 2);

// console.log(arrB.includes(8));
// console.log("new Set(arrB) is ", new Set(arrB));
///////////////

//import Vue from 'vue'
//从cdn加载依赖包
// import App from './App'
// import router from './router'

// myhaverundone=0

// window.onload = () => {
window.mychangemenu = function () {
    //alert("changed")
    // this.myroutename = window.location.hash;
    //console.log(window.location.hash)
    //console.log(this.myroutename)
    if (window.location.hash == "#/") {
        //    window. myvueobj.isActive1 =
        window.myvueobj.$children[0].isActive2 = false
        window.myvueobj.$children[0].isActive3 = false;
        window.myvueobj.$children[0].isActive1 = true;
    } else if (window.location.hash == "#/huami") {
        window.myvueobj.$children[0].isActive1 = false
        // window.myvueobj.isActive2 = 
        window.myvueobj.$children[0].isActive3 = false;
        window.myvueobj.$children[0].isActive2 = true;
    } else if (window.location.hash == "#/about") {
        window.myvueobj.$children[0].isActive1 = false
        window.myvueobj.$children[0].isActive2 = false
        // window.myvueobj.isActive3 = false;
        window.myvueobj.$children[0].isActive3 = true;
    }
}
function myonload2  ()  {
    // jQuery - AJAX load() 方法
    //$(selector).load(URL,data,callback);
    // const { render } = ReactDOM

    //     if(   myhaverundone==1){
    // console.log("不能重复执行")
    // return;
    //     }else{
    //         myhaverundone=1
    //     }

    Vue.config.productionTip = false
    Vue.config.silent = true
    Vue.config.devtools = true
    /* eslint-disable no-new */
    Router = VueRouter
    // Vue.use(Router)
    Vue.use(VueRouter)


    //    window.myvueapp=
    App =

        {
            // render:()=>(
            //     <div>JSX</div>
            // ),
            // template: "#App",
            template:`<div id="root">
            <nav class="navbar navbar-default" role="navigation">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand">masx200的github</a>
                        <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#example-navbar-collapse">
                    <span class="sr-only">切换导航</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                    </div>
                    <div class="collapse navbar-collapse" id="example-navbar-collapse">
                        <ul class="nav navbar-nav" @click="mychangemenu()">
                            <li id="mynav1" v-bind:class="{ active: isActive1 }">
                                <!--     <a href="">首页</a> -->
                                <router-link to="/">基于VUE的首页</router-link>
                            </li>
        
                            <li id="mynav2" v-bind:class="{ active: isActive2 }">
                                <router-link to="/huami">花密网页版</router-link>
                            </li>
                            <li id="mynav3" v-bind:class="{ active: isActive3 }">
                                <router-link to="/about">关于</router-link>
                            </li>
                            <li>
                                <a href="../index.html">传统网页</a>
                            </li>
                            <!-- <li><router-link  to="/home">home</router-link></li> -->
                            <li>
                                <a href="../my-react-router-test/index.html">基于react的首页</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container">
            <router-view /> </div>
        </div>
        `,
            name: "App",
            data() {
                return {
                    isActive1: window.location.hash == "#/" ? true : false,
                    isActive2: window.location.hash == "#/huami" ? true : false,
                    isActive3: window.location.hash == "#/about" ? true : false
                    // myroutename: window.location.hash
                };
            },
            methods: {
                // mounted() {
                //     if (window.location.hash == "#/") {
                //         window.myisactive1 = true
                //         window.myisactive2 = false
                //         window.myisactive3 = false
                //     } else if (window.location.hash == "#/huami") {
                //         window.myisactive2 = true
                //         window.myisactive1 = false
                //         window.myisactive3 = false
                //     } else if (window.location.hash == "#/about") {
                //         window.myisactive3 = true
                //         window.myisactive1 = false
                //         window.myisactive2 = false
                //     }
                // }

            },
            mounted() {
                window.mychangemenu();
            }
            // },
            // watch: {
            //     myroutename: function () {
            //         // 做点什么
            //         mychangemenu();
            //     }
            // }
        }

    huami = {
        // template: "#huami",
        template:`<div class="hello">
        <div class="container" id="rong1" style="    text-align: center;">
            <div class="row" id="rong2">
                <h2>
                    <span>1</span> 输入
                </h2>
                <div id="input">
                    <p></p>
                    <h3>记忆密码</h3>
                    <p></p>
                    <p>
                        <input class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-control" id="password" name="password"
                            type="password" value tabindex="1">
                    </p>
                    <p></p>
                    <span>+</span>
                    <h3>区分代号</h3>
                    <p></p>
                    <p>
                        <input class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-control" id="key" name="key" type="text"
                            value tabindex="2">
                    </p>
                </div>
                <br>
                <p></p>
                <h2>
                    <span>2</span> 获取
                </h2>
                <p></p>
                <div id="get">
                    <p id="tuijian"></p>
                    <p></p>
                    <h3>最终密码</h3>
                    <p></p>
                    <span id="myhezi">
                        <p>
                            <input id="code16" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 snippet code16d" readonly>
                        </p>
                        <br>
                        <p>
                            <button id="copycode16" class="btn copycode16d" data-clipboard-target="#code16" style="
                            width: 100%;
                        ">点击复制</button>
                        </p>
                    </span>
                    <p>
                        <span id="copyOK">
                            √
                            复制成功
                        </span>
                    </p>
                    <p></p>
                </div>
            </div>
        </div>
    </div>`,
        name: "huami",
        data() {
            return {
                //  msg: 'Welcome to Your Vue.js App',
                // myroutename: window.location.hash
            };
        },
        methods: {
            // mychangemenu() {
            //     this.myroutename = window.location.hash;
            //     if (this.myroutename == "home" || window.location.hash == "home") {
            //         this.isActive1 = this.isActive2 = this.isActive3 = false;
            //         this.isActive1 = true;
            //     } else if (this.myroutename == "huami" || window.location.hash == "huami") {
            //         this.isActive1 = this.isActive2 = this.isActive3 = false;
            //         this.isActive2 = true;
            //     } else if (this.myroutename == "about" || window.location.hash == "about") {
            //         this.isActive1 = this.isActive2 = this.isActive3 = false;
            //         this.isActive3 = true;
            //     }
            // }
        },
        // created() {
        //     mychangemenu();
        // },
        mounted() {
            document.title="vue-router-project-"+"huami"

            // window.handleClick2()
            window.mychangemenu();

            // if (!importScripts) {
            //     var importScripts = (function(windowEval) {
            //         var xhr = new XMLHttpRequest();
            //         return function importScripts() {
            //             var args = Array.prototype.slice.call(arguments),
            //                 len = args.length,
            //                 i = 0,
            //                 meta,
            //                 data,
            //                 content;
            //             for (; i < len; i++) {
            //                 if (args[i].substr(0, 5).toLowerCase() === "data:") {
            //                     data = args[i];
            //                     content = data.indexOf(",");
            //                     meta = data.substr(5, content).toLowerCase();
            //                     data = decodeURIComponent(data.substr(content + 1));
            //                     if (/;\s*base64\s*[;,]/.test(meta)) {
            //                         data = atob(data);
            //                     }
            //                     if (/;\s*charset=[uU][tT][fF]-?8\s*[;,]/.test(meta)) {
            //                         data = decodeURIComponent(escape(data));
            //                     }
            //                 } else {
            //                     xhr.open("GET", args[i], false);
            //                     xhr.send(null);
            //                     data = xhr.responseText;
            //                 }
            //                 windowEval(data);
            //             }
            //         };
            //     })(eval);
            // }

            //importScripts("https://cdn.staticfile.org/clipboard.js/2.0.4/clipboard.min.js")

            //importScripts("https://cdn.staticfile.org/jquery/3.4.0/jquery.min.js")

            //importScripts("https://cdn.staticfile.org/jquery/3.4.0/jquery.min.js")

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
                        $("#copyOK")
                            .fadeTo(0, 0)
                            .css("border-color", "#22B614")
                            .css("background-color", "#22B614")
                            .fadeTo("normal", 1)
                            .fadeTo(2000, 1)
                            .fadeTo(3000, 0, function () {
                                $("#copyOK").hide();
                            });
                    }
                });
            });

            jQuery(function () {
                var clipboard = new ClipboardJS(".btn");

                clipboard.on("success", function (e) {
                    console.info("Action:", e.action);
                    console.info("Text:", e.text);

                    e.clearSelection();
                });

                clipboard.on("error", function (e) {
                    console.error("Action:", e.action);
                    console.error("Trigger:", e.trigger);
                });
                $("#copyOK").hide();
            })(
                // console.log($.toString())
                //         console.log(myfun1)
                // myfun1()
                // myfun2()

				/*
				 * jQuery MD5 Plugin 1.2.1
				 * https://github.com/blueimp/jQuery-MD5
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

                /*jslint bitwise: true */
                /*window unescape, jQuery */

                (function ($) {
                    "use strict";

					/*
					 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
					 * to work around bugs in some JS interpreters.
					 */
                    function safe_add(x, y) {
                        var lsw = (x & 0xffff) + (y & 0xffff),
                            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
                        return (msw << 16) | (lsw & 0xffff);
                    }

					/*
					 * Bitwise rotate a 32-bit number to the left.
					 */
                    function bit_rol(num, cnt) {
                        return (num << cnt) | (num >>> (32 - cnt));
                    }

					/*
					 * These functions implement the four basic operations the algorithm uses.
					 */
                    function md5_cmn(q, a, b, x, s, t) {
                        return safe_add(
                            bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),
                            b
                        );
                    }

                    function md5_ff(a, b, c, d, x, s, t) {
                        return md5_cmn((b & c) | (~b & d), a, b, x, s, t);
                    }

                    function md5_gg(a, b, c, d, x, s, t) {
                        return md5_cmn((b & d) | (c & ~d), a, b, x, s, t);
                    }

                    function md5_hh(a, b, c, d, x, s, t) {
                        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
                    }

                    function md5_ii(a, b, c, d, x, s, t) {
                        return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
                    }

					/*
					 * Calculate the MD5 of an array of little-endian words, and a bit length.
					 */
                    function binl_md5(x, len) {
                        /* append padding */
                        x[len >> 5] |= 0x80 << len % 32;
                        x[(((len + 64) >>> 9) << 4) + 14] = len;

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

					/*
					 * Convert an array of little-endian words to a string
					 */
                    function binl2rstr(input) {
                        var i,
                            output = "";
                        for (i = 0; i < input.length * 32; i += 8) {
                            output += String.fromCharCode((input[i >> 5] >>> i % 32) & 0xff);
                        }
                        return output;
                    }

					/*
					 * Convert a raw string to an array of little-endian words
					 * Characters >255 have their high-byte silently ignored.
					 */
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

					/*
					 * Calculate the MD5 of a raw string
					 */
                    function rstr_md5(s) {
                        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
                    }

					/*
					 * Calculate the HMAC-MD5, of a key and some data (raw strings)
					 */
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

					/*
					 * Convert a raw string to a hex string
					 */
                    function rstr2hex(input) {
                        var hex_tab = "0123456789abcdef",
                            output = "",
                            x,
                            i;
                        for (i = 0; i < input.length; i += 1) {
                            x = input.charCodeAt(i);
                            output +=
                                hex_tab.charAt((x >>> 4) & 0x0f) + hex_tab.charAt(x & 0x0f);
                        }
                        return output;
                    }

					/*
					 * Encode a string as utf-8
					 */
                    function str2rstr_utf8(input) {
                        return unescape(encodeURIComponent(input));
                    }

					/*
					 * Take string arguments and return either raw or hex encoded strings
					 */
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
                })(typeof jQuery === "function" ? jQuery : this)
            );
        }
    };

    home = {
        // template: "#home",
        template:
            `<div class="hello">
        <div class="container">
            <div class="jumbotron">
                <h1>欢迎登陆页面！</h1>
                <p>
                    <a target="_blank"  href="https://weibo.com/2174458781?/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1">一生忽而得一夏当司掌好年华的微博_微博</a>
                </p>
                <p>
                    <a target="_blank"  href="https://github.com/masx200">masx200的github主页</a>
                </p>
            </div>
        </div>
        <p><a target="_blank" href="https://cn.vuejs.org/v2/api/">文档API — Vue.js</a></p>
        
      
        
        <p><a target="_blank" href="https://cn.vuejs.org/v2/guide/">教程  介绍 — Vue.js</a></p>
        <h1>VUE ROUTER测试</h1>
        <h2>欢迎来到VUE</h2>
        <h1>Hello, world!</h1>
        <h2>现在是 {{new Date().toLocaleTimeString()}}.</h2>
        <h1>{{ msg }}</h1>
    </div>
    `,
        name: "home",
        data() {
            return {
                msg: "Welcome to Your Vue.js App",
                // myroutename: window.location.hash
            };
        },
        methods: {
            // mychangemenu() {
            //     this.myroutename = window.location.hash;
            //     if (this.myroutename == "home" || window.location.hash == "home") {
            //         this.isActive1 = this.isActive2 = this.isActive3 = false;
            //         this.isActive1 = true;
            //     } else if (this.myroutename == "huami" || window.location.hash == "huami") {
            //         this.isActive1 = this.isActive2 = this.isActive3 = false;
            //         this.isActive2 = true;
            //     } else if (this.myroutename == "about" || window.location.hash == "about") {
            //         this.isActive1 = this.isActive2 = this.isActive3 = false;
            //         this.isActive3 = true;
            //     }
            // }
        },
        mounted() {
            document.title="vue-router-project-"+"home"
            // window.handleClick1()
            window.mychangemenu();
        }
        // created() {
        //     mychangemenu();
        // }
    };
    about = {
        template: `<div class="hello">
        <img id="App-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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">
        <p><a target="_blank" href="https://cn.vuejs.org/v2/api/">文档API — Vue.js</a></p>
        
      
        
        <p><a target="_blank" href="https://cn.vuejs.org/v2/guide/">  教程介绍 — Vue.js</a></p>
        <h1>VUE ROUTER测试</h1>
    
        <h2>现在是 {{new Date().toLocaleTimeString()}}.</h2>
        <h2>
            Vue.js是一套构建用户界面的渐进式框架。<br />
            Vue 只关注视图层， 采用自底向上增量开发的设计。<br />
            Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。<br />
            Vue 学习起来非常简单<br />
            Vue.js 自身不是一个全能框架--它只聚焦于视图层。因此它非常容易学习，非常容易与其它库或已有项目整合。另一方面，在与相关工具和支持库一起使用时，Vue.js 也能完美地驱动复杂的单页应用。</h2>
        <h2>欢迎来到VUE</h2>
        <h1>Hello, world!</h1>
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <li>
                <a href="https://vuejs.org" target="_blank">Core Docs</a>
            </li>
            <li>
                <a href="https://forum.vuejs.org" target="_blank">Forum</a>
            </li>
            <li>
                <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
            </li>
            <li>
                <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
            </li>
            <br>
            <li>
                <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
            </li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li>
                <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
            </li>
            <li>
                <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
            </li>
            <li>
                <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
            </li>
            <li>
                <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
            </li>
        </ul>
    </div>
    `,
        //         render(h) {
        // //             class Apphome extends React.Component {


        // //                     render() {
        // //                         return (
        // //                             <div>JSX</div>

        // //                         )
        // //                     }
        // //                 }
        // //                 myapphome=new Apphome
        // //                 // console.log(myapphome.render.toString())
        // //                 // return myapphome.render()
        // // // return React.createElement("div", null, "JSX");
        // // console.log(React.createElement("div", null, "JSX"))
        // // console.log(h( 'div','jsx'))
        // return h( 'div','jsx')
        //                 // console.log(myapphome)
        //                 // console.log(myapphome.render())
        //             //  h = this.$createElement
        //             // console.log(this.$createElement)
        //             // return <div>JSX</div>
        // //             class Apphome extends React.Component {


        // //                 render() {
        // //                     return (
        // //                         <div>JSX</div>

        // //                     )
        // //                 }
        // //             }
        // //             console.log(Apphome.render())
        // //             return h(
        // //  Apphome.render()

        // //             )
        //             // h(
        //             //     'div','jsx'
        //             //     // <div>JSX</div>
        //             // )
        //         },
        // template: "#about",
        name: "about",
        data() {
            return {
                msg: "Welcome to Your Vue.js App",
                // myroutename: window.location.hash
            };
        },
        methods: {
            // mychangemenu() {
            //     this.myroutename = window.location.hash;
            //     if (this.myroutename == "#/" || window.location.hash == "#/") {
            //         this.isActive1 = this.isActive2 = this.isActive3 = false;
            //         this.isActive1 = true;
            //     } else if (this.myroutename == "#/huami" || window.location.hash == "#/huami") {
            //         this.isActive1 = this.isActive2 = this.isActive3 = false;
            //         this.isActive2 = true;
            //     } else if (this.myroutename == "#/about" || window.location.hash == "#/about") {
            //         this.isActive1 = this.isActive2 = this.isActive3 = false;
            //         this.isActive3 = true;
            //     }
            // }
        },
        mounted() {
            document.title="vue-router-project-"+"about"
            // console.log(
            // render(<div>JSX</div>))
            // window.handleClick3()
            window.mychangemenu();
            // class Apphome extends React.Component {


            //     render() {
            //         return (
            //             <div>JSX</div>

            //         )
            //     }
            // }
            // myapphome=new Apphome
            // console.log(myapphome)
            // console.log(myapphome.render)
            // console.log(myapphome.render())
        },
        created() {
            window.mychangemenu();
            // class Apphome extends React.Component {


            //     render() {
            //         return (
            //             <div>JSX</div>

            //         )
            //     }
            // }
            // myapphome=new Apphome
            // console.log(myapphome)
            // console.log(myapphome.render())
        }
        // created() {
        //     mychangemenu();
        // }
    };



	/*
	组件基础
    
	基本示例
	这里有一个 Vue 组件的示例：
    
	// 定义一个名为 button-counter 的新组件
	Vue.component('button-counter', {
	  data: function () {
	    return {
	      count: 0
	    }
	  },
	  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
	}) 
    */
    //    console.log(App)
    Vue.component(about.name, about)
    // console.log(about)
    Vue.component(home.name, home)

    Vue.component(huami.name, huami)
    Vue.component(App.name, App)
    // export default new Router({


    // Vue.use(VueRouter)
    // Vue.component("router-view",router)




    // if (window.location.hash == "#/") {
    //     window.myisactive1 = true
    //     window.myisactive2 = false
    //     window.myisactive3 = false
    // } else if (window.location.hash == "#/huami") {
    //     window.myisactive2 = true
    //     window.myisactive1 = false
    //     window.myisactive3 = false
    // } else if (window.location.hash == "#/about") {
    //     window.myisactive3 = true
    //     window.myisactive1 = false
    //     window.myisactive2 = false
    // }

    // window.handleClick1 = function handleClick1() {
    //     window.myisactive1 = true
    //     window.myisactive2 = false
    //     window.myisactive3 = false
    //     $("#mynav1").click()
    // }
    // window.handleClick2 = function handleClick2() {
    //     window.myisactive2 = true
    //     window.myisactive1 = false
    //     window.myisactive3 = false
    //     $("#mynav2").click()
    // }
    // window.handleClick3 = function handleClick3() {
    //     window.myisactive3 = true
    //     window.myisactive1 = false
    //     window.myisactive2 = false
    //     $("#mynav3").click()
    // }
    router = new Router({
        routes: [{
            path: '/about',
            name: 'about',
            component: about
            // component:()=>import( '@/components/about')
        },
        {
            path: '/',
            name: 'home',
            component: home
            // component:()=>import( '@/components/home')
        },
        {
            path: '/huami',
            name: 'huami',
            component: huami
            // component:()=>import( '@/components/home')
        },
        {
            path: '*',
            redirect: '/'
        }
        ]
    })
    window.myvueobj = new Vue({
        el: '#root',
        router,
        components: {
            App
        },
        template: '<App/>',
        data() {
            return {
                // isActive1:  window.location.hash == "#/"?true:false,
                // isActive2:  window.location.hash == "#/huami"?true:false,
                // isActive3:  window.location.hash == "#/about"?true:false,
                //   myroutename: window.location.hash
            };
        }
    })
}
window.onload()