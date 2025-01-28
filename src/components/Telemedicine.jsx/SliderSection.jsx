import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import SliderMedicine from "../common/SliderMedicine";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { medicineData } from "../helper/Helper";
import Button from "../common/Button";
import WeLook from "./../Emergency/WeLook";
function SliderSection() {
  return (
    <>
      <div className="pb-14 md:pb-20">
        <div className="py-14 md:py-20 flex gap-5 max-w-[1400px] mx-auto pl-8 pr-0 md:px-8 md:px-10 lg:px-12">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            loop={true}
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              360: {
                slidesPerView: 1.6,
              },
              640: {
                slidesPerView: 2.6,
              },
              850: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper"
          >
            {medicineData.map((item, index) => (
              <SwiperSlide className="!h-auto">
                <div
                  key={index}
                  className="bg-[#494336] max-w-[310px] text-start pt-2 px-[22px] sm:px-6 md:px-8 pb-10 w-full h-full"
                >
                  <h2 className="text-linear text-[138px] font-normal avant mb-0 md:mb-3 leading-[normal]">
                    {item.title}
                  </h2>
                  <h1 className="text-2xl md:text-[32px] avant text-[#D7D9DD] font-normal leading-[normal]">
                    {item.heading}
                  </h1>
                  <p className="text-sm sm:text-lg md:text-xl font-normal avant text-[#D7D9DD] mt-6 md:mt-8 leading-[26px]">
                    {item.disc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Button btnTitle={"CHAT WITH A VET"} />
      </div>
      <WeLook />
    </>
  );
}

export default SliderSection;
