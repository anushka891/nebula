import React from "react";
import Button from "../common/Button";
import hero from "./../../assests/img/png/service-hero-mg.png";
import herosmall from "./../../assests/img/png/heroservice-small-img.png";
function HeroService() {
  return (
    <div>
      <div className="bg-[#494336]">
        <div className="max-w-[1340px] mx-auto flex-wrap xl:flex-nowrap flex items-end pr-8 xl:pr-0 pt-8 sm:pt-10 md:pt-14 lg:pt-20 justify-center xl:justify-end pl-8">
          <div className="max-w-full xl:max-w-[660px] text-start">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-7 avant">
              Veterinary Services
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-[#D7D9DD] font-normal avant leading-normal mb-8">
              At Nebula Vets, we take pride in offering an extensive range of
              services to meet the diverse needs of our patients. Our commitment
              to comprehensive care ensures that we can provide the highest
              quality veterinary services under one roof.
            </p>
            <Button
              btnTitle={"Book Now"}
              className={"mb-6 sm:mb-16 md:mb-20"}
            />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="max-w-[653px] min-w-[320px] min-[358px]:min-w-[362px] hidden sm:flex"
          >
            <img src={hero} alt="hero" width={"100%"} />
          </div>
        </div>
        <div className="max-w-[653px] min-w-[300px] min-[358px]:min-w-[362px] flex sm:hidden">
          <img src={herosmall} alt="hero" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default HeroService;
