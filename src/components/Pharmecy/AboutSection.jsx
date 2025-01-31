import React from "react";
import Subheading from "../common/Subheading";
import TextLG from "../common/TextLG";
import wave from "./../../assests/img/png/pharmecy-wave-about.png";
function AboutSection() {
  return (
    <div>
      <div className="bg-[rgba(215,217,221,0.50);] pt-14 md:pt-20">
        <div className="max-w-[1180px] mx-auto px-8 md:px-10 lg:px-12 text-[#494336] text-start">
          <Subheading subtitle={"How it works"} className={"pb-5 md:pb-9"} />
          <TextLG
            title={
              "We understand that time is of the essence when it comes to your pet's health, and waiting for medications to be obtained from an external pharmacy can be inconvenient. By keeping a comprehensive inventory of commonly used medications in our pharmacy, we strive to streamline the process and minimize any delays in providing your pet with the necessary treatment."
            }
            textclass={"mb-6"}
          />
          <TextLG
            title={
              "However, if a specific medication is not readily available in our on-site pharmacy, we have a solution. We work closely with a trusted compounding pharmacy that specializes in creating customized medications. This allows us to quickly obtain or create the specific medication your pet needs. Once the medication is compounded, we can arrange for it to be delivered to you, ensuring that you have it in a timely manner."
            }
          />
        </div>
        <div className="mt-[-40px] md:mt-[-100px] lg:mt-[-300px] xl:mt-[-330px] w-full">
          <img src={wave} alt="wave" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
