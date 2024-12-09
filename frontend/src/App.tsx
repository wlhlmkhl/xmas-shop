// src/App.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductInfo from "./Pages/ProductInfo";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<ProductInfo />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
