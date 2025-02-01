import React from "react";
import HeroVaccination from "../../vaccination/HeroVaccination";
import WhyShould from "../../vaccination/WhyShould";
import Accordion from "../../vaccination/Accordian";
import WhenSection from "../../vaccination/WhenSection";

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
