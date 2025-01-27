import React from "react";
import CareSection from "../../Service/CareSection";
import DogsSection from "../../Service/DogsSection";
import HeroService from "../../Service/HeroService";
import PreventiveCare from "../../Service/PreventiveCare";

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
