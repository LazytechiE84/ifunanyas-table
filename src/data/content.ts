import type { Category, GalleryItem, NavLink, Occasion } from "../types";

// From her existing menu artwork. The brand guide says to reconfirm before publishing.
export const PHONE = "+234 702 524 1694";
export const WHATSAPP = "2347025241694";
export const EMAIL = "ifunanyastable.care@gmail.com";
export const INSTAGRAM = "ifunanyas_table";

export const whatsappLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const nav: NavLink[] = [
  { label: "Our story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Catering", href: "#catering" },
  { label: "Gallery", href: "#gallery" },
];

export const categories: Category[] = [
  { id: "soups", label: "Soups", title: "Afang & more", image: "/images/soups.jpg", alt: "Soups and stews in clear tubs",
    items: ["Afang", "Egusi", "Efo riro", "Ofe onugbu", "Oha", "Chicken stew", "Turkey stew"] },
  { id: "rice", label: "Rice & trays", title: "Jollof & native", image: "/images/trays.jpg", alt: "Jollof rice in aluminium trays",
    items: ["Jollof rice", "Fried rice", "Ofada rice", "Ify’s special spaghetti"] },
  { id: "packs", label: "Meal packs", title: "Ready to share", image: "/images/party.jpg", alt: "Boxed jollof rice and chicken with coleslaw",
    items: ["Packed for every guest", "Sized to your celebration", "Ask us for a quote"] },
];

export const occasions: Occasion[] = [
  { title: "Celebrations", text: "Birthdays, anniversaries and cocktail nights." },
  { title: "Work gatherings", text: "Corporate events and team meals." },
  { title: "Family tables", text: "Church ceremonies and house parties." },
];

export const gallery: GalleryItem[] = [
  { image: "/images/hero.jpg", alt: "Rows of boxed jollof rice, chicken and slaw", tag: "Party packs", caption: "Made to share" },
  { image: "/images/soups.jpg", alt: "Soups and stews in clear tubs", tag: "Soups + stews", caption: "Cooked with care" },
  { image: "/images/ofada.jpg", alt: "Ofada rice and sauce in leaf-lined boxes", tag: "Ofada rice", caption: "Ready for the table" },
];
