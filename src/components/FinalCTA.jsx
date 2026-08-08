import vector568 from "../assets/figma/vector-568.svg";
import socialIcon from "../assets/figma/social-icon.svg";
import FigmaFrame from "./FigmaFrame";
import FitText from "./FitText";
import RevealOnScroll from "./RevealOnScroll";

const CTA_TEXT = "LET’S WORK TOGETHER";
const CTA_WORDS = ["LET’S ", "WORK ", "TOGETHER"];

function CTAWords() {
  return CTA_WORDS.map((word, i) => (
    <RevealOnScroll key={word} as="span" style={{ animationDelay: `${i * 0.15}s` }}>
      {word}
    </RevealOnScroll>
  ));
}

function MobileFinalCTA() {
  return (
    <section id="contact" className="relative block overflow-hidden bg-[#0a0a0c] px-6 pt-20 md:hidden">
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="font-manrope text-[32px] font-medium leading-tight text-white">
          Ready to make your product better?
        </p>

        <p className="font-urbanist text-[18px]">
          <span className="text-white">We </span>
          <span className="text-[rgba(255,255,255,0.71)]">redesign apps </span>
          <span className="text-white">and </span>
          <span className="text-[rgba(255,255,255,0.7)]">websites into clear, </span>
          <span className="text-white">polished digital experiences that people </span>
          <span className="text-[rgba(255,255,255,0.72)]">actually enjoy using.</span>
        </p>

        <a
          href="mailto:hello@mavestudios.com"
          className="flex h-[56px] items-center justify-center transition hover:opacity-80"
        >
          <p className="font-urbanist text-[20px] font-semibold whitespace-nowrap text-white">
            Start a project
          </p>
        </a>
      </div>

      <div className="mt-16 flex flex-col items-center gap-4">
        <div className="relative flex h-[56px] w-full items-center justify-between border-x border-white/10 bg-[rgba(20,19,19,0.07)] px-5">
          <a
            href="https://cal.com/mavestudios/30min"
            target="_blank"
            rel="noreferrer"
            className="font-urbanist text-[16px] font-normal whitespace-nowrap text-white transition hover:opacity-80"
          >
            Book a call
          </a>
          <a
            href="https://twitter.com/mavestudiox"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <img src={socialIcon} alt="" className="size-[20px] shrink-0" />
            <p className="font-urbanist text-[16px] font-normal whitespace-nowrap text-white">
              mavestudiox
            </p>
          </a>
        </div>

        <p className="font-urbanist text-[14px] font-medium whitespace-nowrap text-white">
          &copy;mavestudio 2026 | All Rights Reserved
        </p>
      </div>

      <div className="relative mt-10 -mx-6 h-[52px] overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <FitText
            targetWidth={327}
            measureText={CTA_TEXT}
            className="whitespace-nowrap text-center font-manrope font-bold leading-none text-white"
          >
            <CTAWords />
          </FitText>
        </div>
      </div>
    </section>
  );
}

function DesktopFinalCTA() {
  return (
    <div className="hidden md:block">
      <FigmaFrame width={1440} height={680} className="bg-[#0a0a0c]">
        <div id="contact" className="absolute -top-24" />

        <div
          className="absolute"
          style={{ left: "1093px", top: "874px", width: "836px", height: "265px" }}
        >
          <div className="pattern-drift absolute" style={{ inset: "-188.68% -59.81%" }}>
            <img src={vector568} alt="" className="block size-full max-w-none" />
          </div>
        </div>

        <div
          className="absolute flex flex-col items-center gap-7"
          style={{ left: "447px", top: "60px" }}
        >
          <div className="text-center font-manrope text-[40px] font-medium whitespace-pre-wrap text-white" style={{ width: "544px" }}>
            <p className="mb-0 leading-normal">Ready to make your </p>
            <p className="leading-normal">product better?</p>
          </div>

          <p className="text-center font-urbanist text-[24px] font-normal" style={{ width: "446px" }}>
            <span className="leading-normal text-white">We </span>
            <span className="leading-normal text-[rgba(255,255,255,0.71)]">redesign apps </span>
            <span className="leading-normal text-white">and </span>
            <span className="leading-normal text-[rgba(255,255,255,0.7)]">websites into clear, </span>
            <span className="leading-normal text-white">polished digital experiences that people </span>
            <span className="leading-normal text-[rgba(255,255,255,0.72)]">actually enjoy using.</span>
          </p>

          <a
            href="mailto:hello@mavestudios.com"
            className="flex h-[59px] w-[252px] items-center justify-center transition hover:opacity-80"
          >
            <p className="font-urbanist text-[22px] font-semibold whitespace-nowrap text-white">
              Start a project
            </p>
          </a>
        </div>

        <div
          className="absolute -translate-x-1/2 flex flex-col items-center justify-center gap-[24px] px-[19px] py-[16px]"
          style={{ left: "calc(50% + 17px)", top: "380px", width: "1122px" }}
        >
          <div className="relative h-[59px] w-full shrink-0 border-x border-white/10 bg-[rgba(20,19,19,0.07)]">
            <a
              href="https://cal.com/mavestudios/30min"
              target="_blank"
              rel="noreferrer"
              className="absolute -translate-x-1/2 font-urbanist text-[24px] font-normal whitespace-nowrap text-white transition hover:opacity-80"
              style={{ left: "89.5px", top: "18px" }}
            >
              Book a call
            </a>
            <a
              href="https://twitter.com/mavestudiox"
              target="_blank"
              rel="noreferrer"
              className="absolute flex items-center gap-[7px]"
              style={{ left: "873px", top: "11px" }}
            >
              <img src={socialIcon} alt="" className="size-[30px] shrink-0" />
              <p className="font-urbanist text-[24px] font-normal whitespace-nowrap text-white">
                mavestudiox
              </p>
            </a>
          </div>

          <p className="mt-4 font-urbanist text-[16px] font-medium whitespace-nowrap text-white">
            &copy;mavestudio 2026 | All Rights Reserved
          </p>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "590px" }}>
          <FitText
            targetWidth={1360}
            measureText={CTA_TEXT}
            className="whitespace-nowrap font-manrope font-bold leading-none text-white"
          >
            <CTAWords />
          </FitText>
        </div>
      </FigmaFrame>
    </div>
  );
}

export default function FinalCTA() {
  return (
    <>
      <MobileFinalCTA />
      <DesktopFinalCTA />
    </>
  );
}
