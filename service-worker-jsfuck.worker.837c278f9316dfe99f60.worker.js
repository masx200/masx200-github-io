/*! For license information please see service-worker-jsfuck.worker.837c278f9316dfe99f60.worker.js.LICENSE.txt */
!(function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function (e) {
            "undefined" !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" === typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e,
                }),
                2 & t && "string" != typeof e)
            )
                for (var o in e)
                    n.d(
                        r,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return r;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = "./"),
        n((n.s = 1));
})([
    function (e, t, n) {
        "use strict";
        !(function (t) {
            e.exports = { encode: f };
            var n = "USE_CHAR_CODE",
                r = {
                    false: "![]",
                    true: "!![]",
                    undefined: "[][[]]",
                    NaN: "+[![]]",
                    Infinity:
                        "+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]]+[+[]])",
                },
                o = {
                    Array: "[]",
                    Number: "(+[])",
                    String: "([]+[])",
                    Boolean: "(![])",
                    Function: '[]["filter"]',
                    RegExp: 'Function("return/0/")()',
                },
                i = {
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
                    H: n,
                    I: '(Infinity+"")[0]',
                    J: n,
                    K: n,
                    L: n,
                    M: '(true+Function("return Date")()())[30]',
                    N: '(NaN+"")[0]',
                    O: n,
                    P: n,
                    Q: n,
                    R: "(+false+RegExp)[10]",
                    S: "(+false+String)[10]",
                    T: '(NaN+Function("return Date")()())[30]',
                    U: n,
                    V: n,
                    W: n,
                    X: n,
                    Y: n,
                    Z: n,
                    " ": '(NaN+[]["filter"])[11]',
                    "!": n,
                    '"': '("")["fontcolor"]()[12]',
                    "#": n,
                    $: n,
                    "%": 'Function("return escape")()("<")[0]',
                    "&": n,
                    "'": n,
                    "(": '(false+[]["filter"])[20]',
                    ")": '(true+[]["filter"])[20]',
                    "*": n,
                    "+":
                        "(+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]])+[])[2]",
                    ",": '[[]]["concat"]([[]])+""',
                    "-": '(+(.+[0000000001])+"")[2]',
                    ".":
                        "(+(+!+[]+[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]]+[+[]])+[])[+!+[]]",
                    "/": '(false+[+false])["italics"]()[10]',
                    ":": '(RegExp()+"")[3]',
                    ";": n,
                    "<": '("")["italics"]()[0]',
                    "=": '("")["fontcolor"]()[11]',
                    ">": '("")["italics"]()[2]',
                    "?": '(RegExp()+"")[2]',
                    "@": n,
                    "[": '(GLOBAL+"")[0]',
                    "\\": n,
                    "]": n,
                    "^": n,
                    _: n,
                    "`": n,
                    "{": '(NaN+[]["filter"])[21]',
                    "|": n,
                    "}": '(NaN+[]["filter"])[37]',
                    "~": n,
                };
            var u = 0;
            function f(e, t) {
                0 === u &&
                    (!(function () {
                        var e, t, n;
                        for (t = 0; t < 10; t++) {
                            for (
                                e = "+[]", t > 0 && (e = "+!" + e), n = 1;
                                n < t;
                                n++
                            )
                                e = "+!+[]" + e;
                            t > 1 && (e = e.substr(1)), (i[t] = "[" + e + "]");
                        }
                    })(),
                    (function () {
                        for (var e in i)
                            i[e] === n &&
                                (i[e] =
                                    'Function("return unescape")()("%"' +
                                    e
                                        .charCodeAt(0)
                                        .toString(16)
                                        .replace(/(\d+)/g, '+($1)+"') +
                                    '")');
                    })(),
                    (function () {
                        var e,
                            t,
                            n,
                            u = "";
                        function f(t, n) {
                            e = e.replace(new RegExp(t, "gi"), n);
                        }
                        function a(e, t) {
                            return i[t];
                        }
                        function c(e, n) {
                            var r = n.split(""),
                                o = +r.shift(),
                                i = "+[]";
                            for (o > 0 && (i = "+!" + i), t = 1; t < o; t++)
                                i = "+!+[]" + i;
                            return (
                                o > 1 && (i = i.substr(1)),
                                [i].concat(r).join("+").replace(/(\d)/g, a)
                            );
                        }
                        for (t = 32; t <= 126; t++)
                            if (((u = String.fromCharCode(t)), (e = i[u]))) {
                                for (n in o)
                                    f("\\b" + n, o[n] + '["constructor"]');
                                for (n in r) f(n, r[n]);
                                f("(\\d\\d+)", c),
                                    f("\\((\\d)\\)", a),
                                    f("\\[(\\d)\\]", a),
                                    f("GLOBAL", 'Function("return this")()'),
                                    f('\\+""', "+[]"),
                                    f('""', "[]+[]"),
                                    (i[u] = e);
                            }
                    })(),
                    (function () {
                        var e,
                            t,
                            n,
                            r = /[^\[\]\(\)\!\+]{1}/g,
                            o = 94;
                        function u() {
                            var e,
                                t,
                                o = !1;
                            for (e in ((n = {}), i))
                                (t = i[e]).match(r) && ((n[e] = t), (o = !0));
                            return o;
                        }
                        function f(e, t) {
                            return t.split("").join("+");
                        }
                        function a(e) {
                            return n[e] ? e : i[e];
                        }
                        for (e in i) i[e] = i[e].replace(/\"([^\"]+)\"/gi, f);
                        for (; u(); ) {
                            for (e in n)
                                (t = (t = i[e]).replace(r, a)),
                                    (i[e] = t),
                                    (n[e] = t);
                            if (0 === o--) {
                                throw "Could not compile the following chars:";
                            }
                        }
                    })(),
                    (u = 1));
                var a = [];
                if (!e) return "";
                var c = "";
                for (var l in r) c += l + "|";
                return (
                    (c += "."),
                    e.replace(new RegExp(c, "g"), function (e) {
                        var t = r[e];
                        t
                            ? a.push("[" + t + "]+[]")
                            : (t = i[e])
                            ? a.push(t)
                            : ((t =
                                  e.charCodeAt(0) < 128
                                      ? "(" +
                                        f(
                                            "\\u00" +
                                                e.charCodeAt(0).toString(16)
                                        ) +
                                        ")"
                                      : "(" +
                                        f(
                                            "\\u" + e.charCodeAt(0).toString(16)
                                        ) +
                                        ")"),
                              a.push(t),
                              (i[e] = t));
                    }),
                    (a = a.join("+")),
                    /^\d$/.test(e) && (a += "+[]"),
                    t
                        ? (a =
                              "[][" +
                              f("filter") +
                              "][" +
                              f("constructor") +
                              "](" +
                              a +
                              ")()")
                        : "(" + a + ")"
                );
            }
        })(
            ("undefined" !== typeof window && window) ||
                ("undefined" !== typeof WorkerGlobalScope && WorkerGlobalScope)
        );
    },
    function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(0),
            o = n.n(r);
        addEventListener("message", function (e) {
            var t = e.data,
                n = o.a.encode(t[0], t[1]);
            postMessage(n);
        });
    },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlLXdvcmtlci1qc2Z1Y2sud29ya2VyLjgzN2MyNzhmOTMxNmRmZTk5ZjYwLndvcmtlci5qcyIsInNvdXJjZVJvb3QiOiIifQ==
