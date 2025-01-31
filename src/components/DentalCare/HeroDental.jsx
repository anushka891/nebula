import React from "react";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import hero from "./../../assests/img/png/dental-hero-main.png";

function HeroDental() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[#494336] flex-col-reverse xl:flex-row flex items-end pr-8 sm:pr-10 lg:pr-12 xl:pr-0 justify-center xl:justify-end pl-8 sm:pl-10 lg:pl-12 gap-0 md:gap-20 lg:gap-[130px] ml-auto mr-0">
        <div className="max-w-full xl:max-w-[661px] text-start pb-14 md:pb-20">
          <h2
            data-aos="fade-up-right"
            data-aos-duration="1000"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-5 avant"
          >
            Dental Care
          </h2>
          <div data-aos="fade-up-left" data-aos-duration="2000">
            <SubChild
              title={
                "At Nebula Vets, we recognize the significance of dental hygiene in maintaining your pet's overall health. Dental disease can have far-reaching implications, potentially leading to serious conditions like heart disease and kidney disease. To ensure your pet's oral health, we conduct thorough dental examinations to identify any dental issues that require attention."
              }
              childClass={"text-[#D7D9DD] mb-10"}
            />
          </div>
          <div data-aos="flip-left" data-aos-duration="3000">
            <Button btnTitle={"Book Now"} />
          </div>
        </div>
        <div className="max-w-[506px] mx-auto xl:mr-0 xl:ml-0 pt-8 sm:pt-12 md:pt-20 lg:pt-24">
          <img src={hero} alt="hero" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default HeroDental;
