import React from "react";
import HeroSurgery from "../../Surgery/HeroSurgery";
import AboutSection from "../../Surgery/AboutSection";
import WhySection from "./../../Surgery/WhySection";
import WhyHeading from "../../Surgery/WhyHeading";
import ChooseSection from "../../Surgery/ChooseSection";

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
