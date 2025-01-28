import React, { useState } from "react";
import minus from "./../../assests/img/png/minus-icon-1.png";
import plus from "./../../assests/img/png/plus-icon.png";
import { accordata, accordianData } from "../helper/Helper";
import Mainheading from "./Mainheading";

const AccordionItem = ({ item, index, activeIndex, toggleAccordion }) => (
  <div key={index} className="border-b border-b-[1px]">
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
          <img className="max-w-[24px] sm:max-w-[30px]" src={plus} alt="plus" />
        )}
      </span>
    </button>
    {activeIndex === index && (
      <div className="p-4 text-[#D7D9DD]">
        <p>{item.answer}</p>
      </div>
    )}
  </div>
);

const Accordion = () => {
  const [activeIndexLeft, setActiveIndexLeft] = useState(null);
  const [activeIndexRight, setActiveIndexRight] = useState(null);
  const toggleAccordionLeft = (index) => {
    setActiveIndexLeft(activeIndexLeft === index ? null : index);
  };
  const toggleAccordionRight = (index) => {
    setActiveIndexRight(activeIndexRight === index ? null : index);
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
              <AccordionItem
                key={index}
                item={item}
                index={index}
                activeIndex={activeIndexLeft}
                toggleAccordion={toggleAccordionLeft}
              />
            ))}
          </div>

          <div className="w-full max-w-lg">
            {accordata.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                index={index}
                activeIndex={activeIndexRight}
                toggleAccordion={toggleAccordionRight}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
