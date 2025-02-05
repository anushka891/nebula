import React from "react";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import hero from "./../../assests/img/png/hospice-main-icon.png";
function HeroHospice() {
  return (
    <div className="overflow-x-hidden bg-[#494336]">
      <div className="max-w-[1340px] ml-auto 2xl:mx-auto flex-col-reverse xl:flex-row flex items-end pr-8 sm:pr-10 lg:pr-12 xl:pr-0 justify-center xl:justify-end pl-8 sm:pl-10 lg:pl-12 gap-0 md:gap-9 xl:gap-16 min-[1340px]:gap-[158px] ml-auto mr-0">
        <div className="text-start">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-5 avant max-w-[774px]">
            Hospice & Euthanasia
          </h2>
          <SubChild
            title={
              "At Nebula Vets, we understand how difficult it is to say goodbye to a beloved pet. During this emotional time, our compassionate and caring team is here to support you and your pet. We offer hospice services that focus on providing comfort and dignity to your pet during their last days and final moments."
            }
            childClass={"text-[#D7D9DD] mb-10 max-w-full xl:max-w-[674px]"}
          />
          <Button btnTitle={"Book Now"} className={"mb-20"} />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="max-w-[240px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[420px] mr-[-45px] xl:mr-0 xl:ml-0 pt-8 sm:pt-10 md:pt-14 pb-0 sm:pb-6"
        >
          <img src={hero} alt="hero" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default HeroHospice;
