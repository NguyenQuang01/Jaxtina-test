import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import languageReducer from "./langueSlice";

export const store = configureStore({
  reducer: {
    info: counterReducer,
    langue: languageReducer,
    // Add other reducers if needed
  },
});
