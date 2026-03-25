export default function ProductCard(props){

    const {item} = props

    return(<>
        <div className="product-card">
            <h3>{item.title}</h3>
            <img src={item.image} alt="" />
            <p>{item.price}</p>
        </div>

    </>)
}