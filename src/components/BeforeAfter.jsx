import image202 from "../assets/figma/image-202.png";
import image230 from "../assets/figma/image-230.png";
import image238 from "../assets/figma/image-238.png";
import koraBefore1 from "../assets/figma/kora-before-1.png";
import koraBefore2 from "../assets/figma/kora-before-2.png";
import koraAfter1 from "../assets/figma/kora-after-1.png";
import koraAfter2 from "../assets/figma/kora-after-2.png";
import card2After from "../assets/figma/card2-after.png";
import afterDriftCoffee1 from "../assets/figma/after-drift-coffee-1.png";
import afterDriftCoffee2 from "../assets/figma/after-drift-coffee-2.png";
import vector564 from "../assets/figma/vector-564.svg";
import vector566 from "../assets/figma/vector-566.svg";
import FigmaFrame from "./FigmaFrame";
import DiagonalBeforeAfter from "./DiagonalBeforeAfter";
import { useScrollReveal, RevealWords } from "./TextReveal";

const MOBILE_SCALE_A = 368.045 / 609.532;
const MOBILE_SCALE_B = 368.045 / 574;
const MOBILE_SCALE_C = 368.045 / 691;

const HEADING_LINE_1 = [{ text: "We redesign the apps AI rushed ", className: "" }];
const HEADING_LINE_2 = [{ text: " so they finally feel right", className: "" }];
const HEADING_TOTAL_WORDS = 6 + 5;

function Card1({ scale = 1 }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-[30px] border-[1.337px] border-solid border-[rgba(255,255,255,0.07)] bg-[rgba(52,52,52,0.24)]"
      style={{ width: 609.532 * scale, height: 663 * scale }}
    >
      <div className="relative" style={{ width: 609.532, height: 663, transform: `scale(${scale})`, transformOrigin: "top left" }}>
        <DiagonalBeforeAfter
          className="rounded-[30px]"
          style={{ position: "absolute", inset: 0 }}
          before={
            <>
              <img
                src={image230}
                alt="Before redesign"
                className="absolute object-cover pointer-events-none"
                style={{ left: "44.66px", top: "68.56px", width: "242.375px", height: "523.963px" }}
              />
              <img
                src={image238}
                alt="Before redesign, map view"
                className="absolute object-cover pointer-events-none"
                style={{ left: "309.23px", top: "57.66px", width: "252.455px", height: "545.752px" }}
              />
            </>
          }
          after={
            <>
              <img
                src={afterDriftCoffee2}
                alt="After redesign"
                className="absolute object-contain pointer-events-none"
                style={{ left: "31.9px", top: "75px", width: "248.8px", height: "514.3px" }}
              />
              <img
                src={afterDriftCoffee1}
                alt="After redesign, map view"
                className="absolute object-contain pointer-events-none"
                style={{ left: "324.7px", top: "75px", width: "254.1px", height: "514.4px" }}
              />
            </>
          }
        />
      </div>
    </div>
  );
}

function Card2({ scale = 1 }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-[30px] border-[1.161px] border-solid border-[rgba(255,255,255,0.07)] bg-[rgba(52,52,52,0.24)]"
      style={{ width: 574 * scale, height: 595 * scale }}
    >
      <div className="relative" style={{ width: 574, height: 595, transform: `scale(${scale})`, transformOrigin: "top left" }}>
        <DiagonalBeforeAfter
          className="rounded-[30px]"
          style={{ position: "absolute", inset: 0 }}
          before={
            <img
              src={image202}
              alt="Redesigned app screen"
              className="absolute -translate-x-1/2 object-cover pointer-events-none"
              style={{ left: "calc(50% + 0.5px)", top: "42.84px", width: "234.991px", height: "508px" }}
            />
          }
          after={
            <img
              src={card2After}
              alt="After redesign"
              className="absolute -translate-x-1/2 object-contain pointer-events-none"
              style={{ left: "calc(50% + 0.5px)", top: "42.84px", width: "250px", height: "508px" }}
            />
          }
        />
      </div>
    </div>
  );
}

function Card4({ scale = 1 }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-[30px] border-[1.161px] border-solid border-[rgba(255,255,255,0.07)] bg-[rgba(52,52,52,0.24)]"
      style={{ width: 691 * scale, height: 712 * scale }}
    >
      <div className="relative" style={{ width: 691, height: 712, transform: `scale(${scale})`, transformOrigin: "top left" }}>
        <DiagonalBeforeAfter
          className="rounded-[30px]"
          style={{ position: "absolute", inset: 0 }}
          before={
            <>
              <img
                src={koraBefore1}
                alt="Before redesign"
                className="absolute object-contain pointer-events-none"
                style={{ left: "78px", top: "100.84px", width: "259px", height: "508px" }}
              />
              <img
                src={koraBefore2}
                alt="Before redesign, dashboard view"
                className="absolute object-contain pointer-events-none"
                style={{ left: "357px", top: "100.84px", width: "256px", height: "505px" }}
              />
            </>
          }
          after={
            <>
              <img
                src={koraAfter1}
                alt="After redesign"
                className="absolute object-contain pointer-events-none"
                style={{ left: "78px", top: "100.84px", width: "259px", height: "508px" }}
              />
              <img
                src={koraAfter2}
                alt="After redesign, dashboard view"
                className="absolute object-contain pointer-events-none"
                style={{ left: "357px", top: "100.84px", width: "256px", height: "505px" }}
              />
            </>
          }
        />
      </div>
    </div>
  );
}

function MobileBeforeAfter() {
  const [ref, progress] = useScrollReveal();

  return (
    <section className="block bg-[#0a0a0c] pt-16 md:hidden">
      <div className="mb-6 flex items-center justify-center gap-2.5">
        <p className="font-urbanist text-[16px] font-medium whitespace-nowrap text-white">Before</p>
        <div className="h-[3px] w-[60px] shrink-0 rounded-full bg-[#d9d9d9]" />
        <p className="font-urbanist text-[16px] font-medium whitespace-nowrap text-white">After</p>
      </div>
      <h2 ref={ref} className="mb-8 px-6 text-center font-manrope text-[36px] font-medium leading-tight text-white">
        <RevealWords segments={HEADING_LINE_1} progress={progress} startIndex={0} totalWords={HEADING_TOTAL_WORDS} />
        <RevealWords segments={HEADING_LINE_2} progress={progress} startIndex={6} totalWords={HEADING_TOTAL_WORDS} />
      </h2>

      <FigmaFrame width={402} height={1266} className="bg-[#0a0a0c]">
        <div className="absolute" style={{ left: "17px", top: "0px" }}>
          <Card1 scale={MOBILE_SCALE_A} />
        </div>

        <div className="absolute" style={{ left: "17px", top: "432px" }}>
          <Card2 scale={MOBILE_SCALE_B} />
        </div>

        <div className="absolute" style={{ left: "17px", top: "846px" }}>
          <Card4 scale={MOBILE_SCALE_C} />
        </div>
      </FigmaFrame>
    </section>
  );
}

function DesktopBeforeAfter() {
  const [ref, progress] = useScrollReveal();

  return (
    <div className="hidden md:block">
      <FigmaFrame width={1440} height={1867} className="bg-[#0a0a0c]">
        <div
          className="absolute flex items-center justify-center"
          style={{ left: "-260.62px", top: "-588.34px", width: "886.047px", height: "870.643px" }}
        >
          <div className="flex-none" style={{ transform: "rotate(11.46deg)" }}>
            <div className="relative" style={{ width: "755.036px", height: "735.324px" }}>
              <img src={vector564} alt="" className="absolute inset-0 block size-full max-w-none" />
            </div>
          </div>
        </div>

        <img
          src={vector566}
          alt=""
          className="absolute block max-w-none"
          style={{ left: "1112px", top: "-467px", width: "711px", height: "777px" }}
        />

        <div className="absolute" style={{ left: "110px", top: "254px" }}>
          <Card1 />
        </div>

        <div className="absolute" style={{ left: "777px", top: "313px" }}>
          <Card2 />
        </div>

        <div className="absolute flex items-center gap-2.5" style={{ left: "1083px", top: "124px" }}>
          <p className="font-urbanist text-[20px] font-medium whitespace-nowrap text-white">Before</p>
          <div className="h-[3px] w-[86px] shrink-0 rounded-full bg-[#d9d9d9]" />
          <p className="font-urbanist text-[20px] font-medium whitespace-nowrap text-white">After</p>
        </div>

        <div
          ref={ref}
          className="absolute -translate-x-1/2 text-center font-manrope text-[40px] font-medium whitespace-nowrap text-white"
          style={{ left: "720px", top: "93px" }}
        >
          <p className="mb-0 leading-normal">
            <RevealWords segments={HEADING_LINE_1} progress={progress} startIndex={0} totalWords={HEADING_TOTAL_WORDS} />
          </p>
          <p className="leading-normal">
            <RevealWords segments={HEADING_LINE_2} progress={progress} startIndex={6} totalWords={HEADING_TOTAL_WORDS} />
          </p>
        </div>

        <div className="absolute" style={{ left: "374px", top: "1013px" }}>
          <Card4 />
        </div>
      </FigmaFrame>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <>
      <MobileBeforeAfter />
      <DesktopBeforeAfter />
    </>
  );
}
