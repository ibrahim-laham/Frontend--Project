import "./App.css";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Brand from "./pages/Brand";
import AboutUs from "./pages/AboutUs";
import ProductDetail from "./pages/ProductDetail";
import ToastComp from "./components/Toast";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <ToastComp />
      <Footer />
    </div>
  );
}

export default App;
