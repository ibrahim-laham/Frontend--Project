import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getProductsData } from "../redux/thunk/products";
import { AppDispatch, RootState } from "../redux/store";
import { productsActions } from "../redux/slices/products";
import ProductItem from "../components/ProductItem";

import Row from "react-bootstrap/Row";
import Form from "../components/Form";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

export default function Products() {
  const loading = useSelector((state: RootState) => state.products.isLoading);
  const userInput = useSelector((state: RootState) => state.products.userInput);
  const productList = useSelector(
    (state: RootState) => state.products.products
  );
  const appDisptach = useDispatch<AppDispatch>();
  const dispatch = useDispatch();

  function searchHandler() {
    dispatch(
      productsActions.displayProducts(
        productList.filter((product) =>
          product.title.toLowerCase().includes(userInput.toLowerCase())
        )
      )
    );
  }

  useEffect(() => {
    appDisptach(getProductsData());
  }, [appDisptach, userInput]);

  if (loading) {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "60vh" }}
      >
        <Spinner animation="border" variant="warning">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  } else {
    return (
      <div>
        <div
          className="d-flex justify-content-center gap-4 align-items-center my-5"
          style={{ height: "10vh" }}
        >
          <Form />
          <Button variant="warning" onClick={searchHandler} className="h-50">
            search
          </Button>
        </div>
        <Row xs={1} md={4} className="g-4 p-5">
          {productList.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </Row>
      </div>
    );
  }
}
