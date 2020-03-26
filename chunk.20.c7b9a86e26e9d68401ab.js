(Function("return this")().webpackJsonp =
    Function("return this")().webpackJsonp || []).push([
    [20],
    {
        109: function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, "default", function () {
                    return g;
                });
            var r = n(17);
            var a = n(0),
                c = n.n(a);
            function l(e) {
                return (function (e) {
                    if (!v(e)) throw Error("invalid object");
                    var t = E(e),
                        n = {};
                    return (
                        Object.keys(t).forEach(function (e) {
                            var c = e;
                            void 0 === b[e] && (b[e] = t[e]);
                            var l = void 0 !== b[e] ? b[e] : t[e];
                            if (m(l)) throw Error("invalid state");
                            var i = Object(a.useState)(u(l)),
                                E = Object(r.a)(i, 2),
                                v = E[0],
                                h = E[1],
                                d = Object(a.useCallback)(function () {
                                    var t = b[e];
                                    s(t, v) || h(u(t));
                                }, []);
                            Object(a.useEffect)(function () {
                                return (
                                    f.addEventListener(c, d),
                                    f.dispatchEvent(new Event(c)),
                                    function () {
                                        f.removeEventListener(c, d);
                                    }
                                );
                            }, []),
                                (n[e] = [
                                    v,
                                    function (t) {
                                        if (
                                            (o(t) && (t = t.call(void 0, v)),
                                            m(t))
                                        )
                                            throw Error("invalid state");
                                        s(t, v) ||
                                            ((b[e] = u(t)),
                                            f.dispatchEvent(new Event(c)));
                                    },
                                ]);
                        }),
                        n
                    );
                })(
                    ((t = {}),
                    (n = e),
                    (c = ""),
                    n in t
                        ? Object.defineProperty(t, n, {
                              value: c,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[n] = c),
                    t)
                )[e];
                var t, n, c;
            }
            function o(e) {
                return "function" == typeof e;
            }
            function i(e, t) {
                var n = e,
                    r = n,
                    a = t,
                    c = b[n];
                if ((o(a) && (a = a.call(void 0, c)), m(a)))
                    throw Error("invalid state");
                s(a, c) || ((b[n] = u(a)), f.dispatchEvent(new Event(r)));
            }
            function u(e) {
                return JSON.parse(JSON.stringify(e));
            }
            function s(e, t) {
                return JSON.stringify(e) === JSON.stringify(t);
            }
            function m(e) {
                return (
                    void 0 === e || o(e) || null === e || "symbol" == typeof e
                );
            }
            var f = new EventTarget(),
                b = {};
            function E(e) {
                if ("object" != typeof e)
                    throw new TypeError(
                        "The argument passed in must be an 'object' type!"
                    );
                return u(e);
            }
            function v(e) {
                return (
                    "object" == typeof e &&
                    "[object Object]" === Object.prototype.toString.call(e)
                );
            }
            function h(e) {
                if (!v(e)) throw Error("invalid object");
                var t = E(e),
                    n = {};
                return (
                    Object.keys(t).forEach(function (e) {
                        void 0 === b[e] && (b[e] = t[e]), (n[e] = b[e]);
                    }),
                    n
                );
            }
            var d = n(35);
            function p() {
                var e = l("clicktimes"),
                    t = Object(r.a)(e, 1)[0];
                return c.a.createElement(
                    "div",
                    { style: { fontSize: "30px" } },
                    c.a.createElement(
                        "h1",
                        null,
                        "\u70b9\u51fb\u6b21\u6570",
                        t
                    ),
                    c.a.createElement(
                        "button",
                        {
                            onClick: function () {
                                i("clicktimes", function (e) {
                                    return e + 1;
                                });
                            },
                        },
                        "increment"
                    ),
                    c.a.createElement(
                        "button",
                        {
                            onClick: function () {
                                i("clicktimes", function (e) {
                                    return e - 1;
                                });
                            },
                        },
                        "decrement"
                    )
                );
            }
            function g() {
                return (
                    Object(a.useEffect)(function () {
                        document.title =
                            "masx200\u7684github\u4e3b\u9875-\u4f7f\u7528react hooks\u5b9e\u73b0\u7684\u7b80\u5355\u5168\u5c40\u72b6\u6001\u7ba1\u7406 react-simple-global-state-store-hook";
                    }, []),
                    c.a.createElement(
                        "div",
                        null,
                        c.a.createElement(
                            "h2",
                            null,
                            c.a.createElement(
                                "a",
                                {
                                    href:
                                        "https://github.com/masx200/react-simple-global-state-store-hook",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                },
                                "\u9002\u7528\u4e8eReact\u7684\u6781\u7b80\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u5e93",
                                c.a.createElement("br", null)
                            ),
                            c.a.createElement(
                                "p",
                                null,
                                c.a.createElement(
                                    "a",
                                    {
                                        href:
                                            "https://github.com/masx200/react-simple-global-state-store-hook",
                                    },
                                    "https://github.com/masx200/react-simple-global-state-store-hook"
                                )
                            )
                        ),
                        c.a.createElement("hr", null),
                        c.a.createElement(
                            "div",
                            { className: "row" },
                            c.a.createElement(
                                "div",
                                {
                                    className:
                                        "col-xl-6  col-lg-6 col-md-6 col-sm-12 col-12",
                                },
                                c.a.createElement(p, null),
                                c.a.createElement(k, { text: "-hello-" })
                            ),
                            c.a.createElement(
                                "div",
                                {
                                    className:
                                        "col-xl-6  col-lg-6 col-md-6 col-sm-12 col-12",
                                },
                                c.a.createElement(p, null),
                                c.a.createElement(k, { text: "-world-" })
                            )
                        ),
                        c.a.createElement("hr", null),
                        c.a.createElement(d.a, {
                            src:
                                "https://masx200.github.io/react-simple-global-state-store-hook/README.md",
                        })
                    )
                );
            }
            function k(e) {
                var t = l("testnumber"),
                    n = Object(r.a)(t, 2),
                    a = n[0],
                    o = n[1],
                    i = l("testname"),
                    u = Object(r.a)(i, 2),
                    s = u[0],
                    m = u[1];
                return c.a.createElement(
                    "div",
                    null,
                    c.a.createElement("h1", null, "test", e.text),
                    c.a.createElement(
                        "p",
                        null,
                        "testname:",
                        c.a.createElement("input", {
                            className: "form-control",
                            value: s,
                            onChange: function (e) {
                                m(e.target.value);
                            },
                        })
                    ),
                    c.a.createElement(
                        "button",
                        {
                            className: "btn btn-outline-success btn-lg",
                            onClick: function () {
                                m(
                                    Math.random() > 0.5
                                        ? s + e.text
                                        : e.text + s
                                );
                            },
                        },
                        "\u4fee\u6539testname"
                    ),
                    c.a.createElement(
                        "p",
                        null,
                        "number:",
                        c.a.createElement("input", {
                            className: "form-control",
                            value: a,
                            onChange: function (e) {
                                o(e.target.value);
                            },
                        })
                    ),
                    c.a.createElement(
                        "button",
                        {
                            className: "btn btn-outline-success btn-lg",
                            onClick: function () {
                                o(String(a) + Math.random());
                            },
                        },
                        "\u4fee\u6539number"
                    )
                );
            }
            h({
                testnumber: String(2241777582),
                testname:
                    "helloworld-test\u4f7f\u7528\u5168\u5c40\u72b6\u6001\u7ba1\u7406",
            }),
                h({ clicktimes: 0 });
        },
    },
]);
