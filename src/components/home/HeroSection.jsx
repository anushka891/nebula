import React from "react";
import bg from "./../../assests/img/png/hero.png";
import Button from "../common/Button";
import position from "./../../assests/img/png/hero-position-imgg.png";
import smallBg from "./../../assests/img/png/small-bg-img-hero.png";
function HeroSection() {
  return (
    <div>
      <div
        className={`bg-[url('${bg}')] bg-no-repeat bg-cover relative hidden min-[400px]:flex`}
      >
        <div>
          <img
            className="absolute right-0 top-[24px] max-w-[300px] md:max-w-[400px] lg:max-w-[482px]"
            src={position}
            alt="position"
          />
        </div>
        <div className="max-w-[511px] text-start ml-12 sm:ml-20 md:ml-28 lg:ml-[150px] xl:ml-[182px]">
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal leading-normal pt-[150px] lg:pt-[193px] mb-7 avant">
            Welcome to Nebula Vets
          </h2>
          <p className="text-3xl text-[#D7D9DD] font-normal roboto leading-normal mb-8">
            Reinventing Pet Medicine
          </p>
          <Button btnTitle={"Book Now"} className={"mb-20"} />
        </div>
      </div>
      <div className="flex min-[400px]:hidden bg-[rgba(215,217,221,0.50)] max-w-[1340px] mx-auto min-[350px] px-8 flex flex-wrap">
        <div className="max-w-[230px] text-start">
          <h2 className="text-3xl avant font-normal leading-normal text-[#494336] mt-8">
            Welcome to Nebula Vets
          </h2>
          <p className="text-base roboto font-normal leading-[175%] text-[#494336]">
            Reinventing Pet Medicine
          </p>
          <Button btnTitle={"Book Now"} className={"mt-11 px-4 py-2 mb-14"} />
        </div>
      </div>
      <div className="flex min-[400px]:hidden mt-[-115px]">
        <img src={smallBg} className="w-full" alt="small-bg" />
      </div>
    </div>
  );
}

export default HeroSection;
