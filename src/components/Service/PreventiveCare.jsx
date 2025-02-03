import React from "react";
import Button from "../common/Button";
import Mainheading from "../common/Mainheading";
import SubChild from "../common/SubChild";
import health from "./../../assests/img/png/Preventive care big-health-check.png";
import add from "./../../assests/img/png/Additional icon.png";
import foot from "./../../assests/img/png/footer-service-position.png";
import {
  checkData,
  checkLastData,
  checkSecondData,
  checkThirdData,
} from "../helper/Helper";
import bandage from "./../../assests/img/png/bandage.png";
import surgery from "./../../assests/img/png/surgery.png";
import Subheading from "../common/Subheading";
function PreventiveCare() {
  return (
    <div>
      <div>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          id="PreventiveCare"
          className="flex-wrap lg:flex-nowrap flex gap-4 xl:gap-14 justify-center lg:justify-end items-start lg:relative"
        >
          <div className="max-w-full lg:max-w-[481px] text-start w-full lg:w-[40%] pt-[120px] sm:pt-20 px-8 sm:px-10 md:px-14 lg:px-4 min-[1370px]:px-0 pb-14 lg:pb-0 lg:sticky lg:top-0">
            <div>
              <div className="max-w-[218px] sm:max-w-[320px] md:max-w-[376px] mb-1">
                <img src={health} alt="img" />
              </div>
              <Mainheading maintitle={"Preventive Care"} />
              <p className="text-base sm:text-xl md:text-2xl mt-4 leading-[150%] roboto text-[#494336] font-normal roboto mb-6 sm:mb-8">
                Your pet's well-being at the forefront of our practice.
              </p>
              <SubChild
                title={
                  "At Nebula Vets, we take a proactive approach to your pet's healthcare, prioritizing their well-being and aiming to maximize their quality of life. We believe in the importance of preventive medicine and early detection of potential health issues. By implementing regular wellness check-ups and comprehensive screenings, we can identify and address any problems at their earliest stages."
                }
                childClass={"mb-0 sm:mb-6 md:mb-10"}
              />
              <Button
                btnTitle={"BOOK NOW"}
                className={"text-[#494336] hidden sm:flex"}
              />
            </div>
          </div>
          <div className="bg-[rgba(215,217,221,0.50);] w-full lg:w-[55%] pl-8 sm:pl-10 md:pl-16 min-[1400px]:pl-[111px] pr-8 sm:pr-10 min-[1400px]:pr-14 pt-6 lg:pt-12 pb-14 lg:pb-0">
            <div className="max-w-[800px]">
              {checkData.map((item, index) => (
                <div
                  key={index}
                  className="text-start border-b-[1px] border-black pt-8"
                >
                  <h2 className="text-base sm:text-xl md:text-[28px] font-normal text-[#494336] leading-normal roboto mb-6 sm:mb-8">
                    {item.title}
                  </h2>
                  <p className="text-[#494336] text-sm sm:text-lg md:text-xl text-normal leading-[26px] avant mb-8">
                    {item.disc}
                  </p>
                  <Button
                    btnTitle={"LEARN MORE"}
                    className={"text-[#494336] mb-12 sm:mb-14"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="PatientCare"
          className="flex-wrap lg:flex-nowrap flex gap-4 xl:gap-14 justify-center lg:justify-end items-start lg:relative"
        >
          <div className="max-w-full lg:max-w-[481px] text-start w-full lg:w-[40%] pt-[100px] sm:pt-20 px-8 min-[1370px]:px-0 mb-14 lg:mb-0 lg:sticky lg:top-0">
            <div>
              <div className="max-w-[218px] sm:max-w-[320px] md:max-w-[376px] mb-2 sm:mb-10 lg:mb-20">
                <img src={bandage} alt="img" />
              </div>
              <Mainheading maintitle={"Sick Patient Care"} />
              <p className="text-base sm:text-xl md:text-2xl mt-4 leading-[150%] roboto text-[#494336] font-normal roboto mb-6 sm:mb-8">
                Delivering exceptional care for sick patients, combining the
                virtues of efficiency and expertise
              </p>
              <SubChild
                title={
                  "At Nebula Vets, we are fully equipped with advanced diagnostic tools and a wide range of treatment options to address any health issue your pet may be facing. Our commitment to comprehensive care means that we have the expertise and resources to provide accurate diagnoses and effective treatments."
                }
                childClass={"mb-0 sm:mb-6 md:mb-8"}
              />
              <Button
                btnTitle={"BOOK NOW"}
                className={"text-[#494336] hidden sm:flex"}
              />
            </div>
          </div>
          <div className="bg-[rgba(215,217,221,0.50);] w-full lg:w-[55%] pl-8 sm:pl-10 md:pl-16 min-[1400px]:pl-[111px] pr-8 sm:pr-10 min-[1400px]:pr-14 pt-6 lg:pt-12 pb-14 lg:pb-0">
            <div className="max-w-[800px]">
              {checkSecondData.map((item, index) => (
                <div
                  key={index}
                  className="text-start border-b-[1px] border-black pt-8"
                >
                  <h2 className="text-base sm:text-xl md:text-[28px] font-normal text-[#494336] leading-normal roboto mb-6 sm:mb-8">
                    {item.title}
                  </h2>
                  <p className="text-[#494336] text-sm sm:text-lg md:text-xl text-normal leading-[26px] avant mb-8">
                    {item.disc}
                  </p>
                  <Button
                    btnTitle={"LEARN MORE"}
                    className={"text-[#494336] mb-12 sm:mb-14"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="Surgery"
          className="flex-wrap lg:flex-nowrap flex gap-14 justify-center lg:justify-end lg:relative"
        >
          <div className="max-w-full lg:max-w-[481px] text-start w-full lg:w-[40%] pl-8 min-[1370px]:pl-0 lg:sticky lg:top-0">
            <div>
              <div className="max-w-[218px] sm:max-w-[320px] md:max-w-[376px] mb-2 sm:mb-10 lg:mb-20 mt-[120px] sm:mt-20 lg:mt-0">
                <img src={surgery} alt="img" />
              </div>
              <Mainheading maintitle={"Surgery"} />
              <p className="text-base sm:text-xl md:text-2xl mt-4 leading-[150%] roboto text-[#494336] font-normal roboto mb-6 sm:mb-8">
                Highly experienced surgeons -dedicated to delivering outstanding
                care for your pet.
              </p>
              <SubChild
                title={
                  "At Nebula Vets, we are equipped to handle a wide range of veterinary services, from emergency surgeries to routine procedures like neuters. Our team of skilled veterinarians is committed to providing the highest level of care to your pets."
                }
                childClass={"mb-0 sm:mb-6 md:mb-10"}
              />
              <Button
                btnTitle={"BOOK NOW"}
                className={"text-[#494336] hidden sm:flex"}
              />
            </div>
          </div>
          <div className="bg-[rgba(215,217,221,0.50);] w-full lg:w-[55%] pl-8 sm:pl-10 md:pl-16 min-[1400px]:pl-[111px] pr-8 sm:pr-10 min-[1400px]:pr-14 pt-6 lg:pt-12 pb-14 lg:pb-0">
            <div className="max-w-[800px] pt-7 md:pt-[60px]">
              {checkThirdData.map((item, index) => (
                <div
                  key={index}
                  className="text-start border-b-[1px] border-black pt-0 md:pt-8"
                >
                  <h2 className="text-base sm:text-xl md:text-[28px] font-normal text-[#494336] leading-normal roboto mb-6 sm:mb-8">
                    {item.title}
                  </h2>
                  <p className="text-[#494336] text-sm sm:text-lg md:text-xl text-normal leading-[26px] avant mb-8">
                    {item.disc}
                  </p>
                  <Button
                    btnTitle={"LEARN MORE"}
                    className={"text-[#494336] mb-12 sm:mb-14"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="AdditionalServices"
          className="flex-wrap lg:flex-nowrap flex gap-14 justify-center lg:justify-end items-start lg:relative"
        >
          <div className="max-w-full lg:max-w-[481px] text-start w-full lg:w-[40%] pl-8 min-[1370px]:pl-0 lg:sticky lg:top-0">
            <div>
              <div className="max-w-[218px] sm:max-w-[320px] md:max-w-[376px] mb-2 sm:mb-11 mt-[100px] sm:mt-[160px]">
                <img src={add} alt="img" />
              </div>
              <Mainheading maintitle={"Additional Services"} />
              <p className="text-base sm:text-xl md:text-2xl mt-6 leading-[150%] roboto text-[#494336] font-normal roboto mb-5">
                Additional Services that Go Above and Beyond: Experience
                Exceptional Veterinary Care at Nebula Vets
              </p>
              <SubChild
                title={
                  "Experience comprehensive veterinary care at Nebula Vets. We offer specialized services in travel document assistance, skin dermatology, microchipping, and compassionate euthanasia. Trust our experienced team for exceptional care tailored to your pet's unique needs."
                }
                childClass={"mb-0 sm:mb-6 md:mb-[100px]"}
              />
              <Button
                btnTitle={"BOOK NOW"}
                className={"text-[#494336] hidden sm:flex"}
              />
            </div>
          </div>
          <div className="bg-[rgba(215,217,221,0.50);] w-full lg:w-[55%] pl-8 sm:pl-10 md:pl-16 min-[1400px]:pl-[111px] pr-8 sm:pr-10 min-[1400px]:pr-14 pt-6 lg:pt-12 pb-20">
            <div className="max-w-[800px] pt-0 lg:pt-[60px] pb-14 lg:pb-0">
              {checkLastData.map((item, index) => (
                <div
                  key={index}
                  className="text-start border-b-[1px] border-black pt-8"
                >
                  <h2 className="text-base sm:text-xl md:text-[28px] font-normal text-[#494336] leading-normal roboto mb-6 sm:mb-8">
                    {item.title}
                  </h2>
                  <p className="text-[#494336] text-sm sm:text-lg md:text-xl text-normal leading-[26px] avant mb-8">
                    {item.disc}
                  </p>
                  <Button
                    btnTitle={"LEARN MORE"}
                    className={"text-[#494336] mb-12 sm:mb-14"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* looksection */}
      <div className="flex sm:hidden">
        <div className="bg-[#494336] flex-wrap">
          <div className="px-8 pt-14 text-start max-w-[1180px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="max-w-[867px]">
              <Subheading
                subtitle={"We look forward to seeing you and your pet soon!"}
                className={"text-[#D7D9DD] mb-8"}
              />
              <SubChild
                title={
                  "Contact Nebula Vets today to schedule a consultation. Let us provide your furry companion with the highest quality care and support, ensuring a healthier and happier life for them."
                }
                childClass={"text-[#D7D9DD] mb-11"}
              />
              <Button btnTitle={"BOOK NOW"} className={"text-[#494336]"} />
            </div>
          </div>
          <div className="flex justify-end mt-[-120px] ml-auto mr-0">
            <img src={foot} alt="footer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreventiveCare;
