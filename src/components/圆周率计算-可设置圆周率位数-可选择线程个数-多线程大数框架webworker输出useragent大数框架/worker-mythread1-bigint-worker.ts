import { bigintworkersetup } from "@masx200/pi-calculation-multithreading";

bigintworkersetup();
// "use strict";
// import bigInt from "big-integer/BigInteger.js";

// addEventListener("message", function (event) {
//     bigInt.abs = (n) => bigInt(n).abs();

//     bigInt.mul = (n, m) => bigInt(n).multiply(m);

//     bigInt.div = (n, m) => bigInt(n).divide(m);
//     bigInt.add = (n, m) => bigInt(n).add(m);
//     //MAX_INT
//     //9007199254740992
//     bigInt().__proto__.cmp = bigInt().__proto__.compare;
//     bigInt().__proto__.div = bigInt().__proto__.divide;
//     bigInt().__proto__.mul = bigInt().__proto__.multiply;

//     bigInt("90071992547409920").__proto__.cmp =
//         bigInt("90071992547409920").__proto__.compare;
//     bigInt("90071992547409920").__proto__.div =
//         bigInt("90071992547409920").__proto__.divide;
//     bigInt("90071992547409920").__proto__.mul =
//         bigInt("90071992547409920").__proto__.multiply;
//     // bigInt.cmp=bigInt.prototype.cmp=(n)=>;
//     var piwei;
//     piwei = event.data[0]; //1000
//     // piwei /= 2;
//     var threadall = event.data[1]; //1
//     var threadid = event.data[2]; //0
//     // console.log(
//     //   "副线程" + (threadid + 1) + "从主线程接收" + "event.data\n",
//     //   ...event.data
//     // );
//     console.log(
//         "副线程" +
//             (threadid + 1) +
//             "从主线程接收" +
//             "event.data\n" +
//             /* 线程中的console.log不能输出对象,只能输出文本 */
//             JSON.stringify(event.data)
//     );
//     //   console.log(...event.data);

//     // Decimal.precision = piwei + 1;
//     var p = new bigInt(0);
//     var a = new bigInt(1);
//     // var h = 1;
//     var h = new bigInt("1e" + piwei);
//     // console.log("h",h.toString())
//     var x = new bigInt(0);
//     var fu = 1;
//     var t = new bigInt(1);
//     for (var i = 0, len = threadid; i < len; i++) {
//         fu = -1 * fu;
//         a = bigInt.mul(a, 1024);
//         x = x.plus(1);
//     }
//     while (bigInt.abs(t).cmp(new bigInt(0)) >= 0) {
//         // console.log("t",t.toString())
//         // console.log("a",a.toString())
//         // console.log("x",x.toString())
//         // console.log("p",p.toString())
//         /**除法小于零的结果直接变成0,所以分子要特别大才能精确除法 */
//         t = bigInt
//             .mul(1, fu)
//             .mul(
//                 bigInt
//                     .div(h.mul(-(2 ** 5)), bigInt.mul(4, x).plus(1))
//                     .plus(bigInt.div(h.mul(-1), bigInt.mul(4, x).plus(3)))
//                     .plus(bigInt.div(h.mul(2 ** 8), bigInt.mul(10, x).plus(1)))
//                     .plus(
//                         bigInt.div(h.mul(-(2 ** 6)), bigInt.mul(10, x).plus(3))
//                     )
//                     .plus(
//                         bigInt.div(h.mul(-(2 ** 2)), bigInt.mul(10, x).plus(5))
//                     )
//                     .plus(
//                         bigInt.div(h.mul(-(2 ** 2)), bigInt.mul(10, x).plus(7))
//                     )
//                     .plus(bigInt.div(h.mul(1), bigInt.mul(10, x).plus(9)))
//             )
//             .div(bigInt.mul(2 ** 6, a));

//         p = bigInt.add(p, t);
//         if (bigInt.abs(t).cmp(new bigInt(0)) <= 0) break;

//         for (let i = 0, len = threadall; i < len; i++) {
//             fu = -1 * fu;
//             a = bigInt.mul(a, 1024);
//             x = x.plus(1);
//         }
//         // console.log(["t", t.toString()].join(','))
//     }

//     // console.log("p", p.toString())
//     postMessage([p.toString(), "" + x.plus(1)]);
// });
// // }
// // })();
