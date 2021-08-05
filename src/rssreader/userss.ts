import { usereactive } from "../components/markdown-react/usereactive";
import { getrss } from "./getrss";
import { rssstore } from "./rssstore";
import { readonly } from "@vue/reactivity";
export function userss(src: string) {
    getrssandsave(src);
    return readonly(usereactive(getrssresult(src), [src]));
}

function getrssresult(src: string): () => {
    data:
        | {
              title: string;
              content: { link: string; title: string; description: string }[];
              description: string;
          }
        | undefined;
    error: any;
} {
    return () => {
        const data = rssstore.data.get(src);
        const error = rssstore.error.get(src);
        console.log({ src, data, error });
        return { data, error };
    };
}

export function getrssandsave(src: string) {
    getrss(src).then(
        (data) => {
            return rssstore.data.set(src, data);
        },
        (error) => {
            return rssstore.error.set(src, error);
        }
    );
}
("use strict");
