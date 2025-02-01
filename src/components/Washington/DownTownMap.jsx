import React from "react";
import SubHeading from "./../common/Subheading";
import down from "./../../assests/img/png/downtown-wave-img.png";

function DownTownMap() {
  return (
    <div className="relative">
      <div className="absolute bottom-0">
        <img src={down} alt="downtown" />
      </div>
      <div className="flex-col-reverse lg:flex-row flex justify-center lg:justify-end bg-[rgba(215,217,221,0.50)] pb-24 pt-14 md:py-20 gap-0 lg:gap-5">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="max-w-full lg:max-w-[423px] w-full text-start mt-14 lg:mt-0 px-8"
        >
          <SubHeading subtitle={"Downtown"} className={"mb-6 md:mb-12"} />
          <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-[#494336] roboto font-normal leading-[36px] mb-10">
            2468 18th Street, SW Washington DC, 20003
          </p>
          <SubHeading subtitle={"Opening Hours"} className={"mb-6 md:mb-12"} />
          <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-[#494336] roboto font-normal leading-[36px] mb-10">
            Monday - Friday: 8AM - 6PM Saturday: 9AM - 5PM Sunday: Closed
          </p>
          <SubHeading subtitle={"Contact"} className={"mb-6 md:mb-12"} />
          <div>
            <a
              href="tel:+(212)123-4567"
              className="text-base sm:text-lg md:text-xl xl:text-2xl text-[#494336] roboto font-normal leading-[36px]"
            >
              Phone: (212) 123-4567
            </a>
          </div>
          <a
            href="mailto:hello@nebulavets.com"
            className="text-base sm:text-lg md:text-xl xl:text-2xl text-[#494336] roboto font-normal leading-[36px]"
          >
            hello@nebulavets.com
          </a>
        </div>
        <div className="map-container mx-auto lg:mr-14 lg:ml-0 max-w-[782px]">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe"
                title="Google Map"
                width="100%"
                src="https://maps.google.com/maps?width=782&height=570&hl=en&q=2468%2018th%20Street,%20SWWashington%20DC,%2020003&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              ></iframe>
              <a href="https://sprunkiplay.com/">Sprunki Game</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownTownMap;
