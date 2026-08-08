import { useEffect, useRef } from "react";

export default function SmoothCursor() {
  const dotRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.style.cursor = "none";
    target.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    pos.current = { ...target.current };

    const onPointerMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      hovering.current = !!e.target.closest("a, button, [role='button']");
    };

    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (dotRef.current) {
        const scale = hovering.current ? 1.8 : 1;
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%) scale(${scale})`;
      }
      rafId.current = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    rafId.current = requestAnimationFrame(loop);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] size-5 rounded-full bg-white transition-transform duration-150 ease-out"
      style={{ mixBlendMode: "difference" }}
    />
  );
}
