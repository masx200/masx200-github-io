import { useEffect, useRef, useState, useCallback } from "react";

export function useobservehight(
    initial: number
): [number, (e?: Element | null | undefined) => void] {
    const navele = useRef<Element>();
    const observer = useRef<ResizeObserver>();
    const createobserver = useCallback(function createobserver() {
        observer.current =
            observer.current ||
            new ResizeObserver((entry) => {
                // console.log(entry);
                const height = navele.current?.clientHeight;
                height && setnavheight(height);
            });
    }, []);
    useEffect(() => {
        createobserver();
    }, []);
    const navbarref = useCallback(function navbarref(e?: Element | null) {
        if (e) {
            createobserver();
            observer.current?.observe(e);
            navele.current = e;
        }
    }, []);
    const [navheight, setnavheight] = useState(initial);
    return [navheight, navbarref];
}
