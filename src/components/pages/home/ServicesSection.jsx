import React from "react";
import CareSection from "../../service/CareSection";
import DogsSection from "../../service/DogsSection";
import HeroService from "../../service/HeroService";
import PreventiveCare from "../../service/PreventiveCare";

function ServicesSection() {
  return (
    <div>
      <HeroService />
      <DogsSection />
      <CareSection />
      <PreventiveCare />
    </div>
  );
}

export default ServicesSection;
