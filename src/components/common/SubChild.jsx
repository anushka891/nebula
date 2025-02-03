import React from "react";

function SubChild({ title, childClass }) {
  return (
    <p
      className={`text-sm sm:text-base xl:text-xl avant-regular leading-[157%] sm:leading-[130%] font-normal text-[#494336] ${childClass}`}
    >
      {title}
    </p>
  );
}

export default SubChild;
