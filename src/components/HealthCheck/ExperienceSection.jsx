import React from "react";
import Subheading from "../common/Subheading";
import SubChild from "../common/SubChild";
function ExperienceSection() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);]">
        <div className="text-start max-w-[1180px] px-8 md:px-10 lg:px-12 mx-auto py-14 md:py-20">
          <Subheading
            subtitle={
              "Experience Exceptional Animal Health Checks at Nebula Vets:"
            }
            className={"pb-9"}
          />
          <SubChild
            title={
              "At Nebula Vets, we are committed to providing exceptional animal health checks that go beyond the basics. Our thorough evaluations, personalized care, and commitment to preventive medicine set us apart. Trust us to be your partner in ensuring your pet's well-being and delivering the highest standard of veterinary care."
            }
          />
        </div>
      </div>
    </>
  );
}

export default ExperienceSection;
