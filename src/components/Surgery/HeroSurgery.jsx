import React from "react";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import hero from "./../../assests/img/png/surgery-hero-main.png";
function HeroSurgery() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[#494336]">
        <div className=" flex-col-reverse xl:flex-row flex items-end pr-8 sm:pr-10 lg:pr-12 xl:pr-0 justify-center xl:justify-end pl-8 sm:pl-10 lg:pl-12 gap-0 md:gap-16 xl:gap-[154px] max-w-[1340px] ml-auto 2xl:mx-auto">
          <div className="max-w-full xl:max-w-[661px] text-start pb-14 md:pb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-5 avant">
              Surgery
            </h2>
            <SubChild
              title={
                "In our state-of-the-art surgery suite, equipped with advanced technology and facilities, our highly experienced veterinarians are proficient in performing a wide range of surgical procedures. From routine surgeries like spays and neuters to more specialized soft tissue surgeries such as mass removals, laceration repair, abscess treatment, and dental procedures, we offer comprehensive surgical care for your pet."
              }
              childClass={"text-[#D7D9DD] mb-10"}
            />
            <Button btnTitle={"Book Now"} />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="max-w-[240px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[600px] mr-[-30px] pt-4 sm:pt-8 md:pt-16 xlpt-24 mb-5"
          >
            <img src={hero} alt="hero" width={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSurgery;
