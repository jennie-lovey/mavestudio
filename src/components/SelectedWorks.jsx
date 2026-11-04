import { useEffect, useRef, useState } from "react";
import mockupIphone15A from "../assets/figma/mockup-iphone-15-a.webp";
import mockupIphone15B from "../assets/figma/mockup-iphone-15-b.webp";
import mockupIphone17eA from "../assets/figma/mockup-iphone-17e-a.webp";
import mockupIphone17eB from "../assets/figma/mockup-iphone-17e-b.webp";
import mockupIphone17Before from "../assets/figma/mockup-iphone-17-before.webp";
import mockupIphone17After from "../assets/figma/mockup-iphone-17-after.webp";
import image97 from "../assets/figma/image-97.webp";

function BeforeAfterLabels({ leftBefore, leftAfter, top }) {
  return (
    <>
      <p
        className="absolute -translate-x-1/2 font-urbanist text-[16.5px] font-medium whitespace-nowrap text-black"
        style={{ left: leftBefore, top }}
      >
        Before
      </p>
      <p
        className="absolute -translate-x-1/2 font-urbanist text-[16.5px] font-medium whitespace-nowrap text-black"
        style={{ left: leftAfter, top }}
      >
        After
      </p>
    </>
  );
}

function WorkCard1() {
  return (
    <div
      className="flex shrink-0 items-center justify-center gap-[26.54px] overflow-hidden rounded-[30px] bg-[#141416] py-[69.347px]"
      style={{ width: "607px", height: "647px" }}
    >
      <img src={mockupIphone15A} alt="Travel app before" style={{ width: "262.098px", height: "543.003px" }} className="object-cover" />
      <img src={mockupIphone15B} alt="Travel app after" style={{ width: "262.098px", height: "543.003px" }} className="object-cover" />
    </div>
  );
}

function WorkCard2() {
  return (
    <div
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-[30px] bg-[#141416] py-[69.347px]"
      style={{ width: "607px", height: "647px" }}
    >
      <div className="flex items-center justify-center gap-[26px] px-[103.5px] py-[51.4px]">
        <img src={mockupIphone17eA} alt="Kora app before" style={{ width: "259.159px", height: "524.638px" }} className="object-cover" />
        <img src={mockupIphone17eB} alt="Kora app after" style={{ width: "260.187px", height: "526.72px" }} className="object-cover" />
      </div>
    </div>
  );
}

function WorkCard3() {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-[30px] bg-[rgba(20,20,22,0.95)]"
      style={{ width: "607px", height: "647px" }}
    >
      <img
        src={mockupIphone17Before}
        alt="Before"
        className="absolute object-cover"
        style={{ left: "40px", top: "75.5px", width: "249.108px", height: "514.95px" }}
      />
      <img
        src={mockupIphone17After}
        alt="After"
        className="absolute object-cover"
        style={{ left: "318.01px", top: "75.5px", width: "249.132px", height: "515px" }}
      />
      <BeforeAfterLabels leftBefore="164.5px" leftAfter="442.6px" top="28px" />
    </div>
  );
}

function WorkCard4() {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-[30px] bg-[#141416]"
      style={{ width: "607px", height: "647px" }}
    >
      <img
        src={image97}
        alt="Before"
        className="absolute object-cover"
        style={{ left: "28px", top: "23.02px", width: "270px", height: "1033.57px" }}
      />
      <img
        src={image97}
        alt="After"
        className="absolute object-cover"
        style={{ left: "310px", top: "-326.5px", width: "264.423px", height: "1012.219px" }}
      />
    </div>
  );
}

const WORKS = [
  { Card: WorkCard1, name: "Travel app" },
  { Card: WorkCard2, name: "Kora" },
  { Card: WorkCard3, name: "Mobile app" },
  { Card: WorkCard4, name: "Website" },
];

const CARD_W = 607;
const CARD_H = 647;
const CARD_GAP = 48;
const SCROLL_PER_WORK_VH = 70;
const COMPACT_BELOW = 1024;

function useViewport() {
  const [size, setSize] = useState(() =>
    typeof window === "undefined" ? { w: 1440, h: 900 } : { w: window.innerWidth, h: window.innerHeight },
  );
  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return size;
}

function SelectedWorksScroll() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const { w: vw, h: vh } = useViewport();
  const compact = vw < COMPACT_BELOW;

  useEffect(() => {
    let raf = null;
    const update = () => {
      raf = null;
      const el = sectionRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const raw = total > 0 ? -el.getBoundingClientRect().top / total : 0;
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, []);

  const last = WORKS.length - 1;
  const pos = progress * last;
  const active = Math.round(pos);
  const sideMargin = compact ? 24 : 0;
  const cardScale = Math.min(1, (vh * (compact ? 0.55 : 0.66)) / CARD_H, (vw - sideMargin * 2) / CARD_W);
  const cardW = CARD_W * cardScale;
  const cardH = CARD_H * cardScale;
  const step = cardH + CARD_GAP;
  const thumbW = compact ? 40 : 56;
  const thumbScale = thumbW / CARD_W;

  const goTo = (index) => {
    const el = sectionRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + (index * SCROLL_PER_WORK_VH * window.innerHeight) / 100, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0c]"
      style={{ height: `${last * SCROLL_PER_WORK_VH + 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="absolute left-1/2"
          style={{
            top: compact ? "46%" : "50%",
            marginTop: -cardH / 2,
            width: cardW,
            marginLeft: -cardW / 2,
            transform: `translateY(${-pos * step}px)`,
          }}
        >
          <div className="flex flex-col" style={{ gap: CARD_GAP }}>
            {WORKS.map(({ Card, name }, i) => (
              <div
                key={name}
                className="relative shrink-0"
                style={{
                  width: cardW,
                  height: cardH,
                  opacity: Math.max(0.2, 1 - Math.abs(i - pos) * 0.75),
                }}
              >
                <div className="overflow-hidden rounded-[30px]" style={{ width: cardW, height: cardH }}>
                  <div style={{ width: CARD_W, height: CARD_H, transform: `scale(${cardScale})`, transformOrigin: "top left" }}>
                    <Card />
                  </div>
                </div>
                <p
                  className="absolute top-0 hidden font-urbanist text-[12px] tracking-[0.2em] whitespace-nowrap text-white/50 uppercase lg:block"
                  style={{ left: "100%", marginLeft: 20, writingMode: "vertical-rl" }}
                >
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0a0a0c] from-60% to-transparent lg:hidden" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0a0a0c] from-65% to-transparent lg:hidden" />

        <div className="pointer-events-none absolute bottom-8 left-6 lg:bottom-12 lg:left-[100px]">
          <p className="font-urbanist text-[12px] tracking-[0.2em] text-white/50 uppercase lg:text-[14px]">
            {String(active + 1).padStart(2, "0")} / {String(WORKS.length).padStart(2, "0")} &nbsp;·&nbsp; {WORKS[active].name}
          </p>
          <h2 className="mt-2 font-urbanist text-[34px] leading-[1.05] font-semibold text-white lg:mt-3 lg:text-[56px]">
            Selected
            <br />
            works
          </h2>
        </div>

        <div className="absolute top-7 left-1/2 flex -translate-x-1/2 flex-row items-center gap-4 lg:top-1/2 lg:right-[100px] lg:left-auto lg:-translate-y-1/2 lg:translate-x-0 lg:flex-col lg:gap-5">
          {WORKS.map(({ Card, name }, i) => (
            <button
              key={name}
              type="button"
              aria-label={`Show ${name}`}
              onClick={() => goTo(i)}
              className="block cursor-pointer overflow-hidden rounded-[6px] transition-all duration-500 lg:rounded-[8px]"
              style={{
                width: thumbW,
                height: (CARD_H * thumbW) / CARD_W,
                transform: `rotate(${i % 2 === 0 ? -7 : 7}deg) scale(${i === active ? 1.3 : 1})`,
                opacity: i === active ? 1 : 0.4,
              }}
            >
              <div style={{ width: CARD_W, height: CARD_H, transform: `scale(${thumbScale})`, transformOrigin: "top left", pointerEvents: "none" }}>
                <Card />
              </div>
            </button>
          ))}
        </div>

        <p
          className="pointer-events-none absolute right-[100px] bottom-12 hidden font-urbanist text-[12px] tracking-[0.2em] text-white/50 uppercase transition-opacity duration-500 lg:block"
          style={{ opacity: progress > 0.95 ? 0 : 1 }}
        >
          Scroll down
        </p>
      </div>
    </section>
  );
}

export default function SelectedWorks() {
  return <SelectedWorksScroll />;
}
