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
      <div className="absolute left-[37px] top-0 h-[1021px] w-[1365px] opacity-[0.04]">
        {Array.from({ length: GRID_COLS }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-[1021px] w-px bg-white"
            style={{ left: `${i * GRID_COL_SPACING}px` }}
          />
        ))}
      </div>
      <div className="absolute left-0 top-0 h-[1048px] w-[1440px] opacity-[0.04]">
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
    <section className="relative block overflow-hidden bg-[#0e111e] px-6 pb-8 pt-12 lg:hidden">
      <div className="pointer-events-none absolute inset-0 bg-[rgba(7,7,7,0.93)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 700px at 50% 30%, rgba(70,95,145,0.55) 0%, rgba(60,78,130,0.4) 30%, rgba(42,53,94,0.16) 62%, rgba(14,17,30,0) 100%)",
        }}
      />

      <div className="relative flex items-center gap-2">
        <span className="font-manrope text-[24px] font-normal whitespace-nowrap text-white">
          mavestudios
        </span>
        <img src={logoMark} alt="" className="block size-[32px]" />
      </div>

      <div className="relative mt-24 flex flex-col items-center gap-10 text-center">
        <RevealOnScroll
          as="p"
          immediate
          className="font-manrope text-[44px] font-medium leading-[1.1] text-white"
          style={{ animationDelay: "0.06s" }}
        >
          Designing for Better
          <br />
          <RotatingWord words={HERO_ROTATING_WORDS} />
        </RevealOnScroll>

        <RevealOnScroll
          as="a"
          href="https://cal.com/mavestudios/30min"
          target="_blank"
          rel="noreferrer"
          immediate
          className="mt-4 flex items-center justify-center border-x border-solid border-[rgba(255,255,255,0.12)] bg-[rgba(13,13,13,0.1)] px-7 py-3.5 transition hover:bg-[rgba(13,13,13,0.2)]"
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
        className="relative mt-16 ml-auto mr-6 block size-[52px]"
      />
    </section>
  );
}

function DesktopHero() {
  return (
    <div className="hidden lg:block">
      <FigmaFrame width={1440} height={1024} className="bg-[#0e111e]">
        <div className="absolute left-1/2 top-px h-[1020px] w-[1440px] -translate-x-1/2 bg-[rgba(7,7,7,0.93)]" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1350px 1150px at 1230px 620px, rgba(70,95,145,0.6) 0%, rgba(60,78,130,0.46) 28%, rgba(50,63,112,0.3) 48%, rgba(42,53,94,0.16) 68%, rgba(30,37,68,0.06) 85%, rgba(14,17,30,0) 100%)",
          }}
        />

        <HeroPattern />

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
            as="p"
            immediate
            className="font-manrope text-[80px] font-medium leading-[1.1] whitespace-nowrap text-white"
            style={{ animationDelay: "0.06s" }}
          >
            Designing for Better
            <br />
            <RotatingWord words={HERO_ROTATING_WORDS} />
          </RevealOnScroll>

          <RevealOnScroll
            as="a"
            href="https://cal.com/mavestudios/30min"
            target="_blank"
            rel="noreferrer"
            immediate
            className="mt-4 flex items-center justify-center border-x border-solid border-[rgba(255,255,255,0.12)] bg-[rgba(13,13,13,0.1)] px-9 py-4 transition hover:bg-[rgba(13,13,13,0.2)]"
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
          className="absolute size-[70px]"
          style={{ left: "1236px", top: "760px" }}
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
