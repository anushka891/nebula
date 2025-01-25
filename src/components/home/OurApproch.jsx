import React from "react";
import Subheading from "../common/Subheading";
import SubChild from "../common/SubChild";

function OurApproch() {
  return (
    <div className="bg-[rgba(215,217,221,0.50)]">
      <div className="max-w-[1340px] mx-auto px-4 min-[350px]:px-8 md:px-10 lg:px-12 flex-wrap lg:flex-nowrap flex gap-3 sm:gap-6 md:gap-8 lg:gap-14 py-14 sm:py-20 justify-start lg:justify-center">
        <Subheading
          subtitle={"Our Approach"}
          className={"lg:max-w-[166px] text-start"}
        />
        <SubChild
          title={
            "At our independent veterinary hospital, we combine compassion, advanced expertise, and a commitment to exceptional care. From routine check-ups to urgent and emergency situations, we are here to provide your beloved pets with the highest level of service and support they deserve."
          }
          childClass={"max-w-[843px] text-start"}
        />
      </div>
    </div>
  );
}

export default OurApproch;
