import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";

export const Layout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Sticky mobile CTA */}
      <div className="sticky bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <Link
          to="/start-a-campaign"
          className="rounded-xl bg-accent px-3 py-3 text-center text-sm font-semibold text-accent-foreground"
        >
          Start a Campaign
        </Link>
        <Link
          to="/join-as-creator"
          className="rounded-xl border border-border px-3 py-3 text-center text-sm font-semibold text-foreground"
        >
          Join as a Creator
        </Link>
      </div>

      <CookieBanner />
    </div>
  );
};
