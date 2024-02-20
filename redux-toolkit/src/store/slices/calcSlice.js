import { createSlice } from "@reduxjs/toolkit";

const calculateSlice = createSlice({
  name: "calculator",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
  },
});

export const { increase, increment, decrease } = calculateSlice.actions;
export default calculateSlice;
