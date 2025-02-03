import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import prev from "./../../assests/img/png/slider-img-1.png";
import Subheading from "./Subheading";
import TextLG from "./TextLG";
import sick from "./../../assests/img/png/slider-img-2.png";
import sur from "./../../assests/img/png/slider-img-3.png";
import add from "./../../assests/img/png/slider-img-4.png";
import { Link } from "react-router-dom";
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
        <SwiperSlide className="!h-auto">
          <div className="bg-[#494336] p-6 text-start pb-[75px] w-full h-full">
            <img className="mb-3 sm:mb-10 md:mb-12" src={prev} alt="img" />
            <Subheading
              subtitle={"Preventive Care"}
              className={"text-[#D7D9DD] mb-4"}
            />
            <Link to={"health-check"}>
              <TextLG
                title={"Animal Health Check"}
                textclass={
                  "text-[#D7D9DD] mb-[6px] underline hover:text-white duration-300"
                }
              />
            </Link>
            <Link to={"vaccination"}>
              <TextLG
                title={"Vaccinations"}
                textclass={
                  "text-[#D7D9DD] mb-[6px] underline hover:text-white duration-300"
                }
              />
            </Link>
            <Link to={"dental"}>
              <TextLG title={"Dental"} textclass={"text-[#D7D9DD] underline"} />
            </Link>
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
            <Link to={"emergency"}>
              <TextLG
                title={"Urgent & "}
                textclass={
                  "text-[#D7D9DD] underline hover:text-white duration-300"
                }
              />
              <TextLG
                title={"Emergency Care"}
                textclass={
                  "text-[#D7D9DD] mb-[6px] underline hover:text-white duration-300"
                }
              />
            </Link>
            <Link to={"medicine"}>
              <TextLG
                title={"Telemedicine"}
                textclass={
                  "text-[#D7D9DD] underline hover:text-white duration-300"
                }
              />
            </Link>
            <Link to={"digno"}>
              <TextLG
                title={"Diagnostics"}
                textclass={
                  "text-[#D7D9DD] underline hover:text-white duration-300"
                }
              />
            </Link>
            <Link to={"pharmecy"}>
              <TextLG
                title={"Pharmacy"}
                textclass={
                  "text-[#D7D9DD] underline hover:text-white duration-300"
                }
              />
            </Link>
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
            <Link to={"surgery"}>
              <TextLG
                title={"Surgeries"}
                textclass={
                  "text-[#D7D9DD] mb-[6px] underline hover:text-white duration-300"
                }
              />
            </Link>
            <Link to={"spray"}>
              <TextLG
                title={"Spray & Neuter"}
                textclass={
                  "text-[#D7D9DD] mb-[6px] underline hover:text-white duration-300"
                }
              />
            </Link>
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
            <Link to={"travel"}>
              <TextLG
                title={"Travel Certificates"}
                textclass={
                  "text-[#D7D9DD] mb-[6px] underline hover:text-white duration-300"
                }
              />
            </Link>
            <Link to={"skin"}>
              <TextLG
                title={"Skin & Dermatology"}
                textclass={
                  "text-[#D7D9DD] mb-[6px] underline hover:text-white duration-300"
                }
              />
            </Link>
            <Link to={"hospice"}>
              <TextLG
                title={"Euthanasia"}
                textclass={
                  "text-[#D7D9DD] underline hover:text-white duration-300"
                }
              />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
