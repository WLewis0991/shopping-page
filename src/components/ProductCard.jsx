export default function ProductCard(props){

    const {item, cart, setCart} = props

    function addToCart(){
        setCart(c => [...c,item])
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
    <button onClick={addToCart}>Add to Cart</button>
  </div>
</div>

    </>)
}