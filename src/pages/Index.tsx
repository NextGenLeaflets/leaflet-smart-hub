import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PricingTable } from "@/components/PricingTable";
import { ContactForm } from "@/components/ContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
            NextGen Leaflets combines trusted distribution methods with modern digital tracking and online retargeting. We ensure your campaign reaches the right people and generates measurable results.
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
        </div>
      </section>

      {/* Icon Row Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Target, label: "Targeted Delivery", color: "text-accent" },
              { icon: MapPin, label: "GPS-Tracked", color: "text-primary" },
              { icon: Palette, label: "Design & Print", color: "text-accent" },
              { icon: BarChart3, label: "Measurable Results", color: "text-primary" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3">
                <div className="p-4 rounded-full bg-secondary">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
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
              iconColor="text-primary"
              title="Leaflet Distribution"
              description="GPS-tracked & targeted delivery to ensure your leaflets reach the right hands."
            />
            <ServiceCard
              icon={Palette}
              iconColor="text-accent"
              title="Design & Print"
              description="Eye-catching leaflets professionally designed to represent your brand."
            />
            <ServiceCard
              icon={Target}
              iconColor="text-primary"
              title="Geodemographic Targeting"
              description="Deliver to the areas most likely to respond to your campaign."
            />
            <ServiceCard
              icon={QrCode}
              iconColor="text-accent"
              title="QR Code Tracking"
              description="Measure engagement and results with trackable QR codes."
            />
            <ServiceCard
              icon={Mail}
              iconColor="text-primary"
              title="Email Retargeting"
              description="Turn interest into repeat customers with follow-up campaigns."
            />
            <ServiceCard
              icon={Settings}
              iconColor="text-accent"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <TestimonialCard
              quote="Our new coffee shop launch campaign was a huge success thanks to NextGen Leaflets. The GPS tracking gave us full confidence in the delivery, and we saw a clear rise in walk-ins during the first week!"
              author="☕ Café Owner – Glasgow West End"
            />
            <TestimonialCard
              quote="We picked specific residential areas to target, and it worked brilliantly. The team helped us design and print leaflets that stood out — we gained several new regular clients within days."
              author="🧽 Cleaning Service – Paisley"
            />
            <TestimonialCard
              quote="As a tutor, I needed to reach families nearby. The targeted leaflet campaign helped me fill all my available slots within two weeks. Amazing service!"
              author="📚 Private Tutor – Glasgow Southside"
            />
            <TestimonialCard
              quote="We'd tried leaflets before but never knew if they were actually delivered. With NextGen Leaflets, we could see every delivery on the GPS map. Professional and totally reliable."
              author="💅 Beauty Salon – Renfrew"
            />
            <TestimonialCard
              quote="We used their shared distribution option with other local businesses. It was affordable, and the QR tracking showed great engagement from the areas we wanted to target."
              author="🏠 Real Estate Agency – Paisley"
            />
            <TestimonialCard
              quote="The QR code tracking and email follow-ups made a big difference — we could see who was engaging with our offer. We'll definitely use NextGen Leaflets again."
              author="🏋️‍♂️ Gym & Fitness Studio – Glasgow City Centre"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            💬 Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What areas do you cover?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We specialise in Paisley and Glasgow, offering reliable local distribution across all nearby neighbourhoods.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How do I know my leaflets are actually being delivered?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Every campaign is GPS-tracked, and you'll receive a proof-of-delivery report so you can see exactly where your leaflets went.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What's the difference between solo and shared distribution?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-2"><strong>Solo Distribution:</strong> Only your leaflet is delivered — perfect for maximum visibility.</p>
                  <p><strong>Shared Distribution:</strong> Your leaflet goes out with up to three non-competing local businesses (e.g. salon, gym, café), making it more budget-friendly.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Can you help with leaflet design and printing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! We provide professional design and printing services to ensure your leaflets look sharp and attract attention.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How does the QR code tracking work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Each leaflet can include a unique QR code. When customers scan it, you can track engagement and follow up with email offers to boost conversions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What's the minimum quantity?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You can start from as little as 1,000 leaflets, with discounts available for larger campaigns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Can I target specific areas or audiences?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. We use geo-demographic tools to identify the most relevant areas for your business — helping you reach the right people.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How long does a campaign take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Most campaigns are completed within 3–5 days once printing is ready.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How do I get started?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Just request a free quote or book a consultation. We'll guide you through every step — from design to delivery and digital tracking.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
              <MapPinned className="w-5 h-5 text-primary" />
              <span>Serving Paisley & Glasgow</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Phone className="w-5 h-5 text-accent" />
              <a href="tel:07852555010" className="hover:text-primary transition-colors">
                07852555010
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
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
