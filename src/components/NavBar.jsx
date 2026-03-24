 import { Link } from "react-router-dom"
 
 export default function NavBar(){

    return(<>
      <div className="navbar-div">
        <h1>Luma</h1>
        <div className="nav-links">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/products" className="nav-button">Products</Link>
          <Link to="/cart" className="nav-button">Cart</Link>
        </div>
      </div>
    </>)
 }
