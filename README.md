# Shopix

Shopix is a responsive e-commerce frontend built around the [DummyJSON Products API](https://dummyjson.com/docs/products). It focuses on a clean shopping flow with URL-synchronized filters, product details, cart state, authentication, and reusable UI components.

Live demo: [nevo-shopix.vercel.app](https://nevo-shopix.vercel.app/)

## Features

- Browse products in a responsive catalog
- Filter products by category
- Sort products by name or price in ascending or descending order
- Persist filter and sort state in URL query parameters
- Paginated product results
- Product detail pages with reviews and actions
- Add products to a client-side cart
- Demo login flow with protected profile route
- Responsive navigation, dark mode, loading states, and toast feedback

## Tech stack

- React 19 and TypeScript
- Vite 7
- React Router 7
- TanStack Query
- Axios and DummyJSON API
- Zustand for authentication/cart state
- Zod and React Hook Form
- Tailwind CSS 4, shadcn/ui, Radix UI, and Base UI

## Getting started

### Prerequisites

- Node.js 20 or newer
- [Bun](https://bun.sh/), npm, or pnpm
- Internet access for DummyJSON API requests

### Installation

```bash
git clone https://github.com/iknevo/shopix.git
cd shopix
bun install
bun run dev
```

Open the local URL printed by Vite, normally [http://localhost:5173](http://localhost:5173).

No environment variables are required by the current implementation. API requests are made to DummyJSON through `src/lib/axios.ts`.

## Available scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the Vite development server |
| `bun run build` | Type-check and create a production build |
| `bun run preview` | Preview the production build |
| `bun run lint` | Run ESLint |
| `bun run typecheck` | Run TypeScript checks |
| `bun run format` | Format TypeScript and TSX files |

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Landing page and featured shopping content |
| `/shop` | Product catalog with pagination, category filter, and sorting |
| `/shop/:id` | Product details and reviews |
| `/categories` | Category browsing |
| `/cart` | Current shopping cart |
| `/login` | Demo authentication |
| `/profile` | Protected user profile page |

## Project structure

```text
src/
├── features/
│   ├── auth/             # Login and protected routes
│   ├── cart/             # Cart UI and state integration
│   ├── categories/       # Category browsing
│   ├── products/         # Product queries, filters, details, and pagination
│   └── profile/          # Protected profile page
├── components/           # Layout, home sections, navigation, and UI primitives
├── hooks/                # URL-backed filter state
├── lib/axios.ts          # DummyJSON Axios client
├── routes.tsx            # React Router configuration
├── state/                # Zustand stores
└── types/                # API and domain types
```

## Architecture notes

Product data is fetched with TanStack Query and keyed by category, pagination, and sorting parameters. `nuqs` keeps those controls synchronized with the URL, making a filtered catalog view linkable and preserving state during navigation. Zustand handles local authentication and cart state, while feature folders isolate API hooks from presentation components.

## License

No license file is currently included in the repository.
