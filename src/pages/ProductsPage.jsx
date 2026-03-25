import ProductCard from "../components/ProductCard"

export default function ProductsPage(props) {
    const {products} = props
    console.log(products)

    return(<>
    <p>Shopping</p>


      <div className="products-container">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} /> 
        ))}
      </div>

    </>)
}