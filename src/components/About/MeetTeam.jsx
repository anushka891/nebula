import React from "react";
import circle from "./../../assests/img/png/circle.png";
import { meetData } from "../helper/Helper";
import Button from "../common/Button";
function MeetTeam() {
  return (
    <div className="bg-[#494336] py-14 md:py-20 px-8">
      <h2 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-16 avant">
        Meet our veterinary team:
      </h2>
      <div className="flex flex-wrap gap-x-10 min-[350px]:gap-x-14 gap-y-3  md:gap-5 justify-center">
        {meetData.map((item, index) => (
          <div
            className="text-center max-w-[113px] sm:max-w-[216px]"
            key={index}
          >
            <div
              data-aos="zoom-out"
              data-aos-duration="1000"
              className="max-w-[98px] sm:max-w-[150px] lg:max-w-[160px] xl max-w-[180px] min-[1430px]:max-w-[207px]"
            >
              <img src={circle} alt="circle" width={"100%"} />
            </div>
            <h2 className="text-[#D7D9DD] text-sm sm:text-base md:text-lg xl:text-xl avant leading-[130%] font-normal mt-3 sm:mt-5 md:mt-10">
              {item.name}
            </h2>
            <p className="text-[#D7D9DD] text-sm sm:text-base md:text-lg xl:text-xl avant leading-[130%] font-normal">
              {item.disc}
            </p>
          </div>
        ))}
      </div>
      <Button btnTitle={"BOOK NOW"} className={"mt-11 sm:mt-12"} />
    </div>
  );
}

export default MeetTeam;
