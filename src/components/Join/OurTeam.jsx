import React from "react";
import Subheading from "../common/Subheading";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import foot from "./../../assests/img/png/we-lookimg.png";
function OurTeam() {
  return (
    <div className="bg-[#494336] flex-wrap">
      <div className="px-8 pt-20 text-start max-w-[1180px] mx-auto px-8 md:px-10 lg:px-12">
        <div className="max-w-[867px]">
          <Subheading
            subtitle={"Join our team"}
            className={"text-[#D7D9DD] mb-8"}
          />
          <SubChild
            title={
              "Grow your career with Nebula Vets and become part of a team that is shaping the future of veterinary care. Contact us today to learn more about current openings, our application process, and how you can contribute to our mission of providing exceptional care to our beloved patients. Together, let's create a brighter future for veterinary medicine."
            }
            childClass={"text-[#D7D9DD] mb-11"}
          />
          <Button btnTitle={"APPLY TODAY"} className={"text-[#494336] mb-20"} />
        </div>
      </div>
      <div className="flex justify-end mt-[-100px] sm:mt-[-385px] ml-auto mr-0 max-w-[603px]">
        <img src={foot} alt="footer" width={"100%"} />
      </div>
    </div>
  );
}

export default OurTeam;
