import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Subheading from "./Subheading";
import TextLG from "./TextLG";

import { Link } from "react-router-dom";
import { preventiveSlider } from "../helper/Helper";
export default function App() {
  return (
    <div
      id="preventive"
      className="pl-8 pr-0 sm:px-10 xl:px-[70px] black-pagination max-w-[1440px] mx-auto"
    >
      <Swiper
        pagination={true}
        modules={[Pagination]}
        slidesPerView={4}
        spaceBetween={20}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          340: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2,
          },
          850: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper mb-[60px] xl:mb-[140px]"
      >
        {preventiveSlider.map((item, index) => (
          <SwiperSlide className="!h-auto" key={index}>
            <div
              className="bg-[#494336] p-6 pr-5 text-start pb-[75px] w-full h-full"
              id="add"
            >
              <img
                className="mb-3 sm:mb-10 md:mb-12"
                src={item.img}
                alt={"Preventive Care Image"}
              />
              <Subheading
                subtitle={item.heading}
                className={"!text-[#D7D9DD] mb-4"}
              />

              {item.linksData.map((subitem, idx) => (
                <div key={idx}>
                  <Link to={subitem.href}>
                    <TextLG
                      title={subitem.link}
                      textclass={
                        "!text-[#D7D9DD] !underline hover:!text-transparent hover:!bg-clip-text hover:!bg-gradient-to-r from-[#FFA280] to-[#8FD9D9] duration-300"
                      }
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
