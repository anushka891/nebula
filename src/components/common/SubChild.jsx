import React from "react";

function SubChild({ title, childClass }) {
  return (
    <div>
      <p
        className={`text-sm sm:text-base md:text-xl avant leading-[130%] font-normal text-[#494336] ${childClass}`}
      >
        {title}
      </p>
    </div>
  );
}

export default SubChild;
