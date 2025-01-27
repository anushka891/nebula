import React from "react";
import OurApproch from "../../home/OurApproch";
import FaqSection from "../../common/FaqSection";
import OurService from "../../home/OurService";
import AboutSection from "../../home/AboutSection";
import OurMission from "../../home/OurMission";
import SliderCardSwiper from "../../common/SlidercardSwiper";
import HeroSection from "../../home/HeroSection";
function HomeSection() {
  return (
    <div>
      <HeroSection />
      <OurApproch />
      <FaqSection />
      <OurService />
      <SliderCardSwiper />
      <AboutSection />
      <OurMission />
    </div>
  );
}

export default HomeSection;
