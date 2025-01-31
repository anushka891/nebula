import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import prev from "./../../assests/img/png/slider-img-1.png";
import Subheading from "./Subheading";
import TextLG from "./TextLG";
import sick from "./../../assests/img/png/slider-img-2.png";
import sur from "./../../assests/img/png/slider-img-3.png";
import add from "./../../assests/img/png/slider-img-4.png";
export default function App() {
  return (
    <div
      id="preventive"
      className="pl-8 pr-0 sm:px-10 xl:px-[70px] black-pagination"
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
        <SwiperSlide className="!h-auto">
          <div className="bg-[#494336] p-6 text-start pb-[75px] w-full h-full">
            <img className="mb-3 sm:mb-10 md:mb-12" src={prev} alt="img" />
            <Subheading
              subtitle={"Preventive Care"}
              className={"text-[#D7D9DD] mb-4"}
            />
            <TextLG
              title={"Animal Health Check"}
              textclass={"text-[#D7D9DD] mb-[6px] underline"}
            />
            <TextLG
              title={"Vaccinations"}
              textclass={"text-[#D7D9DD] mb-[6px] underline"}
            />
            <TextLG title={"Dental"} textclass={"text-[#D7D9DD] underline"} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div
            id="sick"
            className="bg-[#494336] p-6 pr-3 text-start pb-[75px] w-full h-full"
          >
            <img className="mb-3 sm:mb-10 md:mb-12" src={sick} alt="img" />
            <Subheading
              subtitle={"Sick Patient Care"}
              className={"text-[#D7D9DD] mb-4"}
            />
            <TextLG
              title={"Urgent & "}
              textclass={"text-[#D7D9DD] underline"}
            />
            <TextLG
              title={"Emergency Care"}
              textclass={"text-[#D7D9DD] mb-[6px] underline"}
            />
            <TextLG
              title={"Telemedicine"}
              textclass={"text-[#D7D9DD] underline"}
            />
            <TextLG
              title={"Diagnostics"}
              textclass={"text-[#D7D9DD] underline"}
            />
            <TextLG title={"Pharmacy"} textclass={"text-[#D7D9DD] underline"} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div
            id="sur"
            className="bg-[#494336] p-6 text-start pb-[75px] w-full h-full"
          >
            <img className="mb-3 sm:mb-10 md:mb-12" src={sur} alt="img" />
            <Subheading
              subtitle={"Surgery"}
              className={"text-[#D7D9DD] mb-4"}
            />
            <TextLG
              title={"Surgeries"}
              textclass={"text-[#D7D9DD] mb-[6px] underline"}
            />
            <TextLG
              title={"Spay & Neuter"}
              textclass={"text-[#D7D9DD] mb-[6px] underline"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div
            id="add"
            className="bg-[#494336] p-6 text-start pb-[75px] w-full h-full"
          >
            <img className="mb-3 sm:mb-10 md:mb-12" src={add} alt="img" />
            <Subheading
              subtitle={"Additional Services"}
              className={"text-[#D7D9DD] mb-4"}
            />
            <TextLG
              title={"Travel Certificates"}
              textclass={"text-[#D7D9DD] mb-[6px] underline"}
            />
            <TextLG
              title={"Skin & Dermatology"}
              textclass={"text-[#D7D9DD] mb-[6px] underline"}
            />
            <TextLG
              title={"Euthanasia"}
              textclass={"text-[#D7D9DD] underline"}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
