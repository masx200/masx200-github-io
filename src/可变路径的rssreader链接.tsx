import React, { useEffect } from "react";
import { Link, useParams } from "./router";

var { useState } = React;
export default React.memo(可变路径的rssreader链接);
export const rsssitenames = [
    "pingwest",
    "ifanr",
    "ithome",
    "landiannews",
    "iplaysoft",
    "tmtpost",
];
function 可变路径的rssreader链接() {
    const [rsssitename, setrsssitename] = useState("");
    const params = useParams();
    useEffect(() => {
        if (rsssitenames.includes(params.sitename)) {
            setrsssitename(params.sitename);
        }

        return () => {};
    }, [params.sitename]);
    return (
        <Link
            to={
                rsssitename
                    ? { p: "/react-rssreader", sitename: rsssitename }
                    : { p: "/react-rssreader" }
            }
            className="nav-link mui-btn mui-btn-primary mui-btn-outlined"
        >
            rss阅读
        </Link>
    );
}
