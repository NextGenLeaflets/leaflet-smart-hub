import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Seo } from "@/components/site/Seo";
import { Section } from "@/components/site/Section";
import { SERVICES } from "@/data/site";

const Services = () => (
  <>
    <Seo
      title="Creator Marketing Services | Minara"
      description="Creator campaigns, creator sourcing, UGC, ambassador programmes, affiliate campaigns, paid amplification and local creator campaigns for UK brands."
      path="/services"
    />

    <Section
      eyebrow="Services"
      title="Pick the level of support that fits your team."
      intro="Some brands want the whole campaign managed. Others just need the right creators found. Both are fine."
    >
      <div className="flex flex-wrap gap-3">
        {SERVICES.map((s) => (
          <a
            key={s.slug}
            href={`#${s.slug}`}
            className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {s.title}
          </a>
        ))}
      </div>
    </Section>

    {SERVICES.map((s, i) => (
      <Section
        key={s.slug}
        id={s.slug}
        tone={i % 2 === 0 ? "muted" : "default"}
        eyebrow={`Service 0${i + 1}`}
        title={s.title}
        intro={s.summary}
      >
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <ul className="grid gap-3 sm:grid-cols-2">
            {s.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {p}
              </li>
            ))}
          </ul>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground">
              Tell us what you need and we'll scope it against your objective, audience and budget.
            </p>
            <Button
              asChild
              className="mt-5 w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/start-a-campaign">{s.cta}</Link>
            </Button>
          </Card>
        </div>
      </Section>
    ))}
  </>
);

export default Services;
