import React from "react";

import { footerlinksData, footImgData } from "../helper/Helper";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1200"
      className="bg-[#494336] border-t-[1px] border-t-[#D8DADC]"
    >
      <div className="max-w-[1340px] mx-auto px-8 md:px-10 lg:px-12 pb-[100px] sm:pb-12 pt-[60px]">
        <div className="flex-wrap lg:flex-nowrap flex justify-between gap-10 sm:gap-14">
          <div className="w-full lg:w-[25%]">
            <p className="text-base sm:text-xl md:text-2xl font-normal leading-[150%] roboto text-[#D7D9DD] text-start">
              Stay in touch:
            </p>
            <input
              className="border-[1px] border-[#D9D9D9] bg-transparent py-2 pl-4 my-4 sm:my-6 w-full max-w-[500px] justify-start flex outline-none placeholder:text-[#D7D9DD]"
              placeholder="Email"
              type="email"
            />
            <div className="flex gap-5">
              {footImgData.map((item, index) => (
                <Link
                  target="blank"
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
          <div className="w-full lg:w-[60%] xl:w-[50%]">
            <div className="flex justify-between w-full gap-x-16 gap-6 sm:gap-y-7 flex-wrap sm:flex-nowrap flex justify-between">
              {footerlinksData.map((item) =>
                Object.keys(item).map((key, keyIndex) => (
                  <div
                    key={keyIndex}
                    className="text-start w-full min-[380px]:w-auto"
                  >
                    <h1 className="text-base sm:text-xl md:text-2xl font-normal roboto leading-[150%] text-[#D7D9DD] mb-3 sm:mb-4 md:mb-8">
                      {key}
                    </h1>
                    <ul>
                      {item[key].map((link, linkIndex) => (
                        <li className="mb-2" key={linkIndex}>
                          <Link
                            to={link.url}
                            className="text-sm sm:text-base md:text-[18px] font-normal avant text-[#D7D9DD] leading-[144%] underline hover:text-[#8FD9D9] duration-300"
                          >
                            {link.link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
