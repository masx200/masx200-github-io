import { useCallback, useEffect, useRef, useState } from "react";

export function useobservehight(
    initial: number = 0,
): [number, (e?: Element | null | undefined) => void] {
    const navele = useRef<Element | null>(null); // 修正此处
    const observer = useRef<ResizeObserver | null>(null);
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
        return () => {
            observer.current?.disconnect();
        };
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
