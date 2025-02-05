import React from "react";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import hero from "./../../assests/img/png/pharmecy-main-icon.png";
function HeroPharmecy() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[#494336]">
        <div className="max-w-[1340px] ml-auto 2xl:mx-auto flex-col-reverse xl:flex-row flex items-end pr-8 sm:pr-10 lg:pr-12 xl:pr-0 justify-end 2xl:justify-center pl-8 sm:pl-10 lg:pl-12 gap-0 md:gap-20 ">
          <div className="max-w-full xl:max-w-[661px] text-start pb-14 md:pb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-5 avant">
              Pharmacy
            </h2>
            <SubChild
              title={
                "At Nebula Vets, we understand the importance of convenient access to necessary medications and pet health products for your furry companions. That's why we have an on-site pharmacy stocked with a wide range of prescription medications, prescription diets, and other pet health products."
              }
              childClass={"text-[#D7D9DD] mb-10"}
            />
            <Button btnTitle={"Book Now"} />
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="max-w-[240px] sm:max-w-[400px] lg:max-w-[450px] xl::max-w-[600px] mx-auto xl:mr-0 xl:ml-0 pt-4 sm:pt-20 !mr-[-20px]"
          >
            <img src={hero} alt="hero" width={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPharmecy;
