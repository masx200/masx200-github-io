(Function("return this")().webpackJsonp =
    Function("return this")().webpackJsonp || []).push([
    [11],
    {
        18: function (e, t, n) {
            "use strict";
            var r = n(21),
                i = n.n(r);
            var o = i.a;
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
                i()("[data-tanchuxiaoxi]").remove(),
                    o("#my\u5bfc\u822a\u680f").append(
                        o(
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
                            o("#" + n).remove(),
                                i()("#my\u4e3b\u4f53").css(
                                    "padding-top",
                                    i()("#my\u5bfc\u822a\u680f").height()
                                );
                        })
                    );
            };
        },
        22: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return c;
            });
            var r = n(23),
                i = n(24),
                o = n(27),
                s = n(20),
                u = n(19),
                a = n(26),
                l = n(28);
            function c(e) {
                return new ((function (e) {
                    function t(e) {
                        var n;
                        return (
                            Object(r.a)(this, t),
                            ((n = Object(o.a)(
                                this,
                                Object(s.a)(t).call(this)
                            )).button.loading = function () {
                                return n.button("loading");
                            }),
                            (n.button.reset = function () {
                                return n.button("reset");
                            }),
                            Object.defineProperty(
                                Object(u.a)(n),
                                Symbol.toStringTag,
                                { value: "ArrayLike" }
                            ),
                            (function (e) {
                                if (((n.length = 0), e instanceof HTMLElement))
                                    n.push(e);
                                else if ("string" === typeof e)
                                    try {
                                        for (
                                            var t = document.querySelectorAll(
                                                    e
                                                ),
                                                r = 0;
                                            r < t.length;
                                            r++
                                        )
                                            n.push(t[r]);
                                    } catch (a) {
                                        n.length = 0;
                                    }
                                else if (
                                    "object" === typeof e &&
                                    e &&
                                    "length" in e &&
                                    e.length
                                )
                                    try {
                                        for (
                                            var i = e, o = i.length, s = 0;
                                            s < o;
                                            s++
                                        ) {
                                            var u = i[s];
                                            u instanceof HTMLElement &&
                                                n.push(u);
                                        }
                                    } catch (a) {
                                        n.length = 0;
                                    }
                                else n.length = 0;
                            })(e),
                            n
                        );
                    }
                    return (
                        Object(a.a)(t, e),
                        Object(i.a)(t, [
                            {
                                key: "button",
                                value: function (e) {
                                    var t = Symbol.for("loadingState"),
                                        n = Symbol.for("ResetHTML");
                                    var r = "mui-disabled",
                                        i = {
                                            loadingText: "Loading...",
                                            loadingIcon:
                                                "mui-spinner mui-spinner-white",
                                            loadingIconPosition: "left",
                                        },
                                        o = "reset",
                                        s = "loading";
                                    function u(e, t) {
                                        t instanceof HTMLElement &&
                                            ("INPUT" === t.tagName
                                                ? (t.value = e)
                                                : (t.innerHTML = e));
                                    }
                                    return (
                                        (e === s || e === o) &&
                                        (this.forEach(function (a) {
                                            if (
                                                a instanceof HTMLElement &&
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
                                                })(a)
                                            ) {
                                                var l = a.getAttribute(
                                                        "data-loading-text"
                                                    ),
                                                    c = a.getAttribute(
                                                        "data-loading-icon"
                                                    ),
                                                    f = a.getAttribute(
                                                        "data-loading-icon-position"
                                                    );
                                                !(function (e, a, l) {
                                                    if (
                                                        a instanceof HTMLElement
                                                    ) {
                                                        if (
                                                            (a[t] ||
                                                                ((a[n] =
                                                                    "INPUT" ===
                                                                    a.tagName
                                                                        ? a.value
                                                                        : a.innerHTML),
                                                                (a[t] =
                                                                    "reset")),
                                                            a[t] === e)
                                                        )
                                                            return !1;
                                                        if (
                                                            ((a[t] = e),
                                                            l.loadingText ||
                                                                (l.loadingText =
                                                                    i.loadingText),
                                                            l.loadingIcon ||
                                                                (l.loadingIcon =
                                                                    i.loadingIcon),
                                                            l.loadingIconPosition ||
                                                                (l.loadingIconPosition =
                                                                    i.loadingIconPosition),
                                                            e === o)
                                                        )
                                                            (a.disabled = !1),
                                                                a.classList.remove(
                                                                    r
                                                                ),
                                                                u(a[n], a);
                                                        else if (e === s) {
                                                            var c;
                                                            (a.disabled = !0),
                                                                a.classList.add(
                                                                    r
                                                                ),
                                                                "INPUT" !==
                                                                a.tagName
                                                                    ? ((c =
                                                                          "<span>" +
                                                                          l.loadingText +
                                                                          "</span>"),
                                                                      "right" ===
                                                                      l.loadingIconPosition
                                                                          ? (c +=
                                                                                '&nbsp;<span class="' +
                                                                                l.loadingIcon +
                                                                                '"></span>')
                                                                          : (c =
                                                                                '<span class="' +
                                                                                l.loadingIcon +
                                                                                '"></span>&nbsp;' +
                                                                                c))
                                                                    : (c =
                                                                          l.loadingText),
                                                                u(c, a);
                                                        }
                                                    }
                                                })(e, a, {
                                                    loadingText: l,
                                                    loadingIcon: c,
                                                    loadingIconPosition: f,
                                                });
                                            }
                                        }),
                                        this)
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(Object(l.a)(Array)))(e);
            }
        },
        61: function (e, t, n) {
            e.exports = function () {
                return n(30)(
                    '!function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.4.1/",r(r.s=1)}([function(t,e,r){(function(t){var o,n=function(t){"use strict";var e=1e7,r=7,o=9007199254740992,i=h(o),u="0123456789abcdefghijklmnopqrstuvwxyz",p="function"===typeof BigInt;function a(t,e,r,o){return"undefined"===typeof t?a[0]:"undefined"!==typeof e&&(10!==+e||r)?$(t,e,r,o):Q(t)}function s(t,e){this.value=t,this.sign=e,this.isSmall=!1}function l(t){this.value=t,this.sign=t<0,this.isSmall=!0}function f(t){this.value=t}function v(t){return-o<t&&t<o}function h(t){return t<1e7?[t]:t<1e14?[t%1e7,Math.floor(t/1e7)]:[t%1e7,Math.floor(t/1e7)%1e7,Math.floor(t/1e14)]}function y(t){c(t);var r=t.length;if(r<4&&B(t,i)<0)switch(r){case 0:return 0;case 1:return t[0];case 2:return t[0]+t[1]*e;default:return t[0]+(t[1]+t[2]*e)*e}return t}function c(t){for(var e=t.length;0===t[--e];);t.length=e+1}function g(t){for(var e=new Array(t),r=-1;++r<t;)e[r]=0;return e}function m(t){return t>0?Math.floor(t):Math.ceil(t)}function d(t,r){var o,n,i=t.length,u=r.length,p=new Array(i),a=0,s=e;for(n=0;n<u;n++)a=(o=t[n]+r[n]+a)>=s?1:0,p[n]=o-a*s;for(;n<i;)a=(o=t[n]+a)===s?1:0,p[n++]=o-a*s;return a>0&&p.push(a),p}function w(t,e){return t.length>=e.length?d(t,e):d(e,t)}function b(t,r){var o,n,i=t.length,u=new Array(i),p=e;for(n=0;n<i;n++)o=t[n]-p+r,r=Math.floor(o/p),u[n]=o-r*p,r+=1;for(;r>0;)u[n++]=r%p,r=Math.floor(r/p);return u}function S(t,r){var o,n,i=t.length,u=r.length,p=new Array(i),a=0,s=e;for(o=0;o<u;o++)(n=t[o]-a-r[o])<0?(n+=s,a=1):a=0,p[o]=n;for(o=u;o<i;o++){if(!((n=t[o]-a)<0)){p[o++]=n;break}n+=s,p[o]=n}for(;o<i;o++)p[o]=t[o];return c(p),p}function _(t,r,o){var n,i,u=t.length,p=new Array(u),a=-r,f=e;for(n=0;n<u;n++)i=t[n]+a,a=Math.floor(i/f),i%=f,p[n]=i<0?i+f:i;return"number"===typeof(p=y(p))?(o&&(p=-p),new l(p)):new s(p,o)}function M(t,r){var o,n,i,u,p=t.length,a=r.length,s=g(p+a),l=e;for(i=0;i<p;++i){u=t[i];for(var f=0;f<a;++f)o=u*r[f]+s[i+f],n=Math.floor(o/l),s[i+f]=o-n*l,s[i+f+1]+=n}return c(s),s}function q(t,r){var o,n,i=t.length,u=new Array(i),p=e,a=0;for(n=0;n<i;n++)o=t[n]*r+a,a=Math.floor(o/p),u[n]=o-a*p;for(;a>0;)u[n++]=a%p,a=Math.floor(a/p);return u}function N(t,e){for(var r=[];e-- >0;)r.push(0);return r.concat(t)}function E(t,r,o){return new s(t<e?q(r,t):M(r,h(t)),o)}function O(t){var r,o,n,i,u=t.length,p=g(u+u),a=e;for(n=0;n<u;n++){o=0-(i=t[n])*i;for(var s=n;s<u;s++)r=i*t[s]*2+p[n+s]+o,o=Math.floor(r/a),p[n+s]=r-o*a;p[n+u]=o}return c(p),p}function P(t,r){var o,n,i,u,p=t.length,a=g(p),s=e;for(i=0,o=p-1;o>=0;--o)i=(u=i*s+t[o])-(n=m(u/r))*r,a[o]=0|n;return[a,0|i]}function I(t,r){var o,n=Q(r);if(p)return[new f(t.value/n.value),new f(t.value%n.value)];var i,u=t.value,v=n.value;if(0===v)throw new Error("Cannot divide by zero");if(t.isSmall)return n.isSmall?[new l(m(u/v)),new l(u%v)]:[a[0],t];if(n.isSmall){if(1===v)return[t,a[0]];if(-1==v)return[t.negate(),a[0]];var d=Math.abs(v);if(d<e){i=y((o=P(u,d))[0]);var w=o[1];return t.sign&&(w=-w),"number"===typeof i?(t.sign!==n.sign&&(i=-i),[new l(i),new l(w)]):[new s(i,t.sign!==n.sign),new l(w)]}v=h(d)}var b=B(u,v);if(-1===b)return[a[0],t];if(0===b)return[a[t.sign===n.sign?1:-1],a[0]];i=(o=u.length+v.length<=200?function(t,r){var o,n,i,u,p,a,s,l=t.length,f=r.length,v=e,h=g(r.length),c=r[f-1],m=Math.ceil(v/(2*c)),d=q(t,m),w=q(r,m);for(d.length<=l&&d.push(0),w.push(0),c=w[f-1],n=l-f;n>=0;n--){for(o=v-1,d[n+f]!==c&&(o=Math.floor((d[n+f]*v+d[n+f-1])/c)),i=0,u=0,a=w.length,p=0;p<a;p++)i+=o*w[p],s=Math.floor(i/v),u+=d[n+p]-(i-s*v),i=s,u<0?(d[n+p]=u+v,u=-1):(d[n+p]=u,u=0);for(;0!==u;){for(o-=1,i=0,p=0;p<a;p++)(i+=d[n+p]-v+w[p])<0?(d[n+p]=i+v,i=0):(d[n+p]=i,i=1);u+=i}h[n]=o}return d=P(d,m)[0],[y(h),y(d)]}(u,v):function(t,r){for(var o,n,i,u,p,a=t.length,s=r.length,l=[],f=[],v=e;a;)if(f.unshift(t[--a]),c(f),B(f,r)<0)l.push(0);else{i=f[(n=f.length)-1]*v+f[n-2],u=r[s-1]*v+r[s-2],n>s&&(i=(i+1)*v),o=Math.ceil(i/u);do{if(B(p=q(r,o),f)<=0)break;o--}while(o);l.push(o),f=S(f,p)}return l.reverse(),[y(l),y(f)]}(u,v))[0];var _=t.sign!==n.sign,M=o[1],N=t.sign;return"number"===typeof i?(_&&(i=-i),i=new l(i)):i=new s(i,_),"number"===typeof M?(N&&(M=-M),M=new l(M)):M=new s(M,N),[i,M]}function B(t,e){if(t.length!==e.length)return t.length>e.length?1:-1;for(var r=t.length-1;r>=0;r--)if(t[r]!==e[r])return t[r]>e[r]?1:-1;return 0}function x(t){var e=t.abs();return!e.isUnit()&&(!!(e.equals(2)||e.equals(3)||e.equals(5))||!(e.isEven()||e.isDivisibleBy(3)||e.isDivisibleBy(5))&&(!!e.lesser(49)||void 0))}function A(t,e){for(var r,o,i,u=t.prev(),p=u,a=0;p.isEven();)p=p.divide(2),a++;t:for(o=0;o<e.length;o++)if(!t.lesser(e[o])&&!(i=n(e[o]).modPow(p,t)).isUnit()&&!i.equals(u)){for(r=a-1;0!=r;r--){if((i=i.square().mod(t)).isUnit())return!1;if(i.equals(u))continue t}return!1}return!0}s.prototype=Object.create(a.prototype),l.prototype=Object.create(a.prototype),f.prototype=Object.create(a.prototype),s.prototype.add=function(t){var e=Q(t);if(this.sign!==e.sign)return this.subtract(e.negate());var r=this.value,o=e.value;return e.isSmall?new s(b(r,Math.abs(o)),this.sign):new s(w(r,o),this.sign)},s.prototype.plus=s.prototype.add,l.prototype.add=function(t){var e=Q(t),r=this.value;if(r<0!==e.sign)return this.subtract(e.negate());var o=e.value;if(e.isSmall){if(v(r+o))return new l(r+o);o=h(Math.abs(o))}return new s(b(o,Math.abs(r)),r<0)},l.prototype.plus=l.prototype.add,f.prototype.add=function(t){return new f(this.value+Q(t).value)},f.prototype.plus=f.prototype.add,s.prototype.subtract=function(t){var e=Q(t);if(this.sign!==e.sign)return this.add(e.negate());var r=this.value,o=e.value;return e.isSmall?_(r,Math.abs(o),this.sign):function(t,e,r){var o;return B(t,e)>=0?o=S(t,e):(o=S(e,t),r=!r),"number"===typeof(o=y(o))?(r&&(o=-o),new l(o)):new s(o,r)}(r,o,this.sign)},s.prototype.minus=s.prototype.subtract,l.prototype.subtract=function(t){var e=Q(t),r=this.value;if(r<0!==e.sign)return this.add(e.negate());var o=e.value;return e.isSmall?new l(r-o):_(o,Math.abs(r),r>=0)},l.prototype.minus=l.prototype.subtract,f.prototype.subtract=function(t){return new f(this.value-Q(t).value)},f.prototype.minus=f.prototype.subtract,s.prototype.negate=function(){return new s(this.value,!this.sign)},l.prototype.negate=function(){var t=this.sign,e=new l(-this.value);return e.sign=!t,e},f.prototype.negate=function(){return new f(-this.value)},s.prototype.abs=function(){return new s(this.value,!1)},l.prototype.abs=function(){return new l(Math.abs(this.value))},f.prototype.abs=function(){return new f(this.value>=0?this.value:-this.value)},s.prototype.multiply=function(t){var r,o,n,i=Q(t),u=this.value,p=i.value,l=this.sign!==i.sign;if(i.isSmall){if(0===p)return a[0];if(1===p)return this;if(-1===p)return this.negate();if((r=Math.abs(p))<e)return new s(q(u,r),l);p=h(r)}return o=u.length,n=p.length,new s(-.012*o-.012*n+15e-6*o*n>0?function t(e,r){var o=Math.max(e.length,r.length);if(o<=30)return M(e,r);o=Math.ceil(o/2);var n=e.slice(o),i=e.slice(0,o),u=r.slice(o),p=r.slice(0,o),a=t(i,p),s=t(n,u),l=t(w(i,n),w(p,u)),f=w(w(a,N(S(S(l,a),s),o)),N(s,2*o));return c(f),f}(u,p):M(u,p),l)},s.prototype.times=s.prototype.multiply,l.prototype._multiplyBySmall=function(t){return v(t.value*this.value)?new l(t.value*this.value):E(Math.abs(t.value),h(Math.abs(this.value)),this.sign!==t.sign)},s.prototype._multiplyBySmall=function(t){return 0===t.value?a[0]:1===t.value?this:-1===t.value?this.negate():E(Math.abs(t.value),this.value,this.sign!==t.sign)},l.prototype.multiply=function(t){return Q(t)._multiplyBySmall(this)},l.prototype.times=l.prototype.multiply,f.prototype.multiply=function(t){return new f(this.value*Q(t).value)},f.prototype.times=f.prototype.multiply,s.prototype.square=function(){return new s(O(this.value),!1)},l.prototype.square=function(){var t=this.value*this.value;return v(t)?new l(t):new s(O(h(Math.abs(this.value))),!1)},f.prototype.square=function(t){return new f(this.value*this.value)},s.prototype.divmod=function(t){var e=I(this,t);return{quotient:e[0],remainder:e[1]}},f.prototype.divmod=l.prototype.divmod=s.prototype.divmod,s.prototype.divide=function(t){return I(this,t)[0]},f.prototype.over=f.prototype.divide=function(t){return new f(this.value/Q(t).value)},l.prototype.over=l.prototype.divide=s.prototype.over=s.prototype.divide,s.prototype.mod=function(t){return I(this,t)[1]},f.prototype.mod=f.prototype.remainder=function(t){return new f(this.value%Q(t).value)},l.prototype.remainder=l.prototype.mod=s.prototype.remainder=s.prototype.mod,s.prototype.pow=function(t){var e,r,o,n=Q(t),i=this.value,u=n.value;if(0===u)return a[1];if(0===i)return a[0];if(1===i)return a[1];if(-1===i)return n.isEven()?a[1]:a[-1];if(n.sign)return a[0];if(!n.isSmall)throw new Error("The exponent "+n.toString()+" is too large.");if(this.isSmall&&v(e=Math.pow(i,u)))return new l(m(e));for(r=this,o=a[1];!0&u&&(o=o.times(r),--u),0!==u;)u/=2,r=r.square();return o},l.prototype.pow=s.prototype.pow,f.prototype.pow=function(t){var e=Q(t),r=this.value,o=e.value,n=BigInt(0),i=BigInt(1),u=BigInt(2);if(o===n)return a[1];if(r===n)return a[0];if(r===i)return a[1];if(r===BigInt(-1))return e.isEven()?a[1]:a[-1];if(e.isNegative())return new f(n);for(var p=this,s=a[1];(o&i)===i&&(s=s.times(p),--o),o!==n;)o/=u,p=p.square();return s},s.prototype.modPow=function(t,e){if(t=Q(t),(e=Q(e)).isZero())throw new Error("Cannot take modPow with modulus 0");var r=a[1],o=this.mod(e);for(t.isNegative()&&(t=t.multiply(a[-1]),o=o.modInv(e));t.isPositive();){if(o.isZero())return a[0];t.isOdd()&&(r=r.multiply(o).mod(e)),t=t.divide(2),o=o.square().mod(e)}return r},f.prototype.modPow=l.prototype.modPow=s.prototype.modPow,s.prototype.compareAbs=function(t){var e=Q(t),r=this.value,o=e.value;return e.isSmall?1:B(r,o)},l.prototype.compareAbs=function(t){var e=Q(t),r=Math.abs(this.value),o=e.value;return e.isSmall?r===(o=Math.abs(o))?0:r>o?1:-1:-1},f.prototype.compareAbs=function(t){var e=this.value,r=Q(t).value;return(e=e>=0?e:-e)===(r=r>=0?r:-r)?0:e>r?1:-1},s.prototype.compare=function(t){if(t===1/0)return-1;if(t===-1/0)return 1;var e=Q(t),r=this.value,o=e.value;return this.sign!==e.sign?e.sign?1:-1:e.isSmall?this.sign?-1:1:B(r,o)*(this.sign?-1:1)},s.prototype.compareTo=s.prototype.compare,l.prototype.compare=function(t){if(t===1/0)return-1;if(t===-1/0)return 1;var e=Q(t),r=this.value,o=e.value;return e.isSmall?r==o?0:r>o?1:-1:r<0!==e.sign?r<0?-1:1:r<0?1:-1},l.prototype.compareTo=l.prototype.compare,f.prototype.compare=function(t){if(t===1/0)return-1;if(t===-1/0)return 1;var e=this.value,r=Q(t).value;return e===r?0:e>r?1:-1},f.prototype.compareTo=f.prototype.compare,s.prototype.equals=function(t){return 0===this.compare(t)},f.prototype.eq=f.prototype.equals=l.prototype.eq=l.prototype.equals=s.prototype.eq=s.prototype.equals,s.prototype.notEquals=function(t){return 0!==this.compare(t)},f.prototype.neq=f.prototype.notEquals=l.prototype.neq=l.prototype.notEquals=s.prototype.neq=s.prototype.notEquals,s.prototype.greater=function(t){return this.compare(t)>0},f.prototype.gt=f.prototype.greater=l.prototype.gt=l.prototype.greater=s.prototype.gt=s.prototype.greater,s.prototype.lesser=function(t){return this.compare(t)<0},f.prototype.lt=f.prototype.lesser=l.prototype.lt=l.prototype.lesser=s.prototype.lt=s.prototype.lesser,s.prototype.greaterOrEquals=function(t){return this.compare(t)>=0},f.prototype.geq=f.prototype.greaterOrEquals=l.prototype.geq=l.prototype.greaterOrEquals=s.prototype.geq=s.prototype.greaterOrEquals,s.prototype.lesserOrEquals=function(t){return this.compare(t)<=0},f.prototype.leq=f.prototype.lesserOrEquals=l.prototype.leq=l.prototype.lesserOrEquals=s.prototype.leq=s.prototype.lesserOrEquals,s.prototype.isEven=function(){return 0===(1&this.value[0])},l.prototype.isEven=function(){return 0===(1&this.value)},f.prototype.isEven=function(){return(this.value&BigInt(1))===BigInt(0)},s.prototype.isOdd=function(){return 1===(1&this.value[0])},l.prototype.isOdd=function(){return 1===(1&this.value)},f.prototype.isOdd=function(){return(this.value&BigInt(1))===BigInt(1)},s.prototype.isPositive=function(){return!this.sign},l.prototype.isPositive=function(){return this.value>0},f.prototype.isPositive=l.prototype.isPositive,s.prototype.isNegative=function(){return this.sign},l.prototype.isNegative=function(){return this.value<0},f.prototype.isNegative=l.prototype.isNegative,s.prototype.isUnit=function(){return!1},l.prototype.isUnit=function(){return 1===Math.abs(this.value)},f.prototype.isUnit=function(){return this.abs().value===BigInt(1)},s.prototype.isZero=function(){return!1},l.prototype.isZero=function(){return 0===this.value},f.prototype.isZero=function(){return this.value===BigInt(0)},s.prototype.isDivisibleBy=function(t){var e=Q(t);return!e.isZero()&&(!!e.isUnit()||(0===e.compareAbs(2)?this.isEven():this.mod(e).isZero()))},f.prototype.isDivisibleBy=l.prototype.isDivisibleBy=s.prototype.isDivisibleBy,s.prototype.isPrime=function(t){var e=x(this);if(void 0!==e)return e;var r=this.abs(),o=r.bitLength();if(o<=64)return A(r,[2,3,5,7,11,13,17,19,23,29,31,37]);for(var i=Math.log(2)*o.toJSNumber(),u=Math.ceil(!0===t?2*Math.pow(i,2):i),p=[],a=0;a<u;a++)p.push(n(a+2));return A(r,p)},f.prototype.isPrime=l.prototype.isPrime=s.prototype.isPrime,s.prototype.isProbablePrime=function(t,e){var r=x(this);if(void 0!==r)return r;for(var o=this.abs(),i=void 0===t?5:t,u=[],p=0;p<i;p++)u.push(n.randBetween(2,o.minus(2),e));return A(o,u)},f.prototype.isProbablePrime=l.prototype.isProbablePrime=s.prototype.isProbablePrime,s.prototype.modInv=function(t){for(var e,r,o,i=n.zero,u=n.one,p=Q(t),a=this.abs();!a.isZero();)e=p.divide(a),r=i,o=p,i=u,p=a,u=r.subtract(e.multiply(u)),a=o.subtract(e.multiply(a));if(!p.isUnit())throw new Error(this.toString()+" and "+t.toString()+" are not co-prime");return-1===i.compare(0)&&(i=i.add(t)),this.isNegative()?i.negate():i},f.prototype.modInv=l.prototype.modInv=s.prototype.modInv,s.prototype.next=function(){var t=this.value;return this.sign?_(t,1,this.sign):new s(b(t,1),this.sign)},l.prototype.next=function(){var t=this.value;return t+1<o?new l(t+1):new s(i,!1)},f.prototype.next=function(){return new f(this.value+BigInt(1))},s.prototype.prev=function(){var t=this.value;return this.sign?new s(b(t,1),!0):_(t,1,this.sign)},l.prototype.prev=function(){var t=this.value;return t-1>-o?new l(t-1):new s(i,!0)},f.prototype.prev=function(){return new f(this.value-BigInt(1))};for(var Z=[1];2*Z[Z.length-1]<=e;)Z.push(2*Z[Z.length-1]);var j=Z.length,J=Z[j-1];function L(t){return Math.abs(t)<=e}function U(t,e,r){e=Q(e);for(var o=t.isNegative(),i=e.isNegative(),u=o?t.not():t,p=i?e.not():e,a=0,s=0,l=null,f=null,v=[];!u.isZero()||!p.isZero();)a=(l=I(u,J))[1].toJSNumber(),o&&(a=J-1-a),s=(f=I(p,J))[1].toJSNumber(),i&&(s=J-1-s),u=l[0],p=f[0],v.push(r(a,s));for(var h=0!==r(o?1:0,i?1:0)?n(-1):n(0),y=v.length-1;y>=0;y-=1)h=h.multiply(J).add(n(v[y]));return h}s.prototype.shiftLeft=function(t){var e=Q(t).toJSNumber();if(!L(e))throw new Error(String(e)+" is too large for shifting.");if(e<0)return this.shiftRight(-e);var r=this;if(r.isZero())return r;for(;e>=j;)r=r.multiply(J),e-=j-1;return r.multiply(Z[e])},f.prototype.shiftLeft=l.prototype.shiftLeft=s.prototype.shiftLeft,s.prototype.shiftRight=function(t){var e,r=Q(t).toJSNumber();if(!L(r))throw new Error(String(r)+" is too large for shifting.");if(r<0)return this.shiftLeft(-r);for(var o=this;r>=j;){if(o.isZero()||o.isNegative()&&o.isUnit())return o;o=(e=I(o,J))[1].isNegative()?e[0].prev():e[0],r-=j-1}return(e=I(o,Z[r]))[1].isNegative()?e[0].prev():e[0]},f.prototype.shiftRight=l.prototype.shiftRight=s.prototype.shiftRight,s.prototype.not=function(){return this.negate().prev()},f.prototype.not=l.prototype.not=s.prototype.not,s.prototype.and=function(t){return U(this,t,(function(t,e){return t&e}))},f.prototype.and=l.prototype.and=s.prototype.and,s.prototype.or=function(t){return U(this,t,(function(t,e){return t|e}))},f.prototype.or=l.prototype.or=s.prototype.or,s.prototype.xor=function(t){return U(this,t,(function(t,e){return t^e}))},f.prototype.xor=l.prototype.xor=s.prototype.xor;var T=1<<30,k=(e&-e)*(e&-e)|T;function C(t){var r=t.value,o="number"===typeof r?r|T:"bigint"===typeof r?r|BigInt(T):r[0]+r[1]*e|k;return o&-o}function D(t,e){return t=Q(t),e=Q(e),t.greater(e)?t:e}function z(t,e){return t=Q(t),e=Q(e),t.lesser(e)?t:e}function R(t,e){if(t=Q(t).abs(),e=Q(e).abs(),t.equals(e))return t;if(t.isZero())return e;if(e.isZero())return t;for(var r,o,n=a[1];t.isEven()&&e.isEven();)r=z(C(t),C(e)),t=t.divide(r),e=e.divide(r),n=n.multiply(r);for(;t.isEven();)t=t.divide(C(t));do{for(;e.isEven();)e=e.divide(C(e));t.greater(e)&&(o=e,e=t,t=o),e=e.subtract(t)}while(!e.isZero());return n.isUnit()?t:t.multiply(n)}s.prototype.bitLength=function(){var t=this;return t.compareTo(n(0))<0&&(t=t.negate().subtract(n(1))),0===t.compareTo(n(0))?n(0):n(function t(e,r){if(r.compareTo(e)<=0){var o=t(e,r.square(r)),i=o.p,u=o.e,p=i.multiply(r);return p.compareTo(e)<=0?{p:p,e:2*u+1}:{p:i,e:2*u}}return{p:n(1),e:0}}(t,n(2)).e).add(n(1))},f.prototype.bitLength=l.prototype.bitLength=s.prototype.bitLength;var $=function(t,e,r,o){r=r||u,t=String(t),o||(t=t.toLowerCase(),r=r.toLowerCase());var n,i=t.length,p=Math.abs(e),a={};for(n=0;n<r.length;n++)a[r[n]]=n;for(n=0;n<i;n++){if("-"!==(f=t[n])&&(f in a&&a[f]>=p)){if("1"===f&&1===p)continue;throw new Error(f+" is not a valid digit in base "+e+".")}}e=Q(e);var s=[],l="-"===t[0];for(n=l?1:0;n<t.length;n++){var f;if((f=t[n])in a)s.push(Q(a[f]));else{if("<"!==f)throw new Error(f+" is not a valid character");var v=n;do{n++}while(">"!==t[n]&&n<t.length);s.push(Q(t.slice(v+1,n)))}}return F(s,e,l)};function F(t,e,r){var o,n=a[0],i=a[1];for(o=t.length-1;o>=0;o--)n=n.add(t[o].times(i)),i=i.times(e);return r?n.negate():n}function G(t,e){if((e=n(e)).isZero()){if(t.isZero())return{value:[0],isNegative:!1};throw new Error("Cannot convert nonzero numbers to base 0.")}if(e.equals(-1)){if(t.isZero())return{value:[0],isNegative:!1};if(t.isNegative())return{value:[].concat.apply([],Array.apply(null,Array(-t.toJSNumber())).map(Array.prototype.valueOf,[1,0])),isNegative:!1};var r=Array.apply(null,Array(t.toJSNumber()-1)).map(Array.prototype.valueOf,[0,1]);return r.unshift([1]),{value:[].concat.apply([],r),isNegative:!1}}var o=!1;if(t.isNegative()&&e.isPositive()&&(o=!0,t=t.abs()),e.isUnit())return t.isZero()?{value:[0],isNegative:!1}:{value:Array.apply(null,Array(t.toJSNumber())).map(Number.prototype.valueOf,1),isNegative:o};for(var i,u=[],p=t;p.isNegative()||p.compareAbs(e)>=0;){i=p.divmod(e),p=i.quotient;var a=i.remainder;a.isNegative()&&(a=e.minus(a).abs(),p=p.next()),u.push(a.toJSNumber())}return u.push(p.toJSNumber()),{value:u.reverse(),isNegative:o}}function H(t,e,r){var o=G(t,e);return(o.isNegative?"-":"")+o.value.map((function(t){return function(t,e){return t<(e=e||u).length?e[t]:"<"+t+">"}(t,r)})).join("")}function K(t){if(v(+t)){var e=+t;if(e===m(e))return p?new f(BigInt(e)):new l(e);throw new Error("Invalid integer: "+t)}var o="-"===t[0];o&&(t=t.slice(1));var n=t.split(/e/i);if(n.length>2)throw new Error("Invalid integer: "+n.join("e"));if(2===n.length){var i=n[1];if("+"===i[0]&&(i=i.slice(1)),(i=+i)!==m(i)||!v(i))throw new Error("Invalid integer: "+i+" is not a valid exponent.");var u=n[0],a=u.indexOf(".");if(a>=0&&(i-=u.length-a-1,u=u.slice(0,a)+u.slice(a+1)),i<0)throw new Error("Cannot include negative exponent part for integers");t=u+=new Array(i+1).join("0")}if(!/^([0-9][0-9]*)$/.test(t))throw new Error("Invalid integer: "+t);if(p)return new f(BigInt(o?"-"+t:t));for(var h=[],y=t.length,g=r,d=y-g;y>0;)h.push(+t.slice(d,y)),(d-=g)<0&&(d=0),y-=g;return c(h),new s(h,o)}function Q(t){return"number"===typeof t?function(t){if(p)return new f(BigInt(t));if(v(t)){if(t!==m(t))throw new Error(t+" is not an integer.");return new l(t)}return K(t.toString())}(t):"string"===typeof t?K(t):"bigint"===typeof t?new f(t):t}s.prototype.toArray=function(t){return G(this,t)},l.prototype.toArray=function(t){return G(this,t)},f.prototype.toArray=function(t){return G(this,t)},s.prototype.toString=function(t,e){if(void 0===t&&(t=10),10!==t)return H(this,t,e);for(var r,o=this.value,n=o.length,i=String(o[--n]);--n>=0;)r=String(o[n]),i+="0000000".slice(r.length)+r;return(this.sign?"-":"")+i},l.prototype.toString=function(t,e){return void 0===t&&(t=10),10!=t?H(this,t,e):String(this.value)},f.prototype.toString=l.prototype.toString,f.prototype.toJSON=s.prototype.toJSON=l.prototype.toJSON=function(){return this.toString()},s.prototype.valueOf=function(){return parseInt(this.toString(),10)},s.prototype.toJSNumber=s.prototype.valueOf,l.prototype.valueOf=function(){return this.value},l.prototype.toJSNumber=l.prototype.valueOf,f.prototype.valueOf=f.prototype.toJSNumber=function(){return parseInt(this.toString(),10)};for(var V=0;V<1e3;V++)a[V]=Q(V),V>0&&(a[-V]=Q(-V));return a.one=a[1],a.zero=a[0],a.minusOne=a[-1],a.max=D,a.min=z,a.gcd=R,a.lcm=function(t,e){return t=Q(t).abs(),e=Q(e).abs(),t.divide(R(t,e)).multiply(e)},a.isInstance=function(t){return t instanceof s||t instanceof l||t instanceof f},a.randBetween=function(t,r,o){t=Q(t),r=Q(r);var n=o||Math.random,i=z(t,r),u=D(t,r).subtract(i).add(1);if(u.isSmall)return i.add(Math.floor(n()*u));for(var p=G(u,e).value,s=[],l=!0,f=0;f<p.length;f++){var v=l?p[f]:e,h=m(n()*v);s.push(h),h<v&&(l=!1)}return i.add(a.fromArray(s,e,!1))},a.fromArray=function(t,e,r){return F(t.map(Q),Q(e||10),r)},a}();t.hasOwnProperty("exports")&&(t.exports=n),void 0===(o=function(){return n}.call(e,r,e,t))||(t.exports=o)}).call(this,r(2)(t))},function(t,e,r){"use strict";r.r(e);var o=r(0),n=r.n(o);addEventListener("message",(function(t){var e;n.a.abs=function(t){return n()(t).abs()},n.a.mul=function(t,e){return n()(t).multiply(e)},n.a.div=function(t,e){return n()(t).divide(e)},n.a.add=function(t,e){return n()(t).add(e)},n()().__proto__.cmp=n()().__proto__.compare,n()().__proto__.div=n()().__proto__.divide,n()().__proto__.mul=n()().__proto__.multiply,n()("90071992547409920").__proto__.cmp=n()("90071992547409920").__proto__.compare,n()("90071992547409920").__proto__.div=n()("90071992547409920").__proto__.divide,n()("90071992547409920").__proto__.mul=n()("90071992547409920").__proto__.multiply,e=t.data[0];for(var r=t.data[1],o=t.data[2],i=new n.a(0),u=new n.a(1),p=new n.a("1e"+e),a=new n.a(0),s=1,l=new n.a(1),f=0,v=o;f<v;f++)s*=-1,u=n.a.mul(u,1024),a=a.plus(1);for(;n.a.abs(l).cmp(new n.a(0))>=0&&(l=n.a.mul(1,s).mul(n.a.div(p.mul(-Math.pow(2,5)),n.a.mul(4,a).plus(1)).plus(n.a.div(p.mul(-1),n.a.mul(4,a).plus(3))).plus(n.a.div(p.mul(Math.pow(2,8)),n.a.mul(10,a).plus(1))).plus(n.a.div(p.mul(-Math.pow(2,6)),n.a.mul(10,a).plus(3))).plus(n.a.div(p.mul(-Math.pow(2,2)),n.a.mul(10,a).plus(5))).plus(n.a.div(p.mul(-Math.pow(2,2)),n.a.mul(10,a).plus(7))).plus(n.a.div(p.mul(1),n.a.mul(10,a).plus(9)))).div(n.a.mul(Math.pow(2,6),u)),i=n.a.add(i,l),!(n.a.abs(l).cmp(new n.a(0))<=0));)for(var h=0,y=r;h<y;h++)s*=-1,u=n.a.mul(u,1024),a=a.plus(1);postMessage([i.toString(),""+a.plus(1)])}))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}}]);',
                    n.p +
                        "service-worker-mythread1-bigint.worker.ae65436ddcf59707b548.worker.js"
                );
            };
        },
        62: function (e, t, n) {
            e.exports = function () {
                return n(30)(
                    '!function(n){var e={};function i(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=n,i.c=e,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.4.1/",i(i.s=1)}([function(n,e,i){"use strict";var t;!function(r){var s,o,u,c=9e15,f=1e9,a="0123456789abcdef",l="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",d="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",h={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-c,maxE:c,crypto:!1},p=!0,g="[DecimalError] ",m=g+"Invalid argument: ",w=g+"Precision limit exceeded",v=g+"crypto unavailable",N=Math.floor,b=Math.pow,x=/^0b([01]+(\\.[01]*)?|\\.[01]+)(p[+-]?\\d+)?$/i,E=/^0x([0-9a-f]+(\\.[0-9a-f]*)?|\\.[0-9a-f]+)(p[+-]?\\d+)?$/i,y=/^0o([0-7]+(\\.[0-7]*)?|\\.[0-7]+)(p[+-]?\\d+)?$/i,M=/^(\\d+(\\.\\d*)?|\\.\\d+)(e[+-]?\\d+)?$/i,O=1e7,q=7,F=l.length-1,P=d.length-1,A={name:"[object Decimal]"};function D(n){var e,i,t,r=n.length-1,s="",o=n[0];if(0<r){for(s+=o,e=1;e<r;e++)t=n[e]+"",(i=q-t.length)&&(s+=C(i)),s+=t;o=n[e],(i=q-(t=o+"").length)&&(s+=C(i))}else if(0===o)return"0";for(;o%10==0;)o/=10;return s+o}function _(n,e,i){if(n!==~~n||n<e||i<n)throw Error(m+n)}function Z(n,e,i,t){var r,s,o;for(s=n[0];10<=s;s/=10)--e;return--e<0?(e+=q,r=0):(r=Math.ceil((e+1)/q),e%=q),s=b(10,q-e),o=n[r]%s|0,null==t?e<3?(0==e?o=o/100|0:1==e&&(o=o/10|0),i<4&&99999==o||3<i&&49999==o||5e4==o||0==o):(i<4&&o+1==s||3<i&&o+1==s/2)&&(n[r+1]/s/100|0)==b(10,e-2)-1||(o==s/2||0==o)&&0==(n[r+1]/s/100|0):e<4?(0==e?o=o/1e3|0:1==e?o=o/100|0:2==e&&(o=o/10|0),(t||i<4)&&9999==o||!t&&3<i&&4999==o):((t||i<4)&&o+1==s||!t&&3<i&&o+1==s/2)&&(n[r+1]/s/1e3|0)==b(10,e-3)-1}function S(n,e,i){for(var t,r,s=[0],o=0,u=n.length;o<u;){for(r=s.length;r--;)s[r]*=e;for(s[0]+=a.indexOf(n.charAt(o++)),t=0;t<s.length;t++)s[t]>i-1&&(void 0===s[t+1]&&(s[t+1]=0),s[t+1]+=s[t]/i|0,s[t]%=i)}return s.reverse()}A.absoluteValue=A.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),L(n)},A.ceil=function(){return L(new this.constructor(this),this.e+1,2)},A.comparedTo=A.cmp=function(n){var e,i,t,r,s=this,o=s.d,u=(n=new s.constructor(n)).d,c=s.s,f=n.s;if(!o||!u)return c&&f?c!==f?c:o===u?0:!o^c<0?1:-1:NaN;if(!o[0]||!u[0])return o[0]?c:u[0]?-f:0;if(c!==f)return c;if(s.e!==n.e)return s.e>n.e^c<0?1:-1;for(e=0,i=(t=o.length)<(r=u.length)?t:r;e<i;++e)if(o[e]!==u[e])return o[e]>u[e]^c<0?1:-1;return t===r?0:r<t^c<0?1:-1},A.cosine=A.cos=function(){var n,e,i=this,t=i.constructor;return i.d?i.d[0]?(n=t.precision,e=t.rounding,t.precision=n+Math.max(i.e,i.sd())+q,t.rounding=1,i=function(n,e){var i,t,r=e.d.length;t=r<32?(1/K(4,i=Math.ceil(r/3))).toString():(i=16,"2.3283064365386962890625e-10"),n.precision+=i,e=G(n,1,e.times(t),new n(1));for(var s=i;s--;){var o=e.times(e);e=o.times(o).minus(o).times(8).plus(1)}return n.precision-=i,e}(t,Q(t,i)),t.precision=n,t.rounding=e,L(2==u||3==u?i.neg():i,n,e,!0)):new t(1):new t(NaN)},A.cubeRoot=A.cbrt=function(){var n,e,i,t,r,s,o,u,c,f,a=this,l=a.constructor;if(!a.isFinite()||a.isZero())return new l(a);for(p=!1,(s=a.s*b(a.s*a,1/3))&&Math.abs(s)!=1/0?t=new l(s.toString()):(i=D(a.d),(s=((n=a.e)-i.length+1)%3)&&(i+=1==s||-2==s?"0":"00"),s=b(i,1/3),n=N((n+1)/3)-(n%3==(n<0?-1:2)),(t=new l(i=s==1/0?"5e"+n:(i=s.toExponential()).slice(0,i.indexOf("e")+1)+n)).s=a.s),o=(n=l.precision)+3;;)if(f=(c=(u=t).times(u).times(u)).plus(a),t=R(f.plus(a).times(u),f.plus(c),o+2,1),D(u.d).slice(0,o)===(i=D(t.d)).slice(0,o)){if("9999"!=(i=i.slice(o-3,o+1))&&(r||"4999"!=i)){+i&&(+i.slice(1)||"5"!=i.charAt(0))||(L(t,n+1,1),e=!t.times(t).times(t).eq(a));break}if(!r&&(L(u,n+1,0),u.times(u).times(u).eq(a))){t=u;break}o+=4,r=1}return p=!0,L(t,n,l.rounding,e)},A.decimalPlaces=A.dp=function(){var n,e=this.d,i=NaN;if(e){if(i=((n=e.length-1)-N(this.e/q))*q,n=e[n])for(;n%10==0;n/=10)i--;i<0&&(i=0)}return i},A.dividedBy=A.div=function(n){return R(this,new this.constructor(n))},A.dividedToIntegerBy=A.divToInt=function(n){var e=this.constructor;return L(R(this,new e(n),0,1,1),e.precision,e.rounding)},A.equals=A.eq=function(n){return 0===this.cmp(n)},A.floor=function(){return L(new this.constructor(this),this.e+1,3)},A.greaterThan=A.gt=function(n){return 0<this.cmp(n)},A.greaterThanOrEqualTo=A.gte=function(n){var e=this.cmp(n);return 1==e||0===e},A.hyperbolicCosine=A.cosh=function(){var n,e,i,t,r,s=this,o=s.constructor,u=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return u;i=o.precision,t=o.rounding,o.precision=i+Math.max(s.e,s.sd())+4,o.rounding=1,e=(r=s.d.length)<32?(1/K(4,n=Math.ceil(r/3))).toString():(n=16,"2.3283064365386962890625e-10"),s=G(o,1,s.times(e),new o(1),!0);for(var c,f=n,a=new o(8);f--;)c=s.times(s),s=u.minus(c.times(a.minus(c.times(a))));return L(s,o.precision=i,o.rounding=t,!0)},A.hyperbolicSine=A.sinh=function(){var n,e,i,t,r=this,s=r.constructor;if(!r.isFinite()||r.isZero())return new s(r);if(e=s.precision,i=s.rounding,s.precision=e+Math.max(r.e,r.sd())+4,s.rounding=1,(t=r.d.length)<3)r=G(s,2,r,r,!0);else{n=16<(n=1.4*Math.sqrt(t))?16:0|n,r=G(s,2,r=r.times(1/K(5,n)),r,!0);for(var o,u=new s(5),c=new s(16),f=new s(20);n--;)o=r.times(r),r=r.times(u.plus(o.times(c.times(o).plus(f))))}return L(r,s.precision=e,s.rounding=i,!0)},A.hyperbolicTangent=A.tanh=function(){var n,e,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+7,t.rounding=1,R(i.sinh(),i.cosh(),t.precision=n,t.rounding=e)):new t(i.s)},A.inverseCosine=A.acos=function(){var n,e=this,i=e.constructor,t=e.abs().cmp(1),r=i.precision,s=i.rounding;return-1!==t?0===t?e.isNeg()?j(i,r,s):new i(0):new i(NaN):e.isZero()?j(i,r+4,s).times(.5):(i.precision=r+6,i.rounding=1,e=e.asin(),n=j(i,r+4,s).times(.5),i.precision=r,i.rounding=s,n.minus(e))},A.inverseHyperbolicCosine=A.acosh=function(){var n,e,i=this,t=i.constructor;return i.lte(1)?new t(i.eq(1)?0:NaN):i.isFinite()?(n=t.precision,e=t.rounding,t.precision=n+Math.max(Math.abs(i.e),i.sd())+4,t.rounding=1,p=!1,i=i.times(i).minus(1).sqrt().plus(i),p=!0,t.precision=n,t.rounding=e,i.ln()):new t(i)},A.inverseHyperbolicSine=A.asinh=function(){var n,e,i=this,t=i.constructor;return!i.isFinite()||i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+2*Math.max(Math.abs(i.e),i.sd())+6,t.rounding=1,p=!1,i=i.times(i).plus(1).sqrt().plus(i),p=!0,t.precision=n,t.rounding=e,i.ln())},A.inverseHyperbolicTangent=A.atanh=function(){var n,e,i,t,r=this,s=r.constructor;return r.isFinite()?0<=r.e?new s(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(n=s.precision,e=s.rounding,t=r.sd(),Math.max(t,n)<2*-r.e-1?L(new s(r),n,e,!0):(s.precision=i=t-r.e,r=R(r.plus(1),new s(1).minus(r),i+n,1),s.precision=n+4,s.rounding=1,r=r.ln(),s.precision=n,s.rounding=e,r.times(.5))):new s(NaN)},A.inverseSine=A.asin=function(){var n,e,i,t,r=this,s=r.constructor;return r.isZero()?new s(r):(e=r.abs().cmp(1),i=s.precision,t=s.rounding,-1!==e?0===e?((n=j(s,i+4,t).times(.5)).s=r.s,n):new s(NaN):(s.precision=i+6,s.rounding=1,r=r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(),s.precision=i,s.rounding=t,r.times(2)))},A.inverseTangent=A.atan=function(){var n,e,i,t,r,s,o,u,c,f=this,a=f.constructor,l=a.precision,d=a.rounding;if(f.isFinite()){if(f.isZero())return new a(f);if(f.abs().eq(1)&&l+4<=P)return(o=j(a,l+4,d).times(.25)).s=f.s,o}else{if(!f.s)return new a(NaN);if(l+4<=P)return(o=j(a,l+4,d).times(.5)).s=f.s,o}for(a.precision=u=l+10,a.rounding=1,n=i=Math.min(28,u/q+2|0);n;--n)f=f.div(f.times(f).plus(1).sqrt().plus(1));for(p=!1,e=Math.ceil(u/q),t=1,c=f.times(f),o=new a(f),r=f;-1!==n;)if(r=r.times(c),s=o.minus(r.div(t+=2)),r=r.times(c),void 0!==(o=s.plus(r.div(t+=2))).d[e])for(n=e;o.d[n]===s.d[n]&&n--;);return i&&(o=o.times(2<<i-1)),p=!0,L(o,a.precision=l,a.rounding=d,!0)},A.isFinite=function(){return!!this.d},A.isInteger=A.isInt=function(){return!!this.d&&N(this.e/q)>this.d.length-2},A.isNaN=function(){return!this.s},A.isNegative=A.isNeg=function(){return this.s<0},A.isPositive=A.isPos=function(){return 0<this.s},A.isZero=function(){return!!this.d&&0===this.d[0]},A.lessThan=A.lt=function(n){return this.cmp(n)<0},A.lessThanOrEqualTo=A.lte=function(n){return this.cmp(n)<1},A.logarithm=A.log=function(n){var e,i,t,r,s,o,u,c,f=this,a=f.constructor,l=a.precision,d=a.rounding;if(null==n)n=new a(10),e=!0;else{if(i=(n=new a(n)).d,n.s<0||!i||!i[0]||n.eq(1))return new a(NaN);e=n.eq(10)}if(i=f.d,f.s<0||!i||!i[0]||f.eq(1))return new a(i&&!i[0]?-1/0:1!=f.s?NaN:i?0:1/0);if(e)if(1<i.length)s=!0;else{for(r=i[0];r%10==0;)r/=10;s=1!==r}if(p=!1,o=W(f,u=l+5),t=e?k(a,u+10):W(n,u),Z((c=R(o,t,u,1)).d,r=l,d))do{if(o=W(f,u+=10),t=e?k(a,u+10):W(n,u),c=R(o,t,u,1),!s){+D(c.d).slice(r+1,r+15)+1==1e14&&(c=L(c,l+1,0));break}}while(Z(c.d,r+=10,d));return p=!0,L(c,l,d)},A.minus=A.sub=function(n){var e,i,t,r,s,o,u,c,f,a,l,d,h=this,g=h.constructor;if(n=new g(n),!h.d||!n.d)return h.s&&n.s?h.d?n.s=-n.s:n=new g(n.d||h.s!==n.s?h:NaN):n=new g(NaN),n;if(h.s!=n.s)return n.s=-n.s,h.plus(n);if(f=h.d,d=n.d,u=g.precision,c=g.rounding,!f[0]||!d[0]){if(d[0])n.s=-n.s;else{if(!f[0])return new g(3===c?-0:0);n=new g(h)}return p?L(n,u,c):n}if(i=N(n.e/q),a=N(h.e/q),f=f.slice(),s=a-i){for(o=(l=s<0)?(e=f,s=-s,d.length):(e=d,i=a,f.length),(t=Math.max(Math.ceil(u/q),o)+2)<s&&(s=t,e.length=1),e.reverse(),t=s;t--;)e.push(0);e.reverse()}else{for((l=(t=f.length)<(o=d.length))&&(o=t),t=0;t<o;t++)if(f[t]!=d[t]){l=f[t]<d[t];break}s=0}for(l&&(e=f,f=d,d=e,n.s=-n.s),o=f.length,t=d.length-o;0<t;--t)f[o++]=0;for(t=d.length;s<t;){if(f[--t]<d[t]){for(r=t;r&&0===f[--r];)f[r]=O-1;--f[r],f[t]+=O}f[t]-=d[t]}for(;0===f[--o];)f.pop();for(;0===f[0];f.shift())--i;return f[0]?(n.d=f,n.e=U(f,i),p?L(n,u,c):n):new g(3===c?-0:0)},A.modulo=A.mod=function(n){var e,i=this,t=i.constructor;return n=new t(n),!i.d||!n.s||n.d&&!n.d[0]?new t(NaN):!n.d||i.d&&!i.d[0]?L(new t(i),t.precision,t.rounding):(p=!1,9==t.modulo?(e=R(i,n.abs(),0,3,1)).s*=n.s:e=R(i,n,0,t.modulo,1),e=e.times(n),p=!0,i.minus(e))},A.naturalExponential=A.exp=function(){return $(this)},A.naturalLogarithm=A.ln=function(){return W(this)},A.negated=A.neg=function(){var n=new this.constructor(this);return n.s=-n.s,L(n)},A.plus=A.add=function(n){var e,i,t,r,s,o,u,c,f,a,l=this,d=l.constructor;if(n=new d(n),!l.d||!n.d)return l.s&&n.s?l.d||(n=new d(n.d||l.s===n.s?l:NaN)):n=new d(NaN),n;if(l.s!=n.s)return n.s=-n.s,l.minus(n);if(f=l.d,a=n.d,u=d.precision,c=d.rounding,!f[0]||!a[0])return a[0]||(n=new d(l)),p?L(n,u,c):n;if(s=N(l.e/q),t=N(n.e/q),f=f.slice(),r=s-t){for((o=(o=r<0?(i=f,r=-r,a.length):(i=a,t=s,f.length))<(s=Math.ceil(u/q))?s+1:o+1)<r&&(r=o,i.length=1),i.reverse();r--;)i.push(0);i.reverse()}for((o=f.length)-(r=a.length)<0&&(r=o,i=a,a=f,f=i),e=0;r;)e=(f[--r]=f[r]+a[r]+e)/O|0,f[r]%=O;for(e&&(f.unshift(e),++t),o=f.length;0==f[--o];)f.pop();return n.d=f,n.e=U(f,t),p?L(n,u,c):n},A.precision=A.sd=function(n){var e;if(void 0!==n&&n!==!!n&&1!==n&&0!==n)throw Error(m+n);return this.d?(e=I(this.d),n&&this.e+1>e&&(e=this.e+1)):e=NaN,e},A.round=function(){var n=this.constructor;return L(new n(this),this.e+1,n.rounding)},A.sine=A.sin=function(){var n,e,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+Math.max(i.e,i.sd())+q,t.rounding=1,i=function(n,e){var i,t=e.d.length;if(t<3)return G(n,2,e,e);i=16<(i=1.4*Math.sqrt(t))?16:0|i,e=G(n,2,e=e.times(1/K(5,i)),e);for(var r,s=new n(5),o=new n(16),u=new n(20);i--;)r=e.times(e),e=e.times(s.plus(r.times(o.times(r).minus(u))));return e}(t,Q(t,i)),t.precision=n,t.rounding=e,L(2<u?i.neg():i,n,e,!0)):new t(NaN)},A.squareRoot=A.sqrt=function(){var n,e,i,t,r,s,o=this,u=o.d,c=o.e,f=o.s,a=o.constructor;if(1!==f||!u||!u[0])return new a(!f||f<0&&(!u||u[0])?NaN:u?o:1/0);for(p=!1,t=0==(f=Math.sqrt(+o))||f==1/0?(((e=D(u)).length+c)%2==0&&(e+="0"),f=Math.sqrt(e),c=N((c+1)/2)-(c<0||c%2),new a(e=f==1/0?"1e"+c:(e=f.toExponential()).slice(0,e.indexOf("e")+1)+c)):new a(f.toString()),i=(c=a.precision)+3;;)if(t=(s=t).plus(R(o,s,i+2,1)).times(.5),D(s.d).slice(0,i)===(e=D(t.d)).slice(0,i)){if("9999"!=(e=e.slice(i-3,i+1))&&(r||"4999"!=e)){+e&&(+e.slice(1)||"5"!=e.charAt(0))||(L(t,c+1,1),n=!t.times(t).eq(o));break}if(!r&&(L(s,c+1,0),s.times(s).eq(o))){t=s;break}i+=4,r=1}return p=!0,L(t,c,a.rounding,n)},A.tangent=A.tan=function(){var n,e,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+10,t.rounding=1,(i=i.sin()).s=1,i=R(i,new t(1).minus(i.times(i)).sqrt(),n+10,0),t.precision=n,t.rounding=e,L(2==u||4==u?i.neg():i,n,e,!0)):new t(NaN)},A.times=A.mul=function(n){var e,i,t,r,s,o,u,c,f,a=this.constructor,l=this.d,d=(n=new a(n)).d;if(n.s*=this.s,!(l&&l[0]&&d&&d[0]))return new a(!n.s||l&&!l[0]&&!d||d&&!d[0]&&!l?NaN:l&&d?0*n.s:n.s/0);for(i=N(this.e/q)+N(n.e/q),(c=l.length)<(f=d.length)&&(s=l,l=d,d=s,o=c,c=f,f=o),s=[],t=o=c+f;t--;)s.push(0);for(t=f;0<=--t;){for(e=0,r=c+t;t<r;)u=s[r]+d[t]*l[r-t-1]+e,s[r--]=u%O|0,e=u/O|0;s[r]=(s[r]+e)%O|0}for(;!s[--o];)s.pop();return e?++i:s.shift(),n.d=s,n.e=U(s,i),p?L(n,a.precision,a.rounding):n},A.toBinary=function(n,e){return X(this,2,n,e)},A.toDecimalPlaces=A.toDP=function(n,e){var i=this,t=i.constructor;return i=new t(i),void 0===n?i:(_(n,0,f),void 0===e?e=t.rounding:_(e,0,8),L(i,n+i.e+1,e))},A.toExponential=function(n,e){var i,t=this,r=t.constructor;return i=void 0===n?T(t,!0):(_(n,0,f),void 0===e?e=r.rounding:_(e,0,8),T(t=L(new r(t),n+1,e),!0,n+1)),t.isNeg()&&!t.isZero()?"-"+i:i},A.toFixed=function(n,e){var i,t,r=this,s=r.constructor;return i=void 0===n?T(r):(_(n,0,f),void 0===e?e=s.rounding:_(e,0,8),T(t=L(new s(r),n+r.e+1,e),!1,n+t.e+1)),r.isNeg()&&!r.isZero()?"-"+i:i},A.toFraction=function(n){var e,i,t,r,s,o,u,c,f,a,l,d,h=this,g=h.d,w=h.constructor;if(!g)return new w(h);if(f=i=new w(1),o=(s=(e=new w(t=c=new w(0))).e=I(g)-h.e-1)%q,e.d[0]=b(10,o<0?q+o:o),null==n)n=0<s?e:f;else{if(!(u=new w(n)).isInt()||u.lt(f))throw Error(m+u);n=u.gt(e)?0<s?e:f:u}for(p=!1,u=new w(D(g)),a=w.precision,w.precision=s=g.length*q*2;l=R(u,e,0,1,1),1!=(r=i.plus(l.times(t))).cmp(n);)i=t,t=r,r=f,f=c.plus(l.times(r)),c=r,r=e,e=u.minus(l.times(r)),u=r;return r=R(n.minus(i),t,0,1,1),c=c.plus(r.times(f)),i=i.plus(r.times(t)),c.s=f.s=h.s,d=R(f,t,s,1).minus(h).abs().cmp(R(c,i,s,1).minus(h).abs())<1?[f,t]:[c,i],w.precision=a,p=!0,d},A.toHexadecimal=A.toHex=function(n,e){return X(this,16,n,e)},A.toNearest=function(n,e){var i=this,t=i.constructor;if(i=new t(i),null==n){if(!i.d)return i;n=new t(1),e=t.rounding}else{if(n=new t(n),void 0===e?e=t.rounding:_(e,0,8),!i.d)return n.s?i:n;if(!n.d)return n.s&&(n.s=i.s),n}return n.d[0]?(p=!1,i=R(i,n,0,e,1).times(n),p=!0,L(i)):(n.s=i.s,i=n),i},A.toNumber=function(){return+this},A.toOctal=function(n,e){return X(this,8,n,e)},A.toPower=A.pow=function(n){var e,i,t,r,s,o,u=this,c=u.constructor,f=+(n=new c(n));if(!(u.d&&n.d&&u.d[0]&&n.d[0]))return new c(b(+u,f));if((u=new c(u)).eq(1))return u;if(t=c.precision,s=c.rounding,n.eq(1))return L(u,t,s);if((e=N(n.e/q))>=n.d.length-1&&(i=f<0?-f:f)<=9007199254740991)return r=H(c,u,i,t),n.s<0?new c(1).div(r):L(r,t,s);if((o=u.s)<0){if(e<n.d.length-1)return new c(NaN);if(0==(1&n.d[e])&&(o=1),0==u.e&&1==u.d[0]&&1==u.d.length)return u.s=o,u}return(e=0!=(i=b(+u,f))&&isFinite(i)?new c(i+"").e:N(f*(Math.log("0."+D(u.d))/Math.LN10+u.e+1)))>c.maxE+1||e<c.minE-1?new c(0<e?o/0:0):(p=!1,c.rounding=u.s=1,i=Math.min(12,(e+"").length),(r=$(n.times(W(u,t+i)),t)).d&&Z((r=L(r,t+5,1)).d,t,s)&&(e=t+10,+D((r=L($(n.times(W(u,e+i)),e),e+5,1)).d).slice(t+1,t+15)+1==1e14&&(r=L(r,t+1,0))),r.s=o,p=!0,L(r,t,c.rounding=s))},A.toPrecision=function(n,e){var i,t=this,r=t.constructor;return i=void 0===n?T(t,t.e<=r.toExpNeg||t.e>=r.toExpPos):(_(n,1,f),void 0===e?e=r.rounding:_(e,0,8),T(t=L(new r(t),n,e),n<=t.e||t.e<=r.toExpNeg,n)),t.isNeg()&&!t.isZero()?"-"+i:i},A.toSignificantDigits=A.toSD=function(n,e){var i=this.constructor;return void 0===n?(n=i.precision,e=i.rounding):(_(n,1,f),void 0===e?e=i.rounding:_(e,0,8)),L(new i(this),n,e)},A.toString=function(){var n=this,e=n.constructor,i=T(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()&&!n.isZero()?"-"+i:i},A.truncated=A.trunc=function(){return L(new this.constructor(this),this.e+1,1)},A.valueOf=A.toJSON=function(){var n=this,e=n.constructor,i=T(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()?"-"+i:i};var R=function(){function n(n,e,i){var t,r=0,s=n.length;for(n=n.slice();s--;)t=n[s]*e+r,n[s]=t%i|0,r=t/i|0;return r&&n.unshift(r),n}function e(n,e,i,t){var r,s;if(i!=t)s=t<i?1:-1;else for(r=s=0;r<i;r++)if(n[r]!=e[r]){s=n[r]>e[r]?1:-1;break}return s}function i(n,e,i,t){for(var r=0;i--;)n[i]-=r,r=n[i]<e[i]?1:0,n[i]=r*t+n[i]-e[i];for(;!n[0]&&1<n.length;)n.shift()}return function(t,r,s,u,c,f){var a,l,d,h,p,g,m,w,v,b,x,E,y,M,F,P,A,D,_,Z,S=t.constructor,R=t.s==r.s?1:-1,T=t.d,U=r.d;if(!(T&&T[0]&&U&&U[0]))return new S(t.s&&r.s&&(T?!U||T[0]!=U[0]:U)?T&&0==T[0]||!U?0*R:R/0:NaN);for(l=f?(p=1,t.e-r.e):(f=O,p=q,N(t.e/p)-N(r.e/p)),_=U.length,A=T.length,b=(v=new S(R)).d=[],d=0;U[d]==(T[d]||0);d++);if(U[d]>(T[d]||0)&&l--,null==s?(M=s=S.precision,u=S.rounding):M=c?s+(t.e-r.e)+1:s,M<0)b.push(1),g=!0;else{if(M=M/p+2|0,d=0,1==_){for(U=U[h=0],M++;(d<A||h)&&M--;d++)F=h*f+(T[d]||0),b[d]=F/U|0,h=F%U|0;g=h||d<A}else{for(1<(h=f/(U[0]+1)|0)&&(U=n(U,h,f),T=n(T,h,f),_=U.length,A=T.length),P=_,E=(x=T.slice(0,_)).length;E<_;)x[E++]=0;for((Z=U.slice()).unshift(0),D=U[0],U[1]>=f/2&&++D;h=0,(a=e(U,x,_,E))<0?(y=x[0],_!=E&&(y=y*f+(x[1]||0)),1<(h=y/D|0)?(f<=h&&(h=f-1),1==(a=e(m=n(U,h,f),x,w=m.length,E=x.length))&&(h--,i(m,_<w?Z:U,w,f))):(0==h&&(a=h=1),m=U.slice()),(w=m.length)<E&&m.unshift(0),i(x,m,E,f),-1==a&&(a=e(U,x,_,E=x.length))<1&&(h++,i(x,_<E?Z:U,E,f)),E=x.length):0===a&&(h++,x=[0]),b[d++]=h,a&&x[0]?x[E++]=T[P]||0:(x=[T[P]],E=1),(P++<A||void 0!==x[0])&&M--;);g=void 0!==x[0]}b[0]||b.shift()}if(1==p)v.e=l,o=g;else{for(d=1,h=b[0];10<=h;h/=10)d++;v.e=d+l*p-1,L(v,c?s+v.e+1:s,u,g)}return v}}();function L(n,e,i,t){var r,s,o,u,c,f,a,l,d,h=n.constructor;n:if(null!=e){if(!(l=n.d))return n;for(r=1,u=l[0];10<=u;u/=10)r++;if((s=e-r)<0)s+=q,o=e,c=(a=l[d=0])/b(10,r-o-1)%10|0;else if(d=Math.ceil((s+1)/q),(u=l.length)<=d){if(!t)break n;for(;u++<=d;)l.push(0);a=c=0,o=(s%=q)-q+(r=1)}else{for(a=u=l[d],r=1;10<=u;u/=10)r++;c=(o=(s%=q)-q+r)<0?0:a/b(10,r-o-1)%10|0}if(t=t||e<0||void 0!==l[d+1]||(o<0?a:a%b(10,r-o-1)),f=i<4?(c||t)&&(0==i||i==(n.s<0?3:2)):5<c||5==c&&(4==i||t||6==i&&(0<s?0<o?a/b(10,r-o):0:l[d-1])%10&1||i==(n.s<0?8:7)),e<1||!l[0])return l.length=0,f?(e-=n.e+1,l[0]=b(10,(q-e%q)%q),n.e=-e||0):l[0]=n.e=0,n;if(0==s?(l.length=d,u=1,d--):(l.length=d+1,u=b(10,q-s),l[d]=0<o?(a/b(10,r-o)%b(10,o)|0)*u:0),f)for(;;){if(0==d){for(s=1,o=l[0];10<=o;o/=10)s++;for(o=l[0]+=u,u=1;10<=o;o/=10)u++;s!=u&&(n.e++,l[0]==O&&(l[0]=1));break}if(l[d]+=u,l[d]!=O)break;l[d--]=0,u=1}for(s=l.length;0===l[--s];)l.pop()}return p&&(n.e>h.maxE?(n.d=null,n.e=NaN):n.e<h.minE&&(n.e=0,n.d=[0])),n}function T(n,e,i){if(!n.isFinite())return J(n);var t,r=n.e,s=D(n.d),o=s.length;return e?(i&&0<(t=i-o)?s=s.charAt(0)+"."+s.slice(1)+C(t):1<o&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(n.e<0?"e":"e+")+n.e):r<0?(s="0."+C(-r-1)+s,i&&0<(t=i-o)&&(s+=C(t))):o<=r?(s+=C(r+1-o),i&&0<(t=i-r-1)&&(s=s+"."+C(t))):((t=r+1)<o&&(s=s.slice(0,t)+"."+s.slice(t)),i&&0<(t=i-o)&&(r+1===o&&(s+="."),s+=C(t))),s}function U(n,e){var i=n[0];for(e*=q;10<=i;i/=10)e++;return e}function k(n,e,i){if(F<e)throw p=!0,i&&(n.precision=i),Error(w);return L(new n(l),e,1,!0)}function j(n,e,i){if(P<e)throw Error(w);return L(new n(d),e,i,!0)}function I(n){var e=n.length-1,i=e*q+1;if(e=n[e]){for(;e%10==0;e/=10)i--;for(e=n[0];10<=e;e/=10)i++}return i}function C(n){for(var e="";n--;)e+="0";return e}function H(n,e,i,t){var r,s=new n(1),o=Math.ceil(t/q+4);for(p=!1;;){if(i%2&&Y((s=s.times(e)).d,o)&&(r=!0),0===(i=N(i/2))){i=s.d.length-1,r&&0===s.d[i]&&++s.d[i];break}Y((e=e.times(e)).d,o)}return p=!0,s}function B(n){return 1&n.d[n.d.length-1]}function V(n,e,i){for(var t,r=new n(e[0]),s=0;++s<e.length;){if(!(t=new n(e[s])).s){r=t;break}r[i](t)&&(r=t)}return r}function $(n,e){var i,t,r,s,o,u,c,f=0,a=0,l=0,d=n.constructor,h=d.rounding,g=d.precision;if(!n.d||!n.d[0]||17<n.e)return new d(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:NaN);for(c=null==e?(p=!1,g):e,u=new d(.03125);-2<n.e;)n=n.times(u),l+=5;for(c+=t=Math.log(b(2,l))/Math.LN10*2+5|0,i=s=o=new d(1),d.precision=c;;){if(s=L(s.times(n),c,1),i=i.times(++a),D((u=o.plus(R(s,i,c,1))).d).slice(0,c)===D(o.d).slice(0,c)){for(r=l;r--;)o=L(o.times(o),c,1);if(null!=e)return d.precision=g,o;if(!(f<3&&Z(o.d,c-t,h,f)))return L(o,d.precision=g,h,p=!0);d.precision=c+=10,i=s=u=new d(1),a=0,f++}o=u}}function W(n,e){var i,t,r,s,o,u,c,f,a,l,d,h=1,g=n,m=g.d,w=g.constructor,v=w.rounding,N=w.precision;if(g.s<0||!m||!m[0]||!g.e&&1==m[0]&&1==m.length)return new w(m&&!m[0]?-1/0:1!=g.s?NaN:m?0:g);if(a=null==e?(p=!1,N):e,w.precision=a+=10,t=(i=D(m)).charAt(0),!(Math.abs(s=g.e)<15e14))return f=k(w,a+2,N).times(s+""),g=W(new w(t+"."+i.slice(1)),a-10).plus(f),w.precision=N,null==e?L(g,N,v,p=!0):g;for(;t<7&&1!=t||1==t&&3<i.charAt(1);)t=(i=D((g=g.times(n)).d)).charAt(0),h++;for(s=g.e,1<t?(g=new w("0."+i),s++):g=new w(t+"."+i.slice(1)),c=o=g=R((l=g).minus(1),g.plus(1),a,1),d=L(g.times(g),a,1),r=3;;){if(o=L(o.times(d),a,1),D((f=c.plus(R(o,new w(r),a,1))).d).slice(0,a)===D(c.d).slice(0,a)){if(c=c.times(2),0!==s&&(c=c.plus(k(w,a+2,N).times(s+""))),c=R(c,new w(h),a,1),null!=e)return w.precision=N,c;if(!Z(c.d,a-10,v,u))return L(c,w.precision=N,v,p=!0);w.precision=a+=10,f=o=g=R(l.minus(1),l.plus(1),a,1),d=L(g.times(g),a,1),r=u=1}c=f,r+=2}}function J(n){return String(n.s*n.s/0)}function z(n,e){var i,t,r;for(-1<(i=e.indexOf("."))&&(e=e.replace(".","")),0<(t=e.search(/e/i))?(i<0&&(i=t),i+=+e.slice(t+1),e=e.substring(0,t)):i<0&&(i=e.length),t=0;48===e.charCodeAt(t);t++);for(r=e.length;48===e.charCodeAt(r-1);--r);if(e=e.slice(t,r)){if(r-=t,n.e=i=i-t-1,n.d=[],t=(i+1)%q,i<0&&(t+=q),t<r){for(t&&n.d.push(+e.slice(0,t)),r-=q;t<r;)n.d.push(+e.slice(t,t+=q));e=e.slice(t),t=q-e.length}else t-=r;for(;t--;)e+="0";n.d.push(+e),p&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function G(n,e,i,t,r){var s,o,u,c,f=n.precision,a=Math.ceil(f/q);for(p=!1,c=i.times(i),u=new n(t);;){if(o=R(u.times(c),new n(e++*e++),f,1),u=r?t.plus(o):t.minus(o),t=R(o.times(c),new n(e++*e++),f,1),void 0!==(o=u.plus(t)).d[a]){for(s=a;o.d[s]===u.d[s]&&s--;);if(-1==s)break}s=u,u=t,t=o,o=s}return p=!0,o.d.length=a+1,o}function K(n,e){for(var i=n;--e;)i*=n;return i}function Q(n,e){var i,t=e.s<0,r=j(n,n.precision,1),s=r.times(.5);if((e=e.abs()).lte(s))return u=t?4:1,e;if((i=e.divToInt(r)).isZero())u=t?3:2;else{if((e=e.minus(i.times(r))).lte(s))return u=B(i)?t?2:3:t?4:1,e;u=B(i)?t?1:4:t?3:2}return e.minus(r).abs()}function X(n,e,i,t){var r,s,u,c,l,d,h,p,g,m=n.constructor,w=void 0!==i;if(w?(_(i,1,f),void 0===t?t=m.rounding:_(t,0,8)):(i=m.precision,t=m.rounding),n.isFinite()){for(w?(r=2,16==e?i=4*i-3:8==e&&(i=3*i-2)):r=e,0<=(u=(h=T(n)).indexOf("."))&&(h=h.replace(".",""),(g=new m(1)).e=h.length-u,g.d=S(T(g),10,r),g.e=g.d.length),s=l=(p=S(h,10,r)).length;0==p[--l];)p.pop();if(p[0]){if(u<0?s--:((n=new m(n)).d=p,n.e=s,p=(n=R(n,g,i,t,0,r)).d,s=n.e,d=o),u=p[i],c=r/2,d=d||void 0!==p[i+1],d=t<4?(void 0!==u||d)&&(0===t||t===(n.s<0?3:2)):c<u||u===c&&(4===t||d||6===t&&1&p[i-1]||t===(n.s<0?8:7)),p.length=i,d)for(;++p[--i]>r-1;)p[i]=0,i||(++s,p.unshift(1));for(l=p.length;!p[l-1];--l);for(u=0,h="";u<l;u++)h+=a.charAt(p[u]);if(w){if(1<l)if(16==e||8==e){for(u=16==e?4:3,--l;l%u;l++)h+="0";for(l=(p=S(h,r,e)).length;!p[l-1];--l);for(u=1,h="1.";u<l;u++)h+=a.charAt(p[u])}else h=h.charAt(0)+"."+h.slice(1);h=h+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)h="0"+h;h="0."+h}else if(++s>l)for(s-=l;s--;)h+="0";else s<l&&(h=h.slice(0,s)+"."+h.slice(s))}else h=w?"0p+0":"0";h=(16==e?"0x":2==e?"0b":8==e?"0o":"")+h}else h=J(n);return n.s<0?"-"+h:h}function Y(n,e){if(n.length>e)return n.length=e,!0}function nn(n){return new this(n).abs()}function en(n){return new this(n).acos()}function tn(n){return new this(n).acosh()}function rn(n,e){return new this(n).plus(e)}function sn(n){return new this(n).asin()}function on(n){return new this(n).asinh()}function un(n){return new this(n).atan()}function cn(n){return new this(n).atanh()}function fn(n,e){n=new this(n),e=new this(e);var i,t=this.precision,r=this.rounding,s=t+4;return n.s&&e.s?n.d||e.d?!e.d||n.isZero()?(i=e.s<0?j(this,t,r):new this(0)).s=n.s:!n.d||e.isZero()?(i=j(this,s,1).times(.5)).s=n.s:i=e.s<0?(this.precision=s,this.rounding=1,i=this.atan(R(n,e,s,1)),e=j(this,s,1),this.precision=t,this.rounding=r,n.s<0?i.minus(e):i.plus(e)):this.atan(R(n,e,s,1)):(i=j(this,s,1).times(0<e.s?.25:.75)).s=n.s:i=new this(NaN),i}function an(n){return new this(n).cbrt()}function ln(n){return L(n=new this(n),n.e+1,2)}function dn(n){if(!n||"object"!=typeof n)throw Error(g+"Object expected");var e,i,t,r=!0===n.defaults,s=["precision",1,f,"rounding",0,8,"toExpNeg",-c,0,"toExpPos",0,c,"maxE",0,c,"minE",-c,0,"modulo",0,9];for(e=0;e<s.length;e+=3)if(i=s[e],r&&(this[i]=h[i]),void 0!==(t=n[i])){if(!(N(t)===t&&s[e+1]<=t&&t<=s[e+2]))throw Error(m+i+": "+t);this[i]=t}if(i="crypto",r&&(this[i]=h[i]),void 0!==(t=n[i])){if(!0!==t&&!1!==t&&0!==t&&1!==t)throw Error(m+i+": "+t);if(t){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw Error(v);this[i]=!0}else this[i]=!1}return this}function hn(n){return new this(n).cos()}function pn(n){return new this(n).cosh()}function gn(n,e){return new this(n).div(e)}function mn(n){return new this(n).exp()}function wn(n){return L(n=new this(n),n.e+1,3)}function vn(){var n,e,i=new this(0);for(p=!1,n=0;n<arguments.length;)if((e=new this(arguments[n++])).d)i.d&&(i=i.plus(e.times(e)));else{if(e.s)return p=!0,new this(1/0);i=e}return p=!0,i.sqrt()}function Nn(n){return n instanceof s||n&&"[object Decimal]"===n.name||!1}function bn(n){return new this(n).ln()}function xn(n,e){return new this(n).log(e)}function En(n){return new this(n).log(2)}function yn(n){return new this(n).log(10)}function Mn(){return V(this,arguments,"lt")}function On(){return V(this,arguments,"gt")}function qn(n,e){return new this(n).mod(e)}function Fn(n,e){return new this(n).mul(e)}function Pn(n,e){return new this(n).pow(e)}function An(n){var e,i,t,r,s=0,o=new this(1),u=[];if(void 0===n?n=this.precision:_(n,1,f),t=Math.ceil(n/q),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(t));s<t;)429e7<=(r=e[s])?e[s]=crypto.getRandomValues(new Uint32Array(1))[0]:u[s++]=r%1e7;else{if(!crypto.randomBytes)throw Error(v);for(e=crypto.randomBytes(t*=4);s<t;)214e7<=(r=e[s]+(e[s+1]<<8)+(e[s+2]<<16)+((127&e[s+3])<<24))?crypto.randomBytes(4).copy(e,s):(u.push(r%1e7),s+=4);s=t/4}else for(;s<t;)u[s++]=1e7*Math.random()|0;for(t=u[--s],n%=q,t&&n&&(r=b(10,q-n),u[s]=(t/r|0)*r);0===u[s];s--)u.pop();if(s<0)u=[i=0];else{for(i=-1;0===u[0];i-=q)u.shift();for(t=1,r=u[0];10<=r;r/=10)t++;t<q&&(i-=q-t)}return o.e=i,o.d=u,o}function Dn(n){return L(n=new this(n),n.e+1,this.rounding)}function _n(n){return(n=new this(n)).d?n.d[0]?n.s:0*n.s:n.s||NaN}function Zn(n){return new this(n).sin()}function Sn(n){return new this(n).sinh()}function Rn(n){return new this(n).sqrt()}function Ln(n,e){return new this(n).sub(e)}function Tn(n){return new this(n).tan()}function Un(n){return new this(n).tanh()}function kn(n){return L(n=new this(n),n.e+1,1)}(s=function n(e){var i,t,r;function o(n){var e,i,t,r=this;if(!(r instanceof o))return new o(n);if(n instanceof(r.constructor=o))return r.s=n.s,void(p?!n.d||n.e>o.maxE?(r.e=NaN,r.d=null):n.e<o.minE?(r.e=0,r.d=[0]):(r.e=n.e,r.d=n.d.slice()):(r.e=n.e,r.d=n.d?n.d.slice():n.d));if("number"==(t=typeof n)){if(0===n)return r.s=1/n<0?-1:1,r.e=0,void(r.d=[0]);if(r.s=n<0?(n=-n,-1):1,n===~~n&&n<1e7){for(e=0,i=n;10<=i;i/=10)e++;return void(r.d=p?o.maxE<e?(r.e=NaN,null):e<o.minE?[r.e=0]:(r.e=e,[n]):(r.e=e,[n]))}return 0*n!=0?(n||(r.s=NaN),r.e=NaN,void(r.d=null)):z(r,n.toString())}if("string"!==t)throw Error(m+n);return 45===(i=n.charCodeAt(0))?(n=n.slice(1),r.s=-1):(43===i&&(n=n.slice(1)),r.s=1),M.test(n)?z(r,n):function(n,e){var i,t,r,o,u,c,f,a,l;if("Infinity"===e||"NaN"===e)return+e||(n.s=NaN),n.e=NaN,n.d=null,n;if(E.test(e))i=16,e=e.toLowerCase();else if(x.test(e))i=2;else{if(!y.test(e))throw Error(m+e);i=8}for(u=0<=(o=(e=0<(o=e.search(/p/i))?(f=+e.slice(o+1),e.substring(2,o)):e.slice(2)).indexOf(".")),t=n.constructor,u&&(o=(c=(e=e.replace(".","")).length)-o,r=H(t,new t(i),o,2*o)),o=l=(a=S(e,i,O)).length-1;0===a[o];--o)a.pop();return o<0?new t(0*n.s):(n.e=U(a,l),n.d=a,p=!1,u&&(n=R(n,r,4*c)),f&&(n=n.times(Math.abs(f)<54?b(2,f):s.pow(2,f))),p=!0,n)}(r,n)}if(o.prototype=A,o.ROUND_UP=0,o.ROUND_DOWN=1,o.ROUND_CEIL=2,o.ROUND_FLOOR=3,o.ROUND_HALF_UP=4,o.ROUND_HALF_DOWN=5,o.ROUND_HALF_EVEN=6,o.ROUND_HALF_CEIL=7,o.ROUND_HALF_FLOOR=8,o.EUCLID=9,o.config=o.set=dn,o.clone=n,o.isDecimal=Nn,o.abs=nn,o.acos=en,o.acosh=tn,o.add=rn,o.asin=sn,o.asinh=on,o.atan=un,o.atanh=cn,o.atan2=fn,o.cbrt=an,o.ceil=ln,o.cos=hn,o.cosh=pn,o.div=gn,o.exp=mn,o.floor=wn,o.hypot=vn,o.ln=bn,o.log=xn,o.log10=yn,o.log2=En,o.max=Mn,o.min=On,o.mod=qn,o.mul=Fn,o.pow=Pn,o.random=An,o.round=Dn,o.sign=_n,o.sin=Zn,o.sinh=Sn,o.sqrt=Rn,o.sub=Ln,o.tan=Tn,o.tanh=Un,o.trunc=kn,void 0===e&&(e={}),e&&!0!==e.defaults)for(r=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],i=0;i<r.length;)e.hasOwnProperty(t=r[i++])||(e[t]=this[t]);return o.config(e),o}(h)).default=s.Decimal=s,l=new s(l),d=new s(d),n.exports=s,void 0===(t=function(){return s}.call(e,i,e,n))||(n.exports=t)}()},function(n,e,i){"use strict";i.r(e);var t=i(0),r=i.n(t);addEventListener("message",(function(n){var e;e=n.data[0];var i=n.data[1],t=n.data[2];r.a.precision=e+1;for(var s=new r.a(0),o=new r.a(1),u=new r.a(0),c=1,f=new r.a(1),a=0,l=t;a<l;a++)c*=-1,o=r.a.mul(o,1024),u=u.plus(1);for(;-1!=r.a.abs(f).cmp(new r.a("1e-"+(1+e)))&&(f=r.a.mul(1,c).mul(r.a.div(-Math.pow(2,5),r.a.mul(4,u).plus(1)).plus(r.a.div(-1,r.a.mul(4,u).plus(3))).plus(r.a.div(Math.pow(2,8),r.a.mul(10,u).plus(1))).plus(r.a.div(-Math.pow(2,6),r.a.mul(10,u).plus(3))).plus(r.a.div(-Math.pow(2,2),r.a.mul(10,u).plus(5))).plus(r.a.div(-Math.pow(2,2),r.a.mul(10,u).plus(7))).plus(r.a.div(1,r.a.mul(10,u).plus(9)))).div(r.a.mul(Math.pow(2,6),o)),s=r.a.add(s,f),-1!=r.a.abs(f).cmp(new r.a("1e-"+(1+e))));)for(var d=0,h=i;d<h;d++)c*=-1,o=r.a.mul(o,1024),u=u.plus(1);postMessage([""+s,""+u.plus(1)])}))}]);',
                    n.p +
                        "service-worker-mythread1-decimal.worker.9f0bd54414ca601b0ce1.worker.js"
                );
            };
        },
        63: function (e, t, n) {
            "use strict";
            var r;
            !(function (i) {
                var o,
                    s,
                    u,
                    a = 9e15,
                    l = 1e9,
                    c = "0123456789abcdef",
                    f =
                        "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
                    p =
                        "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
                    h = {
                        precision: 20,
                        rounding: 4,
                        modulo: 1,
                        toExpNeg: -7,
                        toExpPos: 21,
                        minE: -a,
                        maxE: a,
                        crypto: !1,
                    },
                    d = !0,
                    m = "[DecimalError] ",
                    g = m + "Invalid argument: ",
                    v = m + "Precision limit exceeded",
                    w = m + "crypto unavailable",
                    y = Math.floor,
                    b = Math.pow,
                    N = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
                    E = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
                    x = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
                    A = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                    M = 1e7,
                    _ = 7,
                    q = f.length - 1,
                    O = p.length - 1,
                    S = { name: "[object Decimal]" };
                function L(e) {
                    var t,
                        n,
                        r,
                        i = e.length - 1,
                        o = "",
                        s = e[0];
                    if (0 < i) {
                        for (o += s, t = 1; t < i; t++)
                            (r = e[t] + ""),
                                (n = _ - r.length) && (o += F(n)),
                                (o += r);
                        (s = e[t]),
                            (n = _ - (r = s + "").length) && (o += F(n));
                    } else if (0 === s) return "0";
                    for (; s % 10 == 0; ) s /= 10;
                    return o + s;
                }
                function I(e, t, n) {
                    if (e !== ~~e || e < t || n < e) throw Error(g + e);
                }
                function P(e, t, n, r) {
                    var i, o, s;
                    for (o = e[0]; 10 <= o; o /= 10) --t;
                    return (
                        --t < 0
                            ? ((t += _), (i = 0))
                            : ((i = Math.ceil((t + 1) / _)), (t %= _)),
                        (o = b(10, _ - t)),
                        (s = e[i] % o | 0),
                        null == r
                            ? t < 3
                                ? (0 == t
                                      ? (s = (s / 100) | 0)
                                      : 1 == t && (s = (s / 10) | 0),
                                  (n < 4 && 99999 == s) ||
                                      (3 < n && 49999 == s) ||
                                      5e4 == s ||
                                      0 == s)
                                : (((n < 4 && s + 1 == o) ||
                                      (3 < n && s + 1 == o / 2)) &&
                                      ((e[i + 1] / o / 100) | 0) ==
                                          b(10, t - 2) - 1) ||
                                  ((s == o / 2 || 0 == s) &&
                                      0 == ((e[i + 1] / o / 100) | 0))
                            : t < 4
                            ? (0 == t
                                  ? (s = (s / 1e3) | 0)
                                  : 1 == t
                                  ? (s = (s / 100) | 0)
                                  : 2 == t && (s = (s / 10) | 0),
                              ((r || n < 4) && 9999 == s) ||
                                  (!r && 3 < n && 4999 == s))
                            : (((r || n < 4) && s + 1 == o) ||
                                  (!r && 3 < n && s + 1 == o / 2)) &&
                              ((e[i + 1] / o / 1e3) | 0) == b(10, t - 3) - 1
                    );
                }
                function j(e, t, n) {
                    for (var r, i, o = [0], s = 0, u = e.length; s < u; ) {
                        for (i = o.length; i--; ) o[i] *= t;
                        for (
                            o[0] += c.indexOf(e.charAt(s++)), r = 0;
                            r < o.length;
                            r++
                        )
                            o[r] > n - 1 &&
                                (void 0 === o[r + 1] && (o[r + 1] = 0),
                                (o[r + 1] += (o[r] / n) | 0),
                                (o[r] %= n));
                    }
                    return o.reverse();
                }
                (S.absoluteValue = S.abs = function () {
                    var e = new this.constructor(this);
                    return e.s < 0 && (e.s = 1), D(e);
                }),
                    (S.ceil = function () {
                        return D(new this.constructor(this), this.e + 1, 2);
                    }),
                    (S.comparedTo = S.cmp = function (e) {
                        var t,
                            n,
                            r,
                            i,
                            o = this,
                            s = o.d,
                            u = (e = new o.constructor(e)).d,
                            a = o.s,
                            l = e.s;
                        if (!s || !u)
                            return a && l
                                ? a !== l
                                    ? a
                                    : s === u
                                    ? 0
                                    : !s ^ (a < 0)
                                    ? 1
                                    : -1
                                : NaN;
                        if (!s[0] || !u[0]) return s[0] ? a : u[0] ? -l : 0;
                        if (a !== l) return a;
                        if (o.e !== e.e) return (o.e > e.e) ^ (a < 0) ? 1 : -1;
                        for (
                            t = 0, n = (r = s.length) < (i = u.length) ? r : i;
                            t < n;
                            ++t
                        )
                            if (s[t] !== u[t])
                                return (s[t] > u[t]) ^ (a < 0) ? 1 : -1;
                        return r === i ? 0 : (i < r) ^ (a < 0) ? 1 : -1;
                    }),
                    (S.cosine = S.cos = function () {
                        var e,
                            t,
                            n = this,
                            r = n.constructor;
                        return n.d
                            ? n.d[0]
                                ? ((e = r.precision),
                                  (t = r.rounding),
                                  (r.precision = e + Math.max(n.e, n.sd()) + _),
                                  (r.rounding = 1),
                                  (n = (function (e, t) {
                                      var n,
                                          r,
                                          i = t.d.length;
                                      (r =
                                          i < 32
                                              ? (
                                                    1 /
                                                    z(4, (n = Math.ceil(i / 3)))
                                                ).toString()
                                              : ((n = 16),
                                                "2.3283064365386962890625e-10")),
                                          (e.precision += n),
                                          (t = W(e, 1, t.times(r), new e(1)));
                                      for (var o = n; o--; ) {
                                          var s = t.times(t);
                                          t = s
                                              .times(s)
                                              .minus(s)
                                              .times(8)
                                              .plus(1);
                                      }
                                      return (e.precision -= n), t;
                                  })(r, K(r, n))),
                                  (r.precision = e),
                                  (r.rounding = t),
                                  D(2 == u || 3 == u ? n.neg() : n, e, t, !0))
                                : new r(1)
                            : new r(NaN);
                    }),
                    (S.cubeRoot = S.cbrt = function () {
                        var e,
                            t,
                            n,
                            r,
                            i,
                            o,
                            s,
                            u,
                            a,
                            l,
                            c = this,
                            f = c.constructor;
                        if (!c.isFinite() || c.isZero()) return new f(c);
                        for (
                            d = !1,
                                (o = c.s * b(c.s * c, 1 / 3)) &&
                                Math.abs(o) != 1 / 0
                                    ? (r = new f(o.toString()))
                                    : ((n = L(c.d)),
                                      (o = ((e = c.e) - n.length + 1) % 3) &&
                                          (n += 1 == o || -2 == o ? "0" : "00"),
                                      (o = b(n, 1 / 3)),
                                      (e =
                                          y((e + 1) / 3) -
                                          (e % 3 == (e < 0 ? -1 : 2))),
                                      ((r = new f(
                                          (n =
                                              o == 1 / 0
                                                  ? "5e" + e
                                                  : (n = o.toExponential()).slice(
                                                        0,
                                                        n.indexOf("e") + 1
                                                    ) + e)
                                      )).s = c.s)),
                                s = (e = f.precision) + 3;
                            ;

                        )
                            if (
                                ((l = (a = (u = r).times(u).times(u)).plus(c)),
                                (r = T(
                                    l.plus(c).times(u),
                                    l.plus(a),
                                    s + 2,
                                    1
                                )),
                                L(u.d).slice(0, s) === (n = L(r.d)).slice(0, s))
                            ) {
                                if (
                                    "9999" != (n = n.slice(s - 3, s + 1)) &&
                                    (i || "4999" != n)
                                ) {
                                    (+n &&
                                        (+n.slice(1) || "5" != n.charAt(0))) ||
                                        (D(r, e + 1, 1),
                                        (t = !r.times(r).times(r).eq(c)));
                                    break;
                                }
                                if (
                                    !i &&
                                    (D(u, e + 1, 0), u.times(u).times(u).eq(c))
                                ) {
                                    r = u;
                                    break;
                                }
                                (s += 4), (i = 1);
                            }
                        return (d = !0), D(r, e, f.rounding, t);
                    }),
                    (S.decimalPlaces = S.dp = function () {
                        var e,
                            t = this.d,
                            n = NaN;
                        if (t) {
                            if (
                                ((n = ((e = t.length - 1) - y(this.e / _)) * _),
                                (e = t[e]))
                            )
                                for (; e % 10 == 0; e /= 10) n--;
                            n < 0 && (n = 0);
                        }
                        return n;
                    }),
                    (S.dividedBy = S.div = function (e) {
                        return T(this, new this.constructor(e));
                    }),
                    (S.dividedToIntegerBy = S.divToInt = function (e) {
                        var t = this.constructor;
                        return D(
                            T(this, new t(e), 0, 1, 1),
                            t.precision,
                            t.rounding
                        );
                    }),
                    (S.equals = S.eq = function (e) {
                        return 0 === this.cmp(e);
                    }),
                    (S.floor = function () {
                        return D(new this.constructor(this), this.e + 1, 3);
                    }),
                    (S.greaterThan = S.gt = function (e) {
                        return 0 < this.cmp(e);
                    }),
                    (S.greaterThanOrEqualTo = S.gte = function (e) {
                        var t = this.cmp(e);
                        return 1 == t || 0 === t;
                    }),
                    (S.hyperbolicCosine = S.cosh = function () {
                        var e,
                            t,
                            n,
                            r,
                            i,
                            o = this,
                            s = o.constructor,
                            u = new s(1);
                        if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
                        if (o.isZero()) return u;
                        (n = s.precision),
                            (r = s.rounding),
                            (s.precision = n + Math.max(o.e, o.sd()) + 4),
                            (s.rounding = 1),
                            (t =
                                (i = o.d.length) < 32
                                    ? (
                                          1 / z(4, (e = Math.ceil(i / 3)))
                                      ).toString()
                                    : ((e = 16),
                                      "2.3283064365386962890625e-10")),
                            (o = W(s, 1, o.times(t), new s(1), !0));
                        for (var a, l = e, c = new s(8); l--; )
                            (a = o.times(o)),
                                (o = u.minus(a.times(c.minus(a.times(c)))));
                        return D(o, (s.precision = n), (s.rounding = r), !0);
                    }),
                    (S.hyperbolicSine = S.sinh = function () {
                        var e,
                            t,
                            n,
                            r,
                            i = this,
                            o = i.constructor;
                        if (!i.isFinite() || i.isZero()) return new o(i);
                        if (
                            ((t = o.precision),
                            (n = o.rounding),
                            (o.precision = t + Math.max(i.e, i.sd()) + 4),
                            (o.rounding = 1),
                            (r = i.d.length) < 3)
                        )
                            i = W(o, 2, i, i, !0);
                        else {
                            (e = 16 < (e = 1.4 * Math.sqrt(r)) ? 16 : 0 | e),
                                (i = W(
                                    o,
                                    2,
                                    (i = i.times(1 / z(5, e))),
                                    i,
                                    !0
                                ));
                            for (
                                var s,
                                    u = new o(5),
                                    a = new o(16),
                                    l = new o(20);
                                e--;

                            )
                                (s = i.times(i)),
                                    (i = i.times(
                                        u.plus(s.times(a.times(s).plus(l)))
                                    ));
                        }
                        return D(i, (o.precision = t), (o.rounding = n), !0);
                    }),
                    (S.hyperbolicTangent = S.tanh = function () {
                        var e,
                            t,
                            n = this,
                            r = n.constructor;
                        return n.isFinite()
                            ? n.isZero()
                                ? new r(n)
                                : ((e = r.precision),
                                  (t = r.rounding),
                                  (r.precision = e + 7),
                                  (r.rounding = 1),
                                  T(
                                      n.sinh(),
                                      n.cosh(),
                                      (r.precision = e),
                                      (r.rounding = t)
                                  ))
                            : new r(n.s);
                    }),
                    (S.inverseCosine = S.acos = function () {
                        var e,
                            t = this,
                            n = t.constructor,
                            r = t.abs().cmp(1),
                            i = n.precision,
                            o = n.rounding;
                        return -1 !== r
                            ? 0 === r
                                ? t.isNeg()
                                    ? B(n, i, o)
                                    : new n(0)
                                : new n(NaN)
                            : t.isZero()
                            ? B(n, i + 4, o).times(0.5)
                            : ((n.precision = i + 6),
                              (n.rounding = 1),
                              (t = t.asin()),
                              (e = B(n, i + 4, o).times(0.5)),
                              (n.precision = i),
                              (n.rounding = o),
                              e.minus(t));
                    }),
                    (S.inverseHyperbolicCosine = S.acosh = function () {
                        var e,
                            t,
                            n = this,
                            r = n.constructor;
                        return n.lte(1)
                            ? new r(n.eq(1) ? 0 : NaN)
                            : n.isFinite()
                            ? ((e = r.precision),
                              (t = r.rounding),
                              (r.precision =
                                  e + Math.max(Math.abs(n.e), n.sd()) + 4),
                              (r.rounding = 1),
                              (d = !1),
                              (n = n.times(n).minus(1).sqrt().plus(n)),
                              (d = !0),
                              (r.precision = e),
                              (r.rounding = t),
                              n.ln())
                            : new r(n);
                    }),
                    (S.inverseHyperbolicSine = S.asinh = function () {
                        var e,
                            t,
                            n = this,
                            r = n.constructor;
                        return !n.isFinite() || n.isZero()
                            ? new r(n)
                            : ((e = r.precision),
                              (t = r.rounding),
                              (r.precision =
                                  e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6),
                              (r.rounding = 1),
                              (d = !1),
                              (n = n.times(n).plus(1).sqrt().plus(n)),
                              (d = !0),
                              (r.precision = e),
                              (r.rounding = t),
                              n.ln());
                    }),
                    (S.inverseHyperbolicTangent = S.atanh = function () {
                        var e,
                            t,
                            n,
                            r,
                            i = this,
                            o = i.constructor;
                        return i.isFinite()
                            ? 0 <= i.e
                                ? new o(
                                      i.abs().eq(1)
                                          ? i.s / 0
                                          : i.isZero()
                                          ? i
                                          : NaN
                                  )
                                : ((e = o.precision),
                                  (t = o.rounding),
                                  (r = i.sd()),
                                  Math.max(r, e) < 2 * -i.e - 1
                                      ? D(new o(i), e, t, !0)
                                      : ((o.precision = n = r - i.e),
                                        (i = T(
                                            i.plus(1),
                                            new o(1).minus(i),
                                            n + e,
                                            1
                                        )),
                                        (o.precision = e + 4),
                                        (o.rounding = 1),
                                        (i = i.ln()),
                                        (o.precision = e),
                                        (o.rounding = t),
                                        i.times(0.5)))
                            : new o(NaN);
                    }),
                    (S.inverseSine = S.asin = function () {
                        var e,
                            t,
                            n,
                            r,
                            i = this,
                            o = i.constructor;
                        return i.isZero()
                            ? new o(i)
                            : ((t = i.abs().cmp(1)),
                              (n = o.precision),
                              (r = o.rounding),
                              -1 !== t
                                  ? 0 === t
                                      ? (((e = B(o, n + 4, r).times(0.5)).s =
                                            i.s),
                                        e)
                                      : new o(NaN)
                                  : ((o.precision = n + 6),
                                    (o.rounding = 1),
                                    (i = i
                                        .div(
                                            new o(1)
                                                .minus(i.times(i))
                                                .sqrt()
                                                .plus(1)
                                        )
                                        .atan()),
                                    (o.precision = n),
                                    (o.rounding = r),
                                    i.times(2)));
                    }),
                    (S.inverseTangent = S.atan = function () {
                        var e,
                            t,
                            n,
                            r,
                            i,
                            o,
                            s,
                            u,
                            a,
                            l = this,
                            c = l.constructor,
                            f = c.precision,
                            p = c.rounding;
                        if (l.isFinite()) {
                            if (l.isZero()) return new c(l);
                            if (l.abs().eq(1) && f + 4 <= O)
                                return (
                                    ((s = B(c, f + 4, p).times(0.25)).s = l.s),
                                    s
                                );
                        } else {
                            if (!l.s) return new c(NaN);
                            if (f + 4 <= O)
                                return (
                                    ((s = B(c, f + 4, p).times(0.5)).s = l.s), s
                                );
                        }
                        for (
                            c.precision = u = f + 10,
                                c.rounding = 1,
                                e = n = Math.min(28, (u / _ + 2) | 0);
                            e;
                            --e
                        )
                            l = l.div(l.times(l).plus(1).sqrt().plus(1));
                        for (
                            d = !1,
                                t = Math.ceil(u / _),
                                r = 1,
                                a = l.times(l),
                                s = new c(l),
                                i = l;
                            -1 !== e;

                        )
                            if (
                                ((i = i.times(a)),
                                (o = s.minus(i.div((r += 2)))),
                                (i = i.times(a)),
                                void 0 !== (s = o.plus(i.div((r += 2)))).d[t])
                            )
                                for (e = t; s.d[e] === o.d[e] && e--; );
                        return (
                            n && (s = s.times(2 << (n - 1))),
                            (d = !0),
                            D(s, (c.precision = f), (c.rounding = p), !0)
                        );
                    }),
                    (S.isFinite = function () {
                        return !!this.d;
                    }),
                    (S.isInteger = S.isInt = function () {
                        return !!this.d && y(this.e / _) > this.d.length - 2;
                    }),
                    (S.isNaN = function () {
                        return !this.s;
                    }),
                    (S.isNegative = S.isNeg = function () {
                        return this.s < 0;
                    }),
                    (S.isPositive = S.isPos = function () {
                        return 0 < this.s;
                    }),
                    (S.isZero = function () {
                        return !!this.d && 0 === this.d[0];
                    }),
                    (S.lessThan = S.lt = function (e) {
                        return this.cmp(e) < 0;
                    }),
                    (S.lessThanOrEqualTo = S.lte = function (e) {
                        return this.cmp(e) < 1;
                    }),
                    (S.logarithm = S.log = function (e) {
                        var t,
                            n,
                            r,
                            i,
                            o,
                            s,
                            u,
                            a,
                            l = this,
                            c = l.constructor,
                            f = c.precision,
                            p = c.rounding;
                        if (null == e) (e = new c(10)), (t = !0);
                        else {
                            if (
                                ((n = (e = new c(e)).d),
                                e.s < 0 || !n || !n[0] || e.eq(1))
                            )
                                return new c(NaN);
                            t = e.eq(10);
                        }
                        if (((n = l.d), l.s < 0 || !n || !n[0] || l.eq(1)))
                            return new c(
                                n && !n[0]
                                    ? -1 / 0
                                    : 1 != l.s
                                    ? NaN
                                    : n
                                    ? 0
                                    : 1 / 0
                            );
                        if (t)
                            if (1 < n.length) o = !0;
                            else {
                                for (i = n[0]; i % 10 == 0; ) i /= 10;
                                o = 1 !== i;
                            }
                        if (
                            ((d = !1),
                            (s = V(l, (u = f + 5))),
                            (r = t ? Z(c, u + 10) : V(e, u)),
                            P((a = T(s, r, u, 1)).d, (i = f), p))
                        )
                            do {
                                if (
                                    ((s = V(l, (u += 10))),
                                    (r = t ? Z(c, u + 10) : V(e, u)),
                                    (a = T(s, r, u, 1)),
                                    !o)
                                ) {
                                    +L(a.d).slice(i + 1, i + 15) + 1 == 1e14 &&
                                        (a = D(a, f + 1, 0));
                                    break;
                                }
                            } while (P(a.d, (i += 10), p));
                        return (d = !0), D(a, f, p);
                    }),
                    (S.minus = S.sub = function (e) {
                        var t,
                            n,
                            r,
                            i,
                            o,
                            s,
                            u,
                            a,
                            l,
                            c,
                            f,
                            p,
                            h = this,
                            m = h.constructor;
                        if (((e = new m(e)), !h.d || !e.d))
                            return (
                                h.s && e.s
                                    ? h.d
                                        ? (e.s = -e.s)
                                        : (e = new m(
                                              e.d || h.s !== e.s ? h : NaN
                                          ))
                                    : (e = new m(NaN)),
                                e
                            );
                        if (h.s != e.s) return (e.s = -e.s), h.plus(e);
                        if (
                            ((l = h.d),
                            (p = e.d),
                            (u = m.precision),
                            (a = m.rounding),
                            !l[0] || !p[0])
                        ) {
                            if (p[0]) e.s = -e.s;
                            else {
                                if (!l[0]) return new m(3 === a ? -0 : 0);
                                e = new m(h);
                            }
                            return d ? D(e, u, a) : e;
                        }
                        if (
                            ((n = y(e.e / _)),
                            (c = y(h.e / _)),
                            (l = l.slice()),
                            (o = c - n))
                        ) {
                            for (
                                s = (f = o < 0)
                                    ? ((t = l), (o = -o), p.length)
                                    : ((t = p), (n = c), l.length),
                                    (r = Math.max(Math.ceil(u / _), s) + 2) <
                                        o && ((o = r), (t.length = 1)),
                                    t.reverse(),
                                    r = o;
                                r--;

                            )
                                t.push(0);
                            t.reverse();
                        } else {
                            for (
                                (f = (r = l.length) < (s = p.length)) &&
                                    (s = r),
                                    r = 0;
                                r < s;
                                r++
                            )
                                if (l[r] != p[r]) {
                                    f = l[r] < p[r];
                                    break;
                                }
                            o = 0;
                        }
                        for (
                            f && ((t = l), (l = p), (p = t), (e.s = -e.s)),
                                s = l.length,
                                r = p.length - s;
                            0 < r;
                            --r
                        )
                            l[s++] = 0;
                        for (r = p.length; o < r; ) {
                            if (l[--r] < p[r]) {
                                for (i = r; i && 0 === l[--i]; ) l[i] = M - 1;
                                --l[i], (l[r] += M);
                            }
                            l[r] -= p[r];
                        }
                        for (; 0 === l[--s]; ) l.pop();
                        for (; 0 === l[0]; l.shift()) --n;
                        return l[0]
                            ? ((e.d = l), (e.e = R(l, n)), d ? D(e, u, a) : e)
                            : new m(3 === a ? -0 : 0);
                    }),
                    (S.modulo = S.mod = function (e) {
                        var t,
                            n = this,
                            r = n.constructor;
                        return (
                            (e = new r(e)),
                            !n.d || !e.s || (e.d && !e.d[0])
                                ? new r(NaN)
                                : !e.d || (n.d && !n.d[0])
                                ? D(new r(n), r.precision, r.rounding)
                                : ((d = !1),
                                  9 == r.modulo
                                      ? ((t = T(n, e.abs(), 0, 3, 1)).s *= e.s)
                                      : (t = T(n, e, 0, r.modulo, 1)),
                                  (t = t.times(e)),
                                  (d = !0),
                                  n.minus(t))
                        );
                    }),
                    (S.naturalExponential = S.exp = function () {
                        return J(this);
                    }),
                    (S.naturalLogarithm = S.ln = function () {
                        return V(this);
                    }),
                    (S.negated = S.neg = function () {
                        var e = new this.constructor(this);
                        return (e.s = -e.s), D(e);
                    }),
                    (S.plus = S.add = function (e) {
                        var t,
                            n,
                            r,
                            i,
                            o,
                            s,
                            u,
                            a,
                            l,
                            c,
                            f = this,
                            p = f.constructor;
                        if (((e = new p(e)), !f.d || !e.d))
                            return (
                                f.s && e.s
                                    ? f.d ||
                                      (e = new p(e.d || f.s === e.s ? f : NaN))
                                    : (e = new p(NaN)),
                                e
                            );
                        if (f.s != e.s) return (e.s = -e.s), f.minus(e);
                        if (
                            ((l = f.d),
                            (c = e.d),
                            (u = p.precision),
                            (a = p.rounding),
                            !l[0] || !c[0])
                        )
                            return c[0] || (e = new p(f)), d ? D(e, u, a) : e;
                        if (
                            ((o = y(f.e / _)),
                            (r = y(e.e / _)),
                            (l = l.slice()),
                            (i = o - r))
                        ) {
                            for (
                                (s =
                                    (s =
                                        i < 0
                                            ? ((n = l), (i = -i), c.length)
                                            : ((n = c), (r = o), l.length)) <
                                    (o = Math.ceil(u / _))
                                        ? o + 1
                                        : s + 1) < i &&
                                    ((i = s), (n.length = 1)),
                                    n.reverse();
                                i--;

                            )
                                n.push(0);
                            n.reverse();
                        }
                        for (
                            (s = l.length) - (i = c.length) < 0 &&
                                ((i = s), (n = c), (c = l), (l = n)),
                                t = 0;
                            i;

                        )
                            (t = ((l[--i] = l[i] + c[i] + t) / M) | 0),
                                (l[i] %= M);
                        for (
                            t && (l.unshift(t), ++r), s = l.length;
                            0 == l[--s];

                        )
                            l.pop();
                        return (e.d = l), (e.e = R(l, r)), d ? D(e, u, a) : e;
                    }),
                    (S.precision = S.sd = function (e) {
                        var t;
                        if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e)
                            throw Error(g + e);
                        return (
                            this.d
                                ? ((t = k(this.d)),
                                  e && this.e + 1 > t && (t = this.e + 1))
                                : (t = NaN),
                            t
                        );
                    }),
                    (S.round = function () {
                        var e = this.constructor;
                        return D(new e(this), this.e + 1, e.rounding);
                    }),
                    (S.sine = S.sin = function () {
                        var e,
                            t,
                            n = this,
                            r = n.constructor;
                        return n.isFinite()
                            ? n.isZero()
                                ? new r(n)
                                : ((e = r.precision),
                                  (t = r.rounding),
                                  (r.precision = e + Math.max(n.e, n.sd()) + _),
                                  (r.rounding = 1),
                                  (n = (function (e, t) {
                                      var n,
                                          r = t.d.length;
                                      if (r < 3) return W(e, 2, t, t);
                                      (n =
                                          16 < (n = 1.4 * Math.sqrt(r))
                                              ? 16
                                              : 0 | n),
                                          (t = W(
                                              e,
                                              2,
                                              (t = t.times(1 / z(5, n))),
                                              t
                                          ));
                                      for (
                                          var i,
                                              o = new e(5),
                                              s = new e(16),
                                              u = new e(20);
                                          n--;

                                      )
                                          (i = t.times(t)),
                                              (t = t.times(
                                                  o.plus(
                                                      i.times(
                                                          s.times(i).minus(u)
                                                      )
                                                  )
                                              ));
                                      return t;
                                  })(r, K(r, n))),
                                  (r.precision = e),
                                  (r.rounding = t),
                                  D(2 < u ? n.neg() : n, e, t, !0))
                            : new r(NaN);
                    }),
                    (S.squareRoot = S.sqrt = function () {
                        var e,
                            t,
                            n,
                            r,
                            i,
                            o,
                            s = this,
                            u = s.d,
                            a = s.e,
                            l = s.s,
                            c = s.constructor;
                        if (1 !== l || !u || !u[0])
                            return new c(
                                !l || (l < 0 && (!u || u[0]))
                                    ? NaN
                                    : u
                                    ? s
                                    : 1 / 0
                            );
                        for (
                            d = !1,
                                r =
                                    0 == (l = Math.sqrt(+s)) || l == 1 / 0
                                        ? (((t = L(u)).length + a) % 2 == 0 &&
                                              (t += "0"),
                                          (l = Math.sqrt(t)),
                                          (a =
                                              y((a + 1) / 2) -
                                              (a < 0 || a % 2)),
                                          new c(
                                              (t =
                                                  l == 1 / 0
                                                      ? "1e" + a
                                                      : (t = l.toExponential()).slice(
                                                            0,
                                                            t.indexOf("e") + 1
                                                        ) + a)
                                          ))
                                        : new c(l.toString()),
                                n = (a = c.precision) + 3;
                            ;

                        )
                            if (
                                ((r = (o = r)
                                    .plus(T(s, o, n + 2, 1))
                                    .times(0.5)),
                                L(o.d).slice(0, n) === (t = L(r.d)).slice(0, n))
                            ) {
                                if (
                                    "9999" != (t = t.slice(n - 3, n + 1)) &&
                                    (i || "4999" != t)
                                ) {
                                    (+t &&
                                        (+t.slice(1) || "5" != t.charAt(0))) ||
                                        (D(r, a + 1, 1),
                                        (e = !r.times(r).eq(s)));
                                    break;
                                }
                                if (!i && (D(o, a + 1, 0), o.times(o).eq(s))) {
                                    r = o;
                                    break;
                                }
                                (n += 4), (i = 1);
                            }
                        return (d = !0), D(r, a, c.rounding, e);
                    }),
                    (S.tangent = S.tan = function () {
                        var e,
                            t,
                            n = this,
                            r = n.constructor;
                        return n.isFinite()
                            ? n.isZero()
                                ? new r(n)
                                : ((e = r.precision),
                                  (t = r.rounding),
                                  (r.precision = e + 10),
                                  (r.rounding = 1),
                                  ((n = n.sin()).s = 1),
                                  (n = T(
                                      n,
                                      new r(1).minus(n.times(n)).sqrt(),
                                      e + 10,
                                      0
                                  )),
                                  (r.precision = e),
                                  (r.rounding = t),
                                  D(2 == u || 4 == u ? n.neg() : n, e, t, !0))
                            : new r(NaN);
                    }),
                    (S.times = S.mul = function (e) {
                        var t,
                            n,
                            r,
                            i,
                            o,
                            s,
                            u,
                            a,
                            l,
                            c = this.constructor,
                            f = this.d,
                            p = (e = new c(e)).d;
                        if (((e.s *= this.s), !(f && f[0] && p && p[0])))
                            return new c(
                                !e.s || (f && !f[0] && !p) || (p && !p[0] && !f)
                                    ? NaN
                                    : f && p
                                    ? 0 * e.s
                                    : e.s / 0
                            );
                        for (
                            n = y(this.e / _) + y(e.e / _),
                                (a = f.length) < (l = p.length) &&
                                    ((o = f),
                                    (f = p),
                                    (p = o),
                                    (s = a),
                                    (a = l),
                                    (l = s)),
                                o = [],
                                r = s = a + l;
                            r--;

                        )
                            o.push(0);
                        for (r = l; 0 <= --r; ) {
                            for (t = 0, i = a + r; r < i; )
                                (u = o[i] + p[r] * f[i - r - 1] + t),
                                    (o[i--] = u % M | 0),
                                    (t = (u / M) | 0);
                            o[i] = (o[i] + t) % M | 0;
                        }
                        for (; !o[--s]; ) o.pop();
                        return (
                            t ? ++n : o.shift(),
                            (e.d = o),
                            (e.e = R(o, n)),
                            d ? D(e, c.precision, c.rounding) : e
                        );
                    }),
                    (S.toBinary = function (e, t) {
                        return X(this, 2, e, t);
                    }),
                    (S.toDecimalPlaces = S.toDP = function (e, t) {
                        var n = this,
                            r = n.constructor;
                        return (
                            (n = new r(n)),
                            void 0 === e
                                ? n
                                : (I(e, 0, l),
                                  void 0 === t ? (t = r.rounding) : I(t, 0, 8),
                                  D(n, e + n.e + 1, t))
                        );
                    }),
                    (S.toExponential = function (e, t) {
                        var n,
                            r = this,
                            i = r.constructor;
                        return (
                            (n =
                                void 0 === e
                                    ? U(r, !0)
                                    : (I(e, 0, l),
                                      void 0 === t
                                          ? (t = i.rounding)
                                          : I(t, 0, 8),
                                      U(
                                          (r = D(new i(r), e + 1, t)),
                                          !0,
                                          e + 1
                                      ))),
                            r.isNeg() && !r.isZero() ? "-" + n : n
                        );
                    }),
                    (S.toFixed = function (e, t) {
                        var n,
                            r,
                            i = this,
                            o = i.constructor;
                        return (
                            (n =
                                void 0 === e
                                    ? U(i)
                                    : (I(e, 0, l),
                                      void 0 === t
                                          ? (t = o.rounding)
                                          : I(t, 0, 8),
                                      U(
                                          (r = D(new o(i), e + i.e + 1, t)),
                                          !1,
                                          e + r.e + 1
                                      ))),
                            i.isNeg() && !i.isZero() ? "-" + n : n
                        );
                    }),
                    (S.toFraction = function (e) {
                        var t,
                            n,
                            r,
                            i,
                            o,
                            s,
                            u,
                            a,
                            l,
                            c,
                            f,
                            p,
                            h = this,
                            m = h.d,
                            v = h.constructor;
                        if (!m) return new v(h);
                        if (
                            ((l = n = new v(1)),
                            (s =
                                (o = (t = new v((r = a = new v(0)))).e =
                                    k(m) - h.e - 1) % _),
                            (t.d[0] = b(10, s < 0 ? _ + s : s)),
                            null == e)
                        )
                            e = 0 < o ? t : l;
                        else {
                            if (!(u = new v(e)).isInt() || u.lt(l))
                                throw Error(g + u);
                            e = u.gt(t) ? (0 < o ? t : l) : u;
                        }
                        for (
                            d = !1,
                                u = new v(L(m)),
                                c = v.precision,
                                v.precision = o = m.length * _ * 2;
                            (f = T(u, t, 0, 1, 1)),
                                1 != (i = n.plus(f.times(r))).cmp(e);

                        )
                            (n = r),
                                (r = i),
                                (i = l),
                                (l = a.plus(f.times(i))),
                                (a = i),
                                (i = t),
                                (t = u.minus(f.times(i))),
                                (u = i);
                        return (
                            (i = T(e.minus(n), r, 0, 1, 1)),
                            (a = a.plus(i.times(l))),
                            (n = n.plus(i.times(r))),
                            (a.s = l.s = h.s),
                            (p =
                                T(l, r, o, 1)
                                    .minus(h)
                                    .abs()
                                    .cmp(T(a, n, o, 1).minus(h).abs()) < 1
                                    ? [l, r]
                                    : [a, n]),
                            (v.precision = c),
                            (d = !0),
                            p
                        );
                    }),
                    (S.toHexadecimal = S.toHex = function (e, t) {
                        return X(this, 16, e, t);
                    }),
                    (S.toNearest = function (e, t) {
                        var n = this,
                            r = n.constructor;
                        if (((n = new r(n)), null == e)) {
                            if (!n.d) return n;
                            (e = new r(1)), (t = r.rounding);
                        } else {
                            if (
                                ((e = new r(e)),
                                void 0 === t ? (t = r.rounding) : I(t, 0, 8),
                                !n.d)
                            )
                                return e.s ? n : e;
                            if (!e.d) return e.s && (e.s = n.s), e;
                        }
                        return (
                            e.d[0]
                                ? ((d = !1),
                                  (n = T(n, e, 0, t, 1).times(e)),
                                  (d = !0),
                                  D(n))
                                : ((e.s = n.s), (n = e)),
                            n
                        );
                    }),
                    (S.toNumber = function () {
                        return +this;
                    }),
                    (S.toOctal = function (e, t) {
                        return X(this, 8, e, t);
                    }),
                    (S.toPower = S.pow = function (e) {
                        var t,
                            n,
                            r,
                            i,
                            o,
                            s,
                            u = this,
                            a = u.constructor,
                            l = +(e = new a(e));
                        if (!(u.d && e.d && u.d[0] && e.d[0]))
                            return new a(b(+u, l));
                        if ((u = new a(u)).eq(1)) return u;
                        if (((r = a.precision), (o = a.rounding), e.eq(1)))
                            return D(u, r, o);
                        if (
                            (t = y(e.e / _)) >= e.d.length - 1 &&
                            (n = l < 0 ? -l : l) <= 9007199254740991
                        )
                            return (
                                (i = C(a, u, n, r)),
                                e.s < 0 ? new a(1).div(i) : D(i, r, o)
                            );
                        if ((s = u.s) < 0) {
                            if (t < e.d.length - 1) return new a(NaN);
                            if (
                                (0 == (1 & e.d[t]) && (s = 1),
                                0 == u.e && 1 == u.d[0] && 1 == u.d.length)
                            )
                                return (u.s = s), u;
                        }
                        return (t =
                            0 != (n = b(+u, l)) && isFinite(n)
                                ? new a(n + "").e
                                : y(
                                      l *
                                          (Math.log("0." + L(u.d)) / Math.LN10 +
                                              u.e +
                                              1)
                                  )) >
                            a.maxE + 1 || t < a.minE - 1
                            ? new a(0 < t ? s / 0 : 0)
                            : ((d = !1),
                              (a.rounding = u.s = 1),
                              (n = Math.min(12, (t + "").length)),
                              (i = J(e.times(V(u, r + n)), r)).d &&
                                  P((i = D(i, r + 5, 1)).d, r, o) &&
                                  ((t = r + 10),
                                  +L(
                                      (i = D(
                                          J(e.times(V(u, t + n)), t),
                                          t + 5,
                                          1
                                      )).d
                                  ).slice(r + 1, r + 15) +
                                      1 ==
                                      1e14 && (i = D(i, r + 1, 0))),
                              (i.s = s),
                              (d = !0),
                              D(i, r, (a.rounding = o)));
                    }),
                    (S.toPrecision = function (e, t) {
                        var n,
                            r = this,
                            i = r.constructor;
                        return (
                            (n =
                                void 0 === e
                                    ? U(
                                          r,
                                          r.e <= i.toExpNeg || r.e >= i.toExpPos
                                      )
                                    : (I(e, 1, l),
                                      void 0 === t
                                          ? (t = i.rounding)
                                          : I(t, 0, 8),
                                      U(
                                          (r = D(new i(r), e, t)),
                                          e <= r.e || r.e <= i.toExpNeg,
                                          e
                                      ))),
                            r.isNeg() && !r.isZero() ? "-" + n : n
                        );
                    }),
                    (S.toSignificantDigits = S.toSD = function (e, t) {
                        var n = this.constructor;
                        return (
                            void 0 === e
                                ? ((e = n.precision), (t = n.rounding))
                                : (I(e, 1, l),
                                  void 0 === t ? (t = n.rounding) : I(t, 0, 8)),
                            D(new n(this), e, t)
                        );
                    }),
                    (S.toString = function () {
                        var e = this,
                            t = e.constructor,
                            n = U(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
                        return e.isNeg() && !e.isZero() ? "-" + n : n;
                    }),
                    (S.truncated = S.trunc = function () {
                        return D(new this.constructor(this), this.e + 1, 1);
                    }),
                    (S.valueOf = S.toJSON = function () {
                        var e = this,
                            t = e.constructor,
                            n = U(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
                        return e.isNeg() ? "-" + n : n;
                    });
                var T = (function () {
                    function e(e, t, n) {
                        var r,
                            i = 0,
                            o = e.length;
                        for (e = e.slice(); o--; )
                            (r = e[o] * t + i),
                                (e[o] = r % n | 0),
                                (i = (r / n) | 0);
                        return i && e.unshift(i), e;
                    }
                    function t(e, t, n, r) {
                        var i, o;
                        if (n != r) o = r < n ? 1 : -1;
                        else
                            for (i = o = 0; i < n; i++)
                                if (e[i] != t[i]) {
                                    o = e[i] > t[i] ? 1 : -1;
                                    break;
                                }
                        return o;
                    }
                    function n(e, t, n, r) {
                        for (var i = 0; n--; )
                            (e[n] -= i),
                                (i = e[n] < t[n] ? 1 : 0),
                                (e[n] = i * r + e[n] - t[n]);
                        for (; !e[0] && 1 < e.length; ) e.shift();
                    }
                    return function (r, i, o, u, a, l) {
                        var c,
                            f,
                            p,
                            h,
                            d,
                            m,
                            g,
                            v,
                            w,
                            b,
                            N,
                            E,
                            x,
                            A,
                            q,
                            O,
                            S,
                            L,
                            I,
                            P,
                            j = r.constructor,
                            T = r.s == i.s ? 1 : -1,
                            U = r.d,
                            R = i.d;
                        if (!(U && U[0] && R && R[0]))
                            return new j(
                                r.s && i.s && (U ? !R || U[0] != R[0] : R)
                                    ? (U && 0 == U[0]) || !R
                                        ? 0 * T
                                        : T / 0
                                    : NaN
                            );
                        for (
                            f = l
                                ? ((d = 1), r.e - i.e)
                                : ((l = M), (d = _), y(r.e / d) - y(i.e / d)),
                                I = R.length,
                                S = U.length,
                                b = (w = new j(T)).d = [],
                                p = 0;
                            R[p] == (U[p] || 0);
                            p++
                        );
                        if (
                            (R[p] > (U[p] || 0) && f--,
                            null == o
                                ? ((A = o = j.precision), (u = j.rounding))
                                : (A = a ? o + (r.e - i.e) + 1 : o),
                            A < 0)
                        )
                            b.push(1), (m = !0);
                        else {
                            if (((A = (A / d + 2) | 0), (p = 0), 1 == I)) {
                                for (
                                    R = R[(h = 0)], A++;
                                    (p < S || h) && A--;
                                    p++
                                )
                                    (q = h * l + (U[p] || 0)),
                                        (b[p] = (q / R) | 0),
                                        (h = q % R | 0);
                                m = h || p < S;
                            } else {
                                for (
                                    1 < (h = (l / (R[0] + 1)) | 0) &&
                                        ((R = e(R, h, l)),
                                        (U = e(U, h, l)),
                                        (I = R.length),
                                        (S = U.length)),
                                        O = I,
                                        E = (N = U.slice(0, I)).length;
                                    E < I;

                                )
                                    N[E++] = 0;
                                for (
                                    (P = R.slice()).unshift(0),
                                        L = R[0],
                                        R[1] >= l / 2 && ++L;
                                    (h = 0),
                                        (c = t(R, N, I, E)) < 0
                                            ? ((x = N[0]),
                                              I != E &&
                                                  (x = x * l + (N[1] || 0)),
                                              1 < (h = (x / L) | 0)
                                                  ? (l <= h && (h = l - 1),
                                                    1 ==
                                                        (c = t(
                                                            (g = e(R, h, l)),
                                                            N,
                                                            (v = g.length),
                                                            (E = N.length)
                                                        )) &&
                                                        (h--,
                                                        n(
                                                            g,
                                                            I < v ? P : R,
                                                            v,
                                                            l
                                                        )))
                                                  : (0 == h && (c = h = 1),
                                                    (g = R.slice())),
                                              (v = g.length) < E &&
                                                  g.unshift(0),
                                              n(N, g, E, l),
                                              -1 == c &&
                                                  (c = t(
                                                      R,
                                                      N,
                                                      I,
                                                      (E = N.length)
                                                  )) < 1 &&
                                                  (h++,
                                                  n(N, I < E ? P : R, E, l)),
                                              (E = N.length))
                                            : 0 === c && (h++, (N = [0])),
                                        (b[p++] = h),
                                        c && N[0]
                                            ? (N[E++] = U[O] || 0)
                                            : ((N = [U[O]]), (E = 1)),
                                        (O++ < S || void 0 !== N[0]) && A--;

                                );
                                m = void 0 !== N[0];
                            }
                            b[0] || b.shift();
                        }
                        if (1 == d) (w.e = f), (s = m);
                        else {
                            for (p = 1, h = b[0]; 10 <= h; h /= 10) p++;
                            (w.e = p + f * d - 1),
                                D(w, a ? o + w.e + 1 : o, u, m);
                        }
                        return w;
                    };
                })();
                function D(e, t, n, r) {
                    var i,
                        o,
                        s,
                        u,
                        a,
                        l,
                        c,
                        f,
                        p,
                        h = e.constructor;
                    e: if (null != t) {
                        if (!(f = e.d)) return e;
                        for (i = 1, u = f[0]; 10 <= u; u /= 10) i++;
                        if ((o = t - i) < 0)
                            (o += _),
                                (s = t),
                                (a =
                                    ((c = f[(p = 0)]) / b(10, i - s - 1)) % 10 |
                                    0);
                        else if (
                            ((p = Math.ceil((o + 1) / _)), (u = f.length) <= p)
                        ) {
                            if (!r) break e;
                            for (; u++ <= p; ) f.push(0);
                            (c = a = 0), (s = (o %= _) - _ + (i = 1));
                        } else {
                            for (c = u = f[p], i = 1; 10 <= u; u /= 10) i++;
                            a =
                                (s = (o %= _) - _ + i) < 0
                                    ? 0
                                    : (c / b(10, i - s - 1)) % 10 | 0;
                        }
                        if (
                            ((r =
                                r ||
                                t < 0 ||
                                void 0 !== f[p + 1] ||
                                (s < 0 ? c : c % b(10, i - s - 1))),
                            (l =
                                n < 4
                                    ? (a || r) &&
                                      (0 == n || n == (e.s < 0 ? 3 : 2))
                                    : 5 < a ||
                                      (5 == a &&
                                          (4 == n ||
                                              r ||
                                              (6 == n &&
                                                  (0 < o
                                                      ? 0 < s
                                                          ? c / b(10, i - s)
                                                          : 0
                                                      : f[p - 1]) %
                                                      10 &
                                                      1) ||
                                              n == (e.s < 0 ? 8 : 7)))),
                            t < 1 || !f[0])
                        )
                            return (
                                (f.length = 0),
                                l
                                    ? ((t -= e.e + 1),
                                      (f[0] = b(10, (_ - (t % _)) % _)),
                                      (e.e = -t || 0))
                                    : (f[0] = e.e = 0),
                                e
                            );
                        if (
                            (0 == o
                                ? ((f.length = p), (u = 1), p--)
                                : ((f.length = p + 1),
                                  (u = b(10, _ - o)),
                                  (f[p] =
                                      0 < s
                                          ? ((c / b(10, i - s)) % b(10, s) |
                                                0) *
                                            u
                                          : 0)),
                            l)
                        )
                            for (;;) {
                                if (0 == p) {
                                    for (o = 1, s = f[0]; 10 <= s; s /= 10) o++;
                                    for (s = f[0] += u, u = 1; 10 <= s; s /= 10)
                                        u++;
                                    o != u && (e.e++, f[0] == M && (f[0] = 1));
                                    break;
                                }
                                if (((f[p] += u), f[p] != M)) break;
                                (f[p--] = 0), (u = 1);
                            }
                        for (o = f.length; 0 === f[--o]; ) f.pop();
                    }
                    return (
                        d &&
                            (e.e > h.maxE
                                ? ((e.d = null), (e.e = NaN))
                                : e.e < h.minE && ((e.e = 0), (e.d = [0]))),
                        e
                    );
                }
                function U(e, t, n) {
                    if (!e.isFinite()) return $(e);
                    var r,
                        i = e.e,
                        o = L(e.d),
                        s = o.length;
                    return (
                        t
                            ? (n && 0 < (r = n - s)
                                  ? (o = o.charAt(0) + "." + o.slice(1) + F(r))
                                  : 1 < s &&
                                    (o = o.charAt(0) + "." + o.slice(1)),
                              (o = o + (e.e < 0 ? "e" : "e+") + e.e))
                            : i < 0
                            ? ((o = "0." + F(-i - 1) + o),
                              n && 0 < (r = n - s) && (o += F(r)))
                            : s <= i
                            ? ((o += F(i + 1 - s)),
                              n && 0 < (r = n - i - 1) && (o = o + "." + F(r)))
                            : ((r = i + 1) < s &&
                                  (o = o.slice(0, r) + "." + o.slice(r)),
                              n &&
                                  0 < (r = n - s) &&
                                  (i + 1 === s && (o += "."), (o += F(r)))),
                        o
                    );
                }
                function R(e, t) {
                    var n = e[0];
                    for (t *= _; 10 <= n; n /= 10) t++;
                    return t;
                }
                function Z(e, t, n) {
                    if (q < t)
                        throw ((d = !0), n && (e.precision = n), Error(v));
                    return D(new e(f), t, 1, !0);
                }
                function B(e, t, n) {
                    if (O < t) throw Error(v);
                    return D(new e(p), t, n, !0);
                }
                function k(e) {
                    var t = e.length - 1,
                        n = t * _ + 1;
                    if ((t = e[t])) {
                        for (; t % 10 == 0; t /= 10) n--;
                        for (t = e[0]; 10 <= t; t /= 10) n++;
                    }
                    return n;
                }
                function F(e) {
                    for (var t = ""; e--; ) t += "0";
                    return t;
                }
                function C(e, t, n, r) {
                    var i,
                        o = new e(1),
                        s = Math.ceil(r / _ + 4);
                    for (d = !1; ; ) {
                        if (
                            (n % 2 && Y((o = o.times(t)).d, s) && (i = !0),
                            0 === (n = y(n / 2)))
                        ) {
                            (n = o.d.length - 1), i && 0 === o.d[n] && ++o.d[n];
                            break;
                        }
                        Y((t = t.times(t)).d, s);
                    }
                    return (d = !0), o;
                }
                function Q(e) {
                    return 1 & e.d[e.d.length - 1];
                }
                function H(e, t, n) {
                    for (var r, i = new e(t[0]), o = 0; ++o < t.length; ) {
                        if (!(r = new e(t[o])).s) {
                            i = r;
                            break;
                        }
                        i[n](r) && (i = r);
                    }
                    return i;
                }
                function J(e, t) {
                    var n,
                        r,
                        i,
                        o,
                        s,
                        u,
                        a,
                        l = 0,
                        c = 0,
                        f = 0,
                        p = e.constructor,
                        h = p.rounding,
                        m = p.precision;
                    if (!e.d || !e.d[0] || 17 < e.e)
                        return new p(
                            e.d
                                ? e.d[0]
                                    ? e.s < 0
                                        ? 0
                                        : 1 / 0
                                    : 1
                                : e.s
                                ? e.s < 0
                                    ? 0
                                    : e
                                : NaN
                        );
                    for (
                        a = null == t ? ((d = !1), m) : t, u = new p(0.03125);
                        -2 < e.e;

                    )
                        (e = e.times(u)), (f += 5);
                    for (
                        a += r = ((Math.log(b(2, f)) / Math.LN10) * 2 + 5) | 0,
                            n = o = s = new p(1),
                            p.precision = a;
                        ;

                    ) {
                        if (
                            ((o = D(o.times(e), a, 1)),
                            (n = n.times(++c)),
                            L((u = s.plus(T(o, n, a, 1))).d).slice(0, a) ===
                                L(s.d).slice(0, a))
                        ) {
                            for (i = f; i--; ) s = D(s.times(s), a, 1);
                            if (null != t) return (p.precision = m), s;
                            if (!(l < 3 && P(s.d, a - r, h, l)))
                                return D(s, (p.precision = m), h, (d = !0));
                            (p.precision = a += 10),
                                (n = o = u = new p(1)),
                                (c = 0),
                                l++;
                        }
                        s = u;
                    }
                }
                function V(e, t) {
                    var n,
                        r,
                        i,
                        o,
                        s,
                        u,
                        a,
                        l,
                        c,
                        f,
                        p,
                        h = 1,
                        m = e,
                        g = m.d,
                        v = m.constructor,
                        w = v.rounding,
                        y = v.precision;
                    if (
                        m.s < 0 ||
                        !g ||
                        !g[0] ||
                        (!m.e && 1 == g[0] && 1 == g.length)
                    )
                        return new v(
                            g && !g[0] ? -1 / 0 : 1 != m.s ? NaN : g ? 0 : m
                        );
                    if (
                        ((c = null == t ? ((d = !1), y) : t),
                        (v.precision = c += 10),
                        (r = (n = L(g)).charAt(0)),
                        !(Math.abs((o = m.e)) < 15e14))
                    )
                        return (
                            (l = Z(v, c + 2, y).times(o + "")),
                            (m = V(new v(r + "." + n.slice(1)), c - 10).plus(
                                l
                            )),
                            (v.precision = y),
                            null == t ? D(m, y, w, (d = !0)) : m
                        );
                    for (; (r < 7 && 1 != r) || (1 == r && 3 < n.charAt(1)); )
                        (r = (n = L((m = m.times(e)).d)).charAt(0)), h++;
                    for (
                        o = m.e,
                            1 < r
                                ? ((m = new v("0." + n)), o++)
                                : (m = new v(r + "." + n.slice(1))),
                            a = s = m = T((f = m).minus(1), m.plus(1), c, 1),
                            p = D(m.times(m), c, 1),
                            i = 3;
                        ;

                    ) {
                        if (
                            ((s = D(s.times(p), c, 1)),
                            L((l = a.plus(T(s, new v(i), c, 1))).d).slice(
                                0,
                                c
                            ) === L(a.d).slice(0, c))
                        ) {
                            if (
                                ((a = a.times(2)),
                                0 !== o &&
                                    (a = a.plus(Z(v, c + 2, y).times(o + ""))),
                                (a = T(a, new v(h), c, 1)),
                                null != t)
                            )
                                return (v.precision = y), a;
                            if (!P(a.d, c - 10, w, u))
                                return D(a, (v.precision = y), w, (d = !0));
                            (v.precision = c += 10),
                                (l = s = m = T(f.minus(1), f.plus(1), c, 1)),
                                (p = D(m.times(m), c, 1)),
                                (i = u = 1);
                        }
                        (a = l), (i += 2);
                    }
                }
                function $(e) {
                    return String((e.s * e.s) / 0);
                }
                function G(e, t) {
                    var n, r, i;
                    for (
                        -1 < (n = t.indexOf(".")) && (t = t.replace(".", "")),
                            0 < (r = t.search(/e/i))
                                ? (n < 0 && (n = r),
                                  (n += +t.slice(r + 1)),
                                  (t = t.substring(0, r)))
                                : n < 0 && (n = t.length),
                            r = 0;
                        48 === t.charCodeAt(r);
                        r++
                    );
                    for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
                    if ((t = t.slice(r, i))) {
                        if (
                            ((i -= r),
                            (e.e = n = n - r - 1),
                            (e.d = []),
                            (r = (n + 1) % _),
                            n < 0 && (r += _),
                            r < i)
                        ) {
                            for (r && e.d.push(+t.slice(0, r)), i -= _; r < i; )
                                e.d.push(+t.slice(r, (r += _)));
                            (t = t.slice(r)), (r = _ - t.length);
                        } else r -= i;
                        for (; r--; ) t += "0";
                        e.d.push(+t),
                            d &&
                                (e.e > e.constructor.maxE
                                    ? ((e.d = null), (e.e = NaN))
                                    : e.e < e.constructor.minE &&
                                      ((e.e = 0), (e.d = [0])));
                    } else (e.e = 0), (e.d = [0]);
                    return e;
                }
                function W(e, t, n, r, i) {
                    var o,
                        s,
                        u,
                        a,
                        l = e.precision,
                        c = Math.ceil(l / _);
                    for (d = !1, a = n.times(n), u = new e(r); ; ) {
                        if (
                            ((s = T(u.times(a), new e(t++ * t++), l, 1)),
                            (u = i ? r.plus(s) : r.minus(s)),
                            (r = T(s.times(a), new e(t++ * t++), l, 1)),
                            void 0 !== (s = u.plus(r)).d[c])
                        ) {
                            for (o = c; s.d[o] === u.d[o] && o--; );
                            if (-1 == o) break;
                        }
                        (o = u), (u = r), (r = s), (s = o);
                    }
                    return (d = !0), (s.d.length = c + 1), s;
                }
                function z(e, t) {
                    for (var n = e; --t; ) n *= e;
                    return n;
                }
                function K(e, t) {
                    var n,
                        r = t.s < 0,
                        i = B(e, e.precision, 1),
                        o = i.times(0.5);
                    if ((t = t.abs()).lte(o)) return (u = r ? 4 : 1), t;
                    if ((n = t.divToInt(i)).isZero()) u = r ? 3 : 2;
                    else {
                        if ((t = t.minus(n.times(i))).lte(o))
                            return (u = Q(n) ? (r ? 2 : 3) : r ? 4 : 1), t;
                        u = Q(n) ? (r ? 1 : 4) : r ? 3 : 2;
                    }
                    return t.minus(i).abs();
                }
                function X(e, t, n, r) {
                    var i,
                        o,
                        u,
                        a,
                        f,
                        p,
                        h,
                        d,
                        m,
                        g = e.constructor,
                        v = void 0 !== n;
                    if (
                        (v
                            ? (I(n, 1, l),
                              void 0 === r ? (r = g.rounding) : I(r, 0, 8))
                            : ((n = g.precision), (r = g.rounding)),
                        e.isFinite())
                    ) {
                        for (
                            v
                                ? ((i = 2),
                                  16 == t
                                      ? (n = 4 * n - 3)
                                      : 8 == t && (n = 3 * n - 2))
                                : (i = t),
                                0 <= (u = (h = U(e)).indexOf(".")) &&
                                    ((h = h.replace(".", "")),
                                    ((m = new g(1)).e = h.length - u),
                                    (m.d = j(U(m), 10, i)),
                                    (m.e = m.d.length)),
                                o = f = (d = j(h, 10, i)).length;
                            0 == d[--f];

                        )
                            d.pop();
                        if (d[0]) {
                            if (
                                (u < 0
                                    ? o--
                                    : (((e = new g(e)).d = d),
                                      (e.e = o),
                                      (d = (e = T(e, m, n, r, 0, i)).d),
                                      (o = e.e),
                                      (p = s)),
                                (u = d[n]),
                                (a = i / 2),
                                (p = p || void 0 !== d[n + 1]),
                                (p =
                                    r < 4
                                        ? (void 0 !== u || p) &&
                                          (0 === r || r === (e.s < 0 ? 3 : 2))
                                        : a < u ||
                                          (u === a &&
                                              (4 === r ||
                                                  p ||
                                                  (6 === r && 1 & d[n - 1]) ||
                                                  r === (e.s < 0 ? 8 : 7)))),
                                (d.length = n),
                                p)
                            )
                                for (; ++d[--n] > i - 1; )
                                    (d[n] = 0), n || (++o, d.unshift(1));
                            for (f = d.length; !d[f - 1]; --f);
                            for (u = 0, h = ""; u < f; u++) h += c.charAt(d[u]);
                            if (v) {
                                if (1 < f)
                                    if (16 == t || 8 == t) {
                                        for (
                                            u = 16 == t ? 4 : 3, --f;
                                            f % u;
                                            f++
                                        )
                                            h += "0";
                                        for (
                                            f = (d = j(h, i, t)).length;
                                            !d[f - 1];
                                            --f
                                        );
                                        for (u = 1, h = "1."; u < f; u++)
                                            h += c.charAt(d[u]);
                                    } else h = h.charAt(0) + "." + h.slice(1);
                                h = h + (o < 0 ? "p" : "p+") + o;
                            } else if (o < 0) {
                                for (; ++o; ) h = "0" + h;
                                h = "0." + h;
                            } else if (++o > f) for (o -= f; o--; ) h += "0";
                            else
                                o < f && (h = h.slice(0, o) + "." + h.slice(o));
                        } else h = v ? "0p+0" : "0";
                        h =
                            (16 == t
                                ? "0x"
                                : 2 == t
                                ? "0b"
                                : 8 == t
                                ? "0o"
                                : "") + h;
                    } else h = $(e);
                    return e.s < 0 ? "-" + h : h;
                }
                function Y(e, t) {
                    if (e.length > t) return (e.length = t), !0;
                }
                function ee(e) {
                    return new this(e).abs();
                }
                function te(e) {
                    return new this(e).acos();
                }
                function ne(e) {
                    return new this(e).acosh();
                }
                function re(e, t) {
                    return new this(e).plus(t);
                }
                function ie(e) {
                    return new this(e).asin();
                }
                function oe(e) {
                    return new this(e).asinh();
                }
                function se(e) {
                    return new this(e).atan();
                }
                function ue(e) {
                    return new this(e).atanh();
                }
                function ae(e, t) {
                    (e = new this(e)), (t = new this(t));
                    var n,
                        r = this.precision,
                        i = this.rounding,
                        o = r + 4;
                    return (
                        e.s && t.s
                            ? e.d || t.d
                                ? !t.d || e.isZero()
                                    ? ((n =
                                          t.s < 0
                                              ? B(this, r, i)
                                              : new this(0)).s = e.s)
                                    : !e.d || t.isZero()
                                    ? ((n = B(this, o, 1).times(0.5)).s = e.s)
                                    : (n =
                                          t.s < 0
                                              ? ((this.precision = o),
                                                (this.rounding = 1),
                                                (n = this.atan(T(e, t, o, 1))),
                                                (t = B(this, o, 1)),
                                                (this.precision = r),
                                                (this.rounding = i),
                                                e.s < 0
                                                    ? n.minus(t)
                                                    : n.plus(t))
                                              : this.atan(T(e, t, o, 1)))
                                : ((n = B(this, o, 1).times(
                                      0 < t.s ? 0.25 : 0.75
                                  )).s = e.s)
                            : (n = new this(NaN)),
                        n
                    );
                }
                function le(e) {
                    return new this(e).cbrt();
                }
                function ce(e) {
                    return D((e = new this(e)), e.e + 1, 2);
                }
                function fe(e) {
                    if (!e || "object" != typeof e)
                        throw Error(m + "Object expected");
                    var t,
                        n,
                        r,
                        i = !0 === e.defaults,
                        o = [
                            "precision",
                            1,
                            l,
                            "rounding",
                            0,
                            8,
                            "toExpNeg",
                            -a,
                            0,
                            "toExpPos",
                            0,
                            a,
                            "maxE",
                            0,
                            a,
                            "minE",
                            -a,
                            0,
                            "modulo",
                            0,
                            9,
                        ];
                    for (t = 0; t < o.length; t += 3)
                        if (
                            ((n = o[t]),
                            i && (this[n] = h[n]),
                            void 0 !== (r = e[n]))
                        ) {
                            if (!(y(r) === r && o[t + 1] <= r && r <= o[t + 2]))
                                throw Error(g + n + ": " + r);
                            this[n] = r;
                        }
                    if (
                        ((n = "crypto"),
                        i && (this[n] = h[n]),
                        void 0 !== (r = e[n]))
                    ) {
                        if (!0 !== r && !1 !== r && 0 !== r && 1 !== r)
                            throw Error(g + n + ": " + r);
                        if (r) {
                            if (
                                "undefined" == typeof crypto ||
                                !crypto ||
                                (!crypto.getRandomValues && !crypto.randomBytes)
                            )
                                throw Error(w);
                            this[n] = !0;
                        } else this[n] = !1;
                    }
                    return this;
                }
                function pe(e) {
                    return new this(e).cos();
                }
                function he(e) {
                    return new this(e).cosh();
                }
                function de(e, t) {
                    return new this(e).div(t);
                }
                function me(e) {
                    return new this(e).exp();
                }
                function ge(e) {
                    return D((e = new this(e)), e.e + 1, 3);
                }
                function ve() {
                    var e,
                        t,
                        n = new this(0);
                    for (d = !1, e = 0; e < arguments.length; )
                        if ((t = new this(arguments[e++])).d)
                            n.d && (n = n.plus(t.times(t)));
                        else {
                            if (t.s) return (d = !0), new this(1 / 0);
                            n = t;
                        }
                    return (d = !0), n.sqrt();
                }
                function we(e) {
                    return (
                        e instanceof o ||
                        (e && "[object Decimal]" === e.name) ||
                        !1
                    );
                }
                function ye(e) {
                    return new this(e).ln();
                }
                function be(e, t) {
                    return new this(e).log(t);
                }
                function Ne(e) {
                    return new this(e).log(2);
                }
                function Ee(e) {
                    return new this(e).log(10);
                }
                function xe() {
                    return H(this, arguments, "lt");
                }
                function Ae() {
                    return H(this, arguments, "gt");
                }
                function Me(e, t) {
                    return new this(e).mod(t);
                }
                function _e(e, t) {
                    return new this(e).mul(t);
                }
                function qe(e, t) {
                    return new this(e).pow(t);
                }
                function Oe(e) {
                    var t,
                        n,
                        r,
                        i,
                        o = 0,
                        s = new this(1),
                        u = [];
                    if (
                        (void 0 === e ? (e = this.precision) : I(e, 1, l),
                        (r = Math.ceil(e / _)),
                        this.crypto)
                    )
                        if (crypto.getRandomValues)
                            for (
                                t = crypto.getRandomValues(new Uint32Array(r));
                                o < r;

                            )
                                429e7 <= (i = t[o])
                                    ? (t[o] = crypto.getRandomValues(
                                          new Uint32Array(1)
                                      )[0])
                                    : (u[o++] = i % 1e7);
                        else {
                            if (!crypto.randomBytes) throw Error(w);
                            for (t = crypto.randomBytes((r *= 4)); o < r; )
                                214e7 <=
                                (i =
                                    t[o] +
                                    (t[o + 1] << 8) +
                                    (t[o + 2] << 16) +
                                    ((127 & t[o + 3]) << 24))
                                    ? crypto.randomBytes(4).copy(t, o)
                                    : (u.push(i % 1e7), (o += 4));
                            o = r / 4;
                        }
                    else for (; o < r; ) u[o++] = (1e7 * Math.random()) | 0;
                    for (
                        r = u[--o],
                            e %= _,
                            r &&
                                e &&
                                ((i = b(10, _ - e)),
                                (u[o] = ((r / i) | 0) * i));
                        0 === u[o];
                        o--
                    )
                        u.pop();
                    if (o < 0) u = [(n = 0)];
                    else {
                        for (n = -1; 0 === u[0]; n -= _) u.shift();
                        for (r = 1, i = u[0]; 10 <= i; i /= 10) r++;
                        r < _ && (n -= _ - r);
                    }
                    return (s.e = n), (s.d = u), s;
                }
                function Se(e) {
                    return D((e = new this(e)), e.e + 1, this.rounding);
                }
                function Le(e) {
                    return (e = new this(e)).d
                        ? e.d[0]
                            ? e.s
                            : 0 * e.s
                        : e.s || NaN;
                }
                function Ie(e) {
                    return new this(e).sin();
                }
                function Pe(e) {
                    return new this(e).sinh();
                }
                function je(e) {
                    return new this(e).sqrt();
                }
                function Te(e, t) {
                    return new this(e).sub(t);
                }
                function De(e) {
                    return new this(e).tan();
                }
                function Ue(e) {
                    return new this(e).tanh();
                }
                function Re(e) {
                    return D((e = new this(e)), e.e + 1, 1);
                }
                ((o = (function e(t) {
                    var n, r, i;
                    function s(e) {
                        var t,
                            n,
                            r,
                            i = this;
                        if (!(i instanceof s)) return new s(e);
                        if (e instanceof (i.constructor = s))
                            return (
                                (i.s = e.s),
                                void (d
                                    ? !e.d || e.e > s.maxE
                                        ? ((i.e = NaN), (i.d = null))
                                        : e.e < s.minE
                                        ? ((i.e = 0), (i.d = [0]))
                                        : ((i.e = e.e), (i.d = e.d.slice()))
                                    : ((i.e = e.e),
                                      (i.d = e.d ? e.d.slice() : e.d)))
                            );
                        if ("number" == (r = typeof e)) {
                            if (0 === e)
                                return (
                                    (i.s = 1 / e < 0 ? -1 : 1),
                                    (i.e = 0),
                                    void (i.d = [0])
                                );
                            if (
                                ((i.s = e < 0 ? ((e = -e), -1) : 1),
                                e === ~~e && e < 1e7)
                            ) {
                                for (t = 0, n = e; 10 <= n; n /= 10) t++;
                                return void (i.d = d
                                    ? s.maxE < t
                                        ? ((i.e = NaN), null)
                                        : t < s.minE
                                        ? [(i.e = 0)]
                                        : ((i.e = t), [e])
                                    : ((i.e = t), [e]));
                            }
                            return 0 * e != 0
                                ? (e || (i.s = NaN),
                                  (i.e = NaN),
                                  void (i.d = null))
                                : G(i, e.toString());
                        }
                        if ("string" !== r) throw Error(g + e);
                        return (
                            45 === (n = e.charCodeAt(0))
                                ? ((e = e.slice(1)), (i.s = -1))
                                : (43 === n && (e = e.slice(1)), (i.s = 1)),
                            A.test(e)
                                ? G(i, e)
                                : (function (e, t) {
                                      var n, r, i, s, u, a, l, c, f;
                                      if ("Infinity" === t || "NaN" === t)
                                          return (
                                              +t || (e.s = NaN),
                                              (e.e = NaN),
                                              (e.d = null),
                                              e
                                          );
                                      if (E.test(t))
                                          (n = 16), (t = t.toLowerCase());
                                      else if (N.test(t)) n = 2;
                                      else {
                                          if (!x.test(t)) throw Error(g + t);
                                          n = 8;
                                      }
                                      for (
                                          u =
                                              0 <=
                                              (s = (t =
                                                  0 < (s = t.search(/p/i))
                                                      ? ((l = +t.slice(s + 1)),
                                                        t.substring(2, s))
                                                      : t.slice(2)).indexOf(
                                                  "."
                                              )),
                                              r = e.constructor,
                                              u &&
                                                  ((s =
                                                      (a = (t = t.replace(
                                                          ".",
                                                          ""
                                                      )).length) - s),
                                                  (i = C(
                                                      r,
                                                      new r(n),
                                                      s,
                                                      2 * s
                                                  ))),
                                              s = f =
                                                  (c = j(t, n, M)).length - 1;
                                          0 === c[s];
                                          --s
                                      )
                                          c.pop();
                                      return s < 0
                                          ? new r(0 * e.s)
                                          : ((e.e = R(c, f)),
                                            (e.d = c),
                                            (d = !1),
                                            u && (e = T(e, i, 4 * a)),
                                            l &&
                                                (e = e.times(
                                                    Math.abs(l) < 54
                                                        ? b(2, l)
                                                        : o.pow(2, l)
                                                )),
                                            (d = !0),
                                            e);
                                  })(i, e)
                        );
                    }
                    if (
                        ((s.prototype = S),
                        (s.ROUND_UP = 0),
                        (s.ROUND_DOWN = 1),
                        (s.ROUND_CEIL = 2),
                        (s.ROUND_FLOOR = 3),
                        (s.ROUND_HALF_UP = 4),
                        (s.ROUND_HALF_DOWN = 5),
                        (s.ROUND_HALF_EVEN = 6),
                        (s.ROUND_HALF_CEIL = 7),
                        (s.ROUND_HALF_FLOOR = 8),
                        (s.EUCLID = 9),
                        (s.config = s.set = fe),
                        (s.clone = e),
                        (s.isDecimal = we),
                        (s.abs = ee),
                        (s.acos = te),
                        (s.acosh = ne),
                        (s.add = re),
                        (s.asin = ie),
                        (s.asinh = oe),
                        (s.atan = se),
                        (s.atanh = ue),
                        (s.atan2 = ae),
                        (s.cbrt = le),
                        (s.ceil = ce),
                        (s.cos = pe),
                        (s.cosh = he),
                        (s.div = de),
                        (s.exp = me),
                        (s.floor = ge),
                        (s.hypot = ve),
                        (s.ln = ye),
                        (s.log = be),
                        (s.log10 = Ee),
                        (s.log2 = Ne),
                        (s.max = xe),
                        (s.min = Ae),
                        (s.mod = Me),
                        (s.mul = _e),
                        (s.pow = qe),
                        (s.random = Oe),
                        (s.round = Se),
                        (s.sign = Le),
                        (s.sin = Ie),
                        (s.sinh = Pe),
                        (s.sqrt = je),
                        (s.sub = Te),
                        (s.tan = De),
                        (s.tanh = Ue),
                        (s.trunc = Re),
                        void 0 === t && (t = {}),
                        t && !0 !== t.defaults)
                    )
                        for (
                            i = [
                                "precision",
                                "rounding",
                                "toExpNeg",
                                "toExpPos",
                                "maxE",
                                "minE",
                                "modulo",
                                "crypto",
                            ],
                                n = 0;
                            n < i.length;

                        )
                            t.hasOwnProperty((r = i[n++])) || (t[r] = this[r]);
                    return s.config(t), s;
                })(h)).default = o.Decimal = o),
                    (f = new o(f)),
                    (p = new o(p)),
                    (e.exports = o),
                    void 0 ===
                        (r = function () {
                            return o;
                        }.call(t, n, t, e)) || (e.exports = r);
            })();
        },
        86: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(0),
                i = n.n(r),
                o = n(29),
                s = n.n(o),
                u = n(17),
                a = n(22),
                l = n(18),
                c = n(59),
                f = n.n(c),
                p = n(61),
                h = n.n(p);
            var d = i.a.useState,
                m = i.a.useEffect,
                g = i.a.useRef,
                v = i.a.useCallback;
            function w(e) {
                var t = d(e),
                    n = Object(u.a)(t, 2),
                    r = n[0],
                    i = n[1],
                    o = v(
                        function (e) {
                            i(e.target.value);
                        },
                        [r]
                    );
                return [r, i, o];
            }
            var y = Array(16).fill();
            function b() {
                var e = g(),
                    t = g(),
                    n = g();
                m(function () {
                    return (
                        N(t.current),
                        N(n.current),
                        function () {
                            y.forEach(function (e, t) {
                                try {
                                    y[t].terminate(), (y[t] = void 0);
                                } catch (n) {}
                            });
                        }
                    );
                }, []);
                var r,
                    o,
                    c,
                    p,
                    d,
                    v,
                    b = 0;
                function N(e) {
                    requestAnimationFrame(function () {
                        var t = e,
                            n = t;
                        Math.abs(parseInt(n.style.height) - n.scrollHeight) >
                            5 && (t.style.height = t.scrollHeight + 2 + "px");
                    });
                }
                var E = w(navigator.hardwareConcurrency || 6),
                    x = Object(u.a)(E, 3),
                    A = x[0],
                    M = x[1],
                    _ = x[2],
                    q = w(6),
                    O = Object(u.a)(q, 3),
                    S = O[0],
                    L = O[1],
                    I = O[2],
                    P = w(
                        "UserAgent: " +
                            navigator.userAgent +
                            "\n" +
                            ("function" === typeof BigInt
                                ? "\u4f60\u7684\u6d4f\u89c8\u5668\u80fd\u591f\u652f\u6301\u539f\u751fBigInt!"
                                : "\u4f60\u7684\u6d4f\u89c8\u5668\u65e0\u6cd5\u652f\u6301\u539f\u751fBigInt!") +
                            "\n\u5f00\u59cb\u5706\u5468\u7387\u591a\u7ebf\u7a0b\u6d4b\u8bd5\n"
                    ),
                    j = Object(u.a)(P, 3),
                    T = j[0],
                    D = j[1],
                    U = j[2],
                    R = w(""),
                    Z = Object(u.a)(R, 3),
                    B = Z[0],
                    k = Z[1],
                    F = Z[2];
                function C(e) {
                    D(e), N(t.current);
                }
                return i.a.createElement(
                    "div",
                    { className: "container" },
                    i.a.createElement("h3", null, "BigInteger.js"),
                    i.a.createElement(
                        "p",
                        null,
                        "BigInteger.js\u662fJavascript\u7684\u4efb\u610f\u957f\u5ea6\u6574\u6570\u5e93\uff0c\u5141\u8bb8\u5bf9\u65e0\u9650\u5927\u5c0f\u7684\u6574\u6570\u8fdb\u884c\u7b97\u672f\u8fd0\u7b97\uff0c\u5c3d\u7ba1\u5b58\u5728\u5185\u5b58\u548c\u65f6\u95f4\u9650\u5236\u3002 \u66f4\u65b0\uff082018\u5e7412\u67082\u65e5\uff09\uff1aBigInt\u88ab\u6dfb\u52a0\u4e3aJavaScript\u7684\u672c\u673a\u529f\u80fd\u3002 \u6b64\u5e93\u73b0\u5728\u53ef\u7528\u4f5cpolyfill\uff1a\u5982\u679c\u73af\u5883\u652f\u6301\u672c\u673aBigInt\uff0c\u5219\u6b64\u5e93\u5145\u5f53\u672c\u673a\u5b9e\u73b0\u7684\u7626\u5305\u88c5\u5668\u3002 \u5efa\u8bae\u5347\u7ea7\u6d4f\u89c8\u5668\u5230chrome68\u4ee5\u4e0a,\u624d\u53ef\u652f\u6301\u539f\u751fBigInt."
                    ),
                    i.a.createElement(
                        "h5",
                        null,
                        i.a.createElement(
                            "b",
                            null,
                            "\u5982\u679c\u6d4f\u89c8\u5668\u539f\u751f\u652f\u6301BigInt,\u5219\u8fd0\u884c\u901f\u5ea6\u6709\u5de8\u5927\u63d0\u5347!"
                        )
                    ),
                    i.a.createElement("hr", null),
                    i.a.createElement(
                        "div",
                        null,
                        i.a.createElement(
                            "p",
                            null,
                            i.a.createElement(
                                "span",
                                null,
                                "\u9009\u62e9\u7ebf\u7a0b\u4e2a\u6570:\u6570\u91cf ( 1 \u5230 16 \u4e4b\u95f4):",
                                i.a.createElement("input", {
                                    value: A,
                                    onChange: _,
                                    className: "form-control",
                                    id: "thread-big",
                                    type: "number",
                                    name: "quantity",
                                    min: "1",
                                    max: "12",
                                })
                            )
                        ),
                        i.a.createElement(
                            "p",
                            null,
                            i.a.createElement(
                                "span",
                                null,
                                "\u9009\u62e9\u5706\u5468\u7387\u4f4d\u6570:\u6570\u91cf1000* ( 1 \u5230 100 \u4e4b\u95f4):",
                                i.a.createElement("input", {
                                    value: S,
                                    onChange: I,
                                    className: "form-control",
                                    id: "pichangwei-big",
                                    type: "number",
                                    name: "quantity",
                                    min: "1",
                                    max: "100",
                                })
                            )
                        ),
                        i.a.createElement(
                            "button",
                            {
                                ref: e,
                                "data-loading-icon":
                                    "mui-spinner mui-spinner-custom",
                                className:
                                    "mui-btn mui-btn-primary btn btn-info  btn btn-outline-primary mui-btn mui-btn-outline-primary",
                                id: "start-big",
                                onClick: function (e) {
                                    !(function (e) {
                                        var i;
                                        s.a.async(function (u) {
                                            for (;;)
                                                switch ((u.prev = u.next)) {
                                                    case 0:
                                                        if (
                                                            (Object(a.a)(
                                                                e
                                                            ).button("loading"),
                                                            (f.a.abs = function (
                                                                e
                                                            ) {
                                                                return f()(
                                                                    e
                                                                ).abs();
                                                            }),
                                                            (f.a.mul = function (
                                                                e,
                                                                t
                                                            ) {
                                                                return f()(
                                                                    e
                                                                ).multiply(t);
                                                            }),
                                                            (f.a.div = function (
                                                                e,
                                                                t
                                                            ) {
                                                                return f()(
                                                                    e
                                                                ).divide(t);
                                                            }),
                                                            (f.a.add = function (
                                                                e,
                                                                t
                                                            ) {
                                                                return f()(
                                                                    e
                                                                ).add(t);
                                                            }),
                                                            (f()().__proto__.cmp = f()().__proto__.compare),
                                                            (f()().__proto__.div = f()().__proto__.divide),
                                                            (f()().__proto__.mul = f()().__proto__.multiply),
                                                            (f()(
                                                                "90071992547409920"
                                                            ).__proto__.cmp = f()(
                                                                "90071992547409920"
                                                            ).__proto__.compare),
                                                            (f()(
                                                                "90071992547409920"
                                                            ).__proto__.div = f()(
                                                                "90071992547409920"
                                                            ).__proto__.divide),
                                                            (f()(
                                                                "90071992547409920"
                                                            ).__proto__.mul = f()(
                                                                "90071992547409920"
                                                            ).__proto__.multiply),
                                                            !(
                                                                A >= 1 &&
                                                                A <= 16 &&
                                                                S >= 1 &&
                                                                S <= 100
                                                            ))
                                                        ) {
                                                            u.next = 30;
                                                            break;
                                                        }
                                                        return (
                                                            (o =
                                                                1e3 *
                                                                Math.floor(S)),
                                                            (i = Math.floor(A)),
                                                            (v =
                                                                "\u5706\u5468\u7387\u8ba1\u7b97\u591a\u7ebf\u7a0b-\u7ebf\u7a0b\u6570\u4e3a" +
                                                                (d = i) +
                                                                "-\u4f4d\u6570\u4e3a" +
                                                                o),
                                                            C(
                                                                t.current
                                                                    .value +
                                                                    v +
                                                                    "\u7ebf\u7a0b\u6570\u4e3a" +
                                                                    d +
                                                                    " \u5706\u5468\u7387\u8ba1\u7b97" +
                                                                    o +
                                                                    "\u4f4d \u8ba1\u7b97\u5706\u5468\u7387\u4e2d......  \n"
                                                            ),
                                                            (c = new Date().getTime()),
                                                            (r = new f.a(0)),
                                                            ((p = []).length = d),
                                                            (u.next = 25),
                                                            s.a.awrap(
                                                                Promise.all(
                                                                    y
                                                                        .slice(
                                                                            0,
                                                                            d
                                                                        )
                                                                        .map(
                                                                            function (
                                                                                e,
                                                                                t
                                                                            ) {
                                                                                var n = y;
                                                                                return new Promise(
                                                                                    function (
                                                                                        e,
                                                                                        i
                                                                                    ) {
                                                                                        t >=
                                                                                        d
                                                                                            ? e()
                                                                                            : ((n[
                                                                                                  t
                                                                                              ] =
                                                                                                  n[
                                                                                                      t
                                                                                                  ] ||
                                                                                                  h()()),
                                                                                              n[
                                                                                                  t
                                                                                              ].postMessage(
                                                                                                  [
                                                                                                      o,
                                                                                                      d,
                                                                                                      t,
                                                                                                  ]
                                                                                              ),
                                                                                              (n[
                                                                                                  t
                                                                                              ].onmessage = function (
                                                                                                  n
                                                                                              ) {
                                                                                                  var i = new f.a(
                                                                                                      n.data[0]
                                                                                                  );
                                                                                                  (r = f.a.add(
                                                                                                      r,
                                                                                                      i
                                                                                                  )),
                                                                                                      (b = Math.max(
                                                                                                          b,
                                                                                                          parseInt(
                                                                                                              n
                                                                                                                  .data[1]
                                                                                                          )
                                                                                                      )),
                                                                                                      (p[
                                                                                                          t
                                                                                                      ] = 1),
                                                                                                      e(
                                                                                                          n.data
                                                                                                      );
                                                                                              }),
                                                                                              (n[
                                                                                                  t
                                                                                              ].onerror = function (
                                                                                                  e
                                                                                              ) {
                                                                                                  i(
                                                                                                      new Error(
                                                                                                          e.message +
                                                                                                              " " +
                                                                                                              e.filename
                                                                                                      )
                                                                                                  );
                                                                                              }));
                                                                                    }
                                                                                );
                                                                            }
                                                                        )
                                                                )
                                                            )
                                                        );
                                                    case 25:
                                                        u.sent,
                                                            requestAnimationFrame(
                                                                function () {
                                                                    !(function (
                                                                        e
                                                                    ) {
                                                                        Object(
                                                                            a.a
                                                                        )(
                                                                            e
                                                                        ).button(
                                                                            "reset"
                                                                        );
                                                                        var i,
                                                                            s =
                                                                                "\u8ba1\u7b97\u5b8c\u6210,\u7528\u65f6" +
                                                                                (new Date().getTime() -
                                                                                    c) /
                                                                                    1e3 +
                                                                                "\u79d2\u7b2c" +
                                                                                b +
                                                                                "\u6b21 \u5706\u5468\u7387" +
                                                                                o +
                                                                                "\u4f4d\n";
                                                                        (i =
                                                                            "\u5706\u5468\u7387" +
                                                                            o +
                                                                            "\u4f4d" +
                                                                            r.toString()[0] +
                                                                            "." +
                                                                            r
                                                                                .toString()
                                                                                .slice(
                                                                                    1
                                                                                )),
                                                                            N(
                                                                                n.current
                                                                            ),
                                                                            k(
                                                                                i
                                                                            ),
                                                                            C(
                                                                                t
                                                                                    .current
                                                                                    .value +
                                                                                    s
                                                                            ),
                                                                            Object(
                                                                                l.a
                                                                            )(
                                                                                "success"
                                                                            );
                                                                    })(e);
                                                                }
                                                            ),
                                                            (u.next = 34);
                                                        break;
                                                    case 30:
                                                        alert(
                                                            "\u8f93\u5165\u9519\u8bef"
                                                        ),
                                                            L(4),
                                                            M(8),
                                                            Object(a.a)(
                                                                e
                                                            ).button("reset");
                                                    case 34:
                                                    case "end":
                                                        return u.stop();
                                                }
                                        });
                                    })(e.target);
                                },
                                type: "button",
                                style: { width: "100%" },
                            },
                            "\u5f00\u59cb"
                        )
                    ),
                    i.a.createElement("br", null),
                    i.a.createElement(
                        "div",
                        null,
                        i.a.createElement("textarea", {
                            ref: t,
                            value: T,
                            onChange: function (e) {
                                U(e), N(e.target);
                            },
                            className: "form-control",
                            cols: "100",
                            rows: "100",
                            style: {
                                width: "100%",
                                height: "100px",
                                margin: "0 0",
                                "text-align": "center",
                            },
                            width: "100%",
                            id: "tp-big",
                        }),
                        i.a.createElement("br", null),
                        i.a.createElement(
                            "details",
                            { open: !0 },
                            i.a.createElement(
                                "summary",
                                {
                                    className:
                                        " btn btn-outline-primary mui-btn mui-btn-outline-primary",
                                },
                                "\u5c55\u5f00\u6536\u8d77\u5706\u5468\u7387\u7ed3\u679c"
                            ),
                            i.a.createElement("br", null),
                            i.a.createElement("br", null),
                            i.a.createElement(
                                "div",
                                {
                                    id: "collapsiblecontainer2",
                                    className: "collapse show",
                                },
                                i.a.createElement("textarea", {
                                    ref: n,
                                    value: B,
                                    onChange: function (e) {
                                        F(e), N(e.target);
                                    },
                                    className: "form-control",
                                    cols: "100",
                                    rows: "100",
                                    style: {
                                        width: "100%",
                                        height: "100px",
                                        margin: "0 0",
                                        "text-align": "center",
                                    },
                                    width: "100%",
                                    id: "tp2-big",
                                })
                            )
                        )
                    )
                );
            }
            var N = n(62),
                E = n.n(N),
                x = n(63),
                A = n.n(x);
            var M = Array(16).fill();
            function _() {
                var e = Object(r.useRef)(),
                    t = Object(r.useRef)(),
                    n = Object(r.useRef)();
                function o(e) {
                    var t = Object(r.useState)(e),
                        n = Object(u.a)(t, 2),
                        i = n[0],
                        o = n[1];
                    return [
                        i,
                        o,
                        function (e) {
                            o(e.target.value);
                        },
                    ];
                }
                Object(r.useEffect)(function () {
                    return (
                        v(t.current),
                        v(n.current),
                        function () {
                            M.forEach(function (e, t) {
                                try {
                                    M[t].terminate(), (M[t] = void 0);
                                } catch (n) {}
                            });
                        }
                    );
                }, []);
                var c,
                    f,
                    p,
                    h,
                    d,
                    m,
                    g = 0;
                function v(e) {
                    requestAnimationFrame(function () {
                        var t = e,
                            n = t;
                        Math.abs(parseInt(n.style.height) - n.scrollHeight) >
                            5 && (t.style.height = t.scrollHeight + 2 + "px");
                    });
                }
                var w = o(navigator.hardwareConcurrency || 6),
                    y = Object(u.a)(w, 3),
                    b = y[0],
                    N = y[1],
                    x = y[2],
                    _ = o(6),
                    q = Object(u.a)(_, 3),
                    O = q[0],
                    S = q[1],
                    L = q[2],
                    I = o(
                        "UserAgent: " +
                            navigator.userAgent +
                            "\n" +
                            ("function" === typeof A.a
                                ? "\u4f60\u7684\u6d4f\u89c8\u5668\u80fd\u591f\u652f\u6301\u539f\u751fDecimal!"
                                : "\u4f60\u7684\u6d4f\u89c8\u5668\u65e0\u6cd5\u652f\u6301\u539f\u751fDecimal!") +
                            "\n\u5f00\u59cb\u5706\u5468\u7387\u591a\u7ebf\u7a0b\u6d4b\u8bd5\n"
                    ),
                    P = Object(u.a)(I, 3),
                    j = P[0],
                    T = P[1],
                    D = P[2],
                    U = o(""),
                    R = Object(u.a)(U, 3),
                    Z = R[0],
                    B = R[1],
                    k = R[2];
                function F(e) {
                    T(e), v(t.current);
                }
                return i.a.createElement(
                    "div",
                    { className: "container" },
                    i.a.createElement("h3", null, "Decimal.js"),
                    i.a.createElement(
                        "p",
                        null,
                        "Decimal.js\u662fJavaScript\u7684\u4efb\u610f\u7cbe\u5ea6Decimal\u7c7b\u578b\u3002 \u7279\u5f81: \u6574\u6570\u548c\u6d6e\u70b9\u6570, \u7b80\u5355\u4f46\u529f\u80fd\u9f50\u5168\u7684API, \u590d\u5236JavaScript\u7684Number.prototype\u548cMath\u5bf9\u8c61\u7684\u8bb8\u591a\u65b9\u6cd5, \u8fd8\u5904\u7406\u5341\u516d\u8fdb\u5236\uff0c\u4e8c\u8fdb\u5236\u548c\u516b\u8fdb\u5236\u503c, \u6bd4Java\u7684BigDecimal\u7684JavaScript\u7248\u672c\u66f4\u5feb\uff0c\u66f4\u5c0f\uff0c\u4e5f\u8bb8\u66f4\u5bb9\u6613\u4f7f\u7528, \u6ca1\u6709\u4f9d\u8d56, \u5e7f\u6cdb\u7684\u5e73\u53f0\u517c\u5bb9\u6027\uff1a\u4ec5\u4f7f\u7528JavaScript 1.5\uff08ECMAScript 3\uff09\u529f\u80fd\u3002 \u5168\u9762\u7684\u6587\u6863\u548c\u6d4b\u8bd5\u96c6\u3002"
                    ),
                    i.a.createElement("hr", null),
                    i.a.createElement(
                        "div",
                        null,
                        i.a.createElement(
                            "p",
                            null,
                            i.a.createElement(
                                "span",
                                null,
                                "\u9009\u62e9\u7ebf\u7a0b\u4e2a\u6570:\u6570\u91cf ( 1 \u5230 16 \u4e4b\u95f4):",
                                i.a.createElement("input", {
                                    value: b,
                                    onChange: x,
                                    className: "form-control",
                                    id: "thread-big",
                                    type: "number",
                                    name: "quantity",
                                    min: "1",
                                    max: "12",
                                })
                            )
                        ),
                        i.a.createElement(
                            "p",
                            null,
                            i.a.createElement(
                                "span",
                                null,
                                "\u9009\u62e9\u5706\u5468\u7387\u4f4d\u6570:\u6570\u91cf1000* ( 1 \u5230 100 \u4e4b\u95f4):",
                                i.a.createElement("input", {
                                    value: O,
                                    onChange: L,
                                    className: "form-control",
                                    id: "pichangwei-big",
                                    type: "number",
                                    name: "quantity",
                                    min: "1",
                                    max: "100",
                                })
                            )
                        ),
                        i.a.createElement(
                            "button",
                            {
                                ref: e,
                                "data-loading-icon":
                                    "mui-spinner mui-spinner-custom",
                                className:
                                    "mui-btn mui-btn-primary btn btn-info  btn btn-outline-primary mui-btn mui-btn-outline-primary",
                                id: "start-big",
                                onClick: function (e) {
                                    !(function (e) {
                                        var r;
                                        s.a.async(function (i) {
                                            for (;;)
                                                switch ((i.prev = i.next)) {
                                                    case 0:
                                                        if (
                                                            (Object(a.a)(
                                                                e
                                                            ).button("loading"),
                                                            !(
                                                                b >= 1 &&
                                                                b <= 16 &&
                                                                O >= 1 &&
                                                                O <= 100
                                                            ))
                                                        ) {
                                                            i.next = 21;
                                                            break;
                                                        }
                                                        return (
                                                            (f =
                                                                1e3 *
                                                                Math.floor(O)),
                                                            (r = Math.floor(b)),
                                                            (m =
                                                                "\u5706\u5468\u7387\u8ba1\u7b97\u591a\u7ebf\u7a0b-\u7ebf\u7a0b\u6570\u4e3a" +
                                                                (d = r) +
                                                                "-\u4f4d\u6570\u4e3a" +
                                                                f),
                                                            F(
                                                                t.current
                                                                    .value +
                                                                    m +
                                                                    "\u7ebf\u7a0b\u6570\u4e3a" +
                                                                    d +
                                                                    " \u5706\u5468\u7387\u8ba1\u7b97" +
                                                                    f +
                                                                    "\u4f4d \u8ba1\u7b97\u5706\u5468\u7387\u4e2d......  \n"
                                                            ),
                                                            (A.a.precision = f),
                                                            (p = new Date().getTime()),
                                                            (c = new A.a(0)),
                                                            ((h = []).length = d),
                                                            (i.next = 16),
                                                            s.a.awrap(
                                                                Promise.all(
                                                                    M.slice(
                                                                        0,
                                                                        d
                                                                    ).map(
                                                                        function (
                                                                            e,
                                                                            t
                                                                        ) {
                                                                            var n = M;
                                                                            return new Promise(
                                                                                function (
                                                                                    e,
                                                                                    r
                                                                                ) {
                                                                                    t >=
                                                                                    d
                                                                                        ? e()
                                                                                        : ((n[
                                                                                              t
                                                                                          ] =
                                                                                              n[
                                                                                                  t
                                                                                              ] ||
                                                                                              E()()),
                                                                                          n[
                                                                                              t
                                                                                          ].postMessage(
                                                                                              [
                                                                                                  f,
                                                                                                  d,
                                                                                                  t,
                                                                                              ]
                                                                                          ),
                                                                                          (n[
                                                                                              t
                                                                                          ].onmessage = function (
                                                                                              n
                                                                                          ) {
                                                                                              var r = new A.a(
                                                                                                  n.data[0]
                                                                                              );
                                                                                              (c = A.a.add(
                                                                                                  c,
                                                                                                  r
                                                                                              )),
                                                                                                  (g = Math.max(
                                                                                                      g,
                                                                                                      parseInt(
                                                                                                          n
                                                                                                              .data[1]
                                                                                                      )
                                                                                                  )),
                                                                                                  (h[
                                                                                                      t
                                                                                                  ] = 1),
                                                                                                  e(
                                                                                                      n.data
                                                                                                  );
                                                                                          }),
                                                                                          (n[
                                                                                              t
                                                                                          ].onerror = function (
                                                                                              e
                                                                                          ) {
                                                                                              r(
                                                                                                  new Error(
                                                                                                      e.message +
                                                                                                          " " +
                                                                                                          e.filename
                                                                                                  )
                                                                                              );
                                                                                          }));
                                                                                }
                                                                            );
                                                                        }
                                                                    )
                                                                )
                                                            )
                                                        );
                                                    case 16:
                                                        i.sent,
                                                            requestAnimationFrame(
                                                                function () {
                                                                    !(function (
                                                                        e
                                                                    ) {
                                                                        Object(
                                                                            a.a
                                                                        )(
                                                                            e
                                                                        ).button(
                                                                            "reset"
                                                                        );
                                                                        var r,
                                                                            i =
                                                                                "\u8ba1\u7b97\u5b8c\u6210,\u7528\u65f6" +
                                                                                (new Date().getTime() -
                                                                                    p) /
                                                                                    1e3 +
                                                                                "\u79d2\u7b2c" +
                                                                                g +
                                                                                "\u6b21 \u5706\u5468\u7387" +
                                                                                f +
                                                                                "\u4f4d\n";
                                                                        (r =
                                                                            "\u5706\u5468\u7387" +
                                                                            f +
                                                                            "\u4f4d" +
                                                                            c.toString()[0] +
                                                                            c
                                                                                .toString()
                                                                                .slice(
                                                                                    1
                                                                                )),
                                                                            v(
                                                                                n.current
                                                                            ),
                                                                            B(
                                                                                r
                                                                            ),
                                                                            F(
                                                                                t
                                                                                    .current
                                                                                    .value +
                                                                                    i
                                                                            ),
                                                                            Object(
                                                                                l.a
                                                                            )(
                                                                                "success"
                                                                            );
                                                                    })(e);
                                                                }
                                                            ),
                                                            (i.next = 25);
                                                        break;
                                                    case 21:
                                                        alert(
                                                            "\u8f93\u5165\u9519\u8bef"
                                                        ),
                                                            S(4),
                                                            N(8),
                                                            Object(a.a)(
                                                                e
                                                            ).button("reset");
                                                    case 25:
                                                    case "end":
                                                        return i.stop();
                                                }
                                        });
                                    })(e.target);
                                },
                                type: "button",
                                style: { width: "100%" },
                            },
                            "\u5f00\u59cb"
                        )
                    ),
                    i.a.createElement("br", null),
                    i.a.createElement(
                        "div",
                        null,
                        i.a.createElement("textarea", {
                            ref: t,
                            value: j,
                            onChange: function (e) {
                                D(e), v(e.target);
                            },
                            className: "form-control",
                            cols: "100",
                            rows: "100",
                            style: {
                                width: "100%",
                                height: "100px",
                                margin: "0 0",
                                "text-align": "center",
                            },
                            width: "100%",
                            id: "tp-big",
                        }),
                        i.a.createElement("br", null),
                        i.a.createElement(
                            "details",
                            { open: !0 },
                            i.a.createElement(
                                "summary",
                                {
                                    className:
                                        " btn btn-outline-primary mui-btn mui-btn-outline-primary",
                                },
                                "\u5c55\u5f00\u6536\u8d77\u5706\u5468\u7387\u7ed3\u679c"
                            ),
                            i.a.createElement("br", null),
                            i.a.createElement("br", null),
                            i.a.createElement(
                                "div",
                                {
                                    id: "collapsiblecontainer2",
                                    className: "collapse show",
                                },
                                i.a.createElement("textarea", {
                                    ref: n,
                                    value: Z,
                                    onChange: function (e) {
                                        k(e), v(e.target);
                                    },
                                    className: "form-control",
                                    cols: "100",
                                    rows: "100",
                                    style: {
                                        width: "100%",
                                        height: "100px",
                                        margin: "0 0",
                                        "text-align": "center",
                                    },
                                    width: "100%",
                                    id: "tp2-big",
                                })
                            )
                        )
                    )
                );
            }
            n.d(t, "default", function () {
                return O;
            });
            var q = i.a.useEffect;
            function O() {
                return (
                    q(function () {
                        return (
                            (document.title =
                                "masx200\u7684github\u4e3b\u9875-\u5706\u5468\u7387\u8ba1\u7b97-\u53ef\u8bbe\u7f6e\u5706\u5468\u7387\u4f4d\u6570-\u53ef\u9009\u62e9\u7ebf\u7a0b\u4e2a\u6570-\u591a\u7ebf\u7a0b\u5927\u6570\u6846\u67b6webworker\u8f93\u51fauseragent\u5927\u6570\u6846\u67b6"),
                            function () {}
                        );
                    }, []),
                    i.a.createElement(
                        "div",
                        null,
                        i.a.createElement(
                            "div",
                            null,
                            i.a.createElement("p", null),
                            i.a.createElement(
                                "div",
                                null,
                                i.a.createElement(
                                    "h3",
                                    null,
                                    "\u8ba1\u7b97\u8fd0\u884c\u901f\u5ea6\u6392\u884c:"
                                ),
                                i.a.createElement("br", null),
                                i.a.createElement(
                                    "p",
                                    null,
                                    "1.\u539f\u751fBigInt\u6700\u5feb,"
                                ),
                                i.a.createElement("br", null),
                                i.a.createElement(
                                    "p",
                                    null,
                                    "2.BigInteger.js\u4e2d\u901f,"
                                ),
                                i.a.createElement("br", null),
                                i.a.createElement(
                                    "p",
                                    null,
                                    "3.Decimal.js\u6700\u6162\u3002"
                                )
                            ),
                            i.a.createElement("hr", null),
                            i.a.createElement(
                                "details",
                                null,
                                i.a.createElement(
                                    "summary",
                                    {
                                        className:
                                            " btn btn-outline-primary mui-btn mui-btn-outline-primary",
                                    },
                                    "\u5c55\u5f00\u6536\u8d77\u6d4b\u8bd5\u7ed3\u679c\u5bf9\u6bd4"
                                ),
                                i.a.createElement("br", null),
                                i.a.createElement(
                                    "div",
                                    {
                                        id: "collapsiblecontainer1",
                                        className: "collapse row show",
                                    },
                                    i.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12",
                                        },
                                        i.a.createElement(
                                            "h4",
                                            null,
                                            "\u7ebf\u7a0b\u6570\u4e3a8 \u5706\u5468\u7387\u8ba1\u7b9715000\u4f4d\u6d4b\u8bd5\u7ed3\u679c"
                                        ),
                                        i.a.createElement("br", null),
                                        i.a.createElement(
                                            "p",
                                            null,
                                            "chrome 62 \u6d4b\u8bd5 BigInteger.js \u8fbe\u52301\u500d\u901f\u5ea6"
                                        ),
                                        i.a.createElement("br", null),
                                        i.a.createElement(
                                            "p",
                                            null,
                                            "chrome 74 \u6d4b\u8bd5 \u539f\u751fBigInt \u8fbe\u523011.16\u500d\u901f\u5ea6"
                                        )
                                    ),
                                    i.a.createElement("hr", null),
                                    i.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12",
                                        },
                                        i.a.createElement(
                                            "h4",
                                            null,
                                            "\u7ebf\u7a0b\u6570\u4e3a4 \u5706\u5468\u7387\u8ba1\u7b976000\u4f4d\u6d4b\u8bd5\u7ed3\u679c"
                                        ),
                                        i.a.createElement("br", null),
                                        i.a.createElement(
                                            "p",
                                            null,
                                            "firefox 66 \u6d4b\u8bd5 decimal.js \u8fbe\u52301\u500d\u901f\u5ea6"
                                        ),
                                        i.a.createElement("br", null),
                                        i.a.createElement(
                                            "p",
                                            null,
                                            "firefox 66 \u6d4b\u8bd5 BigInteger.js \u8fbe\u52302.163\u500d\u901f\u5ea6"
                                        ),
                                        i.a.createElement("br", null),
                                        i.a.createElement(
                                            "p",
                                            null,
                                            "chrome 75 \u6d4b\u8bd5 decimal.js \u8fbe\u52303.4375\u500d\u901f\u5ea6"
                                        ),
                                        i.a.createElement("br", null),
                                        i.a.createElement(
                                            "p",
                                            null,
                                            "chrome 75 \u6d4b\u8bd5 \u539f\u751fBigInt \u8fbe\u523074.038\u500d\u901f\u5ea6"
                                        )
                                    ),
                                    i.a.createElement("hr", null),
                                    i.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12",
                                        },
                                        i.a.createElement(
                                            "h4",
                                            null,
                                            "\u7ebf\u7a0b\u6570\u4e3a4 \u5706\u5468\u7387\u8ba1\u7b9710000\u4f4d\u6d4b\u8bd5\u7ed3\u679c"
                                        ),
                                        i.a.createElement("br", null),
                                        i.a.createElement(
                                            "p",
                                            null,
                                            "firefox 66 \u6d4b\u8bd5 decimal.js \u8fbe\u52301\u500d\u901f\u5ea6"
                                        ),
                                        i.a.createElement("br", null),
                                        i.a.createElement(
                                            "p",
                                            null,
                                            "firefox 66 \u6d4b\u8bd5 BigInteger.js \u8fbe\u52302.066\u500d\u901f\u5ea6"
                                        ),
                                        i.a.createElement("br", null),
                                        i.a.createElement(
                                            "p",
                                            null,
                                            "chrome 75 \u6d4b\u8bd5 decimal.js \u8fbe\u52303.688\u500d\u901f\u5ea6"
                                        ),
                                        i.a.createElement("br", null),
                                        i.a.createElement(
                                            "p",
                                            null,
                                            "chrome 75 \u6d4b\u8bd5 \u539f\u751fBigInt \u8fbe\u5230100.773\u500d\u901f\u5ea6"
                                        )
                                    ),
                                    i.a.createElement("hr", null),
                                    i.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12",
                                        },
                                        i.a.createElement(
                                            "h4",
                                            null,
                                            "\u7ebf\u7a0b\u6570\u4e3a8 \u5706\u5468\u7387\u8ba1\u7b9710000\u4f4d\u6d4b\u8bd5\u7ed3\u679c"
                                        ),
                                        i.a.createElement("br", null),
                                        i.a.createElement(
                                            "p",
                                            null,
                                            "firefox 66 \u6d4b\u8bd5 BigInteger.js \u8fbe\u52301\u500d\u901f\u5ea6"
                                        ),
                                        i.a.createElement("br", null),
                                        i.a.createElement(
                                            "p",
                                            null,
                                            "chrome 62 \u6d4b\u8bd5 BigInteger.js \u8fbe\u52306.688\u500d\u901f\u5ea6"
                                        ),
                                        i.a.createElement("br", null),
                                        i.a.createElement(
                                            "p",
                                            null,
                                            "chrome 74 \u6d4b\u8bd5 \u539f\u751fBigInt \u8fbe\u523049.710\u500d\u901f\u5ea6"
                                        )
                                    ),
                                    i.a.createElement("hr", null),
                                    i.a.createElement("p", null),
                                    i.a.createElement("br", null)
                                )
                            )
                        ),
                        i.a.createElement("hr", null),
                        i.a.createElement(b, null),
                        i.a.createElement("hr", null),
                        i.a.createElement(_, null)
                    )
                );
            }
        },
    },
]);
