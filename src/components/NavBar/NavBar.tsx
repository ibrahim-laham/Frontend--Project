import { useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";

import { FaBars } from "react-icons/fa";

import Logo from "../../Assets/logo3_transparent.png";
import OffcanavasComp from "./OffCanvasComp";

export default function NavBar() {
  const wishList = useSelector((state: RootState) => state.products.wishes);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function changeColorHandler() {
    if (document.documentElement.getAttribute("data-bs-theme") === "dark") {
      document.documentElement.setAttribute("data-bs-theme", "light");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    }
  }
  return (
    <>
      {
        <Navbar
          expand={false}
          className="mb-3 text-warning  "
          style={{ fontWeight: "700", backgroundColor: "#060b1f" }}
        >
          <Container fluid className="justify-content-md-center w-25">
            <Link to="/">
              <Navbar.Brand>
                <Image className="w-25" src={Logo} roundedCircle></Image>
              </Navbar.Brand>
            </Link>
          </Container>
          <Container fluid className="px-5">
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              <Nav>Home</Nav>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/products"
            >
              <Nav>Products</Nav>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/wishlist"
            >
              <Nav className="position-relative p-1">
                Wishlist{" "}
                <Badge
                  bg="danger"
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {wishList.length > 0 ? wishList.length : null}
                </Badge>
              </Nav>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/cart"
            >
              <Nav className="position-relative p-1">
                Cart
                <Badge
                  bg="danger"
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {cart.length > 0 ? cart.length : null}
                </Badge>
              </Nav>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/aboutus"
            >
              <Nav>About us</Nav>
            </Link>
            <Button variant="warning" onClick={handleShow}>
              <FaBars />
            </Button>
            <OffcanavasComp
              show={show}
              handleClose={handleClose}
              changeColorHandler={changeColorHandler}
            />
          </Container>
        </Navbar>
      }
    </>
  );
}
