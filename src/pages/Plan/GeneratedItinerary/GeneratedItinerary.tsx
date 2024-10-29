/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../interfaces/Interfaces";
import ReactMarkdown from "react-markdown";
import { FaClipboard } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import markdownToText from "markdown-to-txt";
import copy from "copy-to-clipboard";
import { useNavigate } from "react-router-dom";
import { planActions } from "../../../store/slices/plan-slice";
import toast from "react-hot-toast";

const GeneratedItinerary = () => {
  const itineraryData = useSelector<RootState, any>(
    (state) => state.plan.itineraryData
  );
  const itineraryDestination = useSelector<RootState, any>(
    (state) => state.plan.itineraryDestination
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNewItinerary = () => {
    dispatch(
      planActions.setItineraryData({
        itineraryData: "",
        itineraryDestination: "",
        itineraryDuration: "",
      })
    );
    navigate("/plan");
  };
  const handleCopyToClipboard = () => {
    const normalText = markdownToText(itineraryData);
    copy(normalText);
    toast.success("Copied to clipboard");
  };
  return (
    <div
      data-aos="zoom-out"
      data-aos-once={true}
      data-aos-duration="750"
      className="grid grid-cols-12 mt-24"
    >
      <div className="col-span-12 flex justify-center">
        <div className="bg-gray-700 shadow-lg p-5 rounded-lg w-5/6 lg:w-3/6 border border-gray-200">
          <p className="text-center font-poppins text-white text-2xl font-semibold">
            Here is your itinerary for{" "}
            <span className="text-dark-pink">{itineraryDestination}</span>
          </p>
          <div className=" whitespace-pre-line mt-12 leading-5 h-[600px] bg-gray-100 overflow-y-auto border-4 px-2 py-6 rounded-xl border-gray-300">
            <ReactMarkdown>{itineraryData}</ReactMarkdown>
          </div>
          <div className="mt-6 flex items-center justify-center space-x-5">
            <button
              onClick={handleNewItinerary}
              className=" text-white font-roboto text-sm bg-dark-pink px-3 py-1 rounded-md flex items-center hover:scale-90 duration-150"
            >
              New itinerary
              <span className="ml-2">
                <FaRegPlusSquare size={12} />
              </span>
            </button>
            <button
              onClick={handleCopyToClipboard}
              className=" text-white font-roboto text-sm bg-dark-pink px-3 py-1 rounded-md flex items-center hover:scale-90 duration-150"
            >
              Copy to clipboard
              <span className="ml-2">
                <FaClipboard size={12} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedItinerary;
