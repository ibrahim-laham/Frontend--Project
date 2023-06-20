import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/Cart";

import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

import { CartProduct } from "../types/type";

type Prop = {
  item: CartProduct;
};

export default function CartItem({ item }: Prop) {
  const dispatch = useDispatch();
  function addHandler() {
    dispatch(cartActions.increaseQuantity(item));
    dispatch(cartActions.totalCounter(item.price));
  }
  function substractHandler() {
    if (item.quantity > 0) {
      dispatch(cartActions.decreaseQuantity(item));
      dispatch(cartActions.totalCounter(-item.price));
    }
  }

  function deletItemHandler() {
    dispatch(cartActions.deleteFromCart(item));
    dispatch(cartActions.totalCounter(-item.price * item.quantity));
  }

  return (
    <Card body>
      <Stack
        direction="horizontal"
        className="justify-content-around w-100 gap-4"
      >
        <div className="w-25">{item.title}</div>
        <div className="w-25 text-center">{item.price}</div>
        <Stack direction="horizontal" className="w-25 justify-content-between">
          <Button onClick={addHandler}>+</Button>
          <div>{item.quantity} </div>
          <Button onClick={substractHandler}>-</Button>
        </Stack>
        <Button onClick={deletItemHandler} variant="danger">
          delete
        </Button>
      </Stack>
    </Card>
  );
}
