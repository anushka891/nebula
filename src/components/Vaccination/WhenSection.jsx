import React, { useRef, useState } from "react";
import foot from "./../../assests/img/png/we-look-wave.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import logo from "./../../assests/img/png/puppies-logo.png";
import Mainheading from "../common/Mainheading";
import SubChild from "../common/SubChild";
import kitt from "./../../assests/img/png/kitten-icon.png";
import Subheading from "../common/Subheading";
import Button from "../common/Button";
function WhenSection() {
  return (
    <div>
      <div className="text-start max-w-[1180px] mx-auto px-8 md:px-10 lg:px-12 pb-20">
        <Mainheading maintitle={"When to vaccinate?"} className={"mb-10"} />
        <Swiper
          pagination={true}
          modules={[Pagination]}
          slidesPerView={2}
          centeredSlides={false}
          spaceBetween={20}
          className="mySwiper brown mb-11"
          breakpoints={{
            300: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          <div className="flex flex-col gap-[22px] h-full">
            <SwiperSlide className="!h-auto">
              <div className="bg-[#494336] max-w-[547px] pl-5 lg:pl-12 pr-5 pt-9 pb-14 text-start h-full mx-auto">
                <div className="flex items-center gap-5 mb-2 lg:mb-6">
                  <div className="max-w-[42px] sm:max-w-[62px]">
                    <img src={logo} alt="logo" />
                  </div>
                  <Mainheading
                    maintitle={"Puppies Schedule"}
                    className={
                      "text-linear text-2xl md:!text-3xl md:!text-[36px] xl:!text-5xl !leading-[normal]"
                    }
                  />
                </div>
                <div className="pr-4 lg:pr-10 xl:pr-20">
                  <p className="text-xl lg:text-2xl roboto font-normal text-[#D7D9DD] leading-[150%]">
                    8 weeks:
                  </p>
                  <SubChild
                    title={
                      " Distemper vaccine, Leptospirosis, Bordetella vaccine, Lyme vaccine & Canine Influenza Virus vaccine"
                    }
                    childClass={
                      "text-[#D7D9DD] !text-lg lg:!text-xl mb-5 sm:mb-2"
                    }
                  />
                  <p className="text-xl lg:text-2xl roboto font-normal text-[#D7D9DD] leading-[150%]">
                    12 weeks:
                  </p>
                  <SubChild
                    title={
                      "Distemper vaccine, Leptospirosis vaccine, Rabies vaccine, Lyme vaccine & Canine Influenza Virus vaccine"
                    }
                    childClass={
                      "text-[#D7D9DD] !text-lg lg:!text-xl mb-5 sm:mb-2"
                    }
                  />
                  <p className="text-xl lg:text-2xl roboto font-normal text-[#D7D9DD] leading-[150%]">
                    Booster:
                  </p>
                  <SubChild
                    title={"Once a year"}
                    childClass={"text-[#D7D9DD] !text-lg lg:!text-xl"}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!h-auto">
              <div className="bg-[#494336] max-w-[547px] pl-5 lg:pl-12 pr-5 pt-9 pb-14 text-start h-full mx-auto">
                <div className="flex items-center gap-5 mb-2 lg:mb-6">
                  <div>
                    <img src={kitt} alt="logo" />
                  </div>
                  <Mainheading
                    maintitle={"Kitten Schedule"}
                    className={
                      "text-linear !text-3xl md:!text-[36px] xl:!text-5xl"
                    }
                  />
                </div>
                <div className="pr-0 lg:pr-20">
                  <p className="text-xl lg:text-2xl roboto font-normal text-[#D7D9DD] leading-[150%]">
                    8 weeks:
                  </p>
                  <SubChild
                    title={"FVRCP vaccine and Leukemia vaccines"}
                    childClass={"text-[#D7D9DD] mb-8 !text-lg lg:!text-xl"}
                  />
                  <p className="text-xl lg:text-2xl roboto font-normal text-[#D7D9DD] leading-[150%]">
                    12 weeks:
                  </p>
                  <SubChild
                    title={"FVRCP vaccine, Leukemia vaccine& Rabies vaccine"}
                    childClass={"text-[#D7D9DD] !text-lg lg:!text-xl"}
                  />
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          centeredSlides={false}
          slidesPerView={2}
          spaceBetween={20}
          className="mySwiper brown"
          breakpoints={{
            300: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          <div className="flex gap-5 gap-y-5 h-full">
            <SwiperSlide className="!h-auto">
              <div className="bg-[#494336] max-w-[547px] pl-5 lg:pl-12 pr-5 pt-9 pb-14 text-start mx-auto h-full  md:mt-[22px]">
                <div className="flex items-center gap-5 mb-4 lg:mb-9">
                  <div>
                    <img src={logo} alt="logo" />
                  </div>
                  <Mainheading
                    maintitle={"Adult Dog Schedule"}
                    className={
                      "text-linear !text-3xl md:!text-[36px] xl:!text-5xl !leading-[normal]"
                    }
                  />
                </div>
                <div className="pr-0 lg:pr-20 text-lg lg:text-[22px] avant font-normal leading-[127%] text-[#D7D9DD] gap-2 flex flex-col">
                  <p className="text-lg lg:text-[22px] avant font-normal leading-[127%] text-[#D7D9DD]">
                    Rabies: One year after the initial puppy vaccine, then every
                    three years
                  </p>
                  <p>Distemper: Every three years</p>
                  <p>Bordetella: Every year</p>
                  <p>Leptospirosis: Every year</p>
                  <p>Canine influenza: Every year</p>
                  <p> Lyme disease: Every year</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!h-auto">
              <div className="bg-[#494336] max-w-[547px] pl-5 lg:pl-12 pr-5 pb-14 text-start h-full mx-auto md:mt-[22px]">
                <div className="flex items-center gap-5 mb-5 lg:mb-9 pt-10">
                  <div>
                    <img src={kitt} alt="logo" />
                  </div>
                  <Mainheading
                    maintitle={"Adult Cat Schedule"}
                    className={
                      "text-linear !text-3xl md:!text-[36px] xl:!text-5xl"
                    }
                  />
                </div>
                <div className="pr-0 lg:pr-20 !text-lg lg:!text-[22px] avant font-normal leading-[127%] text-[#D7D9DD] gap-2 flex flex-col">
                  <p className="!text-lg lg:!text-[22px] avant font-normal leading-[127%] text-[#D7D9DD]">
                    FVRCP: Every year
                  </p>
                  <p>Rabies: Every three years</p>
                  <p>Feline Leukemia Virus: Every year</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      {/* looksection */}
      <div className="bg-[#494336] flex-wrap">
        <div className="px-8 pt-20 text-start max-w-[1180px] mx-auto px-8 md:px-10 lg:px-12">
          <div className="max-w-[867px]">
            <Subheading
              subtitle={"We look forward to seeing you and your pet soon!"}
              className={"text-[#D7D9DD] mb-8"}
            />
            <SubChild
              title={
                "If you have any questions or concerns about vaccinations or would like to schedule an appointment for your pet, please contact our friendly team at [Your Veterinary Practice]. We are here to provide your furry family members with the highest standard of care and protection through our comprehensive vaccination services."
              }
              childClass={"text-[#D7D9DD] mb-11"}
            />
            <Button btnTitle={"BOOK NOW"} className={"text-[#494336] mb-6"} />
          </div>
        </div>
        <div className="flex justify-end mt-[-100px] sm:mt-[-350px] ml-auto mr-0 max-w-[603px]">
          <img src={foot} alt="footer" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default WhenSection;
