import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CartPage from "../pages/CartPage";
import Homepage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import NotFound from "../pages/NotFound";


export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}