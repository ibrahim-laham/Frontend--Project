import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  addProduct: boolean;
  removeProduct: boolean;
};

const initialState: InitialState = {
  addProduct: false,
  removeProduct: false,
};

export const toastSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<boolean>) => {
      state.addProduct = action.payload;
    },
    remove: (state, action: PayloadAction<boolean>) => {
      state.removeProduct = action.payload;
    }
  },
});

export const toastActions = toastSlice.actions;
const toastReducer = toastSlice.reducer;
export default toastReducer;
