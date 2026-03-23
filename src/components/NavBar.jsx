 import { Link } from "react-router-dom"
 
 export default function NavBar(){

    return(<>
    <p>NavBar</p>
      <div>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      </div>
    </>)
 }