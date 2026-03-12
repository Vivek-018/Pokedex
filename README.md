## Pokedex Assignment App

This project is a small Pokedex-style assignment built with **Next.js App Router**, **tRPC**, **Prisma + PostgreSQL**, **React Query**, and **Material UI**.  
It is designed to be simple, readable, and close to what you would submit for a technical assignment.

### Overview

- **Part 1** – Lookup a single Pokémon by name.
- **Part 2** – Render a Pokedex table for a comma‑separated list of names.
- **Part 3** – Filterable, paginated Pokedex by Pokémon type.

The UI uses Material UI components with a light, clean theme and is responsive for both mobile and desktop.

### Screenshots

The app includes four main views. Screenshots are referenced from the `public/` folder with the following file names:

- `pokedex-home.png` – Home page with navigation to Part 1, Part 2, and Part 3.  
- `pokedex-part1.png` – Part 1 page showing single Pokémon lookup results.  
- `pokedex-part2.png` – Part 2 page showing the Pokedex table for multiple names.  
- `pokedex-part3.png` – Part 3 page showing the filterable, paginated Pokedex by type.

Example markdown references:

```markdown
![Home page](public/pokedex-home.png)
![Part 1 – single Pokémon](public/pokedex-part1.png)
![Part 2 – Pokedex table](public/pokedex-part2.png)
![Part 3 – filterable Pokedex](public/pokedex-part3.png)
```

Currently, the `public/pokedex-home.png` image is used as the primary preview for the assignment.

## Prerequisites

- Node.js 18+  
- A PostgreSQL database  
- `DATABASE_URL` configured in `.env` (see `.env.example`).

## Local setup

Install dependencies:

```bash
npm install
```

Run Prisma migrations and seed the database:

```bash
npx prisma migrate dev
npm run prisma:seed
```

Start the development server:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Build & deploy

To create a production build locally:

```bash
npm run build
npm start
```

On Vercel:

- Set `DATABASE_URL` in the project’s environment variables.
- Vercel will run `npm install` and `npm run build` automatically.  
No additional build steps are required beyond Prisma’s default generate hook.
