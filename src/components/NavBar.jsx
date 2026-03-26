 import { Link } from "react-router-dom"
 import CartImage from "../assets/shopping-cart.svg"
 
 export default function NavBar(props){
  const {cartSize} = props

    return(<>
      <div className="navbar-div">
        <Link to="/" className="navbar-logo"> <h1>Luma</h1> </Link>
        <div className="nav-links">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/products" className="nav-button">Shop</Link>
          <Link to="/cart" className="nav-button"><img src={CartImage} alt="cart image" className="cart-image"/>{cartSize}</Link>
        </div>
      </div>
    </>)
 }
