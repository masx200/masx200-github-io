import { usereactive } from "./usereactive";
import { markdownstore } from "./markdownstore";
import { getmarkdownandsave } from "./getmarkdownandsave";
import { readonly } from "@vue/reactivity";
const readonlymarkdownstore=readonly(markdownstore)
export function usemarkdown(src: string) {
    getmarkdownandsave(src);

    return usereactive(() => {
        const data = readonlymarkdownstore.data.get(src);
        const error = readonlymarkdownstore.error.get(src);
        return { data, error };
    });
}
