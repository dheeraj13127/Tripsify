import React from "react";

const IntroSection = () => {
  return (
    <div className="grid grid-cols-12 mt-24">
      <div className="col-span-12 max-w-screen-md mx-auto ">
        <div data-aos="zoom-out" data-aos-once={true} data-aos-duration="750">
          <p className="font-poppins font-semibold text-center text-3xl sm:text-5xl lg:text-6xl leading-tight">
            The{" "}
            <span className=" bg-gradient-to-r  from-dark-pink to-gray-500 bg-clip-text text-transparent inline-block">
              AI powered
            </span>
            <br /> Itinerary planner
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-once={true}
          data-aos-duration="750"
          data-aos-delay="400"
        >
          <p className="text-gray-500 text-center mt-8 text-sm sm:text-base lg:text-lg font-medium font-serif">
            An AI-powered itinerary planner that creates customized travel
            schedules, organizing activities and routes tailored to user
            preferences and time constraints.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-once={true}
          data-aos-duration="750"
          data-aos-delay="600"
          className="flex justify-center mt-10 md:mt-14"
        >
          <button className="px-4 py-2 rounded cursor-pointer bg-dark-pink text-sm md:text-base lg:text-lg font-semibold font-opensans text-white hover:scale-95 duration-150">
            Plan yours now
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
