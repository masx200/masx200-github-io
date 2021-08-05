import { readonly } from "@vue/reactivity";
import { getmarkdownandsave } from "./getmarkdownandsave";
import { markdownstore } from "./markdownstore";
import { usereactive } from "./usereactive";

export function usemarkdown(src: string) {
    getmarkdownandsave(src);

    return readonly(usereactive(getmarkdownresult(src), [src]));
}
function getmarkdownresult(
    src: string
): () => { data: string | undefined; error: any } {
    return () => {
        const data = markdownstore.data.get(src);
        const error = markdownstore.error.get(src);
        return { data, error };
    };
}
