import React from "react";
import HeroSpray from "../../spray/HeroSpray";
import AboutSection from "../../spray/AboutSection";
import Accordion from "../../spray/WhySection";
import WhyHeading from "../../spray/WhyHeading";
import ChooseSection from "../../spray/ChooseSection";

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
