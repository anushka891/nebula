import React from "react";
import Subheading from "../common/Subheading";
import SubChild from "../common/SubChild";
import wave from "./../../assests/img/png/Travel-wave.png";
function AboutLaser() {
  return (
    <div>
      <div className="bg-[rgba(215,217,221,0.50);] pt-14 md:pt-20">
        <div className="max-w-[1170px] mx-auto px-8 md:px-10 lg:px-12 text-[#494336] text-start">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal roboto text-[#494336] leading-[normal] mb-11 md:mb-14 lg:mb-[60px]">
            Discover the Power of Laser Therapy at Nebula Vets: Elevating Pet
            Wellness with Advanced Healing
          </h2>
          <Subheading
            subtitle={"What is Laser Therapy?"}
            className={"pb-5 md:pb-9"}
          />
          <SubChild
            title={
              "Laser therapy, also known as low-level laser therapy or cold laser therapy, is a cutting-edge treatment modality that utilizes focused light energy to stimulate cellular activity and promote natural healing processes within the body. This non-invasive and painless therapy is safe for pets of all ages and can be used alongside other treatments to provide comprehensive care."
            }
            childClass={"mb-1 lg:mb-6"}
          />
          <Subheading
            subtitle={"How Does Laser Therapy Work?"}
            className={"pb-5 md:pb-9 pt-10"}
          />
          <SubChild
            title={
              "During a laser therapy session, a handheld device emits a concentrated beam of laser light that penetrates the targeted tissues. The light energy is absorbed by the cells, stimulating the production of adenosine triphosphate (ATP), a molecule that fuels cellular activities. This increase in ATP promotes accelerated tissue repair, reduces inflammation, and relieves pain."
            }
          />
        </div>
        <div className="mt-[-40px] md:mt-[-100px] lg:mt-[-300px] xl:mt-[-400px] w-full linear-border">
          <img src={wave} alt="wave" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default AboutLaser;
