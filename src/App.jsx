
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useState, useEffect } from "react";

function App() {

  const[products, setProducts] = useState([]);
  const[loading,setLoading] = useState(true);
  const[cart, setCart] = useState([]);

  useEffect(() => {
  const getProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }finally {
      setLoading(false); 
    }
  };

  getProducts();
}, []);

  return (
    <BrowserRouter>
      <AppRoutes products={products} cart={cart} setCart={setCart} loading={loading}/>
    </BrowserRouter>
  );
}

export default App;