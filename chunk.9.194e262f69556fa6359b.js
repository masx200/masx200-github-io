(Function("return this")().webpackJsonp =
    Function("return this")().webpackJsonp || []).push([
    [9],
    {
        102: function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, "default", function () {
                    return m;
                });
            var r = n(17),
                o = n(18),
                a = n(23),
                i = n(93),
                c = n.n(i),
                u = n(0),
                l = n.n(u);
            var f,
                s = l.a.useState,
                d = l.a.useEffect,
                p = l.a.useRef,
                b = l.a.useCallback,
                g =
                    "clip" +
                    "xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(
                        /[xy]/g,
                        function (e) {
                            var t = (16 * Math.random()) | 0;
                            return ("x" == e ? t : (3 & t) | 8).toString(16);
                        }
                    );
            function m() {
                var e = p();
                function t(t) {
                    Object(a.a)(t).button("loading"),
                        (f = f || c()()).postMessage([E, e.current.checked]),
                        (f.onmessage = function (e) {
                            var n = e.data;
                            v(n),
                                m(n.length + " chars"),
                                Object(a.a)(t).button("reset"),
                                requestAnimationFrame(function () {
                                    Object(o.a)("success");
                                });
                        }),
                        (f.onerror = function (e) {
                            throw new Error(e.message + " " + e.filename);
                        });
                }
                var n = s("0 chars"),
                    i = Object(r.a)(n, 2),
                    u = i[0],
                    m = i[1],
                    y = s(""),
                    x = Object(r.a)(y, 2),
                    h = x[0],
                    v = x[1],
                    j = s(
                        "console.log('{\u4f60\u597d\u5417zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')"
                    ),
                    w = Object(r.a)(j, 2),
                    E = w[0],
                    S = w[1],
                    O = p(),
                    k = b(
                        function (e) {
                            S(e.target.value);
                        },
                        [E]
                    ),
                    N = b(
                        function (e) {
                            v(e.target.value);
                        },
                        [h]
                    );
                return (
                    d(function () {
                        return (
                            (document.title =
                                "React router App-JSFuck encoder- Write any JavaScript with 6 Characters: []()!+"),
                            function () {
                                !(function () {
                                    try {
                                        f.terminate(), (f = void 0);
                                    } catch (e) {}
                                })();
                            }
                        );
                    }, []),
                    l.a.createElement(
                        "div",
                        { className: "jdahd" },
                        l.a.createElement(
                            "h1",
                            { style: { "font-size": "30px" } },
                            "\u7f16\u7801JSFUCK ",
                            l.a.createElement("br", null),
                            "encode JSFUCK"
                        ),
                        l.a.createElement(
                            "p",
                            null,
                            "JSFuck\u662f\u4e00\u79cd\u57fa\u4e8eJavaScript\u539f\u5b50\u90e8\u5206\u7684\u6df1\u5965\u6559\u80b2\u7f16\u7a0b\u98ce\u683c\u3002\u5b83\u53ea\u4f7f\u7528\u516d\u4e2a\u4e0d\u540c\u7684\u5b57\u7b26\u6765\u7f16\u5199\u548c\u6267\u884c\u4ee3\u7801\u3002"
                        ),
                        l.a.createElement("p", null, "()+[]!"),
                        l.a.createElement(
                            "p",
                            null,
                            "\u5b83\u4e0d\u4f9d\u8d56\u4e8e\u6d4f\u89c8\u5668\uff0c\u56e0\u6b64\u60a8\u751a\u81f3\u53ef\u4ee5\u5728Node.js\u4e0a\u8fd0\u884c\u5b83\u3002",
                            l.a.createElement("br", null),
                            "\u4f7f\u7528\u4e0b\u9762\u7684\u8868\u5355\u8f6c\u6362\u60a8\u81ea\u5df1\u7684\u811a\u672c\u3002\u53d6\u6d88\u9009\u4e2d\u201ceval source\u201d\u4ee5\u83b7\u53d6\u7eaf\u5b57\u7b26\u4e32\u3002"
                        ),
                        l.a.createElement(
                            "p",
                            null,
                            "\u6d4f\u89c8\u5668\u517c\u5bb9\u6027: \u5efa\u8bae\u5728\u6700\u65b0\u8d85\u9ad8\u7248\u672c\u7684chrome\u6216\u8005Firefox\u6216\u8005safari\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\uff01"
                        ),
                        l.a.createElement("br", null),
                        l.a.createElement("textarea", {
                            id: "input",
                            type: "text",
                            className: "form-control",
                            value: E,
                            onChange: k,
                        }),
                        l.a.createElement("br", null),
                        l.a.createElement(
                            "button",
                            {
                                onClick: function (e) {
                                    t(e.target);
                                },
                                ref: O,
                                className: "btn btn-outline-primary btn-lg",
                                id: "encode",
                                type: "text",
                                "data-loading-icon":
                                    "mui-spinner mui-spinner-custom",
                            },
                            "Encode"
                        ),
                        l.a.createElement(
                            "div",
                            { className: "checkbox" },
                            l.a.createElement("input", {
                                id: "eval",
                                type: "checkbox",
                                ref: e,
                                onChange: function () {
                                    t(O.current);
                                },
                                defaultChecked: !0,
                            }),
                            l.a.createElement(
                                "label",
                                { htmlFor: "eval" },
                                "Eval Source"
                            )
                        ),
                        l.a.createElement(
                            "div",
                            { id: "clip" + g },
                            l.a.createElement("textarea", {
                                id: "output",
                                className: "form-control",
                                value: h,
                                onChange: N,
                            })
                        ),
                        l.a.createElement(
                            "div",
                            { className: "actions" },
                            l.a.createElement("span", { id: "stats" }, u),
                            l.a.createElement(
                                "button",
                                {
                                    className: "btn btn-outline-primary btn-lg",
                                    id: "run",
                                    onClick: function () {
                                        var t = Function("return ".concat(h))();
                                        e.current.checked &&
                                            alert('"' + t + '"');
                                    },
                                },
                                "Run This"
                            ),
                            l.a.createElement(
                                "button",
                                {
                                    className: "btn btn-outline-success btn-lg",
                                    "data-clipboard-target": "#clip" + g,
                                },
                                "\u590d\u5236"
                            )
                        ),
                        l.a.createElement("br", null),
                        l.a.createElement(
                            "p",
                            null,
                            l.a.createElement(
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
                        l.a.createElement(
                            "p",
                            null,
                            l.a.createElement(
                                "a",
                                {
                                    href:
                                        "https://github.com/aemkei/jsfuck/blob/master/jsfuck.js",
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                },
                                "https://github.com/aemkei/jsfuck/blob/master/jsfuck.js"
                            )
                        )
                    )
                );
            }
        },
        16: function (e, t, n) {
            "use strict";
            function r(e, t) {
                return (r =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            n.d(t, "a", function () {
                return r;
            });
        },
        18: function (e, t, n) {
            "use strict";
            var r = n(22),
                o = n.n(r);
            var a = o.a;
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
                o()("[data-tanchuxiaoxi]").remove(),
                    a("#my\u5bfc\u822a\u680f").append(
                        a(
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
                            a("#" + n).remove(),
                                o()("#my\u4e3b\u4f53").css(
                                    "padding-top",
                                    o()("#my\u5bfc\u822a\u680f").height() || 0
                                );
                        })
                    );
            };
        },
        19: function (e, t, n) {
            "use strict";
            function r(e) {
                if (void 0 === e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return e;
            }
            n.d(t, "a", function () {
                return r;
            });
        },
        20: function (e, t, n) {
            "use strict";
            function r(e) {
                return (r = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            n.d(t, "a", function () {
                return r;
            });
        },
        21: function (e, t, n) {
            "use strict";
            function r() {
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
                } catch (e) {
                    return !1;
                }
            }
            n.d(t, "a", function () {
                return r;
            });
        },
        23: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return l;
            });
            var r = n(24),
                o = n(25),
                a = n(19),
                i = n(29),
                c = n(28),
                u = n(30);
            function l(e) {
                return new ((function (e) {
                    Object(c.a)(n, e);
                    var t = Object(i.a)(n);
                    function n(e) {
                        var o;
                        return (
                            Object(r.a)(this, n),
                            ((o = t.call(this)).button.loading = function () {
                                return o.button("loading");
                            }),
                            (o.button.reset = function () {
                                return o.button("reset");
                            }),
                            Object.defineProperty(
                                Object(a.a)(o),
                                Symbol.toStringTag,
                                { value: "ArrayLike" }
                            ),
                            (function (e) {
                                if (((o.length = 0), e instanceof HTMLElement))
                                    o.push(e);
                                else if ("string" === typeof e)
                                    try {
                                        for (
                                            var t = document.querySelectorAll(
                                                    e
                                                ),
                                                n = 0;
                                            n < t.length;
                                            n++
                                        )
                                            o.push(t[n]);
                                    } catch (u) {
                                        o.length = 0;
                                    }
                                else if (
                                    "object" === typeof e &&
                                    e &&
                                    "length" in e &&
                                    e.length
                                )
                                    try {
                                        for (
                                            var r = e, a = r.length, i = 0;
                                            i < a;
                                            i++
                                        ) {
                                            var c = r[i];
                                            c instanceof HTMLElement &&
                                                o.push(c);
                                        }
                                    } catch (u) {
                                        o.length = 0;
                                    }
                                else o.length = 0;
                            })(e),
                            o
                        );
                    }
                    return (
                        Object(o.a)(n, [
                            {
                                key: "button",
                                value: function (e) {
                                    var t = Symbol.for("loadingState"),
                                        n = Symbol.for("ResetHTML");
                                    var r = "Loading...",
                                        o = "mui-spinner mui-spinner-white",
                                        a = "left";
                                    function i(e, t) {
                                        t instanceof HTMLElement &&
                                            ("INPUT" === t.tagName
                                                ? (t.value = e)
                                                : (t.innerHTML = e));
                                    }
                                    return (
                                        ("loading" === e || "reset" === e) &&
                                        (this.forEach(function (c) {
                                            if (
                                                c instanceof HTMLElement &&
                                                (function (e) {
                                                    return (
                                                        (e instanceof
                                                            HTMLElement &&
                                                            "BUTTON" ===
                                                                e.tagName) ||
                                                        ("INPUT" ===
                                                            e.tagName &&
                                                            "button" ===
                                                                e.getAttribute(
                                                                    "type"
                                                                ))
                                                    );
                                                })(c)
                                            ) {
                                                var u = c.getAttribute(
                                                        "data-loading-text"
                                                    ),
                                                    l = c.getAttribute(
                                                        "data-loading-icon"
                                                    ),
                                                    f = c.getAttribute(
                                                        "data-loading-icon-position"
                                                    );
                                                !(function (e, c, u) {
                                                    if (
                                                        c instanceof HTMLElement
                                                    ) {
                                                        if (
                                                            (c[t] ||
                                                                ((c[n] =
                                                                    "INPUT" ===
                                                                    c.tagName
                                                                        ? c.value
                                                                        : c.innerHTML),
                                                                (c[t] =
                                                                    "reset")),
                                                            c[t] === e)
                                                        )
                                                            return !1;
                                                        if (
                                                            ((c[t] = e),
                                                            u.loadingText ||
                                                                (u.loadingText = r),
                                                            u.loadingIcon ||
                                                                (u.loadingIcon = o),
                                                            u.loadingIconPosition ||
                                                                (u.loadingIconPosition = a),
                                                            "reset" === e)
                                                        )
                                                            (c.disabled = !1),
                                                                c.classList.remove(
                                                                    "mui-disabled"
                                                                ),
                                                                i(c[n], c);
                                                        else if (
                                                            "loading" === e
                                                        ) {
                                                            var l;
                                                            (c.disabled = !0),
                                                                c.classList.add(
                                                                    "mui-disabled"
                                                                ),
                                                                "INPUT" !==
                                                                c.tagName
                                                                    ? ((l =
                                                                          "<span>" +
                                                                          u.loadingText +
                                                                          "</span>"),
                                                                      "right" ===
                                                                      u.loadingIconPosition
                                                                          ? (l +=
                                                                                '&nbsp;<span class="' +
                                                                                u.loadingIcon +
                                                                                '"></span>')
                                                                          : (l =
                                                                                '<span class="' +
                                                                                u.loadingIcon +
                                                                                '"></span>&nbsp;' +
                                                                                l))
                                                                    : (l =
                                                                          u.loadingText),
                                                                i(l, c);
                                                        }
                                                    }
                                                })(e, c, {
                                                    loadingText: u,
                                                    loadingIcon: l,
                                                    loadingIconPosition: f,
                                                });
                                            }
                                        }),
                                        this)
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(Object(u.a)(Array)))(e);
            }
        },
        24: function (e, t, n) {
            "use strict";
            function r(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            n.d(t, "a", function () {
                return r;
            });
        },
        25: function (e, t, n) {
            "use strict";
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                }
            }
            function o(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e;
            }
            n.d(t, "a", function () {
                return o;
            });
        },
        26: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return a;
            });
            var r = n(16),
                o = n(21);
            function a(e, t, n) {
                return (a = Object(o.a)()
                    ? Reflect.construct
                    : function (e, t, n) {
                          var o = [null];
                          o.push.apply(o, t);
                          var a = new (Function.bind.apply(e, o))();
                          return n && Object(r.a)(a, n.prototype), a;
                      }).apply(null, arguments);
            }
        },
        28: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return o;
            });
            var r = n(16);
            function o(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function"
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                })),
                    t && Object(r.a)(e, t);
            }
        },
        29: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return u;
            });
            var r = n(20),
                o = n(21);
            function a(e) {
                return (a =
                    "function" === typeof Symbol &&
                    "symbol" === typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  "function" === typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? "symbol"
                                  : typeof e;
                          })(e);
            }
            var i = n(19);
            function c(e, t) {
                return !t || ("object" !== a(t) && "function" !== typeof t)
                    ? Object(i.a)(e)
                    : t;
            }
            function u(e) {
                return function () {
                    var t,
                        n = Object(r.a)(e);
                    if (Object(o.a)()) {
                        var a = Object(r.a)(this).constructor;
                        t = Reflect.construct(n, arguments, a);
                    } else t = n.apply(this, arguments);
                    return c(this, t);
                };
            }
        },
        30: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return i;
            });
            var r = n(20),
                o = n(16);
            var a = n(26);
            function i(e) {
                var t = "function" === typeof Map ? new Map() : void 0;
                return (i = function (e) {
                    if (
                        null === e ||
                        ((n = e),
                        -1 ===
                            Function.toString.call(n).indexOf("[native code]"))
                    )
                        return e;
                    var n;
                    if ("function" !== typeof e)
                        throw new TypeError(
                            "Super expression must either be null or a function"
                        );
                    if ("undefined" !== typeof t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, i);
                    }
                    function i() {
                        return Object(a.a)(
                            e,
                            arguments,
                            Object(r.a)(this).constructor
                        );
                    }
                    return (
                        (i.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: i,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0,
                            },
                        })),
                        Object(o.a)(i, e)
                    );
                })(e);
            }
        },
        34: function (e, t, n) {
            "use strict";
            var r = window.URL || window.webkitURL;
            e.exports = function (e, t) {
                try {
                    try {
                        var n;
                        try {
                            (n = new (window.BlobBuilder ||
                                window.WebKitBlobBuilder ||
                                window.MozBlobBuilder ||
                                window.MSBlobBuilder)()).append(e),
                                (n = n.getBlob());
                        } catch (o) {
                            n = new Blob([e]);
                        }
                        return new Worker(r.createObjectURL(n));
                    } catch (o) {
                        return new Worker(
                            "data:application/javascript," +
                                encodeURIComponent(e)
                        );
                    }
                } catch (o) {
                    if (!t) throw Error("Inline worker is not supported");
                    return new Worker(t);
                }
            };
        },
        93: function (e, t, n) {
            e.exports = function () {
                return n(34)(
                    '/*! For license information please see service-worker-jsfuck.worker.837c278f9316dfe99f60.worker.js.LICENSE.txt */\n!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s=1)}([function(e,t,n){"use strict";!function(t){e.exports={encode:f};var n="USE_CHAR_CODE",r={false:"![]",true:"!![]",undefined:"[][[]]",NaN:"+[![]]",Infinity:"+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]]+[+[]])"},o={Array:"[]",Number:"(+[])",String:"([]+[])",Boolean:"(![])",Function:\'[]["filter"]\',RegExp:\'Function("return/0/")()\'},i={a:\'(false+"")[1]\',b:\'(+(11))["toString"](20)\',c:\'([]["filter"]+"")[3]\',d:\'(undefined+"")[2]\',e:\'(true+"")[3]\',f:\'(false+"")[0]\',g:"(+false+[false]+String)[20]",h:\'(+(101))["toString"](21)[1]\',i:"([false]+undefined)[10]",j:\'(+(40))["toString"](21)[1]\',k:\'(+(20))["toString"](21)\',l:\'(false+"")[2]\',m:\'(Number+"")[11]\',n:\'(undefined+"")[1]\',o:\'(true+[]["filter"])[10]\',p:\'(+(211))["toString"](31)[1]\',q:\'(+(212))["toString"](31)[1]\',r:\'(true+"")[1]\',s:\'(false+"")[3]\',t:\'(true+"")[0]\',u:\'(undefined+"")[0]\',v:\'(+(31))["toString"](32)\',w:\'(+(32))["toString"](33)\',x:\'(+(101))["toString"](34)[1]\',y:"(NaN+[Infinity])[10]",z:\'(+(35))["toString"](36)\',A:"(+false+Array)[10]",B:"(+false+Boolean)[10]",C:\'Function("return escape")()("<")[2]\',D:\'Function("return escape")()("=")[2]\',E:\'(RegExp+"")[12]\',F:"(+false+Function)[10]",G:\'(false+Function("return Date")()())[30]\',H:n,I:\'(Infinity+"")[0]\',J:n,K:n,L:n,M:\'(true+Function("return Date")()())[30]\',N:\'(NaN+"")[0]\',O:n,P:n,Q:n,R:"(+false+RegExp)[10]",S:"(+false+String)[10]",T:\'(NaN+Function("return Date")()())[30]\',U:n,V:n,W:n,X:n,Y:n,Z:n," ":\'(NaN+[]["filter"])[11]\',"!":n,\'"\':\'("")["fontcolor"]()[12]\',"#":n,$:n,"%":\'Function("return escape")()("<")[0]\',"&":n,"\'":n,"(":\'(false+[]["filter"])[20]\',")":\'(true+[]["filter"])[20]\',"*":n,"+":"(+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]])+[])[2]",",":\'[[]]["concat"]([[]])+""\',"-":\'(+(.+[0000000001])+"")[2]\',".":"(+(+!+[]+[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]]+[+[]])+[])[+!+[]]","/":\'(false+[+false])["italics"]()[10]\',":":\'(RegExp()+"")[3]\',";":n,"<":\'("")["italics"]()[0]\',"=":\'("")["fontcolor"]()[11]\',">":\'("")["italics"]()[2]\',"?":\'(RegExp()+"")[2]\',"@":n,"[":\'(GLOBAL+"")[0]\',"\\\\":n,"]":n,"^":n,_:n,"`":n,"{":\'(NaN+[]["filter"])[21]\',"|":n,"}":\'(NaN+[]["filter"])[37]\',"~":n};var u=0;function f(e,t){0===u&&(!function(){var e,t,n;for(t=0;t<10;t++){for(e="+[]",t>0&&(e="+!"+e),n=1;n<t;n++)e="+!+[]"+e;t>1&&(e=e.substr(1)),i[t]="["+e+"]"}}(),function(){for(var e in i)i[e]===n&&(i[e]=\'Function("return unescape")()("%"\'+e.charCodeAt(0).toString(16).replace(/(\\d+)/g,\'+($1)+"\')+\'")\')}(),function(){var e,t,n,u="";function f(t,n){e=e.replace(new RegExp(t,"gi"),n)}function a(e,t){return i[t]}function c(e,n){var r=n.split(""),o=+r.shift(),i="+[]";for(o>0&&(i="+!"+i),t=1;t<o;t++)i="+!+[]"+i;return o>1&&(i=i.substr(1)),[i].concat(r).join("+").replace(/(\\d)/g,a)}for(t=32;t<=126;t++)if(u=String.fromCharCode(t),e=i[u]){for(n in o)f("\\\\b"+n,o[n]+\'["constructor"]\');for(n in r)f(n,r[n]);f("(\\\\d\\\\d+)",c),f("\\\\((\\\\d)\\\\)",a),f("\\\\[(\\\\d)\\\\]",a),f("GLOBAL",\'Function("return this")()\'),f(\'\\\\+""\',"+[]"),f(\'""\',"[]+[]"),i[u]=e}}(),function(){var e,t,n,r=/[^\\[\\]\\(\\)\\!\\+]{1}/g,o=94;function u(){var e,t,o=!1;for(e in n={},i)(t=i[e]).match(r)&&(n[e]=t,o=!0);return o}function f(e,t){return t.split("").join("+")}function a(e){return n[e]?e:i[e]}for(e in i)i[e]=i[e].replace(/\\"([^\\"]+)\\"/gi,f);for(;u();){for(e in n)t=(t=i[e]).replace(r,a),i[e]=t,n[e]=t;if(0===o--){throw"Could not compile the following chars:"}}}(),u=1);var a=[];if(!e)return"";var c="";for(var l in r)c+=l+"|";return c+=".",e.replace(new RegExp(c,"g"),(function(e){var t=r[e];t?a.push("["+t+"]+[]"):(t=i[e])?a.push(t):(t=e.charCodeAt(0)<128?"("+f("\\\\u00"+e.charCodeAt(0).toString(16))+")":"("+f("\\\\u"+e.charCodeAt(0).toString(16))+")",a.push(t),i[e]=t)})),a=a.join("+"),/^\\d$/.test(e)&&(a+="+[]"),t?a="[]["+f("filter")+"]["+f("constructor")+"]("+a+")()":"("+a+")"}}("undefined"!==typeof window&&window||"undefined"!==typeof WorkerGlobalScope&&WorkerGlobalScope)},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);addEventListener("message",(function(e){var t=e.data,n=o.a.encode(t[0],t[1]);postMessage(n)}))}]);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlLXdvcmtlci1qc2Z1Y2sud29ya2VyLjgzN2MyNzhmOTMxNmRmZTk5ZjYwLndvcmtlci5qcyIsInNvdXJjZVJvb3QiOiIifQ==',
                    n.p +
                        "service-worker-jsfuck.worker.837c278f9316dfe99f60.worker.js"
                );
            };
        },
    },
]);
