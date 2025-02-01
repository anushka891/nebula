import React from "react";
import Subheading from "../common/Subheading";
import TextLG from "../common/TextLG";
import wave from "./../../assests/img/png/medicine-wave.png";
function AboutMedecine() {
  return (
    <div className="bg-[rgba(215,217,221,0.50);] pt-14 md:pt-20 pb-10">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="max-w-[1180px] mx-auto px-8 md:px-10 lg:px-12 text-[#494336] text-start"
      >
        <Subheading
          subtitle={"Why use Telemedicine"}
          className={"pb-5 md:pb-9"}
        />
        <TextLG
          title={
            "Nebula Vets' online telemedicine service is designed to provide immediate advice and guidance for various veterinary issues. Whether you're unsure about the severity of a symptom or need assistance in determining the best course of action for your pet, our experienced veterinarians can offer real-time advice through the telemedicine platform."
          }
        />
        <Subheading
          subtitle={"During the online consultation"}
          className={"pb-5 md:pb-9 pt-10"}
        />
        <TextLG
          title={
            "Our veterinarians will carefully assess the information you provide and ask relevant questions to better understand your pet's condition. Based on their evaluation, they can advise you on whether it's safe to monitor the situation at home or if furtherin-person evaluation and treatment are necessary."
          }
          textclass={"mb-6"}
        />
        <TextLG
          title={
            "This immediate access to professional veterinary advice can be particularly valuable in situations where you're unsure if a symptom or behavior is concerning enough to warrant a visit to the clinic. It can save you time and unnecessary stress by providing clarity and peace  of mind."
          }
          textclass={"mb-6"}
        />
        <TextLG
          title={
            "However, it's important to note that there are limitations to telemedicine, and certain cases may still require an in-person visit for a thorough examination or diagnostic tests. Our veterinarians will use their expertise to determine the most appropriate course of action based on the information provided during the telemedicine consultation."
          }
        />
      </div>
      <div className="mt-[-40px] md:mt-[-100px] lg:mt-[-300px] xl:mt-[-375px] w-full">
        <img src={wave} alt="wave" width={"100%"} />
      </div>
    </div>
  );
}

export default AboutMedecine;
