import React, { useState, useEffect } from "react";
import logo from "./../../assests/img/png/logo.png";
import { navData } from "../helper/Helper";
import menu from "./../../assests/img/png/menuico.png";
import Button from "./Button";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-[#494336]">
      <div className="max-w-[1340px] mx-auto px-4 min-[350px]:px-8 md:px-10 lg:px-12 pt-2 sm:pt-3 pb-2 sm:pb-4">
        <div className="flex items-center justify-between">
          {/* Left section */}
          <a href="/">
            <img className="w-[90px] sm:w-[114px]" src={logo} alt="logo" />
          </a>
          <div className="flex items-center mr-0 ml-auto gap-16">
            <div className="hidden xl:flex gap-11 items-center">
              {navData.map((item, index) => (
                <Link
                  to={item.url}
                  key={index}
                  className="text-sm tracking-[1.4px] roboto uppercase text-[#D7D9DD] font-medium leading-normal hover:text-white duration-300"
                >
                  {item.link}
                </Link>
              ))}
            </div>
            <div className="gap-10 hidden xl:flex items-center">
              <Button btnTitle={"BOOK NOW"} />
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div>
            <button className="flex xl:hidden" onClick={toggleSidebar}>
              <img
                className="max-w-[30px] md:max-w-[40px] fill-[#D8DADC]"
                src={menu}
                alt="menu"
              />
            </button>
          </div>
        </div>
      </div>
      {isSidebarOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-10"
            onClick={toggleSidebar}
          ></div>
          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 w-3/4 sm:w-2/3 h-full p-3 sm:p-6 transition-transform bg-[#494336] duration-300 ease-in-out max-w-[330px] sm:max-w-[400px] z-20`}
          >
            <Sidebar close={toggleSidebar} />
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
