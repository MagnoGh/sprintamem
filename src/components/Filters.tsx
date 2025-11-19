import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface FiltersProps {
  selectedArea: string;
  setSelectedArea: (value: string) => void;
  selectedCity: string;
  setSelectedCity: (value: string) => void;
  selectedTech: string;
  setSelectedTech: (value: string) => void;
}

export const Filters = ({
  selectedArea,
  setSelectedArea,
  selectedCity,
  setSelectedCity,
  selectedTech,
  setSelectedTech,
}: FiltersProps) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select value={selectedArea} onValueChange={setSelectedArea}>
          <SelectTrigger>
            <SelectValue placeholder="Todas as áreas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as áreas</SelectItem>
            <SelectItem value="Tecnologia">Tecnologia</SelectItem>
            <SelectItem value="Design">Design</SelectItem>
            <SelectItem value="Marketing">Marketing</SelectItem>
            <SelectItem value="Gestão">Gestão</SelectItem>
            <SelectItem value="Dados">Dados</SelectItem>
            <SelectItem value="Produto">Produto</SelectItem>
            <SelectItem value="Vendas">Vendas</SelectItem>
            <SelectItem value="Finanças">Finanças</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedCity} onValueChange={setSelectedCity}>
          <SelectTrigger>
            <SelectValue placeholder="Todas as cidades" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as cidades</SelectItem>
            <SelectItem value="São Paulo">São Paulo</SelectItem>
            <SelectItem value="Rio de Janeiro">Rio de Janeiro</SelectItem>
            <SelectItem value="Belo Horizonte">Belo Horizonte</SelectItem>
            <SelectItem value="Curitiba">Curitiba</SelectItem>
            <SelectItem value="Brasília">Brasília</SelectItem>
            <SelectItem value="Porto Alegre">Porto Alegre</SelectItem>
            <SelectItem value="Florianópolis">Florianópolis</SelectItem>
            <SelectItem value="Recife">Recife</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedTech} onValueChange={setSelectedTech}>
          <SelectTrigger>
            <SelectValue placeholder="Todas as tecnologias" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as tecnologias</SelectItem>
            <SelectItem value="React">React</SelectItem>
            <SelectItem value="Python">Python</SelectItem>
            <SelectItem value="Node.js">Node.js</SelectItem>
            <SelectItem value="TypeScript">TypeScript</SelectItem>
            <SelectItem value="AWS">AWS</SelectItem>
            <SelectItem value="Figma">Figma</SelectItem>
            <SelectItem value="SQL">SQL</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
