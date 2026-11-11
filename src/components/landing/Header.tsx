import { useEffect, useState } from "react";
import Button from "../ui/Button";
import logo from "../../assets/ifunanyas-table-logo.svg";
import { nav, whatsappLink } from "../../data/content";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [solid, setSolid] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${solid ? "header--solid" : ""}`}>
      <a className="brand" href="#top" aria-label="Ifunanya’s Table, home">
        <img src={logo} alt="Ifunanya’s Table" />
      </a>
      <button className="burger" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
        {open ? "Close" : "Menu"}
      </button>
      <nav id="nav" className={`nav ${open ? "nav--open" : ""}`}>
        {nav.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <Button href={whatsappLink("Hello, I’d like to place an order.")}>Order or enquire</Button>
      </nav>
    </header>
  );
}
