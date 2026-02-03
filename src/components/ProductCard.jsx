import { PHONE } from "../data/products.js";

const wa = (text) => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

export default function ProductCard({ p }) {
  const fullModel = `${p.brand} ${p.model}`;

  const onBuy = () => {
    const msg =
      `Hola! Quiero consultar stock y precio. Modelo: ${fullModel}. ` +
      `Precio visto: ${p.price}. ¿Me confirmás envío y medios de pago?`;
    window.open(wa(msg), "_blank", "noopener");
  };

  return (
    <article className="product">
      <div className="product__img">
        <img
          alt={fullModel}
          src={p.image}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="product__body">
        <span className="badge">{p.badge}</span>
        <h3>{p.model}</h3>
        <p>{p.desc}</p>

        <div className="specs">
          {p.specs.map((s) => (
            <span className="spec" key={s}>
              {s}
            </span>
          ))}
        </div>

        <p className="note">*Catálogo demo. Stock y precio final por WhatsApp.</p>
      </div>

      <div className="product__footer">
        <span className="price">{p.price}</span>
        <button className="btn btn--small" onClick={onBuy}>
          Consultar
        </button>
      </div>
    </article>
  );
}
