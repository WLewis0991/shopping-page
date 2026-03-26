
export default function CartCard(props){
    
    const {item} = props

    return(<>
        <li>
        <div className="cart-card">
            <h3>{item.title}</h3>
            <img src={item.image} alt="" />
            <p>Quantity: {item.quantity}</p>
            <p>{item.quantity * item.price}</p>
        </div>
        </li>
    </>)
}