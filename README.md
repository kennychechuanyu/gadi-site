# GADI website

Website of the Generalization Across Domains Initiative (GADI): https://gadi-psych.vercel.app

Built with Astro and Tailwind CSS and hosted on Vercel. Pushing to `main` deploys the site.

## Running it locally

```bash
npm install
npm run dev
```

`npm run build` builds the site into `dist/`.

## Where things are

- People: `src/data/people.ts`. Photos go in `public/images/people/`.
- Events: one Markdown file per event in `src/content/events/`. The available fields are in `src/content/config.ts`, and `generalisation-across-disciplines.md` is a full example with a programme, speakers and questions. Each event gets a page at `/events/<file name>/` and a calendar file at `/events/<file name>.ics`. Share images for events go in `public/images/og/` at 1200 by 630 px. Speaker photos go in `public/images/speakers/` and are set with `photo:` under each speaker; a speaker's `bio:` shows in the programme.
- Site name, menu and contact address: `src/data/site-config.ts`. Pages listed under `hiddenPages` are left out of the menus, and their files in `src/pages/` start with `_`.
- Forms go through Formspree: contact (`mjgjjngk`) on `/contact`; membership and updates (`mqewwreq`) on `/community`, the home page and event pages; discussion topics (`mlgaaqgn`) on `/community`.

Copyright GADI. All rights reserved.
