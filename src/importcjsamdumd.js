//包装cjs和amd和umd模块为异步加载promise方法

//就像es6模块的import函数返回promise对象一样

function importcjsamdumd(url) {
  return new Promise((resolve, reject) => {
    try {
      (async () => {
        var response = await fetch(url);

        var text = await response.text();
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
function define(...args){
}
define.amd=true
function require(m){
}
        exportmodule = (function(require,define,module, exports,scripttext) {
          eval(scripttext);
          // for (let __key__ in module.exports ){
          //     module[__key__]=module.exports[__key__]
          // }

          var moduleexport={}
          if(Object.keys(exports)){
moduleexport.default = exports;
}else if(Object.keys(module.exports)){
          moduleexport.default=module.exports
          }
          return moduleexport;
        })(require,define,module, exports,scripttext);

        resolve(exportmodule);
      })();
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}
