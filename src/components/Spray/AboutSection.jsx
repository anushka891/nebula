import React from "react";
import Subheading from "../common/Subheading";
import wave from "./../../assests/img/png/surgery-wave.png";
import SubChild from "../common/SubChild";

function AboutSection() {
  return (
    <div className="bg-[rgba(215,217,221,0.50);] pt-14 md:pt-20">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="max-w-[1170px] mx-auto px-8 md:px-10 lg:px-12 text-[#494336] text-start"
      >
        <Subheading
          subtitle={"Why spay or neuter?"}
          className={"pb-5 md:pb-9"}
        />
        <SubChild
          title={
            "Spaying and neutering has many health and behavioral benefits for your cat or dog. Spaying at a young age has been shown to reduce the occurrence of mammary cancers and uterine infections (also known as pyometra). It also removes heat cycles and coming into season"
          }
          childClass={"mb-6"}
        />
        <SubChild
          title={
            "Neutering has been proven to prevent testicular cancer and may prevent different forms of prostate diseases, and both spaying and neutering may also help prevent or alter unwanted behaviors, such as aggressive behavior and urine marking."
          }
        />
        <SubChild title={"When to spay or neuter."} />
        <Subheading
          subtitle={"When to spay or neuter?"}
          className={"pb-5 md:pb-9 pt-10"}
        />
        <SubChild
          title={
            "Dog spays and neuters are performed between the ages of 6 and 9 months of age. Large breed dogs, it is advised to wait until they’re a little older to take full advantage of their growth hormones and allow their bones to mature."
          }
          childClass={"mb-6"}
        />
        <SubChild
          title={
            "Cat spays and neuters should typically be carried out around 6 months of age."
          }
          childClass={"mb-6"}
        />
        <SubChild
          title={
            "In older pets who are no spayed or neutered, we’ll discuss all of your options at your first wellness visit and advise on the best time for your pet to be spay or neutered."
          }
        />
        <Subheading
          subtitle={"Long-Term Cost Savings"}
          className={"pb-5 md:pb-9 pt-10"}
        />
        <SubChild
          title={
            "Spaying or neutering your pet can save you money in the long run. The cost of the procedure is typically less than the expenses associated with caring for a litter or treating health conditions that may arise from not being spayed or neutered."
          }
        />
      </div>
      <div className="mt-[-40px] md:mt-[-100px] lg:mt-[-300px] xl:mt-[-400px] w-full">
        <img src={wave} alt="wave" width={"100%"} />
      </div>
    </div>
  );
}

export default AboutSection;
