!(function (t) {
    var e = {};
    function r(o) {
        if (e[o]) return e[o].exports;
        var n = (e[o] = { i: o, l: !1, exports: {} });
        return t[o].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
    }
    (r.m = t),
        (r.c = e),
        (r.d = function (t, e, o) {
            r.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: o });
        }),
        (r.r = function (t) {
            "undefined" !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (r.t = function (t, e) {
            if ((1 & e && (t = r(t)), 8 & e)) return t;
            if (4 & e && "object" === typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (
                (r.r(o),
                Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: t,
                }),
                2 & e && "string" != typeof t)
            )
                for (var n in t)
                    r.d(
                        o,
                        n,
                        function (e) {
                            return t[e];
                        }.bind(null, n)
                    );
            return o;
        }),
        (r.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return r.d(e, "a", e), e;
        }),
        (r.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (r.p = "./"),
        r((r.s = 1));
})([
    function (t, e, r) {
        (function (t) {
            var o,
                n = (function (t) {
                    "use strict";
                    var e = 1e7,
                        r = 9007199254740992,
                        o = f(r),
                        i = "function" === typeof BigInt;
                    function u(t, e, r, o) {
                        return "undefined" === typeof t
                            ? u[0]
                            : "undefined" !== typeof e && (10 !== +e || r)
                            ? z(t, e, r, o)
                            : F(t);
                    }
                    function p(t, e) {
                        (this.value = t), (this.sign = e), (this.isSmall = !1);
                    }
                    function a(t) {
                        (this.value = t),
                            (this.sign = t < 0),
                            (this.isSmall = !0);
                    }
                    function s(t) {
                        this.value = t;
                    }
                    function l(t) {
                        return -r < t && t < r;
                    }
                    function f(t) {
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
                    function v(t) {
                        y(t);
                        var r = t.length;
                        if (r < 4 && P(t, o) < 0)
                            switch (r) {
                                case 0:
                                    return 0;
                                case 1:
                                    return t[0];
                                case 2:
                                    return t[0] + t[1] * e;
                                default:
                                    return t[0] + (t[1] + t[2] * e) * e;
                            }
                        return t;
                    }
                    function y(t) {
                        for (var e = t.length; 0 === t[--e]; );
                        t.length = e + 1;
                    }
                    function h(t) {
                        for (var e = new Array(t), r = -1; ++r < t; ) e[r] = 0;
                        return e;
                    }
                    function c(t) {
                        return t > 0 ? Math.floor(t) : Math.ceil(t);
                    }
                    function g(t, r) {
                        var o,
                            n,
                            i = t.length,
                            u = r.length,
                            p = new Array(i),
                            a = 0,
                            s = e;
                        for (n = 0; n < u; n++)
                            (a = (o = t[n] + r[n] + a) >= s ? 1 : 0),
                                (p[n] = o - a * s);
                        for (; n < i; )
                            (a = (o = t[n] + a) === s ? 1 : 0),
                                (p[n++] = o - a * s);
                        return a > 0 && p.push(a), p;
                    }
                    function m(t, e) {
                        return t.length >= e.length ? g(t, e) : g(e, t);
                    }
                    function d(t, r) {
                        var o,
                            n,
                            i = t.length,
                            u = new Array(i),
                            p = e;
                        for (n = 0; n < i; n++)
                            (o = t[n] - p + r),
                                (r = Math.floor(o / p)),
                                (u[n] = o - r * p),
                                (r += 1);
                        for (; r > 0; )
                            (u[n++] = r % p), (r = Math.floor(r / p));
                        return u;
                    }
                    function w(t, e) {
                        var r,
                            o,
                            n = t.length,
                            i = e.length,
                            u = new Array(n),
                            p = 0;
                        for (r = 0; r < i; r++)
                            (o = t[r] - p - e[r]) < 0
                                ? ((o += 1e7), (p = 1))
                                : (p = 0),
                                (u[r] = o);
                        for (r = i; r < n; r++) {
                            if (!((o = t[r] - p) < 0)) {
                                u[r++] = o;
                                break;
                            }
                            (o += 1e7), (u[r] = o);
                        }
                        for (; r < n; r++) u[r] = t[r];
                        return y(u), u;
                    }
                    function b(t, e, r) {
                        var o,
                            n,
                            i = t.length,
                            u = new Array(i),
                            s = -e;
                        for (o = 0; o < i; o++)
                            (n = t[o] + s),
                                (s = Math.floor(n / 1e7)),
                                (n %= 1e7),
                                (u[o] = n < 0 ? n + 1e7 : n);
                        return "number" === typeof (u = v(u))
                            ? (r && (u = -u), new a(u))
                            : new p(u, r);
                    }
                    function S(t, e) {
                        var r,
                            o,
                            n,
                            i,
                            u = t.length,
                            p = e.length,
                            a = h(u + p);
                        for (n = 0; n < u; ++n) {
                            i = t[n];
                            for (var s = 0; s < p; ++s)
                                (r = i * e[s] + a[n + s]),
                                    (o = Math.floor(r / 1e7)),
                                    (a[n + s] = r - 1e7 * o),
                                    (a[n + s + 1] += o);
                        }
                        return y(a), a;
                    }
                    function _(t, r) {
                        var o,
                            n,
                            i = t.length,
                            u = new Array(i),
                            p = e,
                            a = 0;
                        for (n = 0; n < i; n++)
                            (o = t[n] * r + a),
                                (a = Math.floor(o / p)),
                                (u[n] = o - a * p);
                        for (; a > 0; )
                            (u[n++] = a % p), (a = Math.floor(a / p));
                        return u;
                    }
                    function M(t, e) {
                        for (var r = []; e-- > 0; ) r.push(0);
                        return r.concat(t);
                    }
                    function q(t, r, o) {
                        return new p(t < e ? _(r, t) : S(r, f(t)), o);
                    }
                    function N(t) {
                        var e,
                            r,
                            o,
                            n,
                            i = t.length,
                            u = h(i + i);
                        for (o = 0; o < i; o++) {
                            r = 0 - (n = t[o]) * n;
                            for (var p = o; p < i; p++)
                                (e = n * t[p] * 2 + u[o + p] + r),
                                    (r = Math.floor(e / 1e7)),
                                    (u[o + p] = e - 1e7 * r);
                            u[o + i] = r;
                        }
                        return y(u), u;
                    }
                    function E(t, e) {
                        var r,
                            o,
                            n,
                            i,
                            u = t.length,
                            p = h(u);
                        for (n = 0, r = u - 1; r >= 0; --r)
                            (n = (i = 1e7 * n + t[r]) - (o = c(i / e)) * e),
                                (p[r] = 0 | o);
                        return [p, 0 | n];
                    }
                    function O(t, r) {
                        var o,
                            n = F(r);
                        if (i)
                            return [
                                new s(t.value / n.value),
                                new s(t.value % n.value),
                            ];
                        var l,
                            g = t.value,
                            m = n.value;
                        if (0 === m) throw new Error("Cannot divide by zero");
                        if (t.isSmall)
                            return n.isSmall
                                ? [new a(c(g / m)), new a(g % m)]
                                : [u[0], t];
                        if (n.isSmall) {
                            if (1 === m) return [t, u[0]];
                            if (-1 == m) return [t.negate(), u[0]];
                            var d = Math.abs(m);
                            if (d < e) {
                                l = v((o = E(g, d))[0]);
                                var b = o[1];
                                return (
                                    t.sign && (b = -b),
                                    "number" === typeof l
                                        ? (t.sign !== n.sign && (l = -l),
                                          [new a(l), new a(b)])
                                        : [
                                              new p(l, t.sign !== n.sign),
                                              new a(b),
                                          ]
                                );
                            }
                            m = f(d);
                        }
                        var S = P(g, m);
                        if (-1 === S) return [u[0], t];
                        if (0 === S)
                            return [u[t.sign === n.sign ? 1 : -1], u[0]];
                        l = (o =
                            g.length + m.length <= 200
                                ? (function (t, r) {
                                      var o,
                                          n,
                                          i,
                                          u,
                                          p,
                                          a,
                                          s,
                                          l = t.length,
                                          f = r.length,
                                          y = e,
                                          c = h(r.length),
                                          g = r[f - 1],
                                          m = Math.ceil(y / (2 * g)),
                                          d = _(t, m),
                                          w = _(r, m);
                                      for (
                                          d.length <= l && d.push(0),
                                              w.push(0),
                                              g = w[f - 1],
                                              n = l - f;
                                          n >= 0;
                                          n--
                                      ) {
                                          for (
                                              o = y - 1,
                                                  d[n + f] !== g &&
                                                      (o = Math.floor(
                                                          (d[n + f] * y +
                                                              d[n + f - 1]) /
                                                              g
                                                      )),
                                                  i = 0,
                                                  u = 0,
                                                  a = w.length,
                                                  p = 0;
                                              p < a;
                                              p++
                                          )
                                              (i += o * w[p]),
                                                  (s = Math.floor(i / y)),
                                                  (u += d[n + p] - (i - s * y)),
                                                  (i = s),
                                                  u < 0
                                                      ? ((d[n + p] = u + y),
                                                        (u = -1))
                                                      : ((d[n + p] = u),
                                                        (u = 0));
                                          for (; 0 !== u; ) {
                                              for (
                                                  o -= 1, i = 0, p = 0;
                                                  p < a;
                                                  p++
                                              )
                                                  (i += d[n + p] - y + w[p]) < 0
                                                      ? ((d[n + p] = i + y),
                                                        (i = 0))
                                                      : ((d[n + p] = i),
                                                        (i = 1));
                                              u += i;
                                          }
                                          c[n] = o;
                                      }
                                      return (d = E(d, m)[0]), [v(c), v(d)];
                                  })(g, m)
                                : (function (t, e) {
                                      for (
                                          var r,
                                              o,
                                              n,
                                              i,
                                              u,
                                              p = t.length,
                                              a = e.length,
                                              s = [],
                                              l = [];
                                          p;

                                      )
                                          if (
                                              (l.unshift(t[--p]),
                                              y(l),
                                              P(l, e) < 0)
                                          )
                                              s.push(0);
                                          else {
                                              (n =
                                                  1e7 * l[(o = l.length) - 1] +
                                                  l[o - 2]),
                                                  (i =
                                                      1e7 * e[a - 1] +
                                                      e[a - 2]),
                                                  o > a && (n = 1e7 * (n + 1)),
                                                  (r = Math.ceil(n / i));
                                              do {
                                                  if (P((u = _(e, r)), l) <= 0)
                                                      break;
                                                  r--;
                                              } while (r);
                                              s.push(r), (l = w(l, u));
                                          }
                                      return s.reverse(), [v(s), v(l)];
                                  })(g, m))[0];
                        var M = t.sign !== n.sign,
                            q = o[1],
                            N = t.sign;
                        return (
                            "number" === typeof l
                                ? (M && (l = -l), (l = new a(l)))
                                : (l = new p(l, M)),
                            "number" === typeof q
                                ? (N && (q = -q), (q = new a(q)))
                                : (q = new p(q, N)),
                            [l, q]
                        );
                    }
                    function P(t, e) {
                        if (t.length !== e.length)
                            return t.length > e.length ? 1 : -1;
                        for (var r = t.length - 1; r >= 0; r--)
                            if (t[r] !== e[r]) return t[r] > e[r] ? 1 : -1;
                        return 0;
                    }
                    function I(t) {
                        var e = t.abs();
                        return (
                            !e.isUnit() &&
                            (!!(e.equals(2) || e.equals(3) || e.equals(5)) ||
                                (!(
                                    e.isEven() ||
                                    e.isDivisibleBy(3) ||
                                    e.isDivisibleBy(5)
                                ) &&
                                    (!!e.lesser(49) || void 0)))
                        );
                    }
                    function B(t, e) {
                        for (
                            var r, o, i, u = t.prev(), p = u, a = 0;
                            p.isEven();

                        )
                            (p = p.divide(2)), a++;
                        t: for (o = 0; o < e.length; o++)
                            if (
                                !t.lesser(e[o]) &&
                                !(i = n(e[o]).modPow(p, t)).isUnit() &&
                                !i.equals(u)
                            ) {
                                for (r = a - 1; 0 != r; r--) {
                                    if ((i = i.square().mod(t)).isUnit())
                                        return !1;
                                    if (i.equals(u)) continue t;
                                }
                                return !1;
                            }
                        return !0;
                    }
                    (p.prototype = Object.create(u.prototype)),
                        (a.prototype = Object.create(u.prototype)),
                        (s.prototype = Object.create(u.prototype)),
                        (p.prototype.add = function (t) {
                            var e = F(t);
                            if (this.sign !== e.sign)
                                return this.subtract(e.negate());
                            var r = this.value,
                                o = e.value;
                            return e.isSmall
                                ? new p(d(r, Math.abs(o)), this.sign)
                                : new p(m(r, o), this.sign);
                        }),
                        (p.prototype.plus = p.prototype.add),
                        (a.prototype.add = function (t) {
                            var e = F(t),
                                r = this.value;
                            if (r < 0 !== e.sign)
                                return this.subtract(e.negate());
                            var o = e.value;
                            if (e.isSmall) {
                                if (l(r + o)) return new a(r + o);
                                o = f(Math.abs(o));
                            }
                            return new p(d(o, Math.abs(r)), r < 0);
                        }),
                        (a.prototype.plus = a.prototype.add),
                        (s.prototype.add = function (t) {
                            return new s(this.value + F(t).value);
                        }),
                        (s.prototype.plus = s.prototype.add),
                        (p.prototype.subtract = function (t) {
                            var e = F(t);
                            if (this.sign !== e.sign)
                                return this.add(e.negate());
                            var r = this.value,
                                o = e.value;
                            return e.isSmall
                                ? b(r, Math.abs(o), this.sign)
                                : (function (t, e, r) {
                                      var o;
                                      return (
                                          P(t, e) >= 0
                                              ? (o = w(t, e))
                                              : ((o = w(e, t)), (r = !r)),
                                          "number" === typeof (o = v(o))
                                              ? (r && (o = -o), new a(o))
                                              : new p(o, r)
                                      );
                                  })(r, o, this.sign);
                        }),
                        (p.prototype.minus = p.prototype.subtract),
                        (a.prototype.subtract = function (t) {
                            var e = F(t),
                                r = this.value;
                            if (r < 0 !== e.sign) return this.add(e.negate());
                            var o = e.value;
                            return e.isSmall
                                ? new a(r - o)
                                : b(o, Math.abs(r), r >= 0);
                        }),
                        (a.prototype.minus = a.prototype.subtract),
                        (s.prototype.subtract = function (t) {
                            return new s(this.value - F(t).value);
                        }),
                        (s.prototype.minus = s.prototype.subtract),
                        (p.prototype.negate = function () {
                            return new p(this.value, !this.sign);
                        }),
                        (a.prototype.negate = function () {
                            var t = this.sign,
                                e = new a(-this.value);
                            return (e.sign = !t), e;
                        }),
                        (s.prototype.negate = function () {
                            return new s(-this.value);
                        }),
                        (p.prototype.abs = function () {
                            return new p(this.value, !1);
                        }),
                        (a.prototype.abs = function () {
                            return new a(Math.abs(this.value));
                        }),
                        (s.prototype.abs = function () {
                            return new s(
                                this.value >= 0 ? this.value : -this.value
                            );
                        }),
                        (p.prototype.multiply = function (t) {
                            var r,
                                o,
                                n,
                                i = F(t),
                                a = this.value,
                                s = i.value,
                                l = this.sign !== i.sign;
                            if (i.isSmall) {
                                if (0 === s) return u[0];
                                if (1 === s) return this;
                                if (-1 === s) return this.negate();
                                if ((r = Math.abs(s)) < e)
                                    return new p(_(a, r), l);
                                s = f(r);
                            }
                            return (
                                (o = a.length),
                                (n = s.length),
                                new p(
                                    -0.012 * o - 0.012 * n + 15e-6 * o * n > 0
                                        ? (function t(e, r) {
                                              var o = Math.max(
                                                  e.length,
                                                  r.length
                                              );
                                              if (o <= 30) return S(e, r);
                                              o = Math.ceil(o / 2);
                                              var n = e.slice(o),
                                                  i = e.slice(0, o),
                                                  u = r.slice(o),
                                                  p = r.slice(0, o),
                                                  a = t(i, p),
                                                  s = t(n, u),
                                                  l = t(m(i, n), m(p, u)),
                                                  f = m(
                                                      m(a, M(w(w(l, a), s), o)),
                                                      M(s, 2 * o)
                                                  );
                                              return y(f), f;
                                          })(a, s)
                                        : S(a, s),
                                    l
                                )
                            );
                        }),
                        (p.prototype.times = p.prototype.multiply),
                        (a.prototype._multiplyBySmall = function (t) {
                            return l(t.value * this.value)
                                ? new a(t.value * this.value)
                                : q(
                                      Math.abs(t.value),
                                      f(Math.abs(this.value)),
                                      this.sign !== t.sign
                                  );
                        }),
                        (p.prototype._multiplyBySmall = function (t) {
                            return 0 === t.value
                                ? u[0]
                                : 1 === t.value
                                ? this
                                : -1 === t.value
                                ? this.negate()
                                : q(
                                      Math.abs(t.value),
                                      this.value,
                                      this.sign !== t.sign
                                  );
                        }),
                        (a.prototype.multiply = function (t) {
                            return F(t)._multiplyBySmall(this);
                        }),
                        (a.prototype.times = a.prototype.multiply),
                        (s.prototype.multiply = function (t) {
                            return new s(this.value * F(t).value);
                        }),
                        (s.prototype.times = s.prototype.multiply),
                        (p.prototype.square = function () {
                            return new p(N(this.value), !1);
                        }),
                        (a.prototype.square = function () {
                            var t = this.value * this.value;
                            return l(t)
                                ? new a(t)
                                : new p(N(f(Math.abs(this.value))), !1);
                        }),
                        (s.prototype.square = function (t) {
                            return new s(this.value * this.value);
                        }),
                        (p.prototype.divmod = function (t) {
                            var e = O(this, t);
                            return { quotient: e[0], remainder: e[1] };
                        }),
                        (s.prototype.divmod = a.prototype.divmod =
                            p.prototype.divmod),
                        (p.prototype.divide = function (t) {
                            return O(this, t)[0];
                        }),
                        (s.prototype.over = s.prototype.divide = function (t) {
                            return new s(this.value / F(t).value);
                        }),
                        (a.prototype.over = a.prototype.divide = p.prototype.over =
                            p.prototype.divide),
                        (p.prototype.mod = function (t) {
                            return O(this, t)[1];
                        }),
                        (s.prototype.mod = s.prototype.remainder = function (
                            t
                        ) {
                            return new s(this.value % F(t).value);
                        }),
                        (a.prototype.remainder = a.prototype.mod = p.prototype.remainder =
                            p.prototype.mod),
                        (p.prototype.pow = function (t) {
                            var e,
                                r,
                                o,
                                n = F(t),
                                i = this.value,
                                p = n.value;
                            if (0 === p) return u[1];
                            if (0 === i) return u[0];
                            if (1 === i) return u[1];
                            if (-1 === i) return n.isEven() ? u[1] : u[-1];
                            if (n.sign) return u[0];
                            if (!n.isSmall)
                                throw new Error(
                                    "The exponent " +
                                        n.toString() +
                                        " is too large."
                                );
                            if (this.isSmall && l((e = Math.pow(i, p))))
                                return new a(c(e));
                            for (
                                r = this, o = u[1];
                                !0 & p && ((o = o.times(r)), --p), 0 !== p;

                            )
                                (p /= 2), (r = r.square());
                            return o;
                        }),
                        (a.prototype.pow = p.prototype.pow),
                        (s.prototype.pow = function (t) {
                            var e = F(t),
                                r = this.value,
                                o = e.value,
                                n = BigInt(0),
                                i = BigInt(1),
                                p = BigInt(2);
                            if (o === n) return u[1];
                            if (r === n) return u[0];
                            if (r === i) return u[1];
                            if (r === BigInt(-1))
                                return e.isEven() ? u[1] : u[-1];
                            if (e.isNegative()) return new s(n);
                            for (
                                var a = this, l = u[1];
                                (o & i) === i && ((l = l.times(a)), --o),
                                    o !== n;

                            )
                                (o /= p), (a = a.square());
                            return l;
                        }),
                        (p.prototype.modPow = function (t, e) {
                            if (((t = F(t)), (e = F(e)).isZero()))
                                throw new Error(
                                    "Cannot take modPow with modulus 0"
                                );
                            var r = u[1],
                                o = this.mod(e);
                            for (
                                t.isNegative() &&
                                ((t = t.multiply(u[-1])), (o = o.modInv(e)));
                                t.isPositive();

                            ) {
                                if (o.isZero()) return u[0];
                                t.isOdd() && (r = r.multiply(o).mod(e)),
                                    (t = t.divide(2)),
                                    (o = o.square().mod(e));
                            }
                            return r;
                        }),
                        (s.prototype.modPow = a.prototype.modPow =
                            p.prototype.modPow),
                        (p.prototype.compareAbs = function (t) {
                            var e = F(t),
                                r = this.value,
                                o = e.value;
                            return e.isSmall ? 1 : P(r, o);
                        }),
                        (a.prototype.compareAbs = function (t) {
                            var e = F(t),
                                r = Math.abs(this.value),
                                o = e.value;
                            return e.isSmall
                                ? r === (o = Math.abs(o))
                                    ? 0
                                    : r > o
                                    ? 1
                                    : -1
                                : -1;
                        }),
                        (s.prototype.compareAbs = function (t) {
                            var e = this.value,
                                r = F(t).value;
                            return (e = e >= 0 ? e : -e) ===
                                (r = r >= 0 ? r : -r)
                                ? 0
                                : e > r
                                ? 1
                                : -1;
                        }),
                        (p.prototype.compare = function (t) {
                            if (t === 1 / 0) return -1;
                            if (t === -1 / 0) return 1;
                            var e = F(t),
                                r = this.value,
                                o = e.value;
                            return this.sign !== e.sign
                                ? e.sign
                                    ? 1
                                    : -1
                                : e.isSmall
                                ? this.sign
                                    ? -1
                                    : 1
                                : P(r, o) * (this.sign ? -1 : 1);
                        }),
                        (p.prototype.compareTo = p.prototype.compare),
                        (a.prototype.compare = function (t) {
                            if (t === 1 / 0) return -1;
                            if (t === -1 / 0) return 1;
                            var e = F(t),
                                r = this.value,
                                o = e.value;
                            return e.isSmall
                                ? r == o
                                    ? 0
                                    : r > o
                                    ? 1
                                    : -1
                                : r < 0 !== e.sign
                                ? r < 0
                                    ? -1
                                    : 1
                                : r < 0
                                ? 1
                                : -1;
                        }),
                        (a.prototype.compareTo = a.prototype.compare),
                        (s.prototype.compare = function (t) {
                            if (t === 1 / 0) return -1;
                            if (t === -1 / 0) return 1;
                            var e = this.value,
                                r = F(t).value;
                            return e === r ? 0 : e > r ? 1 : -1;
                        }),
                        (s.prototype.compareTo = s.prototype.compare),
                        (p.prototype.equals = function (t) {
                            return 0 === this.compare(t);
                        }),
                        (s.prototype.eq = s.prototype.equals = a.prototype.eq = a.prototype.equals = p.prototype.eq =
                            p.prototype.equals),
                        (p.prototype.notEquals = function (t) {
                            return 0 !== this.compare(t);
                        }),
                        (s.prototype.neq = s.prototype.notEquals = a.prototype.neq = a.prototype.notEquals = p.prototype.neq =
                            p.prototype.notEquals),
                        (p.prototype.greater = function (t) {
                            return this.compare(t) > 0;
                        }),
                        (s.prototype.gt = s.prototype.greater = a.prototype.gt = a.prototype.greater = p.prototype.gt =
                            p.prototype.greater),
                        (p.prototype.lesser = function (t) {
                            return this.compare(t) < 0;
                        }),
                        (s.prototype.lt = s.prototype.lesser = a.prototype.lt = a.prototype.lesser = p.prototype.lt =
                            p.prototype.lesser),
                        (p.prototype.greaterOrEquals = function (t) {
                            return this.compare(t) >= 0;
                        }),
                        (s.prototype.geq = s.prototype.greaterOrEquals = a.prototype.geq = a.prototype.greaterOrEquals = p.prototype.geq =
                            p.prototype.greaterOrEquals),
                        (p.prototype.lesserOrEquals = function (t) {
                            return this.compare(t) <= 0;
                        }),
                        (s.prototype.leq = s.prototype.lesserOrEquals = a.prototype.leq = a.prototype.lesserOrEquals = p.prototype.leq =
                            p.prototype.lesserOrEquals),
                        (p.prototype.isEven = function () {
                            return 0 === (1 & this.value[0]);
                        }),
                        (a.prototype.isEven = function () {
                            return 0 === (1 & this.value);
                        }),
                        (s.prototype.isEven = function () {
                            return (this.value & BigInt(1)) === BigInt(0);
                        }),
                        (p.prototype.isOdd = function () {
                            return 1 === (1 & this.value[0]);
                        }),
                        (a.prototype.isOdd = function () {
                            return 1 === (1 & this.value);
                        }),
                        (s.prototype.isOdd = function () {
                            return (this.value & BigInt(1)) === BigInt(1);
                        }),
                        (p.prototype.isPositive = function () {
                            return !this.sign;
                        }),
                        (a.prototype.isPositive = function () {
                            return this.value > 0;
                        }),
                        (s.prototype.isPositive = a.prototype.isPositive),
                        (p.prototype.isNegative = function () {
                            return this.sign;
                        }),
                        (a.prototype.isNegative = function () {
                            return this.value < 0;
                        }),
                        (s.prototype.isNegative = a.prototype.isNegative),
                        (p.prototype.isUnit = function () {
                            return !1;
                        }),
                        (a.prototype.isUnit = function () {
                            return 1 === Math.abs(this.value);
                        }),
                        (s.prototype.isUnit = function () {
                            return this.abs().value === BigInt(1);
                        }),
                        (p.prototype.isZero = function () {
                            return !1;
                        }),
                        (a.prototype.isZero = function () {
                            return 0 === this.value;
                        }),
                        (s.prototype.isZero = function () {
                            return this.value === BigInt(0);
                        }),
                        (p.prototype.isDivisibleBy = function (t) {
                            var e = F(t);
                            return (
                                !e.isZero() &&
                                (!!e.isUnit() ||
                                    (0 === e.compareAbs(2)
                                        ? this.isEven()
                                        : this.mod(e).isZero()))
                            );
                        }),
                        (s.prototype.isDivisibleBy = a.prototype.isDivisibleBy =
                            p.prototype.isDivisibleBy),
                        (p.prototype.isPrime = function (t) {
                            var e = I(this);
                            if (void 0 !== e) return e;
                            var r = this.abs(),
                                o = r.bitLength();
                            if (o <= 64)
                                return B(r, [
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
                                var i = Math.log(2) * o.toJSNumber(),
                                    u = Math.ceil(
                                        !0 === t ? 2 * Math.pow(i, 2) : i
                                    ),
                                    p = [],
                                    a = 0;
                                a < u;
                                a++
                            )
                                p.push(n(a + 2));
                            return B(r, p);
                        }),
                        (s.prototype.isPrime = a.prototype.isPrime =
                            p.prototype.isPrime),
                        (p.prototype.isProbablePrime = function (t, e) {
                            var r = I(this);
                            if (void 0 !== r) return r;
                            for (
                                var o = this.abs(),
                                    i = void 0 === t ? 5 : t,
                                    u = [],
                                    p = 0;
                                p < i;
                                p++
                            )
                                u.push(n.randBetween(2, o.minus(2), e));
                            return B(o, u);
                        }),
                        (s.prototype.isProbablePrime = a.prototype.isProbablePrime =
                            p.prototype.isProbablePrime),
                        (p.prototype.modInv = function (t) {
                            for (
                                var e,
                                    r,
                                    o,
                                    i = n.zero,
                                    u = n.one,
                                    p = F(t),
                                    a = this.abs();
                                !a.isZero();

                            )
                                (e = p.divide(a)),
                                    (r = i),
                                    (o = p),
                                    (i = u),
                                    (p = a),
                                    (u = r.subtract(e.multiply(u))),
                                    (a = o.subtract(e.multiply(a)));
                            if (!p.isUnit())
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
                        (s.prototype.modInv = a.prototype.modInv =
                            p.prototype.modInv),
                        (p.prototype.next = function () {
                            var t = this.value;
                            return this.sign
                                ? b(t, 1, this.sign)
                                : new p(d(t, 1), this.sign);
                        }),
                        (a.prototype.next = function () {
                            var t = this.value;
                            return t + 1 < r ? new a(t + 1) : new p(o, !1);
                        }),
                        (s.prototype.next = function () {
                            return new s(this.value + BigInt(1));
                        }),
                        (p.prototype.prev = function () {
                            var t = this.value;
                            return this.sign
                                ? new p(d(t, 1), !0)
                                : b(t, 1, this.sign);
                        }),
                        (a.prototype.prev = function () {
                            var t = this.value;
                            return t - 1 > -r ? new a(t - 1) : new p(o, !0);
                        }),
                        (s.prototype.prev = function () {
                            return new s(this.value - BigInt(1));
                        });
                    for (var x = [1]; 2 * x[x.length - 1] <= e; )
                        x.push(2 * x[x.length - 1]);
                    var A = x.length,
                        Z = x[A - 1];
                    function j(t) {
                        return Math.abs(t) <= e;
                    }
                    function J(t, e, r) {
                        e = F(e);
                        for (
                            var o = t.isNegative(),
                                i = e.isNegative(),
                                u = o ? t.not() : t,
                                p = i ? e.not() : e,
                                a = 0,
                                s = 0,
                                l = null,
                                f = null,
                                v = [];
                            !u.isZero() || !p.isZero();

                        )
                            (a = (l = O(u, Z))[1].toJSNumber()),
                                o && (a = Z - 1 - a),
                                (s = (f = O(p, Z))[1].toJSNumber()),
                                i && (s = Z - 1 - s),
                                (u = l[0]),
                                (p = f[0]),
                                v.push(r(a, s));
                        for (
                            var y =
                                    0 !== r(o ? 1 : 0, i ? 1 : 0)
                                        ? n(-1)
                                        : n(0),
                                h = v.length - 1;
                            h >= 0;
                            h -= 1
                        )
                            y = y.multiply(Z).add(n(v[h]));
                        return y;
                    }
                    (p.prototype.shiftLeft = function (t) {
                        var e = F(t).toJSNumber();
                        if (!j(e))
                            throw new Error(
                                String(e) + " is too large for shifting."
                            );
                        if (e < 0) return this.shiftRight(-e);
                        var r = this;
                        if (r.isZero()) return r;
                        for (; e >= A; ) (r = r.multiply(Z)), (e -= A - 1);
                        return r.multiply(x[e]);
                    }),
                        (s.prototype.shiftLeft = a.prototype.shiftLeft =
                            p.prototype.shiftLeft),
                        (p.prototype.shiftRight = function (t) {
                            var e,
                                r = F(t).toJSNumber();
                            if (!j(r))
                                throw new Error(
                                    String(r) + " is too large for shifting."
                                );
                            if (r < 0) return this.shiftLeft(-r);
                            for (var o = this; r >= A; ) {
                                if (
                                    o.isZero() ||
                                    (o.isNegative() && o.isUnit())
                                )
                                    return o;
                                (o = (e = O(o, Z))[1].isNegative()
                                    ? e[0].prev()
                                    : e[0]),
                                    (r -= A - 1);
                            }
                            return (e = O(o, x[r]))[1].isNegative()
                                ? e[0].prev()
                                : e[0];
                        }),
                        (s.prototype.shiftRight = a.prototype.shiftRight =
                            p.prototype.shiftRight),
                        (p.prototype.not = function () {
                            return this.negate().prev();
                        }),
                        (s.prototype.not = a.prototype.not = p.prototype.not),
                        (p.prototype.and = function (t) {
                            return J(this, t, function (t, e) {
                                return t & e;
                            });
                        }),
                        (s.prototype.and = a.prototype.and = p.prototype.and),
                        (p.prototype.or = function (t) {
                            return J(this, t, function (t, e) {
                                return t | e;
                            });
                        }),
                        (s.prototype.or = a.prototype.or = p.prototype.or),
                        (p.prototype.xor = function (t) {
                            return J(this, t, function (t, e) {
                                return t ^ e;
                            });
                        }),
                        (s.prototype.xor = a.prototype.xor = p.prototype.xor);
                    function L(t) {
                        var r = t.value,
                            o =
                                "number" === typeof r
                                    ? r | (1 << 30)
                                    : "bigint" === typeof r
                                    ? r | BigInt(1 << 30)
                                    : (r[0] + r[1] * e) | 1073758208;
                        return o & -o;
                    }
                    function U(t, e) {
                        return (t = F(t)), (e = F(e)), t.greater(e) ? t : e;
                    }
                    function T(t, e) {
                        return (t = F(t)), (e = F(e)), t.lesser(e) ? t : e;
                    }
                    function k(t, e) {
                        if (((t = F(t).abs()), (e = F(e).abs()), t.equals(e)))
                            return t;
                        if (t.isZero()) return e;
                        if (e.isZero()) return t;
                        for (var r, o, n = u[1]; t.isEven() && e.isEven(); )
                            (r = T(L(t), L(e))),
                                (t = t.divide(r)),
                                (e = e.divide(r)),
                                (n = n.multiply(r));
                        for (; t.isEven(); ) t = t.divide(L(t));
                        do {
                            for (; e.isEven(); ) e = e.divide(L(e));
                            t.greater(e) && ((o = e), (e = t), (t = o)),
                                (e = e.subtract(t));
                        } while (!e.isZero());
                        return n.isUnit() ? t : t.multiply(n);
                    }
                    (p.prototype.bitLength = function () {
                        var t = this;
                        return (
                            t.compareTo(n(0)) < 0 &&
                                (t = t.negate().subtract(n(1))),
                            0 === t.compareTo(n(0))
                                ? n(0)
                                : n(
                                      (function t(e, r) {
                                          if (r.compareTo(e) <= 0) {
                                              var o = t(e, r.square(r)),
                                                  i = o.p,
                                                  u = o.e,
                                                  p = i.multiply(r);
                                              return p.compareTo(e) <= 0
                                                  ? { p: p, e: 2 * u + 1 }
                                                  : { p: i, e: 2 * u };
                                          }
                                          return { p: n(1), e: 0 };
                                      })(t, n(2)).e
                                  ).add(n(1))
                        );
                    }),
                        (s.prototype.bitLength = a.prototype.bitLength =
                            p.prototype.bitLength);
                    var z = function (t, e, r, o) {
                        (r = r || "0123456789abcdefghijklmnopqrstuvwxyz"),
                            (t = String(t)),
                            o || ((t = t.toLowerCase()), (r = r.toLowerCase()));
                        var n,
                            i = t.length,
                            u = Math.abs(e),
                            p = {};
                        for (n = 0; n < r.length; n++) p[r[n]] = n;
                        for (n = 0; n < i; n++) {
                            if ("-" !== (l = t[n]) && l in p && p[l] >= u) {
                                if ("1" === l && 1 === u) continue;
                                throw new Error(
                                    l +
                                        " is not a valid digit in base " +
                                        e +
                                        "."
                                );
                            }
                        }
                        e = F(e);
                        var a = [],
                            s = "-" === t[0];
                        for (n = s ? 1 : 0; n < t.length; n++) {
                            var l;
                            if ((l = t[n]) in p) a.push(F(p[l]));
                            else {
                                if ("<" !== l)
                                    throw new Error(
                                        l + " is not a valid character"
                                    );
                                var f = n;
                                do {
                                    n++;
                                } while (">" !== t[n] && n < t.length);
                                a.push(F(t.slice(f + 1, n)));
                            }
                        }
                        return C(a, e, s);
                    };
                    function C(t, e, r) {
                        var o,
                            n = u[0],
                            i = u[1];
                        for (o = t.length - 1; o >= 0; o--)
                            (n = n.add(t[o].times(i))), (i = i.times(e));
                        return r ? n.negate() : n;
                    }
                    function D(t, e) {
                        if ((e = n(e)).isZero()) {
                            if (t.isZero())
                                return { value: [0], isNegative: !1 };
                            throw new Error(
                                "Cannot convert nonzero numbers to base 0."
                            );
                        }
                        if (e.equals(-1)) {
                            if (t.isZero())
                                return { value: [0], isNegative: !1 };
                            if (t.isNegative())
                                return {
                                    value: [].concat.apply(
                                        [],
                                        Array.apply(
                                            null,
                                            Array(-t.toJSNumber())
                                        ).map(Array.prototype.valueOf, [1, 0])
                                    ),
                                    isNegative: !1,
                                };
                            var r = Array.apply(
                                null,
                                Array(t.toJSNumber() - 1)
                            ).map(Array.prototype.valueOf, [0, 1]);
                            return (
                                r.unshift([1]),
                                {
                                    value: [].concat.apply([], r),
                                    isNegative: !1,
                                }
                            );
                        }
                        var o = !1;
                        if (
                            (t.isNegative() &&
                                e.isPositive() &&
                                ((o = !0), (t = t.abs())),
                            e.isUnit())
                        )
                            return t.isZero()
                                ? { value: [0], isNegative: !1 }
                                : {
                                      value: Array.apply(
                                          null,
                                          Array(t.toJSNumber())
                                      ).map(Number.prototype.valueOf, 1),
                                      isNegative: o,
                                  };
                        for (
                            var i, u = [], p = t;
                            p.isNegative() || p.compareAbs(e) >= 0;

                        ) {
                            (i = p.divmod(e)), (p = i.quotient);
                            var a = i.remainder;
                            a.isNegative() &&
                                ((a = e.minus(a).abs()), (p = p.next())),
                                u.push(a.toJSNumber());
                        }
                        return (
                            u.push(p.toJSNumber()),
                            { value: u.reverse(), isNegative: o }
                        );
                    }
                    function R(t, e, r) {
                        var o = D(t, e);
                        return (
                            (o.isNegative ? "-" : "") +
                            o.value
                                .map(function (t) {
                                    return (function (t, e) {
                                        return t <
                                            (e =
                                                e ||
                                                "0123456789abcdefghijklmnopqrstuvwxyz")
                                                .length
                                            ? e[t]
                                            : "<" + t + ">";
                                    })(t, r);
                                })
                                .join("")
                        );
                    }
                    function $(t) {
                        if (l(+t)) {
                            var e = +t;
                            if (e === c(e))
                                return i ? new s(BigInt(e)) : new a(e);
                            throw new Error("Invalid integer: " + t);
                        }
                        var r = "-" === t[0];
                        r && (t = t.slice(1));
                        var o = t.split(/e/i);
                        if (o.length > 2)
                            throw new Error("Invalid integer: " + o.join("e"));
                        if (2 === o.length) {
                            var n = o[1];
                            if (
                                ("+" === n[0] && (n = n.slice(1)),
                                (n = +n) !== c(n) || !l(n))
                            )
                                throw new Error(
                                    "Invalid integer: " +
                                        n +
                                        " is not a valid exponent."
                                );
                            var u = o[0],
                                f = u.indexOf(".");
                            if (
                                (f >= 0 &&
                                    ((n -= u.length - f - 1),
                                    (u = u.slice(0, f) + u.slice(f + 1))),
                                n < 0)
                            )
                                throw new Error(
                                    "Cannot include negative exponent part for integers"
                                );
                            t = u += new Array(n + 1).join("0");
                        }
                        if (!/^([0-9][0-9]*)$/.test(t))
                            throw new Error("Invalid integer: " + t);
                        if (i) return new s(BigInt(r ? "-" + t : t));
                        for (var v = [], h = t.length, g = h - 7; h > 0; )
                            v.push(+t.slice(g, h)),
                                (g -= 7) < 0 && (g = 0),
                                (h -= 7);
                        return y(v), new p(v, r);
                    }
                    function F(t) {
                        return "number" === typeof t
                            ? (function (t) {
                                  if (i) return new s(BigInt(t));
                                  if (l(t)) {
                                      if (t !== c(t))
                                          throw new Error(
                                              t + " is not an integer."
                                          );
                                      return new a(t);
                                  }
                                  return $(t.toString());
                              })(t)
                            : "string" === typeof t
                            ? $(t)
                            : "bigint" === typeof t
                            ? new s(t)
                            : t;
                    }
                    (p.prototype.toArray = function (t) {
                        return D(this, t);
                    }),
                        (a.prototype.toArray = function (t) {
                            return D(this, t);
                        }),
                        (s.prototype.toArray = function (t) {
                            return D(this, t);
                        }),
                        (p.prototype.toString = function (t, e) {
                            if ((void 0 === t && (t = 10), 10 !== t))
                                return R(this, t, e);
                            for (
                                var r,
                                    o = this.value,
                                    n = o.length,
                                    i = String(o[--n]);
                                --n >= 0;

                            )
                                (r = String(o[n])),
                                    (i += "0000000".slice(r.length) + r);
                            return (this.sign ? "-" : "") + i;
                        }),
                        (a.prototype.toString = function (t, e) {
                            return (
                                void 0 === t && (t = 10),
                                10 != t ? R(this, t, e) : String(this.value)
                            );
                        }),
                        (s.prototype.toString = a.prototype.toString),
                        (s.prototype.toJSON = p.prototype.toJSON = a.prototype.toJSON = function () {
                            return this.toString();
                        }),
                        (p.prototype.valueOf = function () {
                            return parseInt(this.toString(), 10);
                        }),
                        (p.prototype.toJSNumber = p.prototype.valueOf),
                        (a.prototype.valueOf = function () {
                            return this.value;
                        }),
                        (a.prototype.toJSNumber = a.prototype.valueOf),
                        (s.prototype.valueOf = s.prototype.toJSNumber = function () {
                            return parseInt(this.toString(), 10);
                        });
                    for (var G = 0; G < 1e3; G++)
                        (u[G] = F(G)), G > 0 && (u[-G] = F(-G));
                    return (
                        (u.one = u[1]),
                        (u.zero = u[0]),
                        (u.minusOne = u[-1]),
                        (u.max = U),
                        (u.min = T),
                        (u.gcd = k),
                        (u.lcm = function (t, e) {
                            return (
                                (t = F(t).abs()),
                                (e = F(e).abs()),
                                t.divide(k(t, e)).multiply(e)
                            );
                        }),
                        (u.isInstance = function (t) {
                            return (
                                t instanceof p ||
                                t instanceof a ||
                                t instanceof s
                            );
                        }),
                        (u.randBetween = function (t, r, o) {
                            (t = F(t)), (r = F(r));
                            var n = o || Math.random,
                                i = T(t, r),
                                p = U(t, r).subtract(i).add(1);
                            if (p.isSmall) return i.add(Math.floor(n() * p));
                            for (
                                var a = D(p, e).value, s = [], l = !0, f = 0;
                                f < a.length;
                                f++
                            ) {
                                var v = l ? a[f] : e,
                                    y = c(n() * v);
                                s.push(y), y < v && (l = !1);
                            }
                            return i.add(u.fromArray(s, e, !1));
                        }),
                        (u.fromArray = function (t, e, r) {
                            return C(t.map(F), F(e || 10), r);
                        }),
                        u
                    );
                })();
            t.hasOwnProperty("exports") && (t.exports = n),
                void 0 ===
                    (o = function () {
                        return n;
                    }.call(e, r, e, t)) || (t.exports = o);
        }.call(this, r(2)(t)));
    },
    function (t, e, r) {
        "use strict";
        r.r(e);
        var o = r(0),
            n = r.n(o);
        addEventListener("message", function (t) {
            var e;
            (n.a.abs = function (t) {
                return n()(t).abs();
            }),
                (n.a.mul = function (t, e) {
                    return n()(t).multiply(e);
                }),
                (n.a.div = function (t, e) {
                    return n()(t).divide(e);
                }),
                (n.a.add = function (t, e) {
                    return n()(t).add(e);
                }),
                (n()().__proto__.cmp = n()().__proto__.compare),
                (n()().__proto__.div = n()().__proto__.divide),
                (n()().__proto__.mul = n()().__proto__.multiply),
                (n()("90071992547409920").__proto__.cmp = n()(
                    "90071992547409920"
                ).__proto__.compare),
                (n()("90071992547409920").__proto__.div = n()(
                    "90071992547409920"
                ).__proto__.divide),
                (n()("90071992547409920").__proto__.mul = n()(
                    "90071992547409920"
                ).__proto__.multiply),
                (e = t.data[0]);
            for (
                var r = t.data[1],
                    o = t.data[2],
                    i = new n.a(0),
                    u = new n.a(1),
                    p = new n.a("1e" + e),
                    a = new n.a(0),
                    s = 1,
                    l = new n.a(1),
                    f = 0,
                    v = o;
                f < v;
                f++
            )
                (s *= -1), (u = n.a.mul(u, 1024)), (a = a.plus(1));
            for (
                ;
                n.a.abs(l).cmp(new n.a(0)) >= 0 &&
                ((l = n.a
                    .mul(1, s)
                    .mul(
                        n.a
                            .div(p.mul(-Math.pow(2, 5)), n.a.mul(4, a).plus(1))
                            .plus(n.a.div(p.mul(-1), n.a.mul(4, a).plus(3)))
                            .plus(
                                n.a.div(
                                    p.mul(Math.pow(2, 8)),
                                    n.a.mul(10, a).plus(1)
                                )
                            )
                            .plus(
                                n.a.div(
                                    p.mul(-Math.pow(2, 6)),
                                    n.a.mul(10, a).plus(3)
                                )
                            )
                            .plus(
                                n.a.div(
                                    p.mul(-Math.pow(2, 2)),
                                    n.a.mul(10, a).plus(5)
                                )
                            )
                            .plus(
                                n.a.div(
                                    p.mul(-Math.pow(2, 2)),
                                    n.a.mul(10, a).plus(7)
                                )
                            )
                            .plus(n.a.div(p.mul(1), n.a.mul(10, a).plus(9)))
                    )
                    .div(n.a.mul(Math.pow(2, 6), u))),
                (i = n.a.add(i, l)),
                !(n.a.abs(l).cmp(new n.a(0)) <= 0));

            )
                for (var y = 0, h = r; y < h; y++)
                    (s *= -1), (u = n.a.mul(u, 1024)), (a = a.plus(1));
            postMessage([i.toString(), "" + a.plus(1)]);
        });
    },
    function (t, e) {
        t.exports = function (t) {
            return (
                t.webpackPolyfill ||
                    ((t.deprecate = function () {}),
                    (t.paths = []),
                    t.children || (t.children = []),
                    Object.defineProperty(t, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return t.l;
                        },
                    }),
                    Object.defineProperty(t, "id", {
                        enumerable: !0,
                        get: function () {
                            return t.i;
                        },
                    }),
                    (t.webpackPolyfill = 1)),
                t
            );
        };
    },
]);
