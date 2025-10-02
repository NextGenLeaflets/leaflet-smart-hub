import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export const TestimonialCard = ({ quote, author }: TestimonialCardProps) => {
  return (
    <Card className="p-6 h-full bg-card border-border">
      <div className="flex mb-4 gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
        ))}
      </div>
      <blockquote className="text-foreground mb-4 leading-relaxed">
        "{quote}"
      </blockquote>
      <p className="text-sm font-medium text-muted-foreground">— {author}</p>
    </Card>
  );
};
