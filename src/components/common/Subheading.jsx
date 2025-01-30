import React from "react";

function Subheading({ subtitle, className }) {
  return (
    <>
      <h2
        className={`text-2xl sm:text-3xl md:text-[36px] avant font-normal text-[#494336] leading-normal ${className}`}
      >
        {subtitle}
      </h2>
    </>
  );
}

export default Subheading;
