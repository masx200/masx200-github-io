import { CustomReactLinkProps } from "@masx200/search-hash-params-router";
import { memo, PropsWithChildren } from "react";

export const mycustom = memo(function mycustom({
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
});
