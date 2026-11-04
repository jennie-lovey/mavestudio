import { useEffect, useRef, useState } from "react";

export default function DiagonalBeforeAfter({ before, after, className = "", style, scan = false }) {
  const containerRef = useRef(null);
  const afterRef = useRef(null);
  const [position, setPosition] = useState(0);

  // Scan mode: a fixed glowing line sits in the carousel; the part of this card that has
  // passed the line shows the "after", the part that hasn't shows the "before".
  useEffect(() => {
    if (!scan) return;
    let raf;
    const tick = () => {
      const card = containerRef.current;
      const after = afterRef.current;
      const root = card && card.closest("[data-scan-root]");
      const line = root && root.querySelector("[data-scan-line]");
      if (card && after && line) {
        const c = card.getBoundingClientRect();
        const l = line.getBoundingClientRect();
        const lineX = l.left + l.width / 2;
        const passed = Math.min(1, Math.max(0, (lineX - c.left) / c.width));
        after.style.clipPath = `inset(0 ${(1 - passed) * 100}% 0 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [scan]);

  useEffect(() => {
    if (scan) return;
    if (window.matchMedia("(hover: hover)").matches) return;

    const el = containerRef.current;
    if (!el) return;

    let showingAfter = false;
    const id = window.setInterval(() => {
      showingAfter = !showingAfter;
      setPosition(showingAfter ? 100 : 0);
    }, 2600);

    return () => window.clearInterval(id);
  }, [scan]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
      onMouseEnter={scan ? undefined : () => setPosition(100)}
      onMouseLeave={scan ? undefined : () => setPosition(0)}
    >
      <div className="absolute inset-0">{before}</div>
      {scan ? (
        <div ref={afterRef} className="absolute inset-0 bg-[#0a0a0c]" style={{ clipPath: "inset(0 100% 0 0)" }}>
          {after}
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
