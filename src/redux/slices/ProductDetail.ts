import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; 
import {Product} from "../../types/type";

type ProductDetailState = {
  detail: Product;
}

const productDetailState:ProductDetailState = {
  detail: {
    id: 0,
    title: "",
    description: "",
    price: 0,
    rating: 0,
    category: "",
    thumbnail: "",
    images: [""],
  },
}

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: productDetailState,
  reducers: {
    displayProductDetail: (state, action: PayloadAction<Product>) => {
      state.detail = action.payload;
    }
  }
})

export const productsDetailActions = productDetailSlice.actions;
const productsDetailReducer = productDetailSlice.reducer;
export default productsDetailReducer;
