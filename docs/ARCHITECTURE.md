# Arquitetura do Projeto Play Watch TV

## Visão geral

O Play Watch TV é uma aplicação Next.js (App Router) que exibe uma página inicial de streaming de festivais e shows, com carrosséis de conteúdo, destaques ao vivo e anúncios. A arquitetura prioriza **componentes reutilizáveis** e um **design system** consistente.

---

## Estrutura de pastas

```
src/
├── app/                    # App Router (Next.js)
│   ├── (web)/home/         # Rota agrupada: dados da home
│   │   └── home-data.ts    # Tipos e dados (sem UI)
│   ├── globals.css         # Tokens CSS e utilitários globais
│   ├── layout.tsx          # Layout raiz + metadata + favicon
│   └── page.tsx            # Página inicial (composição de seções)
├── components/
│   ├── banners/            # Slider de anúncios, banners
│   ├── cards/              # Cards reutilizáveis (Line Up, Media, Nike, Tesla, etc.)
│   ├── layout/             # Header, Footer, PageShell
│   ├── sections/           # Seções de página (Hero, CarouselSection, ContentSection, etc.)
│   └── ui/                 # Componentes de UI base (Carousel, badges)
public/
├── images/                 # Imagens (favicon, in-live, artists, etc.)
└── icons/                  # Ícones SVG
```

- **Separação de dados e UI:** Os dados da home ficam em `home-data.ts`; a página apenas importa e passa para os componentes. Isso facilita mudanças de fonte (CMS, API) no futuro.
- **Componentes por domínio:** `cards/` para blocos de conteúdo, `sections/` para blocos de página, `ui/` para primitivos (carrossel, badge).

---

## Escolha de bibliotecas vs. componentes manuais

### O que é manual (sem lib externa)

- **Carrossel:** O `Carousel` em `components/ui/Carousel.tsx` é implementado com `overflow-x-auto`, drag com mouse e touch. Não usamos Swiper/Embla para manter o bundle leve e o comportamento alinhado ao design (scroll horizontal, sem paginação por “slide”).
- **Slider de anúncios:** O `AdSlider` usa `useState` para o índice ativo e `useEffect` com `setInterval` para transição automática (5s). Troca de slide é feita trocando a imagem e o CTA, sem lib de slider.
- **Cards:** Todos os cards (In Live, Line Up, Exclusive Content, Nike, Tesla, AirPods, etc.) são componentes React próprios, estilizados com Tailwind e tokens do `globals.css`. Isso garante controle total sobre dimensões, tipografia e acessibilidade.

### O que vem do ecossistema

- **Next.js:** Roteamento, SSR/SSG, `Image`, fontes com `next/font`.
- **Tailwind CSS (v4):** Estilos utilitários e tema (`@theme inline` em `globals.css`).
- **Fontes Google (next/font):** Roboto, Mulish, Bebas Neue, Axiforma, Montserrat etc., carregadas por componente quando necessário.

**Por que poucas libs de UI?** O escopo é uma home com carrosséis e cards bem definidos. Componentes manuais atendem aos requisitos de “Componentes Reutilizáveis” e “Design System” sem dependências pesadas e com total aderência ao layout e especificações (cores, tipografia, hover).

---

## Componentes reutilizáveis

- **Carousel:** Recebe `children` e `trackClassName`; usado em Line Up, Yesterday Shows, Exclusive Content, In Live, Watch Again. Um único comportamento de scroll/drag para todos os carrosséis.
- **CarouselSection:** Envelope que adiciona título (com variante `lineUp` ou `default`) e renderiza o `Carousel`. Garante padrão visual entre seções.
- **Cards:** Cada tipo de card (e.g. `LineUpArtistCard`, `InLiveCard`, `NikeCard`, `TeslaAnnouncementCard`) é um componente que recebe apenas as props necessárias (título, imagem, texto). São reutilizáveis em qualquer carrossel que use o mesmo tipo de dado.
- **AnnouncementBadge:** Badge “Announcement” + ícone usado em Tesla e Nike; evita duplicação de markup e estilo.
- **PageShell:** Limita largura, padding e fundo da página; usado em todas as páginas que seguem o mesmo layout.

Reutilização é incentivada por: (1) dados em `home-data.ts` tipados e passados por props; (2) componentes sem estado interno desnecessário; (3) estilos via classes Tailwind e classes utilitárias globais (ex.: `hover-lift`, `text-primary`).

---

## Design system

- **Cores:** Definidas em `globals.css` como variáveis CSS (`--background`, `--foreground`, `--text-primary`, `--accent-orange`, `--accent-red`) e expostas via `@theme inline` para o Tailwind. Cores adicionais (ex.: `#E96744`, `#FF2828`, `#C39E93`, `#FAFAFA`) são usadas inline onde o design exige valor exato.
- **Tipografia:** Famílias e pesos vêm de `next/font` (Roboto, Bebas Neue, Mulish, Axiforma, etc.); tamanhos e line-height seguem as especificações por componente (ex.: Roboto 400 14px para In Live; Bebas Neue 24px para Nike).
- **Espaçamento e layout:** `PageShell` e `CarouselSection` definem gaps e paddings; cards têm dimensões fixas (ex.: 440×288, 440×208) para alinhamento nos carrosséis.
- **Interação:** Classe global `hover-lift` aplica `transform: translateY(-5px)` e transição suave em botões e cards, garantindo comportamento consistente sem repetir CSS.

O design system é aplicado de forma incremental: novos componentes usam as mesmas variáveis e padrões (cores, fontes, hover) para manter consistência com os requisitos de UI/UX.
