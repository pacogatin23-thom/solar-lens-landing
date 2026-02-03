import { PHONE } from "../data/products.js";

const wa = (text) => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="pill">Envíos • Cambios • Comprá sin complicarte</span>

          <h1>Lentes chetos para usar todos los días</h1>

          <p className="muted">
            Elegí el modelo, preguntá por WhatsApp y listo. Sin vueltas, sin carrito,
            como se compra de verdad.
          </p>

          <div className="hero__cta">
            <a className="btn" href="#catalogo">Ver los modelos</a>
            <a className="btn btn--ghost" href="#contacto">Hablar por WhatsApp</a>
          </div>

          <div className="stats">
            <div className="stat">
              <strong>Buena facha</strong>
              <span>modelos que se usan</span>
            </div>
            <div className="stat">
              <strong>Cómodos posta</strong>
              <span>para todo el día</span>
            </div>
            <div className="stat">
              <strong>WhatsApp directo</strong>
              <span>sin registro raro</span>
            </div>
          </div>
        </div>

        <aside className="card">
          <h3>Compra rápida</h3>
          <p className="muted">Elegí una marca y se abre WhatsApp con el mensaje listo.</p>

          <div className="chips">
            {[
              ["Ray-Ban", "Ray-Ban Original Wayfarer"],
              ["Versace", "Versace Medusa Icon"],
              ["Oakley", "Oakley Holbrook"],
              ["Dolce & Gabbana", "Dolce & Gabbana DG Logo"],
              ["Infinite Eyewear", "Infinite Eyewear Minimal"],
            ].map(([label, model]) => (
              <button
                key={label}
                className="chip"
                onClick={() =>
                  window.open(
                    wa(`Hola! Quiero consultar stock y precio. Modelo: ${model}.`),
                    "_blank",
                    "noopener"
                  )
                }
              >
                {label}
              </button>
            ))}
          </div>

          <a
            className="btn btn--full"
            target="_blank"
            rel="noopener"
            href={wa("Hola! ¿Qué modelos tenés en stock? Quiero precio y envío.")}
          >
            Escribir por WhatsApp
          </a>

          <p className="small muted">Tip: cambiás el número y queda listo para el cliente.</p>
        </aside>
      </div>
    </section>
  );
}
