 import { Link } from "react-router-dom";

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
    <p>Cart</p>
    </>)
 }