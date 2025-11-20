import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Filters } from "@/components/Filters";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import { ProfessionalModal } from "@/components/ProfessionalModal";
import professionalsData from "@/data/professionals.json";

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

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedTech, setSelectedTech] = useState("all");
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const filteredProfessionals = (professionalsData as Professional[]).filter((prof) => {
    const matchesSearch = prof.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prof.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = selectedArea === "all" || prof.area === selectedArea;
    const matchesCity = selectedCity === "all" || prof.city === selectedCity;
    const matchesTech = selectedTech === "all" || 
                       prof.skills.some(skill => skill.toLowerCase().includes(selectedTech.toLowerCase()));
    
    return matchesSearch && matchesArea && matchesCity && matchesTech;
  });

  const handleCardClick = (professional: Professional) => {
    setSelectedProfessional(professional);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      
      <Filters
        selectedArea={selectedArea}
        setSelectedArea={setSelectedArea}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        selectedTech={selectedTech}
        setSelectedTech={setSelectedTech}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            {filteredProfessionals.length} {filteredProfessionals.length === 1 ? 'Profissional encontrado' : 'Profissionais encontrados'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProfessionals.map((professional) => (
            <ProfessionalCard
              key={professional.id}
              professional={professional}
              onClick={() => handleCardClick(professional)}
            />
          ))}
        </div>

        {filteredProfessionals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              Nenhum profissional encontrado com esses filtros.
            </p>
          </div>
        )}
      </main>

      <ProfessionalModal
        professional={selectedProfessional}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />

      <footer className="border-t mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm">© 2025 HyoTechConnect - Conectando pessoas, competências e propósito</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
