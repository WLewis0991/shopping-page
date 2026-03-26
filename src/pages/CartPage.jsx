import { Link } from "react-router-dom";
import CartCard from "../components/CartCard";

export default function CartPage(props){

  const { cart , setCart} = props

function findCartTotal() {
  let total = 0;
  cart.forEach(i => {
    total += i.quantity * i.price;
  });
  return total;
}

function findTax(){
  return (findCartTotal() * 0.0753).toFixed(2)
}

function findTotal() {
  return Number(findTax()) + 10 + Number(findCartTotal().toFixed(2));
}


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
    <div className="cart-page">
          <div className="cart-container">
            <ul className="cart-list">
            {cart.map((item) => (
              <CartCard key={item.id} item={item} cart={cart} setCart={setCart}/> 
            ))}
            </ul>
            <div className="cart-total-container">
              <p>Cart total : {findCartTotal().toFixed(2)}</p>
              <p>Shipping : $10.00 </p>
              <p>Tax (7.53%) : {findTax()} </p>
              <h3>Total: {findTotal().toFixed(2)}</h3>
            </div>
          </div>
    </div>
    </>)
 }