import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Seo } from "@/components/site/Seo";
import { Section } from "@/components/site/Section";
import { INDUSTRIES } from "@/data/site";

const Industries = () => (
  <>
    <Seo
      title="Industries We Work With | Minara"
      description="Muslim creator campaigns for food and drink, travel, fitness, family, modest fashion, beauty and lifestyle brands across the UK."
      path="/industries"
    />

    <Section
      eyebrow="Industries"
      title="Sector-specific creator campaigns."
      intro="Each sector has its own creators, formats and seasonal moments. Here's where we work most."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((ind) => (
          <Card key={ind.slug} className="flex h-full flex-col p-6">
            <h2 className="text-xl font-semibold">{ind.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{ind.blurb}</p>
            <Link
              to={`/industries/${ind.slug}`}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all hover:gap-2.5"
            >
              Explore {ind.title} <ArrowRight className="h-4 w-4" />
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  </>
);

export default Industries;
