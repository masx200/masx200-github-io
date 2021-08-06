import { DefaultReactLinkProps } from "@masx200/search-hash-params-router";
import { PropsWithChildren } from "react";
import React from "react";
import { Link } from "./Link";
import { mycustom } from "./mycustom";

export default function CustomLink({
    children,
    ...rest
}: PropsWithChildren<DefaultReactLinkProps>) {
    return (
        <Link {...rest} component={mycustom}>
            {children}
        </Link>
    );
}
