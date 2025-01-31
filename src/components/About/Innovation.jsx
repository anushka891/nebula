import React from "react";
import SubChild from "../common/SubChild";
import SubChildSecond from "../common/SubChildSecond";
import main from "./../../assests/img/png/innovation-dog-group.png";
import main1 from "./../../assests/img/png/innovation-small-dog.png";
import inno from "./../../assests/img/png/innovation-wave.png";
function Innovation() {
  return (
    <div className="bg-[rgba(215,217,221,0.50)] relative">
      <div className="absolute bottom-0 md:bottom-[-30px] w-full -z-[2]">
        <img src={inno} alt="wave" width={"100%"} />
      </div>
      <div className="flex-col-reverse lg:flex-row flex pb-20 py-[60px] md:py-20 gap-14 lg:gap-11 px-8 md:px-10 xl:px-[70px] items-center min-[1100px]:items-start justify-end">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="max-w-full lg:max-w-[500px] xl:max-w-[547px] mx-auto lg:ml-auto lg:mr-0 text-start flex flex-col gap-y-4 min-[1100px]:gap-y-7 xl:gap-y-8"
        >
          <SubChildSecond title={"Innovation and Cutting-Edge Technology"} />
          <SubChild
            title={
              "Nebula Vets embraced the power of innovation and embraced cutting-edge technology to enhance their diagnostic capabilities, treatment options, and overall patient care. From advanced imaging techniques to state-of-the-art surgical equipment, Nebula Vets ensures that their veterinarians have access to the latest tools and techniques to deliver optimal outcomes."
            }
          />
          <SubChildSecond title={"Compassionate Care & Client Relationships"} />
          <SubChild
            title={
              "Nebula Vets prides itself on providing compassionate care not only to the pets but also to their owners. We understand the deep bond between humans and animals and strive to create a nurturing and supportive environment for both. Building strong client relationships based on trust, open communication, and empathy is at the heart of their practice"
            }
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="1500"
          className="max-w-[600px] mx-auto lg:ml-0 lg:mr-0"
        >
          <img
            className="hidden md:flex"
            src={main}
            alt="main"
            width={"100%"}
          />
          <img
            className="flex md:hidden"
            src={main1}
            alt="main"
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
}

export default Innovation;
