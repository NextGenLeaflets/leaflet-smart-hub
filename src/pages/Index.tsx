import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PricingTable } from "@/components/PricingTable";
import { ContactForm } from "@/components/ContactForm";
import {
  Target,
  MapPin,
  Palette,
  BarChart3,
  Navigation,
  QrCode,
  Mail,
  Settings,
  Phone,
  MapPinned,
} from "lucide-react";
import heroImage from "@/assets/hero-leaflet-delivery.jpg";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Smarter Leaflet Marketing for Local Businesses
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-white/90">
            Leaflet marketing with GPS & QR tracking, email targeting, and results you can measure.
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/80">
            NextGen Leaflets combines trusted distribution methods with modern digital tracking.
            Whether you want your leaflet delivered solo or in a shared round, we ensure your
            campaign reaches the right people and generates measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 bg-accent hover:bg-accent/90"
            >
              Request a Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToPricing}
              className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30"
            >
              Learn About Our Packages
            </Button>
          </div>

          {/* Icon Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { icon: Target, label: "Targeted Delivery", color: "text-accent" },
            { icon: MapPin, label: "GPS-Tracked", color: "text-primary" },
            { icon: Palette, label: "Design & Print", color: "text-accent" },
            { icon: BarChart3, label: "Measurable Results", color: "text-primary" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <span className="text-sm font-medium text-white">{item.label}</span>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Why Local Businesses Choose NextGen Leaflets
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We specialise in Paisley & Glasgow, helping businesses connect directly with their
              communities. Unlike traditional leaflet companies, we combine reliable distribution
              with digital tools like QR code tracking and email retargeting, so you don't just hope
              your campaign worked—you can see the results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From leaflet design to distribution and digital follow-ups, we provide a complete
              marketing solution for local businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ServiceCard
              icon={Navigation}
              title="Leaflet Distribution"
              description="GPS-tracked, targeted delivery to ensure your leaflets reach the right hands."
            />
            <ServiceCard
              icon={Palette}
              title="Design & Print"
              description="Eye-catching leaflets professionally designed to represent your brand."
            />
            <ServiceCard
              icon={Target}
              title="Geodemographic Targeting"
              description="Deliver to the areas most likely to respond to your campaign."
            />
            <ServiceCard
              icon={QrCode}
              title="QR Code Tracking"
              description="Measure engagement and results with trackable QR codes."
            />
            <ServiceCard
              icon={Mail}
              title="Email Retargeting"
              description="Turn interest into repeat customers with follow-up campaigns."
            />
            <ServiceCard
              icon={Settings}
              title="Custom Campaigns"
              description="Tailored solutions designed around your specific business goals."
            />
          </div>

          <div className="text-center">
            <Button size="lg" onClick={scrollToPricing} className="px-8">
              See Full Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Packages Designed to Deliver Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Flexible options to suit every business, whether you want exclusive delivery or a
              shared round with other non-competing local businesses.
            </p>
          </div>

          <PricingTable />
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-foreground">
              Why NextGen Leaflets Is Worth Every Penny
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: MapPin,
                  title: "GPS-Tracked Delivery",
                  description: "Know exactly where your leaflets go.",
                },
                {
                  icon: Target,
                  title: "Targeted Areas",
                  description: "Reach households most likely to respond.",
                },
                {
                  icon: Navigation,
                  title: "Professional Team",
                  description: "Reliable distributors who represent your brand well.",
                },
                {
                  icon: Palette,
                  title: "Design & Print Services",
                  description: "High-quality, attention-grabbing leaflets.",
                },
                {
                  icon: QrCode,
                  title: "Digital Integration",
                  description: "QR codes and email follow-ups for measurable results.",
                },
                {
                  icon: MapPinned,
                  title: "Local Expertise",
                  description: "Deep knowledge of Paisley & Glasgow neighborhoods.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button size="lg" onClick={scrollToContact} className="px-8">
                Book Your Campaign Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            What Local Businesses Say About Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <TestimonialCard
              quote="NextGen Leaflets helped us reach the right customers, and the QR tracking showed us exactly how well the campaign worked!"
              author="Café Owner, Paisley"
            />
            <TestimonialCard
              quote="Our retargeting emails brought back repeat customers we didn't even know we had. Highly recommended."
              author="Salon Owner, Glasgow"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Ready to Grow Your Business Locally?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's design a campaign that gets your leaflets in the right hands—and your customers
              through the door.
            </p>
          </div>

          <ContactForm />

          <div className="mt-12 text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPinned className="w-5 h-5" />
              <span>Serving Paisley & Glasgow</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Phone className="w-5 h-5" />
              <a href="tel:07852555010" className="hover:text-primary transition-colors">
                07852555010
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:omer@nextgenleaflets.co.uk"
                className="hover:text-primary transition-colors"
              >
                omer@nextgenleaflets.co.uk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} NextGen Leaflets. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
