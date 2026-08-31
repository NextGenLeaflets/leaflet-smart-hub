import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Seo } from "@/components/site/Seo";
import { Section } from "@/components/site/Section";

const EXAMPLES = [
  {
    title: "Halal restaurant launch",
    brief: "Fill a new city-centre restaurant in its opening fortnight.",
    approach: "A group of local food creators invited for opening-week visits, each posting short-form video with location tags.",
    measure: "Views, saves, profile taps, code redemptions and booked covers.",
  },
  {
    title: "Modest fashion collection drop",
    brief: "Build anticipation for a seasonal collection.",
    approach: "Styling-led creators seeded pre-launch, with try-on content timed to release day plus affiliate codes.",
    measure: "Reach, engagement rate, link clicks and code-attributed sales.",
  },
  {
    title: "Muslim-friendly hotel stay",
    brief: "Position a hotel for Muslim family travel.",
    approach: "Family travel creators hosted for a documented stay, producing a reusable UGC library alongside organic posts.",
    measure: "Views, saved posts, direct enquiries and asset reuse value.",
  },
  {
    title: "Sportswear ambassador programme",
    brief: "Move from one-off posts to consistent presence.",
    approach: "Four creators on a three-month retainer with a shared content calendar and monthly deliverables.",
    measure: "Monthly reach, follower growth, code usage and content volume.",
  },
];

const CaseStudies = () => (
  <>
    <Seo
      title="Campaign Examples & Case Studies | Minara"
      description="Illustrative examples of Muslim creator campaigns: restaurant launches, modest fashion drops, travel stays and ambassador programmes."
      path="/case-studies"
    />

    <Section
      eyebrow="Case studies"
      title="Campaign examples, honestly labelled."
      intro="We're a young agency and we won't invent client results. The examples below show how we structure campaigns and what we measure. As client work completes and permissions are in place, verified case studies will replace them here."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {EXAMPLES.map((e) => (
          <Card key={e.title} className="p-6">
            <p className="eyebrow">Illustrative example</p>
            <h2 className="mt-3 text-xl font-semibold">{e.title}</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-medium text-foreground">The brief</dt>
                <dd className="text-muted-foreground">{e.brief}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">The approach</dt>
                <dd className="text-muted-foreground">{e.approach}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">What we'd measure</dt>
                <dd className="text-muted-foreground">{e.measure}</dd>
              </div>
            </dl>
          </Card>
        ))}
      </div>
    </Section>

    <Section tone="ink" title="Want your campaign to be the first one featured here?">
      <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
        <Link to="/start-a-campaign">Start a Campaign</Link>
      </Button>
    </Section>
  </>
);

export default CaseStudies;
