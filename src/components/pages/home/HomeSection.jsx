import React from "react";
import HeroSection from "../../home/HeroSection";
import OurApproch from "../../home/OurApproch";
import FaqSection from "../../common/FaqSection";
import OurService from "../../home/OurService";
import AboutSection from "../../home/AboutSection";
import SliderCardSwiper from "../../common/SlidercardSwiper";
function HomeSection() {
  return (
    <div>
      <HeroSection />
      <OurApproch />
      <FaqSection />
      <OurService />
      <SliderCardSwiper />
      <AboutSection />
    </div>
  );
}

export default HomeSection;
