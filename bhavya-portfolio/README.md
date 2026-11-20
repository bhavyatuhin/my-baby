# Bhavya Thakor — Portfolio

A React + TypeScript + Vite portfolio built from scratch around the approved warm editorial design direction.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Update content later

Most portfolio copy and evidence entries live in `src/App.tsx`. The intentionally empty future-entry list is in `src/data/portfolio.ts`.

To add a new evidence item:
1. Put the image/PDF in `public/assets/`.
2. Add an object to the relevant list in `src/App.tsx` (or `futureEntries` in `src/data/portfolio.ts`).
3. Use a path beginning with `/assets/your-file-name.ext`.
4. Keep descriptions factual and based on the original evidence. Do not label an offer as a completed internship.

The empty future-entry examples are commented out, so they are not visible on the published site until you add real details.

## Current assets

- Original uploaded `Drifted` book cover.
- NASA Space Apps Galactic Problem Solver certificate.
- Internshala Certificate of Selection.
- WAW Distinguished Idea Award PDF.
- InAmigos Researcher internship offer PDF.
- Turning Point Community National Ambassador appointment PDF.
- Photograph of the Trailblazers Dreamtime Debate Competition certificate.
- Custom cinematic Paradigm Shift cover illustration (editorial project visual, not a NASA asset).

## Items intentionally awaiting source material

- Bhavya's portrait photograph.
- Veritas AI / BANGUJ Bridge certificate.
- Further debate certificates and MUN evidence/details.
- Additional organising / leadership evidence and other appointments.
- Final approved copy for any biographical details that need revision.

## Deployment

This is a standard Vite app. It can be deployed to GitHub Pages, Vercel or another static hosting provider. For GitHub Pages, configure the repository's Pages workflow and set Vite's `base` to the repository path if deploying under a project subpath.

## Design tokens

- Vintage Paper: `#EFE5D5`
- Deep Espresso: `#382B25`
- Muted Olive: `#77734B`
- Muted Beige: `#E5D8C4`
- Light Parchment: `#D9CDBB`
- Warm Taupe: `#75695D`
- Typography: Lora + Inter
