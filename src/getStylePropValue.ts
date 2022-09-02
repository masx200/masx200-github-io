import { CSSProperties } from "react";

function getStylePropValue(attrValue: string): CSSProperties {
    const props = attrValue.split(";").filter((prop) => {
        return !!prop;
    });

    return props.reduce((props, prop) => {
        let [propName, propValue] = prop.split(/:(.*)/);
        propName = formatStylePropName(propName);
        return {
            ...props,
            [propName]: propValue && propValue.trim(),
        };
    }, {}) as CSSProperties;
}
function formatStylePropName(propName: string) {
    // Vendor prefixes other than "ms" should begin with a capital letter.
    // See: https://facebook.github.io/react/tips/inline-styles.html.
    propName = propName.replace(/^(\s+)?-(?=ms)/, "").trim();
    // Turn, for instance, "-webkit-property" into "WebkitProperty"
    // and "font-size" into "fontSize.
    return propName.replace(/(\-\w)/g, (match) => {
        return match[1].toUpperCase();
    });
}
export { getStylePropValue };
