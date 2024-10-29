import React from "react";
import PlanForm from "./PlanForm/PlanForm";
import { useSelector } from "react-redux";
import { RootState } from "../../interfaces/Interfaces";
import GeneratedItinerary from "./GeneratedItinerary/GeneratedItinerary";

const Plan = () => {
  const itineraryData = useSelector<RootState>(
    (state) => state.plan.itineraryData
  );
  return (
    <div className=" h-screen">
      {itineraryData === "" ? <PlanForm /> : <GeneratedItinerary />}
    </div>
  );
};

export default Plan;
