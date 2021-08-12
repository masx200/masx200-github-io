import React, { useEffect, useState, memo } from "react";
import { 获取当前时间 } from "./获取当前时间";

export const Showtime = memo(function Showtime() {
    const [nowtime, setnowtime] = useState(获取当前时间());
    useEffect(() => {
        let timer = setInterval(() => {
            setnowtime(获取当前时间());
        }, 1100);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return <h2>现在是 {nowtime}</h2>;
});
