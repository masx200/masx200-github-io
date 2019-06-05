import IMPORTCJSAMDUMD from "../IMPORTCJSAMDUMD";

//edge和Firefox不支持动态import函数加载模块！

// eslint-disable-next-line
/* eslint-disable */
// import Vue from 'vue';
// import React from 'react';
(() => {
  $(window).one("load", () => {
    function onhashchange() {
      scrollTo(0, 0);
      $("#collapsibleNavbar").removeClass("show");
      $("#my主体").css("padding-top", $("#my导航栏").height());
    }
    $(window).on("hashchange", onhashchange);
    let haverun = 0;
    // let myonloadfunc = myonload2;
    herewindowonload();

    function herewindowonload() {
      if (haverun == 0) {
        haverun = 1;
        console.log("开始运行此onload函数");

        Promise.all([
          IMPORTCJSAMDUMD(
            `https://cdn.staticfile.org/vue-router/3.0.6/vue-router.min.js`,
            "vue-router"
          ),
          IMPORTCJSAMDUMD(
            `https://cdn.staticfile.org/vue/2.6.10/vue.min.js`,
            "vue"
          )
        ]).then(myonloadfunc);

        // myonloadfunc();
      } else {
        console.log("不要重复运行此onload函数");
      }
    }
    // $(window).one(herewindowonload);
    /* 不要写两次window onload */
    //   var Router;
    // var myvueobj;

    // setTimeout(()=>{
    //     herewindowonload()
    // }
    // , 1000)

    // window.mychangemenu = function () {

    function myonloadfunc(modulearray) {
      //   console.log(modulearray);
      var VueRouter = modulearray[0].default;
      var Vue = modulearray[1].default;
      Vue.config.productionTip = false;
      Vue.config.silent = true;
      Vue.config.devtools = true;
      //   Router = VueRouter;
      Vue.use(VueRouter);
      // window.keysave = "";
      $(window).on("hashchange", () => {
        console.log("hashchange");
        $("#mynavul").click();
      });
      const about = () => import("./vue-component-about.js");
      const home = () => import("./vue-component-home.js");
      const huami = () => import("./vue-component-huami.js");
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
            path: "",
            //   redirect: "/"
            name: "home",
            component: home
          },
          {
            path: "*",
            //   redirect: "/"
            name: "home",
            component: home
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
        jQuery("#example-navbar-collapse").removeClass("show");
      }
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
            <li><a href="../my-react-router-test/index.html#/decoder"  class="nav-link">JSfuck-and-hieroglyphy-Decoder-and-ENCODER</a>
            </li>
            </ul>
            </div>
            </div>
            </nav>
            </div>
            
            <div class="container" id="my主体" style="min-width: 100%;padding-top: 53px;"><router-view /> </div>
            
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
              (this.isActive2 =
                window.location.hash == "#/huami" ? true : false),
              (this.isActive3 =
                window.location.hash == "#/about" ? true : false);
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

      Vue.component("App", App);

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
    }
  });
})();
