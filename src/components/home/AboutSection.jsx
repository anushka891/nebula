import React from "react";
import dog from "./../../assests/img/png/about-cat-dog.png";
import Mainheading from "../common/Mainheading";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import pos from "./../../assests/img/png/about-position-img.png";

function AboutSection() {
  return (
    <div className="bg-[rgba(215,217,221,0.50)] relative">
      <div>
        <img
          className="absolute right-0 top-[400px] xl:top-0 max-w-[260px] sm:max-w-[350px] xl:max-w-[611px]"
          src={pos}
          alt="position"
        />
      </div>
      <div className="max-w-[1340px] mx-auto px-4 min-[350px]:px-8 md:px-10 lg:px-12 flex-wrap xl:flex-nowrap flex gap-[60px] items-center py-20 justify-center xl:justify-between">
        <div className="max-w-[591px]">
          <img src={dog} alt="dog" width={"100%"} />
        </div>
        <div className="max-w-full xl:max-w-[639px] text-start">
          <Mainheading
            maintitle={"About Nebula Vets ?"}
            className={"mb-3 sm:mb-6 md:mb-8"}
          />
          <SubChild
            title={
              "Founded on a strong set of core values, the story of Nebula Vets began with Daniel Hodnett-Lewis, a visionary veterinary surgeon from England, UK. Fueled by a deep passion for animals and a desire to elevate the standard of care, Daniel embarked on a mission to create a veterinary practice that would revolutionize the way pets are treated and cared for. Here's the story of Nebula Vets:"
            }
            childClass={"mb-10"}
          />
          <Button btnTitle={"LEARN MORE"} />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
