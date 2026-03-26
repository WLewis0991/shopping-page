 import { Link } from "react-router-dom";
import CartCard from "../components/CartCard";

 export default function CartPage(props){

   const { cart , setCart} = props

   if (cart.length === 0) {
  return (
    <div className="empty-cart">
      <h2>Your Cart is Empty</h2>
      <p>Add some products to get started.</p>
      <br />
      <Link to="/products"> <button>Shop Now</button></Link>
    </div>
  );
}

    return(<>
          <div className="cart-container">
            <ul>
            {cart.map((item) => (
              <CartCard key={item.id} item={item} cart={cart} setCart={setCart}/> 
            ))}
            </ul>
            <div className="cart-total-container">Total</div>
          </div>
    </>)
 }