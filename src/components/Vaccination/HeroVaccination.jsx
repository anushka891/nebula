import React from "react";
import Button from "../common/Button";
import hero from "./../../assests/img/png/hero-vaccination-main.png";
import SubChild from "../common/SubChild";
function HeroVaccination() {
  return (
    <div className="bg-[#494336] flex-col-reverse xl:flex-row flex items-end pr-8 sm:pr-10 lg:pr-12 xl:pr-0 justify-center xl:justify-end pl-8 sm:pl-10 lg:pl-12 gap-0 md:gap-11 ml-auto mr-0">
      <div className="max-w-full xl:max-w-[661px] text-start pb-14 md:pb-20">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-5 avant">
          Vaccinations
        </h2>
        <SubChild
          title={
            "Vaccinations are key in keeping your pet healthy and preventing them catching life-threatening disease."
          }
          childClass={"text-[#D7D9DD]"}
        />
        <SubChild
          title={
            "Our veterinary team is dedicated to providing comprehensive vaccination services tailored to your pet's individual needs and lifestyle. This includes not only dogs and cats but also rabbits and ferrets."
          }
          childClass={"text-[#D7D9DD] mb-10"}
        />
        <Button btnTitle={"Book Now"} />
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] mt-2 mx-auto xl:mr-0 xl:ml-0"
      >
        <img src={hero} alt="hero" width={"100%"} />
      </div>
    </div>
  );
}

export default HeroVaccination;
