import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { setProducts } from "./redux/productSlice";
import { Products } from "./assets/Products";
import Checkout from "./pages/Checkout";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(Products));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
