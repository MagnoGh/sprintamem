import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MapPin, Briefcase, GraduationCap, Star, Heart, MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface Professional {
  id: number;
  name: string;
  photo: string;
  role: string;
  city: string;
  area: string;
  skills: string[];
  education: string;
  experience: string;
  softSkills: string[];
  hobbies: string[];
}

interface ProfessionalModalProps {
  professional: Professional | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProfessionalModal = ({ professional, open, onOpenChange }: ProfessionalModalProps) => {
  if (!professional) return null;

  const handleRecommend = () => {
    toast.success(`Você recomendou ${professional.name}!`, {
      description: "A recomendação foi enviada com sucesso.",
    });
  };

  const handleMessage = () => {
    toast.success(`Mensagem para ${professional.name}`, {
      description: "Sua mensagem foi enviada com sucesso!",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Perfil Profissional</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img
              src={professional.photo}
              alt={professional.name}
              className="w-32 h-32 rounded-full border-4 border-primary/20"
            />
            <div className="space-y-3 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-foreground">{professional.name}</h2>
              <div className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
                <Briefcase className="h-5 w-5" />
                <span className="text-lg">{professional.role}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
                <MapPin className="h-5 w-5" />
                <span>{professional.city}</span>
              </div>
              <Badge className="text-sm">{professional.area}</Badge>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Formação Acadêmica
              </h3>
              <p className="text-muted-foreground">{professional.education}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Experiência Profissional</h3>
              <p className="text-muted-foreground">{professional.experience}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Habilidades Técnicas</h3>
              <div className="flex flex-wrap gap-2">
                {professional.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {professional.softSkills.map((skill, index) => (
                  <Badge key={index} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Hobbies e Interesses
              </h3>
              <div className="flex flex-wrap gap-2">
                {professional.hobbies.map((hobby, index) => (
                  <Badge key={index} variant="outline" className="bg-accent/50">
                    {hobby}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button 
              className="flex-1 gap-2" 
              onClick={handleRecommend}
            >
              <Star className="h-4 w-4" />
              Recomendar Profissional
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 gap-2"
              onClick={handleMessage}
            >
              <MessageCircle className="h-4 w-4" />
              Enviar Mensagem
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
