import { AppDispatch } from "../store";
import { productsDetailActions } from "../slices/ProductDetail";


export function getProductDetail(url :string) {
  
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(productsDetailActions.displayProductDetail(data));
    } catch (error) {
      console.log(error);
    }
  };
}