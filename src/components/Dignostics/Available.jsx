import React from "react";
import SubChild from "../common/SubChild";
import Mainheading from "../common/Mainheading";

function Available() {
  return (
    <div className="bg-[rgba(215,217,221,0.50);]">
      <div className="text-start max-w-[1180px] px-8 md:px-10 lg:px-12 mx-auto py-14 md:py-20">
        <Mainheading
          maintitle={"Available Imaging"}
          className={"pb-6 sm:pb-7 md:pb-9"}
        />
        <SubChild
          title={
            "At Nebula Vets, we are committed to providing the highest quality care for your pet, which is why we have invested in state-of-the-art digital X-ray and ultrasound machines. These advanced imaging technologies play a crucial role in our diagnostic capabilities, allowing us to gain valuable insights into your pet's health and well-being."
          }
        />
      </div>
    </div>
  );
}

export default Available;
