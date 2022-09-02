import React, { memo, PropsWithChildren } from "react";

import { DefaultReactLinkProps } from "@masx200/search-hash-params-router";

import { Link } from "./Link";
import { mycustom } from "./mycustom";

export default memo(function CustomLink({
    children,
    ...rest
}: PropsWithChildren<DefaultReactLinkProps>) {
    return (
        // @ts-ignore
        <Link {...rest} component={mycustom}>
            {children}
        </Link>
    );
}) as React.ComponentType<DefaultReactLinkProps>;
