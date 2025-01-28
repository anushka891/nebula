import React from "react";
import Subheading from "../common/Subheading";
import TextLG from "../common/TextLG";
import wave from "./../../assests/img/png/why-should-position-wave.png";
function EmergencyCare() {
  return (
    <div className="bg-[rgba(215,217,221,0.50);] pt-14 md:pt-20">
      <div className="max-w-[1180px] mx-auto px-8 md:px-10 lg:px-12 text-[#494336] text-start">
        <Subheading
          subtitle={"Urgent & Emergency Care during open hours"}
          className={"pb-5 md:pb-9"}
        />
        <TextLG
          title={
            "At Nebula Vets, we understand that emergencies can happen at any time, and your pet's health and well-being are our top priority.  We have convenient operating hours to ensure that we are available when you need us."
          }
          textclass={"mb-6"}
        />
        <Subheading
          subtitle={"When to schedule a dental consultation"}
          className={"pb-5 md:pb-9 pt-10"}
        />
        <TextLG
          title={
            "If you notice any signs of dental problems in your pet, such as bad breath, red or swollen gums, difficulty eating, or loose teeth, it's essential to seek professional dental care. Schedule a dental consultation at Nebula Vets to have our skilled team assess your pet's dental health and recommend the most appropriate treatment options."
          }
        />
        <Subheading
          subtitle={"Post Dental Care"}
          className={"pb-5 md:pb-9 pt-10"}
        />
        <TextLG
          title={
            "Most pets recover quickly after a dental. A little tiredness, and some post-anesthesia anxiety is normal. You can feed your pet the evening of their procedure; soft food for 14 days is recommended if any dental extractions were performed. If your pet had any extractions performed, we will send them home with pain relief to keep them comfortable."
          }
        />
      </div>
      <div className="mt-[-40px] md:mt-[-100px] lg:mt-[-300px] xl:mt-[-400px] w-full">
        <img src={wave} alt="wave" width={"100%"} />
      </div>
    </div>
  );
}

export default EmergencyCare;
