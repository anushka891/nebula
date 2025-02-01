import React from "react";
import Subheading from "../common/Subheading";
import TextLG from "../common/TextLG";
import wave from "./../../assests/img/png/why-should-position-wave.png";
function AboutSection() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[rgba(215,217,221,0.50);] pt-14 md:pt-20">
        <div className="max-w-[1180px] mx-auto px-8 md:px-10 lg:px-12 text-[#494336] text-start">
          <div
            data-aos-duration="500"
            data-aos="fade-right"
            data-aos-easing="linear"
          >
            <Subheading
              subtitle={"Dentals - Scale & Polish"}
              className={"pb-5 md:pb-9"}
            />
          </div>
          <div
            data-aos-duration="700"
            data-aos="fade-left"
            data-aos-easing="linear"
          >
            <TextLG
              title={
                "Dental health is a vital aspect of your pet's overall well-being. Just like humans, pets can experience dental problems, including plaque buildup, gum disease, and tooth decay. At Nebula Vets, we prioritize dental care and offer comprehensive dental services to ensure your pet's oral health remains in top condition."
              }
            />
          </div>
          <div
            data-aos-duration="500"
            data-aos="fade-right"
            data-aos-easing="linear"
          >
            <Subheading
              subtitle={"When to schedule a dental consultation"}
              className={"pb-5 md:pb-9 pt-10"}
            />
          </div>
          <div
            data-aos-duration="700"
            data-aos="fade-left"
            data-aos-easing="linear"
          >
            <TextLG
              title={
                "If you notice any signs of dental problems in your pet, such as bad breath, red or swollen gums, difficulty eating, or loose teeth, it's essential to seek professional dental care. Schedule a dental consultation at Nebula Vets to have our skilled team assess your pet's dental health and recommend the most appropriate treatment options."
              }
            />
          </div>
          <div
            data-aos-duration="500"
            data-aos="fade-right"
            data-aos-easing="linear"
          >
            <Subheading
              subtitle={"Post Dental Care"}
              className={"pb-5 md:pb-9 pt-10"}
            />
          </div>
          <div
            data-aos-duration="700"
            data-aos="fade-left"
            data-aos-easing="linear"
          >
            <TextLG
              title={
                "Most pets recover quickly after a dental. A little tiredness, and some post-anesthesia anxiety is normal. You can feed your pet the evening of their procedure; soft food for 14 days is recommended if any dental extractions were performed. If your pet had any extractions performed, we will send them home with pain relief to keep them comfortable."
              }
            />
          </div>
        </div>
        <div className="mt-[-40px] md:mt-[-100px] lg:mt-[-300px] xl:mt-[-400px] w-full">
          <img src={wave} alt="wave" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
