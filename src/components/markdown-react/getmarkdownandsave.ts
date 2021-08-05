import { getrenderedmarkdown } from "./getrenderedmarkdown";
import { markdownstore } from "./markdownstore";

export function getmarkdownandsave(src: string) {
    getrenderedmarkdown(src).then(
        (data) => {
            return markdownstore.data.set(src, data);
        },
        (error) => {
            return markdownstore.error.set(src, error);
        }
    );
}
