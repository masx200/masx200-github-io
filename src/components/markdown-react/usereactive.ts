import { useEffect, useState } from "react";
import { watch } from "@vue/runtime-core";
export function usereactive<T>(call: () => T) {
    const [state, setstate] = useState(call());

    useEffect(() => {
        const stop = watch(call, (value) => {
            setstate(value);
        });
        return () => {
            stop();
        };
    }, []);
    return state;
}
