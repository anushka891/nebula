import React from "react";
import Subheading from "../common/Subheading";
import SubChild from "../common/SubChild";
import wave from "./../../assests/img/png/Travel-wave.png";
function AboutHospice() {
  return (
    <div className="bg-[rgba(215,217,221,0.50);] pt-14 md:pt-20">
      <div className="max-w-[1170px] mx-auto px-8 md:px-10 lg:px-12 text-[#494336] text-start">
        <Subheading
          subtitle={"Euthanasia Service"}
          className={"pb-5 md:pb-9"}
        />
        <SubChild
          title={
            "Saying goodbye to a beloved pet is a deeply emotional and challenging experience. At Nebula Vets, we understand the profound bond between you and your pet, and we are here to support you during this difficult time. Our compassionate team providesend-of-life care and guiding you through the process with empathy and understanding. Here's how we can assist you:"
          }
          childClass={"mb-1 lg:mb-6"}
        />
        <Subheading
          subtitle={"Compassionate Support"}
          className={"pb-5 md:pb-9 pt-10"}
        />
        <SubChild
          title={
            "We recognize that the decision to say goodbye to your pet is a personal and heartfelt one. Our team is here to listen to your concerns, answer any questions you may have, and provide emotional support throughout the entire process. We understand the grief and sadness that comes with this decision, and we aim to create a compassionate and comforting environment for both you and your pet."
          }
        />
        <Subheading
          subtitle={"Open Communication"}
          className={"pb-5 md:pb-9 pt-10"}
        />
        <SubChild
          title={
            "We believe in open and honest communication when it comes to end-of-life care. Our veterinarians will take the time to discuss your pet's condition, prognosis, and quality of life to help you make an informed decision. We will guide you through the available options and ensure that you have all the information you need to make the best decision for your pet and your family."
          }
        />
        <Subheading
          subtitle={"Tailored End-of-Life Services"}
          className={"pb-5 md:pb-9 pt-10"}
        />
        <SubChild
          title={
            "We offer a range of end-of-life services to accommodate your wishes and provide a peaceful transition for your pet. This includes euthanasia services, which can be performed at our veterinary hospital. Our experienced veterinarians prioritize your pet's comfort, dignity, and pain-free experience during this time."
          }
        />
        <Subheading
          subtitle={"Supportive Environment"}
          className={"pb-5 md:pb-9 pt-10"}
        />
        <SubChild
          title={
            "We strive to create a calm and supportive environment during the end-of-life process. Our facility is designed to offer a peaceful setting where you and your pet can be together during these final moments. We provide a private space where you can say your goodbyes and spend quality time with your pet, offering comfort and reassurance throughout the process."
          }
        />
        <Subheading
          subtitle={"Aftercare Options"}
          className={"pb-5 md:pb-9 pt-10"}
        />
        <SubChild
          title={
            "We understand that the loss of a pet is a deeply personal experience, and we offer various aftercare options to honor your pet's memory. This may include individual cremation with the return of ashes, communal cremation, or burial services. We can discuss these options with you and provide guidance on how to memorialize your beloved pet in a meaningful way."
          }
        />
      </div>
      <div className="mt-[-40px] md:mt-[-100px] lg:mt-[-300px] xl:mt-[-400px] w-full linear-border">
        <img src={wave} alt="wave" width={"100%"} />
      </div>
    </div>
  );
}

export default AboutHospice;
