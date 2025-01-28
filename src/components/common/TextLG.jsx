import React from "react";

function TextLG({ textclass, title }) {
  return (
    <div>
      <p
        className={`text-sm sm:text-base md:text-lg avant leading-[130%] font-normal text-[#494336] ${textclass}`}
      >
        {title}
      </p>
    </div>
  );
}

export default TextLG;
