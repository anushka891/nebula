import React from "react";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import hero from "./../../assests/img/png/micro-hero-main.png";
function HeroMicro() {
  return (
    <div className="bg-[#494336] overflow-x-hidden">
      <div className="max-w-[1340px] ml-auto 2xl:mx-auto flex-col-reverse xl:flex-row flex items-end pr-8 sm:pr-10 lg:pr-12 xl:pr-0 justify-center xl:justify-end pl-8 sm:pl-10 lg:pl-12 gap-0 md:gap-9">
        <div className="max-w-full xl:max-w-[661px] text-start">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-5 avant">
            Microchipping
          </h2>
          <SubChild
            title={
              "A microchip, resembling a tiny grain of rice in size and shape, is delicately inserted beneath your pet's skin, specifically between the shoulder blades. This quick and completely safe procedure typically takes only a few minutes. Each microchip possesses a distinct identification code, crucial for storing essential information about your beloved pet."
            }
            childClass={"text-[#D7D9DD] mb-10"}
          />
          <Button btnTitle={"Book Now"} className={"mb-20"} />
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="1000"
          className="max-w-[240px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[624px] mr-[-30px] xl:mr-0 xl:ml-0 pt-10 xl:pt-[119px] pb-0 sm:pb-6 xl:pb-14"
        >
          <img src={hero} alt="hero" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default HeroMicro;
