import React, { useEffect, useState } from "react";
import { useParams } from "./router";
import Link from "./CustomLink";
import { rsssitenames } from "./rsssitenames";

export default React.memo(可变路径的rssreader链接);
function 可变路径的rssreader链接() {
    const [rsssitename, setrsssitename] = useState("");
    const params = useParams();
    useEffect(() => {
        if (rsssitenames.includes(params.sitename)) {
            setrsssitename(params.sitename);
        }
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
