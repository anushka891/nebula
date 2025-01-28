import React from "react";
import Subheading from "../common/Subheading";
import SubChild from "../common/SubChild";
import foot from "./../../assests/img/png/footer-service-position.png";
import Button from "./../common/Button";
function ExperienceSection() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);]">
        <div className="text-start max-w-[1180px] px-8 md:px-10 lg:px-12 mx-auto py-14 md:py-20">
          <Subheading
            subtitle={
              "Experience Exceptional Animal Health Checks at Nebula Vets:"
            }
            className={"pb-9"}
          />
          <SubChild
            title={
              "At Nebula Vets, we are committed to providing exceptional animal health checks that go beyond the basics. Our thorough evaluations, personalized care, and commitment to preventive medicine set us apart. Trust us to be your partner in ensuring your pet's well-being and delivering the highest standard of veterinary care."
            }
          />
        </div>
      </div>
      <div className="bg-[#494336] flex-wrap">
        <div className="px-8 pt-14 text-start max-w-[1180px] mx-auto px-8 md:px-10 lg:px-12">
          <div className="max-w-[867px]">
            <Subheading
              subtitle={"We look forward to seeing you and your pet soon!"}
              className={"text-[#D7D9DD] mb-8"}
            />
            <SubChild
              title={
                "Schedule an animal health check at Nebula Vets today, and let us embark on a journey of comprehensive care for your cherished companion. Together, we will nurture their health and happiness, one check-up at a time."
              }
              childClass={"text-[#D7D9DD] mb-11"}
            />
            <Button btnTitle={"BOOK NOW"} className={"text-[#494336]"} />
          </div>
        </div>
        <div className="flex justify-end mt-[-100px] sm:mt-[-300px] ml-auto mr-0 max-w-[603px]">
          <img src={foot} alt="footer" width={"100%"} />
        </div>
      </div>
    </>
  );
}

export default ExperienceSection;
