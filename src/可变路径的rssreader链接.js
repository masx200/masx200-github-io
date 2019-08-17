import React from "react";
import { Link } from "react-router-dom";
// var { useEffect } = React;
var { useEffect, useState } = React;
export default React.memo(可变路径的rssreader链接);

function 可变路径的rssreader链接() {
  // console.log(arguments);
  const [rsssitename, setrsssitename] = useState("");
  useEffect(() => {
    window.addEventListener(
      "hashchange",

      () => {
        switch (location.hash) {
          case "#/react-rssreader/iplaysoft":
          case "#/react-rssreader/tmtpost":
          case "#/react-rssreader/landiannews":
          case "#/react-rssreader/ithome":
          case "#/react-rssreader/ifanr":
          case "#/react-rssreader/pingwest":
            setrsssitename(location.hash.slice("#/react-rssreader".length));
            break;

          default:
            break;
        }
      }
    );
  }, []);

  /* $(window).on("hashchange", () => {
    switch (location.hash) {
      case "#/react-rssreader/iplaysoft":
      case "#/react-rssreader/tmtpost":
      case "#/react-rssreader/landiannews":
      case "#/react-rssreader/ithome":
      case "#/react-rssreader/ifanr":
      case "#/react-rssreader/pingwest":
        setrsssitename(location.hash.slice("#/react-rssreader".length));
        break;

      default:
        break;
    }
  //  /*  */
  // }

  //);*/
  return (
    <Link
      to={"/react-rssreader" + rsssitename}
      className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
    >
      rss阅读
    </Link>
  );
}
