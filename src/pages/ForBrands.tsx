import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Seo } from "@/components/site/Seo";
import { Section } from "@/components/site/Section";
import { BRAND, SERVICES } from "@/data/site";

const PROBLEMS = [
  "You know Muslim consumers are part of your market, but you don't know which creators genuinely reach them.",
  "Outreach takes weeks, and half the accounts never reply.",
  "It's hard to tell real community trust from inflated follower counts.",
  "Campaign messaging risks landing badly if the cultural context is missed.",
  "One-off posts happen, then nothing gets measured.",
];

const PROCESS = [
  { title: "Discovery call", copy: "We learn your product, audience, objective, timings and budget." },
  { title: "Strategy", copy: "We recommend the campaign type, creator tiers and platform mix that fit the objective." },
  { title: "Creator shortlist", copy: "Named creators with the reasoning behind each recommendation." },
  { title: "Your approval", copy: "You confirm the line-up and the brief before anything is booked." },
  { title: "Negotiation & contracts", copy: "Rates, deliverables, usage rights and dates agreed in writing." },
  { title: "Briefing", copy: "Clear creative direction, including required ad disclosure." },
  { title: "Content approvals", copy: "You review content before it goes live, where the agreement allows." },
  { title: "Go live & monitoring", copy: "We track posting, fix issues and keep the schedule on track." },
  { title: "Reporting", copy: "A report against the metrics agreed at the start." },
];

const SELECTION = [
  "Audience relevance to your target customer",
  "Engagement quality, not just volume",
  "Average views over recent content",
  "Content quality and production standard",
  "Brand fit and tone",
  "Previous collaborations and category conflicts",
  "Reliability and professionalism",
];

const PRICING = [
  "Creator tier and number of creators",
  "Deliverables per creator",
  "Usage rights and duration",
  "Campaign length",
  "Production requirements",
  "Travel or venue visits",
  "Paid amplification",
];

const ForBrands = () => (
  <>
    <Seo
      title="Muslim Influencer Marketing for Brands | Minara"
      description="Fully managed Muslim creator campaigns for UK brands: strategy, creator shortlists, negotiation, briefing, approvals and reporting."
      path="/for-brands"
    />

    <Section
      eyebrow="For brands"
      title="Muslim creator campaigns, run properly from brief to report."
      intro={`${BRAND.name} exists so you don't have to guess which creators genuinely reach Muslim audiences — or spend weeks chasing DMs to find out.`}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to="/start-a-campaign">Start a Campaign</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/creator-network">Browse the Creator Network</Link>
        </Button>
      </div>
    </Section>

    <Section tone="muted" eyebrow="The problem" title="Why brands struggle with this market">
      <ul className="grid max-w-4xl gap-4 md:grid-cols-2">
        {PROBLEMS.map((p) => (
          <li key={p} className="flex gap-3 rounded-xl bg-card p-5 text-sm text-muted-foreground">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {p}
          </li>
        ))}
      </ul>
    </Section>

    <Section id="guide" eyebrow="Our process" title="Nine steps, no surprises">
      <div className="grid gap-4 md:grid-cols-3">
        {PROCESS.map((s, i) => (
          <Card key={s.title} className="p-6">
            <span className="display text-3xl font-extrabold text-accent/30">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section tone="ink" eyebrow="Creator selection" title="How we choose who to recommend">
      <div className="grid gap-10 md:grid-cols-2">
        <ul className="space-y-3">
          {SELECTION.map((s) => (
            <li key={s} className="flex items-start gap-3 text-primary-foreground/80">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              {s}
            </li>
          ))}
        </ul>
        <div>
          <h3 className="text-xl font-semibold">You always have the final say</h3>
          <p className="mt-3 leading-relaxed text-primary-foreground/70">
            We explain why each creator is on the list, including where we have reservations. If a
            recommendation isn't right for your brand, we replace it. Nothing is booked without your
            written approval.
          </p>
        </div>
      </div>
    </Section>

    <Section eyebrow="Campaign types" title="What we can build for you">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <Card key={s.slug} className="p-6">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              {s.points.slice(0, 4).map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>

    <Section tone="muted" eyebrow="Pricing" title="How campaign pricing works">
      <div className="grid max-w-4xl gap-8 md:grid-cols-2">
        <div>
          <p className="text-muted-foreground">
            Creator marketing is quoted per campaign, because no two briefs cost the same. Your
            quote depends on:
          </p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {PRICING.map((p) => (
              <li key={p} className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Get a quote against your brief</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Send us the objective, audience, location and rough budget. We'll come back with a
            recommended approach and a clear cost breakdown — no obligation.
          </p>
          <Button
            asChild
            className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/start-a-campaign">Request a Proposal</Link>
          </Button>
        </Card>
      </div>
    </Section>
  </>
);

export default ForBrands;
