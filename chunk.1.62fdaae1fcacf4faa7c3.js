(Function("return this")().webpackJsonp =
    Function("return this")().webpackJsonp || []).push([
    [1],
    {
        31: function (e, t, n) {
            "use strict";
            var r = n(17),
                s = n(29),
                i = n.n(s),
                l = n(0),
                a = n.n(l),
                o = n(52),
                h = n.n(o),
                c = n(53),
                p = n.n(c),
                u = n(54),
                g = n.n(u),
                f = n(55),
                d = n.n(f),
                m = n(56),
                b = n.n(m),
                k = n(57),
                x = n.n(k),
                y = n(58),
                _ = n.n(y),
                w = p.a;
            p.a.registerLanguage("javascript", g.a),
                p.a.registerLanguage("typescript", d.a),
                p.a.registerLanguage("json", b.a),
                p.a.registerLanguage("xml", x.a),
                p.a.registerLanguage("css", _.a);
            var v = new Map();
            function $(e) {
                var t;
                return i.a.async(function (n) {
                    for (;;)
                        switch ((n.prev = n.next)) {
                            case 0:
                                return (
                                    (n.next = 2),
                                    i.a.awrap(fetch(new URL(e).href))
                                );
                            case 2:
                                if (!(t = n.sent).ok) {
                                    n.next = 9;
                                    break;
                                }
                                return (n.next = 6), i.a.awrap(t.text());
                            case 6:
                                return n.abrupt("return", n.sent);
                            case 9:
                                throw new Error("fetch failed");
                            case 10:
                            case "end":
                                return n.stop();
                        }
                });
            }
            t.a = a.a.memo(function (e) {
                var t = Object(l.useState)(!1),
                    n = Object(r.a)(t, 2),
                    s = n[0],
                    o = n[1],
                    c = Object(l.useState)(!1),
                    p = Object(r.a)(c, 2),
                    u = p[0],
                    g = p[1],
                    f = Object(l.useState)(""),
                    d = Object(r.a)(f, 2),
                    m = d[0],
                    b = d[1],
                    k = Object(l.useRef)();
                return (
                    Object(l.useEffect)(
                        function () {
                            if (e.src) {
                                var t = v.get(e.src);
                                if (t) return o(!0), void b(t);
                                !(function () {
                                    var t, n;
                                    i.a.async(
                                        function (r) {
                                            for (;;)
                                                switch ((r.prev = r.next)) {
                                                    case 0:
                                                        return (
                                                            w.initHighlightingOnLoad(),
                                                            (r.prev = 1),
                                                            (r.next = 4),
                                                            i.a.awrap($(e.src))
                                                        );
                                                    case 4:
                                                        (t = r.sent),
                                                            (r.next = 12);
                                                        break;
                                                    case 7:
                                                        return (
                                                            (r.prev = 7),
                                                            (r.t0 = r.catch(1)),
                                                            g(!0),
                                                            r.abrupt("return")
                                                        );
                                                    case 12:
                                                        n = document.createElement(
                                                            "div"
                                                        );
                                                        try {
                                                            n.innerHTML = h()(
                                                                t
                                                            );
                                                        } catch (s) {}
                                                        Array.from(
                                                            n.querySelectorAll(
                                                                "pre code"
                                                            )
                                                        ).forEach(function (e) {
                                                            return w.highlightBlock(
                                                                e
                                                            );
                                                        }),
                                                            o(!0);
                                                        try {
                                                            b(n.innerHTML),
                                                                v.set(
                                                                    e.src,
                                                                    n.innerHTML
                                                                );
                                                        } catch (s) {}
                                                    case 17:
                                                    case "end":
                                                        return r.stop();
                                                }
                                        },
                                        null,
                                        null,
                                        [[1, 7]]
                                    );
                                })();
                            }
                        },
                        [e.src]
                    ),
                    a.a.createElement(
                        "div",
                        { className: "container" },
                        a.a.createElement(
                            "div",
                            {
                                id: "readme",
                                className:
                                    "Box Box--condensed instapaper_body md js-code-block-container",
                            },
                            a.a.createElement(
                                "div",
                                {
                                    className:
                                        "Box-header d-flex flex-items-center flex-justify-between px-2",
                                },
                                a.a.createElement(
                                    "h3",
                                    { className: "Box-title pr-3" },
                                    a.a.createElement(
                                        "svg",
                                        {
                                            className: "octicon octicon-book",
                                            viewBox: "0 0 16 16",
                                            version: "1.1",
                                            width: "16",
                                            height: "16",
                                            "aria-hidden": "true",
                                        },
                                        a.a.createElement("path", {
                                            fillRule: "evenodd",
                                            d:
                                                "M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z",
                                        })
                                    ),
                                    a.a.createElement("span", null, e.src)
                                ),
                                a.a.createElement("div", null)
                            ),
                            a.a.createElement(
                                "div",
                                {
                                    className: "Box-body",
                                    style: { padding: " 0px" },
                                },
                                a.a.createElement(
                                    "article",
                                    {
                                        className:
                                            "markdown-body entry-content p-5",
                                        itemProp: "text",
                                        id: "padding0",
                                    },
                                    a.a.createElement(
                                        "div",
                                        { class: "article-content" },
                                        a.a.createElement("div", {
                                            ref: k,
                                            style: {
                                                display: s ? "block" : "none",
                                            },
                                            className: "container",
                                            dangerouslySetInnerHTML: {
                                                __html: m,
                                            },
                                        }),
                                        s
                                            ? a.a.createElement(
                                                  a.a.Fragment,
                                                  null
                                              )
                                            : a.a.createElement(function () {
                                                  return a.a.createElement(
                                                      "div",
                                                      null,
                                                      a.a.createElement(
                                                          "h1",
                                                          null,
                                                          "loading"
                                                      ),
                                                      a.a.createElement(
                                                          "span",
                                                          {
                                                              className:
                                                                  "mui-spinner mui-spinner-custom",
                                                          }
                                                      )
                                                  );
                                              }, null),
                                        u
                                            ? a.a.createElement(
                                                  "div",
                                                  null,
                                                  a.a.createElement(
                                                      "h1",
                                                      null,
                                                      "Error!"
                                                  )
                                              )
                                            : a.a.createElement(
                                                  a.a.Fragment,
                                                  null
                                              )
                                    )
                                )
                            )
                        )
                    )
                );
            });
        },
        52: function (e, t, n) {
            "use strict";
            (function (t) {
                !(function (t) {
                    var n = {
                        newline: /^\n+/,
                        code: /^( {4}[^\n]+\n*)+/,
                        fences: m,
                        hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
                        heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
                        nptable: m,
                        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                        list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                        html:
                            "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
                        def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
                        table: m,
                        lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
                        paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
                        text: /^[^\n]+/,
                    };
                    function r(e) {
                        (this.tokens = []),
                            (this.tokens.links = Object.create(null)),
                            (this.options = e || _.defaults),
                            (this.rules = n.normal),
                            this.options.pedantic
                                ? (this.rules = n.pedantic)
                                : this.options.gfm &&
                                  (this.options.tables
                                      ? (this.rules = n.tables)
                                      : (this.rules = n.gfm));
                    }
                    (n._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/),
                        (n._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/),
                        (n.def = u(n.def)
                            .replace("label", n._label)
                            .replace("title", n._title)
                            .getRegex()),
                        (n.bullet = /(?:[*+-]|\d{1,9}\.)/),
                        (n.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/),
                        (n.item = u(n.item, "gm")
                            .replace(/bull/g, n.bullet)
                            .getRegex()),
                        (n.list = u(n.list)
                            .replace(/bull/g, n.bullet)
                            .replace(
                                "hr",
                                "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
                            )
                            .replace("def", "\\n+(?=" + n.def.source + ")")
                            .getRegex()),
                        (n._tag =
                            "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
                        (n._comment = /<!--(?!-?>)[\s\S]*?-->/),
                        (n.html = u(n.html, "i")
                            .replace("comment", n._comment)
                            .replace("tag", n._tag)
                            .replace(
                                "attribute",
                                / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
                            )
                            .getRegex()),
                        (n.paragraph = u(n.paragraph)
                            .replace("hr", n.hr)
                            .replace("heading", n.heading)
                            .replace("lheading", n.lheading)
                            .replace("tag", n._tag)
                            .getRegex()),
                        (n.blockquote = u(n.blockquote)
                            .replace("paragraph", n.paragraph)
                            .getRegex()),
                        (n.normal = b({}, n)),
                        (n.gfm = b({}, n.normal, {
                            fences: /^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
                            paragraph: /^/,
                            heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/,
                        })),
                        (n.gfm.paragraph = u(n.paragraph)
                            .replace(
                                "(?!",
                                "(?!" +
                                    n.gfm.fences.source.replace("\\1", "\\2") +
                                    "|" +
                                    n.list.source.replace("\\1", "\\3") +
                                    "|"
                            )
                            .getRegex()),
                        (n.tables = b({}, n.gfm, {
                            nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
                            table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/,
                        })),
                        (n.pedantic = b({}, n.normal, {
                            html: u(
                                "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
                            )
                                .replace("comment", n._comment)
                                .replace(
                                    /tag/g,
                                    "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
                                )
                                .getRegex(),
                            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                        })),
                        (r.rules = n),
                        (r.lex = function (e, t) {
                            return new r(t).lex(e);
                        }),
                        (r.prototype.lex = function (e) {
                            return (
                                (e = e
                                    .replace(/\r\n|\r/g, "\n")
                                    .replace(/\t/g, "    ")
                                    .replace(/\u00a0/g, " ")
                                    .replace(/\u2424/g, "\n")),
                                this.token(e, !0)
                            );
                        }),
                        (r.prototype.token = function (e, t) {
                            var r, s, i, l, a, o, h, c, p, u, g, f, d, m, b, y;
                            for (e = e.replace(/^ +$/gm, ""); e; )
                                if (
                                    ((i = this.rules.newline.exec(e)) &&
                                        ((e = e.substring(i[0].length)),
                                        1 < i[0].length &&
                                            this.tokens.push({
                                                type: "space",
                                            })),
                                    (i = this.rules.code.exec(e)))
                                )
                                    (e = e.substring(i[0].length)),
                                        (i = i[0].replace(/^ {4}/gm, "")),
                                        this.tokens.push({
                                            type: "code",
                                            text: this.options.pedantic
                                                ? i
                                                : x(i, "\n"),
                                        });
                                else if ((i = this.rules.fences.exec(e)))
                                    (e = e.substring(i[0].length)),
                                        this.tokens.push({
                                            type: "code",
                                            lang: i[2] ? i[2].trim() : i[2],
                                            text: i[3] || "",
                                        });
                                else if ((i = this.rules.heading.exec(e)))
                                    (e = e.substring(i[0].length)),
                                        this.tokens.push({
                                            type: "heading",
                                            depth: i[1].length,
                                            text: i[2],
                                        });
                                else if (
                                    (i = this.rules.nptable.exec(e)) &&
                                    (o = {
                                        type: "table",
                                        header: k(
                                            i[1].replace(/^ *| *\| *$/g, "")
                                        ),
                                        align: i[2]
                                            .replace(/^ *|\| *$/g, "")
                                            .split(/ *\| */),
                                        cells: i[3]
                                            ? i[3]
                                                  .replace(/\n$/, "")
                                                  .split("\n")
                                            : [],
                                    }).header.length === o.align.length
                                ) {
                                    for (
                                        e = e.substring(i[0].length), g = 0;
                                        g < o.align.length;
                                        g++
                                    )
                                        /^ *-+: *$/.test(o.align[g])
                                            ? (o.align[g] = "right")
                                            : /^ *:-+: *$/.test(o.align[g])
                                            ? (o.align[g] = "center")
                                            : /^ *:-+ *$/.test(o.align[g])
                                            ? (o.align[g] = "left")
                                            : (o.align[g] = null);
                                    for (g = 0; g < o.cells.length; g++)
                                        o.cells[g] = k(
                                            o.cells[g],
                                            o.header.length
                                        );
                                    this.tokens.push(o);
                                } else if ((i = this.rules.hr.exec(e)))
                                    (e = e.substring(i[0].length)),
                                        this.tokens.push({ type: "hr" });
                                else if ((i = this.rules.blockquote.exec(e)))
                                    (e = e.substring(i[0].length)),
                                        this.tokens.push({
                                            type: "blockquote_start",
                                        }),
                                        (i = i[0].replace(/^ *> ?/gm, "")),
                                        this.token(i, t),
                                        this.tokens.push({
                                            type: "blockquote_end",
                                        });
                                else if ((i = this.rules.list.exec(e))) {
                                    for (
                                        e = e.substring(i[0].length),
                                            h = {
                                                type: "list_start",
                                                ordered: (m =
                                                    1 < (l = i[2]).length),
                                                start: m ? +l : "",
                                                loose: !1,
                                            },
                                            this.tokens.push(h),
                                            r = !(c = []),
                                            d = (i = i[0].match(
                                                this.rules.item
                                            )).length,
                                            g = 0;
                                        g < d;
                                        g++
                                    )
                                        (u = (o = i[g]).length),
                                            ~(o = o.replace(
                                                /^ *([*+-]|\d+\.) */,
                                                ""
                                            )).indexOf("\n ") &&
                                                ((u -= o.length),
                                                (o = this.options.pedantic
                                                    ? o.replace(/^ {1,4}/gm, "")
                                                    : o.replace(
                                                          new RegExp(
                                                              "^ {1," + u + "}",
                                                              "gm"
                                                          ),
                                                          ""
                                                      ))),
                                            g !== d - 1 &&
                                                ((a = n.bullet.exec(
                                                    i[g + 1]
                                                )[0]),
                                                (1 < l.length
                                                    ? 1 === a.length
                                                    : 1 < a.length ||
                                                      (this.options
                                                          .smartLists &&
                                                          a !== l)) &&
                                                    ((e =
                                                        i
                                                            .slice(g + 1)
                                                            .join("\n") + e),
                                                    (g = d - 1))),
                                            (s = r || /\n\n(?!\s*$)/.test(o)),
                                            g !== d - 1 &&
                                                ((r =
                                                    "\n" ===
                                                    o.charAt(o.length - 1)),
                                                s || (s = r)),
                                            s && (h.loose = !0),
                                            (y = void 0),
                                            (b = /^\[[ xX]\] /.test(o)) &&
                                                ((y = " " !== o[1]),
                                                (o = o.replace(
                                                    /^\[[ xX]\] +/,
                                                    ""
                                                ))),
                                            (p = {
                                                type: "list_item_start",
                                                task: b,
                                                checked: y,
                                                loose: s,
                                            }),
                                            c.push(p),
                                            this.tokens.push(p),
                                            this.token(o, !1),
                                            this.tokens.push({
                                                type: "list_item_end",
                                            });
                                    if (h.loose)
                                        for (d = c.length, g = 0; g < d; g++)
                                            c[g].loose = !0;
                                    this.tokens.push({ type: "list_end" });
                                } else if ((i = this.rules.html.exec(e)))
                                    (e = e.substring(i[0].length)),
                                        this.tokens.push({
                                            type: this.options.sanitize
                                                ? "paragraph"
                                                : "html",
                                            pre:
                                                !this.options.sanitizer &&
                                                ("pre" === i[1] ||
                                                    "script" === i[1] ||
                                                    "style" === i[1]),
                                            text: i[0],
                                        });
                                else if (t && (i = this.rules.def.exec(e)))
                                    (e = e.substring(i[0].length)),
                                        i[3] &&
                                            (i[3] = i[3].substring(
                                                1,
                                                i[3].length - 1
                                            )),
                                        (f = i[1]
                                            .toLowerCase()
                                            .replace(/\s+/g, " ")),
                                        this.tokens.links[f] ||
                                            (this.tokens.links[f] = {
                                                href: i[2],
                                                title: i[3],
                                            });
                                else if (
                                    (i = this.rules.table.exec(e)) &&
                                    (o = {
                                        type: "table",
                                        header: k(
                                            i[1].replace(/^ *| *\| *$/g, "")
                                        ),
                                        align: i[2]
                                            .replace(/^ *|\| *$/g, "")
                                            .split(/ *\| */),
                                        cells: i[3]
                                            ? i[3]
                                                  .replace(/\n$/, "")
                                                  .split("\n")
                                            : [],
                                    }).header.length === o.align.length
                                ) {
                                    for (
                                        e = e.substring(i[0].length), g = 0;
                                        g < o.align.length;
                                        g++
                                    )
                                        /^ *-+: *$/.test(o.align[g])
                                            ? (o.align[g] = "right")
                                            : /^ *:-+: *$/.test(o.align[g])
                                            ? (o.align[g] = "center")
                                            : /^ *:-+ *$/.test(o.align[g])
                                            ? (o.align[g] = "left")
                                            : (o.align[g] = null);
                                    for (g = 0; g < o.cells.length; g++)
                                        o.cells[g] = k(
                                            o.cells[g].replace(
                                                /^ *\| *| *\| *$/g,
                                                ""
                                            ),
                                            o.header.length
                                        );
                                    this.tokens.push(o);
                                } else if ((i = this.rules.lheading.exec(e)))
                                    (e = e.substring(i[0].length)),
                                        this.tokens.push({
                                            type: "heading",
                                            depth: "=" === i[2] ? 1 : 2,
                                            text: i[1],
                                        });
                                else if (
                                    t &&
                                    (i = this.rules.paragraph.exec(e))
                                )
                                    (e = e.substring(i[0].length)),
                                        this.tokens.push({
                                            type: "paragraph",
                                            text:
                                                "\n" ===
                                                i[1].charAt(i[1].length - 1)
                                                    ? i[1].slice(0, -1)
                                                    : i[1],
                                        });
                                else if ((i = this.rules.text.exec(e)))
                                    (e = e.substring(i[0].length)),
                                        this.tokens.push({
                                            type: "text",
                                            text: i[0],
                                        });
                                else if (e)
                                    throw new Error(
                                        "Infinite loop on byte: " +
                                            e.charCodeAt(0)
                                    );
                            return this.tokens;
                        });
                    var s = {
                        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
                        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                        url: m,
                        tag:
                            "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
                        link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
                        reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
                        nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
                        strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
                        em: /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
                        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                        br: /^( {2,}|\\)\n(?!\s*$)/,
                        del: m,
                        text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,
                    };
                    function i(e, t) {
                        if (
                            ((this.options = t || _.defaults),
                            (this.links = e),
                            (this.rules = s.normal),
                            (this.renderer = this.options.renderer || new l()),
                            (this.renderer.options = this.options),
                            !this.links)
                        )
                            throw new Error(
                                "Tokens array requires a `links` property."
                            );
                        this.options.pedantic
                            ? (this.rules = s.pedantic)
                            : this.options.gfm &&
                              (this.options.breaks
                                  ? (this.rules = s.breaks)
                                  : (this.rules = s.gfm));
                    }
                    function l(e) {
                        this.options = e || _.defaults;
                    }
                    function a() {}
                    function o(e) {
                        (this.tokens = []),
                            (this.token = null),
                            (this.options = e || _.defaults),
                            (this.options.renderer =
                                this.options.renderer || new l()),
                            (this.renderer = this.options.renderer),
                            (this.renderer.options = this.options),
                            (this.slugger = new h());
                    }
                    function h() {
                        this.seen = {};
                    }
                    function c(e, t) {
                        if (t) {
                            if (c.escapeTest.test(e))
                                return e.replace(c.escapeReplace, function (e) {
                                    return c.replacements[e];
                                });
                        } else if (c.escapeTestNoEncode.test(e))
                            return e.replace(c.escapeReplaceNoEncode, function (
                                e
                            ) {
                                return c.replacements[e];
                            });
                        return e;
                    }
                    function p(e) {
                        return e.replace(
                            /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
                            function (e, t) {
                                return "colon" === (t = t.toLowerCase())
                                    ? ":"
                                    : "#" === t.charAt(0)
                                    ? "x" === t.charAt(1)
                                        ? String.fromCharCode(
                                              parseInt(t.substring(2), 16)
                                          )
                                        : String.fromCharCode(+t.substring(1))
                                    : "";
                            }
                        );
                    }
                    function u(e, t) {
                        return (
                            (e = e.source || e),
                            (t = t || ""),
                            {
                                replace: function (t, n) {
                                    return (
                                        (n = (n = n.source || n).replace(
                                            /(^|[^\[])\^/g,
                                            "$1"
                                        )),
                                        (e = e.replace(t, n)),
                                        this
                                    );
                                },
                                getRegex: function () {
                                    return new RegExp(e, t);
                                },
                            }
                        );
                    }
                    function g(e, t, n) {
                        if (e) {
                            try {
                                var r = decodeURIComponent(p(n))
                                    .replace(/[^\w:]/g, "")
                                    .toLowerCase();
                            } catch (e) {
                                return null;
                            }
                            if (
                                0 === r.indexOf("javascript:") ||
                                0 === r.indexOf("vbscript:") ||
                                0 === r.indexOf("data:")
                            )
                                return null;
                        }
                        t &&
                            !d.test(n) &&
                            (n = (function (e, t) {
                                return (
                                    f[" " + e] ||
                                        (/^[^:]+:\/*[^/]*$/.test(e)
                                            ? (f[" " + e] = e + "/")
                                            : (f[" " + e] = x(e, "/", !0))),
                                    (e = f[" " + e]),
                                    "//" === t.slice(0, 2)
                                        ? e.replace(/:[\s\S]*/, ":") + t
                                        : "/" === t.charAt(0)
                                        ? e.replace(
                                              /(:\/*[^/]*)[\s\S]*/,
                                              "$1"
                                          ) + t
                                        : e + t
                                );
                            })(t, n));
                        try {
                            n = encodeURI(n).replace(/%25/g, "%");
                        } catch (e) {
                            return null;
                        }
                        return n;
                    }
                    (s._punctuation = "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"),
                        (s.em = u(s.em)
                            .replace(/punctuation/g, s._punctuation)
                            .getRegex()),
                        (s._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
                        (s._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
                        (s._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
                        (s.autolink = u(s.autolink)
                            .replace("scheme", s._scheme)
                            .replace("email", s._email)
                            .getRegex()),
                        (s._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
                        (s.tag = u(s.tag)
                            .replace("comment", n._comment)
                            .replace("attribute", s._attribute)
                            .getRegex()),
                        (s._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|`(?!`)|[^\[\]\\`])*?/),
                        (s._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/),
                        (s._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
                        (s.link = u(s.link)
                            .replace("label", s._label)
                            .replace("href", s._href)
                            .replace("title", s._title)
                            .getRegex()),
                        (s.reflink = u(s.reflink)
                            .replace("label", s._label)
                            .getRegex()),
                        (s.normal = b({}, s)),
                        (s.pedantic = b({}, s.normal, {
                            strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                            em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
                            link: u(/^!?\[(label)\]\((.*?)\)/)
                                .replace("label", s._label)
                                .getRegex(),
                            reflink: u(/^!?\[(label)\]\s*\[([^\]]*)\]/)
                                .replace("label", s._label)
                                .getRegex(),
                        })),
                        (s.gfm = b({}, s.normal, {
                            escape: u(s.escape)
                                .replace("])", "~|])")
                                .getRegex(),
                            _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                            url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                            _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
                            del: /^~+(?=\S)([\s\S]*?\S)~+/,
                            text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/,
                        })),
                        (s.gfm.url = u(s.gfm.url, "i")
                            .replace("email", s.gfm._extended_email)
                            .getRegex()),
                        (s.breaks = b({}, s.gfm, {
                            br: u(s.br).replace("{2,}", "*").getRegex(),
                            text: u(s.gfm.text)
                                .replace(/\{2,\}/g, "*")
                                .getRegex(),
                        })),
                        (i.rules = s),
                        (i.output = function (e, t, n) {
                            return new i(t, n).output(e);
                        }),
                        (i.prototype.output = function (e) {
                            for (var t, n, r, s, l, a, o = ""; e; )
                                if ((l = this.rules.escape.exec(e)))
                                    (e = e.substring(l[0].length)),
                                        (o += c(l[1]));
                                else if ((l = this.rules.tag.exec(e)))
                                    !this.inLink && /^<a /i.test(l[0])
                                        ? (this.inLink = !0)
                                        : this.inLink &&
                                          /^<\/a>/i.test(l[0]) &&
                                          (this.inLink = !1),
                                        !this.inRawBlock &&
                                        /^<(pre|code|kbd|script)(\s|>)/i.test(
                                            l[0]
                                        )
                                            ? (this.inRawBlock = !0)
                                            : this.inRawBlock &&
                                              /^<\/(pre|code|kbd|script)(\s|>)/i.test(
                                                  l[0]
                                              ) &&
                                              (this.inRawBlock = !1),
                                        (e = e.substring(l[0].length)),
                                        (o += this.options.sanitize
                                            ? this.options.sanitizer
                                                ? this.options.sanitizer(l[0])
                                                : c(l[0])
                                            : l[0]);
                                else if ((l = this.rules.link.exec(e))) {
                                    var h = y(l[2], "()");
                                    if (-1 < h) {
                                        var p =
                                            l[0].length -
                                            (l[2].length - h) -
                                            (l[3] || "").length;
                                        (l[2] = l[2].substring(0, h)),
                                            (l[0] = l[0]
                                                .substring(0, p)
                                                .trim()),
                                            (l[3] = "");
                                    }
                                    (e = e.substring(l[0].length)),
                                        (this.inLink = !0),
                                        (r = l[2]),
                                        (s = this.options.pedantic
                                            ? (t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(
                                                  r
                                              ))
                                                ? ((r = t[1]), t[3])
                                                : ""
                                            : l[3]
                                            ? l[3].slice(1, -1)
                                            : ""),
                                        (r = r
                                            .trim()
                                            .replace(/^<([\s\S]*)>$/, "$1")),
                                        (o += this.outputLink(l, {
                                            href: i.escapes(r),
                                            title: i.escapes(s),
                                        })),
                                        (this.inLink = !1);
                                } else if (
                                    (l = this.rules.reflink.exec(e)) ||
                                    (l = this.rules.nolink.exec(e))
                                ) {
                                    if (
                                        ((e = e.substring(l[0].length)),
                                        (t = (l[2] || l[1]).replace(
                                            /\s+/g,
                                            " "
                                        )),
                                        !(t = this.links[t.toLowerCase()]) ||
                                            !t.href)
                                    ) {
                                        (o += l[0].charAt(0)),
                                            (e = l[0].substring(1) + e);
                                        continue;
                                    }
                                    (this.inLink = !0),
                                        (o += this.outputLink(l, t)),
                                        (this.inLink = !1);
                                } else if ((l = this.rules.strong.exec(e)))
                                    (e = e.substring(l[0].length)),
                                        (o += this.renderer.strong(
                                            this.output(
                                                l[4] || l[3] || l[2] || l[1]
                                            )
                                        ));
                                else if ((l = this.rules.em.exec(e)))
                                    (e = e.substring(l[0].length)),
                                        (o += this.renderer.em(
                                            this.output(
                                                l[6] ||
                                                    l[5] ||
                                                    l[4] ||
                                                    l[3] ||
                                                    l[2] ||
                                                    l[1]
                                            )
                                        ));
                                else if ((l = this.rules.code.exec(e)))
                                    (e = e.substring(l[0].length)),
                                        (o += this.renderer.codespan(
                                            c(l[2].trim(), !0)
                                        ));
                                else if ((l = this.rules.br.exec(e)))
                                    (e = e.substring(l[0].length)),
                                        (o += this.renderer.br());
                                else if ((l = this.rules.del.exec(e)))
                                    (e = e.substring(l[0].length)),
                                        (o += this.renderer.del(
                                            this.output(l[1])
                                        ));
                                else if ((l = this.rules.autolink.exec(e)))
                                    (e = e.substring(l[0].length)),
                                        (r =
                                            "@" === l[2]
                                                ? "mailto:" +
                                                  (n = c(this.mangle(l[1])))
                                                : (n = c(l[1]))),
                                        (o += this.renderer.link(r, null, n));
                                else if (
                                    this.inLink ||
                                    !(l = this.rules.url.exec(e))
                                ) {
                                    if ((l = this.rules.text.exec(e)))
                                        (e = e.substring(l[0].length)),
                                            this.inRawBlock
                                                ? (o += this.renderer.text(
                                                      l[0]
                                                  ))
                                                : (o += this.renderer.text(
                                                      c(this.smartypants(l[0]))
                                                  ));
                                    else if (e)
                                        throw new Error(
                                            "Infinite loop on byte: " +
                                                e.charCodeAt(0)
                                        );
                                } else {
                                    if ("@" === l[2])
                                        r = "mailto:" + (n = c(l[0]));
                                    else {
                                        for (
                                            ;
                                            (a = l[0]),
                                                (l[0] = this.rules._backpedal.exec(
                                                    l[0]
                                                )[0]),
                                                a !== l[0];

                                        );
                                        (n = c(l[0])),
                                            (r =
                                                "www." === l[1]
                                                    ? "http://" + n
                                                    : n);
                                    }
                                    (e = e.substring(l[0].length)),
                                        (o += this.renderer.link(r, null, n));
                                }
                            return o;
                        }),
                        (i.escapes = function (e) {
                            return e ? e.replace(i.rules._escapes, "$1") : e;
                        }),
                        (i.prototype.outputLink = function (e, t) {
                            var n = t.href,
                                r = t.title ? c(t.title) : null;
                            return "!" !== e[0].charAt(0)
                                ? this.renderer.link(n, r, this.output(e[1]))
                                : this.renderer.image(n, r, c(e[1]));
                        }),
                        (i.prototype.smartypants = function (e) {
                            return this.options.smartypants
                                ? e
                                      .replace(/---/g, "\u2014")
                                      .replace(/--/g, "\u2013")
                                      .replace(
                                          /(^|[-\u2014/(\[{"\s])'/g,
                                          "$1\u2018"
                                      )
                                      .replace(/'/g, "\u2019")
                                      .replace(
                                          /(^|[-\u2014/(\[{\u2018\s])"/g,
                                          "$1\u201c"
                                      )
                                      .replace(/"/g, "\u201d")
                                      .replace(/\.{3}/g, "\u2026")
                                : e;
                        }),
                        (i.prototype.mangle = function (e) {
                            if (!this.options.mangle) return e;
                            for (var t, n = "", r = e.length, s = 0; s < r; s++)
                                (t = e.charCodeAt(s)),
                                    0.5 < Math.random() &&
                                        (t = "x" + t.toString(16)),
                                    (n += "&#" + t + ";");
                            return n;
                        }),
                        (l.prototype.code = function (e, t, n) {
                            var r = (t || "").match(/\S*/)[0];
                            if (this.options.highlight) {
                                var s = this.options.highlight(e, r);
                                null != s && s !== e && ((n = !0), (e = s));
                            }
                            return r
                                ? '<pre><code class="' +
                                      this.options.langPrefix +
                                      c(r, !0) +
                                      '">' +
                                      (n ? e : c(e, !0)) +
                                      "</code></pre>\n"
                                : "<pre><code>" +
                                      (n ? e : c(e, !0)) +
                                      "</code></pre>";
                        }),
                        (l.prototype.blockquote = function (e) {
                            return "<blockquote>\n" + e + "</blockquote>\n";
                        }),
                        (l.prototype.html = function (e) {
                            return e;
                        }),
                        (l.prototype.heading = function (e, t, n, r) {
                            return this.options.headerIds
                                ? "<h" +
                                      t +
                                      ' id="' +
                                      this.options.headerPrefix +
                                      r.slug(n) +
                                      '">' +
                                      e +
                                      "</h" +
                                      t +
                                      ">\n"
                                : "<h" + t + ">" + e + "</h" + t + ">\n";
                        }),
                        (l.prototype.hr = function () {
                            return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
                        }),
                        (l.prototype.list = function (e, t, n) {
                            var r = t ? "ol" : "ul";
                            return (
                                "<" +
                                r +
                                (t && 1 !== n ? ' start="' + n + '"' : "") +
                                ">\n" +
                                e +
                                "</" +
                                r +
                                ">\n"
                            );
                        }),
                        (l.prototype.listitem = function (e) {
                            return "<li>" + e + "</li>\n";
                        }),
                        (l.prototype.checkbox = function (e) {
                            return (
                                "<input " +
                                (e ? 'checked="" ' : "") +
                                'disabled="" type="checkbox"' +
                                (this.options.xhtml ? " /" : "") +
                                "> "
                            );
                        }),
                        (l.prototype.paragraph = function (e) {
                            return "<p>" + e + "</p>\n";
                        }),
                        (l.prototype.table = function (e, t) {
                            return (
                                t && (t = "<tbody>" + t + "</tbody>"),
                                "<table>\n<thead>\n" +
                                    e +
                                    "</thead>\n" +
                                    t +
                                    "</table>\n"
                            );
                        }),
                        (l.prototype.tablerow = function (e) {
                            return "<tr>\n" + e + "</tr>\n";
                        }),
                        (l.prototype.tablecell = function (e, t) {
                            var n = t.header ? "th" : "td";
                            return (
                                (t.align
                                    ? "<" + n + ' align="' + t.align + '">'
                                    : "<" + n + ">") +
                                e +
                                "</" +
                                n +
                                ">\n"
                            );
                        }),
                        (l.prototype.strong = function (e) {
                            return "<strong>" + e + "</strong>";
                        }),
                        (l.prototype.em = function (e) {
                            return "<em>" + e + "</em>";
                        }),
                        (l.prototype.codespan = function (e) {
                            return "<code>" + e + "</code>";
                        }),
                        (l.prototype.br = function () {
                            return this.options.xhtml ? "<br/>" : "<br>";
                        }),
                        (l.prototype.del = function (e) {
                            return "<del>" + e + "</del>";
                        }),
                        (l.prototype.link = function (e, t, n) {
                            if (
                                null ===
                                (e = g(
                                    this.options.sanitize,
                                    this.options.baseUrl,
                                    e
                                ))
                            )
                                return n;
                            var r = '<a href="' + c(e) + '"';
                            return (
                                t && (r += ' title="' + t + '"'),
                                r + ">" + n + "</a>"
                            );
                        }),
                        (l.prototype.image = function (e, t, n) {
                            if (
                                null ===
                                (e = g(
                                    this.options.sanitize,
                                    this.options.baseUrl,
                                    e
                                ))
                            )
                                return n;
                            var r = '<img src="' + e + '" alt="' + n + '"';
                            return (
                                t && (r += ' title="' + t + '"'),
                                r + (this.options.xhtml ? "/>" : ">")
                            );
                        }),
                        (l.prototype.text = function (e) {
                            return e;
                        }),
                        (a.prototype.strong = a.prototype.em = a.prototype.codespan = a.prototype.del = a.prototype.text = function (
                            e
                        ) {
                            return e;
                        }),
                        (a.prototype.link = a.prototype.image = function (
                            e,
                            t,
                            n
                        ) {
                            return "" + n;
                        }),
                        (a.prototype.br = function () {
                            return "";
                        }),
                        (o.parse = function (e, t) {
                            return new o(t).parse(e);
                        }),
                        (o.prototype.parse = function (e) {
                            (this.inline = new i(e.links, this.options)),
                                (this.inlineText = new i(
                                    e.links,
                                    b({}, this.options, { renderer: new a() })
                                )),
                                (this.tokens = e.reverse());
                            for (var t = ""; this.next(); ) t += this.tok();
                            return t;
                        }),
                        (o.prototype.next = function () {
                            return (this.token = this.tokens.pop());
                        }),
                        (o.prototype.peek = function () {
                            return this.tokens[this.tokens.length - 1] || 0;
                        }),
                        (o.prototype.parseText = function () {
                            for (
                                var e = this.token.text;
                                "text" === this.peek().type;

                            )
                                e += "\n" + this.next().text;
                            return this.inline.output(e);
                        }),
                        (o.prototype.tok = function () {
                            switch (this.token.type) {
                                case "space":
                                    return "";
                                case "hr":
                                    return this.renderer.hr();
                                case "heading":
                                    return this.renderer.heading(
                                        this.inline.output(this.token.text),
                                        this.token.depth,
                                        p(
                                            this.inlineText.output(
                                                this.token.text
                                            )
                                        ),
                                        this.slugger
                                    );
                                case "code":
                                    return this.renderer.code(
                                        this.token.text,
                                        this.token.lang,
                                        this.token.escaped
                                    );
                                case "table":
                                    var e,
                                        t,
                                        n,
                                        r,
                                        s = "",
                                        i = "";
                                    for (
                                        n = "", e = 0;
                                        e < this.token.header.length;
                                        e++
                                    )
                                        n += this.renderer.tablecell(
                                            this.inline.output(
                                                this.token.header[e]
                                            ),
                                            {
                                                header: !0,
                                                align: this.token.align[e],
                                            }
                                        );
                                    for (
                                        s += this.renderer.tablerow(n), e = 0;
                                        e < this.token.cells.length;
                                        e++
                                    ) {
                                        for (
                                            t = this.token.cells[e],
                                                n = "",
                                                r = 0;
                                            r < t.length;
                                            r++
                                        )
                                            n += this.renderer.tablecell(
                                                this.inline.output(t[r]),
                                                {
                                                    header: !1,
                                                    align: this.token.align[r],
                                                }
                                            );
                                        i += this.renderer.tablerow(n);
                                    }
                                    return this.renderer.table(s, i);
                                case "blockquote_start":
                                    for (
                                        i = "";
                                        "blockquote_end" !== this.next().type;

                                    )
                                        i += this.tok();
                                    return this.renderer.blockquote(i);
                                case "list_start":
                                    i = "";
                                    for (
                                        var l = this.token.ordered,
                                            a = this.token.start;
                                        "list_end" !== this.next().type;

                                    )
                                        i += this.tok();
                                    return this.renderer.list(i, l, a);
                                case "list_item_start":
                                    i = "";
                                    var o = this.token.loose,
                                        h = this.token.checked,
                                        c = this.token.task;
                                    for (
                                        this.token.task &&
                                        (i += this.renderer.checkbox(h));
                                        "list_item_end" !== this.next().type;

                                    )
                                        i +=
                                            o || "text" !== this.token.type
                                                ? this.tok()
                                                : this.parseText();
                                    return this.renderer.listitem(i, c, h);
                                case "html":
                                    return this.renderer.html(this.token.text);
                                case "paragraph":
                                    return this.renderer.paragraph(
                                        this.inline.output(this.token.text)
                                    );
                                case "text":
                                    return this.renderer.paragraph(
                                        this.parseText()
                                    );
                                default:
                                    var u =
                                        'Token with "' +
                                        this.token.type +
                                        '" type was not found.';
                                    if (!this.options.silent)
                                        throw new Error(u);
                            }
                        }),
                        (h.prototype.slug = function (e) {
                            var t = e
                                .toLowerCase()
                                .trim()
                                .replace(
                                    /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
                                    ""
                                )
                                .replace(/\s/g, "-");
                            if (this.seen.hasOwnProperty(t))
                                for (
                                    var n = t;
                                    this.seen[n]++,
                                        (t = n + "-" + this.seen[n]),
                                        this.seen.hasOwnProperty(t);

                                );
                            return (this.seen[t] = 0), t;
                        }),
                        (c.escapeTest = /[&<>"']/),
                        (c.escapeReplace = /[&<>"']/g),
                        (c.replacements = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                        }),
                        (c.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/),
                        (c.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g);
                    var f = {},
                        d = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
                    function m() {}
                    function b(e) {
                        for (var t, n, r = 1; r < arguments.length; r++)
                            for (n in (t = arguments[r]))
                                Object.prototype.hasOwnProperty.call(t, n) &&
                                    (e[n] = t[n]);
                        return e;
                    }
                    function k(e, t) {
                        var n = e
                                .replace(/\|/g, function (e, t, n) {
                                    for (
                                        var r = !1, s = t;
                                        0 <= --s && "\\" === n[s];

                                    )
                                        r = !r;
                                    return r ? "|" : " |";
                                })
                                .split(/ \|/),
                            r = 0;
                        if (n.length > t) n.splice(t);
                        else for (; n.length < t; ) n.push("");
                        for (; r < n.length; r++)
                            n[r] = n[r].trim().replace(/\\\|/g, "|");
                        return n;
                    }
                    function x(e, t, n) {
                        if (0 === e.length) return "";
                        for (var r = 0; r < e.length; ) {
                            var s = e.charAt(e.length - r - 1);
                            if (s !== t || n) {
                                if (s === t || !n) break;
                                r++;
                            } else r++;
                        }
                        return e.substr(0, e.length - r);
                    }
                    function y(e, t) {
                        if (-1 === e.indexOf(t[1])) return -1;
                        for (var n = 0, r = 0; r < e.length; r++)
                            if ("\\" === e[r]) r++;
                            else if (e[r] === t[0]) n++;
                            else if (e[r] === t[1] && --n < 0) return r;
                        return -1;
                    }
                    function _(e, t, n) {
                        if (null == e)
                            throw new Error(
                                "marked(): input parameter is undefined or null"
                            );
                        if ("string" != typeof e)
                            throw new Error(
                                "marked(): input parameter is of type " +
                                    Object.prototype.toString.call(e) +
                                    ", string expected"
                            );
                        if (n || "function" == typeof t) {
                            n || ((n = t), (t = null));
                            var s,
                                i,
                                l = (t = b({}, _.defaults, t || {})).highlight,
                                a = 0;
                            try {
                                s = r.lex(e, t);
                            } catch (e) {
                                return n(e);
                            }
                            i = s.length;
                            var h = function (e) {
                                if (e) return (t.highlight = l), n(e);
                                var r;
                                try {
                                    r = o.parse(s, t);
                                } catch (r) {
                                    e = r;
                                }
                                return (t.highlight = l), e ? n(e) : n(null, r);
                            };
                            if (!l || l.length < 3) return h();
                            if ((delete t.highlight, !i)) return h();
                            for (; a < s.length; a++)
                                !(function (e) {
                                    "code" !== e.type
                                        ? --i || h()
                                        : l(e.text, e.lang, function (t, n) {
                                              return t
                                                  ? h(t)
                                                  : null == n || n === e.text
                                                  ? --i || h()
                                                  : ((e.text = n),
                                                    (e.escaped = !0),
                                                    void (--i || h()));
                                          });
                                })(s[a]);
                        } else
                            try {
                                return (
                                    t && (t = b({}, _.defaults, t)),
                                    o.parse(r.lex(e, t), t)
                                );
                            } catch (e) {
                                if (
                                    ((e.message +=
                                        "\nPlease report this to https://github.com/markedjs/marked."),
                                    (t || _.defaults).silent)
                                )
                                    return (
                                        "<p>An error occurred:</p><pre>" +
                                        c(e.message + "", !0) +
                                        "</pre>"
                                    );
                                throw e;
                            }
                    }
                    (m.exec = m),
                        (_.options = _.setOptions = function (e) {
                            return b(_.defaults, e), _;
                        }),
                        (_.getDefaults = function () {
                            return {
                                baseUrl: null,
                                breaks: !1,
                                gfm: !0,
                                headerIds: !0,
                                headerPrefix: "",
                                highlight: null,
                                langPrefix: "language-",
                                mangle: !0,
                                pedantic: !1,
                                renderer: new l(),
                                sanitize: !1,
                                sanitizer: null,
                                silent: !1,
                                smartLists: !1,
                                smartypants: !1,
                                tables: !0,
                                xhtml: !1,
                            };
                        }),
                        (_.defaults = _.getDefaults()),
                        (_.Parser = o),
                        (_.parser = o.parse),
                        (_.Renderer = l),
                        (_.TextRenderer = a),
                        (_.Lexer = r),
                        (_.lexer = r.lex),
                        (_.InlineLexer = i),
                        (_.inlineLexer = i.output),
                        (_.Slugger = h),
                        (_.parse = _),
                        (e.exports = _);
                })(this || ("undefined" != typeof window && window));
            }.call(this, n(41)));
        },
    },
]);
