var parser = (function(t) {
  var e = {};
  function r(a) {
    if (e[a]) return e[a].exports;
    var i = (e[a] = {
      i: a,
      l: !1,
      exports: {}
    });
    return t[a].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  return (
    (r.m = t),
    (r.c = e),
    (r.d = function(t, e, a) {
      r.o(t, e) ||
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: a
        });
    }),
    (r.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, "default", {
          enumerable: !0,
          value: t
        }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          r.d(
            a,
            i,
            function(e) {
              return t[e];
            }.bind(null, i)
          );
      return a;
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 2))
  );
})([
  function(t, e, r) {
    "use strict";
    var a = function(t, e) {
      var r = e.exec(t);
      return !(null == r);
    };
    (e.isExist = function(t) {
      return void 0 !== t;
    }),
      (e.isEmptyObject = function(t) {
        return 0 === Object.keys(t).length;
      }),
      (e.merge = function(t, e) {
        if (e)
          for (var r = Object.keys(e), a = r.length, i = 0; i < a; i++)
            t[r[i]] = e[r[i]];
      }),
      (e.getValue = function(t) {
        return e.isExist(t) ? t : "";
      }),
      (e.buildOptions = function(t, e, r) {
        var a = {};
        if (!t) return e;
        for (var i = 0; i < r.length; i++)
          void 0 !== t[r[i]] ? (a[r[i]] = t[r[i]]) : (a[r[i]] = e[r[i]]);
        return a;
      }),
      (e.doesMatch = a),
      (e.doesNotMatch = function(t, e) {
        return !a(t, e);
      }),
      (e.getAllMatches = function(t, e) {
        for (var r = [], a = e.exec(t); a; ) {
          for (var i = [], n = a.length, s = 0; s < n; s++) i.push(a[s]);
          r.push(i), (a = e.exec(t));
        }
        return r;
      });
  },
  function(t, e, r) {
    "use strict";
    var a = r(0),
      i = r(0).buildOptions,
      n = r(4),
      s = {
        OPENING: 1,
        CLOSING: 2,
        SELF: 3,
        CDATA: 4
      },
      o =
        "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|(([\\w:\\-._]*:)?([\\w:\\-._]+))([^>]*)>|((\\/)(([\\w:\\-._]*:)?([\\w:\\-._]+))\\s*>))([^<]*)";
    !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt),
      !Number.parseFloat &&
        window.parseFloat &&
        (Number.parseFloat = window.parseFloat);
    var l = {
      attributeNamePrefix: "@_",
      attrNodeName: !1,
      textNodeName: "#text",
      ignoreAttributes: !0,
      ignoreNameSpace: !1,
      allowBooleanAttributes: !1,
      parseNodeValue: !0,
      parseAttributeValue: !1,
      arrayMode: !1,
      trimValues: !0,
      cdataTagName: !1,
      cdataPositionChar: "\\c",
      localeRange: "",
      tagValueProcessor: function(t) {
        return t;
      },
      attrValueProcessor: function(t) {
        return t;
      },
      stopNodes: []
    };
    e.defaultOptions = l;
    var u = [
      "attributeNamePrefix",
      "attrNodeName",
      "textNodeName",
      "ignoreAttributes",
      "ignoreNameSpace",
      "allowBooleanAttributes",
      "parseNodeValue",
      "parseAttributeValue",
      "arrayMode",
      "trimValues",
      "cdataTagName",
      "cdataPositionChar",
      "localeRange",
      "tagValueProcessor",
      "attrValueProcessor",
      "parseTrueNumberOnly",
      "stopNodes"
    ];
    e.props = u;
    function c(t, e) {
      return (
        t &&
          (e.trimValues && (t = t.trim()),
          (t = h(
            (t = e.tagValueProcessor(t)),
            e.parseNodeValue,
            e.parseTrueNumberOnly
          ))),
        t
      );
    }
    function d(t, e) {
      if (e.ignoreNameSpace) {
        var r = t.split(":"),
          a = "/" === t.charAt(0) ? "/" : "";
        if ("xmlns" === r[0]) return "";
        2 === r.length && (t = a + r[1]);
      }
      return t;
    }
    function h(t, e, r) {
      var i;
      return e && "string" == typeof t
        ? ("" === t.trim() || isNaN(t)
            ? (i = "true" === t || ("false" !== t && t))
            : ((i =
                -1 !== t.indexOf("0x")
                  ? Number.parseInt(t, 16)
                  : -1 !== t.indexOf(".")
                  ? Number.parseFloat(t)
                  : Number.parseInt(t, 10)),
              r && (i = String(i) === t ? i : t)),
          i)
        : a.isExist(t)
        ? t
        : "";
    }
    var f = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])(.*?)\\3)?", "g");
    function p(t, e) {
      if (!e.ignoreAttributes && "string" == typeof t) {
        t = t.replace(/\r?\n/g, " ");
        for (
          var r = a.getAllMatches(t, f), i = r.length, n = {}, s = 0;
          s < i;
          s++
        ) {
          var o = d(r[s][1], e);
          o.length &&
            (void 0 !== r[s][4]
              ? (e.trimValues && (r[s][4] = r[s][4].trim()),
                (r[s][4] = e.attrValueProcessor(r[s][4])),
                (n[e.attributeNamePrefix + o] = h(
                  r[s][4],
                  e.parseAttributeValue,
                  e.parseTrueNumberOnly
                )))
              : e.allowBooleanAttributes &&
                (n[e.attributeNamePrefix + o] = !0));
        }
        if (!Object.keys(n).length) return;
        if (e.attrNodeName) {
          var l = {};
          return (l[e.attrNodeName] = n), l;
        }
        return n;
      }
    }
    e.getTraversalObj = function(t, e) {
      (e = i(e, l, u)), (t = t.replace(/<!--[\s\S]*?-->/g, ""));
      var r = new n("!xml"),
        d = r;
      o = o.replace(/\[\\w/g, "[" + e.localeRange + "\\w");
      for (var h = new RegExp(o, "g"), f = h.exec(t), g = h.exec(t); f; ) {
        var v =
          "]]>" === (A = f)[4]
            ? s.CDATA
            : "/" === A[10]
            ? s.CLOSING
            : void 0 !== A[8] && "/" === A[8].substr(A[8].length - 1)
            ? s.SELF
            : s.OPENING;
        if (v === s.CLOSING)
          d.parent &&
            f[14] &&
            (d.parent.val = a.getValue(d.parent.val) + "" + c(f[14], e)),
            e.stopNodes.length &&
              e.stopNodes.includes(d.tagname) &&
              ((d.child = []),
              null == d.attrsMap && (d.attrsMap = {}),
              (d.val = t.substr(d.startIndex + 1, f.index - d.startIndex - 1))),
            (d = d.parent);
        else if (v === s.CDATA)
          if (e.cdataTagName) {
            var m = new n(e.cdataTagName, d, f[3]);
            (m.attrsMap = p(f[8], e)),
              d.addChild(m),
              (d.val = a.getValue(d.val) + e.cdataPositionChar),
              f[14] && (d.val += c(f[14], e));
          } else d.val = (d.val || "") + (f[3] || "") + c(f[14], e);
        else if (v === s.SELF) {
          d && f[14] && (d.val = a.getValue(d.val) + "" + c(f[14], e));
          var b = new n(e.ignoreNameSpace ? f[7] : f[5], d, "");
          f[8] && f[8].length > 0 && (f[8] = f[8].substr(0, f[8].length - 1)),
            (b.attrsMap = p(f[8], e)),
            d.addChild(b);
        } else {
          var N = new n(e.ignoreNameSpace ? f[7] : f[5], d, c(f[14], e));
          e.stopNodes.length &&
            e.stopNodes.includes(N.tagname) &&
            (N.startIndex = f.index + f[1].length),
            (N.attrsMap = p(f[8], e)),
            d.addChild(N),
            (d = N);
        }
        (f = g), (g = h.exec(t));
      }
      var A;
      return r;
    };
  },
  function(t, e, r) {
    "use strict";
    var a = r(3),
      i = r(1),
      n = r(1),
      s = r(0).buildOptions;
    (e.parse = function(t, e) {
      return (
        (e = s(e, n.defaultOptions, n.props)),
        a.convertToJson(i.getTraversalObj(t, e), e)
      );
    }),
      (e.convertTonimn = r(5).convert2nimn),
      (e.getTraversalObj = i.getTraversalObj),
      (e.convertToJson = a.convertToJson),
      (e.convertToJsonString = r(6).convertToJsonString),
      (e.validate = r(7).validate),
      (e.j2xParser = r(8)),
      (e.parseToNimn = function(t, r, a) {
        return e.convertTonimn(e.getTraversalObj(t, a), r, a);
      });
  },
  function(t, e, r) {
    "use strict";
    var a = r(0);
    e.convertToJson = function t(e, r) {
      var i = {};
      if (
        !(
          (e.child && !a.isEmptyObject(e.child)) ||
          (e.attrsMap && !a.isEmptyObject(e.attrsMap))
        )
      )
        return a.isExist(e.val) ? e.val : "";
      a.isExist(e.val) &&
        ("string" != typeof e.val ||
          ("" !== e.val && e.val !== r.cdataPositionChar)) &&
        (i[r.textNodeName] = e.val),
        a.merge(i, e.attrsMap);
      for (var n = Object.keys(e.child), s = 0; s < n.length; s++) {
        var o = n[s];
        if (e.child[o] && e.child[o].length > 1)
          for (var l in ((i[o] = []), e.child[o]))
            i[o].push(t(e.child[o][l], r));
        else i[o] = t(e.child[o][0], r);
      }
      return i;
    };
  },
  function(t, e, r) {
    "use strict";
    t.exports = function(t, e, r) {
      (this.tagname = t),
        (this.parent = e),
        (this.child = {}),
        (this.attrsMap = {}),
        (this.val = r),
        (this.addChild = function(t) {
          Array.isArray(this.child[t.tagname])
            ? this.child[t.tagname].push(t)
            : (this.child[t.tagname] = [t]);
        });
    };
  },
  function(t, e, r) {
    "use strict";
    var a = function(t) {
        return String.fromCharCode(t);
      },
      i = {
        nilChar: a(176),
        missingChar: a(201),
        nilPremitive: a(175),
        missingPremitive: a(200),
        emptyChar: a(178),
        emptyValue: a(177),
        boundryChar: a(179),
        objStart: a(198),
        arrStart: a(204),
        arrayEnd: a(185)
      },
      n = [
        i.nilChar,
        i.nilPremitive,
        i.missingChar,
        i.missingPremitive,
        i.boundryChar,
        i.emptyChar,
        i.emptyValue,
        i.arrayEnd,
        i.objStart,
        i.arrStart
      ],
      s = function t(e, r, a) {
        if ("string" == typeof r)
          return e && e[0] && void 0 !== e[0].val ? o(e[0].val, r) : o(e, r);
        var n,
          s =
            void 0 === (n = e)
              ? i.missingChar
              : null === n
              ? i.nilChar
              : !(
                  n.child &&
                  0 === Object.keys(n.child).length &&
                  (!n.attrsMap || 0 === Object.keys(n.attrsMap).length)
                ) || i.emptyChar;
        if (!0 === s) {
          var u = "";
          if (Array.isArray(r)) {
            u += i.arrStart;
            var c = r[0],
              d = e.length;
            if ("string" == typeof c)
              for (var h = 0; h < d; h++) {
                var f = o(e[h].val, c);
                u = l(u, f);
              }
            else
              for (var p = 0; p < d; p++) {
                var g = t(e[p], c, a);
                u = l(u, g);
              }
            u += i.arrayEnd;
          } else {
            u += i.objStart;
            var v = Object.keys(r);
            for (var m in (Array.isArray(e) && (e = e[0]), v)) {
              var b = v[m],
                N = void 0;
              (N =
                !a.ignoreAttributes && e.attrsMap && e.attrsMap[b]
                  ? t(e.attrsMap[b], r[b], a)
                  : b === a.textNodeName
                  ? t(e.val, r[b], a)
                  : t(e.child[b], r[b], a)),
                (u = l(u, N));
            }
          }
          return u;
        }
        return s;
      },
      o = function(t) {
        switch (t) {
          case void 0:
            return i.missingPremitive;
          case null:
            return i.nilPremitive;
          case "":
            return i.emptyValue;
          default:
            return t;
        }
      },
      l = function(t, e) {
        return u(e[0]) || u(t[t.length - 1]) || (t += i.boundryChar), t + e;
      },
      u = function(t) {
        return -1 !== n.indexOf(t);
      };
    var c = r(1),
      d = r(0).buildOptions;
    e.convert2nimn = function(t, e, r) {
      return (r = d(r, c.defaultOptions, c.props)), s(t, e, r);
    };
  },
  function(t, e, r) {
    "use strict";
    var a = r(0),
      i = r(0).buildOptions,
      n = r(1),
      s = function t(e, r, i) {
        for (
          var n, s = "{", o = Object.keys(e.child), l = 0;
          l < o.length;
          l++
        ) {
          var u = o[l];
          if (e.child[u] && e.child[u].length > 1) {
            for (var c in ((s += '"' + u + '" : [ '), e.child[u]))
              s += t(e.child[u][c], r) + " , ";
            s = s.substr(0, s.length - 1) + " ] ";
          } else s += '"' + u + '" : ' + t(e.child[u][0], r) + " ,";
        }
        return (
          a.merge(s, e.attrsMap),
          a.isEmptyObject(s)
            ? a.isExist(e.val)
              ? e.val
              : ""
            : (a.isExist(e.val) &&
                ("string" != typeof e.val ||
                  ("" !== e.val && e.val !== r.cdataPositionChar)) &&
                (s +=
                  '"' +
                  r.textNodeName +
                  '" : ' +
                  (!0 !== (n = e.val) && !1 !== n && isNaN(n)
                    ? '"' + n + '"'
                    : n)),
              "," === s[s.length - 1] && (s = s.substr(0, s.length - 2)),
              s + "}")
        );
      };
    e.convertToJsonString = function(t, e) {
      return (
        ((e = i(e, n.defaultOptions, n.props)).indentBy = e.indentBy || ""),
        s(t, e, 0)
      );
    };
  },
  function(t, e, r) {
    "use strict";
    var a = r(0),
      i = {
        allowBooleanAttributes: !1,
        localeRange: "a-zA-Z"
      },
      n = ["allowBooleanAttributes", "localeRange"];
    function s(t, e) {
      for (var r = e; e < t.length; e++)
        if ("?" != t[e] && " " != t[e]);
        else {
          var a = t.substr(r, e - r);
          if (e > 5 && "xml" === a)
            return {
              err: {
                code: "InvalidXml",
                msg:
                  "XML declaration allowed only at the start of the document."
              }
            };
          if ("?" == t[e] && ">" == t[e + 1]) {
            e++;
            break;
          }
        }
      return e;
    }
    function o(t, e) {
      if (t.length > e + 5 && "-" === t[e + 1] && "-" === t[e + 2]) {
        for (e += 3; e < t.length; e++)
          if ("-" === t[e] && "-" === t[e + 1] && ">" === t[e + 2]) {
            e += 2;
            break;
          }
      } else if (
        t.length > e + 8 &&
        "D" === t[e + 1] &&
        "O" === t[e + 2] &&
        "C" === t[e + 3] &&
        "T" === t[e + 4] &&
        "Y" === t[e + 5] &&
        "P" === t[e + 6] &&
        "E" === t[e + 7]
      ) {
        var r = 1;
        for (e += 8; e < t.length; e++)
          if ("<" === t[e]) r++;
          else if (">" === t[e] && 0 === --r) break;
      } else if (
        t.length > e + 9 &&
        "[" === t[e + 1] &&
        "C" === t[e + 2] &&
        "D" === t[e + 3] &&
        "A" === t[e + 4] &&
        "T" === t[e + 5] &&
        "A" === t[e + 6] &&
        "[" === t[e + 7]
      )
        for (e += 8; e < t.length; e++)
          if ("]" === t[e] && "]" === t[e + 1] && ">" === t[e + 2]) {
            e += 2;
            break;
          }
      return e;
    }
    e.validate = function(t, e) {
      e = a.buildOptions(e, i, n);
      var r = [],
        l = !1;
      "\ufeff" === t[0] && (t = t.substr(1));
      for (
        var u = new RegExp(
            "^[_w][\\w\\-.:]*$".replace("_w", "_" + e.localeRange)
          ),
          d = new RegExp(
            "^([w]|_)[\\w.\\-_:]*".replace("([w", "([" + e.localeRange)
          ),
          f = 0;
        f < t.length;
        f++
      ) {
        if ("<" !== t[f]) {
          if (" " === t[f] || "\t" === t[f] || "\n" === t[f] || "\r" === t[f])
            continue;
          return {
            err: {
              code: "InvalidChar",
              msg: "char " + t[f] + " is not expected ."
            }
          };
        }
        if ("?" === t[++f]) {
          if ((f = s(t, ++f)).err) return f;
        } else {
          if ("!" === t[f]) {
            f = o(t, f);
            continue;
          }
          var g = !1;
          "/" === t[f] && ((g = !0), f++);
          for (
            var v = "";
            f < t.length && ">" !== t[f] && " " !== t[f] && "\t" !== t[f];
            f++
          )
            v += t[f];
          if ("/" === (v = v.trim())[v.length - 1]) {
            v = v.substring(0, v.length - 1);
            continue;
          }
          if (!p(v, d))
            return {
              err: {
                code: "InvalidTag",
                msg: "Tag " + v + " is an invalid name."
              }
            };
          var m = c(t, f);
          if (!1 === m)
            return {
              err: {
                code: "InvalidAttr",
                msg: "Attributes for " + v + " have open quote"
              }
            };
          var b = m.value;
          if (((f = m.index), "/" === b[b.length - 1])) {
            var N = h((b = b.substring(0, b.length - 1)), e, u);
            if (!0 !== N) return N;
            l = !0;
          } else if (g) {
            if (b.trim().length > 0)
              return {
                err: {
                  code: "InvalidTag",
                  msg:
                    "closing tag " +
                    v +
                    " can't have attributes or invalid starting."
                }
              };
            var A = r.pop();
            if (v !== A)
              return {
                err: {
                  code: "InvalidTag",
                  msg: "closing tag " + A + " is expected inplace of " + v + "."
                }
              };
          } else {
            var x = h(b, e, u);
            if (!0 !== x) return x;
            r.push(v), (l = !0);
          }
          for (f++; f < t.length; f++)
            if ("<" === t[f]) {
              if ("!" === t[f + 1]) {
                f = o(t, ++f);
                continue;
              }
              break;
            }
          "<" === t[f] && f--;
        }
      }
      return l
        ? !(r.length > 0) || {
            err: {
              code: "InvalidXml",
              msg:
                "Invalid " +
                JSON.stringify(r, null, 4).replace(/\r?\n/g, "") +
                " found."
            }
          }
        : {
            err: {
              code: "InvalidXml",
              msg: "Start tag expected."
            }
          };
    };
    var l = '"',
      u = "'";
    function c(t, e) {
      for (var r = "", a = ""; e < t.length; e++) {
        if (t[e] === l || t[e] === u)
          if ("" === a) a = t[e];
          else {
            if (a !== t[e]) continue;
            a = "";
          }
        else if (">" === t[e] && "" === a) break;
        r += t[e];
      }
      return (
        "" === a && {
          value: r,
          index: e
        }
      );
    }
    var d = new RegExp(
      "(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?",
      "g"
    );
    function h(t, e, r) {
      for (var i = a.getAllMatches(t, d), n = {}, s = 0; s < i.length; s++) {
        if (0 === i[s][1].length)
          return {
            err: {
              code: "InvalidAttr",
              msg: "attribute " + i[s][2] + " has no space in starting."
            }
          };
        if (void 0 === i[s][3] && !e.allowBooleanAttributes)
          return {
            err: {
              code: "InvalidAttr",
              msg: "boolean attribute " + i[s][2] + " is not allowed."
            }
          };
        var o = i[s][2];
        if (!f(o, r))
          return {
            err: {
              code: "InvalidAttr",
              msg: "attribute " + o + " is an invalid name."
            }
          };
        if (n.hasOwnProperty(o))
          return {
            err: {
              code: "InvalidAttr",
              msg: "attribute " + o + " is repeated."
            }
          };
        n[o] = 1;
      }
      return !0;
    }
    function f(t, e) {
      return a.doesMatch(t, e);
    }
    function p(t, e) {
      return !a.doesNotMatch(t, e);
    }
  },
  function(t, e, r) {
    "use strict";
    class j2xParser {
      constructor(t) {
        (this.options = a(t, i, n)),
          this.options.ignoreAttributes || this.options.attrNodeName
            ? (this.isAttribute = function() {
                return !1;
              })
            : ((this.attrPrefixLen = this.options.attributeNamePrefix.length),
              (this.isAttribute = p)),
          this.options.cdataTagName
            ? (this.isCDATA = g)
            : (this.isCDATA = function() {
                return !1;
              }),
          (this.replaceCDATAstr = o),
          (this.replaceCDATAarr = l),
          this.options.format
            ? ((this.indentate = f),
              (this.tagEndChar = ">\n"),
              (this.newLine = "\n"))
            : ((this.indentate = function() {
                return "";
              }),
              (this.tagEndChar = ">"),
              (this.newLine = "")),
          this.options.supressEmptyNode
            ? ((this.buildTextNode = h), (this.buildObjNode = c))
            : ((this.buildTextNode = d), (this.buildObjNode = u)),
          (this.buildTextValNode = d),
          (this.buildObjectNode = u);
      }
      parse(t) {
        return this.j2x(t, 0).val;
      }
      j2x(t, e) {
        for (
          var r = "", a = "", i = Object.keys(t), n = i.length, s = 0;
          s < n;
          s++
        ) {
          var o = i[s];
          if (void 0 === t[o]);
          else if (null === t[o])
            a += this.indentate(e) + "<" + o + "/" + this.tagEndChar;
          else if ("object" != typeof t[o]) {
            var l = this.isAttribute(o);
            l
              ? (r +=
                  " " +
                  l +
                  '="' +
                  this.options.attrValueProcessor("" + t[o]) +
                  '"')
              : this.isCDATA(o)
              ? t[this.options.textNodeName]
                ? (a += this.replaceCDATAstr(
                    t[this.options.textNodeName],
                    t[o]
                  ))
                : (a += this.replaceCDATAstr("", t[o]))
              : o === this.options.textNodeName
              ? t[this.options.cdataTagName] ||
                (a += this.options.tagValueProcessor("" + t[o]))
              : (a += this.buildTextNode(t[o], o, "", e));
          } else if (Array.isArray(t[o]))
            if (this.isCDATA(o))
              (a += this.indentate(e)),
                t[this.options.textNodeName]
                  ? (a += this.replaceCDATAarr(
                      t[this.options.textNodeName],
                      t[o]
                    ))
                  : (a += this.replaceCDATAarr("", t[o]));
            else
              for (var u = t[o].length, c = 0; c < u; c++) {
                var d = t[o][c];
                if (void 0 === d);
                else if (null === d)
                  a += this.indentate(e) + "<" + o + "/" + this.tagEndChar;
                else if ("object" == typeof d) {
                  var h = this.j2x(d, e + 1);
                  a += this.buildObjNode(h.val, o, h.attrStr, e);
                } else a += this.buildTextNode(d, o, "", e);
              }
          else if (this.options.attrNodeName && o === this.options.attrNodeName)
            for (var f = Object.keys(t[o]), p = f.length, g = 0; g < p; g++)
              r +=
                " " +
                f[g] +
                '="' +
                this.options.attrValueProcessor("" + t[o][f[g]]) +
                '"';
          else {
            var v = this.j2x(t[o], e + 1);
            a += this.buildObjNode(v.val, o, v.attrStr, e);
          }
        }
        return {
          attrStr: r,
          val: a
        };
      }
    }
    var a = r(0).buildOptions,
      i = {
        attributeNamePrefix: "@_",
        attrNodeName: !1,
        textNodeName: "#text",
        ignoreAttributes: !0,
        cdataTagName: !1,
        cdataPositionChar: "\\c",
        format: !1,
        indentBy: "  ",
        supressEmptyNode: !1,
        tagValueProcessor: function(t) {
          return t;
        },
        attrValueProcessor: function(t) {
          return t;
        }
      },
      n = [
        "attributeNamePrefix",
        "attrNodeName",
        "textNodeName",
        "ignoreAttributes",
        "cdataTagName",
        "cdataPositionChar",
        "format",
        "indentBy",
        "supressEmptyNode",
        "tagValueProcessor",
        "attrValueProcessor"
      ];

    function o(t, e) {
      return (
        (t = this.options.tagValueProcessor("" + t)),
        "" === this.options.cdataPositionChar || "" === t
          ? t + "<![CDATA[" + e + "]]" + this.tagEndChar
          : t.replace(
              this.options.cdataPositionChar,
              "<![CDATA[" + e + "]]" + this.tagEndChar
            )
      );
    }
    function l(t, e) {
      if (
        ((t = this.options.tagValueProcessor("" + t)),
        "" === this.options.cdataPositionChar || "" === t)
      )
        return (
          t + "<![CDATA[" + e.join("]]><![CDATA[") + "]]" + this.tagEndChar
        );
      for (var r in e)
        t = t.replace(
          this.options.cdataPositionChar,
          "<![CDATA[" + e[r] + "]]>"
        );
      return t + this.newLine;
    }
    function u(t, e, r, a) {
      return r && !t.includes("<")
        ? this.indentate(a) + "<" + e + r + ">" + t + "</" + e + this.tagEndChar
        : this.indentate(a) +
            "<" +
            e +
            r +
            this.tagEndChar +
            t +
            this.indentate(a) +
            "</" +
            e +
            this.tagEndChar;
    }
    function c(t, e, r, a) {
      return "" !== t
        ? this.buildObjectNode(t, e, r, a)
        : this.indentate(a) + "<" + e + r + "/" + this.tagEndChar;
    }
    function d(t, e, r, a) {
      return (
        this.indentate(a) +
        "<" +
        e +
        r +
        ">" +
        this.options.tagValueProcessor("" + t) +
        "</" +
        e +
        this.tagEndChar
      );
    }
    function h(t, e, r, a) {
      return "" !== t
        ? this.buildTextValNode(t, e, r, a)
        : this.indentate(a) + "<" + e + r + "/" + this.tagEndChar;
    }
    function f(t) {
      return this.options.indentBy.repeat(t);
    }
    function p(t) {
      return (
        !!t.startsWith(this.options.attributeNamePrefix) &&
        t.substr(this.attrPrefixLen)
      );
    }
    function g(t) {
      return t === this.options.cdataTagName;
    }

    // ,

    // ,
    t.exports = (...argvs) => new j2xParser(...argvs);
  }
]);

/*
//# sourceMappingURL=parser.min.js.map
*/

exports.default = parser;

Object.keys(parser).forEach(key => {
  exports[key] = parser[key];
});
