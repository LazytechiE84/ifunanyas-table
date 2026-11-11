import { Header, Hero, About, Menu, Occasions, Contact, Footer } from "./components/landing";
import "./styles/tokens.css";
import "./styles/global.css";
import "./styles/landing.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Occasions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
