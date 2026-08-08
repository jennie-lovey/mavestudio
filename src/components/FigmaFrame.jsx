import { useEffect, useRef, useState } from "react";

export default function FigmaFrame({ width, height, className = "", children }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setScale(el.offsetWidth / width);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [width]);

  return (
    <section
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: height * scale }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width,
          height,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          "--figma-scale": scale,
        }}
      >
        {children}
      </div>
    </section>
  );
}
