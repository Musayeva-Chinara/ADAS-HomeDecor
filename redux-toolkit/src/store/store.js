import { configureStore } from "@reduxjs/toolkit";
import calculateSlice from "./slices/calcSlice";
import movieSlice from "./slices/movieSlice";

const store = configureStore({
  reducer: {
    calculate: calculateSlice.reducer,
    movie: movieSlice.reducer,
  },
});

export default store;
