import React from "react";
import SubChild from "../common/SubChild";
import Subheading from "../common/Subheading";
import Button from "../common/Button";
import foot from "./../../assests/img/png/we-lookimg.png";
function ExperienceSection() {
  return (
    <div>
      <div className="bg-[rgba(215,217,221,0.50);]">
        <div className="text-start max-w-[1170px] px-8 md:px-10 lg:px-12 mx-auto py-14 md:py-20">
          <Subheading
            subtitle={"Experience Laser Therapy at Nebula Vets:"}
            className={"pb-9"}
          />
          <SubChild
            title={
              "At Nebula Vets, we are committed to utilizing the latest advancements in veterinary care to enhance the well-being of your pets. Laser therapy is just one example of our dedication to providing comprehensive and effective treatment options."
            }
          />
        </div>
      </div>
      <div className="bg-[#494336] flex-wrap">
        <div className="px-8 pt-14 text-start max-w-[1180px] mx-auto px-8 md:px-10 lg:px-12">
          <div className="max-w-[867px]">
            <Subheading
              subtitle={"We look forward to seeing you and your pet soon!"}
              className={"text-[#D7D9DD] mb-8"}
            />
            <SubChild
              title={
                "If you believe that laser therapy could benefit your pet, we encourage you to schedule a consultation with our experienced veterinary team. We will assess your pet's condition, discuss treatment options, and develop a personalized plan that suits their specific needs."
              }
              childClass={"text-[#D7D9DD] mb-11"}
            />
            <Button btnTitle={"BOOK NOW"} className={"text-[#494336] mb-5"} />
          </div>
        </div>
        <div className="flex justify-end mt-[-100px] sm:mt-[-300px] ml-auto mr-0 max-w-[603px]">
          <img src={foot} alt="footer" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
