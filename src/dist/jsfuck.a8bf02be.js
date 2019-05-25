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
})({"JSfuck-and-hieroglyphy-Decoder-and-ENCODER/jsfuck.js":[function(require,module,exports) {
var global = arguments[3];
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! JSFuck 0.4.0 - http://jsfuck.com */
(function (global) {
  // console.log(global)
  "use strict"; //   self = typeof exports === "undefined" ? window : exports;
  //   self.JSFuck = {
  //     encode: encode
  //   };
  // console.log(this)

  var _MAPPING;

  global.JSFuck = {
    encode: encode
  };

  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    // module.exports = mainExports;
    module.exports = global.JSFuck;
  }

  var USE_CHAR_CODE = "USE_CHAR_CODE";
  var MIN = 32,
      MAX = 126;
  var SIMPLE = {
    false: "![]",
    true: "!![]",
    undefined: "[][[]]",
    NaN: "+[![]]",
    Infinity: "+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]]+[+[]])" // +"1e1000"

  };
  var CONSTRUCTORS = {
    Array: "[]",
    Number: "(+[])",
    String: "([]+[])",
    Boolean: "(![])",
    Function: '[]["filter"]',
    RegExp: 'Function("return/0/")()'
  };
  var MAPPING = (_MAPPING = {
    a: '(false+"")[1]',
    b: '(+(11))["toString"](20)',
    c: '([]["filter"]+"")[3]',
    d: '(undefined+"")[2]',
    e: '(true+"")[3]',
    f: '(false+"")[0]',
    g: "(+false+[false]+String)[20]",
    h: '(+(101))["toString"](21)[1]',
    i: "([false]+undefined)[10]",
    j: '(+(40))["toString"](21)[1]',
    k: '(+(20))["toString"](21)',
    l: '(false+"")[2]',
    m: '(Number+"")[11]',
    n: '(undefined+"")[1]',
    o: '(true+[]["filter"])[10]',
    p: '(+(211))["toString"](31)[1]',
    q: '(+(212))["toString"](31)[1]',
    r: '(true+"")[1]',
    s: '(false+"")[3]',
    t: '(true+"")[0]',
    u: '(undefined+"")[0]',
    v: '(+(31))["toString"](32)',
    w: '(+(32))["toString"](33)',
    x: '(+(101))["toString"](34)[1]',
    y: "(NaN+[Infinity])[10]",
    z: '(+(35))["toString"](36)',
    A: "(+false+Array)[10]",
    B: "(+false+Boolean)[10]",
    C: 'Function("return escape")()("<")[2]',
    D: 'Function("return escape")()("=")[2]',
    E: '(RegExp+"")[12]',
    F: "(+false+Function)[10]",
    G: '(false+Function("return Date")()())[30]',
    H: USE_CHAR_CODE,
    I: '(Infinity+"")[0]',
    J: USE_CHAR_CODE,
    K: USE_CHAR_CODE,
    L: USE_CHAR_CODE,
    M: '(true+Function("return Date")()())[30]',
    N: '(NaN+"")[0]',
    O: USE_CHAR_CODE,
    P: USE_CHAR_CODE,
    Q: USE_CHAR_CODE,
    R: "(+false+RegExp)[10]",
    S: "(+false+String)[10]",
    T: '(NaN+Function("return Date")()())[30]',
    U: USE_CHAR_CODE,
    V: USE_CHAR_CODE,
    W: USE_CHAR_CODE,
    X: USE_CHAR_CODE,
    Y: USE_CHAR_CODE,
    Z: USE_CHAR_CODE,
    " ": '(NaN+[]["filter"])[11]',
    "!": USE_CHAR_CODE,
    '"': '("")["fontcolor"]()[12]',
    "#": USE_CHAR_CODE,
    $: USE_CHAR_CODE,
    "%": 'Function("return escape")()("<")[0]',
    "&": USE_CHAR_CODE,
    "'": USE_CHAR_CODE,
    "(": '(false+[]["filter"])[20]',
    ")": '(true+[]["filter"])[20]',
    "*": USE_CHAR_CODE,
    "+": "(+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]])+[])[2]",
    ",": '[[]]["concat"]([[]])+""',
    "-": '(+(.+[0000000001])+"")[2]',
    ".": "(+(+!+[]+[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]]+[+[]])+[])[+!+[]]",
    "/": '(false+[+false])["italics"]()[10]',
    ":": '(RegExp()+"")[3]',
    ";": USE_CHAR_CODE,
    "<": '("")["italics"]()[0]',
    "=": '("")["fontcolor"]()[11]',
    ">": '("")["italics"]()[2]',
    "?": '(RegExp()+"")[2]',
    "@": USE_CHAR_CODE,
    "[": '(GLOBAL+"")[0]',
    "\\": USE_CHAR_CODE,
    //  '\\': `( [][(![]+[])[!+[]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+(!![]+[])[+!![]]]((!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]+!![]+!![]]+([][[]]+[])[+[]]+([][[]]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(![]+[])[!+[]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+(+(NaN+[]["filter"])[21](NaN+[]["filter"])[37]+[])[+!![]]+((!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]))[(!![]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+([]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+(!![]+[])[+!![]]])[!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]+!![]+!![]]+([][[]]+[])[+!![]]+([]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+(!![]+[])[+!![]]])[(!+[]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![])]]((!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]))+([][[]]+[])[!+[]+!![]+!![]])()([][(![]+[])[!+[]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+(!![]+[])[+!![]]]((!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]+!![]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(![]+[])[!+[]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+(+(NaN+[]["filter"])[21](NaN+[]["filter"])[37]+[])[+!![]]+((!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]))[(!![]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+([]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+(!![]+[])[+!![]]])[!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]+!![]+!![]]+([][[]]+[])[+!![]]+([]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+(!![]+[])[+!![]]])[(!+[]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![])]]((!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]))+([][[]]+[])[!+[]+!![]+!![]])()(([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+[]])[+[]]+(!+[]+!![]+!![]+!![]+!![]+[])+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]))[0]`  ,
    "]": USE_CHAR_CODE,
    "^": USE_CHAR_CODE,
    _: USE_CHAR_CODE,
    "`": USE_CHAR_CODE,
    "{": '(NaN+[]["filter"])[21]',
    // '{': '([]["filter"]+[])[18]',
    "|": USE_CHAR_CODE,
    "}": USE_CHAR_CODE
  }, _defineProperty(_MAPPING, "}", '(NaN+[]["filter"])[37]'), _defineProperty(_MAPPING, "~", USE_CHAR_CODE), _MAPPING);
  var GLOBAL = 'Function("return this")()';

  function fillMissingChars() {
    // console.log("fillMissingChars")
    // console.log(MAPPING)
    for (var key in MAPPING) {
      // console.log(key,MAPPING[key])
      if (MAPPING[key] === USE_CHAR_CODE) {
        // console.log(key,MAPPING[key])
        // if (key === '\\') {
        MAPPING[key] = 'Function("return unescape")()("%"' + key.charCodeAt(0).toString(16).replace(/(\d+)/g, '+($1)+"') + '")'; // console.log(key,MAPPING[key],MAPPING[key].length)
        //  MAPPING[key] ='( [][(![]+[])[!+[]+!![]+!![]]+([]+{})[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]]((!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]+!![]+!![]]+([][[]]+[])[+[]]+([][[]]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(![]+[])[!+[]+!![]+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(+{}+[])[+!![]]+((!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]))[(!![]+[])[+[]]+([]+{})[+!![]]+([]+([]+{})[([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]])[!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]+!![]+!![]]+([][[]]+[])[+!![]]+([]+([]+{})[([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]])[(!+[]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![])]]((!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]))+([][[]]+[])[!+[]+!![]+!![]])()([][(![]+[])[!+[]+!![]+!![]]+([]+{})[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]]((!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]+!![]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(![]+[])[!+[]+!![]+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(+{}+[])[+!![]]+((!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]))[(!![]+[])[+[]]+([]+{})[+!![]]+([]+([]+{})[([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]])[!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]+!![]+!![]]+([][[]]+[])[+!![]]+([]+([]+{})[([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]])[(!+[]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![])]]((!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]))+([][[]]+[])[!+[]+!![]+!![]])()(([]+{})[+[]])[+[]]+(!+[]+!![]+!![]+!![]+!![]+[])+([]+{})[!+[]+!![]+!![]+!![]+!![]]))'
        // } else {
        //   MAPPING[key] = '(\\u00' + key.charCodeAt(0).toString(16) + ')';
        // }
        // console.log(key, MAPPING[key])
        // MAPPING[key] = 'Function("return unescape")()("%"' + key.charCodeAt(0).toString(16).replace(/(\d+)/g, "+($1)+\"") + '")';
        // console.log(key, MAPPING[key])
        // mykey1 = `(unescape("%` + key.charCodeAt(0).toString(16).replace(/(\d+)/g, "+($1)+\"") + '"))';
        // MAPPING[key] = mykey1
        // // MAPPING[key] = "\\u"+ key.charCodeAt(0).toString(16);
        // // MAPPING[key] =  'unescape("%'+key.charCodeAt(0).toString(16)+'")'
        // console.log(key, mykey1)
        // mykey1="(" + encode("\\u00" + key.charCodeAt(0).toString(16)) + ")"
        // console.log(mykey1.length,MAPPING[key].length)
      } // console.log(key,MAPPING[key],MAPPING[key].length)

    } // console.log(MAPPING)

  }

  function fillMissingDigits() {
    // console.log("fillMissingDigits")
    var output, number, i;

    for (number = 0; number < 10; number++) {
      output = "+[]";

      if (number > 0) {
        output = "+!" + output;
      }

      for (i = 1; i < number; i++) {
        output = "+!+[]" + output;
      }

      if (number > 1) {
        output = output.substr(1);
      }

      MAPPING[number] = "[" + output + "]"; // console.log(number,MAPPING[number])
    }
  }

  function replaceMap() {
    // console.log("replaceMap")
    var character = "",
        value,
        original,
        i,
        key;

    function replace(pattern, replacement) {
      value = value.replace(new RegExp(pattern, "gi"), replacement);
    }

    function digitReplacer(_, x) {
      return MAPPING[x];
    }

    function numberReplacer(_, y) {
      var values = y.split("");
      var head = +values.shift();
      var output = "+[]";

      if (head > 0) {
        output = "+!" + output;
      }

      for (i = 1; i < head; i++) {
        output = "+!+[]" + output;
      }

      if (head > 1) {
        output = output.substr(1);
      }

      return [output].concat(values).join("+").replace(/(\d)/g, digitReplacer);
    }

    for (i = MIN; i <= MAX; i++) {
      character = String.fromCharCode(i);
      value = MAPPING[character];

      if (!value) {
        continue;
      }

      original = value;

      for (key in CONSTRUCTORS) {
        replace("\\b" + key, CONSTRUCTORS[key] + '["constructor"]');
      }

      for (key in SIMPLE) {
        replace(key, SIMPLE[key]);
      }

      replace("(\\d\\d+)", numberReplacer);
      replace("\\((\\d)\\)", digitReplacer);
      replace("\\[(\\d)\\]", digitReplacer);
      replace("GLOBAL", GLOBAL);
      replace('\\+""', "+[]");
      replace('""', "[]+[]");
      MAPPING[character] = value;
    }
  }

  function replaceStrings() {
    // console.log("replaceStrings")
    var regEx = /[^\[\]\(\)\!\+]{1}/g,
        // var regEx = /[^\[\]\(\)\!\+\{\}]{1}/g,
    all,
        value,
        missing,
        count = MAX - MIN;

    function findMissing() {
      var all,
          value,
          done = false;
      missing = {};

      for (all in MAPPING) {
        value = MAPPING[all];

        if (value.match(regEx)) {
          missing[all] = value;
          done = true;
        }
      }

      return done;
    }

    function mappingReplacer(a, b) {
      return b.split("").join("+");
    }

    function valueReplacer(c) {
      return missing[c] ? c : MAPPING[c];
    }

    for (all in MAPPING) {
      MAPPING[all] = MAPPING[all].replace(/\"([^\"]+)\"/gi, mappingReplacer);
    }

    while (findMissing()) {
      for (all in missing) {
        value = MAPPING[all];
        value = value.replace(regEx, valueReplacer);
        MAPPING[all] = value;
        missing[all] = value;
      }

      if (count-- === 0) {
        var error = "Could not compile the following chars:";
        console.error("Could not compile the following chars:", missing);
        throw error;
      }
    }
  }

  var haveinit = 0;

  function encode(input, wrapWithEval) {
    if (haveinit === 0) {
      fillMissingDigits();
      fillMissingChars();
      replaceMap();
      replaceStrings();
      haveinit = 1;
    } // console.log("encode", input, wrapWithEval)


    var output = [];

    if (!input) {
      return "";
    }

    var r = "";

    for (var i in SIMPLE) {
      r += i + "|";
    }

    r += ".";
    input.replace(new RegExp(r, "g"), function (c) {
      // console.log(c)
      var replacement = SIMPLE[c];

      if (replacement) {
        output.push("[" + replacement + "]+[]");
      } else {
        replacement = MAPPING[c];

        if (replacement) {
          output.push(replacement);
        } else {
          // console.log(c)
          if (c.charCodeAt(0) < 128) {
            replacement = "(" + encode("\\u00" + c.charCodeAt(0).toString(16)) + ")";
          } else {
            replacement = "(" + encode("\\u" + c.charCodeAt(0).toString(16)) + ")";
          }

          output.push(replacement);
          MAPPING[c] = replacement; // console.log(c,replacement)

          /* 
                    if (c === "J") {
                      // replacement1 =
                      //   "([][" + encode("filter") + "]" +
                      //   "[" + encode("constructor") + "]" +
                      //   "(" + encode("return new Date(200000000)") + ")()+[])[!+[]+!+[]+!+[]+!+[]]";
                      // replacement = (([] + new Date(200000000))[4])
          
                      // replacement="("+ encode("\\u00"+c.charCodeAt(0).toString(16))+")"
          
                      replacement = "(" + encode("\\u00" + c.charCodeAt(0).toString(16)) + ")"
                      // replacement1 = "(" + encode("\\x" + c.charCodeAt(0).toString(16)) + ")"
                      // console.log(replacement1.length,replacement.length)
                      output.push(replacement);
                      MAPPING[c] = replacement;
                    } else if (c === "O") {
                      replacement = "(" + encode("\\u00" + c.charCodeAt(0).toString(16)) + ")"
                      // replacement1 = "(" + encode("\\x" + c.charCodeAt(0).toString(16)) + ")"
                      // replacement1 =
                      //   "([][" + encode("filter") + "]" +
                      //   "[" + encode("constructor") + "]" +
                      //   "(" + encode("return new Date(24000000000)") + ")()+[])[!+[]+!+[]+!+[]+!+[]]";
                      // replacement = (([] + new Date(24000000000))[4])
          
                      // replacement="("+ encode("\\u00"+c.charCodeAt(0).toString(16))+")"
                      // console.log(replacement1.length,replacement.length)
                      output.push(replacement);
                      MAPPING[c] = replacement;
                    } else {
                      // console.log(c)
                      // replacement1 =
                      //   "([]+[])[" + encode("constructor") + "]" +
                      //   "[" + encode("fromCharCode") + "]" +
                      //   "(" + encode(c.charCodeAt(0) + "") + ")";
                      if (c.charCodeAt(0) < 128) {
                        replacement = "(" + encode("\\u00" + c.charCodeAt(0).toString(16)) + ")"
                        // replacement1 = "(" + encode("\\x" + c.charCodeAt(0).toString(16)) + ")"
                        // console.log(replacement1.length,replacement.length)
                      } else {
                        replacement = "(" + encode("\\u" + c.charCodeAt(0).toString(16)) + ")"
                      }
                      // console.log(replacement1.length,replacement.length)
                      // replacement =encode(mytihuan)
          
                      // "([]+[])[" + encode("constructor") + "]" +
                      // "[" + encode("fromCharCode") + "]" +
                      // "(" + encode(c.charCodeAt(0) + "") + ")";
                      // console.log(replacement)
                      output.push(replacement);
                      MAPPING[c] = replacement;
                    } */
        }
      }
    });
    output = output.join("+");

    if (/^\d$/.test(input)) {
      output += "+[]";
    }

    if (wrapWithEval) {
      output = "[][" + encode("filter") + "]" + "[" + encode("constructor") + "]" + "(" + output + ")()";
      return output;
    } else {
      return "(" + output + ")";
    }
  } // fillMissingDigits();
  // fillMissingChars();
  // replaceMap();
  // replaceStrings();
  // for (var key in MAPPING) console.log(key,MAPPING[key].length)
  // fillMissingChars2();
  // replaceMap();
  // replaceStrings();
  // for (var key in MAPPING) console.log(key,MAPPING[key].length)
  // self.JSFuck = {
  //   encode: encode
  // };


  return global.JSFuck;
})((typeof window !== "undefined" ? window : false) || (typeof WorkerGlobalScope !== "undefined" ? WorkerGlobalScope : false) || this);
},{}],"node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "14174" + '/');

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
},{}]},{},["node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js","JSfuck-and-hieroglyphy-Decoder-and-ENCODER/jsfuck.js"], null)
//# sourceMappingURL=/jsfuck.a8bf02be.js.map