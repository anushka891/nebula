import React from "react";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import hero from "./../../assests/img/png/washington-hero-main.png";
function HeroWashington() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[#494336] flex-col-reverse xl:flex-row flex items-end pr-8 sm:pr-10 lg:pr-12 xl:pr-0 justify-center xl:justify-end pl-8 sm:pl-10 lg:pl-12 gap-0 md:gap-9 xl:gap-[60px] ml-auto mr-0">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-start  max-w-full xl:max-w-[660px]"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-5 avant">
            Our Washington DC Practice
          </h2>
          <SubChild
            title={
              "We take great pride in our state-of-the-art, AAHA-accredited facilities that are meticulously designed to provide a stress-free experience for our patients and human clients alike. Equipped with modern technology and advanced resources, our practices ensure the highest standard of veterinary care."
            }
            childClass={"text-[#D7D9DD] mb-10"}
          />
          <Button btnTitle={"Book Now"} className={"mb-20"} />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="max-w-[240px] sm:max-w-[400px] lg:max-w-[580px] mx-auto xl:mr-0 xl:ml-0 pt-8 sm:pt-10 md:pt-14 lg:pt-[105px] pb-0 lg:pb-12"
        >
          <img src={hero} alt="hero" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default HeroWashington;
