# Fairwood Greens HOA — Homepage Redesign

A polished, mobile-first homepage for the **Fairwood Greens Homeowners'
Association** (Renton, WA), rebuilt as a modern civic/community portal.

Built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 ·
shadcn/ui-style components · Lucide icons**.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (type-checked)
```

---

## Design decisions

**Corporate-minimal, brand-accented.** The interface is carried by a neutral
system — **charcoal**, white, and cool light-grey — with **forest green and
heritage gold used only as accents** (primary buttons, links, badges, icon
hovers, small dividers). Dark charcoal anchors the utility bar, the meeting
date tile, the engagement band, and the footer; everything else stays light
and airy. This keeps the Fairwood Greens identity present without the green
dominating the page. Typography and the mark come straight from the brand
guide.

**Typography with two jobs.** `Libre Baskerville` (the wordmark's serif) is
reserved for display headings so the brand's established, civic character
carries through; `Inter` handles all body and UI text for maximum legibility
on phones. This keeps the "modern sans-serif" feel while preserving identity.

**A cinematic but restrained hero.** The hero runs an **auto-rotating photo
slider** (`public/hero/`, 6-second crossfade, pauses on hover, respects
`prefers-reduced-motion`) behind a **charcoal gradient overlay** so white
copy stays readable and the imagery reads as atmosphere, not decoration. The
real Fairwood Greens seal (`public/fw-hoa-logo.png`) sits on the right as a
compact **circular badge** — the square logo is clipped to a clean circle on
the dark background. Manual dot controls sit bottom-right (bottom-centre on
mobile). The header intentionally drops the logo and leads instead with a
**bold wordmark lockup** — "FAIRWOOD GREENS" over "HOMEOWNERS' ASSOCIATION"
with a slim gold→green accent bar — so the association name is the primary
identity in the navigation. Announcement cards use restrained, minimal SVG
headers (a faint topographic contour motif plus a single colored category
icon) rather than stock photography.

**Residents first.** The most common tasks — pay dues, submit a request, find
documents, see the next meeting — sit in a quick-action grid that overlaps the
hero, so nothing important is more than one tap away. The next meeting is
presented as structured data (date tile, time, location, agenda/calendar
actions), not a blog post. Urgent notices get a refined, dismissible banner.

**Accessibility baked in (WCAG 2.2 AA-conscious).**
- Semantic landmarks (`header`/`main`/`nav`/`footer`), logical heading order
  (one `h1`, section `h2`s, card `h3`s), and a "Skip to main content" link.
- Visible keyboard focus rings on every interactive element; icon-only
  controls carry `aria-label`s; search fields have real (`sr-only`) labels.
- ≥44px touch targets, `prefers-reduced-motion` support, and contrast-checked
  text (e.g. a darker "gold ink" token for gold labels on light surfaces).
- Accessible mobile navigation via a focus-trapped Radix Dialog sheet.
- No horizontal scroll, no floating chat widget, no empty filler sections.

---

## Component structure

```
src/
├─ app/
│  ├─ layout.tsx           # fonts (Inter + Libre Baskerville), metadata, skip link
│  ├─ page.tsx             # homepage composition
│  └─ globals.css          # design tokens (brand + shadcn), base styles, animations
├─ lib/
│  ├─ utils.ts             # cn() class merger
│  └─ site-content.ts      # all sample content (nav, quick actions, meeting, news, docs)
└─ components/
   ├─ ui/                  # shadcn-style primitives: button, card, badge, input, sheet
   ├─ brand/
   │  └─ brand-logo.tsx    # BrandEmblem (SVG roundel) + Wordmark lockup
   └─ site/
      ├─ site-header.tsx        # sticky header, utility bar, desktop nav, search toggle
      ├─ mobile-nav.tsx         # hamburger + slide-in sheet
      ├─ hero.tsx / hero-backdrop.tsx
      ├─ quick-actions.tsx
      ├─ community-alert.tsx    # dismissible (remembers via localStorage)
      ├─ upcoming-meeting.tsx
      ├─ news-events.tsx / announcement-card.tsx / card-banner.tsx
      ├─ documents-section.tsx
      ├─ engagement-section.tsx # ways to get involved + notification signup
      ├─ site-footer.tsx
      └─ section-heading.tsx    # reusable eyebrow + serif title
```

All content is centralized in `src/lib/site-content.ts`, so the HOA can update
copy, links, and data without touching component markup.

---

## Assets & information still needed from the HOA

The homepage ships with realistic **placeholder** content. To go live, we need:

**Imagery**
- The three **hero slider photos** in `public/hero/` are **Unsplash stock
  placeholders** (generic golf-course scenery), not Fairwood Greens itself.
  Please supply **3–5 genuine high-resolution community/course photos**
  (landscape, ≥2000px wide) to replace them, and confirm usage rights.
- The circular **logo** is integrated (`public/fw-hoa-logo.png`). A **vector
  (SVG) version** would render even crisper and allow a transparent
  background — recommended if available.
- Optional photos for the news cards and engagement section.

**Content & data**
- Real **navigation targets / URLs** and the **Resident Portal** login URL
  (all links are currently `#` placeholders).
- Confirmed **contact details**: office phone, 24/7 security line, and the HOA
  email (placeholders in use: office `(425) 555-0180`, security `(425) 555-0177`,
  `info@fairwoodgreenshoa.org`).
- Current **board-meeting schedule**, location, and the hybrid/virtual link.
- The actual **document library** (governing docs, minutes, agendas,
  financials, ARC guidelines, newsletters) and where they're hosted.
- Live **announcements / calendar** feed, or a CMS choice for staff to post.

**Integrations & compliance**
- **Dues payment** provider (e.g. the management company's portal or a
  payment processor) for "Pay HOA Dues".
- **Request / ARC submission** form or ticketing destination.
- **Email notification** service for the subscribe form (double opt-in).
- Final **Privacy Policy** and **Accessibility Statement** copy.
- Guidance on any **resident-only data** so nothing sensitive is exposed
  publicly (the current build intentionally shows none).
# fwhoa
