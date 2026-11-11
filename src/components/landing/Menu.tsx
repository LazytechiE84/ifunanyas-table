import Button from "../ui/Button";
import { categories, whatsappLink } from "../../data/content";

export default function Menu() {
  return (
    <section id="menu" className="menu">
      <p className="eyebrow">Find your favourite</p>
      <h2>A menu with roots.</h2>
      <p className="menu__sub">Browse by the way you want to gather.</p>
      <div className="cats">
        {categories.map((c) => (
          <details key={c.id} className="cat">
            <summary>
              <img src={c.image} alt={c.alt} loading="lazy" />
              <span className="cat__label">{c.label}</span>
              <span className="cat__title">{c.title}</span>
              <span className="cat__cue" aria-hidden="true">Dishes +</span>
            </summary>
            <ul>{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </details>
        ))}
      </div>
      <Button href={whatsappLink("Hello, could I see the full menu and price list?")}>View full menu</Button>
    </section>
  );
}
