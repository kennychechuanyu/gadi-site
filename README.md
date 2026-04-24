# GADI Website

Website for the **Generalization Across Domains Initiative**, an international interdisciplinary research network.

- **URL:** [gadi-network.org](https://gadi-network.org)
- **Contact:** gadi.network@outlook.com
- **Tech stack:** [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)
- **Forms:** [Formspree](https://formspree.io/)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later

### Install and run locally

```bash
npm install
npm run dev
```

The site runs at `http://localhost:4321/`.

### Build for production

```bash
npm run build
```

Output goes to `dist/`.

---

## Project Structure

```
src/
  components/       Reusable Astro components (Header, Footer, PersonCard, etc.)
  data/
    people.ts        Team member data
    site-config.ts   Site name, nav, objectives, domains
  content/           Markdown content collections (events, news, resources)
  layouts/           Page layouts (BaseLayout, PageLayout)
  pages/             File-based routing (each file = one URL)
  styles/
    global.css       Global styles, CSS variables, animations
public/
  images/            Static images (logos, people photos)
  favicon.svg        Site favicon
tailwind.config.cjs  Tailwind CSS configuration
```

---

## Common Tasks

### Adding a new member

The site has two groups on the People page:

- **Coordinating Members** (roles: `"coordinator"` or `"steering"`)
- **Network Members** (role: `"member"`)

Edit `src/data/people.ts`. Add a new entry to the `people` array:

```typescript
{
  name: "First Last",
  title: "Dr.",
  institution: "University Name",
  department: "Department Name",      // optional
  country: "Country",
  email: "email@university.edu",
  role: "member",                     // "coordinator", "steering", or "member"
  photo: "/images/people/FL.jpg",     // optional, place photo in public/images/people/
  bio: "Short biography paragraph.",  // optional, shows as expandable "About"
},
```

**Roles explained:**
- `"coordinator"` — Network coordinator (currently Jonas Zaman). Shown first on the page.
- `"steering"` — Steering/coordinating committee member. Shown in the "Coordinating Members" section.
- `"member"` — General network member. Shown in the "Network Members" section.

**Photo:** Place the photo in `public/images/people/`. Use initials as filename (e.g., `FL.jpg`). Any aspect ratio works; it will be cropped to a circle. Recommended minimum size: 256x256px.

**Ordering:** The coordinator is listed first, followed by priority members (defined in `src/pages/people.astro`), then remaining members alphabetically by last name.

### Adding a news post

Create a Markdown file in `src/content/news/`:

```
src/content/news/my-post-title.md
```

With this frontmatter:

```markdown
---
title: "Post Title"
description: "Short description for SEO and previews."
date: 2026-06-15
author: "Author Name"         # optional
type: "announcement"           # "meeting-notes", "announcement", or "update"
featured: false                # optional, set true to highlight
---

Post content in Markdown here.
```

The post will automatically appear on the News page and at `/news/my-post-title`.

### Adding an event

Create a Markdown file in `src/content/events/`:

```
src/content/events/my-event.md
```

With this frontmatter:

```markdown
---
title: "Event Title"
description: "Short description."
date: 2026-09-01
endDate: 2026-09-03             # optional, for multi-day events
location: "Leuven, Belgium"
type: "conference"              # "conference", "workshop", "hackathon",
                                # "summer-school", "expert-meeting", or "webinar"
featured: false                 # optional
registrationUrl: "https://..."  # optional, adds a Register button
---

Event details in Markdown here.
```

The event will appear on the Events page. Upcoming events also show on the homepage. Past events are automatically moved to a separate section.

### Adding a resource

Create a Markdown file in `src/content/resources/`:

```
src/content/resources/my-resource.md
```

With this frontmatter:

```markdown
---
title: "Resource Title"
description: "What this resource is about."
domain: "Psychology"
author: "Author Name"           # optional
year: 2025                      # optional
url: "https://..."              # optional, external link
type: "paper"                   # "paper", "book", "dataset", "software",
                                # "tutorial", or "other"
---

Optional description in Markdown here.
```

### Editing site-wide settings

Edit `src/data/site-config.ts` to change:

- Site name, description, URL
- Contact email
- Navigation links
- Scientific domains
- Strategic objectives
- Member/country counts

---

## Forms (Formspree)

The site uses [Formspree](https://formspree.io/) to handle form submissions. Submissions are emailed to the GADI account.

| Form               | Page        | Formspree ID  |
|---------------------|-------------|---------------|
| Contact             | `/contact`  | `mjgjjngk`    |
| Membership          | `/community`| `mqewwreq`    |
| Discussion topics   | `/community`| `mlgaaqgn`    |
| Updates signup      | `/`, `/community` | `mqewwreq` (shared with membership) |

### Managing forms

1. Log into [Formspree](https://formspree.io/) with the GADI account
2. Each form has its own dashboard showing submissions
3. You can add email notifications, spam filters, and auto-responses there

### Changing a Formspree endpoint

Edit the `FORMSPREE_ID` or form URL at the top of the relevant page file:

- `src/pages/contact.astro` (contact form)
- `src/pages/community.astro` (membership + discussion forms)
- `src/pages/index.astro` (updates signup)

---

## Deployment

The site is a static Astro site. To deploy:

1. Run `npm run build` to generate `dist/`
2. Deploy `dist/` to any static hosting provider:
   - **Vercel:** Connect the GitHub repo, auto-detects Astro
   - **Netlify:** Connect the GitHub repo, set build command to `npm run build` and publish directory to `dist`
   - **GitHub Pages:** Use a GitHub Actions workflow to build and deploy

### Vercel (recommended for Astro)

```bash
npx vercel
```

Or connect the repo at [vercel.com](https://vercel.com/) for automatic deploys on every push.

---

## Design System

- **Display font:** Cormorant Garamond (serif, for headings)
- **Body font:** Sora (sans-serif, for text)
- **Primary accent:** Indigo (`#5a48a8`, from logo)
- **CTA accent:** Amber (`#c4832a`, from logo wordmark)
- **Backgrounds:** White (`#faf7f2`) and cream (`#f4efe6`)
- **Text:** Ink (`#0f1318`) and stone grays

Logo files are in `public/images/gadi-logo.svg` and `public/images/gadi-logo.png`.
