 import { Link } from "react-router-dom"
 import CartImage from "../assets/shopping-cart.svg"
 
 export default function NavBar(props){
  const {cart} = props

  function getCartCount(cart) {
  return cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
}

    return(<>
      <div className="navbar-div">
        <Link to="/" className="navbar-logo"> <h1>Luma</h1> </Link>
        <div className="nav-links">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/products" className="nav-button">Shop</Link>
          <div className="cart-icon">
          <Link to="/cart" className="nav-button"><img src={CartImage} alt="cart image" className="cart-image"/>
          {getCartCount(cart) > 0 && (
          <span className="cart-badge">{getCartCount(cart)}</span>)}</Link>
          </div>
        </div>
      </div>
    </>)
 }
