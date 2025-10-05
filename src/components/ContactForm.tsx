import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast"; // keep your toast
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    contactName: "",
    businessName: "",
    telephone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        formData,
        "your_public_key"
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "We'll contact you within 24 hours.",
          });
          setFormData({
            contactName: "",
            businessName: "",
            telephone: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          toast({
            title: "Failed to send",
            description: "Please try again later.",
          });
          console.error("Email send error:", error);
        }
      );
  };

  return (
    <Card className="p-8 bg-card border-border max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* your existing inputs */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="contactName">Contact Name *</Label>
            <Input
              id="contactName"
              required
              value={formData.contactName}
              onChange={(e) =>
                setFormData({ ...formData, contactName: e.target.value })
              }
              className="bg-background"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="businessName">Business Name *</Label>
            <Input
              id="businessName"
              required
              value={formData.businessName}
              onChange={(e) =>
                setFormData({ ...formData, businessName: e.target.value })
              }
              className="bg-background"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="telephone">Telephone *</Label>
            <Input
              id="telephone"
              type="tel"
              required
              value={formData.telephone}
              onChange={(e) =>
                setFormData({ ...formData, telephone: e.target.value })
              }
              className="bg-background"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-background"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="bg-background min-h-[120px]"
            placeholder="Tell us about your campaign requirements..."
          />
        </div>

        <Button type="submit" size="lg" className="w-full">
          Request Free Quote
        </Button>
      </form>
    </Card>
  );
};
