# Portfolio — Sharlene Tang

Product Designer portfolio. React + Vite + Tailwind CSS v4.

## Commands
- `npm run dev` — start dev server (localhost:5173)
- `npm run build` — production build
- `npm run preview` — preview production build locally

## Stack
- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin, no config file)
- React Router v7 (client-side SPA routing)
- Framer Motion (page/scroll animations)
- Lucide React (icons)

## Path alias
`@/` maps to `src/`. Use it everywhere — no relative `../` imports.

## Routes
| Path | Component | Notes |
|------|-----------|-------|
| `/` | `HomePage` | Hero + CoreExpertise + FeaturedWorks |
| `/works` | `HomePage` | Same as `/` |
| `/works/counter-service` | `CounterServicePage` | Case study page |
| `/works/expense-approval` | `ExpenseApprovalPage` | Case study page — 大創百貨費用核銷 |
| `/works/:slug` | `ProjectPage` | Generic case study fallback |
| `/about` | `AboutPage` | |
| `/design-system` | `DesignSystemPage` | Living UI reference — see below |

## Structure
```
src/
  components/
    ui/        # Reusable atoms (Button, Tag)
    layout/    # Navbar, Footer, Layout wrapper
    sections/  # Page sections (Hero, CoreExpertise, FeaturedWorks)
  pages/       # Route-level components
  assets/
    images/    # SVG icons + PNG project images
    images/wdopa/  # Counter Service case study images
    images/dasio/  # Expense Approval case study images (hero-tablet.jpg, photo-dasio.png, img-dasio-01~05.png)
  lib/utils.ts # cn() helper for conditional Tailwind classes
```

## Design System page
`/design-system` → `src/pages/DesignSystemPage.tsx`

Living reference for all design tokens and UI components. Update this page whenever you add new tokens or components. Sections:
1. **Colors** — brand, surface, border, gradient swatches
2. **Typography** — font families + type scale
3. **Spacing & Layout** — `.section-px` breakpoints, border-radius, shadows
4. **Components** — Button, Tag, Divider, Expertise Card, Featured Works Card, Finding Card, Outcome Banner
5. **Animation** — Framer Motion scroll-reveal + orb animation tokens

## Design tokens
All tokens live in `src/index.css` under `@theme {}`.

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-brand` | `#1e1e1e` | Primary text, buttons |
| `--color-card-bg` | `#edeef2` | Featured Works card bg |
| `--color-tag-bg` | `#f7f7f7` | Tag background |
| `--color-tag-border` | `#e2e5eb` | Tag border |
| `--color-tag-text` | `#576376` | Tag text (generic) |
| `--color-footer-text` | `#585c5f` | Footer copy |
| `--color-divider` | `#d9d9d9` | `<hr>` / section lines |

Hardcoded (not tokenised yet):
- `#7718D6` — Featured Works tag text
- `#12a296` — Teal accent (Counter Service page)
- `#878787` — Muted/caption text
- `#fafafa` — Light card background
- `#2B2D31` — Dark UI elements

### Gradients
- Expertise card: `linear-gradient(155deg, #ffffff 6%, #F6EFFA 96%)`
- Hero image bg: `linear-gradient(to bottom, #e6e9ec 8%, #c4c8c9 85%)`

### Fonts
| CSS var | Family | Usage |
|---------|--------|-------|
| `--font-baskerville` | Libre Baskerville | Hero h1, section headers |
| `--font-poppins` | Poppins | UI headings, card titles |
| `--font-noto-tc` | Noto Sans TC | Chinese body copy |
| `--font-noto` | Noto Sans | EN labels, captions |

### Breakpoints
| Name | Width | Notes |
|------|-------|-------|
| `md` | 768px | Tailwind default |
| `xl` | 1280px | Tailwind default |
| `3xl` | 1920px | Custom — Figma design canvas size |

## Layout utility — `.section-px`
Responsive horizontal padding + max-width centering. Applied to every full-width section.
```
Mobile  (<768px)  → padding-inline: 20px
Tablet  (≥768px)  → padding-inline: 40px
Desktop (≥1280px) → padding-inline: 80px; max-width: 1260px; margin: auto
3xl     (≥1920px) → padding-inline: 240px; max-width: none
```
Content width at desktop = 1100px (1260px container − 80px × 2 padding).

## Animation tokens (Framer Motion)
```ts
// Scroll reveal — used on all page sections
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}
// viewport: { once: true, margin: '-60px' }

// Background orbs (Layout.tsx)
// animate: { x: [0,50,-20,30,0], y: [0,-38,20,-12,0] }
// transition: { duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
```

## Tailwind v4 notes
- No `tailwind.config.js` — all config lives in `src/index.css`
- Tokens defined under `@theme {}`, utilities under `@layer utilities {}`
- Arbitrary values work as normal: `text-[18px]`, `bg-[#1e1e1e]`, `size-[24px]`

## Adding a new project case study
1. Create `src/pages/YourProjectPage.tsx` (use `CounterServicePage.tsx` as template)
2. Add route in `src/App.tsx` before the wildcard `/:slug` route
3. Add card entry to `projects` array in `src/components/sections/FeaturedWorks.tsx`
4. Drop images in `src/assets/images/your-project/`
