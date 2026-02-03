import { PHONE } from "../data/products.js";

const wa = (text) => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="pill">Envíos • Cambios • Compra por WhatsApp</span>
          <h1>Lentes de sol con diseño, comodidad y estilo</h1>
          <p className="muted">
            Catálogo demo para mostrar cómo trabajamos landings con productos + CTA directa a WhatsApp.
            Marcas reales, catálogo de ejemplo.
          </p>

          <div className="hero__cta">
            <a className="btn" href="#catalogo">Ver catálogo</a>
            <a className="btn btn--ghost" href="#contacto">Hablar con un asesor</a>
          </div>

          <div className="stats">
            <div className="stat">
              <strong>WhatsApp</strong>
              <span>CTA 1 click</span>
            </div>
            <div className="stat">
              <strong>Diseño</strong>
              <span>responsive</span>
            </div>
            <div className="stat">
              <strong>Catálogo</strong>
              <span>con imágenes</span>
            </div>
          </div>
        </div>

        <aside className="card">
          <h3>Compra rápida</h3>
          <p className="muted">Tocás una marca y se abre WhatsApp con el mensaje listo.</p>

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
            href={wa("Hola! Quiero consultar lentes de sol. ¿Qué modelos tienen en stock?")}
          >
            Comprar por WhatsApp
          </a>

          <p className="small muted">Tip: cambiás el número real y listo.</p>
        </aside>
      </div>
    </section>
  );
}
