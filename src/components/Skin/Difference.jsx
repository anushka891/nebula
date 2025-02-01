import React from "react";
import Subheading from "../common/Subheading";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import foot from "./../../assests/img/png/footer-service-position.png";
function Difference() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[rgba(215,217,221,0.50);]">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="text-start max-w-[1180px] px-8 md:px-10 lg:px-12 mx-auto py-14 md:py-20"
        >
          <Subheading
            subtitle={"Nebula Vets’ Difference in Dermatology and Skin Care:"}
            className={"pb-9"}
          />
          <SubChild
            title={
              "At Nebula Vets, we understand the impact of healthy skin on your pet's quality of life. Our dermatology and skin care services are designed to address skin conditions, alleviate discomfort, and improve your pet's overall well-being. Trust us to provide exceptional care, utilizing advanced techniques and personalized treatment plans."
            }
          />
        </div>
      </div>
      <div className="bg-[#494336] flex-wrap">
        <div className="px-8 pt-20 text-start max-w-[1180px] mx-auto px-8 md:px-10 lg:px-12">
          <div className="max-w-[867px]">
            <Subheading
              subtitle={"We look forward to seeing you and your pet soon!"}
              className={"text-[#D7D9DD] mb-8"}
            />
            <SubChild
              title={
                "Contact Nebula Vets today to schedule a dermatology consultation and let our experienced team bring the sparkle back to your pet's coat. Together, we will help your furry friend shine with healthy skin and a happy disposition."
              }
              childClass={"text-[#D7D9DD] mb-11"}
            />
            <Button btnTitle={"BOOK NOW"} className={"text-[#494336]"} />
          </div>
        </div>
        <div className="flex justify-end mt-[-100px] sm:mt-[-350px] ml-auto mr-0 max-w-[603px]">
          <img src={foot} alt="footer" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default Difference;
