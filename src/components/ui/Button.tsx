import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "gold" | "link";
}

export default function Button({ href, children, variant = "gold" }: ButtonProps) {
  return <a className={`btn btn--${variant}`} href={href}>{children}</a>;
}
