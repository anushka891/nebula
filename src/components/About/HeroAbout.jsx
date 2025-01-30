import React from "react";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import hero from "./../../assests/img/png/about-hero-main.png";
function HeroAbout() {
  return (
    <div className="bg-[#494336]">
      <div className="flex-col-reverse xl:flex-row flex items-end pr-8 sm:pr-10 lg:pr-12 xl:pr-0 justify-center xl:justify-end pl-8 sm:pl-10 lg:pl-12 gap-0 md:gap-9 xl:gap-20 ml-auto mr-0">
        <div className="text-start max-w-full xl:max-w-[528px]">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-5 avant max-w-[396px]">
            About Nebula Vets
          </h2>
          <SubChild
            title={
              "With a foundation built on values, innovation, and a commitment to excellence, Nebula Vets continues to strive for excellence in veterinary care. Our journey is fueled by the passion to make a difference in the lives of pets and their owners, providing you with a trusted partner in your pet's health and well-being."
            }
            childClass={"text-[#D7D9DD] mb-10"}
          />
          <Button btnTitle={"BOOK NOW"} className={"mb-20 !px-8"} />
        </div>
        <div className="max-w-[636px] mx-auto xl:mr-4 xl:ml-0 pt-8 sm:pt-10 md:pt-14 lg:pt-20 pb-0 sm:pb-6 md:pb-10 xl:pb-[100px]">
          <img src={hero} alt="hero" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default HeroAbout;
