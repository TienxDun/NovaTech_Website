# NovaTech Solutions — Corporate Website

A modern corporate website for **NovaTech Solutions**, a fictional IT consulting firm. Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

---

## Live Demo

> Deployed via GitHub Pages — see the [Actions tab](../../actions) for the latest deployment status.

---

## Features

| Page | Description |
|---|---|
| **Home** | Hero section, services overview, team & contact |
| **About** | Company story, mission and values |
| **Services** | Detailed service offerings (Network, Software, Data) |
| **Projects** | Case studies and portfolio |
| **Careers** | Open positions and company culture |
| **Project Management** | Interactive project timeline |

Additional highlights:
- Fully responsive layout (mobile-first)
- Smooth page transitions powered by [Motion](https://motion.dev/)
- Icon set from [Lucide React](https://lucide.dev/)
- Client-side routing with React Router v7

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5.8 |
| Build tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Routing | React Router DOM v7 |
| Animations | Motion (Framer Motion) |
| Icons | Lucide React |
| AI integration | Google Generative AI SDK |
| Runtime (dev) | Express + better-sqlite3 |

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# 2. Install dependencies
npm install

# 3. Copy and fill in environment variables
cp .env.example .env
```

### Environment Variables

Create a `.env` file at the project root (never commit it):

```env
GEMINI_API_KEY=your_google_gemini_api_key_here
```

### Development

```bash
npm run dev
```

The app starts at `http://localhost:3000`.

### Production Build

```bash
npm run build       # outputs to dist/
npm run preview     # preview the production build locally
```

---

## Project Structure

```
.
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── src/
    ├── main.tsx          # Entry point
    ├── App.tsx           # Router setup
    ├── index.css         # Global styles
    ├── components/
    │   └── Layout.tsx    # Shared navbar, footer, scroll-to-top
    └── pages/
        ├── Home.tsx
        ├── About.tsx
        ├── Services.tsx
        ├── Projects.tsx
        ├── Careers.tsx
        └── ProjectManagement.tsx
```

---

## Deployment

The project is automatically deployed to **GitHub Pages** on every push to the `main` branch via the included [GitHub Actions workflow](.github/workflows/deploy.yml).

### Manual Deploy Steps

1. The `base` path is already configured in `vite.config.ts` as `/NovaTech_Website/` to match the GitHub Pages subdirectory. If you fork this repo under a different name, update that value accordingly.

2. Push to `main` — the workflow handles the rest.

### Required GitHub Settings

Go to **Settings → Pages** and set:
- **Source**: `GitHub Actions`

If you use the `GEMINI_API_KEY` at build time, add it as a **Repository Secret** under **Settings → Secrets and variables → Actions**.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server on port 3000 |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Serve the `dist/` folder locally |
| `npm run lint` | Run TypeScript type-check (no emit) |
| `npm run clean` | Remove the `dist/` folder |

---

## License

This project is licensed under the [Apache 2.0 License](LICENSE).
