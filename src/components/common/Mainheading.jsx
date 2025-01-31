import React from "react";

function Mainheading({ maintitle, className }) {
  return (
    <div>
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl avant-regular font-normal text-[#494336] leading-normal ${className}`}
      >
        {maintitle}
      </h2>
    </div>
  );
}

export default Mainheading;
