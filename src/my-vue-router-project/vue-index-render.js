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
      console.log(modulearray);
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
        if (lasthash === window.location.hash) {
          console.log("hash不改变");
          return;
        }
        lasthash = window.location.hash;
        console.log("hash", window.location.hash);
        // if ("" == window.location.hash) {
        //   window.location.hash = "#/";
        //   return;
        // }

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
      let App =  Vue.extend({
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
        //   Vue.component("about", about);
        //   Vue.component("home", home);
        //   Vue.component("huami", huami);
    //   } catch (error) {
    //     console.error(error);
    //   }
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
  });
})();
