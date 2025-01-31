import React from "react";
import Subheading from "../common/Subheading";
import SubChild from "../common/SubChild";
import WeLook from "../HealthCheck/WeLook";
function Experience() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[rgba(215,217,221,0.50);]">
        <div
          data-aos="zoom-in"
          className="text-start max-w-[1180px] px-8 md:px-10 lg:px-12 mx-auto py-14 md:py-20"
        >
          <Subheading
            subtitle={"Experience Exceptional Dental Care at Nebula Vets:"}
            className={"pb-9"}
          />
          <SubChild
            title={
              "At Nebula Vets, we are committed to providing exceptional dental care that goes beyond a bright smile. Our comprehensive evaluations, advanced techniques, and personalized approach set us apart. Trust us to be your partner in ensuring your pet's dental health and delivering the highest standard of veterinary dental care."
            }
          />
        </div>
      </div>
      <div data-aos="flip-down">
        <WeLook />
      </div>
    </div>
  );
}

export default Experience;
