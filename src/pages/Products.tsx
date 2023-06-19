import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getProductsData } from "../redux/thunk/products";
import { AppDispatch, RootState } from "../redux/store";
import { productsActions } from "../redux/slices/products";

import ProductItem from "../components/ProductItem";

import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";

import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import FormComp from "../components/FormComp";

export default function Products() {
  const [sortBy, setSortBy] = useState("");
  const loading = useSelector((state: RootState) => state.products.isLoading);
  const userInput = useSelector((state: RootState) => state.products.userInput);
  const productList = useSelector(
    (state: RootState) => state.products.products
  );
  const sortOrder = useSelector((state: RootState) => state.products.order);
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

  function sortOrderHandler() {
    dispatch(productsActions.sortOrder());
    if (sortBy === "Price") {
      dispatch(productsActions.sortProdcutsByPrice());
    } else {
      dispatch(productsActions.sortProductsByName());
    }
  }

  function formHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === "Price") {
      dispatch(productsActions.sortProdcutsByPrice());
      setSortBy("Price");
    } else {
      dispatch(productsActions.sortProductsByName());
      setSortBy("Name");
    }
  }

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
        <div className="d-flex justify-content-center gap-4 align-items-center my-5">
          <FormComp />
          <Button variant="warning" onClick={searchHandler} className="h-50">
            search
          </Button>
          <Form.Select
            style={{ width: "8vw" }}
            aria-label="Default select example"
            className="bg-info"
            onChange={formHandler}
          >
            <option value="Sort By">Sort By</option>
            <option value="Price">Price</option>
            <option value="Name">Name</option>
          </Form.Select>

          <Button variant="info" onClick={sortOrderHandler} className="h-50">
            Sort Order{" "}
            {sortOrder === "Ascending" ? (
              <BiUpArrowAlt className="fs-5" />
            ) : (
              <BiDownArrowAlt className="fs-5" />
            )}
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
