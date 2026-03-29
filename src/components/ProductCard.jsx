import { Link } from "react-router-dom";
import { useState } from "react";
import Toast from "./Toast";

export default function ProductCard(props) {
  const { item, cart, setCart } = props;
  const [toastVisible, setToastVisible] = useState(false);

  function addToCart(product) {
    setCart(prevCart => {
      const existingItem = prevCart.find(i => i.id === product.id);

      if (existingItem) {
        return prevCart.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }  
    });
    setToastVisible(true);
  }

  return (
    <>
      <Link to={`/products/${item.id}`} className="product-link">
        <div className="product-card">
          <div className="product-image">
            <img src={item.image} alt={item.title} />
          </div>

          <div className="product-info">
            <h3>{item.title}</h3>
            <p className="price">${item.price.toFixed(2)}</p>
            <button
              onClick={(e) => {
                e.preventDefault(); // stops navigation
                addToCart(item);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      {/* Toast at the page level */}
      <Toast
        message="Added to cart!"
        show={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </>
  );
}