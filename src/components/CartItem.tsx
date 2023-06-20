import { useState } from "react";

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
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  function addHandler() {
    setValue(value + 1);
    dispatch(cartActions.totalCounter(item.price));
  }
  function substractHandler() {
    if (value > 0) {
      setValue(value - 1);
      dispatch(cartActions.totalCounter(-item.price));
    } else {
      setValue(0);
    }
  }

  function deletItemHandler() {
    dispatch(cartActions.deleteFromCart(item));
    dispatch(cartActions.totalCounter(-item.price));
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
          <div>{value} </div>
          <Button onClick={substractHandler}>-</Button>
        </Stack>
        <Button onClick={deletItemHandler} variant="danger">
          delete
        </Button>
      </Stack>
    </Card>
  );
}
