<div align="center">

# NovaTech Solutions

**Corporate Website for a premier IT consulting firm**

[![Deploy to GitHub Pages](https://github.com/tienxdun/NovaTech_Website/actions/workflows/deploy.yml/badge.svg)](https://github.com/tienxdun/NovaTech_Website/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache_2.0-green.svg)](LICENSE)

[Live Demo](https://tienxdun.github.io/NovaTech_Website/) · [Report Bug](https://github.com/tienxdun/NovaTech_Website/issues) · [Request Feature](https://github.com/tienxdun/NovaTech_Website/issues)

<br/>

![NovaTech Solutions — Homepage](.github/assets/Home.png)

</div>

---

## Overview

NovaTech Solutions is a **fully responsive corporate website** showcasing an IT consulting firm's services, portfolio, team, and careers. The project emphasises clean UI, smooth animations, and production-ready CI/CD via GitHub Actions.

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero, services overview, team & contact |
| `/about` | **About** | Company story, mission and values |
| `/services` | **Services** | Detailed offerings — Network, Software, Data |
| `/projects` | **Projects** | Case studies and portfolio |
| `/careers` | **Careers** | Open positions and company culture |
| `/management` | **Project Management** | Interactive project timeline |

### Highlights

- Fully responsive, mobile-first layout
- Smooth page transitions with [Motion](https://motion.dev/)
- Icon set from [Lucide React](https://lucide.dev/)
- Client-side routing with React Router v7
- Zero-config CI/CD: auto-deploys to GitHub Pages on every push to `main`

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 19 |
| Language | TypeScript | 5.8 |
| Build tool | Vite | 6 |
| Styling | Tailwind CSS | v4 |
| Routing | React Router DOM | v7 |
| Animations | Motion | v12 |
| Icons | Lucide React | latest |

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/tienxdun/NovaTech_Website.git
cd NovaTech_Website

# 2. Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app starts at `http://localhost:3000` with Hot Module Replacement enabled.

### Production Build

```bash
npm run build     # type-check + bundle → dist/
npm run preview   # serve dist/ locally to verify
```

---

## Project Structure

```
NovaTech_Website/
├── public/
│   └── 404.html              # GitHub Pages SPA redirect handler
├── src/
│   ├── main.tsx              # Entry point
│   ├── App.tsx               # Router setup
│   ├── index.css             # Global styles
│   ├── components/
│   │   └── Layout.tsx        # Shared navbar, footer, scroll-to-top
│   └── pages/
│       ├── Home.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Projects.tsx
│       ├── Careers.tsx
│       └── ProjectManagement.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions CI/CD pipeline
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Deployment

The project ships with a ready-to-use **GitHub Actions** workflow that automatically builds and deploys to **GitHub Pages** on every push to `main`.

### Setup (one-time)

1. Go to **Settings → Pages** in your GitHub repository.
2. Set **Source** to `GitHub Actions`.
3. Push to `main` — the workflow takes care of the rest.

> **Forking?** Update `base` in `vite.config.ts` and `basename` in `src/App.tsx` to match your repository name.

### Workflow Overview

```
push to main
    └── build job
            ├── Checkout code
            ├── Setup Node.js 20
            ├── npm ci
            ├── Type-check (tsc --noEmit)
            ├── npm run build
            └── Upload artifact
    └── deploy job
            └── Deploy to GitHub Pages
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server on port 3000 |
| `npm run build` | Type-check and bundle for production |
| `npm run preview` | Serve `dist/` locally |
| `npm run lint` | TypeScript type-check (no emit) |
| `npm run clean` | Remove the `dist/` folder |

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

---

## License

Distributed under the [Apache 2.0 License](LICENSE). See `LICENSE` for more information.
