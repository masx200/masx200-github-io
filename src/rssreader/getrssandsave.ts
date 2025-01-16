import { cachepromise } from "../cachepromise";
import { fetchsource } from "../fetchsource";
import { rssstore } from "./rssstore";

const rssapi = new URL("/api/getrss/", location.origin).toString();

export function getrssandsave(src: string) {
    getapirss(src).then(
        (data) => {
            return rssstore.data.set(src, data);
        },
        (error) => {
            return rssstore.error.set(src, error);
        }
    );
}
const getapirss = cachepromise(async function getapirss(name: string) {
    return JSON.parse(await fetchsource(rssapi + name));
});
