import { useRef } from 'react';

function useDebounce(fn, ms = 300) {
    const timeoutIdRef = useRef(null);

    return (...args) => {
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
        }

        timeoutIdRef.current = setTimeout(() => fn(...args), ms);
    };
}

export default useDebounce;