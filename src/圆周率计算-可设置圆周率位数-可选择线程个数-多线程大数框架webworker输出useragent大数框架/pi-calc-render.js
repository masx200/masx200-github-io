import extendmytextarea from "./extendmytextarea.js";
import mypidashujisuanbigint from "./mypidashujisuan-bigint.js";
import mypidashujisuandecimal from "./mypidashujisuan-decimal.js";
import "../拉伸导航栏与主体部分的顶部距离.js";

$(window).one("load", () => {
  extendmytextarea();
  mypidashujisuandecimal();
  mypidashujisuanbigint();
});
