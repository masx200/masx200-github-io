import CustomRSSLink from "../scripts/CustomLink";
import rssfeedxml from "./rssfeedxml";
import { getStylePropValue } from "../../src/scripts/getStylePropValue";

function getrssmain() {
    const rssmain = (
        <>
            <h2>异步fetch加载rss阅读器演示</h2>
            <p>使用fast-xml-parser把xml转换成json</p>
            <nav
                className="navbar navbar-expand-sm bg-light navbar-light "
                style={getStylePropValue(
                    Object.entries({
                        display: "flex",
                        //@ts-ignore
                        "flex-direction": "column",
                        "flex-wrap": "nowrap",
                        "align-content": "center",
                        "justify-content": "center",
                        "align-items": "center",
                    })
                        .map(([key, value]) => [key, value].join(":"))
                        .join(";"),
                )}
            >
                <details open>
                    <summary>订阅源列表</summary>
                    <ul
                        className="demo"
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            alignContent: "center!important",
                            justifyContent: "space-between",
                            alignItems: "center!important",
                        }}
                    >
                        {Object.keys(rssfeedxml).map((key, index) => {
                            return (
                                <CustomRSSLink
                                    key={index}
                                    data-loading-icon="mui-spinner mui-spinner-custom"
                                    className="mui-btn mui-btn-primary mui-btn-outlined btn-lg"
                                    to={{
                                        p: "/react-rssreader",
                                        sitename: key,
                                    }}
                                >
                                    加载{key}
                                </CustomRSSLink>
                            );
                        })}
                    </ul>
                </details>
            </nav>
        </>
    );
    return rssmain;
}
export { getrssmain };
