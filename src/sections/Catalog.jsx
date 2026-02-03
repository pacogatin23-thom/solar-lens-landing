import { products } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Catalog() {
  return (
    <section id="catalogo" className="section">
      <div className="container">
        <div className="section__head">
          <h2>Modelos que salen siempre</h2>
          <p className="muted">
            No es relleno. Son los lentes que la gente realmente elige.
          </p>
        </div>

        <div className="products">
          {products.map((p) => (
            <ProductCard key={`${p.brand}-${p.model}`} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
