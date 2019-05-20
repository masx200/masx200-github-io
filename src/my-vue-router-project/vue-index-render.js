// eslint-disable-next-line
/* eslint-disable */
// import Vue from 'vue';
// import React from 'react';
(() => {
  let myonloadfunc = myonload2;
  var herewindowonload = () => {
    if (haverun == 0) {
      haverun = 1;
      console.log("开始运行此onload函数");
      myonloadfunc();
    } else {
      console.log("不要重复运行此onload函数");
    }
  };
  $(document).ready(herewindowonload);
  //   var Router;
  // var myvueobj;
  let haverun = 0;
  // setTimeout(()=>{
  //     herewindowonload()
  // }
  // , 1000)

  // window.mychangemenu = function () {

  function myonload2() {
    Vue.config.productionTip = false;
    Vue.config.silent = true;
    Vue.config.devtools = true;
    Router = VueRouter;
    Vue.use(VueRouter);
    window.keysave = "";
    $(window).on("hashchange", () => {
      console.log("hashchange");
      $("#mynavul").click();
    });
    const about = () => import("./vue-component-about");
    const home = () => import("./vue-component-home");
    const huami = () => import("./vue-component-huami");
    const router = new VueRouter({
      routes: [
        {
          path: "/about",
          name: "about",
          //   //   component:require('./vue-component-about').default
          //   component: () => {
          //     var com = import("./vue-component-about");
          //     // console.log(com);
          //     return com;
          //   }
          component: about
        },
        {
          path: "/",
          name: "home",
          component: home
        },
        {
          path: "/huami",
          name: "huami",
          component: huami
        },
        {
          path: "*",
          redirect: "/"
        }
      ]
    });

    /*  var about = "undefined";
    var huami = (home = "undefined");
    var allcomponent = {
      about,
      huami,
      home
    }; */
    var lasthash;
    $(window).on("hashchange", hashchangehandler);
    function hashchangehandler() {
        jQuery("#example-navbar-collapse").removeClass("show")
      if (lasthash === window.location.hash) {
        console.log("hash不改变");
        return;
      }
      lasthash = window.location.hash;
      console.log("hash", window.location.hash);
      if ("" == window.location.hash) {
        window.location.hash = "#/";
        return;
      }

      /*   try {
        异步按需加载外部组件("#/", import("./vue-component-home.js"), "home");
        异步按需加载外部组件(
          "#/about",
          import("./vue-component-about.js"),
          "about"
        );
        异步按需加载外部组件(
          "#/huami",
          import("./vue-component-huami.js"),
          "huami"
        );
      } catch (e) {
        console.error(e);
      } */
      /* 
      try {
        异步按需加载外部组件("#/about", import("./module-about.js"), "about");
      } catch (e) {
        console.error(e);
      }
      try {
        异步按需加载外部组件(
          "#/rssreader",
          import("./module-rssreader.js"),
          "rssreader"
        );
      } catch (e) {
        console.error(e);
      } */
      //   } catch (e) {
      //     console.warn(e);
      //     try {
      //         $("#allnavbar").click();
      //     } catch (e) {
      //       console.warn(e);
      //     }
      //   }

      //   refreshall();
      //   console.log("about", about);
      //   console.log("app", App);
      //   console.log("rssreader", rssreader);
      /*   if ("#/about" == window.location.hash) {
        if (undefined === about) {
          console.log("加载外部组件about");
          //   console.log(require("./module-about.js"))
          //   about =require("./module-about.js").default
          //   console.log("about", about);

          import("./module-about").then(m => {
            about = m.default;
            console.log("about", about);
            refreshall();
          });
        }
      } */

      /*  function 异步按需加载外部组件(hash, lazypromise, name) {
        // console.log(hash, lazypromise, name);
        if (hash == window.location.hash) {
          if ("undefined" === allcomponent[name]) {
            console.log("加载外部组件" + name);
            //   console.log(require("./module-about.js"))
            //   about =require("./module-about.js").default
            //   console.log("about", about);

            lazypromise.then(m => {
              var componentname = (allcomponent[name] = m.default);
              console.log(name, componentname);
              router.options.routes.forEach(element => {
                //   console.log(element)
                  if(element.name===name){
                      element=componentname
                  }
              });
              console.log(router.options.routes)
        //    window.  vueroutes= router.options.routes
            //   window.componentname=componentname
            //   Vue.component(name, componentname);
              //   refreshall();
            });
          } else {
            lazypromise = null;
            // console.log(hash, lazypromise, name);
          }
        } else {
          lazypromise = null;
          //   console.log(hash, lazypromise, name);
        }
        // console.log(hash, lazypromise, name);
      } */
    }
    /*   class App extends Vue {
      constructor() {
        super();
        this.template = `<div id="root"><nav class="navbar navbar-default" role="navigation"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="../index.html">masx200的github主页</a><button type="button" class="navbar-toggle" data-toggle="collapse"data-target="#example-navbar-collapse"><span class="sr-only">切换导航</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="collapse navbar-collapse" id="example-navbar-collapse"><ul class="nav navbar-nav" id="mynavul" @click="myfreshdata()" ><li id="mynav1" v-bind:class="{ active: isActive1 }"><router-link to="/">基于VUE的首页</router-link></li><li id="mynav2" v-bind:class="{ active: isActive2 }"><router-link to="/huami">花密网页版</router-link></li><li id="mynav3" v-bind:class="{ active: isActive3 }"><router-link to="/about">关于VUE</router-link></li><li><a href="../my-react-router-test/index.html">基于react的首页</a></li><li class=""><a href="../圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/index.html">圆周率计算多线程</a></li><li><a href="../JSfuck-and-hieroglyphy-Decoder-and-ENCODER/index.html">JSfuck-and-hieroglyphy-Decoder-and-ENCODER</a></li></ul></div></div></nav><div class="container"><router-view /> </div></div>`;

        this.isActive1 = window.location.hash == "#/" ? true : false;
        this.isActive2 = window.location.hash == "#/huami" ? true : false;
        this.isActive3 = window.location.hash == "#/about" ? true : false;
      }

      mounted() {
        this.myfreshdata();
        hashchangehandler();
        // window.mychangemenu();
        // mychangemenu();
      }

      myfreshdata() {
        // console.log("myfreshdata")
        // console.log(this.isActive1,this.isActive2,this.isActive3)
        (this.isActive1 = window.location.hash == "#/" ? true : false),
          (this.isActive2 = window.location.hash == "#/huami" ? true : false),
          (this.isActive3 = window.location.hash == "#/about" ? true : false);
        // Vue.set(this.isActive1)
        console.log(
          "myfreshdata",
          this.isActive1,
          this.isActive2,
          this.isActive3
        );
      }
    } */
    // window.App2=App2
    // console.log(App2.toString())
    let App = Vue.extend({
      template: `<div id="root">
      <div id="my导航栏" class="fixed-top container-fluid">
      <nav class="navbar navbar-default navbar navbar-expand-sm bg-light navbar-light" role="navigation">
      
      <div class="container-fluid">
      <div class="navbar-header">
      <a class="navbar-brand" href="../index.html">masx200的github主页</a>
      <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#example-navbar-collapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

      
      </div>
      <div class="collapse navbar-collapse" id="example-navbar-collapse">
      <ul class="nav navbar-nav" id="mynavul" @click="myfreshdata()" >
      <li id="mynav1" v-bind:class="{ active: isActive1 }">
      <router-link to="/"  class="nav-link">基于VUE的首页</router-link>
      </li>
      <li id="mynav2" v-bind:class="{ active: isActive2 }">
      <router-link to="/huami"  class="nav-link">花密网页版</router-link>
      </li>
      <li id="mynav3" v-bind:class="{ active: isActive3 }">
      <router-link to="/about"  class="nav-link">关于VUE</router-link>
      </li>
      <li>
      <a href="../my-react-router-test/index.html"  class="nav-link">基于react的首页</a>
      </li>
      <li class="">
      <a href="../圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/index.html"  class="nav-link">圆周率计算多线程</a></li>
      <li><a href="../JSfuck-and-hieroglyphy-Decoder-and-ENCODER/index.html"  class="nav-link">JSfuck-and-hieroglyphy-Decoder-and-ENCODER</a>
      </li>
      </ul>
      </div>
      </div>
      </nav>
      </div>
      
      <div class="container" id="my主体" ><router-view /> </div>
      
      </div>`,
      name: "App",
      data() {
        return {
          isActive1: window.location.hash == "#/" ? true : false,
          isActive2: window.location.hash == "#/huami" ? true : false,
          isActive3: window.location.hash == "#/about" ? true : false
        };
      },
      methods: {
        myfreshdata() {
          // console.log("myfreshdata")
          // console.log(this.isActive1,this.isActive2,this.isActive3)
          (this.isActive1 = window.location.hash == "#/" ? true : false),
            (this.isActive2 = window.location.hash == "#/huami" ? true : false),
            (this.isActive3 = window.location.hash == "#/about" ? true : false);
          // Vue.set(this.isActive1)
          console.log(
            "myfreshdata",
            this.isActive1,
            this.isActive2,
            this.isActive3
          );
        } // mychangemenu=()=>mychangemenu
      },
      mounted() {
        this.myfreshdata();
        hashchangehandler();
        $("#mynavul").click(hashchangehandler);
        $("#my主体").css("padding-top", $("#my导航栏").height());
        // window.mychangemenu();
        // mychangemenu();
      }
    });
    // about.name="about"
    /*   let App = {
            template: `<div id="root">
<nav class="navbar navbar-default" role="navigation">
<div class="container-fluid">
<div class="navbar-header">
<a class="navbar-brand" href="../index.html">masx200的github主页</a>
<button type="button" class="navbar-toggle" data-toggle="collapse"
data-target="#example-navbar-collapse">
<span class="sr-only">切换导航</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
</div>
<div class="collapse navbar-collapse" id="example-navbar-collapse">
<ul class="nav navbar-nav" id="mynavul" @click="myfreshdata()" >
<li id="mynav1" v-bind:class="{ active: isActive1 }">
<router-link to="/">基于VUE的首页</router-link>
</li>
<li id="mynav2" v-bind:class="{ active: isActive2 }">
<router-link to="/huami">花密网页版</router-link>
</li>
<li id="mynav3" v-bind:class="{ active: isActive3 }">
<router-link to="/about">关于VUE</router-link>
</li>
<li>
<a href="../my-react-router-test/index.html">基于react的首页</a>
</li>
<li class="">
<a href="../圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/index.html">圆周率计算多线程
</a>
</li>
<li>
<a href="../JSfuck-and-hieroglyphy-Decoder-and-ENCODER/index.html">JSfuck-and-hieroglyphy-Decoder-and-ENCODER
</a>
</li>
</ul>
</div>
</div>
</nav>
<div class="container">
<router-view /> </div>
</div>
`.replace(/\n/g, ""),
            name: "App",
            data() {
                return {
                    isActive1: window.location.hash == "#/" ? true : false,
                    isActive2: window.location.hash == "#/huami" ? true : false,
                    isActive3: window.location.hash == "#/about" ? true : false
                };
            },
            methods: {
                myfreshdata() {
                    // console.log("myfreshdata")
                    // console.log(this.isActive1,this.isActive2,this.isActive3)
                    this.isActive1 = window.location.hash == "#/" ? true : false,
                    this.isActive2 = window.location.hash == "#/huami" ? true : false,
                    this.isActive3 = window.location.hash == "#/about" ? true : false;
                    // Vue.set(this.isActive1)
                    console.log("myfreshdata", this.isActive1, this.isActive2, this.isActive3)
                }// mychangemenu=()=>mychangemenu
            },
            mounted() {// window.mychangemenu();
            // mychangemenu();
            }
        } */
    //       /*   let huami = {
    //             mounted() {
    //                 console.log("huami,mounted")
    //                 document.title = "vue-router-project-" + "huami"
    //                 // window.mychangemenu();
    //                 // console.log("keysave")
    //                 console.log("keysave=", window.keysave)
    //                 $("#key").val(window.keysave);
    //                 // mychangemenu();
    //                 // console.log(keysave)

    //             },
    //             beforeDestroy() {
    //                 console.log("huami,beforeDestroy")
    //                 console.log("keysave=", window.keysave)

    //                 // window.keysave = $("#key").val();
    //                 // console.log(window.keysave)
    //             },
    //             //beforeDestroy
    //             activated() {// console.log("huami, activated")

    //             },
    //             //activated
    //             updated() {// console.log("huami, updated")

    //             },
    //             beforeUpdate() {
    //             // console.log("huami,beforeUpdate")
    //             },

    //             beforeCreate() {// console.log("huami,beforeCreate")
    //             },
    //             beforeMount() {// console.log("huami,beforeMount")

    //             },
    //             destroyed() {// console.log("huami,destroyed")
    //             },
    //             template: `<div class="hello">
    // <div class="container" id="rong1" style="
    // text-align: center;">
    // <div class="row" id="rong2">
    // <h2>
    // <span>1</span> 输入
    // </h2>
    // <div id="input">
    // <p></p>
    // <h3>记忆密码</h3>
    // <p></p>
    // <p>
    // <input class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-control" id="password" name="password"
    // type="password" value tabindex="1">
    // </p>
    // <p></p>
    // <span>+</span>
    // <h3>区分代号</h3>
    // <p></p>
    // <p>
    // <input class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-control" id="key" name="key" type="text"
    // value tabindex="2">
    // </p>
    // </div>
    // <br>
    // <p></p>
    // <h2>
    // <span>2</span> 获取
    // </h2>
    // <p></p>
    // <div id="get">
    // <p id="tuijian"></p>
    // <p></p>
    // <h3>最终密码</h3>
    // <p></p>
    // <span id="myhezi">
    // <p>
    // <input id="code16" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 snippet code16d" readonly>
    // </p>
    // <br>
    // <p>
    // <button id="copycode16" class="btn copycode16d" data-clipboard-target="#code16" style="
    // width: 100%;
    // ">点击复制</button>
    // </p>
    // </span>
    // <p>
    // <span id="copyOK">
    // √
    // 复制成功
    // </span>
    // </p>
    // <p></p>
    // </div>
    // </div>
    // </div>
    // </div>
    // `.replace(/\n/g, ""),
    //             name: "huami",
    //             created() {
    //                 console.log("huami,created");
    //                 /*
    //                  * jQuery MD5 Plugin 1.2.1
    //                  * https://github.com/blueimpjQuery/jQuery-MD5
    //                  *
    //                  * Copyright 2010, Sebastian Tschan
    //                  * https://blueimp.net
    //                  *
    //                  * Licensed under the MIT license:
    //                  * http://creativecommons.org/licenses/MIT/
    //                  *
    //                  * Based on
    //                  * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
    //                  * Digest Algorithm, as defined in RFC 1321.
    //                  * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
    //                  * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
    //                  * Distributed under the BSD License
    //                  * See http://pajhome.org.uk/crypt/md5 for more info.
    //                  */
    //                 (function($) {
    //                     "use strict";

    //                     function safe_add(x, y) {
    //                         var lsw = (x & 0xffff) + (y & 0xffff)
    //                           , msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    //                         return (msw << 16) | (lsw & 0xffff);
    //                     }

    //                     function bit_rol(num, cnt) {
    //                         return (num << cnt) | (num >>> (32 - cnt));
    //                     }

    //                     function md5_cmn(q, a, b, x, s, t) {
    //                         return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    //                     }

    //                     function md5_ff(a, b, c, d, x, s, t) {
    //                         return md5_cmn((b & c) | (~b & d), a, b, x, s, t);
    //                     }

    //                     function md5_gg(a, b, c, d, x, s, t) {
    //                         return md5_cmn((b & d) | (c & ~d), a, b, x, s, t);
    //                     }

    //                     function md5_hh(a, b, c, d, x, s, t) {
    //                         return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    //                     }

    //                     function md5_ii(a, b, c, d, x, s, t) {
    //                         return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
    //                     }

    //                     function binl_md5(x, len) {
    //                         x[len >> 5] |= 0x80 << len % 32;
    //                         x[(((len + 64) >>> 9) << 4) + 14] = len;
    //                         var i, olda, oldb, oldc, oldd, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    //                         for (i = 0; i < x.length; i += 16) {
    //                             olda = a;
    //                             oldb = b;
    //                             oldc = c;
    //                             oldd = d;
    //                             a = md5_ff(a, b, c, d, x[i], 7, -680876936);
    //                             d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
    //                             c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
    //                             b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
    //                             a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
    //                             d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
    //                             c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
    //                             b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
    //                             a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
    //                             d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
    //                             c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
    //                             b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
    //                             a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
    //                             d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
    //                             c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
    //                             b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
    //                             a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
    //                             d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
    //                             c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
    //                             b = md5_gg(b, c, d, a, x[i], 20, -373897302);
    //                             a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
    //                             d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
    //                             c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
    //                             b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
    //                             a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
    //                             d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
    //                             c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
    //                             b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
    //                             a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
    //                             d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
    //                             c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
    //                             b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
    //                             a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
    //                             d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
    //                             c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
    //                             b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
    //                             a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
    //                             d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
    //                             c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
    //                             b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
    //                             a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
    //                             d = md5_hh(d, a, b, c, x[i], 11, -358537222);
    //                             c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
    //                             b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
    //                             a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
    //                             d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
    //                             c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
    //                             b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
    //                             a = md5_ii(a, b, c, d, x[i], 6, -198630844);
    //                             d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
    //                             c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
    //                             b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
    //                             a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
    //                             d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
    //                             c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
    //                             b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
    //                             a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
    //                             d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
    //                             c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
    //                             b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
    //                             a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
    //                             d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
    //                             c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
    //                             b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
    //                             a = safe_add(a, olda);
    //                             b = safe_add(b, oldb);
    //                             c = safe_add(c, oldc);
    //                             d = safe_add(d, oldd);
    //                         }
    //                         return [a, b, c, d];
    //                     }

    //                     function binl2rstr(input) {
    //                         var i, output = "";
    //                         for (i = 0; i < input.length * 32; i += 8) {
    //                             output += String.fromCharCode((input[i >> 5] >>> i % 32) & 0xff);
    //                         }
    //                         return output;
    //                     }

    //                     function rstr2binl(input) {
    //                         var i, output = [];
    //                         output[(input.length >> 2) - 1] = undefined;
    //                         for (i = 0; i < output.length; i += 1) {
    //                             output[i] = 0;
    //                         }
    //                         for (i = 0; i < input.length * 8; i += 8) {
    //                             output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
    //                         }
    //                         return output;
    //                     }

    //                     function rstr_md5(s) {
    //                         return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
    //                     }

    //                     function rstr_hmac_md5(key, data) {
    //                         var i, bkey = rstr2binl(key), ipad = [], opad = [], hash;
    //                         ipad[15] = opad[15] = undefined;
    //                         if (bkey.length > 16) {
    //                             bkey = binl_md5(bkey, key.length * 8);
    //                         }
    //                         for (i = 0; i < 16; i += 1) {
    //                             ipad[i] = bkey[i] ^ 0x36363636;
    //                             opad[i] = bkey[i] ^ 0x5c5c5c5c;
    //                         }
    //                         hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
    //                         return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
    //                     }

    //                     function rstr2hex(input) {
    //                         var hex_tab = "0123456789abcdef", output = "", x, i;
    //                         for (i = 0; i < input.length; i += 1) {
    //                             x = input.charCodeAt(i);
    //                             output += hex_tab.charAt((x >>> 4) & 0x0f) + hex_tab.charAt(x & 0x0f);
    //                         }
    //                         return output;
    //                     }

    //                     function str2rstr_utf8(input) {
    //                         return unescape(encodeURIComponent(input));
    //                     }

    //                     function raw_md5(s) {
    //                         return rstr_md5(str2rstr_utf8(s));
    //                     }

    //                     function hex_md5(s) {
    //                         return rstr2hex(raw_md5(s));
    //                     }

    //                     function raw_hmac_md5(k, d) {
    //                         return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
    //                     }

    //                     function hex_hmac_md5(k, d) {
    //                         return rstr2hex(raw_hmac_md5(k, d));
    //                     }
    //                     $.md5 = function(string, key, raw) {
    //                         if (!key) {
    //                             if (!raw) {
    //                                 return hex_md5(string);
    //                             } else {
    //                                 return raw_md5(string);
    //                             }
    //                         }
    //                         if (!raw) {
    //                             return hex_hmac_md5(key, string);
    //                         } else {
    //                             return raw_hmac_md5(key, string);
    //                         }
    //                     }
    //                     ;
    //                 }
    //                 )(typeof jQuery === "function" ? jQuery : this)

    //                 function countCode() {
    //                     var password = $("#password").val();
    //                     var key = $("#key").val();
    //                     if (password && key) {
    //                         var md5one = $.md5(password, key);
    //                         var md5two = $.md5(md5one, "snow");
    //                         var md5three = $.md5(md5one, "kise");
    //                         var rule = md5three.split("");
    //                         var source = md5two.split("");
    //                         for (var i = 0; i <= 31; i++) {
    //                             if (isNaN(source[i])) {
    //                                 var str = "sunlovesnow1990090127xykab";
    //                                 if (str.search(rule[i]) > -1) {
    //                                     source[i] = source[i].toUpperCase();
    //                                 }
    //                             }
    //                         }
    //                         var code32 = source.join("");
    //                         var code1 = code32.slice(0, 1);
    //                         if (isNaN(code1)) {
    //                             var code16 = code32.slice(0, 16);
    //                         } else {
    //                             var code16 = "K" + code32.slice(1, 16);
    //                         }
    //                         $("#code16").val(code16);
    //                     }

    //                     window.keysave = $("#key").val();
    //                     // console.log(window.keysave)
    //                 }
    //                 $(function() {
    //                     $("#password").change(countCode);
    //                     $("#key").change(countCode);
    //                     $("#password").keyup(countCode);
    //                     $("#key").keyup(countCode);
    //                     $("#code16").mouseover(function() {
    //                         $("#copycode16").addClass("copycode16h");
    //                         $("#code16").addClass("code16h");
    //                     });
    //                     $("#code16").mouseout(function() {
    //                         $("#copycode16").removeClass("copycode16h");
    //                         $("#code16").removeClass("code16h");
    //                     });
    //                     $("#copycode16").mouseover(function() {
    //                         $("#copycode16").addClass("copycode16h");
    //                         $("#code16").addClass("code16h");
    //                     });
    //                     $("#copycode16").mouseout(function() {
    //                         $("#copycode16").removeClass("copycode16h");
    //                         $("#code16").removeClass("code16h");
    //                     });
    //                     $("#copycode16").click(function() {
    //                         if ($("#code16").val()) {
    //                             $("#copyOK").show();
    //                             $("#copyOK").fadeTo(0, 0).css("border-color", "#22B614").css("background-color", "#22B614").fadeTo("normal", 1).fadeTo(2000, 1).fadeTo(3000, 0, function() {
    //                                 $("#copyOK").hide();
    //                             });
    //                         }
    //                     });
    //                 });
    //                 // jQuery=window. jQuery
    //                 jQuery(function() {
    //                     var clipboard = new ClipboardJS(".btn");
    //                     clipboard.on("success", function(e) {
    //                         if (!e.text) {
    //                             console.log("复制内容空")
    //                         } else {
    //                             console.info("Action:", e.action);
    //                             console.info("Text:", e.text);
    //                         }

    //                         e.clearSelection();
    //                     });
    //                     clipboard.on("error", function(e) {
    //                         console.error("Action:", e.action);
    //                         console.error("Trigger:", e.trigger);
    //                     });
    //                     $("#copyOK").hide();
    //                 });

    //             },
    //             data() {
    //                 return {};
    //             },
    //             methods: {// jQuery(){
    //             //     return window. jQuery
    //             // }

    //             }

    //         }; */
    /*  let home = {
      template: `<div class="hello">
<div class="container">
<div class="jumbotron">
<h1>欢迎登陆页面！</h1>
<p>
<a target="_blank"
href="https://weibo.com/2174458781?">一生忽而得一夏当司掌好年华的微博</a>
</p>
<p>
<a target="_blank"
href="https://github.com/masx200">masx200的github仓库</a>
</p>
</div>
</div>
<p><a target="_blank" href="https://cn.vuejs.org/v2/api/">文档API — Vue.js</a></p>
<p><a target="_blank" href="https://cn.vuejs.org/v2/guide/">教程
介绍 — Vue.js</a></p>
<h1>VUE ROUTER测试</h1>
<h2>欢迎来到VUE</h2>
<h1>Hello, world!</h1>
<h2>现在是 {{new Date().toLocaleTimeString()}}.</h2>
<h1>{{ msg }}</h1>
</div>
`.replace(/\n/g, ""),
      name: "home",
      data() {
        return {
          msg: "Welcome to Your Vue.js App"
        };
      },
      methods: {},
      mounted() {
        document.title = "vue-router-project-" + "home";
        // window.mychangemenu();
        // mychangemenu();
      }
    }; */
    /*  about = {
    template:` <div class="hello"><img id="App-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"><p><a target="_blank" href="https://cn.vuejs.org/v2/api/">文档API — Vue.js</a></p><p><a target="_blank" href="https://cn.vuejs.org/v2/guide/">教程介绍 — Vue.js</a></p><h1>VUE ROUTER测试</h1><h2>现在是 {{new Date().toLocaleTimeString()}}.</h2><h2>Vue.js是一套构建用户界面的渐进式框架。<br />Vue 只关注视图层， 采用自底向上增量开发的设计。<br />Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。<br />Vue 学习起来非常简单<br />Vue.js 自身不是一个全能框架--它只聚焦于视图层。因此它非常容易学习，非常容易与其它库或已有项目整合。另一方面，在与相关工具和支持库一起使用时，Vue.js 也能完美地驱动复杂的单页应用。</h2><h2>欢迎来到VUE</h2><h1>Hello, world!</h1><h1>{{ msg }}</h1><h2>Essential Links</h2><ul><li><a href="https://vuejs.org" target="_blank">Core Docs</a></li><li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li><li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li><li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li><br><li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li></ul><h2>Ecosystem</h2><ul><li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li><li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li><li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li><li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li></ul></div>`,
    name: "about",
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
        };
    },
    methods: {},
    mounted() {
        document.title = "vue-router-project-" + "about"
        // window.mychangemenu();
        // mychangemenu();
    },
    created() {// window.mychangemenu();
    }
}; */
    try {
      Vue.component("App", App);
      //   Vue.component("about", about);
      //   Vue.component("home", home);
      //   Vue.component("huami", huami);
    } catch (error) {
      console.error(error);
    }
    /*   home = ({
        template: `<div class="hello"><div class="container"><div class="jumbotron"><h1>欢迎登陆页面！</h1><p><a target="_blank"href="https://weibo.com/2174458781?">一生忽而得一夏当司掌好年华的微博</a></p><p><a target="_blank"href="https://github.com/masx200">masx200的github仓库</a></p></div></div><p><a target="_blank" href="https://cn.vuejs.org/v2/api/">文档API — Vue.js</a></p><p><a target="_blank" href="https://cn.vuejs.org/v2/guide/">教程介绍 — Vue.js</a></p><h1>VUE ROUTER测试</h1><h2>欢迎来到VUE</h2><h1>Hello, world!</h1><h2>现在是 {{new Date().toLocaleTimeString()}}.</h2><h1>{{ msg }}</h1></div>`,
        name: "home",
        data() {
          return {
            msg: "Welcome to Your Vue.js App"
          };
        },
        methods: {},
        mounted() {
          document.title = "vue-router-project-" + "home";
          // window.mychangemenu();
          // mychangemenu();
        }
      }); */

    // console.log(router)
    // window.myvueobj = new Vue({
    new Vue({
      el: "#root",
      router,
      components: {
        App
      },
      template: "<App/>",
      data() {
        return {};
      }
    });

    // function mychangemenu() {
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
  // herewindowonload()
})();
