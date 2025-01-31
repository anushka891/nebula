import React from "react";
import HeroSection from "../../HealthCheck/HeroSection";
import CheckExam from "../../HealthCheck/CheckExam";
import WhySection from "../../HealthCheck/WhySection";
import ExperienceSection from "../../HealthCheck/ExperienceSection";
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
