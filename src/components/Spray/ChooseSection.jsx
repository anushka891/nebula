import React from "react";
import Subheading from "../common/Subheading";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import foot from "./../../assests/img/png/surgery-wave-position.png";
function ChooseSection() {
  return (
    <div>
      <div className="bg-[rgba(215,217,221,0.50);] mb-0 sm:mb-6 md:mb-14">
        <div className="text-start max-w-[1180px] px-8 md:px-10 lg:px-12 mx-auto py-14 md:py-20">
          <Subheading
            subtitle={
              "Choose Nebula Vets for Exceptional Spay and Neuter Services:"
            }
            className={"pb-9"}
          />
          <SubChild
            title={
              "When it comes to spaying and neutering, Nebula Vets is your trusted partner. We offer exceptional surgical care with compassion, expertise, and a focus on your pet's well-being. By choosing us, you are making a responsible decision that promotes their health, prevents unwanted litters, and contributes to a healthier pet population overall."
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
                "Contact Nebula Vets today to schedule a consultation or discuss your pet's spay or neuter procedure. Let us provide your furry companion with the highest quality care and support, ensuring a healthier and happier life for them."
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
