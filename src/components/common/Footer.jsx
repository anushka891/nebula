import React from "react";

import {
  companyData,
  contactData,
  footImgData,
  serviceData,
} from "../helper/Helper";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1200"
      className="bg-[#494336]"
    >
      <div className="max-w-[1340px] mx-auto px-4 min-[350px]:px-8 md:px-10 lg:px-12 border-t-[1px] border-t-[#D8DADC] pb-[100px] sm:pb-12 pt-[60px]">
        <div className="flex-wrap lg:flex-nowrap flex justify-between gap-10 sm:gap-14">
          <div className="w-full lg:w-[25%]">
            <p className="text-base sm:text-xl md:text-2xl font-normal leading-[150%] roboto text-[#D7D9DD] text-start">
              Stay in touch:
            </p>
            <input
              className="border-[1px] border-[#D9D9D9] bg-transparent py-2 pl-4 my-4 sm:my-6 w-full max-w-[500px] justify-start flex outline-none"
              placeholder="Email"
              type="email"
            />
            <div className="flex gap-5">
              {footImgData.map((item, index) => (
                <Link
                  to={item.url}
                  key={index}
                  className="hover:translate-y-2 duration-300 hover:shadow-lg
                  hover:shadow-[#8FD9D9] rounded-full"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[60%] xl:w-[50%] flex-wrap sm:flex-nowrap flex justify-between gap-x-16 gap-6 sm:gap-y-7">
            <div className="flex-col flex text-start">
              <p className="text-base sm:text-xl md:text-2xl font-normal roboto leading-[150%] text-[#D7D9DD] mb-3 sm:mb-4 md:mb-8">
                Services
              </p>
              {serviceData.map((item, index) => (
                <Link
                  to={item.url}
                  className="text-sm sm:text-base md:text-[18px] font-normal
                  avant text-[#D7D9DD] leading-[144%] underline mb-2
                  hover:text-[#8FD9D9] duration-300"
                  key={index}
                >
                  {item.link}
                </Link>
              ))}
            </div>
            <div className="flex-col flex text-start w-full min-[370px]:w-auto">
              <p className="text-base sm:text-xl md:text-2xl font-normal roboto leading-[150%] text-[#D7D9DD] mb-3 sm:mb-4 md:mb-8">
                Company
              </p>
              {companyData.map((item, index) => (
                <Link
                  to={item.url}
                  className="text-sm sm:text-base md:text-[18px] font-normal
                  avant text-[#D7D9DD] leading-[144%] underline mb-2
                  hover:text-[#8FD9D9] duration-300"
                  key={index}
                >
                  {item.link}
                </Link>
              ))}
            </div>
            <div className="flex-col flex text-start">
              <p className="text-base sm:text-xl md:text-2xl font-normal roboto leading-[150%] text-[#D7D9DD] mb-3 sm:mb-4 md:mb-8">
                Contact Us
              </p>
              {contactData.map((item, index) => (
                <Link
                  to={item.url}
                  className="text-sm sm:text-base md:text-[18px]
                  font-normal avant text-[#D7D9DD] leading-[144%] underline mb-2
                  hover:text-[#8FD9D9] duration-300"
                  key={index}
                >
                  {item.link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
