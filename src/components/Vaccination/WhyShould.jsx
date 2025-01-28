import React from "react";
import Subheading from "../common/Subheading";
import TextLG from "../common/TextLG";
import wave from "./../../assests/img/png/why-should-position-wave.png";
function WhyShould() {
  return (
    <div className="bg-[rgba(215,217,221,0.50);] pt-14 md:pt-20">
      <div className="max-w-[1180px] mx-auto px-8 md:px-10 lg:px-12 text-[#494336] text-start">
        <Subheading
          subtitle={"Why should I vaccinate my pet?"}
          className={"pb-5 md:pb-9"}
        />
        <TextLG
          title={
            "Vaccines are affective as the expose your pet’s immune system to an inactive strain of infectious agents. This assists their body to create immune cells that are specifically designed to respond effectively when exposed to the disease. Vaccines are also relatively painless, quick and cost-effective to administer."
          }
        />
        <Subheading
          subtitle={"What are core and non-core vaccines?"}
          className={"pb-5 md:pb-9 pt-10"}
        />
        <TextLG
          title={
            "Core vaccines are often vaccines considered essential for your pet’s health, whilst non-core vaccines are optional, and may be recommended for your pet depending on their lifestyle."
          }
        />
        <TextLG
          title={
            "Our vets will discuss the suitable vaccines for your pet during the consultation."
          }
        />
      </div>
      <div className="mt-[-40px] md:mt-[-100px] lg:mt-[-300px] xl:mt-[-400px] w-full">
        <img src={wave} alt="wave" width={"100%"} />
      </div>
    </div>
  );
}

export default WhyShould;
