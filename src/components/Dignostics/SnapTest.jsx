import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Mainheading from "../common/Mainheading";
import slideone from "./../../assests/img/png/digno-slider-img-1.png";
import slidetwo from "./../../assests/img/png/dig-slider-img-2.png";
import WeLook from "../Emergency/WeLook";
function SnapTest() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50)]">
        <div className="max-w-[1180px] px-8 md:px-10 lg:px-12 mx-auto py-14 md:py-20 text-start">
          <Mainheading maintitle={"Available SNAP Tests"} className={"pb-10"} />
          <Swiper
            pagination={true}
            modules={[Pagination]}
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1.5,
              },
              850: {
                slidesPerView: 2,
              },
            }}
            className="mySwiper brown"
          >
            <SwiperSlide className="!h-auto">
              <div className="max-w-[530px] w-full relative bg-[#494336] h-full">
                <div className="absolute bottom-0 right-0 max-w-[368px]">
                  <img src={slideone} alt="slider" width={"100%"} />
                </div>
                <ul className="ml-5 p-6 md:p-11">
                  <li className="text-[24px] roboto font-normal leading-[150%] text-[#D7D9DD] list-disc mb-1">
                    SNAP Lepto Test
                  </li>
                  <li className="text-sm sm:text-base md:text-xl avant list-disc text-[#D7D9DD] leading-[26px] font-normal ml-5 pb-8">
                    Add description
                  </li>
                  <li className="text-[24px] roboto font-normal leading-[150%] text-[#D7D9DD] list-disc mb-1">
                    SNAP cPL Test
                  </li>
                  <li className="text-sm sm:text-base md:text-xl avant list-disc text-[#D7D9DD] leading-[26px] font-normal ml-5 pb-8">
                    Assess canine pancreatic health
                  </li>
                  <li className="text-[24px] roboto font-normal leading-[150%] text-[#D7D9DD] list-disc mb-1">
                    SNAP Giardia Test
                  </li>
                  <li className="text-sm sm:text-base md:text-xl avant list-disc text-[#D7D9DD] leading-[26px] font-normal ml-5 pb-8">
                    Add description
                  </li>
                  <li className="text-[24px] roboto font-normal leading-[150%] text-[#D7D9DD] list-disc mb-1">
                    SNAP Parvo Test
                  </li>
                  <li className="text-sm sm:text-base md:text-xl avant list-disc text-[#D7D9DD] leading-[26px] font-normal ml-5 pb-4">
                    Add description
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!h-auto">
              <div className="max-w-[530px] w-full relative bg-[#494336] h-full">
                <div className="absolute bottom-0 right-0 max-w-[368px]">
                  <img src={slidetwo} alt="slider" width={"100%"} />
                </div>
                <ul className="ml-5 p-6 md:p-11">
                  <li className="text-[24px] roboto font-normal leading-[150%] text-[#D7D9DD] list-disc mb-1">
                    SNAP FIV/FeLV Combo Test
                  </li>
                  <li className="text-sm sm:text-base md:text-xl avant list-disc text-[#D7D9DD] leading-[26px] font-normal ml-5 pb-8">
                    Add description
                  </li>
                  <li className="text-[24px] roboto font-normal leading-[150%] text-[#D7D9DD] list-disc mb-1">
                    SNAP fPL Test
                  </li>
                  <li className="text-sm sm:text-base md:text-xl avant list-disc text-[#D7D9DD] leading-[26px] font-normal ml-5 pb-8">
                    Assess feline pancreatic health
                  </li>
                  <li className="text-[24px] roboto font-normal leading-[150%] text-[#D7D9DD] list-disc mb-1">
                    SNAP Giardia Test
                  </li>
                  <li className="text-sm sm:text-base md:text-xl avant list-disc text-[#D7D9DD] leading-[26px] font-normal ml-5 pb-8">
                    Add description
                  </li>
                  <li className="text-[24px] roboto font-normal leading-[150%] text-[#D7D9DD] list-disc mb-1">
                    SNAP Feline proBNP Test
                  </li>
                  <li className="text-sm sm:text-base md:text-xl avant list-disc text-[#D7D9DD] leading-[26px] font-normal ml-5 pb-4">
                    Quickly assess cats with cardiac risk factors
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <WeLook />
    </>
  );
}

export default SnapTest;
