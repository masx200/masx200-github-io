import sha256 from "./sha256.min"
//由于使用了async函数所以需要regeneratorRuntime//
//import regeneratorRuntime from "regenerator-runtime";

//包装cjs和amd和umd模块为异步加载promise方法
/**
 *动态异步加载commonjs和umd和amd模块
 *
 *动态异步加载 commonjs 和 umd 和 amd 模块 ,包装 cjs 和 amd 和 umd 模块为异步加载 promise 方法,使用 fetch 方法来获取指定的模块包源代码 ， 可以把模块放入模块仓库中，

并且解决了包之间的依赖关系，如果依赖包当中的 require 函数需要，则在模块仓库中引入需要的模块包

定义了模块包的 define 方法，require 方法，module.exports 对象和 exports 对象

加载有依赖关系的模块包的方法

(async () => {

  const [jquery, popper] = await Promise.all([

    IMPORTCJSAMDUMD("https://cdn.bootcss.com/jquery/3.4.1/jquery.js", "jquery"),

    IMPORTCJSAMDUMD(

      "https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js",

      "popper.js"

    )

  ]);

  const bootstrap = await IMPORTCJSAMDUMD(

    "https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.js",

    "bootstrap"

  );

  console.log(jquery, popper, bootstrap);

})();

如果要动态异步加载 es6 模块,加载 es6 模块的方法:

import(url).then(console.log);

动态异步加载 cjs,amd,umd 模块用法:

主函数,IMPORTCJSAMDUMD,返回一个 promise 对象,参数 url 和 name 都是字符串，把通过 url 加载的依赖包放入模块仓库中，命名为 name，promise 之后的.then 函数的回调函数的参数是 module，module.default 的模块的默认输出

IMPORTCJSAMDUMD(url, name);

IMPORTCJSAMDUMD(url).then(m => console.log(m.default));

次对象,IMPORTCJSAMDUMD.GLOBALPACKAGESTORE,是所有加载过的模块的存储仓库对象

IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[name];

次函数,IMPORTCJSAMDUMD.REQUIREPACKAGE,返回模块仓库中的模块,参数 name 是字符串

IMPORTCJSAMDUMD.REQUIREPACKAGE(name);

IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[name]和 IMPORTCJSAMDUMD.REQUIREPACKAGE(name)是相等的

示例
 *
 * 用法:
 *
 * IMPORTCJSAMDUMD('https://cdn.staticfile.org/jquery/3.4.1/jquery.js').then((m)=>{console.log(m.default.fn.jquery)})
 *
 * var jquery=IMPORTCJSAMDUMD.GLOBALPACKAGESTORE.jquery
 *
 *  Promise.all([IMPORTCJSAMDUMD("https://cdn.bootcss.com/jquery/3.4.1/jquery.js"),IMPORTCJSAMDUMD("https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js"),IMPORTCJSAMDUMD("https://cdn.staticfile.org/vue/2.6.10/vue.min.js")]).then(console.log)
 *
 * IMPORTCJSAMDUMD("https://cdn.bootcss.com/Chart.js/2.8.0-rc.1/Chart.bundle.js").then(console.log)
 *
 *
 *
 * IMPORTCJSAMDUMD("https://cdn.bootcss.com/underscore.js/1.9.1/underscore-min.js","underscore").then(console.log).catch(console.error)
 *
 *
 * IMPORTCJSAMDUMD("https://cdn.bootcss.com/jquery/3.4.1/jquery.js",).then(console.log).catch(console.error)
 *
 *var jquery= IMPORTCJSAMDUMD.REQUIREPACKAGE("jquery")
 *
 *
 * var underscore=IMPORTCJSAMDUMD.REQUIREPACKAGE("underscore")
 *
 * Promise.all([IMPORTCJSAMDUMD("https://cdn.bootcss.com/jquery/3.4.1/jquery.js","jquery"),IMPORTCJSAMDUMD("https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js","react"),IMPORTCJSAMDUMD("https://cdn.staticfile.org/vue/2.6.10/vue.min.js","vue")]).then(console.log)
 *
 *
 * 如果要加载es6模块
 * import("https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.min.js").then(console.log)
 *
 *  */
//就像es6模块的import函数返回promise对象一样
// window . importcjsamdumd= importcjsamdumd
(global => {
  if ("object" == typeof exports && "undefined" != typeof module) {
    module.exports = importcjsamdumd;
  }
  //   try {
  //     console.log(global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE);
  //   } catch (error) {}

  global.IMPORTCJSAMDUMD = global.IMPORTCJSAMDUMD || importcjsamdumd;
  global.IMPORTCJSAMDUMD.REQUIREPACKAGE =
    global.IMPORTCJSAMDUMD.REQUIREPACKAGE || require;
  global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE =
    global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE || [];
  /* 为了不要把全局的模块仓库覆盖 */
  //   try {
  //     console.log(global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE);
  //   } catch (error) {}
//   if (typeof global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE.sha256 === "undefined") {
//     importcjsamdumd(
//       "https://cdn.staticfile.org/js-sha256/0.9.0/sha256.min.js",
//       "sha256"
//     );
//   }


  function require(packagename = undefined) {
    var findpackage = global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[packagename];
    if (findpackage) {
      return findpackage.default;
    } else {
      throw new Error("Cannot find module  " + packagename);
    }
  }

  function importcjsamdumd(url, packagename = undefined) {
    //   window.GLOBALPACKAGESTORE = window.GLOBALPACKAGESTORE || [];
    url = new URL(url);
    url = url.href;
    // importcjsamdumd.packagename = packagename;
    function define(name, deps, callback) {
      define.globalDefQueue = [];
      //   window.globalDefQueue = globalDefQueue;
      var op = Object.prototype;
      var ostring = op.toString;
      var useInteractive = false;
      function isArray(it) {
        return ostring.call(it) === "[object Array]";
      }
      function isFunction(it) {
        return ostring.call(it) === "[object Function]";
      }
      var node, context;

      //Allow for anonymous modules
      if (typeof name !== "string") {
        //Adjust args appropriately
        callback = deps;
        deps = name;
        name = null;
      }

      //This module may not have dependencies
      if (!isArray(deps)) {
        callback = deps;
        deps = null;
      }

      //If no name, and callback is a function, then figure out if it a
      //CommonJS thing with dependencies.
      if (!deps && isFunction(callback)) {
        deps = [];
        //Remove comments from the callback string,
        //look for require calls, and pull them into the dependencies,
        //but only if there are function args.
        if (callback.length) {
          callback
            .toString()
            .replace(commentRegExp, commentReplace)
            .replace(cjsRequireRegExp, function(match, dep) {
              deps.push(dep);
            });

          //May be a CommonJS thing even without require calls, but still
          //could use exports, and module. Avoid doing exports and module
          //work though if it just needs require.
          //REQUIRES the function to expect the CommonJS variables in the
          //order listed below.
          deps = (callback.length === 1
            ? ["require"]
            : ["require", "exports", "module"]
          ).concat(deps);
        }
      }

      //If in IE 6-8 and hit an anonymous define() call, do the interactive
      //work.
      if (useInteractive) {
        node = currentlyAddingScript || getInteractiveScript();
        if (node) {
          if (!name) {
            name = node.getAttribute("data-requiremodule");
          }
          context = contexts[node.getAttribute("data-requirecontext")];
        }
      }

      //Always save off evaluating the def call until the script onload handler.
      //This allows multiple modules to be in a file without prematurely
      //tracing dependencies, and allows for anonymous module support,
      //where the module name is not known until the script onload event
      //occurs. If no context, use the global queue, and get it processed
      //in the onscript load callback.
      if (context) {
        context.defQueue.push([name, deps, callback]);
        context.defQueueMap[name] = true;
      } else {
        define.globalDefQueue.push([name, deps, callback]);
      }
      console.log("检测到amd模块", define.globalDefQueue[0]);
      if (
        typeof define.globalDefQueue[0][0] === "string" &&
        typeof packagename === "undefined"
      ) {
        packagename = define.globalDefQueue[0][0];
      }
      var canshu = define.globalDefQueue[0][1].map(e => require(e));
      //   console.log(canshu);
      define.exports = define.globalDefQueue[0][2](...canshu);
    }

    define.amd = true;
    return new Promise((resolve, reject) => {
      try {
        (() => {
          //   (async () => {
          var fetchpromise;
          try {
            try {
              fetchpromise = fetch(url).then(response => {
                if (!response.ok) {
                  throw new Error("fetch failed " + url);
                }

                return response.text();
              });
            } catch (e) {
              console.error(e);
              reject(e);
              return;
            }

            //   .catch(e => {
            //     console.error(e);
            //     reject(e);
            //     return;
            //   })
            try {
              fetchpromise.then(scripttext => {
                var exports = {};
                var module = {
                  exports: {}
                };
                define.exports = {};
                // var globalDefQueue = [];
                var exportmodule = [{}, {}];
                try {
                  exportmodule = (function(
                    require,
                    define,
                    module,
                    exports,
                    scripttext
                  ) {
                    //   console.log(
                    //     Function(
                    //         "require",
                    //         "define",
                    //         "module",
                    //         "exports",
                    //         scripttext + `; return [exports, module.exports];`
                    //       ).toString()
                    //   );
                    //   eval(scripttext);
                    /* 有的网站安全考虑不能运行eval */
                    return Function(
                      "require",
                      "define",
                      "module",
                      "exports",
                      scripttext + `; return [exports, module.exports];`
                    )(require, define, module, exports);
                    // for (let __key__ in module.exports ){
                    //     module[__key__]=module.exports[__key__]
                    // }

                    //   var moduleexport = {};
                    //   console.log("exports", exports, "module.exports", module.exports);
                    //   //   console.log()
                    //   if (Object.keys(exports).length) {
                    //     moduleexport.default = exports;
                    //   } else if (Object.keys(module.exports).length) {
                    //     moduleexport.default = module.exports;
                    //   }

                    //   console.log(
                    //     "exports",
                    //     exports,
                    //     "module.exports",
                    //     module.exports,
                    //     // "globalDefQueue[2]",
                    //     // globalDefQueue[2]
                    //   );

                    //   return [exports, module.exports];
                  })(require, define, module, exports, scripttext);
                } catch (e) {
                  console.error(e);
                  reject(e);
                  return;
                }

                // console.log(define.exports);
                // console.log(exportmodule);
                // exports = exportmodule[0];
                // module.exports = exportmodule[1];
                var moduleexport = {
                  name: undefined,
                  default: undefined,
                  url: undefined
                };
                // console.log(
                //   "exports",
                //   exports,
                //   "module.exports",
                //   module.exports,
                // //   "globalDefQueue[2]",
                // //   globalDefQueue[2]
                // );
                /* console.log(exportmodule[0], exportmodule[1], define.exports);
console.log(
  Object.keys(exportmodule[0]).length,
  Object.keys(exportmodule[1]).length,
  Object.keys(define.exports).length
); */
                //   if(){
                //   console.log(typeof exportmodule);
                //   }
                if (typeof exportmodule === "undefined") {
                  var exportmodule = [{}, {}];
                }
                if (typeof define.exports === "undefined") {
                  define.exports = {};
                }
                console.log("模块的输出为",exportmodule[0], exportmodule[1], define.exports);
                if (
                  typeof exportmodule[0] !== "object" ||
                  Object.keys(exportmodule[0]).length ||
                  JSON.stringify(exportmodule[0]) !== "{}"
                ) {
                  console.log("检测到umd模块", url);
                  moduleexport.default = exportmodule[0];
                } else if (
                  typeof exportmodule[1] !== "object" ||
                  Object.keys(exportmodule[1]).length ||
                  JSON.stringify(exportmodule[1]) !== "{}"
                ) {
                  console.log("检测到cjs模块", url);
                  moduleexport.default = exportmodule[1];
                } else if (
                  typeof define.exports !== "object" ||
                  Object.keys(define.exports).length ||
                  JSON.stringify(define.exports) !== "{}"
                ) {
                  console.log("检测到amd模块", url);
                  moduleexport.default = define.exports;
                }

                if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                  Object.defineProperty(moduleexport, Symbol.toStringTag, {
                    value: "Module"
                  });
                }

                if (typeof packagename !== "undefined") {


                    /* 修改模块仓库里面存放模块,而不是模块的默认输出 */
                  moduleexport.name = packagename;
                //   global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[packagename] =
                //     moduleexport.default;

                global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[packagename] =
                    moduleexport;
                } else {
                  /* 如果存在不要重复加载了sha256 */

                  /* 如果没有指定模块的名字则把url转成Sha256作为名字 */
                  moduleexport.name = undefined;
                }
                moduleexport.url = url;
                if (typeof moduleexport.default !== "undefined") {
                  if (typeof moduleexport.name !== "undefined") {
                    console.log(
                      "GLOBALPACKAGESTORE",
                      global.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE
                    );
                  }
                } else {
                  console.warn("加载的模块没有输出", url);
                }

                resolve(moduleexport);
              });
            } catch (e) {
              console.error(e);
              reject(e);
              return;
            }

            //   .catch(e => {
            //     console.error(e);
            //     reject(e);
            //     return;
            //   });

            /*    var response = await fetch(url);
            if (!response.ok) {
              throw new Error("fetch failed " + url);
            }
            var scripttext = await response.text();
          } catch (e) {
            console.error(e);
            reject(e);
            return;
          }
*/
          } catch (e) {
            console.error(e);
            reject(e);
          }
        })();
      } catch (e) {
        console.error(e);
        reject(e);
      }
    });
  }
})(
  (typeof window !== "undefined" ? window : false) ||
    (typeof WorkerGlobalScope !== "undefined" ? WorkerGlobalScope : false) ||
    this
);

// define([
//     'require',
//     'dependency'
// ], function(require, factory) {
//     'use strict';

// });
/*(function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
        typeof define === 'function' && define.amd ? define(['react'], factory) :
        (global.ReactDOM = factory(global.React));
    }(this, (function (React) { 'use strict';
    
    
    
    (function (global, factory) {
      typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
      typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
      (global = global || self, factory(global.bootstrap = {}, global.jQuery, global.Popper));
    }(this, function (exports, $, Popper) { 'use strict';
    
    
    
    
    (function( factory ) {
        if ( typeof define === "function" && define.amd ) {
    
            // AMD. Register as an anonymous module.
            define([ "jquery" ], factory );
        } else {
    
            // Browser globals
            factory( jQuery );
        }
    }(function( $ ) {
    
    
    
    */
/*define( "jquery", [], function() {
            return jQuery;
        } );*
    
    
    (function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
        (global.VueRouter = factory());
    }(this, (function () { 'use strict';
    
    
    */
