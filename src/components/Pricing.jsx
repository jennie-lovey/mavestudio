import checkIcon from "../assets/figma/check-icon-a.svg";
import vector568 from "../assets/figma/vector-568.svg";
import FigmaFrame from "./FigmaFrame";
import RevealOnScroll from "./RevealOnScroll";

const plans = [
  {
    name: "Redesign mvp",
    description: (
      <>
        For early founders who need their MVP
        <br />
        to finally look and feel right.
      </>
    ),
    price: "$2,500",
    featured: false,
    features: [
      "Moodboard & direction before full design starts",
      "2 check-ins per week",
      "UI/UX redesign for core screens and flows",
      "No unnecessary meetings",
      "Web or mobile — one platform per project",
      "Final files delivered in Figma",
    ],
  },
  {
    name: "Full Product Experience",
    description: (
      <>
        For growing products that need a
        <br />
        complete design overhaul across platforms.
      </>
    ),
    price: "$5,000",
    featured: true,
    features: [
      "3 check-ins per week",
      "Moodboard & direction before full design starts",
      "Full visual and interaction redesign",
      "Web + mobile design included",
      "Fully responsive",
      "Final files delivered in Figma",
    ],
  },
];

function BookCallButton({ className = "", textClassName = "" }) {
  return (
    <a
      href="https://cal.com/mavestudios/30min"
      target="_blank"
      rel="noreferrer"
      className={`flex w-full items-center justify-center overflow-hidden rounded-[58px] bg-[rgba(101,101,101,0.13)] transition hover:bg-[rgba(101,101,101,0.24)] ${className}`}
    >
      <p className={`font-aeonik font-medium whitespace-nowrap text-white ${textClassName}`}>
        Book a call
      </p>
    </a>
  );
}

function MobilePlanCard({ plan }) {
  return (
    <div className="flex flex-col items-start gap-6 overflow-hidden rounded-[24px] bg-gradient-to-b from-[#141416] to-[38%] to-[#0a0a0c] p-6">
      <div
        className={
          plan.featured
            ? "flex w-full flex-col items-start gap-5 rounded-[20px] bg-gradient-to-b from-[#131621] to-[#1e253f] px-5 py-4"
            : "flex flex-col items-start gap-5"
        }
      >
        <h3 className="font-aeonik text-[26px] font-medium text-white">{plan.name}</h3>
        <div className="flex flex-col items-start gap-3">
          <p className="font-urbanist text-[18px] font-medium text-white/90">
            {plan.description}
          </p>
          <p className="font-urbanist text-[32px] font-bold text-white">{plan.price}</p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4">
        <p className="font-urbanist text-[18px] font-medium text-white">What&rsquo;s included:</p>
        <div className="flex flex-col items-start gap-3">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <img src={checkIcon} alt="" className="size-[22px] shrink-0" />
              <p className="font-urbanist text-[16px] text-white">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <BookCallButton className="py-4" textClassName="text-[20px]" />
    </div>
  );
}

function MobilePricing() {
  return (
    <section className="relative block overflow-hidden bg-[#0a0a0c] px-6 pt-16 pb-16 md:hidden">
      <p className="relative z-10 mb-1 font-aeonik text-[16px] text-[rgba(255,255,255,0.68)]">
        Pricing
      </p>

      <RevealOnScroll
        as="p"
        className="relative z-10 mb-10 font-manrope text-[32px] font-medium text-white"
      >
        Find the right fit for your project.
      </RevealOnScroll>

      <div className="relative z-10 flex flex-col gap-6">
        {plans.map((plan, i) => (
          <RevealOnScroll key={plan.name} style={{ animationDelay: `${i * 0.15}s` }}>
            <MobilePlanCard plan={plan} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

function DesktopPlanCard({ plan }) {
  return (
    <div
      className="relative flex flex-col items-start gap-[41px] overflow-hidden rounded-[30px] bg-gradient-to-b from-[#141416] to-[38%] to-[#0a0a0c] px-[35px] py-[39px]"
      style={{ width: "578px", minHeight: "756px" }}
    >
      <div
        className={
          plan.featured
            ? "flex flex-col items-start gap-[26px] rounded-[30px] bg-gradient-to-b from-[#131621] to-[#1e253f] px-[23px] py-4"
            : "flex flex-col items-start gap-[26px]"
        }
      >
        <h3 className="font-aeonik text-[30px] font-medium text-white">
          {plan.name}
        </h3>
        <div className="flex flex-col items-start gap-[23px]">
          <p className="font-urbanist text-[24px] font-medium text-white/90">
            {plan.description}
          </p>
          <p className="font-urbanist text-[36px] font-bold text-white">
            {plan.price}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-5">
        <p className="font-urbanist text-[22px] font-medium text-white">
          What&rsquo;s included:
        </p>
        <div className="flex flex-col items-start gap-5">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <img src={checkIcon} alt="" className="size-[25px] shrink-0" />
              <p className="font-urbanist text-[20px] text-white">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>

      <BookCallButton className="py-[21px]" textClassName="text-[30px]" />
    </div>
  );
}

function DesktopPricing() {
  return (
    <div className="hidden md:block">
      <FigmaFrame width={1440} height={1139} className="bg-[#0a0a0c]">
        <div
          className="absolute"
          style={{ left: "1093px", top: "874px", width: "836px", height: "265px" }}
        >
          <div className="pattern-drift absolute" style={{ inset: "-188.68% -59.81%" }}>
            <img src={vector568} alt="" className="block size-full max-w-none" />
          </div>
        </div>

        <RevealOnScroll
          as="p"
          className="absolute font-aeonik text-[24px] text-[rgba(255,255,255,0.68)] whitespace-nowrap"
          style={{ left: "107px", top: "32px" }}
        >
          Pricing
        </RevealOnScroll>

        <RevealOnScroll
          as="p"
          className="absolute -translate-x-1/2 text-center font-manrope text-[40px] font-medium whitespace-nowrap text-white"
          style={{ left: "406.5px", top: "88px", animationDelay: "0.1s" }}
        >
          Find the right fit for your project.
        </RevealOnScroll>

        <div
          className="absolute flex items-stretch gap-[39px]"
          style={{ left: "121px", top: "200px" }}
        >
          {plans.map((plan, i) => (
            <RevealOnScroll key={plan.name} style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
              <DesktopPlanCard plan={plan} />
            </RevealOnScroll>
          ))}
        </div>
      </FigmaFrame>
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <MobilePricing />
      <DesktopPricing />
    </>
  );
}
