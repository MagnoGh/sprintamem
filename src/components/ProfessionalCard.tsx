import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Briefcase } from "lucide-react";

interface Professional {
  id: number;
  name: string;
  photo: string;
  role: string;
  city: string;
  area: string;
  skills: string[];
}

interface ProfessionalCardProps {
  professional: Professional;
  onClick: () => void;
}

export const ProfessionalCard = ({ professional, onClick }: ProfessionalCardProps) => {
  return (
    <Card 
      className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src={professional.photo}
            alt={professional.name}
            className="w-24 h-24 rounded-full border-4 border-primary/10"
          />
          <div className="space-y-2 w-full">
            <h3 className="font-semibold text-lg text-foreground">{professional.name}</h3>
            <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
              <Briefcase className="h-4 w-4" />
              <span>{professional.role}</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{professional.city}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {professional.skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
