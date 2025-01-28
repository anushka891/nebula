import React from "react";
import HeroVaccination from "../../Vaccination/HeroVaccination";
import WhyShould from "../../Vaccination/WhyShould";
import Accordion from "../../Vaccination/Accordian";
import WhenSection from "../../Vaccination/WhenSection";

function Vaccinations() {
  return (
    <div>
      <HeroVaccination />
      <WhyShould />
      <Accordion />
      <WhenSection />
    </div>
  );
}
export default Vaccinations;
