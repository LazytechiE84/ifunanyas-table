import { useEffect, useState } from "react";
import { gallery } from "../../data/content";

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div id="gallery" className="gallery">
      <p className="eyebrow">A few things we’ve made</p>
      <ul>
        {gallery.map((g, i) => (
          <li key={g.caption}>
            <button onClick={() => setOpen(i)} aria-label={`View larger: ${g.caption}`}>
              <img src={g.image} alt={g.alt} loading="lazy" />
              <span className="gallery__cap"><small>{g.tag}</small>{g.caption}</span>
            </button>
          </li>
        ))}
      </ul>
      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={gallery[open].caption} onClick={() => setOpen(null)}>
          <button className="lightbox__close" autoFocus onClick={() => setOpen(null)}>Close</button>
          <img src={gallery[open].image} alt={gallery[open].alt} />
        </div>
      )}
    </div>
  );
}
