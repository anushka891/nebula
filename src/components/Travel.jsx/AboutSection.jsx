import React from "react";
import wave from "./../../assests/img/png/Travel-wave.png";
import Subheading from "../common/Subheading";
import SubChild from "../common/SubChild";
import WeLook from "../Emergency/WeLook";
function AboutSection() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] pt-14 md:pt-20">
        <div className="max-w-[1170px] mx-auto px-8 md:px-10 lg:px-12 text-[#494336] text-start">
          <Subheading
            subtitle={"Pet Travel Certificates"}
            className={"pb-5 md:pb-9"}
          />
          <SubChild
            title={
              "At Nebula Vets, we understand that your pet is an important part of your family, and we want to make sure they can accompany you on your domestic or international travels. We offer assistance in obtaining the necessary health certificates and paperwork required for your pet's travel."
            }
            childClass={"mb-6"}
          />
          <Subheading
            subtitle={"Documentation Assistance"}
            className={"pb-5 md:pb-9 pt-10"}
          />
          <SubChild
            title={
              "Gathering the required documentation for travel can be overwhelming and confusing. Our team will provide detailed instructions on the documentation needed and guide you through the process. We will assist you in completing the paperwork accurately, including filling out any forms and providing relevant information to ensure a smooth and hassle-free travel experience for you and your pet."
            }
            childClass={"mb-6"}
          />
          <Subheading
            subtitle={"Domestic Travel"}
            className={"pb-5 md:pb-9 pt-10"}
          />
          <SubChild
            title={
              "Regulations for pet travel vary between states, and how you’re getting there. Each airline has different requirements and specific forms for you to fill out about your pet. Our vets can advise on what exactly you need."
            }
          />
          <Subheading
            subtitle={"International Travel"}
            className={"pb-5 md:pb-9 pt-10"}
          />
          <SubChild
            title={
              "For international travel planning is important. Health requirements and restrictions on entry can vary, such as requiring a current rabies vaccination no less than 30 days before travel. Some countries may also require your pet to be quarantined for a certain amount of time upon arrival, or have a blood test before travelling."
            }
            childClass={"mb-6"}
          />
          <SubChild
            title={
              "Please contact us before booking your appointment, so we can determine the exact requirements for your planned travel and ensure you’re able to get the travel certificate you need."
            }
          />
        </div>
        <div className="mt-[-40px] md:mt-[-100px] lg:mt-[-300px] xl:mt-[-400px] w-full">
          <img src={wave} alt="wave" width={"100%"} />
        </div>
      </div>
      <WeLook />
    </>
  );
}

export default AboutSection;
