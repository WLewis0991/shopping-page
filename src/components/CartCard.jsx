
export default function CartCard(props){
    
    const {item} = props

    return(<>
        <li>
        <div className="cart-card">
            <h4>{item.title}</h4>
            <img src={item.image} alt="" />
            <p>Quantity: {item.quantity}</p>
            <p>{item.quantity * item.price}</p>
        </div>
        </li>
    </>)
}