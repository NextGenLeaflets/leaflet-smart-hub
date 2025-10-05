import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

export const ServiceCard = ({ icon: Icon, title, description, iconColor = "text-primary" }: ServiceCardProps) => {
  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border bg-card">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-xl bg-secondary">
          <Icon className={`w-8 h-8 ${iconColor}`} />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
};
