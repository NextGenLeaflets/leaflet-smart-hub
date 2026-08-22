import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const KEY = "minara-cookie-choice";

export const CookieBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setOpen(true);
  }, []);

  const choose = (value: "accepted" | "essential") => {
    localStorage.setItem(KEY, value);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-5">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-lift)] md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          We use essential cookies to run this site, and analytics cookies only with your consent.{" "}
          <Link to="/legal/cookies" className="underline hover:text-foreground">
            Cookie Policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={() => choose("essential")}>
            Essential only
          </Button>
          <Button size="sm" onClick={() => choose("accepted")}>
            Accept all
          </Button>
        </div>
      </div>
    </div>
  );
};
