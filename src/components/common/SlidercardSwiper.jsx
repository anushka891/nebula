import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { sliderData } from "../helper/Helper";

export default function App() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {sliderData.map((item, index) => (
          <SwiperSlide>
            <div
              key={index}
              className="bg-[#494336] p-6 text-start pb-[75px] w-full"
            >
              <img className="mb-12" src={item.img} alt="img" />
              <h2 className="text-4xl text-[#D7D9DD] avant font-normal leading-normal mb-4">
                {item.title}
              </h2>
              <p className="text-[18px] font-normal avant text-[#D7D9DD] underline mb-[6px]">
                {item.link}
              </p>
              <p className="text-[18px] font-normal avant text-[#D7D9DD] underline mb-[6px]">
                {item.link2}
              </p>
              <p className="text-[18px] font-normal avant text-[#D7D9DD] underline mb-[6px]">
                {item.link3}
              </p>
              <p className="text-[18px] font-normal avant text-[#D7D9DD] underline mb-[6px]">
                {item.link4}
              </p>
              <p className="text-[18px] font-normal avant text-[#D7D9DD] underline mb-[6px]">
                {item.link5}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
