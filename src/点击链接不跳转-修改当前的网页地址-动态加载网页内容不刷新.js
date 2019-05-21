window.addEventListener("load", () => {
  // var lasthref;
  document.onclick = () => {
    var alinkarr = Array.from(document.getElementsByTagName("a"));
    //   console.log(alinkarr);
    alinkarr.forEach(e => {
      e.onclick = () => {
        // lasthref=location.href
        console.log(e.href);

        if (location.origin === e.origin) {
          if (e.pathname === location.pathname) {
            if (e.hash !== location.hash) {
              return true;
            } else {
              return false;
            }
          } else {
            history.pushState(undefined, undefined, e.href);
            console.log("执行,history.pushState,成功");
            window.onpopstate();
            return false;
          }

          //   return false;
        } else {
          return true;
        }
      };
    });
  };
  document.onclick();
  window.onpopstate=() => {
    console.log("onpopstate,执行,动态加载网页内容不刷新");

    动态加载网页内容不刷新();
  };
  window.addEventListener(" popstate",  window.onpopstate );
  var script总数量 = 0;
  var script完成数量 = 0;
  function script加载完成() {
    script完成数量++;
    if (script完成数量 === script总数量) {
      window.dispatchEvent(new Event("load"));
    }
    /*  () => {
        setTimeout(() => {
          try {
            window.dispatchEvent(new Event("load"));
          } catch (error) {
            console.log(error);
          }
        }, 300);
      };  */
  }
  function loadscript(fileurl, callback = undefined) {
    var script = document.createElement("script");
    script.dataset.loadid = guid();
    script.type = "text/javascript";
    script.src = fileurl;
    script.onload = callback;
    // script.async = true;
    script.onerror = () => {
      console.log("加载失败" + fileurl);
    };
    document.getElementsByTagName("head")[0].appendChild(script);

    console.log(script);
  }
  function loadscripttext(text, callback = undefined) {
    var script = document.createElement("script");
    script.onload = callback;
    script.innerHTML = text;
    script.type = "text/javascript";
    script.dataset.loadid = guid();
    console.log(script);
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  function loadstyle(fileurl, callback = undefined) {
    var script = document.createElement("link");
    script.dataset.loadid = guid();
    script.rel = "stylesheet";
    script.href = fileurl;
    script.onload = callback;
    script.type = "text/css";

    document.getElementsByTagName("head")[0].appendChild(script);

    console.log(script);
  }
  function guid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
      var e = (16 * Math.random()) | 0;
      return ("x" == t ? e : (3 & e) | 8).toString(16);
    });
  }
  function 动态加载网页内容不刷新(url) {
    if (typeof url === "undefined") {
      url = location.href;
    }

    try {
      if (url != location.href) {
        var urlorighin = new URL(url).origin;
        history.pushState(undefined, undefined, url);
      }
    } catch (error) {
      console.error(error);
    }

    var loadid = guid();
    fetch(url)
      .then(r => {
        console.log(r);
        return r.text();
      })
      .then(t => {
          console.log(document.charset)
        var sr = t.replace(/\n/g, "");
        console.log(sr);
        var myhtmldata = new DOMParser().parseFromString(sr, "text/html");
        console.log(myhtmldata);
        document.title = myhtmldata.title;
        // window.myhtmldata = myhtmldata;
        Array.from(document.querySelectorAll("link")).forEach(e => {
          e.parentNode.removeChild(e);
        });
        Array.from(document.querySelectorAll("style")).forEach(e => {
          e.parentNode.removeChild(e);
        });
        Array.from(document.querySelectorAll("meta")).forEach(e => {
          e.parentNode.removeChild(e);
        });
        Array.from(document.querySelectorAll("script")).forEach(e => {
          e.parentNode.removeChild(e);
        });
        Array.from(
          myhtmldata.querySelectorAll("link[rel='stylesheet']")
        ).forEach(e => {
          e.dataset.loadid = loadid;
          e.onerror = () => {
            console.log("加载失败" + e.href);
          };
          e.type = "text/css";
          e.href = e.href;
          console.log(e);
          document.getElementsByTagName("head")[0].appendChild(e);
        });

        Array.from(myhtmldata.querySelectorAll("link")).forEach(e => {
          e.dataset.loadid = loadid;

          e.href = e.href;
          console.log(e);
          document.getElementsByTagName("head")[0].appendChild(e);
        });

        Array.from(myhtmldata.querySelectorAll("style")).forEach(e => {
          e.type = "text/css";
          e.dataset.loadid = loadid;
          console.log(e);
          document.getElementsByTagName("head")[0].appendChild(e);
        });

        Array.from(myhtmldata.querySelectorAll("meta")).forEach(e => {
          e.dataset.loadid = loadid;
          console.log(e);
          document.getElementsByTagName("head")[0].appendChild(e);
        });

        document.getElementsByTagName(
          "body"
        )[0].innerHTML = myhtmldata.getElementsByTagName("body")[0].innerHTML;
        script完成数量 = 0;
        script总数量 = Array.from(myhtmldata.querySelectorAll("script")).length;
        Array.from(myhtmldata.querySelectorAll("script")).forEach(e => {
          if (e.src) {
            e.src = e.src;
            loadscript(e.src, script加载完成);
          } else {
            if (!e.type) {
              e.type = "text/javascript";
            }
            e.onerror = () => {
              console.log("加载失败" + e.src);
            };
            e.dataset.loadid = loadid;
            // e.async = true;
            if (e.type === "text/javascript") {
              loadscripttext(e.innerHTML, script加载完成);
              /*  var script = document.createElement("script");
              script.onload = script加载完成;
              script.innerHTML = e.innerHTML;
              script.type = e.type;
              script.dataset.loadid = e.dataset.loadid;
              console.log(script);
              document.getElementsByTagName("head")[0].appendChild(script); */
            } else {
              console.log(e);
              script加载完成();
              document.getElementsByTagName("head")[0].appendChild(e);
            }
          }
        });
        Array.from(
          document.getElementsByTagName("body")[0].querySelectorAll("script")
        ).forEach(e => {
          e.parentNode.removeChild(e);
        });
        // document.charset="UTF-8"
        /*  Array.from(myhtmldata.querySelectorAll("script")).forEach(e => {
          if (e.src) {
            e.src = e.src;
            loadscript(e.src);
          } else {
            if (!e.type) {
              e.type = "text/javascript";
            }
            e.onerror = () => {
              console.log("加载失败" + e.src);
            };
            e.dataset.loadid = loadid;
            e.async = true;
            //   console.log(e.src)
            document.getElementsByTagName("head")[0].appendChild(e);
          }
        }); */
        /* setTimeout(() => {
          try {
            window.dispatchEvent(new Event("load"));
          } catch (error) {
            console.log(error);
          }
        }, 300); */
      });
  }
});
