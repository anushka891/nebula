import React from "react";
import HeroSpray from "../../Spray/HeroSpray";
import AboutSection from "../../Spray/AboutSection";
import Accordion from "../../Spray/WhySection";
import WhyHeading from "../../Spray/WhyHeading";
import ChooseSection from "../../Spray/ChooseSection";

function SpraySection() {
  return (
    <>
      <HeroSpray />
      <AboutSection />
      <WhyHeading />
      <Accordion />
      <ChooseSection />
    </>
  );
}

export default SpraySection;
