/*! For license information please see chunk.12.aba74d547a1807c4dc3c.js.LICENSE */
(Function("return this")().webpackJsonp =
    Function("return this")().webpackJsonp || []).push([
    [12],
    {
        18: function (e, t, n) {
            "use strict";
            var r = n(21),
                a = n.n(r);
            var o = a.a;
            t.a = function (e) {
                var t;
                switch (e) {
                    case "success":
                        t = "\u6210\u529f";
                        break;
                    case "primary":
                        t = "\u9996\u9009";
                        break;
                    case "danger":
                        t = "\u5931\u8d25";
                        break;
                    case "warning":
                        t = "\u8b66\u544a";
                        break;
                    default:
                        return;
                }
                var n = "xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(
                    /[xy]/g,
                    function (e) {
                        var t = (16 * Math.random()) | 0;
                        return ("x" == e ? t : (3 & t) | 8).toString(16);
                    }
                );
                a()("[data-tanchuxiaoxi]").remove(),
                    o("#my\u5bfc\u822a\u680f").append(
                        o(
                            '<div id="'
                                .concat(n, '" class="alert alert-')
                                .concat(
                                    e,
                                    ' alert-dismissible fade show" data-tanchuxiaoxi>\n    <button type="button" class="close" data-dismiss="alert">&times;</button>\n    <strong>'
                                )
                                .concat(t, "!</strong> \u64cd\u4f5c")
                                .concat(
                                    t,
                                    "\u63d0\u793a\u4fe1\u606f\u3002\n    </div>"
                                )
                        ).fadeTo(5e3, 0.5, function () {
                            o("#" + n).remove(),
                                a()("#my\u4e3b\u4f53").css(
                                    "padding-top",
                                    a()("#my\u5bfc\u822a\u680f").height()
                                );
                        })
                    );
            };
        },
        71: function (e, t, n) {
            "use strict";
            !(function (t) {
                var n, r, a, o, i, c, u, l, f;
                function s(e, t) {
                    for (var n = e.toString(16); n.length < t; ) n = "0" + n;
                    return n;
                }
                function p(e) {
                    return l + "(" + x("%" + s(e, 2)) + ")";
                }
                function d(e) {
                    var t,
                        n,
                        r,
                        a = e.charCodeAt(0);
                    return void 0 !== i[e]
                        ? i[e]
                        : "\\" === e || "x" == e
                        ? ((i[e] = p(a)), i[e])
                        : ((r = (function (e) {
                              return x("\\u" + s(e, 4));
                          })(a)),
                          a < 128 &&
                              ((t = p(a)),
                              r.length > t.length && (r = t),
                              (n = (function (e) {
                                  return x("\\x" + s(e, 2));
                              })(a)),
                              r.length > n.length && (r = n)),
                          (i[e] = r),
                          r);
                }
                function x(e) {
                    var t,
                        n = "";
                    for (t = 0; t < e.length; t += 1)
                        (n += t > 0 ? "+" : ""), (n += d(e[t]));
                    return n;
                }
                function g(e) {
                    return c + "(" + x(e) + ")()";
                }
                (f = {
                    hieroglyphyString: x,
                    hieroglyphyNumber: function (e) {
                        if ((e = +e) <= 9) return n[e];
                        return "+(" + x(e.toString(10)) + ")";
                    },
                    hieroglyphyScript: g,
                }),
                    (e.exports = f),
                    "[]+{}",
                    "+{}+[]",
                    "!![]+[]",
                    "![]+[]",
                    "[][[]]+[]",
                    ((i = {
                        0:
                            "(" +
                            (n = [
                                "+[]",
                                "+!![]",
                                "!+[]+!![]",
                                "!+[]+!![]+!![]",
                                "!+[]+!![]+!![]+!![]",
                                "!+[]+!![]+!![]+!![]+!![]",
                                "!+[]+!![]+!![]+!![]+!![]+!![]",
                                "!+[]+!![]+!![]+!![]+!![]+!![]+!![]",
                                "!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]",
                                "!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]",
                            ])[0] +
                            "+[])",
                        1: "(" + n[1] + "+[])",
                        2: "(" + n[2] + "+[])",
                        3: "(" + n[3] + "+[])",
                        4: "(" + n[4] + "+[])",
                        5: "(" + n[5] + "+[])",
                        6: "(" + n[6] + "+[])",
                        7: "(" + n[7] + "+[])",
                        8: "(" + n[8] + "+[])",
                        9: "(" + n[9] + "+[])",
                    })[" "] = "([]+{})[" + n[7] + "]"),
                    (i["["] = "([]+{})[" + n[0] + "]"),
                    (i["]"] = "([]+{})[" + i[1] + "+" + i[4] + "]"),
                    (i.a = "(+{}+[])[" + n[1] + "]"),
                    (i.b = "([]+{})[" + n[2] + "]"),
                    (i.c = "([]+{})[" + n[5] + "]"),
                    (i.d = "([][[]]+[])[" + n[2] + "]"),
                    (i.e = "([][[]]+[])[" + n[3] + "]"),
                    (i.f = "(![]+[])[" + n[0] + "]"),
                    (i.i = "([][[]]+[])[" + n[5] + "]"),
                    (i.j = "([]+{})[" + n[3] + "]"),
                    (i.l = "(![]+[])[" + n[2] + "]"),
                    (i.n = "([][[]]+[])[" + n[1] + "]"),
                    (i.o = "([]+{})[" + n[1] + "]"),
                    (i.r = "(!![]+[])[" + n[1] + "]"),
                    (i.s = "(![]+[])[" + n[3] + "]"),
                    (i.t = "(!![]+[])[" + n[0] + "]"),
                    (i.u = "([][[]]+[])[" + n[0] + "]"),
                    (i.N = "(+{}+[])[" + n[0] + "]"),
                    (i.O = "([]+{})[" + n[8] + "]"),
                    (o = "[]+([]+{})[" + x("constructor") + "]"),
                    (i.S = "(" + o + ")[" + n[9] + "]"),
                    (i.g = "(" + o + ")[(" + n[7] + ")+(" + n[7] + ")]"),
                    (r =
                        "+(" +
                        n[1] +
                        "+" +
                        i.e +
                        "+" +
                        i[1] +
                        "+" +
                        i[0] +
                        "+" +
                        i[0] +
                        "+" +
                        i[0] +
                        ")+[]"),
                    (i.y = "(" + r + ")[" + n[7] + "]"),
                    (i.I = "(" + r + ")[" + n[0] + "]"),
                    (a =
                        "+(" +
                        n[1] +
                        "+" +
                        i.e +
                        "+" +
                        i[1] +
                        "+" +
                        i[0] +
                        "+" +
                        i[0] +
                        ")+[]"),
                    (i["+"] = "(" + a + ")[" + n[2] + "]"),
                    (c = "[][" + x("sort") + "][" + x("constructor") + "]"),
                    (i.h =
                        "((" +
                        n[9] +
                        ")+(" +
                        n[8] +
                        "))[" +
                        x("toString") +
                        "]((" +
                        n[9] +
                        ")+(" +
                        n[9] +
                        "))"),
                    (i.p =
                        "((" +
                        n[9] +
                        ")+(" +
                        n[9] +
                        ")+(" +
                        n[7] +
                        "))[" +
                        x("toString") +
                        "]((" +
                        n[9] +
                        ")+(" +
                        n[9] +
                        ")+(" +
                        n[8] +
                        "))"),
                    (l = g("return unescape")),
                    (u = g("return escape")),
                    (i["%"] = u + "(" + x("[") + ")[" + n[0] + "]"),
                    (i["{"] =
                        "(+{}+[]+[][" +
                        x("filter") +
                        "])[" +
                        i[2] +
                        "+" +
                        i[1] +
                        "]"),
                    (i["}"] =
                        "(+{}+[]+[][" +
                        x("filter") +
                        "])[" +
                        i[3] +
                        "+" +
                        i[7] +
                        "]");
            })(
                ("undefined" !== typeof window && window) ||
                    ("undefined" !== typeof WorkerGlobalScope &&
                        WorkerGlobalScope)
            );
        },
        72: function (e, t, n) {
            "use strict";
            !(function (t) {
                e.exports = { encode: f };
                var n = "USE_CHAR_CODE",
                    r = 32,
                    a = 126,
                    o = {
                        false: "![]",
                        true: "!![]",
                        undefined: "[][[]]",
                        NaN: "+[![]]",
                        Infinity:
                            "+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]]+[+[]])",
                    },
                    i = {
                        Array: "[]",
                        Number: "(+[])",
                        String: "([]+[])",
                        Boolean: "(![])",
                        Function: '[]["filter"]',
                        RegExp: 'Function("return/0/")()',
                    },
                    c = {
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
                    u = 'Function("return this")()';
                var l = 0;
                function f(e, t) {
                    0 === l &&
                        (!(function () {
                            var e, t, n;
                            for (t = 0; t < 10; t++) {
                                for (
                                    e = "+[]", t > 0 && (e = "+!" + e), n = 1;
                                    n < t;
                                    n++
                                )
                                    e = "+!+[]" + e;
                                t > 1 && (e = e.substr(1)),
                                    (c[t] = "[" + e + "]");
                            }
                        })(),
                        (function () {
                            for (var e in c)
                                c[e] === n &&
                                    (c[e] =
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
                                l = "";
                            function f(t, n) {
                                e = e.replace(new RegExp(t, "gi"), n);
                            }
                            function s(e, t) {
                                return c[t];
                            }
                            function p(e, n) {
                                var r = n.split(""),
                                    a = +r.shift(),
                                    o = "+[]";
                                for (a > 0 && (o = "+!" + o), t = 1; t < a; t++)
                                    o = "+!+[]" + o;
                                return (
                                    a > 1 && (o = o.substr(1)),
                                    [o].concat(r).join("+").replace(/(\d)/g, s)
                                );
                            }
                            for (t = r; t <= a; t++)
                                if (
                                    ((l = String.fromCharCode(t)), (e = c[l]))
                                ) {
                                    for (n in i)
                                        f("\\b" + n, i[n] + '["constructor"]');
                                    for (n in o) f(n, o[n]);
                                    f("(\\d\\d+)", p),
                                        f("\\((\\d)\\)", s),
                                        f("\\[(\\d)\\]", s),
                                        f("GLOBAL", u),
                                        f('\\+""', "+[]"),
                                        f('""', "[]+[]"),
                                        (c[l] = e);
                                }
                        })(),
                        (function () {
                            var e,
                                t,
                                n,
                                o = /[^\[\]\(\)\!\+]{1}/g,
                                i = a - r;
                            function u() {
                                var e,
                                    t,
                                    r = !1;
                                for (e in ((n = {}), c))
                                    (t = c[e]).match(o) &&
                                        ((n[e] = t), (r = !0));
                                return r;
                            }
                            function l(e, t) {
                                return t.split("").join("+");
                            }
                            function f(e) {
                                return n[e] ? e : c[e];
                            }
                            for (e in c)
                                c[e] = c[e].replace(/\"([^\"]+)\"/gi, l);
                            for (; u(); ) {
                                for (e in n)
                                    (t = (t = c[e]).replace(o, f)),
                                        (c[e] = t),
                                        (n[e] = t);
                                if (0 === i--) {
                                    throw "Could not compile the following chars:";
                                }
                            }
                        })(),
                        (l = 1));
                    var s = [];
                    if (!e) return "";
                    var p = "";
                    for (var d in o) p += d + "|";
                    return (
                        (p += "."),
                        e.replace(new RegExp(p, "g"), function (e) {
                            var t = o[e];
                            t
                                ? s.push("[" + t + "]+[]")
                                : (t = c[e])
                                ? s.push(t)
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
                                                "\\u" +
                                                    e.charCodeAt(0).toString(16)
                                            ) +
                                            ")"),
                                  s.push(t),
                                  (c[e] = t));
                        }),
                        (s = s.join("+")),
                        /^\d$/.test(e) && (s += "+[]"),
                        t
                            ? (s =
                                  "[][" +
                                  f("filter") +
                                  "][" +
                                  f("constructor") +
                                  "](" +
                                  s +
                                  ")()")
                            : "(" + s + ")"
                    );
                }
            })(
                ("undefined" !== typeof window && window) ||
                    ("undefined" !== typeof WorkerGlobalScope &&
                        WorkerGlobalScope)
            );
        },
        79: function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, "default", function () {
                    return m;
                });
            var r = n(17),
                a = n(18),
                o = n(71),
                i = n.n(o),
                c = n(72),
                u = n.n(c),
                l = n(0),
                f = n.n(l);
            function s() {
                Object(a.a)("success");
            }
            var p = f.a.useState,
                d = f.a.useEffect,
                x = f.a.useCallback;
            var g,
                h =
                    "clip" +
                    "xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(
                        /[xy]/g,
                        function (e) {
                            var t = (16 * Math.random()) | 0;
                            return ("x" == e ? t : (3 & t) | 8).toString(16);
                        }
                    );
            function m() {
                var e = function (e) {
                        g = g || [
                            {
                                prefix:
                                    "[][(![]+[])[!+[]+!![]+!![]]+([]+{})[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]](",
                                postfix: ")()",
                            },
                            {
                                prefix:
                                    "[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]](",
                                postfix: ")()",
                            },
                            {
                                prefix:
                                    "[][" +
                                    i.a.hieroglyphyString("sort") +
                                    "][" +
                                    i.a.hieroglyphyString("constructor") +
                                    "](",
                                postfix: ")()",
                            },
                            {
                                prefix:
                                    "[][" +
                                    u.a.encode("filter") +
                                    "][" +
                                    u.a.encode("constructor") +
                                    "](",
                                postfix: ")()",
                            },
                        ];
                        var t = e;
                        if (0 !== t.length) {
                            for (var n = 0; n < g.length; n++)
                                if (E(g[n].prefix, g[n].postfix)) return s(), 1;
                            !(function (e) {
                                try {
                                    c(
                                        Function(
                                            "return ".concat(e)
                                        )().toString()
                                    ),
                                        s();
                                } catch (n) {
                                    return Object(a.a)("danger"), 0;
                                }
                            })(t);
                        } else
                            alert("\u8f93\u5165\u6846\u4e0d\u80fd\u4e3a\u7a7a");
                    },
                    t = p(""),
                    n = Object(r.a)(t, 2),
                    o = n[0],
                    c = n[1],
                    l = p(""),
                    m = Object(r.a)(l, 2),
                    b = m[0],
                    y = m[1],
                    v = x(
                        function (e) {
                            y(e.target.value);
                        },
                        [b]
                    ),
                    S = x(
                        function (e) {
                            c(e.target.value);
                        },
                        [o]
                    );
                function E(e, t) {
                    var n = (function (e, t) {
                        var n = e.match(new RegExp(t));
                        return n ? n[1] : null;
                    })(
                        b,
                        (function (e, t) {
                            return (
                                e.replace(/[\[\]\(\)\+\!]/g, "\\$&") +
                                "(.*)" +
                                t.replace(/[\[\]\(\)\+\!]/g, "\\$&")
                            );
                        })(e, t)
                    );
                    if (n)
                        try {
                            return (
                                c(Function("return ".concat(n))().toString()), 1
                            );
                        } catch (r) {}
                }
                return (
                    d(function () {
                        document.title =
                            "React router App-JSfuck Decoder and hieroglyphy decoder";
                    }),
                    f.a.createElement(
                        "div",
                        { className: "jdahd" },
                        f.a.createElement(
                            "h1",
                            { style: { "font-size": "30px" } },
                            "\u89e3\u7801JSFUCK \u548chieroglyphy",
                            f.a.createElement("br", null),
                            "decode JSFUCK and hieroglyphy"
                        ),
                        f.a.createElement(
                            "p",
                            null,
                            "JSFuck\u662f\u4e00\u79cd\u57fa\u4e8eJavaScript\u539f\u5b50\u90e8\u5206\u7684\u6df1\u5965\u6559\u80b2\u7f16\u7a0b\u98ce\u683c\u3002\u5b83\u53ea\u4f7f\u7528\u516d\u4e2a\u4e0d\u540c\u7684\u5b57\u7b26\u6765\u7f16\u5199\u548c\u6267\u884c\u4ee3\u7801\u3002"
                        ),
                        f.a.createElement("p", null, "()+[]!"),
                        f.a.createElement(
                            "p",
                            null,
                            "hieroglyphy\u662f\u4e00\u4e2a\u5de5\u5177\u548cjavascript\u5e93\uff0c\u7528\u4e8e\u5c06\u5b57\u7b26\u4e32\uff0c\u6570\u5b57\u548c\u811a\u672c\u8f6c\u6362\u4e3a\uff08\uff09[]",
                            " +\u7684\u7b49\u6548\u5e8f\u5217\uff01\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u7684\u5b57\u7b26\u3002"
                        ),
                        f.a.createElement("p", null, "()+[]!"),
                        f.a.createElement(
                            "p",
                            null,
                            "\u6d4f\u89c8\u5668\u517c\u5bb9\u6027: \u5efa\u8bae\u5728\u6700\u65b0\u8d85\u9ad8\u7248\u672cchrome\u6216\u8005Firefox\u6216\u8005safari\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\uff01"
                        ),
                        f.a.createElement("br", null),
                        f.a.createElement("textarea", {
                            value: b,
                            onChange: v,
                            className: "form-control",
                            placeholder: "Paste your code here!",
                            id: "code",
                            style: { width: "100%", "min-height": "250px" },
                        }),
                        f.a.createElement(
                            "button",
                            {
                                onClick: function () {
                                    e(b);
                                },
                                type: "button",
                                id: "decode",
                                value: "Decode",
                                className: "btn btn-primary btn-lg",
                            },
                            "Decode"
                        ),
                        f.a.createElement(
                            "div",
                            { id: "clip" + h },
                            f.a.createElement("textarea", {
                                value: o,
                                onChange: S,
                                className: "form-control",
                                id: "code2",
                                style: { width: "100%", "min-height": "250px" },
                            })
                        ),
                        f.a.createElement(
                            "button",
                            {
                                className: "btn btn-outline-primary btn-lg",
                                id: "run",
                                onClick: function () {
                                    Function("return ".concat(o))();
                                },
                            },
                            "Run This"
                        ),
                        f.a.createElement(
                            "button",
                            {
                                className: "btn btn-outline-success btn-lg",
                                "data-clipboard-target": "#clip" + h,
                            },
                            "\u590d\u5236"
                        ),
                        f.a.createElement("br", null),
                        f.a.createElement("br", null),
                        f.a.createElement(
                            "p",
                            null,
                            f.a.createElement(
                                "a",
                                {
                                    href:
                                        "https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER",
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                },
                                "https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER"
                            )
                        ),
                        f.a.createElement(
                            "p",
                            null,
                            f.a.createElement(
                                "a",
                                {
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    href:
                                        "https://github.com/aemkei/jsfuck/blob/master/jsfuck.js",
                                },
                                "https://github.com/aemkei/jsfuck/blob/master/jsfuck.js"
                            )
                        ),
                        f.a.createElement(
                            "a",
                            {
                                href:
                                    "https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js",
                                rel: "noopener noreferrer",
                                target: "_blank",
                            },
                            "https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js"
                        )
                    )
                );
            }
        },
    },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaHVuay4xMi5hYmE3NGQ1NDdhMTgwN2M0ZGMzYy5qcyIsInNvdXJjZVJvb3QiOiIifQ==
