import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/site/Seo";
import { Section } from "@/components/site/Section";
import { INSIGHTS } from "@/data/site";

const Insights = () => (
  <>
    <Seo
      title="Muslim Marketing Insights & Guides | Minara"
      description="Practical guides on Muslim influencer marketing in the UK: choosing creators, measuring ROI, Ramadan and Eid campaigns, and disclosure rules."
      path="/insights"
    />

    <Section
      eyebrow="Insights"
      title="Guides on Muslim creator marketing."
      intro="Our editorial programme covers the questions brands and creators ask most. Articles are published here as they're written — tell us which you'd find most useful and we'll prioritise it."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {INSIGHTS.map((a) => (
          <Card key={a.title} className="flex h-full flex-col p-6">
            <Badge variant="secondary" className="w-fit">
              {a.topic}
            </Badge>
            <h2 className="mt-4 flex-1 text-lg font-semibold leading-snug">{a.title}</h2>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Coming soon
            </p>
          </Card>
        ))}
      </div>

      <Card className="mt-10 p-6 md:p-8">
        <h3 className="text-xl font-semibold">Want the campaign planning guide?</h3>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Send us your objective and we'll share how we'd plan the campaign — creator tiers, formats,
          timings and what to measure.
        </p>
        <Button asChild className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to="/contact">Request the guide</Link>
        </Button>
      </Card>
    </Section>
  </>
);

export default Insights;
