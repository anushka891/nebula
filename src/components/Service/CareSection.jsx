import React from "react";
import { careData } from "../helper/Helper";

function CareSection() {
  return (
    <div className="flex-wrap md:flex-nowrap flex bg-[#494336] gap-x-7 lg:gap-x-14 xl:gap-x-24 gap-y-5 text-start sm:text-center max-w-[1440px] mx-auto justify-start sm:justify-center px-10 sm:px-8 py-10 sm:py-14 md:py-20">
      {careData.map((item, index) => (
        <div className="flex-wrap md:flex-nowrap flex bg-[#494336]" key={index}>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl text-start text-[rgba(217,217,217,0.50);] font-normal avant">
            {item.title}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default CareSection;
