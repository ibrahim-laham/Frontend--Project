import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { cartActions } from "../redux/slices/Cart";

import CartItem from "../components/CartItem";

import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";

import cartImg from "../Assets/Wavy_Bus-17_Single-09.jpg";
import { Link } from "react-router-dom";

export default function Cart() {
  const [alertState, setAlertState] = useState("");
  const cart = useSelector((state: RootState) => state.cart.cart);
  const total = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch();
  function cancelHandler() {
    dispatch(cartActions.resetCart());
    dispatch(cartActions.resetTotalCounter());
  }
  function checkoutHandler() {
    setAlertState("success");
    dispatch(cartActions.resetCart());
    dispatch(cartActions.resetTotalCounter());
  }

  if (cart.length === 0) {
    return (
      <Stack className="align-items-center">
        <p className="h5">
          The Cart is empty, click on the cart button in the products page to
          add items to the cart
        </p>
        <div className="w-50">
          <img className="object-fit-cover w-50" src={cartImg} alt="cart" />
        </div>
        <Link to="/products" className="w-25 my-5">
          <style type="text/css">
            {`
              .btn-flat {
                background-color: purple;
                color: white;
              }
            `}
          </style>
          <Button variant="flat" size="lg" className="w-75">
            Back
          </Button>
        </Link>
      </Stack>
    );
  } else {
    return (
      <div className="p-5 ">
        <Stack className="col-md-5 mx-auto">
          <div className="w-100 ">
            {alertState === "success" ? (
              <Alert key={alertState} variant={alertState} dismissible>
                The Items have been successfully checked out! Thank you for your
                purchase.
              </Alert>
            ) : null}
          </div>
          <div>
            {cart.map((item) => (
              <CartItem item={item} key={item.title} />
            ))}
          </div>
        </Stack>
        <div>Total:{total} </div>
        <Stack
          direction="horizontal"
          className="justify-content-center gap-5 p-4"
        >
          <Button variant="success" onClick={checkoutHandler}>
            Checkout
          </Button>
          <Button onClick={cancelHandler} variant="danger">
            Cancel
          </Button>
        </Stack>
      </div>
    );
  }
}
