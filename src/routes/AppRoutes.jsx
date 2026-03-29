import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CartPage from "../pages/CartPage";
import Homepage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import NotFound from "../pages/NotFound";


export default function AppRoutes(props) {
  const {products, cart, setCart, loading} = props



  return (
    <Routes>
      <Route element={<MainLayout cart={cart}/>}>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              loading={loading}
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/products/:id"
          element={
            <ProductsPage
              products={products}
              loading={loading}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}