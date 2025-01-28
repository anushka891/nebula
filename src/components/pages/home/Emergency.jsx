import React from "react";
import HeroEmergency from "../../Emergency/HeroEmergency";
import CareSection from "../../Emergency/CareSection";
import WhyDental from "../../DentalCare/WhyDental";
import Accordion from "../../Emergency/AccordianEmergency";
import WeLook from "../../Emergency/WeLook";

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
