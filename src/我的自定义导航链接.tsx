import { Link /*  HashRouter */ } from "react-router-dom";
import React /* , { useRef } */ from "react";
export default function 我的自定义导航链接({ linkto, text }) {
  return (
    <li className="nav-item">
      <Link
        to={linkto}
        className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
      >
        {text}
      </Link>
    </li>
  );
}
