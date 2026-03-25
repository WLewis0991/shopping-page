
export default function CartCard(props){
    
    const {item} = props

    return(<>
        <div className="cart-card">
            <h3>{item.title}</h3>
            <img src={item.image} alt="" />
            <p>{item.price}</p>
        </div>
    </>)
}