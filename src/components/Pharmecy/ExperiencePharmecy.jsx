import React from "react";
import SubChild from "../common/SubChild";
import Subheading from "../common/Subheading";
import WeLook from "../Emergency/WeLook";

function ExperiencePharmecy() {
  return (
    <div>
      <div className="bg-[rgba(215,217,221,0.50);]">
        <div className="text-start max-w-[1180px] px-8 md:px-10 lg:px-12 mx-auto py-14 md:py-20">
          <Subheading
            subtitle={
              "Experience Exceptional Pharmacy Services at Nebula Vets:"
            }
            className={"pb-9"}
          />
          <SubChild
            title={
              "Your pet's health and well-being are our top priorities, and our pharmacy is an integral part of our commitment to providing comprehensive veterinary care. Trust in the expertise of our pharmacy team to ensure your pet receives the highest standard of pharmaceutical services and products."
            }
          />
        </div>
      </div>
      <WeLook />
    </div>
  );
}

export default ExperiencePharmecy;
