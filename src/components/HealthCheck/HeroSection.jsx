import React from "react";
import Button from "../common/Button";
import hero from "./../../assests/img/png/health-hero-main.png";
function HeroSection() {
  return (
    <>
      <div className="bg-[#494336] flex-col-reverse xl:flex-row flex items-center pr-8 sm:pr-10 lg:pr-12 xl:pr-0 justify-center xl:justify-end pl-8 sm:pl-10 lg:pl-12 gap-0 md:gap-16 min-[1300px]:gap-[100px] pb-11">
        <div className="max-w-full xl:max-w-[661px] text-start mt-[-53px] sm:mt-0 xl:mt-[140px]">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-5 avant">
            Animal Health Check
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-[#D7D9DD] font-normal roboto leading-normal mb-8">
            This comprehensive assessment involves a thorough evaluation of your
            pet's major organ systems. During this visit, we take the
            opportunity to discuss important aspects of your pet's well-being,
            including their behavior, appetite, exercise routines, and daily
            activities at home. It is also an ideal occasion for us to recommend
            any routine diagnostic tests that could be advantageous for your
            pet's health or to determine if any vaccinations are due.
          </p>
          <Button btnTitle={"Book Now"} />
        </div>
        <div className="max-w-[220px] md:max-w-[350px] lg:max-w-[450px] min-[1290px]:max-w-[528px] mt-5">
          <img src={hero} alt="hero" width={"100%"} />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
