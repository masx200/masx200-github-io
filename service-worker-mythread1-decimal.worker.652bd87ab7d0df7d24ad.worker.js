!function(n){var e={};function i(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=n,i.c=e,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.3.0/",i(i.s=1)}([function(n,e,i){"use strict";var t;!function(){var r,s,o,u=9e15,c=1e9,f="0123456789abcdef",a="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",l="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",d={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-u,maxE:u,crypto:!1},h=!0,p="[DecimalError] ",g=p+"Invalid argument: ",m=p+"Precision limit exceeded",w=p+"crypto unavailable",v=Math.floor,N=Math.pow,b=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,x=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,E=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,y=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,M=1e7,O=7,q=a.length-1,F=l.length-1,P={name:"[object Decimal]"};function A(n){var e,i,t,r=n.length-1,s="",o=n[0];if(0<r){for(s+=o,e=1;e<r;e++)t=n[e]+"",(i=O-t.length)&&(s+=B(i)),s+=t;o=n[e],(i=O-(t=o+"").length)&&(s+=B(i))}else if(0===o)return"0";for(;o%10==0;)o/=10;return s+o}function D(n,e,i){if(n!==~~n||n<e||i<n)throw Error(g+n)}function _(n,e,i,t){var r,s,o;for(s=n[0];10<=s;s/=10)--e;return--e<0?(e+=O,r=0):(r=Math.ceil((e+1)/O),e%=O),s=N(10,O-e),o=n[r]%s|0,null==t?e<3?(0==e?o=o/100|0:1==e&&(o=o/10|0),i<4&&99999==o||3<i&&49999==o||5e4==o||0==o):(i<4&&o+1==s||3<i&&o+1==s/2)&&(n[r+1]/s/100|0)==N(10,e-2)-1||(o==s/2||0==o)&&0==(n[r+1]/s/100|0):e<4?(0==e?o=o/1e3|0:1==e?o=o/100|0:2==e&&(o=o/10|0),(t||i<4)&&9999==o||!t&&3<i&&4999==o):((t||i<4)&&o+1==s||!t&&3<i&&o+1==s/2)&&(n[r+1]/s/1e3|0)==N(10,e-3)-1}function Z(n,e,i){for(var t,r,s=[0],o=0,u=n.length;o<u;){for(r=s.length;r--;)s[r]*=e;for(s[0]+=f.indexOf(n.charAt(o++)),t=0;t<s.length;t++)s[t]>i-1&&(void 0===s[t+1]&&(s[t+1]=0),s[t+1]+=s[t]/i|0,s[t]%=i)}return s.reverse()}P.absoluteValue=P.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),U(n)},P.ceil=function(){return U(new this.constructor(this),this.e+1,2)},P.comparedTo=P.cmp=function(n){var e,i,t,r,s=this,o=s.d,u=(n=new s.constructor(n)).d,c=s.s,f=n.s;if(!o||!u)return c&&f?c!==f?c:o===u?0:!o^c<0?1:-1:NaN;if(!o[0]||!u[0])return o[0]?c:u[0]?-f:0;if(c!==f)return c;if(s.e!==n.e)return s.e>n.e^c<0?1:-1;for(e=0,i=(t=o.length)<(r=u.length)?t:r;e<i;++e)if(o[e]!==u[e])return o[e]>u[e]^c<0?1:-1;return t===r?0:r<t^c<0?1:-1},P.cosine=P.cos=function(){var n,e,i=this,t=i.constructor;return i.d?i.d[0]?(n=t.precision,e=t.rounding,t.precision=n+Math.max(i.e,i.sd())+O,t.rounding=1,i=function(n,e){var i,t,r=e.d.length;t=r<32?(1/X(4,i=Math.ceil(r/3))).toString():(i=16,"2.3283064365386962890625e-10"),n.precision+=i,e=Q(n,1,e.times(t),new n(1));for(var s=i;s--;){var o=e.times(e);e=o.times(o).minus(o).times(8).plus(1)}return n.precision-=i,e}(t,Y(t,i)),t.precision=n,t.rounding=e,U(2==o||3==o?i.neg():i,n,e,!0)):new t(1):new t(NaN)},P.cubeRoot=P.cbrt=function(){var n,e,i,t,r,s,o,u,c,f,a=this,l=a.constructor;if(!a.isFinite()||a.isZero())return new l(a);for(h=!1,(s=a.s*N(a.s*a,1/3))&&Math.abs(s)!=1/0?t=new l(s.toString()):(i=A(a.d),(s=((n=a.e)-i.length+1)%3)&&(i+=1==s||-2==s?"0":"00"),s=N(i,1/3),n=v((n+1)/3)-(n%3==(n<0?-1:2)),(t=new l(i=s==1/0?"5e"+n:(i=s.toExponential()).slice(0,i.indexOf("e")+1)+n)).s=a.s),o=(n=l.precision)+3;;)if(f=(c=(u=t).times(u).times(u)).plus(a),t=S(f.plus(a).times(u),f.plus(c),o+2,1),A(u.d).slice(0,o)===(i=A(t.d)).slice(0,o)){if("9999"!=(i=i.slice(o-3,o+1))&&(r||"4999"!=i)){+i&&(+i.slice(1)||"5"!=i.charAt(0))||(U(t,n+1,1),e=!t.times(t).times(t).eq(a));break}if(!r&&(U(u,n+1,0),u.times(u).times(u).eq(a))){t=u;break}o+=4,r=1}return h=!0,U(t,n,l.rounding,e)},P.decimalPlaces=P.dp=function(){var n,e=this.d,i=NaN;if(e){if(i=((n=e.length-1)-v(this.e/O))*O,n=e[n])for(;n%10==0;n/=10)i--;i<0&&(i=0)}return i},P.dividedBy=P.div=function(n){return S(this,new this.constructor(n))},P.dividedToIntegerBy=P.divToInt=function(n){var e=this.constructor;return U(S(this,new e(n),0,1,1),e.precision,e.rounding)},P.equals=P.eq=function(n){return 0===this.cmp(n)},P.floor=function(){return U(new this.constructor(this),this.e+1,3)},P.greaterThan=P.gt=function(n){return 0<this.cmp(n)},P.greaterThanOrEqualTo=P.gte=function(n){var e=this.cmp(n);return 1==e||0===e},P.hyperbolicCosine=P.cosh=function(){var n,e,i,t,r,s=this,o=s.constructor,u=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return u;i=o.precision,t=o.rounding,o.precision=i+Math.max(s.e,s.sd())+4,o.rounding=1,e=(r=s.d.length)<32?(1/X(4,n=Math.ceil(r/3))).toString():(n=16,"2.3283064365386962890625e-10"),s=Q(o,1,s.times(e),new o(1),!0);for(var c,f=n,a=new o(8);f--;)c=s.times(s),s=u.minus(c.times(a.minus(c.times(a))));return U(s,o.precision=i,o.rounding=t,!0)},P.hyperbolicSine=P.sinh=function(){var n,e,i,t,r=this,s=r.constructor;if(!r.isFinite()||r.isZero())return new s(r);if(e=s.precision,i=s.rounding,s.precision=e+Math.max(r.e,r.sd())+4,s.rounding=1,(t=r.d.length)<3)r=Q(s,2,r,r,!0);else{n=16<(n=1.4*Math.sqrt(t))?16:0|n,r=Q(s,2,r=r.times(1/X(5,n)),r,!0);for(var o,u=new s(5),c=new s(16),f=new s(20);n--;)o=r.times(r),r=r.times(u.plus(o.times(c.times(o).plus(f))))}return U(r,s.precision=e,s.rounding=i,!0)},P.hyperbolicTangent=P.tanh=function(){var n,e,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+7,t.rounding=1,S(i.sinh(),i.cosh(),t.precision=n,t.rounding=e)):new t(i.s)},P.inverseCosine=P.acos=function(){var n,e=this,i=e.constructor,t=e.abs().cmp(1),r=i.precision,s=i.rounding;return-1!==t?0===t?e.isNeg()?C(i,r,s):new i(0):new i(NaN):e.isZero()?C(i,r+4,s).times(.5):(i.precision=r+6,i.rounding=1,e=e.asin(),n=C(i,r+4,s).times(.5),i.precision=r,i.rounding=s,n.minus(e))},P.inverseHyperbolicCosine=P.acosh=function(){var n,e,i=this,t=i.constructor;return i.lte(1)?new t(i.eq(1)?0:NaN):i.isFinite()?(n=t.precision,e=t.rounding,t.precision=n+Math.max(Math.abs(i.e),i.sd())+4,t.rounding=1,h=!1,i=i.times(i).minus(1).sqrt().plus(i),h=!0,t.precision=n,t.rounding=e,i.ln()):new t(i)},P.inverseHyperbolicSine=P.asinh=function(){var n,e,i=this,t=i.constructor;return!i.isFinite()||i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+2*Math.max(Math.abs(i.e),i.sd())+6,t.rounding=1,h=!1,i=i.times(i).plus(1).sqrt().plus(i),h=!0,t.precision=n,t.rounding=e,i.ln())},P.inverseHyperbolicTangent=P.atanh=function(){var n,e,i,t,r=this,s=r.constructor;return r.isFinite()?0<=r.e?new s(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(n=s.precision,e=s.rounding,t=r.sd(),Math.max(t,n)<2*-r.e-1?U(new s(r),n,e,!0):(s.precision=i=t-r.e,r=S(r.plus(1),new s(1).minus(r),i+n,1),s.precision=n+4,s.rounding=1,r=r.ln(),s.precision=n,s.rounding=e,r.times(.5))):new s(NaN)},P.inverseSine=P.asin=function(){var n,e,i,t,r=this,s=r.constructor;return r.isZero()?new s(r):(e=r.abs().cmp(1),i=s.precision,t=s.rounding,-1!==e?0===e?((n=C(s,i+4,t).times(.5)).s=r.s,n):new s(NaN):(s.precision=i+6,s.rounding=1,r=r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(),s.precision=i,s.rounding=t,r.times(2)))},P.inverseTangent=P.atan=function(){var n,e,i,t,r,s,o,u,c,f=this,a=f.constructor,l=a.precision,d=a.rounding;if(f.isFinite()){if(f.isZero())return new a(f);if(f.abs().eq(1)&&l+4<=F)return(o=C(a,l+4,d).times(.25)).s=f.s,o}else{if(!f.s)return new a(NaN);if(l+4<=F)return(o=C(a,l+4,d).times(.5)).s=f.s,o}for(a.precision=u=l+10,a.rounding=1,n=i=Math.min(28,u/O+2|0);n;--n)f=f.div(f.times(f).plus(1).sqrt().plus(1));for(h=!1,e=Math.ceil(u/O),t=1,c=f.times(f),o=new a(f),r=f;-1!==n;)if(r=r.times(c),s=o.minus(r.div(t+=2)),r=r.times(c),void 0!==(o=s.plus(r.div(t+=2))).d[e])for(n=e;o.d[n]===s.d[n]&&n--;);return i&&(o=o.times(2<<i-1)),h=!0,U(o,a.precision=l,a.rounding=d,!0)},P.isFinite=function(){return!!this.d},P.isInteger=P.isInt=function(){return!!this.d&&v(this.e/O)>this.d.length-2},P.isNaN=function(){return!this.s},P.isNegative=P.isNeg=function(){return this.s<0},P.isPositive=P.isPos=function(){return 0<this.s},P.isZero=function(){return!!this.d&&0===this.d[0]},P.lessThan=P.lt=function(n){return this.cmp(n)<0},P.lessThanOrEqualTo=P.lte=function(n){return this.cmp(n)<1},P.logarithm=P.log=function(n){var e,i,t,r,s,o,u,c,f=this,a=f.constructor,l=a.precision,d=a.rounding;if(null==n)n=new a(10),e=!0;else{if(i=(n=new a(n)).d,n.s<0||!i||!i[0]||n.eq(1))return new a(NaN);e=n.eq(10)}if(i=f.d,f.s<0||!i||!i[0]||f.eq(1))return new a(i&&!i[0]?-1/0:1!=f.s?NaN:i?0:1/0);if(e)if(1<i.length)s=!0;else{for(r=i[0];r%10==0;)r/=10;s=1!==r}if(h=!1,o=z(f,u=l+5),t=e?I(a,u+10):z(n,u),_((c=S(o,t,u,1)).d,r=l,d))do{if(o=z(f,u+=10),t=e?I(a,u+10):z(n,u),c=S(o,t,u,1),!s){+A(c.d).slice(r+1,r+15)+1==1e14&&(c=U(c,l+1,0));break}}while(_(c.d,r+=10,d));return h=!0,U(c,l,d)},P.minus=P.sub=function(n){var e,i,t,r,s,o,u,c,f,a,l,d,p=this,g=p.constructor;if(n=new g(n),!p.d||!n.d)return p.s&&n.s?p.d?n.s=-n.s:n=new g(n.d||p.s!==n.s?p:NaN):n=new g(NaN),n;if(p.s!=n.s)return n.s=-n.s,p.plus(n);if(f=p.d,d=n.d,u=g.precision,c=g.rounding,!f[0]||!d[0]){if(d[0])n.s=-n.s;else{if(!f[0])return new g(3===c?-0:0);n=new g(p)}return h?U(n,u,c):n}if(i=v(n.e/O),a=v(p.e/O),f=f.slice(),s=a-i){for(o=(l=s<0)?(e=f,s=-s,d.length):(e=d,i=a,f.length),(t=Math.max(Math.ceil(u/O),o)+2)<s&&(s=t,e.length=1),e.reverse(),t=s;t--;)e.push(0);e.reverse()}else{for((l=(t=f.length)<(o=d.length))&&(o=t),t=0;t<o;t++)if(f[t]!=d[t]){l=f[t]<d[t];break}s=0}for(l&&(e=f,f=d,d=e,n.s=-n.s),o=f.length,t=d.length-o;0<t;--t)f[o++]=0;for(t=d.length;s<t;){if(f[--t]<d[t]){for(r=t;r&&0===f[--r];)f[r]=M-1;--f[r],f[t]+=M}f[t]-=d[t]}for(;0===f[--o];)f.pop();for(;0===f[0];f.shift())--i;return f[0]?(n.d=f,n.e=j(f,i),h?U(n,u,c):n):new g(3===c?-0:0)},P.modulo=P.mod=function(n){var e,i=this,t=i.constructor;return n=new t(n),!i.d||!n.s||n.d&&!n.d[0]?new t(NaN):!n.d||i.d&&!i.d[0]?U(new t(i),t.precision,t.rounding):(h=!1,9==t.modulo?(e=S(i,n.abs(),0,3,1)).s*=n.s:e=S(i,n,0,t.modulo,1),e=e.times(n),h=!0,i.minus(e))},P.naturalExponential=P.exp=function(){return J(this)},P.naturalLogarithm=P.ln=function(){return z(this)},P.negated=P.neg=function(){var n=new this.constructor(this);return n.s=-n.s,U(n)},P.plus=P.add=function(n){var e,i,t,r,s,o,u,c,f,a,l=this,d=l.constructor;if(n=new d(n),!l.d||!n.d)return l.s&&n.s?l.d||(n=new d(n.d||l.s===n.s?l:NaN)):n=new d(NaN),n;if(l.s!=n.s)return n.s=-n.s,l.minus(n);if(f=l.d,a=n.d,u=d.precision,c=d.rounding,!f[0]||!a[0])return a[0]||(n=new d(l)),h?U(n,u,c):n;if(s=v(l.e/O),t=v(n.e/O),f=f.slice(),r=s-t){for((o=(o=r<0?(i=f,r=-r,a.length):(i=a,t=s,f.length))<(s=Math.ceil(u/O))?s+1:o+1)<r&&(r=o,i.length=1),i.reverse();r--;)i.push(0);i.reverse()}for((o=f.length)-(r=a.length)<0&&(r=o,i=a,a=f,f=i),e=0;r;)e=(f[--r]=f[r]+a[r]+e)/M|0,f[r]%=M;for(e&&(f.unshift(e),++t),o=f.length;0==f[--o];)f.pop();return n.d=f,n.e=j(f,t),h?U(n,u,c):n},P.precision=P.sd=function(n){var e;if(void 0!==n&&n!==!!n&&1!==n&&0!==n)throw Error(g+n);return this.d?(e=H(this.d),n&&this.e+1>e&&(e=this.e+1)):e=NaN,e},P.round=function(){var n=this.constructor;return U(new n(this),this.e+1,n.rounding)},P.sine=P.sin=function(){var n,e,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+Math.max(i.e,i.sd())+O,t.rounding=1,i=function(n,e){var i,t=e.d.length;if(t<3)return Q(n,2,e,e);i=16<(i=1.4*Math.sqrt(t))?16:0|i,e=Q(n,2,e=e.times(1/X(5,i)),e);for(var r,s=new n(5),o=new n(16),u=new n(20);i--;)r=e.times(e),e=e.times(s.plus(r.times(o.times(r).minus(u))));return e}(t,Y(t,i)),t.precision=n,t.rounding=e,U(2<o?i.neg():i,n,e,!0)):new t(NaN)},P.squareRoot=P.sqrt=function(){var n,e,i,t,r,s,o=this,u=o.d,c=o.e,f=o.s,a=o.constructor;if(1!==f||!u||!u[0])return new a(!f||f<0&&(!u||u[0])?NaN:u?o:1/0);for(h=!1,t=0==(f=Math.sqrt(+o))||f==1/0?(((e=A(u)).length+c)%2==0&&(e+="0"),f=Math.sqrt(e),c=v((c+1)/2)-(c<0||c%2),new a(e=f==1/0?"1e"+c:(e=f.toExponential()).slice(0,e.indexOf("e")+1)+c)):new a(f.toString()),i=(c=a.precision)+3;;)if(t=(s=t).plus(S(o,s,i+2,1)).times(.5),A(s.d).slice(0,i)===(e=A(t.d)).slice(0,i)){if("9999"!=(e=e.slice(i-3,i+1))&&(r||"4999"!=e)){+e&&(+e.slice(1)||"5"!=e.charAt(0))||(U(t,c+1,1),n=!t.times(t).eq(o));break}if(!r&&(U(s,c+1,0),s.times(s).eq(o))){t=s;break}i+=4,r=1}return h=!0,U(t,c,a.rounding,n)},P.tangent=P.tan=function(){var n,e,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+10,t.rounding=1,(i=i.sin()).s=1,i=S(i,new t(1).minus(i.times(i)).sqrt(),n+10,0),t.precision=n,t.rounding=e,U(2==o||4==o?i.neg():i,n,e,!0)):new t(NaN)},P.times=P.mul=function(n){var e,i,t,r,s,o,u,c,f,a=this.constructor,l=this.d,d=(n=new a(n)).d;if(n.s*=this.s,!(l&&l[0]&&d&&d[0]))return new a(!n.s||l&&!l[0]&&!d||d&&!d[0]&&!l?NaN:l&&d?0*n.s:n.s/0);for(i=v(this.e/O)+v(n.e/O),(c=l.length)<(f=d.length)&&(s=l,l=d,d=s,o=c,c=f,f=o),s=[],t=o=c+f;t--;)s.push(0);for(t=f;0<=--t;){for(e=0,r=c+t;t<r;)u=s[r]+d[t]*l[r-t-1]+e,s[r--]=u%M|0,e=u/M|0;s[r]=(s[r]+e)%M|0}for(;!s[--o];)s.pop();return e?++i:s.shift(),n.d=s,n.e=j(s,i),h?U(n,a.precision,a.rounding):n},P.toBinary=function(n,e){return nn(this,2,n,e)},P.toDecimalPlaces=P.toDP=function(n,e){var i=this,t=i.constructor;return i=new t(i),void 0===n?i:(D(n,0,c),void 0===e?e=t.rounding:D(e,0,8),U(i,n+i.e+1,e))},P.toExponential=function(n,e){var i,t=this,r=t.constructor;return i=void 0===n?k(t,!0):(D(n,0,c),void 0===e?e=r.rounding:D(e,0,8),k(t=U(new r(t),n+1,e),!0,n+1)),t.isNeg()&&!t.isZero()?"-"+i:i},P.toFixed=function(n,e){var i,t,r=this,s=r.constructor;return i=void 0===n?k(r):(D(n,0,c),void 0===e?e=s.rounding:D(e,0,8),k(t=U(new s(r),n+r.e+1,e),!1,n+t.e+1)),r.isNeg()&&!r.isZero()?"-"+i:i},P.toFraction=function(n){var e,i,t,r,s,o,u,c,f,a,l,d,p=this,m=p.d,w=p.constructor;if(!m)return new w(p);if(f=i=new w(1),o=(s=(e=new w(t=c=new w(0))).e=H(m)-p.e-1)%O,e.d[0]=N(10,o<0?O+o:o),null==n)n=0<s?e:f;else{if(!(u=new w(n)).isInt()||u.lt(f))throw Error(g+u);n=u.gt(e)?0<s?e:f:u}for(h=!1,u=new w(A(m)),a=w.precision,w.precision=s=m.length*O*2;l=S(u,e,0,1,1),1!=(r=i.plus(l.times(t))).cmp(n);)i=t,t=r,r=f,f=c.plus(l.times(r)),c=r,r=e,e=u.minus(l.times(r)),u=r;return r=S(n.minus(i),t,0,1,1),c=c.plus(r.times(f)),i=i.plus(r.times(t)),c.s=f.s=p.s,d=S(f,t,s,1).minus(p).abs().cmp(S(c,i,s,1).minus(p).abs())<1?[f,t]:[c,i],w.precision=a,h=!0,d},P.toHexadecimal=P.toHex=function(n,e){return nn(this,16,n,e)},P.toNearest=function(n,e){var i=this,t=i.constructor;if(i=new t(i),null==n){if(!i.d)return i;n=new t(1),e=t.rounding}else{if(n=new t(n),void 0===e?e=t.rounding:D(e,0,8),!i.d)return n.s?i:n;if(!n.d)return n.s&&(n.s=i.s),n}return n.d[0]?(h=!1,i=S(i,n,0,e,1).times(n),h=!0,U(i)):(n.s=i.s,i=n),i},P.toNumber=function(){return+this},P.toOctal=function(n,e){return nn(this,8,n,e)},P.toPower=P.pow=function(n){var e,i,t,r,s,o,u=this,c=u.constructor,f=+(n=new c(n));if(!(u.d&&n.d&&u.d[0]&&n.d[0]))return new c(N(+u,f));if((u=new c(u)).eq(1))return u;if(t=c.precision,s=c.rounding,n.eq(1))return U(u,t,s);if((e=v(n.e/O))>=n.d.length-1&&(i=f<0?-f:f)<=9007199254740991)return r=V(c,u,i,t),n.s<0?new c(1).div(r):U(r,t,s);if((o=u.s)<0){if(e<n.d.length-1)return new c(NaN);if(0==(1&n.d[e])&&(o=1),0==u.e&&1==u.d[0]&&1==u.d.length)return u.s=o,u}return(e=0!=(i=N(+u,f))&&isFinite(i)?new c(i+"").e:v(f*(Math.log("0."+A(u.d))/Math.LN10+u.e+1)))>c.maxE+1||e<c.minE-1?new c(0<e?o/0:0):(h=!1,c.rounding=u.s=1,i=Math.min(12,(e+"").length),(r=J(n.times(z(u,t+i)),t)).d&&_((r=U(r,t+5,1)).d,t,s)&&(e=t+10,+A((r=U(J(n.times(z(u,e+i)),e),e+5,1)).d).slice(t+1,t+15)+1==1e14&&(r=U(r,t+1,0))),r.s=o,h=!0,U(r,t,c.rounding=s))},P.toPrecision=function(n,e){var i,t=this,r=t.constructor;return i=void 0===n?k(t,t.e<=r.toExpNeg||t.e>=r.toExpPos):(D(n,1,c),void 0===e?e=r.rounding:D(e,0,8),k(t=U(new r(t),n,e),n<=t.e||t.e<=r.toExpNeg,n)),t.isNeg()&&!t.isZero()?"-"+i:i},P.toSignificantDigits=P.toSD=function(n,e){var i=this.constructor;return void 0===n?(n=i.precision,e=i.rounding):(D(n,1,c),void 0===e?e=i.rounding:D(e,0,8)),U(new i(this),n,e)},P.toString=function(){var n=this,e=n.constructor,i=k(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()&&!n.isZero()?"-"+i:i},P.truncated=P.trunc=function(){return U(new this.constructor(this),this.e+1,1)},P.valueOf=P.toJSON=function(){var n=this,e=n.constructor,i=k(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()?"-"+i:i};var S=function(n,e,i,t,r,o){var u,c,f,a,l,d,h,p,g,m,w,N,b,x,E,y,q,F,P,A,D=n.constructor,_=n.s==e.s?1:-1,Z=n.d,S=e.d;if(!(Z&&Z[0]&&S&&S[0]))return new D(n.s&&e.s&&(Z?!S||Z[0]!=S[0]:S)?Z&&0==Z[0]||!S?0*_:_/0:NaN);for(c=o?(l=1,n.e-e.e):(o=M,l=O,v(n.e/l)-v(e.e/l)),P=S.length,q=Z.length,m=(g=new D(_)).d=[],f=0;S[f]==(Z[f]||0);f++);if(S[f]>(Z[f]||0)&&c--,null==i?(x=i=D.precision,t=D.rounding):x=r?i+(n.e-e.e)+1:i,x<0)m.push(1),d=!0;else{if(x=x/l+2|0,f=0,1==P){for(S=S[a=0],x++;(f<q||a)&&x--;f++)E=a*o+(Z[f]||0),m[f]=E/S|0,a=E%S|0;d=a||f<q}else{for(1<(a=o/(S[0]+1)|0)&&(S=R(S,a,o),Z=R(Z,a,o),P=S.length,q=Z.length),y=P,N=(w=Z.slice(0,P)).length;N<P;)w[N++]=0;for((A=S.slice()).unshift(0),F=S[0],S[1]>=o/2&&++F;a=0,(u=L(S,w,P,N))<0?(b=w[0],P!=N&&(b=b*o+(w[1]||0)),1<(a=b/F|0)?(o<=a&&(a=o-1),1==(u=L(h=R(S,a,o),w,p=h.length,N=w.length))&&(a--,T(h,P<p?A:S,p,o))):(0==a&&(u=a=1),h=S.slice()),(p=h.length)<N&&h.unshift(0),T(w,h,N,o),-1==u&&(u=L(S,w,P,N=w.length))<1&&(a++,T(w,P<N?A:S,N,o)),N=w.length):0===u&&(a++,w=[0]),m[f++]=a,u&&w[0]?w[N++]=Z[y]||0:(w=[Z[y]],N=1),(y++<q||void 0!==w[0])&&x--;);d=void 0!==w[0]}m[0]||m.shift()}if(1==l)g.e=c,s=d;else{for(f=1,a=m[0];10<=a;a/=10)f++;g.e=f+c*l-1,U(g,r?i+g.e+1:i,t,d)}return g};function R(n,e,i){var t,r=0,s=n.length;for(n=n.slice();s--;)t=n[s]*e+r,n[s]=t%i|0,r=t/i|0;return r&&n.unshift(r),n}function L(n,e,i,t){var r,s;if(i!=t)s=t<i?1:-1;else for(r=s=0;r<i;r++)if(n[r]!=e[r]){s=n[r]>e[r]?1:-1;break}return s}function T(n,e,i,t){for(var r=0;i--;)n[i]-=r,r=n[i]<e[i]?1:0,n[i]=r*t+n[i]-e[i];for(;!n[0]&&1<n.length;)n.shift()}function U(n,e,i,t){var r,s,o,u,c,f,a,l,d,p=n.constructor;n:if(null!=e){if(!(l=n.d))return n;for(r=1,u=l[0];10<=u;u/=10)r++;if((s=e-r)<0)s+=O,o=e,c=(a=l[d=0])/N(10,r-o-1)%10|0;else if(d=Math.ceil((s+1)/O),(u=l.length)<=d){if(!t)break n;for(;u++<=d;)l.push(0);a=c=0,o=(s%=O)-O+(r=1)}else{for(a=u=l[d],r=1;10<=u;u/=10)r++;c=(o=(s%=O)-O+r)<0?0:a/N(10,r-o-1)%10|0}if(t=t||e<0||void 0!==l[d+1]||(o<0?a:a%N(10,r-o-1)),f=i<4?(c||t)&&(0==i||i==(n.s<0?3:2)):5<c||5==c&&(4==i||t||6==i&&(0<s?0<o?a/N(10,r-o):0:l[d-1])%10&1||i==(n.s<0?8:7)),e<1||!l[0])return l.length=0,f?(e-=n.e+1,l[0]=N(10,(O-e%O)%O),n.e=-e||0):l[0]=n.e=0,n;if(0==s?(l.length=d,u=1,d--):(l.length=d+1,u=N(10,O-s),l[d]=0<o?(a/N(10,r-o)%N(10,o)|0)*u:0),f)for(;;){if(0==d){for(s=1,o=l[0];10<=o;o/=10)s++;for(o=l[0]+=u,u=1;10<=o;o/=10)u++;s!=u&&(n.e++,l[0]==M&&(l[0]=1));break}if(l[d]+=u,l[d]!=M)break;l[d--]=0,u=1}for(s=l.length;0===l[--s];)l.pop()}return h&&(n.e>p.maxE?(n.d=null,n.e=NaN):n.e<p.minE&&(n.e=0,n.d=[0])),n}function k(n,e,i){if(!n.isFinite())return G(n);var t,r=n.e,s=A(n.d),o=s.length;return e?(i&&0<(t=i-o)?s=s.charAt(0)+"."+s.slice(1)+B(t):1<o&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(n.e<0?"e":"e+")+n.e):r<0?(s="0."+B(-r-1)+s,i&&0<(t=i-o)&&(s+=B(t))):o<=r?(s+=B(r+1-o),i&&0<(t=i-r-1)&&(s=s+"."+B(t))):((t=r+1)<o&&(s=s.slice(0,t)+"."+s.slice(t)),i&&0<(t=i-o)&&(r+1===o&&(s+="."),s+=B(t))),s}function j(n,e){var i=n[0];for(e*=O;10<=i;i/=10)e++;return e}function I(n,e,i){if(q<e)throw h=!0,i&&(n.precision=i),Error(m);return U(new n(a),e,1,!0)}function C(n,e,i){if(F<e)throw Error(m);return U(new n(l),e,i,!0)}function H(n){var e=n.length-1,i=e*O+1;if(e=n[e]){for(;e%10==0;e/=10)i--;for(e=n[0];10<=e;e/=10)i++}return i}function B(n){for(var e="";n--;)e+="0";return e}function V(n,e,i,t){var r,s=new n(1),o=Math.ceil(t/O+4);for(h=!1;;){if(i%2&&en((s=s.times(e)).d,o)&&(r=!0),0===(i=v(i/2))){i=s.d.length-1,r&&0===s.d[i]&&++s.d[i];break}en((e=e.times(e)).d,o)}return h=!0,s}function $(n){return 1&n.d[n.d.length-1]}function W(n,e,i){for(var t,r=new n(e[0]),s=0;++s<e.length;){if(!(t=new n(e[s])).s){r=t;break}r[i](t)&&(r=t)}return r}function J(n,e){var i,t,r,s,o,u,c,f=0,a=0,l=0,d=n.constructor,p=d.rounding,g=d.precision;if(!n.d||!n.d[0]||17<n.e)return new d(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:NaN);for(c=null==e?(h=!1,g):e,u=new d(.03125);-2<n.e;)n=n.times(u),l+=5;for(c+=t=Math.log(N(2,l))/Math.LN10*2+5|0,i=s=o=new d(1),d.precision=c;;){if(s=U(s.times(n),c,1),i=i.times(++a),A((u=o.plus(S(s,i,c,1))).d).slice(0,c)===A(o.d).slice(0,c)){for(r=l;r--;)o=U(o.times(o),c,1);if(null!=e)return d.precision=g,o;if(!(f<3&&_(o.d,c-t,p,f)))return U(o,d.precision=g,p,h=!0);d.precision=c+=10,i=s=u=new d(1),a=0,f++}o=u}}function z(n,e){var i,t,r,s,o,u,c,f,a,l,d,p=1,g=n,m=g.d,w=g.constructor,v=w.rounding,N=w.precision;if(g.s<0||!m||!m[0]||!g.e&&1==m[0]&&1==m.length)return new w(m&&!m[0]?-1/0:1!=g.s?NaN:m?0:g);if(a=null==e?(h=!1,N):e,w.precision=a+=10,t=(i=A(m)).charAt(0),!(Math.abs(s=g.e)<15e14))return f=I(w,a+2,N).times(s+""),g=z(new w(t+"."+i.slice(1)),a-10).plus(f),w.precision=N,null==e?U(g,N,v,h=!0):g;for(;t<7&&1!=t||1==t&&3<i.charAt(1);)t=(i=A((g=g.times(n)).d)).charAt(0),p++;for(s=g.e,1<t?(g=new w("0."+i),s++):g=new w(t+"."+i.slice(1)),c=o=g=S((l=g).minus(1),g.plus(1),a,1),d=U(g.times(g),a,1),r=3;;){if(o=U(o.times(d),a,1),A((f=c.plus(S(o,new w(r),a,1))).d).slice(0,a)===A(c.d).slice(0,a)){if(c=c.times(2),0!==s&&(c=c.plus(I(w,a+2,N).times(s+""))),c=S(c,new w(p),a,1),null!=e)return w.precision=N,c;if(!_(c.d,a-10,v,u))return U(c,w.precision=N,v,h=!0);w.precision=a+=10,f=o=g=S(l.minus(1),l.plus(1),a,1),d=U(g.times(g),a,1),r=u=1}c=f,r+=2}}function G(n){return String(n.s*n.s/0)}function K(n,e){var i,t,r;for(-1<(i=e.indexOf("."))&&(e=e.replace(".","")),0<(t=e.search(/e/i))?(i<0&&(i=t),i+=+e.slice(t+1),e=e.substring(0,t)):i<0&&(i=e.length),t=0;48===e.charCodeAt(t);t++);for(r=e.length;48===e.charCodeAt(r-1);--r);if(e=e.slice(t,r)){if(r-=t,n.e=i=i-t-1,n.d=[],t=(i+1)%O,i<0&&(t+=O),t<r){for(t&&n.d.push(+e.slice(0,t)),r-=O;t<r;)n.d.push(+e.slice(t,t+=O));e=e.slice(t),t=O-e.length}else t-=r;for(;t--;)e+="0";n.d.push(+e),h&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function Q(n,e,i,t,r){var s,o,u,c,f=n.precision,a=Math.ceil(f/O);for(h=!1,c=i.times(i),u=new n(t);;){if(o=S(u.times(c),new n(e++*e++),f,1),u=r?t.plus(o):t.minus(o),t=S(o.times(c),new n(e++*e++),f,1),void 0!==(o=u.plus(t)).d[a]){for(s=a;o.d[s]===u.d[s]&&s--;);if(-1==s)break}s=u,u=t,t=o,o=s}return h=!0,o.d.length=a+1,o}function X(n,e){for(var i=n;--e;)i*=n;return i}function Y(n,e){var i,t=e.s<0,r=C(n,n.precision,1),s=r.times(.5);if((e=e.abs()).lte(s))return o=t?4:1,e;if((i=e.divToInt(r)).isZero())o=t?3:2;else{if((e=e.minus(i.times(r))).lte(s))return o=$(i)?t?2:3:t?4:1,e;o=$(i)?t?1:4:t?3:2}return e.minus(r).abs()}function nn(n,e,i,t){var r,o,u,a,l,d,h,p,g,m=n.constructor,w=void 0!==i;if(w?(D(i,1,c),void 0===t?t=m.rounding:D(t,0,8)):(i=m.precision,t=m.rounding),n.isFinite()){for(w?(r=2,16==e?i=4*i-3:8==e&&(i=3*i-2)):r=e,0<=(u=(h=k(n)).indexOf("."))&&(h=h.replace(".",""),(g=new m(1)).e=h.length-u,g.d=Z(k(g),10,r),g.e=g.d.length),o=l=(p=Z(h,10,r)).length;0==p[--l];)p.pop();if(p[0]){if(u<0?o--:((n=new m(n)).d=p,n.e=o,p=(n=S(n,g,i,t,0,r)).d,o=n.e,d=s),u=p[i],a=r/2,d=d||void 0!==p[i+1],d=t<4?(void 0!==u||d)&&(0===t||t===(n.s<0?3:2)):a<u||u===a&&(4===t||d||6===t&&1&p[i-1]||t===(n.s<0?8:7)),p.length=i,d)for(;++p[--i]>r-1;)p[i]=0,i||(++o,p.unshift(1));for(l=p.length;!p[l-1];--l);for(u=0,h="";u<l;u++)h+=f.charAt(p[u]);if(w){if(1<l)if(16==e||8==e){for(u=16==e?4:3,--l;l%u;l++)h+="0";for(l=(p=Z(h,r,e)).length;!p[l-1];--l);for(u=1,h="1.";u<l;u++)h+=f.charAt(p[u])}else h=h.charAt(0)+"."+h.slice(1);h=h+(o<0?"p":"p+")+o}else if(o<0){for(;++o;)h="0"+h;h="0."+h}else if(++o>l)for(o-=l;o--;)h+="0";else o<l&&(h=h.slice(0,o)+"."+h.slice(o))}else h=w?"0p+0":"0";h=(16==e?"0x":2==e?"0b":8==e?"0o":"")+h}else h=G(n);return n.s<0?"-"+h:h}function en(n,e){if(n.length>e)return n.length=e,!0}function tn(n){return new this(n).abs()}function rn(n){return new this(n).acos()}function sn(n){return new this(n).acosh()}function on(n,e){return new this(n).plus(e)}function un(n){return new this(n).asin()}function cn(n){return new this(n).asinh()}function fn(n){return new this(n).atan()}function an(n){return new this(n).atanh()}function ln(n,e){n=new this(n),e=new this(e);var i,t=this.precision,r=this.rounding,s=t+4;return n.s&&e.s?n.d||e.d?!e.d||n.isZero()?(i=e.s<0?C(this,t,r):new this(0)).s=n.s:!n.d||e.isZero()?(i=C(this,s,1).times(.5)).s=n.s:i=e.s<0?(this.precision=s,this.rounding=1,i=this.atan(S(n,e,s,1)),e=C(this,s,1),this.precision=t,this.rounding=r,n.s<0?i.minus(e):i.plus(e)):this.atan(S(n,e,s,1)):(i=C(this,s,1).times(0<e.s?.25:.75)).s=n.s:i=new this(NaN),i}function dn(n){return new this(n).cbrt()}function hn(n){return U(n=new this(n),n.e+1,2)}function pn(n){if(!n||"object"!=typeof n)throw Error(p+"Object expected");var e,i,t,r=!0===n.defaults,s=["precision",1,c,"rounding",0,8,"toExpNeg",-u,0,"toExpPos",0,u,"maxE",0,u,"minE",-u,0,"modulo",0,9];for(e=0;e<s.length;e+=3)if(i=s[e],r&&(this[i]=d[i]),void 0!==(t=n[i])){if(!(v(t)===t&&s[e+1]<=t&&t<=s[e+2]))throw Error(g+i+": "+t);this[i]=t}if(i="crypto",r&&(this[i]=d[i]),void 0!==(t=n[i])){if(!0!==t&&!1!==t&&0!==t&&1!==t)throw Error(g+i+": "+t);if(t){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw Error(w);this[i]=!0}else this[i]=!1}return this}function gn(n){return new this(n).cos()}function mn(n){return new this(n).cosh()}function wn(n,e){return new this(n).div(e)}function vn(n){return new this(n).exp()}function Nn(n){return U(n=new this(n),n.e+1,3)}function bn(){var n,e,i=new this(0);for(h=!1,n=0;n<arguments.length;)if((e=new this(arguments[n++])).d)i.d&&(i=i.plus(e.times(e)));else{if(e.s)return h=!0,new this(1/0);i=e}return h=!0,i.sqrt()}function xn(n){return n instanceof r||n&&"[object Decimal]"===n.name||!1}function En(n){return new this(n).ln()}function yn(n,e){return new this(n).log(e)}function Mn(n){return new this(n).log(2)}function On(n){return new this(n).log(10)}function qn(){return W(this,arguments,"lt")}function Fn(){return W(this,arguments,"gt")}function Pn(n,e){return new this(n).mod(e)}function An(n,e){return new this(n).mul(e)}function Dn(n,e){return new this(n).pow(e)}function _n(n){var e,i,t,r,s=0,o=new this(1),u=[];if(void 0===n?n=this.precision:D(n,1,c),t=Math.ceil(n/O),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(t));s<t;)429e7<=(r=e[s])?e[s]=crypto.getRandomValues(new Uint32Array(1))[0]:u[s++]=r%1e7;else{if(!crypto.randomBytes)throw Error(w);for(e=crypto.randomBytes(t*=4);s<t;)214e7<=(r=e[s]+(e[s+1]<<8)+(e[s+2]<<16)+((127&e[s+3])<<24))?crypto.randomBytes(4).copy(e,s):(u.push(r%1e7),s+=4);s=t/4}else for(;s<t;)u[s++]=1e7*Math.random()|0;for(t=u[--s],n%=O,t&&n&&(r=N(10,O-n),u[s]=(t/r|0)*r);0===u[s];s--)u.pop();if(s<0)u=[i=0];else{for(i=-1;0===u[0];i-=O)u.shift();for(t=1,r=u[0];10<=r;r/=10)t++;t<O&&(i-=O-t)}return o.e=i,o.d=u,o}function Zn(n){return U(n=new this(n),n.e+1,this.rounding)}function Sn(n){return(n=new this(n)).d?n.d[0]?n.s:0*n.s:n.s||NaN}function Rn(n){return new this(n).sin()}function Ln(n){return new this(n).sinh()}function Tn(n){return new this(n).sqrt()}function Un(n,e){return new this(n).sub(e)}function kn(n){return new this(n).tan()}function jn(n){return new this(n).tanh()}function In(n){return U(n=new this(n),n.e+1,1)}(r=function n(e){var i,t,s;function o(n){var e,i,t,s=this;if(!(s instanceof o))return new o(n);if(n instanceof(s.constructor=o))return s.s=n.s,void(h?!n.d||n.e>o.maxE?(s.e=NaN,s.d=null):n.e<o.minE?(s.e=0,s.d=[0]):(s.e=n.e,s.d=n.d.slice()):(s.e=n.e,s.d=n.d?n.d.slice():n.d));if("number"==(t=typeof n)){if(0===n)return s.s=1/n<0?-1:1,s.e=0,void(s.d=[0]);if(s.s=n<0?(n=-n,-1):1,n===~~n&&n<1e7){for(e=0,i=n;10<=i;i/=10)e++;return void(s.d=h?o.maxE<e?(s.e=NaN,null):e<o.minE?[s.e=0]:(s.e=e,[n]):(s.e=e,[n]))}return 0*n!=0?(n||(s.s=NaN),s.e=NaN,void(s.d=null)):K(s,n.toString())}if("string"!=t)throw Error(g+n);return 45===(i=n.charCodeAt(0))?(n=n.slice(1),s.s=-1):(43===i&&(n=n.slice(1)),s.s=1),y.test(n)?K(s,n):function(n,e){var i,t,s,o,u,c,f,a,l;if("Infinity"===e||"NaN"===e)return+e||(n.s=NaN),n.e=NaN,n.d=null,n;if(x.test(e))i=16,e=e.toLowerCase();else if(b.test(e))i=2;else{if(!E.test(e))throw Error(g+e);i=8}for(u=0<=(o=(e=0<(o=e.search(/p/i))?(f=+e.slice(o+1),e.substring(2,o)):e.slice(2)).indexOf(".")),t=n.constructor,u&&(o=(c=(e=e.replace(".","")).length)-o,s=V(t,new t(i),o,2*o)),o=l=(a=Z(e,i,M)).length-1;0===a[o];--o)a.pop();return o<0?new t(0*n.s):(n.e=j(a,l),n.d=a,h=!1,u&&(n=S(n,s,4*c)),f&&(n=n.times(Math.abs(f)<54?N(2,f):r.pow(2,f))),h=!0,n)}(s,n)}if(o.prototype=P,o.ROUND_UP=0,o.ROUND_DOWN=1,o.ROUND_CEIL=2,o.ROUND_FLOOR=3,o.ROUND_HALF_UP=4,o.ROUND_HALF_DOWN=5,o.ROUND_HALF_EVEN=6,o.ROUND_HALF_CEIL=7,o.ROUND_HALF_FLOOR=8,o.EUCLID=9,o.config=o.set=pn,o.clone=n,o.isDecimal=xn,o.abs=tn,o.acos=rn,o.acosh=sn,o.add=on,o.asin=un,o.asinh=cn,o.atan=fn,o.atanh=an,o.atan2=ln,o.cbrt=dn,o.ceil=hn,o.cos=gn,o.cosh=mn,o.div=wn,o.exp=vn,o.floor=Nn,o.hypot=bn,o.ln=En,o.log=yn,o.log10=On,o.log2=Mn,o.max=qn,o.min=Fn,o.mod=Pn,o.mul=An,o.pow=Dn,o.random=_n,o.round=Zn,o.sign=Sn,o.sin=Rn,o.sinh=Ln,o.sqrt=Tn,o.sub=Un,o.tan=kn,o.tanh=jn,o.trunc=In,void 0===e&&(e={}),e&&!0!==e.defaults)for(s=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],i=0;i<s.length;)e.hasOwnProperty(t=s[i++])||(e[t]=this[t]);return o.config(e),o}(d)).default=r.Decimal=r,a=new r(a),l=new r(l),n.exports=r,void 0===(t=function(){return r}.call(e,i,e,n))||(n.exports=t)}()},function(n,e,i){"use strict";i.r(e);var t=i(0),r=i.n(t);addEventListener("message",function(n){var e;e=n.data[0];var i=n.data[1],t=n.data[2];r.a.precision=e+1;for(var s=new r.a(0),o=new r.a(1),u=new r.a(0),c=1,f=new r.a(1),a=0,l=t;a<l;a++)c*=-1,o=r.a.mul(o,1024),u=u.plus(1);for(;-1!=r.a.abs(f).cmp(new r.a("1e-"+(1+e)))&&(f=r.a.mul(1,c).mul(r.a.div(-Math.pow(2,5),r.a.mul(4,u).plus(1)).plus(r.a.div(-1,r.a.mul(4,u).plus(3))).plus(r.a.div(Math.pow(2,8),r.a.mul(10,u).plus(1))).plus(r.a.div(-Math.pow(2,6),r.a.mul(10,u).plus(3))).plus(r.a.div(-Math.pow(2,2),r.a.mul(10,u).plus(5))).plus(r.a.div(-Math.pow(2,2),r.a.mul(10,u).plus(7))).plus(r.a.div(1,r.a.mul(10,u).plus(9)))).div(r.a.mul(Math.pow(2,6),o)),s=r.a.add(s,f),-1!=r.a.abs(f).cmp(new r.a("1e-"+(1+e))));)for(var d=0,h=i;d<h;d++)c*=-1,o=r.a.mul(o,1024),u=u.plus(1);postMessage([""+s,""+u.plus(1)])})}]);