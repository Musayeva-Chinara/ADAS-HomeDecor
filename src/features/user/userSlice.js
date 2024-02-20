import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  wishlist: [],
  cart: [],
  logined: false,
  userID: null,
  newUser: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.wishlist = action.payload.wishlist;
      state.cart = action.payload.cart;
      state.logined = true;
      state.userID = action.payload.id;
    },
    setLogout: (state) => {
      state.userData = {};
      state.wishlist = [];
      state.cart = [];
      state.logined = false;
      state.userID = null;
    },
    setNewUser: (state, action) => {
      state.newUser = action.payload;
    },
  },
});

export const { setUserData, setLogout, setNewUser } = userSlice.actions;

export default userSlice.reducer;
