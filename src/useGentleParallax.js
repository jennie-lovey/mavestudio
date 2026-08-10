import { useEffect, useRef } from "react";

export default function useGentleParallax(rate = 0.35) {
  const ref = useRef(null);
  const lastOffset = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const naturalTop = rect.top + lastOffset.current;
      const scrolledPast = -naturalTop;
      const offset = scrolledPast > 0 ? scrolledPast * rate : 0;
      lastOffset.current = offset;
      el.style.transform = `translateY(${offset}px)`;
      rafId = null;
    };
    const onScroll = () => {
      if (rafId == null) rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, [rate]);

  return ref;
}
