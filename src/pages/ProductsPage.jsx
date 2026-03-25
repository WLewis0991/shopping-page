import ProductCard from "../components/ProductCard"

export default function ProductsPage(props) {
    const {products, cart, setCart} = props
    console.log(products)

    return(<>
      <div className="products-container">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} cart={cart} setCart={setCart}/> 
        ))}
      </div>

    </>)
}