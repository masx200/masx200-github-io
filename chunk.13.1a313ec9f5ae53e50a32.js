(Function("return this")().webpackJsonp =
    Function("return this")().webpackJsonp || []).push([
    [13],
    {
        18: function (t, e, a) {
            "use strict";
            var n = a(21),
                r = a.n(n);
            var c = r.a;
            e.a = function (t) {
                var e;
                switch (t) {
                    case "success":
                        e = "\u6210\u529f";
                        break;
                    case "primary":
                        e = "\u9996\u9009";
                        break;
                    case "danger":
                        e = "\u5931\u8d25";
                        break;
                    case "warning":
                        e = "\u8b66\u544a";
                        break;
                    default:
                        return;
                }
                var a = "xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(
                    /[xy]/g,
                    function (t) {
                        var e = (16 * Math.random()) | 0;
                        return ("x" == t ? e : (3 & e) | 8).toString(16);
                    }
                );
                r()("[data-tanchuxiaoxi]").remove(),
                    c("#my\u5bfc\u822a\u680f").append(
                        c(
                            '<div id="'
                                .concat(a, '" class="alert alert-')
                                .concat(
                                    t,
                                    ' alert-dismissible fade show" data-tanchuxiaoxi>\n    <button type="button" class="close" data-dismiss="alert">&times;</button>\n    <strong>'
                                )
                                .concat(e, "!</strong> \u64cd\u4f5c")
                                .concat(
                                    e,
                                    "\u63d0\u793a\u4fe1\u606f\u3002\n    </div>"
                                )
                        ).fadeTo(5e3, 0.5, function () {
                            c("#" + a).remove(),
                                r()("#my\u4e3b\u4f53").css(
                                    "padding-top",
                                    r()("#my\u5bfc\u822a\u680f").height()
                                );
                        })
                    );
            };
        },
        88: function (t, e, a) {
            "use strict";
            a.r(e);
            var n = [
                    [
                        "https://github.com/masx200",
                        "masx200\u7684github\u4ed3\u5e93",
                    ],
                    [
                        "https://weibo.com/2174458781",
                        "\u4e00\u751f\u5ffd\u800c\u5f97\u4e00\u590f\u5f53\u53f8\u638c\u597d\u5e74\u534e\u7684\u5fae\u535a",
                    ],
                    [
                        "https://www.jianshu.com/u/e2039eef63aa",
                        "masx200\u7684\u7b80\u4e66\u4e3b\u9875",
                    ],
                    [
                        "https://juejin.im/user/5cbe9d3c5188250a962acdc9",
                        "masx200\u7684\u6398\u91d1\u4e3b\u9875",
                    ],
                    [
                        "https://masx200.github.io/markdown-reader/",
                        "masx200\u7684 \u8f7b\u91cf\u7ea7markdown\u6587\u6863\u7cfb\u7edf\u9605\u8bfb\u5668",
                    ],
                    [
                        "https://masx200.github.io/javascript-tutorial/",
                        " Javascript\u6559\u7a0b,markdown\u9605\u8bfb\u5668",
                    ],
                    [
                        "https://masx200.github.io/es6tutorial/",
                        "Ecmascript6\u6559\u7a0b,markdown\u9605\u8bfb\u5668",
                    ],
                    [
                        "https://masx200.github.io/typescript-tutorial/",
                        "TypeScript \u5165\u95e8\u6559\u7a0b markdown\u9605\u8bfb\u5668",
                    ],
                ],
                r = a(18),
                c = a(31),
                i = a(0),
                s = a.n(i);
            a.d(e, "default", function () {
                return l;
            });
            var o = window.location,
                u = s.a.useEffect;
            function l() {
                return (
                    u(function () {
                        (o.hash = "#/"),
                            (document.title =
                                "masx200\u7684github\u4e3b\u9875-\u9996\u9875");
                    }),
                    s.a.createElement(
                        "div",
                        null,
                        s.a.createElement(
                            "div",
                            { className: "jumbotron", style: { padding: 0 } },
                            s.a.createElement(
                                "h1",
                                null,
                                "\u6b22\u8fce\u767b\u9646\u9875\u9762\uff01"
                            ),
                            s.a.createElement(
                                "div",
                                null,
                                s.a.createElement(
                                    "ul",
                                    null,
                                    n.map(function (t, e) {
                                        return s.a.createElement(
                                            "li",
                                            { key: e },
                                            s.a.createElement(
                                                "p",
                                                null,
                                                s.a.createElement(
                                                    "b",
                                                    null,
                                                    s.a.createElement(
                                                        "a",
                                                        {
                                                            className:
                                                                "mui-btn mui-btn-primary mui-btn-outlined",
                                                            target: "_blank",
                                                            rel:
                                                                "noopener noreferrer",
                                                            href: t[0],
                                                        },
                                                        t[1]
                                                    )
                                                )
                                            )
                                        );
                                    })
                                )
                            ),
                            s.a.createElement(
                                "div",
                                null,
                                s.a.createElement(
                                    "button",
                                    {
                                        className:
                                            "btn btn-outline-primary btn-lg",
                                        onClick: function () {
                                            Object(r.a)("primary");
                                        },
                                    },
                                    "\u5f39\u51fa\u9996\u9009\u63d0\u793a\u6846"
                                ),
                                s.a.createElement(
                                    "button",
                                    {
                                        className:
                                            "btn btn-outline-success btn-lg",
                                        onClick: function () {
                                            Object(r.a)("success");
                                        },
                                    },
                                    "\u5f39\u51fa\u6210\u529f\u63d0\u793a\u6846"
                                ),
                                s.a.createElement(
                                    "button",
                                    {
                                        className:
                                            "btn btn-outline-danger btn-lg",
                                        onClick: function () {
                                            Object(r.a)("danger");
                                        },
                                    },
                                    "\u5f39\u51fa\u5931\u8d25\u63d0\u793a\u6846"
                                ),
                                s.a.createElement(
                                    "button",
                                    {
                                        className:
                                            "btn btn-outline-warning btn-lg",
                                        onClick: function () {
                                            Object(r.a)("warning");
                                        },
                                    },
                                    "\u5f39\u51fa\u8b66\u544a\u63d0\u793a\u6846"
                                )
                            )
                        ),
                        s.a.createElement(c.a, {
                            src: "https://masx200.github.io/README.md",
                        })
                    )
                );
            }
        },
    },
]);
