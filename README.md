# 🎬 Play Watch TV

Plataforma de shows e festivais ao vivo — assista transmissões, line-ups e conteúdo exclusivo em um só lugar.

---

## 🛠 Stack tecnológica

| Área | Tecnologia |
|------|------------|
| **Framework** | [Next.js](https://nextjs.org/) 16 (App Router) |
| **UI** | [React](https://react.dev/) 19 |
| **Estilos** | [Tailwind CSS](https://tailwindcss.com/) v4 |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) 5 |
| **Fontes** | Google Fonts via `next/font` (Roboto, Mulish, Bebas Neue, Axiforma, Montserrat) |

---

## 📦 Instalação

### Pré-requisitos

- **Node.js** 18+ (recomendado 20+)
- **npm** ou **yarn** ou **pnpm**

### Passos

1. Clone o repositório e entre na pasta do projeto:

   ```bash
   cd play-watch-tv
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode o ambiente de desenvolvimento:

   ```bash
   npm run dev
   ```

   Acesse [http://localhost:3000](http://localhost:3000).

---

## 📜 Scripts

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Sobe o servidor de desenvolvimento (Next.js) |
| `npm run build` | Gera o build de produção |
| `npm run start` | Sobe o servidor de produção (após `build`) |
| `npm run lint` | Executa o ESLint no projeto |

---

## 📁 Estrutura principal

- **`src/app/`** — Rotas e layout (App Router)
- **`src/app/(web)/home/home-data.ts`** — Dados e tipos da home
- **`src/components/`** — Componentes reutilizáveis (cards, seções, UI, layout)
- **`public/images/`** — Imagens (favicon, in-live, artists, etc.)

Para arquitetura do projeto, escolha de bibliotecas, componentes reutilizáveis e design system, veja **[Arquitetura](docs/ARCHITECTURE.md)**.

---

## 📄 Licença

Projeto privado. Uso conforme definido pelo time do produto.
