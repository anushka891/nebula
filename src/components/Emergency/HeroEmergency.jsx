import React from "react";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import hero from "./../../assests/img/png/urgent-hero-main.png";
function HeroEmergency() {
  return (
    <div className="bg-[#494336]">
      <div className="max-w-[1340px] mr-0 mx-auto 2xl:ml-auto 2xl:mx-auto flex-col-reverse xl:flex-row flex items-end pr-8 sm:pr-10 lg:pr-12 xl:pr-0 pl-8 sm:pl-10 lg:pl-12 gap-0 md:gap-10 lg:gap-12 xl:gap-[100px] justify-end 2xl:justify-between">
        <div className="max-w-full xl:max-w-[661px] text-start pb-14 md:pb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-5 avant">
            Urgent & Emergency Care
          </h2>
          <SubChild
            title={
              "At Nebula Vets, we understand that when your pet is sick or injured, prompt and quality care is essential. Our dedicated team of veterinarians and staff are committed to providing the care your pet needs to recover and thrive."
            }
            childClass={"text-[#D7D9DD] mb-10"}
          />
          <Button btnTitle={"Book Now"} />
        </div>
        <div className="max-w-[240px] sm:max-w-[350px] lg:max-w-[350px] xl:max-w-[508px] mr-0 xl:ml-0 pt-8 sm:pt-12 md:pt-14 lg:pt-16">
          <img src={hero} alt="hero" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default HeroEmergency;
