import { Seo } from "@/components/site/Seo";
import { Section } from "@/components/site/Section";
import { CreatorMatcher } from "@/components/site/CreatorMatcher";
import { CATEGORIES, CITIES, TIERS } from "@/data/site";

const CreatorNetwork = () => (
  <>
    <Seo
      title="UK Muslim Creator Network | Minara"
      description="Explore the kinds of Muslim creators in the Minara network by category, city, follower tier, platform and audience — then request a tailored shortlist."
      path="/creator-network"
    />

    <Section
      eyebrow="Creator network"
      title="Find the kind of creator your campaign needs."
      intro="Use the filters to see the shape of our network across categories, cities and follower tiers. Profiles shown here are illustrative examples; real, named shortlists are prepared for each brief."
    >
      <CreatorMatcher />
    </Section>

    <Section tone="muted" eyebrow="Network coverage" title="Categories, tiers and cities">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">Categories</h3>
          <p className="mt-3 text-sm text-muted-foreground">{CATEGORIES.join(" · ")}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Follower tiers</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            {TIERS.map((t) => (
              <li key={t.name}>
                <span className="font-medium text-foreground">{t.name}</span> — {t.range}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Cities we cover most</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            {CITIES.join(" · ")} — plus creators elsewhere across the UK.
          </p>
        </div>
      </div>
    </Section>
  </>
);

export default CreatorNetwork;
