# Elementum — React Website

Pixel-perfect React implementation of the Elementum Figma design.

## Tech Stack
- React 18 (Functional Components + Hooks)
- CSS Modules (scoped styles, zero runtime overhead)
- Vite (fast dev server + optimized builds)
- No unnecessary libraries — vanilla CSS for everything

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── assets/              # Static images (if any local ones needed)
├── components/
│   ├── Navbar/          # Sticky navbar with mobile drawer
│   ├── Hero/            # Full-viewport hero with team avatars
│   ├── About/           # Two-row about/progress section
│   ├── Services/        # Expandable service list
│   ├── Testimonials/    # Tabbed testimonial card
│   ├── Newsletter/      # Newsletter CTA section
│   ├── Footer/          # Multi-column footer
│   └── Shared/          # Button, SectionHeading
├── data/
│   └── siteData.js      # All content in one place — easy to edit
├── hooks/
│   ├── useScrollReveal.js   # IntersectionObserver fade-in
│   └── useNavScroll.js      # Navbar scroll state
├── styles/
│   └── globals.css      # CSS variables, reset, utilities
├── App.jsx
└── main.jsx
```

## Design Decisions

### CSS Modules over Styled Components
- Zero runtime overhead
- Scoped styles without name collisions
- Better IDE support for plain CSS

### CSS Variables for design tokens
All colors, spacing, fonts, shadows defined in `globals.css :root`
→ Easy theming, dark mode ready

### Responsive Typography with `clamp()`
```css
font-size: clamp(2rem, 5vw, 3.5rem);
```
→ Fluid scaling, no media query breakpoints needed for type

### IntersectionObserver for reveal animations
- `useScrollReveal` hook fires once per element
- CSS handles the transition (no JS animation frame)
- Add `.reveal` class to any element to auto-animate

### Image lazy loading
All `<img>` tags have `loading="lazy"` + `decoding="async"` for performance.

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option 2 — Vercel Dashboard
1. Push to GitHub
2. Import repo at vercel.com/new
3. Vercel auto-detects Vite — just click Deploy
4. Done ✓

`vercel.json` is already configured.

## Lighthouse Targets
- Performance: 95+
- Accessibility: 95+
- Best Practices: 100
- SEO: 95+

Key optimizations already included:
- `loading="lazy"` on all images
- `decoding="async"` on all images
- Skip-to-content link for keyboard users
- Semantic HTML5 landmarks
- `aria-*` attributes on interactive elements
- CSS-only animations (no layout thrash)
- Single vendor chunk split via Rollup

## Customization

Edit `src/data/siteData.js` to update:
- Navigation links
- Team member names/photos
- Services
- Testimonials
- Footer links + contact info
