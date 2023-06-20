import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/type";
import type { PayloadAction } from "@reduxjs/toolkit";

type ProductsState = {
  products: Product[];
  wishes: Product[];
  userInput: string;
  isLoading: boolean;
  order: "ascending" | "descending";
};

const productsState: ProductsState = {
  products: [],
  wishes: [],
  userInput: "",
  isLoading: true,
  order: "ascending",
};

export const productsSlice = createSlice({
  name: "products",
  initialState: productsState,
  reducers: {
    displayProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    sortOrder: (state) => {
      if (state.order === "ascending") {
        state.order = "descending";
      } else {
        state.order = "ascending";
      }
    },
    sortProdcutsByPrice: (state) => {
      if (state.order === "ascending") {
        state.products = state.products.sort((a, b) => a.price - b.price);
      } else {
        state.products = state.products.sort((a, b) => b.price - a.price);
      }
    },
    sortProductsByName: (state) => {
      if (state.order === "ascending") {
        state.products = state.products.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      } else {
        state.products = state.products.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
      }
    },
    displayWishes: (state, action: PayloadAction<Product>) => {
      state.wishes.map((item) => {
        if (item.id === action.payload.id) {
          return (state.wishes = state.wishes.filter(
            (item) => item.id !== action.payload.id
          ));
        } else {
          return null;
        }
      });
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
