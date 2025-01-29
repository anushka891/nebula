import React from "react";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import hero from "./../../assests/img/png/skin-hero-main.png";
function HeroSkin() {
  return (
    <div className="bg-[#494336] flex-col-reverse xl:flex-row flex items-end pr-8 sm:pr-10 lg:pr-12 xl:pr-0 justify-center xl:justify-end pl-8 sm:pl-10 lg:pl-12 gap-0 md:gap-16 xl:gap-[100px] ml-auto mr-0">
      <div className="max-w-full xl:max-w-[661px] text-start">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-5 avant">
          Skin & Dermatology
        </h2>
        <SubChild
          title={
            "At our practice, we specialize in the treatment of various skin-related issues, ranging from bacterial or yeast infections to bites and rashes. Our approach involves a comprehensive process of test-diagnose-treat, ensuring accurate identification of the underlying cause and tailored treatment plans. Trust us to address your pet's skin concerns with expertise and precision for optimal results."
          }
          childClass={"text-[#D7D9DD] mb-10"}
        />

        <Button btnTitle={"Book Now"} className={"mb-20"} />
      </div>
      <div className="max-w-[240px] sm:max-w-[400px] lg:max-w-[513px] mx-auto xl:mr-0 xl:ml-0 pt-4 pb-0 lg:py-8">
        <img src={hero} alt="hero" width={"100%"} />
      </div>
    </div>
  );
}

export default HeroSkin;
