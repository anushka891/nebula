import React from "react";
import HeroSurgery from "../../surgery/HeroSurgery";
import AboutSection from "../../surgery/AboutSection";
import WhySection from "../../surgery/WhySection";
import WhyHeading from "../../surgery/WhyHeading";
import ChooseSection from "../../surgery/ChooseSection";

function Surgery() {
  return (
    <div>
      <HeroSurgery />
      <AboutSection />
      <WhyHeading />
      <WhySection />
      <ChooseSection />
    </div>
  );
}

export default Surgery;
