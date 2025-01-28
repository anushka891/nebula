import React from "react";
import { medicineData } from "../helper/Helper";
import Button from "./Button";

function SliderMedicine() {
  return (
    <>
      {medicineData.map((item, index) => (
        <div className="pb-20">
          <div className="py-20 flex gap-5 max-w-[1400px] mx-auto px-8 md:px-10 lg:px-12">
            <div
              key={index}
              className="bg-[#494336] max-w-[310px] text-start pt-2 px-[22px] sm:px-6 md:px-8 pb-10 w-full"
            >
              <h2 className="text-linear text-[138px] font-normal avant mb-3 leading-[normal]">
                {item.title}
              </h2>
              <h1 className="text-2xl md:text-[32px] avant text-[#D7D9DD] font-normal leading-[normal]">
                {item.heading}
              </h1>
              <p className="text-sm sm:text-lg md:text-xl font-normal avant text-[#D7D9DD] mt-8 leading-[26px]">
                {item.disc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default SliderMedicine;
