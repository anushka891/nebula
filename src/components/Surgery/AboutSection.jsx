import React from "react";
import Subheading from "../common/Subheading";
import wave from "./../../assests/img/png/surgery-wave.png";
import SubChild from "../common/SubChild";

function AboutSection() {
  return (
    <div className="bg-[rgba(215,217,221,0.50);] pt-14 md:pt-20">
      <div className="max-w-[1180px] mx-auto px-8 md:px-10 lg:px-12 text-[#494336] text-start">
        <Subheading
          subtitle={"Does my pet need a pre-consultation?"}
          className={"pb-5 md:pb-9"}
        />
        <SubChild
          title={
            "Yes, by conducting a pre-operative consultation, performing a physical examination, and considering bloodwork results, we can minimize the risks associated with surgery and optimize the outcome for your beloved pet. Your pet's safety and well-being are our top priorities throughout the entire surgical process."
          }
        />
        <Subheading
          subtitle={"How much will it cost?"}
          className={"pb-5 md:pb-9 pt-10"}
        />
        <SubChild
          title={
            "Surgery costs can vary based on several factors, including the specific procedure your pet requires, their weight, any necessary medications, and additional considerations. To provide you with an accurate estimate for your pet's surgery, we recommend booking a pre-surgical consultation with our experienced veterinarians."
          }
        />
        <SubChild
          title={
            "If you prefer, you can also reach out to us via email at nebulavets@gmail.comto request an estimate. Please provide us with as much information as possible about your pet's condition and the specific procedure they may need. Our team will review your request and respond promptly with an estimate based on the information provided."
          }
          textclass={"mt-6"}
        />
        <Subheading
          subtitle={"Do you accept insurance?"}
          className={"pb-5 md:pb-9 pt-10"}
        />
        <SubChild
          title={
            "Yes, at Nebula Vets, we accept all forms of pet insurance. We understand the importance of financial support when it comes to your pet's healthcare needs. By accepting various pet insurance providers, we aim to make the reimbursement process as seamless as possible for our clients."
          }
        />
      </div>
      <div className="mt-[-40px] md:mt-[-100px] lg:mt-[-300px] xl:mt-[-400px] w-full">
        <img src={wave} alt="wave" width={"100%"} />
      </div>
    </div>
  );
}

export default AboutSection;
