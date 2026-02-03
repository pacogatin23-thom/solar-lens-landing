import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

import Catalog from "./sections/Catalog.jsx";
import Guarantee from "./sections/Guarantee.jsx";
import FAQ from "./sections/FAQ.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Catalog />
        <Guarantee />
        <FAQ />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} Solar Lens</span>
          <span className="note">Demo portfolio: marcas reales, catálogo de ejemplo.</span>
          <a className="muted" href="#top">Volver arriba</a>
        </div>
      </footer>
    </>
  );
}
