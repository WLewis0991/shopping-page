
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useState, useEffect } from "react";

function App() {

  const[products, setProducts] = useState([])

  useEffect(() => {
  const getProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  getProducts();
}, []);

  return (
    <BrowserRouter>
      <AppRoutes products={products}/>
    </BrowserRouter>
  );
}

export default App;