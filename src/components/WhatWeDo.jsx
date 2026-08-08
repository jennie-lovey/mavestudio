import vector567 from "../assets/figma/vector-567.svg";
import FigmaFrame from "./FigmaFrame";
import { useScrollReveal, RevealWords } from "./TextReveal";

const services = [
  {
    title: "AI Vibecoded App & Website Redesign",
    description: "turning fast, AI-built products into something real",
  },
  {
    title: "UI/UX Design",
    description: "clean, usable interfaces for new products, built from scratch",
  },
];

const TOTAL_WORDS = 4;

function MobileWhatWeDo() {
  return (
    <section className="block bg-[#0a0a0c] px-6 py-16 lg:hidden">
      <p className="mb-10 text-center font-aeonik text-[24px] font-medium text-white">
        What we do
      </p>

      <div className="divide-y divide-white/10">
        {services.map((service) => (
          <div key={service.title} className="py-8 text-center">
            <p className="font-urbanist text-[28px] font-medium leading-snug text-white">
              {service.title}
            </p>
            <p className="mt-2 font-urbanist text-[18px] text-white/50">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DesktopWhatWeDo() {
  const [ref, progress] = useScrollReveal();

  return (
    <div className="hidden lg:block">
      <FigmaFrame width={1440} height={742} className="bg-[#0a0a0c]">
        <p
          className="absolute font-aeonik text-[32px] font-medium whitespace-nowrap text-white"
          style={{ left: "598.5px", top: "102px" }}
        >
          What we do
        </p>

        <p
          ref={ref}
          className="absolute -translate-x-1/2 text-center font-manrope font-medium whitespace-pre-wrap"
          style={{ left: "684px", top: "184px", width: "678px" }}
        >
          <RevealWords
            segments={[{ text: "AI Vibecoded App & Website Redesign ", className: "text-[40px] leading-normal text-white" }]}
            progress={progress}
            startIndex={0}
            totalWords={TOTAL_WORDS}
          />
          <RevealWords
            segments={[{ text: "turning fast, AI-built products into something real", className: "text-[32px] leading-normal text-[rgba(255,255,255,0.41)]" }]}
            progress={progress}
            startIndex={1}
            totalWords={TOTAL_WORDS}
          />
        </p>

        <p
          className="absolute -translate-x-1/2 text-center font-manrope text-[40px] font-medium whitespace-pre-wrap text-white"
          style={{ left: "684px", top: "433px", width: "678px" }}
        >
          <RevealWords
            segments={[{ text: "UI/UX Design\n", className: "leading-normal" }]}
            progress={progress}
            startIndex={2}
            totalWords={TOTAL_WORDS}
          />
          <RevealWords
            segments={[{ text: "clean, usable interfaces for new products, built from scratch", className: "leading-normal text-[rgba(255,255,255,0.5)]" }]}
            progress={progress}
            startIndex={3}
            totalWords={TOTAL_WORDS}
          />
        </p>

        <img
          src={vector567}
          alt=""
          className="absolute block max-w-none"
          style={{ left: "310px", top: "402.5px", width: "786px", height: "1px" }}
        />
      </FigmaFrame>
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <>
      <MobileWhatWeDo />
      <DesktopWhatWeDo />
    </>
  );
}
