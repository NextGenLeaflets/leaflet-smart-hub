import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Mail, Music2 } from "lucide-react";
import { BRAND } from "@/data/site";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/about#mission", label: "Our Mission" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/services#creator-campaigns", label: "Creator Campaigns" },
      { to: "/services#creator-sourcing", label: "Creator Sourcing" },
      { to: "/services#ugc", label: "UGC" },
      { to: "/services#ambassadors", label: "Brand Ambassadors" },
      { to: "/services#affiliate", label: "Affiliate Campaigns" },
    ],
  },
  {
    title: "Industries",
    links: [
      { to: "/industries/food", label: "Food" },
      { to: "/industries/travel", label: "Travel" },
      { to: "/industries/fitness", label: "Fitness" },
      { to: "/industries/family", label: "Family" },
      { to: "/industries/fashion", label: "Fashion" },
      { to: "/industries/beauty", label: "Beauty" },
      { to: "/industries/lifestyle", label: "Lifestyle" },
    ],
  },
  {
    title: "Creators",
    links: [
      { to: "/join-as-creator", label: "Join the Network" },
      { to: "/join-as-creator#resources", label: "Creator Resources" },
      { to: "/faq#creators", label: "Creator FAQ" },
    ],
  },
  {
    title: "Brands",
    links: [
      { to: "/start-a-campaign", label: "Start a Campaign" },
      { to: "/for-brands#guide", label: "Campaign Guide" },
      { to: "/faq", label: "FAQs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/legal/privacy", label: "Privacy Policy" },
      { to: "/legal/cookies", label: "Cookie Policy" },
      { to: "/legal/terms", label: "Terms" },
      { to: "/legal/creator-terms", label: "Creator Terms" },
      { to: "/legal/brand-terms", label: "Brand Terms" },
    ],
  },
];

const SOCIALS = [
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://tiktok.com", label: "TikTok", Icon: Music2 },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "https://youtube.com", label: "YouTube", Icon: Youtube },
];

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_3fr]">
        <div>
          <span className="display inline-flex items-baseline gap-1 text-2xl font-extrabold">
            {BRAND.name.toLowerCase()}
            <span className="h-2 w-2 rounded-full bg-accent" />
          </span>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            A UK creator network connecting brands with Muslim creators across food, travel, fitness,
            family, fashion, beauty and lifestyle.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-primary-foreground/20 p-2 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href={`mailto:${BRAND.email}`}
              aria-label="Email us"
              className="rounded-full border border-primary-foreground/20 p-2 transition-colors hover:border-accent hover:text-accent"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/50">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.to + link.label}>
                    <Link
                      to={link.to}
                      className="text-primary-foreground/80 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {BRAND.full}. All rights reserved.
        </p>
        <p>Campaigns follow applicable UK advertising rules on clear ad disclosure.</p>
      </div>
    </div>
  </footer>
);
