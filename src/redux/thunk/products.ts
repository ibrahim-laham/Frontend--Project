import { AppDispatch } from "../store";
import { productsActions } from "../slices/products";


export function getProductsData() {
  const url = "https://dummyjson.com/products"
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(productsActions.displayProducts(data.products));
      dispatch(productsActions.setIsLoading());
    } catch (error) {
      console.log(error);
    }
  };
}
