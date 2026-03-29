export default function CartCard({ item, cart, setCart }) {

  function handleRemove() {
    const updatedCart = cart.filter(i => i.id !== item.id);
    setCart(updatedCart);
  }

  function increaseQty() {
    const updatedCart = cart.map(i => {
      if (i.id === item.id) {
        return { ...i, quantity: i.quantity + 1 };
      }
      return i;
    });
    setCart(updatedCart);
  }

  function decreaseQty() {
    const updatedCart = cart
      .map(i => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity - 1 };
        }
        return i;
      })
      .filter(i => i.quantity > 0); // removes item if it hits 0

    setCart(updatedCart);
  }

  return (
    <li className="cart-card">

      <div className="cart-img">
        <img src={item.image} alt={item.title} />
      </div>

      <div className="cart-info">
        <h4>{item.title}</h4>

        <div className="cart-quantity-controls">
          <button onClick={decreaseQty}>-</button>
          <span>{item.quantity}</span>
          <button onClick={increaseQty}>+</button>
        </div>

        <button className="remove-btn" onClick={handleRemove}>
          Remove
        </button>
      </div>

      <div className="cart-price">
        <p>${(item.quantity * item.price).toFixed(2)}</p>
      </div>

    </li>
  );
}