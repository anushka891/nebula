import React, { useState } from "react";
import { accordData, accordSecondData } from "../helper/Helper";
import minus from "./../../assests/img/png/minus-icon-1.png";
import plus from "./../../assests/img/png/plus-icon.png";

const AccordionSecondItem = ({ question, answer, isActive, onClick }) => {
  return (
    <div className="max-w-[1180px] px-8 md:px-10 lg:px-12 mx-auto w-full">
      <div className="accordion-item border-b-2 border-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)]">
        <button
          onClick={onClick}
          className="w-full text-start flex justify-between items-center"
        >
          <h2 className="text-base sm:text-xl md:text-[24px] roboto font-normal leading-[150%] text-[#494336] py-8 mr-20">
            {question}
          </h2>
          <span>
            {isActive ? (
              <img
                className="max-w-[24px] sm:max-w-[30px]"
                src={minus}
                alt="minus"
              />
            ) : (
              <img
                className="max-w-[24px] sm:max-w-[30px]"
                src={plus}
                alt="minus"
              />
            )}
          </span>
        </button>
        {isActive && (
          <div className="text-start mb-8 text-sm md:text-xl avant font-normal leading-[26px] text-[#494336]">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pb-14 md:pb-20 pt-6 md:pt-12">
      <div className="accordion w-full">
        {accordSecondData.map((item, index) => (
          <AccordionSecondItem
            key={index}
            question={item.question}
            answer={item.answer}
            isActive={activeIndex === index}
            onClick={() => handleAccordionToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
