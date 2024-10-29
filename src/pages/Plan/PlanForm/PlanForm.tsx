import React, { useState } from "react";
import { handPickedData } from "./helper/HandPickedData";
import {
  HandPickedDataType,
  PlanDataType,
} from "../../../interfaces/Interfaces";
import toast from "react-hot-toast";
import { genAiModel } from "../GenAiModel/GenAiModel";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { planActions } from "../../../store/slices/plan-slice";
import ClipLoader from "react-spinners/ClipLoader";

const PlanForm = () => {
  const dispatch: Dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [planData, setPlanData] = useState<PlanDataType>({
    destination: "",
    duration: "",
    additionalInfo: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlanData((prev: PlanDataType) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleHandPickedData = (hd: HandPickedDataType) => {
    setPlanData((prev: PlanDataType) => ({
      ...prev,
      destination: hd.destination,
      duration: String(hd.duration),
      additionalInfo: hd.additionalInfo,
    }));
  };

  const handleSubmitData = async (e: React.FormEvent) => {
    e.preventDefault();
    if (planData.destination === "" || planData.duration === "") {
      toast("Please fill in the required fields", {
        icon: "❕",
        style: {
          background: "#364151",
          color: "#fff",
        },
      });
      return;
    }
    setLoading(true);
    const prompt: string = `I am looking to visit ${planData.destination} for ${planData.duration} days. 
    Additionally I would also like to ${planData.additionalInfo}. 
    Plan me and give me an accurate itenerary.
    At the starting provide some information about the destination and keep the word limit to maximum of 400 words. 
    Divide each day into 4 phases like morning,afternoon,evening and night.
    Also provide some suitable recommended places. Consider each day seperately. 
    Don't provide Note in the end.
    Also at end provide some valuable tips using bullet points.
    Provide along with the dates. 
    Also use bold fonts wherever it is necessary only.
    `;
    try {
      const result = await genAiModel.generateContent(prompt);
      dispatch(
        planActions.setItineraryData({
          itineraryData: result.response.text(),
          itineraryDestination: planData.destination,
          itineraryDuration: planData.duration,
        })
      );
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong !");
    }
  };
  return (
    <div
      data-aos="zoom-out"
      data-aos-once={true}
      data-aos-duration="750"
      className="grid grid-cols-12 mt-24"
    >
      <div className="col-span-12 flex justify-center">
        <div className="bg-gray-700 bg-opacity- shadow-lg p-5 rounded-lg w-5/6 lg:w-3/6 border border-gray-200">
          <p className="text-center font-poppins text-white text-2xl font-semibold">
            Get your <span className="text-dark-pink">itinerary</span>
          </p>
          <form onSubmit={handleSubmitData} className="mt-10 space-y-6">
            <div className="space-y-2">
              <label className=" font-roboto text-gray-200">
                Enter your destination <span>*</span>
              </label>
              <input
                type="text"
                name="destination"
                className="w-full rounded-md py-1.5 px-2 outline-none placeholder:text-sm"
                placeholder="Sydney,Canberra,Brisbane,Singapore etc..."
                value={planData.destination}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <label className="font-roboto text-gray-200">
                Enter the duration (in days) <span>*</span>
              </label>
              <input
                type="number"
                name="duration"
                className="w-full rounded-md py-1.5 px-2 outline-none placeholder:text-sm"
                placeholder="7"
                value={planData.duration}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <label className="font-roboto text-gray-200">
                Provide some additional information
              </label>
              <input
                type="text"
                name="additionalInfo"
                className="w-full rounded-md py-1.5 px-2 outline-none placeholder:text-sm"
                placeholder="Visit clubs, Taste native foods"
                value={planData.additionalInfo}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-6">
              <p className="font-roboto text-gray-200">
                Handpicked destinations for you
              </p>
              <div className="mt-4 flex items-center space-x-4 overflow-x-auto no-scrollbar">
                {handPickedData.map((hd: HandPickedDataType, i: number) => (
                  <div
                    onClick={() => handleHandPickedData(hd)}
                    key={i}
                    className=" border px-3 py-1 rounded-2xl cursor-pointer hover:text-gray-700 hover:bg-white text-white duration-200 font-roboto text-sm"
                  >
                    {hd.destination}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6">
              {loading ? (
                <button
                  disabled
                  className=" bg-dark-pink flex items-center justify-center hover:bg-opacity-80 duration-150 w-full p-2 rounded-lg font-roboto text-white"
                >
                  Planning
                  <span className="ml-3 mt-1">
                    <ClipLoader color="#ffffff" loading={true} size={13} />
                  </span>
                </button>
              ) : (
                <button className=" bg-dark-pink hover:bg-opacity-80 duration-150 w-full p-2 rounded-lg font-roboto text-white">
                  Plan
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlanForm;
