import { readonly } from "@vue/reactivity";

import { getmarkdownandsave } from "./getmarkdownandsave";
import { markdownstore } from "./markdownstore";
import { usereactive } from "./usereactive";

export function usemarkdown(src: string) {
    const { data, error } = readonly(
        usereactive(getmarkdownresult(src), [src])
    );
    if (!data && !error) {
        getmarkdownandsave(src);
    }

    return { data, error };
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
