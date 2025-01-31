import React from "react";
import Subheading from "../common/Subheading";

function WhySection() {
  return (
    <div className="overflow-x-hidden">
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="max-w-[1180px] px-8 md:px-10 lg:px-12 mx-auto pt-14 md:pt-20 pb-2"
      >
        <Subheading
          subtitle={"Why Animal Health Checks Matter:"}
          className={"text-start"}
        />
      </div>
    </div>
  );
}

export default WhySection;
