//包装cjs和amd和umd模块为异步加载promise方法

//就像es6模块的import函数返回promise对象一样
// window . importcjsamdumd= importcjsamdumd
(global => {
  if ("object" == typeof exports && "undefined" != typeof module) {
    module.exports = importcjsamdumd;
  }
  global.IMPORTCJSAMDUMD = importcjsamdumd;
  importcjsamdumd.REQUIREPACKAGE= require;
  importcjsamdumd.GLOBALPACKAGESTORE = importcjsamdumd.GLOBALPACKAGESTORE || [];
  function require(packagename=undefined) {
      var findpackage= importcjsamdumd.GLOBALPACKAGESTORE[packagename]
      if(findpackage){
        return findpackage;
      }else{
          throw new Error("Cannot find module  "+ packagename )
      }
    
  }
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
    console.log(define.globalDefQueue[0]);
    if (typeof define.globalDefQueue[0][0] === "string") {
      packagename = define.globalDefQueue[0][0];
    }
    var canshu = define.globalDefQueue[0][1].map(e => require(e));
    //   console.log(canshu);
    define.exports = define.globalDefQueue[0][2](...canshu);
  }

  define.amd = true;
  function importcjsamdumd(url, packagename = undefined) {
    //   window.GLOBALPACKAGESTORE = window.GLOBALPACKAGESTORE || [];
    url = new URL(url);

    return new Promise((resolve, reject) => {
      try {
        (async () => {
          var response = await fetch(url);

          var scripttext = await response.text();
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
          var exports = {};
          var module = {
            exports: {}
          };
          define.exports = {};
          // var globalDefQueue = [];

          var exportmodule = (function(
            require,
            define,
            module,
            exports,
            scripttext
          ) {
            eval(scripttext);
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

            return [exports, module.exports];
          })(require, define, module, exports, scripttext);
          // console.log(define.exports);
          // console.log(exportmodule);
          // exports = exportmodule[0];
          // module.exports = exportmodule[1];
          var moduleexport = {};
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
          if (
            typeof exportmodule[0] !== "object" ||
            JSON.stringify(exportmodule[0]) !== "{}" ||
            Object.keys(exportmodule[0]).length
          ) {
            moduleexport.default = exportmodule[0];
          } else if (
            typeof exportmodule[1] !== "object" ||
            JSON.stringify(exportmodule[1]) !== "{}" ||
            Object.keys(exportmodule[1]).length
          ) {
            moduleexport.default = exportmodule[1];
          } else if (
            typeof define.exports !== "object" ||
            JSON.stringify(define.exports) !== "{}" ||
            Object.keys(define.exports).length
          ) {
            moduleexport.default = define.exports;
          }
          if (typeof packagename !== "undefined") {
            importcjsamdumd.GLOBALPACKAGESTORE[packagename] =
              moduleexport.default;
          }
          console.log("GLOBALPACKAGESTORE", importcjsamdumd.GLOBALPACKAGESTORE);
          resolve(moduleexport);
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
