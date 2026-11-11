import Button from "../ui/Button";
import Gallery from "./Gallery";
import { occasions, whatsappLink } from "../../data/content";

export default function Occasions() {
  return (
    <section id="catering" className="catering">
      <article className="catering__card">
        <img src="/images/trays.jpg" alt="Jollof rice in aluminium catering trays" loading="lazy" />
        <div>
          <p className="eyebrow eyebrow--dark">Catering / made for the moment</p>
          <h2>Make room for everyone.</h2>
          <p>Office lunches · celebrations · family gatherings</p>
          <Button href={whatsappLink("Hello, I’d like to plan an event.")}>Plan your event</Button>
        </div>
      </article>
      <div className="catering__side">
        <p className="eyebrow">Occasions</p>
        <h2>Good food, all together.</h2>
        <ul className="tiles">
          {occasions.map((o) => (
            <li key={o.title}><h3>{o.title}</h3><p>{o.text}</p></li>
          ))}
        </ul>
        <Gallery />
      </div>
    </section>
  );
}
