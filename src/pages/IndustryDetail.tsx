import { Link, useParams } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Seo } from "@/components/site/Seo";
import { Section } from "@/components/site/Section";
import { INDUSTRIES } from "@/data/site";

const IndustryDetail = () => {
  const { slug } = useParams();
  const industry = INDUSTRIES.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <Section
        eyebrow="Industries"
        title="We couldn't find that industry."
        intro="Browse all the sectors we work with instead."
      >
        <Button asChild>
          <Link to="/industries">All industries</Link>
        </Button>
      </Section>
    );
  }

  return (
    <>
      <Seo
        title={`${industry.title} Creator Marketing | Minara`}
        description={industry.blurb.slice(0, 155)}
        path={`/industries/${industry.slug}`}
      />

      <Section eyebrow="Industry" title={industry.title} intro={industry.blurb}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/start-a-campaign">{industry.cta}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/creator-network">See creator types</Link>
          </Button>
        </div>
      </Section>

      <Section tone="muted" eyebrow="Creator types" title="Who we'd put on your shortlist">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industry.creators.map((c) => (
            <Card key={c} className="p-5 text-sm font-medium">
              {c}
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Campaign ideas" title="Formats that work in this sector">
        <ul className="grid max-w-4xl gap-3 sm:grid-cols-2">
          {industry.campaigns.map((c) => (
            <li key={c} className="flex items-start gap-2.5 text-muted-foreground">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              {c}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="ink" title={`Planning a ${industry.title.toLowerCase()} campaign?`}>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to="/start-a-campaign">{industry.cta}</Link>
        </Button>
      </Section>
    </>
  );
};

export default IndustryDetail;
