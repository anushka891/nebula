import React from "react";
import { sliderData } from "../helper/Helper";

function SliderCard() {
  return (
    <div className="max-w-[1340px] mx-auto px-4 min-[350px]:px-8 md:px-10 lg:px-12">
      <div className="flex justify-between">
        {sliderData.map((item, index) => (
          <div
            key={index}
            className="bg-[#494336] p-6 text-start pb-[75px] w-full"
          >
            <img src={item.img} alt="img" />
            <h2 className="text-4xl text-[#D7D9DD] avant font-normal leading-normal mb-4">
              {item.title}
            </h2>
            <p className="text-[18px] font-normal avant text-[#D7D9DD] underline mb-[6px]">
              {item.link}
            </p>
            <p className="text-[18px] font-normal avant text-[#D7D9DD] underline mb-[6px]">
              {item.link2}
            </p>
            <p className="text-[18px] font-normal avant text-[#D7D9DD] underline mb-[6px]">
              {item.link3}
            </p>
            <p className="text-[18px] font-normal avant text-[#D7D9DD] underline mb-[6px]">
              {item.link4}
            </p>
            <p className="text-[18px] font-normal avant text-[#D7D9DD] underline mb-[6px]">
              {item.link5}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderCard;
