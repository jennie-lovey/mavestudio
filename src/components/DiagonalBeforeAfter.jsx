import { useEffect, useRef, useState } from "react";

export default function DiagonalBeforeAfter({ before, after, className = "", style }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(hover: hover)").matches) return;

    const el = containerRef.current;
    if (!el) return;

    let showingAfter = false;
    const id = window.setInterval(() => {
      showingAfter = !showingAfter;
      setPosition(showingAfter ? 100 : 0);
    }, 2600);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
      onMouseEnter={() => setPosition(100)}
      onMouseLeave={() => setPosition(0)}
    >
      <div className="absolute inset-0">{before}</div>
      <div
        className="absolute inset-0 bg-[#0a0a0c] transition-[clip-path] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ clipPath: `inset(0 0 0 ${100 - position}%)` }}
      >
        {after}
      </div>
      <div
        className="absolute top-0 bottom-0 w-px -translate-x-1/2 bg-white/70 transition-[left] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ left: `${100 - position}%` }}
      />
    </div>
  );
}
