import React, { useState } from "react";
import logo from "./../../assests/img/png/logo.png";
import { navData } from "../helper/Helper";
import menu from "./../../assests/img/png/menuico.png";
function Navbar({ setIsSidebarOpen }) {
  return (
    <div className="bg-[#494336]">
      <div className="max-w-[1340px] mx-auto px-4 min-[350px]:px-8 md:px-10 lg:px-12 pt-2 sm:pt-3 pb-2 sm:pb-4">
        <div className="flex items-center justify-between">
          {/* Left section */}

          <a href="/">
            <img className="w-[90px] sm:w-{114px}" src={logo} alt="logo" />
          </a>
          <div className="flex items-center mr-0 ml-auto gap-16">
            <div className="hidden xl:flex gap-11 items-center">
              {navData.map((item, index) => (
                <a
                  key={index}
                  className="text-sm tracking-[1.4px] roboto uppercase text-[#D7D9DD] font-medium leading-normal hover:text-white duration-300"
                  href="#"
                >
                  {item.link}
                </a>
              ))}
            </div>

            <div className="gap-10 hidden xl:flex items-center">
              <a
                className="text-[18px] font-medium leading-[137%] uppercase text-{#494336} roboto hover:text-white duration-300 py-3 px-10 bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] rounded-[27px]"
                href="#"
              >
                BOOK NOW
              </a>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div>
            <button className="flex xl:hidden" onClick={setIsSidebarOpen}>
              <img
                className="max-w-[30px] md:max-w-[40px] fill-[#D8DADC]"
                src={menu}
                alt="menu"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
