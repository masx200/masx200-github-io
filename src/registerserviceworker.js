"use strict";
(() => {
  /* 注册google的workbox的serviceworker */

  try {
    "serviceWorker" in navigator &&
      window.addEventListener("load", function() {
        navigator.serviceWorker.register("service-worker.js");
        //   .catch(console.error);
      });
  } catch (error) {
    /*  */
  }
})();
