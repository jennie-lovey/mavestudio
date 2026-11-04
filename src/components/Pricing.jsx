import checkIcon from "../assets/figma/check-icon-a.svg";
import vector568 from "../assets/figma/vector-568.svg";
import FigmaFrame from "./FigmaFrame";
import RevealOnScroll from "./RevealOnScroll";

const plans = [
  {
    name: "One-Time Project",
    description: (
      <>
        For founders with a clear
        <br />
        app or website to redesign.
      </>
    ),
    pricePrefix: "From",
    price: "$2,000",
    featured: false,
    features: [
      "Web design or mobile app design",
      "Delivered in 2 weeks",
      "Moodboard & direction before design starts",
      "Two check-ins a week",
      "Two rounds of revisions",
      "Final Figma files, ready for developers",
    ],
  },
  {
    name: "Complete Product Redesign",
    description: (
      <>
        For products that need more
        <br />
        than a quick visual refresh.
      </>
    ),
    price: "Quoted after a call",
    featured: true,
    features: [
      "A discovery call to learn your product and users",
      "Every key screen and flow redesigned",
      "Web and mobile, fully responsive",
      "A simple design system to keep things consistent",
      "Weekly check-ins from start to finish",
      "Handover files and a walkthrough for your developers",
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
    <div className={`flex flex-col items-start gap-6 overflow-hidden rounded-[24px] p-6 ${plan.featured ? "bg-[linear-gradient(170.8deg,rgb(27,34,56)_5.5%,rgb(10,10,12)_83.1%)]" : "bg-gradient-to-b from-[#18181c] to-[#101013]"}`}>
      <div
        className="flex flex-col items-start gap-5"
      >
        <h3 className="font-aeonik text-[26px] font-medium text-white">{plan.name}</h3>
        <div className="flex flex-col items-start gap-3">
          <p className="font-urbanist text-[18px] font-medium text-white/90">
            {plan.description}
          </p>
          <div className="flex flex-col items-start">
            {plan.pricePrefix && (
              <p className="font-urbanist text-[14px] font-medium text-white/60">{plan.pricePrefix}</p>
            )}
            <p className="font-urbanist text-[32px] font-bold text-white">{plan.price}</p>
          </div>
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
        Clear pricing, no surprises.
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
      className={`relative flex flex-col items-start gap-[41px] overflow-hidden rounded-[30px] px-[35px] py-[39px] ${plan.featured ? "bg-[linear-gradient(170.8deg,rgb(27,34,56)_5.5%,rgb(10,10,12)_83.1%)]" : "bg-gradient-to-b from-[#18181c] to-[#101013]"}`}
      style={{ width: "578px", minHeight: "756px" }}
    >
      <div
        className="flex flex-col items-start gap-[26px]"
      >
        <h3 className="font-aeonik text-[30px] font-medium text-white">
          {plan.name}
        </h3>
        <div className="flex flex-col items-start gap-[23px]">
          <p className="font-urbanist text-[24px] font-medium text-white/90">
            {plan.description}
          </p>
          <div className="flex flex-col items-start">
            {plan.pricePrefix && (
              <p className="font-urbanist text-[18px] font-medium text-white/60">
                {plan.pricePrefix}
              </p>
            )}
            <p className="font-urbanist text-[36px] font-bold text-white">
              {plan.price}
            </p>
          </div>
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

      <BookCallButton className="mt-auto py-[21px]" textClassName="text-[30px]" />
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
          Clear pricing, no surprises.
        </RevealOnScroll>

        <div
          className="absolute flex items-stretch gap-[39px]"
          style={{ left: "121px", top: "200px" }}
        >
          {plans.map((plan, i) => (
            <RevealOnScroll key={plan.name} className="flex" style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
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
