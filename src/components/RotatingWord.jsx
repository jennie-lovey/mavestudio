import { useEffect, useState } from "react";

export default function RotatingWord({ words, interval = 4200, className = "" }) {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setTransitioning(true);
      const settle = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setTransitioning(false);
      }, 800);
      return () => clearTimeout(settle);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const nextIndex = (index + 1) % words.length;

  return (
    <span
      className={`relative inline-block overflow-hidden align-top ${className}`}
      style={{ height: "1.2em" }}
    >
      <span
        className="flex flex-col transition-transform duration-[800ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ transform: transitioning ? "translateY(-1.2em)" : "translateY(0)" }}
      >
        <span className="block" style={{ height: "1.2em", lineHeight: "1.2em" }}>
          {words[index]}
        </span>
        <span className="block" style={{ height: "1.2em", lineHeight: "1.2em" }}>
          {words[nextIndex]}
        </span>
      </span>
    </span>
  );
}
