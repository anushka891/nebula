import React from "react";
import HeroSection from "../../healthCheck/HeroSection";
import CheckExam from "../../healthCheck/CheckExam";
import WhySection from "../../healthCheck/WhySection";
import ExperienceSection from "../../healthCheck/ExperienceSection";
import AccordianSecond from "./../../common/AccordianSecond";
function HealthCheck() {
  return (
    <div>
      <HeroSection />
      <CheckExam />
      <WhySection />
      <AccordianSecond />
      <ExperienceSection />
    </div>
  );
}

export default HealthCheck;
