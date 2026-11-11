import Button from "../ui/Button";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__copy">
        <p className="eyebrow eyebrow--dark">Nigerian food / made to gather</p>
        <h1>
          <span className="line">Come hungry.</span>
          <em className="line line--2">Leave with a story.</em>
        </h1>
        <p className="hero__lead">Tradition-rich dishes, made with care for your everyday table and your biggest occasions.</p>
        <div className="actions">
          <Button href="#menu">Explore the menu</Button>
          <Button href="#story" variant="link">Scroll to gather ↓</Button>
        </div>
      </div>
      <figure className="hero__photo">
        <img src="/images/hero.jpg" alt="Rows of boxed jollof rice, chicken and slaw" />
        <figcaption>Party packs · made to share</figcaption>
      </figure>
    </section>
  );
}
