import unionIcon from "../assets/figma/union.svg";
import image244 from "../assets/figma/image-244.png";
import FigmaFrame from "./FigmaFrame";
import { useScrollReveal, RevealWords } from "./TextReveal";

const TOTAL_WORDS = 4 + 4 + 2;

const LINE_1 = [
  { text: "Mave", className: "text-[rgba(255,255,255,0.28)]" },
  { text: "studio", className: "" },
  { text: " takes the apps ", className: "text-[rgba(255,255,255,0.48)]" },
  { text: "and websites ", className: "" },
];

const LINE_3 = [
  { text: "AI helped you rush, and ", className: "" },
  { text: "redesigns them", className: "text-[rgba(255,255,255,0.45)]" },
  { text: " into something ", className: "" },
  { text: "people", className: "text-[rgba(255,255,255,0.43)]" },
];

const LINE_4 = [
  { text: " ", className: "text-[rgba(255,255,255,0.43)]" },
  { text: "trust.", className: "" },
];

function MobileTrustStatement() {
  const [ref, progress] = useScrollReveal();

  return (
    <section className="relative block overflow-hidden bg-[#0a0a0c] px-6 py-16 lg:hidden">
      <img
        src={image244}
        alt=""
        className="pattern-drift pointer-events-none absolute inset-0 size-full object-cover opacity-25"
      />

      <img src={unionIcon} alt="" className="relative mb-8 h-[22px] w-[16px]" />

      <div ref={ref} className="font-manrope text-[32px] font-medium leading-snug whitespace-pre-wrap text-white">
        <p className="mb-0">
          <RevealWords segments={LINE_1} progress={progress} startIndex={0} totalWords={TOTAL_WORDS} />
        </p>
        <p className="mb-0">&#8203;</p>
        <p className="mb-0">
          <RevealWords segments={LINE_3} progress={progress} startIndex={LINE_1.length} totalWords={TOTAL_WORDS} />
        </p>
        <p>
          <RevealWords
            segments={LINE_4}
            progress={progress}
            startIndex={LINE_1.length + LINE_3.length}
            totalWords={TOTAL_WORDS}
          />
        </p>
      </div>

      <a
        href="https://cal.com/mavestudios/30min"
        target="_blank"
        rel="noreferrer"
        className="mt-10 flex h-[64px] w-fit items-center justify-center rounded-[58px] border border-white/15 bg-white/10 px-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_24px_rgba(0,0,0,0.3)] backdrop-blur-xl transition hover:bg-white/20"
      >
        <p className="font-urbanist text-[18px] font-medium whitespace-nowrap text-[#dadada]">
          Let&rsquo;s chat about your product
        </p>
      </a>
    </section>
  );
}

function DesktopTrustStatement() {
  const [ref, progress] = useScrollReveal();

  return (
    <div className="hidden lg:block">
      <FigmaFrame width={1440} height={614} className="bg-[#0a0a0c]">
        <div
          className="absolute -translate-x-1/2 flex items-center justify-center"
          style={{ left: "calc(50% - 2.93px)", top: "-91.9px", width: "1449.588px", height: "818.266px" }}
        >
          <div className="flex-none" style={{ transform: "rotate(90.17deg)" }}>
            <div className="pattern-drift relative" style={{ width: "814.068px", height: "1447.231px" }}>
              <img
                src={image244}
                alt=""
                className="pointer-events-none absolute inset-0 size-full object-cover opacity-40"
              />
            </div>
          </div>
        </div>

        <div
          className="absolute flex flex-col items-start justify-center gap-11"
          style={{ left: "256px", top: 0, bottom: 0, right: "338px" }}
        >
          <img src={unionIcon} alt="" className="h-[17.484px] w-[13.11px]" />

          <div ref={ref} className="w-[678px] font-manrope text-[40px] font-medium whitespace-pre-wrap text-white">
            <p className="mb-0">
              <RevealWords segments={LINE_1} progress={progress} startIndex={0} totalWords={TOTAL_WORDS} />
            </p>
            <p className="mb-0">&#8203;</p>
            <p className="mb-0">
              <RevealWords segments={LINE_3} progress={progress} startIndex={LINE_1.length} totalWords={TOTAL_WORDS} />
            </p>
            <p>
              <RevealWords
            segments={LINE_4}
            progress={progress}
            startIndex={LINE_1.length + LINE_3.length}
            totalWords={TOTAL_WORDS}
          />
            </p>
          </div>

          <a
            href="https://cal.com/mavestudios/30min"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center overflow-hidden rounded-[58px] border border-white/15 bg-white/10 py-[21px] shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_24px_rgba(0,0,0,0.3)] backdrop-blur-xl transition hover:bg-white/20"
            style={{ width: "319px", transform: "scale(calc(1 / var(--figma-scale, 1)))", transformOrigin: "left center" }}
          >
            <p className="font-urbanist text-[20px] font-medium whitespace-nowrap text-[#dadada]">
              Let&rsquo;s chat about your product
            </p>
          </a>
        </div>
      </FigmaFrame>
    </div>
  );
}

export default function TrustStatement() {
  return (
    <>
      <MobileTrustStatement />
      <DesktopTrustStatement />
    </>
  );
}
