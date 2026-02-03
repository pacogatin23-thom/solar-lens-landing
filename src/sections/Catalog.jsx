import { products } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Catalog() {
  return (
    <section id="catalogo" className="section">
      <div className="container">
        <div className="section__head">
          <h2>Catálogo destacado</h2>
          <p className="muted">
            5 modelos (marcas reales) con imágenes y CTA directo a WhatsApp.
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
