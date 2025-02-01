import React from "react";
import Mainheading from "../common/Mainheading";
import Button from "../common/Button";
import come from "./../../assests/img/png/come-main.png";
function ComeVisit() {
  return (
    <div className="bg-[#494336]">
      <div className="flex-wrap md:flex-nowrap flex justify-center md:justify-end pr-8 gap-10 lg:gap-24 xl:gap-[316px] items-center px-8">
        <div className="mt-14 md:mt-0 text-start">
          <Mainheading
            maintitle={"Come visit us!"}
            className={"mb-10 md:mb-16 lg:mb-[70px] text-[#D7D9DD]"}
          />
          <Button btnTitle={"BOOK NOW"} />
        </div>
        <div className="max-w-[470px] lg:max-w-[580px] xl:max-w-[627px]">
          <img src={come} alt="come" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default ComeVisit;
