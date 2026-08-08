import { useEffect, useRef, useState } from "react";

export function useScrollReveal() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let rafId;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.35;
      const raw = (start - rect.top) / (start - end);
      const atPageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      setProgress(atPageBottom ? 1 : Math.min(1, Math.max(0, raw)));
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
  }, []);

  return [ref, progress];
}

export function RevealWords({ segments, progress, startIndex = 0, totalWords }) {
  return segments.map((segment, i) => {
    const wordIndex = startIndex + i;
    const wordProgress = Math.min(1, Math.max(0, progress * totalWords - wordIndex));
    return (
      <span
        key={wordIndex}
        className={segment.className}
        style={{ opacity: 0.16 + wordProgress * 0.84 }}
      >
        {segment.text}
      </span>
    );
  });
}
