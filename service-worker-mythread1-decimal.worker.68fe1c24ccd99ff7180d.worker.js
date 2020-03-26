!(function (n) {
    var e = {};
    function i(t) {
        if (e[t]) return e[t].exports;
        var r = (e[t] = { i: t, l: !1, exports: {} });
        return n[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
    }
    (i.m = n),
        (i.c = e),
        (i.d = function (n, e, t) {
            i.o(n, e) ||
                Object.defineProperty(n, e, { enumerable: !0, get: t });
        }),
        (i.r = function (n) {
            "undefined" !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(n, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(n, "__esModule", { value: !0 });
        }),
        (i.t = function (n, e) {
            if ((1 & e && (n = i(n)), 8 & e)) return n;
            if (4 & e && "object" === typeof n && n && n.__esModule) return n;
            var t = Object.create(null);
            if (
                (i.r(t),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: n,
                }),
                2 & e && "string" != typeof n)
            )
                for (var r in n)
                    i.d(
                        t,
                        r,
                        function (e) {
                            return n[e];
                        }.bind(null, r)
                    );
            return t;
        }),
        (i.n = function (n) {
            var e =
                n && n.__esModule
                    ? function () {
                          return n.default;
                      }
                    : function () {
                          return n;
                      };
            return i.d(e, "a", e), e;
        }),
        (i.o = function (n, e) {
            return Object.prototype.hasOwnProperty.call(n, e);
        }),
        (i.p = "./"),
        i((i.s = 1));
})([
    function (n, e, i) {
        "use strict";
        var t;
        !(function (r) {
            var s,
                o,
                u,
                c = 9e15,
                f = 1e9,
                a = "0123456789abcdef",
                l =
                    "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
                d =
                    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
                h = {
                    precision: 20,
                    rounding: 4,
                    modulo: 1,
                    toExpNeg: -7,
                    toExpPos: 21,
                    minE: -c,
                    maxE: c,
                    crypto: !1,
                },
                p = !0,
                g = "[DecimalError] ",
                m = g + "Invalid argument: ",
                w = g + "Precision limit exceeded",
                v = g + "crypto unavailable",
                N = Math.floor,
                b = Math.pow,
                x = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
                E = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
                y = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
                M = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                O = 1e7,
                q = l.length - 1,
                F = d.length - 1,
                P = { name: "[object Decimal]" };
            function A(n) {
                var e,
                    i,
                    t,
                    r = n.length - 1,
                    s = "",
                    o = n[0];
                if (0 < r) {
                    for (s += o, e = 1; e < r; e++)
                        (i = 7 - (t = n[e] + "").length) && (s += I(i)),
                            (s += t);
                    (i = 7 - (t = (o = n[e]) + "").length) && (s += I(i));
                } else if (0 === o) return "0";
                for (; o % 10 == 0; ) o /= 10;
                return s + o;
            }
            function D(n, e, i) {
                if (n !== ~~n || n < e || i < n) throw Error(m + n);
            }
            function _(n, e, i, t) {
                var r, s, o;
                for (s = n[0]; 10 <= s; s /= 10) --e;
                return (
                    --e < 0
                        ? ((e += 7), (r = 0))
                        : ((r = Math.ceil((e + 1) / 7)), (e %= 7)),
                    (s = b(10, 7 - e)),
                    (o = n[r] % s | 0),
                    null == t
                        ? e < 3
                            ? (0 == e
                                  ? (o = (o / 100) | 0)
                                  : 1 == e && (o = (o / 10) | 0),
                              (i < 4 && 99999 == o) ||
                                  (3 < i && 49999 == o) ||
                                  5e4 == o ||
                                  0 == o)
                            : (((i < 4 && o + 1 == s) ||
                                  (3 < i && o + 1 == s / 2)) &&
                                  ((n[r + 1] / s / 100) | 0) ==
                                      b(10, e - 2) - 1) ||
                              ((o == s / 2 || 0 == o) &&
                                  0 == ((n[r + 1] / s / 100) | 0))
                        : e < 4
                        ? (0 == e
                              ? (o = (o / 1e3) | 0)
                              : 1 == e
                              ? (o = (o / 100) | 0)
                              : 2 == e && (o = (o / 10) | 0),
                          ((t || i < 4) && 9999 == o) ||
                              (!t && 3 < i && 4999 == o))
                        : (((t || i < 4) && o + 1 == s) ||
                              (!t && 3 < i && o + 1 == s / 2)) &&
                          ((n[r + 1] / s / 1e3) | 0) == b(10, e - 3) - 1
                );
            }
            function Z(n, e, i) {
                for (var t, r, s = [0], o = 0, u = n.length; o < u; ) {
                    for (r = s.length; r--; ) s[r] *= e;
                    for (
                        s[0] += a.indexOf(n.charAt(o++)), t = 0;
                        t < s.length;
                        t++
                    )
                        s[t] > i - 1 &&
                            (void 0 === s[t + 1] && (s[t + 1] = 0),
                            (s[t + 1] += (s[t] / i) | 0),
                            (s[t] %= i));
                }
                return s.reverse();
            }
            (P.absoluteValue = P.abs = function () {
                var n = new this.constructor(this);
                return n.s < 0 && (n.s = 1), R(n);
            }),
                (P.ceil = function () {
                    return R(new this.constructor(this), this.e + 1, 2);
                }),
                (P.comparedTo = P.cmp = function (n) {
                    var e,
                        i,
                        t,
                        r,
                        s = this,
                        o = s.d,
                        u = (n = new s.constructor(n)).d,
                        c = s.s,
                        f = n.s;
                    if (!o || !u)
                        return c && f
                            ? c !== f
                                ? c
                                : o === u
                                ? 0
                                : !o ^ (c < 0)
                                ? 1
                                : -1
                            : NaN;
                    if (!o[0] || !u[0]) return o[0] ? c : u[0] ? -f : 0;
                    if (c !== f) return c;
                    if (s.e !== n.e) return (s.e > n.e) ^ (c < 0) ? 1 : -1;
                    for (
                        e = 0, i = (t = o.length) < (r = u.length) ? t : r;
                        e < i;
                        ++e
                    )
                        if (o[e] !== u[e])
                            return (o[e] > u[e]) ^ (c < 0) ? 1 : -1;
                    return t === r ? 0 : (r < t) ^ (c < 0) ? 1 : -1;
                }),
                (P.cosine = P.cos = function () {
                    var n,
                        e,
                        i = this,
                        t = i.constructor;
                    return i.d
                        ? i.d[0]
                            ? ((n = t.precision),
                              (e = t.rounding),
                              (t.precision = n + Math.max(i.e, i.sd()) + 7),
                              (t.rounding = 1),
                              (i = (function (n, e) {
                                  var i,
                                      t,
                                      r = e.d.length;
                                  (t =
                                      r < 32
                                          ? (
                                                1 / G(4, (i = Math.ceil(r / 3)))
                                            ).toString()
                                          : ((i = 16),
                                            "2.3283064365386962890625e-10")),
                                      (n.precision += i),
                                      (e = z(n, 1, e.times(t), new n(1)));
                                  for (var s = i; s--; ) {
                                      var o = e.times(e);
                                      e = o.times(o).minus(o).times(8).plus(1);
                                  }
                                  return (n.precision -= i), e;
                              })(t, K(t, i))),
                              (t.precision = n),
                              (t.rounding = e),
                              R(2 == u || 3 == u ? i.neg() : i, n, e, !0))
                            : new t(1)
                        : new t(NaN);
                }),
                (P.cubeRoot = P.cbrt = function () {
                    var n,
                        e,
                        i,
                        t,
                        r,
                        s,
                        o,
                        u,
                        c,
                        f,
                        a = this,
                        l = a.constructor;
                    if (!a.isFinite() || a.isZero()) return new l(a);
                    for (
                        p = !1,
                            (s = a.s * b(a.s * a, 1 / 3)) &&
                            Math.abs(s) != 1 / 0
                                ? (t = new l(s.toString()))
                                : ((i = A(a.d)),
                                  (s = ((n = a.e) - i.length + 1) % 3) &&
                                      (i += 1 == s || -2 == s ? "0" : "00"),
                                  (s = b(i, 1 / 3)),
                                  (n =
                                      N((n + 1) / 3) -
                                      (n % 3 == (n < 0 ? -1 : 2))),
                                  ((t = new l(
                                      (i =
                                          s == 1 / 0
                                              ? "5e" + n
                                              : (i = s.toExponential()).slice(
                                                    0,
                                                    i.indexOf("e") + 1
                                                ) + n)
                                  )).s = a.s)),
                            o = (n = l.precision) + 3;
                        ;

                    )
                        if (
                            ((f = (c = (u = t).times(u).times(u)).plus(a)),
                            (t = S(f.plus(a).times(u), f.plus(c), o + 2, 1)),
                            A(u.d).slice(0, o) === (i = A(t.d)).slice(0, o))
                        ) {
                            if (
                                "9999" != (i = i.slice(o - 3, o + 1)) &&
                                (r || "4999" != i)
                            ) {
                                (+i && (+i.slice(1) || "5" != i.charAt(0))) ||
                                    (R(t, n + 1, 1),
                                    (e = !t.times(t).times(t).eq(a)));
                                break;
                            }
                            if (
                                !r &&
                                (R(u, n + 1, 0), u.times(u).times(u).eq(a))
                            ) {
                                t = u;
                                break;
                            }
                            (o += 4), (r = 1);
                        }
                    return (p = !0), R(t, n, l.rounding, e);
                }),
                (P.decimalPlaces = P.dp = function () {
                    var n,
                        e = this.d,
                        i = NaN;
                    if (e) {
                        if (
                            ((i = 7 * ((n = e.length - 1) - N(this.e / 7))),
                            (n = e[n]))
                        )
                            for (; n % 10 == 0; n /= 10) i--;
                        i < 0 && (i = 0);
                    }
                    return i;
                }),
                (P.dividedBy = P.div = function (n) {
                    return S(this, new this.constructor(n));
                }),
                (P.dividedToIntegerBy = P.divToInt = function (n) {
                    var e = this.constructor;
                    return R(
                        S(this, new e(n), 0, 1, 1),
                        e.precision,
                        e.rounding
                    );
                }),
                (P.equals = P.eq = function (n) {
                    return 0 === this.cmp(n);
                }),
                (P.floor = function () {
                    return R(new this.constructor(this), this.e + 1, 3);
                }),
                (P.greaterThan = P.gt = function (n) {
                    return 0 < this.cmp(n);
                }),
                (P.greaterThanOrEqualTo = P.gte = function (n) {
                    var e = this.cmp(n);
                    return 1 == e || 0 === e;
                }),
                (P.hyperbolicCosine = P.cosh = function () {
                    var n,
                        e,
                        i,
                        t,
                        r,
                        s = this,
                        o = s.constructor,
                        u = new o(1);
                    if (!s.isFinite()) return new o(s.s ? 1 / 0 : NaN);
                    if (s.isZero()) return u;
                    (i = o.precision),
                        (t = o.rounding),
                        (o.precision = i + Math.max(s.e, s.sd()) + 4),
                        (o.rounding = 1),
                        (e =
                            (r = s.d.length) < 32
                                ? (1 / G(4, (n = Math.ceil(r / 3)))).toString()
                                : ((n = 16), "2.3283064365386962890625e-10")),
                        (s = z(o, 1, s.times(e), new o(1), !0));
                    for (var c, f = n, a = new o(8); f--; )
                        (c = s.times(s)),
                            (s = u.minus(c.times(a.minus(c.times(a)))));
                    return R(s, (o.precision = i), (o.rounding = t), !0);
                }),
                (P.hyperbolicSine = P.sinh = function () {
                    var n,
                        e,
                        i,
                        t,
                        r = this,
                        s = r.constructor;
                    if (!r.isFinite() || r.isZero()) return new s(r);
                    if (
                        ((e = s.precision),
                        (i = s.rounding),
                        (s.precision = e + Math.max(r.e, r.sd()) + 4),
                        (s.rounding = 1),
                        (t = r.d.length) < 3)
                    )
                        r = z(s, 2, r, r, !0);
                    else {
                        (n = 16 < (n = 1.4 * Math.sqrt(t)) ? 16 : 0 | n),
                            (r = z(s, 2, (r = r.times(1 / G(5, n))), r, !0));
                        for (
                            var o, u = new s(5), c = new s(16), f = new s(20);
                            n--;

                        )
                            (o = r.times(r)),
                                (r = r.times(
                                    u.plus(o.times(c.times(o).plus(f)))
                                ));
                    }
                    return R(r, (s.precision = e), (s.rounding = i), !0);
                }),
                (P.hyperbolicTangent = P.tanh = function () {
                    var n,
                        e,
                        i = this,
                        t = i.constructor;
                    return i.isFinite()
                        ? i.isZero()
                            ? new t(i)
                            : ((n = t.precision),
                              (e = t.rounding),
                              (t.precision = n + 7),
                              (t.rounding = 1),
                              S(
                                  i.sinh(),
                                  i.cosh(),
                                  (t.precision = n),
                                  (t.rounding = e)
                              ))
                        : new t(i.s);
                }),
                (P.inverseCosine = P.acos = function () {
                    var n,
                        e = this,
                        i = e.constructor,
                        t = e.abs().cmp(1),
                        r = i.precision,
                        s = i.rounding;
                    return -1 !== t
                        ? 0 === t
                            ? e.isNeg()
                                ? k(i, r, s)
                                : new i(0)
                            : new i(NaN)
                        : e.isZero()
                        ? k(i, r + 4, s).times(0.5)
                        : ((i.precision = r + 6),
                          (i.rounding = 1),
                          (e = e.asin()),
                          (n = k(i, r + 4, s).times(0.5)),
                          (i.precision = r),
                          (i.rounding = s),
                          n.minus(e));
                }),
                (P.inverseHyperbolicCosine = P.acosh = function () {
                    var n,
                        e,
                        i = this,
                        t = i.constructor;
                    return i.lte(1)
                        ? new t(i.eq(1) ? 0 : NaN)
                        : i.isFinite()
                        ? ((n = t.precision),
                          (e = t.rounding),
                          (t.precision =
                              n + Math.max(Math.abs(i.e), i.sd()) + 4),
                          (t.rounding = 1),
                          (p = !1),
                          (i = i.times(i).minus(1).sqrt().plus(i)),
                          (p = !0),
                          (t.precision = n),
                          (t.rounding = e),
                          i.ln())
                        : new t(i);
                }),
                (P.inverseHyperbolicSine = P.asinh = function () {
                    var n,
                        e,
                        i = this,
                        t = i.constructor;
                    return !i.isFinite() || i.isZero()
                        ? new t(i)
                        : ((n = t.precision),
                          (e = t.rounding),
                          (t.precision =
                              n + 2 * Math.max(Math.abs(i.e), i.sd()) + 6),
                          (t.rounding = 1),
                          (p = !1),
                          (i = i.times(i).plus(1).sqrt().plus(i)),
                          (p = !0),
                          (t.precision = n),
                          (t.rounding = e),
                          i.ln());
                }),
                (P.inverseHyperbolicTangent = P.atanh = function () {
                    var n,
                        e,
                        i,
                        t,
                        r = this,
                        s = r.constructor;
                    return r.isFinite()
                        ? 0 <= r.e
                            ? new s(
                                  r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN
                              )
                            : ((n = s.precision),
                              (e = s.rounding),
                              (t = r.sd()),
                              Math.max(t, n) < 2 * -r.e - 1
                                  ? R(new s(r), n, e, !0)
                                  : ((s.precision = i = t - r.e),
                                    (r = S(
                                        r.plus(1),
                                        new s(1).minus(r),
                                        i + n,
                                        1
                                    )),
                                    (s.precision = n + 4),
                                    (s.rounding = 1),
                                    (r = r.ln()),
                                    (s.precision = n),
                                    (s.rounding = e),
                                    r.times(0.5)))
                        : new s(NaN);
                }),
                (P.inverseSine = P.asin = function () {
                    var n,
                        e,
                        i,
                        t,
                        r = this,
                        s = r.constructor;
                    return r.isZero()
                        ? new s(r)
                        : ((e = r.abs().cmp(1)),
                          (i = s.precision),
                          (t = s.rounding),
                          -1 !== e
                              ? 0 === e
                                  ? (((n = k(s, i + 4, t).times(0.5)).s = r.s),
                                    n)
                                  : new s(NaN)
                              : ((s.precision = i + 6),
                                (s.rounding = 1),
                                (r = r
                                    .div(
                                        new s(1)
                                            .minus(r.times(r))
                                            .sqrt()
                                            .plus(1)
                                    )
                                    .atan()),
                                (s.precision = i),
                                (s.rounding = t),
                                r.times(2)));
                }),
                (P.inverseTangent = P.atan = function () {
                    var n,
                        e,
                        i,
                        t,
                        r,
                        s,
                        o,
                        u,
                        c,
                        f = this,
                        a = f.constructor,
                        l = a.precision,
                        d = a.rounding;
                    if (f.isFinite()) {
                        if (f.isZero()) return new a(f);
                        if (f.abs().eq(1) && l + 4 <= F)
                            return (
                                ((o = k(a, l + 4, d).times(0.25)).s = f.s), o
                            );
                    } else {
                        if (!f.s) return new a(NaN);
                        if (l + 4 <= F)
                            return ((o = k(a, l + 4, d).times(0.5)).s = f.s), o;
                    }
                    for (
                        a.precision = u = l + 10,
                            a.rounding = 1,
                            n = i = Math.min(28, (u / 7 + 2) | 0);
                        n;
                        --n
                    )
                        f = f.div(f.times(f).plus(1).sqrt().plus(1));
                    for (
                        p = !1,
                            e = Math.ceil(u / 7),
                            t = 1,
                            c = f.times(f),
                            o = new a(f),
                            r = f;
                        -1 !== n;

                    )
                        if (
                            ((r = r.times(c)),
                            (s = o.minus(r.div((t += 2)))),
                            (r = r.times(c)),
                            void 0 !== (o = s.plus(r.div((t += 2)))).d[e])
                        )
                            for (n = e; o.d[n] === s.d[n] && n--; );
                    return (
                        i && (o = o.times(2 << (i - 1))),
                        (p = !0),
                        R(o, (a.precision = l), (a.rounding = d), !0)
                    );
                }),
                (P.isFinite = function () {
                    return !!this.d;
                }),
                (P.isInteger = P.isInt = function () {
                    return !!this.d && N(this.e / 7) > this.d.length - 2;
                }),
                (P.isNaN = function () {
                    return !this.s;
                }),
                (P.isNegative = P.isNeg = function () {
                    return this.s < 0;
                }),
                (P.isPositive = P.isPos = function () {
                    return 0 < this.s;
                }),
                (P.isZero = function () {
                    return !!this.d && 0 === this.d[0];
                }),
                (P.lessThan = P.lt = function (n) {
                    return this.cmp(n) < 0;
                }),
                (P.lessThanOrEqualTo = P.lte = function (n) {
                    return this.cmp(n) < 1;
                }),
                (P.logarithm = P.log = function (n) {
                    var e,
                        i,
                        t,
                        r,
                        s,
                        o,
                        u,
                        c,
                        f = this,
                        a = f.constructor,
                        l = a.precision,
                        d = a.rounding;
                    if (null == n) (n = new a(10)), (e = !0);
                    else {
                        if (
                            ((i = (n = new a(n)).d),
                            n.s < 0 || !i || !i[0] || n.eq(1))
                        )
                            return new a(NaN);
                        e = n.eq(10);
                    }
                    if (((i = f.d), f.s < 0 || !i || !i[0] || f.eq(1)))
                        return new a(
                            i && !i[0] ? -1 / 0 : 1 != f.s ? NaN : i ? 0 : 1 / 0
                        );
                    if (e)
                        if (1 < i.length) s = !0;
                        else {
                            for (r = i[0]; r % 10 == 0; ) r /= 10;
                            s = 1 !== r;
                        }
                    if (
                        ((p = !1),
                        (o = $(f, (u = l + 5))),
                        (t = e ? U(a, u + 10) : $(n, u)),
                        _((c = S(o, t, u, 1)).d, (r = l), d))
                    )
                        do {
                            if (
                                ((o = $(f, (u += 10))),
                                (t = e ? U(a, u + 10) : $(n, u)),
                                (c = S(o, t, u, 1)),
                                !s)
                            ) {
                                +A(c.d).slice(r + 1, r + 15) + 1 == 1e14 &&
                                    (c = R(c, l + 1, 0));
                                break;
                            }
                        } while (_(c.d, (r += 10), d));
                    return (p = !0), R(c, l, d);
                }),
                (P.minus = P.sub = function (n) {
                    var e,
                        i,
                        t,
                        r,
                        s,
                        o,
                        u,
                        c,
                        f,
                        a,
                        l,
                        d,
                        h = this,
                        g = h.constructor;
                    if (((n = new g(n)), !h.d || !n.d))
                        return (
                            h.s && n.s
                                ? h.d
                                    ? (n.s = -n.s)
                                    : (n = new g(n.d || h.s !== n.s ? h : NaN))
                                : (n = new g(NaN)),
                            n
                        );
                    if (h.s != n.s) return (n.s = -n.s), h.plus(n);
                    if (
                        ((f = h.d),
                        (d = n.d),
                        (u = g.precision),
                        (c = g.rounding),
                        !f[0] || !d[0])
                    ) {
                        if (d[0]) n.s = -n.s;
                        else {
                            if (!f[0]) return new g(3 === c ? -0 : 0);
                            n = new g(h);
                        }
                        return p ? R(n, u, c) : n;
                    }
                    if (
                        ((i = N(n.e / 7)),
                        (a = N(h.e / 7)),
                        (f = f.slice()),
                        (s = a - i))
                    ) {
                        for (
                            o = (l = s < 0)
                                ? ((e = f), (s = -s), d.length)
                                : ((e = d), (i = a), f.length),
                                (t = Math.max(Math.ceil(u / 7), o) + 2) < s &&
                                    ((s = t), (e.length = 1)),
                                e.reverse(),
                                t = s;
                            t--;

                        )
                            e.push(0);
                        e.reverse();
                    } else {
                        for (
                            (l = (t = f.length) < (o = d.length)) && (o = t),
                                t = 0;
                            t < o;
                            t++
                        )
                            if (f[t] != d[t]) {
                                l = f[t] < d[t];
                                break;
                            }
                        s = 0;
                    }
                    for (
                        l && ((e = f), (f = d), (d = e), (n.s = -n.s)),
                            o = f.length,
                            t = d.length - o;
                        0 < t;
                        --t
                    )
                        f[o++] = 0;
                    for (t = d.length; s < t; ) {
                        if (f[--t] < d[t]) {
                            for (r = t; r && 0 === f[--r]; ) f[r] = O - 1;
                            --f[r], (f[t] += O);
                        }
                        f[t] -= d[t];
                    }
                    for (; 0 === f[--o]; ) f.pop();
                    for (; 0 === f[0]; f.shift()) --i;
                    return f[0]
                        ? ((n.d = f), (n.e = T(f, i)), p ? R(n, u, c) : n)
                        : new g(3 === c ? -0 : 0);
                }),
                (P.modulo = P.mod = function (n) {
                    var e,
                        i = this,
                        t = i.constructor;
                    return (
                        (n = new t(n)),
                        !i.d || !n.s || (n.d && !n.d[0])
                            ? new t(NaN)
                            : !n.d || (i.d && !i.d[0])
                            ? R(new t(i), t.precision, t.rounding)
                            : ((p = !1),
                              9 == t.modulo
                                  ? ((e = S(i, n.abs(), 0, 3, 1)).s *= n.s)
                                  : (e = S(i, n, 0, t.modulo, 1)),
                              (e = e.times(n)),
                              (p = !0),
                              i.minus(e))
                    );
                }),
                (P.naturalExponential = P.exp = function () {
                    return V(this);
                }),
                (P.naturalLogarithm = P.ln = function () {
                    return $(this);
                }),
                (P.negated = P.neg = function () {
                    var n = new this.constructor(this);
                    return (n.s = -n.s), R(n);
                }),
                (P.plus = P.add = function (n) {
                    var e,
                        i,
                        t,
                        r,
                        s,
                        o,
                        u,
                        c,
                        f,
                        a,
                        l = this,
                        d = l.constructor;
                    if (((n = new d(n)), !l.d || !n.d))
                        return (
                            l.s && n.s
                                ? l.d ||
                                  (n = new d(n.d || l.s === n.s ? l : NaN))
                                : (n = new d(NaN)),
                            n
                        );
                    if (l.s != n.s) return (n.s = -n.s), l.minus(n);
                    if (
                        ((f = l.d),
                        (a = n.d),
                        (u = d.precision),
                        (c = d.rounding),
                        !f[0] || !a[0])
                    )
                        return a[0] || (n = new d(l)), p ? R(n, u, c) : n;
                    if (
                        ((s = N(l.e / 7)),
                        (t = N(n.e / 7)),
                        (f = f.slice()),
                        (r = s - t))
                    ) {
                        for (
                            (o =
                                (o =
                                    r < 0
                                        ? ((i = f), (r = -r), a.length)
                                        : ((i = a), (t = s), f.length)) <
                                (s = Math.ceil(u / 7))
                                    ? s + 1
                                    : o + 1) < r && ((r = o), (i.length = 1)),
                                i.reverse();
                            r--;

                        )
                            i.push(0);
                        i.reverse();
                    }
                    for (
                        (o = f.length) - (r = a.length) < 0 &&
                            ((r = o), (i = a), (a = f), (f = i)),
                            e = 0;
                        r;

                    )
                        (e = ((f[--r] = f[r] + a[r] + e) / O) | 0), (f[r] %= O);
                    for (e && (f.unshift(e), ++t), o = f.length; 0 == f[--o]; )
                        f.pop();
                    return (n.d = f), (n.e = T(f, t)), p ? R(n, u, c) : n;
                }),
                (P.precision = P.sd = function (n) {
                    var e;
                    if (void 0 !== n && n !== !!n && 1 !== n && 0 !== n)
                        throw Error(m + n);
                    return (
                        this.d
                            ? ((e = j(this.d)),
                              n && this.e + 1 > e && (e = this.e + 1))
                            : (e = NaN),
                        e
                    );
                }),
                (P.round = function () {
                    var n = this.constructor;
                    return R(new n(this), this.e + 1, n.rounding);
                }),
                (P.sine = P.sin = function () {
                    var n,
                        e,
                        i = this,
                        t = i.constructor;
                    return i.isFinite()
                        ? i.isZero()
                            ? new t(i)
                            : ((n = t.precision),
                              (e = t.rounding),
                              (t.precision = n + Math.max(i.e, i.sd()) + 7),
                              (t.rounding = 1),
                              (i = (function (n, e) {
                                  var i,
                                      t = e.d.length;
                                  if (t < 3) return z(n, 2, e, e);
                                  (i =
                                      16 < (i = 1.4 * Math.sqrt(t))
                                          ? 16
                                          : 0 | i),
                                      (e = z(
                                          n,
                                          2,
                                          (e = e.times(1 / G(5, i))),
                                          e
                                      ));
                                  for (
                                      var r,
                                          s = new n(5),
                                          o = new n(16),
                                          u = new n(20);
                                      i--;

                                  )
                                      (r = e.times(e)),
                                          (e = e.times(
                                              s.plus(
                                                  r.times(o.times(r).minus(u))
                                              )
                                          ));
                                  return e;
                              })(t, K(t, i))),
                              (t.precision = n),
                              (t.rounding = e),
                              R(2 < u ? i.neg() : i, n, e, !0))
                        : new t(NaN);
                }),
                (P.squareRoot = P.sqrt = function () {
                    var n,
                        e,
                        i,
                        t,
                        r,
                        s,
                        o = this,
                        u = o.d,
                        c = o.e,
                        f = o.s,
                        a = o.constructor;
                    if (1 !== f || !u || !u[0])
                        return new a(
                            !f || (f < 0 && (!u || u[0])) ? NaN : u ? o : 1 / 0
                        );
                    for (
                        p = !1,
                            t =
                                0 == (f = Math.sqrt(+o)) || f == 1 / 0
                                    ? (((e = A(u)).length + c) % 2 == 0 &&
                                          (e += "0"),
                                      (f = Math.sqrt(e)),
                                      (c = N((c + 1) / 2) - (c < 0 || c % 2)),
                                      new a(
                                          (e =
                                              f == 1 / 0
                                                  ? "1e" + c
                                                  : (e = f.toExponential()).slice(
                                                        0,
                                                        e.indexOf("e") + 1
                                                    ) + c)
                                      ))
                                    : new a(f.toString()),
                            i = (c = a.precision) + 3;
                        ;

                    )
                        if (
                            ((t = (s = t).plus(S(o, s, i + 2, 1)).times(0.5)),
                            A(s.d).slice(0, i) === (e = A(t.d)).slice(0, i))
                        ) {
                            if (
                                "9999" != (e = e.slice(i - 3, i + 1)) &&
                                (r || "4999" != e)
                            ) {
                                (+e && (+e.slice(1) || "5" != e.charAt(0))) ||
                                    (R(t, c + 1, 1), (n = !t.times(t).eq(o)));
                                break;
                            }
                            if (!r && (R(s, c + 1, 0), s.times(s).eq(o))) {
                                t = s;
                                break;
                            }
                            (i += 4), (r = 1);
                        }
                    return (p = !0), R(t, c, a.rounding, n);
                }),
                (P.tangent = P.tan = function () {
                    var n,
                        e,
                        i = this,
                        t = i.constructor;
                    return i.isFinite()
                        ? i.isZero()
                            ? new t(i)
                            : ((n = t.precision),
                              (e = t.rounding),
                              (t.precision = n + 10),
                              (t.rounding = 1),
                              ((i = i.sin()).s = 1),
                              (i = S(
                                  i,
                                  new t(1).minus(i.times(i)).sqrt(),
                                  n + 10,
                                  0
                              )),
                              (t.precision = n),
                              (t.rounding = e),
                              R(2 == u || 4 == u ? i.neg() : i, n, e, !0))
                        : new t(NaN);
                }),
                (P.times = P.mul = function (n) {
                    var e,
                        i,
                        t,
                        r,
                        s,
                        o,
                        u,
                        c,
                        f,
                        a = this.constructor,
                        l = this.d,
                        d = (n = new a(n)).d;
                    if (((n.s *= this.s), !(l && l[0] && d && d[0])))
                        return new a(
                            !n.s || (l && !l[0] && !d) || (d && !d[0] && !l)
                                ? NaN
                                : l && d
                                ? 0 * n.s
                                : n.s / 0
                        );
                    for (
                        i = N(this.e / 7) + N(n.e / 7),
                            (c = l.length) < (f = d.length) &&
                                ((s = l),
                                (l = d),
                                (d = s),
                                (o = c),
                                (c = f),
                                (f = o)),
                            s = [],
                            t = o = c + f;
                        t--;

                    )
                        s.push(0);
                    for (t = f; 0 <= --t; ) {
                        for (e = 0, r = c + t; t < r; )
                            (u = s[r] + d[t] * l[r - t - 1] + e),
                                (s[r--] = u % O | 0),
                                (e = (u / O) | 0);
                        s[r] = (s[r] + e) % O | 0;
                    }
                    for (; !s[--o]; ) s.pop();
                    return (
                        e ? ++i : s.shift(),
                        (n.d = s),
                        (n.e = T(s, i)),
                        p ? R(n, a.precision, a.rounding) : n
                    );
                }),
                (P.toBinary = function (n, e) {
                    return Q(this, 2, n, e);
                }),
                (P.toDecimalPlaces = P.toDP = function (n, e) {
                    var i = this,
                        t = i.constructor;
                    return (
                        (i = new t(i)),
                        void 0 === n
                            ? i
                            : (D(n, 0, f),
                              void 0 === e ? (e = t.rounding) : D(e, 0, 8),
                              R(i, n + i.e + 1, e))
                    );
                }),
                (P.toExponential = function (n, e) {
                    var i,
                        t = this,
                        r = t.constructor;
                    return (
                        (i =
                            void 0 === n
                                ? L(t, !0)
                                : (D(n, 0, f),
                                  void 0 === e ? (e = r.rounding) : D(e, 0, 8),
                                  L((t = R(new r(t), n + 1, e)), !0, n + 1))),
                        t.isNeg() && !t.isZero() ? "-" + i : i
                    );
                }),
                (P.toFixed = function (n, e) {
                    var i,
                        t,
                        r = this,
                        s = r.constructor;
                    return (
                        (i =
                            void 0 === n
                                ? L(r)
                                : (D(n, 0, f),
                                  void 0 === e ? (e = s.rounding) : D(e, 0, 8),
                                  L(
                                      (t = R(new s(r), n + r.e + 1, e)),
                                      !1,
                                      n + t.e + 1
                                  ))),
                        r.isNeg() && !r.isZero() ? "-" + i : i
                    );
                }),
                (P.toFraction = function (n) {
                    var e,
                        i,
                        t,
                        r,
                        s,
                        o,
                        u,
                        c,
                        f,
                        a,
                        l,
                        d,
                        h = this,
                        g = h.d,
                        w = h.constructor;
                    if (!g) return new w(h);
                    if (
                        ((f = i = new w(1)),
                        (o =
                            (s = (e = new w((t = c = new w(0)))).e =
                                j(g) - h.e - 1) % 7),
                        (e.d[0] = b(10, o < 0 ? 7 + o : o)),
                        null == n)
                    )
                        n = 0 < s ? e : f;
                    else {
                        if (!(u = new w(n)).isInt() || u.lt(f))
                            throw Error(m + u);
                        n = u.gt(e) ? (0 < s ? e : f) : u;
                    }
                    for (
                        p = !1,
                            u = new w(A(g)),
                            a = w.precision,
                            w.precision = s = 7 * g.length * 2;
                        (l = S(u, e, 0, 1, 1)),
                            1 != (r = i.plus(l.times(t))).cmp(n);

                    )
                        (i = t),
                            (t = r),
                            (r = f),
                            (f = c.plus(l.times(r))),
                            (c = r),
                            (r = e),
                            (e = u.minus(l.times(r))),
                            (u = r);
                    return (
                        (r = S(n.minus(i), t, 0, 1, 1)),
                        (c = c.plus(r.times(f))),
                        (i = i.plus(r.times(t))),
                        (c.s = f.s = h.s),
                        (d =
                            S(f, t, s, 1)
                                .minus(h)
                                .abs()
                                .cmp(S(c, i, s, 1).minus(h).abs()) < 1
                                ? [f, t]
                                : [c, i]),
                        (w.precision = a),
                        (p = !0),
                        d
                    );
                }),
                (P.toHexadecimal = P.toHex = function (n, e) {
                    return Q(this, 16, n, e);
                }),
                (P.toNearest = function (n, e) {
                    var i = this,
                        t = i.constructor;
                    if (((i = new t(i)), null == n)) {
                        if (!i.d) return i;
                        (n = new t(1)), (e = t.rounding);
                    } else {
                        if (
                            ((n = new t(n)),
                            void 0 === e ? (e = t.rounding) : D(e, 0, 8),
                            !i.d)
                        )
                            return n.s ? i : n;
                        if (!n.d) return n.s && (n.s = i.s), n;
                    }
                    return (
                        n.d[0]
                            ? ((p = !1),
                              (i = S(i, n, 0, e, 1).times(n)),
                              (p = !0),
                              R(i))
                            : ((n.s = i.s), (i = n)),
                        i
                    );
                }),
                (P.toNumber = function () {
                    return +this;
                }),
                (P.toOctal = function (n, e) {
                    return Q(this, 8, n, e);
                }),
                (P.toPower = P.pow = function (n) {
                    var e,
                        i,
                        t,
                        r,
                        s,
                        o,
                        u = this,
                        c = u.constructor,
                        f = +(n = new c(n));
                    if (!(u.d && n.d && u.d[0] && n.d[0]))
                        return new c(b(+u, f));
                    if ((u = new c(u)).eq(1)) return u;
                    if (((t = c.precision), (s = c.rounding), n.eq(1)))
                        return R(u, t, s);
                    if (
                        (e = N(n.e / 7)) >= n.d.length - 1 &&
                        (i = f < 0 ? -f : f) <= 9007199254740991
                    )
                        return (
                            (r = C(c, u, i, t)),
                            n.s < 0 ? new c(1).div(r) : R(r, t, s)
                        );
                    if ((o = u.s) < 0) {
                        if (e < n.d.length - 1) return new c(NaN);
                        if (
                            (0 == (1 & n.d[e]) && (o = 1),
                            0 == u.e && 1 == u.d[0] && 1 == u.d.length)
                        )
                            return (u.s = o), u;
                    }
                    return (e =
                        0 != (i = b(+u, f)) && isFinite(i)
                            ? new c(i + "").e
                            : N(
                                  f *
                                      (Math.log("0." + A(u.d)) / Math.LN10 +
                                          u.e +
                                          1)
                              )) >
                        c.maxE + 1 || e < c.minE - 1
                        ? new c(0 < e ? o / 0 : 0)
                        : ((p = !1),
                          (c.rounding = u.s = 1),
                          (i = Math.min(12, (e + "").length)),
                          (r = V(n.times($(u, t + i)), t)).d &&
                              _((r = R(r, t + 5, 1)).d, t, s) &&
                              ((e = t + 10),
                              +A(
                                  (r = R(V(n.times($(u, e + i)), e), e + 5, 1))
                                      .d
                              ).slice(t + 1, t + 15) +
                                  1 ==
                                  1e14 && (r = R(r, t + 1, 0))),
                          (r.s = o),
                          (p = !0),
                          R(r, t, (c.rounding = s)));
                }),
                (P.toPrecision = function (n, e) {
                    var i,
                        t = this,
                        r = t.constructor;
                    return (
                        (i =
                            void 0 === n
                                ? L(t, t.e <= r.toExpNeg || t.e >= r.toExpPos)
                                : (D(n, 1, f),
                                  void 0 === e ? (e = r.rounding) : D(e, 0, 8),
                                  L(
                                      (t = R(new r(t), n, e)),
                                      n <= t.e || t.e <= r.toExpNeg,
                                      n
                                  ))),
                        t.isNeg() && !t.isZero() ? "-" + i : i
                    );
                }),
                (P.toSignificantDigits = P.toSD = function (n, e) {
                    var i = this.constructor;
                    return (
                        void 0 === n
                            ? ((n = i.precision), (e = i.rounding))
                            : (D(n, 1, f),
                              void 0 === e ? (e = i.rounding) : D(e, 0, 8)),
                        R(new i(this), n, e)
                    );
                }),
                (P.toString = function () {
                    var n = this,
                        e = n.constructor,
                        i = L(n, n.e <= e.toExpNeg || n.e >= e.toExpPos);
                    return n.isNeg() && !n.isZero() ? "-" + i : i;
                }),
                (P.truncated = P.trunc = function () {
                    return R(new this.constructor(this), this.e + 1, 1);
                }),
                (P.valueOf = P.toJSON = function () {
                    var n = this,
                        e = n.constructor,
                        i = L(n, n.e <= e.toExpNeg || n.e >= e.toExpPos);
                    return n.isNeg() ? "-" + i : i;
                });
            var S = (function () {
                function n(n, e, i) {
                    var t,
                        r = 0,
                        s = n.length;
                    for (n = n.slice(); s--; )
                        (t = n[s] * e + r),
                            (n[s] = t % i | 0),
                            (r = (t / i) | 0);
                    return r && n.unshift(r), n;
                }
                function e(n, e, i, t) {
                    var r, s;
                    if (i != t) s = t < i ? 1 : -1;
                    else
                        for (r = s = 0; r < i; r++)
                            if (n[r] != e[r]) {
                                s = n[r] > e[r] ? 1 : -1;
                                break;
                            }
                    return s;
                }
                function i(n, e, i, t) {
                    for (var r = 0; i--; )
                        (n[i] -= r),
                            (r = n[i] < e[i] ? 1 : 0),
                            (n[i] = r * t + n[i] - e[i]);
                    for (; !n[0] && 1 < n.length; ) n.shift();
                }
                return function (t, r, s, u, c, f) {
                    var a,
                        l,
                        d,
                        h,
                        p,
                        g,
                        m,
                        w,
                        v,
                        b,
                        x,
                        E,
                        y,
                        M,
                        q,
                        F,
                        P,
                        A,
                        D,
                        _,
                        Z = t.constructor,
                        S = t.s == r.s ? 1 : -1,
                        L = t.d,
                        T = r.d;
                    if (!(L && L[0] && T && T[0]))
                        return new Z(
                            t.s && r.s && (L ? !T || L[0] != T[0] : T)
                                ? (L && 0 == L[0]) || !T
                                    ? 0 * S
                                    : S / 0
                                : NaN
                        );
                    for (
                        l = f
                            ? ((p = 1), t.e - r.e)
                            : ((f = O), (p = 7), N(t.e / p) - N(r.e / p)),
                            D = T.length,
                            P = L.length,
                            b = (v = new Z(S)).d = [],
                            d = 0;
                        T[d] == (L[d] || 0);
                        d++
                    );
                    if (
                        (T[d] > (L[d] || 0) && l--,
                        null == s
                            ? ((M = s = Z.precision), (u = Z.rounding))
                            : (M = c ? s + (t.e - r.e) + 1 : s),
                        M < 0)
                    )
                        b.push(1), (g = !0);
                    else {
                        if (((M = (M / p + 2) | 0), (d = 0), 1 == D)) {
                            for (T = T[(h = 0)], M++; (d < P || h) && M--; d++)
                                (q = h * f + (L[d] || 0)),
                                    (b[d] = (q / T) | 0),
                                    (h = q % T | 0);
                            g = h || d < P;
                        } else {
                            for (
                                1 < (h = (f / (T[0] + 1)) | 0) &&
                                    ((T = n(T, h, f)),
                                    (L = n(L, h, f)),
                                    (D = T.length),
                                    (P = L.length)),
                                    F = D,
                                    E = (x = L.slice(0, D)).length;
                                E < D;

                            )
                                x[E++] = 0;
                            for (
                                (_ = T.slice()).unshift(0),
                                    A = T[0],
                                    T[1] >= f / 2 && ++A;
                                (h = 0),
                                    (a = e(T, x, D, E)) < 0
                                        ? ((y = x[0]),
                                          D != E && (y = y * f + (x[1] || 0)),
                                          1 < (h = (y / A) | 0)
                                              ? (f <= h && (h = f - 1),
                                                1 ==
                                                    (a = e(
                                                        (m = n(T, h, f)),
                                                        x,
                                                        (w = m.length),
                                                        (E = x.length)
                                                    )) &&
                                                    (h--,
                                                    i(m, D < w ? _ : T, w, f)))
                                              : (0 == h && (a = h = 1),
                                                (m = T.slice())),
                                          (w = m.length) < E && m.unshift(0),
                                          i(x, m, E, f),
                                          -1 == a &&
                                              (a = e(T, x, D, (E = x.length))) <
                                                  1 &&
                                              (h++, i(x, D < E ? _ : T, E, f)),
                                          (E = x.length))
                                        : 0 === a && (h++, (x = [0])),
                                    (b[d++] = h),
                                    a && x[0]
                                        ? (x[E++] = L[F] || 0)
                                        : ((x = [L[F]]), (E = 1)),
                                    (F++ < P || void 0 !== x[0]) && M--;

                            );
                            g = void 0 !== x[0];
                        }
                        b[0] || b.shift();
                    }
                    if (1 == p) (v.e = l), (o = g);
                    else {
                        for (d = 1, h = b[0]; 10 <= h; h /= 10) d++;
                        (v.e = d + l * p - 1), R(v, c ? s + v.e + 1 : s, u, g);
                    }
                    return v;
                };
            })();
            function R(n, e, i, t) {
                var r,
                    s,
                    o,
                    u,
                    c,
                    f,
                    a,
                    l,
                    d,
                    h = n.constructor;
                n: if (null != e) {
                    if (!(l = n.d)) return n;
                    for (r = 1, u = l[0]; 10 <= u; u /= 10) r++;
                    if ((s = e - r) < 0)
                        (s += 7),
                            (o = e),
                            (c =
                                ((a = l[(d = 0)]) / b(10, r - o - 1)) % 10 | 0);
                    else if (
                        ((d = Math.ceil((s + 1) / 7)), (u = l.length) <= d)
                    ) {
                        if (!t) break n;
                        for (; u++ <= d; ) l.push(0);
                        (a = c = 0), (o = (s %= 7) - 7 + (r = 1));
                    } else {
                        for (a = u = l[d], r = 1; 10 <= u; u /= 10) r++;
                        c =
                            (o = (s %= 7) - 7 + r) < 0
                                ? 0
                                : (a / b(10, r - o - 1)) % 10 | 0;
                    }
                    if (
                        ((t =
                            t ||
                            e < 0 ||
                            void 0 !== l[d + 1] ||
                            (o < 0 ? a : a % b(10, r - o - 1))),
                        (f =
                            i < 4
                                ? (c || t) && (0 == i || i == (n.s < 0 ? 3 : 2))
                                : 5 < c ||
                                  (5 == c &&
                                      (4 == i ||
                                          t ||
                                          (6 == i &&
                                              (0 < s
                                                  ? 0 < o
                                                      ? a / b(10, r - o)
                                                      : 0
                                                  : l[d - 1]) %
                                                  10 &
                                                  1) ||
                                          i == (n.s < 0 ? 8 : 7)))),
                        e < 1 || !l[0])
                    )
                        return (
                            (l.length = 0),
                            f
                                ? ((e -= n.e + 1),
                                  (l[0] = b(10, (7 - (e % 7)) % 7)),
                                  (n.e = -e || 0))
                                : (l[0] = n.e = 0),
                            n
                        );
                    if (
                        (0 == s
                            ? ((l.length = d), (u = 1), d--)
                            : ((l.length = d + 1),
                              (u = b(10, 7 - s)),
                              (l[d] =
                                  0 < o
                                      ? ((a / b(10, r - o)) % b(10, o) | 0) * u
                                      : 0)),
                        f)
                    )
                        for (;;) {
                            if (0 == d) {
                                for (s = 1, o = l[0]; 10 <= o; o /= 10) s++;
                                for (o = l[0] += u, u = 1; 10 <= o; o /= 10)
                                    u++;
                                s != u && (n.e++, l[0] == O && (l[0] = 1));
                                break;
                            }
                            if (((l[d] += u), l[d] != O)) break;
                            (l[d--] = 0), (u = 1);
                        }
                    for (s = l.length; 0 === l[--s]; ) l.pop();
                }
                return (
                    p &&
                        (n.e > h.maxE
                            ? ((n.d = null), (n.e = NaN))
                            : n.e < h.minE && ((n.e = 0), (n.d = [0]))),
                    n
                );
            }
            function L(n, e, i) {
                if (!n.isFinite()) return W(n);
                var t,
                    r = n.e,
                    s = A(n.d),
                    o = s.length;
                return (
                    e
                        ? (i && 0 < (t = i - o)
                              ? (s = s.charAt(0) + "." + s.slice(1) + I(t))
                              : 1 < o && (s = s.charAt(0) + "." + s.slice(1)),
                          (s = s + (n.e < 0 ? "e" : "e+") + n.e))
                        : r < 0
                        ? ((s = "0." + I(-r - 1) + s),
                          i && 0 < (t = i - o) && (s += I(t)))
                        : o <= r
                        ? ((s += I(r + 1 - o)),
                          i && 0 < (t = i - r - 1) && (s = s + "." + I(t)))
                        : ((t = r + 1) < o &&
                              (s = s.slice(0, t) + "." + s.slice(t)),
                          i &&
                              0 < (t = i - o) &&
                              (r + 1 === o && (s += "."), (s += I(t)))),
                    s
                );
            }
            function T(n, e) {
                var i = n[0];
                for (e *= 7; 10 <= i; i /= 10) e++;
                return e;
            }
            function U(n, e, i) {
                if (q < e) throw ((p = !0), i && (n.precision = i), Error(w));
                return R(new n(l), e, 1, !0);
            }
            function k(n, e, i) {
                if (F < e) throw Error(w);
                return R(new n(d), e, i, !0);
            }
            function j(n) {
                var e = n.length - 1,
                    i = 7 * e + 1;
                if ((e = n[e])) {
                    for (; e % 10 == 0; e /= 10) i--;
                    for (e = n[0]; 10 <= e; e /= 10) i++;
                }
                return i;
            }
            function I(n) {
                for (var e = ""; n--; ) e += "0";
                return e;
            }
            function C(n, e, i, t) {
                var r,
                    s = new n(1),
                    o = Math.ceil(t / 7 + 4);
                for (p = !1; ; ) {
                    if (
                        (i % 2 && X((s = s.times(e)).d, o) && (r = !0),
                        0 === (i = N(i / 2)))
                    ) {
                        (i = s.d.length - 1), r && 0 === s.d[i] && ++s.d[i];
                        break;
                    }
                    X((e = e.times(e)).d, o);
                }
                return (p = !0), s;
            }
            function H(n) {
                return 1 & n.d[n.d.length - 1];
            }
            function B(n, e, i) {
                for (var t, r = new n(e[0]), s = 0; ++s < e.length; ) {
                    if (!(t = new n(e[s])).s) {
                        r = t;
                        break;
                    }
                    r[i](t) && (r = t);
                }
                return r;
            }
            function V(n, e) {
                var i,
                    t,
                    r,
                    s,
                    o,
                    u,
                    c,
                    f = 0,
                    a = 0,
                    l = 0,
                    d = n.constructor,
                    h = d.rounding,
                    g = d.precision;
                if (!n.d || !n.d[0] || 17 < n.e)
                    return new d(
                        n.d
                            ? n.d[0]
                                ? n.s < 0
                                    ? 0
                                    : 1 / 0
                                : 1
                            : n.s
                            ? n.s < 0
                                ? 0
                                : n
                            : NaN
                    );
                for (
                    c = null == e ? ((p = !1), g) : e, u = new d(0.03125);
                    -2 < n.e;

                )
                    (n = n.times(u)), (l += 5);
                for (
                    c += t = ((Math.log(b(2, l)) / Math.LN10) * 2 + 5) | 0,
                        i = s = o = new d(1),
                        d.precision = c;
                    ;

                ) {
                    if (
                        ((s = R(s.times(n), c, 1)),
                        (i = i.times(++a)),
                        A((u = o.plus(S(s, i, c, 1))).d).slice(0, c) ===
                            A(o.d).slice(0, c))
                    ) {
                        for (r = l; r--; ) o = R(o.times(o), c, 1);
                        if (null != e) return (d.precision = g), o;
                        if (!(f < 3 && _(o.d, c - t, h, f)))
                            return R(o, (d.precision = g), h, (p = !0));
                        (d.precision = c += 10),
                            (i = s = u = new d(1)),
                            (a = 0),
                            f++;
                    }
                    o = u;
                }
            }
            function $(n, e) {
                var i,
                    t,
                    r,
                    s,
                    o,
                    u,
                    c,
                    f,
                    a,
                    l,
                    d,
                    h = 1,
                    g = n,
                    m = g.d,
                    w = g.constructor,
                    v = w.rounding,
                    N = w.precision;
                if (
                    g.s < 0 ||
                    !m ||
                    !m[0] ||
                    (!g.e && 1 == m[0] && 1 == m.length)
                )
                    return new w(
                        m && !m[0] ? -1 / 0 : 1 != g.s ? NaN : m ? 0 : g
                    );
                if (
                    ((a = null == e ? ((p = !1), N) : e),
                    (w.precision = a += 10),
                    (t = (i = A(m)).charAt(0)),
                    !(Math.abs((s = g.e)) < 15e14))
                )
                    return (
                        (f = U(w, a + 2, N).times(s + "")),
                        (g = $(new w(t + "." + i.slice(1)), a - 10).plus(f)),
                        (w.precision = N),
                        null == e ? R(g, N, v, (p = !0)) : g
                    );
                for (; (t < 7 && 1 != t) || (1 == t && 3 < i.charAt(1)); )
                    (t = (i = A((g = g.times(n)).d)).charAt(0)), h++;
                for (
                    s = g.e,
                        1 < t
                            ? ((g = new w("0." + i)), s++)
                            : (g = new w(t + "." + i.slice(1))),
                        c = o = g = S((l = g).minus(1), g.plus(1), a, 1),
                        d = R(g.times(g), a, 1),
                        r = 3;
                    ;

                ) {
                    if (
                        ((o = R(o.times(d), a, 1)),
                        A((f = c.plus(S(o, new w(r), a, 1))).d).slice(0, a) ===
                            A(c.d).slice(0, a))
                    ) {
                        if (
                            ((c = c.times(2)),
                            0 !== s &&
                                (c = c.plus(U(w, a + 2, N).times(s + ""))),
                            (c = S(c, new w(h), a, 1)),
                            null != e)
                        )
                            return (w.precision = N), c;
                        if (!_(c.d, a - 10, v, u))
                            return R(c, (w.precision = N), v, (p = !0));
                        (w.precision = a += 10),
                            (f = o = g = S(l.minus(1), l.plus(1), a, 1)),
                            (d = R(g.times(g), a, 1)),
                            (r = u = 1);
                    }
                    (c = f), (r += 2);
                }
            }
            function W(n) {
                return String((n.s * n.s) / 0);
            }
            function J(n, e) {
                var i, t, r;
                for (
                    -1 < (i = e.indexOf(".")) && (e = e.replace(".", "")),
                        0 < (t = e.search(/e/i))
                            ? (i < 0 && (i = t),
                              (i += +e.slice(t + 1)),
                              (e = e.substring(0, t)))
                            : i < 0 && (i = e.length),
                        t = 0;
                    48 === e.charCodeAt(t);
                    t++
                );
                for (r = e.length; 48 === e.charCodeAt(r - 1); --r);
                if ((e = e.slice(t, r))) {
                    if (
                        ((r -= t),
                        (n.e = i = i - t - 1),
                        (n.d = []),
                        (t = (i + 1) % 7),
                        i < 0 && (t += 7),
                        t < r)
                    ) {
                        for (t && n.d.push(+e.slice(0, t)), r -= 7; t < r; )
                            n.d.push(+e.slice(t, (t += 7)));
                        t = 7 - (e = e.slice(t)).length;
                    } else t -= r;
                    for (; t--; ) e += "0";
                    n.d.push(+e),
                        p &&
                            (n.e > n.constructor.maxE
                                ? ((n.d = null), (n.e = NaN))
                                : n.e < n.constructor.minE &&
                                  ((n.e = 0), (n.d = [0])));
                } else (n.e = 0), (n.d = [0]);
                return n;
            }
            function z(n, e, i, t, r) {
                var s,
                    o,
                    u,
                    c,
                    f = n.precision,
                    a = Math.ceil(f / 7);
                for (p = !1, c = i.times(i), u = new n(t); ; ) {
                    if (
                        ((o = S(u.times(c), new n(e++ * e++), f, 1)),
                        (u = r ? t.plus(o) : t.minus(o)),
                        (t = S(o.times(c), new n(e++ * e++), f, 1)),
                        void 0 !== (o = u.plus(t)).d[a])
                    ) {
                        for (s = a; o.d[s] === u.d[s] && s--; );
                        if (-1 == s) break;
                    }
                    (s = u), (u = t), (t = o), (o = s);
                }
                return (p = !0), (o.d.length = a + 1), o;
            }
            function G(n, e) {
                for (var i = n; --e; ) i *= n;
                return i;
            }
            function K(n, e) {
                var i,
                    t = e.s < 0,
                    r = k(n, n.precision, 1),
                    s = r.times(0.5);
                if ((e = e.abs()).lte(s)) return (u = t ? 4 : 1), e;
                if ((i = e.divToInt(r)).isZero()) u = t ? 3 : 2;
                else {
                    if ((e = e.minus(i.times(r))).lte(s))
                        return (u = H(i) ? (t ? 2 : 3) : t ? 4 : 1), e;
                    u = H(i) ? (t ? 1 : 4) : t ? 3 : 2;
                }
                return e.minus(r).abs();
            }
            function Q(n, e, i, t) {
                var r,
                    s,
                    u,
                    c,
                    l,
                    d,
                    h,
                    p,
                    g,
                    m = n.constructor,
                    w = void 0 !== i;
                if (
                    (w
                        ? (D(i, 1, f),
                          void 0 === t ? (t = m.rounding) : D(t, 0, 8))
                        : ((i = m.precision), (t = m.rounding)),
                    n.isFinite())
                ) {
                    for (
                        w
                            ? ((r = 2),
                              16 == e
                                  ? (i = 4 * i - 3)
                                  : 8 == e && (i = 3 * i - 2))
                            : (r = e),
                            0 <= (u = (h = L(n)).indexOf(".")) &&
                                ((h = h.replace(".", "")),
                                ((g = new m(1)).e = h.length - u),
                                (g.d = Z(L(g), 10, r)),
                                (g.e = g.d.length)),
                            s = l = (p = Z(h, 10, r)).length;
                        0 == p[--l];

                    )
                        p.pop();
                    if (p[0]) {
                        if (
                            (u < 0
                                ? s--
                                : (((n = new m(n)).d = p),
                                  (n.e = s),
                                  (p = (n = S(n, g, i, t, 0, r)).d),
                                  (s = n.e),
                                  (d = o)),
                            (u = p[i]),
                            (c = r / 2),
                            (d = d || void 0 !== p[i + 1]),
                            (d =
                                t < 4
                                    ? (void 0 !== u || d) &&
                                      (0 === t || t === (n.s < 0 ? 3 : 2))
                                    : c < u ||
                                      (u === c &&
                                          (4 === t ||
                                              d ||
                                              (6 === t && 1 & p[i - 1]) ||
                                              t === (n.s < 0 ? 8 : 7)))),
                            (p.length = i),
                            d)
                        )
                            for (; ++p[--i] > r - 1; )
                                (p[i] = 0), i || (++s, p.unshift(1));
                        for (l = p.length; !p[l - 1]; --l);
                        for (u = 0, h = ""; u < l; u++) h += a.charAt(p[u]);
                        if (w) {
                            if (1 < l)
                                if (16 == e || 8 == e) {
                                    for (u = 16 == e ? 4 : 3, --l; l % u; l++)
                                        h += "0";
                                    for (
                                        l = (p = Z(h, r, e)).length;
                                        !p[l - 1];
                                        --l
                                    );
                                    for (u = 1, h = "1."; u < l; u++)
                                        h += a.charAt(p[u]);
                                } else h = h.charAt(0) + "." + h.slice(1);
                            h = h + (s < 0 ? "p" : "p+") + s;
                        } else if (s < 0) {
                            for (; ++s; ) h = "0" + h;
                            h = "0." + h;
                        } else if (++s > l) for (s -= l; s--; ) h += "0";
                        else s < l && (h = h.slice(0, s) + "." + h.slice(s));
                    } else h = w ? "0p+0" : "0";
                    h =
                        (16 == e ? "0x" : 2 == e ? "0b" : 8 == e ? "0o" : "") +
                        h;
                } else h = W(n);
                return n.s < 0 ? "-" + h : h;
            }
            function X(n, e) {
                if (n.length > e) return (n.length = e), !0;
            }
            function Y(n) {
                return new this(n).abs();
            }
            function nn(n) {
                return new this(n).acos();
            }
            function en(n) {
                return new this(n).acosh();
            }
            function tn(n, e) {
                return new this(n).plus(e);
            }
            function rn(n) {
                return new this(n).asin();
            }
            function sn(n) {
                return new this(n).asinh();
            }
            function on(n) {
                return new this(n).atan();
            }
            function un(n) {
                return new this(n).atanh();
            }
            function cn(n, e) {
                (n = new this(n)), (e = new this(e));
                var i,
                    t = this.precision,
                    r = this.rounding,
                    s = t + 4;
                return (
                    n.s && e.s
                        ? n.d || e.d
                            ? !e.d || n.isZero()
                                ? ((i =
                                      e.s < 0 ? k(this, t, r) : new this(0)).s =
                                      n.s)
                                : !n.d || e.isZero()
                                ? ((i = k(this, s, 1).times(0.5)).s = n.s)
                                : (i =
                                      e.s < 0
                                          ? ((this.precision = s),
                                            (this.rounding = 1),
                                            (i = this.atan(S(n, e, s, 1))),
                                            (e = k(this, s, 1)),
                                            (this.precision = t),
                                            (this.rounding = r),
                                            n.s < 0 ? i.minus(e) : i.plus(e))
                                          : this.atan(S(n, e, s, 1)))
                            : ((i = k(this, s, 1).times(
                                  0 < e.s ? 0.25 : 0.75
                              )).s = n.s)
                        : (i = new this(NaN)),
                    i
                );
            }
            function fn(n) {
                return new this(n).cbrt();
            }
            function an(n) {
                return R((n = new this(n)), n.e + 1, 2);
            }
            function ln(n) {
                if (!n || "object" != typeof n)
                    throw Error(g + "Object expected");
                var e,
                    i,
                    t,
                    r = !0 === n.defaults,
                    s = [
                        "precision",
                        1,
                        f,
                        "rounding",
                        0,
                        8,
                        "toExpNeg",
                        -c,
                        0,
                        "toExpPos",
                        0,
                        c,
                        "maxE",
                        0,
                        c,
                        "minE",
                        -c,
                        0,
                        "modulo",
                        0,
                        9,
                    ];
                for (e = 0; e < s.length; e += 3)
                    if (
                        ((i = s[e]),
                        r && (this[i] = h[i]),
                        void 0 !== (t = n[i]))
                    ) {
                        if (!(N(t) === t && s[e + 1] <= t && t <= s[e + 2]))
                            throw Error(m + i + ": " + t);
                        this[i] = t;
                    }
                if (
                    ((i = "crypto"),
                    r && (this[i] = h[i]),
                    void 0 !== (t = n[i]))
                ) {
                    if (!0 !== t && !1 !== t && 0 !== t && 1 !== t)
                        throw Error(m + i + ": " + t);
                    if (t) {
                        if (
                            "undefined" == typeof crypto ||
                            !crypto ||
                            (!crypto.getRandomValues && !crypto.randomBytes)
                        )
                            throw Error(v);
                        this[i] = !0;
                    } else this[i] = !1;
                }
                return this;
            }
            function dn(n) {
                return new this(n).cos();
            }
            function hn(n) {
                return new this(n).cosh();
            }
            function pn(n, e) {
                return new this(n).div(e);
            }
            function gn(n) {
                return new this(n).exp();
            }
            function mn(n) {
                return R((n = new this(n)), n.e + 1, 3);
            }
            function wn() {
                var n,
                    e,
                    i = new this(0);
                for (p = !1, n = 0; n < arguments.length; )
                    if ((e = new this(arguments[n++])).d)
                        i.d && (i = i.plus(e.times(e)));
                    else {
                        if (e.s) return (p = !0), new this(1 / 0);
                        i = e;
                    }
                return (p = !0), i.sqrt();
            }
            function vn(n) {
                return (
                    n instanceof s || (n && "[object Decimal]" === n.name) || !1
                );
            }
            function Nn(n) {
                return new this(n).ln();
            }
            function bn(n, e) {
                return new this(n).log(e);
            }
            function xn(n) {
                return new this(n).log(2);
            }
            function En(n) {
                return new this(n).log(10);
            }
            function yn() {
                return B(this, arguments, "lt");
            }
            function Mn() {
                return B(this, arguments, "gt");
            }
            function On(n, e) {
                return new this(n).mod(e);
            }
            function qn(n, e) {
                return new this(n).mul(e);
            }
            function Fn(n, e) {
                return new this(n).pow(e);
            }
            function Pn(n) {
                var e,
                    i,
                    t,
                    r,
                    s = 0,
                    o = new this(1),
                    u = [];
                if (
                    (void 0 === n ? (n = this.precision) : D(n, 1, f),
                    (t = Math.ceil(n / 7)),
                    this.crypto)
                )
                    if (crypto.getRandomValues)
                        for (
                            e = crypto.getRandomValues(new Uint32Array(t));
                            s < t;

                        )
                            429e7 <= (r = e[s])
                                ? (e[s] = crypto.getRandomValues(
                                      new Uint32Array(1)
                                  )[0])
                                : (u[s++] = r % 1e7);
                    else {
                        if (!crypto.randomBytes) throw Error(v);
                        for (e = crypto.randomBytes((t *= 4)); s < t; )
                            214e7 <=
                            (r =
                                e[s] +
                                (e[s + 1] << 8) +
                                (e[s + 2] << 16) +
                                ((127 & e[s + 3]) << 24))
                                ? crypto.randomBytes(4).copy(e, s)
                                : (u.push(r % 1e7), (s += 4));
                        s = t / 4;
                    }
                else for (; s < t; ) u[s++] = (1e7 * Math.random()) | 0;
                for (
                    n %= 7,
                        (t = u[--s]) &&
                            n &&
                            ((r = b(10, 7 - n)), (u[s] = ((t / r) | 0) * r));
                    0 === u[s];
                    s--
                )
                    u.pop();
                if (s < 0) u = [(i = 0)];
                else {
                    for (i = -1; 0 === u[0]; i -= 7) u.shift();
                    for (t = 1, r = u[0]; 10 <= r; r /= 10) t++;
                    t < 7 && (i -= 7 - t);
                }
                return (o.e = i), (o.d = u), o;
            }
            function An(n) {
                return R((n = new this(n)), n.e + 1, this.rounding);
            }
            function Dn(n) {
                return (n = new this(n)).d
                    ? n.d[0]
                        ? n.s
                        : 0 * n.s
                    : n.s || NaN;
            }
            function _n(n) {
                return new this(n).sin();
            }
            function Zn(n) {
                return new this(n).sinh();
            }
            function Sn(n) {
                return new this(n).sqrt();
            }
            function Rn(n, e) {
                return new this(n).sub(e);
            }
            function Ln(n) {
                return new this(n).tan();
            }
            function Tn(n) {
                return new this(n).tanh();
            }
            function Un(n) {
                return R((n = new this(n)), n.e + 1, 1);
            }
            ((s = (function n(e) {
                var i, t, r;
                function o(n) {
                    var e,
                        i,
                        t,
                        r = this;
                    if (!(r instanceof o)) return new o(n);
                    if (n instanceof (r.constructor = o))
                        return (
                            (r.s = n.s),
                            void (p
                                ? !n.d || n.e > o.maxE
                                    ? ((r.e = NaN), (r.d = null))
                                    : n.e < o.minE
                                    ? ((r.e = 0), (r.d = [0]))
                                    : ((r.e = n.e), (r.d = n.d.slice()))
                                : ((r.e = n.e),
                                  (r.d = n.d ? n.d.slice() : n.d)))
                        );
                    if ("number" == (t = typeof n)) {
                        if (0 === n)
                            return (
                                (r.s = 1 / n < 0 ? -1 : 1),
                                (r.e = 0),
                                void (r.d = [0])
                            );
                        if (
                            ((r.s = n < 0 ? ((n = -n), -1) : 1),
                            n === ~~n && n < 1e7)
                        ) {
                            for (e = 0, i = n; 10 <= i; i /= 10) e++;
                            return void (r.d = p
                                ? o.maxE < e
                                    ? ((r.e = NaN), null)
                                    : e < o.minE
                                    ? [(r.e = 0)]
                                    : ((r.e = e), [n])
                                : ((r.e = e), [n]));
                        }
                        return 0 * n != 0
                            ? (n || (r.s = NaN), (r.e = NaN), void (r.d = null))
                            : J(r, n.toString());
                    }
                    if ("string" !== t) throw Error(m + n);
                    return (
                        45 === (i = n.charCodeAt(0))
                            ? ((n = n.slice(1)), (r.s = -1))
                            : (43 === i && (n = n.slice(1)), (r.s = 1)),
                        M.test(n)
                            ? J(r, n)
                            : (function (n, e) {
                                  var i, t, r, o, u, c, f, a, l;
                                  if ("Infinity" === e || "NaN" === e)
                                      return (
                                          +e || (n.s = NaN),
                                          (n.e = NaN),
                                          (n.d = null),
                                          n
                                      );
                                  if (E.test(e))
                                      (i = 16), (e = e.toLowerCase());
                                  else if (x.test(e)) i = 2;
                                  else {
                                      if (!y.test(e)) throw Error(m + e);
                                      i = 8;
                                  }
                                  for (
                                      u =
                                          0 <=
                                          (o = (e =
                                              0 < (o = e.search(/p/i))
                                                  ? ((f = +e.slice(o + 1)),
                                                    e.substring(2, o))
                                                  : e.slice(2)).indexOf(".")),
                                          t = n.constructor,
                                          u &&
                                              ((o =
                                                  (c = (e = e.replace(".", ""))
                                                      .length) - o),
                                              (r = C(t, new t(i), o, 2 * o))),
                                          o = l = (a = Z(e, i, O)).length - 1;
                                      0 === a[o];
                                      --o
                                  )
                                      a.pop();
                                  return o < 0
                                      ? new t(0 * n.s)
                                      : ((n.e = T(a, l)),
                                        (n.d = a),
                                        (p = !1),
                                        u && (n = S(n, r, 4 * c)),
                                        f &&
                                            (n = n.times(
                                                Math.abs(f) < 54
                                                    ? b(2, f)
                                                    : s.pow(2, f)
                                            )),
                                        (p = !0),
                                        n);
                              })(r, n)
                    );
                }
                if (
                    ((o.prototype = P),
                    (o.ROUND_UP = 0),
                    (o.ROUND_DOWN = 1),
                    (o.ROUND_CEIL = 2),
                    (o.ROUND_FLOOR = 3),
                    (o.ROUND_HALF_UP = 4),
                    (o.ROUND_HALF_DOWN = 5),
                    (o.ROUND_HALF_EVEN = 6),
                    (o.ROUND_HALF_CEIL = 7),
                    (o.ROUND_HALF_FLOOR = 8),
                    (o.EUCLID = 9),
                    (o.config = o.set = ln),
                    (o.clone = n),
                    (o.isDecimal = vn),
                    (o.abs = Y),
                    (o.acos = nn),
                    (o.acosh = en),
                    (o.add = tn),
                    (o.asin = rn),
                    (o.asinh = sn),
                    (o.atan = on),
                    (o.atanh = un),
                    (o.atan2 = cn),
                    (o.cbrt = fn),
                    (o.ceil = an),
                    (o.cos = dn),
                    (o.cosh = hn),
                    (o.div = pn),
                    (o.exp = gn),
                    (o.floor = mn),
                    (o.hypot = wn),
                    (o.ln = Nn),
                    (o.log = bn),
                    (o.log10 = En),
                    (o.log2 = xn),
                    (o.max = yn),
                    (o.min = Mn),
                    (o.mod = On),
                    (o.mul = qn),
                    (o.pow = Fn),
                    (o.random = Pn),
                    (o.round = An),
                    (o.sign = Dn),
                    (o.sin = _n),
                    (o.sinh = Zn),
                    (o.sqrt = Sn),
                    (o.sub = Rn),
                    (o.tan = Ln),
                    (o.tanh = Tn),
                    (o.trunc = Un),
                    void 0 === e && (e = {}),
                    e && !0 !== e.defaults)
                )
                    for (
                        r = [
                            "precision",
                            "rounding",
                            "toExpNeg",
                            "toExpPos",
                            "maxE",
                            "minE",
                            "modulo",
                            "crypto",
                        ],
                            i = 0;
                        i < r.length;

                    )
                        e.hasOwnProperty((t = r[i++])) || (e[t] = this[t]);
                return o.config(e), o;
            })(h)).default = s.Decimal = s),
                (l = new s(l)),
                (d = new s(d)),
                (n.exports = s),
                void 0 ===
                    (t = function () {
                        return s;
                    }.call(e, i, e, n)) || (n.exports = t);
        })();
    },
    function (n, e, i) {
        "use strict";
        i.r(e);
        var t = i(0),
            r = i.n(t);
        addEventListener("message", function (n) {
            var e;
            e = n.data[0];
            var i = n.data[1],
                t = n.data[2];
            r.a.precision = e + 1;
            for (
                var s = new r.a(0),
                    o = new r.a(1),
                    u = new r.a(0),
                    c = 1,
                    f = new r.a(1),
                    a = 0,
                    l = t;
                a < l;
                a++
            )
                (c *= -1), (o = r.a.mul(o, 1024)), (u = u.plus(1));
            for (
                ;
                -1 != r.a.abs(f).cmp(new r.a("1e-" + (1 + e))) &&
                ((f = r.a
                    .mul(1, c)
                    .mul(
                        r.a
                            .div(-Math.pow(2, 5), r.a.mul(4, u).plus(1))
                            .plus(r.a.div(-1, r.a.mul(4, u).plus(3)))
                            .plus(
                                r.a.div(Math.pow(2, 8), r.a.mul(10, u).plus(1))
                            )
                            .plus(
                                r.a.div(-Math.pow(2, 6), r.a.mul(10, u).plus(3))
                            )
                            .plus(
                                r.a.div(-Math.pow(2, 2), r.a.mul(10, u).plus(5))
                            )
                            .plus(
                                r.a.div(-Math.pow(2, 2), r.a.mul(10, u).plus(7))
                            )
                            .plus(r.a.div(1, r.a.mul(10, u).plus(9)))
                    )
                    .div(r.a.mul(Math.pow(2, 6), o))),
                (s = r.a.add(s, f)),
                -1 != r.a.abs(f).cmp(new r.a("1e-" + (1 + e))));

            )
                for (var d = 0, h = i; d < h; d++)
                    (c *= -1), (o = r.a.mul(o, 1024)), (u = u.plus(1));
            postMessage(["" + s, "" + u.plus(1)]);
        });
    },
]);
