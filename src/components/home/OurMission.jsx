import React from "react";
import Mainheading from "../common/Mainheading";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import footdog from "./../../assests/img/png/footer-cat-dog.png";
function OurMission() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[#494336]">
        <div className="flex-wrap xl:flex-nowrap flex gap-7 xl:gap-10 min-w-[1400px]:gap-[70px] justify-center xl:justify-between max-w-[1340px] mx-auto">
          <div className="text-start pt-14 sm:py-16 md:py-20 mx-8 sm:ml-20 lg:ml-[100px] xl:ml-[180px]">
            <div className="max-w-full xl:max-w-[568px]">
              <Mainheading
                maintitle={"Our Mission"}
                className={"mb-3 sm:mb-6 md:mb-8 text-[#D7D9DD]"}
              />
              <SubChild
                title={
                  "Our Mission is to establish a new standard of excellence in veterinary care, driven by an unwavering ethical conscience."
                }
                childClass={"mb-10 text-[#D7D9DD]"}
              />
              <Button btnTitle={"BOOK NOW"} />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="max-w-[584px]"
          >
            <img src={footdog} alt="footdog" width={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
