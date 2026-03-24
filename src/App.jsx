import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())            
            .then(json=>console.log(json))

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;