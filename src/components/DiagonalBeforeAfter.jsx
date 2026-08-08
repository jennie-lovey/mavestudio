import { useEffect, useRef, useState } from "react";

export default function DiagonalBeforeAfter({ before, after, className = "", style }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let rafId;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.9;
      const end = vh * 0.1;
      const raw = (start - rect.top) / (start - end);
      const t = Math.min(1, Math.max(0, raw));
      const eased = t * t * (3 - 2 * t);
      setPosition(eased * 100);
      rafId = null;
    };

    const onScroll = () => {
      if (rafId == null) rafId = requestAnimationFrame(update);
    };

    update();
    const settleId = window.setTimeout(update, 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId != null) cancelAnimationFrame(rafId);
      window.clearTimeout(settleId);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} style={style}>
      <div className="absolute inset-0">{before}</div>
      <div
        className="absolute inset-0 bg-[#0a0a0c]"
        style={{ clipPath: `inset(0 0 0 ${100 - position}%)` }}
      >
        {after}
      </div>
      <div
        className="absolute top-0 bottom-0 w-px -translate-x-1/2 bg-white/70"
        style={{ left: `${100 - position}%` }}
      />
    </div>
  );
}
