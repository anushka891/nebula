import React from "react";
import Mainheading from "../common/Mainheading";
import SubChild from "../common/SubChild";
import Button from "../common/Button";

function OurService() {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      className="max-w-[770px] text-start ml-8 sm:ml-20 lg:ml-[100px] xl:ml-[180px] my-14 sm:my-16 md:my-20 mr-8"
    >
      <Mainheading
        maintitle={"Our Services"}
        className={"mb-3 sm:mb-6 md:mb-8"}
      />
      <SubChild
        title={
          "We are proud to offer a comprehensive range of exceptional clinical services to cater to all your pet's needs. From routine wellness health checks to prompt and efficient urgent care, our team is here to provide the highest level of support and assistance. Count on us to be there for you and your beloved companion every step of the way."
        }
        childClass={"mb-10 leading-[157%] sm:leading-[26px]"}
      />
      <Button btnTitle={"LEARN MORE"} />
    </div>
  );
}

export default OurService;
