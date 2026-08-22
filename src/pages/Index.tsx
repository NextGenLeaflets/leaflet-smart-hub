import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  LineChart,
  MessageSquare,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Seo } from "@/components/site/Seo";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { BRAND, BRAND_FAQS, INDUSTRIES, SERVICES } from "@/data/site";
import heroImage from "@/assets/hero-creators.jpg";
import catFood from "@/assets/cat-food.jpg";
import catTravel from "@/assets/cat-travel.jpg";
import catFitness from "@/assets/cat-fitness.jpg";

const CATEGORY_CARDS = [
  { title: "Food & Drink", slug: "food", image: catFood, copy: "Halal dining, recipes and food products." },
  { title: "Travel", slug: "travel", image: catTravel, copy: "Muslim-friendly stays, cities and family trips." },
  { title: "Fitness", slug: "fitness", image: catFitness, copy: "Gym, combat sports, running and nutrition." },
];

const STEPS = [
  { icon: MessageSquare, title: "Tell us your goals", copy: "Objective, audience, location, timing and budget." },
  { icon: Search, title: "We match creators", copy: "A shortlist built on relevance, not follower count." },
  { icon: ClipboardList, title: "You approve", copy: "You review every creator and every brief before anything goes live." },
  { icon: Sparkles, title: "Content goes live", copy: "We coordinate production, approvals and posting dates." },
  { icon: LineChart, title: "You get reporting", copy: "Clear reporting against the metrics agreed up front." },
];

const WHY = [
  { title: "A specialist network", copy: "We focus on one ecosystem — UK Muslim lifestyle creators — instead of covering everything shallowly." },
  { title: "Culturally aware briefs", copy: "We help you avoid tone-deaf messaging and get the calendar, language and context right." },
  { title: "Relevance over reach", copy: "Nano and micro creators often outperform big accounts on trust and local impact." },
  { title: "Fully managed delivery", copy: "Strategy, sourcing, negotiation, briefing, approvals, monitoring and reporting." },
  { title: "Clear disclosure", copy: "Every paid or gifted collaboration is labelled as advertising, as UK rules require." },
  { title: "Honest reporting", copy: "We report what the platforms and tracking actually measure — no invented numbers." },
];

const Index = () => (
  <>
    <Seo
      title="Muslim Creator Marketing Agency UK | Minara"
      description="Minara connects UK brands with Muslim lifestyle creators across food, travel, fitness, family, fashion and beauty. Fully managed influencer campaigns and UGC."
      path="/"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: BRAND.full,
        url: BRAND.url,
        email: BRAND.email,
        areaServed: "GB",
        description:
          "UK creator marketing agency connecting brands with Muslim lifestyle creators.",
      }}
    />

    {/* Hero */}
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <img
        src={heroImage}
        alt="Muslim lifestyle creators filming content in a studio setting"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[var(--gradient-ink)] opacity-80" aria-hidden />
      <div className="container relative mx-auto px-4 py-24 md:py-36">
        <div className="max-w-3xl">
          <p className="eyebrow">UK Muslim creator marketing</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] md:text-6xl">
            Reach Muslim consumers through creators they already trust.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
            {BRAND.name} is a UK creator marketing agency built around Muslim lifestyle audiences.
            We match brands with the right creators across food, travel, fitness, family, modest
            fashion, beauty and lifestyle — then run the campaign end to end.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/start-a-campaign">
                Start a Campaign <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/join-as-creator">Join as a Creator</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-accent" /> Creator vetting on every campaign
            </span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-accent" /> Nano to large creators
            </span>
            <span className="flex items-center gap-2">
              <LineChart className="h-4 w-4 text-accent" /> Reporting you can check
            </span>
          </div>
        </div>
      </div>
    </section>

    {/* Intro */}
    <Section
      eyebrow="Who we are"
      title="A creator network built for one audience, properly."
      intro={
        <>
          Muslim consumers in the UK are a large, young and highly engaged market — and one that
          notices when marketing gets the tone wrong. {BRAND.name} works with creators from inside
          these communities, so your campaign arrives in a voice the audience already trusts.
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-3">
        {CATEGORY_CARDS.map((c, i) => (
          <Reveal key={c.slug} delay={i * 90}>
            <Link
              to={`/industries/${c.slug}`}
              className="group relative block overflow-hidden rounded-2xl"
            >
              <img
                src={c.image}
                alt={`${c.title} creator content`}
                loading="lazy"
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent" />
              <div className="absolute bottom-0 p-6 text-primary-foreground">
                <h3 className="text-xl font-bold">{c.title}</h3>
                <p className="mt-1 text-sm text-primary-foreground/80">{c.copy}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-8">
        <Button asChild variant="outline">
          <Link to="/industries">See all industries</Link>
        </Button>
      </div>
    </Section>

    {/* How it works */}
    <Section
      tone="muted"
      eyebrow="How it works"
      title="Five steps from brief to reporting."
      align="center"
    >
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <Card className="h-full p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                <s.icon className="h-5 w-5 text-accent" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Step {i + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* Services */}
    <Section
      eyebrow="Services"
      title="Whatever level of support you need."
      intro="Take the whole campaign off your hands, or just use us to find the right creators."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={i * 60}>
            <Card className="flex h-full flex-col p-6 transition-shadow hover:shadow-[var(--shadow-lift)]">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
              <Link
                to={`/services#${s.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* Why us */}
    <Section tone="ink" eyebrow="Why brands work with us" title="Specialists, not generalists.">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {WHY.map((w) => (
          <div key={w.title}>
            <h3 className="text-lg font-semibold">{w.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{w.copy}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to="/for-brands">See how we work with brands</Link>
        </Button>
      </div>
    </Section>

    {/* Industries strip */}
    <Section tone="muted" eyebrow="Industries" title="Where we do our best work.">
      <div className="flex flex-wrap gap-3">
        {INDUSTRIES.map((ind) => (
          <Link
            key={ind.slug}
            to={`/industries/${ind.slug}`}
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {ind.title}
          </Link>
        ))}
      </div>
    </Section>

    {/* FAQ */}
    <Section eyebrow="FAQs" title="Common questions from brands">
      <div className="max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {BRAND_FAQS.slice(0, 8).map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`q${i}`}
              className="rounded-xl border border-border bg-card px-5"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Button asChild variant="outline" className="mt-8">
          <Link to="/faq">Read all FAQs</Link>
        </Button>
      </div>
    </Section>

    {/* Final CTA */}
    <section className="section bg-[var(--gradient-emerald)] text-accent-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
          Ready to reach Muslim consumers properly?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-accent-foreground/80">
          Tell us your objective and we will come back with a creator approach that fits it.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <Link to="/start-a-campaign">Start a Campaign</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-accent-foreground/40 bg-transparent text-accent-foreground hover:bg-accent-foreground/10"
          >
            <Link to="/creator-network">Explore the Creator Network</Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Index;
