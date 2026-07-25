# NorthPeak Digital - React Task 1 Build

One-page agency website built with React and Vite for the Digital Heroes training task. The site uses the existing palette and layout tokens from `src/index.css`, with reusable components for each page section.

## Structure

```text
src/
  components/
    BrandMark.jsx  - reusable NorthPeak logo mark
    Header.jsx     - sticky nav with scroll-driven active state
    Hero.jsx       - first viewport hero and contour visual
    Services.jsx   - service route cards
    Results.jsx    - proof and testimonial cards
    Pricing.jsx    - package cards
    Contact.jsx    - controlled form with client-side validation
    Footer.jsx     - required Digital Heroes credit line
  data.js          - navigation, services, results, pricing, and form options
  App.jsx
  index.css        - design tokens, colors, layout, and responsive styling
  main.jsx
```

## Task 1 Notes

- Built the complete NorthPeak Digital landing page as a React app.
- Kept the color palette, typography tokens, spacing, buttons, cards, and responsive rules in `index.css`.
- Componentized the page into header, hero, services, results, pricing, contact, and footer sections.
- Added accessible landmarks, section labels, skip link, form labels, validation messages, and active navigation state.
- Kept content centralized in `data.js` so the components stay simple.

## Active Nav Link

`Header.jsx` uses an `IntersectionObserver` watching `#top`, `#services`, `#results`, `#pricing`, and `#contact`. The visible section gets `.is-active` and `aria-current="page"` on its nav link.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production bundle is generated in `dist/`.

## Vercel Deploy

If you import the outer `digital_heroes` folder, Vercel can use the root `vercel.json` and will build the nested `northpeak` app.

If you import only the `northpeak` folder or set Vercel's Root Directory to `northpeak`, use these settings:

```text
Framework Preset: Vite
Install Command: npm install
Build Command: npm run build
Output Directory: dist
```

Do not set the build command to `vite build` directly. Use `npm run build` so Vercel runs the local Vite binary installed from `package.json`.
