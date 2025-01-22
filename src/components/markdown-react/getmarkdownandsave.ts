import { cachepromise } from "../../scripts/cachepromise";
import { fetchsource } from "../../scripts/fetchsource";
import { markdownstore } from "./markdownstore";

const markdownapi = new URL("/api/getmarkdown/", location.origin).toString();
export function getmarkdownandsave(name: string) {
    getapimarkdown(name).then(
        (data) => {
            return markdownstore.data.set(name, data);
        },
        (error) => {
            return markdownstore.error.set(name, error);
        },
    );
}
const getapimarkdown = cachepromise(async function getapimarkdown(
    name: string,
) {
    return fetchsource(markdownapi + name + ".html");
});
