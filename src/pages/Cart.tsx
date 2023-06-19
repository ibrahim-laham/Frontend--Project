import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { cartActions } from "../redux/slices/Cart";

import CartItem from "../components/CartItem";

import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const total = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch();
  function cancelHandler() {
    dispatch(cartActions.resetCart());
    dispatch(cartActions.resetTotalCounter());
  }
  return (
    <div className="p-5">
      <Stack className="col-md-5 mx-auto">
        {cart.map((item) => (
          <CartItem item={item} key={item.title} />
        ))}
      </Stack>
      <div>Total:{total} </div>
      <Stack
        direction="horizontal"
        className="justify-content-center gap-5 p-4"
      >
        <Button variant="success">Checkout</Button>
        <Button onClick={cancelHandler} variant="danger">
          Cancel
        </Button>
      </Stack>
    </div>
  );
}
