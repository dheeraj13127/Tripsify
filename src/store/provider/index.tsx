import { configureStore } from "@reduxjs/toolkit";

import planSlice from "../slices/plan-slice";

const store = configureStore({
  reducer: {
    plan: planSlice.reducer,
  },
});

export default store;
