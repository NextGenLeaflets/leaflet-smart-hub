import { Link } from "react-router-dom";
import { BRAND } from "@/data/site";

export const Logo = ({ inverted = false }: { inverted?: boolean }) => (
  <Link
    to="/"
    aria-label={`${BRAND.full} home`}
    className="group inline-flex items-baseline gap-1"
  >
    <span
      className={`display text-2xl font-extrabold tracking-tight ${
        inverted ? "text-primary-foreground" : "text-foreground"
      }`}
    >
      {BRAND.name.toLowerCase()}
    </span>
    <span className="h-2 w-2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
  </Link>
);
