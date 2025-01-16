import { getrssandsave } from "./getrssandsave";
import { readonly } from "@vue/reactivity";
import { rssstore } from "./rssstore";
import { usereactive } from "../components/markdown-react/usereactive";

export function userss(src: string): {
    data:
        | Readonly<{
              readonly link: string;
              readonly title: string;
              lastBuildDate: string;
              readonly content: readonly {
                  readonly link: string;
                  readonly title: string;
                  readonly description: string;
                  readonly pubDate: string;
              }[];
              readonly description: string;
          }>
        | undefined;
    error: any;
} {
    const { data, error } = readonly(usereactive(getrssresult(src), [src]));
    if (!data && !error) {
        getrssandsave(src);
    }
    return { data, error };
}

export type RSSDATA = Readonly<{
    title: string;
    lastBuildDate: string;
    link: string;
    content: {
        link: string;
        title: string;
        description: string;
        pubDate: string;
    }[];
    description: string;
}>;

function getrssresult(src: string): () => {
    data: RSSDATA | undefined;
    error: any;
} {
    return () => {
        const data = rssstore.data.get(src);
        const error = rssstore.error.get(src);
        // console.log({ src, data, error });
        return { data, error };
    };
}

("use strict");
