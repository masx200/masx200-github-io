//alert("webapck test");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// eslint-disable-next-line
/* eslint-disable */
// import 'babel-polyfill';
// import "@babel/polyfill";

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
window.mychangemenu = function() {
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
myonload2 = () => {
	// jQuery - AJAX load() 方法
	//$(selector).load(URL,data,callback);


	//     if(   myhaverundone==1){
	// console.log("不能重复执行")
	// return;
	//     }else{
	//         myhaverundone=1
	//     }

	Vue.config.productionTip = false

	/* eslint-disable no-new */
	Router = VueRouter
	// Vue.use(Router)
	Vue.use(VueRouter)


	//    window.myvueapp=
	App =

		{
			template: "#App",
			// template:,
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
		template: "#huami",
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
			$(function() {
				$("#password").change(countCode);
				$("#key").change(countCode);
				$("#password").keyup(countCode);
				$("#key").keyup(countCode);

				$("#code16").mouseover(function() {
					$("#copycode16").addClass("copycode16h");
					$("#code16").addClass("code16h");
				});
				$("#code16").mouseout(function() {
					$("#copycode16").removeClass("copycode16h");
					$("#code16").removeClass("code16h");
				});
				$("#copycode16").mouseover(function() {
					$("#copycode16").addClass("copycode16h");
					$("#code16").addClass("code16h");
				});
				$("#copycode16").mouseout(function() {
					$("#copycode16").removeClass("copycode16h");
					$("#code16").removeClass("code16h");
				});
				$("#copycode16").click(function() {
					if ($("#code16").val()) {
						$("#copyOK").show();
						$("#copyOK")
							.fadeTo(0, 0)
							.css("border-color", "#22B614")
							.css("background-color", "#22B614")
							.fadeTo("normal", 1)
							.fadeTo(2000, 1)
							.fadeTo(3000, 0, function() {
								$("#copyOK").hide();
							});
					}
				});
			});

			jQuery(function() {
				var clipboard = new ClipboardJS(".btn");

				clipboard.on("success", function(e) {
					console.info("Action:", e.action);
					console.info("Text:", e.text);

					e.clearSelection();
				});

				clipboard.on("error", function(e) {
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

				(function($) {
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

					$.md5 = function(string, key, raw) {
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
		template: "#home",
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

			// window.handleClick1()
			window.mychangemenu();
		}
		// created() {
		//     mychangemenu();
		// }
	};
	about = {
		template: "#about",
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


			// window.handleClick3()
			window.mychangemenu();
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
	Vue.component(about.name, about)

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
