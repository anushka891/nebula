import React from "react";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import hero from "./../../assests/img/png/travel-hero-main.png";
function HeroTravel() {
  return (
    <div className="bg-[#494336] flex-col-reverse xl:flex-row flex items-end pr-8 sm:pr-10 lg:pr-12 xl:pr-0 justify-center xl:justify-end pl-8 sm:pl-10 lg:pl-12 gap-0 md:gap-16 xl:gap-[118px] ml-auto mr-0">
      <div className="max-w-full xl:max-w-[661px] text-start">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-5 avant">
          Travel
        </h2>
        <SubChild
          title={
            "At Nebula Vets, we understand that travel with your pet requires careful planning and adherence to specific requirements. Whether you are traveling domestically or internationally, we are here to assist you with the necessary exams and paperwork."
          }
          childClass={"text-[#D7D9DD] mb-10"}
        />
        <Button btnTitle={"Book Now"} className={"mb-20"} />
      </div>
      <div className="max-w-[240px] sm:max-w-[400px] lg:max-w-[513px] mx-auto xl:mr-0 xl:ml-0 pt-4 sm:pt-8 md:pt-20">
        <img src={hero} alt="hero" width={"100%"} />
      </div>
    </div>
  );
}

export default HeroTravel;
