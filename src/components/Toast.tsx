import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { toastActions } from "../redux/slices/toast";

import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

export default function ToastComp() {
  const dispatch = useDispatch();
  const addProduct = useSelector((state: RootState) => state.toast.addProduct);
  const removeProduct = useSelector(
    (state: RootState) => state.toast.removeProduct
  );
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="bg-dark  "
      style={{ height: "240px" }}
    >
      <ToastContainer
        className="p-3 position-fixed bottom-0 start-0"
        style={{ zIndex: 1 }}
      >
        <Toast
          className="bg-success"
          onClose={() => dispatch(toastActions.add(false))}
          show={addProduct}
          delay={3000}
          autohide
        >
          <Toast.Header className="bg-success">
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>A new product has been added to the wishlist</Toast.Body>
        </Toast>
        <Toast
          className="bg-danger"
          onClose={() => dispatch(toastActions.remove(false))}
          show={removeProduct}
          delay={3000}
          autohide
        >
          <Toast.Header className="bg-danger">
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>A product has been removed from the wishlist</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
