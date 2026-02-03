export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section__head">
          <h2>Preguntas frecuentes</h2>
          <p className="muted">Respuestas cortas listas para web/WhatsApp (demo).</p>
        </div>

        <div className="grid">
          <div className="box">
            <h3>¿Son polarizados?</h3>
            <p className="muted">
              Algunos modelos sí. Consultá disponibilidad por WhatsApp.
            </p>
          </div>

          <div className="box">
            <h3>¿Hacen envíos?</h3>
            <p className="muted">
              Sí, coordinamos envío según tu zona y costo del correo/mensajería.
            </p>
          </div>

          <div className="box">
            <h3>¿Qué incluye la compra?</h3>
            <p className="muted">
              Lente + estuche (según disponibilidad). Confirmamos todo antes de cerrar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
