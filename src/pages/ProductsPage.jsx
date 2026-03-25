import ProductCard from "../components/ProductCard"

export default function ProductsPage(props) {
    const {products, cart, setCart, loading} = props

if (loading) {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
}

    return(<>
      <div className="products-container">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} cart={cart} setCart={setCart}/> 
        ))}
      </div>

    </>)
}