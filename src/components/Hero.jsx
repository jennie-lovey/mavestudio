import logoMark from "../assets/figma/logo-mark.svg";
import heroScrollIcon from "../assets/figma/hero-scroll-icon.svg";
import FigmaFrame from "./FigmaFrame";
import RevealOnScroll from "./RevealOnScroll";
import RotatingWord from "./RotatingWord";
import useGentleParallax from "../useGentleParallax";

const HERO_ROTATING_WORDS = ["Experience", "Interfaces", "Products"];

const GRID_COLS = 22;
const GRID_COL_SPACING = 65;
const GRID_ROWS = 19;
const GRID_ROW_SPACING = 57;

const PLUS_MARKS = [
  { left: 1270.5, top: 915 },
  { left: 38.06, top: 631 },
  { left: 816.51, top: 687 },
  { left: 817.52, top: 231 },
  { left: 362.53, top: 459 },
  { left: 687, top: 287 },
];

function PlusMark({ left, top, delay = 0 }) {
  return (
    <div
      className="star-twinkle absolute"
      style={{ left, top, animationDelay: `${delay}s` }}
    >
      <div className="absolute h-[42px] w-px -translate-x-1/2 -translate-y-1/2 rounded-[1px] bg-[rgba(255,255,255,0.24)]" />
      <div className="absolute h-px w-[42px] -translate-x-1/2 -translate-y-1/2 rounded-[1px] bg-[rgba(255,255,255,0.24)]" />
    </div>
  );
}

function HeroPattern() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-[37px] top-0 h-[1021px] w-[1365px] opacity-[0.025]">
        {Array.from({ length: GRID_COLS }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-[1021px] w-px bg-white"
            style={{ left: `${i * GRID_COL_SPACING}px` }}
          />
        ))}
      </div>
      <div className="absolute left-0 top-0 h-[1048px] w-[1440px] opacity-[0.025]">
        {Array.from({ length: GRID_ROWS }).map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px bg-[#d9d9d9]"
            style={{ top: `${i * GRID_ROW_SPACING}px` }}
          />
        ))}
      </div>
      {PLUS_MARKS.map((mark, i) => (
        <PlusMark key={i} left={mark.left} top={mark.top} delay={i * 0.6} />
      ))}
    </div>
  );
}

function MobileHero() {
  return (
    <section className="relative block overflow-hidden bg-[#0e111e] px-6 pb-8 pt-8 lg:hidden">
      <div className="pointer-events-none absolute inset-0 bg-[rgba(7,7,7,0.93)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 700px at 50% 30%, rgba(70,95,145,0.55) 0%, rgba(60,78,130,0.4) 30%, rgba(42,53,94,0.16) 62%, rgba(14,17,30,0) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, #fff 0 1px, transparent 1px 40px), repeating-linear-gradient(to bottom, #d9d9d9 0 1px, transparent 1px 36px)",
        }}
      />

      <div className="relative flex items-center justify-between">
        <div className="flex items-start gap-[2px]">
          <span className="-mt-1 font-manrope text-[24px] font-normal whitespace-nowrap text-white">
            mavestudios
          </span>
          <img src={logoMark} alt="" className="-mt-1 block size-[18px]" />
        </div>
        <img src={heroScrollIcon} alt="" className="-mt-2 block size-[44px]" />
      </div>

      <div className="relative mt-32 flex flex-col items-center gap-[20px] text-center">
        <RevealOnScroll
          as="div"
          immediate
          className="font-manrope text-[44px] font-medium leading-[1.1] text-white"
          style={{ animationDelay: "0.06s" }}
        >
          <p className="mb-0">Designing for</p>
          <p>
            Better <RotatingWord words={HERO_ROTATING_WORDS} />
          </p>
        </RevealOnScroll>

        <RevealOnScroll
          as="a"
          href="https://cal.com/mavestudios/30min"
          target="_blank"
          rel="noreferrer"
          immediate
          className="flex items-center justify-center rounded-[58px] bg-[#1e1e1e] px-8 py-[21px] transition hover:bg-[#3a3a3a]"
          style={{ animationDelay: "0s" }}
        >
          <p className="font-manrope text-[18px] font-semibold whitespace-nowrap text-white">
            Book discovery call
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function DesktopHero() {
  return (
    <div className="hidden lg:block">
      <FigmaFrame width={1440} height={1024} className="bg-[#0e111e]">
        <div className="absolute left-1/2 top-px h-[1020px] w-[1440px] -translate-x-1/2 bg-[rgba(7,7,7,0.93)]" />

        <HeroPattern />

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0"
          style={{
            top: "620px",
            background: "linear-gradient(to bottom, rgba(42,52,94,0) 0%, rgba(42,52,94,0.35) 55%, rgba(58,72,120,0.55) 100%)",
          }}
        />

        <div className="absolute left-[97px] top-[61px]">
          <span className="font-manrope text-[32px] font-normal whitespace-nowrap text-white">
            mavestudios
          </span>
          <img
            src={logoMark}
            alt=""
            className="absolute block max-w-none"
            style={{ left: "182px", top: "-4px", width: "49.648px", height: "49.648px" }}
          />
        </div>

        <div
          className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center gap-8 text-center"
          style={{ top: "330px" }}
        >
          <RevealOnScroll
            as="div"
            immediate
            className="font-manrope text-[80px] font-medium leading-[1.1] whitespace-nowrap text-white"
            style={{ animationDelay: "0.06s" }}
          >
            <p className="mb-0">Designing for</p>
            <p>
              Better <RotatingWord words={HERO_ROTATING_WORDS} />
            </p>
          </RevealOnScroll>

          <RevealOnScroll
            as="a"
            href="https://cal.com/mavestudios/30min"
            target="_blank"
            rel="noreferrer"
            immediate
            className="mt-4 flex w-[252px] items-center justify-center rounded-[58px] bg-[#1e1e1e] py-[21px] transition hover:bg-[#3a3a3a]"
            style={{ animationDelay: "0s" }}
          >
            <p className="font-manrope text-[18px] font-semibold whitespace-nowrap text-white">
              Book discovery call
            </p>
          </RevealOnScroll>
        </div>

        <img
          src={heroScrollIcon}
          alt=""
          className="absolute size-[59px]"
          style={{ left: "1323px", top: "62px" }}
        />
      </FigmaFrame>
    </div>
  );
}

export default function Hero() {
  const parallaxRef = useGentleParallax();

  return (
    <div ref={parallaxRef} className="relative">
      <MobileHero />
      <DesktopHero />
    </div>
  );
}
