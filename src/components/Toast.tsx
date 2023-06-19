import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { toastActions } from "../redux/slices/toast";

import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

import { MdFavorite } from "react-icons/md";

export default function ToastComp() {
  const dispatch = useDispatch();
  const addProduct = useSelector((state: RootState) => state.toast.addProduct);
  const removeProduct = useSelector(
    (state: RootState) => state.toast.removeProduct
  );
  return (
    <div aria-live="polite" aria-atomic="true" style={{ height: "240px" }}>
      <ToastContainer
        className="p-3 position-fixed bottom-0 start-0"
        style={{ zIndex: 1 }}
      >
        <Toast
          className="bg-success text-bg-light"
          onClose={() => dispatch(toastActions.add(false))}
          show={addProduct}
          delay={3000}
          autohide
        >
          <Toast.Header className="bg-success text-bg-light">
            <MdFavorite className="text-warning fs-5 mx-3" />
            <strong className="me-auto">Bootstrap</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>A new product has been added to the wishlist</Toast.Body>
        </Toast>
        <Toast
          className="bg-danger text-bg-light"
          onClose={() => dispatch(toastActions.remove(false))}
          show={removeProduct}
          delay={3000}
          autohide
        >
          <Toast.Header className="bg-danger text-bg-light">
            <MdFavorite className="text-dark fs-5 mx-3" />
            <strong className="me-auto">Bootstrap</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>A product has been removed from the wishlist</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
