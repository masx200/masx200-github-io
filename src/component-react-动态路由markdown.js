import Markdownreact from "./markdown-react/index";
import React, { useState, useEffect, useCallback, useRef } from "react";
export default function(props) {
  /* 路由传过来一个参数 是通过encodeURIComponent函数转换的,否则接受不到参数*/

  const handlehash = e => {
    console.log(e);
    let searchurl = decodeURIComponent(
      location.hash.slice(`#/markdown/`.length)
    );
    seturl(new URL(searchurl).toString());
  };
  //   console.log(props);
  //   var [err, seterr] = useState(false);
  //   var [geturlfrompath, setgeturlfrompath] = useState(
  //     props.location.pathname.slice(`/markdown/`.length)
  //   );
  let searchurl = decodeURIComponent(props.match.params.url);
  var [url, seturl] = useState(new URL(searchurl).toString());
  useEffect(() => {
    window.addEventListener("hashchange", handlehash);
    return () => {
      window.removeEventListener("hashchange", handlehash);
    };
  }, []);
  useEffect(() => {
    console.log(props);
    console.log(url);
    document.title = "masx200的github主页-" + url;

    return () => {
      //   window.removeEventListener("hashchange", handlehash);
    };
  }, [url]);
  //   useEffect(() => {
  //     if (geturlfrompath !== props.location.pathname.slice(`/markdown/`.length))
  //       setgeturlfrompath(props.location.pathname.slice(`/markdown/`.length));
  //   });
  //   console.log(geturlfrompath);
  //   useEffect(() => {
  //     try {
  //       if (new URL(geturlfrompath) !== url) seturl(new URL(geturlfrompath));
  //       seterr(false);
  //     } catch (error) {
  //       console.error(error);
  //       seterr(true);
  //     }
  //   });

  return (
    <div>
      {/* {url.toString()} */}
      <Markdownreact src={url.toString()} />
      {/* {err ? (
        <>
          <div>
            <h1>loading</h1>
          </div>
          <div>
            <h1>Error!</h1>
          </div>
        </>
      ) : (
        <Markdownreact src={url.toString()} />
      )} */}
    </div>
  );
}
