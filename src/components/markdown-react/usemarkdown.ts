import { usereactive } from "./usereactive";
import { markdownstore } from "./markdownstore";
import { getmarkdownandsave } from "./getmarkdownandsave";

export function usemarkdown(src: string) {
    getmarkdownandsave(src);

    return usereactive(() => {
        const data = markdownstore.data.get(src);
        const error = markdownstore.error.get(src);
        return { data, error };
    });
}
