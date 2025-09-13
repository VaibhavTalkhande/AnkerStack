// App.js
import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetailsPage from "./Pages/ProductDetail";
import NotFound from "./Pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
