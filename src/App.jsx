import Hero from "./components/Hero";
import BeforeAfter from "./components/BeforeAfter";
import TrustStatement from "./components/TrustStatement";
import WhatWeDo from "./components/WhatWeDo";
import SelectedWorks from "./components/SelectedWorks";
import Pricing from "./components/Pricing";
import FinalCTA from "./components/FinalCTA";
import SmoothCursor from "./components/SmoothCursor";
import ContactPage from "./components/ContactPage";

function App() {
  const isContactPage = window.location.pathname.replace(/\/+$/, "") === "/contact";

  if (isContactPage) {
    return (
      <div className="bg-[#0a0a0c]">
        <SmoothCursor />
        <ContactPage />
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0c]">
      <SmoothCursor />
      <Hero />
      <BeforeAfter />
      <TrustStatement />
      <WhatWeDo />
      <SelectedWorks />
      <Pricing />
      <FinalCTA />
    </div>
  );
}

export default App;
