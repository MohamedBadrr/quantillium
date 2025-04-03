import { useEffect, useState } from 'react';

const useCountUp = (end: number, start = 0, duration = 2000) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        let startTime: number | null = null;

        const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const currentCount = Math.floor(percentage * (end - start) + start);

            setCount(currentCount);

            if (progress < duration) {
                requestAnimationFrame(animateCount);
            }
        };

        requestAnimationFrame(animateCount);
    }, [end, start, duration]);

    return count;
};

export default useCountUp;