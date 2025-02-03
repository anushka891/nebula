import React from "react";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import hero from "./../../assests/img/png/laser-hero-main.png";
function HeroLacer() {
  return (
    <div className="bg-[#494336] overflow-x-hidden">
      <div className="max-w-[1340px] ml-auto 2xl:mx-auto flex-col-reverse xl:flex-row flex items-end pr-8 sm:pr-10 lg:pr-12 xl:pr-0 justify-center xl:justify-end pl-8 sm:pl-10 lg:pl-12 gap-0 md:gap-9 xl:gap-[200px]">
        <div className="max-w-full xl:max-w-[661px] text-start">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-5 avant">
            Laser Therapy
          </h2>
          <SubChild
            title={
              "At Nebula Vets, we are excited to offer the remarkable benefits of laser therapy for our furry patients. Our state-of-the-art veterinary hospital utilizes advanced laser technology to provide non-invasive and drug-free treatment options that promote healing and enhance the well-being of your beloved pets. Join us as we explore the transformative effects of laser therapy."
            }
            childClass={"text-[#D7D9DD] mb-10"}
          />
          <Button btnTitle={"Book Now"} className={"mb-20"} />
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="max-w-[240px] sm:max-w-[300px] md::max-w-[350px] lg:max-w-[400px] xl:max-w-[420px] mr-[-50px] xl:mr-0 xl:ml-0 pt-4 pb-6 xl:pb-12"
        >
          <img src={hero} alt="hero" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default HeroLacer;
