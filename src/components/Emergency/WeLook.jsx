import React from "react";
import Subheading from "../common/Subheading";
import Button from "../common/Button";
import foot from "./../../assests/img/png/emergency-footer-wave.png";
function WeLook() {
  return (
    <div className="overflow-x-auto">
      <div className="bg-[#494336] flex-wrap">
        <div className="px-8 text-start max-w-[1180px] mx-auto px-8 md:px-10 lg:px-12">
          <div className="max-w-[530px] py-20">
            <Subheading
              subtitle={"We look forward to seeing you and your pet soon!"}
              className={"text-[#D7D9DD] mb-8"}
            />
            <Button btnTitle={"BOOK NOW"} className={"text-[#494336]"} />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="flex justify-end mt-[-100px] sm:mt-[-300px] ml-auto mr-0 max-w-[603px]"
        >
          <img src={foot} alt="footer" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default WeLook;
