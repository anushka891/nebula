import React, { useState } from "react";
import minus from "./../../assests/img/png/minus-icon.png";
import plus from "./../../assests/img/png/plus-icon.png";
import { accordata, accordianData } from "../helper/Helper";
import Mainheading from "./Mainheading";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#494336]">
      <div className="max-w-[1340px] mx-auto px-4 min-[350px]:px-8 md:px-10 lg:px-12 justify-center flex flex-col py-12 sm:py-18 md:py-20">
        <Mainheading
          maintitle={"Why choose Nebula Vets?"}
          className={
            "text-[#D7D9DD] mb-6 md:mb-10 lg:mb-14 flex justify-center md:justify-start text-center ml-auto md:ml-[90px] text-start"
          }
        />
        <div className="flex-wrap md:flex-nowrap flex gap-0 md:gap-16 justify-center">
          <div className="w-full max-w-lg">
            {accordianData.map((item, index) => (
              <div
                key={index}
                className="border-b border-b-[(90deg,#FFA280_0%,#8FD9D9_100%)] border-b-[1px]"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left focus:outline-none flex items-center justify-between"
                >
                  <h2 className="text-[#D7D9DD] text-base sm:text-xl lg:text-2xl font-normal leading-[150%] roboto p-4 lg:p-8">
                    {item.question}
                  </h2>
                  <span className="text-xl">
                    {activeIndex === index ? (
                      <img
                        className="max-w-[24px] sm:max-w-[30px]"
                        src={minus}
                        alt="minus"
                      />
                    ) : (
                      <img
                        className="max-w-[24px] sm:max-w-[30px]"
                        src={plus}
                        alt="plus"
                      />
                    )}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="p-4 bg-gray-50">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-full max-w-lg">
            {accordata.map((item, index) => (
              <div
                key={index}
                className="border-b border-b-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] border-b-[1px]"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left focus:outline-none flex items-center justify-between"
                >
                  <h2 className="text-[#D7D9DD] text-base sm:text-xl lg:text-2xl font-normal leading-[150%] roboto p-4 lg:p-8">
                    {item.question}
                  </h2>
                  <span className="text-xl">
                    {activeIndex === index ? (
                      <img
                        className="max-w-[24px] sm:max-w-[30px]"
                        src={minus}
                        alt="minus"
                      />
                    ) : (
                      <img
                        className="max-w-[24px] sm:max-w-[30px]"
                        src={plus}
                        alt="plus"
                      />
                    )}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="p-4 bg-gray-50">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
