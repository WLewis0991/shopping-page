import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function ProductsPage(props) {
  const { products, cart, setCart, loading } = props;

  const { id } = useParams();
  const navigate = useNavigate();

  const selectedProduct = products.find(p => p.id === Number(id));

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="products-container">

      {products.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          cart={cart}
          setCart={setCart}
        />
      ))}

      {/* 🔥 MODAL */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => navigate("/products")}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => navigate("/products")}
            >
              ✕
            </button>

            <img src={selectedProduct.image} alt={selectedProduct.title} />
            <h2>{selectedProduct.title}</h2>
            <p>${selectedProduct.price.toFixed(2)}</p>
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      )}

    </div>
  );
}