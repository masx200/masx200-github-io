(Function("return this")().webpackJsonp =
    Function("return this")().webpackJsonp || []).push([
    [10],
    {
        16: function (t, r, e) {
            "use strict";
            function n(t, r) {
                return (n =
                    Object.setPrototypeOf ||
                    function (t, r) {
                        return (t.__proto__ = r), t;
                    })(t, r);
            }
            e.d(r, "a", function () {
                return n;
            });
        },
        19: function (t, r, e) {
            "use strict";
            function n(t) {
                if (void 0 === t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return t;
            }
            e.d(r, "a", function () {
                return n;
            });
        },
        20: function (t, r, e) {
            "use strict";
            function n(t) {
                return (n = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            e.d(r, "a", function () {
                return n;
            });
        },
        21: function (t, r, e) {
            "use strict";
            function n() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return (
                        Date.prototype.toString.call(
                            Reflect.construct(Date, [], function () {})
                        ),
                        !0
                    );
                } catch (t) {
                    return !1;
                }
            }
            e.d(r, "a", function () {
                return n;
            });
        },
        24: function (t, r, e) {
            "use strict";
            function n(t, r) {
                if (!(t instanceof r))
                    throw new TypeError("Cannot call a class as a function");
            }
            e.d(r, "a", function () {
                return n;
            });
        },
        25: function (t, r, e) {
            "use strict";
            function n(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n);
                }
            }
            function o(t, r, e) {
                return r && n(t.prototype, r), e && n(t, e), t;
            }
            e.d(r, "a", function () {
                return o;
            });
        },
        26: function (t, r, e) {
            "use strict";
            e.d(r, "a", function () {
                return i;
            });
            var n = e(16),
                o = e(21);
            function i(t, r, e) {
                return (i = Object(o.a)()
                    ? Reflect.construct
                    : function (t, r, e) {
                          var o = [null];
                          o.push.apply(o, r);
                          var i = new (Function.bind.apply(t, o))();
                          return e && Object(n.a)(i, e.prototype), i;
                      }).apply(null, arguments);
            }
        },
        28: function (t, r, e) {
            "use strict";
            e.d(r, "a", function () {
                return o;
            });
            var n = e(16);
            function o(t, r) {
                if ("function" !== typeof r && null !== r)
                    throw new TypeError(
                        "Super expression must either be null or a function"
                    );
                (t.prototype = Object.create(r && r.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                })),
                    r && Object(n.a)(t, r);
            }
        },
        29: function (t, r, e) {
            "use strict";
            e.d(r, "a", function () {
                return p;
            });
            var n = e(20),
                o = e(21);
            function i(t) {
                return (i =
                    "function" === typeof Symbol &&
                    "symbol" === typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" === typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          })(t);
            }
            var u = e(19);
            function a(t, r) {
                return !r || ("object" !== i(r) && "function" !== typeof r)
                    ? Object(u.a)(t)
                    : r;
            }
            function p(t) {
                return function () {
                    var r,
                        e = Object(n.a)(t);
                    if (Object(o.a)()) {
                        var i = Object(n.a)(this).constructor;
                        r = Reflect.construct(e, arguments, i);
                    } else r = e.apply(this, arguments);
                    return a(this, r);
                };
            }
        },
        30: function (t, r, e) {
            "use strict";
            e.d(r, "a", function () {
                return u;
            });
            var n = e(20),
                o = e(16);
            var i = e(26);
            function u(t) {
                var r = "function" === typeof Map ? new Map() : void 0;
                return (u = function (t) {
                    if (
                        null === t ||
                        ((e = t),
                        -1 ===
                            Function.toString.call(e).indexOf("[native code]"))
                    )
                        return t;
                    var e;
                    if ("function" !== typeof t)
                        throw new TypeError(
                            "Super expression must either be null or a function"
                        );
                    if ("undefined" !== typeof r) {
                        if (r.has(t)) return r.get(t);
                        r.set(t, u);
                    }
                    function u() {
                        return Object(i.a)(
                            t,
                            arguments,
                            Object(n.a)(this).constructor
                        );
                    }
                    return (
                        (u.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: u,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0,
                            },
                        })),
                        Object(o.a)(u, t)
                    );
                })(t);
            }
        },
        32: function (t, r, e) {
            t.exports = e(36);
        },
        33: function (t, r, e) {
            "use strict";
            function n(t, r, e, n, o, i, u) {
                try {
                    var a = t[i](u),
                        p = a.value;
                } catch (s) {
                    return void e(s);
                }
                a.done ? r(p) : Promise.resolve(p).then(n, o);
            }
            function o(t) {
                return function () {
                    var r = this,
                        e = arguments;
                    return new Promise(function (o, i) {
                        var u = t.apply(r, e);
                        function a(t) {
                            n(u, o, i, a, p, "next", t);
                        }
                        function p(t) {
                            n(u, o, i, a, p, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            e.d(r, "a", function () {
                return o;
            });
        },
        34: function (t, r, e) {
            "use strict";
            var n = window.URL || window.webkitURL;
            t.exports = function (t, r) {
                try {
                    try {
                        var e;
                        try {
                            (e = new (window.BlobBuilder ||
                                window.WebKitBlobBuilder ||
                                window.MozBlobBuilder ||
                                window.MSBlobBuilder)()).append(t),
                                (e = e.getBlob());
                        } catch (o) {
                            e = new Blob([t]);
                        }
                        return new Worker(n.createObjectURL(e));
                    } catch (o) {
                        return new Worker(
                            "data:application/javascript," +
                                encodeURIComponent(t)
                        );
                    }
                } catch (o) {
                    if (!r) throw Error("Inline worker is not supported");
                    return new Worker(r);
                }
            };
        },
        36: function (t, r, e) {
            var n = (function (t) {
                "use strict";
                var r = Object.prototype,
                    e = r.hasOwnProperty,
                    n = "function" === typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";
                function a(t, r, e, n) {
                    var o = r && r.prototype instanceof f ? r : f,
                        i = Object.create(o.prototype),
                        u = new E(n || []);
                    return (
                        (i._invoke = (function (t, r, e) {
                            var n = "suspendedStart";
                            return function (o, i) {
                                if ("executing" === n)
                                    throw new Error(
                                        "Generator is already running"
                                    );
                                if ("completed" === n) {
                                    if ("throw" === o) throw i;
                                    return x();
                                }
                                for (e.method = o, e.arg = i; ; ) {
                                    var u = e.delegate;
                                    if (u) {
                                        var a = w(u, e);
                                        if (a) {
                                            if (a === s) continue;
                                            return a;
                                        }
                                    }
                                    if ("next" === e.method)
                                        e.sent = e._sent = e.arg;
                                    else if ("throw" === e.method) {
                                        if ("suspendedStart" === n)
                                            throw ((n = "completed"), e.arg);
                                        e.dispatchException(e.arg);
                                    } else
                                        "return" === e.method &&
                                            e.abrupt("return", e.arg);
                                    n = "executing";
                                    var f = p(t, r, e);
                                    if ("normal" === f.type) {
                                        if (
                                            ((n = e.done
                                                ? "completed"
                                                : "suspendedYield"),
                                            f.arg === s)
                                        )
                                            continue;
                                        return { value: f.arg, done: e.done };
                                    }
                                    "throw" === f.type &&
                                        ((n = "completed"),
                                        (e.method = "throw"),
                                        (e.arg = f.arg));
                                }
                            };
                        })(t, e, u)),
                        i
                    );
                }
                function p(t, r, e) {
                    try {
                        return { type: "normal", arg: t.call(r, e) };
                    } catch (n) {
                        return { type: "throw", arg: n };
                    }
                }
                t.wrap = a;
                var s = {};
                function f() {}
                function l() {}
                function c() {}
                var h = {};
                h[o] = function () {
                    return this;
                };
                var v = Object.getPrototypeOf,
                    y = v && v(v(O([])));
                y && y !== r && e.call(y, o) && (h = y);
                var g = (c.prototype = f.prototype = Object.create(h));
                function d(t) {
                    ["next", "throw", "return"].forEach(function (r) {
                        t[r] = function (t) {
                            return this._invoke(r, t);
                        };
                    });
                }
                function m(t, r) {
                    var n;
                    this._invoke = function (o, i) {
                        function u() {
                            return new r(function (n, u) {
                                !(function n(o, i, u, a) {
                                    var s = p(t[o], t, i);
                                    if ("throw" !== s.type) {
                                        var f = s.arg,
                                            l = f.value;
                                        return l &&
                                            "object" === typeof l &&
                                            e.call(l, "__await")
                                            ? r.resolve(l.__await).then(
                                                  function (t) {
                                                      n("next", t, u, a);
                                                  },
                                                  function (t) {
                                                      n("throw", t, u, a);
                                                  }
                                              )
                                            : r.resolve(l).then(
                                                  function (t) {
                                                      (f.value = t), u(f);
                                                  },
                                                  function (t) {
                                                      return n(
                                                          "throw",
                                                          t,
                                                          u,
                                                          a
                                                      );
                                                  }
                                              );
                                    }
                                    a(s.arg);
                                })(o, i, n, u);
                            });
                        }
                        return (n = n ? n.then(u, u) : u());
                    };
                }
                function w(t, r) {
                    var e = t.iterator[r.method];
                    if (void 0 === e) {
                        if (((r.delegate = null), "throw" === r.method)) {
                            if (
                                t.iterator.return &&
                                ((r.method = "return"),
                                (r.arg = void 0),
                                w(t, r),
                                "throw" === r.method)
                            )
                                return s;
                            (r.method = "throw"),
                                (r.arg = new TypeError(
                                    "The iterator does not provide a 'throw' method"
                                ));
                        }
                        return s;
                    }
                    var n = p(e, t.iterator, r.arg);
                    if ("throw" === n.type)
                        return (
                            (r.method = "throw"),
                            (r.arg = n.arg),
                            (r.delegate = null),
                            s
                        );
                    var o = n.arg;
                    return o
                        ? o.done
                            ? ((r[t.resultName] = o.value),
                              (r.next = t.nextLoc),
                              "return" !== r.method &&
                                  ((r.method = "next"), (r.arg = void 0)),
                              (r.delegate = null),
                              s)
                            : o
                        : ((r.method = "throw"),
                          (r.arg = new TypeError(
                              "iterator result is not an object"
                          )),
                          (r.delegate = null),
                          s);
                }
                function b(t) {
                    var r = { tryLoc: t[0] };
                    1 in t && (r.catchLoc = t[1]),
                        2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
                        this.tryEntries.push(r);
                }
                function S(t) {
                    var r = t.completion || {};
                    (r.type = "normal"), delete r.arg, (t.completion = r);
                }
                function E(t) {
                    (this.tryEntries = [{ tryLoc: "root" }]),
                        t.forEach(b, this),
                        this.reset(!0);
                }
                function O(t) {
                    if (t) {
                        var r = t[o];
                        if (r) return r.call(t);
                        if ("function" === typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function r() {
                                    for (; ++n < t.length; )
                                        if (e.call(t, n))
                                            return (
                                                (r.value = t[n]),
                                                (r.done = !1),
                                                r
                                            );
                                    return (r.value = void 0), (r.done = !0), r;
                                };
                            return (i.next = i);
                        }
                    }
                    return { next: x };
                }
                function x() {
                    return { value: void 0, done: !0 };
                }
                return (
                    (l.prototype = g.constructor = c),
                    (c.constructor = l),
                    (c[u] = l.displayName = "GeneratorFunction"),
                    (t.isGeneratorFunction = function (t) {
                        var r = "function" === typeof t && t.constructor;
                        return (
                            !!r &&
                            (r === l ||
                                "GeneratorFunction" ===
                                    (r.displayName || r.name))
                        );
                    }),
                    (t.mark = function (t) {
                        return (
                            Object.setPrototypeOf
                                ? Object.setPrototypeOf(t, c)
                                : ((t.__proto__ = c),
                                  u in t || (t[u] = "GeneratorFunction")),
                            (t.prototype = Object.create(g)),
                            t
                        );
                    }),
                    (t.awrap = function (t) {
                        return { __await: t };
                    }),
                    d(m.prototype),
                    (m.prototype[i] = function () {
                        return this;
                    }),
                    (t.AsyncIterator = m),
                    (t.async = function (r, e, n, o, i) {
                        void 0 === i && (i = Promise);
                        var u = new m(a(r, e, n, o), i);
                        return t.isGeneratorFunction(e)
                            ? u
                            : u.next().then(function (t) {
                                  return t.done ? t.value : u.next();
                              });
                    }),
                    d(g),
                    (g[u] = "Generator"),
                    (g[o] = function () {
                        return this;
                    }),
                    (g.toString = function () {
                        return "[object Generator]";
                    }),
                    (t.keys = function (t) {
                        var r = [];
                        for (var e in t) r.push(e);
                        return (
                            r.reverse(),
                            function e() {
                                for (; r.length; ) {
                                    var n = r.pop();
                                    if (n in t)
                                        return (e.value = n), (e.done = !1), e;
                                }
                                return (e.done = !0), e;
                            }
                        );
                    }),
                    (t.values = O),
                    (E.prototype = {
                        constructor: E,
                        reset: function (t) {
                            if (
                                ((this.prev = 0),
                                (this.next = 0),
                                (this.sent = this._sent = void 0),
                                (this.done = !1),
                                (this.delegate = null),
                                (this.method = "next"),
                                (this.arg = void 0),
                                this.tryEntries.forEach(S),
                                !t)
                            )
                                for (var r in this)
                                    "t" === r.charAt(0) &&
                                        e.call(this, r) &&
                                        !isNaN(+r.slice(1)) &&
                                        (this[r] = void 0);
                        },
                        stop: function () {
                            this.done = !0;
                            var t = this.tryEntries[0].completion;
                            if ("throw" === t.type) throw t.arg;
                            return this.rval;
                        },
                        dispatchException: function (t) {
                            if (this.done) throw t;
                            var r = this;
                            function n(e, n) {
                                return (
                                    (u.type = "throw"),
                                    (u.arg = t),
                                    (r.next = e),
                                    n &&
                                        ((r.method = "next"), (r.arg = void 0)),
                                    !!n
                                );
                            }
                            for (
                                var o = this.tryEntries.length - 1;
                                o >= 0;
                                --o
                            ) {
                                var i = this.tryEntries[o],
                                    u = i.completion;
                                if ("root" === i.tryLoc) return n("end");
                                if (i.tryLoc <= this.prev) {
                                    var a = e.call(i, "catchLoc"),
                                        p = e.call(i, "finallyLoc");
                                    if (a && p) {
                                        if (this.prev < i.catchLoc)
                                            return n(i.catchLoc, !0);
                                        if (this.prev < i.finallyLoc)
                                            return n(i.finallyLoc);
                                    } else if (a) {
                                        if (this.prev < i.catchLoc)
                                            return n(i.catchLoc, !0);
                                    } else {
                                        if (!p)
                                            throw new Error(
                                                "try statement without catch or finally"
                                            );
                                        if (this.prev < i.finallyLoc)
                                            return n(i.finallyLoc);
                                    }
                                }
                            }
                        },
                        abrupt: function (t, r) {
                            for (
                                var n = this.tryEntries.length - 1;
                                n >= 0;
                                --n
                            ) {
                                var o = this.tryEntries[n];
                                if (
                                    o.tryLoc <= this.prev &&
                                    e.call(o, "finallyLoc") &&
                                    this.prev < o.finallyLoc
                                ) {
                                    var i = o;
                                    break;
                                }
                            }
                            i &&
                                ("break" === t || "continue" === t) &&
                                i.tryLoc <= r &&
                                r <= i.finallyLoc &&
                                (i = null);
                            var u = i ? i.completion : {};
                            return (
                                (u.type = t),
                                (u.arg = r),
                                i
                                    ? ((this.method = "next"),
                                      (this.next = i.finallyLoc),
                                      s)
                                    : this.complete(u)
                            );
                        },
                        complete: function (t, r) {
                            if ("throw" === t.type) throw t.arg;
                            return (
                                "break" === t.type || "continue" === t.type
                                    ? (this.next = t.arg)
                                    : "return" === t.type
                                    ? ((this.rval = this.arg = t.arg),
                                      (this.method = "return"),
                                      (this.next = "end"))
                                    : "normal" === t.type &&
                                      r &&
                                      (this.next = r),
                                s
                            );
                        },
                        finish: function (t) {
                            for (
                                var r = this.tryEntries.length - 1;
                                r >= 0;
                                --r
                            ) {
                                var e = this.tryEntries[r];
                                if (e.finallyLoc === t)
                                    return (
                                        this.complete(e.completion, e.afterLoc),
                                        S(e),
                                        s
                                    );
                            }
                        },
                        catch: function (t) {
                            for (
                                var r = this.tryEntries.length - 1;
                                r >= 0;
                                --r
                            ) {
                                var e = this.tryEntries[r];
                                if (e.tryLoc === t) {
                                    var n = e.completion;
                                    if ("throw" === n.type) {
                                        var o = n.arg;
                                        S(e);
                                    }
                                    return o;
                                }
                            }
                            throw new Error("illegal catch attempt");
                        },
                        delegateYield: function (t, r, e) {
                            return (
                                (this.delegate = {
                                    iterator: O(t),
                                    resultName: r,
                                    nextLoc: e,
                                }),
                                "next" === this.method && (this.arg = void 0),
                                s
                            );
                        },
                    }),
                    t
                );
            })(t.exports);
            try {
                regeneratorRuntime = n;
            } catch (o) {
                Function("r", "regeneratorRuntime = r")(n);
            }
        },
        80: function (t, r, e) {
            (function (t) {
                var n,
                    o = (function (t) {
                        "use strict";
                        var r = 1e7,
                            e = 9007199254740992,
                            n = l(e),
                            i = "function" === typeof BigInt;
                        function u(t, r, e, n) {
                            return "undefined" === typeof t
                                ? u[0]
                                : "undefined" !== typeof r && (10 !== +r || e)
                                ? U(t, r, e, n)
                                : z(t);
                        }
                        function a(t, r) {
                            (this.value = t),
                                (this.sign = r),
                                (this.isSmall = !1);
                        }
                        function p(t) {
                            (this.value = t),
                                (this.sign = t < 0),
                                (this.isSmall = !0);
                        }
                        function s(t) {
                            this.value = t;
                        }
                        function f(t) {
                            return -e < t && t < e;
                        }
                        function l(t) {
                            return t < 1e7
                                ? [t]
                                : t < 1e14
                                ? [t % 1e7, Math.floor(t / 1e7)]
                                : [
                                      t % 1e7,
                                      Math.floor(t / 1e7) % 1e7,
                                      Math.floor(t / 1e14),
                                  ];
                        }
                        function c(t) {
                            h(t);
                            var e = t.length;
                            if (e < 4 && L(t, n) < 0)
                                switch (e) {
                                    case 0:
                                        return 0;
                                    case 1:
                                        return t[0];
                                    case 2:
                                        return t[0] + t[1] * r;
                                    default:
                                        return t[0] + (t[1] + t[2] * r) * r;
                                }
                            return t;
                        }
                        function h(t) {
                            for (var r = t.length; 0 === t[--r]; );
                            t.length = r + 1;
                        }
                        function v(t) {
                            for (var r = new Array(t), e = -1; ++e < t; )
                                r[e] = 0;
                            return r;
                        }
                        function y(t) {
                            return t > 0 ? Math.floor(t) : Math.ceil(t);
                        }
                        function g(t, e) {
                            var n,
                                o,
                                i = t.length,
                                u = e.length,
                                a = new Array(i),
                                p = 0,
                                s = r;
                            for (o = 0; o < u; o++)
                                (p = (n = t[o] + e[o] + p) >= s ? 1 : 0),
                                    (a[o] = n - p * s);
                            for (; o < i; )
                                (p = (n = t[o] + p) === s ? 1 : 0),
                                    (a[o++] = n - p * s);
                            return p > 0 && a.push(p), a;
                        }
                        function d(t, r) {
                            return t.length >= r.length ? g(t, r) : g(r, t);
                        }
                        function m(t, e) {
                            var n,
                                o,
                                i = t.length,
                                u = new Array(i),
                                a = r;
                            for (o = 0; o < i; o++)
                                (n = t[o] - a + e),
                                    (e = Math.floor(n / a)),
                                    (u[o] = n - e * a),
                                    (e += 1);
                            for (; e > 0; )
                                (u[o++] = e % a), (e = Math.floor(e / a));
                            return u;
                        }
                        function w(t, r) {
                            var e,
                                n,
                                o = t.length,
                                i = r.length,
                                u = new Array(o),
                                a = 0;
                            for (e = 0; e < i; e++)
                                (n = t[e] - a - r[e]) < 0
                                    ? ((n += 1e7), (a = 1))
                                    : (a = 0),
                                    (u[e] = n);
                            for (e = i; e < o; e++) {
                                if (!((n = t[e] - a) < 0)) {
                                    u[e++] = n;
                                    break;
                                }
                                (n += 1e7), (u[e] = n);
                            }
                            for (; e < o; e++) u[e] = t[e];
                            return h(u), u;
                        }
                        function b(t, r, e) {
                            var n,
                                o,
                                i = t.length,
                                u = new Array(i),
                                s = -r;
                            for (n = 0; n < i; n++)
                                (o = t[n] + s),
                                    (s = Math.floor(o / 1e7)),
                                    (o %= 1e7),
                                    (u[n] = o < 0 ? o + 1e7 : o);
                            return "number" === typeof (u = c(u))
                                ? (e && (u = -u), new p(u))
                                : new a(u, e);
                        }
                        function S(t, r) {
                            var e,
                                n,
                                o,
                                i,
                                u = t.length,
                                a = r.length,
                                p = v(u + a);
                            for (o = 0; o < u; ++o) {
                                i = t[o];
                                for (var s = 0; s < a; ++s)
                                    (e = i * r[s] + p[o + s]),
                                        (n = Math.floor(e / 1e7)),
                                        (p[o + s] = e - 1e7 * n),
                                        (p[o + s + 1] += n);
                            }
                            return h(p), p;
                        }
                        function E(t, e) {
                            var n,
                                o,
                                i = t.length,
                                u = new Array(i),
                                a = r,
                                p = 0;
                            for (o = 0; o < i; o++)
                                (n = t[o] * e + p),
                                    (p = Math.floor(n / a)),
                                    (u[o] = n - p * a);
                            for (; p > 0; )
                                (u[o++] = p % a), (p = Math.floor(p / a));
                            return u;
                        }
                        function O(t, r) {
                            for (var e = []; r-- > 0; ) e.push(0);
                            return e.concat(t);
                        }
                        function x(t, e, n) {
                            return new a(t < r ? E(e, t) : S(e, l(t)), n);
                        }
                        function N(t) {
                            var r,
                                e,
                                n,
                                o,
                                i = t.length,
                                u = v(i + i);
                            for (n = 0; n < i; n++) {
                                e = 0 - (o = t[n]) * o;
                                for (var a = n; a < i; a++)
                                    (r = o * t[a] * 2 + u[n + a] + e),
                                        (e = Math.floor(r / 1e7)),
                                        (u[n + a] = r - 1e7 * e);
                                u[n + i] = e;
                            }
                            return h(u), u;
                        }
                        function q(t, r) {
                            var e,
                                n,
                                o,
                                i,
                                u = t.length,
                                a = v(u);
                            for (o = 0, e = u - 1; e >= 0; --e)
                                (o = (i = 1e7 * o + t[e]) - (n = y(i / r)) * r),
                                    (a[e] = 0 | n);
                            return [a, 0 | o];
                        }
                        function M(t, e) {
                            var n,
                                o = z(e);
                            if (i)
                                return [
                                    new s(t.value / o.value),
                                    new s(t.value % o.value),
                                ];
                            var f,
                                g = t.value,
                                d = o.value;
                            if (0 === d)
                                throw new Error("Cannot divide by zero");
                            if (t.isSmall)
                                return o.isSmall
                                    ? [new p(y(g / d)), new p(g % d)]
                                    : [u[0], t];
                            if (o.isSmall) {
                                if (1 === d) return [t, u[0]];
                                if (-1 == d) return [t.negate(), u[0]];
                                var m = Math.abs(d);
                                if (m < r) {
                                    f = c((n = q(g, m))[0]);
                                    var b = n[1];
                                    return (
                                        t.sign && (b = -b),
                                        "number" === typeof f
                                            ? (t.sign !== o.sign && (f = -f),
                                              [new p(f), new p(b)])
                                            : [
                                                  new a(f, t.sign !== o.sign),
                                                  new p(b),
                                              ]
                                    );
                                }
                                d = l(m);
                            }
                            var S = L(g, d);
                            if (-1 === S) return [u[0], t];
                            if (0 === S)
                                return [u[t.sign === o.sign ? 1 : -1], u[0]];
                            f = (n =
                                g.length + d.length <= 200
                                    ? (function (t, e) {
                                          var n,
                                              o,
                                              i,
                                              u,
                                              a,
                                              p,
                                              s,
                                              f = t.length,
                                              l = e.length,
                                              h = r,
                                              y = v(e.length),
                                              g = e[l - 1],
                                              d = Math.ceil(h / (2 * g)),
                                              m = E(t, d),
                                              w = E(e, d);
                                          for (
                                              m.length <= f && m.push(0),
                                                  w.push(0),
                                                  g = w[l - 1],
                                                  o = f - l;
                                              o >= 0;
                                              o--
                                          ) {
                                              for (
                                                  n = h - 1,
                                                      m[o + l] !== g &&
                                                          (n = Math.floor(
                                                              (m[o + l] * h +
                                                                  m[
                                                                      o + l - 1
                                                                  ]) /
                                                                  g
                                                          )),
                                                      i = 0,
                                                      u = 0,
                                                      p = w.length,
                                                      a = 0;
                                                  a < p;
                                                  a++
                                              )
                                                  (i += n * w[a]),
                                                      (s = Math.floor(i / h)),
                                                      (u +=
                                                          m[o + a] -
                                                          (i - s * h)),
                                                      (i = s),
                                                      u < 0
                                                          ? ((m[o + a] = u + h),
                                                            (u = -1))
                                                          : ((m[o + a] = u),
                                                            (u = 0));
                                              for (; 0 !== u; ) {
                                                  for (
                                                      n -= 1, i = 0, a = 0;
                                                      a < p;
                                                      a++
                                                  )
                                                      (i +=
                                                          m[o + a] - h + w[a]) <
                                                      0
                                                          ? ((m[o + a] = i + h),
                                                            (i = 0))
                                                          : ((m[o + a] = i),
                                                            (i = 1));
                                                  u += i;
                                              }
                                              y[o] = n;
                                          }
                                          return (m = q(m, d)[0]), [c(y), c(m)];
                                      })(g, d)
                                    : (function (t, r) {
                                          for (
                                              var e,
                                                  n,
                                                  o,
                                                  i,
                                                  u,
                                                  a = t.length,
                                                  p = r.length,
                                                  s = [],
                                                  f = [];
                                              a;

                                          )
                                              if (
                                                  (f.unshift(t[--a]),
                                                  h(f),
                                                  L(f, r) < 0)
                                              )
                                                  s.push(0);
                                              else {
                                                  (o =
                                                      1e7 *
                                                          f[
                                                              (n = f.length) - 1
                                                          ] +
                                                      f[n - 2]),
                                                      (i =
                                                          1e7 * r[p - 1] +
                                                          r[p - 2]),
                                                      n > p &&
                                                          (o = 1e7 * (o + 1)),
                                                      (e = Math.ceil(o / i));
                                                  do {
                                                      if (
                                                          L((u = E(r, e)), f) <=
                                                          0
                                                      )
                                                          break;
                                                      e--;
                                                  } while (e);
                                                  s.push(e), (f = w(f, u));
                                              }
                                          return s.reverse(), [c(s), c(f)];
                                      })(g, d))[0];
                            var O = t.sign !== o.sign,
                                x = n[1],
                                N = t.sign;
                            return (
                                "number" === typeof f
                                    ? (O && (f = -f), (f = new p(f)))
                                    : (f = new a(f, O)),
                                "number" === typeof x
                                    ? (N && (x = -x), (x = new p(x)))
                                    : (x = new a(x, N)),
                                [f, x]
                            );
                        }
                        function L(t, r) {
                            if (t.length !== r.length)
                                return t.length > r.length ? 1 : -1;
                            for (var e = t.length - 1; e >= 0; e--)
                                if (t[e] !== r[e]) return t[e] > r[e] ? 1 : -1;
                            return 0;
                        }
                        function j(t) {
                            var r = t.abs();
                            return (
                                !r.isUnit() &&
                                (!!(
                                    r.equals(2) ||
                                    r.equals(3) ||
                                    r.equals(5)
                                ) ||
                                    (!(
                                        r.isEven() ||
                                        r.isDivisibleBy(3) ||
                                        r.isDivisibleBy(5)
                                    ) &&
                                        (!!r.lesser(49) || void 0)))
                            );
                        }
                        function B(t, r) {
                            for (
                                var e, n, i, u = t.prev(), a = u, p = 0;
                                a.isEven();

                            )
                                (a = a.divide(2)), p++;
                            t: for (n = 0; n < r.length; n++)
                                if (
                                    !t.lesser(r[n]) &&
                                    !(i = o(r[n]).modPow(a, t)).isUnit() &&
                                    !i.equals(u)
                                ) {
                                    for (e = p - 1; 0 != e; e--) {
                                        if ((i = i.square().mod(t)).isUnit())
                                            return !1;
                                        if (i.equals(u)) continue t;
                                    }
                                    return !1;
                                }
                            return !0;
                        }
                        (a.prototype = Object.create(u.prototype)),
                            (p.prototype = Object.create(u.prototype)),
                            (s.prototype = Object.create(u.prototype)),
                            (a.prototype.add = function (t) {
                                var r = z(t);
                                if (this.sign !== r.sign)
                                    return this.subtract(r.negate());
                                var e = this.value,
                                    n = r.value;
                                return r.isSmall
                                    ? new a(m(e, Math.abs(n)), this.sign)
                                    : new a(d(e, n), this.sign);
                            }),
                            (a.prototype.plus = a.prototype.add),
                            (p.prototype.add = function (t) {
                                var r = z(t),
                                    e = this.value;
                                if (e < 0 !== r.sign)
                                    return this.subtract(r.negate());
                                var n = r.value;
                                if (r.isSmall) {
                                    if (f(e + n)) return new p(e + n);
                                    n = l(Math.abs(n));
                                }
                                return new a(m(n, Math.abs(e)), e < 0);
                            }),
                            (p.prototype.plus = p.prototype.add),
                            (s.prototype.add = function (t) {
                                return new s(this.value + z(t).value);
                            }),
                            (s.prototype.plus = s.prototype.add),
                            (a.prototype.subtract = function (t) {
                                var r = z(t);
                                if (this.sign !== r.sign)
                                    return this.add(r.negate());
                                var e = this.value,
                                    n = r.value;
                                return r.isSmall
                                    ? b(e, Math.abs(n), this.sign)
                                    : (function (t, r, e) {
                                          var n;
                                          return (
                                              L(t, r) >= 0
                                                  ? (n = w(t, r))
                                                  : ((n = w(r, t)), (e = !e)),
                                              "number" === typeof (n = c(n))
                                                  ? (e && (n = -n), new p(n))
                                                  : new a(n, e)
                                          );
                                      })(e, n, this.sign);
                            }),
                            (a.prototype.minus = a.prototype.subtract),
                            (p.prototype.subtract = function (t) {
                                var r = z(t),
                                    e = this.value;
                                if (e < 0 !== r.sign)
                                    return this.add(r.negate());
                                var n = r.value;
                                return r.isSmall
                                    ? new p(e - n)
                                    : b(n, Math.abs(e), e >= 0);
                            }),
                            (p.prototype.minus = p.prototype.subtract),
                            (s.prototype.subtract = function (t) {
                                return new s(this.value - z(t).value);
                            }),
                            (s.prototype.minus = s.prototype.subtract),
                            (a.prototype.negate = function () {
                                return new a(this.value, !this.sign);
                            }),
                            (p.prototype.negate = function () {
                                var t = this.sign,
                                    r = new p(-this.value);
                                return (r.sign = !t), r;
                            }),
                            (s.prototype.negate = function () {
                                return new s(-this.value);
                            }),
                            (a.prototype.abs = function () {
                                return new a(this.value, !1);
                            }),
                            (p.prototype.abs = function () {
                                return new p(Math.abs(this.value));
                            }),
                            (s.prototype.abs = function () {
                                return new s(
                                    this.value >= 0 ? this.value : -this.value
                                );
                            }),
                            (a.prototype.multiply = function (t) {
                                var e,
                                    n,
                                    o,
                                    i = z(t),
                                    p = this.value,
                                    s = i.value,
                                    f = this.sign !== i.sign;
                                if (i.isSmall) {
                                    if (0 === s) return u[0];
                                    if (1 === s) return this;
                                    if (-1 === s) return this.negate();
                                    if ((e = Math.abs(s)) < r)
                                        return new a(E(p, e), f);
                                    s = l(e);
                                }
                                return (
                                    (n = p.length),
                                    (o = s.length),
                                    new a(
                                        -0.012 * n - 0.012 * o + 15e-6 * n * o >
                                        0
                                            ? (function t(r, e) {
                                                  var n = Math.max(
                                                      r.length,
                                                      e.length
                                                  );
                                                  if (n <= 30) return S(r, e);
                                                  n = Math.ceil(n / 2);
                                                  var o = r.slice(n),
                                                      i = r.slice(0, n),
                                                      u = e.slice(n),
                                                      a = e.slice(0, n),
                                                      p = t(i, a),
                                                      s = t(o, u),
                                                      f = t(d(i, o), d(a, u)),
                                                      l = d(
                                                          d(
                                                              p,
                                                              O(
                                                                  w(w(f, p), s),
                                                                  n
                                                              )
                                                          ),
                                                          O(s, 2 * n)
                                                      );
                                                  return h(l), l;
                                              })(p, s)
                                            : S(p, s),
                                        f
                                    )
                                );
                            }),
                            (a.prototype.times = a.prototype.multiply),
                            (p.prototype._multiplyBySmall = function (t) {
                                return f(t.value * this.value)
                                    ? new p(t.value * this.value)
                                    : x(
                                          Math.abs(t.value),
                                          l(Math.abs(this.value)),
                                          this.sign !== t.sign
                                      );
                            }),
                            (a.prototype._multiplyBySmall = function (t) {
                                return 0 === t.value
                                    ? u[0]
                                    : 1 === t.value
                                    ? this
                                    : -1 === t.value
                                    ? this.negate()
                                    : x(
                                          Math.abs(t.value),
                                          this.value,
                                          this.sign !== t.sign
                                      );
                            }),
                            (p.prototype.multiply = function (t) {
                                return z(t)._multiplyBySmall(this);
                            }),
                            (p.prototype.times = p.prototype.multiply),
                            (s.prototype.multiply = function (t) {
                                return new s(this.value * z(t).value);
                            }),
                            (s.prototype.times = s.prototype.multiply),
                            (a.prototype.square = function () {
                                return new a(N(this.value), !1);
                            }),
                            (p.prototype.square = function () {
                                var t = this.value * this.value;
                                return f(t)
                                    ? new p(t)
                                    : new a(N(l(Math.abs(this.value))), !1);
                            }),
                            (s.prototype.square = function (t) {
                                return new s(this.value * this.value);
                            }),
                            (a.prototype.divmod = function (t) {
                                var r = M(this, t);
                                return { quotient: r[0], remainder: r[1] };
                            }),
                            (s.prototype.divmod = p.prototype.divmod =
                                a.prototype.divmod),
                            (a.prototype.divide = function (t) {
                                return M(this, t)[0];
                            }),
                            (s.prototype.over = s.prototype.divide = function (
                                t
                            ) {
                                return new s(this.value / z(t).value);
                            }),
                            (p.prototype.over = p.prototype.divide = a.prototype.over =
                                a.prototype.divide),
                            (a.prototype.mod = function (t) {
                                return M(this, t)[1];
                            }),
                            (s.prototype.mod = s.prototype.remainder = function (
                                t
                            ) {
                                return new s(this.value % z(t).value);
                            }),
                            (p.prototype.remainder = p.prototype.mod = a.prototype.remainder =
                                a.prototype.mod),
                            (a.prototype.pow = function (t) {
                                var r,
                                    e,
                                    n,
                                    o = z(t),
                                    i = this.value,
                                    a = o.value;
                                if (0 === a) return u[1];
                                if (0 === i) return u[0];
                                if (1 === i) return u[1];
                                if (-1 === i) return o.isEven() ? u[1] : u[-1];
                                if (o.sign) return u[0];
                                if (!o.isSmall)
                                    throw new Error(
                                        "The exponent " +
                                            o.toString() +
                                            " is too large."
                                    );
                                if (this.isSmall && f((r = Math.pow(i, a))))
                                    return new p(y(r));
                                for (
                                    e = this, n = u[1];
                                    !0 & a && ((n = n.times(e)), --a), 0 !== a;

                                )
                                    (a /= 2), (e = e.square());
                                return n;
                            }),
                            (p.prototype.pow = a.prototype.pow),
                            (s.prototype.pow = function (t) {
                                var r = z(t),
                                    e = this.value,
                                    n = r.value,
                                    o = BigInt(0),
                                    i = BigInt(1),
                                    a = BigInt(2);
                                if (n === o) return u[1];
                                if (e === o) return u[0];
                                if (e === i) return u[1];
                                if (e === BigInt(-1))
                                    return r.isEven() ? u[1] : u[-1];
                                if (r.isNegative()) return new s(o);
                                for (
                                    var p = this, f = u[1];
                                    (n & i) === i && ((f = f.times(p)), --n),
                                        n !== o;

                                )
                                    (n /= a), (p = p.square());
                                return f;
                            }),
                            (a.prototype.modPow = function (t, r) {
                                if (((t = z(t)), (r = z(r)).isZero()))
                                    throw new Error(
                                        "Cannot take modPow with modulus 0"
                                    );
                                var e = u[1],
                                    n = this.mod(r);
                                for (
                                    t.isNegative() &&
                                    ((t = t.multiply(u[-1])),
                                    (n = n.modInv(r)));
                                    t.isPositive();

                                ) {
                                    if (n.isZero()) return u[0];
                                    t.isOdd() && (e = e.multiply(n).mod(r)),
                                        (t = t.divide(2)),
                                        (n = n.square().mod(r));
                                }
                                return e;
                            }),
                            (s.prototype.modPow = p.prototype.modPow =
                                a.prototype.modPow),
                            (a.prototype.compareAbs = function (t) {
                                var r = z(t),
                                    e = this.value,
                                    n = r.value;
                                return r.isSmall ? 1 : L(e, n);
                            }),
                            (p.prototype.compareAbs = function (t) {
                                var r = z(t),
                                    e = Math.abs(this.value),
                                    n = r.value;
                                return r.isSmall
                                    ? e === (n = Math.abs(n))
                                        ? 0
                                        : e > n
                                        ? 1
                                        : -1
                                    : -1;
                            }),
                            (s.prototype.compareAbs = function (t) {
                                var r = this.value,
                                    e = z(t).value;
                                return (r = r >= 0 ? r : -r) ===
                                    (e = e >= 0 ? e : -e)
                                    ? 0
                                    : r > e
                                    ? 1
                                    : -1;
                            }),
                            (a.prototype.compare = function (t) {
                                if (t === 1 / 0) return -1;
                                if (t === -1 / 0) return 1;
                                var r = z(t),
                                    e = this.value,
                                    n = r.value;
                                return this.sign !== r.sign
                                    ? r.sign
                                        ? 1
                                        : -1
                                    : r.isSmall
                                    ? this.sign
                                        ? -1
                                        : 1
                                    : L(e, n) * (this.sign ? -1 : 1);
                            }),
                            (a.prototype.compareTo = a.prototype.compare),
                            (p.prototype.compare = function (t) {
                                if (t === 1 / 0) return -1;
                                if (t === -1 / 0) return 1;
                                var r = z(t),
                                    e = this.value,
                                    n = r.value;
                                return r.isSmall
                                    ? e == n
                                        ? 0
                                        : e > n
                                        ? 1
                                        : -1
                                    : e < 0 !== r.sign
                                    ? e < 0
                                        ? -1
                                        : 1
                                    : e < 0
                                    ? 1
                                    : -1;
                            }),
                            (p.prototype.compareTo = p.prototype.compare),
                            (s.prototype.compare = function (t) {
                                if (t === 1 / 0) return -1;
                                if (t === -1 / 0) return 1;
                                var r = this.value,
                                    e = z(t).value;
                                return r === e ? 0 : r > e ? 1 : -1;
                            }),
                            (s.prototype.compareTo = s.prototype.compare),
                            (a.prototype.equals = function (t) {
                                return 0 === this.compare(t);
                            }),
                            (s.prototype.eq = s.prototype.equals = p.prototype.eq = p.prototype.equals = a.prototype.eq =
                                a.prototype.equals),
                            (a.prototype.notEquals = function (t) {
                                return 0 !== this.compare(t);
                            }),
                            (s.prototype.neq = s.prototype.notEquals = p.prototype.neq = p.prototype.notEquals = a.prototype.neq =
                                a.prototype.notEquals),
                            (a.prototype.greater = function (t) {
                                return this.compare(t) > 0;
                            }),
                            (s.prototype.gt = s.prototype.greater = p.prototype.gt = p.prototype.greater = a.prototype.gt =
                                a.prototype.greater),
                            (a.prototype.lesser = function (t) {
                                return this.compare(t) < 0;
                            }),
                            (s.prototype.lt = s.prototype.lesser = p.prototype.lt = p.prototype.lesser = a.prototype.lt =
                                a.prototype.lesser),
                            (a.prototype.greaterOrEquals = function (t) {
                                return this.compare(t) >= 0;
                            }),
                            (s.prototype.geq = s.prototype.greaterOrEquals = p.prototype.geq = p.prototype.greaterOrEquals = a.prototype.geq =
                                a.prototype.greaterOrEquals),
                            (a.prototype.lesserOrEquals = function (t) {
                                return this.compare(t) <= 0;
                            }),
                            (s.prototype.leq = s.prototype.lesserOrEquals = p.prototype.leq = p.prototype.lesserOrEquals = a.prototype.leq =
                                a.prototype.lesserOrEquals),
                            (a.prototype.isEven = function () {
                                return 0 === (1 & this.value[0]);
                            }),
                            (p.prototype.isEven = function () {
                                return 0 === (1 & this.value);
                            }),
                            (s.prototype.isEven = function () {
                                return (this.value & BigInt(1)) === BigInt(0);
                            }),
                            (a.prototype.isOdd = function () {
                                return 1 === (1 & this.value[0]);
                            }),
                            (p.prototype.isOdd = function () {
                                return 1 === (1 & this.value);
                            }),
                            (s.prototype.isOdd = function () {
                                return (this.value & BigInt(1)) === BigInt(1);
                            }),
                            (a.prototype.isPositive = function () {
                                return !this.sign;
                            }),
                            (p.prototype.isPositive = function () {
                                return this.value > 0;
                            }),
                            (s.prototype.isPositive = p.prototype.isPositive),
                            (a.prototype.isNegative = function () {
                                return this.sign;
                            }),
                            (p.prototype.isNegative = function () {
                                return this.value < 0;
                            }),
                            (s.prototype.isNegative = p.prototype.isNegative),
                            (a.prototype.isUnit = function () {
                                return !1;
                            }),
                            (p.prototype.isUnit = function () {
                                return 1 === Math.abs(this.value);
                            }),
                            (s.prototype.isUnit = function () {
                                return this.abs().value === BigInt(1);
                            }),
                            (a.prototype.isZero = function () {
                                return !1;
                            }),
                            (p.prototype.isZero = function () {
                                return 0 === this.value;
                            }),
                            (s.prototype.isZero = function () {
                                return this.value === BigInt(0);
                            }),
                            (a.prototype.isDivisibleBy = function (t) {
                                var r = z(t);
                                return (
                                    !r.isZero() &&
                                    (!!r.isUnit() ||
                                        (0 === r.compareAbs(2)
                                            ? this.isEven()
                                            : this.mod(r).isZero()))
                                );
                            }),
                            (s.prototype.isDivisibleBy = p.prototype.isDivisibleBy =
                                a.prototype.isDivisibleBy),
                            (a.prototype.isPrime = function (t) {
                                var r = j(this);
                                if (void 0 !== r) return r;
                                var e = this.abs(),
                                    n = e.bitLength();
                                if (n <= 64)
                                    return B(e, [
                                        2,
                                        3,
                                        5,
                                        7,
                                        11,
                                        13,
                                        17,
                                        19,
                                        23,
                                        29,
                                        31,
                                        37,
                                    ]);
                                for (
                                    var i = Math.log(2) * n.toJSNumber(),
                                        u = Math.ceil(
                                            !0 === t ? 2 * Math.pow(i, 2) : i
                                        ),
                                        a = [],
                                        p = 0;
                                    p < u;
                                    p++
                                )
                                    a.push(o(p + 2));
                                return B(e, a);
                            }),
                            (s.prototype.isPrime = p.prototype.isPrime =
                                a.prototype.isPrime),
                            (a.prototype.isProbablePrime = function (t, r) {
                                var e = j(this);
                                if (void 0 !== e) return e;
                                for (
                                    var n = this.abs(),
                                        i = void 0 === t ? 5 : t,
                                        u = [],
                                        a = 0;
                                    a < i;
                                    a++
                                )
                                    u.push(o.randBetween(2, n.minus(2), r));
                                return B(n, u);
                            }),
                            (s.prototype.isProbablePrime = p.prototype.isProbablePrime =
                                a.prototype.isProbablePrime),
                            (a.prototype.modInv = function (t) {
                                for (
                                    var r,
                                        e,
                                        n,
                                        i = o.zero,
                                        u = o.one,
                                        a = z(t),
                                        p = this.abs();
                                    !p.isZero();

                                )
                                    (r = a.divide(p)),
                                        (e = i),
                                        (n = a),
                                        (i = u),
                                        (a = p),
                                        (u = e.subtract(r.multiply(u))),
                                        (p = n.subtract(r.multiply(p)));
                                if (!a.isUnit())
                                    throw new Error(
                                        this.toString() +
                                            " and " +
                                            t.toString() +
                                            " are not co-prime"
                                    );
                                return (
                                    -1 === i.compare(0) && (i = i.add(t)),
                                    this.isNegative() ? i.negate() : i
                                );
                            }),
                            (s.prototype.modInv = p.prototype.modInv =
                                a.prototype.modInv),
                            (a.prototype.next = function () {
                                var t = this.value;
                                return this.sign
                                    ? b(t, 1, this.sign)
                                    : new a(m(t, 1), this.sign);
                            }),
                            (p.prototype.next = function () {
                                var t = this.value;
                                return t + 1 < e ? new p(t + 1) : new a(n, !1);
                            }),
                            (s.prototype.next = function () {
                                return new s(this.value + BigInt(1));
                            }),
                            (a.prototype.prev = function () {
                                var t = this.value;
                                return this.sign
                                    ? new a(m(t, 1), !0)
                                    : b(t, 1, this.sign);
                            }),
                            (p.prototype.prev = function () {
                                var t = this.value;
                                return t - 1 > -e ? new p(t - 1) : new a(n, !0);
                            }),
                            (s.prototype.prev = function () {
                                return new s(this.value - BigInt(1));
                            });
                        for (var P = [1]; 2 * P[P.length - 1] <= r; )
                            P.push(2 * P[P.length - 1]);
                        var I = P.length,
                            A = P[I - 1];
                        function _(t) {
                            return Math.abs(t) <= r;
                        }
                        function k(t, r, e) {
                            r = z(r);
                            for (
                                var n = t.isNegative(),
                                    i = r.isNegative(),
                                    u = n ? t.not() : t,
                                    a = i ? r.not() : r,
                                    p = 0,
                                    s = 0,
                                    f = null,
                                    l = null,
                                    c = [];
                                !u.isZero() || !a.isZero();

                            )
                                (p = (f = M(u, A))[1].toJSNumber()),
                                    n && (p = A - 1 - p),
                                    (s = (l = M(a, A))[1].toJSNumber()),
                                    i && (s = A - 1 - s),
                                    (u = f[0]),
                                    (a = l[0]),
                                    c.push(e(p, s));
                            for (
                                var h =
                                        0 !== e(n ? 1 : 0, i ? 1 : 0)
                                            ? o(-1)
                                            : o(0),
                                    v = c.length - 1;
                                v >= 0;
                                v -= 1
                            )
                                h = h.multiply(A).add(o(c[v]));
                            return h;
                        }
                        (a.prototype.shiftLeft = function (t) {
                            var r = z(t).toJSNumber();
                            if (!_(r))
                                throw new Error(
                                    String(r) + " is too large for shifting."
                                );
                            if (r < 0) return this.shiftRight(-r);
                            var e = this;
                            if (e.isZero()) return e;
                            for (; r >= I; ) (e = e.multiply(A)), (r -= I - 1);
                            return e.multiply(P[r]);
                        }),
                            (s.prototype.shiftLeft = p.prototype.shiftLeft =
                                a.prototype.shiftLeft),
                            (a.prototype.shiftRight = function (t) {
                                var r,
                                    e = z(t).toJSNumber();
                                if (!_(e))
                                    throw new Error(
                                        String(e) +
                                            " is too large for shifting."
                                    );
                                if (e < 0) return this.shiftLeft(-e);
                                for (var n = this; e >= I; ) {
                                    if (
                                        n.isZero() ||
                                        (n.isNegative() && n.isUnit())
                                    )
                                        return n;
                                    (n = (r = M(n, A))[1].isNegative()
                                        ? r[0].prev()
                                        : r[0]),
                                        (e -= I - 1);
                                }
                                return (r = M(n, P[e]))[1].isNegative()
                                    ? r[0].prev()
                                    : r[0];
                            }),
                            (s.prototype.shiftRight = p.prototype.shiftRight =
                                a.prototype.shiftRight),
                            (a.prototype.not = function () {
                                return this.negate().prev();
                            }),
                            (s.prototype.not = p.prototype.not =
                                a.prototype.not),
                            (a.prototype.and = function (t) {
                                return k(this, t, function (t, r) {
                                    return t & r;
                                });
                            }),
                            (s.prototype.and = p.prototype.and =
                                a.prototype.and),
                            (a.prototype.or = function (t) {
                                return k(this, t, function (t, r) {
                                    return t | r;
                                });
                            }),
                            (s.prototype.or = p.prototype.or = a.prototype.or),
                            (a.prototype.xor = function (t) {
                                return k(this, t, function (t, r) {
                                    return t ^ r;
                                });
                            }),
                            (s.prototype.xor = p.prototype.xor =
                                a.prototype.xor);
                        function Z(t) {
                            var e = t.value,
                                n =
                                    "number" === typeof e
                                        ? e | (1 << 30)
                                        : "bigint" === typeof e
                                        ? e | BigInt(1 << 30)
                                        : (e[0] + e[1] * r) | 1073758208;
                            return n & -n;
                        }
                        function J(t, r) {
                            return (t = z(t)), (r = z(r)), t.greater(r) ? t : r;
                        }
                        function R(t, r) {
                            return (t = z(t)), (r = z(r)), t.lesser(r) ? t : r;
                        }
                        function T(t, r) {
                            if (
                                ((t = z(t).abs()),
                                (r = z(r).abs()),
                                t.equals(r))
                            )
                                return t;
                            if (t.isZero()) return r;
                            if (r.isZero()) return t;
                            for (var e, n, o = u[1]; t.isEven() && r.isEven(); )
                                (e = R(Z(t), Z(r))),
                                    (t = t.divide(e)),
                                    (r = r.divide(e)),
                                    (o = o.multiply(e));
                            for (; t.isEven(); ) t = t.divide(Z(t));
                            do {
                                for (; r.isEven(); ) r = r.divide(Z(r));
                                t.greater(r) && ((n = r), (r = t), (t = n)),
                                    (r = r.subtract(t));
                            } while (!r.isZero());
                            return o.isUnit() ? t : t.multiply(o);
                        }
                        (a.prototype.bitLength = function () {
                            var t = this;
                            return (
                                t.compareTo(o(0)) < 0 &&
                                    (t = t.negate().subtract(o(1))),
                                0 === t.compareTo(o(0))
                                    ? o(0)
                                    : o(
                                          (function t(r, e) {
                                              if (e.compareTo(r) <= 0) {
                                                  var n = t(r, e.square(e)),
                                                      i = n.p,
                                                      u = n.e,
                                                      a = i.multiply(e);
                                                  return a.compareTo(r) <= 0
                                                      ? { p: a, e: 2 * u + 1 }
                                                      : { p: i, e: 2 * u };
                                              }
                                              return { p: o(1), e: 0 };
                                          })(t, o(2)).e
                                      ).add(o(1))
                            );
                        }),
                            (s.prototype.bitLength = p.prototype.bitLength =
                                a.prototype.bitLength);
                        var U = function (t, r, e, n) {
                            (e = e || "0123456789abcdefghijklmnopqrstuvwxyz"),
                                (t = String(t)),
                                n ||
                                    ((t = t.toLowerCase()),
                                    (e = e.toLowerCase()));
                            var o,
                                i = t.length,
                                u = Math.abs(r),
                                a = {};
                            for (o = 0; o < e.length; o++) a[e[o]] = o;
                            for (o = 0; o < i; o++) {
                                if ("-" !== (f = t[o]) && f in a && a[f] >= u) {
                                    if ("1" === f && 1 === u) continue;
                                    throw new Error(
                                        f +
                                            " is not a valid digit in base " +
                                            r +
                                            "."
                                    );
                                }
                            }
                            r = z(r);
                            var p = [],
                                s = "-" === t[0];
                            for (o = s ? 1 : 0; o < t.length; o++) {
                                var f;
                                if ((f = t[o]) in a) p.push(z(a[f]));
                                else {
                                    if ("<" !== f)
                                        throw new Error(
                                            f + " is not a valid character"
                                        );
                                    var l = o;
                                    do {
                                        o++;
                                    } while (">" !== t[o] && o < t.length);
                                    p.push(z(t.slice(l + 1, o)));
                                }
                            }
                            return F(p, r, s);
                        };
                        function F(t, r, e) {
                            var n,
                                o = u[0],
                                i = u[1];
                            for (n = t.length - 1; n >= 0; n--)
                                (o = o.add(t[n].times(i))), (i = i.times(r));
                            return e ? o.negate() : o;
                        }
                        function C(t, r) {
                            if ((r = o(r)).isZero()) {
                                if (t.isZero())
                                    return { value: [0], isNegative: !1 };
                                throw new Error(
                                    "Cannot convert nonzero numbers to base 0."
                                );
                            }
                            if (r.equals(-1)) {
                                if (t.isZero())
                                    return { value: [0], isNegative: !1 };
                                if (t.isNegative())
                                    return {
                                        value: [].concat.apply(
                                            [],
                                            Array.apply(
                                                null,
                                                Array(-t.toJSNumber())
                                            ).map(Array.prototype.valueOf, [
                                                1,
                                                0,
                                            ])
                                        ),
                                        isNegative: !1,
                                    };
                                var e = Array.apply(
                                    null,
                                    Array(t.toJSNumber() - 1)
                                ).map(Array.prototype.valueOf, [0, 1]);
                                return (
                                    e.unshift([1]),
                                    {
                                        value: [].concat.apply([], e),
                                        isNegative: !1,
                                    }
                                );
                            }
                            var n = !1;
                            if (
                                (t.isNegative() &&
                                    r.isPositive() &&
                                    ((n = !0), (t = t.abs())),
                                r.isUnit())
                            )
                                return t.isZero()
                                    ? { value: [0], isNegative: !1 }
                                    : {
                                          value: Array.apply(
                                              null,
                                              Array(t.toJSNumber())
                                          ).map(Number.prototype.valueOf, 1),
                                          isNegative: n,
                                      };
                            for (
                                var i, u = [], a = t;
                                a.isNegative() || a.compareAbs(r) >= 0;

                            ) {
                                (i = a.divmod(r)), (a = i.quotient);
                                var p = i.remainder;
                                p.isNegative() &&
                                    ((p = r.minus(p).abs()), (a = a.next())),
                                    u.push(p.toJSNumber());
                            }
                            return (
                                u.push(a.toJSNumber()),
                                { value: u.reverse(), isNegative: n }
                            );
                        }
                        function D(t, r, e) {
                            var n = C(t, r);
                            return (
                                (n.isNegative ? "-" : "") +
                                n.value
                                    .map(function (t) {
                                        return (function (t, r) {
                                            return t <
                                                (r =
                                                    r ||
                                                    "0123456789abcdefghijklmnopqrstuvwxyz")
                                                    .length
                                                ? r[t]
                                                : "<" + t + ">";
                                        })(t, e);
                                    })
                                    .join("")
                            );
                        }
                        function G(t) {
                            if (f(+t)) {
                                var r = +t;
                                if (r === y(r))
                                    return i ? new s(BigInt(r)) : new p(r);
                                throw new Error("Invalid integer: " + t);
                            }
                            var e = "-" === t[0];
                            e && (t = t.slice(1));
                            var n = t.split(/e/i);
                            if (n.length > 2)
                                throw new Error(
                                    "Invalid integer: " + n.join("e")
                                );
                            if (2 === n.length) {
                                var o = n[1];
                                if (
                                    ("+" === o[0] && (o = o.slice(1)),
                                    (o = +o) !== y(o) || !f(o))
                                )
                                    throw new Error(
                                        "Invalid integer: " +
                                            o +
                                            " is not a valid exponent."
                                    );
                                var u = n[0],
                                    l = u.indexOf(".");
                                if (
                                    (l >= 0 &&
                                        ((o -= u.length - l - 1),
                                        (u = u.slice(0, l) + u.slice(l + 1))),
                                    o < 0)
                                )
                                    throw new Error(
                                        "Cannot include negative exponent part for integers"
                                    );
                                t = u += new Array(o + 1).join("0");
                            }
                            if (!/^([0-9][0-9]*)$/.test(t))
                                throw new Error("Invalid integer: " + t);
                            if (i) return new s(BigInt(e ? "-" + t : t));
                            for (var c = [], v = t.length, g = v - 7; v > 0; )
                                c.push(+t.slice(g, v)),
                                    (g -= 7) < 0 && (g = 0),
                                    (v -= 7);
                            return h(c), new a(c, e);
                        }
                        function z(t) {
                            return "number" === typeof t
                                ? (function (t) {
                                      if (i) return new s(BigInt(t));
                                      if (f(t)) {
                                          if (t !== y(t))
                                              throw new Error(
                                                  t + " is not an integer."
                                              );
                                          return new p(t);
                                      }
                                      return G(t.toString());
                                  })(t)
                                : "string" === typeof t
                                ? G(t)
                                : "bigint" === typeof t
                                ? new s(t)
                                : t;
                        }
                        (a.prototype.toArray = function (t) {
                            return C(this, t);
                        }),
                            (p.prototype.toArray = function (t) {
                                return C(this, t);
                            }),
                            (s.prototype.toArray = function (t) {
                                return C(this, t);
                            }),
                            (a.prototype.toString = function (t, r) {
                                if ((void 0 === t && (t = 10), 10 !== t))
                                    return D(this, t, r);
                                for (
                                    var e,
                                        n = this.value,
                                        o = n.length,
                                        i = String(n[--o]);
                                    --o >= 0;

                                )
                                    (e = String(n[o])),
                                        (i += "0000000".slice(e.length) + e);
                                return (this.sign ? "-" : "") + i;
                            }),
                            (p.prototype.toString = function (t, r) {
                                return (
                                    void 0 === t && (t = 10),
                                    10 != t ? D(this, t, r) : String(this.value)
                                );
                            }),
                            (s.prototype.toString = p.prototype.toString),
                            (s.prototype.toJSON = a.prototype.toJSON = p.prototype.toJSON = function () {
                                return this.toString();
                            }),
                            (a.prototype.valueOf = function () {
                                return parseInt(this.toString(), 10);
                            }),
                            (a.prototype.toJSNumber = a.prototype.valueOf),
                            (p.prototype.valueOf = function () {
                                return this.value;
                            }),
                            (p.prototype.toJSNumber = p.prototype.valueOf),
                            (s.prototype.valueOf = s.prototype.toJSNumber = function () {
                                return parseInt(this.toString(), 10);
                            });
                        for (var W = 0; W < 1e3; W++)
                            (u[W] = z(W)), W > 0 && (u[-W] = z(-W));
                        return (
                            (u.one = u[1]),
                            (u.zero = u[0]),
                            (u.minusOne = u[-1]),
                            (u.max = J),
                            (u.min = R),
                            (u.gcd = T),
                            (u.lcm = function (t, r) {
                                return (
                                    (t = z(t).abs()),
                                    (r = z(r).abs()),
                                    t.divide(T(t, r)).multiply(r)
                                );
                            }),
                            (u.isInstance = function (t) {
                                return (
                                    t instanceof a ||
                                    t instanceof p ||
                                    t instanceof s
                                );
                            }),
                            (u.randBetween = function (t, e, n) {
                                (t = z(t)), (e = z(e));
                                var o = n || Math.random,
                                    i = R(t, e),
                                    a = J(t, e).subtract(i).add(1);
                                if (a.isSmall)
                                    return i.add(Math.floor(o() * a));
                                for (
                                    var p = C(a, r).value,
                                        s = [],
                                        f = !0,
                                        l = 0;
                                    l < p.length;
                                    l++
                                ) {
                                    var c = f ? p[l] : r,
                                        h = y(o() * c);
                                    s.push(h), h < c && (f = !1);
                                }
                                return i.add(u.fromArray(s, r, !1));
                            }),
                            (u.fromArray = function (t, r, e) {
                                return F(t.map(z), z(r || 10), e);
                            }),
                            u
                        );
                    })();
                t.hasOwnProperty("exports") && (t.exports = o),
                    void 0 ===
                        (n = function () {
                            return o;
                        }.call(r, e, r, t)) || (t.exports = n);
            }.call(this, e(45)(t)));
        },
    },
]);
