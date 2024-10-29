import { createSlice, Slice } from "@reduxjs/toolkit";
import {
  GlobalActionType,
  PlanSliceStateType,
} from "../../interfaces/Interfaces";

const planSlice: Slice = createSlice({
  name: "plan",
  initialState: {
    itineraryData: "",
    itineraryDestination: "",
    itineraryDuration: "",
  },
  reducers: {
    setItineraryData(state: PlanSliceStateType, action: GlobalActionType) {
      state.itineraryData = action.payload.itineraryData;
      state.itineraryDestination = action.payload.itineraryDestination;
      state.itineraryDuration = action.payload.itineraryDuration;
    },
  },
});

export const planActions = planSlice.actions;
export default planSlice;
