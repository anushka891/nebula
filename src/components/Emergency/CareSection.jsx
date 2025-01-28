import React from "react";
import wave from "./../../assests/img/png/why-should-position-wave.png";
import Subheading from "../common/Subheading";
import TextLG from "../common/TextLG";
function CareSection() {
  return (
    <div>
      <div className="bg-[rgba(215,217,221,0.50);] pt-14 md:pt-20">
        <div className="max-w-[1180px] mx-auto px-8 md:px-10 lg:px-12 text-[#494336] text-start">
          <Subheading
            subtitle={"Urgent & Emergency Care during open hours"}
            className={"pb-5 md:pb-9"}
          />
          <TextLG
            title={
              "At Nebula Vets, we understand that emergencies can happen at any time, and your pet's health and well-being are our top priority. We have convenient operating hours to ensure that we are available when you need us."
            }
            textclass={"mb-6"}
          />
          <TextLG
            title={
              "Our clinic is open from 8am to 6pm on weekdays and from 9am to 5pm on Saturdays. During these hours, our team of veterinarians and staff are ready to provide care for your pets."
            }
            textclass={"mb-6"}
          />
          <TextLG
            title={
              "If you have an urgent situation and require immediate advice or first aid instructions while you're on your way to our practice, you can contact us at 1234567. Our knowledgeable staff will assist you and provide guidance to help you manage the situation until you arrive."
            }
          />
          <Subheading
            subtitle={"Outside open hours"}
            className={"pb-5 md:pb-9 pt-10"}
          />
          <TextLG
            title={
              "The closest 24hr emergency veterinary hospital to our practice is:"
            }
          />
          <TextLG title={"Their number is 123456"} />
          <Subheading
            subtitle={"Reasons to seek Urgent or Emergency care"}
            className={"pb-5 md:pb-9 pt-10"}
          />
          <div>
            <ul className="ml-5">
              <li className="text-base md:text-lg avant text-[#494336] font-normal list-disc mb-1 sm:mb-0">
                Open wounds
              </li>
              <li className="text-base md:text-lg avant text-[#494336] font-normal list-disc mb-1 sm:mb-0">
                Toxin ingestion or foreign body
              </li>
              <li className="text-base md:text-lg avant text-[#494336] font-normal list-disc mb-1 sm:mb-0">
                Signs of pain
              </li>
              <li className="text-base md:text-lg avant text-[#494336] font-normal list-disc mb-1 sm:mb-0">
                Behavioral changes
              </li>
              <li className="text-base md:text-lg avant text-[#494336] font-normal list-disc mb-1 sm:mb-0">
                Eye issues
              </li>
              <li className="text-base md:text-lg avant text-[#494336] font-normal list-disc mb-1 sm:mb-0">
                Ear infections
              </li>
              <li className="text-base md:text-lg avant text-[#494336] font-normal list-disc mb-1 sm:mb-0">
                Vomiting or diarrhea
              </li>
              <li className="text-base md:text-lg avant text-[#494336] font-normal list-disc mb-1 sm:mb-0">
                Hair loss
              </li>
              <li className="text-base md:text-lg avant text-[#494336] font-normal list-disc mb-1 sm:mb-0">
                Coughing, sneezing or nasal discharge
              </li>
              <li className="text-base md:text-lg avant text-[#494336] font-normal list-disc mb-1 sm:mb-0">
                Urinating blood or urinary changes
              </li>
              <li className="text-base md:text-lg avant text-[#494336] font-normal list-disc mb-1 sm:mb-0">
                Worms, fleas, ticks or mites
              </li>
              <li className="text-lg avant text-[#494336] font-normal list-disc mb-1 sm:mb-0">
                Scooting
              </li>
              <li className="text-base md:text-lg avant text-[#494336] font-normal list-disc">
                Changes in eating or drinking
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[-40px] md:mt-[-100px] lg:mt-[-300px] xl:mt-[-400px] w-full">
          <img src={wave} alt="wave" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default CareSection;
