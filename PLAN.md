# Portfolio Site — Debopam Das

## Tech Stack
- **Next.js 16** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4**
- **gh-pages** for deployment

## Design Inspirations
- **hasque.com** — section-based layout (Experience, Projects, Contact)
- **zegzulka.com** — minimal, clean aesthetic, separate Play/Info pages

## Pages & Routes

| Route | Content |
|---|---|
| `/` (Home) | Hero → Experience → Projects → Contact (smooth scroll sections) |
| `/play` | Experiments gallery (numbered cards like hasque) |
| `/info` | Extended bio + résumé download + social links |

## Navigation
Sticky header with: `[Debopam Das] [Experience] [Projects] [Contact] [Play] [Info] [Résumé]`
- On home page: Experience, Projects, Contact scroll to sections
- Play → `/play`, Info → `/info`
- Résumé → downloads `/resume.pdf`

## Project Structure
```
portfolio/
├── next.config.ts          # Static export config (output: 'export')
├── package.json            # Scripts: dev, build, export, deploy
├── tsconfig.json
├── public/
│   ├── resume.pdf          # Placeholder — replace with real CV
│   └── .nojekyll           # Required for GitHub Pages
├── src/
│   ├── data/
│   │   └── profile.ts      # ALL content lives here — edit this one file
│   ├── components/
│   │   ├── Header.tsx       # Navigation bar
│   │   ├── Hero.tsx         # Name, title, bio
│   │   ├── Experience.tsx   # Work/education timeline
│   │   ├── Projects.tsx     # Project cards
│   │   ├── Contact.tsx      # Email, GitHub, Résumé links
│   │   └── Footer.tsx       # Copyright
│   └── app/
│       ├── layout.tsx       # Root layout (Header + Footer)
│       ├── page.tsx         # Home page (all sections)
│       ├── globals.css      # Theme variables + Tailwind
│       ├── play/
│       │   └── page.tsx     # Experiments page
│       └── info/
│           └── page.tsx     # Info page
```

## Data Layer
All content is centralized in `src/data/profile.ts`. Edit this file to update:
- Name, title, bio
- Experience entries
- Projects
- Experiments
- Social links
- Resume URL

## Deployment

### To update the site:
```bash
npm run export   # Build static site → /out
npm run deploy   # Push /out to gh-pages branch
```

### First-time setup:
1. Push code to `main` branch of `idk4whatamiusing/idk4whatamiusing.github.io`
2. Run `npm run deploy` to publish to `gh-pages` branch
3. Go to GitHub repo Settings → Pages → set source to `gh-pages` branch (root)
4. Site goes live at `https://idk4whatamiusing.github.io`

### Git repos:
- `main` branch: source code
- `gh-pages` branch: built static files (auto-managed by gh-pages)

## Key Config
- `next.config.ts`: `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`
- No `basePath` (deployed to user site `username.github.io`)
- `.nojekyll` file prevents GitHub Pages Jekyll processing
