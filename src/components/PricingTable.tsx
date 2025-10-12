import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Basic",
    includes: "Your Leaflet GPS-tracked distributed + Campaign report",
    solo: "£75 / 1,000",
    shared: "£55 / 1,000",
    extra: "",
  },
  {
    name: "Standard",
    includes: "Basic package + Leaflet design + High-quality printing + QR code tracking + campaign report",
    solo: "",
    shared: "",
    extra: "",
    featured: true,
    quoteOnly: true,
  },
  {
    name: "Premium",
    includes: "Standard package + email retargeting",
    solo: "",
    shared: "",
    extra: "",
    quoteOnly: true,
  },
];

export const PricingTable = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <Card
          key={pkg.name}
          className={`p-6 relative ${
            pkg.featured
              ? "border-2 border-accent shadow-lg scale-105"
              : "border-border"
          }`}
        >
          {pkg.featured && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
          )}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-3">{pkg.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{pkg.includes}</p>
          </div>
          <div className="space-y-4 mb-6">
            {pkg.quoteOnly ? (
              <div className="text-center py-4">
                <p className="text-xl font-bold text-accent">Request Free Quote</p>
              </div>
            ) : (
              <>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Solo Distribution
                  </p>
                  <p className="text-lg font-semibold text-foreground">{pkg.solo}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Shared Distribution
                  </p>
                  <p className="text-lg font-semibold text-foreground">{pkg.shared}</p>
                </div>
                {pkg.extra && (
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Extra 1,000 Leaflets
                    </p>
                    <p className="text-lg font-semibold text-foreground">{pkg.extra}</p>
                  </div>
                )}
              </>
            )}
          </div>
          <Button
            onClick={scrollToContact}
            className="w-full"
            variant={pkg.featured ? "default" : "outline"}
          >
            Request Quote
          </Button>
        </Card>
      ))}
    </div>
  );
};
