import { useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Row, Stack } from "react-bootstrap";

import { FaBars } from "react-icons/fa";

import Logo from "../Assets/logo3_transparent.png";

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
      {[false].map((expand, index) => (
        <Navbar
          key={index}
          expand={expand}
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
            <Offcanvas show={show} onHide={handleClose} placement={"end"}>
              <Offcanvas.Header closeButton>
                <Container fluid>
                  <Row>
                    <Col>
                      <Offcanvas.Title
                        id={`offcanvasNavbarLabel-expand-${expand}`}
                      >
                        WishList
                      </Offcanvas.Title>
                    </Col>
                    <Col>
                      <Button onClick={changeColorHandler} variant="primary">
                        Change Color
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ListGroup>
                  {wishList.map((item) => (
                    <ListGroup.Item variant="info" className="my-1" key={item.id}>
                      <Stack direction="horizontal">
                        <div
                          className="w-25"
                          style={{ overflow: "hidden", marginRight: "1vw" }}
                        >
                          <Image
                            roundedCircle
                            src={item.thumbnail}
                            style={{ objectFit: "cover" }}
                            className="w-100"
                          />
                        </div>
                        <div className="w-50">{item.title}</div>
                        <div className="w-25">Price: {item.price} </div>
                      </Stack>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Offcanvas.Body>
            </Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
