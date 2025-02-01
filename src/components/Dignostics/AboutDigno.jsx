import React from "react";
import wave from "./../../assests/img/png/medicine-wave.png";
import Mainheading from "../common/Mainheading";
import SubChild from "../common/SubChild";
function AboutDigno() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[rgba(215,217,221,0.50);] pt-14 md:pt-20">
        <div
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          className="max-w-[1180px] mx-auto px-8 md:px-10 lg:px-12 text-[#494336] text-start"
        >
          <Mainheading maintitle={"Available Tests"} />
          <SubChild
            title={
              "At Nebula Vets, we take pride in offering an in-house laboratory equipped with state-of-the-art diagnostic equipment to fulfill your pet's diagnostic needs. Our comprehensive laboratory services include:"
            }
            childClass={"mt-6 sm:mt-8 md:mt-10 mb-1"}
          />
          <div>
            <ul className="ml-5">
              <li className="text-sm sm:text-base md:text-xl avant text-[#494336] font-normal list-disc mb-1 sm:mb-0">
                Hematology
              </li>
              <li className="text-sm sm:text-base md:text-xl avant text-[#494336] font-normal list-disc mb-1 sm:mb-0">
                Serum Chemistries
              </li>
              <li className="text-sm sm:text-base md:text-xl avant text-[#494336] font-normal list-disc mb-1 sm:mb-0">
                Urinalysis
              </li>
              <li className="text-sm sm:text-base md:text-xl avant text-[#494336] font-normal list-disc mb-1 sm:mb-0">
                Cytology
              </li>
              <li className="text-sm sm:text-base md:text-xl avant text-[#494336] font-normal list-disc mb-1 sm:mb-0">
                Fecal analysis
              </li>
              <li className="text-sm sm:text-base md:text-xl avant text-[#494336] font-normal list-disc mb-1 sm:mb-0">
                Blood disorders
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[-40px] md:mt-[-100px] lg:mt-[-300px] xl:mt-[-340px] w-full">
          <img src={wave} alt="wave" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default AboutDigno;
