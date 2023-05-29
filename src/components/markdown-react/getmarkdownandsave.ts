import { cachepromise } from "../../cachepromise";
import { fetchsource } from "../../fetchsource";
import { markdownstore } from "./markdownstore";

const markdownapi =
    "https://masx200-github-io-masx200.netlify.app/api/getmarkdown/";
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
    return fetchsource(markdownapi + name);
});
