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
        (r.p = "https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.4.1/"),
        r((r.s = 1));
})([
    function (t, e, r) {
        (function (t) {
            var o,
                n = (function (t) {
                    "use strict";
                    var e = 1e7,
                        r = 7,
                        o = 9007199254740992,
                        i = h(o),
                        u = "0123456789abcdefghijklmnopqrstuvwxyz",
                        p = "function" === typeof BigInt;
                    function a(t, e, r, o) {
                        return "undefined" === typeof t
                            ? a[0]
                            : "undefined" !== typeof e && (10 !== +e || r)
                            ? $(t, e, r, o)
                            : Q(t);
                    }
                    function s(t, e) {
                        (this.value = t), (this.sign = e), (this.isSmall = !1);
                    }
                    function l(t) {
                        (this.value = t),
                            (this.sign = t < 0),
                            (this.isSmall = !0);
                    }
                    function f(t) {
                        this.value = t;
                    }
                    function v(t) {
                        return -o < t && t < o;
                    }
                    function h(t) {
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
                    function y(t) {
                        c(t);
                        var r = t.length;
                        if (r < 4 && B(t, i) < 0)
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
                    function c(t) {
                        for (var e = t.length; 0 === t[--e]; );
                        t.length = e + 1;
                    }
                    function g(t) {
                        for (var e = new Array(t), r = -1; ++r < t; ) e[r] = 0;
                        return e;
                    }
                    function m(t) {
                        return t > 0 ? Math.floor(t) : Math.ceil(t);
                    }
                    function d(t, r) {
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
                    function w(t, e) {
                        return t.length >= e.length ? d(t, e) : d(e, t);
                    }
                    function b(t, r) {
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
                    function S(t, r) {
                        var o,
                            n,
                            i = t.length,
                            u = r.length,
                            p = new Array(i),
                            a = 0,
                            s = e;
                        for (o = 0; o < u; o++)
                            (n = t[o] - a - r[o]) < 0
                                ? ((n += s), (a = 1))
                                : (a = 0),
                                (p[o] = n);
                        for (o = u; o < i; o++) {
                            if (!((n = t[o] - a) < 0)) {
                                p[o++] = n;
                                break;
                            }
                            (n += s), (p[o] = n);
                        }
                        for (; o < i; o++) p[o] = t[o];
                        return c(p), p;
                    }
                    function _(t, r, o) {
                        var n,
                            i,
                            u = t.length,
                            p = new Array(u),
                            a = -r,
                            f = e;
                        for (n = 0; n < u; n++)
                            (i = t[n] + a),
                                (a = Math.floor(i / f)),
                                (i %= f),
                                (p[n] = i < 0 ? i + f : i);
                        return "number" === typeof (p = y(p))
                            ? (o && (p = -p), new l(p))
                            : new s(p, o);
                    }
                    function M(t, r) {
                        var o,
                            n,
                            i,
                            u,
                            p = t.length,
                            a = r.length,
                            s = g(p + a),
                            l = e;
                        for (i = 0; i < p; ++i) {
                            u = t[i];
                            for (var f = 0; f < a; ++f)
                                (o = u * r[f] + s[i + f]),
                                    (n = Math.floor(o / l)),
                                    (s[i + f] = o - n * l),
                                    (s[i + f + 1] += n);
                        }
                        return c(s), s;
                    }
                    function q(t, r) {
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
                    function N(t, e) {
                        for (var r = []; e-- > 0; ) r.push(0);
                        return r.concat(t);
                    }
                    function E(t, r, o) {
                        return new s(t < e ? q(r, t) : M(r, h(t)), o);
                    }
                    function O(t) {
                        var r,
                            o,
                            n,
                            i,
                            u = t.length,
                            p = g(u + u),
                            a = e;
                        for (n = 0; n < u; n++) {
                            o = 0 - (i = t[n]) * i;
                            for (var s = n; s < u; s++)
                                (r = i * t[s] * 2 + p[n + s] + o),
                                    (o = Math.floor(r / a)),
                                    (p[n + s] = r - o * a);
                            p[n + u] = o;
                        }
                        return c(p), p;
                    }
                    function P(t, r) {
                        var o,
                            n,
                            i,
                            u,
                            p = t.length,
                            a = g(p),
                            s = e;
                        for (i = 0, o = p - 1; o >= 0; --o)
                            (i = (u = i * s + t[o]) - (n = m(u / r)) * r),
                                (a[o] = 0 | n);
                        return [a, 0 | i];
                    }
                    function I(t, r) {
                        var o,
                            n = Q(r);
                        if (p)
                            return [
                                new f(t.value / n.value),
                                new f(t.value % n.value),
                            ];
                        var i,
                            u = t.value,
                            v = n.value;
                        if (0 === v) throw new Error("Cannot divide by zero");
                        if (t.isSmall)
                            return n.isSmall
                                ? [new l(m(u / v)), new l(u % v)]
                                : [a[0], t];
                        if (n.isSmall) {
                            if (1 === v) return [t, a[0]];
                            if (-1 == v) return [t.negate(), a[0]];
                            var d = Math.abs(v);
                            if (d < e) {
                                i = y((o = P(u, d))[0]);
                                var w = o[1];
                                return (
                                    t.sign && (w = -w),
                                    "number" === typeof i
                                        ? (t.sign !== n.sign && (i = -i),
                                          [new l(i), new l(w)])
                                        : [
                                              new s(i, t.sign !== n.sign),
                                              new l(w),
                                          ]
                                );
                            }
                            v = h(d);
                        }
                        var b = B(u, v);
                        if (-1 === b) return [a[0], t];
                        if (0 === b)
                            return [a[t.sign === n.sign ? 1 : -1], a[0]];
                        i = (o =
                            u.length + v.length <= 200
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
                                          v = e,
                                          h = g(r.length),
                                          c = r[f - 1],
                                          m = Math.ceil(v / (2 * c)),
                                          d = q(t, m),
                                          w = q(r, m);
                                      for (
                                          d.length <= l && d.push(0),
                                              w.push(0),
                                              c = w[f - 1],
                                              n = l - f;
                                          n >= 0;
                                          n--
                                      ) {
                                          for (
                                              o = v - 1,
                                                  d[n + f] !== c &&
                                                      (o = Math.floor(
                                                          (d[n + f] * v +
                                                              d[n + f - 1]) /
                                                              c
                                                      )),
                                                  i = 0,
                                                  u = 0,
                                                  a = w.length,
                                                  p = 0;
                                              p < a;
                                              p++
                                          )
                                              (i += o * w[p]),
                                                  (s = Math.floor(i / v)),
                                                  (u += d[n + p] - (i - s * v)),
                                                  (i = s),
                                                  u < 0
                                                      ? ((d[n + p] = u + v),
                                                        (u = -1))
                                                      : ((d[n + p] = u),
                                                        (u = 0));
                                          for (; 0 !== u; ) {
                                              for (
                                                  o -= 1, i = 0, p = 0;
                                                  p < a;
                                                  p++
                                              )
                                                  (i += d[n + p] - v + w[p]) < 0
                                                      ? ((d[n + p] = i + v),
                                                        (i = 0))
                                                      : ((d[n + p] = i),
                                                        (i = 1));
                                              u += i;
                                          }
                                          h[n] = o;
                                      }
                                      return (d = P(d, m)[0]), [y(h), y(d)];
                                  })(u, v)
                                : (function (t, r) {
                                      for (
                                          var o,
                                              n,
                                              i,
                                              u,
                                              p,
                                              a = t.length,
                                              s = r.length,
                                              l = [],
                                              f = [],
                                              v = e;
                                          a;

                                      )
                                          if (
                                              (f.unshift(t[--a]),
                                              c(f),
                                              B(f, r) < 0)
                                          )
                                              l.push(0);
                                          else {
                                              (i =
                                                  f[(n = f.length) - 1] * v +
                                                  f[n - 2]),
                                                  (u = r[s - 1] * v + r[s - 2]),
                                                  n > s && (i = (i + 1) * v),
                                                  (o = Math.ceil(i / u));
                                              do {
                                                  if (B((p = q(r, o)), f) <= 0)
                                                      break;
                                                  o--;
                                              } while (o);
                                              l.push(o), (f = S(f, p));
                                          }
                                      return l.reverse(), [y(l), y(f)];
                                  })(u, v))[0];
                        var _ = t.sign !== n.sign,
                            M = o[1],
                            N = t.sign;
                        return (
                            "number" === typeof i
                                ? (_ && (i = -i), (i = new l(i)))
                                : (i = new s(i, _)),
                            "number" === typeof M
                                ? (N && (M = -M), (M = new l(M)))
                                : (M = new s(M, N)),
                            [i, M]
                        );
                    }
                    function B(t, e) {
                        if (t.length !== e.length)
                            return t.length > e.length ? 1 : -1;
                        for (var r = t.length - 1; r >= 0; r--)
                            if (t[r] !== e[r]) return t[r] > e[r] ? 1 : -1;
                        return 0;
                    }
                    function x(t) {
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
                    function A(t, e) {
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
                    (s.prototype = Object.create(a.prototype)),
                        (l.prototype = Object.create(a.prototype)),
                        (f.prototype = Object.create(a.prototype)),
                        (s.prototype.add = function (t) {
                            var e = Q(t);
                            if (this.sign !== e.sign)
                                return this.subtract(e.negate());
                            var r = this.value,
                                o = e.value;
                            return e.isSmall
                                ? new s(b(r, Math.abs(o)), this.sign)
                                : new s(w(r, o), this.sign);
                        }),
                        (s.prototype.plus = s.prototype.add),
                        (l.prototype.add = function (t) {
                            var e = Q(t),
                                r = this.value;
                            if (r < 0 !== e.sign)
                                return this.subtract(e.negate());
                            var o = e.value;
                            if (e.isSmall) {
                                if (v(r + o)) return new l(r + o);
                                o = h(Math.abs(o));
                            }
                            return new s(b(o, Math.abs(r)), r < 0);
                        }),
                        (l.prototype.plus = l.prototype.add),
                        (f.prototype.add = function (t) {
                            return new f(this.value + Q(t).value);
                        }),
                        (f.prototype.plus = f.prototype.add),
                        (s.prototype.subtract = function (t) {
                            var e = Q(t);
                            if (this.sign !== e.sign)
                                return this.add(e.negate());
                            var r = this.value,
                                o = e.value;
                            return e.isSmall
                                ? _(r, Math.abs(o), this.sign)
                                : (function (t, e, r) {
                                      var o;
                                      return (
                                          B(t, e) >= 0
                                              ? (o = S(t, e))
                                              : ((o = S(e, t)), (r = !r)),
                                          "number" === typeof (o = y(o))
                                              ? (r && (o = -o), new l(o))
                                              : new s(o, r)
                                      );
                                  })(r, o, this.sign);
                        }),
                        (s.prototype.minus = s.prototype.subtract),
                        (l.prototype.subtract = function (t) {
                            var e = Q(t),
                                r = this.value;
                            if (r < 0 !== e.sign) return this.add(e.negate());
                            var o = e.value;
                            return e.isSmall
                                ? new l(r - o)
                                : _(o, Math.abs(r), r >= 0);
                        }),
                        (l.prototype.minus = l.prototype.subtract),
                        (f.prototype.subtract = function (t) {
                            return new f(this.value - Q(t).value);
                        }),
                        (f.prototype.minus = f.prototype.subtract),
                        (s.prototype.negate = function () {
                            return new s(this.value, !this.sign);
                        }),
                        (l.prototype.negate = function () {
                            var t = this.sign,
                                e = new l(-this.value);
                            return (e.sign = !t), e;
                        }),
                        (f.prototype.negate = function () {
                            return new f(-this.value);
                        }),
                        (s.prototype.abs = function () {
                            return new s(this.value, !1);
                        }),
                        (l.prototype.abs = function () {
                            return new l(Math.abs(this.value));
                        }),
                        (f.prototype.abs = function () {
                            return new f(
                                this.value >= 0 ? this.value : -this.value
                            );
                        }),
                        (s.prototype.multiply = function (t) {
                            var r,
                                o,
                                n,
                                i = Q(t),
                                u = this.value,
                                p = i.value,
                                l = this.sign !== i.sign;
                            if (i.isSmall) {
                                if (0 === p) return a[0];
                                if (1 === p) return this;
                                if (-1 === p) return this.negate();
                                if ((r = Math.abs(p)) < e)
                                    return new s(q(u, r), l);
                                p = h(r);
                            }
                            return (
                                (o = u.length),
                                (n = p.length),
                                new s(
                                    -0.012 * o - 0.012 * n + 15e-6 * o * n > 0
                                        ? (function t(e, r) {
                                              var o = Math.max(
                                                  e.length,
                                                  r.length
                                              );
                                              if (o <= 30) return M(e, r);
                                              o = Math.ceil(o / 2);
                                              var n = e.slice(o),
                                                  i = e.slice(0, o),
                                                  u = r.slice(o),
                                                  p = r.slice(0, o),
                                                  a = t(i, p),
                                                  s = t(n, u),
                                                  l = t(w(i, n), w(p, u)),
                                                  f = w(
                                                      w(a, N(S(S(l, a), s), o)),
                                                      N(s, 2 * o)
                                                  );
                                              return c(f), f;
                                          })(u, p)
                                        : M(u, p),
                                    l
                                )
                            );
                        }),
                        (s.prototype.times = s.prototype.multiply),
                        (l.prototype._multiplyBySmall = function (t) {
                            return v(t.value * this.value)
                                ? new l(t.value * this.value)
                                : E(
                                      Math.abs(t.value),
                                      h(Math.abs(this.value)),
                                      this.sign !== t.sign
                                  );
                        }),
                        (s.prototype._multiplyBySmall = function (t) {
                            return 0 === t.value
                                ? a[0]
                                : 1 === t.value
                                ? this
                                : -1 === t.value
                                ? this.negate()
                                : E(
                                      Math.abs(t.value),
                                      this.value,
                                      this.sign !== t.sign
                                  );
                        }),
                        (l.prototype.multiply = function (t) {
                            return Q(t)._multiplyBySmall(this);
                        }),
                        (l.prototype.times = l.prototype.multiply),
                        (f.prototype.multiply = function (t) {
                            return new f(this.value * Q(t).value);
                        }),
                        (f.prototype.times = f.prototype.multiply),
                        (s.prototype.square = function () {
                            return new s(O(this.value), !1);
                        }),
                        (l.prototype.square = function () {
                            var t = this.value * this.value;
                            return v(t)
                                ? new l(t)
                                : new s(O(h(Math.abs(this.value))), !1);
                        }),
                        (f.prototype.square = function (t) {
                            return new f(this.value * this.value);
                        }),
                        (s.prototype.divmod = function (t) {
                            var e = I(this, t);
                            return { quotient: e[0], remainder: e[1] };
                        }),
                        (f.prototype.divmod = l.prototype.divmod =
                            s.prototype.divmod),
                        (s.prototype.divide = function (t) {
                            return I(this, t)[0];
                        }),
                        (f.prototype.over = f.prototype.divide = function (t) {
                            return new f(this.value / Q(t).value);
                        }),
                        (l.prototype.over = l.prototype.divide = s.prototype.over =
                            s.prototype.divide),
                        (s.prototype.mod = function (t) {
                            return I(this, t)[1];
                        }),
                        (f.prototype.mod = f.prototype.remainder = function (
                            t
                        ) {
                            return new f(this.value % Q(t).value);
                        }),
                        (l.prototype.remainder = l.prototype.mod = s.prototype.remainder =
                            s.prototype.mod),
                        (s.prototype.pow = function (t) {
                            var e,
                                r,
                                o,
                                n = Q(t),
                                i = this.value,
                                u = n.value;
                            if (0 === u) return a[1];
                            if (0 === i) return a[0];
                            if (1 === i) return a[1];
                            if (-1 === i) return n.isEven() ? a[1] : a[-1];
                            if (n.sign) return a[0];
                            if (!n.isSmall)
                                throw new Error(
                                    "The exponent " +
                                        n.toString() +
                                        " is too large."
                                );
                            if (this.isSmall && v((e = Math.pow(i, u))))
                                return new l(m(e));
                            for (
                                r = this, o = a[1];
                                !0 & u && ((o = o.times(r)), --u), 0 !== u;

                            )
                                (u /= 2), (r = r.square());
                            return o;
                        }),
                        (l.prototype.pow = s.prototype.pow),
                        (f.prototype.pow = function (t) {
                            var e = Q(t),
                                r = this.value,
                                o = e.value,
                                n = BigInt(0),
                                i = BigInt(1),
                                u = BigInt(2);
                            if (o === n) return a[1];
                            if (r === n) return a[0];
                            if (r === i) return a[1];
                            if (r === BigInt(-1))
                                return e.isEven() ? a[1] : a[-1];
                            if (e.isNegative()) return new f(n);
                            for (
                                var p = this, s = a[1];
                                (o & i) === i && ((s = s.times(p)), --o),
                                    o !== n;

                            )
                                (o /= u), (p = p.square());
                            return s;
                        }),
                        (s.prototype.modPow = function (t, e) {
                            if (((t = Q(t)), (e = Q(e)).isZero()))
                                throw new Error(
                                    "Cannot take modPow with modulus 0"
                                );
                            var r = a[1],
                                o = this.mod(e);
                            for (
                                t.isNegative() &&
                                ((t = t.multiply(a[-1])), (o = o.modInv(e)));
                                t.isPositive();

                            ) {
                                if (o.isZero()) return a[0];
                                t.isOdd() && (r = r.multiply(o).mod(e)),
                                    (t = t.divide(2)),
                                    (o = o.square().mod(e));
                            }
                            return r;
                        }),
                        (f.prototype.modPow = l.prototype.modPow =
                            s.prototype.modPow),
                        (s.prototype.compareAbs = function (t) {
                            var e = Q(t),
                                r = this.value,
                                o = e.value;
                            return e.isSmall ? 1 : B(r, o);
                        }),
                        (l.prototype.compareAbs = function (t) {
                            var e = Q(t),
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
                        (f.prototype.compareAbs = function (t) {
                            var e = this.value,
                                r = Q(t).value;
                            return (e = e >= 0 ? e : -e) ===
                                (r = r >= 0 ? r : -r)
                                ? 0
                                : e > r
                                ? 1
                                : -1;
                        }),
                        (s.prototype.compare = function (t) {
                            if (t === 1 / 0) return -1;
                            if (t === -1 / 0) return 1;
                            var e = Q(t),
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
                                : B(r, o) * (this.sign ? -1 : 1);
                        }),
                        (s.prototype.compareTo = s.prototype.compare),
                        (l.prototype.compare = function (t) {
                            if (t === 1 / 0) return -1;
                            if (t === -1 / 0) return 1;
                            var e = Q(t),
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
                        (l.prototype.compareTo = l.prototype.compare),
                        (f.prototype.compare = function (t) {
                            if (t === 1 / 0) return -1;
                            if (t === -1 / 0) return 1;
                            var e = this.value,
                                r = Q(t).value;
                            return e === r ? 0 : e > r ? 1 : -1;
                        }),
                        (f.prototype.compareTo = f.prototype.compare),
                        (s.prototype.equals = function (t) {
                            return 0 === this.compare(t);
                        }),
                        (f.prototype.eq = f.prototype.equals = l.prototype.eq = l.prototype.equals = s.prototype.eq =
                            s.prototype.equals),
                        (s.prototype.notEquals = function (t) {
                            return 0 !== this.compare(t);
                        }),
                        (f.prototype.neq = f.prototype.notEquals = l.prototype.neq = l.prototype.notEquals = s.prototype.neq =
                            s.prototype.notEquals),
                        (s.prototype.greater = function (t) {
                            return this.compare(t) > 0;
                        }),
                        (f.prototype.gt = f.prototype.greater = l.prototype.gt = l.prototype.greater = s.prototype.gt =
                            s.prototype.greater),
                        (s.prototype.lesser = function (t) {
                            return this.compare(t) < 0;
                        }),
                        (f.prototype.lt = f.prototype.lesser = l.prototype.lt = l.prototype.lesser = s.prototype.lt =
                            s.prototype.lesser),
                        (s.prototype.greaterOrEquals = function (t) {
                            return this.compare(t) >= 0;
                        }),
                        (f.prototype.geq = f.prototype.greaterOrEquals = l.prototype.geq = l.prototype.greaterOrEquals = s.prototype.geq =
                            s.prototype.greaterOrEquals),
                        (s.prototype.lesserOrEquals = function (t) {
                            return this.compare(t) <= 0;
                        }),
                        (f.prototype.leq = f.prototype.lesserOrEquals = l.prototype.leq = l.prototype.lesserOrEquals = s.prototype.leq =
                            s.prototype.lesserOrEquals),
                        (s.prototype.isEven = function () {
                            return 0 === (1 & this.value[0]);
                        }),
                        (l.prototype.isEven = function () {
                            return 0 === (1 & this.value);
                        }),
                        (f.prototype.isEven = function () {
                            return (this.value & BigInt(1)) === BigInt(0);
                        }),
                        (s.prototype.isOdd = function () {
                            return 1 === (1 & this.value[0]);
                        }),
                        (l.prototype.isOdd = function () {
                            return 1 === (1 & this.value);
                        }),
                        (f.prototype.isOdd = function () {
                            return (this.value & BigInt(1)) === BigInt(1);
                        }),
                        (s.prototype.isPositive = function () {
                            return !this.sign;
                        }),
                        (l.prototype.isPositive = function () {
                            return this.value > 0;
                        }),
                        (f.prototype.isPositive = l.prototype.isPositive),
                        (s.prototype.isNegative = function () {
                            return this.sign;
                        }),
                        (l.prototype.isNegative = function () {
                            return this.value < 0;
                        }),
                        (f.prototype.isNegative = l.prototype.isNegative),
                        (s.prototype.isUnit = function () {
                            return !1;
                        }),
                        (l.prototype.isUnit = function () {
                            return 1 === Math.abs(this.value);
                        }),
                        (f.prototype.isUnit = function () {
                            return this.abs().value === BigInt(1);
                        }),
                        (s.prototype.isZero = function () {
                            return !1;
                        }),
                        (l.prototype.isZero = function () {
                            return 0 === this.value;
                        }),
                        (f.prototype.isZero = function () {
                            return this.value === BigInt(0);
                        }),
                        (s.prototype.isDivisibleBy = function (t) {
                            var e = Q(t);
                            return (
                                !e.isZero() &&
                                (!!e.isUnit() ||
                                    (0 === e.compareAbs(2)
                                        ? this.isEven()
                                        : this.mod(e).isZero()))
                            );
                        }),
                        (f.prototype.isDivisibleBy = l.prototype.isDivisibleBy =
                            s.prototype.isDivisibleBy),
                        (s.prototype.isPrime = function (t) {
                            var e = x(this);
                            if (void 0 !== e) return e;
                            var r = this.abs(),
                                o = r.bitLength();
                            if (o <= 64)
                                return A(r, [
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
                            return A(r, p);
                        }),
                        (f.prototype.isPrime = l.prototype.isPrime =
                            s.prototype.isPrime),
                        (s.prototype.isProbablePrime = function (t, e) {
                            var r = x(this);
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
                            return A(o, u);
                        }),
                        (f.prototype.isProbablePrime = l.prototype.isProbablePrime =
                            s.prototype.isProbablePrime),
                        (s.prototype.modInv = function (t) {
                            for (
                                var e,
                                    r,
                                    o,
                                    i = n.zero,
                                    u = n.one,
                                    p = Q(t),
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
                        (f.prototype.modInv = l.prototype.modInv =
                            s.prototype.modInv),
                        (s.prototype.next = function () {
                            var t = this.value;
                            return this.sign
                                ? _(t, 1, this.sign)
                                : new s(b(t, 1), this.sign);
                        }),
                        (l.prototype.next = function () {
                            var t = this.value;
                            return t + 1 < o ? new l(t + 1) : new s(i, !1);
                        }),
                        (f.prototype.next = function () {
                            return new f(this.value + BigInt(1));
                        }),
                        (s.prototype.prev = function () {
                            var t = this.value;
                            return this.sign
                                ? new s(b(t, 1), !0)
                                : _(t, 1, this.sign);
                        }),
                        (l.prototype.prev = function () {
                            var t = this.value;
                            return t - 1 > -o ? new l(t - 1) : new s(i, !0);
                        }),
                        (f.prototype.prev = function () {
                            return new f(this.value - BigInt(1));
                        });
                    for (var Z = [1]; 2 * Z[Z.length - 1] <= e; )
                        Z.push(2 * Z[Z.length - 1]);
                    var j = Z.length,
                        J = Z[j - 1];
                    function L(t) {
                        return Math.abs(t) <= e;
                    }
                    function U(t, e, r) {
                        e = Q(e);
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
                            (a = (l = I(u, J))[1].toJSNumber()),
                                o && (a = J - 1 - a),
                                (s = (f = I(p, J))[1].toJSNumber()),
                                i && (s = J - 1 - s),
                                (u = l[0]),
                                (p = f[0]),
                                v.push(r(a, s));
                        for (
                            var h =
                                    0 !== r(o ? 1 : 0, i ? 1 : 0)
                                        ? n(-1)
                                        : n(0),
                                y = v.length - 1;
                            y >= 0;
                            y -= 1
                        )
                            h = h.multiply(J).add(n(v[y]));
                        return h;
                    }
                    (s.prototype.shiftLeft = function (t) {
                        var e = Q(t).toJSNumber();
                        if (!L(e))
                            throw new Error(
                                String(e) + " is too large for shifting."
                            );
                        if (e < 0) return this.shiftRight(-e);
                        var r = this;
                        if (r.isZero()) return r;
                        for (; e >= j; ) (r = r.multiply(J)), (e -= j - 1);
                        return r.multiply(Z[e]);
                    }),
                        (f.prototype.shiftLeft = l.prototype.shiftLeft =
                            s.prototype.shiftLeft),
                        (s.prototype.shiftRight = function (t) {
                            var e,
                                r = Q(t).toJSNumber();
                            if (!L(r))
                                throw new Error(
                                    String(r) + " is too large for shifting."
                                );
                            if (r < 0) return this.shiftLeft(-r);
                            for (var o = this; r >= j; ) {
                                if (
                                    o.isZero() ||
                                    (o.isNegative() && o.isUnit())
                                )
                                    return o;
                                (o = (e = I(o, J))[1].isNegative()
                                    ? e[0].prev()
                                    : e[0]),
                                    (r -= j - 1);
                            }
                            return (e = I(o, Z[r]))[1].isNegative()
                                ? e[0].prev()
                                : e[0];
                        }),
                        (f.prototype.shiftRight = l.prototype.shiftRight =
                            s.prototype.shiftRight),
                        (s.prototype.not = function () {
                            return this.negate().prev();
                        }),
                        (f.prototype.not = l.prototype.not = s.prototype.not),
                        (s.prototype.and = function (t) {
                            return U(this, t, function (t, e) {
                                return t & e;
                            });
                        }),
                        (f.prototype.and = l.prototype.and = s.prototype.and),
                        (s.prototype.or = function (t) {
                            return U(this, t, function (t, e) {
                                return t | e;
                            });
                        }),
                        (f.prototype.or = l.prototype.or = s.prototype.or),
                        (s.prototype.xor = function (t) {
                            return U(this, t, function (t, e) {
                                return t ^ e;
                            });
                        }),
                        (f.prototype.xor = l.prototype.xor = s.prototype.xor);
                    var T = 1 << 30,
                        k = ((e & -e) * (e & -e)) | T;
                    function C(t) {
                        var r = t.value,
                            o =
                                "number" === typeof r
                                    ? r | T
                                    : "bigint" === typeof r
                                    ? r | BigInt(T)
                                    : (r[0] + r[1] * e) | k;
                        return o & -o;
                    }
                    function D(t, e) {
                        return (t = Q(t)), (e = Q(e)), t.greater(e) ? t : e;
                    }
                    function z(t, e) {
                        return (t = Q(t)), (e = Q(e)), t.lesser(e) ? t : e;
                    }
                    function R(t, e) {
                        if (((t = Q(t).abs()), (e = Q(e).abs()), t.equals(e)))
                            return t;
                        if (t.isZero()) return e;
                        if (e.isZero()) return t;
                        for (var r, o, n = a[1]; t.isEven() && e.isEven(); )
                            (r = z(C(t), C(e))),
                                (t = t.divide(r)),
                                (e = e.divide(r)),
                                (n = n.multiply(r));
                        for (; t.isEven(); ) t = t.divide(C(t));
                        do {
                            for (; e.isEven(); ) e = e.divide(C(e));
                            t.greater(e) && ((o = e), (e = t), (t = o)),
                                (e = e.subtract(t));
                        } while (!e.isZero());
                        return n.isUnit() ? t : t.multiply(n);
                    }
                    (s.prototype.bitLength = function () {
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
                        (f.prototype.bitLength = l.prototype.bitLength =
                            s.prototype.bitLength);
                    var $ = function (t, e, r, o) {
                        (r = r || u),
                            (t = String(t)),
                            o || ((t = t.toLowerCase()), (r = r.toLowerCase()));
                        var n,
                            i = t.length,
                            p = Math.abs(e),
                            a = {};
                        for (n = 0; n < r.length; n++) a[r[n]] = n;
                        for (n = 0; n < i; n++) {
                            if ("-" !== (f = t[n]) && f in a && a[f] >= p) {
                                if ("1" === f && 1 === p) continue;
                                throw new Error(
                                    f +
                                        " is not a valid digit in base " +
                                        e +
                                        "."
                                );
                            }
                        }
                        e = Q(e);
                        var s = [],
                            l = "-" === t[0];
                        for (n = l ? 1 : 0; n < t.length; n++) {
                            var f;
                            if ((f = t[n]) in a) s.push(Q(a[f]));
                            else {
                                if ("<" !== f)
                                    throw new Error(
                                        f + " is not a valid character"
                                    );
                                var v = n;
                                do {
                                    n++;
                                } while (">" !== t[n] && n < t.length);
                                s.push(Q(t.slice(v + 1, n)));
                            }
                        }
                        return F(s, e, l);
                    };
                    function F(t, e, r) {
                        var o,
                            n = a[0],
                            i = a[1];
                        for (o = t.length - 1; o >= 0; o--)
                            (n = n.add(t[o].times(i))), (i = i.times(e));
                        return r ? n.negate() : n;
                    }
                    function G(t, e) {
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
                    function H(t, e, r) {
                        var o = G(t, e);
                        return (
                            (o.isNegative ? "-" : "") +
                            o.value
                                .map(function (t) {
                                    return (function (t, e) {
                                        return t < (e = e || u).length
                                            ? e[t]
                                            : "<" + t + ">";
                                    })(t, r);
                                })
                                .join("")
                        );
                    }
                    function K(t) {
                        if (v(+t)) {
                            var e = +t;
                            if (e === m(e))
                                return p ? new f(BigInt(e)) : new l(e);
                            throw new Error("Invalid integer: " + t);
                        }
                        var o = "-" === t[0];
                        o && (t = t.slice(1));
                        var n = t.split(/e/i);
                        if (n.length > 2)
                            throw new Error("Invalid integer: " + n.join("e"));
                        if (2 === n.length) {
                            var i = n[1];
                            if (
                                ("+" === i[0] && (i = i.slice(1)),
                                (i = +i) !== m(i) || !v(i))
                            )
                                throw new Error(
                                    "Invalid integer: " +
                                        i +
                                        " is not a valid exponent."
                                );
                            var u = n[0],
                                a = u.indexOf(".");
                            if (
                                (a >= 0 &&
                                    ((i -= u.length - a - 1),
                                    (u = u.slice(0, a) + u.slice(a + 1))),
                                i < 0)
                            )
                                throw new Error(
                                    "Cannot include negative exponent part for integers"
                                );
                            t = u += new Array(i + 1).join("0");
                        }
                        if (!/^([0-9][0-9]*)$/.test(t))
                            throw new Error("Invalid integer: " + t);
                        if (p) return new f(BigInt(o ? "-" + t : t));
                        for (
                            var h = [], y = t.length, g = r, d = y - g;
                            y > 0;

                        )
                            h.push(+t.slice(d, y)),
                                (d -= g) < 0 && (d = 0),
                                (y -= g);
                        return c(h), new s(h, o);
                    }
                    function Q(t) {
                        return "number" === typeof t
                            ? (function (t) {
                                  if (p) return new f(BigInt(t));
                                  if (v(t)) {
                                      if (t !== m(t))
                                          throw new Error(
                                              t + " is not an integer."
                                          );
                                      return new l(t);
                                  }
                                  return K(t.toString());
                              })(t)
                            : "string" === typeof t
                            ? K(t)
                            : "bigint" === typeof t
                            ? new f(t)
                            : t;
                    }
                    (s.prototype.toArray = function (t) {
                        return G(this, t);
                    }),
                        (l.prototype.toArray = function (t) {
                            return G(this, t);
                        }),
                        (f.prototype.toArray = function (t) {
                            return G(this, t);
                        }),
                        (s.prototype.toString = function (t, e) {
                            if ((void 0 === t && (t = 10), 10 !== t))
                                return H(this, t, e);
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
                        (l.prototype.toString = function (t, e) {
                            return (
                                void 0 === t && (t = 10),
                                10 != t ? H(this, t, e) : String(this.value)
                            );
                        }),
                        (f.prototype.toString = l.prototype.toString),
                        (f.prototype.toJSON = s.prototype.toJSON = l.prototype.toJSON = function () {
                            return this.toString();
                        }),
                        (s.prototype.valueOf = function () {
                            return parseInt(this.toString(), 10);
                        }),
                        (s.prototype.toJSNumber = s.prototype.valueOf),
                        (l.prototype.valueOf = function () {
                            return this.value;
                        }),
                        (l.prototype.toJSNumber = l.prototype.valueOf),
                        (f.prototype.valueOf = f.prototype.toJSNumber = function () {
                            return parseInt(this.toString(), 10);
                        });
                    for (var V = 0; V < 1e3; V++)
                        (a[V] = Q(V)), V > 0 && (a[-V] = Q(-V));
                    return (
                        (a.one = a[1]),
                        (a.zero = a[0]),
                        (a.minusOne = a[-1]),
                        (a.max = D),
                        (a.min = z),
                        (a.gcd = R),
                        (a.lcm = function (t, e) {
                            return (
                                (t = Q(t).abs()),
                                (e = Q(e).abs()),
                                t.divide(R(t, e)).multiply(e)
                            );
                        }),
                        (a.isInstance = function (t) {
                            return (
                                t instanceof s ||
                                t instanceof l ||
                                t instanceof f
                            );
                        }),
                        (a.randBetween = function (t, r, o) {
                            (t = Q(t)), (r = Q(r));
                            var n = o || Math.random,
                                i = z(t, r),
                                u = D(t, r).subtract(i).add(1);
                            if (u.isSmall) return i.add(Math.floor(n() * u));
                            for (
                                var p = G(u, e).value, s = [], l = !0, f = 0;
                                f < p.length;
                                f++
                            ) {
                                var v = l ? p[f] : e,
                                    h = m(n() * v);
                                s.push(h), h < v && (l = !1);
                            }
                            return i.add(a.fromArray(s, e, !1));
                        }),
                        (a.fromArray = function (t, e, r) {
                            return F(t.map(Q), Q(e || 10), r);
                        }),
                        a
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
                for (var h = 0, y = r; h < y; h++)
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
