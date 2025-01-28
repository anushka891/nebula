import React from "react";

function Button({ btnTitle, className }) {
  return (
    <div>
      <button
        className={`className="text-[18px] font-medium leading-[137%] uppercase text-[#494336] roboto hover:text-white duration-300 py-2 sm:py-3 px-5 sm:px-10 bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] rounded-[27px] ${className}`}
      >
        {btnTitle}
      </button>
    </div>
  );
}

export default Button;
