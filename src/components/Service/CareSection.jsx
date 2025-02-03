import React from "react";
import { careData } from "../helper/Helper";

function CareSection() {
  return (
    <div className="flex-wrap md:flex-nowrap flex bg-[#494336] gap-x-7 lg:gap-x-14 xl:gap-x-24 gap-y-4 sm:gap-y-5 text-start sm:text-center justify-start sm:justify-center px-10 sm:px-8 py-10 sm:py-14 md:py-20">
      {careData.map((item, index) => (
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex-wrap md:flex-nowrap flex bg-[#494336]"
          key={index}
        >
          <a
            href={item.url}
            className="text-2xl lg:text-3xl xl:text-4xl text-start text-[rgba(217,217,217,0.50);] font-normal avant hover:text-[#D7D9DD] duration-300"
          >
            {item.title}
          </a>
        </div>
      ))}
    </div>
  );
}

export default CareSection;
