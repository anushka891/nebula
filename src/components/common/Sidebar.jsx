import React from "react";
import { navData } from "../helper/Helper";
import logo from "./../../assests/img/png/logo.png";

export default function Sidebar({ close }) {
  return (
    <>
      {/* Sidebar Menu */}
      <div>
        <div className="flex justify-between items-center">
          <img className="w-[100px] sm:w-[114px]" src={logo} alt="logo" />
          <button
            onClick={close}
            className="text-black text-4xl sm:text-5xl text-center items-center mb-2.5 p-0 justify-center flex"
          >
            &times;
          </button>
        </div>
        <ul className="mt-6 text-center">
          {navData.map((item, index) => (
            <li key={index} className="text-lg py-2">
              <a
                className="text-[#D7D9DD] hover:text-white duration-300 popins"
                href={item.url}
              >
                {item.link}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <a
            className="text-[18px] font-medium leading-[137%] uppercase text-[#494336] roboto hover:text-white duration-300 py-3 px-10 bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] rounded-[27px]"
            href="#"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </>
  );
}
