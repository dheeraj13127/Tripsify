import React from "react";
import { HowItWorksImagesDataType } from "../../../interfaces/Interfaces";
import destination from "../../../assets/choose-destination.png";
import duration from "../../../assets/choose-duration.png";
import additionalInfo from "../../../assets/additional-info.png";
import generatesData from "../../../assets/generates-data.png";
const HowItWorksSection = () => {
  const howItWorksImagesData: HowItWorksImagesDataType[] = [
    {
      id: 1,
      url: destination,
      info: "Step 1: Enter your favourite destination",
    },
    {
      id: 2,
      url: duration,
      info: "Step 2: Decide the duration of the trip",
    },
    {
      id: 3,
      url: additionalInfo,
      info: "Step 3: Provide some additional information if needed",
    },
    {
      id: 4,
      url: generatesData,
      info: "Thats it! Now the AI will generate your itinerary",
    },
  ];
  return (
    <div className="grid grid-cols-12 mt-20 lg:mt-48 max-w-screen-xl mx-auto gap-3 ">
      <div
        data-aos="fade-up"
        data-aos-duration="350"
        data-aos-once={true}
        className="col-span-12 max-w-screen-xl mx-auto"
      >
        <p className="font-poppins font-semibold text-center text-3xl sm:text-5xl lg:text-6xl leading-tight">
          How it{" "}
          <span className=" bg-gradient-to-r  from-dark-pink to-gray-500 bg-clip-text text-transparent inline-block">
            Works
          </span>
        </p>
      </div>
      {howItWorksImagesData.map(
        (hw: HowItWorksImagesDataType, index: number) => (
          <div
            data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
            data-aos-duration="350"
            data-aos-once={true}
            className={`col-span-12 mt-10 lg:mt-20 flex ${
              hw.id % 2 === 0 ? "justify-end" : "justify-start"
            } `}
            key={index}
          >
            <div className="bg-white shadow-xl p-2 rounded-lg">
              <div
                className="p-3 bg-gray-400 shadow-xl rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-100
"
              >
                <p className="text-gray-500 font-poppins font-semibold lg:text-lg mt-2">
                  {hw.info}
                </p>
                <div className="flex justify-center">
                  <img
                    className=" mt-4"
                    src={hw.url}
                    alt="how-it-works-image"
                  />
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default HowItWorksSection;
