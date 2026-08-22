import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const NAV = [
  { to: "/for-brands", label: "For Brands" },
  { to: "/creator-network", label: "Creator Network" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/insights", label: "Insights" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-4">
        <Logo />

        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <Link to="/join-as-creator">Join as a Creator</Link>
          </Button>
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/start-a-campaign">Start a Campaign</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-lg p-2 text-foreground hover:bg-secondary lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {[...NAV, { to: "/faq", label: "FAQ" }, { to: "/contact", label: "Contact" }].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-base font-medium ${
                  pathname === item.to ? "bg-secondary text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-2">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/start-a-campaign" onClick={() => setOpen(false)}>
                  Start a Campaign
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/join-as-creator" onClick={() => setOpen(false)}>
                  Join as a Creator
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
