# HyoTechConnect - Rede Profissional do Futuro

## Resumo do Projeto

TechConnect é uma plataforma web interativa desenvolvida como parte da Global Solution sobre "O Futuro do Trabalho". A aplicação simula uma rede profissional moderna, conectando talentos de diversas áreas e promovendo colaboração, desenvolvimento de competências e networking profissional.

A plataforma permite visualizar perfis detalhados de 60 profissionais fictícios, filtrar por área, cidade e tecnologia, além de interagir através de recomendações e mensagens. O projeto foi desenvolvido com foco em design responsivo, acessibilidade e experiência do usuário.

## Funcionalidades Principais

- **Listagem de Profissionais**: Visualização em cards com informações essenciais (nome, foto, cargo, cidade e principais habilidades)
- **Sistema de Busca**: Busca em tempo real por nome ou cargo do profissional
- **Filtros Avançados**: Filtragem por área de atuação, cidade e tecnologia/skill
- **Modal Interativa**: Visualização completa do perfil ao clicar no card, incluindo:
  - Informações pessoais e localização
  - Formação acadêmica
  - Experiência profissional
  - Habilidades técnicas (hard skills)
  - Competências comportamentais (soft skills)
  - Hobbies e interesses
- **Ações Interativas**: Botões funcionais para recomendar profissionais e enviar mensagens (com feedback visual via toasts)
- **Dark Mode**: Alternância entre modo claro e escuro para conforto visual
- **Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- **Animações Suaves**: Transições e efeitos visuais para melhor experiência

## Tecnologias Utilizadas

- **React 18** - Framework JavaScript para construção da interface
- **TypeScript** - Superset do JavaScript para tipagem estática
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utility-first para estilização
- **Shadcn/ui** - Biblioteca de componentes React acessíveis e customizáveis
- **Lucide React** - Biblioteca de ícones moderna
- **Sonner** - Sistema de notificações toast elegante
- **React Router DOM** - Gerenciamento de rotas

## Instruções de Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn instalado

### Passo a Passo

1. **Baixe e extraia o projeto**
   - Extraia o arquivo ZIP em uma pasta de sua preferência

2. **Navegue até a pasta do projeto**
   ```bash
   cd techconnect
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

5. **Acesse a aplicação**
   - Abra seu navegador e acesse: `http://localhost:8080`

### Comandos Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a versão de produção localmente
- `npm run lint` - Executa o linter para verificar o código

## Estrutura do Projeto

```
techconnect/
├── src/
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── ui/            # Componentes base do Shadcn
│   │   ├── Header.tsx     # Cabeçalho com busca e dark mode
│   │   ├── Filters.tsx    # Componente de filtros
│   │   ├── ProfessionalCard.tsx   # Card de profissional
│   │   └── ProfessionalModal.tsx  # Modal de detalhes
│   ├── data/
│   │   └── professionals.json     # Dados dos 60 profissionais
│   ├── pages/
│   │   ├── Index.tsx      # Página principal
│   │   └── NotFound.tsx   # Página 404
│   ├── App.tsx            # Componente raiz
│   ├── index.css          # Estilos globais e design system
│   └── main.tsx           # Ponto de entrada da aplicação
├── public/                # Arquivos públicos
├── index.html            # HTML principal
├── tailwind.config.ts    # Configuração do Tailwind
├── vite.config.ts        # Configuração do Vite
└── README.md            # Este arquivo
```

## Design System

O projeto utiliza um design system robusto com as seguintes características:

### Cores (Light Mode)
- **Primary**: Azul profissional (#3B82F6)
- **Accent**: Verde para ações positivas (#16A34A)
- **Background**: Cinza claro (#FAFAFA)
- **Cards**: Branco com sombras suaves

### Cores (Dark Mode)
- **Background**: Azul escuro (#0F172A)
- **Cards**: Tons de azul mais claros
- **Texto**: Branco suave para conforto visual

### Tipografia
- Font Family: Sistema nativo para performance
- Hierarquia clara de títulos e textos
- Tamanhos responsivos

### Componentes
- Botões com estados hover e active
- Cards com animação de elevação
- Modal com overlay e animações de entrada/saída
- Inputs com foco visual claro
- Badges para categorização

## Dados dos Profissionais

O arquivo `professionals.json` contém 60 perfis fictícios estruturados com:
- Informações pessoais (nome, foto, localização)
- Cargo e área de atuação
- Competências técnicas (4+ skills por profissional)
- Formação acadêmica completa
- Experiência profissional detalhada
- Soft skills (3 por profissional)
- Hobbies e interesses (3 por profissional)

## Versionamento

### Repositório no GitHub

**Link do Repositório**: https://github.com/MagnoGh/sprintamem.git

O projeto foi versionado com pelo menos 10 commits que documentam:
- Configuração inicial do projeto
- Implementação do design system
- Criação dos componentes principais
- Desenvolvimento do sistema de filtros
- Implementação do dark mode
- Adição dos dados JSON
- Ajustes de responsividade
- Refinamentos de UX
- Otimizações de performance
- Documentação final

## Integrantes do Grupo
- Mikael de Albuquerque Santana RM 566507
- Felipe Ramalho Junqueira Berto RM: 562148
- Otávio Magno RM: 566149 

## Observações Importantes

- A aplicação não requer usuários e senhas para acesso
- Todos os dados são fictícios e criados para fins educacionais
- As interações (recomendar e mensagem) exibem notificações de sucesso mas não persistem dados
- O dark mode é salvo na sessão do navegador
- A aplicação é totalmente client-side e não requer backend

## Melhorias Futuras

Possíveis expansões do projeto incluem:
- Sistema de autenticação real
- Integração com banco de dados
- Chat em tempo real
- Sistema de notificações
- Feed de publicações
- Conexões entre profissionais
- Recomendações baseadas em IA
- Exportação de perfis em PDF

## Licença

Este projeto foi desenvolvido para fins educacionais como parte da Global Solution da FIAP.

