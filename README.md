# Grey Ivy Luxury Apartments

A modern single-page React application for Grey Ivy Luxury Apartments, Guzape,
Abuja. This repository currently contains the initialized project scaffold —
the real site content is added on top of it.

## Tech stack

- **[React 19](https://react.dev/)** — UI library
- **[Vite 7](https://vite.dev/)** — build tool and dev server
- **JavaScript (JSX)** — no TypeScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling via the official Vite plugin
- **[Lucide React](https://lucide.dev/)** — lightweight icon set
- **ESLint** — linting

Deployed on **[Vercel](https://vercel.com/)** (zero-config: Vite is detected automatically).

## Project structure

```
grey-ivy/
├── public/              # Static assets served as-is (favicon, etc.)
├── src/
│   ├── assets/          # Images, photos, fonts, SVGs imported by components
│   ├── components/      # Reusable UI building blocks (Header, Footer, Button…)
│   ├── sections/        # Page sections composed from components (Hero…)
│   ├── data/            # Content/data modules (apartments, amenities…) — added later
│   ├── lib/             # Small helpers/utilities — added later
│   ├── App.jsx          # Root component / page layout
│   ├── main.jsx         # App entry point
│   └── index.css        # Tailwind import + global base styles
├── index.html           # HTML entry point
├── vite.config.js       # Vite + React + Tailwind config
└── eslint.config.js     # ESLint config
```

## Getting started

Requires **Node.js 20.19+ or 22.12+**.

### Installation

```bash
npm install
```

### Development

Start the dev server with hot-module reloading:

```bash
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

### Production build

Create an optimized build in `dist/`:

```bash
npm run build
```

### Production preview

Serve the built `dist/` locally to verify the production output:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Environment variables

Copy `.env.example` to `.env` (gitignored) and add any variables. Only names
prefixed with `VITE_` are exposed to the client bundle. **Never commit real
secrets** — no API keys, passwords, or credentials belong in this repository.
