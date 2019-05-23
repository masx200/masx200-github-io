(global => {
  /* 注意不能跨域 */
  /* 注意:对于使用了document.write的网站, 加载会出错,因为脚本都是异步加载的,网页内容会被覆盖*/

  global.点击链接不跳转修改当前的网页地址动态加载网页内容不刷新 = windowloadhandler;
  window.addEventListener("load", windowloadhandler);
  function windowloadhandler() {
    var loadid;
    if (!importScripts) {
      var importScripts = (function(globalEval) {
        var xhr = new XMLHttpRequest();
        return function importScripts() {
          var args = Array.prototype.slice.call(arguments),
            len = args.length,
            i = 0,
            meta,
            data,
            content;
          for (; i < len; i++) {
            if (args[i].substr(0, 5).toLowerCase() === "data:") {
              data = args[i];
              content = data.indexOf(",");
              meta = data.substr(5, content).toLowerCase();
              data = decodeURIComponent(data.substr(content + 1));
              if (/;\s*base64\s*[;,]/.test(meta)) {
                data = atob(data);
              }
              if (/;\s*charset=[uU][tT][fF]-?8\s*[;,]/.test(meta)) {
                data = decodeURIComponent(escape(data));
              }
            } else {
              xhr.open("GET", args[i], false);
              xhr.send(null);
              data = xhr.responseText;
            }
            globalEval(data);
          }
        };
      })(eval);
    }

    function importjquery() {
      if ("function" == typeof jQuery) {
        console.log("当前的jquery版本号为" + jQuery.fn.jquery);
      }
      importScripts("https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js");
      console.log("加载jquery版本号3.4.1");
    }
    if ("function" !== typeof jQuery) {
      importjquery();
    } else {
      /* 判断jquery版本号 */
      if (jQuery.fn.jquery[0] < 3) {
        importjquery();
      }
    }
    // Object.freeze(jQuery);
    /* jQuery可能被覆盖,所以改名 */
    //改名失败
    // window.jQuery341 = jQuery;
    document.write = t => {
      if (jQuery.fn.jquery[0] < 3) {
        importjquery();
      }
      console.warn(
        "document.write已被禁用，" +
          "把document.write中的内容生成dom元素放入body之中" +
          "要写入的内容为：" +
          t
      );
      // var writeelement = document.createElement("div");
      // writeelement.innerHTML = t;
      // document.getElementsByTagName("head")[0].appendChild(writeelement);
      var newelemnet = jQuery(t).attr("data-loadid", loadid);
      jQuery("body").append(newelemnet);
      console.log("添加元素到body ");
      for (var i of newelemnet) {
        console.log(i.outerHTML);
      }
      // console.log("把document.write中的内容生成dom元素放入head之中");
    };
    /* 禁用 document.write*/

    // document.charset = "UTF-8";/* 只读属性 */
    window.removeEventListener("load", windowloadhandler);

    var htmldataboject = new Object();
    Array(...document.querySelectorAll("script")).forEach(e => {
      if (e.src !== "") {
        e.src = e.src;
      }
    });
    document.firstElementChild.dataset.search = location.search;
    document.firstElementChild.dataset.href = location.href;
    document.firstElementChild.dataset.pathname = location.pathname;
    console.log(
      "当前页面的document的href为" + document.firstElementChild.dataset.href
    );
    console.log(
      "当前页面的document的pathname为" +
        document.firstElementChild.dataset.pathname
    );
    // var lasthref;
    //  document.firstElementChild.dataset.href = location.href;
    替换a链接();
    document.addEventListener("click", 替换a链接);
    window.addEventListener("hashchange", 替换a链接);
    document.addEventListener("scroll", 替换a链接);
    //   document.addEventListener("scroll", 替换a链接);
    function 替换a链接() {
      document.firstElementChild.dataset.search = location.search;
      document.firstElementChild.dataset.href = location.href;
      document.firstElementChild.dataset.pathname = location.pathname;

      /* 把网页中的所有iframe中的a链接也进行替换 */
      var alinkarr = Array.from(document.getElementsByTagName("a"));
      //   console.log(alinkarr);
      function 替换所有a链接的arrayhandler(e) {
        /* 尝试把http和https都替换,因为协议不同导致origin不同 */
        // e.protocol = location.protocol;
        /* 使用hostname代替origin判断 */
        e.href = e.href;
        if (e.protocol === "http:" || e.protocol === "https:") {
          /* 如果search不同也是不同的页面,比如说论坛 */
          if (e.href != "javascript:;" && location.hostname === e.hostname) {
            if (
              e.pathname !== location.pathname ||
              e.search !== location.search
            ) {
              e.dataset.href = e.href;

              e.href = "javascript:;";
              console.log("替换a链接", e.outerHTML);
              e.onclick = () => {
                /*   document.firstElementChild.dataset.href = location.href;
                      document.firstElementChild.dataset.pathname = location.pathname; */
                var url = new URL(e.dataset.href);
                /* 替换协议与当前网页相同的协议 */
                url.protocol = location.protocol;
                动态加载网页内容不刷新(url);
              };
            }
          }
        }
      }
      alinkarr.forEach(替换所有a链接的arrayhandler);

      var docuiframes = Array(...document.getElementsByTagName("iframe"));
      docuiframes.forEach(e => {
        if (e.contentDocument) {
          var iframealinkarr = Array(
            ...e.contentDocument.getElementsByTagName("a")
          );
          iframealinkarr.forEach(替换所有a链接的arrayhandler);
        }
      });
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
    }
    //   document.onclick();
    function onpopstatehandler() {
      console.log("事件onpopstate,执行,");
      //    document.firstElementChild.dataset.href = document.firstElementChild.dataset.href;
      console.log(
        "当前的地址栏路径为" + location.pathname,
        "当前的网页document路径为" + document.firstElementChild.dataset.pathname
      );
      if (document.firstElementChild.dataset.pathname !== location.pathname) {
        console.log("动态加载网页内容不刷新开始执行");
        动态加载网页内容不刷新();
      }

      替换a链接();
    }
    window.addEventListener("popstate", onpopstatehandler);
    var script总数量 = 0;
    var script完成数量 = 0;
    function script加载完成(urlortext) {
      替换a链接();
      script完成数量++;
      console.log(
        "script完成数量" + script完成数量,
        "script总数量" + script总数量
      );
      console.log("script加载完成", urlortext);
      if (script完成数量 === script总数量) {
        console.log("触发window的allscriptload事件");
        scrollTo(0, 0);
        setTimeout(() => {
          console.log("触发window的load事件");
          window.dispatchEvent(new Event("load"));
        }, 50);
        /* 等到所有用src加载的script全部加载完成,再加载文本内容的script */
        window.dispatchEvent(new Event("allscriptload"));
        /* 创建新的事件 */
        setTimeout(() => {
          替换a链接();
        }, 150);

        document.firstElementChild.dataset.href = location.href;
        document.firstElementChild.dataset.search = location.search;
        document.firstElementChild.dataset.pathname = location.pathname;
        console.log(
          "当前页面的document的href为" + document.firstElementChild.dataset.href
        );
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
    function loadscript(fileurl, loadguid = guid(), callback = undefined) {
      var script = document.createElement("script");
      script.dataset.loadid = loadguid;
      script.type = "text/javascript";
      script.src = fileurl;
      script.onload = () => {
        callback(fileurl);
      };
      script.async = true;
      script.onerror = () => {
        console.log("加载失败" + fileurl);
      };
      document.getElementsByTagName("head")[0].appendChild(script);

      console.log("添加script到head", script.outerHTML);
    }
    function loadscripttext(text, loadguid = guid()) {
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
      script.dataset.loadid = loadguid;
      script.async = true;
      console.log("添加script到head", script.outerHTML);
      document.getElementsByTagName("head")[0].appendChild(script);
    }
    /* function loadstyle(fileurl, callback = undefined) {
      var script = document.createElement("link");
      script.dataset.loadid = guid();
      script.rel = "stylesheet";
      script.href = fileurl;
      script.onload = callback;
      script.type = "text/css";

      document.getElementsByTagName("head")[0].appendChild(script);

      console.log(script);
    } */
    function guid() {
      return "xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
        t
      ) {
        var e = (16 * Math.random()) | 0;
        return ("x" == t ? e : (3 & e) | 8).toString(16);
      });
    }
    /*  // function fetchhandler(arraybuffer) {
    //   console.log(arraybuffer);
    //   var sr, myhtmldata;
    //   var loadid = guid();
    //   //   document.charset = "UTF-8";
    //   /* 把源代码的编码转成unicode */
    //   //   var sr = text;
    //   //   console.log(sr);
    //   sr = new TextDecoder().decode(arraybuffer);
    //   myhtmldata = new DOMParser().parseFromString(sr, "text/html");
    //   //   var myhtmldata = new DOMParser().parseFromString(sr, "text/html");
    //   /*myhtmldata.charset得出的结果不正确
    //   使用response.headers.get("Content-Type")
    //   得出"text/html; charset=gbk" */
    //   //   console.log(myhtmldata.charset);
    //   var myhtmlcharset;
    //   if (myhtmlcharset != "UTF-8") {
    //     console.log("编码不是utf-8,转码成" + myhtmldata.charset);
    //     sr = new TextDecoder(myhtmldata.charset).decode(arraybuffer);
    //     myhtmldata = new DOMParser().parseFromString(sr, "text/html");
    //     myhtmldata.charset = "UTF-8";
    //   }
    //   htmldataboject[decodeURI(new URL(myhtmldata.URL).pathname)] = {
    //     url: myhtmldata.URL,
    //     text: sr
    //   };
    //   console.log("加载过的网页的源代码合集", htmldataboject);
    //   console.log(myhtmldata);
    //   document.title = myhtmldata.title;
    //   // window.myhtmldata = myhtmldata;
    //   document.getElementsByTagName(
    //     "body"
    //   )[0].innerHTML = myhtmldata.getElementsByTagName("body")[0].innerHTML;
    //   /*  Array.from(document.querySelectorAll("link")).forEach(e => {
    //     e.parentNode.removeChild(e);
    //   });
    //   Array.from(document.querySelectorAll("style")).forEach(e => {
    //     e.parentNode.removeChild(e);
    //   });
    //   Array.from(document.querySelectorAll("meta")).forEach(e => {
    //     e.parentNode.removeChild(e);
    //   });
    //   Array.from(document.querySelectorAll("script")).forEach(e => {
    //     e.parentNode.removeChild(e);
    //   }); */
    //   Array.from(myhtmldata.querySelectorAll("link[rel='stylesheet']")).forEach(
    //     e => {
    //       e.dataset.loadid = loadid;
    //       e.onerror = () => {
    //         console.log("加载失败" + e.href);
    //       };
    //       e.type = "text/css";
    //       e.href = e.href;
    //       console.log("添加css元素到head", e.outerHTML);
    //       document.getElementsByTagName("head")[0].appendChild(e);
    //     }
    //   );

    //   Array.from(myhtmldata.querySelectorAll("link")).forEach(e => {
    //     e.dataset.loadid = loadid;

    //     e.href = e.href;
    //     console.log("添加元素到head", e.outerHTML);
    //     document.getElementsByTagName("head")[0].appendChild(e);
    //   });

    //   Array.from(myhtmldata.querySelectorAll("style")).forEach(e => {
    //     e.type = "text/css";
    //     e.dataset.loadid = loadid;
    //     console.log("添加css元素到head", e.outerHTML);
    //     document.getElementsByTagName("head")[0].appendChild(e);
    //   });

    //   Array.from(myhtmldata.querySelectorAll("meta")).forEach(e => {
    //     e.dataset.loadid = loadid;
    //     console.log("添加元素到head", e.outerHTML);
    //     document.getElementsByTagName("head")[0].appendChild(e);
    //   });

    //   /*    document.getElementsByTagName(
    //     "body"
    //   )[0].innerHTML = myhtmldata.getElementsByTagName("body")[0].innerHTML; */
    //   script完成数量 = 0;
    //   script总数量 = Array.from(myhtmldata.querySelectorAll("script")).length;
    //   Array.from(myhtmldata.querySelectorAll("script")).forEach(e => {
    //     e.type = e.type.toLowerCase();
    //     if (e.type == "text/javascript" || "" == e.type) {
    //       e.type = "text/javascript";
    //       if (e.src != "") {
    //         e.src = e.src;
    //         /* 但是如果有些脚本不重复加载,可能网页出错 */
    //         /* 不要重复加载javascipt文件,否则可能出问题 */
    //         loadscript(e.src, loadid, script加载完成);
    //       } else {
    //         loadscripttext(e.innerHTML, loadid);
    //         script完成数量++;
    //       }
    //     } else {
    //       /* 不是javascript文件 */
    //       if (e.src != "") {
    //         e.src = e.src;
    //       }
    //       console.log("添加元素到head", e.outerHTML);
    //       e.dataset.loadid = loadid;
    //       script完成数量++;
    //       document.getElementsByTagName("head")[0].appendChild(e);
    //     }

    //     //////////////////////////////
    //     //   console.log("e.type",e.type)
    //     // /* if (e.src) {
    //     //   e.src = e.src;
    //     //   if (e.type == "text/javascript" || "" == e.type) {
    //     //     loadscript(e.src, loadid, script加载完成);
    //     //   } else {
    //     //     console.log("添加元素到head", e);
    //     //     //   script加载完成();
    //     //     script完成数量++;
    //     //     document.getElementsByTagName("head")[0].appendChild(e);
    //     //   }
    //     // } else {
    //     //   // console.log("script-innertext", e.innerText.replace(/\n/g,";"));
    //     //   /* if (""==e.type) {

    //     //     e.type = "text/javascript";
    //     //   } */
    //     //   e.onerror = () => {
    //     //     console.log("加载失败" + e.src);
    //     //   };
    //     //   e.dataset.loadid = loadid;
    //     //   // e.async = true;
    //     //   if (e.type == "text/javascript" || "" == e.type) {
    //     //     e.type = "text/javascript";
    //     //     loadscripttext(e.innerHTML, loadid);
    //     //     //   script加载完成();
    //     //     script完成数量++;
    //     //     /*  var script = document.createElement("script");
    //     //         script.onload = script加载完成;
    //     //         script.innerHTML = e.innerHTML;
    //     //         script.type = e.type;
    //     //         script.dataset.loadid = e.dataset.loadid;
    //     //         console.log(script);
    //     //         document.getElementsByTagName("head")[0].appendChild(script); */
    //     //   } else {
    //     //     console.log("添加元素到head", e);
    //     //     //   script加载完成();
    //     //     script完成数量++;
    //     //     document.getElementsByTagName("head")[0].appendChild(e);
    //     //   }
    //     // } */
    //   });
    //   /*  Array.from(
    //     document.getElementsByTagName("body")[0].querySelectorAll("script")
    //   ).forEach(e => {
    //     e.parentNode.removeChild(e);
    //   }); */

    //   Array(
    //     ...document.querySelectorAll("link"),
    //     ...document.querySelectorAll("style"),
    //     ...document.querySelectorAll("meta"),
    //     ...document.querySelectorAll("script")
    //   ).forEach(e => {
    //     if (loadid != e.dataset.loadid) {
    //       e.parentNode.removeChild(e);
    //       console.log("删除旧元素", e.outerHTML);
    //     }
    //   });
    //   /* Array.from(document.querySelectorAll("style")).forEach(e => {
    //     if (!e.dataset.loadid) {
    //       e.parentNode.removeChild(e);
    //       console.log("删除旧元素", e);
    //     }
    //   });
    //   Array.from(document.querySelectorAll("meta")).forEach(e => {
    //     if (!e.dataset.loadid) {
    //       e.parentNode.removeChild(e);
    //       console.log("删除旧元素", e);
    //     }
    //   });
    //   Array.from(document.querySelectorAll("script")).forEach(e => {
    //     if (!e.dataset.loadid) {
    //       e.parentNode.removeChild(e);
    //       console.log("删除旧元素", e);
    //     }
    //   });*/

    //   // document.charset="UTF-8"
    //   /*  Array.from(myhtmldata.querySelectorAll("script")).forEach(e => {
    //         if (e.src) {
    //           e.src = e.src;
    //           loadscript(e.src);
    //         } else {
    //           if (!e.type) {
    //             e.type = "text/javascript";
    //           }
    //           e.onerror = () => {
    //             console.log("加载失败" + e.src);
    //           };
    //           e.dataset.loadid = loadid;
    //           e.async = true;
    //           //   console.log(e.src)
    //           document.getElementsByTagName("head")[0].appendChild(e);
    //         }
    //       }); */
    //   /* setTimeout(() => {
    //         try {
    //           window.dispatchEvent(new Event("load"));
    //         } catch (error) {
    //           console.log(error);
    //         }
    //       }, 300); */
    // } */

    async function 动态加载网页内容不刷新(url = location.href) {
      //   document.charset = "UTF-8";
      /*  if (typeof url === "undefined") {
        url = location.href;
      } else  */
      url = new URL(url);
      url.protocal = location.protocol;
      if (
        (location.hostname === url.hostname &&
          url.pathname !== location.pathname) ||
        url.pathname !== document.firstElementChild.dataset.pathname
      ) {
        console.log("动态加载网页内容不刷新,执行" + url);
        // var urlorighin = new URL(url).origin;
        //    document.firstElementChild.dataset.href = location.href;
        if (
          url.pathname == location.pathname &&
          url.search == location.search
        ) {
          return;
          //   history.pushState(undefined, undefined, url);
          /* 等到加载成功再pushstate */
        }

        // var nowurl = location.href;
        console.log(
          "替换当前的网址" + document.firstElementChild.dataset.href,
          "改成",
          url.href
        );
        /* 竟然有的网页甚至还要给html标签加style! */
        document.firstElementChild.style = "";
        document.firstElementChild.className = "";
        document.getElementsByTagName("body").style = "";
        /* 返回文本和二进制数组,用来转换编码 */
        try {
          var myhtmlcharset;
          try {
            var dataresponse = await fetch(url);
          } catch (error) {
            console.warn(error);
            /* 有些网站的不同页面是用不同的http协议 */
            if (url.protocal === "https:") {
              url.protocal = "http:";
            } else {
              url.protocal = "https:";
            }
            try {
              var dataresponse = await fetch(url);
            } catch (error) {
              console.warn(error);
              //   history.back();
            }
          }
          /* 如果链接的protocol与当前的网页的protocol不同,则fetch加载失败 */
          console.log(dataresponse);
          try {
            var arraybuffer = await dataresponse.arrayBuffer();
            console.log(arraybuffer);
            /* 等到加载成功再pushstate */
            /* 如果网页的类型正确再pushstate */
          } catch (error) {
            console.warn(error);
            console.log("此链接加载失败，打开新页面");
            //     history.pushState(undefined, undefined, url);

            //    location.reload();
            window.open(url, "_blank");
            return;
            // history.back();
            // history.pushState(
            //   undefined,
            //   undefined,
            //   document.firstElementChild.dataset.href
            // );
          }

          var datacontenttype = dataresponse.headers
            .get("Content-Type")
            .toLowerCase();
          console.log("Content-Type", datacontenttype);

          if (!datacontenttype.includes("text/html")) {
            console.log("此链接不是网页，打开新页面");
            //     history.pushState(undefined, undefined, url);
            window.open(url, "_blank");
            return;
            //    location.reload();
          }
          /* fetch加载成功,而且网页类型正确 */
          history.pushState(undefined, undefined, url);
          if (datacontenttype.includes("charset")) {
            myhtmlcharset = datacontenttype.slice(
              datacontenttype.indexOf("charset") + "charset".length + 1
            );
            if ("utf-8" === myhtmlcharset) {
              console.log("文档的编码是utf-8");
            } else {
              console.log("编码不是utf-8,当前的编码是" + myhtmlcharset);
            }
          } else {
            myhtmlcharset = "utf-8";
            try {
              /* 有的网站不在response中返回charset,又不是utf-8,在document中的meta的charset属性获取 
            <meta charset="gbk" >*/
              myhtmlcharset = Array(
                ...new DOMParser()
                  .parseFromString(
                    new TextDecoder().decode(arraybuffer),
                    "text/html"
                  )
                  .querySelectorAll("meta[charset]")
              )[0]
                .getAttribute("charset")
                .toLowerCase();
            } catch (error) {
              console.warn(error);
            }

            /*
            有的网页没有document中的meta的charset属性
            
            只有meta http-equiv="Content-Type"
            <meta http-equiv="Content-Type" content="text/html; charset=gb2312" >
            */
            try {
              var dataContentType = Array(
                ...new DOMParser()
                  .parseFromString(
                    new TextDecoder().decode(arraybuffer),
                    "text/html"
                  )
                  .querySelectorAll(`meta[http-equiv="Content-Type"]`)
              )[0]
                .getAttribute("content")
                .toLowerCase();
              myhtmlcharset = dataContentType.slice(
                dataContentType.indexOf("charset") + "charset".length + 1
              );
            } catch (error) {
              console.warn(error);
            }

            // console.log("文档的编码是utf-8");
            if ("utf-8" === myhtmlcharset) {
              console.log("文档的编码是utf-8");
            } else {
              console.log("编码不是utf-8,当前的编码是" + myhtmlcharset);
            }
          }

          loadid = guid();
          var sr = new TextDecoder(myhtmlcharset).decode(arraybuffer);
          var myhtmldata = new DOMParser().parseFromString(sr, "text/html");
          var mynewhtmldataurl = new URL(myhtmldata.URL);
          htmldataboject[
            decodeURI(mynewhtmldataurl.pathname + mynewhtmldataurl.search)
          ] = {
            url: myhtmldata.URL,
            text: sr
          };
          console.log("加载过的网页的源代码合集", htmldataboject);

          console.log(myhtmldata);
          document.title = myhtmldata.title;
          document.getElementsByTagName(
            "body"
          )[0].innerHTML = myhtmldata.getElementsByTagName("body")[0].innerHTML;
          Array.from(
            myhtmldata.querySelectorAll("link[rel='stylesheet']")
          ).forEach(e => {
            e.dataset.loadid = loadid;
            e.onerror = () => {
              console.log("加载失败" + e.href);
            };
            e.type = "text/css";
            e.href = e.href;
            console.log("添加css元素到head", e.outerHTML);
            document.getElementsByTagName("head")[0].appendChild(e);
          });

          Array.from(myhtmldata.querySelectorAll("link")).forEach(e => {
            e.dataset.loadid = loadid;

            e.href = e.href;
            console.log("添加元素到head", e.outerHTML);
            document.getElementsByTagName("head")[0].appendChild(e);
          });

          Array.from(myhtmldata.querySelectorAll("style")).forEach(e => {
            e.type = "text/css";
            e.dataset.loadid = loadid;
            console.log("添加css元素到head", e.outerHTML);
            document.getElementsByTagName("head")[0].appendChild(e);
          });

          Array.from(myhtmldata.querySelectorAll("meta")).forEach(e => {
            e.dataset.loadid = loadid;
            console.log("添加元素到head", e.outerHTML);
            document.getElementsByTagName("head")[0].appendChild(e);
          });

          script完成数量 = 0;
          script总数量 = Array.from(myhtmldata.querySelectorAll("script"))
            .length;
          Array.from(myhtmldata.querySelectorAll("script")).forEach(e => {
            e.type = e.type.toLowerCase();
            if (e.type == "text/javascript" || "" == e.type) {
              e.type = "text/javascript";
              if (e.src != "") {
                e.src = e.src;
                /* 但是如果有些脚本不重复加载,可能网页出错 */
                /* 不要重复加载javascipt文件,否则可能出问题 */
                loadscript(e.src, loadid, script加载完成);
              } else {
                /*  setTimeout(() => {
                  loadscripttext(e.innerHTML, loadid);
                }, 50); */
                /* 等到使用了src加载的javascipt全部加载完成之后,在执行文本内容加载的javascript */
                window.addEventListener("allscriptload", onallscriptload);
                function onallscriptload() {
                  window.removeEventListener("allscriptload", onallscriptload);
                  loadscripttext(e.innerHTML, loadid);
                }

                script完成数量++;
              }
            } else {
              /* 不是javascript文件 */
              if (e.src != "") {
                e.src = e.src;
              }
              e.dataset.loadid = loadid;
              console.log("添加元素到head", e.outerHTML);

              script完成数量++;
              document.getElementsByTagName("head")[0].appendChild(e);
            }
          });
          setTimeout(() => {
            Array(
              ...document.querySelectorAll("link"),
              ...document.querySelectorAll("style"),
              ...document.querySelectorAll("meta"),
              ...document.querySelectorAll("script")
            ).forEach(e => {
              if (loadid != e.dataset.loadid) {
                e.parentNode.removeChild(e);
                console.log("删除旧元素", e.outerHTML);
              }
            });
          }, 50);

          //使用async函数

          /*   fetch(url)
            .then(r => {
              console.log(r);
              //   console.log(r,r.text(),r.arrayBuffer());
              return r.arrayBuffer();
            })
            .then(fetchhandler); */
        } catch (error) {
          console.warn(error);
          /* if (url.protocal === "https:") {
            url.protocal = "http:";
          } else {
            url.protocal = "https:";
          }
//不需要了,因为已经在a链接的onclick函数中设置过了
          fetch(url)
            .then(r => {
              console.log(r);
              // console.log(r,r.text(),r.arrayBuffer());
              return r.arrayBuffer();
              //   return r.text();
              //   return { text: r.text(), arraybuffer: r.arrayBuffer() };
            })
            .then(fetchhandler); */
        }
      } else {
        console.log(
          "动态加载网页内容不刷新,不执行" + "原网页与现在的网址相同不刷新",
          document.firstElementChild.dataset.href,
          location.href
        );
      }
    }
  }
})((typeof window != "undefined" && window) || this);
