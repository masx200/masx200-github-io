import React from "react";
import 可变路径的rssreader链接 from "./可变路径的rssreader链接";
import 我的自定义导航链接 from "./我的自定义导航链接";
const navlinks = [
    { to: { p: "/react-home" }, text: "基于REACT的主页" },

    { to: { p: "/react-about" }, text: "关于REACT" },
    { to: { p: "/picalc" }, text: "圆周率计算多线程" },
    {
        to: { p: "/react-huami" },
        text: "花密网页版",
    },
    {
        to: { p: "/decoder" },
        text: "JSfuck-and-hieroglyphy-Decoder",
    },
    { to: { p: "/jsfuck" }, text: "JSfuck-ENCODER" },
    { to: { p: "/hieroglyphy" }, text: "hieroglyphy-ENCODER" },
    {
        to: {
            p: "/webpack-react-vue-spa-awesome-config",
        },
        text: "webpack-react-vue- 极速零配置的单页面 web 应用打包工具",
    },
    {
        to: {
            p: "/excellent-vscode-extensions-for-javascript",
        },
        text: "VScode的优秀扩展推荐",
    },
];
export const navlinkeles = (
    <>
        <li>
            <可变路径的rssreader链接 />
        </li>
        {navlinks.map(({ text, to }, index) => {
            return <我的自定义导航链接 key={index} to={to} text={text} />;
        })}
    </>
);
