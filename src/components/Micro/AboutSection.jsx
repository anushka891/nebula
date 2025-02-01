import React from "react";
import SubChild from "../common/SubChild";
import WeLook from "../emergency/WeLook";
import Subheading from "../common/Subheading";
import wave from "./../../assests/img/png/Travel-wave.png";

function AboutSection() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[rgba(215,217,221,0.50);] pt-14 md:pt-20">
        <div
          data-aos="zoom-out-right"
          data-aos-duration="1500"
          className="max-w-[1170px] mx-auto px-8 md:px-10 lg:px-12 text-[#494336] text-start"
        >
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal roboto text-[#494336] leading-[normal] mb-11 md:mb-14 lg:mb-[60px]">
            Here are a few compelling reasons why microchipping is a wise
            choice:
          </h2>
          <Subheading
            subtitle={"Identification and Reunification"}
            className={"pb-5 md:pb-9"}
          />
          <SubChild
            title={
              "Pets can sometimes wander or accidentally get lost, causing distress to both the pet and their owners. A microchip provides a permanent form of identification that cannot be lost or removed. If your pet goes missing and is found by a shelter or veterinary clinic, they can scan the microchip to retrieve your contact information and swiftly reunite you with your beloved pet."
            }
            childClass={"mb-1 lg:mb-6"}
          />
          <Subheading
            subtitle={"Increased Chance of Recovery"}
            className={"pb-5 md:pb-9 pt-10"}
          />
          <SubChild
            title={
              "Studies have shown that pets with microchips have a significantly higher chance of being reunited with their owners compared to those without. By having your pet microchipped, you enhance the chances of a successful reunion, saving precious time, and reducing the emotional strain of a lost pet situation."
            }
            childClass={"mb-1 lg:mb-6"}
          />
          <Subheading
            subtitle={"Secure and Permanent"}
            className={"pb-5 md:pb-9 pt-10"}
          />
          <SubChild
            title={
              "Unlike collars or tags, which can break or be removed, a microchip is a tiny, implantable device that is safely and painlessly inserted under your pet's skin. Once in place, it remains with your pet for life, ensuring a permanent form of identification that cannot be tampered with or lost."
            }
          />
          <Subheading
            subtitle={"Universal Recognition"}
            className={"pb-5 md:pb-9 pt-10"}
          />
          <SubChild
            title={
              "Microchips are recognized and read by most veterinary clinics, animal shelters, and animal control agencies worldwide. This means that if your pet gets lost during travel or relocation, their microchip can be scanned and their identification information accessed regardless of where they are found."
            }
            childClass={"mb-1 lg:mb-6"}
          />
          <Subheading
            subtitle={"Medical Information Access"}
            className={"pb-5 md:pb-9 pt-10"}
          />
          <SubChild
            title={
              "Advanced microchips can store additional medical information about your pet, such as vaccinations, allergies, or any ongoing medical conditions. This feature can be especially helpful in emergency situations when immediate access to crucial health details can make a significant difference in the treatment and care your pet receives."
            }
          />
        </div>
        <div className="mt-[-40px] md:mt-[-100px] lg:mt-[-300px] xl:mt-[-400px] w-full">
          <img src={wave} alt="wave" width={"100%"} />
        </div>
      </div>
      <WeLook />
    </div>
  );
}

export default AboutSection;
