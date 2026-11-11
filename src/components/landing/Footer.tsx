import logo from "../../assets/ifunanyas-table-logo.svg";
import { EMAIL, INSTAGRAM, PHONE, nav } from "../../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <span className="footer__logo"><img src={logo} alt="Ifunanya’s Table" /></span>
          <p>Good food. Open doors. A seat for you.</p>
        </div>
        <nav aria-label="Explore">
          <h3>Explore</h3>
          {nav.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <div>
          <h3>Say hello</h3>
          <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
          <a href={`https://instagram.com/${INSTAGRAM}`}>@{INSTAGRAM}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>
      <div className="footer__base">
        <small>© {new Date().getFullYear()} Ifunanya’s Table · Creative direction / Godswill Eteng</small>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
