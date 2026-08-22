import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { BRAND, CATEGORIES, CITIES, PLATFORMS } from "@/data/site";

const BUDGETS = [
  "Under £1,000",
  "£1,000 – £2,500",
  "£2,500 – £5,000",
  "£5,000 – £10,000",
  "£10,000+",
  "Not sure yet",
];

const OBJECTIVES = [
  "Awareness",
  "Product launch",
  "Footfall / local visibility",
  "Sales or sign-ups",
  "UGC content library",
  "Long-term ambassadors",
];

export const BriefForm = ({ variant = "brand" }: { variant?: "brand" | "creator" }) => {
  const [sent, setSent] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) {
      toast({
        title: "Please confirm consent",
        description: "We need your permission to contact you about this enquiry.",
        variant: "destructive",
      });
      return;
    }
    setSent(true);
    toast({
      title: variant === "brand" ? "Brief received" : "Application received",
      description: `We'll be in touch by email. You can also reach us at ${BRAND.email}.`,
    });
  };

  if (sent) {
    return (
      <Card className="p-8 text-center">
        <h3 className="text-2xl font-bold">Thank you.</h3>
        <p className="mt-3 text-muted-foreground">
          {variant === "brand"
            ? "We've received your brief. We'll review it and come back with next steps and, where relevant, a proposed shortlist."
            : "We've received your application. Applications are reviewed manually, and we'll contact you when a brief matches your niche and audience."}
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Prefer email?{" "}
          <a href={`mailto:${BRAND.email}`} className="font-medium text-accent hover:underline">
            {BRAND.email}
          </a>
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">{variant === "brand" ? "Your name" : "Full name"} *</Label>
            <Input id="name" name="name" required autoComplete="name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" required autoComplete="email" />
          </div>
        </div>

        {variant === "brand" ? (
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input id="company" name="company" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" name="website" placeholder="https://" />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="industry">Industry / category</Label>
                <Select name="industry">
                  <SelectTrigger id="industry">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="objective">Campaign objective</Label>
                <Select name="objective">
                  <SelectTrigger id="objective">
                    <SelectValue placeholder="Select an objective" />
                  </SelectTrigger>
                  <SelectContent>
                    {OBJECTIVES.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="location">Target location</Label>
                <Select name="location">
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="UK-wide">UK-wide</SelectItem>
                    {CITIES.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Approximate budget</Label>
                <Select name="budget">
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Select a range" />
                  </SelectTrigger>
                  <SelectContent>
                    {BUDGETS.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="handles">Social handles *</Label>
                <Input id="handles" name="handles" placeholder="@yourhandle" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mainPlatform">Main platform</Label>
                <Select name="mainPlatform">
                  <SelectTrigger id="mainPlatform">
                    <SelectValue placeholder="Select a platform" />
                  </SelectTrigger>
                  <SelectContent>
                    {PLATFORMS.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="niche">Content niche</Label>
                <Select name="niche">
                  <SelectTrigger id="niche">
                    <SelectValue placeholder="Select a niche" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City / region</Label>
                <Select name="city">
                  <SelectTrigger id="city">
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                  <SelectContent>
                    {CITIES.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                    <SelectItem value="Elsewhere in the UK">Elsewhere in the UK</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )}

        <div className="space-y-2">
          <Label htmlFor="message">
            {variant === "brand" ? "Tell us about your campaign" : "Tell us about your content"} *
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder={
              variant === "brand"
                ? "What are you promoting, who do you want to reach, and when do you need it live?"
                : "What do you post about, who is your audience, and what brand work have you done?"
            }
          />
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            id="consent"
            checked={consent}
            onCheckedChange={(v) => setConsent(v === true)}
            aria-describedby="consent-text"
          />
          <Label
            id="consent-text"
            htmlFor="consent"
            className="text-sm font-normal leading-relaxed text-muted-foreground"
          >
            I agree to {BRAND.name} contacting me about this enquiry and to the handling of my
            details as described in the Privacy Policy.
          </Label>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
        >
          {variant === "brand" ? "Send My Brief" : "Submit Application"}
        </Button>
      </form>
    </Card>
  );
};
