import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Filter, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AUDIENCES, CATEGORIES, CITIES, DEMO_CREATORS, PLATFORMS, TIERS } from "@/data/site";

const ANY = "any";

export const CreatorMatcher = () => {
  const [category, setCategory] = useState(ANY);
  const [city, setCity] = useState(ANY);
  const [tier, setTier] = useState(ANY);
  const [platform, setPlatform] = useState(ANY);
  const [audience, setAudience] = useState(ANY);

  const results = useMemo(
    () =>
      DEMO_CREATORS.filter(
        (c) =>
          (category === ANY || c.category === category) &&
          (city === ANY || c.city === city) &&
          (tier === ANY || c.tier === tier) &&
          (platform === ANY || c.platforms.includes(platform)) &&
          (audience === ANY || c.audience.includes(audience)),
      ),
    [category, city, tier, platform, audience],
  );

  const filters = [
    { label: "Category", value: category, set: setCategory, options: [...CATEGORIES] },
    { label: "City", value: city, set: setCity, options: [...CITIES] },
    { label: "Follower tier", value: tier, set: setTier, options: TIERS.map((t) => t.name) },
    { label: "Platform", value: platform, set: setPlatform, options: [...PLATFORMS] },
    { label: "Audience", value: audience, set: setAudience, options: [...AUDIENCES] },
  ];

  return (
    <div>
      <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] md:p-6">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Filter className="h-4 w-4 text-accent" />
          Filter the network
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {filters.map((f) => (
            <label key={f.label} className="block text-sm">
              <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                {f.label}
              </span>
              <Select value={f.value} onValueChange={f.set}>
                <SelectTrigger aria-label={f.label}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ANY}>Any {f.label.toLowerCase()}</SelectItem>
                  {f.options.map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Showing {results.length} of {DEMO_CREATORS.length} illustrative profiles. These are
        placeholder examples of the kinds of creators in the network — not real creator data. We
        share a real, named shortlist once we have your brief.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {results.map((c) => (
          <Card key={c.id} className="flex flex-col gap-3 p-5">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{c.category}</Badge>
              <Badge variant="outline">{c.tier}</Badge>
            </div>
            <h3 className="text-base font-semibold leading-snug">{c.name}</h3>
            <p className="text-sm text-muted-foreground">{c.note}</p>
            <div className="mt-auto space-y-1.5 pt-2 text-xs text-muted-foreground">
              <p className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {c.city}
              </p>
              <p className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-accent" />
                {c.audience.join(", ")}
              </p>
              <p>{c.platforms.join(" · ")}</p>
            </div>
          </Card>
        ))}
      </div>

      {results.length === 0 && (
        <Card className="mt-6 p-8 text-center">
          <p className="text-muted-foreground">
            No illustrative profile matches that combination — the network is far larger than this
            sample. Tell us the brief and we will build the shortlist.
          </p>
        </Card>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to="/start-a-campaign">Request a Creator Shortlist</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/join-as-creator">Join as a Creator</Link>
        </Button>
      </div>
    </div>
  );
};
