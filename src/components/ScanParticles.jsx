import { useEffect, useRef } from "react";

// A band of tiny dots that stream away from the scan line and fade out,
// like the "dissolve" edge in the inspiration clip.
const PARTICLE_COUNT = 900;

function spawn(width, height, startAnywhere) {
  const lineX = width / 2;
  // Mostly on the "not yet scanned" (right) side, a few trailing on the left.
  const toRight = Math.random() < 0.85;
  const reach = (toRight ? width / 2 : width * 0.12) * Math.pow(Math.random(), 2.1);
  const x = startAnywhere ? lineX + (toRight ? reach : -reach) : lineX + (Math.random() - 0.5) * 3;
  return {
    x,
    y: Math.random() * height,
    size: 1 + Math.random() * 2.2,
    speed: (toRight ? 1 : -1) * (0.12 + Math.random() * 0.45),
    drift: (Math.random() - 0.5) * 0.25,
    seed: Math.random() * Math.PI * 2,
  };
}

export default function ScanParticles({ className = "", style }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let particles = [];
    let raf = null;
    let visible = true;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      if (!width || !height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: PARTICLE_COUNT }, () => spawn(width, height, true));
    };

    const draw = (time) => {
      raf = null;
      if (!width || !height) return;
      ctx.clearRect(0, 0, width, height);
      const half = width / 2;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!reduceMotion) {
          p.x += p.speed;
          p.y += p.drift;
        }
        const dist = Math.abs(p.x - half) / half;
        if (dist >= 1 || p.y < 0 || p.y > height) {
          particles[i] = spawn(width, height, false);
          continue;
        }
        const flicker = 0.7 + 0.3 * Math.sin(time / 260 + p.seed);
        const alpha = Math.min(1, Math.pow(1 - dist, 1.25) * 1.25 * flicker);
        ctx.fillStyle = `rgba(190,208,255,${alpha.toFixed(3)})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
      if (visible && !reduceMotion) raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (raf == null) raf = requestAnimationFrame(draw);
    };

    resize();
    start();

    const resizeObserver = new ResizeObserver(() => {
      resize();
      start();
    });
    resizeObserver.observe(canvas);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    visibilityObserver.observe(canvas);

    return () => {
      if (raf != null) cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none ${className}`} style={style} />;
}
