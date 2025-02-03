import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { dogsliderData } from "../helper/Helper";
import dog1 from "./../../assests/img/png/dog-1-new.png";
import dog2 from "./../../assests/img/png/dog-img-2.png";
import dog3 from "./../../assests/img/png/dog-img-3.png";
import dog4 from "./../../assests/img/png/dog-img-4-new.png";
function DogsSection() {
  return (
    <div className="bg-[#D7D9DD] pt-10 sm:pt-20 pb-0 sm:pb-10 px-8 sm:px-0 colorful">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        slidesPerView={2.8}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          550: {
            slidesPerView: 1.5,
          },
          800: {
            slidesPerView: 2.2,
          },
          1440: {
            slidesPerView: 2.8,
          },
          2124: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide className="min-h-[296px] sm:min-w-[350px] md:min-h-[420px] w-full max-w-[350px] md:max-w-[420px]">
          <div className="max-w-[350px] md:max-w-[420px] w-full">
            <img
              className="min-h-[420px]"
              src={dog2}
              alt="dog2"
              width={"100%"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" sm:min-w-[350px] md:min-h-[420px] w-full max-w-[350px] md:max-w-[420px]">
          <div className="max-w-[350px] md:max-w-[420px] w-full">
            <img
              className="min-h-[420px]"
              src={dog3}
              alt="dog3"
              width={"100%"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full max-w-[350px] md:max-w-[420px]">
          <div className="max-w-[350px] md:max-w-[420px]">
            <img
              className="min-h-[420px]"
              src={dog4}
              alt="dog4"
              width={"100%"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" sm:min-w-[350px] md:min-h-[420px] w-full max-w-[350px] md:max-w-[420px]">
          <div className="max-w-[350px] md:max-w-[420px] w-full">
            <img
              className="min-h-[420px]"
              src={dog3}
              alt="dog3"
              width={"100%"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="min-h-[296px] sm:min-w-[350px] md:min-h-[420px] w-full max-w-[350px] md:max-w-[420px]">
          <div className="max-w-[350px] md:max-w-[420px] w-full">
            <img
              className="min-h-[420px]"
              src={dog2}
              alt="dog2"
              width={"100%"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="min-h-[296px] sm:min-w-[350px] md:min-h-[420px] w-full max-w-[350px] md:max-w-[420px]">
          <div className="max-w-[350px] md:max-w-[420px] w-full">
            <img
              className="min-h-[420px]"
              src={dog2}
              alt="dog2"
              width={"100%"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full max-w-[350px] md:max-w-[420px]">
          <div className="max-w-[350px] md:max-w-[420px] min-h-[420px] w-full">
            <img
              className="max-h-[296px] sm:max-h-[350px] md:max-h-[420px] min-h-[420px]"
              src={dog1}
              alt="dog"
              width={"100%"}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default DogsSection;
