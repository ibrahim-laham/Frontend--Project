import { createSlice } from "@reduxjs/toolkit";
import { CartProduct } from "../../types/type";
import type { PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  cart: CartProduct[];
  total: number;
};

const cartState: CartState = {
  cart: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      state.cart.map((item) => {
        if (item.title === action.payload.title) {
          return (state.cart = state.cart.filter(
            (value) => value.title !== action.payload.title
          ));
        } else {
          return null;
        }
      });
      state.cart.push(action.payload);
    },
    deleteFromCart: (state, action: PayloadAction<CartProduct>) => {
      state.cart = state.cart.filter(
        (item) => item.title !== action.payload.title
      );
    },
    resetCart: (state) => {
      state.cart = [];
    },
    totalCounter: (state, action: PayloadAction<number>) => {
      state.total += action.payload;
    },
    resetTotalCounter: (state) => {
      state.total = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
