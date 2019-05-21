(() => {
  var windowloadhandler = () => {
    // var lasthref;
    window.lasthref = location.href;
    替换a链接();
    document.addEventListener("click", 替换a链接);
    //   document.addEventListener("scroll", 替换a链接);
    function 替换a链接() {
      window.lasthref = location.href;
      var alinkarr = Array.from(document.getElementsByTagName("a"));
      //   console.log(alinkarr);
      alinkarr.forEach(e => {
        if (
          e.href != "javascript:;" &&
          location.origin === e.origin &&
          e.pathname !== location.pathname
        ) {
          e.dataset.href = e.href;
          console.log("替换a链接", e);
          e.href = "javascript:;";
          e.onclick = () => {
            window.lasthref = location.href;
            动态加载网页内容不刷新(e.dataset.href);
          };
        }

        /*  e.onclick = () => {
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
            }; */
      });
    }
    //   document.onclick();
    var onpopstatehandler = () => {
      console.log("onpopstate,执行,动态加载网页内容不刷新");

      动态加载网页内容不刷新();
      替换a链接();
    };
    window.addEventListener("popstate", onpopstatehandler);
    var script总数量 = 0;
    var script完成数量 = 0;
    function script加载完成(urlortext) {
      替换a链接();
      script完成数量++;
      console.log(script完成数量, script总数量);
      console.log("script加载完成", urlortext);
      if (script完成数量 === script总数量) {
        console.log("触发window的load事件");
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
      script.onload = () => {
        callback(fileurl);
      };
      // script.async = true;
      script.onerror = () => {
        console.log("加载失败" + fileurl);
      };
      document.getElementsByTagName("head")[0].appendChild(script);

      console.log("添加script到head", script);
    }
    function loadscripttext(text) {
      var script = document.createElement("script");
      script.onerror = () => {
        console.log("加载失败" + fileurl);
      };
      /*   script.onload = () => {
            callback(text);
          }; */
      /* 用文本创建的script不会执行onload事件 */
      script.innerHTML = text;
      script.type = "text/javascript";
      script.dataset.loadid = guid();
      console.log("添加script到head", script);
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
      return "xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
        t
      ) {
        var e = (16 * Math.random()) | 0;
        return ("x" == t ? e : (3 & e) | 8).toString(16);
      });
    }
    function fetchhandler(t) {
      var loadid = guid();
      console.log(document.charset);
      var sr = t;
      console.log(sr);
      var myhtmldata = new DOMParser().parseFromString(sr, "text/html");
      console.log(myhtmldata);
      document.title = myhtmldata.title;
      // window.myhtmldata = myhtmldata;
      document.getElementsByTagName(
        "body"
      )[0].innerHTML = myhtmldata.getElementsByTagName("body")[0].innerHTML;
      /*  Array.from(document.querySelectorAll("link")).forEach(e => {
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
      }); */
      Array.from(myhtmldata.querySelectorAll("link[rel='stylesheet']")).forEach(
        e => {
          e.dataset.loadid = loadid;
          e.onerror = () => {
            console.log("加载失败" + e.href);
          };
          e.type = "text/css";
          e.href = e.href;
          console.log("添加css元素到head", e);
          document.getElementsByTagName("head")[0].appendChild(e);
        }
      );

      Array.from(myhtmldata.querySelectorAll("link")).forEach(e => {
        e.dataset.loadid = loadid;

        e.href = e.href;
        console.log("添加元素到head", e);
        document.getElementsByTagName("head")[0].appendChild(e);
      });

      Array.from(myhtmldata.querySelectorAll("style")).forEach(e => {
        e.type = "text/css";
        e.dataset.loadid = loadid;
        console.log("添加css元素到head", e);
        document.getElementsByTagName("head")[0].appendChild(e);
      });

      Array.from(myhtmldata.querySelectorAll("meta")).forEach(e => {
        e.dataset.loadid = loadid;
        console.log("添加元素到head", e);
        document.getElementsByTagName("head")[0].appendChild(e);
      });

      /*    document.getElementsByTagName(
        "body"
      )[0].innerHTML = myhtmldata.getElementsByTagName("body")[0].innerHTML; */
      script完成数量 = 0;
      script总数量 = Array.from(myhtmldata.querySelectorAll("script")).length;
      Array.from(myhtmldata.querySelectorAll("script")).forEach(e => {
        //   console.log("e.type",e.type)
        if (e.src) {
          e.src = e.src;
          if (e.type == "text/javascript" || "" == e.type) {
            loadscript(e.src, script加载完成);
          } else {
            console.log("添加元素到head",e);
            //   script加载完成();
            script完成数量++;
            document.getElementsByTagName("head")[0].appendChild(e);
          }
        } else {
          // console.log("script-innertext", e.innerText.replace(/\n/g,";"));
          /* if (""==e.type) {

            e.type = "text/javascript";
          } */
          e.onerror = () => {
            console.log("加载失败" + e.src);
          };
          e.dataset.loadid = loadid;
          // e.async = true;
          if (e.type == "text/javascript" || "" == e.type) {
            e.type = "text/javascript";
            loadscripttext(e.innerHTML);
            //   script加载完成();
            script完成数量++;
            /*  var script = document.createElement("script");
                script.onload = script加载完成;
                script.innerHTML = e.innerHTML;
                script.type = e.type;
                script.dataset.loadid = e.dataset.loadid;
                console.log(script);
                document.getElementsByTagName("head")[0].appendChild(script); */
          } else {
            console.log("添加元素到head",e);
            //   script加载完成();
            script完成数量++;
            document.getElementsByTagName("head")[0].appendChild(e);
          }
        }
      });
      /*  Array.from(
        document.getElementsByTagName("body")[0].querySelectorAll("script")
      ).forEach(e => {
        e.parentNode.removeChild(e);
      }); */

      Array.from(document.querySelectorAll("link")).forEach(e => {
        if (!e.dataset.loadid) {
          e.parentNode.removeChild(e);
          console.log("删除旧元素", e);
        }
      });
      Array.from(document.querySelectorAll("style")).forEach(e => {
        if (!e.dataset.loadid) {
          e.parentNode.removeChild(e);
          console.log("删除旧元素", e);
        }
      });
      Array.from(document.querySelectorAll("meta")).forEach(e => {
        if (!e.dataset.loadid) {
          e.parentNode.removeChild(e);
          console.log("删除旧元素", e);
        }
      });
      Array.from(document.querySelectorAll("script")).forEach(e => {
        if (!e.dataset.loadid) {
          e.parentNode.removeChild(e);
          console.log("删除旧元素", e);
        }
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
    }

    function 动态加载网页内容不刷新(url) {
      if (typeof url === "undefined") {
        url = location.href;
      } else url = new URL(url);

      if (
        location.origin === url.origin &&
        url.pathname !== location.pathname
      ) {
        console.log("动态加载网页内容不刷新执行" + url);
        // var urlorighin = new URL(url).origin;
        //   window.lasthref = location.href;
        history.pushState(undefined, undefined, url);
        var nowurl = location.href;
        console.log("替换当前的网址" + window.lasthref, "改成", nowurl);
        try {
          fetch(url)
            .then(r => {
              console.log(r);
              return r.text();
            })
            .then(fetchhandler);
        } catch (error) {
          console.error(error);
          if (url.protocal === "https:") {
            url.protocal = "http:";
          } else {
            url.protocal = "https:";
          }

          fetch(url)
            .then(r => {
              console.log(r);
              return r.text();
            })
            .then(fetchhandler);
        }
      } else {
        console.log(
          "动态加载网页内容不刷新" + "原网页与现在的网址相同不刷新",
          window.lasthref
        );
      }
    }
  };
  window.addEventListener("load", windowloadhandler);
})();
