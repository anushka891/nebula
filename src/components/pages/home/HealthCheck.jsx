import React from "react";
import HeroSection from "../../HealthCheck/HeroSection";
import CheckExam from "../../HealthCheck/CheckExam";
import WhySection from "../../HealthCheck/WhySection";
import ExperienceSection from "../../HealthCheck/ExperienceSection";
import AccordianSecond from "./../../common/AccordianSecond";
import Footer from "../../common/Footer";
function HealthCheck() {
  return (
    <div>
      <HeroSection />
      <CheckExam />
      <WhySection />
      <AccordianSecond />
      <ExperienceSection />
      <Footer />
    </div>
  );
}

export default HealthCheck;
