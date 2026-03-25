export default function ProductCard(props){

    const {item, cart, setCart} = props

    function addToCart(){
        setCart(c => [...c,item])
    }

    return(<>
        <div className="product-card">
            <h3>{item.title}</h3>
            <img src={item.image} alt="" />
            <p>{item.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>

    </>)
}