function importumd(url) {
  return new Promise(async (resolve, reject) => {
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
        var exports = {};
        var module = {
          exports: {}
        };

        module = (function(module, exports) {
          eval(text);
          // for (let __key__ in module.exports ){
          //     module[__key__]=module.exports[__key__]
          // }

          module.default = exports;
          return module;
        })(module, exports);

        resolve(module);
      })();
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}
