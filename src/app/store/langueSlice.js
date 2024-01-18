// dataLangue.js
import { createSlice } from "@reduxjs/toolkit";

const dataLangue = createSlice({
  name: "langue",
  initialState: {
    data: null,
  },
  reducers: {
    setDataLangue: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setDataLangue } = dataLangue.actions;
export default dataLangue.reducer;
