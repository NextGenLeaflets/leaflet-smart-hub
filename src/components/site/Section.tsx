import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  tone?: "default" | "muted" | "ink";
  align?: "left" | "center";
  className?: string;
}

const tones = {
  default: "bg-background text-foreground",
  muted: "bg-secondary text-secondary-foreground",
  ink: "bg-primary text-primary-foreground",
};

export const Section = ({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "default",
  align = "left",
  className = "",
}: SectionProps) => (
  <section id={id} className={`section ${tones[tone]} ${className}`}>
    <div className="container mx-auto px-4">
      {(eyebrow || title || intro) && (
        <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && (
            <h2 className="mt-3 text-3xl font-bold leading-[1.1] md:text-[2.75rem]">{title}</h2>
          )}
          {intro && (
            <div
              className={`mt-5 text-lg leading-relaxed ${
                tone === "ink" ? "text-primary-foreground/75" : "text-muted-foreground"
              }`}
            >
              {intro}
            </div>
          )}
        </div>
      )}
      {children && <div className={eyebrow || title ? "mt-12" : ""}>{children}</div>}
    </div>
  </section>
);
