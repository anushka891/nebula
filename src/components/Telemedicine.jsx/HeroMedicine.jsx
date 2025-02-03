import React from "react";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import hero from "./../../assests/img/png/medicine-main-icon.png";
function HeroMedicine() {
  return (
    <div className="overflow-x-hidden bg-[#494336]">
      <div className="max-w-[1340px] ml-auto 2xl:mx-auto flex-col-reverse xl:flex-row flex items-end pr-8 sm:pr-10 lg:pr-12 xl:pr-0 justify-center xl:justify-end pl-8 sm:pl-10 lg:pl-12 gap-0 md:gap-10 xl:gap-20 ml-auto mr-0">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="max-w-full xl:max-w-[661px] text-start pb-14 md:pb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-5 avant">
            Telemedicine
          </h2>
          <SubChild
            title={
              "Nebula Vets' online telemedicine service is a convenient and innovative way to connect with our veterinary doctors from the comfort of your own home. Through this platform, you can have a virtual consultation with our experienced veterinarians, allowing you to receive timely and expert advice for your pet's health concerns without the need to physically visit our clinic."
            }
            childClass={"text-[#D7D9DD] mb-10"}
          />
          <Button btnTitle={"Book Now"} />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="max-w-[240px] sm:max-w-[400px] lg:max-w-[-480px] xl:max-w-[600px] xl:mr-[-90px] xl:ml-0 pt-4 sm:pt-8 pb-1 md:pb-12"
        >
          <img src={hero} alt="hero" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default HeroMedicine;
