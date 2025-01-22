import { XMLParser } from "fast-xml-parser";
//@ts-ignore

import { cachepromise } from "../scripts/cachepromise.ts";
//@ts-ignore
import { fetchtext } from "../components/markdown-react/fetchtext.ts";
// import { fetchsource } from "../fetchsource";
//@ts-ignore
import { htmltotext } from "./htmltotext.ts";
import { RSSDATA } from "./RSSDATA.ts";

// cachepromise
// console.log(hljs)
const parser = new XMLParser();
export const getrss = cachepromise(async function (
    src: string,
): Promise<Readonly<RSSDATA>> {
    const text = await fetchtext(src);
    const xmlstring = text;
    var str = xmlstring;

    var data = parser.parse(str);

    var title: string = data.rss.channel.title;

    var description: string = data.rss.channel.description;
    var myrsscontent: {
        link: string;
        pubDate: string;
        title: string;
        description: string;
    }[] = data.rss.channel.item.map(
        (e: {
            pubDate: string;
            description: string;
            link: string;
            title: string;
            ["content:encoded"]?: string;
        }) => {
            let des = e.description;
            const { link, title } = e;
            if (Reflect.has(e, "content:encoded")) {
                des += Reflect.get(e, "content:encoded");
            }
            //   console.log(e);

            /* 如果 e.description是以以文字开头则在外面包上一个div*/
            //@ts-ignore
            //     if (e["content:encoded"]) {
            //@ts-ignore
            //        alert(e["content:encoded"]);
            //      }

            des = htmltotext(des);

            des = htmltotext(des);

            return { link, title, description: des, pubDate: e.pubDate };
        },
    );
    const content = myrsscontent;
    return {
        title,
        content,
        description,
        link: data.rss.channel.link,
        lastBuildDate:
            data.rss.channel.lastBuildDate ?? data.rss.channel.pubDate,
    } satisfies RSSDATA;
});
