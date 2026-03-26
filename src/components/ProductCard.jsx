export default function ProductCard(props){

    const {item, cart, setCart} = props

function addToCart(product) {
  setCart(prevCart => {
    const existingItem = prevCart.find(item => item.id === product.id);

    if (existingItem) {
      return prevCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });
}

    const formatPrice = (price) => price.toFixed(2);

    return(<>
<div className="product-card">
  <div className="product-image">
    <img src={item.image} alt={item.title} />
  </div>

  <div className="product-info">
    <h3>{item.title}</h3>
    <p className="price">${item.price.toFixed(2)}</p>
    <button onClick={() => addToCart(item)}>Add to Cart</button>
  </div>
</div>

    </>)
}