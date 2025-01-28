import React from "react";
import Subheading from "../common/Subheading";
import SubChild from "../common/SubChild";
import check from "./../../assests/img/png/check-exam-position.png";
function CheckExam() {
  return (
    <div className="bg-[rgba(215,217,221,0.50);] relative">
      <div className="max-w-[1180px] px-8 md:px-10 lg:px-12 mx-auto pt-14 md:pt-20 pb-24  sm:pb-[150px] lg:pb-[180px]">
        <div className="text-start">
          <Subheading subtitle={"Animal Health Check Exam"} />
          <SubChild
            title={
              "During our animal health check, we perform a thorough examination tailored to the unique needs of each patient. Our goal is to assess your pet's overall health, detect any potential issues, and offer preventive measures to maintain their vitality. Whether your furry friend is young, mature, or a senior, our veterinary professionals have the expertise to address their specific requirements."
            }
            childClass={"py-5 sm:py-8"}
          />
          <SubChild
            title={
              "In addition to providing routine health checks, we offer a comprehensive range of services to ensure the well-being of your pets:"
            }
          />
          <SubChild title={"-Vaccinations"} childClass={"mb-1"} />
          <SubChild title={"-Blood panels"} childClass={"mb-1"} />
          <SubChild title={"-Parasitic prevention"} childClass={"mb-1"} />
          <SubChild title={"-Microchipping"} childClass={"mb-1"} />
          <SubChild title={"-Dental care"} childClass={"mb-1"} />
          <SubChild title={"Fecal tests"} childClass={"mb-1"} />
          <SubChild title={"-Skin tests"} childClass={"mb-1"} />
          <SubChild title={"-Dietary advise"} />
        </div>
      </div>
      <div className="absolute bottom-0 md:bottom-[36px]">
        <img src={check} alt="check" />
      </div>
    </div>
  );
}

export default CheckExam;
