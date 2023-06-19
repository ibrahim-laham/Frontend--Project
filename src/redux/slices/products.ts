import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/type";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  products: Product[];
  wishes: Product[];
  userInput: string;
  isLoading: boolean;
  order: string;
};

const initialState: InitialState = {
  products: [],
  wishes: [],
  userInput: "",
  isLoading: true,
  order: "Ascending",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    displayProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    sortOrder: (state) => {
      if (state.order === "Ascending") {
        state.order = "Descending";
      } else {
        state.order = "Ascending";
      }
    },
    sortProdcutsByPrice: (state) => {
      if ((state.order === "Ascending")) {
        state.products = state.products.sort((a, b) => a.price - b.price);
      } else {
        state.products = state.products.sort((a, b) => b.price - a.price);
      }
    },
    sortProductsByName: (state) => {
      if ((state.order === "Ascending")) {
        state.products = state.products.sort((a,b) => a.title.localeCompare(b.title))
      } else {
        state.products = state.products.sort((a,b) => b.title.localeCompare(a.title))
      }
    },
    displayWishes: (state, action: PayloadAction<Product>) => {
      state.wishes.push(action.payload);
    },
    filterWishes: (state, action: PayloadAction<Product>) => {
      state.wishes = state.wishes.filter(
        (favorite) => favorite.id !== action.payload.id
      );
    },
    changeUserInput: (state, action: PayloadAction<string>) => {
      state.userInput = action.payload;
    },
    setIsLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const productsActions = productsSlice.actions;
const productsReducer = productsSlice.reducer;
export default productsReducer;
