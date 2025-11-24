import { useRef } from "react";

export const useDebounce = (delay) => {
    const miRef = useRef(null);

    const debounceFunction = (func) => {
        if (miRef.current) {
            clearTimeout(miRef.current);
        }
        miRef.current = setTimeout(() => {
            func();
        }, delay);
    };
    return debounceFunction;
}