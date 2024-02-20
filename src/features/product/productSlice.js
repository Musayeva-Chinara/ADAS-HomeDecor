import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  categories: [],
  collections: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
      state.categories = action.payload.categories;
      state.collections = action.payload.collections;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
