import { useEffect, useRef, useState } from "react";

export default function FitText({
  children,
  measureText,
  targetWidth,
  fontWeight = 800,
  fontFamily = "Urbanist",
  className = "",
  style = {},
}) {
  const text = measureText ?? children;
  const ref = useRef(null);
  const [fontSize, setFontSize] = useState(targetWidth / (text.length * 0.6));

  useEffect(() => {
    const measure = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const baseSize = 100;
      ctx.font = `${fontWeight} ${baseSize}px ${fontFamily}`;
      const width = ctx.measureText(text).width;
      setFontSize((targetWidth / width) * baseSize);
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure);
    } else {
      measure();
    }
  }, [text, targetWidth, fontWeight, fontFamily]);

  return (
    <p ref={ref} className={className} style={{ ...style, fontSize }}>
      {children}
    </p>
  );
}
