import React from "react";
import main from "./../../assests/img/png/inspiration-main-img.png";
import SubChildSecond from "../common/SubChildSecond";
import SubChild from "../common/SubChild";
function Inspiration() {
  return (
    <div className="flex-wrap lg:flex-nowrap flex py-[60px] md:py-20 gap-14 lg:gap-10 xl:gap-[60px]  px-8 md:px-10 xl:px-[70px] items-start justify-start max-w-[1340px] 2xl:mx-auto">
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="max-w-[600px] mx-auto lg:ml-0 lg:mr-0"
      >
        <img src={main} alt="main" width={"100%"} />
      </div>
      <div className="max-w-full lg:max-w-[547px] text-start flex flex-col gap-y-4 min-[1100px]:gap-y-7 xl:gap-y-8">
        <SubChildSecond title={"Inspiration and Vision"} />
        <SubChild
          title={
            "Daniel's journey began with a profound inspiration to make a positive impact on the lives of pets and their owners. He envisioned a veterinary practice that would go beyond the conventional norms, offering exceptional care, innovative treatments, and a compassionate approach."
          }
        />
        <SubChildSecond title={"Elevating the Standard of Care"} />
        <SubChild
          title={
            "Determined to raise the standard of care, Daniel assembled a team of like-minded professionals who shared his vision and values.Together, they worked tirelessly to create a veterinary practice that would exceed expectations and set new benchmarks in veterinary medicine."
          }
        />
      </div>
    </div>
  );
}

export default Inspiration;
