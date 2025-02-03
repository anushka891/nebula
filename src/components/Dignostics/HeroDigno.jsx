import React from "react";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import hero from "./../../assests/img/png/digno-main-img.png";
function HeroDigno() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[#494336]">
        <div className="max-w-[1340px] ml-auto 2xl:mx-auto flex-col-reverse xl:flex-row flex items-end pr-8 sm:pr-10 lg:pr-12 xl:pr-0 justify-end xl:justify-center pl-8 sm:pl-10 lg:pl-12 gap-0 md:gap-18 xl:gap-[140px]">
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            className="max-w-full xl:max-w-[620px] text-start pb-14 md:pb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-5 avant">
              Diagnostics
            </h2>
            <SubChild
              title={
                "At Nebula Vets, we are committed to providing comprehensive and advanced diagnostic testing to ensure the well-being of your cherished pet."
              }
              childClass={"text-[#D7D9DD]"}
            />
            <SubChild
              title={
                "Our state-of-the-art veterinary hospital offers a range of diagnostic tests that empower us to gain precise insights into your pet's health. Here are some of the key diagnostic tests available at Nebula Vets for the benefit of our clients and their beloved pets:"
              }
              childClass={"text-[#D7D9DD] mb-10"}
            />
            <Button btnTitle={"Book Now"} />
          </div>
          <div className="max-w-[240px] sm:max-w-[400px] lg:max-w-[450px] xl:max-w-[600px] mr-[-30px] xl:ml-0 pt-4 sm:pt-8 md:pt-14 pb-1 md:pb-16">
            <img src={hero} alt="hero" width={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroDigno;
