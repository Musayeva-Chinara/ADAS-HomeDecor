import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
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

export const { increase, increment, decrease } = movieSlice.actions;
export default movieSlice;
