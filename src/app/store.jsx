import { configureStore } from "@reduxjs/toolkit";
import adInsightsReducer from "../features/adInsightsSlice";

export const store = configureStore({
    reducer: {
        adInsightsData : adInsightsReducer
    }
})