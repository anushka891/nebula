import React from "react";
import SubChild from "./SubChild";
import Mainheading from "./Mainheading";
import Button from "./Button";
import footdog from "./../../assests/img/png/footer-cat-dog.png";
import {
  companyData,
  contactData,
  footImgData,
  serviceData,
} from "../helper/Helper";
function Footer() {
  return (
    <div className="bg-[#494336]">
      <div className="flex-wrap xl:flex-nowrap flex gap-7 xl:gap-10 min-w-[1400px]:gap-[70px] mr-8 min-w-[1400px]:mr-0 justify-center xl:justify-between">
        <div className="text-start pt-14 sm:py-16 md:py-20 ml-8 sm:ml-20 lg:ml-[100px] xl:ml-[180px]">
          <div className="max-w-full xl:max-w-[568px]">
            <Mainheading
              maintitle={"Our Mission"}
              className={"mb-3 sm:mb-6 md:mb-8 text-[#D7D9DD]"}
            />
            <SubChild
              title={
                "Our Mission is to establish a new standard of excellence in veterinary care, driven by an unwavering ethical conscience."
              }
              childClass={"mb-10 text-[#D7D9DD]"}
            />
            <Button btnTitle={"LEARN MORE"} />
          </div>
        </div>
        <div className="max-w-[584px]">
          <img src={footdog} alt="footdog" width={"100%"} />
        </div>
      </div>
      <div className="max-w-[1340px] mx-auto px-4 min-[350px]:px-8 md:px-10 lg:px-12 border-t-[1px] border-t-[#D8DADC] pb-[100px] pt-[60px] sm:py-[60px]">
        <div className="flex-wrap lg:flex-nowrap flex justify-between gap-10 sm:gap-14">
          <div className="w-full lg:w-[25%]">
            <p className="text-2xl font-normal leading-[150%] roboto text-[#D7D9DD] text-start">
              Stay in touch:
            </p>
            <input
              className="border-[1px] border-[#D9D9D9] bg-transparent py-2 pl-4 my-6 w-full max-w-[500px] justify-start flex outline-none"
              placeholder="Email"
              type="email"
            />
            <div className="flex gap-5">
              {footImgData.map((item, index) => (
                <a
                  key={index}
                  className="hover:translate-y-2 duration-300"
                  href="#"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[60%] xl:w-[50%] flex-wrap sm:flex-nowrap flex justify-between gap-x-16 gap-y-7">
            <div className="flex-col flex text-start">
              <p className="text-2xl font-normal roboto leading-[150%] text-[#D7D9DD] mb-8">
                Services
              </p>
              {serviceData.map((item, index) => (
                <a
                  className="text-[18px] font-normal avant text-[#D7D9DD] leading-[144%] underline mb-2 hover:text-[#8FD9D9] duration-300"
                  key={index}
                  href="#"
                >
                  {item.link}
                </a>
              ))}
            </div>
            <div className="flex-col flex text-start">
              <p className="text-2xl font-normal roboto leading-[150%] text-[#D7D9DD] mb-8">
                Company
              </p>
              {companyData.map((item, index) => (
                <a
                  className="text-[18px] font-normal avant text-[#D7D9DD] leading-[144%] underline mb-2 hover:text-[#8FD9D9] duration-300"
                  key={index}
                  href="#"
                >
                  {item.link}
                </a>
              ))}
            </div>
            <div className="flex-col flex text-start">
              <p className="text-2xl font-normal roboto leading-[150%] text-[#D7D9DD] mb-8">
                Contact Us
              </p>
              {contactData.map((item, index) => (
                <a
                  className="text-[18px] font-normal avant text-[#D7D9DD] leading-[144%] underline mb-2 hover:text-[#8FD9D9] duration-300"
                  key={index}
                  href="#"
                >
                  {item.link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
