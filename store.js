import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./src/features/product/productSlice";
import userSlice from "./src/features/user/userSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    user: userSlice,
  },
});
