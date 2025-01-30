import React from "react";

function SubChildSecond({ className, title }) {
  return (
    <>
      <h2
        className={`text-2xl roboto font-normal text-[#494336] leading-[150%] ${className}`}
      >
        {title}
      </h2>
    </>
  );
}

export default SubChildSecond;
