import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...action.payload ];
    },
    removeItem: (state, action) => {
      state.cart = [...action.payload ];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const selectCart = (state) => state.cart;
export const {
  addToCart,
  removeItem,
} = cartSlice.actions;
