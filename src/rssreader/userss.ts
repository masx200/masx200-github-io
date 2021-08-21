import { usereactive } from "../components/markdown-react/usereactive";
import { rssstore } from "./rssstore";
import { readonly } from "@vue/reactivity";
import { getrssandsave } from "./getrssandsave";
export function userss(src: string) {
    const { data, error } = readonly(usereactive(getrssresult(src), [src]));
    if (!data && !error) {
        getrssandsave(src);
    }
    return { data, error };
}

type RSSDATA = {
    title: string;
    content: {
        link: string;
        title: string;
        description: string;
    }[];
    description: string;
};

function getrssresult(src: string): () => {
    data: RSSDATA | undefined;
    error: any;
} {
    return () => {
        const data = rssstore.data.get(src);
        const error = rssstore.error.get(src);
        console.log({ src, data, error });
        return { data, error };
    };
}

("use strict");
