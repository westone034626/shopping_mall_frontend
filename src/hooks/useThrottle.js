import { useRef } from 'react';

function useThrottle(fn, ms = 300) {
    const latestExecutedTimeRef = useRef(0);

    return (...args) => {
        if (Date.now() - latestExecutedTimeRef.current > ms) {
            fn(...args);

            latestExecutedTimeRef.current = Date.now();
        }
    };
}

export default useThrottle;