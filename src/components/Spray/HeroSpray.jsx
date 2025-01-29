import React from "react";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import hero from "./../../assests/img/png/spray-hero-main.png";
function HeroSpray() {
  return (
    <div className="bg-[#494336] flex-col-reverse xl:flex-row flex items-end pr-8 sm:pr-10 lg:pr-12 xl:pr-0 justify-center xl:justify-end pl-8 sm:pl-10 lg:pl-12 gap-0 md:gap-16 xl:gap-[175px] ml-auto mr-0 pb-14 md:pb-20">
      <div className="max-w-full xl:max-w-[661px] text-start">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-5 avant">
          Spay & Neuter
        </h2>
        <SubChild
          title={
            "Spaying, also known as ovariohysterectomy, is a surgical procedure performed on female animals to render them infertile. It involves the removal of the ovaries and uterus under general anesthesia."
          }
          childClass={"text-[#D7D9DD] mb-6"}
        />
        <SubChild
          title={
            "Neutering is a safe and effective surgical procedure designed to ensure that your male pet cannot reproduce. This important procedure involves the careful removal of your pet's testicles while they are comfortably under general anesthesia."
          }
          childClass={"text-[#D7D9DD] mb-10"}
        />

        <Button btnTitle={"Book Now"} />
      </div>
      <div className="max-w-[240px] sm:max-w-[400px] lg:max-w-[447px] mx-auto xl:mr-0 xl:ml-0 pt-4 sm:pt-8 md:pt-12 mb-5">
        <img src={hero} alt="hero" width={"100%"} />
      </div>
    </div>
  );
}

export default HeroSpray;
