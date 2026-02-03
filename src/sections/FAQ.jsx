export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section__head">
          <h2>Lo que siempre preguntan</h2>
          <p className="muted">Corto, al pie, y sin chamuyo.</p>
        </div>

        <div className="grid">
          <div className="box">
            <h3>¿Son originales?</h3>
            <p className="muted">
              Este es un catálogo demo para mostrar cómo laburamos.
            </p>
          </div>
          <div className="box">
            <h3>¿Cómo compro?</h3>
            <p className="muted">
              Elegís un modelo y hablás directo por WhatsApp.
            </p>
          </div>
          <div className="box">
            <h3>¿Hacen envíos?</h3>
            <p className="muted">
              Sí, se coordinan según la zona. Te pasamos todo antes de cerrar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
