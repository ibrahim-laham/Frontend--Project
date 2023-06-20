import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/slices/Cart";
import { RootState, AppDispatch } from "../redux/store";

import { useEffect } from "react";

import { getProductDetail } from "../redux/thunk/productDetail";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProductDetail() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const detail = useSelector((state: RootState) => state.productDetail.detail);

  const result = useParams();
  const url = `https://dummyjson.com/products/${result.id}`;
  const dispatch = useDispatch();
  const appDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    appDispatch(getProductDetail(url));
  }, [appDispatch, url]);

  function addToCartHandeler() {
    dispatch(
      cartActions.addToCart({
        title: detail?.title,
        price: detail?.price,
      })
    );
    dispatch(cartActions.totalCounter(detail.price));
    cart.map((item) => {
      if (item.title === detail.title) {
        return dispatch(cartActions.totalCounter(-detail.price));
      } else {
        return null;
      }
    });
  }

  return (
    <div>
      <Card className="text-center d-flex flex-column align-items-center overflow-hidden">
        <Card.Header>{detail?.title} </Card.Header>
        <Card.Body className="d-flex flex-column align-items-center">
          <div className="h-50 overflow-hidden">
            <Card.Img
              variant="top"
              src={detail?.images[1] || detail.images[0]}
              className="w-100 object-fit-contain my-2"
            />
          </div>
          <Card.Title>{detail?.category} </Card.Title>
          <Card.Text>{detail?.description}</Card.Text>
          <div className="my-4">Rating: {detail?.rating}/5 </div>
          <div className="d-flex justify-content-around w-50">
            <Button variant="primary" onClick={addToCartHandeler}>
              Add to Cart
            </Button>
            <Link to="/products">
              <Button variant="danger">Back</Button>
            </Link>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
}
