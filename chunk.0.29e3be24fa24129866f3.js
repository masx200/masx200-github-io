(Function("return this")().webpackJsonp =
    Function("return this")().webpackJsonp || []).push([
    [0],
    {
        32: function (e, n, t) {
            e.exports = t(36);
        },
        33: function (e, n, t) {
            "use strict";
            function r(e, n, t, r, a, i, o) {
                try {
                    var s = e[i](o),
                        c = s.value;
                } catch (l) {
                    return void t(l);
                }
                s.done ? n(c) : Promise.resolve(c).then(r, a);
            }
            function a(e) {
                return function () {
                    var n = this,
                        t = arguments;
                    return new Promise(function (a, i) {
                        var o = e.apply(n, t);
                        function s(e) {
                            r(o, a, i, s, c, "next", e);
                        }
                        function c(e) {
                            r(o, a, i, s, c, "throw", e);
                        }
                        s(void 0);
                    });
                };
            }
            t.d(n, "a", function () {
                return a;
            });
        },
        36: function (e, n, t) {
            var r = (function (e) {
                "use strict";
                var n = Object.prototype,
                    t = n.hasOwnProperty,
                    r = "function" === typeof Symbol ? Symbol : {},
                    a = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    o = r.toStringTag || "@@toStringTag";
                function s(e, n, t, r) {
                    var a = n && n.prototype instanceof u ? n : u,
                        i = Object.create(a.prototype),
                        o = new N(r || []);
                    return (
                        (i._invoke = (function (e, n, t) {
                            var r = "suspendedStart";
                            return function (a, i) {
                                if ("executing" === r)
                                    throw new Error(
                                        "Generator is already running"
                                    );
                                if ("completed" === r) {
                                    if ("throw" === a) throw i;
                                    return M();
                                }
                                for (t.method = a, t.arg = i; ; ) {
                                    var o = t.delegate;
                                    if (o) {
                                        var s = m(o, t);
                                        if (s) {
                                            if (s === l) continue;
                                            return s;
                                        }
                                    }
                                    if ("next" === t.method)
                                        t.sent = t._sent = t.arg;
                                    else if ("throw" === t.method) {
                                        if ("suspendedStart" === r)
                                            throw ((r = "completed"), t.arg);
                                        t.dispatchException(t.arg);
                                    } else
                                        "return" === t.method &&
                                            t.abrupt("return", t.arg);
                                    r = "executing";
                                    var u = c(e, n, t);
                                    if ("normal" === u.type) {
                                        if (
                                            ((r = t.done
                                                ? "completed"
                                                : "suspendedYield"),
                                            u.arg === l)
                                        )
                                            continue;
                                        return { value: u.arg, done: t.done };
                                    }
                                    "throw" === u.type &&
                                        ((r = "completed"),
                                        (t.method = "throw"),
                                        (t.arg = u.arg));
                                }
                            };
                        })(e, t, o)),
                        i
                    );
                }
                function c(e, n, t) {
                    try {
                        return { type: "normal", arg: e.call(n, t) };
                    } catch (r) {
                        return { type: "throw", arg: r };
                    }
                }
                e.wrap = s;
                var l = {};
                function u() {}
                function d() {}
                function g() {}
                var f = {};
                f[a] = function () {
                    return this;
                };
                var E = Object.getPrototypeOf,
                    h = E && E(E(O([])));
                h && h !== n && t.call(h, a) && (f = h);
                var _ = (g.prototype = u.prototype = Object.create(f));
                function p(e) {
                    ["next", "throw", "return"].forEach(function (n) {
                        e[n] = function (e) {
                            return this._invoke(n, e);
                        };
                    });
                }
                function b(e, n) {
                    var r;
                    this._invoke = function (a, i) {
                        function o() {
                            return new n(function (r, o) {
                                !(function r(a, i, o, s) {
                                    var l = c(e[a], e, i);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            d = u.value;
                                        return d &&
                                            "object" === typeof d &&
                                            t.call(d, "__await")
                                            ? n.resolve(d.__await).then(
                                                  function (e) {
                                                      r("next", e, o, s);
                                                  },
                                                  function (e) {
                                                      r("throw", e, o, s);
                                                  }
                                              )
                                            : n.resolve(d).then(
                                                  function (e) {
                                                      (u.value = e), o(u);
                                                  },
                                                  function (e) {
                                                      return r(
                                                          "throw",
                                                          e,
                                                          o,
                                                          s
                                                      );
                                                  }
                                              );
                                    }
                                    s(l.arg);
                                })(a, i, r, o);
                            });
                        }
                        return (r = r ? r.then(o, o) : o());
                    };
                }
                function m(e, n) {
                    var t = e.iterator[n.method];
                    if (void 0 === t) {
                        if (((n.delegate = null), "throw" === n.method)) {
                            if (
                                e.iterator.return &&
                                ((n.method = "return"),
                                (n.arg = void 0),
                                m(e, n),
                                "throw" === n.method)
                            )
                                return l;
                            (n.method = "throw"),
                                (n.arg = new TypeError(
                                    "The iterator does not provide a 'throw' method"
                                ));
                        }
                        return l;
                    }
                    var r = c(t, e.iterator, n.arg);
                    if ("throw" === r.type)
                        return (
                            (n.method = "throw"),
                            (n.arg = r.arg),
                            (n.delegate = null),
                            l
                        );
                    var a = r.arg;
                    return a
                        ? a.done
                            ? ((n[e.resultName] = a.value),
                              (n.next = e.nextLoc),
                              "return" !== n.method &&
                                  ((n.method = "next"), (n.arg = void 0)),
                              (n.delegate = null),
                              l)
                            : a
                        : ((n.method = "throw"),
                          (n.arg = new TypeError(
                              "iterator result is not an object"
                          )),
                          (n.delegate = null),
                          l);
                }
                function v(e) {
                    var n = { tryLoc: e[0] };
                    1 in e && (n.catchLoc = e[1]),
                        2 in e && ((n.finallyLoc = e[2]), (n.afterLoc = e[3])),
                        this.tryEntries.push(n);
                }
                function y(e) {
                    var n = e.completion || {};
                    (n.type = "normal"), delete n.arg, (e.completion = n);
                }
                function N(e) {
                    (this.tryEntries = [{ tryLoc: "root" }]),
                        e.forEach(v, this),
                        this.reset(!0);
                }
                function O(e) {
                    if (e) {
                        var n = e[a];
                        if (n) return n.call(e);
                        if ("function" === typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                i = function n() {
                                    for (; ++r < e.length; )
                                        if (t.call(e, r))
                                            return (
                                                (n.value = e[r]),
                                                (n.done = !1),
                                                n
                                            );
                                    return (n.value = void 0), (n.done = !0), n;
                                };
                            return (i.next = i);
                        }
                    }
                    return { next: M };
                }
                function M() {
                    return { value: void 0, done: !0 };
                }
                return (
                    (d.prototype = _.constructor = g),
                    (g.constructor = d),
                    (g[o] = d.displayName = "GeneratorFunction"),
                    (e.isGeneratorFunction = function (e) {
                        var n = "function" === typeof e && e.constructor;
                        return (
                            !!n &&
                            (n === d ||
                                "GeneratorFunction" ===
                                    (n.displayName || n.name))
                        );
                    }),
                    (e.mark = function (e) {
                        return (
                            Object.setPrototypeOf
                                ? Object.setPrototypeOf(e, g)
                                : ((e.__proto__ = g),
                                  o in e || (e[o] = "GeneratorFunction")),
                            (e.prototype = Object.create(_)),
                            e
                        );
                    }),
                    (e.awrap = function (e) {
                        return { __await: e };
                    }),
                    p(b.prototype),
                    (b.prototype[i] = function () {
                        return this;
                    }),
                    (e.AsyncIterator = b),
                    (e.async = function (n, t, r, a, i) {
                        void 0 === i && (i = Promise);
                        var o = new b(s(n, t, r, a), i);
                        return e.isGeneratorFunction(t)
                            ? o
                            : o.next().then(function (e) {
                                  return e.done ? e.value : o.next();
                              });
                    }),
                    p(_),
                    (_[o] = "Generator"),
                    (_[a] = function () {
                        return this;
                    }),
                    (_.toString = function () {
                        return "[object Generator]";
                    }),
                    (e.keys = function (e) {
                        var n = [];
                        for (var t in e) n.push(t);
                        return (
                            n.reverse(),
                            function t() {
                                for (; n.length; ) {
                                    var r = n.pop();
                                    if (r in e)
                                        return (t.value = r), (t.done = !1), t;
                                }
                                return (t.done = !0), t;
                            }
                        );
                    }),
                    (e.values = O),
                    (N.prototype = {
                        constructor: N,
                        reset: function (e) {
                            if (
                                ((this.prev = 0),
                                (this.next = 0),
                                (this.sent = this._sent = void 0),
                                (this.done = !1),
                                (this.delegate = null),
                                (this.method = "next"),
                                (this.arg = void 0),
                                this.tryEntries.forEach(y),
                                !e)
                            )
                                for (var n in this)
                                    "t" === n.charAt(0) &&
                                        t.call(this, n) &&
                                        !isNaN(+n.slice(1)) &&
                                        (this[n] = void 0);
                        },
                        stop: function () {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval;
                        },
                        dispatchException: function (e) {
                            if (this.done) throw e;
                            var n = this;
                            function r(t, r) {
                                return (
                                    (o.type = "throw"),
                                    (o.arg = e),
                                    (n.next = t),
                                    r &&
                                        ((n.method = "next"), (n.arg = void 0)),
                                    !!r
                                );
                            }
                            for (
                                var a = this.tryEntries.length - 1;
                                a >= 0;
                                --a
                            ) {
                                var i = this.tryEntries[a],
                                    o = i.completion;
                                if ("root" === i.tryLoc) return r("end");
                                if (i.tryLoc <= this.prev) {
                                    var s = t.call(i, "catchLoc"),
                                        c = t.call(i, "finallyLoc");
                                    if (s && c) {
                                        if (this.prev < i.catchLoc)
                                            return r(i.catchLoc, !0);
                                        if (this.prev < i.finallyLoc)
                                            return r(i.finallyLoc);
                                    } else if (s) {
                                        if (this.prev < i.catchLoc)
                                            return r(i.catchLoc, !0);
                                    } else {
                                        if (!c)
                                            throw new Error(
                                                "try statement without catch or finally"
                                            );
                                        if (this.prev < i.finallyLoc)
                                            return r(i.finallyLoc);
                                    }
                                }
                            }
                        },
                        abrupt: function (e, n) {
                            for (
                                var r = this.tryEntries.length - 1;
                                r >= 0;
                                --r
                            ) {
                                var a = this.tryEntries[r];
                                if (
                                    a.tryLoc <= this.prev &&
                                    t.call(a, "finallyLoc") &&
                                    this.prev < a.finallyLoc
                                ) {
                                    var i = a;
                                    break;
                                }
                            }
                            i &&
                                ("break" === e || "continue" === e) &&
                                i.tryLoc <= n &&
                                n <= i.finallyLoc &&
                                (i = null);
                            var o = i ? i.completion : {};
                            return (
                                (o.type = e),
                                (o.arg = n),
                                i
                                    ? ((this.method = "next"),
                                      (this.next = i.finallyLoc),
                                      l)
                                    : this.complete(o)
                            );
                        },
                        complete: function (e, n) {
                            if ("throw" === e.type) throw e.arg;
                            return (
                                "break" === e.type || "continue" === e.type
                                    ? (this.next = e.arg)
                                    : "return" === e.type
                                    ? ((this.rval = this.arg = e.arg),
                                      (this.method = "return"),
                                      (this.next = "end"))
                                    : "normal" === e.type &&
                                      n &&
                                      (this.next = n),
                                l
                            );
                        },
                        finish: function (e) {
                            for (
                                var n = this.tryEntries.length - 1;
                                n >= 0;
                                --n
                            ) {
                                var t = this.tryEntries[n];
                                if (t.finallyLoc === e)
                                    return (
                                        this.complete(t.completion, t.afterLoc),
                                        y(t),
                                        l
                                    );
                            }
                        },
                        catch: function (e) {
                            for (
                                var n = this.tryEntries.length - 1;
                                n >= 0;
                                --n
                            ) {
                                var t = this.tryEntries[n];
                                if (t.tryLoc === e) {
                                    var r = t.completion;
                                    if ("throw" === r.type) {
                                        var a = r.arg;
                                        y(t);
                                    }
                                    return a;
                                }
                            }
                            throw new Error("illegal catch attempt");
                        },
                        delegateYield: function (e, n, t) {
                            return (
                                (this.delegate = {
                                    iterator: O(e),
                                    resultName: n,
                                    nextLoc: t,
                                }),
                                "next" === this.method && (this.arg = void 0),
                                l
                            );
                        },
                    }),
                    e
                );
            })(e.exports);
            try {
                regeneratorRuntime = r;
            } catch (a) {
                Function("r", "regeneratorRuntime = r")(r);
            }
        },
        74: function (e, n, t) {
            var r;
            !(function (t) {
                var a =
                    ("object" === typeof window && window) ||
                    ("object" === typeof self && self);
                n.nodeType
                    ? a &&
                      ((a.hljs = t({})),
                      void 0 ===
                          (r = function () {
                              return a.hljs;
                          }.apply(n, [])) || (e.exports = r))
                    : t(n);
            })(function (e) {
                var n = [],
                    t = Object.keys,
                    r = {},
                    a = {},
                    i = !0,
                    o = /^(no-?highlight|plain|text)$/i,
                    s = /\blang(?:uage)?-([\w-]+)\b/i,
                    c = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
                    l = {
                        classPrefix: "hljs-",
                        tabReplace: null,
                        useBR: !1,
                        languages: void 0,
                    },
                    u = "of and for in not or if then".split(" ");
                function d(e) {
                    return e
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;");
                }
                function g(e) {
                    return e.nodeName.toLowerCase();
                }
                function f(e) {
                    return o.test(e);
                }
                function E(e) {
                    var n,
                        t = {},
                        r = Array.prototype.slice.call(arguments, 1);
                    for (n in e) t[n] = e[n];
                    return (
                        r.forEach(function (e) {
                            for (n in e) t[n] = e[n];
                        }),
                        t
                    );
                }
                function h(e) {
                    var n = [];
                    return (
                        (function e(t, r) {
                            for (var a = t.firstChild; a; a = a.nextSibling)
                                3 === a.nodeType
                                    ? (r += a.nodeValue.length)
                                    : 1 === a.nodeType &&
                                      (n.push({
                                          event: "start",
                                          offset: r,
                                          node: a,
                                      }),
                                      (r = e(a, r)),
                                      g(a).match(/br|hr|img|input/) ||
                                          n.push({
                                              event: "stop",
                                              offset: r,
                                              node: a,
                                          }));
                            return r;
                        })(e, 0),
                        n
                    );
                }
                function _(e) {
                    return (
                        e.variants &&
                            !e.cached_variants &&
                            (e.cached_variants = e.variants.map(function (n) {
                                return E(e, { variants: null }, n);
                            })),
                        e.cached_variants
                            ? e.cached_variants
                            : (function e(n) {
                                  return (
                                      !!n && (n.endsWithParent || e(n.starts))
                                  );
                              })(e)
                            ? [E(e, { starts: e.starts ? E(e.starts) : null })]
                            : Object.isFrozen(e)
                            ? [E(e)]
                            : [e]
                    );
                }
                function p(e, n) {
                    return n
                        ? Number(n)
                        : ((t = e), -1 != u.indexOf(t.toLowerCase()) ? 0 : 1);
                    var t;
                }
                function b(e) {
                    function n(e) {
                        return (e && e.source) || e;
                    }
                    function r(t, r) {
                        return new RegExp(
                            n(t),
                            "m" +
                                (e.case_insensitive ? "i" : "") +
                                (r ? "g" : "")
                        );
                    }
                    function a(e) {
                        var t,
                            a,
                            i = {},
                            o = [],
                            s = {},
                            c = 1;
                        function l(e, n) {
                            (i[c] = e),
                                o.push([e, n]),
                                (c +=
                                    (function (e) {
                                        return (
                                            new RegExp(e.toString() + "|").exec(
                                                ""
                                            ).length - 1
                                        );
                                    })(n) + 1);
                        }
                        for (var u = 0; u < e.contains.length; u++) {
                            l(
                                (a = e.contains[u]),
                                a.beginKeywords
                                    ? "\\.?(?:" + a.begin + ")\\.?"
                                    : a.begin
                            );
                        }
                        e.terminator_end && l("end", e.terminator_end),
                            e.illegal && l("illegal", e.illegal);
                        var d = o.map(function (e) {
                            return e[1];
                        });
                        return (
                            (t = r(
                                (function (e, t) {
                                    for (
                                        var r = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,
                                            a = 0,
                                            i = "",
                                            o = 0;
                                        o < e.length;
                                        o++
                                    ) {
                                        var s = (a += 1),
                                            c = n(e[o]);
                                        for (
                                            o > 0 && (i += t), i += "(";
                                            c.length > 0;

                                        ) {
                                            var l = r.exec(c);
                                            if (null == l) {
                                                i += c;
                                                break;
                                            }
                                            (i += c.substring(0, l.index)),
                                                (c = c.substring(
                                                    l.index + l[0].length
                                                )),
                                                "\\" == l[0][0] && l[1]
                                                    ? (i +=
                                                          "\\" +
                                                          String(
                                                              Number(l[1]) + s
                                                          ))
                                                    : ((i += l[0]),
                                                      "(" == l[0] && a++);
                                        }
                                        i += ")";
                                    }
                                    return i;
                                })(d, "|"),
                                !0
                            )),
                            (s.lastIndex = 0),
                            (s.exec = function (n) {
                                var r;
                                if (0 === o.length) return null;
                                t.lastIndex = s.lastIndex;
                                var a = t.exec(n);
                                if (!a) return null;
                                for (var c = 0; c < a.length; c++)
                                    if (void 0 != a[c] && void 0 != i["" + c]) {
                                        r = i["" + c];
                                        break;
                                    }
                                return (
                                    "string" === typeof r
                                        ? ((a.type = r),
                                          (a.extra = [
                                              e.illegal,
                                              e.terminator_end,
                                          ]))
                                        : ((a.type = "begin"), (a.rule = r)),
                                    a
                                );
                            }),
                            s
                        );
                    }
                    if (e.contains && -1 != e.contains.indexOf("self")) {
                        if (!i)
                            throw new Error(
                                "ERR: contains `self` is not supported at the top-level of a language.  See documentation."
                            );
                        e.contains = e.contains.filter(function (e) {
                            return "self" != e;
                        });
                    }
                    !(function i(o, s) {
                        o.compiled ||
                            ((o.compiled = !0),
                            (o.keywords = o.keywords || o.beginKeywords),
                            o.keywords &&
                                (o.keywords = (function (e, n) {
                                    var r = {};
                                    return (
                                        "string" === typeof e
                                            ? a("keyword", e)
                                            : t(e).forEach(function (n) {
                                                  a(n, e[n]);
                                              }),
                                        r
                                    );
                                    function a(e, t) {
                                        n && (t = t.toLowerCase()),
                                            t.split(" ").forEach(function (n) {
                                                var t = n.split("|");
                                                r[t[0]] = [e, p(t[0], t[1])];
                                            });
                                    }
                                })(o.keywords, e.case_insensitive)),
                            (o.lexemesRe = r(o.lexemes || /\w+/, !0)),
                            s &&
                                (o.beginKeywords &&
                                    (o.begin =
                                        "\\b(" +
                                        o.beginKeywords.split(" ").join("|") +
                                        ")\\b"),
                                o.begin || (o.begin = /\B|\b/),
                                (o.beginRe = r(o.begin)),
                                o.endSameAsBegin && (o.end = o.begin),
                                o.end || o.endsWithParent || (o.end = /\B|\b/),
                                o.end && (o.endRe = r(o.end)),
                                (o.terminator_end = n(o.end) || ""),
                                o.endsWithParent &&
                                    s.terminator_end &&
                                    (o.terminator_end +=
                                        (o.end ? "|" : "") + s.terminator_end)),
                            o.illegal && (o.illegalRe = r(o.illegal)),
                            null == o.relevance && (o.relevance = 1),
                            o.contains || (o.contains = []),
                            (o.contains = Array.prototype.concat.apply(
                                [],
                                o.contains.map(function (e) {
                                    return _("self" === e ? o : e);
                                })
                            )),
                            o.contains.forEach(function (e) {
                                i(e, o);
                            }),
                            o.starts && i(o.starts, s),
                            (o.terminators = a(o)));
                    })(e);
                }
                function m(e, n, t, a) {
                    var o = n;
                    function s(e, n) {
                        var t = p.case_insensitive ? n[0].toLowerCase() : n[0];
                        return e.keywords.hasOwnProperty(t) && e.keywords[t];
                    }
                    function c(e, n, t, r) {
                        if (!t && "" === n) return "";
                        if (!e) return n;
                        var a = '<span class="' + (r ? "" : l.classPrefix);
                        return (a += e + '">') + n + (t ? "" : "</span>");
                    }
                    function u() {
                        (M +=
                            null != N.subLanguage
                                ? (function () {
                                      var e = "string" === typeof N.subLanguage;
                                      if (e && !r[N.subLanguage]) return d(R);
                                      var n = e
                                          ? m(
                                                N.subLanguage,
                                                R,
                                                !0,
                                                O[N.subLanguage]
                                            )
                                          : v(
                                                R,
                                                N.subLanguage.length
                                                    ? N.subLanguage
                                                    : void 0
                                            );
                                      return (
                                          N.relevance > 0 && (S += n.relevance),
                                          e && (O[N.subLanguage] = n.top),
                                          c(n.language, n.value, !1, !0)
                                      );
                                  })()
                                : (function () {
                                      var e, n, t, r;
                                      if (!N.keywords) return d(R);
                                      for (
                                          r = "",
                                              n = 0,
                                              N.lexemesRe.lastIndex = 0,
                                              t = N.lexemesRe.exec(R);
                                          t;

                                      )
                                          (r += d(R.substring(n, t.index))),
                                              (e = s(N, t))
                                                  ? ((S += e[1]),
                                                    (r += c(e[0], d(t[0]))))
                                                  : (r += d(t[0])),
                                              (n = N.lexemesRe.lastIndex),
                                              (t = N.lexemesRe.exec(R));
                                      return r + d(R.substr(n));
                                  })()),
                            (R = "");
                    }
                    function g(e) {
                        (M += e.className ? c(e.className, "", !0) : ""),
                            (N = Object.create(e, { parent: { value: N } }));
                    }
                    function f(e) {
                        var n = e[0],
                            t = e.rule;
                        return (
                            t &&
                                t.endSameAsBegin &&
                                (t.endRe = new RegExp(
                                    n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
                                    "m"
                                )),
                            t.skip
                                ? (R += n)
                                : (t.excludeBegin && (R += n),
                                  u(),
                                  t.returnBegin || t.excludeBegin || (R = n)),
                            g(t),
                            t.returnBegin ? 0 : n.length
                        );
                    }
                    function E(e) {
                        var n = e[0],
                            t = o.substr(e.index),
                            r = (function e(n, t) {
                                if (
                                    (function (e, n) {
                                        var t = e && e.exec(n);
                                        return t && 0 === t.index;
                                    })(n.endRe, t)
                                ) {
                                    for (; n.endsParent && n.parent; )
                                        n = n.parent;
                                    return n;
                                }
                                if (n.endsWithParent) return e(n.parent, t);
                            })(N, t);
                        if (r) {
                            var a = N;
                            a.skip
                                ? (R += n)
                                : (a.returnEnd || a.excludeEnd || (R += n),
                                  u(),
                                  a.excludeEnd && (R = n));
                            do {
                                N.className && (M += "</span>"),
                                    N.skip ||
                                        N.subLanguage ||
                                        (S += N.relevance),
                                    (N = N.parent);
                            } while (N !== r.parent);
                            return (
                                r.starts &&
                                    (r.endSameAsBegin &&
                                        (r.starts.endRe = r.endRe),
                                    g(r.starts)),
                                a.returnEnd ? 0 : n.length
                            );
                        }
                    }
                    var h = {};
                    function _(e, n) {
                        var r = n && n[0];
                        if (((R += e), null == r)) return u(), 0;
                        if (
                            "begin" == h.type &&
                            "end" == n.type &&
                            h.index == n.index &&
                            "" === r
                        )
                            return (R += o.slice(n.index, n.index + 1)), 1;
                        if (((h = n), "begin" === n.type)) return f(n);
                        if ("illegal" === n.type && !t)
                            throw new Error(
                                'Illegal lexeme "' +
                                    r +
                                    '" for mode "' +
                                    (N.className || "<unnamed>") +
                                    '"'
                            );
                        if ("end" === n.type) {
                            var a = E(n);
                            if (void 0 != a) return a;
                        }
                        return (R += r), r.length;
                    }
                    var p = w(e);
                    if (!p) throw new Error('Unknown language: "' + e + '"');
                    b(p);
                    var y,
                        N = a || p,
                        O = {},
                        M = "";
                    for (y = N; y !== p; y = y.parent)
                        y.className && (M = c(y.className, "", !0) + M);
                    var R = "",
                        S = 0;
                    try {
                        for (
                            var x, C, A = 0;
                            (N.terminators.lastIndex = A),
                                (x = N.terminators.exec(o));

                        )
                            (C = _(o.substring(A, x.index), x)),
                                (A = x.index + C);
                        for (_(o.substr(A)), y = N; y.parent; y = y.parent)
                            y.className && (M += "</span>");
                        return {
                            relevance: S,
                            value: M,
                            illegal: !1,
                            language: e,
                            top: N,
                        };
                    } catch (T) {
                        if (T.message && -1 !== T.message.indexOf("Illegal"))
                            return { illegal: !0, relevance: 0, value: d(o) };
                        if (i)
                            return {
                                relevance: 0,
                                value: d(o),
                                language: e,
                                top: N,
                                errorRaised: T,
                            };
                        throw T;
                    }
                }
                function v(e, n) {
                    n = n || l.languages || t(r);
                    var a = { relevance: 0, value: d(e) },
                        i = a;
                    return (
                        n
                            .filter(w)
                            .filter(R)
                            .forEach(function (n) {
                                var t = m(n, e, !1);
                                (t.language = n),
                                    t.relevance > i.relevance && (i = t),
                                    t.relevance > a.relevance &&
                                        ((i = a), (a = t));
                            }),
                        i.language && (a.second_best = i),
                        a
                    );
                }
                function y(e) {
                    return l.tabReplace || l.useBR
                        ? e.replace(c, function (e, n) {
                              return l.useBR && "\n" === e
                                  ? "<br>"
                                  : l.tabReplace
                                  ? n.replace(/\t/g, l.tabReplace)
                                  : "";
                          })
                        : e;
                }
                function N(e) {
                    var t,
                        r,
                        i,
                        o,
                        c,
                        u = (function (e) {
                            var n,
                                t,
                                r,
                                a,
                                i = e.className + " ";
                            if (
                                ((i += e.parentNode
                                    ? e.parentNode.className
                                    : ""),
                                (t = s.exec(i)))
                            ) {
                                var o = w(t[1]);
                                return o ? t[1] : "no-highlight";
                            }
                            for (
                                n = 0, r = (i = i.split(/\s+/)).length;
                                n < r;
                                n++
                            )
                                if (f((a = i[n])) || w(a)) return a;
                        })(e);
                    f(u) ||
                        (l.useBR
                            ? ((t = document.createElement(
                                  "div"
                              )).innerHTML = e.innerHTML
                                  .replace(/\n/g, "")
                                  .replace(/<br[ \/]*>/g, "\n"))
                            : (t = e),
                        (c = t.textContent),
                        (i = u ? m(u, c, !0) : v(c)),
                        (r = h(t)).length &&
                            (((o = document.createElement("div")).innerHTML =
                                i.value),
                            (i.value = (function (e, t, r) {
                                var a = 0,
                                    i = "",
                                    o = [];
                                function s() {
                                    return e.length && t.length
                                        ? e[0].offset !== t[0].offset
                                            ? e[0].offset < t[0].offset
                                                ? e
                                                : t
                                            : "start" === t[0].event
                                            ? e
                                            : t
                                        : e.length
                                        ? e
                                        : t;
                                }
                                function c(e) {
                                    i +=
                                        "<" +
                                        g(e) +
                                        n.map
                                            .call(e.attributes, function (e) {
                                                return (
                                                    " " +
                                                    e.nodeName +
                                                    '="' +
                                                    d(e.value).replace(
                                                        /"/g,
                                                        "&quot;"
                                                    ) +
                                                    '"'
                                                );
                                            })
                                            .join("") +
                                        ">";
                                }
                                function l(e) {
                                    i += "</" + g(e) + ">";
                                }
                                function u(e) {
                                    ("start" === e.event ? c : l)(e.node);
                                }
                                for (; e.length || t.length; ) {
                                    var f = s();
                                    if (
                                        ((i += d(r.substring(a, f[0].offset))),
                                        (a = f[0].offset),
                                        f === e)
                                    ) {
                                        o.reverse().forEach(l);
                                        do {
                                            u(f.splice(0, 1)[0]), (f = s());
                                        } while (
                                            f === e &&
                                            f.length &&
                                            f[0].offset === a
                                        );
                                        o.reverse().forEach(c);
                                    } else
                                        "start" === f[0].event
                                            ? o.push(f[0].node)
                                            : o.pop(),
                                            u(f.splice(0, 1)[0]);
                                }
                                return i + d(r.substr(a));
                            })(r, h(o), c))),
                        (i.value = y(i.value)),
                        (e.innerHTML = i.value),
                        (e.className = (function (e, n, t) {
                            var r = n ? a[n] : t,
                                i = [e.trim()];
                            return (
                                e.match(/\bhljs\b/) || i.push("hljs"),
                                -1 === e.indexOf(r) && i.push(r),
                                i.join(" ").trim()
                            );
                        })(e.className, u, i.language)),
                        (e.result = { language: i.language, re: i.relevance }),
                        i.second_best &&
                            (e.second_best = {
                                language: i.second_best.language,
                                re: i.second_best.relevance,
                            }));
                }
                function O() {
                    if (!O.called) {
                        O.called = !0;
                        var e = document.querySelectorAll("pre code");
                        n.forEach.call(e, N);
                    }
                }
                var M = { disableAutodetect: !0 };
                function w(e) {
                    return (e = (e || "").toLowerCase()), r[e] || r[a[e]];
                }
                function R(e) {
                    var n = w(e);
                    return n && !n.disableAutodetect;
                }
                return (
                    (e.highlight = m),
                    (e.highlightAuto = v),
                    (e.fixMarkup = y),
                    (e.highlightBlock = N),
                    (e.configure = function (e) {
                        l = E(l, e);
                    }),
                    (e.initHighlighting = O),
                    (e.initHighlightingOnLoad = function () {
                        window.addEventListener("DOMContentLoaded", O, !1),
                            window.addEventListener("load", O, !1);
                    }),
                    (e.registerLanguage = function (n, t) {
                        var o;
                        try {
                            o = t(e);
                        } catch (s) {
                            if (!i) throw s;
                            o = M;
                        }
                        (r[n] = o),
                            (o.rawDefinition = t.bind(null, e)),
                            o.aliases &&
                                o.aliases.forEach(function (e) {
                                    a[e] = n;
                                });
                    }),
                    (e.listLanguages = function () {
                        return t(r);
                    }),
                    (e.getLanguage = w),
                    (e.requireLanguage = function (e) {
                        var n = w(e);
                        if (n) return n;
                        throw new Error(
                            "The '{}' language is required, but not loaded.".replace(
                                "{}",
                                e
                            )
                        );
                    }),
                    (e.autoDetection = R),
                    (e.inherit = E),
                    (e.debugMode = function () {
                        i = !1;
                    }),
                    (e.IDENT_RE = "[a-zA-Z]\\w*"),
                    (e.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*"),
                    (e.NUMBER_RE = "\\b\\d+(\\.\\d+)?"),
                    (e.C_NUMBER_RE =
                        "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"),
                    (e.BINARY_NUMBER_RE = "\\b(0b[01]+)"),
                    (e.RE_STARTERS_RE =
                        "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~"),
                    (e.BACKSLASH_ESCAPE = {
                        begin: "\\\\[\\s\\S]",
                        relevance: 0,
                    }),
                    (e.APOS_STRING_MODE = {
                        className: "string",
                        begin: "'",
                        end: "'",
                        illegal: "\\n",
                        contains: [e.BACKSLASH_ESCAPE],
                    }),
                    (e.QUOTE_STRING_MODE = {
                        className: "string",
                        begin: '"',
                        end: '"',
                        illegal: "\\n",
                        contains: [e.BACKSLASH_ESCAPE],
                    }),
                    (e.PHRASAL_WORDS_MODE = {
                        begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
                    }),
                    (e.COMMENT = function (n, t, r) {
                        var a = e.inherit(
                            {
                                className: "comment",
                                begin: n,
                                end: t,
                                contains: [],
                            },
                            r || {}
                        );
                        return (
                            a.contains.push(e.PHRASAL_WORDS_MODE),
                            a.contains.push({
                                className: "doctag",
                                begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
                                relevance: 0,
                            }),
                            a
                        );
                    }),
                    (e.C_LINE_COMMENT_MODE = e.COMMENT("//", "$")),
                    (e.C_BLOCK_COMMENT_MODE = e.COMMENT("/\\*", "\\*/")),
                    (e.HASH_COMMENT_MODE = e.COMMENT("#", "$")),
                    (e.NUMBER_MODE = {
                        className: "number",
                        begin: e.NUMBER_RE,
                        relevance: 0,
                    }),
                    (e.C_NUMBER_MODE = {
                        className: "number",
                        begin: e.C_NUMBER_RE,
                        relevance: 0,
                    }),
                    (e.BINARY_NUMBER_MODE = {
                        className: "number",
                        begin: e.BINARY_NUMBER_RE,
                        relevance: 0,
                    }),
                    (e.CSS_NUMBER_MODE = {
                        className: "number",
                        begin:
                            e.NUMBER_RE +
                            "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                        relevance: 0,
                    }),
                    (e.REGEXP_MODE = {
                        className: "regexp",
                        begin: /\//,
                        end: /\/[gimuy]*/,
                        illegal: /\n/,
                        contains: [
                            e.BACKSLASH_ESCAPE,
                            {
                                begin: /\[/,
                                end: /\]/,
                                relevance: 0,
                                contains: [e.BACKSLASH_ESCAPE],
                            },
                        ],
                    }),
                    (e.TITLE_MODE = {
                        className: "title",
                        begin: e.IDENT_RE,
                        relevance: 0,
                    }),
                    (e.UNDERSCORE_TITLE_MODE = {
                        className: "title",
                        begin: e.UNDERSCORE_IDENT_RE,
                        relevance: 0,
                    }),
                    (e.METHOD_GUARD = {
                        begin: "\\.\\s*" + e.UNDERSCORE_IDENT_RE,
                        relevance: 0,
                    }),
                    [
                        e.BACKSLASH_ESCAPE,
                        e.APOS_STRING_MODE,
                        e.QUOTE_STRING_MODE,
                        e.PHRASAL_WORDS_MODE,
                        e.COMMENT,
                        e.C_LINE_COMMENT_MODE,
                        e.C_BLOCK_COMMENT_MODE,
                        e.HASH_COMMENT_MODE,
                        e.NUMBER_MODE,
                        e.C_NUMBER_MODE,
                        e.BINARY_NUMBER_MODE,
                        e.CSS_NUMBER_MODE,
                        e.REGEXP_MODE,
                        e.TITLE_MODE,
                        e.UNDERSCORE_TITLE_MODE,
                        e.METHOD_GUARD,
                    ].forEach(function (e) {
                        !(function e(n) {
                            Object.freeze(n);
                            var t = "function" === typeof n;
                            return (
                                Object.getOwnPropertyNames(n).forEach(function (
                                    r
                                ) {
                                    !n.hasOwnProperty(r) ||
                                        null === n[r] ||
                                        ("object" !== typeof n[r] &&
                                            "function" !== typeof n[r]) ||
                                        (t &&
                                            ("caller" === r ||
                                                "callee" === r ||
                                                "arguments" === r)) ||
                                        Object.isFrozen(n[r]) ||
                                        e(n[r]);
                                }),
                                n
                            );
                        })(e);
                    }),
                    e
                );
            });
        },
        75: function (e, n) {
            e.exports = function (e) {
                var n = {
                    begin: /(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,
                    returnBegin: !0,
                    end: ";",
                    endsWithParent: !0,
                    contains: [
                        {
                            className: "attribute",
                            begin: /\S/,
                            end: ":",
                            excludeEnd: !0,
                            starts: {
                                endsWithParent: !0,
                                excludeEnd: !0,
                                contains: [
                                    {
                                        begin: /[\w-]+\(/,
                                        returnBegin: !0,
                                        contains: [
                                            {
                                                className: "built_in",
                                                begin: /[\w-]+/,
                                            },
                                            {
                                                begin: /\(/,
                                                end: /\)/,
                                                contains: [
                                                    e.APOS_STRING_MODE,
                                                    e.QUOTE_STRING_MODE,
                                                    e.CSS_NUMBER_MODE,
                                                ],
                                            },
                                        ],
                                    },
                                    e.CSS_NUMBER_MODE,
                                    e.QUOTE_STRING_MODE,
                                    e.APOS_STRING_MODE,
                                    e.C_BLOCK_COMMENT_MODE,
                                    {
                                        className: "number",
                                        begin: "#[0-9A-Fa-f]+",
                                    },
                                    { className: "meta", begin: "!important" },
                                ],
                            },
                        },
                    ],
                };
                return {
                    case_insensitive: !0,
                    illegal: /[=\/|'\$]/,
                    contains: [
                        e.C_BLOCK_COMMENT_MODE,
                        { className: "selector-id", begin: /#[A-Za-z0-9_-]+/ },
                        {
                            className: "selector-class",
                            begin: /\.[A-Za-z0-9_-]+/,
                        },
                        {
                            className: "selector-attr",
                            begin: /\[/,
                            end: /\]/,
                            illegal: "$",
                            contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
                        },
                        {
                            className: "selector-pseudo",
                            begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/,
                        },
                        {
                            begin: "@(page|font-face)",
                            lexemes: "@[a-z-]+",
                            keywords: "@page @font-face",
                        },
                        {
                            begin: "@",
                            end: "[{;]",
                            illegal: /:/,
                            returnBegin: !0,
                            contains: [
                                {
                                    className: "keyword",
                                    begin: /@\-?\w[\w]*(\-\w+)*/,
                                },
                                {
                                    begin: /\s/,
                                    endsWithParent: !0,
                                    excludeEnd: !0,
                                    relevance: 0,
                                    keywords: "and or not only",
                                    contains: [
                                        {
                                            begin: /[a-z-]+:/,
                                            className: "attribute",
                                        },
                                        e.APOS_STRING_MODE,
                                        e.QUOTE_STRING_MODE,
                                        e.CSS_NUMBER_MODE,
                                    ],
                                },
                            ],
                        },
                        {
                            className: "selector-tag",
                            begin: "[a-zA-Z-][a-zA-Z0-9_-]*",
                            relevance: 0,
                        },
                        {
                            begin: "{",
                            end: "}",
                            illegal: /\S/,
                            contains: [e.C_BLOCK_COMMENT_MODE, n],
                        },
                    ],
                };
            };
        },
        76: function (e, n) {
            e.exports = function (e) {
                var n = "<>",
                    t = "</>",
                    r = {
                        begin: /<[A-Za-z0-9\\._:-]+/,
                        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
                    },
                    a = "[A-Za-z$_][0-9A-Za-z$_]*",
                    i = {
                        keyword:
                            "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
                        literal: "true false null undefined NaN Infinity",
                        built_in:
                            "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise",
                    },
                    o = {
                        className: "number",
                        variants: [
                            { begin: "\\b(0[bB][01]+)n?" },
                            { begin: "\\b(0[oO][0-7]+)n?" },
                            { begin: e.C_NUMBER_RE + "n?" },
                        ],
                        relevance: 0,
                    },
                    s = {
                        className: "subst",
                        begin: "\\$\\{",
                        end: "\\}",
                        keywords: i,
                        contains: [],
                    },
                    c = {
                        begin: "html`",
                        end: "",
                        starts: {
                            end: "`",
                            returnEnd: !1,
                            contains: [e.BACKSLASH_ESCAPE, s],
                            subLanguage: "xml",
                        },
                    },
                    l = {
                        begin: "css`",
                        end: "",
                        starts: {
                            end: "`",
                            returnEnd: !1,
                            contains: [e.BACKSLASH_ESCAPE, s],
                            subLanguage: "css",
                        },
                    },
                    u = {
                        className: "string",
                        begin: "`",
                        end: "`",
                        contains: [e.BACKSLASH_ESCAPE, s],
                    };
                s.contains = [
                    e.APOS_STRING_MODE,
                    e.QUOTE_STRING_MODE,
                    c,
                    l,
                    u,
                    o,
                    e.REGEXP_MODE,
                ];
                var d = s.contains.concat([
                    e.C_BLOCK_COMMENT_MODE,
                    e.C_LINE_COMMENT_MODE,
                ]);
                return {
                    aliases: ["js", "jsx", "mjs", "cjs"],
                    keywords: i,
                    contains: [
                        {
                            className: "meta",
                            relevance: 10,
                            begin: /^\s*['"]use (strict|asm)['"]/,
                        },
                        { className: "meta", begin: /^#!/, end: /$/ },
                        e.APOS_STRING_MODE,
                        e.QUOTE_STRING_MODE,
                        c,
                        l,
                        u,
                        e.C_LINE_COMMENT_MODE,
                        e.COMMENT("/\\*\\*", "\\*/", {
                            relevance: 0,
                            contains: [
                                {
                                    className: "doctag",
                                    begin: "@[A-Za-z]+",
                                    contains: [
                                        {
                                            className: "type",
                                            begin: "\\{",
                                            end: "\\}",
                                            relevance: 0,
                                        },
                                        {
                                            className: "variable",
                                            begin: a + "(?=\\s*(-)|$)",
                                            endsParent: !0,
                                            relevance: 0,
                                        },
                                        { begin: /(?=[^\n])\s/, relevance: 0 },
                                    ],
                                },
                            ],
                        }),
                        e.C_BLOCK_COMMENT_MODE,
                        o,
                        {
                            begin: /[{,\n]\s*/,
                            relevance: 0,
                            contains: [
                                {
                                    begin: a + "\\s*:",
                                    returnBegin: !0,
                                    relevance: 0,
                                    contains: [
                                        {
                                            className: "attr",
                                            begin: a,
                                            relevance: 0,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            begin:
                                "(" +
                                e.RE_STARTERS_RE +
                                "|\\b(case|return|throw)\\b)\\s*",
                            keywords: "return throw case",
                            contains: [
                                e.C_LINE_COMMENT_MODE,
                                e.C_BLOCK_COMMENT_MODE,
                                e.REGEXP_MODE,
                                {
                                    className: "function",
                                    begin: "(\\(.*?\\)|" + a + ")\\s*=>",
                                    returnBegin: !0,
                                    end: "\\s*=>",
                                    contains: [
                                        {
                                            className: "params",
                                            variants: [
                                                { begin: a },
                                                { begin: /\(\s*\)/ },
                                                {
                                                    begin: /\(/,
                                                    end: /\)/,
                                                    excludeBegin: !0,
                                                    excludeEnd: !0,
                                                    keywords: i,
                                                    contains: d,
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    className: "",
                                    begin: /\s/,
                                    end: /\s*/,
                                    skip: !0,
                                },
                                {
                                    variants: [
                                        { begin: n, end: t },
                                        { begin: r.begin, end: r.end },
                                    ],
                                    subLanguage: "xml",
                                    contains: [
                                        {
                                            begin: r.begin,
                                            end: r.end,
                                            skip: !0,
                                            contains: ["self"],
                                        },
                                    ],
                                },
                            ],
                            relevance: 0,
                        },
                        {
                            className: "function",
                            beginKeywords: "function",
                            end: /\{/,
                            excludeEnd: !0,
                            contains: [
                                e.inherit(e.TITLE_MODE, { begin: a }),
                                {
                                    className: "params",
                                    begin: /\(/,
                                    end: /\)/,
                                    excludeBegin: !0,
                                    excludeEnd: !0,
                                    contains: d,
                                },
                            ],
                            illegal: /\[|%/,
                        },
                        { begin: /\$[(.]/ },
                        e.METHOD_GUARD,
                        {
                            className: "class",
                            beginKeywords: "class",
                            end: /[{;=]/,
                            excludeEnd: !0,
                            illegal: /[:"\[\]]/,
                            contains: [
                                { beginKeywords: "extends" },
                                e.UNDERSCORE_TITLE_MODE,
                            ],
                        },
                        {
                            beginKeywords: "constructor get set",
                            end: /\{/,
                            excludeEnd: !0,
                        },
                    ],
                    illegal: /#(?!!)/,
                };
            };
        },
        77: function (e, n) {
            e.exports = function (e) {
                var n = { literal: "true false null" },
                    t = [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
                    r = [e.QUOTE_STRING_MODE, e.C_NUMBER_MODE],
                    a = {
                        end: ",",
                        endsWithParent: !0,
                        excludeEnd: !0,
                        contains: r,
                        keywords: n,
                    },
                    i = {
                        begin: "{",
                        end: "}",
                        contains: [
                            {
                                className: "attr",
                                begin: /"/,
                                end: /"/,
                                contains: [e.BACKSLASH_ESCAPE],
                                illegal: "\\n",
                            },
                            e.inherit(a, { begin: /:/ }),
                        ].concat(t),
                        illegal: "\\S",
                    },
                    o = {
                        begin: "\\[",
                        end: "\\]",
                        contains: [e.inherit(a)],
                        illegal: "\\S",
                    };
                return (
                    r.push(i, o),
                    t.forEach(function (e) {
                        r.push(e);
                    }),
                    { contains: r, keywords: n, illegal: "\\S" }
                );
            };
        },
        78: function (e, n) {
            e.exports = function (e) {
                var n = {
                        keyword:
                            "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await",
                        literal: "true false null undefined NaN Infinity",
                        built_in:
                            "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise",
                    },
                    t = {
                        className: "meta",
                        begin: "@[A-Za-z$_][0-9A-Za-z$_]*",
                    },
                    r = {
                        begin: "\\(",
                        end: /\)/,
                        keywords: n,
                        contains: [
                            "self",
                            e.QUOTE_STRING_MODE,
                            e.APOS_STRING_MODE,
                            e.NUMBER_MODE,
                        ],
                    },
                    a = {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: n,
                        contains: [
                            e.C_LINE_COMMENT_MODE,
                            e.C_BLOCK_COMMENT_MODE,
                            t,
                            r,
                        ],
                    },
                    i = {
                        className: "number",
                        variants: [
                            { begin: "\\b(0[bB][01]+)n?" },
                            { begin: "\\b(0[oO][0-7]+)n?" },
                            { begin: e.C_NUMBER_RE + "n?" },
                        ],
                        relevance: 0,
                    },
                    o = {
                        className: "subst",
                        begin: "\\$\\{",
                        end: "\\}",
                        keywords: n,
                        contains: [],
                    },
                    s = {
                        begin: "html`",
                        end: "",
                        starts: {
                            end: "`",
                            returnEnd: !1,
                            contains: [e.BACKSLASH_ESCAPE, o],
                            subLanguage: "xml",
                        },
                    },
                    c = {
                        begin: "css`",
                        end: "",
                        starts: {
                            end: "`",
                            returnEnd: !1,
                            contains: [e.BACKSLASH_ESCAPE, o],
                            subLanguage: "css",
                        },
                    },
                    l = {
                        className: "string",
                        begin: "`",
                        end: "`",
                        contains: [e.BACKSLASH_ESCAPE, o],
                    };
                return (
                    (o.contains = [
                        e.APOS_STRING_MODE,
                        e.QUOTE_STRING_MODE,
                        s,
                        c,
                        l,
                        i,
                        e.REGEXP_MODE,
                    ]),
                    {
                        aliases: ["ts"],
                        keywords: n,
                        contains: [
                            {
                                className: "meta",
                                begin: /^\s*['"]use strict['"]/,
                            },
                            e.APOS_STRING_MODE,
                            e.QUOTE_STRING_MODE,
                            s,
                            c,
                            l,
                            e.C_LINE_COMMENT_MODE,
                            e.C_BLOCK_COMMENT_MODE,
                            i,
                            {
                                begin:
                                    "(" +
                                    e.RE_STARTERS_RE +
                                    "|\\b(case|return|throw)\\b)\\s*",
                                keywords: "return throw case",
                                contains: [
                                    e.C_LINE_COMMENT_MODE,
                                    e.C_BLOCK_COMMENT_MODE,
                                    e.REGEXP_MODE,
                                    {
                                        className: "function",
                                        begin:
                                            "(\\(.*?\\)|" +
                                            e.IDENT_RE +
                                            ")\\s*=>",
                                        returnBegin: !0,
                                        end: "\\s*=>",
                                        contains: [
                                            {
                                                className: "params",
                                                variants: [
                                                    { begin: e.IDENT_RE },
                                                    { begin: /\(\s*\)/ },
                                                    {
                                                        begin: /\(/,
                                                        end: /\)/,
                                                        excludeBegin: !0,
                                                        excludeEnd: !0,
                                                        keywords: n,
                                                        contains: [
                                                            "self",
                                                            e.C_LINE_COMMENT_MODE,
                                                            e.C_BLOCK_COMMENT_MODE,
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                                relevance: 0,
                            },
                            {
                                className: "function",
                                beginKeywords: "function",
                                end: /[\{;]/,
                                excludeEnd: !0,
                                keywords: n,
                                contains: [
                                    "self",
                                    e.inherit(e.TITLE_MODE, {
                                        begin: "[A-Za-z$_][0-9A-Za-z$_]*",
                                    }),
                                    a,
                                ],
                                illegal: /%/,
                                relevance: 0,
                            },
                            {
                                beginKeywords: "constructor",
                                end: /[\{;]/,
                                excludeEnd: !0,
                                contains: ["self", a],
                            },
                            {
                                begin: /module\./,
                                keywords: { built_in: "module" },
                                relevance: 0,
                            },
                            {
                                beginKeywords: "module",
                                end: /\{/,
                                excludeEnd: !0,
                            },
                            {
                                beginKeywords: "interface",
                                end: /\{/,
                                excludeEnd: !0,
                                keywords: "interface extends",
                            },
                            { begin: /\$[(.]/ },
                            { begin: "\\." + e.IDENT_RE, relevance: 0 },
                            t,
                            r,
                        ],
                    }
                );
            };
        },
        79: function (e, n) {
            e.exports = function (e) {
                var n = {
                        className: "symbol",
                        begin: "&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;",
                    },
                    t = {
                        begin: "\\s",
                        contains: [
                            {
                                className: "meta-keyword",
                                begin: "#?[a-z_][a-z1-9_-]+",
                                illegal: "\\n",
                            },
                        ],
                    },
                    r = e.inherit(t, { begin: "\\(", end: "\\)" }),
                    a = e.inherit(e.APOS_STRING_MODE, {
                        className: "meta-string",
                    }),
                    i = e.inherit(e.QUOTE_STRING_MODE, {
                        className: "meta-string",
                    }),
                    o = {
                        endsWithParent: !0,
                        illegal: /</,
                        relevance: 0,
                        contains: [
                            {
                                className: "attr",
                                begin: "[A-Za-z0-9\\._:-]+",
                                relevance: 0,
                            },
                            {
                                begin: /=\s*/,
                                relevance: 0,
                                contains: [
                                    {
                                        className: "string",
                                        endsParent: !0,
                                        variants: [
                                            {
                                                begin: /"/,
                                                end: /"/,
                                                contains: [n],
                                            },
                                            {
                                                begin: /'/,
                                                end: /'/,
                                                contains: [n],
                                            },
                                            { begin: /[^\s"'=<>`]+/ },
                                        ],
                                    },
                                ],
                            },
                        ],
                    };
                return {
                    aliases: [
                        "html",
                        "xhtml",
                        "rss",
                        "atom",
                        "xjb",
                        "xsd",
                        "xsl",
                        "plist",
                        "wsf",
                        "svg",
                    ],
                    case_insensitive: !0,
                    contains: [
                        {
                            className: "meta",
                            begin: "<![a-z]",
                            end: ">",
                            relevance: 10,
                            contains: [
                                t,
                                i,
                                a,
                                r,
                                {
                                    begin: "\\[",
                                    end: "\\]",
                                    contains: [
                                        {
                                            className: "meta",
                                            begin: "<![a-z]",
                                            end: ">",
                                            contains: [t, r, i, a],
                                        },
                                    ],
                                },
                            ],
                        },
                        e.COMMENT("\x3c!--", "--\x3e", { relevance: 10 }),
                        {
                            begin: "<\\!\\[CDATA\\[",
                            end: "\\]\\]>",
                            relevance: 10,
                        },
                        n,
                        {
                            className: "meta",
                            begin: /<\?xml/,
                            end: /\?>/,
                            relevance: 10,
                        },
                        {
                            begin: /<\?(php)?/,
                            end: /\?>/,
                            subLanguage: "php",
                            contains: [
                                { begin: "/\\*", end: "\\*/", skip: !0 },
                                { begin: 'b"', end: '"', skip: !0 },
                                { begin: "b'", end: "'", skip: !0 },
                                e.inherit(e.APOS_STRING_MODE, {
                                    illegal: null,
                                    className: null,
                                    contains: null,
                                    skip: !0,
                                }),
                                e.inherit(e.QUOTE_STRING_MODE, {
                                    illegal: null,
                                    className: null,
                                    contains: null,
                                    skip: !0,
                                }),
                            ],
                        },
                        {
                            className: "tag",
                            begin: "<style(?=\\s|>)",
                            end: ">",
                            keywords: { name: "style" },
                            contains: [o],
                            starts: {
                                end: "</style>",
                                returnEnd: !0,
                                subLanguage: ["css", "xml"],
                            },
                        },
                        {
                            className: "tag",
                            begin: "<script(?=\\s|>)",
                            end: ">",
                            keywords: { name: "script" },
                            contains: [o],
                            starts: {
                                end: "</script>",
                                returnEnd: !0,
                                subLanguage: [
                                    "actionscript",
                                    "javascript",
                                    "handlebars",
                                    "xml",
                                ],
                            },
                        },
                        {
                            className: "tag",
                            begin: "</?",
                            end: "/?>",
                            contains: [
                                {
                                    className: "name",
                                    begin: /[^\/><\s]+/,
                                    relevance: 0,
                                },
                                o,
                            ],
                        },
                    ],
                };
            };
        },
    },
]);
