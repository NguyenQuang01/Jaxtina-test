// dataInfo.js
import { createSlice } from "@reduxjs/toolkit";

const dataInfo = createSlice({
  name: "info",
  initialState: {
    data: null,
  },
  reducers: {
    setDataInfo: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setDataInfo } = dataInfo.actions;
export default dataInfo.reducer;
