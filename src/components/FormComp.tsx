import Form from "react-bootstrap/Form";

import { useDispatch } from "react-redux";
import { productsActions } from "../redux/slices/products";

export default function FormComp() {
  const dispatch = useDispatch();

  function inputHandeler(e: React.ChangeEvent<HTMLInputElement>) {
    const result = e.target.value;
    dispatch(productsActions.changeUserInput(result));

  }
  return (
    <div>
      <Form className="d-inline-block text-center">
        <Form.Group className="mb-3 text-center" controlId="formText">
          <Form.Label className="my-2">Search product</Form.Label>
          <Form.Control
            type="text"
            placeholder="search product"
            className="text-center"
            onChange={inputHandeler}
          />
          <Form.Text className="text-muted">
            Check: iphone X, macbook pro...
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
}
