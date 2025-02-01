import React from "react";
import SubChild from "../common/SubChild";
import Subheading from "../common/Subheading";
import Button from "../common/Button";
import foot from "./../../assests/img/png/surgery-wave-position.png";
function ChooseSection() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[rgba(215,217,221,0.50);]">
        <div
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="text-start max-w-[1180px] px-8 md:px-10 lg:px-12 mx-auto py-14 md:py-20"
        >
          <Subheading
            subtitle={"Choose Nebula Vets for Exceptional Surgical Care:"}
            className={"pb-9"}
          />
          <SubChild
            title={
              "When it comes to your pet's surgical needs, Nebula Vets stands out as a trusted choice. We offer exceptional surgical care with compassion, expertise, and advanced technology. Your pet's well-being is our top priority, and we are committed to providing the highest quality surgical services to help them live a healthy and happy life."
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
                "Contact Nebula Vets today to schedule a consultation or discuss your pet's surgical needs. Let us be your partner in providing outstanding surgical care for your furry companion."
              }
              childClass={"text-[#D7D9DD] mb-11"}
            />
            <Button btnTitle={"BOOK NOW"} className={"text-[#494336]"} />
          </div>
        </div>
        <div className="flex justify-end mt-[-100px] sm:mt-[-300px] ml-auto mr-0 max-w-[603px]">
          <img src={foot} alt="footer" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default ChooseSection;
