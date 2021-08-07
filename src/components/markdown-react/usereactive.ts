import { useEffect, useState } from "react";
import { effect, computed,stop } from "@vue/reactivity";
export function usereactive<T>(call: () => T, dependency: any[]) {
    const [state, setstate] = useState(call());

    useEffect(() => {
        setstate(call);
        const result = computed(call);
        const re = effect(() => {
            setstate(result.value);
        });

        /*watch(result, (value) => {
            console.log(value);
            setstate(call());
        });*/
        return () => {
            stop(re);
        };
    }, dependency);
    return state;
}
