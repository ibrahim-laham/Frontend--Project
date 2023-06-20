import "./App.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ToastComp from "./components/Toast";

import Home from "./pages/Home";
import Products from "./pages/Products";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import ProductDetail from "./pages/ProductDetail";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div className="App" >
      <Container fluid className="position-relative">
        <Row className="sticky-top">
          <NavBar />
        </Row>
        <Row className="my-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
          <ToastComp />
        </Row>
        <Row >
          <Footer />
        </Row>
      </Container>
    </div>
  );
}

export default App;
