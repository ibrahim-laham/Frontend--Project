import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/type";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  products: Product[];
  wishes: Product[];
  userInput: string;
  isLoading: boolean;
};

const initialState: InitialState = {
  products: [],
  wishes: [],
  userInput: "",
  isLoading: true,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    displayProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    displayWishes: (state, action: PayloadAction<Product>) => {
      state.wishes.push(action.payload);
    },
    filterWishes: (state, action: PayloadAction<Product>) => {
      state.wishes = state.wishes.filter(
        (favorite) => favorite.id !== action.payload.id
      );
    },
    changeUserInput: (state, action: PayloadAction<string> ) => {
      state.userInput= action.payload;
    },
    setIsLoading : (state) => {
      state.isLoading = false;
    }
  },
});

export const productsActions = productsSlice.actions;
const productsReducer = productsSlice.reducer;
export default productsReducer;
