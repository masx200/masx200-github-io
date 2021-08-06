import React /* , { useRef } */ from "react";
import Link from "./CustomLink";
export default function 我的自定义导航链接({
    to,
    text,
}: {
    to: Record<string, string>;
    text: string;
}) {
    return (
        <li className="nav-item">
            <Link
                to={to}
                className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
            >
                {text}
            </Link>
        </li>
    );
}
