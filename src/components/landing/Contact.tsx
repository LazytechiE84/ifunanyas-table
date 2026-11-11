import Button from "../ui/Button";
import { EMAIL, INSTAGRAM, PHONE, whatsappLink } from "../../data/content";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <p className="eyebrow eyebrow--dark">Let’s get a table ready</p>
      <h2>Tell us what you’re <em>gathering for.</em></h2>
      <p>We take pre-orders only. Message us the date, the number of guests and what you have in mind, and we’ll reply on WhatsApp with options and a quote.</p>
      <Button href={whatsappLink("Hello, I’d like to pre-order. Here’s what I’m planning: ")}>Message us on WhatsApp</Button>
      <dl className="details">
        <div><dt>Call</dt><dd><a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a></dd></div>
        <div><dt>Instagram</dt><dd><a href={`https://instagram.com/${INSTAGRAM}`}>@{INSTAGRAM}</a></dd></div>
        <div><dt>Email</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
      </dl>
    </section>
  );
}
