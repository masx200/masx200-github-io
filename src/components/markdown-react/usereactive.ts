import { useEffect, useState } from "react";
import { watch, computed } from "@vue/runtime-core";
export function usereactive<T>(call: () => T, dependency: any[]) {
    const [state, setstate] = useState(call());

    useEffect(() => {
        setstate(call);
        const result = computed(call);
        const stop = watch(result, (value) => {
            console.log(value);
            setstate(call());
        });
        return () => {
            stop();
        };
    }, dependency);
    return state;
}
