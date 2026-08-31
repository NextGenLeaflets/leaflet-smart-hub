import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Seo } from "@/components/site/Seo";
import { Section } from "@/components/site/Section";
import { BriefForm } from "@/components/site/BriefForm";
import { CREATOR_FAQS } from "@/data/site";

const BENEFITS = [
  "Paid brand collaborations matched to your niche",
  "Long-term partnerships, not just one-off posts",
  "Briefs from brands that already want to reach your audience",
  "Rates, deliverables and usage rights agreed in writing",
  "Support with negotiation so you're not undercharging",
  "Nano and micro creators genuinely welcome",
];

const RESOURCES = [
  { title: "Media kit basics", copy: "What brands actually want to see: audience, formats, recent performance and past work." },
  { title: "Rate setting", copy: "How to price by deliverable, usage rights and exclusivity rather than guessing." },
  { title: "Disclosure rules", copy: "Paid and gifted content must be clearly labelled as advertising in the UK. We'll remind you on every brief." },
  { title: "Working with brands", copy: "Turnaround times, revisions, approvals and how to keep a client for the long term." },
];

const JoinCreator = () => (
  <>
    <Seo
      title="Join Our Muslim Creator Network | Minara"
      description="Apply to join Minara's UK Muslim creator network for paid brand collaborations across food, travel, fitness, family, fashion, beauty and lifestyle. Free to join."
      path="/join-as-creator"
    />

    <Section
      eyebrow="For creators"
      title="Get paid brand work that fits your audience."
      intro="Joining is free. We review every application by hand and get in touch when a brief matches your niche, audience and location."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <ul className="space-y-3">
          {BENEFITS.map((b) => (
            <li key={b} className="flex items-start gap-3 text-muted-foreground">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              {b}
            </li>
          ))}
        </ul>
        <BriefForm variant="creator" />
      </div>
    </Section>

    <Section id="resources" tone="muted" eyebrow="Creator resources" title="Getting brand-ready">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {RESOURCES.map((r) => (
          <Card key={r.title} className="p-6">
            <h3 className="text-lg font-semibold">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.copy}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section eyebrow="Creator FAQs" title="Questions creators ask us">
      <div className="max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {CREATOR_FAQS.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`c${i}`}
              className="rounded-xl border border-border bg-card px-5"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  </>
);

export default JoinCreator;
