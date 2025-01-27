import React from "react";
import { navData } from "../helper/Helper";
import logo from "./../../assests/img/png/logo.png";
export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 xl:hidden transition-all duration-300 ease-in-out z-[111] ${
        isSidebarOpen ? " " : "hidden"
      }`}
    >
      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-2/3 h-full p-3 sm:p-6 transition-transform bg-[#494336] duration-300 ease-in-out max-w-[330px] sm:max-w-[400px] ${
          isSidebarOpen ? "left-0" : "left-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <img className="w-[100px] sm:w-{114px}" src={logo} alt="logo" />
          <button
            onClick={setIsSidebarOpen}
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
                href="#"
              >
                {item.link}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <a
            className="text-[18px] font-medium leading-[137%] uppercase text-{#494336} roboto hover:text-white duration-300 py-3 px-10 bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] rounded-[27px]"
            href="#"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </div>
  );
}
