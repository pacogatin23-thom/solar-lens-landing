export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="brand" href="#top">
          <span className="dot" /> SOLAR LENS
        </a>

        <nav className="nav__links">
          <a href="#catalogo">Catálogo</a>
          <a href="#garantia">Garantía</a>
          <a href="#faq">FAQ</a>
          <a className="btn btn--small" href="#contacto">
            Comprar
          </a>
        </nav>
      </div>
    </header>
  );
}
