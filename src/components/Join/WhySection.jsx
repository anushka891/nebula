import React, { useState } from "react";
import { accordJoinData } from "../helper/Helper";
import minus from "./../../assests/img/png/minus-icon-1.png";
import plus from "./../../assests/img/png/plus-icon.png";
import why from "./../../assests/img/png/why-join-wave.png";
const AccordionItem = ({ question, answer, isActive, onClick }) => {
  return (
    <div className="overflow-x-hidden">
      <div className="max-w-[1180px] px-8 md:px-10 lg:px-12 mx-auto w-full">
        <div className="accordion-item linear-border">
          <button
            onClick={onClick}
            className="w-full text-start flex justify-between items-center"
          >
            <h2
              data-aos="fade-right"
              data-aos-duration="2500"
              className="text-base sm:text-xl md:text-[24px] roboto font-normal leading-[150%] text-[#494336] pt-8 pb-6 mr-20"
            >
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
    </div>
  );
};
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="relative">
      <div className="absolute hidden md:flex bottom-[-80px]">
        <img src={why} alt="" />
      </div>
      <div className="mb-14 md:mb-20">
        <div className="accordion w-full">
          {accordJoinData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isActive={activeIndex === index}
              onClick={() => handleAccordionToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
