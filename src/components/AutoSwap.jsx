import { useEffect, useRef, useState } from "react";

export default function AutoSwap({ before, after, holdMs = 2200, transitionMs = 700 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => setShowAfter((s) => !s), holdMs);
    return () => clearInterval(interval);
  }, [isVisible, holdMs]);

  return (
    <div ref={ref} className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{ opacity: showAfter ? 0 : 1, transition: `opacity ${transitionMs}ms ease` }}
      >
        {before}
      </div>
      <div
        className="absolute inset-0"
        style={{ opacity: showAfter ? 1 : 0, transition: `opacity ${transitionMs}ms ease` }}
      >
        {after}
      </div>
    </div>
  );
}
