# 📋 Task Manager - Monorepo

Um sistema completo de gerenciamento de tarefas desenvolvido com arquitetura de monorepo, utilizando as melhores práticas de desenvolvimento moderno e tecnologias de ponta.

## 🚀 Visão Geral

O **Task Manager** é uma aplicação full-stack moderna que permite gerenciar tarefas de forma eficiente. O projeto foi estruturado como um monorepo utilizando **Nx**, proporcionando uma experiência de desenvolvimento otimizada com compartilhamento de código, testes unificados e build otimizado.

### 🏗️ Arquitetura do Projeto

```
📦 task-manager-monorepo/
├── 🖥️  apps/                    # Aplicações principais
│   ├── 🔧 backend/              # API REST com Fastify
│   └── 🎨 frontend/             # Interface React com TanStack
├── 📚 packages/                 # Pacotes compartilhados
│   ├── 📝 contracts/            # Schemas e validações (Zod)
│   └── 🏢 domain/               # Entidades de domínio
└── ⚙️  configurações globais    # Nx, TypeScript, etc.
```

## 🛠️ Tecnologias Utilizadas

### Backend 🔧
- **🚀 Fastify** - Framework web ultra-rápido para Node.js
- **📊 PostgreSQL** - Banco de dados relacional robusto
- **🛡️ Zod** - Validação de schemas com TypeScript
- **📖 Swagger/Scalar** - Documentação automática da API
- **🔐 JWT** - Autenticação e autorização
- **🐳 Docker** - Containerização do banco de dados

### Frontend 🎨
- **⚛️ React 19** - Biblioteca para interfaces de usuário
- **🗺️ TanStack Router** - Roteamento type-safe
- **🔄 TanStack Query** - Gerenciamento de estado de servidor
- **🎨 Tailwind CSS** - Framework CSS utilitário
- **📋 React Hook Form** - Gerenciamento de formulários
- **🧩 Radix UI** - Componentes acessíveis
- **✨ Lucide React** - Ícones modernos

### Desenvolvimento e Ferramentas 🔨
- **🏗️ Nx** - Ferramentas de build para monorepo
- **📘 TypeScript** - Tipagem estática
- **⚡ Vite** - Build tool rápido
- **🧪 Vitest** - Framework de testes
- **🎯 Biome** - Linter e formatador
- **🔧 ESBuild** - Bundler ultra-rápido
- **🎨 Prettier** - Formatação de código
- **🐺 Husky** - Git hooks
- **📝 Commitizen** - Commits convencionais
- **🔍 CommitLint** - Validação de commits

## 🏛️ Padrões Arquiteturais

### Backend - Clean Architecture 🏗️
```
🔧 Backend Structure:
├── 📁 use-cases/        # Casos de uso (regras de negócio)
├── 📁 repositories/     # Interfaces de dados
├── 📁 services/         # Serviços de domínio
├── 📁 routes/           # Controladores HTTP
├── 📁 middlewares/      # Middlewares customizados
├── 📁 plugins/          # Plugins do Fastify
├── 📁 db/              # Configuração do banco
└── 📁 @types/          # Tipos TypeScript
```

### Frontend - Component-Based Architecture 🎨
```
🎨 Frontend Structure:
├── 📁 components/       # Componentes reutilizáveis
├── 📁 routes/           # Páginas da aplicação
├── 📁 hooks/            # Custom hooks React
├── 📁 http/             # Cliente HTTP e APIs
└── 📁 lib/              # Utilitários e helpers
```

#### 🧩 Padrão de Componentes Frontend

O frontend segue uma arquitetura **Model-View-ViewModel (MVVM)** combinada com **Design System baseado em CVA** (Class Variance Authority):

##### 📦 **Estrutura de Componentes Complexos**
```
📁 login-form/
├── 📄 index.ts              # Barrel export (ponto de entrada)
├── 📄 login-form.types.ts   # Definições de tipos TypeScript
├── 📄 login-form.schema.ts  # Validação com Zod
├── 📄 login-form.model.ts   # Lógica de negócio e estado
├── 📄 login-form.view.tsx   # Apresentação pura (UI)
└── 📄 login-form.viewmodel.tsx # Orquestração entre Model e View
```

##### 🎨 **Design System (UI Components)**
```typescript
// Exemplo: Button component usando CVA
const buttonVariants = cva(
  "base-styles", // estilos base
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-white",
        outline: "border bg-background"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3",
        lg: "h-10 px-6"
      }
    }
  }
)
```

##### 🔄 **Padrões de Implementação**

1. **📋 Model (Hooks customizados)**
   - Gerencia estado local e server state
   - Contém lógica de negócio
   - Integra com APIs via React Query

2. **🖼️ View (Componentes puros)**
   - Responsável apenas pela renderização
   - Recebe props tipadas do ViewModel
   - Sem lógica de negócio

3. **🔗 ViewModel (Orquestrador)**
   - Conecta Model e View
   - Gerencia interações do usuário
   - Coordena fluxo de dados

4. **🎨 UI Components (Atomic Design)**
   - **Atoms**: Botões, inputs, labels
   - **Molecules**: Fields, cards
   - **Organisms**: Forms, listas complexas
   - **Templates**: Layouts de página

### Packages - Domain-Driven Design 📚
- **📝 contracts**: Schemas de validação compartilhados (API contracts)
- **🏢 domain**: Entidades e tipos de domínio compartilhados

## 🚦 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- **📦 Node.js** (versão 18 ou superior)
- **📦 pnpm** (gerenciador de pacotes recomendado)
- **🐳 Docker** (para o banco de dados PostgreSQL)
- **🔧 Git** (para controle de versão)

## 🏃‍♂️ Executando Localmente

### 1️⃣ Clonando o Repositório
```bash
git clone https://github.com/ricardoaruiz/task-manager-monorepo.git
cd task-manager-monorepo
```

### 2️⃣ Instalando Dependências
```bash
# Instalar dependências de todo o monorepo
npm install
```

### 3️⃣ Configurando o Banco de Dados
```bash
# Iniciar PostgreSQL com Docker
cd apps/backend
docker compose up -d

# Verificar se o container está rodando
docker ps
```

### 4️⃣ Configurando Variáveis de Ambiente

#### Backend (.env)
```bash
# apps/backend/.env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/task_manager"
JWT_SECRET="your-super-secret-jwt-key"
PORT=3333
NODE_ENV=development
ALLOWED_ORIGINS=["http://localhost:4200"]
```

#### Frontend (.env)
```bash
# apps/frontend/.env
VITE_API_URL=http://localhost:3333
```

### 5️⃣ Executando as Aplicações

#### 🔥 Opção 1: Executar tudo simultaneamente
```bash
npm run all
```

#### 🎯 Opção 2: Executar individualmente
```bash
# Backend (porta 3333)
npm run backend

# Frontend (porta 4200)
npm run frontend
```

### 6️⃣ Acessando as Aplicações
- **🎨 Frontend**: http://localhost:4200
- **🔧 Backend API**: http://localhost:3333
- **📖 Documentação da API**: http://localhost:3333/docs

## 🧪 Executando Testes

```bash
# Executar todos os testes
nx run-many --target=test --all

# Executar testes com coverage
nx run-many --target=test --all --coverage

# Executar testes em modo watch
nx run-many --target=test --all --watch

# Executar testes de um projeto específico
nx test backend
nx test frontend
```

## 🏗️ Build e Deploy

### 📦 Build de Produção
```bash
# Build de todos os projetos
npm run build:all

# Build individual
nx build backend
nx build frontend
```

### 🚀 Scripts Disponíveis

```json
{
  "backend": "Inicia o servidor backend em modo desenvolvimento",
  "frontend": "Inicia o frontend em modo desenvolvimento", 
  "all": "Executa backend e frontend simultaneamente",
  "build:all": "Faz build de todos os projetos",
  "test": "Executa testes de todos os projetos",
  "lint": "Executa linting em todos os projetos",
  "format": "Formata código com Biome"
}
```

## 📂 Estrutura Detalhada do Projeto

### 🔧 Backend (Fastify + PostgreSQL)
- **Clean Architecture** com separação clara de responsabilidades
- **Type-safe APIs** com Zod e TypeScript
- **Documentação automática** com Swagger/Scalar
- **Middlewares customizados** para autenticação e validação
- **Repository Pattern** para abstração de dados
- **Use Cases** para lógica de negócio

### 🎨 Frontend (React + TanStack)
- **Component-based architecture** com componentes reutilizáveis
- **Type-safe routing** com TanStack Router
- **State management** eficiente com TanStack Query
- **Form handling** otimizado com React Hook Form
- **Design System** baseado em Tailwind CSS e Radix UI
- **Testing** abrangente com Vitest e Testing Library

### 📚 Packages Compartilhados
- **contracts**: Validações e schemas da API
- **domain**: Entidades e tipos de domínio

## 🔒 Padrões de Qualidade

### 📋 Code Quality
- **🔍 ESLint/Biome** - Linting rigoroso
- **🎨 Prettier** - Formatação consistente
- **📝 TypeScript** - Tipagem estática obrigatória
- **🧪 Testes** - Cobertura de testes automatizada

### 📦 Git Workflow
- **🔀 Conventional Commits** - Padrão de commits
- **🐺 Husky** - Pre-commit hooks
- **📋 CommitLint** - Validação de mensagens de commit
- **🔧 Lint-staged** - Lint apenas em arquivos modificados

### 🏗️ Monorepo Benefits
- **📦 Compartilhamento de código** entre projetos
- **🔄 Builds incrementais** e cache inteligente
- **🧪 Testes unificados** em todo o workspace
- **📚 Dependency management** centralizado

## 🤝 Contribuição

1. **🍴 Fork** o projeto
2. **🌿 Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **📝 Commit** suas mudanças (`git commit -m 'feat: add some AmazingFeature'`)
4. **📤 Push** para a branch (`git push origin feature/AmazingFeature`)
5. **🔄 Abra** um Pull Request

### 📋 Padrões de Commit
Utilizamos [Conventional Commits](https://conventionalcommits.org/):
- `feat`: nova funcionalidade
- `fix`: correção de bug
- `docs`: documentação
- `style`: formatação
- `refactor`: refatoração
- `test`: testes
- `chore`: tarefas de build/CI

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Ricardo Ruiz** - [@ricardoaruiz](https://github.com/ricardoaruiz)

## 🙏 Agradecimentos

- **Nx Team** - Pela excelente ferramenta de monorepo
- **Fastify Team** - Pelo framework web performático
- **TanStack Team** - Pelas ferramentas React de qualidade
- **Vercel** - Pelo Tailwind CSS

---

⭐ **Gostou do projeto? Deixe uma estrela!** ⭐