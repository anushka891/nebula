import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import dog1 from "./../../assests/img/png/join-slider-img-1.png";
import dog2 from "./../../assests/img/png/join-slider-img-2.png";
import dog3 from "./../../assests/img/png/join-slider-img-3.png";
import dog4 from "./../../assests/img/png/join-slider-img-4-new.png";
import SubChild from "../common/SubChild";
import Button from "../common/Button";
import hero from "./../../assests/img/png/join-main.png";
function HeroJoin() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[#494336]">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="flex-col-reverse xl:flex-row flex items-end pr-8 sm:pr-10 lg:pr-12 xl:pr-0 justify-center xl:justify-end pl-8 sm:pl-10 lg:pl-12 gap-0 md:gap-9 xl:gap-[124px] ml-auto mr-0"
        >
          <div className="text-start  max-w-full xl:max-w-[679px]">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D7D9DD] font-normal sm:leading-normal mb-10 avant">
              Join Our Nebula Vets Team:
            </h2>
            <p className="text-[28px] roboto text-[#D7D9DD] leading-[normal] font-normal mb-8">
              Empowering Careers in Veterinary Care
            </p>
            <SubChild
              title={
                "At Nebula Vets, we are passionate about providing exceptional veterinary care and creating a positive impact in the lives of pets and their families. We believe in the power of collaboration, compassion, and continuous growth. If you are seeking a rewarding career in veterinary medicine, Nebula Vets offers exciting opportunities to join our dedicated team."
              }
              childClass={"text-[#D7D9DD] mb-10"}
            />
            <Button btnTitle={"APPLY TODAY"} className={"mb-20 !px-8"} />
          </div>
          <div className="max-w-[240px] sm:max-w-[400px] lg:max-w-[580px] mx-auto xl:mr-0 xl:ml-0 pt-8 sm:pt-10 md:pt-14 lg:pt-[147px] pb-0 sm:pb-6 md:pb-10 xl:pb-[118px]">
            <img src={hero} alt="hero" width={"100%"} />
          </div>
        </div>
        <div className="pb-[60px] sm:pb-20 md:pb-28 lg:pb-[120px]">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            slidesPerView={2.5}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 2.5,
              },
            }}
            className="mySwiper linear-pagination colorful"
          >
            <SwiperSlide className="min-h-[384px] w-full max-w-[428px]">
              <div className="max-w-[428px] w-full">
                <img
                  className="min-h-[384px]"
                  src={dog2}
                  alt="dog2"
                  width={"100%"}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="min-h-[384px] w-full max-w-[428px]">
              <div className="max-w-[428px] w-full">
                <img
                  className="min-h-[384px]"
                  src={dog3}
                  alt="dog3"
                  width={"100%"}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full max-w-[428px]">
              <div className="max-w-[428px]">
                <img
                  className="min-h-[384px]"
                  src={dog4}
                  alt="dog4"
                  width={"100%"}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full max-w-[428px]">
              <div className="max-w-[428px] min-h-[384px] w-full">
                <img
                  className="min-h-[384px]"
                  src={dog1}
                  alt="dog1"
                  width={"100%"}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HeroJoin;
