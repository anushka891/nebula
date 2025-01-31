import React from "react";
import SubChildSecond from "../common/SubChildSecond";
import SubChild from "../common/SubChild";
import main from "./../../assests/img/png/community-main.png";
function Community() {
  return (
    <div
      data-aos="fade-up"
      className="flex-wrap lg:flex-nowrap flex py-[60px] md:py-20 gap-14 lg:gap-10 xl:gap-[60px] px-8 md:px-10 xl:px-[70px] items-start justify-start"
    >
      <div className="max-w-[600px] mx-auto lg:ml-0 lg:mr-0">
        <img src={main} alt="main" width={"100%"} />
      </div>
      <div className="max-w-full lg:max-w-[547px] text-start flex flex-col gap-y-4 min-[1100px]:gap-y-7 xl:gap-y-8">
        <SubChildSecond title={"Community Engagement and Education"} />
        <SubChild
          title={
            "Nebula Vets is committed to being an active and integral part of the community we serve. We actively engage in educational initiatives, organizing workshops, seminars, and community events to spread awareness about pet care, responsible ownership, and the importance of preventive medicine."
          }
        />
        <SubChildSecond
          title={"Sustainability & Environmental Responsibility"}
          className={"max-w-[320px]"}
        />
        <SubChild
          title={
            "Recognizing the impact of the veterinary field on the environment, Nebula Vets is dedicated to promoting sustainability and environmental responsibility. We have implemented eco-friendly practices within our facility, reduced waste, and actively participate in initiatives that support a greener future for veterinary medicine."
          }
        />
      </div>
    </div>
  );
}

export default Community;
