import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { cartActions } from "../redux/slices/Cart";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import { Product } from "../types/type";

type Prop = {
  wish: Product;
};

export default function WishItem({ wish }: Prop) {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  function addToCartHandeler() {
    dispatch(
      cartActions.addToCart({
        title: wish.title,
        price: wish.price,
      })
    );
    dispatch(cartActions.totalCounter(wish.price));
    cart.map((item) => {
      if (item.title === wish.title) {
        return dispatch(cartActions.totalCounter(-wish.price));
      } else {
        return null;
      }
    });
  }

  return (
    <Col key={wish.id}>
      <Card className="text-center d-flex flex-column align-items-center overflow-hidden">
        <Card.Header>{wish.title} </Card.Header>
        <Card.Body className="d-flex flex-column align-items-center">
          <div className="h-50 overflow-hidden">
            <Card.Img
              variant="top"
              src={wish.images[2]}
              className="w-100 object-fit-contain my-2"
            />
          </div>
          <Card.Title>{wish.category} </Card.Title>
          <Card.Text>{wish.description}</Card.Text>
          <div className="my-4">Rating: {wish.rating}/5 </div>
          <div className="d-flex justify-content-around w-50">
            <Button onClick={addToCartHandeler} variant="primary">
              Add to Cart
            </Button>
            <Link to="/products">
              <Button variant="danger">Back</Button>
            </Link>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </Col>
  );
}
