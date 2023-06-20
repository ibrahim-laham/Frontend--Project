import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ToastState = {
  addProduct: boolean;
  removeProduct: boolean;
};

const toastState: ToastState = {
  addProduct: false,
  removeProduct: false,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState: toastState,
  reducers: {
    add: (state, action: PayloadAction<boolean>) => {
      state.addProduct = action.payload;
    },
    remove: (state, action: PayloadAction<boolean>) => {
      state.removeProduct = action.payload;
    },
  },
});

export const toastActions = toastSlice.actions;
const toastReducer = toastSlice.reducer;
export default toastReducer;
