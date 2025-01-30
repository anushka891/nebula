import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { dogsliderData } from "../helper/Helper";

function DogsSection() {
  return (
    <div className="bg-[#D7D9DD] pt-10 sm:pt-20 pb-0 sm:pb-10 px-8 sm:px-0 colorful">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        slidesPerView={3.8}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          450: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.6,
          },
          1024: {
            slidesPerView: 3.8,
          },
        }}
        className="mySwiper"
      >
        {dogsliderData.map((item, index) => (
          <div key={index}>
            <SwiperSlide className="w-full">
              <div className="max-w-[420px] h-[300px] sm:h-[420px] overflow-hidden">
                <img
                  src={item.img}
                  alt="dog"
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default DogsSection;
