import { CustomReactLinkProps } from "@masx200/search-hash-params-router";
import { PropsWithChildren } from "react";
import React from "react";

export function mycustom({
    children,
    className = "",
    isActive,
    navigate,
    innerRef,
    ...rest
}: PropsWithChildren<CustomReactLinkProps>) {
    return (
        <a
            className={[isActive && "active", className]
                .filter(Boolean)
                .join(" ")}
            ref={innerRef}
            onClick={navigate}
            {...rest}
        >
            {children}
        </a>
    );
}
