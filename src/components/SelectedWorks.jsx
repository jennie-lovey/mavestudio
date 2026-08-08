import mockupIphone15A from "../assets/figma/mockup-iphone-15-a.png";
import mockupIphone15B from "../assets/figma/mockup-iphone-15-b.png";
import mockupIphone17eA from "../assets/figma/mockup-iphone-17e-a.png";
import mockupIphone17eB from "../assets/figma/mockup-iphone-17e-b.png";
import mockupIphone17Before from "../assets/figma/mockup-iphone-17-before.png";
import mockupIphone17After from "../assets/figma/mockup-iphone-17-after.png";
import image97 from "../assets/figma/image-97.png";
import FigmaFrame from "./FigmaFrame";

const MOBILE_SCALE = 345.6 / 607;

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

function ScaledCard({ Card }) {
  return (
    <div className="shrink-0 overflow-hidden rounded-[30px]" style={{ width: 607 * MOBILE_SCALE, height: 647 * MOBILE_SCALE }}>
      <div style={{ width: 607, height: 647, transform: `scale(${MOBILE_SCALE})`, transformOrigin: "top left" }}>
        <Card />
      </div>
    </div>
  );
}

function MobileSelectedWorks() {
  return (
    <section className="block bg-[#0a0a0c] py-16 md:hidden">
      <h2 className="mb-8 px-6 font-urbanist text-[28px] font-semibold text-white">
        Selected works
      </h2>

      <div className="mt-[20px] flex flex-col items-center gap-4">
        <ScaledCard Card={WorkCard1} />
        <ScaledCard Card={WorkCard2} />
        <ScaledCard Card={WorkCard3} />
        <ScaledCard Card={WorkCard4} />
      </div>
    </section>
  );
}

function DesktopSelectedWorks() {
  return (
    <section className="hidden bg-[#0a0a0c] py-24 md:block">
      <h2 className="mb-12 px-10 font-urbanist text-[40px] font-semibold text-white lg:px-[100px]">
        Selected works
      </h2>

      <div className="mt-[20px] px-10 lg:px-[100px]">
        <FigmaFrame width={1230} height={1324} className="bg-[#0a0a0c]">
          <div className="absolute flex flex-col gap-[30px]" style={{ top: 0, left: 0 }}>
            <div className="flex gap-[16px]">
              <WorkCard1 />
              <WorkCard2 />
            </div>

            <div className="flex gap-[16px]">
              <WorkCard3 />
              <WorkCard4 />
            </div>
          </div>
        </FigmaFrame>
      </div>
    </section>
  );
}

export default function SelectedWorks() {
  return (
    <>
      <MobileSelectedWorks />
      <DesktopSelectedWorks />
    </>
  );
}
