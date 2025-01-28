import React from "react";
import HeroDental from "../../DentalCare/HeroDental";
import AboutSection from "../../DentalCare/AboutSection";
import AccordianDental from "../../DentalCare/AccordianDental";
import WhyDental from "../../DentalCare/WhyDental";
import Experience from "../../DentalCare/Experience";
import WeLook from "../../HealthCheck/WeLook";
function DentalCare() {
  return (
    <>
      <HeroDental />
      <AboutSection />
      <WhyDental />
      <AccordianDental />
      <Experience />
    </>
  );
}

export default DentalCare;
