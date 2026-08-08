import { useEffect, useRef, useState } from "react";

const SWEEP_MS = 1400;
const HOLD_MS = 1100;
const CYCLE_MS = SWEEP_MS * 2 + HOLD_MS * 2;

export default function BeforeAfterSlider({ before, after }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
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
    let rafId;
    const start = performance.now();

    const step = (now) => {
      const elapsed = (now - start) % CYCLE_MS;
      let t;
      if (elapsed < SWEEP_MS) {
        // sweeping toward "after"
        t = elapsed / SWEEP_MS;
      } else if (elapsed < SWEEP_MS + HOLD_MS) {
        // holding on "after"
        t = 1;
      } else if (elapsed < SWEEP_MS * 2 + HOLD_MS) {
        // sweeping back toward "before"
        t = 1 - (elapsed - SWEEP_MS - HOLD_MS) / SWEEP_MS;
      } else {
        // holding on "before"
        t = 0;
      }
      const eased = t * t * (3 - 2 * t);
      setPosition(eased * 100);
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isVisible]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0">{before}</div>
      <div
        className="absolute inset-0 bg-[#3a3a3a]"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {after}
      </div>
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white/90"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
          <div className="flex items-center gap-[3px]">
            <div className="h-[10px] w-[2px] rounded-full bg-black/60" />
            <div className="h-[10px] w-[2px] rounded-full bg-black/60" />
          </div>
        </div>
      </div>
    </div>
  );
}
