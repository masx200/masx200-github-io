/*! For license information please see service-worker-jsfuck.worker.c237561070ce2820185a.worker.js.LICENSE */
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
        (n.p = "https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.4.1/"),
        n((n.s = 1));
})([
    function (e, t, n) {
        "use strict";
        !(function (t) {
            e.exports = { encode: l };
            var n = "USE_CHAR_CODE",
                r = 32,
                o = 126,
                i = {
                    false: "![]",
                    true: "!![]",
                    undefined: "[][[]]",
                    NaN: "+[![]]",
                    Infinity:
                        "+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]]+[+[]])",
                },
                u = {
                    Array: "[]",
                    Number: "(+[])",
                    String: "([]+[])",
                    Boolean: "(![])",
                    Function: '[]["filter"]',
                    RegExp: 'Function("return/0/")()',
                },
                f = {
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
                },
                a = 'Function("return this")()';
            var c = 0;
            function l(e, t) {
                0 === c &&
                    (!(function () {
                        var e, t, n;
                        for (t = 0; t < 10; t++) {
                            for (
                                e = "+[]", t > 0 && (e = "+!" + e), n = 1;
                                n < t;
                                n++
                            )
                                e = "+!+[]" + e;
                            t > 1 && (e = e.substr(1)), (f[t] = "[" + e + "]");
                        }
                    })(),
                    (function () {
                        for (var e in f)
                            f[e] === n &&
                                (f[e] =
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
                            c = "";
                        function l(t, n) {
                            e = e.replace(new RegExp(t, "gi"), n);
                        }
                        function s(e, t) {
                            return f[t];
                        }
                        function d(e, n) {
                            var r = n.split(""),
                                o = +r.shift(),
                                i = "+[]";
                            for (o > 0 && (i = "+!" + i), t = 1; t < o; t++)
                                i = "+!+[]" + i;
                            return (
                                o > 1 && (i = i.substr(1)),
                                [i].concat(r).join("+").replace(/(\d)/g, s)
                            );
                        }
                        for (t = r; t <= o; t++)
                            if (((c = String.fromCharCode(t)), (e = f[c]))) {
                                for (n in u)
                                    l("\\b" + n, u[n] + '["constructor"]');
                                for (n in i) l(n, i[n]);
                                l("(\\d\\d+)", d),
                                    l("\\((\\d)\\)", s),
                                    l("\\[(\\d)\\]", s),
                                    l("GLOBAL", a),
                                    l('\\+""', "+[]"),
                                    l('""', "[]+[]"),
                                    (f[c] = e);
                            }
                    })(),
                    (function () {
                        var e,
                            t,
                            n,
                            i = /[^\[\]\(\)\!\+]{1}/g,
                            u = o - r;
                        function a() {
                            var e,
                                t,
                                r = !1;
                            for (e in ((n = {}), f))
                                (t = f[e]).match(i) && ((n[e] = t), (r = !0));
                            return r;
                        }
                        function c(e, t) {
                            return t.split("").join("+");
                        }
                        function l(e) {
                            return n[e] ? e : f[e];
                        }
                        for (e in f) f[e] = f[e].replace(/\"([^\"]+)\"/gi, c);
                        for (; a(); ) {
                            for (e in n)
                                (t = (t = f[e]).replace(i, l)),
                                    (f[e] = t),
                                    (n[e] = t);
                            if (0 === u--) {
                                throw "Could not compile the following chars:";
                            }
                        }
                    })(),
                    (c = 1));
                var s = [];
                if (!e) return "";
                var d = "";
                for (var p in i) d += p + "|";
                return (
                    (d += "."),
                    e.replace(new RegExp(d, "g"), function (e) {
                        var t = i[e];
                        t
                            ? s.push("[" + t + "]+[]")
                            : (t = f[e])
                            ? s.push(t)
                            : ((t =
                                  e.charCodeAt(0) < 128
                                      ? "(" +
                                        l(
                                            "\\u00" +
                                                e.charCodeAt(0).toString(16)
                                        ) +
                                        ")"
                                      : "(" +
                                        l(
                                            "\\u" + e.charCodeAt(0).toString(16)
                                        ) +
                                        ")"),
                              s.push(t),
                              (f[e] = t));
                    }),
                    (s = s.join("+")),
                    /^\d$/.test(e) && (s += "+[]"),
                    t
                        ? (s =
                              "[][" +
                              l("filter") +
                              "][" +
                              l("constructor") +
                              "](" +
                              s +
                              ")()")
                        : "(" + s + ")"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlLXdvcmtlci1qc2Z1Y2sud29ya2VyLmMyMzc1NjEwNzBjZTI4MjAxODVhLndvcmtlci5qcyIsInNvdXJjZVJvb3QiOiIifQ==
