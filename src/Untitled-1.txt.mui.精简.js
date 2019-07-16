export default function slct(selector) {
  "use strict";
  return new (class extends Array {
    constructor(ele) {
      "use strict";
      super();

      //   this.push = Array.prototype.push;
      Object.defineProperty(this, Symbol.toStringTag, { value: "ArrayLike" });
      this.length = 0;
      if (
        /* HTML元素 */
        ele instanceof HTMLElement
      ) {
        this.push(ele);
        // this[0] = ele;
        // this.length = 1;
      } else if (
        /* 选择器 */
        typeof ele === "string"
      ) {
        try {
          let elementlist = document.querySelectorAll(ele);
          //   this.length = elementlist.length;
          for (let i = 0; i < elementlist.length; i++) {
            this.push(elementlist[i]);
            // this[i] = elementlist[i];
          }
        } catch (error) {
          this.length = 0;
        }
      } else if (
        /* arraylike */
        typeof ele === "object" &&
        !!ele &&
        "length" in ele &&
        ele.length
      ) {
        try {
          let elementlist = ele;

          let length = elementlist.length;
          for (let i = 0; i < length; i++) {
            let element = elementlist[i];
            if (element instanceof HTMLElement) {
              //   this[i] = element;
              this.push(element);
            } else {
              //   this[i] = undefined;
            }
          }
        } catch (error) {
          this.length = 0;
        }
      } else {
        this.length = 0;
        //   throw new TypeError("参数为选择器或者HTMLElement");
      }
    }

    button(state) {
      function sethtml(html, element) {
        element.innerHTML = html;
      }
      //   function button(element, options) {}
      function setstate(state, element, options) {
        if (!element.state) {
          element.resetHTML = element.innerHTML;
          element.state = "reset";
        }
        if (element.state === state) {
          return false;
        }
        element.state = state;
        // var resetHTML;
        // if (state === STATE_LOADING) {

        // }
        // var options = { ...defaultOptions, ...options };
        if (!options.loadingText) {
          options.loadingText = defaultOptions.loadingText;
        }
        if (!options.loadingIcon) {
          options.loadingIcon = defaultOptions.loadingIcon;
        }
        if (!options.loadingIconPosition) {
          options.loadingIconPosition = defaultOptions.loadingIconPosition;
        }
        if (state === STATE_RESET) {
          element.disabled = false;
          element.classList.remove(CLASS_DISABLED);
          sethtml(element.resetHTML);
        } else if (state === STATE_LOADING) {
          element.disabled = true;
          element.classList.add(CLASS_DISABLED);
          let html = "<span>" + options.loadingText + "</span>";
          if (options.loadingIconPosition === "right") {
            html += '&nbsp;<span class="' + options.loadingIcon + '"></span>';
          } else {
            html =
              '<span class="' + options.loadingIcon + '"></span>&nbsp;' + html;
          }
          sethtml(html);
        }
      }
      var CLASS_DISABLED = "mui-disabled";
      var defaultOptions = {
        loadingText: "Loading...",
        loadingIcon: "mui-spinner" + " " + "mui-spinner-white",
        loadingIconPosition: "left"
      };
      var STATE_RESET = "reset";
      var STATE_LOADING = "loading";
      if (state === STATE_LOADING || state === STATE_RESET) {
        // console.log(state);

        this.forEach(e => {
          var loadingText = e.getAttribute("data-loading-text");
          var loadingIcon = e.getAttribute("data-loading-icon");
          var loadingIconPosition = e.getAttribute(
            "data-loading-icon-position"
          );

          setstate(state, e, { loadingText, loadingIcon, loadingIconPosition });
          //   button(e, );
        });
      }
    }
    // push = Array.prototype.push;
  })(selector);
}
