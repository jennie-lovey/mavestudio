import mockupIphone15A from "../assets/figma/mockup-iphone-15-a.png";
import mockupIphone15B from "../assets/figma/mockup-iphone-15-b.png";
import mockupIphone17eA from "../assets/figma/mockup-iphone-17e-a.png";
import mockupIphone17eB from "../assets/figma/mockup-iphone-17e-b.png";
import mockupIphone17 from "../assets/figma/mockup-iphone-17.png";
import mockupIphone17eC from "../assets/figma/mockup-iphone-17e-c.png";
import image230 from "../assets/figma/image-230.png";
import image202 from "../assets/figma/image-202.png";

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

function WorkCards() {
  return (
    <>
      <div
        className="flex shrink-0 items-center justify-center gap-[26.54px] overflow-hidden rounded-[30px] bg-[#141416] py-[69.347px]"
        style={{ width: "607px", height: "647px" }}
      >
        <img src={mockupIphone15A} alt="Travel app before" style={{ width: "262.098px", height: "543.003px" }} className="object-cover" />
        <img src={mockupIphone15B} alt="Travel app after" style={{ width: "262.098px", height: "543.003px" }} className="object-cover" />
      </div>

      <div
        className="flex shrink-0 items-center justify-center overflow-hidden rounded-[30px] bg-[#141416] py-[69.347px]"
        style={{ width: "607px", height: "647px" }}
      >
        <div className="flex items-center justify-center gap-[26px] px-[103.5px] py-[51.4px]">
          <img src={mockupIphone17eA} alt="Kora app before" style={{ width: "259.159px", height: "524.638px" }} className="object-cover" />
          <img src={mockupIphone17eB} alt="Kora app after" style={{ width: "260.187px", height: "526.72px" }} className="object-cover" />
        </div>
      </div>

      <div
        className="relative shrink-0 overflow-hidden rounded-[30px] bg-[rgba(20,20,22,0.95)]"
        style={{ width: "607px", height: "647px" }}
      >
        <img
          src={image230}
          alt="Before"
          className="absolute rounded-xl object-cover"
          style={{ left: "44.58px", top: "69.81px", width: "238.316px", height: "515.188px" }}
        />
        <img
          src={mockupIphone17}
          alt="After"
          className="absolute object-cover"
          style={{ left: "306.79px", top: "70px", width: "249.132px", height: "515px" }}
        />
        <BeforeAfterLabels leftBefore="188px" leftAfter="446px" top="28px" />
      </div>

      <div
        className="relative shrink-0 overflow-hidden rounded-[30px] bg-[#141416]"
        style={{ width: "607px", height: "647px" }}
      >
        <div className="flex h-full items-center justify-center gap-[10px] py-[49px]">
          <img src={image202} alt="Before" style={{ width: "258.733px", height: "523.184px" }} className="object-contain" />
          <img src={mockupIphone17eC} alt="After" style={{ width: "258.733px", height: "523.184px" }} className="object-cover" />
        </div>
        <BeforeAfterLabels leftBefore="164px" leftAfter="431px" top="26px" />
      </div>
    </>
  );
}

export default function SelectedWorks() {
  return (
    <section className="overflow-hidden bg-[#0a0a0c] py-24">
      <h2 className="mb-12 px-6 font-urbanist text-[40px] font-semibold text-white md:px-10 lg:px-[100px]">
        Selected works
      </h2>

      <div className="overflow-hidden">
        <div className="carousel-track flex w-max gap-[30px] pb-4 pl-6 md:pl-10 lg:pl-[100px]">
          <WorkCards />
          <div className="shrink-0" style={{ width: "30px" }} />
          <WorkCards />
        </div>
      </div>
    </section>
  );
}
