import { PHONE } from "../data/products.js";

const wa = (text) => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value.trim();
    const modelo = e.target.modelo.value.trim();
    const mensaje = e.target.mensaje.value.trim();

    const texto =
      `Hola! Soy ${nombre || "___"}. ` +
      (modelo ? `Me interesa el modelo: ${modelo}. ` : "") +
      (mensaje || "Quiero consultar precio, stock y envío.");

    window.open(wa(texto), "_blank", "noopener");
  };

  return (
    <section id="contacto" className="section section--alt">
      <div className="container contact">
        <div>
          <h2>¿Te gustó alguno?</h2>
          <p className="muted">
            Escribinos y vemos stock, precio y envío. Rápido y sin compromiso.
          </p>

          <ul className="list">
            <li>📍 Neuquén y alrededores (editable)</li>
            <li>🕒 Horarios a coordinar (editable)</li>
            <li>📲 WhatsApp directo</li>
          </ul>

          <p className="note">*Demo portfolio: se ajusta a la operación real del cliente.</p>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <label>
            Nombre
            <input name="nombre" type="text" placeholder="Tu nombre" />
          </label>

          <label>
            Modelo que te gustó
            <input name="modelo" type="text" placeholder="Ej: Ray-Ban Original Wayfarer" />
          </label>

          <label>
            Mensaje
            <textarea name="mensaje" rows="4" placeholder="Quiero consultar precio, stock y envío..." />
          </label>

          <button className="btn btn--full" type="submit">
            Enviar por WhatsApp
          </button>

          <p className="small muted">Se abre WhatsApp con tu mensaje listo.</p>
        </form>
      </div>
    </section>
  );
}
