import React from "react";
import HeroEmergency from "../../emergency/HeroEmergency";
import CareSection from "../../emergency/CareSection";
import WhyDental from "../../dentalCare/WhyDental";
import Accordion from "../../emergency/AccordianEmergency";
import WeLook from "../../emergency/WeLook";

function Emergency() {
  return (
    <>
      <HeroEmergency />
      <CareSection />
      <WhyDental />
      <Accordion />
      <WeLook />
    </>
  );
}

export default Emergency;
