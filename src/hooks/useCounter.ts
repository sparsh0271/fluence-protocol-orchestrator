import { useEffect, useRef, useState } from 'react';

export function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const increment = target / (duration / 16);
    let current = 0;

    const animate = () => {
      current += increment;
      if (current < target) {
        setCount(Math.ceil(current));
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animate();
  }, [started, target, duration]);

  return { count, ref };
}
