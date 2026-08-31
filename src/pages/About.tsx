import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Seo } from "@/components/site/Seo";
import { Section } from "@/components/site/Section";
import { BRAND } from "@/data/site";

const VALUES = [
  { title: "Authenticity", copy: "Creators keep their own voice. Scripted, off-key brand copy doesn't work in these communities." },
  { title: "Respect", copy: "We brief brands on cultural context so campaigns land with respect, not clichés." },
  { title: "Transparency", copy: "Clear rates, clear deliverables, clear reporting — for brands and creators alike." },
  { title: "Long-term partnerships", copy: "Repeat, consistent creator relationships beat one-off bursts." },
];

const About = () => (
  <>
    <Seo
      title={`About ${BRAND.name} | UK Muslim Creator Agency`}
      description="Minara is a UK creator marketing agency focused on Muslim lifestyle audiences, connecting brands with creators their communities already trust."
      path="/about"
    />

    <Section
      eyebrow="About us"
      title="Built to connect brands with communities, properly."
      intro={`${BRAND.name} started from a simple observation: UK Muslim consumers are a large, young, highly engaged market, and most brands have no reliable way of reaching them through creators. Generalist agencies treat it as an afterthought. We treat it as the whole job.`}
    />

    <Section id="mission" tone="muted" eyebrow="Our mission" title="Relevance, not guesswork.">
      <div className="grid max-w-4xl gap-6 md:grid-cols-2">
        <p className="text-muted-foreground">
          We want brands to reach Muslim audiences through voices those audiences already follow and
          believe — and we want creators from these communities to be paid properly, briefed clearly
          and treated as professionals.
        </p>
        <p className="text-muted-foreground">
          That means saying no to campaigns that won't work, being upfront about what creator
          marketing can and can't deliver, and reporting only what is genuinely measurable.
        </p>
      </div>
    </Section>

    <Section eyebrow="Our values" title="How we work">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((v) => (
          <Card key={v.title} className="p-6">
            <h3 className="text-lg font-semibold">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.copy}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section tone="ink" eyebrow="Two audiences" title="Brands and creators, both looked after.">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-card p-6 text-card-foreground">
          <h3 className="text-xl font-semibold">For brands</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            A specialist partner for a market that rewards getting the details right.
          </p>
          <Button asChild className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/start-a-campaign">Start a Campaign</Link>
          </Button>
        </Card>
        <Card className="bg-card p-6 text-card-foreground">
          <h3 className="text-xl font-semibold">For creators</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Paid briefs that fit your niche, with terms agreed in writing before you create anything.
          </p>
          <Button asChild variant="outline" className="mt-6">
            <Link to="/join-as-creator">Join the Network</Link>
          </Button>
        </Card>
      </div>
    </Section>
  </>
);

export default About;
