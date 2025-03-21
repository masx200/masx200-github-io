import getmarkdown from "../netlify/edge-functions/getmarkdown[name].js";
import { fromFileUrl } from "https://deno.land/std@0.208.0/path/mod.ts";
import { dirname } from "https://deno.land/std@0.224.0/path/mod.ts";
import getrss from "../netlify/edge-functions/getrss[name].js";
import rssfeedxml from "../src/rssreader/rssfeedxml.ts";
import markdownurls from "../src/utils/markdownurls.ts";
if (import.meta.main) {
    const results: {
        file: string;
        data: string;
    }[] = await Promise.all([
        ...Object.keys(markdownurls).map(async (name) => {
            const req = new Request(
                "http://localhost/api/getmarkdown/" + name + ".html",
            );
            const response = await getmarkdown(req);

            const text = await ((await response.ok)
                ? response.text()
                : Promise.reject(
                      "fetch failed\n" +
                          req.url +
                          "\nstatus:" +
                          response.status +
                          "\ntext:" +
                          (await response.text()),
                  ));

            const file = import.meta.resolve(
                "../public/api/getmarkdown/" + name + ".html",
            );
            console.log("文件生成成功:" + fromFileUrl(file));
            return {
                file: file,
                data: text,
            };
        }),

        ...Object.keys(rssfeedxml).map(async (name) => {
            const req = new Request(
                "http://localhost/api/getrss/" + name + ".json",
            );
            const response = await getrss(req);
            const text = await ((await response.ok)
                ? response.text()
                : Promise.reject(
                    "fetch failed\n" +
                    req.url +
                    "\nstatus:" +
                    response.status +
                    "\ntext:" +
                    (await response.text()),
                  ));

            const file = import.meta.resolve(
                "../public/api/getrss/" + name + ".json",
            );
            console.log("文件生成成功:" + fromFileUrl(file));
            return {
                file: file,
                data: text,
            };
        }),
    ]);
    for (const result of results) {
        await Deno.mkdir(fromFileUrl(getParentDirectory(result.file)), {
            recursive: true,
        });
        await Deno.writeTextFile(fromFileUrl(result.file), result.data);
        console.log("文件写入成功:" + fromFileUrl(result.file));
    }
}

function getParentDirectory(fileUrl: string): string {
    // 解析 file 协议的 URL
    const url = new URL(fileUrl);
    if (url.protocol !== "file:") {
        throw new Error("The provided URL is not a file protocol URL.");
    }

    // 获取文件路径
    const filePath = url.pathname;

    // 获取上级目录
    const parentDirectory = dirname(filePath);

    return "file://" + parentDirectory;
}
