import React from "react";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import hero from "./../../assests/img/png/travel-hero-main.png";
function HeroTravel() {
  return (
    <div className="overflow-x-hidden bg-[#494336]">
      <div className="max-w-[1340px] ml-auto 2xl:mx-auto flex-col-reverse xl:flex-row flex items-end pr-8 sm:pr-10 lg:pr-12 xl:pr-0 justify-center xl:justify-end pl-8 sm:pl-10 lg:pl-12 gap-0 md:gap-10 lg:gap-14 xl:gap-[118px]">
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
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="max-w-[240px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xlmax-w-[513px] mr-[-40px] xl:mr-0 xl:ml-0 pt-4 sm:pt-8 md:pt-10 lg:pt-20"
        >
          <img src={hero} alt="hero" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default HeroTravel;
