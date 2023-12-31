import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./slices/products";
import toastReducer from "./slices/toast";
import cartReducer from "./slices/Cart";
import productDetailReducer from "./slices/ProductDetail";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    toast: toastReducer,
    cart: cartReducer,
    productDetail: productDetailReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;