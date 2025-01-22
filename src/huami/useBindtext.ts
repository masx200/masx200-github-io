"use strict";
import React, { useState } from "react";

export function useBindtext(
    默认值: string | number,
): [
    string | number,
    React.Dispatch<React.SetStateAction<string | number>>,
    (e: { target: { value: string } }) => void,
] {
    var [inputcode, setinputcode] = useState(默认值);
    const inputonchange = (e: { target: { value: string } }) => {
        //@ts-ignore
        setinputcode(e.target?.value);
    };
    return [inputcode, setinputcode, inputonchange];
}
