import { Product } from "../types/type";
import { productsActions } from "../redux/slices/products";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { toastActions } from "../redux/slices/toast";
import { cartActions } from "../redux/slices/Cart";

import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "react-bootstrap";

type Prop = {
  product: Product;
};

export default function ProductItem({ product }: Prop) {
  const wishList = useSelector((state: RootState) => state.products.wishes);
  const cart = useSelector((state: RootState) => state.cart.cart);

  let wishColor = "";
  wishList?.map((wish) => {
    if (wish.id === product.id) {
      return (wishColor = "gold");
    } else {
      return null;
    }
  });
  const dispatch = useDispatch<AppDispatch>();
  function addFavorite() {
    dispatch(productsActions.displayWishes(product));
    dispatch(toastActions.add(true));
    wishList.map((item) => {
      if (item.id === product.id) {
        dispatch(productsActions.filterWishes(product));
        dispatch(toastActions.remove(true));
        return dispatch(toastActions.add(false));
      } else {
        return null;
      }
    });
  }

  function addToCartHandeler() {
    dispatch(
      cartActions.addToCart({
        title: product.title,
        price: product.price,
      })
    );
    dispatch(cartActions.totalCounter(product.price));
    cart.map((item) => {
      if (item.title === product.title) {
        return dispatch(cartActions.totalCounter(-product.price));
      } else {
        return null;
      }
    });
  }

  let cartColor = "";

  cart.map((item) => {
    if (item.title === product.title) {
      return (cartColor = "gold");
    } else {
      return null;
    }
  });

  return (
    <Col key={product.id} style={{ height: "55vh" }}>
      <Card className="w-100 h-100">
        <div className="w-100 h-50 overflow-hidden">
          <Link to={`/products/${product.id}`}>
            <Card.Img
              variant="top"
              src={product.thumbnail}
              className="h-100 object-fit-cover"
            />
          </Link>
        </div>
        <Card.Body className="h-50">
          <div className="h-50">
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
          </div>
          <Link to={`/products/${product.id}`}>
            <Button variant="warning">Details</Button>
          </Link>
          <div className="d-flex justify-content-around align-items-center h-25">
            <Card.Text className="m-0 h-25">
              Price: {product.price} &#x20AC;
            </Card.Text>
            <MdFavorite
              className="fs-3"
              style={{ color: wishColor, cursor: "pointer" }}
              onClick={addFavorite}
            />
            <FaShoppingCart
              onClick={addToCartHandeler}
              className="fs-3"
              style={{ color: cartColor, cursor: "pointer" }}
            />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
