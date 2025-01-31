import React from "react";
import Subheading from "../common/Subheading";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import foot from "./../../assests/img/png/we-look-wave.png";
function WeLook() {
  return (
    <div className="bg-[#494336] flex-wrap">
      <div className="px-8 pt-14 text-start max-w-[1180px] mx-auto px-8 md:px-10 lg:px-12">
        <div className="max-w-[867px]">
          <Subheading
            subtitle={"We look forward to seeing you and your pet soon!"}
            className={
              "text-[#D7D9DD] mb-8 max-w-[240px] min-[370px]:max-w-full"
            }
          />
          <SubChild
            title={
              "Schedule an animal health check at Nebula Vets today, and let us embark on a journey of comprehensive care for your cherished companion. Together, we will nurture their health and happiness, one check-up at a time."
            }
            childClass={"text-[#D7D9DD] mb-11"}
          />
          <Button btnTitle={"BOOK NOW"} className={"text-[#494336]"} />
        </div>
      </div>
      <div className="flex justify-end mt-[-60px] sm:mt-[-300px] ml-auto mr-0 max-w-[603px]">
        <img src={foot} alt="footer" width={"100%"} />
      </div>
    </div>
  );
}

export default WeLook;
